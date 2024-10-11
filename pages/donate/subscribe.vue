<template>
  <Head>
    <Title>Youngminds ET | Donations</Title>
    <Meta name="description" content="YoungMind's ongoing initiatives" />
  </Head>
  <div class="mt-28 md:mt-40 lg:mt-48 responsive-px py-4 col-flex gap-8">
    <div
      class="lg:w-5/6 w-full xl:mt-8 flex flex-col-reverse md:flex-row justify-start items-center md:gap-8 lg:gap-24"
    >
      <div class="flex flex-col items-start gap-6 md:gap-10 md:justify-between">
        <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
          Subscribe to our cause
        </p>
        <div
          class="flex flex-col gap-4 lg:w-1/2 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10"
        >
          <p>
            Your subscription will help us provide underserved students with
            access to quality education in a sustainable way.
          </p>
        </div>
      </div>
      <div id="stripe-buy-button" class="mb-4 md:mb-0"></div>
    </div>
    <div
      class="lg:w-5/6 w-full xl:mt-8 flex flex-col-reverse md:flex-row justify-start items-center md:gap-8 lg:gap-24"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
        <SubscriptionCard
          v-for="(model, index) in subscriptionModels"
          :key="index"
          :amount="model.amount"
          :description="model.description"
          :link="model.link"
          :caption="model.caption"
          :isDefault="model.default"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubscriptionCard from "~/components/SubscriptionCard.vue";

export default {
  components: {
    SubscriptionCard,
  },
  data() {
    return {
      subscriptionModels: [
        {
          amount: "$3",
          description: "Pennies",
          link: "https://buy.stripe.com/28o7sXdp8c5uduo4gi",
          caption: "One exercise book and stationary supplies",
          default: false,
        },
        {
          amount: "$5",
          description: "Couple of Pennies",
          link: "https://buy.stripe.com/8wM9B598Sc5u3TOdQR",
          caption: "Couple of exercise books and stationary supplies",
          default: true,
        },
        {
          amount: "$10",
          description: "A Whole Dollar",
          link: "https://buy.stripe.com/5kAcNh4SCb1q3TOaEH",
          caption: "Exercise books, stationary supplies and a school bag",
          default: false,
        },
      ],
    };
  },
};
</script>
