import React, { useState, useEffect } from "react";

import { supabase } from "../db/clientSupabase";

const BlogsSupabasePage_38 = () => {
  const [name, setName] = useState("LICHUN LIN");
  const [id, setId] = useState("208417138");
  const [data, setData] = useState([]);

  const fetchBlogDataFromSupabase = async () => {
    try {
      let {data, error} = await supabase.from(`card_38`).select('*')
      console.log('results', data);
      setData(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="section-title">
          <h2>Fetch Blogs From Node Server</h2>
          <p>
            {name} {id}
          </p>
        </div>
        <div className="blogs-center2">
          {data.map((item) => {
            const { id, img, remote_img, category, title, desc } = item;
            return (
              <article key={id} className="blog">
                <img src={img} alt={title} className="img blog-img" />
                <div className="blog-content">
                  <span>
                    {category} <i className="fa-solid fa-mug-saucer"></i>
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
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

export default BlogsSupabasePage_38;
