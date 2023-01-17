import express from "express";

const app = express();
// res = response. telling express server. if u get a request to the homepage, this is the response i want u to send back
app.get("/", (_, res) => {
  response.send("<h1>Hello World</h1>");
});

app.post("/api/Contacts", (request, response) => {
  cacheconsole.log(request.body);
  response.send("ok");
}
// the underscore is a placeholder. we dont need to use it. we just need to tell express that we are expecting a request and a response
app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
