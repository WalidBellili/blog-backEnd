const articles = require("../articles.json");

const articleExists = (req, res, next) => {
  const article = articles.find((oneArticle) => {
    return oneArticle.slug === req.params.slug;
  });

  if (article) {
    req.article = article;
  } else {
    res.status(400).json("this article does not exist");
  }
};
module.exports = {
  articleExists,
};
