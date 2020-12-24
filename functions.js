
const functions = {
  isNull: function () {
    return null;
  },
  checkValue: function (x) {
    return x;
  },
  createUser: function () {
    const user = {
      firstName: 'Brad'
    };
    user['lastName'] = 'Traversy';
    return user;
  }
};

//hier functies als objects toevoegen
module.exports = {
  functions
}