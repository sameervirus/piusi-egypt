<template>
    <div class="main--wrap">
        <div>
            <Subnav></Subnav>
            <Category></Category>
            <div class="productsGrid--wrap" v-if="typeData">
                <div class="productsGrid--layout">
                    <div class="productsGrid--head">
                        <!---->
                        <div class="miniHero--wrap">
                            <h1 class="miniHero--title">{{ title }}</h1>
                            <!---->
                        </div>
                        <!---->
                    </div>
                    <Sidebar :data="selectedCategory"></Sidebar>
                    <!---->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Subnav from "../partial/products/Subnav";
import Category from "../partial/products/Category";
import Sidebar from "../partial/products/Sidebar";
import { mapGetters } from "vuex";
export default {
    components: {
        Subnav,
        Category,
        Sidebar,
    },
    data() {
        return {};
    },
    methods: {
        setTypeData() {
            this.$store.dispatch("setTypeData", this.$route.params.item);
        },
        titleCase(str) {
            var splitStr = str.toLowerCase().split(" ");
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] =
                    splitStr[i].charAt(0).toUpperCase() +
                    splitStr[i].substring(1);
            }
            // Directly return the joined string
            return splitStr.join(" ");
        },
    },
    beforeMount() {
        this.setTypeData();
    },
    mounted() {},
    computed: {
        ...mapGetters({ typeData: "getTypeData" }),
        selectedCategory() {
            if (this.$route.params.category == "all")
                return this.typeData.products;
            return this.typeData.products.filter(
                (item) => item.category_slug == this.$route.params.category
            );
        },
        title() {
            if (this.$route.params.category == "all") {
                return `All ${this.selectedCategory[0].types} Products`;
            } else {
                return this.titleCase(this.selectedCategory[0].category);
            }
        },
    },
    watch: {
        $route() {
            if (
                this.$route.path.includes("/products") &&
                this.$route.params.item !== this.typeData.types
            ) {
                this.setTypeData();
            }
        },
    },
};
</script>

<style>
@import url(../assets/product.css);
</style>
