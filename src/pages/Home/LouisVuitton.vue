<template>
  <section id="louis-vuitton" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Louis Vuitton</div>

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
          id: 140,
          thumbnail: "https://content.pancake.vn/1/s548x714/fwebp/19/b8/44/2f/2fa2c2bd8532ca292c4b8a457f6490f25926fbf961bdce154c0f71df-w:564-h:734-l:22144-t:image/jpeg.jpg",
          discount: 69,
          title: "Louis Vuitton California Dream  - 100ml",
          oldPrice: 9450000,
          newPrice: 1490000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 141,
          thumbnail: "https://content.pancake.vn/1/fwebp/53/88/54/4d/bfc11580a6bb9920360c3a659711c0a6c1c80b617c0a62034919362e-w:320-h:320-l:9240-t:image/jpeg.jpg",
          discount: 68,
          title: "Louis Vuitton On The Beach EDP  - 100ml",
          oldPrice: 6800000,
          newPrice: 1490000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 142,
          thumbnail: "https://content.pancake.vn/1/s553x553/fwebp/c9/77/8f/8c/5fbeb0e8d25bfa24de7781f9ed2a765d949c06c5ac3fba7f33e91220-w:601-h:600-l:284143-t:image/png.png",
          discount: 75,
          title: "LV Lovers - 100ml",
          oldPrice: 8500000,
          newPrice: 1490000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 200,
          thumbnail: "https://content.pancake.vn/1/s547x547/fwebp/3f/6f/77/4a/f069fa451639de94d24e274c667e830dd563ee2b327e44acbae70bfd-w:1200-h:1200-l:73676-t:image/jpeg.jpg",
          discount: 75,
          title: "Louis Vuitton ",
          oldPrice: 8900000,
          newPrice: 1490000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 201,
          thumbnail: "https://content.pancake.vn/1/s538x538/fwebp/fe/3c/ac/83/d137f3aa70356114453c4a2f8a7e1879ecbcdb2a11cc454c592e428b-w:1200-h:1200-l:65768-t:image/jpeg.jpg",
          discount: 75,
          title: "Louis Vuitton Les Sables Roses - 100ml",
          oldPrice: 8600000,
          newPrice: 1490000,
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