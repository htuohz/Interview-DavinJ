var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open(
  "GET",
  "http://localhost:9984/api/v1/metadata?search=dev77",
  false
); // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
  console.log("data");
}

// const axios = require("axios").default;
// const tester = async () => {
//   try {
//     const { data } = await axios.get(
//       "http://localhost:9984/api/v1/metadata?search=dev77"
//     );
//     console.log(data);
//     console.log("data");
//   } catch (error) {
//     console.log(error);
//   }
// };

// tester();

// const axios = require("axios").default;
// const tester = async () => {
//   try {
//     const { data } = axios.get(
//       "http://localhost:9984/api/v1/metadata?search=dev77"
//     );   不加await的话下一行的console log （“data”）会在axios.get执行开始之后就开始执行，不会等axios.get执行完成, async函数scope里的所有内容都是分身在执行,不会有阻塞问题
//     console.log(data);
//     console.log("data");
//   } catch (error) {
//     console.log(error);
//   }
// };

// tester();

console.log("ok");


