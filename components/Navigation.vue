<script setup>
defineProps({
    addClassName: {
        Type: String, Object
    }
})
</script>

<template>
    <nav class="main-menu" :class="addClassName">
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/galleries">Gallery</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/careers">Career</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news-articles">News Article</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
        </ul>
    </nav>
</template>
