<script setup>
useHead({
    title: 'News Article Details'
})

const api = useApi()
const route = useRoute()

const newsArticle = ref(null)

onMounted(async() => {
    const data = await api.get(`/news-articles/${route.params.slug}`, {
        use_slug: 1
    })
    newsArticle.value = data.data
    console.log("🚀 | onMounted | newsArticle.value:", newsArticle.value)
})
</script>

<template>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <NewsArticleDetails :news-article="newsArticle" />
        <!-- <RelatedBlogPost /> -->

        <!-- Old New Post Section Start -->
        <!-- <div class="old-new-post-section overflow-hidden">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="old-new-post-content mtn-30">
                            <nuxt-link to="/blog-details" class="old-post mt-30" data-aos="fade-right" data-aos-delay="300">Older<span>The Way Of Building</span></nuxt-link>
                            <nuxt-link to="/blog-details" class="new-post mt-30" data-aos="fade-left" data-aos-delay="300">Newer<span>New Interior Design Trends</span></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- Old New Post Section End -->

        <!-- <CommentForm /> -->
    </div>
</template>

