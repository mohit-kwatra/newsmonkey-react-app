import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const [loadingPage, setLoadingPage] = useState(false);

  const makeRequest = async (
    country = "at",
    category = "general",
    pageSize = 6,
    page = 1,
    callback
  ) => {
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${props.apiKey}`
    )
      .then((Response) => Response.json())
      .then(callback)
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    async function insideUseEffect() {
      props.setProgress(20);
      await setLoadingPage(true);
      await makeRequest(
        props.country,
        props.category,
        props.pagesize,
        1,
        (data) => {
          setArticles(data.articles);
          setLastPage(Math.ceil(data.totalResults / props.pageSize));
        }
      );
      await setLoadingPage(false);
      props.setProgress(25);
      setTimeout(() => {
        props.setProgress(100);
      }, 500);
    }
    insideUseEffect();
  }, [props.country]);

  const showPrevPage = async () => {
    const btn = document.querySelectorAll(".pagination-btn")[0];
    if (page > 1) {
      btn.innerHTML = "<div class='loader-renamed'></div>";
      await makeRequest(
        props.country,
        props.category,
        props.pagesize,
        page - 1,
        (data) => {
          setArticles(data.articles);
        }
      );
      btn.innerHTML = "← Prev";
      await setPage(page - 1);
    }
  };

  const showNextPage = async () => {
    const btn = document.querySelectorAll(".pagination-btn")[1];
    if (page < lastPage) {
      btn.innerHTML = "<div class='loader-renamed'></div>";
      await makeRequest(
        props.country,
        props.category,
        props.pagesize,
        page + 1,
        (data) => {
          setArticles(data.articles);
        }
      );
      btn.innerHTML = "Next →";
      await setPage(page + 1);
    }
  };

  return (
    <div
      className="row justify-content-center my-5 mx-0"
      style={{ maxWidth: "100%" }}
    >
      <div className="col-11 col-md-10 col-lg-9">
        <div className="news-items-container">
          <h4
            className={`text-center mb-3 fst-italic ${
              props.theme === "dark" && "text-light"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            TOP NEWS HEADLINES -{" "}
            {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
          </h4>
          <div
            className="underline"
            style={{
              height: "1px",
              backgroundColor: "#0d6efd",
              width: "20%",
              margin: "auto",
              marginBottom: "1rem",
            }}
          ></div>
          <div
            className="loader-renamed mx-auto"
            style={{ display: loadingPage ? "block" : "none" }}
          ></div>
          <div
            className="row justify-content-center gy-4 m-0"
            style={{ maxWidth: "100%" }}
          >
            {articles.map((article) => {
              return (
                <div
                  className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
                  key={article.url}
                >
                  <NewsItem
                    theme={props.theme}
                    title={article.title}
                    desc={article.description}
                    url={article.url}
                    imageUrl={article.urlToImage}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
            <div className="col-12 d-flex justify-content-center pt-4">
              <div
                className="btn-group"
                role="group"
                aria-label="Buttons Group"
              >
                <button
                  disabled={page === 1 ? true : false}
                  type="button"
                  className="pagination-btn btn btn-outline-primary"
                  onClick={showPrevPage}
                >
                  ← Prev
                </button>
                <button
                  disabled={page === lastPage ? true : false}
                  type="button"
                  className="pagination-btn btn btn-outline-primary"
                  onClick={showNextPage}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
