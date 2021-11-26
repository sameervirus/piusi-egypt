<template>
    <div class="finder--wrap">
        <div class="finder--layout">
            <div class="finder--blur"></div>
            <div class="finder--filters">
                <div class="finder--filters__buttons">
                    <div class="finder--filters__reset">
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
                    <div class="finder--filters__apply">
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
                            <div class="filters--title">Product Category</div>
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
                                class="
                                    filters--item filters--all filters--all__on
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
                                class="filters--item"
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
                                class="
                                    filters--item filters--all filters--all__on
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
                            <div class="filters--item">
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
                                <div>AdBlue®</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Antifreeze</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Diesel/HVO/XTL</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Food</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Gasoline</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Grease</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Kerosene</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Oil</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Water</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Windscreen</div>
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
                                class="
                                    filters--item filters--all filters--all__on
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
                            <div class="filters--item">
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
                                <div>Garage Equipment</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Agricolture</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Logistic</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Mining &amp; Construction</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Industrial</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Naval</div>
                            </div>
                            <div class="filters--item">
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
                                <div>Aviation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="finder--response">
                <div class="finder--grid">
                    <a
                        href="https://www.piusi.com/products/b-smart"
                        class="productItem--wrap"
                        ><div class="productItem--img">
                            <img
                                src="https://media.piusi.com/prodotti/INT/Fuel-img/_productsSmall/piusi-B-smart-software.png"
                                alt="B.SMART"
                            />
                        </div>
                        <div class="productItem--title">B.SMART</div>
                        <div class="productItem--fluids">
                            Diesel/HVO/XTL | Gasoline | Kerosene | Oil
                        </div>
                        <div class="productItem--isNew">New</div></a
                    >
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
    computed: {
        subs() {
            return this.data.map((item) => ({
                slug: item.sub_slug,
                name: item.sub,
            }));
        },
    },
};
</script>

<style></style>
