const { formatData, allData} = require("../middlewares/leetcode.middleware.js");
//const { query } = require("../../models/leetcode.model.js");

const query = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      contributions {
        points
      }
      profile {
        reputation
        ranking
      }
      submissionCalendar
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
    recentSubmissionList(username: $username) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
      __typename
    }
    matchedUserStats: matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
          __typename
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
          __typename
        }
        __typename
      }
    }
  }
`;


exports.getDataByUsername = async (req, res) => {
    const user = req.params.userId;
    fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com'
        }, 
        body: JSON.stringify({query: query, variables: { username: user }}),
    
    })
    .then(result => result.json())
    .then(data => {
      if(data.errors){
        res.send(data);
      } else {
        res.send(allData(data.data));
      }
    })
    .catch(err=>{
        console.error('Error', err);
        res.send(err);
    });
}