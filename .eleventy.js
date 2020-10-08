module.exports = (config) => {
  config.addPassthroughCopy("src/assets/");

  config.addCollection("activities", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/activities/*.md");
  });

  return {
    pathPrefix: "/spelling-bee/",
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
