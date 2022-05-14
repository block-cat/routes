import ForumApplication from 'flarum/forum/ForumApplication';
import Application from 'flarum/common/Application';
import { extend, override } from 'flarum/extend';
import changePaths from './settings/changePaths';
import ModalManager from 'flarum/common/components/ModalManager';
import AlertManager from 'flarum/common/components/AlertManager';
import Drawer from 'flarum/common/utils/Drawer';
import mapRoutes from 'flarum/common/utils/mapRoutes';
import ScrollListener from 'flarum/common/utils/ScrollListener';
import liveHumanTimes from 'flarum/common/utils/liveHumanTimes';

app.initializers.add('block-cat/routes', () => {
  // override(Application.prototype, 'mount', function(original) {
  //   this.routes['discussion'].path = '/articol/:id';
  //   this.routes['discussion.near'].path = '/articol/:id/:near';
  //   // this.routes['settings'].path = '/setari';
  //   // console.log(arguments);


  //   // An object with a callable view property is used in order to pass arguments to the component; see https://mithril.js.org/mount.html
  //   m.mount(document.getElementById('modal'), { view: () => ModalManager.component({ state: this.modal }) });
  //   m.mount(document.getElementById('alerts'), { view: () => AlertManager.component({ state: this.alerts }) });

  //   this.drawer = new Drawer();

  //   m.route(document.getElementById('content'), arguments[1] + '/', mapRoutes(this.routes, arguments[1]));

  //   // Add a class to the body which indicates that the page has been scrolled
  //   // down. When this happens, we'll add classes to the header and app body
  //   // which will set the navbar's position to fixed. We don't want to always
  //   // have it fixed, as that could overlap with custom headers.
  //   const scrollListener = new ScrollListener((top) => {
  //     const $app = $('#app');
  //     const offset = $app.offset().top;

  //     $app.toggleClass('affix', top >= offset).toggleClass('scrolled', top > offset);
  //     $('.App-header').toggleClass('navbar-fixed-top', top >= offset);
  //   });

  //   scrollListener.start();
  //   scrollListener.update();

  //   $(() => {
  //     $('body').addClass('ontouchstart' in window ? 'touch' : 'no-touch');
  //   });

  //   liveHumanTimes();
  // });

  // console.log(Application);
  changePaths();
});
