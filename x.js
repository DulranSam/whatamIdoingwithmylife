document.addEventListener("DOMContentLoaded", () => {
  const locationInput = document.querySelector("#locationin");
  const locationSearch = document.querySelector(".SearchLoc");
  const displayLocation = document.querySelector(".displayLocation");
  const prom = document.querySelector(".promlol");

  const Yes = document.querySelector(".Yess");
  const No = document.querySelector(".No");

  No.addEventListener("click", () => {
    const pinky = localStorage.getItem("promise");
    if (pinky === "u will go with me") {
      prom.innerHTML = `You said you will ${pinky}, so now you can't change your mind`;
    } else {
      const timer = setTimeout(() => {
        prom.innerHTML = "No is NOT AN OPTION";
      }, 3000);
      clearTimeout(timer);
    }
  });

  Yes.addEventListener("click", (e) => {
    e.preventDefault();
    const whatusaid = localStorage.setItem("promise", "u will go with me");
    window.location.href = "./yayy.html";
  });

  locationSearch.addEventListener("click", async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${locationInput.value}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      displayLocation.innerHTML = JSON.stringify(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  });
});
