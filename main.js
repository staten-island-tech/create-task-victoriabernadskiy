DOMselectors = {
  bookCard: document.getElementById("bookCard"),
  synopsis: document.querySelector("synopsis"),
  cardHolder: document.getElementById("cardHolder"),
  btn1: document.getElementById("btn1"),
  btn2: document.getElementById("btn2"),
  btn3: document.getElementById("btn3"),
  btn4: document.getElementById("btn4"),
  result: document.getElementById("result"),
  btns: document.querySelectorAll(".btn")
}

const books = [
  {"title": "To Kill a Mockingbird", "author": "Harper Lee", "synopsis": "Set in the 1930s, this classic novel explores racial injustice in the American South through the eyes of young Scout Finch."},
  {"title": "1984", "author": "George Orwell", "synopsis": "A dystopian masterpiece, Orwell's novel delves into the dangers of totalitarianism and the consequences of a surveillance state."},
  {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "synopsis": "Set during the Roaring Twenties, this novel follows the enigmatic Jay Gatsby and his unrequited love for Daisy Buchanan."},
  {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "synopsis": "Holden Caulfield narrates his experiences in New York City, providing a poignant exploration of teenage alienation and the loss of innocence."},
  {"title": "Pride and Prejudice", "author": "Jane Austen", "synopsis": "A witty and romantic novel, Austen's work examines the manners and morals of early 19th-century British society through the lens of the spirited Elizabeth Bennet."},
  {"title": "The Hobbit", "author": "J.R.R. Tolkien", "synopsis": "Bilbo Baggins embarks on a fantastical journey filled with dwarves, dragons, and treasure in this enchanting prelude to The Lord of the Rings trilogy."},
  {"title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling", "synopsis": "Follow young Harry as he discovers his magical heritage, attends Hogwarts School of Witchcraft and Wizardry, and faces the dark forces threatening the wizarding world."},
  {"title": "The Hunger Games", "author": "Suzanne Collins", "synopsis": "In a dystopian future, Katniss Everdeen must participate in the brutal Hunger Games, a televised fight to the death, to protect her loved ones and challenge the oppressive Capitol."},
  {"title": "The Kite Runner", "author": "Khaled Hosseini", "synopsis": "Amir recounts his complex relationship with his childhood friend Hassan against the backdrop of a changing Afghanistan, exploring themes of redemption, betrayal, and forgiveness."},
  {"title": "The Da Vinci Code", "author": "Dan Brown", "synopsis": "Harvard symbologist Robert Langdon races to unravel a complex code and uncover the secrets hidden within famous works of art, all while avoiding a relentless adversary."},
  {"title": "The Girl on the Train", "author": "Paula Hawkins", "synopsis": "Rachel, entangled in a web of deception and intrigue, becomes obsessed with solving a mystery after witnessing something suspicious during her daily train commute."},
  {"title": "The Alchemist", "author": "Paulo Coelho", "synopsis": "Santiago's journey from Spain to the Egyptian pyramids is a philosophical quest for personal legend and destiny, exploring the transformative power of dreams and spirituality."},
  {"title": "The Road", "author": "Cormac McCarthy", "synopsis": "A father and son navigate a post-apocalyptic world, facing hardships and moral dilemmas as they journey towards an uncertain future in this haunting and minimalist narrative."},
  {"title": "The Fault in Our Stars", "author": "John Green", "synopsis": "Hazel Grace Lancaster and Augustus Waters, two cancer-stricken teenagers, embark on a poignant and life-affirming journey that explores love, loss, and the human spirit."},
  {"title": "Educated", "author": "Tara Westover", "synopsis": "Tara's memoir recounts her journey from growing up in a strict and abusive household in rural Idaho to earning a PhD through self-education and perseverance."},
];


const RandomItem = (book) => {
  const random = Math.floor(Math.random() * book.length);
  return book[random];
};

function resetGame() {
  DOMselectors.cardHolder.innerHTML = '';
  result.textContent = '';
  displayRandomSynopsis();
}



function displayRandomSynopsis() {
    const randomBook = RandomItem(books);
    const correctTitle = randomBook.title
    DOMselectors.cardHolder.insertAdjacentHTML('afterbegin', 
    `   <div id="bookCard">
    <h1 id="header">Guess the Book</h1>
    <h2 class="synopsis">${randomBook.synopsis}</h2>
  </div>`)
    
  const RandomTitle = RandomItem(books).title

    const titleOptions = [correctTitle, RandomItem(books).title, RandomItem(books).title, RandomItem(books).title]
    titleOptions.forEach((title, index) => {
        DOMselectors.btns[index].textContent = title;
        DOMselectors.btns[index].addEventListener('click', (event) => 
        {
          if (event.target.textContent === correctTitle) {
              result.textContent = 'Correct! Well done.';
          } else {
              result.textContent = `Incorrect. The correct title is: ${correctTitle}.`;
          }
        }
        )
    });
    
}

displayRandomSynopsis()

document.querySelector("#restart").addEventListener("click", function () {
  DOMselectors.cardHolder.innerHTML = '';
  result.textContent = '';
  displayRandomSynopsis();
});