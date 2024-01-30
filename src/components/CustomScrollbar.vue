<template>
    <div ref="scrollContainer" class="custom-scrollbar">
      <div class="scroll-content">
        <slot></slot>
        <div class="scroll-progress hide-mobile">
            <div>
               <div></div>
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
      },
    },
  };
  </script>
  
 <style>
 .mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger{
    width: 30px !important;
 }
 .mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-thin.mCSB_scrollTools .mCSB_draggerRail, .mCSB_dragger_bar:hover, .mCS-dark-thin.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, .mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar{
    background-color: transparent;
 }
 .mCSB_dragger_bar:hover{
    background: transparent;
 }
.mCustomScrollBox+.mCSB_scrollTools.mCSB_scrollTools_horizontal {
    bottom: 26px !important;
}
.mCSB_dragger_bar:before {
    position: absolute;
    content: "";
    top: -5px;
    left: 0;
    width: 50px;
    height: 8px;
    border-radius: 4px;
    transition: 0.3s;
    background-color: #fa5b0f !important; 
}
.mCSB_dragger_bar:after {
    position: absolute;
    content: "Scroll";
    text-align: center;
    color: #fa5b0f;
    font-weight: 600;
    font-size: 13px;
    height: 22px;
    width: 44px;
    top: -30px;
    left: 0;
    border-radius: 4px;
    transition: 0.3s;
}
  .mCSB_scrollTools.mCSB_scrollTools_horizontal {
    max-width: calc(100vw - 300px) !important;
    margin: 0 auto !important;
    bottom: 32px !important;
    z-index: 11 !important;
    opacity: 1 !important;
}
.mCSB_scrollTools .mCSB_draggerContainer {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: auto !important;
}
  .custom-scrollbar {
    height: 300px;
    overflow: hidden;
  }
  
  .scroll-content {
    white-space: nowrap;
  }
  .scroll-progress {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 32px;
    z-index: 1;
    width: calc(100vw - 300px);
    margin: 0 auto;
    left: 0;
    right: 0;
}
.scroll-progress > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}
.scroll-progress > div > div {
    height: 8px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 4px;
}
  </style>
  