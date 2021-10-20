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
        return message[1]
    })()




    
    return(
        <>
            {user ? 
                <>
                    <h1>{`${welcomeMessage}`}</h1>
                </> 
                : 
                <>
                </>}
        </>
    )
    
}