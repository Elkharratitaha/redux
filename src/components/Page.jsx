import {useSelector} from "react-redux";

export default function Page (){

const posts = useSelector(state => state.post.posts);

    return(
      <div>
          {posts[0].id}
      </div>
    );
}