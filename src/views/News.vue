<template>
    <div class="main--wrap">
        <div class="support--wrap">
            <div class="miniHero--wrap">
                <h1 class="miniHero--title">News & Media</h1>
                <div class="miniHero--body"></div>
            </div>
            <div v-if="posts" class="videoGallery--wrap">
                <div data-videogallery="" class="videoGallery--body">
                    <div
                        v-for="(post, idx) in posts"
                        v-bind:key="idx"
                        target="_blank"
                        class="videoGallery--item"
                        @click="openThis(post)"
                    >
                        <div class="videoGallery--img">
                            <img
                                :src="`https://www.piusi-egypt.com${post.images[0].thumb}`"
                            />
                        </div>
                        <div class="videoGallery--txt">
                            <div class="videoGallery--title">
                                {{ post.title }}
                            </div>
                            <div class="videoGallery--abstract"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-if="frame"
                class="videoOverlay--wrap"
                :class="{ 'videoOverlay--wrap__on': frame }"
            >
                <div class="videoOverlay--chiudi" @click="frame = null">×</div>
                <div class="videoOverlay--layout">
                    <div class="videoOverlay--inner">
                        <iframe
                            :src="frame"
                            width="560"
                            height="315"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
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
            posts: null,
            frame: null,
        };
    },
    async created() {
        const response = await this.$api.find({
            resource: "news-media",
        });

        this.posts = response.data;
    },
    methods: {
        openThis(post) {
            if (post.body.includes("youtube")) {
                this.frame = post.body.replace("<p>", "").replace("</p>", "");
            }
        },
    },
};
</script>

<style>
.main--wrap {
    background: linear-gradient(to bottom, #ddd 0px, #ddd 140px, white 490px);
}
</style>
