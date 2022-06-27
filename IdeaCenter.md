# Idea Center:

###### 0. During Australian holidays and shopping peak time(boxing day, black Friday Market), ANZ (Australian IT's leader) only aims to handle 100,000  customer requests per second (100,000 cocurrent per second). Australia (AfterPay) barely handles 4 millions cocurrent. Alibaba(1 billions cocurrent per second).  So, Australia does not focus on algorithms much, and does not care theory much, Working Life Balance. Australia likes a person who is obedient, and code elegantly. write codes that others can easily handle. Australian want to hire a person who can improve their working life balance and code productively.

###### 过程正确大于结果正确

###### continue: 如果做个体户，又做产品，又做developer可以只注重界面(UI+功能)的fancy但是， 求职做developer，不会关心产品的好与坏，developer只关心开发(code quality + developer coodination through coding)的好与坏

###### As a developer, thinking is a must and always doubt the (declarative/component based) RMR of the code

###### imperative is like a Chinese restaurant chief, he has his unique cooking style, which is really unique;
###### declarative is like a KFC/MacDonald staff, he follows the company standard to cook; uniform style, 无论是什么人，写声明式编程的时候大方向是一样的，就带来了maintainable和reusable的提升

###### 命令式编程 eg:   
###### function changeNavItem() {
######    var className = 'navbar__item--active';

######    if (previous) {
######      var previousNavItem = document.querySelector('[href="'+ previous +'"]');
######      previousNavItem.classList.remove(className);
######   }

######    var navItem = document.querySelector('[href="'+ current +'"]');
######    navItem.classList.add(className); 
######  }
###### }

###### 声明式编程 eg:
###### < a className={`navbar__item ${activePage === page ? 'navbar__item--active' : '' }` }
###### note: 不要用短路计算在className里面因为当结果为false, false will be converted into "false" `${false}` ==> 'false'; 那么className里面会多出现一个false eg: navbar__item false  
###### 反过来说，要是用了classnames这个库，那么就这个false会自动被清除掉

###### 声明式编程利用了大量的library封装好的功能我只要调用一下然后凭凑一下就可以实现我的需求，它没有那么自由，我也不需要自由调节， 而命令式编程很自由，而我又没有这个能力在自由的规则下开发出需求

###### 当时想了这个问题, 但是没有质疑这个问题, 当时没有成为杠精, 想到一种写法(就是要用这个方法写)就去google， stackover flow， copy别人的代码

###### debug用二分法binary search, for example： p1页面不工作了，先去html，css操作加上或减去class name，发现工作了，那就是javascript写错了, 显示／隐藏一个页面用添加／删除class name更readable，maintainable，而不是javascript加上display：none，用class name具象化了这个功能

###### 1. why we can put html elements in javascript?
######  .JSX (if we use eslint airbnb, the .JS would no longer be valid when run the program)
###### .JSX: recognises < as html elememts until /> while { as javascript until }
###### react renders virtialDom so that customised (React) Component start with uppercase eg: "< App >Hello World< /App > and built-in (vanilla) html elememts remain in lowwercase eg: < div >Hello World< /div >
###### 通过javascript的语法来实现html的readable，maintainable，reusable, 我们可以通过JavaScript的语法（eg: scope）让css也变得高级

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

######  vscode convert to upper case or lower case or title case
######  Select the text to transform. Use Ctrl + L to selected the whole line
######  Open Show all commands. Linux and Windows: Ctrl + Shift + P, Mac: ⇧⌘P
######  Type in the command, e.g. lower, upper, title
######  Wait for auto-complete (like in the animation)
######  Hit Enter



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


###### 12 javascript里面的html不是实时更新的, 结合c语言里面的 while(true) {..//}  （见assignment1－Davin）
###### 12 const activePageState = useState('HomePage'); activePageState[1] 是真正发动／触发re－render的部分; activePageState[1] (newValue); activePageState[0] (initValue)初始值
###### - continue: activePageState[1]     (setState)      不仅能触发re－render而且能把activePageState[0]的值通过箭头函数 (value)=>{[...value, newValue]} 来操作, 相当于coClick/onCheck会自动带一个event进箭头函数(event)=>{console.log(event)}
###### 12 -continue:. React有re-render的机制（setState之后触发re-render），所以我request后拿到新的数据存入setState会自动的触发re-render（页面自动局部刷新了，而不是全局的刷新，只有react能做到，结合龙哥讲的react reconciliation）
###### https://reactjs.org/docs/reconciliation.html
###### 对比安卓开发的时候我只能用swipe或者button去刷新entire app，或者JAVA用类似set interval之类的函数(如下example)但是很容易因为线程的问题导致app奔溃, react在这点上性能有优势
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

