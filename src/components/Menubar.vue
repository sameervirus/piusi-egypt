<template>
  <div class="menu--wrap">
    <div class="menu--logowrap">
      <router-link to="/" class="menu--logo"
        ><img
          src="https://www.piusi.com/assets/img/piusi-logo.svg"
          alt="PIUSI SpA"
          style="width: 75px; height: auto"
        />
        <img
          v-if="siteContent"
          :src="'//www.piusi-egypt.com/images/' + siteContent.logo"
          alt="ASDEGYPT"
          style="width: 75px; height: auto"
        />
      </router-link>
    </div>

    <div class="nav--desktop">
      <div class="nav--box">
        <nav>
          <router-link to="/" class="nav--item">Home</router-link>
          <div class="nav--item" v-on:click="subnav()">
            Products
            <div class="subnav--wrap__mobile">
              <!-- <div class="subnav--layout__mobile">
                <router-link
                  v-for="(type, idx) in types"
                  v-bind:key="idx"
                  :to="{ path: `/products/${type.types_slug}` }"
                  class="subnav--item__mobile"
                  >{{ type.types }}</router-link
                >
                <a href="/products/fuel" class="subnav--item__mobile">Fuel</a>
                <a href="/products/lube" class="subnav--item__mobile"
                  >Lubrication</a
                >
                <a
                  href="/products/adblue-transfer-systems"
                  class="subnav--item__mobile"
                  >AdBlue®/Other fluids</a
                >
                <a href="/products/catalogues" class="subnav--item__mobile"
                  >Catalogues</a
                >
              </div> -->
            </div>
          </div>

          <router-link to="/about" class="nav--item">About us</router-link>

          <a href="/news/oil-news" class="nav--item">News</a>

          <a href="/contacts/contact-us" class="nav--item">Contacts</a>
        </nav>
      </div>
    </div>

    <div
      class="nav--btn hamburger"
      v-on:click="changeFreez"
      :class="{ active: this.$store.state.opens }"
    >
      <span></span>
    </div>
    <div class="subnav">
      <div class="subnav--nonTray">
        <div class="subnav--wrap" scroll-orizzontale-wrapper="">
          <div class="subnav--layout" data-scroll-orizzontale-content=""></div>
          <div
            class="horizontal--arrow arrow__sx disabled"
            data-scroll-orizzontale-arrow=""
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M15.4 16.6L10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4z"
              ></path>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
            </svg>
          </div>
          <div
            class="horizontal--arrow arrow__dx"
            data-scroll-orizzontale-arrow=""
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M8.6 16.6l4.6-4.6-4.6-4.6L10 6l6 6-6 6-1.4-1.4z"></path>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        class="subnav--tray"
        :class="{ 'subnav--tray__on': openProduct }"
        data-subnavtray=""
      >
        <div class="subnav--wrap" scroll-orizzontale-wrapper="">
          <div class="subnav--layout" data-scroll-orizzontale-content="">
            <router-link
              v-for="(type, idx) in types"
              v-bind:key="idx"
              :to="{ path: `/products/${type.types_slug}` }"
              class="subnav--item"
              >{{ type.types }}</router-link
            >
            <a href="/products/catalogues" class="subnav--item">Catalogues</a>
          </div>
          <div
            class="horizontal--arrow arrow__sx disabled"
            data-scroll-orizzontale-arrow=""
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M15.4 16.6L10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4z"
              ></path>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
            </svg>
          </div>
          <div
            class="horizontal--arrow arrow__dx"
            data-scroll-orizzontale-arrow=""
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M8.6 16.6l4.6-4.6-4.6-4.6L10 6l6 6-6 6-1.4-1.4z"></path>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openProduct: false,
    };
  },
  computed: {
    siteContent() {
      return this.$store.state.apiData.site_content;
    },
    types() {
      return this.$store.state.apiData.types;
    },
  },
  methods: {
    changeFreez() {
      this.$store.dispatch("changeFreez");
      if (this.$store.state.opens) {
        document.body.classList.remove("freez");
      } else {
        document.body.classList.add("freez");
      }
    },
    subnav() {
      this.openProduct = this.openProduct ? false : true;
    },
  },
};
</script>

<style></style>
