import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css"

export default function  Home(){
    const session = useSelector(state => state.session);
    const user = session?.user ? session.user : ''

    const [isLogged, setIsLogged] = useState(false);

    let randNum = Math.floor(Math.random(1) * 25) + 1

    console.log(randNum)

    let welcomeMessage = (() => {
        const message = ['Welcome back, Starman.', `Welcome back, ${user?.username}.`]

        if (randNum < 24) return message[1]
        else return message[0]
    })()




    
    return(
        <>
            {user ? 
                <>
                    <h1>no airbnb</h1>
                    <h2>{`${welcomeMessage}`}</h2>
                    <button><Link to={`/users/${user?.id}`}>Visit Profile</Link></button>
                    <h2>Explore the stars</h2>
                </> 
                : 
                <>
                <h1>no airbnb</h1>
                <Link to={'/signup'}><div className="homeClick">create an account</div></Link>
                <Link to={'/login'}><div className="homeClick">sign in</div></Link>
                </>}
        </>
    )
    
}