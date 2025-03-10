<script setup>
import { $info } from '@/info';

const { services } = $info
</script>

<template>
    <!-- <div class="section-padding-top bg-light"> -->
    <div class="section-padding-top section-padding-bottom bg-light">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Title Start -->
                    <div class="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h2 class="title">Our Services</h2>
                    </div>
                    <!-- Section Title End -->
                </div>

                <div class="col-12">
                    <div class="service-inner-container">
                        <div class="service-block" data-aos="fade-up" data-aos-delay="300" v-for="(service, index) in services" :key="index">
                            <div class="inner-box">
                                <h5 class="title">
                                    <!-- <nuxt-link to="/about">{{ service.title }}</nuxt-link> -->
                                    <nuxt-link>{{ service.title }}</nuxt-link>
                                </h5>
                                <!-- <p>{{ service.description }}</p> -->
                                <div class="inner-box-bottom">
                                    <div class="icon">
                                        <i :class="service.icon"></i>
                                    </div>
                                    <!-- <nuxt-link to="/about" class="more">more details</nuxt-link> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
