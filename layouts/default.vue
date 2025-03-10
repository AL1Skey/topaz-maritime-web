<script setup>
const isVisible = ref(false)

const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
}

onMounted(() => {
    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        if (scroll >= 500) {
            isVisible.value = true;
        }
        else {
            isVisible.value = false;
        }
    })
})
</script>

<template>
    <div>
        <slot />
        <Footer />

        <button class="scroll-top" @click="scrollToTop" :class="{ 'show': isVisible }">
            <i class="arrow-top icofont-rounded-up"></i>
            <i class="arrow-bottom icofont-rounded-up"></i>
        </button>

    </div>
</template>
