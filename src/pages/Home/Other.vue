<template>
  <section id="other" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Thương hiệu khác</div>

    <div class="flex flex-col gap-6 px-2">
      <div v-for="(item, index) in dataProducts" :key="index" class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative flex justify-center items-center">
          <div class="w-[130px] h-[130px] bg-center bg-cover bg-no-repeat bg-scroll
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
          id: 300,
          thumbnail: "https://content.pancake.vn/1/s542x542/fwebp/18/b7/58/40/6d3df393307693ff76c0bedf05a0fceeadb26cff93ed366ae5922a71-w:600-h:600-l:29097-t:image/jpeg.jpg",
          discount: 70,
          title: "Pure XS For Women - 80ml",
          oldPrice: 3350000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 71,
          thumbnail: "https://content.pancake.vn/1/s512x626/fwebp/0e/49/74/27/f041a59577c9f9bcbce0687caecf98820baea0d89813b35e1e0ea576-w:564-h:689-l:40804-t:image/jpeg.jpg",
          discount: 70,
          title: "Maison Margiela Replica Jazz Club - 100ml",
          oldPrice: 3350000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 72,
          thumbnail: "https://content.pancake.vn/1/s531x815/fwebp/1a/12/80/29/11aa600fd2ffdb100cea4ef1d51d5aa3d6a1e210c0b82bea6a5a0038-w:563-h:864-l:17960-t:image/jpeg.jpg",
          discount: 69,
          title: "Montblanc signature Eau de Parfume",
          oldPrice: 3080000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 73,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/50/b0/49/47/a32cf333ad7b0a9cb7e65008f273b33fcd0799d37b5ec5c97c2a510d-w:900-h:900-l:30736-t:image/webp.webp",
          discount: 66,
          title: "Armaf Club De Nuit Intense - 105ml",
          oldPrice: 3580000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 112,
          thumbnail: "https://content.pancake.vn/1/s531x531/fwebp/da/97/32/5b/0cd47e9af2438c6be3b49deee4b71642c53d1e29f3321c3b4e5753c2-w:564-h:564-l:32257-t:image/jpeg.jpg",
          discount: 0,
          title: "Carolina Herrera Very Good Girl - 80ml",
          oldPrice: 4080000,
          newPrice: 4080000,
          origin: "Pháp",
          quantity: 0
        },
        {
          id: 119,
          thumbnail: "https://content.pancake.vn/1/s539x589/fwebp/18/66/70/c7/d9122c0cde42ddce7ed9c54daf45c08570007e1377d650d6b9c2ea12-w:733-h:800-l:630779-t:image/png.png",
          discount: 59,
          title: "Prada Paradoxe Eau De Parfum - 90ml",
          oldPrice: 3080000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 150,
          thumbnail: "https://content.pancake.vn/1/s552x552/fwebp/6e/3b/a4/a7/7eff19772d5767d885054ed7603d9d67434cb65ddb4f95cfa74e0a20-w:564-h:564-l:23502-t:image/jpeg.jpg",
          discount: 59,
          title: "Aqva pour homme Eau De Toilette  - 100ml",
          oldPrice: 3080000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 151,
          thumbnail: "https://content.pancake.vn/1/s539x828/fwebp/b9/3f/01/3a/8b2be5701b61a3c8506e7af5f012ad8add929ce5d48d725093d7d62f-w:563-h:864-l:39655-t:image/jpeg.jpg",
          discount: 70,
          title: "HERMES Terre EDT - 100ml",
          oldPrice: 3080000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 152,
          thumbnail: "https://content.pancake.vn/1/s553x664/fwebp/3c/5b/15/1c/f95839e7c23aea73b74d430319363334c3d359af9d4f4a0e0a1f91e0-w:564-h:677-l:30005-t:image/jpeg.jpg",
          discount: 59,
          title: " L’eau Papier  - 100ml",
          oldPrice: 3080000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 2
        }
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