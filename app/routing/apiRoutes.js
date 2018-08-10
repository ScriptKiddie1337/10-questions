
var friendsData = require("../data/friends.js");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    console.log(friendsData);
    
  });

  

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
  for (var i = 0; i < friendsData.length; i++) {
    res.json(friendsData[i].scores); 
  }
  });

};

//come up with a way to get all the scores of the people and set that to a new variable
//You'll have to get 1 score from each person (from the array of scores)
//Then you'll compare the scores to the next closed one.
//Then you will put them together to validate as the closest match
//Need a variable between the difference of the two scores
//You'll need a variable that sets up the person's match
//set a new variable that will set the friendsArray objects