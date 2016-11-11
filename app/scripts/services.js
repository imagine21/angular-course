'use strict';

angular.module('confusionApp')

        .constant("baseURL","http://localhost:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

            this.getDishes = function(){
                return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
            };
                //var promise = $http.get(baseURL+"dishes");
                //return promise;
                // return $http.get(baseURL+"dishes");

            //this.getDish = function (index) {
                //return $http.get(baseURL+"dishes/"+index);
            //};
                // implement a function named getPromotion
                // that returns a selected promotion.
            
                this.getPromotion = function () {
                    return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
                    // return promotions[0];
                };
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var corpfac = {};

            corpfac.getLeaders = function () {
                return $resource(baseURL+"leadership",null,  {'update':{method:'PUT' }});
                //return leadership;
            };

            corpfac.getLeader = function () {
                return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
                //return leadership[index];
            };

            return corpfac;
        }])

        .service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            this.getFeedbackResource = function() {
                return $resource(baseURL + "feedback", null, {'update': {method: 'POST'}});
            };


        }]);
