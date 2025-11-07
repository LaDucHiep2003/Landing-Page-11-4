<template>
  <section id="chanel" class="scroll-smooth">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Chanel</div>

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
          id: 1,
          thumbnail: "https://content.pancake.vn/1/s546x546/fwebp/8c/7f/cf/21/77d3d1adf63a3a93c5fcb094b2aecb87b2b017055570ad440af798a6-w:600-h:600-l:16858-t:image/webp.jpg",
          discount: 71,
          title: "01 - Chanel Chance Eau Tendre EDP - 100ml",
          oldPrice: 3500000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 8
        },
        {
          id: 46,
          thumbnail: "https://content.pancake.vn/1/s550x550/fwebp/19/de/e9/54/69bb9bb4e126213baf6cd43f33486cee38b3c5da79f7107dd387d7b9-w:1200-h:1200-l:50690-t:image/webp.jpg",
          discount: 71,
          title: "Chanel Chance Eau Fraiche EDT - 100ml",
          oldPrice: 3500000,
          newPrice: 900000,
          origin: "Pháp",
          quantity: 9
        },
        {
          id: 47,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/db/37/b0/c7/ed8572b29e8be825ea384883652ecfe9af1cabfbc8d25ece51c3e7a7-w:1200-h:1200-l:54832-t:image/webp.jpg",
          discount: 71,
          title: "Chanel Chance Eau de Parfum - 100ml",
          oldPrice: 3500000,
          newPrice: 900000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 75,
          thumbnail: "https://content.pancake.vn/1/s549x549/fwebp/b7/da/d5/44/3e64717db9b144a437b753630ecfdc8694b7a62bad3f246f4432b7aa-w:564-h:564-l:15774-t:image/jpeg.jpg",
          discount: 72,
          title: "Chanel Coco EDT - 100ml",
          oldPrice: 3500000,
          newPrice: 3500000,
          origin: "Pháp",
          quantity: 7
        },
        {
          id: 2,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/38/eb/5f/70/4cc7e5feee5ca6ff7c3c9535d563e45126bcf96b102af9334d35a54b-w:600-h:600-l:26902-t:image/webp.jpg",
          discount: 72,
          title: "Chanel Coco Mademoiselle Intense - 100ml",
          oldPrice: 3500000,
          newPrice: 900000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 83,
          thumbnail: "https://content.pancake.vn/1/s546x728/fwebp/08/a0/97/b4/c79418f791aa99ec0e93f202bae35b7c8135595fbe408d430005e99a-w:564-h:752-l:24586-t:image/jpeg.jpg",
          discount: 0,
          title: "Chanel Allure Homme EDT - 100ml",
          oldPrice: 3200000,
          newPrice: 3200000,
          origin: "Pháp",
          quantity: 4
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
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
</style>