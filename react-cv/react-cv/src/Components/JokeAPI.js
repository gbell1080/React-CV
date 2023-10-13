import './JokeAPI.css';
//for this section I used docs from the JokeAPI website, from the XMLHttpRequest docs linked on the Joke site
//I also used chatGPT as I was having some issues, it added the onload function which I was missing
//I now understand how it works and why it is needed
var setup = '';
var delivery = '';
var joke = '';

function JokeAPI() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://v2.jokeapi.dev/joke/Programming,Dark', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var randomJoke = JSON.parse(xhr.responseText);
            console.log(randomJoke);
            if (randomJoke.type === "single") {
                // If type == "single", the joke only has the "joke" property
                joke = randomJoke.joke;
                console.log(joke);
                setup = null;
                delivery = null;
            }
            else {
                // If type == "single", the joke only has the "joke" property
                setup = randomJoke.setup;
                delivery = randomJoke.delivery;
                console.log(setup);
                console.log(delivery);
                joke = null;
            }
        } else {
            console.log('Request failed with status:', xhr.status);
        }
    };

    xhr.send();

    return (
        <div className="jokeAPI">
            <h2>JokeAPI</h2>
            {joke != null && <p>{joke}</p>}
            {setup != null && <p>{setup}</p>}
            {delivery != null && <p>{delivery}</p>}
        </div>
    );
}


export default JokeAPI;