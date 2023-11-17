// Object Destructuring 1
// Returns  8  & 1846

//Object Destructuring 2
//Returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3
//Returns

// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

//Array Destructuring 1
//Returns
//Maya
//Marisa
//Chi

//Array Destructuring 2
//Returns
//Raindrops on roses
//Whiskers on kettles
//["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

//Array Destructuring 3
//returns [10, 30, 20]

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

let {numbers{a,b}} = obj

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];


//


raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) =>{
    return {
        first,
        second,
        third,
        rest
    }
}