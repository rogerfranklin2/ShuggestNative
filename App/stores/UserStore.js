var alt = require('../alt');
var UserActions = require('../actions/UserActions');

class UserStore {
  constructor() {
    this.res = [];

    this.bindListeners({
      handleLogin: UserActions.HANDLE_LOGIN
    });
  }

  handleLogin(res) {
    this.res = res;
  }
}

module.exports = alt.createStore(UserStore, 'UserStore');