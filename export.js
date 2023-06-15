module.exports = function user() {
  this.username = null;
  this.set_name = (fullname) => (this.username = fullname);
  this.get_name = () => this.username;
};
