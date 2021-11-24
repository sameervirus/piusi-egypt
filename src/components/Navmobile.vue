<template>
  <div class="nav--mobile">
    <div class="nav--box" :class="{ opened: this.$store.state.opens }">
      <nav>
        <a href="https://www.piusi.com/" class="nav--item">Home</a>

        <div class="nav--item" data-subnavlink="">
          Products
          <div class="subnav--wrap__mobile">
            <div class="subnav--layout__mobile">
              <a
                href="https://www.piusi.com/products/fuel"
                class="subnav--item__mobile"
                >Fuel</a
              >
              <a
                href="https://www.piusi.com/products/lube"
                class="subnav--item__mobile"
                >Lubrication</a
              >
              <a
                href="https://www.piusi.com/products/adblue-transfer-systems"
                class="subnav--item__mobile"
                >Other fluids</a
              >
              <a
                href="https://www.piusi.com/products/catalogues"
                class="subnav--item__mobile"
                >Catalogues</a
              >
            </div>
          </div>
        </div>

        <a href="https://www.piusi.com/company/about-us" class="nav--item"
          >Company</a
        >

        <a
          href="https://www.piusi.com/support/customer-service"
          class="nav--item"
          >Support</a
        >

        <a href="https://www.piusi.com/news/oil-news" class="nav--item">News</a>

        <a href="https://www.piusi.com/contacts/contact-us" class="nav--item"
          >Contacts</a
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
