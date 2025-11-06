<template>
  <div class="mt-3 px-2 relative">
    <Splide :options="splideOptions" ref="splide">
      <SplideSlide>
        <img class="w-full h-[170px] bg-contain" src="https://content.pancake.vn/1/s1377x568/fwebp/87/55/79/ce/0f355da5c633038d1292de2fa978a212f627381a538d9a59594eafdc.jpg" alt="">
      </SplideSlide>
      <SplideSlide>
        <img class="w-full h-[170px] bg-contain" src="https://content.pancake.vn/1/s1377x568/fwebp/64/c8/57/25/707657a9ff4d36aa0471dcf2e4631d501cf6dca55c8abc5168c49c8a.jpg" alt="Slider">
      </SplideSlide>
      <SplideSlide>
        <img class="w-full h-[170px] bg-contain"
             src="https://content.pancake.vn/1/fwebp/4c/c1/bf/a3/34c242ff4cf4824624bbf8ef651c19ed6a7eebbc98c30cde4c4d4224-w:1033-h:500-l:51795-t:image/jpeg.jpg" alt="Slider">
      </SplideSlide>
      <SplideSlide>
        <img class="w-full h-[170px] bg-contain"
             src="https://content.pancake.vn/1/s1377x568/fwebp/d9/a7/f3/c1/8ca7488473cc0ff87d52921da56a2ab77c366e3228d269d6d0e58e2c.jpg" alt="Slider">
      </SplideSlide>
      <SplideSlide>
        <img class="w-full h-[170px] bg-contain"
             src="https://content.pancake.vn/1/fwebp/c6/24/55/6b/678b0cc1cf181b06a3d2d51054b94c59dc0398394515d90e53b2e3b5-w:1300-h:500-l:120862-t:image/jpeg.jpg" alt="Slider">
      </SplideSlide>
    </Splide>

    <!-- Custom Navigation Buttons -->
    <button
        @click="goPrev"
        class="absolute left-4 top-1/2 w-7 h-7 -translate-y-1/2 z-10 rounded-md shadow-lg bg-[#ffffff33] transition-all duration-200 hover:bg-black"
        aria-label="Previous slide"
    >
      <img src="https://content.pancake.vn/1/31/23/51/e5/41806a12b05813bfc36f3ad3d1a580aa060a9d8f1736cc38e197a61f.svg" alt="Icon-prev">
    </button>
    <button
        @click="goNext"
        class="absolute right-4 top-1/2 w-7 h-7 -translate-y-1/2 z-10 rounded-md shadow-lg bg-[#ffffff33] transition-all duration-200 hover:bg-black"
        aria-label="Next slide"
    >
      <img src="https://content.pancake.vn/1/d8/88/b5/1f/ce7bea1db3f2c535a89a2c99988aeba8d3a361b2c72c9d08950d10e7.svg" alt="Icon-next">
    </button>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data(){
    return{
      splideOptions: {
        perPage: 1,
        perMove: 1,
        gap: "20px",
        pagination: false,
        type: 'loop',
        autoplay: true,
        interval: 3000,
        arrows: false,
      },
    }
  },
  methods: {
    goNext() {
      if (this.$refs.splide && this.$refs.splide.splide) {
        this.$refs.splide.splide.go('>');
      }
    },
    goPrev() {
      if (this.$refs.splide && this.$refs.splide.splide) {
        this.$refs.splide.splide.go('<');
      }
    }
  },
}
</script>