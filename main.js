

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

function getRandomSynopsis() {
  return books[Math.floor(Math.random() * books.length)].synopsis;
}

function getAnswerChoices(correctTitle, allTitles) {
  const choices = [correctTitle];
  while (choices.length < 4) {
      const randomTitle = allTitles[Math.floor(Math.random() * allTitles.length)];
      if (randomTitle !== correctTitle && !choices.includes(randomTitle)) {
          choices.push(randomTitle);
      }
  }
  return choices;
}

function displayChoices(choices) {
  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';
  choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.textContent = `${index + 1}. ${choice}`;
      button.addEventListener('click', () => checkAnswer(choice));
      choicesContainer.appendChild(button);
  });
}

function playGame() {
  const correctSynopsis = getRandomSynopsis();
  const correctBook = books.find(book => book.synopsis === correctSynopsis).title;
  const allBookTitles = books.map(book => book.title);

  document.getElementById('synopsis').textContent = `Guess the book based on the synopsis:\n\n${correctSynopsis}`;
  const answerChoices = getAnswerChoices(correctBook, allBookTitles);
  displayChoices(answerChoices);
}

function checkAnswer(selectedTitle) {
  const resultContainer = document.getElementById('result');
  const correctBook = books.find(book => book.synopsis === document.getElementById('synopsis').textContent.split('\n\n')[1]).title;

  if (selectedTitle === correctBook) {
      resultContainer.textContent = 'Congratulations! That\'s correct.';
  } else {
      resultContainer.textContent = `Sorry, the correct answer is: ${correctBook}`;
  }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', playGame);
