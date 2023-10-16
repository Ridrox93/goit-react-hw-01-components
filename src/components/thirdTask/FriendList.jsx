import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'
   


export function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ name, isOnline, id, avatar }) => {
                    return <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar}  />
                })}      
        </ul>
        )
}
