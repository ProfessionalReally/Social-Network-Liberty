import classes from './MyPost.module.css';
import Post from './Post/Post'

function MyPost() {
    return (
        <div>
            My Posts
            <Post message='Hi, how are you?' like='15'/>
            <Post message='It`s my first post' like='20'/>
        </div>
    );
}

export default MyPost;
