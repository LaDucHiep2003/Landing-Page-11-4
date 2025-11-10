<template>
<div class="container">
  <div class="page-view">
    <RouterLink :to="`/auth/login`">
                <button class="px-5 font-semibold py-1 bg-color-13 text-color-white rounded-lg max-md:text-xs max-md:px-2 whitespace-nowrap">Login</button>
              </RouterLink>
    <div class="bg-[#FF0000] px-1 py-1">
      <div class="text-[17px] text-white font-bold text-center">NƯỚC HOA LAVERA - SHOP NƯỚC HOA XÁCH TAY UY TÍN HÀNG ĐẦU VIỆT NAM</div>
    </div>

    <Slider />

    <Categories />

    <div class="w-[420px] h-[148px] mt-5 cursor-pointer" @click="openPopup">
      <img src="https://content.pancake.vn/1/s1700x532/fwebp/9a/c5/06/b0/24c79e7e79ac007da7d95533059d9fb3efb6b7debbdac5f04ea0b4a4-w:1920-h:600-l:1584527-t:image/png.png" alt="Image">
    </div>

    <Brands />

    <Chanel />

    <Gucci />

    <NarcisoRobriguez />

    <YvesSaintLaurent />

    <MaisonFrancisKurkdjian />

    <GiorgioArmani />

    <ParfumsDeMarly />

    <ChristianDior />

    <LeLabo />

    <Kilian />

    <TomFord />

    <Versace />

    <Burberry />

    <Creed />

    <Roja />

    <Lancome />

    <JeanPaulGaultier />

    <LouisVuitton />

    <Other />

    <div class="w-14 h-9 mx-auto pt-16 pb-10">
      <div class="bg-center bg-cover bg-no-repeat bg-scroll
              bg-origin-content bg-clip-border w-14 h-9" style="background-image: url('https://content.pancake.vn/1/dlc/47/b9/bc/a2/5d55a0ce325e62b6b73cf97a9d723a4caeebd03ea06692cecae50708-w:256-h:164-l:97037-t:image/gif.gif')"></div>
    </div>

    <Order />

    <HotPerfume />

    <Reviews />

  </div>
</div>

  <!-- Popup Overlay -->
  <Transition name="fade">
    <div
        v-if="isPopupOpen"
        class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        @click="closePopup"
    >
      <!-- Popup Content -->
      <div
          class="bg-white rounded-xl scrollbar-hide max-w-[420px] w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
          @click.stop
      >
        <!-- Header với nút đóng -->
        <div class="absolute top-0 right-0 bg-white px-4 py-2 flex items-center justify-between rounded-t-2xl">
          <button
              @click="closePopup"
              class="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Đóng"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Nội dung popup - Component thông tin cửa hàng của bạn -->
        <div class="py-6 px-2">
          <Information />
        </div>
      </div>
    </div>
  </Transition>
<Ordered />
</template>

<script>
import Slider from "@/pages/Home/Slider.vue";
import Categories from "@/pages/Home/Categories.vue";
import Information from "@/pages/Home/Information.vue";
import Brands from "@/pages/Home/Brands.vue";
import Chanel from "@/pages/Home/Chanel.vue";
import Order from "@/pages/Home/Order.vue";
import Gucci from "@/pages/Home/Gucci.vue";
import NarcisoRobriguez from "@/pages/Home/NarcisoRobriguez.vue";
import YvesSaintLaurent from "@/pages/Home/YvesSaintLaurent.vue";
import MaisonFrancisKurkdjian from "@/pages/Home/MaisonFrancisKurkdjian.vue";
import GiorgioArmani from "@/pages/Home/GiorgioArmani.vue";
import ParfumsDeMarly from "@/pages/Home/ParfumsDeMarly.vue";
import ChristianDior from "@/pages/Home/ChristianDior.vue";
import LeLabo from "@/pages/Home/LeLabo.vue";
import Kilian from "@/pages/Home/Kilian.vue";
import HotPerfume from "@/pages/Home/HotPerfume.vue";
import Reviews from "@/pages/Home/Reviews.vue";
import TomFord from "@/pages/Home/TomFord.vue";
import Versace from "@/pages/Home/Versace.vue";
import Burberry from "@/pages/Home/Burberry.vue";
import Creed from "@/pages/Home/Creed.vue";
import Roja from "@/pages/Home/Roja.vue";
import Lancome from "@/pages/Home/Lancome.vue";
import JeanPaulGaultier from "@/pages/Home/JeanPaulGaultier.vue";
import LouisVuitton from "@/pages/Home/LouisVuitton.vue";
import Other from "@/pages/Home/Other.vue";
import Ordered from "@/pages/Home/Ordered.vue";

export default {
  components:{
    Slider,
    Categories,
    Information,
    Brands,
    Chanel,
    Order,
    Gucci,
    NarcisoRobriguez,
    YvesSaintLaurent,
    MaisonFrancisKurkdjian,
    GiorgioArmani,
    ParfumsDeMarly,
    ChristianDior,
    LeLabo,
    Kilian,
    HotPerfume,
    Reviews,
    TomFord,
    Versace,
    Burberry,
    Creed,
    Roja,
    Lancome,
    JeanPaulGaultier,
    LouisVuitton,
    Other,
    Ordered
  },
  data() {
    return {
      isPopupOpen: false,
    };
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closePopup() {
      this.isPopupOpen = false;
      document.body.style.overflow = '';
    },
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
}
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
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
</style>
