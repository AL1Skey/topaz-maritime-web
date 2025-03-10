<script setup>
import { $info } from '@/info';

const {
    siteName,
    address,
    phone,
    email,
    socialMedia,
} = $info
</script>

<template>
    <!-- <footer class="section-padding-top bg-light overflow-hidden"> -->
    <footer class="pt-5 bg-light overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <!-- Footer Logo Start -->
                    <div class="footer-logo">
                        <nuxt-link to="/">
                            <img src="/images/logo/logo-black.png" alt="Logo Black" />
                        </nuxt-link>
                    </div>
                    <!-- Footer Logo End -->

                    <!-- Contact Info Start -->
                    <div class="contact-info d-flex flex-column gap-2">
                        {{ address }}
                        <a href="tel:0123456789">{{ phone }}</a>
                        <!-- <a :href="`mailto:${email}`">{{ email }}</a> -->
                    </div>
                    <!-- Contact Info End -->

                    <!-- Footer Social Icons Start -->
                    <ul class="footer-social-icons social-media-link justify-content-center mb-5">
                        <li v-for="(url, social) in socialMedia">
                            <a :href="url" target="_blank" :class="`icofont-${social}`"></a>
                        </li>
                    </ul>
                    <!-- Footer Social Icons End -->

                    <!-- Copyright Start -->
                    <div class="copyright">
                        © <span>{{ siteName }}</span>
                    </div>
                    <!-- Copyright End -->
                </div>
            </div>
        </div>
    </footer>
</template>