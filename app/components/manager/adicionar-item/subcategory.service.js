angular.module('leMaitre')
.factory('subcategoryManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  const subcategoryBaseURL = `${apiEndpoint}/webresources/subcategory`;

  return {
    retrieveSubcategoryItems: function(categoryID, subcategoryID) {
      return $http({
        method: 'GET',
        url: `${subcategoryBaseURL}/${categoryID}/${subcategoryID}`,
      });
    },
    //sugarSyntax
    subcategoryJSONSyntaxSugar: function(badSyntax) {
      let subcategory = {};
      subcategory.name = badSyntax.nomSubcategory;
      subcategory.id = badSyntax.seqCategory;
      return subcategory;
    }
  };
}]);
