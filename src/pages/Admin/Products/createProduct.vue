<template>
  <div class="mx-auto container-admin mt-8 max-md:mt-3">
    <div class="text-[50px] text-color-2 font-great text-center max-md:text-2xl">
      Thêm sản phẩm
    </div>
    <el-form
        class="w-full p-3 responsive-form"
        :model="sizeForm"
        label-width="auto"
        size="large"
    >
      <el-form-item label="Tên sản phẩm" required>
        <el-input v-model="sizeForm.title" class="bg-color-white-2" placeholder="Nhập tên sản phẩm" />
      </el-form-item>

      <el-form-item label="Thương hiệu" required>
        <el-select
            v-model="sizeForm.brandId"
            clearable
            placeholder="Chọn thương hiệu"
            style="width: 100%"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Giá" required>
        <el-input v-model.number="sizeForm.price" class="responsive-input" placeholder="0" />
      </el-form-item>

      <el-form-item label="Giảm giá (%)" required>
        <el-input v-model.number="sizeForm.discount" placeholder="0" />
      </el-form-item>

      <!-- Upload ảnh với preview -->
      <el-form-item label="Ảnh sản phẩm" required>
        <div class="image-upload-container">
          <!-- Preview ảnh -->
          <div v-if="previewImage" class="image-preview-wrapper">
            <img
                :src="previewImage"
                alt="Product Image"
                class="preview-image"
            />
            <el-button
                type="danger"
                circle
                icon="Delete"
                size="small"
                class="remove-image-btn"
                @click="removeImage"
            />
          </div>

          <!-- Upload placeholder -->
          <div v-else class="upload-placeholder" @click="triggerFileInput">
            <el-icon class="upload-icon"><Picture /></el-icon>
            <p class="upload-text">Click để chọn ảnh</p>
            <p class="upload-hint">Hỗ trợ: JPG, PNG, GIF (Max 5MB)</p>
          </div>

          <!-- Hidden file input -->
          <input
              ref="fileInput"
              type="file"
              accept="image/*"
              class="hidden-file-input"
              @change="onFileChange"
          />

          <!-- Upload button -->
          <el-button
              type="primary"
              class="mt-3"
              @click="triggerFileInput"
              :loading="uploadingImage"
          >
            {{ uploadingImage ? 'Đang upload...' : (previewImage ? 'Chọn ảnh khác' : 'Chọn ảnh') }}
          </el-button>
        </div>
      </el-form-item>

      <el-form-item label="Nguồn gốc" required>
        <el-input v-model="sizeForm.origin" placeholder="Nhập nguồn gốc" />
      </el-form-item>

      <el-form-item label="Số lượng" required>
        <el-input v-model.number="sizeForm.quantity" placeholder="0" />
      </el-form-item>

      <el-form-item class="flex justify-center">
        <el-button
            type="primary"
            @click="onSubmit"
            :loading="loading"
            :disabled="!imageFile"
        >
          {{ loading ? 'Đang tạo...' : 'Tạo sản phẩm' }}
        </el-button>
        <el-button @click="handleCancel">Hủy</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification, ElMessageBox } from 'element-plus'
import { getBrands } from "@/Service/brandService.js"
import { Picture, Delete } from '@element-plus/icons-vue'
import axios from "axios";

const router = useRouter()

const options = ref([])
const fileInput = ref(null)
const previewImage = ref(null)
const imageFile = ref(null)
const uploadingImage = ref(false)
const loading = ref(false)

const sizeForm = reactive({
  title: '',
  price: '',
  origin: '',
  quantity: '',
  discount: '',
  brandId: '',
})

// Fetch danh sách thương hiệu
const fetchCategorys = () => {
  const fetchApi = async () => {
    try {
      const result = await getBrands()
      options.value = result.result.map(item => ({
        value: item.id,
        label: item.title
      }))
    } catch (error) {
      ElNotification({
        title: 'Error',
        message: 'Không thể tải danh sách thương hiệu',
        type: 'error',
      })
    }
  }
  fetchApi()
}

onMounted(() => {
  fetchCategorys()
})

// Trigger file input click
const triggerFileInput = () => {
  fileInput.value.click()
}

// Xử lý khi chọn file
const onFileChange = (event) => {
  const file = event.target.files[0]

  if (!file) return

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    ElNotification({
      title: 'Warning',
      message: 'Kích thước ảnh không được vượt quá 5MB!',
      type: 'warning',
    })
    return
  }

  // Validate file type
  if (!file.type.startsWith('image/')) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng chọn file ảnh!',
      type: 'warning',
    })
    return
  }

  imageFile.value = file
  previewImage.value = URL.createObjectURL(file)

  ElNotification({
    title: 'Success',
    message: 'Đã chọn ảnh thành công',
    type: 'success',
    duration: 2000
  })
}

