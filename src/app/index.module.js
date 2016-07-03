/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import {LoginBar} from "../app/header/login-bar/login-bar.directive.js";
import {AuthenticationService} from "../app/shared-services/authentication.service";
import {Authentication} from "../app/shared-services/authentication";
import {AboutUsController} from "../app/routes/about-us/about-us.controller";
import {bannedUser} from "../app/routes/about-us/filters/banned-users.filter";
import {AboutMembersRetriever} from "../app/routes/about-us/services/about-members-retriever.service";
import {CodingController} from "../app/routes/coding/coding.controller";
import {EventsController} from "../app/routes/events/events.controller";
// import {NgEventFactory} from "../app/routes/events/services/event.factory";
import {ForgotPasswordController} from "../app/routes/forgot-password/forgot-password.controller";
import {LoginController} from "../app/routes/login/login.controller";
import {MyProfileController} from "../app/routes/my-profile/register.controller";
import {PrivacyController} from "../app/routes/privacy/privacy.controller";
import {RegisterController} from "../app/routes/register/register.controller";
import {TermsController} from "../app/routes/terms/terms.controller";
import {TweetsController} from "../app/routes/tweets/tweets.controller";

angular.module('ngNj15', ['firebase','ngMaterial','ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('FIREBASE_URL', 'https://ng-nj.firebaseio.com/')
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('loginBar', LoginBar)
  .controller('AboutUsController', AboutUsController)
  .filter('bannedUser', bannedUser)
  .service('AboutMembersRetriever', AboutMembersRetriever)
  .service('Authentication', Authentication)
  .controller('CodingController', CodingController)
  // .factory('NgEventFactory', NgEventFactory)
  .controller('EventsController', EventsController)
  .controller('ForgotPasswordController', ForgotPasswordController)
  .controller('LoginController', LoginController)
  .controller('MyProfileController', MyProfileController)
  .controller('PrivacyController', PrivacyController)
  .controller('RegisterController', RegisterController)
  .controller('TermsController', TermsController)
  .controller('TweetsController', TweetsController)
  .service('AuthenticationService', AuthenticationService)


  // .service('AuthenticationService', AuthenticationService);
