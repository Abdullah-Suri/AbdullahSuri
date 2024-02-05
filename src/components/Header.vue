<template>
    <div class="fixed w-screen h-fit sm:p-7 p-5 z-20 text-white">
        <div class="sm:flex hidden items-center justify-between">
            <div>
                <ul class="flex text-lg gap-6 font-medium ">
                    <li>
                        <button @click="scrollToElement('home')" class="relative inline-flex items-center leading-6 align-middle border-none 
                            after:content-[''] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500
                            hover:text-primary after:bg-primary duration-500">Home</button>
                    </li>
                    <li>
                        <button @click="scrollToElement('about')" class="relative inline-flex items-center leading-6 align-middle border-none 
                            after:content-[''] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500
                            hover:text-primary after:bg-primary duration-500">About</button>
                    </li>
                    <li>
                        <button @click="scrollToElement('portfolio')" class="relative inline-flex items-center leading-6 align-middle border-none 
                            after:content-[''] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500
                            hover:text-primary after:bg-primary duration-500">Portfolio</button>
                    </li>
                    <li>
                        <button class="relative inline-flex items-center leading-6 align-middle border-none 
                            after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:bottom-px after:start-0 after:duration-500
                            hover:text-primary after:bg-primary duration-500">Contact</button>
                    </li>
                </ul>
            </div>
            <div class="flex items-center">
                <a download="Abdullah Resume" href="/resume.pdf" class="btn">
                    <i class="animation"></i>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor"><path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path></svg>
                        </div>
                    </div>
                    <span>Download Resume</span>
                    <i class="animation"></i>
                </a>
            </div>
        </div>
        <div class="max-sm:flex justify-end hidden">
            <div @click="showHideMenu = true">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
            </div>
            <div v-if="showHideMenu">
                <div ref="sideMenu" class="absolute right-0 top-0 w-screen h-screen bg-[#1A1A1A] transition-all duration-300 animate__animated animate__faster animate__fadeInRight">
                        <div @click="toggleSideMenu()" class="absolute w-full h-auto flex justify-end p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                        </div>
                        <ul class="flex flex-col  justify-center items-center h-full text-3xl gap-6 font-medium ">
                            <li>
                                <button class="relative inline-flex items-center leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:-bottom-2 after:start-0 after:duration-500
                                    hover:text-primary after:bg-primary duration-500">Home</button>
                            </li>
                            <li>
                                <button class="relative inline-flex items-center leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:-bottom-2 after:start-0 after:duration-500
                                    hover:text-primary after:bg-primary duration-500">About</button>
                            </li>
                            <li>
                                <button class="relative inline-flex items-center leading-6 align-middle border-none 
                                after:content-[''] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:-bottom-2 after:start-0 after:duration-500
                                hover:text-primary after:bg-primary duration-500">Portfolio</button>
                            </li>
                            <li>
                                <button class="relative inline-flex items-center leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:-bottom-2 after:start-0 after:duration-500
                                    hover:text-primary after:bg-primary duration-500">Contact</button>
                            </li>
                            <li>
                                <a download="Abdullah Resume" href="/resume.pdf" class="relative inline-flex items-center leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:ti-auto after:-bottom-2 after:start-0 after:duration-500
                                    hover:text-primary after:bg-primary duration-500">Download Resume</a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showHideMenu: false,
            }
        },
        mounted() {
            console.log(this.showHideMenu);
        },
        methods: {
            toggleSideMenu() {
                const { sideMenu } = this.$refs;
                sideMenu.classList.remove('animate__fadeInRight');
                sideMenu.classList.add('animate__fadeOutRight');
                sideMenu.addEventListener('animationend', () => {
                    this.showHideMenu = !this.showHideMenu
                });
            },
            scrollToElement(section) {
                this.$emit('scrollIntoView',section);
            },
        },
    }
</script>
<style>
body, html {
    scroll-behavior: smooth;
}
</style>