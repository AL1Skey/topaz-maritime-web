<script setup>
import { formatDate } from '@vueuse/core';

defineProps({
    newsArticles: {
        type: Array,
        default: []
    },
    newsArticlesMeta: {
        type: Object,
        default: {}
    }
})
</script>

<template>
    <div class="blog-tab-section">
        <div class="container">
            <div class="row row-cols-1 box mtn-50">
                <!-- Single blog Start -->
                <div
                    v-for="article in newsArticles"
                    :key="article.id"
                    class="col mt-50"
                >
                    <div class="single-blog-wrap">
                        <div class="blog-thumb">
                            <nuxt-link :to="`/news-articles/${article.slug}`" class="image">
                                <img class="fit-image" :src="article.image" :alt="article.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <ul class="info-list">
                                <li>{{ formatDate(new Date(article.published_at), 'D MMMM, YYYY') }}</li>
                                <!-- <li>{{ article.category }}</li> -->
                            </ul>
                            <h4 class="title">
                                <nuxt-link :to="`/news-articles/${article.slug}`">{{ article.title }}</nuxt-link>
                            </h4>
                            <p>{{ article.description }}</p>
                            <nuxt-link :to="`/news-articles/${article.slug}`" class="article">
                                full article <span class="arrow icofont-rounded-right"></span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Single blog End -->
            </div>

            <!-- <nav aria-label="Page navigation example mt-5">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav> -->


            <!-- <div class="row mt-50">
                <div class="col-12"> -->

                    <!-- <div class="load-more text-center mt-50">
                        <a href="javascript:void(0)" @click="loadMore" v-if="currentItem < blogs.length">...Load more...</a>
                    </div> -->

                    <!-- <nav aria-label="navigation">
                        <ul class="pagination">
                            <li class="page-item" v-for="link in newsArticlesMeta.links">
                                <a class="page-link" :href="link.url" v-html="link.label"></a>
                            </li> -->

                            <!-- <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li> -->
                        <!-- </ul>
                    </nav>
                </div>
            </div> -->


            <!-- <div class="row section-padding-bottom">
                <div class="col-12">
                    <div class="load-more text-center mt-50">
                        <a href="javascript:void(0)" @click="loadMore" v-if="currentItem < blogs.length">...Load more...</a>
                    </div>
                </div>
            </div> -->




            <!-- <div class="row mt-50">
                <div class="col-12">
                    <nav aria-label="navigation">
                        <ul class="pagination">
                            <li class="page-item" v-for="link in newsArticlesMeta.links">
                                <a class="page-link" :href="link.url" v-html="link.label"></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div> -->





        </div>
    </div>
</template>
