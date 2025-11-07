<template>
  <section id="jean" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">JEAN PAUL GAULTIER</div>

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
          id: 112,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/2f/40/33/e8/fc9479cd63eb4f51a88bbd10ef839b6247da50a21e6a8d9aefb65fb4-w:564-h:564-l:23501-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Scandal - 80ml",
          oldPrice: 3200000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 123,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/48/81/c5/10/ba6768113131959b0c8f08f523dac320f9d26e765fac3606d75b8801-w:564-h:564-l:33572-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier So Scandal - 100ml",
          oldPrice: 3200000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 124,
          thumbnail: "https://content.pancake.vn/1/s533x535/fwebp/2f/7d/87/be/4a8c12d0ee38cefe87702e7834be83ab3ea8b322477dfd604b2ec525-w:563-h:565-l:44671-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Scandal Absolu Pour Femme - 80m",
          oldPrice: 3200000,
          newPrice: 1090000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 125,
          thumbnail: "https://content.pancake.vn/1/s537x537/fwebp/16/e1/1e/d8/383233c83247a84913212877f391043c59229d89b8332b817d8cc3e3-w:564-h:564-l:37444-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Scandal Le Parfum - 80ml",
          oldPrice: 3200000,
          newPrice: 1090000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 126,
          thumbnail: "https://content.pancake.vn/1/s539x613/fwebp/34/01/7a/46/9d316ad6b9722598ebbcd19854919def466627d357969ecb8b6ddcbe-w:564-h:641-l:32549-t:image/jpeg.jpg",
          discount: 0,
          title: "Jean Paul Gaultier La Belle Le Parfum - 100ml",
          oldPrice: 3380000,
          newPrice: 3380000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 127,
          thumbnail: "https://content.pancake.vn/1/s504x756/fwebp/fa/8b/d1/0c/388eca7b833258ebf4e6663709b5f2981886a1450f69e1b91113d6b1-w:564-h:846-l:54291-t:image/jpeg.jpg",
          discount: 0,
          title: "Jean Paul Gaultier Le Beau for men - 125ml",
          oldPrice: 2680000,
          newPrice: 2680000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 128,
          thumbnail: "https://content.pancake.vn/1/fwebp/59/1b/e8/d5/5d2cce51938b0b2b2885cc7b9df96e7009d4c24dc3e22aeffb38dd98-w:500-h:500-l:28365-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Scandal Absolu Pour Homme - 100ml",
          oldPrice: 3600000,
          newPrice: 1090000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 129,
          thumbnail: "https://content.pancake.vn/1/s515x696/fwebp/3f/c2/ac/1c/6b1056af57da18253e7efe1bb2ae6a0fce526453abbb36a85aebabff-w:564-h:762-l:46334-t:image/jpeg.jpg",
          discount: 0,
          title: "Jean Paul Gaultier Le Male Le Parfum - 75ml",
          oldPrice: 3200000,
          newPrice: 3200000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 130,
          thumbnail: "https://content.pancake.vn/1/s551x551/fwebp/a8/b8/6d/22/b3e2c825c2fa7eb6d8905de446218abb88600179f65c6c09b3fe9ebe-w:564-h:564-l:41161-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Le Male Elixir - 75ml",
          oldPrice: 3200000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 131,
          thumbnail: "https://content.pancake.vn/1/s536x536/fwebp/cd/71/83/ce/dc29a00a7cabefa064b4f95d28a5cadf5a78a014b74b040b7e45ac88-w:564-h:564-l:24921-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Ultra Male - 75ml",
          oldPrice: 3200000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 132,
          thumbnail: "https://content.pancake.vn/1/s539x613/fwebp/3c/97/7b/72/c6eec4099e9782e3306e81617ff8a47afc3f78fb3dcd2a2d3c0587ce-w:564-h:641-l:40945-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Divine EDP - 100ml",
          oldPrice: 3200000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 133,
          thumbnail: "https://content.pancake.vn/1/s558x558/fwebp/74/89/be/3c/43460b6cfc210d210573787c34bbb90420a6fff0a7821ec1083a36e3-w:564-h:564-l:30683-t:image/jpeg.jpg",
          discount: 69,
          title: "Jean Paul Gaultier Scandal Pour Homme Le Parfum - 100ml",
          oldPrice: 3350000,
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