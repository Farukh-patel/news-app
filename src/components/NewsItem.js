import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    urlToImage,
    url,
    mode,
    author,
    date,
    source,
   
  } = props;
  return (
    <div className="container my-4 mx-4">
      <div className="card" style={{ width: "12rem" }}>
        <img
          src={!urlToImage ? "/no image.jpg" : urlToImage}
          className="card-img-top"
          alt=" "
        />
        <span class="badge text-bg-info">{source}</span>
        <div className="card-body"
          style={{
            backgroundColor: mode === "dark" ? "#2b2929" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
        >
          <h5 className="card-title">
            {!title ? "title not available" : title}
          </h5>
          <p className="card-text">
            {!description ? "no description available" : description}
          </p>
          <p classnName="card-text">
            <small classnName="text-body-secondary">
              {" "}
              <strong>{!author ? "no author" : author}</strong> - {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-cd btn-sm btn-dark"
            style={{
              backgroundColor: mode === "dark" ? "#e3e3e3" : "black",
              color: mode === "dark" ? "black" : "white",
            }}
          >
            <strong>{"Read more >>"}</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
