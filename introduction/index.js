// ReactDOM.render(<h1>Hello wolrd </h1>,document.getElementById("root"));

/////decalaritive and imperative programing

// decalaritive mean what to do just tell computer it will done job .
//imperative means you will tell step by step complete instruction .

//example of  decalaritive

// ReactDOM.render(<h1 >This is decalaritve way of programmin</h1>,document.getElementById("root"));

//example of imperative 

// const h1 = document.createElement("h1");
// h1.textContent = "This is imperative way of programing ";
// document.getElementById("root").append(h1);


////jsx is the combination of javascript and html or falevar of html in javascript

// creating a navabar

// const navabar = (
//     <nav>
//         <h1>BrandName</h1>
//         <ul>
//             <li>Menu</li>
//             <li>Contact</li>
//             <li>About</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navabar, document.getElementById("root"));


// const page = (
//    <div className="page">
//         <h1>React</h1>
//         <p>React is library of javascript</p>
//         <h6>Addvantages of react</h6>
//         <ul>
//             <li>Reuseablity</li>
//             <li>Reduce complexcity</li>
//             <li>Easy to handle</li>
//             <li>single page webapplication</li>
//         </ul>
//    </div>
// )

// // document.getElementById("root").append(JSON.stringify(page));
// ReactDOM.render(page,document.getElementById("root"));

// const page = (
//     <div>
//         <img src="./logo-logo.png" width="40px"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>was first realsed in 2013</li>
//             <li>it was mainted by facebook</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(page,document.getElementById("root"));


////Quiz

//1.why do we need to import React from react in our file?
//we need React from  react file because computer does not understand jsx without react

//2.If i were to console.log(page) in index.js , what would show up ?
// it will showup object data in the broswer

//3. what's wrong with this code :

// const page = (
  //  <h1>hello</h1>
 //   <p>this is my websitse</p>
//)

//the problem is with this is that more one parent element in page 


/////Creating Component

// function TemporaryName()
// {
//   return (
//     <div>
//     <img src="./logo-logo.png" width="40px"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//         <li>was first realsed in 2013</li>
//         <li>it was mainted by facebook</li>
//     </ul>
// </div>
//   );
// }

// ReactDOM.render(<TemporaryName/>,document.getElementById("root"));

// function LearnReact (){
//   return(
//     <ul>
//       <li>to get cirtefcate from coursera</li>
//       <li> familaier with front-end</li>
//     </ul>
//   );
// }

// ReactDOM.render(<LearnReact/>, document.getElementById("root"));

///Quiz 

//1.React component is a function that return react element.it can be use multiple time

//2.the name of component must start with capital letter

//3.use tag like <Header/> instead of this Header()

/////Composing Component mean parent and chlid


// import Header from "./Header";
// function Body()
// {
//   return(
//     <main>
//       <h1>Reason i am excited to learn React</h1>
//       <ol>
//         <li>Decalaritive programing</li>
//         <li>Easy to handle</li>
//       </ol>
//     </main>
//   );
// }

// function Footer(){
//   return(
//     <footer>
//       <small>All resered donot copy</small>
//     </footer>
//   );
// }

// function Page(){
//   return(
//     <div>
//     <Body/>
//     <Footer/>
//     </div>
//   );
// }

// ReactDOM.render(<Page/>,document.getElementById("root"));