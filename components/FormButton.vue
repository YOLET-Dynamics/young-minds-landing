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
    isSubmitting: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <button :class="buttonClass" type="submit" :disabled="isSubmitting">
    {{ buttonText }}
  </button>
</template>
