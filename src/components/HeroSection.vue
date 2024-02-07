<template>
    <div class="sm:h-screen h-auto w-screen shrink-0 lg:mb-0 sm:mb-44 mt-54 px-4">
        <div class="flex flex-col justify-center items-center sm:h-screen h-[80vh] sm:my-0 my-20 text-white pointer-events-none testing_animation">
            <div class="lg:text-[150px] md:text-[130px] sm:text-[110px] text-6xl font-bold hero_text">
                <h1 class="leading-none animate__animated animate__fadeInUp hero_top_slow">Hello<span class="text-primary changed_hero_text">,</span></h1>
                <div class="flex items-center gap-10">
                    <h2 class="leading-none animate__animated animate__fadeInUp hero_mid_slow">I am</h2>
                    <div class="flex flex-col sm:mt-10 mt-8">
                        <span class="relative inline w-fit sm:text-[17px] text-[10px] whitespace-normal tracking-wider leading-relaxed h-auto font-medium removed_hero_text z-[1] sm:before:absolute before:bottom-[3px] before:left-0 before:h-[4px] before:w-full before:bg-[#fa5b0f]/60 before:z-[-1] animate__animated animate__lightSpeedInRight">Front-end Developer </span>
                        <span class="relative inline w-fit sm:text-[17px] text-[10px] whitespace-normal tracking-wider leading-relaxed h-auto font-medium removed_hero_text z-[1] sm:before:absolute before:bottom-[3px] before:left-0 before:h-[4px] before:w-full before:bg-[#fa5b0f]/60 before:z-[-1] animate__animated animate__lightSpeedInRight">with 1+ years of experience</span>
                        <span class="relative inline w-fit sm:text-[17px] text-[10px] whitespace-normal tracking-wider leading-relaxed h-auto font-medium removed_hero_text z-[1] sm:before:absolute before:bottom-[3px] before:left-0 before:h-[4px] before:w-full before:bg-[#fa5b0f]/60 before:z-[-1] animate__animated animate__lightSpeedInRight">based in Pakistan</span>
                    </div>
                </div>
                <h3 class="leading-none animate__animated animate__fadeInUp hero_high_slow">Abdullah</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
    onMounted(() => {
        particlesJS("particles-js", {
        "particles": {
            "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 700
                }
            },
            "color": {
            "value": "#fa5b0f"
            },
            "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
            },
            "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
                }
            },
            "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
            },
            "line_linked": {
            "enable": true,
            "distance": 140,
            "color": "#ccc",
            "opacity": 0.4,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
            },
            "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
            }
        },
        "retina_detect": true
        });
    });
</script>

<style>

</style>