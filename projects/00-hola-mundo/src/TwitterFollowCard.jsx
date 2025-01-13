export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {
    const imgSrc = `https://unavatar.io/${userName}`
console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imgSrc} alt="El avatar de Dog" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside className='tw-followCard-header'>
                <button className='tw-followCard-button'>
                    Follow
                </button>
            </aside>
        </article>
    )
}