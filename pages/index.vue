<template>
  <Head>
    <Title>YoungMinds Initiative</Title>
    <Meta name="description" content="One step at a time" />
  </Head>
  <div class="h-screen flex flex-col justify-between dm-font">
    <div class="flex flex-col">
      <main></main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
