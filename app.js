const arrays = [
    42,
    true,
    "Hello , World!", 
    { name: "Amna", 
      age: 21, 
      isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];
console.log(arrays);

         //  === 1: ===
  let stringArray = arrays.map(element => 
    typeof element === 'object' ? JSON.stringify(element) : String(element)
  );
  console.log(stringArray);
  

        // === 2: ===
  let filterNumbers = arrays.filter(element =>
    typeof element === 'number'
  )
  console.log(filterNumbers);


        // === 3: ===
arrays.forEach(element =>
    console.log(typeof element)
)


       // === 4: ===
let sum = arrays.reduce((acc, curElem) => {
    if(typeof curElem === 'number') {
        return acc + curElem
    }
    return acc
},  0)
console.log(sum);

 
     // === 5: ===
let firstBoolean = arrays.find((e , i) => {
    return typeof e === 'boolean' 
})
console.log(firstBoolean);


      // === 6: ===
let objectIndex = arrays.findIndex((element , index) => {
    return typeof element === 'object' 
})
console.log(objectIndex);
let firstKey = objectIndex !== -1 ? Object.keys(arrays[objectIndex])[0] : null;
console.log(firstKey);

      // === 7: ===
let checkNum = arrays.some((element, index) => {
    return typeof element === 'number'
})
console.log(checkNum);

     // === 8: ===
let checkString = arrays.every((element, index) => {
    return typeof element === 'string'
})
console.log(checkString);
