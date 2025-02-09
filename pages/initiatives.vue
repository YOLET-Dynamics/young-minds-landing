<template>
  <Head>
    <Title>Youngminds ET | Our Story</Title>
    <Meta name="description" content="YoungMind's ongoing initiatives" />
  </Head>
  <div class="mt-32 md:mt-48 lg:mt-56 responsive-px py-8">
    <div class="max-w-7xl mx-auto">
      <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl mb-4">
        Our Initiatives
      </p>
      <p class="text-gray-600 text-lg mb-12 max-w-2xl">
        Discover the projects and partnerships that are helping us shape the future of Ethiopia's youth.
      </p>
      <div 
        class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full auto-rows-fr"
      >
        <InitiativeCard
          v-for="initiative in initiatives"
          :key="initiative.id"
          :title="initiative.title"
          :description="initiative.description"
          :image="initiative.image"
          :route="initiative.route"
          class="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InitiativeCard from "@/components/InitiativeCard.vue";
import wegeneLogo from "@/assets/imgs/wegene-logo.png";
import youngmindsLogo from "@/assets/imgs/logo-02-04.png";

export default {
  components: {
    InitiativeCard,
  },
  data() {
    return {
      initiatives: [
        {
          id: 1,
          title: "Adina Project",
          description:
            "Christ-centered initiative, dedicated to raising children with love, wisdom and purpose",
          image: youngmindsLogo,
          route: "/projects/adina-project",
        },
        {
          id: 2,
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
