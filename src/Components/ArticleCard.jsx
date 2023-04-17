import { Link } from "react-router-dom";




const ArticleCard = (props) => {
    const { article} = props;
    const viewClick = () => { }
    
  return (
      <div> 
          <img
              className='articleCardPics_small'
              src={article.article_img_url}
              alt={article.article_title}
          />  
                  <h4 className='articleTitle'>{article.title}</h4>
          <Link to={`/articles/${article.article_id}`}>
             
              <button className="homePageViewArticleButton" onClick={viewClick}> Read This Article </button>
                  </Link>
    </div>
  );
};

export default ArticleCard;