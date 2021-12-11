<template>
    <div class="main--wrap">
        <div class="splash--wrap splash--wrap__downloads">
            <div class="splash--layout">
                <div class="splash--sx">
                    <div class="splash--body">
                        <h1 class="splash--title">{{ $t("catalog.title") }}</h1>
                        <div class="splash--txt">
                            <p v-html="$t('catalog.content')"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg">
            <div class="group--wrap">
                <div class="group--layout">
                    <h2 class="group--title">{{ $t("menu.catalogues") }}</h2>
                    <div class="group--body">
                        <div class="group--txt"></div>
                        <div class="downloadList--wrap">
                            <div class="downloadList--title">
                                {{ $t("downloads") }}
                            </div>

                            <a
                                href="https://media.piusi.com/pdf/INT/Fuel/Catalogs/FUEL_CAT_C0375A_07.21_EN.pdf"
                                target="_blank"
                                class="downloadList--link"
                            >
                                <div class="downloadList--name">
                                    {{ $t("catalog.fuel_catalogue") }}
                                </div>
                            </a>

                            <a
                                href="https://media.piusi.com/pdf/INT/Lube/Catalogs/LUBE_CAT_C0360A_07.21_EN.pdf"
                                target="_blank"
                                class="downloadList--link"
                            >
                                <div class="downloadList--name">
                                    {{ $t("catalog.lubrication_catalogue") }}
                                </div>
                            </a>

                            <a
                                href="https://media.piusi.com/pdf/INT/Adblue/Catalogs/ADBLUE%C2%AE_CAT_C0094A_07.21_EN.pdf"
                                target="_blank"
                                class="downloadList--link"
                            >
                                <div class="downloadList--name">
                                    {{ $t("catalog.adblue_catalogue") }}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.splash--wrap__downloads {
    background-image: url("../assets/certifications.jpg");
    background-size: cover;
    background-position: center center;
}

.splash--layout {
    padding: 80px 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
}

@media (min-width: 769px) {
    .splash--layout {
        min-height: 41.6666666667vw;
        background: linear-gradient(
            -90deg,
            rgba(0, 0, 0, 0) 20%,
            rgba(0, 0, 0, 0.36) 40%,
            rgba(0, 0, 0, 0.68) 100%
        );
    }
}

.splash--sx {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
}

@media (min-width: 769px) {
    .splash--sx {
        width: 50%;
    }
}

.splash--body {
    max-width: 100%;
    color: #fff;
    padding: 0 20px;
    text-align: center;
}

@media (min-width: 769px) {
    .splash--body {
        max-width: 600px;
        text-align: left;
    }
}

.splash--title {
    font-size: 30px;
    line-height: 1.2;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
}

@media (min-width: 769px) {
    .splash--title {
        font-size: 56px;
        text-align: left;
    }
}

.splash--txt {
    font-size: 1rem;
}

@media (min-width: 769px) {
    .splash--txt {
        font-size: 22px;
    }
}

.bg {
    background-image: linear-gradient(-180deg, #e1e1e1 0%, #ffffff 100%);
    padding-top: 50px;
    padding-bottom: 50px;
}

.group--wrap + .group--wrap {
    padding-top: 50px;
}

.group--layout {
    padding: 0 20px;
}

.group--title {
    font-weight: bold;
    font-size: 24px;
    color: #6b6b6b;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;
}

.group--title:after {
    content: "";
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    width: 60px;
    height: 5px;
    background: #da2032;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 768px) {
    .group--title:after {
        margin-left: 0;
        margin-right: auto;
    }
}

@media (min-width: 768px) {
    .group--title:after {
        margin: 0 auto;
        margin-top: 30px;
    }
}

.group--body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
}

.group--txt {
    width: 100%;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .group--txt {
        text-align: right;
        width: calc(50% - 20px);
        margin-bottom: 0;
    }
}

.downloadList--wrap {
    width: 100%;
}

@media (min-width: 768px) {
    .downloadList--wrap {
        width: calc(50% - 20px);
    }
}

.downloadList--title {
    color: #999;
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
}

.downloadList--link {
    display: block;
    text-decoration: none;
    padding-top: 10px;
    padding-bottom: 10px;
}

.downloadList--link:hover {
    background: rgba(0, 0, 0, 0.08);
}

.downloadList--link + .downloadList--link {
    border-top: 1px solid #ccc;
}

.downloadList--name {
    font-weight: bold;
    color: #da2032;
    text-transform: uppercase;
}
</style>
