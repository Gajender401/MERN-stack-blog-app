import React, {useState} from 'react'
import axios from "axios";
import useUser from '../hooks/userHook';


export default function AddComments({articleName,setArticleInfo}) {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        }, {
            headers,
        });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
        setName('');
        setCommentText('');
    };

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            {user && <p>You are posting as {user.email}</p>}
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    );
}
