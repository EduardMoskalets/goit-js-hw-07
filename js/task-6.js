// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів.Після натискання на кнопку Create має рендеритися(додаватися в DOM) 
// колекція з відповідною кількістю елементів і очищатися значення в інпуті.При повторному натисканні на кнопку 
// Create поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. 
// Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.



// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(),
// яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputAmount = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const color = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Create Boxes

createBtn.addEventListener('click', (event) => {
  if (inputAmount.value > 0 && inputAmount.value <= 100) {
    createBoxes(inputAmount.value)
  } else {
    alert("Введіть число від 1 до 100")
  }
})

let boxsize;
let newDiv; 
function createBoxes(amount) {
  boxes.innerHTML = "";
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv += `<div style = "width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    // boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

boxes.insertAdjacentHTML("beforeend", newDiv);
// destroy Boxes

destroyBtn.addEventListener("click", (event) => {
  inputAmount.value = "";
  boxes.innerHTML = "";
})
