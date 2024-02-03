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
      // initializeScrollbar() {
      //   const $scrollContainer = this.$jQuery(this.$refs.scrollContainer);
      //   const scrollAmount = 200;
      //   const sensitivity = 100; // Adjust the sensitivity as needed
  
      //   $scrollContainer.mCustomScrollbar({
      //     axis: 'x',
      //     theme: 'dark-thin',
      //     scrollbarPosition: 'outside',
      //     autoHideScrollbar: true,
      //     scrollInertia: 800,
      //     mouseWheel: {
      //     scrollAmount: scrollAmount,
      //   },
      //     // Add other mCustomScrollbar options as needed
      //   });
  
      //   $scrollContainer.on('mousewheel', (event) => {
      //     const currentPosition = $scrollContainer.mCustomScrollbar('getScrollPosition').x;
      //     const scrollAmount = (event.deltaX || event.deltaY) * sensitivity;
      //     const newScrollPosition = currentPosition - scrollAmount;
  
      //     $scrollContainer.mCustomScrollbar('scrollTo', newScrollPosition, {
      //       scrollInertia: 50,
      //     });
  
      //     event.preventDefault();
      //   });
      // },
        initializeScrollbar() {
        const $scrollContainer = this.$jQuery(this.$refs.scrollContainer);
        const scrollAmount = 200;
        const sensitivity = 100; // Adjust the sensitivity as needed

        // Check if window width is greater than or equal to 1024px
        if (window.innerWidth >= 1024) {
          // Initialize horizontal scrollbar
          $scrollContainer.mCustomScrollbar({
            axis: 'x',
            theme: 'dark-thin',
            scrollbarPosition: 'outside',
            autoHideScrollbar: true,
            scrollInertia: 800,
            mouseWheel: {
              scrollAmount: scrollAmount,
            },
            // Add other mCustomScrollbar options as needed
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
          // Initialize vertical scrollbar
          $scrollContainer.mCustomScrollbar({
            axis: 'y', // Set axis to 'y' for vertical scrollbar
            theme: 'dark-thin',
            scrollbarPosition: 'outside',
            autoHideScrollbar: true,
            scrollInertia: 800,
            mouseWheel: {
              scrollAmount: scrollAmount,
            },
            // Add other mCustomScrollbar options as needed
          });
        }
      },
    },
  };
  </script>
  
 <style>
 
  </style>
  