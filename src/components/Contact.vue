<template>
    <div class="pxxForm--wrap">
        <div class="pxxForm--layout">
            <div class="pxxForm--altHead">Contacts</div>

            <div class="pxxForm--body">
                <form
                    v-if="!fromSent"
                    class="pxxForm--form"
                    @submit.prevent="submitForm"
                    autocomplete="off"
                >
                    <div class="pxxForm--row pxxForm--row__2col">
                        <div class="pxxForm--control pxxForm--control__text">
                            <label
                                class="pxxForm--label"
                                :class="{
                                    'pxxForm--label__editing': focusdName,
                                    'pxxForm--label__on': isNameValid,
                                }"
                                >Name</label
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
                                Name is required and minimum character is 3
                            </div>
                        </div>
                        <div class="pxxForm--control pxxForm--control__text">
                            <label
                                class="pxxForm--label"
                                :class="{
                                    'pxxForm--label__editing': focusdPhone,
                                    'pxxForm--label__on': isPhoneValid,
                                }"
                                >Phone</label
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
                                Phone is required
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
                                >Company</label
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
                                Company Name is required
                            </div>
                        </div>

                        <div class="pxxForm--control pxxForm--control__text">
                            <label
                                class="pxxForm--label"
                                :class="{
                                    'pxxForm--label__editing': focusdEmail,
                                    'pxxForm--label__on': isEmailValid,
                                }"
                                >Email</label
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
                                Email is required and Valid
                            </div>
                        </div>
                    </div>

                    <div class="pxxForm--row pxxForm--row__1col">
                        <div
                            class="pxxForm--control pxxForm--control__textarea"
                        >
                            <label class="pxxForm--label">Your message</label>
                            <textarea
                                v-model="form.messages"
                                class="pxxForm--textarea"
                            ></textarea>
                            <div
                                v-if="!isMessagesValid && sub"
                                class="pxxForm--msg"
                            >
                                Message Name is required
                            </div>
                        </div>
                    </div>

                    <div class="pxxForm--response">
                        <div data-status="normal">
                            <button class="btn">Submit</button>
                        </div>
                    </div>
                </form>
                <div data-status="error" v-if="fromSent">
                    <div class="pxxForm--responseErrors">
                        Thank you, Your message has been received we will
                        contact you soon.
                    </div>
                </div>
                <div class="pxxForm--back" @click="closeForm">← Back</div>
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
            },
            sub: false,
            focusdName: false,
            focusdPhone: false,
            focusdCompany: false,
            focusdEmail: false,
            fromSent: false,
        };
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
        submitForm() {
            this.sub = true;
            if (this.fromValid) {
                this.fromSent = true;
                console.log(this.form);
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
        },
    },
};
</script>

<style></style>
