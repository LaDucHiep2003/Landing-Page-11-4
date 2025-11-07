<template>
  <section id="lancome" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Lancome</div>

    <div class="flex flex-col gap-6 px-2">
      <div v-for="(item, index) in dataProducts" :key="index" class="flex gap-2 items-center">
        <div class="w-[158px] h-[158px] relative flex justify-center items-center">
          <div class="w-[148px] h-[148px] bg-center bg-cover bg-no-repeat bg-scroll
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
          id: 117,
          thumbnail: "https://content.pancake.vn/1/s548x701/fwebp/25/1c/14/ff/ff61cebff866d1a152e86e500314f92e1aa7556dd262875e57655448-w:563-h:720-l:22947-t:image/jpeg.jpg",
          discount: 68,
          title: "Lancome La Vie Est Belle - 75ml",
          oldPrice: 4800000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 153,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/ae/db/ea/6d/c5f96b58070ee4f4fdd686a41f659eeb41df12cd55b11c692797a3bb-w:564-h:564-l:17430-t:image/jpeg.jpg",
          discount: 75,
          title: "Lancome Tresor Midnight Rose - 75ml",
          oldPrice: 2350000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 137,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/43/20/9f/f2/888295a237d733739a380a93166536de9577a017de1e826dd698a810-w:564-h:564-l:14726-t:image/jpeg.jpg",
          discount: 68,
          title: "Lancome Tresor In Love - 75ml",
          oldPrice: 2230000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 156,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/d2/05/21/1f/248c6c9b4a08783013548fdac159cb791890f47f976ffd6869c25733-w:564-h:564-l:18146-t:image/jpeg.jpg",
          discount: 0,
          title: "Lancome La Vie est Belle en Rose - 100ml",
          oldPrice: 2500000,
          newPrice: 2500000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 134,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/b6/08/a1/32/cf7d03efa4e5804a07ce50a508ab790d934760d8fc455c3b2742a01a-w:564-h:564-l:23669-t:image/jpeg.jpg",
          discount: 0,
          title: "Lancome La Vie est Belle L'eclat - 75ml",
          oldPrice: 2050000,
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