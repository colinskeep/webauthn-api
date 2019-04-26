const registerLog = require('../components/register.js');
const getRandomValues = require('get-random-values');
/**
 * Function to execute when endpoint reached
 * @param {string} req - incoming request
 * @param {string} res - outgoing response
 */
async function postRegister(req, res) {
  try {
    const name = req.body.name;
    const displayName = req.body.displayName;
    let challenge = new Uint8Array(32);
    challenge = getRandomValues(challenge);
    if (name) {
      const results = await registerLog.log(name, displayName, challenge);
      res.status(200).json({
        'challenge': results.challenge,
        'rpName': 'Ozark, LLC',
        'userId': results._id,
      });
    }
  } catch (err) {
    res.status(400);
  }
}

module.exports = {
  postRegister,
};
