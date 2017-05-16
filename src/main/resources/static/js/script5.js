angular.module('FilterInControllerModule', []).
  controller('FilterController', ['filterFilter', function(filterFilter) {
    this.array = [
      {name: 'asnowwolf'},
      {name: 'why520crazy'},
      {name: 'joe'},
      {name: 'ckken'},
      {name: 'lightma'},
      {name: 'FrankyYang'}
    ];
    this.filteredArray = filterFilter(this.array, 'a');
  }])