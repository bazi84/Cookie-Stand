'use strict';

const storePlace = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

const seattleStore = {
 place: 'Seattle',
 min: 23,
 max: 65,
 avg: 6.3,
 outcome: '',
getCustPerHour: function() {
  this.custPerHour = randomCustPerHour(1-12) + 'hour'
  console.log(this.custPerHour);
  console.long ('bazi')

  },

  randomCustPerHour: function (a, b) {
    let custPerHour = Math.floor(Math.random() * (b - a) +a);
    return custPerHour;
  
  }
}
seattleStore.getCustPerHour;

const tokyoStore = {
  place: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  outcome: '',
  getCustPerHour: function(min, max) {
    
    return Math.random() * (this.max - this.min) + this.min;
  },

  getCookieSoldHourly: function(){

    return this.getCustPerHour*this.avg;
  }

}
const dubaiStore = {
  place: 'Dubai',
  min: 11,
  max: 38,
  avg: 23,
  outcome: '',

  getCustPerHour: function(min, max) {

    return Math.random() * (this.max - this.min) + this.min;
  },

  getCookieSoldHourly: function(){

    return this.getCustPerHour*this.avg;
  }

}
const parisStore = {
  place: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  outcome: '',

  getCustPerHour: function(min, max) {

    return Math.random() * (this.max - this.min) +this.min;
  },

  getCookieSoldHourly: function(){

    return this.getCustPerHour*this.avg;
  }
}
const limaStore = {
  place: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  outcome: '',

  getCustPerHour: function(min, max) {

   return Math.random() * (this.max - this.min) + this.min;
  },

  getCookieSoldHourly: function(){

    return this.getCustPerHour*this.avg;
  }

}
