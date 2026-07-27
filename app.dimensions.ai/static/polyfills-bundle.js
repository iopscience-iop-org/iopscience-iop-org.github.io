!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "700323e1-6ccc-41a0-81c5-08a57621a5dc"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-700323e1-6ccc-41a0-81c5-08a57621a5dc"));
  } catch (e) {}
})(),
  (function () {
    "use strict";
    function e(e) {
      const n = history[e];
      history[e] = function (...t) {
        const d = n.apply(this, t),
          o = new Event(e.toLowerCase());
        return window.dispatchEvent(o), d;
      };
    }
    window.addEventListener("unload", () => {}),
      e("pushState"),
      e("replaceState");
  })();
