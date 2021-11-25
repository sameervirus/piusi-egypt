<template>
    <div class="company--wrap">
        <div
            class="company--img"
            style="
                background-image: url('https://media.piusi.com/altro/home/HP_garage.jpg');
            "
        >
            <div class="company--intro">
                <div
                    class="company--intro__layout"
                    v-if="siteData.pages"
                    v-html="siteData.pages.slogan.content"
                ></div>
                <div class="company--intro__layout finder">
                    <h1 class="heroSelector--title">PRODUCT FINDER</h1>
                    <div class="heroSelector--subtitle">
                        Choose your combination
                    </div>
                    <div class="heroSelector--body">
                        <div class="heroSelector--block heroSelector--catalog">
                            <select v-on:change="selectedTypes">
                                <option value="0">Catalogue</option>
                                <option
                                    v-for="(type, idx) in siteData.types"
                                    v-bind:key="idx"
                                    :value="type.types_slug"
                                >
                                    {{ type.types }}
                                </option>
                            </select>
                            <div class="heroSelector--ghost">
                                <div>{{ ghost }}</div>
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
                                    All {{ ghost }} products
                                </option>
                                <option
                                    v-for="(range, idx) in finders.categories"
                                    v-bind:key="idx"
                                    :value="range.category_slug"
                                >
                                    {{ range.category }}
                                </option>
                            </select>
                            <div class="heroSelector--ghost">
                                <div>{{ ghost2 }}</div>
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
                                <option value="all">All applications</option>
                                <option
                                    v-for="(app, idx) in finders.applications"
                                    v-bind:key="idx"
                                    :value="app.slug"
                                >
                                    {{ app.name }}
                                </option>
                            </select>
                            <div class="heroSelector--ghost">
                                <div>{{ ghost3 }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="heroSelector--browse mt-3">
                        <button :disabled="!finders" class="btn--wrap">
                            Browse products
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="company--row rosso">
            <div class="company--row__layout">
                <div class="company--row__side centered">
                    <div class="company--row__content text-xl">
                        <h2><strong>Who we are</strong></h2>
                        <div
                            v-if="siteData.pages"
                            v-html="siteData.pages.who_we_are.content"
                        ></div>
                    </div>
                </div>
                <div class="company--row__side centered">
                    <img
                        src="https://media.piusi.com/altro/company/PIUSI_EsternoAzienda_2018.jpg"
                        alt=""
                    />
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
            ghost: "Catalogue",
            ghost2: "Product range",
            ghost3: "Application",
        };
    },
    computed: {
        ...mapGetters({ siteData: "getCurrentData", finders: "getFinder" }),
    },
    methods: {
        selectedTypes: function (e) {
            this.ghost = e.target.options[e.target.selectedIndex].text;
            this.ghost2 = "Product range";
            this.ghost3 = "Application";
            this.$store.dispatch("setFinder", e.target.value);
        },
        selectedRange: function (e) {
            this.ghost2 = e.target.options[e.target.selectedIndex].text;
        },
        selectedApp: function (e) {
            this.ghost3 = e.target.options[e.target.selectedIndex].text;
        },
    },
};
</script>
