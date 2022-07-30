import propTypes from 'prop-types';
import styles from "./friendList.module.css";
import FriendListItem from "../friendsListItem/friendsListItem";

const FriendList = ({friends}) => {   
    return (
        <ul className={styles.friendList}>
            {friends.map((el)=> (
                <FriendListItem key={el.id} {...el}/>
            ))}
        </ul>
        );
};

FriendList.propTypes = {
    friends: propTypes.array,     
};


export default FriendList;