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

        <div class="container pb-5">
            <!-- Form Boxed Start -->
            <!-- <div class="form-boxed bg-light mt-50" data-aos="fade-up" data-aos-delay="300"> -->
            <div class="form-boxed bg-light" data-aos="fade-up" data-aos-delay="300">
                <div class="section-title text-center">
                    <h2 class="title">
                        <!-- Submit Job Application For This Career:
                        {{ job?.title }} -->
                        Submit Job Application For This Career
                    </h2>
                    <p>
                        {{ job?.job_category.name }}: {{ job?.title }}
                    </p>
                    <!-- {{ job?.job_category.name }}: {{ job?.title }} -->
                </div>

                <div class="boxed-inner">
                    <!-- Contact Form -->
                    <div class="contact-form">
                        <form @submit.prevent="submitJob">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 form-group">
                                    <input
                                        v-model="formJob.name"
                                        class="input-item"
                                        name="name"
                                        placeholder="Enter your name..."
                                        type="text"
                                        required
                                    />
                                </div>

                                <div class="col-lg-4 col-md-6 form-group">
                                    <input
                                        v-model="formJob.email"
                                        class="input-item"
                                        name="email"
                                        placeholder="Your Email"
                                        type="email"
                                        required
                                    />
                                </div>

                                <div class="col-lg-4 col-md-6 form-group">
                                    <input
                                        v-model="formJob.phone"
                                        class="input-item"
                                        name="phone"
                                        placeholder="Your Phone Number"
                                        type="text"
                                        required
                                    />
                                </div>

                                <div class="col-lg-12 col-md-6 form-group">
                                    <label for="cv" class="form-label pe-5">Upload CV</label>
                                    <input
                                        @input="handleCvUpload"
                                        id="cv"
                                        class="input-item form-control"
                                        type="file"
                                        required
                                    />
                                    <!-- <div class="d-flex gap-2 p-2">
                                    </div> -->
                                        <!-- accept="image/*" -->
                                    <!-- <div class="d-flex gap-2 p-2 bg-white">
                                        <label>Upload CV</label>
                                        <input
                                            @input="handleCvUpload"
                                            type="file"
                                            class="input-item"
                                            required
                                        />
                                    </div> --->
                                </div>

                                <div class="col-lg-12 text-center form-group">
                                    <ul>
                                        <li v-for="error in formErrors">
                                            <span class="text-danger">{{ error[0] }}</span>
                                        </li>
                                    </ul>
                                </div>


                                <div class="col-lg-12 text-center form-group">
                                    <button
                                        :disabled="loadingSubmitJob"
                                        id="submit"
                                        class="btn btn-primary btn-hover-dark"
                                        name="submit"
                                        type="submit"
                                    >
                                        <span class="txt">Submit</span>
                                        <span v-if="loadingSubmitJob" class="ms-3 spinner-border spinner-border-sm" role="status"></span>
                                    </button>
                                </div>
                                <p class="col-8 form-message mb-0"></p>
                            </div>
                        </form>
                    </div>
                    <!--End Contact Form -->
                </div>

            </div>
            <!-- Form Boxed End -->

        </div>

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

