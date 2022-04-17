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

###### 11. 就近维护原则: 当我们维护component的html的时候我们应该可以就近维护component的css, 当我们就近维护component的css的时候我们可以就近维护component的html, 当我们就近维护Header的时候， Header里面的Logo应该被就近维护（Logo不能离得太远; Logo.js should also close to Logo.css 

###### 12. React有re-render的机制（setState之后触发re-render），所以我request后拿到新的数据存入setState会自动的触发re-render（页面自动局部刷新了，而不是全局的刷新，只有react能做到，结合龙哥讲的react reconciliation）
###### https://reactjs.org/docs/reconciliation.html
###### 对比安卓开发的时候我只能用swipe或者button去刷新entire app，react在这点上性能有优势
###### How is componentDidUpdate triggered?
###### componentDidUpdate() is fired every time the parent component re-renders (and passes in new props). And in stateful components also whenever setState() is fired. Even if old prevprops and this. props （or old state and new state）are exactly the same, componentDidUpdate() is still fired if the parent component re-renders.
###### eg：以下的例子中 axios会无限发送get request 因为在componentDidUpdate里面设置了setState  因此page上任何改动都能实时捕捉到
######     componentDidUpdate() {
######        console.log("lifecycle-componentDidUpdate");
######          axios.get('http://localhost:8081/order/1:/20')
######            .then(json => {
######                this.setState({
######                    items:json.data.results
######                }) 
######            })
######        }
###### 更新： android 开发也有类似的机制
###### https://www.tutorialspoint.com/android/android_acitivities.htm

###### 13. AWS CDK是imperative的，而且把cloud formation（declarative）的责任拿了过来 （输出cloud formation的yml文件）
