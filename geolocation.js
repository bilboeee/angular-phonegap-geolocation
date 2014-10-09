/*
 * angular-phonegap-geolocation v0.0.2
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 * https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
 */

'use strict';

angular.module('btford.phonegap.geolocation', ['btford.phonegap.ready']).
  factory('geolocation', function ($rootScope, phonegapReady) {
    return {
      getCurrentPosition: phonegapReady(function (onSuccess, onError, options) {
        navigator.geolocation.getCurrentPosition(function () {
          var that = this,
            args = arguments;

          if (onSuccess) {
            $rootScope.$apply(function () {
              onSuccess.apply(that, args);
            });
          }
        }, function () {
          var that = this,
            args = arguments;

          if (onError) {
            $rootScope.$apply(function () {
              onError.apply(that, args);
            });
          }
        },
        options);
      }),

      watchPosition: phonegapReady(function (onSuccess, onError, options) {
        navigator.geolocation.watchPosition(function () {
          var that = this,
            args = arguments;

          if (onSuccess) {
            $rootScope.$apply(function () {
              onSuccess.apply(that, args);
            });
          }
        }, function () {
          var that = this,
            args = arguments;

          if (onError) {
            $rootScope.$apply(function () {
              onError.apply(that, args);
            });
          }
        },
        options);
      }),

      clearWatch: phonegapReady( function(watchID){
        navigator.geolocation.clearWatch( watchID );
      })

    };
  });
