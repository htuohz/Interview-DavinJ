# Interview Question:


###### 1. why we can put html elements in javascript?
######  .JSX (if we use eslint airbnb, the .JS would no longer be valid when run the program)
###### .JSX: recognises < as html elememts until /> while { as javascript until }
###### react renders virtialDom so that customised (React) Component start with uppercase eg: "< App >Hello World< /App > and built-in (vanilla) html elememts remain in lowwercase eg: < div >Hello World< /div >

###### 2. export const sth = () => { console.log("Hello World")}; ====== import {sth} from ""
######    const sth = () => { console.log("Hello World")}; export {sth} ====== import {sth} from ""

###### 3. why we need to import React from "react" even if we do not use it?
###### because React will be used after the program is compiled:
###### React.render(React.createElement('div', 'My First Create React App', {class: 'greeting', id: 'my-greeting'}), document.getElementById('root'));

###### 4. reserved tags: class, const, let, for, function, if, switch...; React is trying its best to avoid reserved tags; so class => className, for => htmlFor

###### 5. Arrow functions may implicitly return values by simply omitting the curly braces that traditionally wrap a function's body if their body only contains a single expression.  eg: const WelcomeBar = () => ( < > < p >Hello World< / p > < p >Welcome {user.name} < /p > < / >)


###### 6. vanilla html, js, scss pain point: code is messy and extremely hard to make modification because different part of codes affect each other, and there is no entry point to solve a bug on a tree-like manner.
