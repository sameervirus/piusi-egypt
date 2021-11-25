<template>
    <div class="subnav--trayProducts">
        <div class="subnav--wrap">
            <div class="subnav--layout">
                <router-link
                    v-for="(type, idx) in siteData.types"
                    v-bind:key="idx"
                    :to="{ path: `/products/${type.types_slug}` }"
                    class="subnav--item"
                    active-class="subnav--item__on"
                    >{{ type.types }}</router-link
                >
                <a
                    href="https://www.piusi.com/products/catalogues"
                    class="subnav--item"
                    >Catalogues</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ siteData: "getCurrentData" }),
    },
};
</script>

<style></style>
