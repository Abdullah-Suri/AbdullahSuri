<template>
    <div ref="scrollContainer" class="custom-scrollbar">
      <div class="scroll-content">
        <slot></slot>
        <div class="scroll-progress hide-mobile">
            <div>
               <div class="lg:block hidden"></div>
            </div>
         </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    mounted() {
      this.initializeScrollbar();
    },
    methods: {
        initializeScrollbar() {
        const $scrollContainer = this.$jQuery(this.$refs.scrollContainer);
        const scrollAmount = 200;
        const sensitivity = 100; // Adjust the sensitivity as needed
        if (window.innerWidth >= 1024) {
          $scrollContainer.mCustomScrollbar({
            axis: 'x',
            theme: 'dark-thin',
            scrollbarPosition: 'outside',
            autoHideScrollbar: true,
            scrollInertia: 800,
            mouseWheel: {
              scrollAmount: scrollAmount,
            },
          });

          $scrollContainer.on('mousewheel', (event) => {
            const currentPosition = $scrollContainer.mCustomScrollbar('getScrollPosition').x;
            const scrollAmount = (event.deltaX || event.deltaY) * sensitivity;
            const newScrollPosition = currentPosition - scrollAmount;

            $scrollContainer.mCustomScrollbar('scrollTo', newScrollPosition, {
              scrollInertia: 50,
            });

            event.preventDefault();
          });
        } else {
          // For Mobile 
          $scrollContainer.mCustomScrollbar({
            axis: 'y',
            theme: 'dark-thin',
            scrollbarPosition: 'outside',
            autoHideScrollbar: true,
            scrollInertia: 800,
            mouseWheel: {
              scrollAmount: scrollAmount,
            },
          });
        }
      },
      scrollToHome() {
        const $scrollContainer = this.$jQuery(this.$refs.scrollContainer);
          $scrollContainer.mCustomScrollbar("scrollTo",1,{
              moveDragger:true
          });
          console.log($scrollContainer.scrollAmount);
      },
      scrollToAbout() {
        const $scrollContainer = this.$jQuery(this.$refs.scrollContainer);
          $scrollContainer.mCustomScrollbar("scrollTo",600,{
              moveDragger:true
          });
          console.log($scrollContainer.scrollAmount);
      },
      scrollToPortfolio() {
        const $scrollContainer = this.$jQuery(this.$refs.scrollContainer);
          $scrollContainer.mCustomScrollbar("scrollTo",1100,{
              moveDragger:true
          });
          console.log($scrollContainer.scrollAmount);
      },
    },
  };
</script>