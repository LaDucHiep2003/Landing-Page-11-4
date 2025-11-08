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
    <div class="border-2 border-[#000] flex justify-center items-center px-5 mt-1">
      <div class="text-base font-bold">Hiển thị tất cả</div>
    </div>
  </div>

  <div v-for="(item, index) in dataRevews" :key="index" class="pb-5 border-b border-black pt-2 px-2">
    <div class="flex justify-start items-center gap-5 flex-wrap relative">
      <div class="w-[71px] h-[72px]">
        <img class="w-full h-full rounded-full object-cover" :src="item.avatar" alt="Avatar">
      </div>
      <div class="flex gap-1">
        <div class="icon-star h-3 w-3"></div>
        <div class="icon-star h-3 w-3"></div>
        <div class="icon-star h-3 w-3"></div>
        <div class="icon-star h-3 w-3"></div>
        <div class="icon-star h-3 w-3"></div>
      </div>
      <div class="text-[10px] font-bold bg-[#0f1015] text-white p-1 rounded-xl">chất lượng sản phẩm tuyệt vời</div>
      <div class="flex gap-2 items-center absolute right-[30%] bottom-0">
        <div class="icon-confirm"></div>
        <div class="text-[#47aeffbf] text-xs font-bold">
          Chứng nhận đã mua hàng</div>
      </div>
    </div>
    <div class="px-6">
      <div class="text-lg font-bold">{{ item.fullName }} | {{ item.created_at }}</div>
      <div class="text-[13px] font-bold mt-1">{{ item.description}} </div>
      <img v-if="item.image" class="w-28 h-40 mt-5" :src="item.image" alt="Image-comment">
    </div>
  </div>


