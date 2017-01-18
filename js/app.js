var app = angular.module('myApp',[]);

//this is a controller, with a service called myKicks
app.controller('MainCtrl',  function (myKicks) {

  //project this
  vm = this;

  vm.displayname = "Shawn";

  vm.sneakers = myKicks.getMyShoes();
  vm.addShoes = function(newShoes){

   

    myKicks.addShoes(newShoes);

    console.log("Here are my new kicks " + newShoes.Name)

  }

   vm.removeShoes = function(shoes){
      myKicks.removeShoe(shoes);
      console.log("calling remove form the controller")
    }

});

//this is the end of the controller

//this is our service
app.service('myKicks', function() {
  //our data which contains our sneakers
  this.collection =   [{
  "Brand": "Nike",
  "Model": "Jordan",
  "Name": "The Way I am",
  "Price": "21,000.00"
}, {
  "Brand": "Nike",
  "Model": "Jordan1",
  "Name": "Banned",
  "Price": "800.00"
}, {
  "Brand": "Nike",
  "Model": "Jordan6",
  "Name": "Infred",
  "Price": "300.00"
}]
//this function is returning sneakers to the the controller 
    this.getMyShoes = function () {
        return this.collection;
    }

    this.addShoes = function(Shoes){
      this.collection.push(Shoes);
      return this.collection;
    }

    this.removeShoe = function(Shoes){
      var myfind = this.collection.indexOf(Shoes)
      this.collection.splice(myfind,1)
      console.log("Remove These Shoes " +Shoes.Name )
    }
});
