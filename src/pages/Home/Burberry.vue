<template>
  <section id="berberry" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Burberry</div>

    <div class="flex flex-col gap-6 px-2">
      <div v-for="(item, index) in dataProducts" :key="index" class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative flex justify-center items-center">
          <div class="w-[115px] h-[127px] bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" :style="{ backgroundImage: `url('${item.thumbnail}')` }"></div>
          <div class="w-[158px] h-[158px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/fwebp/fa/66/d5/cd/9186e990dc5541004f05499396c3179cb9cfec72a45d5ae2463b058f-w:150-h:150-l:4225-t:image/svg+xml.svg');"></div>
          <div class="absolute top-2 left-[130px] text-[8px] font-bold text-white uppercase">
            Sale
            <br>
            {{item.discount}}%
          </div>
        </div>
        <div class="pl-2 flex flex-col gap-[2px] flex-1">
          <div class="text-base text-center font-bold"> Mã {{ formatId(item.id) }} -
            <span class="font-normal">{{ item.title }}</span> </div>
          <div class="flex justify-between">
            <div class="text-base line-through">{{ formatPrice(item.oldPrice) }}đ</div>
            <div  class="text-base text-[#ef1000] font-bold">{{ formatPrice(item.newPrice) }}đ</div>
          </div>
          <div class="text-base font-bold">Xuất sứ: <span class="font-normal">{{ item.origin }}</span></div>
          <div class="text-base font-bold">Số lượng: <span class="font-normal">Còn lại {{ item.quantity }} sản phẩm</span></div>
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
      dataProducts: [
        {
          id: 65,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/fwebp/90/d1/62/5c/468d6604f8b95340affb5164e920d32511e63e027de35e3bfbba9d86.jpg",
          discount: 68,
          title: "My Burberry - 90ml",
          oldPrice: 3080000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 66,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/38/2d/36/73/0b5de3bac8a02964ad8731d6d009b7ec598025c938ac03ff4970fbeb-w:620-h:620-l:36469-t:image/jpeg.jpg",
          discount: 0,
          title: "My Burberry Blush - 90ml",
          oldPrice: 3080000,
          newPrice: 3080000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 67,
          thumbnail: "https://content.pancake.vn/1/s548x640/fwebp/4b/24/a1/e5/be688199e899ae0c4c37276e83b2243010755f4f8d9ba5363d969ff9-w:735-h:858-l:23610-t:image/jpeg.jpg",
          discount: 0,
          title: "Burberry Her - 100ml",
          oldPrice: 4500000,
          newPrice: 4500000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 68,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/4b/9e/78/23/9491edfc4be670e32922900bf3e30a6bd0971df56ea657cb2162f592-w:1200-h:1200-l:27902-t:image/webp.webp",
          discount: 75,
          title: "Burberry Hero - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 69,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/0d/ac/3f/e4/81d3dfb7a10dbb6ed6c5f2f26822b18d6d44b6c90b4e14a05177030e-w:564-h:564-l:40754-t:image/jpeg.jpg",
          discount: 0,
          title: "Burberry London for Women - 100ml",
          oldPrice: 4350000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
      ]
    };
  },
  methods: {
    openOrderPopup() {
      this.isOrderPopupOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeOrderPopup() {
      this.isOrderPopupOpen = false;
      document.body.style.overflow = '';
    },
    formatId(id) {
      return id < 10 ? `0${id}` : id;
    },
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
  },
  beforeUnmount() {
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>