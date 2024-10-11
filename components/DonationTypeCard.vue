<template>
  <div :class="cardClasses">
    <div class="flex flex-col gap-2">
      <div class="text-2xl font-bold font-body mb-2">{{ title }}</div>
      <div class="text-gray-700 font-body mb-4">{{ caption }}</div>
    </div>
    <NuxtLink
      :to="link"
      class="w-24 md:w-44 cursor-pointer py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover"
    >
      {{ buttonText }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    caption: String,
    link: String,
    buttonText: String,
    isActive: Boolean,
  },
  computed: {
    cardClasses() {
      return {
        "border-2 border-ymPink-700": this.isActive,
        "border-2 border-transparent": !this.isActive,
        "flex flex-col justify-between p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300": true,
      };
    },
  },
};
</script>
