<template>
  <div :class="cardClasses">
    <div class="text-2xl font-bold mb-2">{{ amount }}</div>
    <div class="text-gray-700 mb-4">{{ description }}</div>
    <div class="text-sm text-gray-500 mb-4">{{ caption }}</div>
    <a
      :href="link"
      class="w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover"
      >Subscribe</a
    >
  </div>
</template>

<script>
export default {
  props: {
    amount: String,
    description: String,
    link: String,
    caption: String,
    isDefault: Boolean,
  },
  computed: {
    cardClasses() {
      return {
        "border-4 border-ymPink-700": this.isDefault,
        "border p-6 rounded-lg shadow-lg h-full flex flex-col justify-between": true,
      };
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .card {
    height: 24rem;
  }
}
</style>
