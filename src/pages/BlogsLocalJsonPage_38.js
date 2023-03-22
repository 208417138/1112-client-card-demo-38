import React, { useState } from "react";
import blogsData from "../data/BlogData2_38";
const BlogsLocalJsonPage = () => {
  const [name, setName] = useState("LICHUN LIN");
  const [id, setId] = useState("208417138");
  const [data, setData] = useState(blogsData);
  console.log("blogData", data);
  return (
    <>
      <section className="blogs">
        <div className="section-title">
          <h2>
            {name} {id}
          </h2>
        </div>
        <div className="blogs-center2">
          {data.map((item) => {
            const { id, img, remote_img, category, title, desc } = item;
            return (
              <article key={id} className="blog">
                <img
                  src={img}
                  alt={title}
                  className="img blog-img"
                />
                <div className="blog-content">
                  <span>
                    {category} <i className="fa-solid fa-mug-saucer"></i>
                  </span>
                  <h3>{title}</h3>
                  <p>
                    {desc}
                  </p>
                  <a href="#">read more</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogsLocalJsonPage;
