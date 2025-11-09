<template>
  <div class="mx-auto container-admin mt-8 max-md:mt-3">
    <div class="text-[50px] text-color-2 font-great text-center max-md:text-2xl">
      Chỉnh sửa sản phẩm
    </div>
    <el-form
        class="w-full p-3 responsive-form"
        :model="sizeForm"
        label-width="auto"
        size="large"
    >
      <el-form-item label="Tên sản phẩm">
        <el-input v-model="sizeForm.title" class="bg-color-white-2" />
      </el-form-item>

      <el-form-item label="Thương hiệu">
        <el-select
            v-model="sizeForm.brandId"
            clearable
            placeholder="Chọn thương hiệu"
            style="width: 240px"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Giá">
        <el-input v-model.number="sizeForm.price" class="responsive-input" />
      </el-form-item>

      <el-form-item label="Giảm giá (%)">
        <el-input v-model.number="sizeForm.discount" />
      </el-form-item>

      <!-- Upload ảnh với preview -->
      <el-form-item label="Ảnh sản phẩm">
        <div class="image-upload-container">
          <!-- Preview ảnh hiện tại -->
          <div v-if="previewImage || sizeForm.thumbnail" class="image-preview-wrapper">
            <img
                :src="previewImage || sizeForm.thumbnail"
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

          <!-- Upload button -->
          <div v-else class="upload-placeholder">
            <el-icon class="upload-icon"><Picture /></el-icon>
            <p class="upload-text">Click để chọn ảnh</p>
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
            {{ uploadingImage ? 'Đang upload...' : 'Chọn ảnh mới' }}
          </el-button>
        </div>
      </el-form-item>

      <el-form-item label="Nguồn gốc">
        <el-input v-model="sizeForm.origin" />
      </el-form-item>

      <el-form-item label="Số lượng">
        <el-input v-model.number="sizeForm.quantity" />
      </el-form-item>

      <el-form-item class="flex justify-center">
        <el-button
            type="primary"
            @click="onSubmit"
            :loading="loading"
        >
          {{ loading ? 'Đang cập nhật...' : 'Cập nhật' }}
        </el-button>
        <el-button @click="handleCancel">Hủy</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, reactive, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { editProduct, getDetailProduct } from '@/service/productsService'
import { ElNotification, ElMessageBox } from 'element-plus'
import { getBrands } from "@/Service/brandService.js"
import { Picture, Delete } from '@element-plus/icons-vue'
import axios from 'axios'

const router = useRouter()
const route = useRoute()

const options = ref([])
const fileInput = ref(null)
const previewImage = ref(null)
const imageFile = ref(null)
const uploadingImage = ref(false)
const loading = ref(false)

const sizeForm = reactive({
  id: '',
  title: '',
  price: '',
  origin: '',
  quantity: '',
  discount: '',
  thumbnail: '',
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

// Load dữ liệu sản phẩm
const loadData = async () => {
  try {
    const result = await getDetailProduct(route.params.id)
    if (result) {
      Object.assign(sizeForm, result.result)
    }
  } catch (error) {
    ElNotification({
      title: 'Error',
      message: 'Không thể tải thông tin sản phẩm',
      type: 'error',
    })
  }
}

onMounted(() => {
  fetchCategorys()
  loadData()
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
    message: 'Đã chọn ảnh. Nhấn "Cập nhật" để lưu thay đổi.',
    type: 'success',
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
    sizeForm.thumbnail = ''
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

// Submit form
async function onSubmit() {
  // Validate form
  if (!sizeForm.title || !sizeForm.price || !sizeForm.brandId) {
    ElNotification({
      title: 'Warning',
      message: 'Vui lòng điền đầy đủ thông tin bắt buộc',
      type: 'warning',
    })
    return
  }

  loading.value = true

  try {
    // Nếu có ảnh mới, upload lên server
    if (imageFile.value) {
      uploadingImage.value = true

      const formData = new FormData()
      formData.append('id', sizeForm.id)
      formData.append('title', sizeForm.title)
      formData.append('price', sizeForm.price)
      formData.append('origin', sizeForm.origin)
      formData.append('quantity', sizeForm.quantity)
      formData.append('discount', sizeForm.discount)
      formData.append('brandId', sizeForm.brandId)
      formData.append('thumbnail', imageFile.value)

      // Gọi API update với FormData (multipart/form-data)
      const result = await axios.patch(
          `http://localhost:8081/api/products`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      )

      uploadingImage.value = false

      if (result.data) {
        ElNotification({
          title: 'Success',
          message: 'Cập nhật sản phẩm thành công',
          type: 'success',
        })
        await router.replace({ name: 'products' })
      }
    } else {
      // Không có ảnh mới, gửi dữ liệu thông thường
      const result = await editProduct(sizeForm)

      if (result) {
        ElNotification({
          title: 'Success',
          message: 'Cập nhật sản phẩm thành công',
          type: 'success',
        })
        await router.replace({ name: 'products' })
      }
    }
  } catch (error) {
    ElNotification({
      title: 'Error',
      message: error.response?.data?.message || 'Có lỗi xảy ra khi cập nhật sản phẩm',
      type: 'error',
    })
  } finally {
    loading.value = false
    uploadingImage.value = false
  }
}

// Cancel và quay lại
const handleCancel = () => {
  ElMessageBox.confirm(
      'Bạn có muốn hủy các thay đổi?',
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
  color: #909399;
  font-size: 14px;
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
</style>