document.addEventListener("DOMContentLoaded", () => {
  const jokeField = document.getElementById("joke-field");
  const generateJokeBtn = document.getElementById("generate-joke-btn");
  const errorMsg = document.getElementById("error");

  generateJokeBtn.addEventListener("click", async () => {
    try {
      const receivedJoke = await fetchJoke();
      displayJoke(receivedJoke);
    } catch (error) {
      console.log("Error fetching Joke");
      showError();
    }
  });

  async function fetchJoke() {
    const url = `https://official-joke-api.appspot.com/random_joke`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error...");
      showError();
    }
    const data = await response.json();
    return data;
  }

  function displayJoke(joke) {
    console.log(joke);
    jokeField.textContent = `${joke.setup} - ${joke.punchline}`;
  }

  function showError() {
    errorMsg.classList.remove("hidden");
  }
});
