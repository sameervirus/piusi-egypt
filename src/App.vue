<template>
    <div>
        <div v-if="this.$store.state.loading" class="loading">
            <Loadingbar v-if="this.$store.state.spinner" />
            <Contact v-if="this.$store.state.form"></Contact>
        </div>
        <Navmobile></Navmobile>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./components/Header";
import Navmobile from "./components/Navmobile";
import Footer from "./components/Footer";
import Loadingbar from "./components/Loadingbar";
import Contact from "./components/Contact";

export default {
    components: { Header, Navmobile, Footer, Loadingbar, Contact },
    metaInfo() {
        return {
            link: [
                {
                    rel: "icon",
                    href: `https://www.piusi-egypt.com/images/${this.favicon}`,
                },
            ],
            meta: [
                { name: "description", content: this.description },
                { name: "keywords", content: this.keywords },
            ],
        };
    },
    data() {
        return {
            favicon: "php8rp3Cu.png",
            description:
                "Piusi Egypt provides professional, easy-to-use and performant fluid handling equipment. Innovation and quality, 100% made in Italy. Discover more about us",
            keywords:
                "water pumps, pumps, wortex, wortex egypt, best water pumps in egypt, Italian water pumps, speroni",
        };
    },

    mounted() {
        this.$store.dispatch("setCurrentData");
        if (this.$store.state.apiData.site_content) {
            this.favicon = this.$store.state.apiData.site_content.favicon;
            this.description =
                this.$store.state.apiData.site_content.description;
            this.keywords = this.$store.state.apiData.site_content.keywords;
        }
    },
};
</script>
<style></style>
