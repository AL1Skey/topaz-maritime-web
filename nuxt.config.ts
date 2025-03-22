// https://nuxt.com/docs/api/configuration/nuxt-config
import { $info } from "./info"
import tailwindcss from "@tailwindcss/vite";
const { siteName } = $info

export default defineNuxtConfig({
    ssr: false,
    spaLoadingTemplate: 'spa-loading-template.html',

    nitro: {
        prerender: {
            autoSubfolderIndex: false
        }
    },

    app: {
        head: {
            title: 'Home',
            titleTemplate: `%s - ${siteName}`,
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
    },

    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/_variables.scss";'
                },
            },
        },
        resolve: {
            alias: {
                'vue-easy-lightbox': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
            }
        },
        plugins: [
            tailwindcss(),
          ],
    },

    plugins: ["@/plugins/aos","@/plugins/pinia"],
    modules: [],
})