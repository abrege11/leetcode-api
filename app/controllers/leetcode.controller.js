const { getSolved, getAccountInfo, allData } = require("../middlewares/leetcode.middleware.js");
const { mainUserQuery, questionOfDayQuery, publicUserProfileQuery } = require("../../models/leetcode.model.js");

// retrieve all recent leetcode data by username 
exports.getDataByUsername = async (req, res) => {
  const user = req.params.userId;
  const dataByUserName = mainUserQuery();
  // establish connection and parse body given username
  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: dataByUserName, variables: { username: user } }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}


exports.getQuestionOfDay = async (req, res) => {
  const insertQuery = questionOfDayQuery();

  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: insertQuery, variables: {} }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}

// retrieve all recent leetcode data by username 
exports.getPublicUserInfo = async (req, res) => {
  const user = req.params.userId;
  const publicInfo = publicUserProfileQuery();
  // establish connection and parse body given username
  fetch('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: publicInfo, variables: { username: user } }),
  })
    .then(result => {
      if (!result.ok) {
        throw new Error(`Network response was not ok: ${result.statusText}`);
      }
      return result.json();
    })
    .then(data => {
      // send errors if they exist
      if (data.errors) {
        return res.status(400).send(data);
      }
      // send desired response
      res.status(200).send(data.data);
    })
    // error catch
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send({ error: 'Internal Server Error', details: err.message });
    });
}