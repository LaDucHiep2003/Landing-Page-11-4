<template>
  <section id="creed" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Creed</div>

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
          id: 99,
          thumbnail: "https://content.pancake.vn/1/s519x635/fwebp/59/5c/92/f1/19946d981358dc35e2cd9dc07d9c11e7925c934d1c1ae6d505a30411-w:564-h:689-l:36358-t:image/jpeg.jpg",
          discount: 75,
          title: " Creed Aventus - 100ml",
          oldPrice: 8500000,
          newPrice: 1290000,
          origin: "Pháp",
          quantity: 6
        },
        {
          id: 80,
          thumbnail: "https://content.pancake.vn/1/fwebp/11/bd/a9/cd/86db231b192d6b6231545c7b2f9954a549257c5dbcc193e3aaecc795-w:500-h:500-l:29039-t:image/jpeg.jpg",
          discount: 0,
          title: "Creed Aventus - 120ml",
          oldPrice: 10500000,
          newPrice: 10500000,
          origin: "Pháp",
          quantity: 0
        },
        {
          id: 100,
          thumbnail: "https://content.pancake.vn/1/fwebp/11/bd/a9/cd/86db231b192d6b6231545c7b2f9954a549257c5dbcc193e3aaecc795-w:500-h:500-l:29039-t:image/jpeg.jpg",
          discount: 0,
          title: "Creed Aventus For Her EDP - 75ml",
          oldPrice: 7755000,
          newPrice: 7750000,
          origin: "Pháp",
          quantity: 1
        },
        {
          id: 101,
          thumbnail: "https://content.pancake.vn/1/s519x662/fwebp/68/02/cf/8a/d34d11552e613d394acdcc28d86334a19948e807278cf5347a4fc71f-w:533-h:679-l:11756-t:image/jpeg.jpg",
          discount: 70,
          title: "Creed Silver Mountain Water - 100ml",
          oldPrice: 7750000,
          newPrice: 1250000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 102,
          thumbnail: "https://content.pancake.vn/1/s548x731/fwebp/fa/d6/e4/09/3fec123585b9692c9bbaa9fa71066dc2b849bb9ec7e6267146c22fae-w:564-h:752-l:17808-t:image/jpeg.jpg",
          discount: 0,
          title: "Creed Green Irish Tweed - 100ml",
          oldPrice: 7750000,
          newPrice: 7750000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 104,
          thumbnail: "https://content.pancake.vn/1/s548x731/fwebp/3a/75/a0/47/1cc7b8746388c79151054aaab5c559df0870455f84a9f240f0a3f0f5-w:564-h:752-l:22939-t:image/jpeg.jpg",
          discount: 0,
          title: "Creed Millesime Imperial - 100ml",
          oldPrice: 7750000,
          newPrice: 7750000,
          origin: "Pháp",
          quantity: 1
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