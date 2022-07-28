import styles from "../styles/friendList.module.css";
import FriendCard from './friendCard';

const FriendList = (props) => {
    const {friends} = props;
    return (
        <ul className={styles.friendsName}>
            {friends.map((el)=> (
                <FriendCard key={el.id} {...el}/>
            ))}
        </ul>
        );
};
export default FriendList;