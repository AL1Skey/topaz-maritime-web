<script setup>
import { $info } from '@/info';

useHead({
    title: 'Contact'
})

const api = useApi()

const {
    gmaps,
    addressTitle,
    address,
    email,
    phone
} = $info

const formContactUs = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
})

const loadingSubmitContactUs = ref(false)
const formErrors = ref(null)

const resetForm = () => {
    formContactUs.name = ''
    formContactUs.email = ''
    formContactUs.subject = ''
    formContactUs.message = ''
}

const submitContactUs = async () => {
    let formData = new FormData();
    formData.append('name', formContactUs.name);
    formData.append('email', formContactUs.email);
    formData.append('subject', formContactUs.subject);
    formData.append('message', formContactUs.message);

    try {
        loadingSubmitContactUs.value = true
        const data = await api.post('/contact-us', formData)
        console.log("🚀 | submitContactUs | data:", data)

        //notif succes
        alert('Your message send successfully!')

        resetForm()
    } catch ({ _data }) {
        console.log("🚀 | submitContactUs | _data:", _data)
        formErrors.value = _data.errors
    } finally {
        loadingSubmitContactUs.value = false
    }
}
</script>

<template>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />

        <!-- Contact Map Start -->
        <!-- <div class="section"> -->
            <!-- Google Map Area Start -->
            <!-- <div class="google-map-area w-100"> -->
                <!-- <iframe class="contact-map" :src="gmaps"></iframe>/ -->
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.280976277639!2d106.82301839678956!3d-6.226636799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15112dcabb5%3A0x239e7216bde2d34d!2sDanatama%20Square!5e0!3m2!1sid!2sid!4v1705644819430!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
            <!-- </div> -->
            <!--Google Map Area Start-->
        <!-- </div> -->
        <!-- Contact Map End -->

        <!-- Contact Page Section Start -->
        <div class="contact-content-wrapper">
            <div class="container container-google-map">
                <div class="contact-info-boxed bg-light p-0">
                    <div class="google-map-area w-100">
                        <iframe class="contact-map" :src="gmaps"></iframe>
                    </div>
                </div>
            </div>



            <div class="container">
                <!-- Contact Info Boxed Start -->
                <div class="contact-info-boxed bg-light mt-50" data-aos="fade-up" data-aos-delay="300">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="inner-content">
                                <!-- <h1 class="title">Brooklyn, <span>New York</span></h1> -->
                                <h1 class="title">{{ addressTitle }}</h1>
                                <span class="text">{{ address }}</span>
                                <!-- <span class="email">
                                    Email: <a :href="`mailto:${email}`">{{ email }}</a>
                                </span> -->
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="inner-info">
                                <span class="call">Call directly:<br><a :href="`tel:${phone}`">{{ phone }}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contact Info Boxed End -->

                <!-- Form Boxed Start -->
                <div class="form-boxed bg-light mt-50" data-aos="fade-up" data-aos-delay="300">
                    <div class="section-title text-center">
                        <h2 class="title">Have A Question? Contact Us</h2>
                    </div>

                    <div class="boxed-inner">
                        <!-- Contact Form -->
                        <div class="contact-form">
                            <form @submit.prevent="submitContactUs">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 form-group">
                                        <input v-model="formContactUs.name" class="input-item" type="text" name="name" placeholder="Enter your name...">
                                    </div>

                                    <div class="col-lg-4 col-md-6 form-group">
                                        <input v-model="formContactUs.email" class="input-item" type="email" name="email" placeholder="Your Email">
                                    </div>

                                    <div class="col-lg-4 col-md-12 form-group">
                                        <input v-model="formContactUs.subject" class="input-item" type="text" name="subject" placeholder="Subject">
                                    </div>

                                    <div class="col-lg-12 form-group mb-10">
                                        <div class="input-item">
                                            <textarea v-model="formContactUs.message" class="textarea-item" name="message" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 text-center form-group">
                                        <ul>
                                            <li v-for="error in formErrors">
                                                <span class="text-danger">{{ error[0] }}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-12 text-center form-group">
                                        <!-- <button class="btn btn-primary btn-hover-dark" type="submit" name="submit" id="submit"><span class="txt">Send Message</span></button> -->
                                        <button
                                            :disabled="loadingSubmitContactUs"
                                            id="submit"
                                            class="btn btn-primary btn-hover-dark"
                                            name="submit"
                                            type="submit"
                                        >
                                            <span class="txt">Send Message</span>
                                            <span v-if="loadingSubmitContactUs" class="ms-3 spinner-border spinner-border-sm" role="status"></span>
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
        </div>
        <!-- Contact Page Section End -->
    </div>
</template>


