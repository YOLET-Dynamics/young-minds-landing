<script>
import z from "zod";
import FormButton from "~/components/FormButton.vue";

export default {
  components: {
    FormButton,
  },
  data() {
    return {
      isSubmitting: false,
      firstname: "",
      email: "",
      message: "",
      maxCharacters: 1024,
    };
  },
  computed: {
    buttonText() {
      return this.isSubmitting ? "Sending..." : "Send";
    },
    buttonClass() {
      return this.isSubmitting
        ? "mt-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg form-button main-button hover:main-hover opacity-50"
        : "mt-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg form-button main-button hover:main-hover";
    },
    remainingCharacters() {
      return this.maxCharacters - this.message.length;
    },
  },
  methods: {
    updateRemainingCharacters() {
      if (this.message.length > this.maxCharacters) {
        this.message = this.message.substring(0, this.maxCharacters);
      }
    },
    validateForm() {
      const schema = z.object({
        firstname: z
          .string()
          .min(2, "First name must be at least 2 characters")
          .max(24, "First name must be at most 24 characters"),
        email: z.string().email("Invalid email address"),
        message: z
          .string()
          .max(1024, "Message can only be 1024 characters")
          .nonempty("Message is required"),
      });

      try {
        schema.parse({
          firstname: this.firstname,
          email: this.email,
          message: this.message,
        });
        return true;
      } catch (e) {
        const errorMessages = e.errors.map((err) => err.message).join("\n");
        alert(errorMessages);
        return false;
      }
    },
    resetForm() {
      this.firstname = "";
      this.email = "";
      this.message = "";
      return;
    },

    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      try {
        this.isSubmitting = true;
        const response = await fetch("https://submit-form.com/T96WUyRYX", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstname: this.firstname,
            email: this.email,
            message: this.message,
          }),
        });
        if (response.ok) {
          alert("Thank you for reaching out! We will get back to you soon.");
          this.$router.replace("/");
        } else {
          alert("Failed to submit form!");
          this.resetForm();
        }
      } catch (e) {
        alert("Failed to submit form!");
        this.resetForm();
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<template>
  <Head>
    <Title>YoungMinds ET | Get in touch</Title>
    <Meta name="description" content="Waiting list for educators." />
  </Head>
  <div class="mt-28 md:mt-40 lg:mt-48 mb-8 responsive-px py-4 col-flex">
    <div
      class="xl:my-16 col-flex lg:flex-row lg:items-center xl:w-11/12 gap-8 xl:gap-16"
    >
      <div class="md:basis-1/2 col-flex gap-4">
        <img
          src="~/assets/imgs/logo-02-06.png"
          class="mb-4 md:mb-8 h-32 md:h-48"
          alt="MemhirET Logo"
        />
        <p
          class="md:mb-2 main-font font-medium text-center responsive-heading lg:text-4xl xl:text-5xl lg:tracking-wider"
        >
          Collaborate with us
        </p>
        <p
          class="w-11/12 md:w-1/2 lg:w-9/12 font-body font-normal text-center text-xs md:text-sm xl:text-lg lg:tracking-wide leading-relaxed xl:leading-loose"
        >
          Get in touch if you want to be part of the story
        </p>
        <form
          class="w-full col-flex gap-4 md:gap-8"
          @submit.prevent="submitForm"
        >
          <div
            class="w-10/12 flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-8"
          >
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <input
                  type="text"
                  name="firstname-e"
                  id="firstname-e"
                  v-model="firstname"
                  placeholder="First Name"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ymGreen-700"
                  minlength="2"
                  maxlength="24"
                  required
                />
              </div>
            </div>
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <input
                  type="email"
                  name="email-e"
                  id="email-e"
                  v-model="email"
                  placeholder="Email"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  required
                />
              </div>
            </div>
          </div>
          <div
            class="w-10/12 flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-8"
          >
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  v-model="message"
                  @input="updateRemainingCharacters"
                  rows="5"
                  required
                  class="appearance-none relative block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ymGreen-500"
                  placeholder="Your message"
                ></textarea>
                <p class="text-sm text-gray-500 mt-1">
                  {{ remainingCharacters }} characters remaining
                </p>
              </div>
            </div>
          </div>
          <FormButton :buttonClass="buttonClass" :buttonText="buttonText" />
        </form>
      </div>
      <img
        src="~/assets/imgs/child-rm-bg.jpg"
        class="hidden lg:inline-block lg:basis-1/2 lg:w-1/2 lg:h-full rounded-md"
        alt="Child revolving a globe"
      />
    </div>
  </div>
</template>
