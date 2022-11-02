<template>
  <div
    class="
      mt-5
      ml-10
      grid
      2xl:grid-cols-3
      xl:grid-cols-3
      lg:grid-cols-3
      md:grid-cols-2 md:ml-5
      grid-cols-1
      space-x-3 space-y-3
    "
  >
    <div
      v-for="product in products"
      :key="product.id"
      class="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img :src="product.img" alt="Shoes" />
      </figure>
      <div class="card-body">
        <div class="flex justify-between">
          <div>
            <h2 class="card-title">
              {{ product.name }}
            </h2>
          </div>
          <div>{{ product.price }}</div>
        </div>

        <div class="card-actions flex justify-end">
          <button
            @click="add(product)"
            class="w-24 bg-green-400 p-2 mt-3 rounded-xl text-white"
          >
            add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => store.getters["product/allProducts"]);
function add(product) {
  store.dispatch("cart/add", product);
}
</script>
