
<template>
  <h1 class="text-2xl font-bold text-color-dark max-md:text-xl max-lg:text-center">Sản phẩm</h1>
  <div class="mt-8 md:container max-md:px-2 mx-auto product">
    <RouterLink :to="{ name : 'create-products'}">
      <button class="px-5 font-semibold py-2 bg-color-13 text-sm text-color-white rounded-lg max-md:px-3">Thêm sản phẩm</button>
    </RouterLink>
    <div class="bg-color-white-2 mt-10 rounded-lg max-md:rounded-lg text-center shadow-shadow-5 transition-all duration-300
      ease-in-out hover:shadow-none max-md:px-2">
      <div class="py-5 pl-3 max-lg:py-3 max-md:pl-1">
        <div class="h-10 relative border pl-3 border-color-light w-1/2 rounded-lg flex justify-between items-center max-md:h-8">
          <input v-model="searchQuery" @input="searchProducts" placeholder="Nhập từ khóa..." type="search" class="w-full bg-color-white-2 outline-none text-color-9 text-base max-md:text-xs">
          <button class="px-2 hover:text-color-2 text-color-3">
            <span class="material-icons-sharp text-3xl max-md:text-xl">search</span>
          </button>
        </div>
      </div>
      <div class="overflow-x-auto w-full max-md:my-0 max-md:mx-auto">
        <table class="w-full border-collapse min-w-[600px]">
          <thead>
          <tr class="border-b border-color-light">
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">STT</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">Hình ảnh</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">
              <div class="flex gap-2 items-center justify-center">
                Tên sản phẩm
                <svg @click="sortBy('title')" class="cursor-pointer" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">
              <div class="flex gap-2 items-center justify-center">
                Giá cũ
                <svg @click="sortBy('price')" class="cursor-pointer" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">
              <div class="flex gap-2 items-center justify-center">
                Giảm giá
                <svg @click="sortBy('price')" class="cursor-pointer" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">
              <div class="flex gap-2 items-center justify-center">
                Số lượng
                <svg @click="sortBy('position')" class="cursor-pointer" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.62402 2.25024V9.62525M8.62402 9.62525L10.875 6.87512M8.62402 9.62525L6.375 6.87512" stroke="#475467" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.37402 9.75012V2.37512M3.37402 2.37512L5.625 5.12524M3.37402 2.37512L1.125 5.12524" stroke="#98A2B3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Hành động</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in products">
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap" >{{ (currentPage - 1) * limit + index + 1 }}</td>
            <td class="border-b border-color-light text-color-dark flex justify-center items-center">
              <img :src="item.thumbnail" alt="Image" class="w-20 h-20 max-md:h-12 max-md:w-12">
            </td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.title }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.price }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.discount }} %</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.quantity }}</td>

            <td class="h-10 border-b border-color-light text-color-dark whitespace-nowrap">
              <RouterLink :to="`/admin/products/edit/${item.id}`">
                <button class="px-5 font-semibold py-1 bg-color-13 text-color-white rounded-lg max-md:text-xs max-md:px-2 whitespace-nowrap">Sửa</button>
              </RouterLink>
              <button @click="handleDelete(item.id)" class="px-5 font-semibold py-1 bg-color-2 ml-1 text-color-white rounded-lg max-md:text-xs max-md:px-2 whitespace-nowrap">Xóa</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-center items-center gap-1 my-5">
        <button
            v-for="page in totalPage"
            :key="page"
            @click="handlePageChange(page)"
            :class="[
      'h-9 w-9 rounded-md flex justify-center items-center text-base transition-all duration-150',
      page === currentPage
        ? 'bg-[#0396ff] text-white font-semibold'
        : 'border border-color-3 text-color-9 hover:text-white hover:bg-[#0396ff]'
    ]"
        >
          {{ page }}
        </button>
      </div>

    </div>
  </div>

</template>

<script>
import { ElNotification } from 'element-plus';
import {deleteProducts, getProducts} from "@/Service/productsService.js";

export default {
  data(){
    return{
      products : [],
      searchQuery: "",
      allProducts: [],
      sortKey: "",
      sortAscending: true,
      totalPage: 0,
      currentPage: 1,
      limit: 10,
    }
  },
  methods:{
    async handleDelete (id){
      const result = await deleteProducts(id)
      if(result){
        ElNotification({
          title: 'Success',
          message: 'Xóa thành công sản phẩm',
          type: 'success',
        })
        await this.loadProducts();
      }
    },
    async loadProducts(page = 1, limit = 10) {
      try {
        const result = await getProducts({
          page: page,
          limit : limit
        });
        this.products = result.result.data;
        this.allProducts = result.result.data;
        this.totalPage = result.result.totalPage;
      } catch (err) {
        console.log("Lỗi khi lấy danh sách sản phẩm", err);
      }
    },
    searchProducts() {
      if (!this.searchQuery) {
        this.products = this.allProducts;
      } else {
        this.products = this.allProducts.filter((product) =>
            product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    handlePageChange(page) {
      if (page < 1 || page > this.totalPage) return;
      this.currentPage = page;
      this.loadProducts(this.currentPage, this.limit);
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortAscending = !this.sortAscending;
      } else {
        this.sortKey = key;
        this.sortAscending = true;
      }

      this.products.sort((a, b) => {
        let valA = a[key];
        let valB = b[key];

        if (typeof valA === "string") valA = valA.toLowerCase();
        if (typeof valB === "string") valB = valB.toLowerCase();

        return this.sortAscending ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
      });
    },
  },
  async created(){
    await this.loadProducts(this.currentPage, this.limit);
  }
}
</script>