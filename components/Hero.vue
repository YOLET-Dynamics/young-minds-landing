<template>
  <div
    class="w-full mt-28 md:mt-36 lg:mt-44 responsive-px py-4 md:py-6 lg:py-16 flex flex-col items-center xl:flex-row gap-12"
  >
    <div class="lg:basis-1/2 flex flex-col gap-10">
      <div class="flex flex-col gap-8 items-center">
        <div
          class="my-4 px-4 flex flex-col gap-4 md:gap-6 lg:gap-12 items-center justify-center text-center"
        >
          <p class="font-body responsive-subheading lg:tracking-wider">
            Unlocking Potential
          </p>
          <p class="main-font responsive-heading lg:tracking-wide">
            One Student At A Time <br />
          </p>
          <p class="my-1 desc-text responsive-description md:w-7/12">
            Empowering students in need across Ethiopia with education and
            opportunities, creating lasting change and brighter futures.
          </p>
        </div>
        <div class="flex gap-12 lg:gap-24 xl:gap-36 font-body text-sm">
          <MainButton
            :buttonClass="buttonClass2"
            :buttonText="buttonText2"
            :buttonLink="buttonLink2"
          />
          <MainButton
            :buttonClass="buttonClass1"
            :buttonText="buttonText1"
            :buttonLink="buttonLink1"
          />
        </div>
      </div>
    </div>
    <div class="xl:basis-1/2 xl:flex xl:flex-col xl:justify-center">
      <NuxtImg
        src="~/assets/imgs/child-rm-bg.jpg"
        class="w-full rounded-md"
        alt="Child revolving a globe"
      />
      <p class="font-body text-xs text-gray-500 text-right mt-2">
        Image sourced from freepik.com
      </p>
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
      buttonClass1:
        "w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
      buttonText1: "Donate",
      buttonLink1: "/",
      buttonClass2:
        "w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
      buttonText2: "Learn More",
      buttonLink2: "/",
    };
  },
};
</script>
