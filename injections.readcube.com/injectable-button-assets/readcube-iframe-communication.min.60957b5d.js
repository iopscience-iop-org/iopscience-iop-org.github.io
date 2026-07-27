!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("readcube-iframe-communication", [], e)
    : "object" == typeof exports
    ? (exports["readcube-iframe-communication"] = e())
    : (t["readcube-iframe-communication"] = e());
})(self, () =>
  (() => {
    "use strict";
    var t = {
        509: (t, e, r) => {
          var n = r(9985),
            o = r(3691),
            i = TypeError;
          t.exports = function (t) {
            if (n(t)) return t;
            throw new i(o(t) + " is not a function");
          };
        },
        5027: (t, e, r) => {
          var n = r(8999),
            o = String,
            i = TypeError;
          t.exports = function (t) {
            if (n(t)) return t;
            throw new i(o(t) + " is not an object");
          };
        },
        6648: (t, e, r) => {
          var n = r(8844),
            o = n({}.toString),
            i = n("".slice);
          t.exports = function (t) {
            return i(o(t), 8, -1);
          };
        },
        926: (t, e, r) => {
          var n = r(3043),
            o = r(9985),
            i = r(6648),
            u = r(4201)("toStringTag"),
            c = Object,
            a =
              "Arguments" ===
              i(
                (function () {
                  return arguments;
                })()
              );
          t.exports = n
            ? i
            : function (t) {
                var e, r, n;
                return void 0 === t
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" ==
                    typeof (r = (function (t, e) {
                      try {
                        return t[e];
                      } catch (t) {}
                    })((e = c(t)), u))
                  ? r
                  : a
                  ? i(e)
                  : "Object" === (n = i(e)) && o(e.callee)
                  ? "Arguments"
                  : n;
              };
        },
        5773: (t, e, r) => {
          var n = r(7697),
            o = r(2560),
            i = r(5684);
          t.exports = n
            ? function (t, e, r) {
                return o.f(t, e, i(1, r));
              }
            : function (t, e, r) {
                return (t[e] = r), t;
              };
        },
        5684: (t) => {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        1880: (t, e, r) => {
          var n = r(9985),
            o = r(2560),
            i = r(8702),
            u = r(5014);
          t.exports = function (t, e, r, c) {
            c || (c = {});
            var a = c.enumerable,
              s = void 0 !== c.name ? c.name : e;
            if ((n(r) && i(r, s, c), c.global)) a ? (t[e] = r) : u(e, r);
            else {
              try {
                c.unsafe ? t[e] && (a = !0) : delete t[e];
              } catch (t) {}
              a
                ? (t[e] = r)
                : o.f(t, e, {
                    value: r,
                    enumerable: !1,
                    configurable: !c.nonConfigurable,
                    writable: !c.nonWritable,
                  });
            }
            return t;
          };
        },
        5014: (t, e, r) => {
          var n = r(1087),
            o = Object.defineProperty;
          t.exports = function (t, e) {
            try {
              o(n, t, { value: e, configurable: !0, writable: !0 });
            } catch (r) {
              n[t] = e;
            }
            return e;
          };
        },
        7697: (t, e, r) => {
          var n = r(3689);
          t.exports = !n(function () {
            return (
              7 !==
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        6420: (t, e, r) => {
          var n = r(1087),
            o = r(8999),
            i = n.document,
            u = o(i) && o(i.createElement);
          t.exports = function (t) {
            return u ? i.createElement(t) : {};
          };
        },
        8017: (t, e, r) => {
          var n = r(1087).navigator,
            o = n && n.userAgent;
          t.exports = o ? String(o) : "";
        },
        1352: (t, e, r) => {
          var n,
            o,
            i = r(1087),
            u = r(8017),
            c = i.process,
            a = i.Deno,
            s = (c && c.versions) || (a && a.version),
            f = s && s.v8;
          f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
            !o &&
              u &&
              (!(n = u.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
              (n = u.match(/Chrome\/(\d+)/)) &&
              (o = +n[1]),
            (t.exports = o);
        },
        3689: (t) => {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        7215: (t, e, r) => {
          var n = r(3689);
          t.exports = !n(function () {
            var t = function () {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype");
          });
        },
        2615: (t, e, r) => {
          var n = r(7215),
            o = Function.prototype.call;
          t.exports = n
            ? o.bind(o)
            : function () {
                return o.apply(o, arguments);
              };
        },
        1236: (t, e, r) => {
          var n = r(7697),
            o = r(6812),
            i = Function.prototype,
            u = n && Object.getOwnPropertyDescriptor,
            c = o(i, "name"),
            a = c && "something" === function () {}.name,
            s = c && (!n || (n && u(i, "name").configurable));
          t.exports = { EXISTS: c, PROPER: a, CONFIGURABLE: s };
        },
        8844: (t, e, r) => {
          var n = r(7215),
            o = Function.prototype,
            i = o.call,
            u = n && o.bind.bind(i, i);
          t.exports = n
            ? u
            : function (t) {
                return function () {
                  return i.apply(t, arguments);
                };
              };
        },
        6058: (t, e, r) => {
          var n = r(1087),
            o = r(9985),
            i = function (t) {
              return o(t) ? t : void 0;
            };
          t.exports = function (t, e) {
            return arguments.length < 2 ? i(n[t]) : n[t] && n[t][e];
          };
        },
        4849: (t, e, r) => {
          var n = r(509),
            o = r(981);
          t.exports = function (t, e) {
            var r = t[e];
            return o(r) ? void 0 : n(r);
          };
        },
        1087: function (t, e, r) {
          var n = function (t) {
            return t && t.Math === Math && t;
          };
          t.exports =
            n("object" == typeof globalThis && globalThis) ||
            n("object" == typeof window && window) ||
            n("object" == typeof self && self) ||
            n("object" == typeof r.g && r.g) ||
            n("object" == typeof this && this) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        6812: (t, e, r) => {
          var n = r(8844),
            o = r(690),
            i = n({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (t, e) {
              return i(o(t), e);
            };
        },
        7248: (t) => {
          t.exports = {};
        },
        8506: (t, e, r) => {
          var n = r(7697),
            o = r(3689),
            i = r(6420);
          t.exports =
            !n &&
            !o(function () {
              return (
                7 !==
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        6738: (t, e, r) => {
          var n = r(8844),
            o = r(9985),
            i = r(4091),
            u = n(Function.toString);
          o(i.inspectSource) ||
            (i.inspectSource = function (t) {
              return u(t);
            }),
            (t.exports = i.inspectSource);
        },
        618: (t, e, r) => {
          var n,
            o,
            i,
            u = r(9834),
            c = r(1087),
            a = r(8999),
            s = r(5773),
            f = r(6812),
            l = r(4091),
            p = r(2713),
            v = r(7248),
            h = "Object already initialized",
            d = c.TypeError,
            y = c.WeakMap;
          if (u || l.state) {
            var g = l.state || (l.state = new y());
            (g.get = g.get),
              (g.has = g.has),
              (g.set = g.set),
              (n = function (t, e) {
                if (g.has(t)) throw new d(h);
                return (e.facade = t), g.set(t, e), e;
              }),
              (o = function (t) {
                return g.get(t) || {};
              }),
              (i = function (t) {
                return g.has(t);
              });
          } else {
            var b = p("state");
            (v[b] = !0),
              (n = function (t, e) {
                if (f(t, b)) throw new d(h);
                return (e.facade = t), s(t, b, e), e;
              }),
              (o = function (t) {
                return f(t, b) ? t[b] : {};
              }),
              (i = function (t) {
                return f(t, b);
              });
          }
          t.exports = {
            set: n,
            get: o,
            has: i,
            enforce: function (t) {
              return i(t) ? o(t) : n(t, {});
            },
            getterFor: function (t) {
              return function (e) {
                var r;
                if (!a(e) || (r = o(e)).type !== t)
                  throw new d("Incompatible receiver, " + t + " required");
                return r;
              };
            },
          };
        },
        9985: (t) => {
          var e = "object" == typeof document && document.all;
          t.exports =
            void 0 === e && void 0 !== e
              ? function (t) {
                  return "function" == typeof t || t === e;
                }
              : function (t) {
                  return "function" == typeof t;
                };
        },
        981: (t) => {
          t.exports = function (t) {
            return null == t;
          };
        },
        8999: (t, e, r) => {
          var n = r(9985);
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : n(t);
          };
        },
        3931: (t) => {
          t.exports = !1;
        },
        734: (t, e, r) => {
          var n = r(6058),
            o = r(9985),
            i = r(3622),
            u = r(9525),
            c = Object;
          t.exports = u
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                var e = n("Symbol");
                return o(e) && i(e.prototype, c(t));
              };
        },
        8702: (t, e, r) => {
          var n = r(8844),
            o = r(3689),
            i = r(9985),
            u = r(6812),
            c = r(7697),
            a = r(1236).CONFIGURABLE,
            s = r(6738),
            f = r(618),
            l = f.enforce,
            p = f.get,
            v = String,
            h = Object.defineProperty,
            d = n("".slice),
            y = n("".replace),
            g = n([].join),
            b =
              c &&
              !o(function () {
                return 8 !== h(function () {}, "length", { value: 8 }).length;
              }),
            m = String(String).split("String"),
            w = (t.exports = function (t, e, r) {
              "Symbol(" === d(v(e), 0, 7) &&
                (e = "[" + y(v(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
                r && r.getter && (e = "get " + e),
                r && r.setter && (e = "set " + e),
                (!u(t, "name") || (a && t.name !== e)) &&
                  (c
                    ? h(t, "name", { value: e, configurable: !0 })
                    : (t.name = e)),
                b &&
                  r &&
                  u(r, "arity") &&
                  t.length !== r.arity &&
                  h(t, "length", { value: r.arity });
              try {
                r && u(r, "constructor") && r.constructor
                  ? c && h(t, "prototype", { writable: !1 })
                  : t.prototype && (t.prototype = void 0);
              } catch (t) {}
              var n = l(t);
              return (
                u(n, "source") ||
                  (n.source = g(m, "string" == typeof e ? e : "")),
                t
              );
            });
          Function.prototype.toString = w(function () {
            return (i(this) && p(this).source) || s(this);
          }, "toString");
        },
        2560: (t, e, r) => {
          var n = r(7697),
            o = r(8506),
            i = r(5648),
            u = r(5027),
            c = r(8360),
            a = TypeError,
            s = Object.defineProperty,
            f = Object.getOwnPropertyDescriptor,
            l = "enumerable",
            p = "configurable",
            v = "writable";
          e.f = n
            ? i
              ? function (t, e, r) {
                  if (
                    (u(t),
                    (e = c(e)),
                    u(r),
                    "function" == typeof t &&
                      "prototype" === e &&
                      "value" in r &&
                      v in r &&
                      !r[v])
                  ) {
                    var n = f(t, e);
                    n &&
                      n[v] &&
                      ((t[e] = r.value),
                      (r = {
                        configurable: p in r ? r[p] : n[p],
                        enumerable: l in r ? r[l] : n[l],
                        writable: !1,
                      }));
                  }
                  return s(t, e, r);
                }
              : s
            : function (t, e, r) {
                if ((u(t), (e = c(e)), u(r), o))
                  try {
                    return s(t, e, r);
                  } catch (t) {}
                if ("get" in r || "set" in r)
                  throw new a("Accessors not supported");
                return "value" in r && (t[e] = r.value), t;
              };
        },
        3622: (t, e, r) => {
          var n = r(8844);
          t.exports = n({}.isPrototypeOf);
        },
        5073: (t, e, r) => {
          var n = r(3043),
            o = r(926);
          t.exports = n
            ? {}.toString
            : function () {
                return "[object " + o(this) + "]";
              };
        },
        5899: (t, e, r) => {
          var n = r(2615),
            o = r(9985),
            i = r(8999),
            u = TypeError;
          t.exports = function (t, e) {
            var r, c;
            if ("string" === e && o((r = t.toString)) && !i((c = n(r, t))))
              return c;
            if (o((r = t.valueOf)) && !i((c = n(r, t)))) return c;
            if ("string" !== e && o((r = t.toString)) && !i((c = n(r, t))))
              return c;
            throw new u("Can't convert object to primitive value");
          };
        },
        4684: (t, e, r) => {
          var n = r(981),
            o = TypeError;
          t.exports = function (t) {
            if (n(t)) throw new o("Can't call method on " + t);
            return t;
          };
        },
        2713: (t, e, r) => {
          var n = r(3430),
            o = r(4630),
            i = n("keys");
          t.exports = function (t) {
            return i[t] || (i[t] = o(t));
          };
        },
        4091: (t, e, r) => {
          var n = r(3931),
            o = r(1087),
            i = r(5014),
            u = "__core-js_shared__",
            c = (t.exports = o[u] || i(u, {}));
          (c.versions || (c.versions = [])).push({
            version: "3.46.0",
            mode: n ? "pure" : "global",
            copyright:
              "© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
            license: "https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",
            source: "https://github.com/zloirock/core-js",
          });
        },
        3430: (t, e, r) => {
          var n = r(4091);
          t.exports = function (t, e) {
            return n[t] || (n[t] = e || {});
          };
        },
        146: (t, e, r) => {
          var n = r(1352),
            o = r(3689),
            i = r(1087).String;
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var t = Symbol("symbol detection");
              return (
                !i(t) ||
                !(Object(t) instanceof Symbol) ||
                (!Symbol.sham && n && n < 41)
              );
            });
        },
        690: (t, e, r) => {
          var n = r(4684),
            o = Object;
          t.exports = function (t) {
            return o(n(t));
          };
        },
        8732: (t, e, r) => {
          var n = r(2615),
            o = r(8999),
            i = r(734),
            u = r(4849),
            c = r(5899),
            a = r(4201),
            s = TypeError,
            f = a("toPrimitive");
          t.exports = function (t, e) {
            if (!o(t) || i(t)) return t;
            var r,
              a = u(t, f);
            if (a) {
              if (
                (void 0 === e && (e = "default"),
                (r = n(a, t, e)),
                !o(r) || i(r))
              )
                return r;
              throw new s("Can't convert object to primitive value");
            }
            return void 0 === e && (e = "number"), c(t, e);
          };
        },
        8360: (t, e, r) => {
          var n = r(8732),
            o = r(734);
          t.exports = function (t) {
            var e = n(t, "string");
            return o(e) ? e : e + "";
          };
        },
        3043: (t, e, r) => {
          var n = {};
          (n[r(4201)("toStringTag")] = "z"),
            (t.exports = "[object z]" === String(n));
        },
        3691: (t) => {
          var e = String;
          t.exports = function (t) {
            try {
              return e(t);
            } catch (t) {
              return "Object";
            }
          };
        },
        4630: (t, e, r) => {
          var n = r(8844),
            o = 0,
            i = Math.random(),
            u = n((1.1).toString);
          t.exports = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + u(++o + i, 36);
          };
        },
        9525: (t, e, r) => {
          var n = r(146);
          t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        5648: (t, e, r) => {
          var n = r(7697),
            o = r(3689);
          t.exports =
            n &&
            o(function () {
              return (
                42 !==
                Object.defineProperty(function () {}, "prototype", {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            });
        },
        9834: (t, e, r) => {
          var n = r(1087),
            o = r(9985),
            i = n.WeakMap;
          t.exports = o(i) && /native code/.test(String(i));
        },
        4201: (t, e, r) => {
          var n = r(1087),
            o = r(3430),
            i = r(6812),
            u = r(4630),
            c = r(146),
            a = r(9525),
            s = n.Symbol,
            f = o("wks"),
            l = a ? s.for || s : (s && s.withoutSetter) || u;
          t.exports = function (t) {
            return (
              i(f, t) || (f[t] = c && i(s, t) ? s[t] : l("Symbol." + t)), f[t]
            );
          };
        },
        228: (t, e, r) => {
          var n = r(3043),
            o = r(1880),
            i = r(5073);
          n || o(Object.prototype, "toString", i, { unsafe: !0 });
        },
      },
      e = {};
    function r(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var i = (e[n] = { exports: {} });
      return t[n].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
      (r.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        r.r(n), r(228);
        function t(t, e) {
          (this.name = "AggregateError"),
            (this.errors = t),
            (this.message = e || "");
        }
        t.prototype = Error.prototype;
        var e = setTimeout;
        function o(t) {
          return Boolean(t && void 0 !== t.length);
        }
        function i() {}
        function u(t) {
          if (!(this instanceof u))
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            p(t, this);
        }
        function c(t, e) {
          for (; 3 === t._state; ) t = t._value;
          0 !== t._state
            ? ((t._handled = !0),
              u._immediateFn(function () {
                var r = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== r) {
                  var n;
                  try {
                    n = r(t._value);
                  } catch (t) {
                    return void s(e.promise, t);
                  }
                  a(e.promise, n);
                } else (1 === t._state ? a : s)(e.promise, t._value);
              }))
            : t._deferreds.push(e);
        }
        function a(t, e) {
          try {
            if (e === t)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var r = e.then;
              if (e instanceof u)
                return (t._state = 3), (t._value = e), void f(t);
              if ("function" == typeof r)
                return void p(
                  ((n = r),
                  (o = e),
                  function () {
                    n.apply(o, arguments);
                  }),
                  t
                );
            }
            (t._state = 1), (t._value = e), f(t);
          } catch (e) {
            s(t, e);
          }
          var n, o;
        }
        function s(t, e) {
          (t._state = 2), (t._value = e), f(t);
        }
        function f(t) {
          2 === t._state &&
            0 === t._deferreds.length &&
            u._immediateFn(function () {
              t._handled || u._unhandledRejectionFn(t._value);
            });
          for (var e = 0, r = t._deferreds.length; e < r; e++)
            c(t, t._deferreds[e]);
          t._deferreds = null;
        }
        function l(t, e, r) {
          (this.onFulfilled = "function" == typeof t ? t : null),
            (this.onRejected = "function" == typeof e ? e : null),
            (this.promise = r);
        }
        function p(t, e) {
          var r = !1;
          try {
            t(
              function (t) {
                r || ((r = !0), a(e, t));
              },
              function (t) {
                r || ((r = !0), s(e, t));
              }
            );
          } catch (t) {
            if (r) return;
            (r = !0), s(e, t);
          }
        }
        (u.prototype.catch = function (t) {
          return this.then(null, t);
        }),
          (u.prototype.then = function (t, e) {
            var r = new this.constructor(i);
            return c(this, new l(t, e, r)), r;
          }),
          (u.prototype.finally = function (t) {
            var e = this.constructor;
            return this.then(
              function (r) {
                return e.resolve(t()).then(function () {
                  return r;
                });
              },
              function (r) {
                return e.resolve(t()).then(function () {
                  return e.reject(r);
                });
              }
            );
          }),
          (u.all = function (t) {
            return new u(function (e, r) {
              if (!o(t))
                return r(new TypeError("Promise.all accepts an array"));
              var n = Array.prototype.slice.call(t);
              if (0 === n.length) return e([]);
              var i = n.length;
              function u(t, o) {
                try {
                  if (o && ("object" == typeof o || "function" == typeof o)) {
                    var c = o.then;
                    if ("function" == typeof c)
                      return void c.call(
                        o,
                        function (e) {
                          u(t, e);
                        },
                        r
                      );
                  }
                  (n[t] = o), 0 == --i && e(n);
                } catch (t) {
                  r(t);
                }
              }
              for (var c = 0; c < n.length; c++) u(c, n[c]);
            });
          }),
          (u.any = function (e) {
            var r = this;
            return new r(function (n, o) {
              if (!e || void 0 === e.length)
                return o(new TypeError("Promise.any accepts an array"));
              var i = Array.prototype.slice.call(e);
              if (0 === i.length) return o();
              for (var u = [], c = 0; c < i.length; c++)
                try {
                  r.resolve(i[c])
                    .then(n)
                    .catch(function (e) {
                      u.push(e),
                        u.length === i.length &&
                          o(new t(u, "All promises were rejected"));
                    });
                } catch (t) {
                  o(t);
                }
            });
          }),
          (u.allSettled = function (t) {
            return new this(function (e, r) {
              if (!t || void 0 === t.length)
                return r(
                  new TypeError(
                    typeof t +
                      " " +
                      t +
                      " is not iterable(cannot read property Symbol(Symbol.iterator))"
                  )
                );
              var n = Array.prototype.slice.call(t);
              if (0 === n.length) return e([]);
              var o = n.length;
              function i(t, r) {
                if (r && ("object" == typeof r || "function" == typeof r)) {
                  var u = r.then;
                  if ("function" == typeof u)
                    return void u.call(
                      r,
                      function (e) {
                        i(t, e);
                      },
                      function (r) {
                        (n[t] = { status: "rejected", reason: r }),
                          0 == --o && e(n);
                      }
                    );
                }
                (n[t] = { status: "fulfilled", value: r }), 0 == --o && e(n);
              }
              for (var u = 0; u < n.length; u++) i(u, n[u]);
            });
          }),
          (u.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === u
              ? t
              : new u(function (e) {
                  e(t);
                });
          }),
          (u.reject = function (t) {
            return new u(function (e, r) {
              r(t);
            });
          }),
          (u.race = function (t) {
            return new u(function (e, r) {
              if (!o(t))
                return r(new TypeError("Promise.race accepts an array"));
              for (var n = 0, i = t.length; n < i; n++)
                u.resolve(t[n]).then(e, r);
            });
          }),
          (u._immediateFn =
            ("function" == typeof setImmediate &&
              function (t) {
                setImmediate(t);
              }) ||
            function (t) {
              e(t, 0);
            }),
          (u._unhandledRejectionFn = function (t) {
            "undefined" != typeof console &&
              console &&
              console.warn("Possible Unhandled Promise Rejection:", t);
          });
        const v = u,
          h = function (t, e) {
            return fetch(t, {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json; charset=utf-8" },
              body: JSON.stringify(e),
            });
          },
          d = function (t) {
            return fetch(t, { method: "DELETE", credentials: "include" });
          },
          y = function (t) {
            return fetch(t, { method: "GET", credentials: "include" });
          },
          g = function (t) {
            return fetch(t, { method: "GET", credentials: "include" });
          };
        window.Promise || (window.Promise = v),
          window.addEventListener(
            "message",
            function (t) {
              var e = t.data.method,
                r = t.data.url;
              if ("GET" === e)
                y(r).then(function (e) {
                  e.ok
                    ? e.json().then(function (e) {
                        t.source.postMessage({ ok: !0, url: r, data: e }, "*");
                      })
                    : t.source.postMessage(
                        { ok: !1, url: r, statusText: e.statusText },
                        "*"
                      );
                });
              else if ("GET_NO_HEADER" === e)
                g(r).then(function (e) {
                  e.ok
                    ? e.json().then(function (e) {
                        t.source.postMessage({ ok: !0, url: r, data: e }, "*");
                      })
                    : t.source.postMessage(
                        { ok: !1, url: r, statusText: e.statusText },
                        "*"
                      );
                });
              else if ("POST" === e) {
                var n = t.data.body;
                h(r, n).then(function (e) {
                  e.ok
                    ? e.json().then(function (e) {
                        t.source.postMessage({ ok: !0, url: r, data: e }, "*");
                      })
                    : t.source.postMessage(
                        { ok: !1, url: r, statusText: e.statusText },
                        "*"
                      );
                });
              } else
                "DELETE" === e &&
                  d(r).then(function (e) {
                    e.ok
                      ? e.json().then(function (e) {
                          t.source.postMessage(
                            { ok: !0, url: r, data: e },
                            "*"
                          );
                        })
                      : t.source.postMessage(
                          { ok: !1, url: r, statusText: e.statusText },
                          "*"
                        );
                  });
            },
            !1
          ),
          window.parent.postMessage({ iframeLoaded: !0 }, "*");
      })(),
      n
    );
  })()
);
//# sourceMappingURL=readcube-iframe-communication.min.js.map
