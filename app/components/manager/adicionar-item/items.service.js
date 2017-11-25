angular.module('leMaitre')
.factory('itemManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  const itemBaseURL = `${apiEndpoint}/webresources/item`;
  const itemImageBaseURL = `${itemBaseURL}Image`;
  return {
    // RETRIEVES ALL ITEMS
    retrieveAllItems: function() {
      return $http({
        method: 'GET',
        url: `${itemBaseURL}`
      });
    },
    // RETRIEVES ITEM BY ID
    retrieveItem: function(itemID) {
      return $http({
        method: 'GET',
        url: `${itemBaseURL}/${itemID}`,
      });
    },
    // DELETES ITEM BY ID
    deleteItem: function(itemID) {
      return $http({
        method: 'DELETE',
        url: `${itemBaseURL}/${itemID}`,
      });
    },
    // RETRIEVES ITEM'S IMAGES BY ITS ID
    retrieveItemImages: function(itemID) {
      return $http({
        method: 'GET',
        url: `${itemImageBaseURL}/${itemID}`,
      });
    }
  };
}]);
