const db = require("../config/db");

const saveProfile = async (profile) => {
  const query = `
INSERT INTO github_profiles (
  username,
  name,
  bio,
  public_repos,
  followers,
  following,
  account_created,
  profile_url,
  avatar_url,
  top_language,
  language_breakdown,
  most_starred_repo,
  max_stars,
  total_stars,
  profile_score,
  developer_level
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

ON DUPLICATE KEY UPDATE
name = VALUES(name),
bio = VALUES(bio),
public_repos = VALUES(public_repos),
followers = VALUES(followers),
following = VALUES(following),
account_created = VALUES(account_created),
profile_url = VALUES(profile_url),
avatar_url = VALUES(avatar_url),
top_language = VALUES(top_language),
language_breakdown = VALUES(language_breakdown),
most_starred_repo = VALUES(most_starred_repo),
max_stars = VALUES(max_stars),
total_stars = VALUES(total_stars),
profile_score = VALUES(profile_score),
developer_level = VALUES(developer_level)
`;

  const values = [
    profile.username,
    profile.name,
    profile.bio,
    profile.publicRepos,
    profile.followers,
    profile.following,
    profile.accountCreated,
    profile.profileUrl,
    profile.avatarUrl,
    profile.topLanguage,

    JSON.stringify(profile.languageBreakdown),

    profile.mostStarredRepo,
    profile.maxStars,

    profile.totalStars,

    profile.profileScore,
    profile.developerLevel,
  ];

  const [result] = await db.execute(query, values);

  return result;
};

const getAllProfiles = async () => {
  const [rows] = await db.execute(
    "SELECT * FROM github_profiles"
  );

  return rows;
};

const getProfileByUsername = async (username) => {
  const [rows] = await db.execute(
    "SELECT * FROM github_profiles WHERE username = ?",
    [username]
  );

  return rows[0];
};

const getTopDevelopers = async () => {
  const [rows] = await db.execute(`
    SELECT *
    FROM github_profiles
    ORDER BY profile_score DESC
    LIMIT 10
  `);

  return rows;
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getProfileByUsername,
  getTopDevelopers,
};