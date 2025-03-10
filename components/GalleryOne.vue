<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import SwiperCore, { Autoplay, Navigation } from 'swiper/core'
import "swiper/css"

defineProps({
    galleries: {
        type: Array,
        default: []
    }
})

SwiperCore.use([Autoplay, Navigation ])

const swiperOptions = {
    navigation: {
        nextEl: '.tab-carousel-next',
        prevEl: '.tab-carousel-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        // 1200: {
        //     slidesPerView: 4,
        // }
    }
}

const activeItem = ref('architecture')

const isActive = (menuItem) =>  {
    return activeItem.value === menuItem
}

const setActive = (menuItem) => {
    activeItem.value = menuItem
}
</script>

<template>
    <!-- <div class="section-padding-top bg-light"> -->
    <div class="section bg-light">
        <div class="container">
            <div class="row align-items-center mb-5" data-aos="fade-up" data-aos-delay="300">
                <!-- Section Title Start -->
                <div class="col-xl-8 col-md-8">
                    <div class="section-title mb-0">
                        <h2 class="title">Galleries</h2>
                    </div>
                </div>
                <!-- Section Title End -->

                <!-- All Project Button Start -->
                <div class="col-xl-4 col-md-4">
                    <div class="all-project-btn">
                        <nuxt-link to="/galleries">
                            See All Galleries
                            <i class="arrow icofont-rounded-right"></i>
                        </nuxt-link>
                    </div>
                </div>
                <!-- All Project Button End -->

            </div>
        </div>

        <div class="container-auto">
            <div class="swiper-arrow-hover" data-aos="fade-up" data-aos-delay="400">
                <div class="fade active show">
                    <swiper
                        :spaceBetween="10"
                        :speed="1000"
                        :loop="true"
                        :autoplay="{
                            delay: 2000,
                            disableOnInteraction: false,
                        }"
                        :navigation="swiperOptions.navigation"
                        :breakpoints="swiperOptions.breakpoints"
                    >
                        <swiper-slide v-for="gallery in galleries" :key="gallery.id">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <nuxt-link :to="`/galleries/${gallery.slug}`" class="image">
                                        <!-- <img class="fit-image" :src="gallery.image" :alt="gallery.title" /> -->
                                        <img class="" :src="gallery.image" :alt="gallery.title" />
                                    </nuxt-link>
                                </div>
                                <div class="content">
                                    <h3 class="title">
                                        <nuxt-link :to="`/galleries/${gallery.slug}`">{{ gallery.title }}</nuxt-link>
                                    </h3>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>

                    <!-- Swiper Navigation Start -->
                    <div class="tab-carousel-prev tab-carousel-btn">
                        <i class="icofont-thin-left"></i>
                    </div>
                    <div class="tab-carousel-next tab-carousel-btn">
                        <i class="icofont-thin-right"></i>
                    </div>
                    <!-- Swiper Navigation End -->
                </div>
            </div>
        </div>
    </div>
</template>
