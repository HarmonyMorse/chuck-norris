const axios = require("axios")

const joke = async (req, res) => {
    let response = await axios.get(
        'https://api.chucknorris.io/jokes/random'
    );
    const jokeRes = response.data.value;
    console.log(jokeRes);
    res.render('index', {
        title: "Joke",
        joke: jokeRes,
    });
}

module.exports = {
    joke,
}
