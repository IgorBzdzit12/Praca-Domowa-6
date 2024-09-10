function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}
        
function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

// Zadanie 1

// Słowo kluczowe this w JavaScript odnosi się do kontekstu wykonania, 
// w którym jest używane. Jego wartość zależy od tego, gdzie i jak 
// funkcja lub metoda została wywołana. W programowaniu obiektowym this 
// najczęściej odnosi się do obiektu, na którym metoda została wywołana, 
// umożliwiając dostęp do jego właściwości i metod.

// Przykład 1

// const person = {
//     name: "John",
//     greet: function() {
//       console.log("Hello, my name is " + this.name);
//     }
//   };
  
//   person.greet(); // Wypisze: Hello, my name is John

// Przykład 2

// const maciej = {
//     username: "Maciej",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.username);
//     },
//   };
  
//   maciej.showThis();// {username: "Maciej", showThis: ƒ, showName: ƒ}
//   maciej.showName();// 'Maciej'
  

//Zadanie 2


// const maciej = {
//   username: "Maciej",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// maciej.showThis();// {username: "Maciej", showThis: ƒ, showName: ƒ}
// maciej.showName();// 'Maciej'

//Zadanie 3

const bookshelf = {
  authors: [],

  addAuthor(authorName) {
    this.authors.push(authorName);
  },
  
  getAuthors() {
    return this.authors;
  }
};

bookshelf.addAuthor ("George Orwell");
bookshelf.addAuthor ("Andrzej Sapkowski");
bookshelf.addAuthor ("Haruki Murakami");

console.log(bookshelf.getAuthors());
