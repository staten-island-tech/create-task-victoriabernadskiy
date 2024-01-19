/* const URL = `https:///api/fruit/all`;


async function getData(URL){
try{
const response = await fetch(URL);
if(response.status !=200) {
    throw new Error(response.statusText);
}

console.log(response)
const data = await response.json();
console.log(data);
} catch (error) {}
document.querySelector("h1").textContent = "error";
}

getData(URL); */

//or

/* 
const url = `https://217.160.142.194.api/fruit/all`;

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
console.log(url) */





// use GET
/* 
  const URL = `https://www.fruityvice.com/api/fruit/all`;
    const FetchURL = async (request) => {
  try {
    const response = await fetch(`${request}`)
    const data = await response.json()
    console.log('COOL data', data)
    return data
  } catch (error) {
    console.log(error)
  }
}

FetchURL()

const plate = []


const DOMSelectors = {
  card_holder: document.getElementById("card_holder"),
  card: document.querySelector("card"),
  fruitName: document.querySelector("fruitName"),
  genus: document.querySelector("genus"),
  nutrition: document.querySelector("nutrition")
} */


const fruit = [
  {
    name: "Apple",
    family: "Rosaceae",
    genus: "Malus",
      nutritions: {
        calories: 52,
        fat: 0.4,
        sugar: 10.3,
        carbohydrates: 11.4,
        protein: 0.3
      }
    },
    {
      name: "Banana",
      family: "Musaceae",
      genus: "Musa",
      nutritions: {
        calories: 96,
        fat: 0.2,
        sugar: 17.2,
        carbohydrates: 22,
        protein: 1
      }
    },
    {
      name: "Lychee",
      family: "Sapindaceae",
      genus: "Litchi",
      nutritions: {
        calories: 66,
        fat: 0.44,
        sugar: 15,
        carbohydrates: 17,
        protein: 0.8
      }
    },
    {
      name: "Passionfruit",
      family: "Passifloraceae",
      genus: "Passiflora",
      nutritions: {
        calories: 97,
        fat: 0.7,
        sugar: 11.2,
        carbohydrates: 22.4,
        protein: 2.2
      }
    },
    {
      name: "Watermelon",
      family: "Cucurbitaceae",
      genus: "Citrullus",
      nutritions: {
        calories: 30,
        fat: 0.2,
        sugar: 6,
        carbohydrates: 8,
        protein: 0.6
      }
    },
    {
      name: "Blueberry",
      family: "Rosaceae",
      genus: "Fragaria",
      nutritions: {
        calories: 29,
        fat: 0.4,
        sugar: 5.4,
        carbohydrates: 5.5,
        protein: 0
      }
    },
    {
      name: "Guava",
      family: "Myrtaceae",
      genus: "Psidium",
      nutritions: {
        calories: 68,
        fat: 1,
        sugar: 9,
        carbohydrates: 14,
        protein: 2.6
      }
    },
    
]