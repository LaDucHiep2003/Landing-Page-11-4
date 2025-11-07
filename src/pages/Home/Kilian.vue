<template>
  <section id="kilian" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Kilian</div>

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
          id: 43,
          thumbnail: "https://content.pancake.vn/1/s550x550/fwebp/bc/3b/23/34/2a5dc72bd93ea11eb19fab317dc8d4ac04a6851eb1ffa313a75b8fd2-w:600-h:600-l:31545-t:image/webp.jpg",
          discount: 0,
          title: "Kilian Voulez-Vous Coucher Avec Moi - 50ml",
          oldPrice: 6350000,
          newPrice: 6350000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 44,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/55/c3/fa/01/b6e936c4d451f49948d7ecaf95ba4a06fe20d6dede5d4a1978062b38-w:600-h:600-l:16303-t:image/webp.jpg",
          discount: 75,
          title: "Kilian Good Girl Gone Bad - 50ml",
          oldPrice: 8500000,
          newPrice: 1490000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 110,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/79/ab/34/2d/b9165b8ccd050106f0f93a1210ee202dd79e06611ffb968db19062d8-w:564-h:564-l:28262-t:image/jpeg.jpg",
          discount: 69,
          title: "Kilian Good Girl Gone Bad Eau Fraiche - 50ml",
          oldPrice: 5500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 45,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/2c/ca/be/78/0bc9ab5f683e2a1c63ad76db0b5d58019285e454309e5aa667f928d0-w:1200-h:1200-l:56724-t:image/webp.webp",
          discount: 75,
          title: "Kilian Black Phantom - Memento Mori - 50ml",
          oldPrice: 8500000,
          newPrice: 1490000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 70,
          thumbnail: "https://content.pancake.vn/1/s548x714/fwebp/f4/81/f6/f8/f2bcfddd1e54ab93d49c5416850840a41bb0acf25e1b52334e37bc58-w:736-h:958-l:35847-t:image/jpeg.jpg",
          discount: 0,
          title: "Kilian Rolling in Love - 50ml",
          oldPrice: 6900000,
          newPrice: 6900000,
          origin: "Pháp",
          quantity: 4
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