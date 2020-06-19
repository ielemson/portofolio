const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const eduObj = require('./education.json')
const expObj = require('./experience.json')
const blogObj = require('./blog.json')
app.get('/api/education', (req, res) => {
  res.json(eduObj);
});
app.get('/api/experience', (req, res) => {
  res.json(expObj);
});
app.get('/api/blogs', (req, res) => {
  res.json(blogObj);
});

const port = 3002;

app.listen(port, () => `Server running on port ${port}`);