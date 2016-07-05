export class AboutUsController {
  constructor($log, AboutMembersRetriever, $firebaseObject) {
      var self = this;

      self.title = 'Members List';
      var ref = new Firebase("https://ng-nj.firebaseio.com/");

      self.memberlistsList = $firebaseObject(ref.child('users'))
      self.memberlistsList.$loaded().then(function (data) {

        self.pulledEvents = data;
        self.membersList = data;

        $log.log('got memebers! ' + self.membersList)

        angular.forEach(self.membersList, function (value, key) {
          $log.log("member: " + value.firstName + " " + key)
          self.currentUserSelected = value;

        })

      })

    }
}

AboutUsController.$inject = ['$log', 'AboutMembersRetriever', '$firebaseObject'];
