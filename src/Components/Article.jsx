import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchArticleById } from "../utils";
import Comments from "./Comments";
import Votes from "./Votes";



const Article = () => {
     const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
     const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        fetchArticleById(article_id).then((article) => {
          
            setArticle(article)

            setIsLoading(false)
        })


    }, [article_id])

  return (
   <div>
          {isLoading ? <p>...Loading the article</p> : 

 <section className='singleArticlePageSection'>
          <img className='singleArticlePagePic'
              src={article.article_img_url}
              alt={article.title}
          />
          <ul className='SinglePageArticleListItems'>
              <h2>{article.title}</h2>
              <h3>Author: {article.author}</h3>
              <h4>Topic: {article.topic}</h4>
              <p id='articleBody'>{article.body}</p>
              <p>Created at: {new Date(article.created_at).toDateString()}</p>
              {/* <p>Votes: {article.votes}</p> */}
               <p>{article.comment_count}</p>
              <Votes article_id={article_id} votes={article.votes} />
              
          </ul> 
              </section>}
          
          <Comments article_id={article_id}
          
          
          />
          </div>
  );
};

export default Article;