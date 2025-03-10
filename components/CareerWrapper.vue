<script setup>
import { formatDate } from '@vueuse/core';

defineProps({
    jobs: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <div class="blog-tab-section">
        <div class="container">
            <div class="row row-cols-1 box mtn-50">
                <!-- Single blog Start -->
                <div
                    v-for="job in jobs"
                    :key="job.id"
                    class="col mt-50"
                >
                    <div class="single-blog-wrap">
                        <div class="blog-thumb">
                            <nuxt-link :to="`/careers/${job.slug}`" class="image">
                                <img class="fit-image" :src="job.image" :alt="job.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <ul class="info-list">
                                <!-- <li>{{ formatDate(new Date(job.published_at), 'D MMMM, YYYY') }}</li> -->
                                <li>Berakhir {{ formatDate(new Date(job.end_at), 'D MMMM, YYYY') }}</li>
                                <!-- <li>{{ article.category }}</li> -->
                            </ul>
                            <h4 class="title">
                                <nuxt-link :to="`/careers/${job.slug}`">{{ job.title }}</nuxt-link>
                            </h4>
                            <p>{{ job.description }}</p>
                            <nuxt-link :to="`/careers/${job.slug}`" class="article">
                                Details <span class="arrow icofont-rounded-right"></span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Single blog End -->
            </div>

            <!-- <div class="row section-padding-bottom">
                <div class="col-12">
                    <div class="load-more text-center mt-50">
                        <a href="javascript:void(0)" @click="loadMore" v-if="currentItem < blogs.length">...Load more...</a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
