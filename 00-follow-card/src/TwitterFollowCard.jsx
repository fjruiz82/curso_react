import { useState } from 'react'

export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imgSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    //console.log(isFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imgSrc} alt="El avatar de Dog" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    {/* <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span> */}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}