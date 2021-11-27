<template>
    <div v-if="product" class="main--wrap">
        <div class="prodotti--wrap">
            <div class="prodotti--layout">
                <div class="prodotti--top">
                    <h1 class="prodotti--title">{{ product.name }}</h1>
                    <div class="prodotti--top__sx">
                        <div class="productGallery--wrap">
                            <div class="productGallery--main">
                                <a
                                    :title="product.name"
                                    class="productGallery--mainLink"
                                    data-ui-opengallery=""
                                >
                                    <img
                                        class="productGallery--mainImage"
                                        src="https://media.piusi.com/prodotti/INT/Lube-img/_productsSmall/AIRWATER_CLOSED_HOSE_REEL_WITH_HOSE_HC20121400A.jpg"
                                        alt="PIUSI-AIR-WATER-CLOSED-HOSE-REEL-WITH-HOSE-HC20121400 A"
                                    />
                                </a>
                            </div>
                            <div class="productGallery--nav__wrap">
                                <slick
                                    :class="`productGallery--nav`"
                                    ref="slick"
                                    :options="slickOptions"
                                >
                                    <a
                                        class="productGallery--item"
                                        href="http://placehold.it/2000x1000"
                                        ><img
                                            src="http://placehold.it/2000x1000"
                                            alt=""
                                    /></a>
                                    <a
                                        class="productGallery--item"
                                        href="http://placehold.it/2000x1000"
                                        ><img
                                            src="http://placehold.it/2000x1000"
                                            alt=""
                                    /></a>
                                    <a
                                        class="productGallery--item"
                                        href="http://placehold.it/2000x1000"
                                        ><img
                                            src="http://placehold.it/2000x1000"
                                            alt=""
                                    /></a>
                                    <a
                                        class="productGallery--item"
                                        href="http://placehold.it/2000x1000"
                                        ><img
                                            src="http://placehold.it/2000x1000"
                                            alt=""
                                    /></a>
                                    <a
                                        class="productGallery--item"
                                        href="http://placehold.it/2000x1000"
                                        ><img
                                            src="http://placehold.it/2000x1000"
                                            alt=""
                                    /></a>
                                </slick>
                                <div
                                    class="
                                        next-gallerySlider
                                        slick-arrow slick-hidden
                                    "
                                    aria-disabled="true"
                                    tabindex="-1"
                                >
                                    ›
                                </div>
                                <div
                                    class="
                                        prev-gallerySlider
                                        slick-arrow slick-hidden
                                    "
                                    aria-disabled="true"
                                    tabindex="-1"
                                >
                                    ‹
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prodotti--top__dx">
                        <div class="productsInfo--wrap">
                            <div class="productsInfo--item">
                                <div class="productsInfo--label">
                                    Product category
                                </div>
                                <div class="productsInfo--pill">Closed</div>
                            </div>
                            <div class="productsInfo--item">
                                <div class="productsInfo--label">Fluid</div>
                                <div class="productsInfo--pill">Air, Water</div>
                            </div>
                            <div class="productsInfo--item">
                                <div class="productsInfo--label">
                                    Application
                                </div>
                                <div class="productsInfo--pill">
                                    Garage Equipment, Industrial, Logistic,
                                    Mining &amp; Construction
                                </div>
                            </div>
                        </div>

                        <div class="productsFeatures--wrap">
                            <h2 class="prodotti--subtitle">Features</h2>
                            <div class="productsFeatures--list">
                                <ul>
                                    <li>Sturdy metallic structure</li>
                                    <li>Anti-freeze version</li>
                                    <li>Bending protection</li>
                                </ul>
                            </div>

                            <div class="btn" data-ui-richiediinfo="">
                                Request information
                            </div>
                        </div>

                        <!-- <script>
                            $(document).ready(function () {
                                $("[data-ui-richiediInfo]").click(function () {
                                    $("html, body").animate(
                                        {
                                            scrollTop:
                                                $(
                                                    "[data-richiediInfo]"
                                                ).offset().top - 150,
                                        },
                                        500
                                    );
                                });
                            });
                        </script> -->
                    </div>
                </div>

                <div class="productContent--wrap">
                    <div class="productContent--sx">
                        <div class="prodotti--descrizione">
                            <div class="prodotti--subtitle">Description</div>
                            <p>
                                <strong>AIR AUTOMATIC CLOSED HOSE REEL</strong>
                            </p>
                            <p>
                                The hose reels are suitable to distribute air
                                for professional use.They are compact, resistant
                                and of easy installation.The incorporated
                                revolving bracket permits the orientation of the
                                hose reel following the hose direction.
                            </p>
                            <p>
                                <strong><br /></strong>
                            </p>
                            <p><strong>FEATURES</strong></p>
                            <ul>
                                <li>
                                    Corrosion resistant: the hot galvanized
                                    steel structure is moulded and coated with
                                    electrostatic polyester powder UV rays
                                    resistant
                                </li>
                                <li>
                                    The hose can be locked at the desired length
                                </li>
                                <li>
                                    Easy and versatile installation through
                                    bracket pivots
                                </li>
                                <li>
                                    Compatibility: polyurethane hoses reinforced
                                    with textile braid
                                </li>
                                <li>
                                    Spring-driven retractable hose- Hose stop
                                </li>
                            </ul>
                        </div>
                        <div
                            class="productManuals--wrap"
                            style="margin-top: 40px"
                        >
                            <h2 class="prodotti--subtitle">Technical data</h2>
                            <div class="productManuals--list">
                                <table style="width: 100%; font-size: 14px">
                                    <thead>
                                        <tr>
                                            <th class="productManuals--th">
                                                Product&nbsp;code
                                            </th>
                                            <th class="productManuals--th">
                                                Description
                                            </th>
                                            <th
                                                class="productManuals--th"
                                                style="text-align: center"
                                            >
                                                Parts
                                            </th>
                                            <th
                                                class="productManuals--th"
                                                style="text-align: center"
                                            >
                                                Manuals
                                            </th>
                                        </tr>

                                        <tr
                                            style="
                                                border-top: 1px solid #eee;
                                                background-color: #fff;
                                            "
                                        >
                                            <td
                                                class="productManuals--td"
                                                style="
                                                    font-weight: bold;
                                                    padding-right: 20px;
                                                "
                                            >
                                                HC20121400A
                                            </td>
                                            <td
                                                class="productManuals--td"
                                                style=""
                                            >
                                                REEL CLOSED 20B W/ 10x14 12MT
                                                AIR ($)
                                            </td>
                                            <td
                                                class="productManuals--td"
                                                style="text-align: center"
                                            >
                                                <a
                                                    href="https://www.piusi.com/support/spare-parts?fert=HC20121400A"
                                                    target="_blank"
                                                    title="Find parts"
                                                    class="productManuals--link"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 256 256"
                                                    >
                                                        <rect
                                                            width="256"
                                                            height="256"
                                                            fill="none"
                                                        ></rect>
                                                        <path
                                                            d="M210.91162,146.91211a72.37653,72.37653,0,0,1-79.84424,15.03613L79.0249,222.2002q-.19116.22119-.39746.42773a32.00021,32.00021,0,0,1-45.25537-45.25488c.1377-.1377.28076-.27051.42773-.39844l60.25293-52.043a72.02489,72.02489,0,0,1,94.06153-95.23437A8.004,8.004,0,0,1,190.648,42.72461L151.71387,81.6582l3.77148,18.85645,18.856,3.77148,38.93457-38.93457a8.00429,8.00429,0,0,1,13.02685,2.53418A71.72729,71.72729,0,0,1,210.91162,146.91211Z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </td>
                                            <td
                                                class="productManuals--td"
                                                style="text-align: center"
                                            >
                                                <a
                                                    href="https://www.piusi.com/support/search-manuals?fert=HC20121400A"
                                                    target="_blank"
                                                    title="Find manuals"
                                                    class="productManuals--link"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 256 256"
                                                    >
                                                        <rect
                                                            width="256"
                                                            height="256"
                                                            fill="none"
                                                        ></rect>
                                                        <path
                                                            d="M207.99414,23.9971h-136a32.03667,32.03667,0,0,0-32,32v176a7.9954,7.9954,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01583,16.01583,0,0,1,16-16h136a7.99539,7.99539,0,0,0,8-8v-168A7.9954,7.9954,0,0,0,207.99414,23.9971Z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr
                                            style="
                                                border-top: 1px solid #eee;
                                                background-color: #fff;
                                            "
                                        >
                                            <td
                                                class="productManuals--td"
                                                style="
                                                    font-weight: bold;
                                                    padding-right: 20px;
                                                "
                                            >
                                                HC20151200A
                                            </td>
                                            <td
                                                class="productManuals--td"
                                                style=""
                                            >
                                                REEL CLOSED 20B W/ 8x12 15MT AIR
                                                ($)
                                            </td>
                                            <td
                                                class="productManuals--td"
                                                style="text-align: center"
                                            >
                                                <a
                                                    href="https://www.piusi.com/support/spare-parts?fert=HC20151200A"
                                                    target="_blank"
                                                    title="Find parts"
                                                    class="productManuals--link"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 256 256"
                                                    >
                                                        <rect
                                                            width="256"
                                                            height="256"
                                                            fill="none"
                                                        ></rect>
                                                        <path
                                                            d="M210.91162,146.91211a72.37653,72.37653,0,0,1-79.84424,15.03613L79.0249,222.2002q-.19116.22119-.39746.42773a32.00021,32.00021,0,0,1-45.25537-45.25488c.1377-.1377.28076-.27051.42773-.39844l60.25293-52.043a72.02489,72.02489,0,0,1,94.06153-95.23437A8.004,8.004,0,0,1,190.648,42.72461L151.71387,81.6582l3.77148,18.85645,18.856,3.77148,38.93457-38.93457a8.00429,8.00429,0,0,1,13.02685,2.53418A71.72729,71.72729,0,0,1,210.91162,146.91211Z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </td>
                                            <td
                                                class="productManuals--td"
                                                style="text-align: center"
                                            >
                                                <a
                                                    href="https://www.piusi.com/support/search-manuals?fert=HC20151200A"
                                                    target="_blank"
                                                    title="Find manuals"
                                                    class="productManuals--link"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 256 256"
                                                    >
                                                        <rect
                                                            width="256"
                                                            height="256"
                                                            fill="none"
                                                        ></rect>
                                                        <path
                                                            d="M207.99414,23.9971h-136a32.03667,32.03667,0,0,0-32,32v176a7.9954,7.9954,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01583,16.01583,0,0,1,16-16h136a7.99539,7.99539,0,0,0,8-8v-168A7.9954,7.9954,0,0,0,207.99414,23.9971Z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        <div class="videoGallery--wrap">
                            <h2 class="prodotti--subtitle">Videos</h2>
                            <div class="videoGallery--body">
                                <a
                                    href="https://youtu.be/VfrQY_4g8es"
                                    data-ui-openvideogallery="0"
                                    class="videoGallery--item"
                                >
                                    <div
                                        class="videoGallery--img"
                                        data-videothumbnail="https://youtu.be/VfrQY_4g8es"
                                    >
                                        <img
                                            src="//img.youtube.com/vi/VfrQY_4g8es/mqdefault.jpg"
                                        />
                                    </div>
                                    <div class="videoGallery--txt">
                                        Hose reels for oil and grease presented
                                        by PIUSI
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="productRel--wrap">
                            <h2 class="prodotti--subtitle">Related products</h2>
                            <div class="productRel--body">
                                <a
                                    href="https://www.piusi.com/products/air-water-open-hose-reels"
                                    class="productRel--item"
                                >
                                    <img
                                        src="https://media.piusi.com/prodotti/INT/Lube-img/_productsMini/AIRWATER_OPEN_HOSE_REEL_HA20151200A.jpg"
                                        alt="AIR/WATER OPEN HOSE REELS "
                                    />
                                    <div class="productRel--title">
                                        AIR/WATER OPEN HOSE REELS
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="productContent--dx">
                        <div class="productDownloads--wrap">
                            <h2 class="prodotti--subtitle">Downloads</h2>
                            <div class="productDownloads--list">
                                <a
                                    href="https://media.piusi.com/pdf/INT/Lube/Datasheets/EN/AIR_WATER-HOSE-REELCLOSED-PIUSI-DATASHEET-LUBE-01.21-EN.pdf"
                                    class="productDownloads--item"
                                    target="_blank"
                                    data-ga=""
                                    data-gadownload="AIR WATER HOSE REEL CLOSED-PIUSI-DATASHEET-LUBE-EN"
                                >
                                    <div class="productDownloads--txt">
                                        AIR WATER HOSE REEL
                                        CLOSED-PIUSI-DATASHEET-LUBE-EN
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            d="M8.6 16.6l4.6-4.6-4.6-4.6L10 6l6 6-6 6-1.4-1.4z"
                                        ></path>
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- <script>
                            $("[data-ga]").click(function () {
                                window.dataLayer.push({
                                    event: "ga_event",
                                    eventCategory: "Products",
                                    eventAction: "Download",
                                    eventLabel: $(this).attr("data-gaDownload"),
                                });
                            });
                        </script> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import { mapGetters } from "vuex";
import "lightgallery.js";
import "lightgallery.js/dist/css/lightgallery.css";

export default {
    components: { Slick },
    data() {
        return {
            slickOptions: {
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: ".next-gallerySlider",
                prevArrow: ".prev-gallerySlider",
                arrows: true,
                speed: 200,
            },
        };
    },
    beforeMount() {
        this.setProduct();
    },
    methods: {
        setProduct() {
            this.$store.dispatch("setProduct", this.$route.params.item);
        },
    },
    computed: {
        ...mapGetters({ product: "getProduct" }),
    },
};
</script>

<style></style>
