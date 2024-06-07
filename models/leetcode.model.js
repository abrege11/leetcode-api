
exports.query = (user) => {
  const query = `
  query getUserProfile($username: "{user}") {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser("{user}") {
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
    recentSubmissionList("{user}") {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
      __typename
    }
    matchedUserStats: matchedUser("{user}") {
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
}