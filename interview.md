# Interview Question:

###### 0. During Australian holidays and shopping peak time(boxing day, black Friday Market), ANZ (Australian IT's leader) only aims to handle 100,000  customer requests per second (100,000 cocurrent per second). Australia (AfterPay) barely handles 4 millions cocurrent. Alibaba(1 billions cocurrent per second).  So, Australia does not focus on algorithms much, and does not care theory much, Working Life Balance. Australia likes a person who is obedient, and code elegantly. write codes that others can easily handle. Australian want to hire a person who can improve their working life balance and code productively.

###### continue: 如果做个体户，又做产品，又做developer可以只注重界面(UI+功能)的fancy但是， 求职做developer，不会关心产品的好与坏，developer只关心开发(code quality + developer coodination through coding)的好与坏

###### As a developer, thinking is a must and always doubt the (declarative/component based) RMR of the code
###### 当时想了这个问题, 但是没有质疑这个问题, 当时没有成为杠精, 想到一种写法(就是要用这个方法写)就去google， stackover flow， copy别人的代码

###### debug用二分法binary search, for example： p1页面不工作了，先去html，css操作加上或减去class name，发现工作了，那就是javascript写错了, 显示／隐藏一个页面用添加／删除class name更readable，maintainable，而不是javascript加上display：none，用class name具象化了这个功能

###### 1. why we can put html elements in javascript?
######  .JSX (if we use eslint airbnb, the .JS would no longer be valid when run the program)
###### .JSX: recognises < as html elememts until /> while { as javascript until }
###### react renders virtialDom so that customised (React) Component start with uppercase eg: "< App >Hello World< /App > and built-in (vanilla) html elememts remain in lowwercase eg: < div >Hello World< /div >
###### 通过javascript的语法来实现html的readable，maintainable，reusable

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

###### ctrl/cmd + D select other same elements with the current selected one
###### shift + 7(home) cursor gets to the (before) first character
###### shift + 1(end) cursor gets to the (after) last character



###### 8. converting vanilla html&css to react.js: single responsibility, taking apart .html file into components so that every component has its own responsibility and now it is possible to focus on individual component to develop, every component is independent and we can choose not to use the component and the whole program won't be affected

###### 9. the extra 3 seconds I spend on code quality saves 3*N seconds when it comes to maintain the code on later stage

###### 10. How to write a nice code?
###### part 1: point: everything has its pros and cons, the extra 3 seconds I spend saves 3*N seconds for 1 reader to read, 3*N^2 seconds for N readers to read
###### part 2: evidence:

###### 11. 就近维护原则: 当我们维护component的html的时候我们应该可以就近维护component的css, 当我们就近维护component的css的时候我们可以就近维护component的html, 当我们就近维护Header的时候， Header里面的Logo应该被就近维护（Logo不能离得太远; Logo.js should also close to Logo.css, 一定要用文件夹处理组件层级的问题, component要独立出去自成一体（所有的elements都要具备包括html，css，js...）

###### 11-continue: ECMA added export { default } from './ThemeSwitcher'; to replace   import ThemeSwitcher from './ThemeSwitcher'   +  export default ThemeSwitcher

###### 11-continue: 在react component中直接在html里面写图片的路径(< img src="./assets/davin.png" alt="Davin Jiang" class="src" / >)是不能被Webpack识别的，必须import image from'./assets/image.png';  VirtualDom 只能识别javascript当import image from ’./image.png‘ 被webpack识别后image就是javascript的一个变量，而这个变量是能够被VirtualDom识别的，路径本身不能被virtualDom识别

###### 11-continue: react利用npm把依赖下载到本地并且用lock把版本锁起来了， 而vanilla html里面的有一些script，style是直接用网上的，不能锁版本，integrity不行, 尽管vanilla javascript的依赖也能下载但是不能一次性全部下载要一个一个下载

###### 11-continue: 以下代码中homepage__socialMedias下面有可能会含有其他的类型比如img，i，等等。所以为了maintainable，i里面加className来管理而不是选择器选i tag。
###### 什么时候给类名？      这个div下面不可能永远都是i有可能以后换成image
######       < div class="homepage__socialMedias" > 
######                   < i class="fab fa-twitter homepage__socialMediaItem" >< /i >
######                   < i class="fab fa-facebook-f homepage__socialMediaItem">< /i>
######                   < i class="fab fa-instagram homepage__socialMediaItem"></i >
######       < /div >

