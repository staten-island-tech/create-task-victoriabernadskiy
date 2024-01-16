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


const url = `https:///api/fruit/all`;

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }



  const URL4 = `https:///api/fruit/all`;
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