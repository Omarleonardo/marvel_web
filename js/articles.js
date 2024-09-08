const itemBoxes = document.getElementById("item_boxes");

export const articles = [
  {
    image: "/public/images/guantlet_store.png",
    name: "Guante de Thanos",
    main_name: "Thanos Infinity Gauntlet Action Figure",
    description:
      "Bring one of the most powerful weapons in the Marvel Universe to life! With this premium Infinity Gauntlet Articulated Electronic Fist from the Marvel Legends Series, lift up the power of the Infinity Stones and imagine taking control of the galaxy with the notorious gauntlet worn by the supreme being, Thanos.",
    price: 149.98,
  },
  {
    image: "/public/images/wolverine.png",
    name: "Wolverine",
    main_name: "Wolverine's collectible Funko Figure",
    description:
      "One of the most admirables x-men characters. Present in almost of all x-men saga movies, Wolverine will part of your personal Funko collection. Hurry up to get this one before run it out.",
    price: 26,
  },
  {
    image: "/public/images/spiderman.png",
    name: "Spider-Man",
    main_name: "Spider-Man's collectible Funko Figure",
    description:
      "We'll never get tired of this bug. Spider-man will part of our childhood and adolescence. He returns with this particular Christmas custome, perfect to give as present to your favorite friend.",
    price: 26,
  },
  {
    image: "/public/images/deadpool.png",
    name: "Deadpool",
    main_name: "Deadpool's collectible Funko Figure",
    description:
      "Deadpool comes to rescue MCU. If you already watch his movie, don't miss to get this fool friend before he breaks the fourth wall",
    price: 26,
  },
  {
    image: "/public/images/black-panter.png",
    name: "Black Panther",
    main_name: "Black Panther's collectible Lego Figure",
    description:
      "Wakanda forever! it's the fight's yell of wakanda world. Black panther leads this incredible and advance civilization and with his lego figure you'll feel the power of the Vibranium in every piece.",
    price: 26,
  },
];

for (const article of articles) {
itemBoxes.innerHTML += `
<div class="box_item">
    <div class="inner_item">
        <img id="guantlet_image" src=${article.image} alt=${article.name}>
    </div>
    <div class="detail_item">
        <h3>${article.name}</h3>
        <p>$ ${article.price}</p>
        <a href="info.html" class="information" id="information">information</a>
        <button class="button_article">Add to Cart</button>
    </div>
</div>
`;
}