</template>
<script>
export default {
  data(){
    return{
      dataRevews:[
        {
          title: "chất lượng sản phẩm tuyệt vời",
          fullName: "Vũ Thắm",
          created_at: "18/03/2024",
          description: "Giao hàng tốc độ, nhanh ơi là nhanh. Đóng gói nhìn sang chảnh ghê. Thơm ngọt ngào nma hơi unisex 1 tí theo cảm nhận của mik. Mùi này hợp mùa thu đông, kiểu huyền bí quyến rũ, 1 chút sexy.",
          avatar: "https://content.pancake.vn/1/s471x628/fwebp/34/26/33/fa/440efea9864a4307409f12b7bde33441e034bdf263e61b1299a0ec8c-w:1536-h:2048-l:299940-t:image/jpeg.jpg",
          image: "https://content.pancake.vn/1/s508x746/fwebp/c4/60/4d/eb/08774f0b0b92d93c199eeddff513e366568b0bc53035792f1f085463-w:1396-h:2048-l:238341-t:image/jpeg.jpg"
        },
        {
          title: "giao hàng nhanh",
          fullName: "Minh Anh",
          created_at: "13/03/2024",
          description: "Nước hoa cực kì ưng luôn ❤❤ đầu tiên hơi lo xíu sợ bị đổ nhưng đóng gói cực kì chắc chắn luôn. Mùi Maison này cực kì thơm dễ chịu nha các bạn. Mình thấy còn thơm hơn cả lolita nữa 😍😍 thái độ phục vụ của shop cực kì tốt 😍 rất hài lòng. Sẽ ủng hộ shop lâu dài",
          avatar: "https://content.pancake.vn/1/s472x630/fwebp/6d/7b/af/a5/bfc7ac15559964c63f81f8cf22929c8e86cc8c2b38b73096ae5ed10a-w:526-h:701-l:38493-t:image/jpeg.jpg",
          image: "https://content.pancake.vn/1/s555x554/fwebp/30/87/cd/94/a6bcf381f4cd43ad9839ff41add9775c34ea7c667b5c621e9ff3c403-w:1170-h:1166-l:130119-t:image/jpeg.jpg"
        },
        {
          title: "chất lượng sản phẩm tuyệt vời",
          fullName: "Minh Híp",
          created_at: "17/05/2024",
          description: "Đây là lần thứ 3 đặt nước hoa ở shop rất thích shop tư vấn nhiệt tình lần nào mua cũng có quà kèm theo rất thích...giao hàng thì cực nhanh. Sẽ ủng hộ shop lâu dài nè",
          avatar: "https://content.pancake.vn/1/s487x472/fwebp/36/dd/fc/e7/7699178769235b6f33bf331b422740f96916c614b5593650bfc1c5f9-w:2048-h:1984-l:1272028-t:image/jpeg.jpg",
          image: "https://content.pancake.vn/1/s513x684/fwebp/5b/e9/9e/72/b5f0d949432ffb582cc56c8594183396d60a9f9b9219ead57bbab917-w:1536-h:2048-l:309801-t:image/jpeg.jpg"
        },
        {
          title: "shop tư vấn nhiệt tình",
          fullName: "Phương Thùy",
          created_at: "15/06/2024",
          description: "Rất tốt, từ sản phẩm đến dịch vụ, mình đã mua 3 chai cho người thân của mình dùng rồi. Giá tốt mà chất lượng lắm.",
          avatar: "https://content.pancake.vn/1/fwebp/bb/a1/43/2b/6f41f5fc49c8b4d55efa6bd6fbe2f6b7e21f6c588cd6788c459e490d-w:318-h:480-l:37501-t:image/jpeg.jpg",
        },
        {
          title: "shop tư vấn nhiệt tình ",
          fullName: "Như Ngọc",
          created_at: "07/07/2024",
          description: "Giao hàng tốc độ, nhanh ơi là nhanh. Đóng gói nhìn sang chảnh ghê. Thơm ngọt ngào nma hơi unisex 1 tí theo cảm nhận của mik. Mùi này hợp mùa thu đông, kiểu huyền bí quyến rũ, 1 chút sexy.",
          avatar: "https://content.pancake.vn/1/s484x632/fwebp/6d/22/63/a2/7b7e6b73b71880c7abc98fe3d4cdea2feda2b73153e06f45897da5ab-w:960-h:1252-l:174373-t:image/jpeg.jpg",
        },
        {
          title: "shop tư vấn nhiệt tình",
          fullName: "QUỲNH HƯƠNG",
          created_at: "10/07/2024",
          description: "Mùi hương dễ chịu, có tầng hương ngọt nên khá thích phù hợp đi làm đi chơi. Đóng gói cẩn thận , thích cái nữa là ship nhanh không cần chờ lâu.. nói chung sản phẩm rất ok",
          avatar: "https://content.pancake.vn/1/s484x605/fwebp/0b/a9/34/4f/0dfb5d219fd9edfb2b6d20b5169a1ba9c59a0096a8ff455e8566f2f8-w:680-h:850-l:625896-t:image/png.png",
        },
        {
          title: "chất lượng sản phẩm tuyệt vời",
          fullName: "THÚY ANH",
          created_at: "11/07/2024",
          description: "Thấy bạn bè giới thiệu mới qua đây. hài lòng với chất lượng mà sản phẩm mang lại, lưu hương lâu, thơm chuẩn mùi. 10/10 ạ",
          avatar: "https://content.pancake.vn/1/s484x604/fwebp/fc/d7/8c/1a/a279740ea6d71f27609ad5772a94e9b5cbe243f82c3434ccd1511358-w:723-h:901-l:729109-t:image/png.png",
        },
        {
          title: "chất lượng sản phẩm tuyệt vời",
          fullName: "ANH NAM",
          created_at: "12/07/2024",
          description: "Mới lấy em creed cx đặt ở shop này, mà mất mỗi c đợi hơi lâu thôi, còn nước hoa chất lượng so với giá shop sale thì không đòi hòi gì hơn",
          avatar: "https://content.pancake.vn/1/fwebp/17/41/65/23/af77fa7155eea1ddce5c9697792c5537208be0c443655ee81eb7cb80-w:338-h:600-l:36115-t:image/jpeg.jpg",
          image: "https://content.pancake.vn/1/s515x687/fwebp/75/b6/d8/ca/d78496640352d82f4152c29bcc0f113d9c427d9520b2e174b8d4b46c-w:720-h:960-l:75244-t:image/jpeg.jpg"
        },
        {
          title: "shop tư vấn nhiệt tình ",
          fullName: "THẢO ANH",
          created_at: "15/07/2024",
          description: "Sản phẩm tem đầy đủ . Mình k check nhưng chắc là hàng chính hãng . Shop đóng gói hàng có bọc chống sốc . Nước hoa xịt thơm mùi hoa nhài dễ chịu . Với giá tiền này thì cũng hợp lý vì mua về sài được chứ k bị giống nước hoa dởm tốn tiền mà k sài đc . Cho shop 5sao . Đáng đồng tiền bát gạo",
          avatar: "https://content.pancake.vn/1/s484x604/fwebp/28/50/e0/6b/3ea9c88509be44d21efe3a900650422b76e7a7c63c38470f5268c870-w:687-h:856-l:808180-t:image/png.png",
        },
      ]
    }
  }
}
</script>