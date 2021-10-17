const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: "Voluptatem",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: "Explicabo",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: "Rchitecto",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: " Beatae",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: " Vitae",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: "Inventore",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: "Veritatis",
    image: "../lebihdekat/images/test.jpg"
  },
  {
    name: "Accusantium",
    image: "../lebihdekat/images/test.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}