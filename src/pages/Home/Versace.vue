<template>
  <section id="versace" class="scroll-smooth py-10">
    <div class="text-4xl font-bold text-center uppercase my-6 animate-push-forward">Versace</div>

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
          id: 60,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/d3/74/89/d3/d2c6f715609de6cc0554c2855fdbc03837ba4f46c72235114524a9b6-w:564-h:564-l:33745-t:image/jpeg.jpg",
          discount: 69,
          title: "Versace Pour Homme - 100ml",
          oldPrice: 1990000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 7
        },
        {
          id: 61,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/3e/e0/eb/bc/c58c53652bcbc418a5dd23cdd471d3b0ba200d6d5ab5cf3ce36138cd-w:564-h:564-l:36993-t:image/jpeg.jpg",
          discount: 69,
          title: "Versace Eros Flame - 100ml",
          oldPrice: 2500000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 5
        },
        {
          id: 62,
          thumbnail: "https://content.pancake.vn/1/s548x548/fwebp/9b/01/e7/f8/d6f2b1e70ff0771ed02aeb3eaf60ca018f9c3f7fba1392552b2b427b-w:564-h:564-l:36027-t:image/jpeg.jpg",
          discount: 55,
          title: "Versace Eros For Men - 100ml",
          oldPrice: 1990000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 2
        },
        {
          id: 63,
          thumbnail: "https://content.pancake.vn/1/fwebp/d1/dc/a4/a8/d10eb131bd9cb9cde77a75614aae0c02ecb3efc8c61569e23d872ebb-w:200-h:200-l:9088-t:image/jpeg.jpg",
          discount: 0,
          title: "Versace Dylan Blue Pour Femme EDP - 100ml",
          oldPrice: 2300000,
          newPrice: 2300000,
          origin: "Pháp",
          quantity: 3
        },
        {
          id: 138,
          thumbnail: "https://content.pancake.vn/1/fwebp/0a/2b/5b/31/be62068b9b4bba4a29557dcfc4680ed91f91bd3383031d752d894439-w:533-h:730-l:28077-t:image/jpeg.jpg",
          discount: 55,
          title: "Versace Eros Energy Pour Homme EDP - 100ml",
          oldPrice: 1990000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 139,
          thumbnail: "https://content.pancake.vn/1/s521x620/fwebp/be/ca/48/f8/17066918a73c5cbb2745aebe1ce5c4edf2cf233c42cbe2f38ea97dc5-w:563-h:669-l:32647-t:image/jpeg.jpg",
          discount: 55,
          title: "Versace Versense EDT - 100ml",
          oldPrice: 1990000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 135,
          thumbnail: "https://content.pancake.vn/1/s555x555/fwebp/98/b8/39/12/60068e16605add898bcafa3ed61fc6b49c987dc2232dbd2c786d3899-w:564-h:564-l:20296-t:image/jpeg.jpg",
          discount: 55,
          title: "Versace Crystal Noir - 90ml",
          oldPrice: 1990000,
          newPrice: 890000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 136,
          thumbnail: "https://content.pancake.vn/1/s515x515/fwebp/fc/c8/3f/c1/bbf046b5614e8305dd8cc1ba734e96211e3453dd7a18c34401062336-w:564-h:564-l:43536-t:image/jpeg.jpg",
          discount: 55,
          title: "Versace Yellow Diamond - 90ml",
          oldPrice: 2450000,
          newPrice: 990000,
          origin: "Pháp",
          quantity: 4
        },
        {
          id: 137,
          thumbnail: "https://content.pancake.vn/1/s515x630/fwebp/e7/88/98/62/6e624fa0244aae4bab2c2c79d1826afd798f0322bdbcc5be588f23b1-w:564-h:689-l:62129-t:image/jpeg.jpg",
          discount: 55,
          title: "Versace Bright Crystal Absolu - 90ml",
          oldPrice: 2450000,
          newPrice: 990000,
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>