<template>
    <div class="header section-fluid border-bottom header-black" :class="{'is-sticky': isSticky}">
        <div class="header-wrapper">
            <div class="header-sticky">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-2 col-md-3 col-6">
                            <!-- Header Logo Start -->
                            <div class="header-logo">
                                <nuxt-link to="/">
                                    <img class="fit-image" src="/images/logo/logo-black.png" alt="Header Logo">
                                </nuxt-link>
                            </div>
                            <!-- Header Logo End -->
                        </div>

                        <div class="col-lg-10 col-md-9 d-none d-md-block">
                            <!-- Main Menu Language Wrapper Start -->
                            <div class="main-menu-language-wrapper">
                                <!-- Main Menu Start -->
                                <Navigation />
                                <!-- Main Menu End -->

                                <!-- Language Start -->
                                <!-- <div class="language d-md-none d-lg-flex">
                                    <a href="javascript:void(0)">Eng</a>
                                    <a href="javascript:void(0)"><span>Fra</span></a>
                                </div> -->
                                <!-- Language End -->
                            </div>
                            <!-- Main Menu Language Wrapper End -->
                        </div>

                        <div class="col-6 d-md-none">
                            <!-- Mobile Menu Hamburger Start -->
                            <div class="mobile-menu-toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <span>menu</span>
                                <button class="toggle">
                                    <i class="icon-top"></i>
                                    <i class="icon-middle"></i>
                                    <i class="icon-bottom"></i>
                                </button>
                            </div>
                            <!-- Mobile Menu Hamburger End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>