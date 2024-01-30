<!-- BackToTopButton.vue -->
<template>
    <button @click="scrollToTop" class="back-to-top">
      Back to Top
    </button>
  </template>
  
  <script>
  import SmoothScroll from 'smooth-scroll';
  
  export default {
    methods: {
      scrollToTop() {
        new SmoothScroll().animateScroll(0, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .back-to-top {
    background-color: black;
    height: 50px;
    width: 50px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    /* Add additional styling based on your design */
  }
  </style>
  