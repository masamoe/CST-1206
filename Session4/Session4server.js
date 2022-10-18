// Importing http module from node.js to our project
const http = require("http");
const PORT = 5000;

// Create a server 
const server = http.createServer((request, response) => {
    response.setHeader('Content-type', "text/html");

    if (request.url === "/") {
        // Setting headers to text and html so the browser knows what
        // kind of response i will recieve

        // We are sending a response to the client/browser using response.write
        response.write("<h1>Hello, thank you for contacting me! </h1>")

        // Ending the response
        response.end();
    }

    if (request.url === "/user") {
        // Setting headers to text and html so the browser knows what
        // kind of response i will recieve

        // We are sending a response to the client/browser using response.write
        response.write("<h1>Hello User! </h1>")

        // Ending the response
        response.end();
    }

    if (request.url === "/dog") {
      // Setting headers to text and html so the browser knows what
      // kind of response i will recieve

      // We are sending a response to the client/browser using response.write
      response.write("<h1>WOOF!</h1><br><img src='https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80' alt=''>");

      // Ending the response
      response.end();
    }

    if (request.url === "/cat") {
      // Setting headers to text and html so the browser knows what
      // kind of response i will recieve

      // We are sending a response to the client/browser using response.write
      response.write("<h1>MEOW!</h1><br><img src='https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80' alt=''>");

      // Ending the response
      response.end();
    }
})

// Listen a server
server.listen(PORT, () => {
    console.log("My Server is running on port", PORT);
})