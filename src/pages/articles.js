import React,{useState, useEffect} from 'react'
import articles from "../assets/dummyData"
import { useParams } from 'react-router-dom'
import NotFound from './notFound'
import axios from "axios";
import CommentsList from './commentsList';
import AddComments from './addComments';
import useUser from '../hooks/userHook';

export default function Articles() {
  const [articleInfo, setarticleInfo] = useState({upvotes : 0 , comments : []})
  const {articleId} = useParams()
  const article = articles.find(article => article.name === articleId)
  const { user,isLoading } = useUser()
  const { canUpvote } = articleInfo;

  const addUpvote = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
    const updatedArticle = response.data;
    setarticleInfo(updatedArticle);
  }

  useEffect(() => {
    const loadData = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, { headers });
      const newArticleInfo = response.data;
      setarticleInfo(newArticleInfo);
  }

  if (user) {
      loadData();
  }

  }, [user])
  

  if(!article){
    return <NotFound />
  }

  return (
    <>
    <h1>{article.name}</h1>
    <div className='upvotes-section' >
    {user
                ? <button onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button>
                : <button>Log in to upvote</button>}
    <p>This article has {articleInfo.upvotes} upvotes</p>
    </div>
    {article.content.map(para => (
      <p>
        {para}
      </p>
    ))}
    {user
            ? <AddComments articleName={articleId} setArticleInfo={updated => setarticleInfo(updated)} />
            : <button>Log in to add a comment</button>}
    <CommentsList comments={articleInfo.comments} />
    </>
  )
}
