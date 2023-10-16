import css from './FriendList.module.css'

export function FriendListItem({ isOnline, name, avatar }) {
     const statusClassName = isOnline ? css.statusIsOnline : css.statusIsOffline;
    return (
        <li className={css.item}>
         <span className={statusClassName}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" /> 
         <p className={css.name}>{name}</p>
</li>)
}