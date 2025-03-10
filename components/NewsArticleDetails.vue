<script setup>
import { formatDate } from '@vueuse/core';

// use the component
// import CoolLightBox from 'vue-cool-lightbox'
// import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

import FsLightbox from "fslightbox-vue/v3";

// upd:article gallery
import { Swiper, SwiperSlide } from "swiper/vue"
import SwiperCore, { Navigation, Pagination, EffectFade, } from 'swiper/core'
SwiperCore.use([Navigation, Pagination, ])
const swiperOptions = {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.project-details-carousel .swiper-pagination',
        type: 'bullets',
        clickable: 'true'
    },
}

defineProps({
    newsArticle: {
        type: Object,
        default: {}
    }
})



const fslightboxItems = [
    '/images/project/slide-1.jpg',
    '/images/project/slide-2.jpg',
]
// const index = ref(null)

const fslightboxToggler = ref(false)
const fslightboxSlide = ref(1)
// const galleryIndex = ref(0)

const openLightboxOnSlide = (number) => {
    fslightboxSlide.value = number;
    fslightboxToggler.value = !fslightboxToggler.value;
}


</script>

<template>
    <div class="blog-details-wrapper section-padding-bottom">
        <div class="blog-details-image">
            <!-- <img class="fit-image" :src="newsArticle?.image" alt="Project"> -->
            <img class="" :src="newsArticle?.image" :alt="newsArticle?.title">
        </div>

        <!-- <div class="section-padding-top"> -->
        <div class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1">
                        <!-- Blog Details cntent Start -->
                        <div class="blog-details-content" data-aos="fade-up" data-aos-delay="300">
                            <div class="inner-container">

                                <!-- Page Breadcrumbs Start -->
                                <!-- <ul class="page-breadcrumb">
                                    <li><n-link to="/">Home</n-link></li>
                                    <li><n-link to="/blog">Blog</n-link></li>
                                    <li>Nordic Interior STyle</li>
                                </ul> -->
                                <!-- Page Breadcrumbs End -->

                                <!-- Title Start -->
                                <h1 class="title">{{ newsArticle?.title }}</h1>
                                <!-- Title End -->

                                <!-- Info List Start -->
                                <ul class="info-list">
                                    <li>{{ formatDate(new Date(newsArticle?.published_at), 'D MMMM, YYYY') }}</li>
                                    <!-- <li>news</li> -->
                                </ul>
                                <!-- Info List End -->

                                <div
                                    v-html="newsArticle?.content"
                                    class="mt-5"
                                ></div>

                                <p v-if="newsArticle?.pdf" class="fs-5 mt-5">
                                    <NuxtLink :to="newsArticle?.pdf" target="_blank" class="">
                                        <i class="icofont-file-pdf" style="color: red"></i>
                                        {{ newsArticle?.pdf_filename }}
                                    </NuxtLink>
                                </p>
                            </div>
                        </div>
                        <!-- Blog Details cntent End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<!-- <style lang="scss" scoped> -->
<style lang="scss">
    .blog-details-image {
        // background-color: burlywood;
        background-color: #ddd;
        // width: 70%;
        height: 60vh;
        // margin: auto;

        img {
            height: 100%;
            width: 100%;
            // height: 100%;
            // width: 100%;
            // overflow: hidden;
            object-fit: cover;
        }
    }
</style>