<template>
    <div class="nav--mobile">
        <div class="nav--box" :class="{ opened: this.$store.state.opens }">
            <nav>
                <router-link
                    :to="$i18nRoute({ name: 'Home' })"
                    class="nav--item"
                    >{{ $t("menu.home") }}</router-link
                >
                <div class="nav--item" data-subnavlink="">
                    {{ $t("menu.products") }}
                    <div class="subnav--wrap__mobile">
                        <div class="subnav--layout__mobile">
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
                                class="subnav--item__mobile"
                                >{{
                                    $i18n.locale == "ar"
                                        ? type.types_ar
                                        : type.types
                                }}</router-link
                            >
                            <router-link
                                :to="$i18nRoute({ name: 'Catalogues' })"
                                class="subnav--item__mobile"
                                >{{ $t("menu.catalogues") }}</router-link
                            >
                        </div>
                    </div>
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
