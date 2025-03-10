<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core'
import { formatDate } from '@vueuse/core';

SwiperCore.use([Autoplay, Navigation])

defineProps({
    newsArticles: {
        type: Array,
        default: []
    }
})

const swiperOptions = {
    navigation: {
        nextEl: '.tab-carousel-next',
        prevEl: '.tab-carousel-prev',
    },
    breakpoints: {
        // 320: {
        //     slidesPerView: 2
        // },
        // 480: {
        //     slidesPerView: 3
        // },
        // 768: {
        //     slidesPerView: 4
        // },

        // 320: {
        //     slidesPerView: 1,
        // },
        // 768: {
        //     slidesPerView: 2,
        // },
        // 992: {
        //     slidesPerView: 3,
        // },
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    }
}
</script>

<template>
    <div class="news-section section-padding-top">
        <div class="container">
            <div class="row align-items-center mb-5" data-aos="fade-up" data-aos-delay="300">
                <!-- Section Title Start -->
                <div class="col-xl-8 col-md-8">
                    <div class="section-title mb-0">
                        <h2 class="title">News Articles</h2>
                    </div>
                </div>
                <!-- Section Title End -->

                <!-- All Project Button Start -->
                <div class="col-xl-4 col-md-4">
                    <div class="all-project-btn">
                        <nuxt-link to="/news-articles">
                            See All News Articles
                            <i class="arrow icofont-rounded-right"></i>
                        </nuxt-link>
                    </div>
                </div>
                <!-- All Project Button End -->

            </div>
        </div>

        <!-- <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100" v-for="article in newsArticles" :key="article.id">
                    <div class="news-block">
                        <div class="image">
                            <nuxt-link :to="`news-articles/${article?.slug}`">
                                <img :src="article?.image" :alt="article?.title" class="" />
                            </nuxt-link>
                        </div>
                        <div class="lower-content">
                            <ul class="info-list">
                                <li>{{ formatDate(new Date(article?.published_at), 'D MMMM, YYYY') }}</li>
                            </ul>
                            <h4 class="title">
                                <nuxt-link :to="`news-articles/${article?.slug}`">{{ article?.title }}</nuxt-link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-0" data-aos="fade-up" data-aos-delay="100" >
                    <!-- :navigation="swiperOptions.navigation" -->
                    <swiper
                        :space-between="10"
                        :speed="1000"
                        :loop="true"
                        :autoplay="{
                            delay: 2000,
                            disableOnInteraction: false,
                        }"
                        :breakpoints="swiperOptions.breakpoints"
                    >
                        <swiper-slide v-for="article in newsArticles" :key="article.id">
                            <div class="news-block">
                                <div class="image">
                                    <nuxt-link :to="`news-articles/${article?.slug}`">
                                        <img :src="article?.image" :alt="article?.title" class="" />
                                    </nuxt-link>
                                </div>
                                <div class="lower-content">
                                    <ul class="info-list">
                                        <li>{{ formatDate(new Date(article?.published_at), 'D MMMM, YYYY') }}</li>
                                    </ul>
                                    <h4 class="title">
                                        <nuxt-link :to="`news-articles/${article?.slug}`">{{ article?.title }}</nuxt-link>
                                    </h4>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>

                    <!-- <div class="tab-carousel-prev tab-carousel-btn">
                        <i class="icofont-thin-left"></i>
                    </div>
                    <div class="tab-carousel-next tab-carousel-btn">
                        <i class="icofont-thin-right"></i>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
