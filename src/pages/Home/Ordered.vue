<template>
  <Transition name="slide-fade">
    <div
        v-if="isVisible && currentOrder"
        :key="currentIndex"
        class="fixed left-4 top-5 z-50 p-1 bg-white border border-[#c8c8c8] rounded-full w-[300px] shadow-lg"
    >
      <div class="flex gap-4">
        <div class="w-14 h-14">
          <img
              class="w-full h-full object-cover rounded-full"
              :src="currentOrder.avatar"
              :alt="currentOrder.name"
          >
        </div>
        <div class="flex flex-col">
          <div class="text-[13px] font-bold">{{ currentOrder.name }} - {{ currentOrder.phone }}</div>
          <div class="text-xs">Đã đặt mã {{ formatId(currentOrder.productId) }}</div>
          <div class="text-xs">{{ currentOrder.time }}</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          name: 'Đinh Thúy Quỳnh',
          phone: '0597452***',
          avatar: 'https://content.pancake.vn/1/s462x462/fwebp/69/08/39/0f/9b009fd9612abd5516e30020b3e1e1794e6d5c5f285b535bea368dc4.jpg',
          productId: 1,
          time: '11 phút trước'
        },
        {
          name: 'Vũ Khắc Minh',
          phone: '0911755***',
          avatar: 'https://content.pancake.vn/1/s462x462/fwebp/38/17/13/5d/3efaac2d553d41fa71673245702f7df73f35d597e856e0e68f8af590.jpg',
          productId: 21,
          time: '15 phút trước'
        },
        {
          name: 'Lê Thị Thu Hằng',
          phone: '0987749***',
          avatar: 'https://content.pancake.vn/1/s462x462/fwebp/36/93/18/56/a7b7395a5e6530e25caa5ff24dde00cb5591775d2d372871ce27f61e.jpg',
          productId: 2,
          time: 'Vừa xong'
        },
        {
          name: 'Nguyễn Thị Hiền',
          phone: '0904866***',
          avatar: 'https://content.pancake.vn/1/s462x462/fwebp/90/c8/2d/45/782f46dbdddf0e47d1a6585e1de8bbcdb89c69ca473a22babee47c0e.jpg',
          productId: 14 + 99,
          time: '14 phút trước'
        },
        {
          name: 'Đinh Phương Thúy',
          phone: '0938785***',
          avatar: 'https://content.pancake.vn/1/s462x462/fwebp/6d/22/63/a2/7b7e6b73b71880c7abc98fe3d4cdea2feda2b73153e06f45897da5ab.jpg',
          productId: 75,
          time: '45 phút trước'
        },
        {
          name: 'Đinh Thu Hiền',
          phone: '0978765***',
          avatar: 'https://content.pancake.vn/1/s462x462/fwebp/14/c9/d3/52/ca1f00fd921c8ed456b234e4ccbdac1ebea670ecc4d672f4a11fdf04.jpg',
          productId: 75,
          time: '45 phút trước'
        }
      ],
      currentIndex: 0,
      currentOrder: null,
      isVisible: true,
      showTimeout: null,
      hideTimeout: null
    };
  },
  mounted() {
    this.currentOrder = this.orders[0];
    this.startCycle();
  },
  beforeUnmount() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  },
  methods: {
    formatId(id) {
      return id < 10 ? `0${id}` : id.toString();
    },
    startCycle() {
      this.isVisible = true;

      this.showTimeout = setTimeout(() => {
        this.isVisible = false;

        this.hideTimeout = setTimeout(() => {
          this.nextOrder();
          this.startCycle();
        }, 3000);
      }, 5000);
    },
    nextOrder() {
      this.currentIndex = (this.currentIndex + 1) % this.orders.length;
      this.currentOrder = this.orders[this.currentIndex];
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>