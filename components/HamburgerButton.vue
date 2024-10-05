<template>
  <div class="tham tham-e-squeeze tham-w-6" @click="toggleHam">
    <div class="tham-box">
      <div class="tham-inner bg-black"></div>
    </div>
  </div>
</template>

<script>
import toggleHam from "~/mixins/toggleHam";

export default {
  mixins: [toggleHam],
};
</script>
