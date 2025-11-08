<template>
  <section class="px-2">
    <div class="rounded-[30px] relative overflow-hidden flex justify-center items-center mt-6">
      <div class="absolute inset-0 bg-order-banner bg-center bg-cover bg-no-repeat opacity-60"></div>
      <div class="relative z-10 py-6 px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">ĐẶT HÀNG TẠI ĐÂY</h2>

        <form class="w-full space-y-4">
          <input
              type="text"
              placeholder="Họ Và Tên"
              class="w-full px-4 py-3 text-sm border border-[#d9d9d9] rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
          />

          <input
              type="tel"
              placeholder="Số Điện Thoại"
              class="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
          />

          <input
              type="text"
              placeholder="Địa chỉ"
              class="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none "
          />

          <textarea
              placeholder="Mã sản phẩm"
              rows="3"
              class="w-full h-12 px-4 text-sm py-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
          ></textarea>

          <div class="flex justify-center">
            <button
                type="submit"
                class="w-2/3 bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>