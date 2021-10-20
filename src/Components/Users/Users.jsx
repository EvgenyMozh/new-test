import React from "react";
import styles from "./users.module.css"

let Users = (props) => {
if (props.users.length === 0) (
    props.setUsers([
        { id: 1, photoUrl: 'https://img2.freepng.ru/20180723/evf/kisspng-computer-icons-user-profile-password-login-end-user-5b55c605753eb6.8354409015323479094803.jpg', followed: false, fullName: 'Evgeny', status: 'Cool', location: { city: 'Perm', country: 'Russia' } },
        { id: 2, photoUrl: 'https://img2.freepng.ru/20180723/evf/kisspng-computer-icons-user-profile-password-login-end-user-5b55c605753eb6.8354409015323479094803.jpg', followed: true, fullName: 'Milka', status: 'Meow-meow', location: { city: 'Yusva', country: 'Russia' } },
        { id: 3, photoUrl: 'https://img2.freepng.ru/20180723/evf/kisspng-computer-icons-user-profile-password-login-end-user-5b55c605753eb6.8354409015323479094803.jpg', followed: false, fullName: 'Dima', status: 'Learn React', location: { city: 'Minsk', country: 'Belarus' } },
    ]
    )
)
    return <div className={styles.userPage}>{
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>

                    }

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    }
    </div>
}


export default Users;