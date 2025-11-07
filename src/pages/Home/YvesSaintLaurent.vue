<template>
  <section id="yves" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Yves Saint Laurent</div>

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
          id: 11,
          thumbnail: "https://content.pancake.vn/1/fwebp/b1/d4/c6/f5/456d86fb6cb1bd0efbd909c8345c48fa9ed68019e297fb83b7db450d-w:550-h:550-l:61323-t:image/jpeg.jpg",
          discount: 71,
          title: "Yves Saint Laurent Black Opium - 90ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 12,
          thumbnail: "https://content.pancake.vn/1/s554x554/fwebp/b1/49/e5/f0/ea5ab2df82d77a58e6bc4a08d1b39e5d5020bf6609fe845992a96a46-w:600-h:600-l:17104-t:image/webp.jpg",
          discount: 69,
          title: "Yves Saint Laurent Y Eau de Parfum - 100ml",
          oldPrice: 3200000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 13,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/00/51/6d/74/79ed604e47539373a6679f18b4477f2be41e317f5d252ed4768f87df-w:1200-h:1200-l:50741-t:image/webp.jpg",
          discount: 75,
          title: "Yves Saint Laurent Libre EDP - 90ml",
          oldPrice: 3200000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 33,
          thumbnail: "https://content.pancake.vn/1/s545x702/fwebp/5e/23/a2/63/2075cae1ebf520264ebb618acb0b90cec9ea9e7bcfa5d472ee2874a6-w:564-h:726-l:35083-t:image/jpeg.jpg",
          discount: 60,
          title: "Yves Saint Laurent Mon Paris Intensemet EDP- 90ml",
          oldPrice: 2550000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 34,
          thumbnail: "https://content.pancake.vn/1/s547x547/fwebp/01/d8/18/22/7ea006c9b4a6f115e2024292b2b3a525af215b524a355327e8d33ef3-w:550-h:550-l:45403-t:image/jpeg.jpg",
          discount: 72,
          title: "Yves Saint Laurent Libre Intense - 90ml",
          oldPrice: 2950000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 9
        },
        {
          id: 90,
          thumbnail: "https://content.pancake.vn/1/s547x547/fwebp/50/8d/a0/81/878627aa4b43ead706c02efa204203747e7cac29c628c48bc0211f42-w:564-h:564-l:26062-t:image/jpeg.jpg",
          discount: 69,
          title: "Black Opium Eau de Parfum Over Red - 90ml",
          oldPrice: 5800000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 91,
          thumbnail: "https://content.pancake.vn/1/s547x547/fwebp/77/1e/7f/e0/5cf5c96df47d0ee321fc831e31de6ee97c74038fa463761325d2d083-w:564-h:564-l:15711-t:image/jpeg.jpg",
          discount: 70,
          title: "Yves Saint Laurent Y Le Parfum - 100ml",
          oldPrice: 3350000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 92,
          thumbnail: "https://content.pancake.vn/1/s536x536/fwebp/6b/ca/43/f3/5efb112cb5b246590db6dc99b20c5a3db677b41def3ce2fda4184ba1-w:564-h:564-l:22801-t:image/jpeg.jpg",
          discount: 0,
          title: "Yves Saint Laurent La Nuit De L'Homme - 100ml",
          oldPrice: 2950000,
          newPrice: 2950000,
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