import axios from "axios";


export const fetchAllArticles = () => {
    return axios.get('https://hz-backend-project.onrender.com/api/articles')
        .then(({data}) => {
            return data.articles;
        }).catch((error) => {
        
console.log(error,'articles error')

    })

}

export const fetchArticleById = (article_id) => {
    return axios.get(`https://hz-backend-project.onrender.com/api/articles/${article_id}`)
        .then(({data}) => {
            console.log(data, 'single-page article data')
            return data.article

        })
        .catch((error) => {
        
            console.log(error,'fetch article error')
    })

}

export const fetchCommentsByArticleId = (article_id) => {
    
    return axios.get(`https://hz-backend-project.onrender.com/api/articles/${article_id}/comments`)
        .then(({data}) => {
        
            console.log(data, 'comments data here')
         return data.comments
        })
        .catch((error) => {
        console.log(error)

    })

}

export const patchVote = (article_id) => {
    return axios.get(`https://hz-backend-project.onrender.com/api/articles/${article_id}`)
        .then(({ data }) => {
     
return data.votes
        })

}