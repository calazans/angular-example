angular.module('componentesAngularApp')
  .controller('CalendarioCtrl', function ($scope,uiCalendarConfig) {

  var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();


    $scope.eventos=[
      {title:'Meu evento 1'},
      {title:'Meu evento 2'},
      {title:'Meu evento 3'}
    ];



   $scope.eventSources=[];

     $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];

   $scope.eventRender = function( event, element, view ) { 
       /* element.attr({'tooltip': event.title,
                     'tooltip-append-to-body': true});*/
        $compile(element)($scope);
    };

     $scope.dropCallback = function(event, ui) {
          console.log('hey, you dumped me :-(' , $scope.draggedTitle);
        };


    var eventoAuxiliar=[];
    var objetoAdicionado;
    var dataSelecionado;
        $scope.addEvento = function(){
          console.log('passou');          
          objetoAdicionado  = $scope.eventSources.splice(1,1);
          var  dataInicio = new Date();          
          dataInicio.setUTCDate(dataSelecionado._d.getDate()+1);
          dataInicio.setUTCMonth(dataSelecionado._d.getMonth());
          dataInicio.setUTCFullYear(dataSelecionado._d.getFullYear());
          dataInicio.setUTCHours(24);
          $scope.eventSources[0].push({title:objetoAdicionado[0].title,start:dataInicio,end:dataInicio,allDay:false});          
          
          uiCalendarConfig.calendars['myCalendar1'].fullCalendar('render');
          
        };


    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        ignoreTimezone: false,
        //timezone: 'America/Sao_Paulo',
        droppable: true,
         drop: function (date, allDay, jsEvent, ui) {
          console.log($scope.eventSources);
         
          
          dataSelecionado = date;
          eventoAuxiliar[0] = $scope.eventSources[0];

         
           uiCalendarConfig.calendars['myCalendar1'].fullCalendar('render');

        },
        header:{
         left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };

    $scope.eventSources = [$scope.events];


  });