<template>
    <div class="main--wrap">
        <div class="miniHero--wrap">
            <h1 class="miniHero--title">Where we are</h1>
            <div class="miniHero--body"></div>
        </div>

        <div
            v-if="siteContent"
            style="margin-bottom: 40px"
            class="contatti--wrap"
        >
            <div class="contatti--layout">
                <div class="recapiti--wrap">
                    <h2 class="recapiti--title mb-4">MANAGEMENT</h2>

                    <div class="recapiti--sx mb-4">
                        <div style="padding-right: 40px">
                            {{ siteContent.address_management }}<br /><br />
                            <span>Phone/Fax</span>
                            {{ siteContent.tel_management }}<br />
                            <span>Mobile</span> {{ siteContent.mob_management
                            }}<br />
                            <span>Email</span> {{ siteContent.email_management
                            }}<br /><br />
                        </div>
                    </div>
                    <h2 class="recapiti--title mb-4">SALES AND GALLERY</h2>

                    <div class="recapiti--sx mb-4">
                        <div style="padding-right: 40px">
                            {{ siteContent.address }}<br /><br />
                            <span>Phone</span> {{ siteContent.tel }}<br />
                            <span>Fax</span> {{ siteContent.fax }}<br />
                            <span>Mobile</span> {{ siteContent.mob }}<br />
                        </div>
                    </div>
                </div>

                <div class="mappa--wrap">
                    <div
                        class="mappa--body"
                        style="padding-bottom: 50%; position: relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6906.6104563515855!2d31.238720129851284!3d30.056784200003733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840947b300001%3A0x81d7de0d5190631e!2s10%20Nagib%20Al%20Rihani%2C%20Al%20Gayarah%2C%20Al%20Azbakeya%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1638224815383!5m2!1sen!2seg"
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
    computed: {
        siteContent() {
            return this.$store.state.apiData.site_content;
        },
    },
};
</script>

<style>
.main--wrap {
    background: linear-gradient(to bottom, #ddd 0px, #ddd 140px, white 490px);
}
</style>
