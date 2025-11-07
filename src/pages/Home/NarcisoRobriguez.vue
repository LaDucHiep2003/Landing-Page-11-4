<template>
  <section id="narciso" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">NARCISO RODRIGUEZ</div>

    <div class="flex flex-col gap-6 px-2">
      <div v-for="(item, index) in dataProducts" :key="index" class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative">
          <div class="w-[146px] h-[148px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
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
          id: 8,
          thumbnail: "https://content.pancake.vn/1/s552x552/fwebp/56/2a/fa/ec/4ecd1e9fafa1fba93f13a5c8d556df9bbda9886df94af598a2424b7c-w:1200-h:1200-l:13765-t:image/webp.jpg",
          discount: 68,
          title: "Narciso Rodriguez For Her Pure Musc - 100ml",
          oldPrice: 3120000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 9,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/84/07/b0/e7/dd8abdab8039f68d0d5862ae6fa2913311dd95a46af87a2122be25d0-w:600-h:600-l:5975-t:image/webp.jpg",
          discount: 70,
          title: "Narciso Rodriguez For Her EDP - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 10,
          thumbnail: "https://content.pancake.vn/1/s550x550/fwebp/dc/7e/18/d4/fa7db9da5f0f9ca6004c16f6555dddbffdbf73d73867551e0ead8b08-w:1200-h:1200-l:203593-t:image/webp.jpg",
          discount: 71,
          title: "Narciso Eau de Parfum Poudree - 90ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 31,
          thumbnail: "https://content.pancake.vn/1/s550x550/fwebp/6b/52/48/69/b51463af98d0168481f09d56904a32cc964159f216e554cb71b980c6-w:1200-h:1200-l:50590-t:image/webp.jpg",
          discount: 71,
          title: "Narciso Rodriguez For Her Musc Noir Rose - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 6
        },
        {
          id: 32,
          thumbnail: "https://content.pancake.vn/1/s551x551/fwebp/ef/24/f3/eb/e114ca7b791ccbd22234f2bf6a0885e04b9d0a047deaa1e26367e092-w:1200-h:1200-l:27211-t:image/webp.jpg",
          discount: 68,
          title: "Narciso Rodriguez For Her Forever - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 84,
          thumbnail: "https://content.pancake.vn/1/s551x551/fwebp/88/29/f0/93/d40dca07008ad1be13018aaab79e7cb33f544ac89a34ec04ce41be9b-w:564-h:564-l:14084-t:image/jpeg.jpg",
          discount: 69,
          title: "Narciso Rodriguez For Her Fleur Musc - 100ml",
          oldPrice: 3250000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 7
        },
        {
          id: 85,
          thumbnail: "https://content.pancake.vn/1/s551x551/fwebp/ed/fa/ed/39/845e8edba9aed7176afb2af8eeb363b3c133b880e3907c2b33a80a42-w:736-h:736-l:25439-t:image/jpeg.jpg",
          discount: 71,
          title: "Narciso Eau de Parfum Cristal - 90ml",
          oldPrice: 3120000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
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