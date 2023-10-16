import css from './FriendList.module.css'

export function FriendListItem({isOnline, name, avatar }) {
    return (<li className={css.item}>
        {isOnline ? (<> <span className={css.statusIsOnline}>{isOnline}</span>
        <img className={css.avatar} src={ avatar} alt="User avatar"  /> </>) : (
               <><span className={css.statusIsOffline}>{isOnline}</span>
        <img className={css.avatar} src={ avatar} alt="User avatar"  />
             </>    
        )}
        <p className={css.name}>{name}</p>
</li>)
}