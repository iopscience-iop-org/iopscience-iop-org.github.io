"use strict";
(self.figshareJsonp = self.figshareJsonp || []).push([
  [5482],
  {
    15482: (e, n, t) => {
      t.r(n), t.d(n, { default: () => g }), t(85858);
      var i = t(69554),
        o = t(85072),
        r = t.n(o),
        d = t(61862);
      r()(d.A, { insert: "head", singleton: !1 });
      const l = d.A.locals || {};
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      function s(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function u(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(t), !0).forEach(function (n) {
                f(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function f(e, n, t) {
        return (
          (n = _(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function _(e) {
        var n = (function (e) {
          if ("object" != c(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var t = n.call(e, "string");
            if ("object" != c(t)) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == c(n) ? n : n + "";
      }
      function w() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (w = function () {
          return !!e;
        })();
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      function a(e, n) {
        return (
          (a = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, n) {
                return (e.__proto__ = n), e;
              }),
          a(e, n)
        );
      }
      var g = (function (e) {
        function n(e) {
          return (
            (function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            (function (e, n, t) {
              return (
                (n = m(n)),
                (function (e, n) {
                  if (n && ("object" == c(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e);
                })(
                  e,
                  w()
                    ? Reflect.construct(n, t || [], m(e).constructor)
                    : n.apply(e, t)
                )
              );
            })(this, n, [
              u(u({}, e), {}, { name: "filesViewerGeneric", theme: l }),
            ])
          );
        }
        return (
          (function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              n && a(e, n);
          })(n, e),
          (t = n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t;
      })(i.A);
    },
    61862: (e, n, t) => {
      t.d(n, { A: () => r });
      var i = t(76314),
        o = t.n(i)()(function (e) {
          return e[1];
        });
      o.push([
        e.id,
        ".frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES {\n  position: relative;\n  background: #62422b;\n  border: 1px solid #ddd;\n  color: #fff;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES:hover {\n  background: #ac703d;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES[disabled] {\n  background: #bbb;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__primaryIconButton--IP2jh {\n  padding: 0;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev {\n  position: relative;\n  background: #fff;\n  border: 1px solid #ddd;\n  color: #62422b;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev:hover {\n  color: #ac703d;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev[disabled] {\n  background: #eee;\n  color: #999;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__secondaryIconButton--oPU3V {\n  padding: 0;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj {\n  position: relative;\n  color: #62422b;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj:hover {\n  color: #ac703d;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_toggleListButton--S6tD6 {\n  border-color: #62422b;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_toggleListButton--S6tD6:hover {\n  border-color: #ac703d;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_closeOverlayButton--P5vPZ {\n  border-color: #62422b;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_closeOverlayButton--P5vPZ:hover {\n  border-color: #ac703d;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_downloadButton_desktop--mgmlM {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_downloadButton_mobile--Kk0iK {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__inlineMode_prevFileButton--fz5IU {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__inlineMode_nextFileButton--u2nbK {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__inlineMode_toggleListButton--JFSVF {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__inlineMode_enlargeButton--emsBo {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__inlineMode_shareButton--YrMKy {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__inlineMode_downloadButton--5ykHk {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__fileListScreen_viewButton--ksNmF {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__fileListScreen_downloadButton--kejiB {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__downloadScreen_downloadButton--cA8EI {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__shareScreen_citeButton--EUh-k {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__citationScreen_doiLink--N31Pd {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__citationScreen_backButton--wVL72 {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__citationSelector_triggerButton--qrTtd {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__citationSelector_itemButton--uerg\\+ {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__citationSelector_backButton--O9FL- {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__citationSelector_searchButton--vgJWb {\n}\n.frontend-widgets-filesViewerGeneric-theme-module__fileDescription--pASc1 .fs-toggle button {\n  color: #62422b;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__fileDescription--pASc1 .fs-toggle button:hover {\n  color: #ac703d;\n}\n.frontend-widgets-filesViewerGeneric-theme-module__skipButton--DO9UR {\n}\n",
        "",
      ]),
        (o.locals = {
          primaryButton:
            "frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          primaryIconButton:
            "frontend-widgets-filesViewerGeneric-theme-module__primaryIconButton--IP2jh frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          secondaryButton:
            "frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev",
          secondaryIconButton:
            "frontend-widgets-filesViewerGeneric-theme-module__secondaryIconButton--oPU3V frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          iconButton:
            "frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          enlargedMode_toggleListButton:
            "frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_toggleListButton--S6tD6 frontend-widgets-filesViewerGeneric-theme-module__primaryIconButton--IP2jh frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          enlargedMode_closeOverlayButton:
            "frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_closeOverlayButton--P5vPZ frontend-widgets-filesViewerGeneric-theme-module__primaryIconButton--IP2jh frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          enlargedMode_downloadButton_desktop:
            "frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_downloadButton_desktop--mgmlM frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          enlargedMode_downloadButton_mobile:
            "frontend-widgets-filesViewerGeneric-theme-module__enlargedMode_downloadButton_mobile--Kk0iK frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          inlineMode_prevFileButton:
            "frontend-widgets-filesViewerGeneric-theme-module__inlineMode_prevFileButton--fz5IU frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev",
          inlineMode_nextFileButton:
            "frontend-widgets-filesViewerGeneric-theme-module__inlineMode_nextFileButton--u2nbK frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev",
          inlineMode_toggleListButton:
            "frontend-widgets-filesViewerGeneric-theme-module__inlineMode_toggleListButton--JFSVF frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev",
          inlineMode_enlargeButton:
            "frontend-widgets-filesViewerGeneric-theme-module__inlineMode_enlargeButton--emsBo frontend-widgets-filesViewerGeneric-theme-module__primaryIconButton--IP2jh frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          inlineMode_shareButton:
            "frontend-widgets-filesViewerGeneric-theme-module__inlineMode_shareButton--YrMKy frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev",
          inlineMode_downloadButton:
            "frontend-widgets-filesViewerGeneric-theme-module__inlineMode_downloadButton--5ykHk frontend-widgets-filesViewerGeneric-theme-module__primaryButton--wriES",
          fileListScreen_viewButton:
            "frontend-widgets-filesViewerGeneric-theme-module__fileListScreen_viewButton--ksNmF frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          fileListScreen_downloadButton:
            "frontend-widgets-filesViewerGeneric-theme-module__fileListScreen_downloadButton--kejiB frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          downloadScreen_downloadButton:
            "frontend-widgets-filesViewerGeneric-theme-module__downloadScreen_downloadButton--cA8EI frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          shareScreen_citeButton:
            "frontend-widgets-filesViewerGeneric-theme-module__shareScreen_citeButton--EUh-k frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev",
          citationScreen_doiLink:
            "frontend-widgets-filesViewerGeneric-theme-module__citationScreen_doiLink--N31Pd frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          citationScreen_backButton:
            "frontend-widgets-filesViewerGeneric-theme-module__citationScreen_backButton--wVL72 frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          citationSelector_triggerButton:
            "frontend-widgets-filesViewerGeneric-theme-module__citationSelector_triggerButton--qrTtd frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          citationSelector_itemButton:
            "frontend-widgets-filesViewerGeneric-theme-module__citationSelector_itemButton--uerg+ frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          citationSelector_backButton:
            "frontend-widgets-filesViewerGeneric-theme-module__citationSelector_backButton--O9FL- frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          citationSelector_searchButton:
            "frontend-widgets-filesViewerGeneric-theme-module__citationSelector_searchButton--vgJWb frontend-widgets-filesViewerGeneric-theme-module__iconButton--LMkyj",
          fileDescription:
            "frontend-widgets-filesViewerGeneric-theme-module__fileDescription--pASc1",
          skipButton:
            "frontend-widgets-filesViewerGeneric-theme-module__skipButton--DO9UR frontend-widgets-filesViewerGeneric-theme-module__secondaryButton--wc-Ev",
        });
      const r = o;
    },
  },
]);
