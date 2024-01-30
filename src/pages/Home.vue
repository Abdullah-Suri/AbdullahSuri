<template>
  <Header />
  <CustomScrollbar class="!h-screen">
    <div ref="" id="smooth-wrapper" class="flex flex-row whitespace-nowrap min-h-screen">
      <div id="particles-js" class="absolute top-0 left-0 h-full"></div>
        <HeroSection />
        <AboutMe />
        <Portfolio/>
        <!-- <section class="scroll-container h-auto w-screen shrink-0 bg-red-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-blue-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-green-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-yellow-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-indigo-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-emerald-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-gray-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-pink-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-orange-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-cyan-400"></section>
        <section class="scroll-container h-auto w-screen shrink-0 bg-emerald-400"></section> -->
    </div>
  </CustomScrollbar>
</template>

<script>
import AOS from 'aos'
import CustomScrollbar from '../components/CustomScrollbar.vue';
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue'
import AboutMe from '../components/AboutMe.vue';
import Portfolio from '../components/Portfolio.vue';

export default {
  mounted() {
    AOS.init();
  },
  components: {
    CustomScrollbar,
    Header,
    HeroSection,
    AboutMe,
    Portfolio,
  }
};
</script>

<style scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.scroll-content {
  display: flex;
}
</style>