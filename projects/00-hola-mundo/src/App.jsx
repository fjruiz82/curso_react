import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    //le podemos pasar una funci'on como prop
    const formatUserName = (userName) => `@${userName}`

    return (
        //<> es lo mismo que <React.Fragment>
        //si paso el voleano sin ningun valor se entiende true
        //si no paso alguna prop, se entiende undefined, (q es falsy)
        <div className='App'>
            <TwitterFollowCard formatUserName={formatUserName} userName="dog" name="Sir Dog" isFollowing={true} />
            <TwitterFollowCard formatUserName={formatUserName} userName="animal" name="Sir Monster" isFollowing={false} />
            <TwitterFollowCard formatUserName={formatUserName} userName="unicorn" name="Sir Unicorn" isFollowing />
            <TwitterFollowCard formatUserName={formatUserName} userName="horse" name="Sir Fox" />
        </div>
    )
}