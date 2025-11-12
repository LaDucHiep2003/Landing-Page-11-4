<template>
  <section class="px-2">
    <div class="rounded-[30px] relative overflow-hidden flex justify-center items-center">
      <div class="relative z-10">
        <div class="font-roboto-mono">
          <div class="max-w-md mx-auto rounded-lg shadow-lg">
            <div class="text-white rounded-t-lg flex items-center justify-between">
              <div class="flex items-center gap-2 py-2">
                <div class="bg-white text-blue-600 p-2 rounded">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <span class="text-lg font-semibold text-blue-600">Đơn hàng</span>
              </div>
            </div>

            <!-- Product Info -->
            <div class="border-b flex">
              <div class="w-24 h-32 bg-white border-2 border-black flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                    src="https://w.ladicdn.com/s350x450/65bc6d99a0ca770012716647/anh-chup-man-hinh-2025-04-23-luc-185513-20250423115527-syygf.png"
                    alt="Product"
                    class="w-full h-full object-contain"
                />
              </div>
              <div class="flex-1 border border-black px-2 py-2 text-sm">
                <p class="text-sm mb-1 ml-3">
                  <span class="font-normal">Mã :</span> <span class="font-bold">{{ product.code }}</span>
                </p>
                <p class="text-sm mb-1 ml-3">
                  <span class="font-normal">Dung tích :</span>{{ product.volume }}
                </p>
                <p class="text-sm mb-1 ml-3">
                  <span class="font-normal">Giá sale</span>
                  <span class="text-red-600 font-bold text-sm ml-3"> {{ product.price }}</span>
                </p>
                <div class="flex items-center gap-2 text-xs ml-3 font-bold">
                  <span class="text-gray-700">{{ product.warranty }}</span>
                  <span class="text-red-600 text-xl font-[800]">✓</span>
                </div>
              </div>
            </div>

            <!-- Free Shipping Banner -->
            <div class="bg-white p-3 border-b">
              <div class="flex items-center gap-2">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span class="text-lg font-bold text-gray-800">GIAO HÀNG MIỄN PHÍ</span>
              </div>
            </div>

            <!-- Form -->
            <div class="p-4 space-y-3">
              <input
                  v-model="formData.name"
                  type="text"
                  placeholder="Họ và Tên"
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                  v-model="formData.phone"
                  type="tel"
                  placeholder="Số điện thoại"
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                  v-model="formData.address"
                  type="text"
                  placeholder="Thôn / xã / huyện /tỉnh"
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <div class="grid grid-cols-3 gap-2">
                <div class="relative">
                  <select
                      v-model="formData.city"
                      class="px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none
                        focus:border-blue-500 bg-white text-xs"
                  >
                    <option value="" >Tỉnh/thành</option>
                    <option v-for="city in cities" :key="city.value" :value="city.value">
                      {{ city.label }}
                    </option>
                  </select>
                  <svg class="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div class="relative">
                  <select
                      v-model="formData.district"
                      class="px-3 py-2  border border-gray-300 rounded-lg appearance-none focus:outline-none
                       focus:border-blue-500 bg-white text-xs"
                  >
                    <option value="">Quận/huyện</option>
                    <option v-for="district in districts" :key="district.value" :value="district.value">
                      {{ district.label }}
                    </option>
                  </select>
                  <svg class="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div class="relative">
                  <select
                      v-model="formData.ward"
                      class="px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none
                        focus:border-blue-500 bg-white text-xs"
                  >
                    <option value="" >Phường/xã</option>
                    <option v-for="ward in wards" :key="ward.value" :value="ward.value">
                      {{ ward.label }}
                    </option>
                  </select>
                  <svg class="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div class="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2">
                <div class="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                <span class="text-xs flex-1">DELINS EXCLUSIF 10ML 220.000đ</span>
              </div>

              <div class="relative">
                <select
                    v-model="formData.quantity"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none
                      focus:border-blue-500 bg-white text-xs"
                >
                  <option value="">Số lượng</option>
                  <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
                <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <button
                  @click="handleSubmit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition-colors"
              >
                Gửi Thông Tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export  default {
  data() {
    return {
      product: {
        code: 'delina exclusif',
        volume: '10ml',
        price: '220.000đ',
        warranty: 'bảo hành 12 ngày đổi trả miễn phí'
      },
      formData: {
        name: '',
        phone: '',
        address: '',
        city: '',
        district: '',
        ward: '',
        quantity: 1
      },
      cities: [
        { value: 'hanoi', label: 'Hà Nội' },
        { value: 'hcm', label: 'TP.HCM' },
        { value: 'danang', label: 'Đà Nẵng' },
        { value: 'haiphong', label: 'Hải Phòng' },
        { value: 'cantho', label: 'Cần Thơ' }
      ],
      districts: [
        { value: 'district1', label: 'Quận 1' },
        { value: 'district2', label: 'Quận 2' },
        { value: 'district3', label: 'Quận 3' },
        { value: 'district4', label: 'Quận 4' }
      ],
      wards: [
        { value: 'ward1', label: 'Phường 1' },
        { value: 'ward2', label: 'Phường 2' },
        { value: 'ward3', label: 'Phường 3' },
        { value: 'ward4', label: 'Phường 4' }
      ]
    }
  },
  methods: {
    handleSubmit() {
      if (!this.formData.name || !this.formData.phone) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }

      console.log('Đơn hàng:', this.formData);
      alert('Đã gửi thông tin đơn hàng thành công!');

      // Reset form
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        phone: '',
        address: '',
        city: '',
        district: '',
        ward: '',
        quantity: 1
      };
    },
    closeForm() {
      console.log('Đóng form');
    }
  }
}
</script>