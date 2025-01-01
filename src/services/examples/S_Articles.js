import article_datas from "../../samples/article/article_datas";

const S_Article = {
  showDetail: (articleId) => {
    const article = article_datas.find((data) => articleId === data.article_id);
    if (article){
      window.location.href = `http://localhost:3000/article/${article.article_id}`;
    }
    // kirim article melalui post ke halaman article/detail

    // console.log(article);
  },
  getArticle: (articleId) => {
    const article = article_datas.find((data) => articleId === data.article_id);
    return article;
  }
}

export default S_Article;