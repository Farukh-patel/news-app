import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    try {
      props.setProgress(10);
      setLoading(true);
      const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=8`;
      const data = await fetch(url);
      const parsedData = await data.json();

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Failed to fetch news", error);
    }
  };

  // Using useEffect instead of componentDidMount
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [page, props.category]);

  const handlePreviousBtn = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <div className="my-3">
        <h2
          className="text-center"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            margin: "90px",
          }}
        >
           NewsMonkey Top {props.category} Headlines...
        </h2>
        {loading && <Loader />}
        <div className="row">
          {articles &&
            articles.length > 0 &&
            articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  urlToImage={element.urlToImage}
                  url={element.url}
                  mode={props.mode}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>

        <div className="d-flex justify-content-between">
          <button
            onClick={handlePreviousBtn}
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            onClick={handleNextBtn}
            disabled={page + 1 > Math.ceil(totalResults / 8)}
            type="button"
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
