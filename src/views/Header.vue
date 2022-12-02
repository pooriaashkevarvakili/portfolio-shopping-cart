<template>
  <div
    class="
      flex
      bg-black
      rounded-sm
      2xl:px-10
      xl:px-10
      lg:px-10
      md:px-2
      p-4
      2xl:w-full
      xl:w-full
      lg:w-full
      md:w-full
      sm:w-full
      4xl:w-full
      5xl:w-full
      xs:w-full
      justify-between
    "
  >
    <div class="text-white">shopping-cart</div>
    <div class="text-white">
      <router-link to="/cart">
        <div class="flex">
          <svg
            class="text-white w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span class="text-white">{{ countCartItems }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const countCartItems = computed(() => store.getters["cart/count"]);
</script>

<style>
</style>