import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'dog',
        name: 'Sir Dog',
        isFollowing: true
    },
    {
        userName: 'animal',
        name: 'Sir Monster',
        isFollowing: false
    },
    {
        userName: 'unicorn',
        name: 'Sir Unicorn',
        isFollowing: false
    },
    {
        userName: 'horse',
        name: 'Sir Fox',
        isFollowing: true
    },
    {
        name: 'Sir ???',
        isFollowing: true
    }
]

export function App() {
    //le podemos pasar una funci'on como prop
    //const formatUserName = (userName) => `@${userName}`

    return (
        //<> es lo mismo que <React.Fragment>
        //si paso el voleano sin ningun valor se entiende true
        //si no paso alguna prop, se entiende undefined, (q es falsy)
        /*<div className='App'>
            <TwitterFollowCard formatUserName={formatUserName} userName="dog" name="Sir Dog" isFollowing={true} />
            <TwitterFollowCard formatUserName={formatUserName} userName="animal" name="Sir Monster" isFollowing={false} />
            <TwitterFollowCard formatUserName={formatUserName} userName="unicorn" name="Sir Unicorn" isFollowing />
            <TwitterFollowCard formatUserName={formatUserName} userName="horse" name="Sir Fox" />
        </div>*/

        /////////////////////////////////////////////////////////////////////////

        // <section className='App'>
        //     <TwitterFollowCard userName="dog">
        //         Sir Dog Guau Guau
        //     </TwitterFollowCard>

        //     <TwitterFollowCard isFollowing userName="animal">
        //         Sir Monster Uhhhh
        //     </TwitterFollowCard>

        //     <TwitterFollowCard>
        //         Sir Abc
        //     </TwitterFollowCard>
        // </section>

        ///////////////////////////////////////////////////////////////////////////

        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            // incluir siempre una key obligatorio en React, si la bbdd tiene un id, mejor eso q el nombre
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}