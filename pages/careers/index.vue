<script setup>
import PopupModal from '~/components/PopupModal.vue'
useHead({
    title: 'Careers'
})

const showPopup = ref(false)

function handleClosePopup() {
  showPopup.value = false
}
const api = useApi()

const jobs = ref([])

onMounted(async() => {
    const data = await api.get('/job-vacancies')
    jobs.value = data.data
    console.log("🚀 | onMounted | jobs.value:", jobs.value)
    showPopup.value = true
})
</script>

<template>
    <div class="main-container section-padding-bottom">
        <!-- Popup Modal -->
        <PopupModal :show="showPopup" @close="handleClosePopup" />
        <TheHeaderTwo />
        <OffCanvasMobileMenu />

        <div class="container mt-5 -mb-5 text-black">
            <h2>RECRUITMENT AND SELECTION POLICY</h2>
            <ol>
                <li>RECRUITMENT AND SELECTION PROCESS IS FREE OF CHARGE</li>
                <li>
                    <span>
                        Choose from contactable officer below should there be any questions or concerns regarding breach of NO FEE policy :
                    </span>
                    <ul class="list-email">
                        <li>riza.padian@pttm.co.id</li>
                        <li>agus.yunanto@gemilang-sm.com</li>
                        <li>fani.jauhari@bull.co.id</li>
                        <li>⁠Bambang.purnomo@gemilang-sm.com</li>
                        <li>⁠handy.berlianto@gemilang-sm.com</li>
                    </ul>
                </li>
            </ol>
        </div>

        <Breadcrumb pageTitle="Careers" />
        <CareerWrapper :jobs="jobs" />
    </div>
</template>

<style scoped>
.section-padding {
    padding-top: 3rem;
}
ul {
    padding-left: 1.5rem;
}
ul li {
    list-style: disc;
}
</style>