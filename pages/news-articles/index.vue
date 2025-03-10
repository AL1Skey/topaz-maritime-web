<script setup>
useHead({
    title: 'News Articles'
})

const api = useApi()

const newsArticles = ref([])
const newsArticlesMeta = ref({})
const newsArticlesLinks = ref({})

onMounted(async() => {
    const data = await api.get('/news-articles')
    newsArticles.value = data.data
    newsArticlesMeta.value = data.meta
    newsArticlesLinks.value = data.links
    console.log("🚀 | onMounted | newsArticles.value:", newsArticles.value)
    console.log("🚀 | onMounted | newsArticlesMeta.value:", newsArticlesMeta.value)
    console.log("🚀 | onMounted | newsArticlesLinks.value:", newsArticlesLinks.value)
})
</script>

<template>
    <div class="main-container section-padding-bottom">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <!-- <Breadcrumb pageTitle="Our News Article" /> -->
        <Breadcrumb pageTitle="News Article" />
        <NewsArticleWrapper
            :news-articles="newsArticles"
            :news-articles-meta="newsArticlesMeta"
        />
    </div>
</template>


