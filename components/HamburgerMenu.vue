<template>
  <div
    id="hamburger"
    class="hidden z-40 absolute top-22 right-2 px-4 py-4 bg-white rounded-lg text-xs shadow-md min-w-min"
  >
    <ul class="flex flex-col gap-8 w-72 h-auto items-start font-body text-base">
      <div class="w-full flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/our-story" class="active:text-ymGreen-700"
            ><li>Our Story</li></NuxtLink
          >
        </div>
        <div class="flex justify-between items-center">
          <NuxtLink to="/contact" class="active:text-ymGreen-700"
            ><li>Get in Touch</li></NuxtLink
          >
        </div>
      </div>

      <div class="w-full flex">
        <MainButton
          :buttonClass="buttonClass"
          :buttonText="buttonText"
          :buttonLink="buttonLink"
          @click="toggleHam"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import toggleHam from "~/mixins/toggleHam";
import MainButton from "~/components/MainButton.vue";

export default {
  components: {
    MainButton,
  },
  data() {
    return {
      buttonClass:
        "w-full py-2 px-2 sm:py-3 sm:px-4 lg:py-3 lg:px-4 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
      buttonText: "Donate",
      buttonLink: "/donations",
    };
  },
  mixins: [toggleHam],
  methods: {
    toggleAbout() {
      document.querySelector("#aboutList").classList.toggle("list-visible");
      document.querySelector("#aboutList").classList.toggle("hidden");
    },
    toggleExplore() {
      document.querySelector("#exploreList").classList.toggle("list-visible");
      document.querySelector("#exploreList").classList.toggle("hidden");
    },
  },
};
</script>
