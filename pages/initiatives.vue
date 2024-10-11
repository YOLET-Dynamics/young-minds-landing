<template>
  <Head>
    <Title>Youngminds ET | Our Story</Title>
    <Meta name="description" content="YoungMind's ongoing initiatives" />
  </Head>
  <div class="mt-28 md:mt-40 lg:mt-48 responsive-px py-4 col-flex gap-8">
    <div
      class="lg:w-5/6 w-full xl:mt-8 flex flex-col md:flex-row items-start md:items-center md:gap-8 lg:gap-12"
    >
      <div
        class="md:basis-1/2 flex flex-col items-start gap-6 md:gap-10 md:justify-between"
      >
        <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
          Our Initiatives
        </p>
        <div
          class="flex flex-col gap-4 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10"
        >
          <InitiativeCard
            v-for="initiative in initiatives"
            :key="initiative.id"
            :title="initiative.title"
            :description="initiative.description"
            :image="initiative.image"
            :route="initiative.route"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InitiativeCard from "@/components/InitiativeCard.vue";
import wegeneLogo from "@/assets/imgs/wegene-logo.png";

export default {
  components: {
    InitiativeCard,
  },
  data() {
    return {
      initiatives: [
        {
          id: 1,
          title: "Collaboration with Wegene Foundation",
          description:
            "Collaboration with Wegene Ethiopia Foundation to provide access and empower the next generation through our first initiative - Student Sponsorshop Program.",
          image: wegeneLogo,
          route: "/projects/wegene-foundation",
        },
      ],
    };
  },
};
</script>
