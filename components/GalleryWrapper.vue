<script setup>
import { formatDate } from '@vueuse/core';

defineProps({
    galleries: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <div class="project-masonry-section section-padding-bottom">
        <div class="container">
            <!-- <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 box mesonry-list mtn-30">
                <div class="col mt-30" :class="project.category" v-for="(project, index) in projectData" :key="index">
                    <div class="single-project-wrap">
                        <div class="project-thumb position-relative">
                            <nuxt-link to="/project-details" class="image">
                                <img :src="project.imgSrc" :alt="project.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <div class="sub-title">{{ project.category }}</div>
                            <h4 class="title">
                                <nuxt-link to="/project-details">{{ project.title }}</nuxt-link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 box mesonry-list mtn-30">
                <div class="col mt-30" v-for="gallery in galleries" :key="gallery.id">
                    <div class="single-project-wrap">
                        <div class="project-thumb position-relative">
                            <nuxt-link :to="`galleries/${gallery.slug}`" class="image">
                                <img :src="gallery.image" :alt="gallery.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <h4 class="title">
                                <nuxt-link :to="`galleries/${gallery.slug}`">{{ gallery.title }}</nuxt-link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="row section-padding-bottom">
                <div class="col-12">
                    <div class="load-more text-center mt-30">
                        <a href="javascript:void(0)" @click="loadMore" v-if="currentItem < projects.length">...Load more...</a>
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>
