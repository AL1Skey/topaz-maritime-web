<script setup>
const isSticky = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY
        if(scrollPos >= 200){
            isSticky.value = true
        } else {
            isSticky.value = false
        }
    })
})

const mobiletoggleClass = (addRemoveClass, className) => {
    const el = document.querySelector('#offcanvas-menu');
    if (addRemoveClass === 'addClass') {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
}
</script>

<template>
    <div class="header header-transparent section-fluid" :class="{'is-sticky': isSticky}">
        <div class="header-wrapper">
            <div class="header-sticky">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-2 col-md-3 col-6">
                            <!-- Header Logo Start -->
                            <div class="header-logo">
                                <nuxt-link to="/">
                                    <img
                                        :src="isSticky
                                            ? '/images/logo/logo-black.png'
                                            : '/images/logo/logo-white.png'"
                                        class="fit-image"
                                        alt="Header Logo"
                                    >
                                </nuxt-link>
                            </div>
                            <!-- Header Logo End -->
                        </div>

                        <!-- <div class="col-lg-8 col-md-7 d-none d-md-block"> -->
                        <div class="col-lg-10 col-md-9 d-none d-md-block">
                            <!-- Main Menu Language Wrapper Start -->
                            <div class="main-menu-language-wrapper">
                                <!-- Main Menu Start -->
                                <Navigation :addClassName="{'main-menu-white': !isSticky}" />
                                <!-- Main Menu End -->

                                <!-- Language Start -->
                                <!-- <div class="language language-white d-md-none d-lg-flex">
                                    <a href="javascript:void(0)">Eng</a>
                                    <a href="javascript:void(0)"> <span>Fra</span></a>
                                </div> -->
                                <!-- Language End -->
                            </div>
                            <!-- Main Menu Language Wrapper End -->
                        </div>

                        <!-- <div class="col-lg-2 col-md-2 col-6 d-md-none"> -->
                        <div class="col-6 d-md-none">
                            <!-- Mobile Menu Hamburger Start -->
                            <div
                                @click="mobiletoggleClass('addClass', 'show-mobile-menu')"
                                :class="{'mobile-menu-toggle--white': !isSticky}"
                                class="mobile-menu-toggle"
                            >
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
