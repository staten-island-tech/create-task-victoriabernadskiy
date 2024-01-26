const config = {
API_KEY: "ix0SiU5PpY8EPBlzWE3K72qFsTWypdZpP0VKgC2o"
}
const url = 'https://api.nal.usda.gov/fdc/v1/foods/list?api_key='
const api_key = config.API_KEY


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

async function load() {
  const nasadata = await FetchURL(`${url}${api_key}`)
  Insert(nasadata)
}

load()



const plate = []


const DOMSelectors = {
  card_holder: document.getElementById("card_holder"),
  card: document.querySelector("card"),
  fruitName: document.querySelector("fruitName"),
  genus: document.querySelector("genus"),
  nutrition: document.querySelector("nutrition")
} 


function Insert(obj) {
  DOMSelectors.card_holder.insertAdjacentHTML('afterbegin', 
  `<div class="card">
  <h1 class="fruitName">${obj.fruitName}</h1>
  <h2 class="genus">${obj.genus}</h2>
  <h2 class="nutrition">${obj.nutrition}</h2>
</div>`)};