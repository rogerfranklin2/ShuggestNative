var alt = require('../alt');

class UserActions {
  HandleLogin(res) {
    this.dispatch(res);
  }
}

module.exports = alt.createActions(UserActions);