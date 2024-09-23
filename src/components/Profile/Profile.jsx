import classes from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile() {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <div>
                <MyPost />
            </div>
        </div>
    );
}

export default Profile;
