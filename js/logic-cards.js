const containerCards = document.getElementById("container_cards");

const heroes = [
  {
    image: "./public/images/Ironman.jpg",
    name: "Ironman",
    description:
      "Tony Stark, a billionaire genius, uses his advanced Iron Man suit to protect the world with unparalleled intelligence.",
  },

  {
    image: "./public/images/Thor.jpg",
    name: "Thor",
    description:
      "Thor, the mighty God of Thunder, wields his hammer Mjolnir to defend the Nine Realms with divine strength and honor.",
  },

  {
    image: "./public/images/Black-widow.webp",
    name: "Black Widow",
    description:
      "Natasha Romanoff, the Black Widow, combines exceptional espionage and combat skills to face any threat with bravery.",
  },

  {
    image: "./public/images/Ironman.jpg",
    name: "Ironman",
    description:
      "Tony Stark, a billionaire genius, uses his advanced Iron Man suit to protect the world with unparalleled intelligence.",
  },

  {
    image: "./public/images/Thor.jpg",
    name: "Thor",
    description:
      "Thor, the mighty God of Thunder, wields his hammer Mjolnir to defend the Nine Realms with divine strength and honor.",
  },

  {
    image: "./public/images/Black-widow.webp",
    name: "Black Widow",
    description:
      "Natasha Romanoff, the Black Widow, combines exceptional espionage and combat skills to face any threat with bravery.",
  },

];


for (const hero of heroes) {
    containerCards.innerHTML += `
    <div class="hero-card">
        <div class="container-img">
            <img  src=${hero.image} alt=${hero.name}>
        </div>
        <p class="title">${hero.name}</p>
      
        <p class="description">${hero.description}</p>
    </div>`;
}

