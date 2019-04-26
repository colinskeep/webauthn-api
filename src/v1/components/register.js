const userModel = require('../models/user.js');

/**
 * @param {string} name - user name
 * @param {string} displayName - user displayName
 * @param {string} challenge - user challenge
 * @return {string}
*/
async function log(name, displayName, challenge) {
  try {
    const results = await userModel({name, displayName, challenge}).save();
    return results;
  } catch (err) {
    return (`logger log. ${err}`);
  }
}

module.exports = {
  log,
};
