<template>
  <section id="giorgio" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">GIORGIO ARMANI</div>

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
          id: 15,
          thumbnail: "https://content.pancake.vn/1/s534x534/fwebp/ca/73/5c/78/e5d72ab98d67678a853bc2001b20295ae7dd3adcd0c0149b42aef351-w:1200-h:1200-l:36439-t:image/webp.jpg",
          discount: 70,
          title: "Giorgio Armani Acqua Di Gio Pour Homme - 100ml",
          oldPrice: 2350000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 16,
          thumbnail: "https://content.pancake.vn/1/s540x540/fwebp/90/72/a7/6d/9f0ee17c396373fac21be3deb2640bda014cd35a61f5ecacde59b0cb-w:600-h:600-l:13117-t:image/webp.jpg",
          discount: 69,
          title: "Giorgio Armani Acqua di Gio Profumo - 125ml",
          oldPrice: 3800000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 113,
          thumbnail: "https://content.pancake.vn/1/s546x546/fwebp/d4/0f/d8/46/79cbfb3ee5f8659002302c24b78dcd74c1379d6fc424712c98cb8446-w:600-h:600-l:10707-t:image/webp.jpg",
          discount: 0,
          title: "Giorgio Armani Sì Intense - 100ml",
          oldPrice: 2850000,
          newPrice: 2850000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 35,
          thumbnail: "https://content.pancake.vn/1/s545x545/fwebp/77/d9/b1/b4/8d544fd4a1050448d2a0e9022f3366ae3af4d2741f95a899489c09ba-w:600-h:600-l:18786-t:image/webp.jpg",
          discount: 75,
          title: "Giorgio Armani Acqua Di Gio Absolu - 75ml",
          oldPrice: 2915000,
          newPrice: 2915000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 36,
          thumbnail: "https://content.pancake.vn/1/s547x547/fwebp/78/c9/cb/43/35b34b34732cf91916e7388fd7818803ef98cc83771054199f931899-w:600-h:600-l:11414-t:image/webp.jpg",
          discount: 69,
          title: "Giorgio Armani Sì Passione EDP - 100ml",
          oldPrice: 3600000,
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