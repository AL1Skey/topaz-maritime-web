<script setup>
import { $info } from '@/info';
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay } from 'swiper/core'

SwiperCore.use([Autoplay])

const swiperOptions = {
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 5
        }
    }
}

const { clients } = $info
</script>

<template>
    <div class="section-padding-top brand-logo-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Title Start -->
                    <div class="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h2 class="title">Our Clients</h2>
                    </div>
                    <!-- Section Title End -->
                </div>

                <div class="col-12">
                    <div class="brand-logo-carousel" data-aos="fade-up" data-aos-delay="300">
                        <swiper
                            :space-between="30"
                            :speed="1000"
                            :loop="true"
                            :autoplay="{
                                delay: 2000,
                                disableOnInteraction: false,
                            }"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide class="single-brand-logo" v-for="(client, index) in clients" :key="index">
                                <nuxt-link to="">
                                    <img :src="client.image" :alt="client.title">
                                </nuxt-link>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
