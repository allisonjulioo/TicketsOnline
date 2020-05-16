import React, {useEffect} from "react";
import './styles.scss';



export default () => {
    const s = async ()  => {
        const resposta = await fetch("http://localhost:4567/addFilme", 
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title":"sonic",
                "year": "2020",
                "releaseData": "2020-05-10",
                "finalDate": "2020-07-12"
            })
        })

        const data = await resposta.json();
        console.log(data)
    }

    useEffect(() => {s()},[]);

    return (
        <div className="container"><h2>
            
            Teste Request
            
            
            </h2></div>
    );
}