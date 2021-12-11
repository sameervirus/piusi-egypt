<template>
    <div class="menu--wrap">
        <div class="menu--logowrap">
            <router-link :to="$i18nRoute({ name: 'Home' })" class="menu--logo"
                ><img
                    src="//www.piusi-egypt.com/images/piusi-logo.svg"
                    alt="PIUSI SpA"
                    style="width: 75px; height: auto"
                />
                <img
                    v-if="siteContent"
                    :src="'//www.piusi-egypt.com/images/' + siteContent.logo"
                    alt="ASDEGYPT"
                    style="width: 75px; height: auto"
                />
            </router-link>
        </div>

        <div class="nav--desktop">
            <div class="nav--box">
                <nav>
                    <router-link
                        :to="$i18nRoute({ name: 'Home' })"
                        class="nav--item"
                        >{{ $t("menu.home") }}</router-link
                    >
                    <div class="nav--item" v-on:click="subnav()">
                        {{ $t("menu.products") }}
                        <div class="subnav--wrap__mobile"></div>
                    </div>

                    <router-link
                        :to="$i18nRoute({ name: 'About' })"
                        class="nav--item"
                        >{{ $t("menu.about") }}</router-link
                    >

                    <router-link
                        :to="$i18nRoute({ name: 'News' })"
                        class="nav--item"
                        >{{ $t("menu.news") }}</router-link
                    >

                    <router-link
                        :to="$i18nRoute({ name: 'Contacts' })"
                        class="nav--item"
                        >{{ $t("menu.contacts") }}</router-link
                    >
                </nav>
            </div>
        </div>

        <div
            class="nav--btn hamburger"
            v-on:click="changeFreez"
            :class="{ active: this.$store.state.opens }"
        >
            <span></span>
        </div>
        <div class="subnav">
            <div class="subnav--nonTray">
                <div class="subnav--wrap" scroll-orizzontale-wrapper="">
                    <div
                        class="subnav--layout"
                        data-scroll-orizzontale-content=""
                    ></div>
                    <div
                        class="horizontal--arrow arrow__sx disabled"
                        data-scroll-orizzontale-arrow=""
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M15.4 16.6L10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4z"
                            ></path>
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                        </svg>
                    </div>
                    <div
                        class="horizontal--arrow arrow__dx"
                        data-scroll-orizzontale-arrow=""
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M8.6 16.6l4.6-4.6-4.6-4.6L10 6l6 6-6 6-1.4-1.4z"
                            ></path>
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div
                class="subnav--tray"
                :class="{ 'subnav--tray__on': openProduct }"
                data-subnavtray=""
            >
                <div class="subnav--wrap" scroll-orizzontale-wrapper="">
                    <div
                        class="subnav--layout"
                        data-scroll-orizzontale-content=""
                    >
                        <router-link
                            v-for="(type, idx) in types"
                            v-bind:key="idx"
                            :to="
                                $i18nRoute({
                                    name: 'Products',
                                    params: {
                                        item: type.types_slug,
                                        category: 'all',
                                    },
                                })
                            "
                            class="subnav--item"
                            >{{
                                $i18n.locale == "ar"
                                    ? type.types_ar
                                    : type.types
                            }}</router-link
                        >

                        <router-link
                            :to="$i18nRoute({ name: 'Catalogues' })"
                            class="subnav--item"
                            >{{ $t("menu.catalogues") }}</router-link
                        >
                    </div>
                    <div
                        class="horizontal--arrow arrow__sx disabled"
                        data-scroll-orizzontale-arrow=""
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M15.4 16.6L10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4z"
                            ></path>
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                        </svg>
                    </div>
                    <div
                        class="horizontal--arrow arrow__dx"
                        data-scroll-orizzontale-arrow=""
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M8.6 16.6l4.6-4.6-4.6-4.6L10 6l6 6-6 6-1.4-1.4z"
                            ></path>
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openProduct: false,
        };
    },
    computed: {
        siteContent() {
            return this.$store.state.apiData.site_content;
        },
        types() {
            return this.$store.state.apiData.types;
        },
    },
    methods: {
        changeFreez() {
            this.$store.dispatch("changeFreez");
            if (this.$store.state.opens) {
                document.body.classList.remove("freez");
            } else {
                document.body.classList.add("freez");
            }
        },
        subnav() {
            if (!this.$route.path.includes("/products"))
                this.openProduct = this.openProduct ? false : true;
        },
    },
    watch: {
        $route() {
            this.openProduct = false;
        },
    },
};
</script>

<style></style>
