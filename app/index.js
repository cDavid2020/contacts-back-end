import express from "express";

const app = express();
// res = response. telling express server. if u get a request to the homepage, this is the response i want u to send back

app.get("/", (_, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/about", (_, response) => {
  response.send("<h1>about page</h1>");
});

// Express.js uses 'middleware' to parse the body of a request
// this is required to access the body of  POST request
app.use(express.json());

app.post("/api/contacts", (request, response) => {
  console.log(request.body);
  response.send("ok");
});
// the underscore is a placeholder. we dont need to use it. we just need to tell express that we are expecting a request and a response
app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
