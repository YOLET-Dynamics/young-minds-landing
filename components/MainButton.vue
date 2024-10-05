<template>
  <NuxtLink :class="buttonClass" :to="buttonLink" smooth>
    {{ buttonText }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
  },
};
</script>