// Xóa ảnh
const removeImage = () => {
  ElMessageBox.confirm(
      'Bạn có chắc muốn xóa ảnh này?',
      'Xác nhận',
      {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning',
      }
  ).then(() => {
    imageFile.value = null
    previewImage.value = null
    if (fileInput.value) {
      fileInput.value.value = ''
    }

    ElNotification({
      title: 'Success',
      message: 'Đã xóa ảnh',
      type: 'success',
    })
  }).catch(() => {
    // User cancelled
  })
}

// Validate form
const validateForm = () => {
  if (!sizeForm.title || !sizeForm.title.trim()) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng nhập tên sản phẩm',
      type: 'warning',
    })
    return false
  }

  if (!sizeForm.price || sizeForm.price <= 0) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng nhập giá hợp lệ',
      type: 'warning',
    })
    return false
  }

  if (!sizeForm.brandId) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng chọn thương hiệu',
      type: 'warning',
    })
    return false
  }

  if (!sizeForm.discount && sizeForm.discount !== 0) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng nhập giảm giá',
      type: 'warning',
    })
    return false
  }

  if (sizeForm.discount < 0 || sizeForm.discount > 100) {
    ElNotification({
      title: 'Warning',
      message: 'Giảm giá phải từ 0-100%',
      type: 'warning',
    })
    return false
  }

  if (!imageFile.value) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng chọn ảnh sản phẩm',
      type: 'warning',
    })
    return false
  }

  if (!sizeForm.origin || !sizeForm.origin.trim()) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng nhập nguồn gốc',
      type: 'warning',
    })
    return false
  }

  if (!sizeForm.quantity || sizeForm.quantity <= 0) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng nhập số lượng hợp lệ',
      type: 'warning',
    })
    return false
  }

  return true
}

// Submit form
async function onSubmit() {
  // Validate
  if (!validateForm()) {
    return
  }

  loading.value = true
  uploadingImage.value = true

  try {
    // Tạo FormData
    const formData = new FormData()
    formData.append('title', sizeForm.title)
    formData.append('price', sizeForm.price)
    formData.append('origin', sizeForm.origin)
    formData.append('quantity', sizeForm.quantity)
    formData.append('discount', sizeForm.discount)
    formData.append('brandId', sizeForm.brandId)
    formData.append('thumbnail', imageFile.value)

    // Gọi API
    const result = await axios.post(
        `http://localhost:8081/api/products`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
    )

    if (result) {
      ElNotification({
        title: 'Success',
        message: 'Tạo sản phẩm thành công',
        type: 'success',
      })
      await router.replace({ name: 'products' })
    }
  } catch (error) {
    console.error('Error:', error)
    ElNotification({
      title: 'Error',
      message: error.response?.data?.message || 'Có lỗi xảy ra khi tạo sản phẩm',
      type: 'error',
    })
  } finally {
    loading.value = false
    uploadingImage.value = false
  }
}

// Cancel và quay lại
const handleCancel = () => {
  if (sizeForm.title || sizeForm.price || imageFile.value) {
    ElMessageBox.confirm(
        'Bạn có muốn hủy và mất các thay đổi?',
        'Xác nhận',
        {
          confirmButtonText: 'Có',
          cancelButtonText: 'Không',
          type: 'warning',
        }
    ).then(() => {
      router.back()
    }).catch(() => {
      // User cancelled
    })
  } else {
    router.back()
  }
}

// Cleanup preview URL khi component bị destroy
onBeforeUnmount(() => {
  if (previewImage.value) {
    URL.revokeObjectURL(previewImage.value)
  }
})
</script>

<style scoped>
.image-upload-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-preview-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #e0e0e0;
  margin-bottom: 16px;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-image-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}

.upload-placeholder {
  width: 300px;
  height: 300px;
  border: 2px dashed #d0d0d0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 16px;
}

.upload-placeholder:hover {
  border-color: #409eff;
  background: #f0f7ff;
}

.upload-icon {
  font-size: 64px;
  color: #c0c4cc;
  margin-bottom: 12px;
}

.upload-text {
  color: #606266;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.upload-hint {
  color: #909399;
  font-size: 12px;
}

.hidden-file-input {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .image-preview-wrapper,
  .upload-placeholder {
    width: 100%;
    max-width: 300px;
  }
}

/* Custom Element Plus styles */
:deep(.el-form-item__label) {
  font-weight: 600;
}

:deep(.el-input__inner) {
  border-radius: 8px;
}

:deep(.el-select) {
  width: 100%;
}
</style>