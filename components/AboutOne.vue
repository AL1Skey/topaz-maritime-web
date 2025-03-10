<script setup>
import { $info } from '@/info';

defineProps({
    aboutLink: {
        type: Boolean,
        default: false
    },
    showLicences: {
        type: Boolean,
        default: true
    },
})

const { about } = $info
</script>

<template>
    <!-- <div class="section-padding-top overflow-hidden"> -->
    <div class="overflow-hidden">
        <div class="container">
            <div class="row my-5">
                <div class="col-lg-6 col-md-12 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="500">
                    <!-- <div class="history-image mt-5"> -->
                    <div class="history-image">
                        <img class="fit-image" src="/images/logo/logo-black.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 align-self-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="500">
                    <div class="history-wrapper">
                        <h1 class="title mb-3">{{ about.title }}</h1>
                        <div class="history-content">
                            <ul v-for="(main, index) in about.main" :key="index">
                                <li>- {{ main }}</li>
                            </ul>
                        </div>
                        <div class="mt-5" v-if="aboutLink">
                            <nuxt-link to="/about" class="btn-link">See About</nuxt-link>
                        </div>
                    </div>

                    <div v-if="showLicences" class="history-wrapper pt-5">
                        <h2 class="title mb-3">Licenses and Basis of Company</h2>
                        <template v-for="license in about.licences">
                            <h5>{{ license.title }}</h5>
                            <p v-if="license.desc">{{ license.desc }}</p>
                            <ul v-if="license.licences" v-for="license in license.licences">
                                <li>{{ license.title }}</li>
                            </ul>
                        </template>
                    </div>
                </div>

                <!-- <div class="col-lg-12 col-md-12 align-self-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="500">
                    <div class="history-wrapper">
                        <h2 class="title mb-3">Licenses and Basis of Company</h2>
                        <template v-for="license in about.licences">
                            <h5>{{ license.title }}</h5>
                            <p v-if="license.desc">{{ license.desc }}</p>
                            <ul v-if="license.licences" v-for="license in license.licences">
                                <li>{{ license.title }}</li>
                            </ul>
                        </template>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
