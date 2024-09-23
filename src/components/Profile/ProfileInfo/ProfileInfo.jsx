import classes from './ProfileInfo.module.css';
function ProfileInfo() {
    return (
        <div className={classes.content}>
            <div>
                <img src={require("../../../assets/img/cover.jpg")} alt="Обложка профиля"></img>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
