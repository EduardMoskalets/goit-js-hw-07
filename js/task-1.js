// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст
// заголовка елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).


// count

const categoriesList = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${categoriesList.length}`);

// iterate

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});

