import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';
import isExtensionEnabled from 'flarum/utils/isExtensionEnabled';
import Alert from 'flarum/common/components/Alert';

export default class DefaultSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    // get routes name in Object format
    this.routes = JSON.parse(app.data.settings["block-cat.default_routes"]);

    // is used when data is saving
    this.loading = false;
    // is used to check modification
    this.modified = false;

    this.sameValue = {};
  }

  content() {
    return (
      // standard containers on extensions page
      m('.ExtensionPage-settings', [
        m('.container', [
          // insert all in form tag
          m('Form', {
            // onsubmit action call onsubmit method
            onsubmit: this.onsubmit.bind(this),
          }, [
            m('.Routes', [ // Start Routes
              m('label', app.translator.trans('block-cat-default.admin.routes.title')),
              Object.keys(this.routes).map((key) => {
                // hide flags input if extension is disable
                if (key === 'flags' && !isExtensionEnabled('flarum-flags')) {
                  return;
                }
                // hide following input if extension is disable
                if (key === 'following' && !isExtensionEnabled('flarum-subscriptions')) {
                  return;
                }
                // hide tag inputs if extension is disable
                if ((key === 'tag' || key === 'tags') && !isExtensionEnabled('flarum-tags')) {
                  return;
                }
                // hide mentions input if extension is disable
                if (key === 'user.mentions' && !isExtensionEnabled('flarum-mentions')) {
                  return;
                }
                // hide uploads input if extension is disable
                if (key === 'user.uploads' && !isExtensionEnabled('fof-upload')) {
                  return;
                }

                // render another routes
                return m('.Form-group', [
                  m('label', app.translator.trans('block-cat-default.admin.routes.route_label', { route: key })),
                  m('.helpText', app.translator.trans(`block-cat-default.admin.routes.${key}`)),
                  m('.Default-Routes-Field', {
                    className: (this.routes[key].path ? 'Default-Routes-Field--with-value' : ''),
                    title: key,
                  }, [
                    m('.Default-Routes-Field-Wrap', [
                      m('input.FormControl.Default-Routes-Input', {
                        type: 'text',
                        value: this.routes[key].path,
                        pattern: this.routes[key].regex,
                        oninput: (e) => {
                          if (e.target.value !== "") {
                            if (e.target.value.match(e.target.pattern) !== null) {
                              e.target.style.borderColor = "green";
                            } else {
                              e.target.style.borderColor = "red";
                            }
                          } else {
                            $(e.target).removeAttr("style");
                          }
                          this.routes[key].path = e.target.value;
                          this.modified = true;
                        },
                        onfocusout: (e) => {
                          $(e.target).removeAttr("style");
                        },
                        onfocus: (e) => {
                          if (e.target.value !== "") {
                            if (e.target.value.match(e.target.pattern) !== null) {
                              e.target.style.borderColor = "green";
                            } else {
                              e.target.style.borderColor = "red";
                            }
                          }
                        },
                      }),
                      m('.Default-Routes-Placeholder', [
                        m('span.Default-Routes-Placeholder-Hint', app.translator.trans('block-cat-default.admin.routes.hint')),
                        ' ',
                        m('span', this.routes[key].placeholder)
                      ])
                    ])
                  ]),
                ])
              }),
            ]), // End Routes
            // save button
            Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary',
                loading: this.loading,
                disabled: !this.modified,
              },
              app.translator.trans('core.admin.edit_header.submit_button')
            ),
          ]),
        ])
      ])
    );
  }

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    let k = 0;

    Object.keys(this.routes).map((key1) => {
      Object.keys(this.routes).map((key2) => {
        if (this.routes[key1].path !== "") {
          if (key1 !== key2 && this.routes[key1].path === this.routes[key2].path) {
            $('.Default-Routes-Field[title="' + key1 + '"] > div > input').css("border-color", "red");
            k++;
          }
        }
      });
    });
    
    if (k > 0) {
      app.alerts.show(
        Alert,
        {
          type: "error"
        },
        app.translator.trans('block-cat-default.admin.routes.same_value')
      );

      this.loading = false;
      this.modified = false;

      return;
    }

    try {
      saveSettings({
        ["block-cat.default_routes"]: JSON.stringify(this.routes),
      });
      app.alerts.show(
        Alert,
        {
          type: "success"
        },
        app.translator.trans('core.admin.settings.saved_message')
      );
    } catch {
      app.alerts.show(
        Alert,
        {
          type: "error"
        },
        app.translator.trans('core.lib.error.generic_message')
      );
    } finally {
      this.routes = JSON.parse(app.data.settings["block-cat.default_routes"]);
      this.loading = false;
      this.modified = false;
    }
  }
}