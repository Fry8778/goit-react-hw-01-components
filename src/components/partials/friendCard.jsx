import styles from "../styles/friendList.module.css";
import propTypes from 'prop-types';

const FriendCard = ({avatar, name, isOnline}) =>{
    return(
        <li className={styles.item}>
            <span className={styles.status}>{isOnline}</span>
            <img className={styles.avatar}
                src={avatar}
                alt={name}
                width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendCard.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
    id: propTypes.number,

};

export default FriendCard;