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
                        class="videoGallery--item cursor-pointer"
                        @click="openThis(post)"
                    >
                        <span
                            class="
                                px-2
                                py-0.5
                                text-xs
                                font-bold
                                bg-red-500
                                text-white
                                rounded
                                absolute
                            "
                        >
                            {{
                                post.body.includes("youtube") ? "Video" : "News"
                            }}
                        </span>
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
                    <div
                        class="videoOverlay--inner"
                        :class="{ 'pb-0': video == 'no' }"
                    >
                        <iframe
                            v-if="video == 'yes'"
                            :src="frame"
                            width="560"
                            height="315"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                        <div v-if="video == 'no'">
                            <!-- Post Section -->
                            <section
                                class="w-full flex flex-col items-center px-3"
                            >
                                <article class="flex flex-col shadow my-4">
                                    <!-- Article Image -->

                                    <img
                                        :src="`https://www.piusi-egypt.com${frame.images[0].image}`"
                                        width="200px"
                                    />

                                    <div
                                        class="
                                            bg-white
                                            flex flex-col
                                            justify-start
                                            p-6
                                        "
                                        v-html="frame.body"
                                    ></div>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: "News & Media",
        titleTemplate: "%s - Piusi Egypt!",
    },
    data() {
        return {
            posts: null,
            frame: null,
            video: null,
        };
    },
    async created() {
        this.$store.commit("setLoading", true);
        const response = await this.$api.find({
            resource: "news-media",
        });

        this.posts = response.data;
        this.$store.commit("setLoading", false);
    },
    methods: {
        openThis(post) {
            this.video = null;
            if (post.body.includes("youtube")) {
                this.frame = post.body.replace("<p>", "").replace("</p>", "");
                this.video = "yes";
            } else {
                this.frame = post;
                this.video = "no";
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
