
export class EventsController {
  constructor($log, $firebaseObject) {
      var self = this;
      self.upcomingEvents = [];

      getUpcomingEvents();

      function getUpcomingEvents() {

        $log.log("getting events");

        var ref = new Firebase("https://ng-nj.firebaseio.com/");
        self.pulledEvents = $firebaseObject(ref.child('events'));

        self.pulledEvents.$loaded().then(function (data) {
          angular.forEach(self.pulledEvents, function (value, key) {

            // var event = new NgEventFactory;
            // $log.log("locationName: " + value.locationName);
            // event.title = key;
            // event.date = value.date;
            // event.startTime = value.startTime;
            // event.endTime = value.endTime;
            // event.locationName = value.locationName;
            // event.location = value.location;
            // event.locationDetails = value.cost;
            // event.cost = value.cost;
            // event.eventLink = value.eventLink;
            // event.hoster = value.hoster;
            //
            //
            // self.upcomingEvents.push(event);


          })


        });

        $log.log("data is : " + self.pulledEvents);

        var hackathons = self.pulledEvents['hackathons'];
        $log.log("hackathon is : " + hackathons);
        $log.log("data is : " + self.pulledEvents.$value);

        var hackathons = self.pulledEvents.events;
        $log.log("hack: " + hackathons);


      }


    }
}

EventsController.$inject = ['$log', '$firebaseObject'];
