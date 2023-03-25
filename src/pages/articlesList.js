import React from 'react'
import articles from '../assets/dummyData'
import { Link } from 'react-router-dom'

export default function ArticlesList() {
  return (
    <>
        <h1>Articles</h1>
        {articles.map(article => (
          <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`} >
            <h1>{article.title}</h1>
            <p>{article.content[0].substring(0,150)}...</p>
          </Link>
        ))}
    </>

  )
}
