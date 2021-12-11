<template>
    <div class="pxxForm--wrap">
        <div class="pxxForm--layout">
            <div class="pxxForm--altHead">{{ $t("menu.contacts") }}</div>

            <div class="pxxForm--body">
                <form
                    v-if="!fromSent"
                    class="pxxForm--form"
                    @submit.prevent="submitForm"
                >
                    <div v-if="product" class="pxxForm--row pxxForm--row__col">
                        <p>
                            {{ $t("request_information") }}:
                            {{
                                $i18n.locale == "ar"
                                    ? product.name_ar
                                    : product.name
                            }}
                        </p>
                        <input
                            type="hidden"
                            name="form.item"
                            :value="product.slug"
                        />
                    </div>
                    <div class="pxxForm--row pxxForm--row__2col">
                        <div class="pxxForm--control pxxForm--control__text">
                            <label
                                class="pxxForm--label"
                                :class="{
                                    'pxxForm--label__editing': focusdName,
                                    'pxxForm--label__on': isNameValid,
                                }"
                                >{{ $t("name") }}</label
                            >
                            <input
                                autocomplete="off"
                                type="text"
                                class="pxxForm--text"
                                v-model="form.name"
                                @focus="focusdName = true"
                                @blur="focusdName = false"
                            />
                            <div
                                v-if="!isNameValid && sub"
                                class="pxxForm--msg"
                            >
                                {{ $t("name_error") }}
                            </div>
                        </div>
                        <div class="pxxForm--control pxxForm--control__text">
                            <label
                                class="pxxForm--label"
                                :class="{
                                    'pxxForm--label__editing': focusdPhone,
                                    'pxxForm--label__on': isPhoneValid,
                                }"
                                >{{ $t("phone") }}</label
                            >
                            <input
                                v-model="form.phone"
                                autocomplete="off"
                                type="text"
                                class="pxxForm--text"
                                @focus="focusdPhone = true"
                                @blur="focusdPhone = false"
                            />
                            <div
                                v-if="!isPhoneValid && sub"
                                class="pxxForm--msg"
                            >
                                {{ $t("phone_error") }}
                            </div>
                        </div>
                    </div>

                    <div class="pxxForm--row pxxForm--row__2col">
                        <div class="pxxForm--control pxxForm--control__text">
                            <label
                                class="pxxForm--label"
                                :class="{
                                    'pxxForm--label__editing': focusdCompany,
                                    'pxxForm--label__on': isCompanyValid,
                                }"
                                >{{ $t("company") }}</label
                            >
                            <input
                                v-model="form.company"
                                autocomplete="off"
                                type="text"
                                class="pxxForm--text"
                                @focus="focusdCompany = true"
                                @blur="focusdCompany = false"
                            />
                            <div
                                v-if="!isCompanyValid && sub"
                                class="pxxForm--msg"
                            >
                                {{ $t("company_error") }}
                            </div>
                        </div>

                        <div class="pxxForm--control pxxForm--control__text">
                            <label
                                class="pxxForm--label"
                                :class="{
                                    'pxxForm--label__editing': focusdEmail,
                                    'pxxForm--label__on': isEmailValid,
                                }"
                                >{{ $t("email") }}</label
                            >
                            <input
                                v-model="form.email"
                                autocomplete="off"
                                type="email"
                                class="pxxForm--text"
                                @focus="focusdEmail = true"
                                @blur="focusdEmail = false"
                            />
                            <div
                                v-if="!isEmailValid && sub"
                                class="pxxForm--msg"
                            >
                                {{ $t("email_error") }}
                            </div>
                        </div>
                    </div>

                    <div class="pxxForm--row pxxForm--row__1col">
                        <div
                            class="pxxForm--control pxxForm--control__textarea"
                        >
                            <label class="pxxForm--label">{{
                                $t("your_message")
                            }}</label>
                            <textarea
                                v-model="form.messages"
                                class="pxxForm--textarea"
                            ></textarea>
                            <div
                                v-if="!isMessagesValid && sub"
                                class="pxxForm--msg"
                            >
                                {{ $t("message_error") }}
                            </div>
                        </div>
                    </div>

                    <div class="pxxForm--response">
                        <div data-status="normal">
                            <button class="btn">{{ $t("submit") }}</button>
                        </div>
                    </div>
                </form>
                <div data-status="error" v-if="fromSent">
                    <div class="pxxForm--responseErrors">
                        {{ $t("success_message") }}
                    </div>
                </div>
                <div class="pxxForm--back" @click="closeForm">
                    ← {{ $t("back") }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                phone: null,
                company: null,
                email: null,
                messages: null,
                item: null,
            },
            sub: false,
            focusdName: false,
            focusdPhone: false,
            focusdCompany: false,
            focusdEmail: false,
            fromSent: false,
            product: null,
        };
    },
    mounted() {
        this.product = this.$store.state.hasItem;
    },
    computed: {
        isNameValid() {
            return !!this.form.name;
        },
        isPhoneValid() {
            return !!this.form.phone;
        },
        isCompanyValid() {
            return !!this.form.company;
        },
        isEmailValid() {
            return !!this.form.email && this.validateEmail(this.form.email);
        },
        isMessagesValid() {
            return !!this.form.messages;
        },
        fromValid() {
            return (
                this.isNameValid &&
                this.isPhoneValid &&
                this.isCompanyValid &&
                this.isEmailValid &&
                this.isMessagesValid
            );
        },
    },
    methods: {
        async submitForm() {
            this.sub = true;
            if (this.fromValid) {
                this.fromSent = true;
                this.$store.commit("setLoading", true);
                const response = await this.$api.create({
                    resource: "feedback",
                    data: this.form,
                });
                this.$store.commit("setLoading", false);
                if (response.data == "ok") this.fromSent = true;
            }
        },
        validateEmail(email) {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        },
        closeForm() {
            this.$store.commit("setForm", false);
            this.$store.commit("setHasItem", null);
        },
    },
};
</script>

<style></style>
