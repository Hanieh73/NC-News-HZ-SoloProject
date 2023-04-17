import { fetchAllArticles } from "../utils";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";


const ArticleList = () => { 
    
 const [allArticles, setAllArticles] = useState([])
 const [isLoading, setIsLoading] = useState(true)

      useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((startingList) => {
      console.log(startingList, 'startingList')
      setAllArticles(startingList)
      setIsLoading(false)
    })

      }, [])
    
  return (
    <div>
          <h3 className="articleListHeadline"> List of All the Articles </h3>
          {isLoading ? <p>...Loading</p> :
              <ul id="articleList">
                  {allArticles.map((article) => {
                      return (
                          <li id='articleCard' key={article.article_id}>
                              <ArticleCard
                                  article={article}
                              />
                          </li>
                      )

                  })}

              </ul>}
    </div>
  );
};

export default ArticleList;