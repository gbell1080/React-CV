import React, { useState, useEffect } from 'react';
import './JokeAPI.css';

function JokeAPI() {
    const [jokeState, setJokeState] = useState(null);
    const [setupState, setSetupState] = useState(null);
    const [deliveryState, setDeliveryState] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Dark');
            if (!response.ok) {
                throw new Error('Request failed');
            }

            const randomJoke = await response.json();
            if (randomJoke.type === 'single') {
                setJokeState(randomJoke.joke);
                setSetupState(null);
                setDeliveryState(null);
            } else {
                setSetupState(randomJoke.setup);
                setDeliveryState(randomJoke.delivery);
                setJokeState(null);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="jokeAPI">
            <h2>JokeAPI</h2>
            {jokeState && <p>{jokeState}</p>}
            {setupState && deliveryState && (
                <div>
                    <p>{setupState}</p>
                    <p>{deliveryState}</p>
                </div>
            )}
            <button onClick={fetchData}>Get Joke</button>
        </div>
    );
}

export default JokeAPI;
// import './JokeAPI.css';
// import { useState } from 'react';
// //for this section I used docs from the JokeAPI website, from the XMLHttpRequest docs linked on the Joke site
// //I also used chatGPT as I was having some issues, it added the onload function which I was missing
// //I now understand how it works and why it is needed

// function JokeAPI() {

//     const [jokeState, setJokeState] = useState(0);
//     const [setupState, setSetupState] = useState(0);
//     const [deliveryState, setDeliveryState] = useState(0);

//     const changeJoke = () => {
//         if (xhr.status === 200) {
//             var randomJoke = JSON.parse(xhr.responseText);
//             console.log(randomJoke);
//             if (randomJoke.type === "single") {
//                 // If type == "single", the joke only has the "joke" property
//                 setJokeState(randomJoke.joke);
//                 console.log(jokeState);
//             } else {
//                 // If type == "single", the joke only has the "joke" property
//                 setSetupState(randomJoke.setup);
//                 setDeliveryState(randomJoke.delivery);
//                 console.log(setupState);
//                 console.log(deliveryState);
//             }
//         } else {
//             console.log('Request failed with status:', xhr.status);
//         }
//     }

//     try {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://v2.jokeapi.dev/joke/Programming,Dark', true);
//         xhr.onload = function () {
//             changeJoke();
//         };

//         xhr.send();
//     } catch (err) {
//         console.log(err);
//     }

//     return (
//         <div className="jokeAPI">
//             <h2>JokeAPI</h2>
//             {jokeState ? <p>{jokeState}</p> : null}
//             {setupState ? <p>{setupState}</p> : null}
//             {deliveryState ? <p>{deliveryState}</p> : null}
//         </div>
//     );
// }

// export default JokeAPI;