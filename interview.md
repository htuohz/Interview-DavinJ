# Interview Question:


###### 1. why we can put html elements in javascript?
######  .JSX (if we use eslint, the .JS would no longer be valid when run the program)

###### 2. export const sth = () => { console.log("Hello World")}; ====== import {sth} from ""
######    const sth = () => { console.log("Hello World")}; export {sth} ====== import {sth} from ""

###### 3. why we need to import React from "react" even if we do not use it?
###### because React will be used after the program is compiled:
###### React.render(React.createElement('div', 'My First Create React App', {class: 'greeting', id: 'my-greeting'}), document.getElementById('root'));

###### 4. reserved tags: class, const, let, for, function, if, switch...; React is trying its best to avoid reserved tags; so class => className, for => htmlFor
