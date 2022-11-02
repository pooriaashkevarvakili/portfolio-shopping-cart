<template>
  <div class="overflow-x-auto w-full">
    <div
      class="flex flex-col items-center justify-center h-screen w-full"
      v-if="allProducts.length == 0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-16 h-16"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>

      <span class="text-2xl"> cart Empty </span>
      <router-link class="bg-black px-10 py-3 rounded-xl mt-5 text-white" to="/"
        >home</router-link
      >
    </div>
    <table v-else class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Namecar</th>
          <th>total</th>
          <th>totalAmount</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="item in allProducts" :key="item.id">
          <th></th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="item.img" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ item.name }}</div>
                <div class="text-sm opacity-50">{{ item.price }}</div>
              </div>
            </div>
          </td>
          <td>
            <button
              @click="increment(item.id)"
              class="button-sm rounded-full p-1 bg-black text-white"
            >
              +
            </button>
            {{ item.quantity }}
            <button
              @click="decrement(item.id)"
              class="button-sm rounded-full p-1 bg-black text-white"
            >
              -
            </button>
          </td>
          <td>{{ totalAmount }}</td>
          <th>
            <button
              @click="removeItemFromCart(item.id)"
              class="rounded-xl bg-red-400 p-5 text-white"
            >
              delete
            </button>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr class="">
          <th></th>
          <th></th>
          <th>
            <button @click="clear" class="rounded-xl bg-red-400 p-5 text-white">
              clearCart
            </button>
          </th>
          <th>
            <button
              @click="Checkout"
              class="rounded-xl bg-red-400 p-5 text-white"
            >
              Checkout
            </button>
          </th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const allProducts = computed(() => store.getters["cart/allProducts"]);
const totalAmount = computed(() => store.getters["cart/totalAmount"]);
function clear() {
  store.dispatch("cart/clear");
}
function increment(id) {
  store.dispatch("cart/increment", id);
}
function decrement(id) {
  store.dispatch("cart/decrement", id);
}
function removeItemFromCart(id) {
  store.dispatch("cart/remove", id);
}
function Checkout() {
  Swal.fire({
    title: "product success",
    icon: "success",
    showConfirmButton: "false",
    timerProgressBar: true,
    timer: 3000,
    toast: true,
    position: "top",
  });
}
</script>

<style>
</style>