<template>
    <div class="main--wrap">
        <div class="miniHero--wrap">
            <h1 class="miniHero--title">{{ $t("where_we") }}</h1>
            <div class="miniHero--body"></div>
        </div>

        <div
            v-if="siteContent"
            style="margin-bottom: 40px"
            class="contatti--wrap"
        >
            <div class="contatti--layout">
                <div class="recapiti--wrap">
                    <h2 class="recapiti--title mb-4">
                        {{ $t("footer.management") }}
                    </h2>

                    <div class="recapiti--sx mb-4">
                        <div style="padding-right: 40px">
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar
                                          .address_management
                                    : siteContent.site_content
                                          .address_management
                            }}<br /><br />
                            <span>{{ $t("phone") }}/{{ $t("fax") }}</span>
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar.tel_management
                                    : siteContent.site_content.tel_management
                            }}<br />
                            <span>{{ $t("mobile") }}</span>
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar.mob_management
                                    : siteContent.site_content.mob_management
                            }}<br />
                            <span>{{ $t("email") }}</span>
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar
                                          .email_management
                                    : siteContent.site_content.email_management
                            }}<br /><br />
                        </div>
                    </div>
                    <h2 class="recapiti--title mb-4">
                        {{ $t("footer.sales_gallery") }}
                    </h2>

                    <div class="recapiti--sx mb-4">
                        <div style="padding-right: 40px">
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar.address
                                    : siteContent.site_content.address
                            }}<br /><br />
                            <span>{{ $t("phone") }}</span>
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar.tel
                                    : siteContent.site_content.tel
                            }}<br />
                            <span>{{ $t("fax") }}</span>
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar.fax
                                    : siteContent.site_content.fax
                            }}<br />
                            <span>{{ $t("mobile") }}</span>
                            {{
                                $i18n.locale == "ar"
                                    ? siteContent.site_content_ar.mob
                                    : siteContent.site_content.mob
                            }}<br />
                        </div>
                    </div>
                    <br /><br />
                    <div class="recapiti--sx mb-4">
                        <div class="btn" @click="requestInfo">
                            {{ $t("menu.contacts") }}
                        </div>
                    </div>
                </div>

                <div class="mappa--wrap">
                    <div class="mappa--body" style="position: relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.304890496337!2d31.24147141492886!3d30.056793881877873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841e94159fa6b%3A0xecb3acb6aee08875!2z2KfZhNi52LHYqNmK2Kkg2YTYqtmG2YXZitipINin2YTYrtiv2YXYp9iqIEFTRA!5e0!3m2!1sen!2seg!4v1638343692765!5m2!1sen!2seg"
                            width="600"
                            height="450"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: "Contact Us",
        titleTemplate: "%s - Piusi Egypt!",
    },
    computed: {
        siteContent() {
            return this.$store.state.apiData;
        },
    },
    methods: {
        requestInfo() {
            this.$store.commit("setForm", true);
        },
    },
};
</script>

<style>
.main--wrap {
    background: linear-gradient(to bottom, #ddd 0px, #ddd 140px, white 490px);
}
</style>
