/**
 * Created by bobolicious3000 on 4/2/16.
 */
export class NgEventFactory {
  constructor() {

      function NgEventFactory() {
        var self = this;

        self.title = "";
        self.date = "";
        self.startTime = "";
        self.endTime = "";
        self.locationName = "";
        self.location = "";
        self.locationDetails = "";
        self.cost = "";
        self.eventLink = "";

        self.something = "";

      }

      NgEventFactory.prototype.doSomething = function () {
        self.something = "something has been done.";
      };

      return NgEventFactory;
    }

}
