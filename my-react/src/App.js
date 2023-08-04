import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Check from "./component/check.js";
import Jokes from "./component/Jokes";

// export default function App(){

//     // let firstName = "Hamza";
//     // let secondName = "Khan";
//     // let age = 19;
//     return(
//         <div>
//              {/* <Check firstName={firstName}  secondName={secondName} age={age} />  */}
//              <Check firstName={"Hamza"} secondName={"Bangash"} age={19} />
//         </div>
//     );
// }
///// for each loop
//// for each loop does not return value 

//for example 

 //let arry = [1,2,3,4,5]; // this is array 

// arry.forEach((item) =>{  // this will print the array in loop where item is variable but it does not return any thing sea the down example
//     console.log(item);
// })

// const value = arry.forEach((item) => {
//     console.log(item);
//     return item; // it will  still not return  any value 
// })

// console.log(value); //undefined




//// Filter so filter is also method which come forward to return value is well 

// arry.filter((items) =>{
//     console.log(items);
// })

// let value = arry.filter((item)=>{
//   return (item>2); // so it will return will that greater than 2
// })

// console.log(value);


/////// .map() method this is used to add something means you can multiply add etc to items

// let value =  arry.map((items)=>{
//    return items*5;
// })

// console.log(value);


//challenge 1:
// Given an array of numbers , return and array of each number, squared 

// const nums = [1,2,3,4,5];

// const squared = nums.map((items)=>{
//     return items*items;
// })

// console.log(nums);
// console.log(squared);

// challenge 2:
// given an array of strings , return an array where 
// first letter of each string is capitalized
// const names = ["alice", "bob", "charlie", "daniella" ];

// const upperCase = names.map((item)=>{
//     return item[0].toUpperCase() + item.slice(1);
// })

// console.log(upperCase);

//challenge 3:

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// const tagPokemon = pokemon.map((item)=>{
//      return `<p>${item}</p>`;
// })

// console.log(tagPokemon);

// export default function App(){
//     const colors = ["red", "blue", "green", "yellow"];
//     return (
//         <div>
//             {colors}
//         </div>
//     )
// }

// export default function App(){
//     const colors = [<h3>red</h3>, <h3>blue</h3>, <h3>etc</h3>];
//     return(
//         <div>
//             {colors};
//         </div>
//     )
// }

/// rendering array 

// export default function App(){
//     const data = Jokes.map((joke)=>{
//         return <Check firstName={joke.firstName} secondName={joke.secondName} age={joke.age}/>
//     })
//     return(
//         <>
//             {data}
//         </>
//     ) 
// }
// console.log(<Check/>);

