<template>
  <div class="sticky top-0 left-0 right-0 container z-50">
    <div class="page-view">
      <div class="bg-[#FF0000] px-1 py-1">
        <div class="text-[17px] text-white font-bold text-center">NƯỚC HOA LAVERA - SHOP NƯỚC HOA XÁCH TAY UY TÍN HÀNG ĐẦU VIỆT NAM</div>
      </div>

        <div v-show="showBoxes" class="flex justify-around w-full py-2">
          <div class="bg-[#004aad] rounded-2xl flex justify-center items-center py-3 px-5 w-[155px] h-[34px] animate-push-forward">
            <div class="text-sm font-bold text-white">xem Fullbox</div>
          </div>
          <div class="bg-[#004aad] rounded-2xl flex justify-center items-center py-3 px-5 w-[155px] h-[34px] animate-push-forward">
            <div class="text-sm font-bold text-white">XEM CHIẾT 10ML</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showBoxes = ref(false);

const handleScroll = () => {
  showBoxes.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>