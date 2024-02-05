<template>
    <div class="xl:w-screen shrink-0 lg:my-0 my-44 px-4">
        <div class="flex flex-col items-center justify-center h-full">
                <h4 class="text-white sm:text-[65px] text-5xl font-bold leading-[1.2em] capitalize heading_style">Projects i Made</h4>
                <div class="flex justify-center lg:flex-nowrap flex-wrap lg:gap-5 gap-3 my-10">
                    <a href="https://physicianux.com/" target="_blank">
                        <div class="w-full lg:max-w-[350px] max-w-[300px] hover:bg-bottom transition-all duration-[5s] h-full project_01 border-[#fa5b0f]/60">
                            <div class="portfolio-overlay group overflow-hidden">
                                <div class="lg:invisible group-hover:visible lg:translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-4 text-white">
                                    <h2 class="text-xl font-semibold underline underline-offset-2">Physcian Ux</h2>
                                    <div class="whitespace-break-spaces text-xs font-medium mt-2">
                                        <p>Enhanced medical notes powered by AI. Effortless, precise, and efficient documentation for modern healthcare</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="sm:order-2 lg:block sm:flex items-center gap-3">
                        <a href="https://interactive-keyboard.netlify.app" target="_blank">
                            <div class="w-full lg:max-w-[350px] max-w-[300px] lg:hover:bg-bottom transition-all duration-[5s] max-h-[215px] project_03 border border-[#fa5b0f]/60">
                                <div class="portfolio-overlay group overflow-hidden">
                                    <div class="lg:invisible group-hover:visible lg:translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-3 text-[#adadad]">
                                        <h2 class="text-lg font-semibold underline underline-offset-2">Interactive Keyboard</h2>
                                        <div class="whitespace-break-spaces text-xs font-medium mt-0.5">
                                            <p>Interactive keyboard that Interact with your Keyboard. made with HTML, CSS and Js</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.teksyo.com/" target="_blank">
                            <div class="w-full lg:max-w-[350px] max-w-[300px] lg:hover:bg-bottom transition-all duration-[5s] max-h-[215px] project_04 lg:mt-5 sm:mt-0 mt-3 border-[#fa5b0f]/60">
                                <div class="portfolio-overlay group overflow-hidden">
                                    <div class="lg:invisible group-hover:visible lg:translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-3 text-white">
                                        <h2 class="text-lg font-semibold underline underline-offset-2">Teksyo</h2>
                                        <div class="whitespace-break-spaces text-xs font-medium mt-0.5">
                                            <p>IT Company Provides Digital Services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="https://platypusdreaming.com.au/" target="_blank">
                        <div class="w-full lg:max-w-[350px] max-w-[300px] hover:bg-bottom transition-all duration-[5s] h-full project_02 border-[#fa5b0f]/60">
                            <div class="portfolio-overlay group overflow-hidden">
                                <div class="lg:invisible group-hover:visible lg:translate-y-24 group-hover:translate-y-0 transition-ease-in duration-300 flex flex-col justify-end items-start h-full p-3 text-white">
                                    <h2 class="text-lg font-semibold underline underline-offset-2">Platypus Dreaming</h2>
                                    <div class="whitespace-break-spaces text-xs font-medium mt-0.5">
                                        <p>E-commerce Website Develop on wordpress with help of Elementor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <router-link to="" class="relative border-[2px] border-[#fa5b0f] duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-orange-800 p-2 flex justify-center items-center font-semibold">
                        <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
                        <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
                        <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
                        <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
                        <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
                        <p class="z-10">View All</p>
                </router-link>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
  }
};
</script>

<style>
.heading_style{
    @apply relative w-fit z-[1] before:absolute before:left-3 sm:before:top-4 before:top-2 before:w-52 sm:before:h-[3.6rem] before:h-[3rem] before:bg-[#fa5b0f]/50 before:-skew-x-[32deg] before:z-[-1]
}
</style>