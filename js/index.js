var config = {
  apiKey: "AIzaSyDmaOpC67Mh29_hXAFp0iNV1gQ5HxD-mns",
  authDomain: "yumeibackend.firebaseapp.com",
  databaseURL: "https://yumeibackend.firebaseio.com",
  projectId: "yumeibackend",
  storageBucket: "",
  messagingSenderId: "698593728514"
};
// Initialize the default app
var defaultApp = firebase.initializeApp(config);


var app = angular.module('Capstone', []);
app.controller('CapstoneController', function($scope) {
  var self = this;
  self.init = function(){
    var promise = firebase.database().ref('/capstone/teammember').once('value')
    promise = promise.then(function(snapshot) {
      console.log(snapshot.val())
      self.team = snapshot.val();
      $scope.$apply();
    });

    promise = firebase.database().ref('/capstone/methods').once('value')
    promise = promise.then(function(snapshot) {
      console.log(snapshot.val())
      self.methods = snapshot.val();
      $scope.$apply();
    });
  }

  self.submitFollowup = function(){
    var id = self.guidGenerator()
    defaultApp.database().ref('capstone/methods/' + id).set({
      title: "Competitive Analysis",
      description: "See How Others Are Doing",
      toggle_id : "portfolioModal6",
      detail : "We conducted a competitive analysis by comparing Study Island to 7 other similar products using anal- ysis criteria based on 12 e-Learning principles. From our competitive analysis, we see opportunities for improving Study Island, which also contribute to our ideation. ",
      image : "competitive_big.png",
    });
    alert("your followup has been saved!!")
  }

  self.guidGenerator =  function(){
    var S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  self.writeUserData = function(userName, Question, isPoster, description) {

  }

  self.init();
});
