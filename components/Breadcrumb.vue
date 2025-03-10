<script setup>
defineProps({
    activeText: {
        type: String,
        default: null
    },
    pageTitle: String,
})
</script>

<template>
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="300">
                    <div class="breadcrumb-wrapper">
                        <div class="bread-title">
                            <h1 class="title">{{ pageTitle }}</h1>
                        </div>

                        <ul v-if="activeText" class="post-meta breadcrumb">
                            <li class="breadcrumb-item">
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li class="breadcrumb-item active">
                                {{ activeText }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
