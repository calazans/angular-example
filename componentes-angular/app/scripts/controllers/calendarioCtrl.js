angular.module('componentesAngularApp')
  .controller('CalendarioCtrl', function ($scope) {

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

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        droppable: true,
         drop: function (date, allDay, jsEvent, ui) {
          console.log($scope.eventSources);
         // $scope.eventSources[0].push({title:ui.helper.context.outerText,start:date,allDay:true});
          //console.log(ui.helper.context);
          console.log($scope.eventSources[0]);
          
          console.log(uiCalendarConfig.calendars);
          //$scope.myCalendar1.fullCalendar('render');
          //uiCalendarConfig.calendars['myCalendar1'].fullCalendar('render');
        },
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        }
      },
      eventRender: $scope.eventRender
    };

    $scope.eventSources = [$scope.events];


  });