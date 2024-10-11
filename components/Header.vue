<template>
  <nav
    id="navbar"
    class="fixed top-0 w-full z-50 shadow-md responsive-px py-6 md:py-8 xl:py-10 flex items-center justify-between bg-white"
  >
    <!-- Header Logo -->
    <NuxtLink to="/">
      <img
        src="~/assets/imgs/logo-02-04.png"
        class="h-14 md:h-20 lg:h-24 xl:h-28"
        alt="YoungMinds ET Inc Logo"
      />
    </NuxtLink>
    <!-- Nav Links -->
    <div>
      <ul
        class="flex justify-between gap-12 lg:gap-16 xl:gap-36 font-body responsive-link-text lg:text-xl"
      >
        <li class="cursor-pointer text-button-links">
          <NuxtLink to="/initiatives">Initiatives</NuxtLink>
        </li>
        <span class="hidden lg:flex">/</span>
        <li class="hidden lg:flex cursor-pointer text-button-links">
          <NuxtLink to="/our-story">Our Story</NuxtLink>
        </li>
        <span class="hidden lg:flex">/</span>
        <li class="hidden lg:flex cursor-pointer text-button-links">
          <NuxtLink to="/contact">Be Part of It</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- Mobile Hamburger Menu -->
    <div class="sm:hidden">
      <HamburgerButton />
    </div>
    <HamburgerMenu />
    <!-- Desktop Actions -->
    <div class="hidden sm:flex gap-4 lg:gap-8 items-center">
      <MainButton
        :buttonClass="buttonClass"
        :buttonText="buttonText"
        :buttonLink="buttonLink"
      />
    </div>
  </nav>
</template>

<script>
import MainButton from "~/components/MainButton.vue";

export default {
  components: {
    MainButton,
  },
  data() {
    return {
      buttonClass:
        "py-1 px-2 sm:py-2 sm:px-4 lg:py-3 lg:px-4 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
      buttonText: "Donate",
      buttonLink: "/donations",
    };
  },
};
</script>
