<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import SwiperCore, { Autoplay, EffectFade } from 'swiper/core'
import "swiper/css"
import 'swiper/css/effect-fade';

defineProps({
    banners: {
        type: Array,
        default: []
    }
})

SwiperCore.use([Autoplay, EffectFade ])
</script>

<template>
    <div class="hero-slider">
        <swiper
            :speed="1000"
            :loop="true"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :effect="'fade'"
        >
            <swiper-slide v-for="banner in banners" :key="banner.id">
                <div
                    :style="{
                        // backgroundImage: `url('${banner.image}')`,
                        backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                            url('${banner.image}')`
                    }"
                    class="hero-slide-item bg-cover"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slide-content">
                                    <h2 class="title" v-html="banner.title"></h2>
                                    <p>{{ banner.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
