<template>
    <div class="subnav--trayProducts">
        <div class="subnav--wrap">
            <div class="subnav--layout">
                <router-link
                    v-for="(type, idx) in siteData.types"
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
                    :class="{
                        'subnav--item__on':
                            type.types_slug == $route.params.item,
                    }"
                    >{{
                        $i18n.locale == "ar" ? type.types_ar : type.types
                    }}</router-link
                >
                <router-link
                    :to="$i18nRoute({ name: 'Catalogues' })"
                    class="subnav--item"
                    >{{ $t("menu.catalogues") }}</router-link
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
