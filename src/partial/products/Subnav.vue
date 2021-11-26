<template>
    <div class="subnav--trayProducts">
        <div class="subnav--wrap">
            <div class="subnav--layout">
                <router-link
                    v-for="(type, idx) in siteData.types"
                    v-bind:key="idx"
                    :to="{ path: `/products/${type.types_slug}/all` }"
                    class="subnav--item"
                    :class="{
                        'subnav--item__on':
                            type.types_slug == $route.params.item,
                    }"
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
