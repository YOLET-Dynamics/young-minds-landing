<template>
  <Head>
    <Title>Youngminds ET | Donations</Title>
    <Meta name="description" content="YoungMind's ongoing initiatives" />
  </Head>
  <div class="mt-28 md:mt-40 lg:mt-48 responsive-px py-4 col-flex gap-8">
    <div
      class="lg:w-5/6 w-full xl:mt-8 flex flex-col-reverse md:flex-row justify-start items-center md:gap-8 lg:gap-24"
    >
      <div
        class="md:basis-1/2 flex flex-col items-start gap-6 md:gap-10 md:justify-between"
      >
        <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
          Be Part of It
        </p>
        <div
          class="flex flex-col gap-4 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10"
        >
          <p>
            Your donation can be the bridge that turns a child’s struggle into
            success, offering them hope and a brighter future. Together, we can
            give these children the tools they need to build a better
            tomorrow—one backpack, one book, one dream at a time.
          </p>
        </div>
      </div>
    </div>
    <div class="lg:w-5/6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DonationTypeCard
          class="h-full"
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :caption="card.caption"
          :link="card.link"
          :buttonText="card.buttonText"
          :isActive="card.isActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DonationTypeCard from "@/components/DonationTypeCard.vue";

export default {
  components: {
    DonationTypeCard,
  },
  data() {
    return {
      cards: [
        {
          title: "Subscription",
          caption:
            "Join us in making a lasting impact by supporting children in need with a monthly gift. Your ongoing generosity will provide them with continuous support and the chance to thrive.",
          link: "/donate/subscribe",
          buttonText: "Subscribe",
          isActive: true,
        },
        {
          title: "One-time",
          caption:
            "Make a difference today—your one-time gift can help a child in need take a step closer to a brighter future.",
          link: "https://donate.stripe.com/7sI9B53Oy4D29e8cMS",
          buttonText: "Donate",
          isActive: false,
        },
      ],
    };
  },
};
</script>
