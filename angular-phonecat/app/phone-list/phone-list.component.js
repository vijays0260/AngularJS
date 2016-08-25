'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http,orderByFilter) {
      var self = this;
      self.currentPage = 0;
      self.pageSize=4;
      self.sortType     = 'year';
        self.sortType     = 'Under';
          self.sortType     = 'Above';
      self.sortReverse  = true;

      $http.get('phones/second1.json').then(function(response) {
        self.crime = response.data;
        self.pageCount=Math.ceil(self.crime.length/self.pageSize);

      self.remove = function remove(cr){
        		var index = self.crime.indexOf(cr);
        		if( index !== -1 ) {
        		self.crime.splice( index, 1 );
        	}
          self.pageCount=Math.ceil(self.crime.length/self.pageSize);
        };

        self.addData = function()
        {
	self.crime.push({ 'year':self.year, 'Under': self.Under, 'Above':self.Above });

  self.pageCount=Math.ceil(self.crime.length/self.pageSize);

};
      });

    }
  });