###### 12 -contuniue： 无论是C语言的while loop还是react的无限axios触发机制，还是ES6的setinterval，还是JAVA的那个类似于setinterval的机制, 都是为了让整个应用程序动起来（不然的话应用程序是无法重复执行一个命令的，程序语言执行一次后就completed了，react渲染页面后更改入参是不会重新渲染的(我们只能看到DOM被渲染的一瞬间的内容)，android开发的Java也一样不会重新渲染（以verfication button为例， 当textView更改为duplicated的时候那个verification button要点第二次才能发动patch的okhttp请求），c语言执行一次后就不动了），解决实时更新的问题， 硬件更多是自动更新的需求（收集数据，执行命令），而web一般是一些手动更新的需求（如用户手动button点击）和自动更新的需求（如更新list）

###### 12 -continue: JAVA的那个类似于setinterval的机制:
###### //        long SECOND_IN_MILLI = 200000; //20 seconds
###### //        final Handler timerHandler = new Handler();
###### //        final Runnable timerRunnable = new Runnable() {
###### //            @Override
###### //            public void run() {
###### //                displayStockList();
###### //                myUpdateOperation();
###### //                timerHandler.postDelayed(this, SECOND_IN_MILLI);
###### //            }
###### //        };
###### //        timerHandler.postDelayed(timerRunnable, SECOND_IN_MILLI);

###### 12 -continue: 
###### 猜想：threejs也是只渲染一次的，但是这一次把所有的情况比如
######         lightScale = d3.scaleLinear().domain(d3.extent(lights)).range(['#262626','#FFFFFF']);
######         tempScale = d3.scaleLinear().domain(d3.extent(temps)).range(['#00B0F0','#FF0000']);
###### 都包含在内了，因此， json/url json的数据的改变使得页面发生的变换都是早就渲染好的，而不是重新渲染

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

###### 17. map and for loops difference:
###### chars = ['Hello' , 'world!!!'] ;
######  var retVal = chars.forEach(function(word){
######    console.log("Saving to db: " + word) 
######  })
######  console.log(retVal) //undefined

######  chars = ['Hello' , 'world!!!'] ;
######  var lengths = chars.map(function(word){
######    return word.length
######  }) 
######  console.log(lengths) //[5,8]
###### map does exactly the same thing as what the for loop does, except that map creates a new array with the result of calling a provided function on every element in the calling array.

###### 18. component在app下面的Content里面并且与Content有千丝万缕的联系, 这种components叫做业务components
###### 那种非常generic的又要时常被别的developer拿去用的component是放在shared 文件夹下面（shared component）

###### 19. scope: 我们可以通过JavaScript的语法（eg: scope）让css也变得高级 (eg: import styles from './Timeline.css';)
###### !!important: 
###### a. import "./Navigation.css";               import整个css文件进来;         css仍然在同一个scope, 怕重名
###### b. import styles from "./Timeline.module.css";    import as an Object;         有且仅当< div className=｛styles.wrapper｝>的时候, css在不同的scope, 不怕重名
###### 因为就算重名了后不同的scope会有不同的后缀名字 eg: Timeline_wrapper__q5rLW
###### import styles from "./Timeline.module.css";     css文件中间必须写.module. 因为用的create－react－app;  
###### module前面的文字（eg: Timeline）会自动变成className的前缀; 所以加上本体名字和scope后缀就变成了Timeline_wrapper__q5rLW
###### javascript做了2件事情：第一件事就是上述的改名字; 第二件事就是把compile之后的html添加class="Timeline_wrapper__q5rLW", compile之后的css添加对应样式
######  (.Timeline_wrapper__q5rLW {
######   margin-top:0px
######  })
###### 这种写法叫css module（css在js中的实现）通过JavaScript解决css的全局性和scoping问题
###### 与之对应的更readable的写法叫styled component

###### styled component可以直接在target js文件写或者在当前目录另起一个js文件写，然后target js文件import所有的const变量，但是target js里写更符合就近维护的法则
###### 就近维护: 因为在这里,我们动了css就要动html，我们动了html就要动css
###### 分开写的话另起的那个js文件名要为primitive.js
###### styled component: 渲染到页面后class的名字会变成一个hash值


######    case names:
###### 	  1. camelCase
######    2. PascalCase
######    3. snake_case
######    4. kebab-case
######    5. UPPERCASE (or SCREAMCASE)

###### 20. React Synthetic Event:
###### https://reactjs.org/docs/events.html
###### 在react的元素上去捕捉很多合成事件
###### for example, Mouse Event:
###### onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
###### onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
###### onMouseMove onMouseOut onMouseOver onMouseUp

###### Why cannot we use (< button onClick={() => {this.state.activePage = 'ResumePage';}} >) directly?
###### because it cannot trigger re-render
###### we should use this.setState({activePage: 'ActivePage'});
###### useState(); 为空就是 undefined

