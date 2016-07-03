export class AboutMembersRetriever {
  constructor($log, $firebaseArray, $q) {
      var self = this;
      self.members = [];

      $log.log("Started AboutMembersRetriever");

      self.getMembers = function () {
        var defered = $q.defer();

        var ref = new Firebase("https://ng-nj.firebaseio.com/users");

        self.pulledEvents = $firebaseArray(ref)
        self.pulledEvents.$loaded().then(function (data) {
          $log.log("in loaded " + JSON.stringify(data));

          self.pulledEvents = data;
          self.membersList = data;

          defered.resolve(data);
        });


        return defered.promise;
      }
    }

}

AboutMembersRetriever.$inject = ['$log', '$firebaseArray', '$q'];
