angular.module('leMaitre')
.factory('subcategoryManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  const subcategoryBaseURL = `${apiEndpoint}/webresources/subcategory`;

  return {
    retrieveSubcategoryItems: function(categoryID, subcategoryID) {
      return $http({
        method: 'GET',
        url: `${subcategoryBaseURL}/${categoryID}/${subcategoryID}`,
      });
    }
  };
}]);
