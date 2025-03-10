import AOS from "aos"
import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        // nuxtApp.AOS = AOS.init({ disable: "mobile", once: true, offset: 10 }) // eslint-disable-line new-cap
        nuxtApp.AOS = AOS.init({ once: true, offset: 10 }) // eslint-disable-line new-cap

        // nuxtApp.hook('page:finish', () => AOS.refresh())
        // nuxtApp.hook('page:finish', () => {
        //     AOS.refresh()
        // })
        // nuxtApp.hook('app:mounted', () => AOS.refresh())
        // window.addEventListener('scroll', AOS.refresh);

    }
})