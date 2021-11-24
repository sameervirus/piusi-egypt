<template>
  <div class="company--wrap">
    <div
      class="company--img"
      style="
        background-image: url('https://media.piusi.com/altro/home/HP_garage.jpg');
      "
    >
      <div class="company--intro">
        <div
          class="company--intro__layout"
          v-if="pages.pages"
          v-html="pages.pages.slogan.content"
        ></div>
        <div class="company--intro__layout finder">
          <h1 class="heroSelector--title">PRODUCT FINDER</h1>
          <div class="heroSelector--subtitle">Choose your combination</div>
          <div class="heroSelector--body">
            <div class="heroSelector--block heroSelector--catalog">
              <select>
                <option value="0">Catalogue</option>
                <option value="297">Fuel</option>
                <option value="298">Lubrication</option>
                <option value="299">AdBlue®/Other fluids</option>
              </select>
              <div class="heroSelector--ghost">
                <div>Catalogue</div>
              </div>
            </div>
            <div class="heroSelector--sep">
              <span>+<span></span></span>
            </div>
            <div
              class="
                heroSelector--block
                heroSelector--range
                heroSelector--range__disabled
              "
            >
              <!---->
              <div class="heroSelector--ghost">
                <div>Product range</div>
              </div>
            </div>
            <div class="heroSelector--sep">
              <span>+<span></span></span>
            </div>
            <div
              class="
                heroSelector--block
                heroSelector--application
                heroSelector--application__disabled
              "
            >
              <!---->
              <div class="heroSelector--ghost">
                <div>Application</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="company--row rosso">
      <div class="company--row__layout">
        <div class="company--row__side centered">
          <div class="company--row__content">
            <h2><strong>Who we are</strong></h2>
            <div
              v-if="pages.pages"
              v-html="pages.pages.who_we_are.content"
            ></div>
          </div>
        </div>
        <div class="company--row__side centered">
          <img
            src="https://media.piusi.com/altro/company/PIUSI_EsternoAzienda_2018.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Piusi Egypt!",
  },
  data() {
    return {};
  },
  computed: {
    pages() {
      return this.$store.getters.getCurrentData;
    },
  },
};
</script>
