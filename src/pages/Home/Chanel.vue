<template>
  <section id="chanel" class="scroll-smooth">
    <div class="text-3xl font-bold text-center uppercase my-6 animate-push-forward">Chanel</div>

    <div class="flex flex-col gap-6 px-2">
      <!-- Product 1 -->
      <div class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative">
          <div class="w-[146px] h-[148px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/s546x728/fwebp/08/a0/97/b4/c79418f791aa99ec0e93f202bae35b7c8135595fbe408d430005e99a-w:564-h:752-l:24586-t:image/jpeg.jpg');"></div>
          <div class="w-[158px] h-[158px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/fwebp/fa/66/d5/cd/9186e990dc5541004f05499396c3179cb9cfec72a45d5ae2463b058f-w:150-h:150-l:4225-t:image/svg+xml.svg');"></div>
          <div class="absolute top-2 left-[133px] text-[8px] font-bold text-white">
            Sale
            <br>
            71%
          </div>
        </div>
        <div class="pl-12 flex flex-col gap-[2px]">
          <div class="text-base text-center font-bold"> Mã 83 -
            <span class="font-normal">Chanel Allure Homme EDT - 100ml</span> </div>
          <div class="flex justify-between">
            <div class="text-base line-through">3.500.000đ</div>
            <div  class="text-base text-[#ef1000] font-bold">990.000đ</div>
          </div>
          <div class="text-base font-bold">Xuất sứ: <span class="font-normal">Pháp</span></div>
          <div class="text-base font-bold">Số lượng: <span class="font-normal">Còn lại 8 sản phẩm</span></div>
          <div class="w-4/6 mx-auto">
            <div class="px-3 py-1 bg-[#ae0c00] cursor-pointer hover:bg-[#8a0a00] transition-colors" @click="openOrderPopup">
              <div class="uppercase text-base font-bold text-white text-center">Đặt hàng</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product 2 -->
      <div class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative">
          <div class="w-[146px] h-[148px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/s546x728/fwebp/08/a0/97/b4/c79418f791aa99ec0e93f202bae35b7c8135595fbe408d430005e99a-w:564-h:752-l:24586-t:image/jpeg.jpg');"></div>
          <div class="w-[158px] h-[158px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/fwebp/fa/66/d5/cd/9186e990dc5541004f05499396c3179cb9cfec72a45d5ae2463b058f-w:150-h:150-l:4225-t:image/svg+xml.svg');"></div>
          <div class="absolute top-2 left-[133px] text-[8px] font-bold text-white">
            Sale
            <br>
            71%
          </div>
        </div>
        <div class="pl-12 flex flex-col gap-[2px]">
          <div class="text-base text-center font-bold"> Mã 83 -
            <span class="font-normal">Chanel Allure Homme EDT - 100ml</span> </div>
          <div class="flex justify-between">
            <div class="text-base line-through">3.500.000đ</div>
            <div  class="text-base text-[#ef1000] font-bold">990.000đ</div>
          </div>
          <div class="text-base font-bold">Xuất sứ: <span class="font-normal">Pháp</span></div>
          <div class="text-base font-bold">Số lượng: <span class="font-normal">Còn lại 8 sản phẩm</span></div>
          <div class="w-4/6 mx-auto">
            <div class="px-3 py-1 bg-[#ae0c00] cursor-pointer hover:bg-[#8a0a00] transition-colors" @click="openOrderPopup">
              <div class="uppercase text-base font-bold text-white text-center">Đặt hàng</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product 3 -->
      <div class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative">
          <div class="w-[146px] h-[148px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/s546x728/fwebp/08/a0/97/b4/c79418f791aa99ec0e93f202bae35b7c8135595fbe408d430005e99a-w:564-h:752-l:24586-t:image/jpeg.jpg');"></div>
          <div class="w-[158px] h-[158px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/fwebp/fa/66/d5/cd/9186e990dc5541004f05499396c3179cb9cfec72a45d5ae2463b058f-w:150-h:150-l:4225-t:image/svg+xml.svg');"></div>
          <div class="absolute top-2 left-[133px] text-[8px] font-bold text-white">
            Sale
            <br>
            71%
          </div>
        </div>
        <div class="pl-12 flex flex-col gap-[2px]">
          <div class="text-base text-center font-bold"> Mã 83 -
            <span class="font-normal">Chanel Allure Homme EDT - 100ml</span> </div>
          <div class="flex justify-between">
            <div class="text-base line-through">3.500.000đ</div>
            <div  class="text-base text-[#ef1000] font-bold">990.000đ</div>
          </div>
          <div class="text-base font-bold">Xuất sứ: <span class="font-normal">Pháp</span></div>
          <div class="text-base font-bold">Số lượng: <span class="font-normal">Còn lại 8 sản phẩm</span></div>
          <div class="w-4/6 mx-auto">
            <div class="px-3 py-1 bg-[#ae0c00] cursor-pointer hover:bg-[#8a0a00] transition-colors" @click="openOrderPopup">
              <div class="uppercase text-base font-bold text-white text-center">Đặt hàng</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Popup -->
    <Transition name="fade">
      <div
          v-if="isOrderPopupOpen"
          class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          @click="closeOrderPopup"
      >
        <!-- Popup Content -->
        <div
            class="rounded-2xl max-w-[420px] w-full h-auto overflow-y-auto scrollbar-hide shadow-2xl relative"
            @click.stop
        >
          <!-- Header với nút đóng -->
          <div class="absolute right-0 top-0 flex items-center justify-between rounded-t-2xl z-10">
            <button
                @click="closeOrderPopup"
                class=""
                aria-label="Đóng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Order Component -->
          <div class="">
            <Order />
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script>
import Order from "@/pages/Home/Order.vue";

export default {
  components: {
    Order
  },
  data() {
    return {
      isOrderPopupOpen: false,
    };
  },
  methods: {
    openOrderPopup() {
      this.isOrderPopupOpen = true;
      // Ngăn scroll body khi popup mở
      document.body.style.overflow = 'hidden';
    },
    closeOrderPopup() {
      this.isOrderPopupOpen = false;
      // Cho phép scroll lại
      document.body.style.overflow = '';
    },
  },
  beforeUnmount() {
    // Cleanup khi component bị destroy
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .bg-white,
.fade-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.fade-enter-from .bg-white {
  transform: scale(0.95);
}

.fade-leave-to .bg-white {
  transform: scale(0.95);
}

/* Ẩn scrollbar nhưng vẫn cho phép scroll */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
</style>