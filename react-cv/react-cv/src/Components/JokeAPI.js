import './JokeAPI.css';

function JokeAPI() {
    // fetch('https://v2.jokeapi.dev/joke/Programming,Dark')
    // .then(response => console.log(response))
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://v2.jokeapi.dev/joke/Programming,Dark', true);
    var randomJoke = {
        "error": false,
        "category": "Dark",
        "type": "twopart",
        "setup": "9/11 jokes are not funny.",
        "delivery": "The other 2 though, are hilarious!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": true,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 77,
        "safe": false,
        "lang": "en"
    };

    if (randomJoke.type == "single") {
        // If type == "single", the joke only has the "joke" property
        alert(randomJoke.joke);
    }
    else {
        // If type == "single", the joke only has the "joke" property
        alert(randomJoke.setup);
        alert(randomJoke.delivery);
    }

    return (
        <div className="jokeAPI">

        </div>
    )
}

export default JokeAPI;