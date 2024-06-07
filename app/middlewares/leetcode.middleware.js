
exports.formatData = (data) => {
    const userProfile = data.matchedUser;
    return {
      totalSolved: userProfile.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'All').count,
      totalSubmissions: userProfile.submitStats.totalSubmissionNum,
      totalQuestions: data.allQuestionsCount.find(question => question.difficulty === 'All').count,
      easySolved: userProfile.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'Easy').count,
      totalEasy: data.allQuestionsCount.find(question => question.difficulty === 'Easy').count,
      mediumSolved: userProfile.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'Medium').count,
      totalMedium: data.allQuestionsCount.find(question => question.difficulty === 'Medium').count,
      hardSolved: userProfile.submitStats.acSubmissionNum.find(stats => stats.difficulty === 'Hard').count,
      totalHard: data.allQuestionsCount.find(question => question.difficulty === 'Hard').count,
      ranking: userProfile.profile.ranking,
      contributionPoint: userProfile.contributions.points,
      reputation: userProfile.profile.reputation,
      submissionCalendar: JSON.parse(userProfile.submissionCalendar),
      recentSubmissions: data.recentSubmissionList,
      matchedUserStats: userProfile.submitStats
    };
}

exports.allData = (data) => {
    return data;
}