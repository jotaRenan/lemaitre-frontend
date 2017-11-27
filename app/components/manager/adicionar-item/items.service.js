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
    },
    // INSERT ITEM
    insertItem: function(item) {
      return $http({
        method: 'POST',
        url: `${apiEndpoint}/ItemCreate`,
        data: {
          nomItem: item.name,
          desItem: item.description,
          vlrPrice: item.price,
          isAvaliable: item.isAvailable, //backend has a typo
          seqCategory: item.category.id,
          seqSubcategory: item.category.subcategory.id
        },
      });
    },

    // SYNTAX SUGAAR
    itemJSONSyntaxSugar: function(badSyntax) {
      let item = {}, category = {};
      item.name = badSyntax.nomItem;
      item.id = badSyntax.codItem;
      item.description = badSyntax.desItem;
      item.isAvailable = badSyntax.isAvaliable;
      item.price = badSyntax.vlrPrice;
      item.quantity = badSyntax.qtdItem;
      category.id = badSyntax.seqCategory;
      category.subcategory = {};
      category.subcategory.id = badSyntax.seqSubcategory;
      item.category = category;
      return item;
    }
  };
}]);
