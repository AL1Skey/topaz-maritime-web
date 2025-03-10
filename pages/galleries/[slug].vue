<script setup>
useHead({
    title: 'Gallery Details'
})

const api = useApi()
const route = useRoute()

const gallery = ref(null)

onMounted(async() => {
    const data = await api.get(`/galleries/${route.params.slug}`, {
        use_slug: 1
    })
    gallery.value = data.data
    console.log("🚀 | onMounted | gallery.value:", gallery.value)
})
</script>

<template>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <!-- Project Banner Section -->
        <!-- <div class="project-details-banner bg-cover" :style="{ backgroundImage: `url(${gallery?.image})` }"></div> -->
        <div class="blog-details-image">
            <!-- <img class="fit-image" :src="job?.image" alt="Project"> -->
            <img class="" :src="gallery?.image" :alt="gallery?.title">
        </div>

        <!-- Project Details Section -->
        <div class="section-padding-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 col-md-12">
                        <!-- Project Details Content Start -->
                        <div class="project-details-content" data-aos="fade-up" data-aos-delay="300">
                            <h1 class="project-details-title">{{ gallery?.title }}</h1>
                            <div
                                v-html="gallery?.content"
                                class="blog-content"
                            >
                            </div>

                        </div>
                        <!-- Project Details Content End -->
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper/core'
    SwiperCore.use([Navigation, Pagination, EffectFade ])

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },

        data() {
            return {
                swiperOptions: {
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
            }
        }
    };
</script> -->


