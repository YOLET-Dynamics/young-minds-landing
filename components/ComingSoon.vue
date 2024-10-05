<template>
  <div
    class="w-full my-24 responsive-px lg:mt-36 flex flex-col gap-6 items-center"
  >
    <div class="flex flex-col gap-6 md:gap-10 items-center">
      <p class="font-body responsive-heading">Coming Soon</p>
      <MainButton
        :buttonClass="buttonClass"
        :buttonText="buttonText1"
        :buttonLink="buttonLink1"
      />
    </div>
  </div>
</template>

<script>
import MainButton from "~/components/MainButton.vue";

export default {
  components: {
    MainButton,
  },
  data() {
    return {
      buttonClass:
        "w-full py-3 px-2 font-body sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
      buttonText1: "Back to Home",
      buttonLink1: "/",
    };
  },
};
</script>
