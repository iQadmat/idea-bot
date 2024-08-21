const title = document.querySelector("#title");
const idea = document.querySelector("#idea");
const button = document.querySelector("#btn");

button.addEventListener("click", getIdea);

function getIdea() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      // Body Styling
      document.querySelector("body").style.background =
        "linear-gradient(to right, #000000, #434343)";

      // Idea Styling
      idea.textContent = data.activity;

      //  Title and Button Styling
      title.textContent = "🦾 IdeaBot🦿";
      setTimeout(() => {
        title.style.letterSpacing = "5px";
        button.style.transform = "scale(1.1)";
        button.style.backgroundColor = "#5BC0EB";
      }, 0);
      setTimeout(() => {
        title.style.letterSpacing = "0";
        button.style.transform = "scale(1)";
        button.style.backgroundColor = "#E5DADA";
      }, 500);
    });
}
