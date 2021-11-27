<template>
    <div class="productsGrid--body">
        <div class="finder--filters__opener btn" @click="filterOn = true">
            <span style="width: 20px; height: 24px"
                ><svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="sliders-h"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 512 512"
                    class="svg-inline--fa fa-sliders-h fa-w-16"
                >
                    <path
                        fill="currentColor"
                        d="M496 384H160v-16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h80v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h336a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160h-80v-16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h336v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h80a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H288V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h208v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"
                    ></path></svg
            ></span>
            Filter products
        </div>
        <div class="finder--wrap">
            <div class="finder--layout">
                <div
                    class="finder--blur"
                    :class="{ 'finder--blur__on': filterOn }"
                ></div>
                <div
                    class="finder--filters"
                    :class="{ 'finder--filters__on': filterOn }"
                >
                    <div class="finder--filters__buttons">
                        <div
                            class="finder--filters__reset"
                            @click="
                                filterOn = false;
                                fgon = null;
                                ffon = null;
                                faon = null;
                                filterProducts();
                            "
                        >
                            <span style="width: 11px; height: 18px"
                                ><svg
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="trash-alt"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    class="svg-inline--fa fa-trash-alt fa-w-14"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"
                                    ></path></svg></span
                            >Reset
                        </div>
                        <div
                            class="finder--filters__apply"
                            @click="filterOn = false"
                        >
                            <span
                                ><svg
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="check"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    class="svg-inline--fa fa-check fa-w-16"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                    ></path></svg></span
                            >Apply
                        </div>
                    </div>
                    <div class="filters--wrap">
                        <div class="filters--section filters--section__open">
                            <div class="filters--head">
                                <div class="filters--title">
                                    Product Category
                                </div>
                                <div class="filters--switch">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 11 8"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.1 0l2 2-5.6 5.5L0 2l2-2 3.5 3.6z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="filters--body">
                                <div
                                    class="filters--item filters--all"
                                    :class="{ 'filters--all__on': !fgon }"
                                    @click="
                                        fgon = null;
                                        filterProducts();
                                    "
                                >
                                    <div class="filters--checkbox">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 42 42"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M36.8 8l4.8 4.8-21.8 21.8L6 20.9l4.8-4.8 9 8.9z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>All categories</div>
                                </div>
                                <div
                                    v-for="(sub, idx) in subs"
                                    v-bind:key="idx"
                                    @click="filterCategory(sub.slug)"
                                    class="filters--item"
                                    :class="{
                                        'filters--item__on': sub.slug == fgon,
                                    }"
                                >
                                    <div class="filters--checkbox">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 42 42"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M36.8 8l4.8 4.8-21.8 21.8L6 20.9l4.8-4.8 9 8.9z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>{{ sub.name }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="filters--section filters--section__open">
                            <div class="filters--head">
                                <div class="filters--title">
                                    Fluid compatibility
                                </div>
                                <div class="filters--switch">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 11 8"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.1 0l2 2-5.6 5.5L0 2l2-2 3.5 3.6z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="filters--body">
                                <div
                                    class="filters--item filters--all"
                                    :class="{ 'filters--all__on': !ffon }"
                                    @click="
                                        ffon = null;
                                        filterProducts();
                                    "
                                >
                                    <div class="filters--checkbox">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 42 42"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M36.8 8l4.8 4.8-21.8 21.8L6 20.9l4.8-4.8 9 8.9z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>All fluids</div>
                                </div>
                                <div
                                    v-for="(fluid, idx) in fluids"
                                    v-bind:key="idx"
                                    @click="filterFluid(fluid.slug)"
                                    class="filters--item"
                                    :class="{
                                        'filters--item__on': fluid.slug == ffon,
                                    }"
                                >
                                    <div class="filters--checkbox">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 42 42"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M36.8 8l4.8 4.8-21.8 21.8L6 20.9l4.8-4.8 9 8.9z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>{{ fluid.name }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="filters--section filters--section__open">
                            <div class="filters--head">
                                <div class="filters--title">Application</div>
                                <div class="filters--switch">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 11 8"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.1 0l2 2-5.6 5.5L0 2l2-2 3.5 3.6z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="filters--body">
                                <div
                                    class="filters--item filters--all"
                                    :class="{ 'filters--all__on': !faon }"
                                    @click="
                                        faon = null;
                                        filterProducts();
                                    "
                                >
                                    <div class="filters--checkbox">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 42 42"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M36.8 8l4.8 4.8-21.8 21.8L6 20.9l4.8-4.8 9 8.9z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>All applications</div>
                                </div>
                                <div
                                    v-for="(application, idx) in applications"
                                    v-bind:key="idx"
                                    @click="filterApplication(application.slug)"
                                    class="filters--item"
                                    :class="{
                                        'filters--item__on':
                                            application.slug == faon,
                                    }"
                                >
                                    <div class="filters--checkbox">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 42 42"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M36.8 8l4.8 4.8-21.8 21.8L6 20.9l4.8-4.8 9 8.9z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>{{ application.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="finder--response">
                    <div class="finder--grid">
                        <a
                            v-for="(product, idx) in products"
                            v-bind:key="idx"
                            :href="`/product/${product.slug}`"
                            class="productItem--wrap"
                            ><div class="productItem--img">
                                <img
                                    :src="product.url_cover"
                                    :alt="product.name"
                                />
                            </div>
                            <div class="productItem--title">
                                {{ product.name }}
                            </div>
                            <div class="productItem--fluids">
                                {{
                                    product.fluids
                                        .map((i) => i.name)
                                        .join(" | ")
                                }}
                            </div>
                            <div
                                v-if="
                                    new Date(product.updated_at).getTime() >
                                    new Date().getTime() - 12096e5
                                "
                                class="productItem--isNew"
                            >
                                New
                            </div></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
        },
    },
    data() {
        return {
            fgon: null,
            ffon: null,
            faon: null,
            products: this.data,
            filterOn: false,
        };
    },
    mounted() {
        this.filterProducts();
    },
    computed: {
        subs() {
            return this.data.map((item) => ({
                slug: item.sub_slug,
                name: item.sub,
            }));
        },
        fluids() {
            let array = this.data.map((i) => i.fluids).flat();
            return this.removeDublicate(array);
        },
        applications() {
            let array = this.data.map((i) => i.applications).flat();
            return this.removeDublicate(array);
        },
    },
    methods: {
        removeDublicate(array) {
            return array.filter(
                (thing, index, self) =>
                    index === self.findIndex((t) => t.slug === thing.slug)
            );
        },
        filterCategory(slug) {
            this.fgon = slug;
            this.filterProducts();
        },
        filterFluid(slug) {
            this.ffon = slug;
            this.filterProducts();
        },
        filterApplication(slug) {
            this.faon = slug;
            this.filterProducts();
        },
        filterProducts() {
            this.products = this.data;
            if (this.fgon)
                this.products = this.products.filter(
                    (item) => item.sub_slug == this.fgon
                );
            if (this.ffon)
                this.products = this.products.filter((item) =>
                    item.fluids.filter((s) => s.slug == this.ffon)
                );
            if (this.faon)
                this.products = this.products.filter((item) =>
                    item.applications.filter((s) => s.slug == this.faon)
                );
        },
    },
    watch: {
        $route() {
            this.filterProducts();
        },
        data: function () {
            this.filterProducts();
        },
    },
};
</script>

<style></style>
