<template>
  <section id="tomford" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Tomford</div>

    <div class="flex flex-col gap-6 px-2">
      <div v-for="(item, index) in dataProducts" :key="index" class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative flex justify-center items-center">
          <div class="w-[148px] h-[148px] bg-center bg-cover bg-no-repeat bg-scroll
                bg-origin-content bg-clip-border" :style="{ backgroundImage: `url('${item.thumbnail}')` }"></div>
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
          id: 49,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/1c/d0/18/67/f669fa3f884a4927517069f482e2224f3fe3d7cde03b96ce3c607062-w:600-h:600-l:8282-t:image/webp.jpg",
          discount: 70,
          title: "Tom Ford Ombré Leather - 100ml",
          oldPrice: 43500000,
          newPrice: 1090000,
          origin: "Pháp",
          quantity: 8
        },
        {
          id: 50,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/fa/b1/05/6a/c101ca1004a02a35006f44f2e8c29b22d7701e4c26c39688c2575310-w:600-h:600-l:22816-t:image/webp.jpg",
          discount: 69,
          title: "Tom Ford Oud Wood - 50ml",
          oldPrice: 6500000,
          newPrice: 1290000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 51,
          thumbnail: "https://content.pancake.vn/1/s548x731/fwebp/66/46/33/22/aef073ce2457be71ce4c469f72032510bb9e820f129b76492c8d37fd-w:564-h:752-l:13236-t:image/jpeg.jpg",
          discount: 69,
          title: "Tom Ford Rose Prick EDP - 50ml",
          oldPrice: 8500000,
          newPrice: 1290000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 52,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/17/b1/fe/44/d59f36cb975925014bae95c804a7cfbdf8250392522733731e28fec9-w:600-h:600-l:18344-t:image/webp.jpg",
          discount: 83,
          title: "Tom Ford Lost Cherry Eau de Parfum - 100ml",
          oldPrice: 9300000,
          newPrice: 1290000,
          origin: "Pháp",
          quantity: 7
        },
        {
          id: 95,
          thumbnail: "https://content.pancake.vn/1/fwebp/25/b3/13/eb/9f30108666520f9b256078677b89e9b768c2bb90d44b5f8b6b04d1bf-w:400-h:400-l:11394-t:image/jpeg.jpg",
          discount: 83,
          title: "Tom Ford Black Orchid - 100ml",
          oldPrice: 9300000,
          newPrice: 1290000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 96,
          thumbnail: "https://content.pancake.vn/1/s496x708/fwebp/05/36/40/54/fb4d415a919905425fb4dc14ce7ae39aa806041fcaa32cab3bc9be98-w:550-h:784-l:37208-t:image/jpeg.jpg",
          discount: 0,
          title: "Tom Ford ÉBÈNE FUMÉ EDP  - 100ml",
          oldPrice: 8500000,
          newPrice: 1290000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 97,
          thumbnail: "https://content.pancake.vn/1/s529x662/fwebp/b9/b3/43/ed/a0db60b30e23b469d7c48ac8ab245ec0365977a3af33827c4ed43353-w:564-h:705-l:33093-t:image/jpeg.jpg",
          discount: 83,
          title: "Tom Ford Neroli Portofino - 50ml",
          oldPrice: 9300000,
          newPrice: 1290000,
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