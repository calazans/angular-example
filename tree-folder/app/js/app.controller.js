(function(){
    'use strict';

    angular
        .module('appCore')
        .controller('ControllerCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl(){
        var vm = this;
        
        init();

        function init(){
            vm.nome="Foi";
        }

    }

}());