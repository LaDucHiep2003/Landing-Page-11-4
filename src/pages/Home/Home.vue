<template>
<div class="container">
  <div class="page-view">
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

    <div class="w-14 h-9 mx-auto pt-16 pb-10">
      <div class="bg-center bg-cover bg-no-repeat bg-scroll
              bg-origin-content bg-clip-border w-14 h-9" style="background-image: url('https://content.pancake.vn/1/dlc/47/b9/bc/a2/5d55a0ce325e62b6b73cf97a9d723a4caeebd03ea06692cecae50708-w:256-h:164-l:97037-t:image/gif.gif')"></div>
    </div>

    <Order />

    <div class="py-5">
      <div class="border-2 border-[#f44336] flex justify-center items-center w-2/3 py-[1px] relative">
        <div class="text-[#f44336] text-2xl font-bold">HOT PERFUME</div>
        <img class="absolute right-[-46px] bottom-[-30px] w-16 h-16" src="https://content.pancake.vn/1/fwebp/33/39/1d/d2/0058178c326fd6033db806daab33f6dc5feba4ea0837bb29ec8a20b8-w:452-h:450-l:349867-t:image/png.png" alt="Logo">
      </div>

      <div class="grid grid-cols-3 mt-5">
        <div class="flex flex-col items-center justify-center">
          <img class="w-[118px] h-[118px]" src="https://content.pancake.vn/1/s551x551/fwebp/0e/6f/2a/6a/acbdac75220e2932e7d0e6e1cd305b30ee7e57a53eac591cb6a47d34-w:600-h:600-l:21781-t:image/webp.jpg" alt="">
          <div class="border border-[#aeaeae] flex justify-center items-center py-1 w-2/3 mt-1">
            <div class="text-sm font-bold">Mã 14</div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img class="w-[118px] h-[118px]" src="https://content.pancake.vn/1/s551x551/fwebp/0e/6f/2a/6a/acbdac75220e2932e7d0e6e1cd305b30ee7e57a53eac591cb6a47d34-w:600-h:600-l:21781-t:image/webp.jpg" alt="">
          <div class="border border-[#aeaeae] flex justify-center items-center py-1 w-2/3 mt-1">
            <div class="text-sm font-bold">Mã 14</div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img class="w-[118px] h-[118px]" src="https://content.pancake.vn/1/s551x551/fwebp/0e/6f/2a/6a/acbdac75220e2932e7d0e6e1cd305b30ee7e57a53eac591cb6a47d34-w:600-h:600-l:21781-t:image/webp.jpg" alt="">
          <div class="border border-[#aeaeae] flex justify-center items-center py-1 w-2/3 mt-1">
            <div class="text-sm font-bold">Mã 14</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-5">
        <div class="flex flex-col items-center justify-center">
          <img class="w-[118px] h-[118px]" src="https://content.pancake.vn/1/s551x551/fwebp/0e/6f/2a/6a/acbdac75220e2932e7d0e6e1cd305b30ee7e57a53eac591cb6a47d34-w:600-h:600-l:21781-t:image/webp.jpg" alt="">
          <div class="border border-[#aeaeae] flex justify-center items-center py-1 w-2/3 mt-1">
            <div class="text-sm font-bold">Mã 14</div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img class="w-[118px] h-[118px]" src="https://content.pancake.vn/1/s551x551/fwebp/0e/6f/2a/6a/acbdac75220e2932e7d0e6e1cd305b30ee7e57a53eac591cb6a47d34-w:600-h:600-l:21781-t:image/webp.jpg" alt="">
          <div class="border border-[#aeaeae] flex justify-center items-center py-1 w-2/3 mt-1">
            <div class="text-sm font-bold">Mã 14</div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img class="w-[118px] h-[118px]" src="https://content.pancake.vn/1/s551x551/fwebp/0e/6f/2a/6a/acbdac75220e2932e7d0e6e1cd305b30ee7e57a53eac591cb6a47d34-w:600-h:600-l:21781-t:image/webp.jpg" alt="">
          <div class="border border-[#aeaeae] flex justify-center items-center py-1 w-2/3 mt-1">
            <div class="text-sm font-bold">Mã 14</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-200 p-5">
      <div class="flex items-start gap-8">
        <!-- Left side - Rating summary -->
        <div class="flex flex-col items-center">
          <h3 class="text-[#ef1000] text-3xl font-bold mb-5">5 Sao</h3>
          <p class="text-gray-600 text-sm text-center font-bold">
            103 Đánh giá của<br/>khách hàng
          </p>
        </div>

        <!-- Right side - Rating bars -->
        <div class="flex-1 text-sm">
          <!-- 1 star -->
          <div class="flex items-center gap-2">
            <span class="text-gray-600 font-bold">1</span>
            <div class="icon-star h-4 w-4"></div>
            <div class="flex-1 bg-gray-300 rounded-full h-3 overflow-hidden">
              <div class="bg-[#ef1000] h-full rounded-full" style="width: 5%"></div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-gray-600 font-bold">2</span>
            <div class="icon-star h-4 w-4"></div>
            <div class="flex-1 bg-gray-300 rounded-full h-3 overflow-hidden">
              <div class="bg-[#ef1000] h-full rounded-full" style="width: 15%"></div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-gray-600 font-bold">3</span>
            <div class="icon-star h-4 w-4"></div>
            <div class="flex-1 bg-gray-300 rounded-full h-3 overflow-hidden">
              <div class="bg-[#ef1000] h-full rounded-full" style="width: 25%"></div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-gray-600 font-bold">4</span>
            <div class="icon-star h-4 w-4"></div>
            <div class="flex-1 bg-gray-300 rounded-full h-3 overflow-hidden">
              <div class="bg-[#ef1000] h-full rounded-full" style="width: 70%"></div>
            </div>
          </div>

          <!-- 5 stars -->
          <div class="flex items-center gap-2">
            <span class="text-gray-600 font-bold">5</span>
            <div class="icon-star h-4 w-4"></div>
            <div class="flex-1 bg-gray-300 rounded-full h-3 overflow-hidden">
              <div class="bg-[#ef1000] h-full rounded-full" style="width: 95%"></div>
            </div>
          </div>
        </div>


      </div>
    </div>

    <div class="flex justify-center gap-5 py-2">
      <div class="text-[#f44336] text-xl font-bold">Nhận xét sản phẩm</div>
      <div class="border-2 border-[#000] flex justify-center items-center py-1 px-10 mt-1">
        <div class="text-base font-bold">Hiển thị tất cả</div>
      </div>
    </div>

    <div class="pb-5 border-b border-black pt-2">
      <div class="flex justify-start items-center gap-5 flex-wrap relative">
        <div class="w-[71px] h-[72px]">
          <img class="w-full h-full rounded-full" src="https://content.pancake.vn/1/s471x628/fwebp/34/26/33/fa/440efea9864a4307409f12b7bde33441e034bdf263e61b1299a0ec8c-w:1536-h:2048-l:299940-t:image/jpeg.jpg" alt="Avatar">
        </div>
        <div class="flex gap-1">
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
        </div>
        <div class="text-[10px] font-bold bg-[#0f1015] text-white p-1 rounded-xl">chất lượng sản phẩm tuyệt vời</div>
        <div class="flex gap-2 items-center absolute right-1/3 bottom-0">
          <div class="icon-confirm"></div>
          <div class="text-[#47aeffbf] text-xs font-bold">
            Chứng nhận đã mua hàng</div>
        </div>
      </div>
      <div class="px-6">
        <div class="text-lg font-bold">Vũ Thắm | 18/03/2024</div>
        <div class="text-[13px] font-bold mt-1">Giao hàng tốc độ, nhanh ơi là nhanh. Đóng gói nhìn sang chảnh ghê. Thơm ngọt ngào nma hơi unisex 1 tí
          theo cảm nhận của mik. Mùi này hợp mùa thu đông, kiểu huyền bí quyến rũ, 1 chút sexy.</div>
        <img class="w-28 h-40 mt-5" src="https://content.pancake.vn/1/s508x746/fwebp/c4/60/4d/eb/08774f0b0b92d93c199eeddff513e366568b0bc53035792f1f085463-w:1396-h:2048-l:238341-t:image/jpeg.jpg" alt="Image-comment">
      </div>
    </div>
    <div class="pb-5 pt-2 border-b border-black">
      <div class="flex justify-start items-center gap-5 flex-wrap relative">
        <div class="w-[71px] h-[72px]">
          <img class="w-full h-full rounded-full" src="https://content.pancake.vn/1/s471x628/fwebp/34/26/33/fa/440efea9864a4307409f12b7bde33441e034bdf263e61b1299a0ec8c-w:1536-h:2048-l:299940-t:image/jpeg.jpg" alt="Avatar">
        </div>
        <div class="flex gap-1">
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
        </div>
        <div class="text-[10px] font-bold bg-[#0f1015] text-white p-1 rounded-xl">chất lượng sản phẩm tuyệt vời</div>
        <div class="flex gap-2 items-center absolute right-1/3 bottom-0">
          <div class="icon-confirm"></div>
          <div class="text-[#47aeffbf] text-xs font-bold">
            Chứng nhận đã mua hàng</div>
        </div>
      </div>
      <div class="px-6">
        <div class="text-lg font-bold">Vũ Thắm | 18/03/2024</div>
        <div class="text-[13px] font-bold mt-1">Giao hàng tốc độ, nhanh ơi là nhanh. Đóng gói nhìn sang chảnh ghê. Thơm ngọt ngào nma hơi unisex 1 tí
          theo cảm nhận của mik. Mùi này hợp mùa thu đông, kiểu huyền bí quyến rũ, 1 chút sexy.</div>
        <img class="w-28 h-40 mt-5" src="https://content.pancake.vn/1/s508x746/fwebp/c4/60/4d/eb/08774f0b0b92d93c199eeddff513e366568b0bc53035792f1f085463-w:1396-h:2048-l:238341-t:image/jpeg.jpg" alt="Image-comment">
      </div>
    </div>
    <div class="pb-5 pt-2">
      <div class="flex justify-start items-center gap-5 flex-wrap relative">
        <div class="w-[75px] h-[75px]">
          <img class="w-full h-full rounded-full" src="https://content.pancake.vn/1/s484x604/fwebp/28/50/e0/6b/3ea9c88509be44d21efe3a900650422b76e7a7c63c38470f5268c870-w:687-h:856-l:808180-t:image/png.png" alt="Avatar">
        </div>
        <div class="flex gap-1">
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
          <div class="icon-star h-3 w-3"></div>
        </div>
        <div class="text-[10px] font-bold bg-[#0f1015] text-white p-1 rounded-xl">
          shop tư vấn nhiệt tình </div>
        <div class="flex gap-2 items-center absolute right-1/3 bottom-0">
          <div class="icon-confirm"></div>
          <div class="text-[#47aeffbf] text-xs font-bold">
            Chứng nhận đã mua hàng</div>
        </div>
      </div>
      <div class="px-6">
        <div class="text-lg font-bold">THẢO ANH | 15/07/2024</div>
        <div class="text-[13px] font-bold mt-1">Sản phẩm tem đầy đủ . Mình k check nhưng chắc là hàng chính hãng . Shop đóng
            gói hàng có bọc chống sốc . Nước hoa xịt thơm mùi hoa nhài dễ chịu . Với giá tiền này thì cũng hợp lý vì mua
            về sài được chứ k bị giống nước hoa dởm tốn tiền mà k sài đc . Cho shop 5sao . Đáng đồng tiền bát gạo</div>
      </div>
    </div>

    <div class="w-14 h-9 mx-auto pt-5 pb-16">
      <div class="bg-center bg-cover bg-no-repeat bg-scroll
              bg-origin-content bg-clip-border w-10 h-10" style="background-image: url('https://content.pancake.vn/1/dlc/33/92/a4/b0/69e71d620d2058c4cfa63a50bc9c8482dab0f3935ca26f8caac7f658-w:250-h:250-l:126172-t:image/gif.gif')"></div>
    </div>

    <div class="bg-[#ff0000] px-6 py-1 border-t-4 border-black">
      <div class="text-xl font-bold">Lavera perfume - Thương hiệu nước hoa hàng đầu việt nam </div>
    </div>
    <div class="py-5 flex gap-6 px-2">
      <div class="w-20 h-20">
        <img class="w-full h-full" src="https://content.pancake.vn/1/s476x476/fwebp/69/42/8b/17/044e1c81e0661e368452eb37b794e98537c98854773ee235f4436c4d-w:651-h:651-l:15053-t:image/png.png" alt="Logo">
      </div>
      <div class="flex-1 text-base pt-7 break-words font-judson">
        Những chai nước hoa của nhà LAVERA đa số sẽ thuộc một trong những trường hợp sau:
        <br>
        - Là hàng xách tay trực tiếp từ nước ngoài về nên giá sẽ rẻ hơn so với các Shop khác (thường sẽ rẻ hơn 1 nửa).
        <br>
        - Những chai nước hoa nhà LAVERA sẽ có hạn sử dụng còn lại tầm 2 năm đến năm 2026 (trong khi các chai nước hoa mới sản xuất
        sẽ có hạn sử dụng đến 2028), đây cũng là 1 lý do để nước hoa nhà Roma rẻ hơn các shop nước hoa mới.
        <br>
        - Nước hoa nhà LAVERA tập trung hầu hết vào bán online, cắt giảm hoạt động tại cửa hàng nên sẽ không tốn nhiều vào
          các chi phí như: mặt bằng, nhân viên, đầu tư shop,... những phần chi phí đó sẽ được LAVERA đưa vào khuyến mãi cho
          khách hàng
        <br>
        - Tuy nhiên LAVERA Shop cũng có nhược điểm là mẫu mã và số lượng nước hoa sẽ ít hơn các shop khác vì hàng xách
          tay không mang được số lượng quá nhiều.
      </div>
    </div>

    <div class="mb-8 px-4">
      <div class="text-2xl font-bold">THÔNG TIN</div>
      <div class="text-base pt-2 break-words font-judson">
        1. lavera perfume là gì
        <br>
        2. Quy chế hoạt động
        <br>
        3. Hợp tác với Thương hiệu
        <br>
        4. Liên hệ
      </div>
    </div>
    <div class="relative px-4">
      <div class="text-2xl font-bold">CHÍNH SÁCH</div>
      <div class="text-base pt-2 break-words font-judson">
        1. Chính sách bảo mật
        <br>
        2. Chính sách bảo hành
        <br>
        3. Chính sách giao hàng và đổi trả
        <br>
        4. Thanh toán
      </div>
      <div class="w-[107px] h-10 absolute right-0 bottom-0">
        <img src="https://content.pancake.vn/1/3e/65/65/19/4989110038f25b22cddd9377f2332a208ce00656622701b75754ae4a-w:975-h:350-l:4108-t:image/webp.png" alt="Payment">
      </div>
    </div>
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

</template>

<script>
import Slider from "@/pages/Home/Slider.vue";
import Categories from "@/pages/Home/Categories.vue";
import Information from "@/pages/Home/Information.vue";
import Brands from "@/pages/Home/Brands.vue";
import Chanel from "@/pages/Home/Chanel.vue";
import Order from "@/pages/Home/Order.vue";

export default {
  components:{
    Slider,
    Categories,
    Information,
    Brands,
    Chanel,
    Order
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