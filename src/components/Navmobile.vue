<template>
    <div class="nav--mobile">
        <div class="nav--box" :class="{ opened: this.$store.state.opens }">
            <nav>
                <router-link to="/" class="nav--item">Home</router-link>
                <div class="nav--item" data-subnavlink="">
                    Products
                    <div class="subnav--wrap__mobile">
                        <div class="subnav--layout__mobile">
                            <router-link
                                v-for="(type, idx) in types"
                                v-bind:key="idx"
                                :to="{
                                    path: `/products/${type.types_slug}/all`,
                                }"
                                class="subnav--item__mobile"
                                >{{ type.types }}</router-link
                            >
                            <a
                                href="https://www.piusi.com/products/catalogues"
                                class="subnav--item__mobile"
                                >Catalogues</a
                            >
                        </div>
                    </div>
                </div>

                <router-link to="/about" class="nav--item"
                    >About us</router-link
                >

                <router-link to="/news-media" class="nav--item"
                    >News & Media</router-link
                >

                <router-link to="/contacts" class="nav--item"
                    >Contacts</router-link
                >
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        types() {
            return this.$store.state.apiData.types;
        },
    },
};
</script>

<style></style>
