module.exports = {
  objectToQueryString: function (obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
  }
}