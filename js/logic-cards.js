const containerCards = document.getElementById("container_cards");
const button_left = document.getElementById("button_left");
const button_right = document.getElementById("button_right");
const heroCard = document.getElementsByClassName("hero-card");

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
    image: "./public/images/capitan-america.webp",
    name: "Captain America",
    description:
      "Steve Rogers, a super soldier, fights for justice and freedom with his indestructible shield.",
  },

  {
    image: "./public/images/hulk.jpg",
    name: "Hulk",
    description:
      "Bruce Banner transforms into the Hulk, a powerful being fueled by rage, fighting against injustice.",
  },

  {
    image: "./public/images/spiderman.webp",
    name: "Spiderman",
    description:
      "Peter Parker, bitten by a radioactive spider, uses his agility and spider-sense to protect New York City.",
  },

  {
    image: "./public/images/strange.webp",
    name: "Doctor Strange",
    description:
      "Dr. Stephen Strange, a former neurosurgeon, becomes the Sorcerer Supreme, protecting Earth from mystical threats.",
  },

  {
    image: "./public/images/tchala.jpg",
    name: "Black Panther",
    description:
      "T'Challa, the Black Panther, leads Wakanda with enhanced abilities and advanced technology to fight for his people.",
  },
];

for (const hero of heroes) {
  containerCards.innerHTML += `
  <div class="hero-card" >
  <div class="container-img">
  <img  src=${hero.image} alt=${hero.name}>
  </div>
  <p class="title">${hero.name}</p>
  
  <p class="description">${hero.description}</p>
  </div>`;
}

const validateMedia = () => {
  if (window.matchMedia("(max-width: 1199px)").matches) {
    return 200 + 32;
  }

  if (window.matchMedia("(min-width: 1200px)").matches) {
    return 320 + 32;
  }
};
validateMedia();


const buttons_left_and_right = () => {
  let inicialPointOfCards = 0;

  const total_cards = heroCard.length;
  const card_width = validateMedia(); //esto es según el tamaño de la pantalla ¿Cómo lo tomo del CSS o cómo se ajusta?
    const max_off_set = card_width * (total_cards);

  // todo crear evento escuchador "clic"
  button_right.addEventListener("click", () => {
    // todo boton derecha mover  cantidad de una tarjeta a la izq
    if (inicialPointOfCards < max_off_set) {
      inicialPointOfCards -= card_width;
    }

    // todo cuando llegue al final de las tarjetas devolverse al punto inicial
    if (inicialPointOfCards === -parseInt(max_off_set)) {
      inicialPointOfCards = 0;
    }
    containerCards.style.transform = `translateX(${inicialPointOfCards}px)`;
  });

  button_left.addEventListener("click", () => {
    // todo boton derecha mover cantidad de una tarjeta a la izq 
    if (inicialPointOfCards < max_off_set) {
      inicialPointOfCards += card_width;
      console.log(inicialPointOfCards);
    }

   // todo cuando llegue al inicio de las tarjetas no devolverse más
    if (inicialPointOfCards === -parseInt(card_width) || card_width) {
      inicialPointOfCards = 0;
    }

    containerCards.style.transform = `translateX(${inicialPointOfCards}px)`;
  });
};
buttons_left_and_right();