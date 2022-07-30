import styles from "../friendsList/friendList.module.css";
import propTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <li className={styles.item}>
            <span className={`${styles.status} ${isOnline ? styles.statusOnline : styles.statusOffline}`}></span>
            <img className={styles.avatar}
                src={avatar}
                alt={name}
                width="48"/>
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,   

};

export default FriendListItem;