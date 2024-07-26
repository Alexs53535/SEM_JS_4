//********** Task 1
for (let i = 0; i < 11; i++) {
    if (i === 0) {
      console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
      console.log(`${i} - четное число`);
    } else {
      console.log(`${i} - нечетное число`);
    }
  }
  
  // ******** Task 2
  const arrayNumber = [1, 2, 3, 4, 5, 6, 7];
  let lastNumber = arrayNumber.pop();
  arrayNumber.pop();
  arrayNumber.pop();
  arrayNumber.push(lastNumber);
  console.log(arrayNumber);
  
  //********* Task 3
  const array = [];
  for (let i = 0; i < 5; i++) {
    array[i] = Math.floor(Math.random() * (10 - 1) + 1);
  }
  console.log(array);
  
  let sumArr = 0;
  let minNum = array[0];
  
  for (let i = 0; i < array.length; i++) {
    sumArr += array[i];
    if (minNum > array[i]) {
      minNum = array[i];
    }
  }
  console.log(`Сумма элементов массива = ${sumArr}`);
  console.log(`Минимальное число в массиве - ${minNum}`);
  if (array.indexOf(3) !== -1) {
    console.log("Число 3 есть в массиве.");
  } else {
    console.log("Числа 3 нет в массиве.");
  }