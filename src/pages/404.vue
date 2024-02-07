<template>
    <main class="grid min-h-screen place-items-center sm:px-6 px-2  lg:px-8 overflow-auto">
        <div class="text-center mx-auto">
          <!-- <p class="text-base font-semibold text-indigo-600">404</p> -->
          <!-- <img src="../assets/error.svg" alt=""> -->
          <img src="../assets/404-Error.gif" class="w-full max-w-[350px] sm:h-[350px] h-[300px] object-contain mx-auto" alt="">
          <h1 class="-mt-10 text-4xl font-bold tracking-tight text-[#fa5b0f]/50 sm:text-7xl">Page not found</h1>
          <p class="mt-3 sm:text-base text-sm leading-7 text-[#fa5b0f]/70">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-6 flex items-center justify-center gap-x-6">
            <router-link to="/" class="relative border-[2px] border-[#fa5b0f] duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-52 rounded-md bg-orange-800 p-2 flex justify-center items-center font-semibold">
              <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
              <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
              <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
              <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
              <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
              <p class="z-10 text-sm">Go Back Home</p>
      </router-link>
          </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style>
    
</style>