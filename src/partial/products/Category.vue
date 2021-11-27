<template>
    <div v-if="typeData" class="productsGrid--rangeIcons">
        <div class="rangeIcons--wrap">
            <div class="rangeIcons--layout">
                <div class="rangeIcons--body" v-touch:start="hideHand">
                    <div
                        class="rangeIcons--item"
                        :class="{
                            'rangeIcons--item__current': selected == 'all',
                        }"
                        @click="selectedCategory('all')"
                    >
                        <div class="rangeIcons--img">
                            <img
                                src="https://media.piusi.com/prodotti/icone/car_filling_sd.png"
                                srcset="
                                    https://media.piusi.com/prodotti/icone/car_filling_sd.png 1x,
                                    https://media.piusi.com/prodotti/icone/car_filling_hd.png 2x
                                "
                                :alt="`All ${typeData.title} products`"
                            />
                        </div>
                        <div class="rangeIcons--txt">
                            All {{ typeData.title }} products
                        </div>
                    </div>
                    <div
                        v-for="(range, idx) in typeData.ranges"
                        v-bind:key="idx"
                        class="rangeIcons--item"
                        :class="{
                            'rangeIcons--item__current':
                                selected == range.category_slug,
                        }"
                        @click="selectedCategory(range.category_slug)"
                    >
                        <div class="rangeIcons--img">
                            <img
                                src="https://media.piusi.com/prodotti/icone/fluid_monitoring_sd.png"
                                :alt="range.category"
                            />
                        </div>
                        <div class="rangeIcons--txt">
                            {{ range.category }}
                        </div>
                    </div>
                </div>
                <div
                    v-if="hand"
                    class="horizontal--arrow arrow__dx arrow__show"
                >
                    <svg
                        width="19px"
                        height="30px"
                        viewBox="0 0 19 30"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <title>Combined Shape</title>
                        <desc>Created with Sketch.</desc>
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <path
                                d="M9.70967942,4.20137899 C9.31775278,4.20137899 9,3.87347184 9,3.46917099 C9,3.06487014 9.31775278,2.73696299 9.70979772,2.73696299 L16.5119076,2.73696299 L15.0703084,1.24997058 C14.7930141,0.964043357 14.7930141,0.500433659 15.0701901,0.214506435 C15.3473661,-0.0715428233 15.7969047,-0.0714207886 16.0739624,0.2143844 L18.7920145,3.01800883 C19.0693088,3.30393605 19.0693088,3.76754575 18.7921328,4.05347298 L16.1438775,6.78546306 C16.0052303,6.92848769 15.8235221,7 15.6419322,7 C15.4603423,7 15.2786341,6.92848769 15.1401052,6.78558509 C14.8628109,6.49965787 14.8628109,6.03604817 15.1399869,5.75012095 L16.6412091,4.20137899 L9.70967942,4.20137899 Z M17.8189706,15.0349932 C18.2555051,17.7862754 18.0544775,21.4739986 15.4942384,25.6913588 C15.4254016,25.8047134 15.3798354,25.9298838 15.3632658,26.0637538 L14.9731504,29.2236577 C14.9174718,29.6753879 14.5565968,29.9994806 14.129078,30 L4.55005063,29.9848082 C4.54968512,29.9848082 4.54931962,29.9848082 4.54895411,29.9848082 C4.10303828,29.9848082 3.7322946,29.6461728 3.69891183,29.1722392 L3.4846042,26.1604882 C3.47327355,26.0001298 3.42259022,25.8466532 3.3370621,25.7140817 C2.4600943,24.3562942 -2.4354767,16.4338116 1.5290318,14.6674025 C1.84458426,14.5267805 2.0491451,14.1973641 2.04877959,13.8328897 C2.04622106,11.6755178 2.03830179,4.51652276 2.03549959,2.13283127 C2.0337939,0.711160164 3.03418047,0 4.03456705,0 C5.03312611,0 6.03156333,0.708822957 6.03326902,2.12750763 L6.03936076,7.61825618 C6.03996994,8.1268584 6.42850152,8.52548205 6.88903754,8.52548205 C6.93314178,8.52548205 6.97797704,8.52184639 7.02317779,8.51418555 C7.19240651,8.48587937 7.37637724,8.46744141 7.56887643,8.46744141 C8.28855534,8.46744141 9.12811981,8.72427449 9.77140822,9.67408946 C9.93113381,9.91001753 10.1868653,10.0390833 10.4522218,10.0390833 C10.5267848,10.0390833 10.6022006,10.0289554 10.6763981,10.0080504 C10.9285964,9.93702525 11.2441488,9.87651756 11.5882106,9.87651756 C12.3398103,9.87651756 13.2264031,10.1654223 13.8804129,11.2633902 C14.0115073,11.4836071 14.2342216,11.6207232 14.4787443,11.6300721 C15.3425539,11.6633123 17.3479568,12.0668701 17.8189706,15.0349932 Z"
                                id="Combined-Shape"
                                fill="#FFFFFF"
                                fill-rule="nonzero"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hand: true,
            selected: null,
        };
    },
    mounted() {
        this.selected = this.$route.params.category;
    },
    methods: {
        hideHand() {
            this.hand = false;
        },
        selectedCategory(e) {
            this.$router.push({
                path: `/products/${this.typeData.types}/${e}`,
            });
            this.selected = e;
        },
    },
    computed: {
        typeData() {
            return this.$store.state.typeData;
        },
    },
    watch: {
        $route() {
            this.selected = this.$route.params.category;
        },
    },
};
</script>

<style></style>
