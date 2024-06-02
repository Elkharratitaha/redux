import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {incrementId, setPostDet} from "../redux/PostSlice.jsx";


export default function Posts () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);


    const handleGetPosts = async () => {
            const response = await axios.get('http://localhost:5000/posts').then((resp) => dispatch(setPostDet(resp.data))).catch((err)=> console.log(err));
      }


      const handleDetails = async (id) => {
        const postDetail = posts.filter(p => p.id === id);
          dispatch(setPostDet(postDetail));
        navigate("/detail");
      }

    const handleInc = async (id) => {
        const postDetail = posts.filter(p => p.id === id);
        dispatch(incrementId(postDetail));
        navigate("/detail");
    }

      const togglePage = () =>{
        navigate("/page");
      }


    useEffect(() => {
        handleGetPosts();
      }, []);
    return(
        <div>
            <h1>Posts</h1>
            {posts && posts.length > 0 && (
                posts.map((post, index) => (
                    <div key={index}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                        <button onClick={() => handleDetails(post.id)}> Details</button>
                        <button onClick={() => handleInc(post.id)}> Inc ID</button>
                        <br/>
                        <p>__________________________</p>
                    </div>
                ))
            )}

            <button onClick={togglePage}> Toggle</button>

        </div>
    );
}