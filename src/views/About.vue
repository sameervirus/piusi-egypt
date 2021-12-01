<template>
    <div class="main--wrap">
        <div class="company--wrap">
            <div
                class="company--img"
                style="
                    background-image: url('//www.piusi-egypt.com/images/about.jpg');
                "
            >
                <div class="company--intro">
                    <div
                        v-if="siteData.pages"
                        v-html="siteData.pages.about.content"
                        class="company--intro__layout"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    metaInfo: {
        title: "About Us",
        titleTemplate: "%s - Piusi Egypt!",
    },
    computed: {
        ...mapGetters({ siteData: "getCurrentData" }),
    },
};
</script>
<style>
.company--wrap {
    margin-top: 0;
}
</style>
