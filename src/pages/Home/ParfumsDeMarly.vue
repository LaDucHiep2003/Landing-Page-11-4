<template>
  <section id="delila" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">PARFUMS DE MARLY</div>

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
          id: 17,
          thumbnail: "https://content.pancake.vn/1/s555x555/fwebp/0a/bc/cb/4a/63b7038061990f44556f4eb5b7913bd3eebcd9580e2269d76cb8244b-w:1200-h:1200-l:51778-t:image/webp.jpg",
          discount: 70,
          title: "Parfums De Marly Delina - 75ml",
          oldPrice: 5800000,
          newPrice: 1250000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 37,
          thumbnail: "https://content.pancake.vn/1/s550x550/fwebp/6d/97/96/c2/d04548e6ca204ea0707f1f051be981bd4946fbadc9cb9943331ca7b1-w:600-h:600-l:20559-t:image/webp.jpg",
          discount: 70,
          title: "Parfums De Marly Oriana - 75ml",
          oldPrice: 5800000,
          newPrice: 1250000,
          origin: "Pháp",
          quantity: 6
        },
        {
          id: 93,
          thumbnail: "https://content.pancake.vn/1/s550x734/fwebp/29/f4/2a/6d/c09b86f8aff87380826be3448ca7c7829a0abbf693732f4a49534864-w:564-h:752-l:14907-t:image/jpeg.jpg",
          discount: 70,
          title: "Parfums De Marly Valaya - 75ml",
          oldPrice: 5800000,
          newPrice: 1250000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 94,
          thumbnail: "https://content.pancake.vn/1/s543x679/fwebp/af/71/43/3b/5f0aedb2e40bccba5a1edf28291455788cb1d5289002fc97f1734e17-w:700-h:875-l:36600-t:image/jpeg.jpg",
          discount: 70,
          title: "Delina La Roée - 75ml",
          oldPrice: 5800000,
          newPrice: 1250000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 121,
          thumbnail: "https://content.pancake.vn/1/s550x779/fwebp/11/c6/0b/65/b395dc0fc73fe5f4298dc8a8d2db205561dc150000f9183f7a8b233c-w:1447-h:2048-l:400670-t:image/webp.webp",
          discount: 72,
          title: "Marly Delina Exclusif Edition Royale - 75ml",
          oldPrice: 5900000,
          newPrice: 1250000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 302,
          thumbnail: "https://content.pancake.vn/1/s566x566/fwebp/3a/29/72/4e/eeb8e67e027d86acaa492c83b2c6beb576b0a3004652e9f9fa346046-w:1200-h:1200-l:237360-t:image/jpeg.jpg",
          discount: 75,
          title: "Parfums De Marly Palatine EDP - 75ml",
          oldPrice: 6150000,
          newPrice: 1350000,
          origin: "Pháp",
          quantity: 6
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