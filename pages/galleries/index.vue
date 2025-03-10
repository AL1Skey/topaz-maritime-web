<script setup>
useHead({
    title: 'Galleries'
})

const api = useApi()

const galleries = ref([])

onMounted(async() => {
    const data = await api.get('/galleries')
    galleries.value = data.data
    console.log("🚀 | onMounted | galleries.value:", galleries.value)
})
</script>

<template>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <Breadcrumb pageTitle="Galleries" />
        <GalleryWrapper :galleries="galleries" />
        <Footer />
    </div>
</template>


