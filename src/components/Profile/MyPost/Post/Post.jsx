import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            {props.message} &nbsp;
            likes {props.like}
        </div>
    );
}

export default Post;
