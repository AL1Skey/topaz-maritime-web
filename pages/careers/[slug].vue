<script setup>
useHead({
    title: 'News Article Details'
})

const api = useApi()
const route = useRoute()

const job = ref(null)

onMounted(async() => {
    const data = await api.get(`/job-vacancies/${route.params.slug}`, {
        use_slug: 1
    })
    job.value = data.data
    console.log("🚀 | onMounted | job.value:", job.value)
})

const formJob = reactive({
    name: '',
    email: '',
    phone: '',
    cv: null,
})

const loadingSubmitJob = ref(false)
const formErrors = ref(null)

const resetForm = () => {
    formJob.name = ''
    formJob.email = ''
    formJob.phone = ''
    formJob.cv = null
}

const submitJob = async () => {
    let formData = new FormData();
    formData.append('name', formJob.name);
    formData.append('email', formJob.email);
    formData.append('phone', formJob.phone);
    formData.append('cv', formJob.cv);
    formData.append('job_vacancy_id', job.value.id);

    try {
        loadingSubmitJob.value = true
        const data = await api.post('/job-applications', formData)
        console.log("🚀 | submitJob | data:", data)

        //notif succes
        alert('Your job application submitted successfully!')

        resetForm()
    } catch ({ _data }) {
        console.log("🚀 | submitJob | _data:", _data)
        formErrors.value = _data.errors

        // alert('error')
    } finally {
        loadingSubmitJob.value = false
    }
}

const handleCvUpload = (e) => {
    formJob.cv = e.target.files[0]
}
</script>

<template>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <CareerDetails :job="job" />
        <!-- <RelatedBlogPost /> -->

        <!-- <div class="contact-content-wrapper">

        </div> -->
        
      
        <!-- Old New Post Section Start -->
        <!-- <div class="old-new-post-section overflow-hidden">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="old-new-post-content mtn-30">
                            <nuxt-link to="/blog-details" class="old-post mt-30" data-aos="fade-right" data-aos-delay="300">Older<span>The Way Of Building</span></nuxt-link>
                            <nuxt-link to="/blog-details" class="new-post mt-30" data-aos="fade-left" data-aos-delay="300">Newer<span>New Interior Design Trends</span></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- Old New Post Section End -->

        <!-- <CommentForm /> -->
    </div>
</template>

