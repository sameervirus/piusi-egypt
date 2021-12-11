<template>
    <div v-if="product" class="main--wrap">
        <div class="prodotti--wrap">
            <div class="prodotti--layout">
                <div class="prodotti--top">
                    <h1 class="prodotti--title">
                        {{
                            $i18n.locale == "ar"
                                ? product.name_ar
                                : product.name
                        }}
                    </h1>
                    <div class="prodotti--top__sx">
                        <div id="lightgallery" class="productGallery--wrap">
                            <div class="productGallery--main">
                                <a
                                    :title="
                                        $i18n.locale == 'ar'
                                            ? product.name_ar
                                            : product.name
                                    "
                                    class="productGallery--mainLink galleryitem"
                                    :href="product.url_cover"
                                >
                                    <img
                                        class="productGallery--mainImage"
                                        :src="product.url_cover"
                                        :alt="
                                            $i18n.locale == 'ar'
                                                ? product.name_ar
                                                : product.name
                                        "
                                    />
                                </a>
                            </div>
                            <div
                                v-if="product.images.length > 1"
                                class="productGallery--nav__wrap"
                            >
                                <slick
                                    :class="`productGallery--nav`"
                                    ref="slick"
                                    :options="slickOptions"
                                >
                                    <a
                                        v-for="(
                                            image, idx
                                        ) in product.images.slice(1)"
                                        v-bind:key="idx"
                                        class="productGallery--item galleryitem"
                                        :href="`https://www.piusi-egypt.com${image.image}`"
                                        ><img
                                            :src="`https://www.piusi-egypt.com${image.thumb}`"
                                            alt=""
                                    /></a>
                                </slick>
                                <div
                                    class="
                                        next-gallerySlider
                                        slick-arrow slick-hidden
                                    "
                                    aria-disabled="true"
                                    tabindex="-1"
                                >
                                    ›
                                </div>
                                <div
                                    class="
                                        prev-gallerySlider
                                        slick-arrow slick-hidden
                                    "
                                    aria-disabled="true"
                                    tabindex="-1"
                                >
                                    ‹
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prodotti--top__dx">
                        <div class="productsInfo--wrap">
                            <div v-if="product.sub" class="productsInfo--item">
                                <div class="productsInfo--label">
                                    {{ $t("products.product_category") }}
                                </div>
                                <div class="productsInfo--pill">
                                    {{
                                        $i18n.locale == "ar"
                                            ? product.sub_ar
                                            : product.sub
                                    }}
                                </div>
                            </div>
                            <div
                                v-if="product.fluids"
                                class="productsInfo--item"
                            >
                                <div class="productsInfo--label">
                                    {{ $t("products.fluid") }}
                                </div>
                                <div class="productsInfo--pill">
                                    {{
                                        $i18n.locale == "ar"
                                            ? product.arfluids
                                                  .map((i) => i.name)
                                                  .join(" | ")
                                            : product.fluids
                                                  .map((i) => i.name)
                                                  .join(" | ")
                                    }}
                                </div>
                            </div>
                            <div
                                v-if="product.applications"
                                class="productsInfo--item"
                            >
                                <div class="productsInfo--label">
                                    {{ $t("application") }}
                                </div>
                                <div class="productsInfo--pill">
                                    {{
                                        $i18n.locale == "ar"
                                            ? product.arapplications
                                                  .map((i) => i.name)
                                                  .join(" | ")
                                            : product.applications
                                                  .map((i) => i.name)
                                                  .join(" | ")
                                    }}
                                </div>
                            </div>
                        </div>

                        <div class="productsFeatures--wrap">
                            <h2 class="prodotti--subtitle">
                                {{ $t("products.features") }}
                            </h2>
                            <div
                                class="productsFeatures--list"
                                v-html="
                                    $i18n.locale == 'ar'
                                        ? product.features_ar
                                        : product.features
                                "
                            ></div>

                            <div class="btn" @click="requestInfo">
                                {{ $t("request_information") }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="productContent--wrap">
                    <div class="productContent--sx">
                        <div class="prodotti--descrizione">
                            <div class="prodotti--subtitle">
                                {{ $t("description") }}
                            </div>
                            <div
                                v-html="
                                    $i18n.locale == 'ar'
                                        ? product.description_ar
                                        : product.description
                                "
                            ></div>
                        </div>
                        <div
                            class="productManuals--wrap"
                            style="margin-top: 40px"
                            v-if="product.technical_data"
                        >
                            <h2 class="prodotti--subtitle">
                                {{ $t("technical_data") }}
                            </h2>
                            <div
                                class="productManuals--list"
                                v-html="
                                    $i18n.locale == 'ar'
                                        ? product.technical_data_ar
                                        : product.technical_data
                                "
                            ></div>
                        </div>
                    </div>

                    <div v-if="product.downloads" class="productContent--dx">
                        <div class="productDownloads--wrap">
                            <h2 class="prodotti--subtitle">
                                {{ $t("downloads") }}
                            </h2>
                            <div class="productDownloads--list">
                                <a
                                    v-for="(pdf, idx) in product.downloads"
                                    v-bind:key="idx"
                                    :href="`https://www.piusi-egypt.com${pdf.url}`"
                                    class="productDownloads--item"
                                    target="_blank"
                                >
                                    <div class="productDownloads--txt">
                                        {{ pdf.code }}
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            d="M8.6 16.6l4.6-4.6-4.6-4.6L10 6l6 6-6 6-1.4-1.4z"
                                        ></path>
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import "lightgallery.js";
import "lightgallery.js/dist/css/lightgallery.css";

export default {
    metaInfo() {
        return {
            title: this.product?.name,
            titleTemplate: "%s - Piusi Egypt!",
        };
    },
    components: { Slick },
    data() {
        return {
            slickOptions: {
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: ".next-gallerySlider",
                prevArrow: ".prev-gallerySlider",
                arrows: true,
                speed: 200,
            },
            product: null,
        };
    },
    async created() {
        const response = await this.$api.get({
            resource: "product",
            id: this.$route.params.item,
        });

        this.product = response.data;
    },
    mounted() {
        const el = document.getElementById("lightgallery");
        window.lightGallery(el, {
            selector: "a",
            counter: false,
            download: false,
        });
    },
    methods: {
        requestInfo() {
            this.$store.commit("setForm", true);
            this.$store.commit("setHasItem", {
                slug: this.product.slug,
                name: this.product.name,
            });
        },
    },
};
</script>

<style></style>
