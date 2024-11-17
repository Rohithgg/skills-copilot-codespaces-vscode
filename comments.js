// create a web server
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred on the server. Please try again later.');
    } else {
      res.send(data);
    }
  });
});

app.post('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred on the server. Please try again later.');
    } else {
      const comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('An error occurred on the server. Please try again later.');
        } else {
          res.send(comments);
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
// In this example, we have created a simple web server that listens on port 3000. When a GET request is made to /comments, the server reads the contents of comments.json and sends it back to the client. When a POST request is made to /comments, the server reads the contents of comments.json, appends the new comment to the array, and writes the updated array back to comments.json.

// To test the server, you can use a tool like Postman to make GET and POST requests to the server. When you make a POST request to /comments with a JSON object in the body, the server should respond with the updated array of comments.

// Note: This is a simple example and is not suitable for production use. In a production environment, you should add error handling, input validation, and security measures to protect against common web security vulnerabilities. For example, you should sanitize user input to