###### setActivity({...activity, ...{[name]: value}}中的 {[name]: value}}
###### https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4
###### const key = 'Mickey Mouse'
###### const value = 'Happy'
###### const disneyCharacter = {
######  [key]: value,
###### }
###### console.log(disneyCharacter) ==> {Mickey Mouse: 'Happy'}
###### In Javascript, when you create an object literal {} and you wrap the object’s key in array brackets [key] you can dynamically set that key.


###### 合并更新（只有react class component有，react hook不存在这个问题): 
###### eg, this.state = {
###### loading: true,
###### name: 'Alice',
###### };

###### this.setState = { loading: false}
###### 结果为: { loading: false, name: 'Alice' } (class component能自动合并更新的那一小部分到整体的state)


###### 21. 开发前先把UI design用physically的方法想好，再考虑component业务逻辑(该component的责任是什么), 再开发静态页面(如果遇到复用性问题或者copy paste组件, 就需要多抽出来一个组件变成shared component, shared component应该已经是最小组件，不应该再调用其他的shared component进来), 再deal with屏幕适配问题,再开始弄数据流design(state in 最近共同parent component, 写状态的时候永远不要考虑RMR的平衡而是从 当前/最近 开始写 然后直接无脑的找nearest common parent component), 再反向数据流

###### 开发静态页面: 要不要拆出去做shared component的一个决策点在于 以后对此shared component再开发的话是否要在所有的调用处都做修改，如果是的话维护成本过大，就不需要shared component，如果调用处无需修改  则拆出去做shared component

###### 如果半途加入项目，接受开发到一半的项目，那么就针对新接手的任务范围去执行上述方法，绝对不能顾全局

###### component取名字考虑的点:
###### 从复用角度出发的component
###### 从业务逻辑出发的component
###### 不需要其他的context的帮助，component的名字必须要能描述自己
###### *** 屏幕适配问题永远在做好第一版之后考虑


###### 22. 以下代码中Attributes已经超过了1项责任（除了加一点styling的责任，还要渲染一个Divider） 所以超出了single responsibility，所以Attributes要拆出来作为单独的一个folder而不是仅仅只是一个标签

###### const Attributes = styled.div`
######   display: flex;
######   justify-content: center;
######   margin-top: 1rem;
######  `;

###### const Divider = styled.div`
######   width: 2px;
######   background: rgba(255, 255, 255, 0.7);
######   margin: 0 1.5rem;
######  `;

######      < Attributes>
######        < Attribute name="HUMIDITY" data="71%" />
######        < Divider />
######        < Attribute name="WIND" data="7 K/M" />
######      < /Attributes>


###### ***当责任大于一项的时候就自成一体
###### p2的UI上面的cityName多了一条横线， 下面的cityName有190px的width，所以2个cityName都超过了1个责任, 而且相互的责任不存在包含关系, 就拆出来各自为政,这个不算copy／past


###### ** 23. 以下代码中verifyToken会把unkownPoint覆盖掉 (以下代码是在index.js里面)
###### const unkownPoint = require('./unkownPoint);
###### const verifyToken = require('./tokenAuth');

###### module.exports = unkownPoint;
###### module.exports = verifyToken;

###### 所以要把引入的变量用Object包起来:
###### const unkownPoint = require('./unkownPoint);
###### const verifyToken = require('./tokenAuth');
###### module.exports = { unkownPoint, verifyToken };

###### 在app.js引入时候用 const { unkownPoint, verifyToken } = require('./src/middleware/error');


###### 24. 不是所有的时候都是把责任丢给shared component做，eg：P2 的这个Temperature的shared component在涉及到右边的margin－right的时候并不是在shared component里面加入可以调节margin的代码，而是在调用temperature的那个组件里面用styled－component复写掉（给Temperature增添额外的样式）原来的Temperature:
###### const styledTemperature = styled(Temperature)` font-size: 1rem; margin-right:1.25rem ` 
###### 把不可预测的或者特别复杂的责任全部集中在shared component只会在后面的CICD中增加maintaince的难度, 这时候反而是拆出去各自为政的比较容易maintain



###### 25. //当一个container紧挨着另外一个container的时候, margin left
###### const Container = styled.div`
######  text-align: center;
######  & ~ & {
######    margin-left: 2rem;
######  }
###### ` ;


###### 26. *** react里面如果涉及到一个call back function里面包含了另外一个call back function的话, 会有sync call back之类的错误
###### 比如把event从一个call back传入内嵌的另外一个call back,会有synthetic event的错误, 所以要把event声明弄在第二个callback的外面确保第二个call back与第一个call back使用同一个event








