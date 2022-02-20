// to search an string inside every element of an array 
const jsBooks = ["javaScripts: The Good Parts", "You Don't Know JS: Scope & Closures", "JavaScript & JQuery: Interactive Front-End Web Developement", "Eloquent JavaScript", "You Don't Know JS Yet: Get Started"];
const newArr = [];
for (const book of jsBooks) {
  if (book.toLowerCase().includes('javascript'.toLowerCase())) {
    newArr.push(book);
  }
}
console.log(newArr);
const newArr2 = [];
for (const book of jsBooks) {
  if (book.toLowerCase().indexOf('js'.toLowerCase()) != -1) {
    newArr2.push(book);
  }
}
console.log(newArr2);

// to sort a number array 
const numbers = [3, 26, 453, 64, 64, 57, 5, 2, 40, 71, 5, 13, 69, 8, 94, 58, 3768, 32, 46, 77, 7];
const sort1 = numbers.sort();
console.log(numbers);
const sort2 = numbers.sort(function (a, b) {
  return a - b;
})
console.log(numbers);
const sort3 = numbers.reverse();
console.log(numbers);