import express, { response } from "express";

const CONTACTS = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const app = express();
// res = response. telling express server. if u get a request to the homepage, this is the response i want u to send back

// ':id' is a route paramater/
app.get("/api/contacts/:id", (request, response) => {
  console.log(request); // where does the log show up? Response.send show up on client end
  response.send("ok");
});

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

/*
if the contact is not found, we reutrn a 404  status code
404 means not found
otherwise, send back the found contact w a 200 status code
300 means the resource was found
*/

/*
if (!contact) {
  response.status(404).json({ message: "Contact not found" });
}
*/

app.put("/api/contacts/:id", (request, response) => {
  // Id that needs to be updated
  const { id } = request.params;
  const updatedContact = request.body; // find the contact that needs to be udpated
});

// use map to update the contact
// use map to iterate over the array. if it matches the map re
// if the contact I'd matches the I'd in the request, params, update it
// otherwise, return the original contact

const updatedContacts = CONTACTS.map((contact) => {
  if (contact.id === Number(id)) {
    return updatedContact;
  }

  return contact;
});

response.json(updatedContact); // send back the updated contact
