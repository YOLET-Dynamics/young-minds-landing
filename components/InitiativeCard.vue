<template>
  <NuxtLink :to="route">
    <div class="card">
      <div class="bg-ymBlack-500 py-8">
        <img
          :src="image"
          alt="Initiative Image"
          class="w-full h-48 rounded-md object-contain"
        />
      </div>
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
        <p class="text-gray-700 line-clamp-3">{{ description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    route: String,
  },
};
</script>
