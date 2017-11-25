angular.module('leMaitre')
.factory('categoryManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  const categoryBaseURL = `${apiEndpoint}/webresources/category`;

  return {
    // RETRIEVES ALL CATEGORIES
    retrieveCategories: function() {
      return $http({
        method: 'GET',
        url: `${categoryBaseURL}`
      });
    },
    // RETRIEVES CATEGORY BY ID
    retrieveCategory: function(categoryID) {
      return $http({
        method: 'GET',
        url: `${categoryBaseURL}/${categoryID}`,
      });
    },
    // DELETES CATEGORY BY ID
    deleteItem: function(categoryID) {
      return $http({
        method: 'DELETE',
        url: `${categoryBaseURL}/${categoryID}`,
      });
    },
    // RETRIEVES ALL ITEMS FROM A GIVEN CATEGORY
    getItemsFromCategory: function(categoryID) {
      return $http({
        method: 'GET',
        url: `${categoryBaseURL}/${categoryID}/items`,
      });
    },
    // RETRIEVES ALL SUBCATEGORIES GIVEN A CATEGORY
    getSubcategoriesFromCategory: function(categoryID) {
      return $http({
        method: 'GET',
        url: `${categoryBaseURL}/subcategories/${categoryID}`,
      });
    },

    categoryJSONSyntaxSugar: function(badSyntax) {
      let category = {};
      category.name = badSyntax.nomCategory;
      category.id = badSyntax.seqCategory;
      category.subcategories = [];
      return category;
    }
  };
}]);
