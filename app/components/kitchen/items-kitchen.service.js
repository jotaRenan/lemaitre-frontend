angular.module('leMaitre-kitchen')
.factory('itemManagementFactory', ['$http', 'apiEndpoint', function($http, apiEndpoint){
  const itemBaseURL = `${apiEndpoint}/webresources/item`;
  return {
    // SYNTAX SUGAAR
    itemJSONSyntaxSugar: function(badSyntax) {
      let item = {}, category = {};
      item.name = badSyntax.nomItem;
      item.id = badSyntax.codItem;
      item.description = badSyntax.desItem;
      item.isAvailable = badSyntax.isAvaliable;
      item.price = badSyntax.vlrPrice;
      category.id = badSyntax.seqCategory;
      category.subcategory = {};
      category.subcategory.id = badSyntax.seqSubcategory;
      item.category = category;
      return item;
    },

    reverseJSONSyntaxSugar: function(item) {
      let badSyntax = {};
      badSyntax.nomItem = item.name;
      badSyntax.codItem = item.id;
      badSyntax.desItem = item.description;
      badSyntax.idtAvailable = item.isAvailable;
      return badSyntax;
    }
  };
}]);
