console.log(React);

// let rh1 = React.createElement('h1', {className: "heading1"}, "i am React Element");
// console.log(rh1);


// // Multiple React Element Creation  

// let rh2 = React.createElement('h1', null , React.createElement('span', {className: 'spantag'}, "i am inside the span tag"));
// console.log(rh2);


// // to append the rh1, rh2 (React Element ) into body 
// // ReactDOM -> we need to create the ReactDOM (Which is Bridge between Real Dom and Virtual Dom). 
// // ReactDOM is the library that connects React with the browser's DOM. React creates a Virtual DOM, compares it with the previous Virtual DOM, and then ReactDOM updates only the necessary parts of the Real DOM. 

// let root = document.querySelector('#root')

// // let rootofReact = ReactDOM.createRoot(realDomElem);
// // rootofReact.render(rh2);

// let rootofReact = ReactDOM.createRoot(root);
// rootofReact.render(rh2);

// console.log(rootofReact);







// Task: - To create the React Element and show in the UI 

let rh1 = React.createElement('div',{className: 'div'},
     [React.createElement('h1', {className: 'heading1'},"i am react heading 1", React.createElement('p', {className: 'p'}, "i am paragraph"))],
     [React.createElement('h2', {className: 'heading2'}, React.createElement('span', {className: 'span'}, "i am span inside h2"))]
    );


 // (id-> root) name vala div select kiya and use realDomElem name se Store Kiya..... Jo new created reactelem ke liye reactDom ke jriye RealDOM m jane ka rasta banayega.
let realDomElem = document.querySelector('#root');

// yaha root bna ra hoon ( Jo reactelem ke liye reactDom ke jriye RealDOM m jane ka rasta banayega.)
let RootOfReact = ReactDOM.createRoot(realDomElem);

// abb render kr deta hoon RealDOM m ReactElement ko 
RootOfReact.render(rh1)













// // ESM - Ecma Script Module 

// import{a, sum} from './main.js'
// console.log(a);

// let result = sum(67,90)
// console.log(result);

