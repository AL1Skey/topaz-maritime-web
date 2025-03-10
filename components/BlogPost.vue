<script setup>
import { formatDate } from '@vueuse/core';

defineProps({
    article: Object
})
</script>

<template>
    <div class="news-block">
        <div class="image">
            <nuxt-link :to="`news-article/${article?.slug}`">
                <img :src="article?.image" :alt="article?.title" class="fit-image" />
            </nuxt-link>
        </div>
        <div class="lower-content">
            <ul class="info-list">
                <li>{{ formatDate(new Date(article?.published_at), 'D MMMM, YYYY') }}</li>
                <!-- <li>{{ article.category }}</li> -->
            </ul>
            <h4 class="title">
                <nuxt-link :to="`news-article/${article?.slug}`">{{ article?.title }}</nuxt-link>
            </h4>
        </div>
    </div>
</template>
