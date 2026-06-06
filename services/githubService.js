const axios = require("axios");
const profileModel = require("../models/profileModel");

const analyzeGithubUser = async (username) => {
  const userResponse = await axios.get(
    `https://api.github.com/users/${username}`
  );

  const reposResponse = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  const user = userResponse.data;
  const repos = reposResponse.data;

  let totalStars = 0;
  let mostStarredRepo = "None";
  let maxStars = 0;

  const languageCount = {};

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count;

    if (repo.stargazers_count > maxStars) {
      maxStars = repo.stargazers_count;
      mostStarredRepo = repo.name;
    }

    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  let topLanguage = "Unknown";
  let maxLanguageCount = 0;

  for (const language in languageCount) {
    if (languageCount[language] > maxLanguageCount) {
      maxLanguageCount = languageCount[language];
      topLanguage = language;
    }
  }

  const profileScore =
    user.followers * 2 +
    user.public_repos +
    totalStars;

  let developerLevel;

  if (profileScore >= 1000) {
    developerLevel = "Advanced";
  } else if (profileScore >= 200) {
    developerLevel = "Intermediate";
  } else {
    developerLevel = "Beginner";
  }

  const profileData = {
    username: user.login,
    name: user.name,
    bio: user.bio,

    followers: user.followers,
    following: user.following,

    publicRepos: user.public_repos,

    topLanguage,

    languageBreakdown: languageCount,

    mostStarredRepo,

    maxStars,

    totalStars,

    profileScore,

    developerLevel,

    profileUrl: user.html_url,

    avatarUrl: user.avatar_url,

    accountCreated: user.created_at
      .replace("T", " ")
      .replace("Z", ""),
  };

  await profileModel.saveProfile(profileData);

  return profileData;
};

module.exports = {
  analyzeGithubUser,
};