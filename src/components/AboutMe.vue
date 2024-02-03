<template>
    <div class="h-screen w-screen shrink-0 lg:my-0 my-44 px-4">
        <div class="flex justify-center items-center h-screen text-white ">
            <div class="flex justify-center lg:items-center lg:flex-row flex-col lg:gap-28 gap-16 shrink-0">
                <div class="relative shine rounded-2xl trigger-element w-full lg:max-w-[360px] md:max-w-[450px] sm:max-w-[350px] ml-10" :style="{ boxShadow: boxShadow }">
                    <div class="absolute inset-0 w-full h-full bg-black/45 rounded-2xl"></div>
                    <img src="../assets/abdullah-img.jpg" class="lg:max-w-[660px] md:max-w-[450px] sm:max-w-[350px] w-full objec-cover"   alt="">
                </div>
                <div>
                    <div class="text-[65px] font-bold leading-[1.2em] ">
                        <h4 class="relative w-fit z-[1] before:absolute before:left-3 before:top-3 before:w-52 before:h-[4rem] before:bg-[#fa5b0f]/50 before:-skew-x-[36deg] before:z-[-1]">Muhammad</h4>
                        <h3 class="text-[70px]">Abdullah Suri</h3>
                    </div>
                    <div class="flex gap-12 mt-12">
                        <ul class="space-y-3 text-lg">
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <p class="text-gray-400 group pointer-events-none">Age : <span class="ml-2 text-white">19 Years</span> </p>
                            </li>
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>                                
                                <p class="text-gray-400 group pointer-events-none">Nationality : <span class="ml-2 text-white">Pakistan</span> </p>
                            </li>
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <p class="text-gray-400 group pointer-events-none">Freelance : <span class="ml-2 text-white">Available</span> </p>

                            </li>
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <p class="text-gray-400 group pointer-events-none">Langages : <span class="ml-2 text-white">English / Urdu</span> </p>
                            </li>
                            <div></div>
                        </ul>
                        <ul class="space-y-3 text-lg">
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <p class="text-gray-400 group pointer-events-none">City : <span class="ml-2 text-white">Karachi</span> </p>

                            </li>
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <a href="tel:+92330811066" class="text-gray-400 group" >Phone : <span class="ml-2 text-white group-hover:text-primary transition-all duration-300">+92 330811066</span> </a>
                            </li>
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <a href="mailto:m.abdullahsuri@gmail.com" class="text-gray-400 group" >Email : <span class="ml-2 text-white group-hover:text-primary transition-all duration-300">m.abdullahsuri@gmail.com</span> </a>
                            </li>
                            <li class="flex items-center gap-4">
                                <span class="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <a href="https://www.linkedin.com/in/abdullah-suri-a7b012269/" class="text-gray-400 group" >LinkedIn : <span class="ml-2 text-white group-hover:text-primary transition-all duration-300">Abdullah Suri</span> </a>
                            </li>
                            <div></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      boxShadow: 'rgba(250, 89, 15, 0.3) -7px 5px, rgba(250, 89, 15, 0.2) -14px 10px, rgba(250, 89, 15, 0.1) -21px 15px, rgba(250, 89, 15, 0.1) -28px 20px, rgba(250, 89, 15, 0.07) -35px 25px',
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.shine {  
    overflow: hidden;
}
.shining-image {
    transition: box-shadow 1.2s ease-in-out;
    animation: shine 1.2s infinite;
}

@keyframes shine {
    0% {
        box-shadow: 0 0 5px rgba(41, 41, 41, 0.8);
    }
    50% {
        box-shadow: 0 0 10px rgba(46, 45, 45, 0.9);
    }
    100% {
        box-shadow: 0 0 20px rgba(54, 54, 54, 0.8);
    }
}
.shine::before {
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.171) 100%);
    content: "";
    display: block;
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    transform: skewX(-25deg);
    width: 50%;
    z-index: 30;
}
.shine:hover::before, .shine:focus::before {
    -webkit-animation: shine 1.1s;
    animation: shine 1.1s;
}
@-webkit-keyframes shine {
    100% {
        left: 125%;
    }
}
@keyframes shine {
    100% {
        left: 125%;
    }
}
</style>
