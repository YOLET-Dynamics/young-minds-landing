export default {
  methods: {
    toggleHam() {
      document.querySelector("body").classList.toggle("overflow-hidden");
      document.querySelector(".tham").classList.toggle("tham-active");
      document.querySelector("#hamburger").classList.toggle("hidden");
      document.querySelector("#overlay").classList.toggle("overlay");
    },
  },
};
