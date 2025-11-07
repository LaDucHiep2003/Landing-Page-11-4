<template>
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

</template>
<script setup lang="ts">
</script>