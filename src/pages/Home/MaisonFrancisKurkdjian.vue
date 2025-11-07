<template>
  <section id="maison" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">MAISON FRANCIS KURKDJIAN</div>

    <div class="flex flex-col gap-6 px-2">
      <div v-for="(item, index) in dataProducts" :key="index" class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative">
          <div class="w-[146px] h-[148px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" :style="{ backgroundImage: `url('${item.thumbnail}')` }">></div>
          <div class="w-[158px] h-[158px] absolute top-0 left-0 bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" style="background-image: url('https://content.pancake.vn/1/fwebp/fa/66/d5/cd/9186e990dc5541004f05499396c3179cb9cfec72a45d5ae2463b058f-w:150-h:150-l:4225-t:image/svg+xml.svg');"></div>
          <div class="absolute top-2 left-[133px] text-[8px] font-bold text-white">
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
          id: 14,
          thumbnail: "https://content.pancake.vn/1/s551x551/fwebp/0e/6f/2a/6a/acbdac75220e2932e7d0e6e1cd305b30ee7e57a53eac591cb6a47d34-w:600-h:600-l:21781-t:image/webp.jpg",
          discount: 75,
          title: "Baccarat Rouge 540 Extrait de Parfum - 70ml",
          oldPrice: 8300000,
          newPrice: 1350000,
          origin: "Pháp",
          quantity: 6
        },
        {
          id: 300,
          thumbnail: "https://content.pancake.vn/1/s523x698/fwebp/8e/4e/59/97/57dd084adcfb69191fd0c43d3582ddff7302ca553973a2e7645577e6-w:564-h:752-l:24521-t:image/jpeg.jpg",
          discount: 85,
          title: "Baccarat Rouge 540 Extrait de Parfum - 200ml",
          oldPrice: 13600000,
          newPrice: 1990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 48,
          thumbnail: "https://content.pancake.vn/1/s552x552/fwebp/ab/01/6a/d7/c63c744e75492fd2effae0c04c1e547027303560906c688f9a0b888e-w:1200-h:1200-l:105828-t:image/webp.jpg",
          discount: 0,
          title: "Baccarat Rouge 540 EDP - 70ml",
          oldPrice: 6300000,
          newPrice: 6300000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 301,
          thumbnail: "https://content.pancake.vn/1/s552x552/fwebp/d0/6e/7a/08/db8eb4e01e8905f8063d3a1ce908c5ac5514e93d23b26efde45a3171-w:800-h:800-l:38923-t:image/jpeg.jpg",
          discount: 85,
          title: "Baccarat Rouge 540 EDP - 200ml",
          oldPrice: 12500000,
          newPrice: 1890000,
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