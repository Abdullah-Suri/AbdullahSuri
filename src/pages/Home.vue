<template>
  <div id="preloader" v-if="loading">
    <div class="line"></div>
  </div>
  <div v-else>
    <Header @scrollIntoView="scrollToElement" />
    <CustomScrollbar ref="scrollElement" class="!h-screen">
      <div id="smooth-wrapper" class="flex lg:flex-row flex-col lg:whitespace-nowrap min-h-screen">
        <div id="particles-js" class="absolute top-0 left-0 lg:h-full max-lg:h-screen max-lg:w-full"></div>
          <HeroSection/>
          <AboutMe/>
          <Portfolio/>
      </div>
    </CustomScrollbar>
  </div>
</template>

<script>
import AOS from 'aos'
import CustomScrollbar from '../components/CustomScrollbar.vue';
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue'
import AboutMe from '../components/AboutMe.vue';
import Portfolio from '../components/Portfolio.vue';

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    AOS.init();
    setTimeout(() => {
      const preLoader = document.getElementById('preloader')
      preLoader.classList.add('preloaded')
    }, 1000);
    setTimeout(() => {
      this.loading = false;
    }, 1900);
  },
  components: {
    CustomScrollbar,
    Header,
    HeroSection,
    AboutMe,
    Portfolio,
  },
  methods: {
    scrollToElement(section) {
      console.log("call hua hai",section);
      const scrollElement = this.$refs['scrollElement'];
      switch (section) {
        case 'home':
          scrollElement.scrollToHome();
          break;
        case 'about':
          scrollElement.scrollToAbout();
          break;
        case 'portfolio':
          scrollElement.scrollToPortfolio();
          break;
        default:
          break;
      }
    },
  },
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