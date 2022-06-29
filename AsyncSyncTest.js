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

console.log("ok");
