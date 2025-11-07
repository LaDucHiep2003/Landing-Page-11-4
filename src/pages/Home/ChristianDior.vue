<template>
  <section id="chanel" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">CHRISTIAN DIOR</div>

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
          id: 18,
          thumbnail: "https://content.pancake.vn/1/s555x555/fwebp/9d/64/97/23/2da81f90550f1c5e598e59bd0580db075729b6bcdf64408df4649f3b-w:600-h:600-l:12122-t:image/webp.jpg",
          discount: 72,
          title: "Dior Sauvage Eau de Parfum - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 6
        },
        {
          id: 19,
          thumbnail: "https://content.pancake.vn/1/s545x545/fwebp/8b/0d/e4/69/65bf3231cd949fcc7f08b283c6b6a0de0363be6b1d8e52f35b335bec-w:600-h:600-l:44246-t:image/webp.jpg",
          discount: 69,
          title: "Miss Dior Eau De Parfum - 100ml",
          oldPrice: 2950000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 20,
          thumbnail: "https://content.pancake.vn/1/s547x547/fwebp/38/65/0b/f9/b5ec4631f50ccf62cc21b13329be763cc43498482f2e244f819acdd8-w:1200-h:1200-l:61992-t:image/webp.jpg",
          discount: 69,
          title: "Dior J'adore Eau de Parfum - 100ml",
          oldPrice: 2850000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 38,
          thumbnail: "https://content.pancake.vn/1/s546x546/fwebp/6b/c1/58/09/0796fb6f87b57f19b1ead3c84c78e4b8a73a579b34144d01add19e14-w:600-h:600-l:23369-t:image/webp.jpg",
          discount: 68,
          title: "Dior JOY by Dior- 90ml",
          oldPrice: 2750000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 39,
          thumbnail: "https://content.pancake.vn/1/s547x547/fwebp/22/52/a7/51/887ca3327d57d2b241caebd2096a961e0694b1c42ba06883c5d9d699-w:1200-h:1200-l:34662-t:image/webp.jpg",
          discount: 75,
          title: "Dior Homme Intense - 100ml",
          oldPrice: 5200000,
          newPrice: 1290000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 40,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/41/a8/db/6e/7ea2932fe89161d7818c9118668f5d0a331ad364c6ac9c229216f9f6-w:600-h:600-l:35711-t:image/webp.jpg",
          discount: 73,
          title: "Dior Miss Dior Blooming Bouquet - 100ml",
          oldPrice: 2850000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 120,
          thumbnail: "https://content.pancake.vn/1/s503x584/fwebp/6b/d4/a4/e6/b6c797fa7a23b146aa5ebfbf343a4929ecd93bd17706261c6a34b7e7-w:563-h:653-l:194364-t:image/png.png",
          discount: 75,
          title: "Dior Sauvage Elixir -100ml",
          oldPrice: 4550000,
          newPrice: 1090000,
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