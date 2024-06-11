

exports.getSolved = (data) => { 
    return {
      solved: data.matchedUser.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'All').count,
      submissions: data.matchedUser.submitStats.totalSubmissionNum,
      questions: data.allQuestionsCount.find(question => question.difficulty === 'All').count,
      solvedEasy: data.matchedUser.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'Easy').count,
      totalEasy: data.allQuestionsCount.find(question => question.difficulty === 'Easy').count,
      solvedMedium: data.matchedUser.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'Medium').count,
      totalMedium: data.allQuestionsCount.find(question => question.difficulty === 'Medium').count,
      solvedHard: data.matchedUser.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'Hard').count,
      totalHard: data.allQuestionsCount.find(question => question.difficulty === 'Hard').count,
    };
}


exports.getAccountInfo = (data) => {
    return {
        ranking: data.matchedUser.profile.ranking,
        reputation: data.matchedUser.profile.reputation,
        submissionCalendar: data.matchedUser.submissionCalendar,
        recentSubmissions: data.recentSubmissionList,
        matchedUserStats: data.matchedUser.submitStats
    };
}

// return raw output
exports.allData = (data) => {
    return data;
}