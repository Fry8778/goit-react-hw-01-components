import propTypes from 'prop-types';
import styles from "./profile.module.css";

const Profile = (props) => {
    return (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={props.data.avatar}
                alt="username"
                className={styles.avatar}
            />
            <p className={styles.name}>{props.data.username}</p>
            <p className={styles.tag}>{props.data.tag}</p>
            <p className={styles.location}>{props.data.location}</p>
        </div>

        <ul className={styles.stats}>
            <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{props.data.stats.followers}</span>
            </li>
            <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{props.data.stats.views}</span>
            </li>
            <li>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{props.data.stats.likes}</span>
            </li>
        </ul>
    </div>

    )
}

Profile.propTypes = {
    avatar: propTypes.string,
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    stats: propTypes.object,
};


export default Profile;