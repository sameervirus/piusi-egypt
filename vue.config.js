module.exports = {
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.module
            .rule("images")
            .use("url-loader")
            .loader("file-loader")
            .tap((options) =>
                Object.assign({}, options, {
                    name: "vue-img/[name].[ext]",
                })
            );
    },
    css: {
        extract: {
            filename: "vue-css/[name].css",
            chunkFilename: "vue-css/[name].css",
        },
    },
    configureWebpack: {
        output: {
            filename: "vue-js/[name].js",
            chunkFilename: "vue-js/[name].js",
        },
    },
};
