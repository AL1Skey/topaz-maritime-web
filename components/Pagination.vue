<script setup>
const props = defineProps({
    meta: {
        type: Object,
        default: {},
    }
})

const currentPage = computed(() => props.meta.current_page)

const firsPage =

</script>

<template>
    <nav aria-label="navigation">
        <ul class="pagination">
            <li class="page-item" v-for="link in newsArticlesMeta.links">
                <a class="page-link" :href="link.url" v-html="link.label"></a>
            </li>

            <!-- <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li> -->
        </ul>
    </nav>
</template>