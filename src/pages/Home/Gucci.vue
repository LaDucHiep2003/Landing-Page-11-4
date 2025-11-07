<template>
  <section id="chanel" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Gucci</div>

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
          id: 5,
          thumbnail: "https://content.pancake.vn/1/s549x549/fwebp/b6/f5/82/e7/8ad2236e730108f4d9d0b153c4243c389317d101fad43bc3f2fa8669-w:1200-h:1200-l:513568-t:image/png.png",
          discount: 71,
          title: "Gucci Bloom EDP For Her - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 6,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/0f/e9/19/c5/3f1c626294aecca4c0c249baee21116f7937eac95237b539455bbf16-w:1200-h:1200-l:67708-t:image/webp.jpg",
          discount: 69,
          title: "Gucci Flora Gorgeous Gardenia Eau de Parfum - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 8
        },
        {
          id: 7,
          thumbnail: "https://content.pancake.vn/1/s555x555/fwebp/58/1f/ba/ed/1c82da7361dbe0eb4d4f697037615f7ca1742293f0f6f0e94110eda8-w:1200-h:1200-l:81953-t:image/webp.jpg",
          discount: 69,
          title: "Gucci Flora Gorgeous Jasmine - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 27,
          thumbnail: "https://content.pancake.vn/1/s550x550/fwebp/74/16/45/e0/8b2260a49ffe3222c3fa91112796b6981827086873925f3325f8e449-w:600-h:600-l:8583-t:image/webp.jpg",
          discount: 0,
          title: " Gucci Bloom Ambrosia di Fiori EDP for Woman - 100ml",
          oldPrice: 3300000,
          newPrice: 3300000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 28,
          thumbnail: "https://content.pancake.vn/1/s550x550/fwebp/76/e5/5f/3a/651801c6940fc484fffcac8ba968e88de5c0ea0f1c1af56dfee821fe-w:600-h:600-l:17211-t:image/webp.jpg",
          discount: 71,
          title: "Gucci Bloom EDT - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 29,
          thumbnail: "https://content.pancake.vn/1/s552x552/fwebp/70/b5/8f/d4/d3531102e2b8386876e33fb31a42c5f3ceb0704aa4545e7d06bd2e63-w:600-h:600-l:25971-t:image/webp.jpg",
          discount: 0,
          title: "Gucci Bloom Nettare Di Fiori - 100ml",
          oldPrice: 3200000,
          newPrice: 3200000,
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