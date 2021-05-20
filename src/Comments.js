import React, {useState, useEffect} from 'react';
import AdminMode from './AdminMode';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import axios from 'axios';
// import Comment from './Comment';

export default function Comments() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            setComments(res.data)
        })
    }, [])

    const toggleAdminMode = () => {
        setIsAdmin(!isAdmin);
      }

    return (
        <div className="comments">
            <AdminMode isAdmin={isAdmin} toggleAdminMode={toggleAdminMode}/>
            <div className="columns">
                <div className="column">
                <CommentForm comments={comments}/>
                </div>
                <div className="column">
                <CommentList isAdmin={isAdmin} comments={comments} />
                </div>
            </div>
        </div>
    )
}

