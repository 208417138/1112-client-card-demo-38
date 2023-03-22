import React, {useState, useEffect} from "react";
import axios from 'axios';

let api_url = `https://one112-server-card-demo-38.onrender.com/api/card2_38`;
const BlogsNodeServerPage_38 = () => {
  const [name, setName] = useState('LICHUN LIN');
  const [id, setId] = useState('208417138');
  const [data, setData] = useState([]);

  const fetchBlogDataFromNodeServer = async() => {
    try{
        const results = await axios.get(api_url);
        console.log('results', results);
        setData(results.data);
    }catch(error){
        console.log('error');
    }
  }

  useEffect(()=>{
    fetchBlogDataFromNodeServer();
  },[])

  return(
    <>
    <section className="blogs">
        <div className="section-title">
          <h2>
            Fetch Blogs From Node Server
          </h2>
          <p>{name} {id}</p>
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
  )
};

export default BlogsNodeServerPage_38;
