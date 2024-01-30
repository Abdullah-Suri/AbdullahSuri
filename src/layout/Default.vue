<template>
    <div ref="horizontalScrollContainer" @wheel.prevent="scrollHandler" class="overflow-y-hidden h-screen">
        <router-view />
    </div>
</template>
<script>
import gsap from 'gsap';
// import SmoothScroll from 'smooth-scroll';
// import ScrollOut from "scroll-out";

export default {
 data() {
    return {
        
    }
 },  
 watch: {
    $route(to, from) {
      this.scrollContent();
    },
  },
  mounted() {
    this.scrollContent();
    // ScrollOut({
    //   onShown: function(el) {
    //     // remove the class
    //     el.classList.remove("animated");

    //     // force reflow
    //     void el.offsetWidth;

    //     // re-add the animated cl
    //     el.classList.add("animated");
    //   }
    // });
  },
  methods: {
    scrollContent() {
      gsap.to('.scroll-container', {
        x: () => -(document.body.offsetWidth - window.innerWidth),
        ease: 'power2.out',
        duration: 50,
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    },
  },
}
</script>
<style>
    
</style>