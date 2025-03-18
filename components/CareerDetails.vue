<script setup>
import { formatDate } from '@vueuse/core';

defineProps({
    job: {
        type: Object,
        default: {}
    }
})
</script>

<template>
    <div class="blog-details-wrapper section-padding-bottom">
        <!-- <div class="blog-details-image">
            <img class="" :src="job?.image" :alt="job?.title">
        </div> -->

        <!-- <div class="section-padding-top"> -->
        <!-- <div class="pt-5"> -->
        <div class="pt-3">
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
                                <h1 class="title">{{ job?.title }}</h1>
                                <!-- Title End -->

                                <!-- Info List Start -->
                                <ul class="info-list">
                                    <!-- <li>{{ formatDate(new Date(job?.published_at), 'D MMMM, YYYY') }}</li> -->
                                    <!-- <li>Mulai {{ formatDate(new Date(job?.start_at), 'D MMMM, YYYY') }}</li> -->
                                    <li>Berakhir {{ formatDate(new Date(job?.end_at), 'D MMMM, YYYY') }}</li>
                                    <li>{{ job?.job_category.name }}</li>

                                    <!-- <li>news</li> -->
                                </ul>
                                <!-- Info List End -->


                                <div class="container mt-5 px-0">
                                    <img class="border w-100" :src="job?.image" :alt="job?.title">
                                </div>

                                <div
                                    v-html="job?.content"
                                    class="blog-content"
                                ></div>
                            </div>
                        </div>
                        <!-- Blog Details cntent End -->
                        <a :href="`/careers/form4?apply=${job?.job_category.name.toLowerCase()}`" class="btn btn-primary">Apply </a>
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
    // .blog-details-image {
    //     background-color: #ccc;
    //     // width: 70%;
    //     height: 60vh;
    //     // margin: auto;

    //     img {
    //         height: 100%;
    //         width: 100%;
    //         // height: 100%;
    //         // width: 100%;
    //         // overflow: hidden;
    //         object-fit: cover;
    //     }
    // }

    // .blog-content {
    //     p {
    //         padding-bottom: 1rem;
    //     }
    // }
</style>