<script setup>
const api = useApi()

const banners = ref([])

onMounted(async() => {
    const data = await api.get('/banners')
    banners.value = data.data
    console.log("🚀 | onMounted | banners.value:", banners.value)
})

// const api = useApi()

const galleries = ref([])

onMounted(async() => {
    const data = await api.get('/galleries', {
        per_page: 5
    })
    galleries.value = data.data
    console.log("🚀 | onMounted | galleries.value:", galleries.value)
})

const newsArticles = ref([])

onMounted(async() => {
    const data = await api.get('/news-articles', {
        per_page: 4
    })
    newsArticles.value = data.data
    console.log("🚀 | onMounted | newsArticles.value:", newsArticles.value)
})
</script>

<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <HeroOne :banners="banners" />
        <AboutOne about-link :show-licences="false" class="section-padding-top" />
        <BrandLogoCarousel />
        <Features />
        <GalleryOne :galleries="galleries" />
        <BlogStyleOne :news-articles="newsArticles" />
    </div>
</template>


