<template>
  <div>
    <div
      class="
        2xl:ml-10
        xl:ml-10
        lg:ml-10
        md:ml-56
        sm:ml-36
        4xl:ml-20
        5xl:ml-4
        xs:ml-3
        grid
        2xl:grid-cols-3
        xl:grid-cols-3
        lg:grid-cols-3
        md:grid-cols-1
        grid-cols-1
      "
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="card w-96 mt-4 bg-base-100 shadow-xl"
      >
        <figure>
          <img class="mt-3" :src="product.img" alt="Shoes" />
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
  </div>

  <div class="mt-3">
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => store.getters["product/allProducts"]);
function add(product) {
  store.dispatch("cart/add", product);
}
</script>
