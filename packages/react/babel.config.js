const babelReact = require("../../babel/babel-react.config");

module.exports = function (api) {
    const babelReactConfig = babelReact(api);
    return {
        ...babelReactConfig,
        plugins: [...babelReact.plugins, "babel-plugin-optimize-clsx"],
    };
};
