//(1) Reading a file
const fs = require("fs");
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

//(2) Writing to a file
fs.writeFile("file.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("File saved!");
});

//(3) Creating a web server
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8070);

//(4) Creating a HTTP Request
const https = require("https");
https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

//(5) Promises
const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//(6) Async and Await
async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
myFunction();
