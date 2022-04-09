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


###### 6. vanilla html, js, scss pain point: code is messy and extremely hard to make modification because different part of codes affect each other, and there is no entry point to solve a bug on a tree-like manner.   React can do tree-like manner by taking apart demands into components. In my project one (https://davinj-0316.github.io/Davin-Jiang-Personal-Site/) the resume-page-sub and service-page-sub remain 700px width and cannot be changed, I can not do anything to fix the styling bug, and the whole page pull out when it is less than 750px width

###### 7. The code formatting is available in Visual Studio Code through the following shortcuts:
###### On Windows Shift + Alt + F.
###### On Mac Shift + Option + F.
###### On Linux Ctrl + Shift + I.

###### left indentation: cmd/ctrl + {
###### right indentation: cmd/ctrl + }
###### select same words in vscode: cmd/ctrl + D




###### 8. converting vanilla html&css to react.js: single responsibility, taking apart .html file into components so that every component has its own responsibility and now it is possible to focus on individual component to develop, every component is independent and we can choose not to use the component and the whole program won't be affected

###### 9. the extra 3 seconds I spend on code quality saves 3*N seconds when it comes to maintain the code on later stage

###### 10. How to write a nice code?
###### part 1: point: everything has its pros and cons, the extra 3 seconds I spend saves 3*N seconds for 1 reader to read, 3*N^2 seconds for N readers to read
###### part 2: evidence: 
