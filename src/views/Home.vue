<template>
    <div class="company--wrap">
        <div
            class="company--img"
            style="
                background-image: url('//www.piusi-egypt.com/images/home.jpg');
            "
        >
            <div class="company--intro">
                <div
                    class="company--intro__layout"
                    v-if="siteData.pages"
                    v-html="
                        this.$i18n.locale == 'ar'
                            ? siteData.pages.slogan.content_ar
                            : siteData.pages.slogan.content
                    "
                ></div>
                <div class="company--intro__layout finder">
                    <h1 class="heroSelector--title">{{ $t("home.finder") }}</h1>
                    <div class="heroSelector--subtitle">
                        {{ $t("home.sub_finder") }}
                    </div>
                    <div class="heroSelector--body">
                        <div class="heroSelector--block heroSelector--catalog">
                            <select v-on:change="selectedTypes">
                                <option value="0">
                                    {{ $t("menu.catalogues") }}
                                </option>
                                <option
                                    v-for="(type, idx) in siteData.types"
                                    v-bind:key="idx"
                                    :value="type.types_slug"
                                >
                                    {{
                                        $i18n.locale == "ar"
                                            ? type.types_ar
                                            : type.types
                                    }}
                                </option>
                            </select>
                            <div class="heroSelector--ghost">
                                <div v-if="$te(`${ghost}`)">
                                    {{ $t(`${ghost}`) }}
                                </div>
                                <div v-else>
                                    {{ ghost }}
                                </div>
                            </div>
                        </div>
                        <div class="heroSelector--sep">
                            <span>+<span></span></span>
                        </div>
                        <div
                            class="heroSelector--block heroSelector--range"
                            :class="{
                                'heroSelector--range__disabled': !finders,
                            }"
                        >
                            <select v-if="finders" v-on:change="selectedRange">
                                <option value="all">
                                    {{
                                        $t("home.finder_product", {
                                            msg: ghost,
                                        })
                                    }}
                                </option>
                                <option
                                    v-for="(range, idx) in finders.categories"
                                    v-bind:key="idx"
                                    :value="range.category_slug"
                                >
                                    {{
                                        $i18n.locale == "ar"
                                            ? range.category_ar
                                            : range.category
                                    }}
                                </option>
                            </select>
                            <div class="heroSelector--ghost">
                                <div v-if="$te(`${ghost2}`)">
                                    {{ $t(`${ghost2}`) }}
                                </div>
                                <div v-else>
                                    {{ ghost2 }}
                                </div>
                            </div>
                        </div>
                        <div class="heroSelector--sep">
                            <span>+<span></span></span>
                        </div>
                        <div
                            class="
                                heroSelector--block heroSelector--application
                            "
                            :class="{
                                'heroSelector--range__disabled': !finders,
                            }"
                        >
                            <select v-if="finders" v-on:change="selectedApp">
                                <option value="all">
                                    {{ $t("products.all_applications") }}
                                </option>
                                <option
                                    v-for="(app, idx) in $i18n.locale == 'ar'
                                        ? finders.applications_ar
                                        : finders.applications"
                                    v-bind:key="idx"
                                    :value="app.slug"
                                >
                                    {{ app.name }}
                                </option>
                            </select>
                            <div class="heroSelector--ghost">
                                <div v-if="$te(`${ghost3}`)">
                                    {{ $t(`${ghost3}`) }}
                                </div>
                                <div v-else>
                                    {{ ghost3 }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="heroSelector--browse mt-3">
                        <button
                            :disabled="!finders"
                            class="btn--wrap"
                            @click="goToProducts"
                        >
                            {{ $t("products.browse_products") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="company--row rosso">
            <div class="company--row__layout">
                <div class="company--row__side centered">
                    <div class="company--row__content text-xl">
                        <h2>
                            <strong>{{ $t("home.about") }}</strong>
                        </h2>
                        <div
                            v-if="siteData.pages"
                            v-html="
                                this.$i18n.locale == 'ar'
                                    ? siteData.pages.who_we_are.content_ar
                                    : siteData.pages.who_we_are.content
                            "
                        ></div>
                    </div>
                </div>
                <div class="company--row__side centered">
                    <img src="//www.piusi-egypt.com/images/about.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    metaInfo: {
        title: "Home",
        titleTemplate: "%s - Piusi Egypt!",
    },
    data() {
        return {
            ghost: "catalogue",
            ghost2: "product_range",
            ghost3: "application",
            searchText: {},
        };
    },
    mounted() {},
    computed: {
        ...mapGetters({ siteData: "getCurrentData", finders: "getFinder" }),
    },
    methods: {
        selectedTypes(e) {
            this.searchText.types = e.target.value;
            this.ghost = e.target.options[e.target.selectedIndex].text;
            this.ghost2 = "product_range";
            this.ghost3 = "application";
            this.$store.dispatch("setFinder", e.target.value);
        },
        selectedRange(e) {
            this.searchText.range = e.target.value;
            this.ghost2 = e.target.options[e.target.selectedIndex].text;
        },
        selectedApp(e) {
            this.searchText.applications = e.target.value;
            this.ghost3 = e.target.options[e.target.selectedIndex].text;
        },
        goToProducts() {
            const items = this.searchText;
            this.searchText = {};
            this.ghost = "catalogue";
            this.ghost2 = "product_range";
            this.ghost3 = "application";
            this.$store.commit("setFinder", null);
            this.$router.push({
                name: "Products",
                params: {
                    item: items.types,
                    category: items.range ?? "all",
                },
                query: { applications: items.applications ?? "" },
            });
        },
    },
};
</script>