###### continue:  以下代码中homepage__contact本身就是一个table了，table本身就一定有td，我要针对table所有的td加样式, 这里的table里面基本固定用tr，td, 不太可能用其他的东西
######             < table class="homepage__contact">
######                < tr>
######                  < td>Age</td>
######                  < td>20</td>
######                < /tr>
######                < tr>
######                  < td>Residence</td>
######                  < td>Gaia</td>
######                < /tr>
######                < tr>
######                  < td>Address</td>
######                  < td>Level 3 / 57 Coronation Drive, Brisbane</td>
######                < /tr>
######                < tr>
######                  < td>Email</td>
######                  < td>
######                    < a href="mailto:info@jiangren.com.au">
######                      info@jiangren.com.au
######                    < /a>
######                  < /td>
######                < /tr>
######                < tr>
######                  < td>Phone</td>
######                  < td>+0123 123 456 789</td>
######                < /tr>
######             <  /table>

###### 所以给选择器更加maintainable, 更readable

###### .homepage__contact td {
######  padding: 4px 0;
###### }

###### .homepage__contact td:first-of-type {
######  padding-right: 42px;
###### }

###### .homepage__contact td:last-of-type {
######  color: #9e9e9e;
###### }



###### 12. React有re-render的机制（setState之后触发re-render），所以我request后拿到新的数据存入setState会自动的触发re-render（页面自动局部刷新了，而不是全局的刷新，只有react能做到，结合龙哥讲的react reconciliation）
###### https://reactjs.org/docs/reconciliation.html
###### 对比安卓开发的时候我只能用swipe或者button去刷新entire app，或者用类似set interval之类的函数但是很容易因为线程的问题导致app奔溃, react在这点上性能有优势
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

###### 14. Java里面有太多写好的library的函数的类型是固定的， 要求是String就不能融入其他的类型， void就不能return string

###### 15. Java里面声明一个数组 private String transactionIDs = "[89d80e40459623551e90c44d72a1895dbdd8f406c11c478f140c1dee5568b010" + "," + "589cfda31b427ab1dc4d0c352034913e7e7a8650a7014a9e2f7dfbcacb0b1e8f]"; 把transactionIDs放到request body里面去之后传到nodejs后端，nodejs用transactionIDs.split("")会解析成一个一个的string

###### const str = "[89d80e40459623551e90c44d72a1895dbdd8f406c11c478f140c1dee5568b010,589cfda31b427ab1dc4d0c352034913e7e7a8650a7014a9e2f7dfbcacb0b1e8f]";
###### const words = str.split('');
###### console.log(words);
######  Array ["[", "8", "9", "d", "8", "0", "e", "4", "0", "4", "5", "9", "6", "2", "3", "5", "5", "1", "e", "9", "0", "c", "4", "4", "d", "7", "2", "a", "1", "8", "9", "5", "d", "b", "d", "d", "8", "f", "4", "0", "6", "c", "1", "1", "c", "4", "7", "8", "f", "1", "4", "0", "c", "1", "d", "e", "e", "5", "5", "6", "8", "b", "0", "1", "0", ",", "5", "8", "9", "c", "f", "d", "a", "3", "1", "b", "4", "2", "7", "a", "b", "1", "d", "c", "4", "d", "0", "c", "3", "5", "2", "0", "3", "4", "9", "1", "3", "e", "7", "e", "7", "a", "8", "6", "5", "0", "a", "7", "0", "1", "4", "a", "9", "e", "2", "f", "7", "d", "f", "b", "c", "a", "c", "b", "0", "b", "1", "e", "8", "f", "]"]


###### 16. nodejs的json.parse（“12”）只接受纯数字
###### const json = "[89d80e40459623551e90c44d72a1895dbdd8f406c11c478f140c1dee5568b010,589cfda31b427ab1dc4d0c352034913e7e7a8650a7014a9e2f7dfbcacb0b1e8f]";
###### const obj = JSON.parse(json);
###### console.log(obj);
###### Error: Unexpected token d in JSON at position 2    不接受第二位的d字母



