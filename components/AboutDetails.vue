<script setup>
import { $info } from '@/info';

const { about } = $info
</script>

<template>
    <!-- <div class="section-padding-top section-padding-bottom overflow-hidden"> -->
    <div class="section-padding-bottom overflow-hidden">
        <div class="container">
            <!-- <div class="row">
                <div class="col-lg-12 col-md-12 align-self-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="500">
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
                </div>
            </div> -->

            <div class="row my-5">
                <div class="col-lg-12 col-md-12 align-self-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="500">
                    <div class="history-wrapper">
                        <h2 class="title mb-3">Our Vision</h2>
                        <p>{{ about.vision }}</p>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-lg-12 col-md-12 align-self-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="500">
                    <div class="history-wrapper">
                        <h2 class="title mb-3">Our Mission</h2>
                        <p>{{ about.mission }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
