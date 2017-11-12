var mongodb = require(./db);

function User(user){
  this.name = user.name;
  this.password = user.password;
  this.email = user.email.
}
module.exports = User;

User.prototype.save = function(callback){
  var user = {
    name: this.name,
    password: this.password,
    email: this.email
  }
}

mongodb.open(function(err,db){
  if(err){
    return callback(err);
  }
  db.collection('user',function(){
    if(err){
      mongode.close();
    }
  })
});