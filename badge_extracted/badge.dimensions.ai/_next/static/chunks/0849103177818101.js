;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "4260ab4d-974e-1cba-851e-c6f0460e819a")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 94561, t => {
    "use strict";

    function e(t, e, i, s) {
        return 0 === t && void 0 !== s ? s : 1 === t ? e : i
    }

    function i(t, e) {
        return 1 === t ? "1 citation on Dimensions." : `${e} total citations on Dimensions.`
    }

    function s(t) {
        return e(t, "Show 1 more category", `Show ${t} more categories`)
    }

    function r(t) {
        return e(t, "Show 1 fewer category", `Show ${t} fewer categories`)
    }

    function o(t) {
        return e(t, "Citation", "Citations")
    }

    function n(t) {
        return e(t, "Citation", "Citations")
    }

    function a(t) {
        return e(t, "Recent citation", "Recent citations")
    }

    function l(t) {
        return `in <strong>${t}</strong>`
    }

    function h(t, e) {
        return 0 === t ? "has not yet been cited." : 1 === t ? "has been cited once." : `has been cited <strong>${e} times</strong>.`
    }

    function c(t) {
        return `${t}% of its citations have been received in the past two years`
    }

    function d(t) {
        return `Compared to other publications in the same field, <strong>this publication is extremely highly cited</strong> and has received approximately <strong>${t} times more citations</strong> than average.`
    }

    function p(t) {
        return `Compared to other publications in the same field, <strong>this publication is highly cited</strong> and has received approximately <strong>${t} times more citations</strong> than average.`
    }

    function u(t) {
        return `This publication has received ${t}% of the citations you might expect to receive, considering the citation performance of other publications in the same field.`
    }

    function g(t, e, i) {
        return 1 === t ? "Dimensions has found <strong>1</strong> citation of this research output." : `Dimensions has found a total of <strong>${e}</strong> citations of this research output. The most recent <strong>${i}</strong> are shown below.`
    }

    function f(t) {
        return `To view the rest you can visit its <a href='${t}' target='_blank'>publication page</a> on Dimensions.`
    }

    function m(t, e) {
        return `Article in <strong>${t}</strong>, published ${e}`
    }

    function x(t) {
        return `Article in <strong>${t}</strong>`
    }

    function y(t) {
        return `Article published ${t}`
    }
    t.s(["BUTTON_ABOUT", 0, "What is this page?", "BUTTON_EMBED", 0, "Embed badge", "BUTTON_VIEW_IN_DIMENSIONS", 0, "View in Dimensions", "BUTTON_VIEW_ON_PUBLISHER_SITE", 0, "View on publisher site", "CATEGORIES_TAB_DESCRIPTION", 0, "Research in one subject may be applicable to other areas. The visualization below shows which research fields may be finding this publication relevant, based on a simple count of the subject areas of the publications citing this one.", "CATEGORIES_TAB_NO_CATEGORIES", 0, "Dimensions has not identified any citing research categories for this publication yet.", "CITATIONS_TAB_NO_CITATIONS", 0, "Dimensions has not identified any citing works for this publication yet.", "INTERPRETATION_CURRENT_PAPER", 0, "This is probably because it was published recently. In general it takes months for publications to be cited.", "INTERPRETATION_FCR_AVERAGE", 0, "This publication has received about as many citations as you might expect, compared to the citation performance of other publications in the same field.", "INTERPRETATION_FCR_NA_NEW", 0, "It is too early to compare the number of citations this publication has received so far to other publications in the same field. Dimensions can usually start to do this two years after publication.", "INTERPRETATION_FCR_NA_OTHER", 0, "Dimensions hasn't been able to calculate what an expected number of citations for this publication based on its field might be yet.", "INTERPRETATION_HIGH_RECENCY_HTML", 0, "which is <strong>higher than you might expect</strong>, suggesting that it is currently receiving a lot of interest", "INTERPRETATION_INTRO", 0, "This publication", "INTERPRETATION_NO_CITATIONS", 0, "has not yet been cited.", "INTERPRETATION_OLDER_PAPER", 0, "There is a chance that this is because it's an older paper. Dimensions hasn't yet indexed the back archives of all publishers.", "SUMMARY_TAB_DATA_FROM_DIMENSIONS_HTML", 0, 'This is the public page for a publication record in <a href="https://dimensions.ai/">Dimensions</a>, a free research insights platform that brings together information about funding, scholarly outputs, policy, patents and grants.', "SUMMARY_TAB_DESC_FCR", 0, "The Field Citation Ratio (FCR). Click for more information.", "SUMMARY_TAB_DESC_RCR", 0, "The Relative Citation Ratio (RCR). Click for more information.", "SUMMARY_TAB_DESC_RECENT_CITATIONS", 0, "Number of citations from the last 2 years. Click for more information.", "SUMMARY_TAB_DESC_TOTAL_CITATIONS", 0, "Total number of times a publication has been cited. Click for more information.", "SUMMARY_TAB_LABEL_FIELD_CITATION_RATIO", 0, "Field Citation Ratio", "SUMMARY_TAB_LABEL_RELATIVE_CITATION_RATIO", 0, "Relative Citation Ratio", "badgeLogo", () => i, "buttonShowFewerCategories", () => r, "buttonShowMoreCategories", () => s, "citationsLabel", () => o, "citationsTabArticleDateHtml", () => y, "citationsTabArticleFullHtml", () => m, "citationsTabArticleJournalHtml", () => x, "citationsTabDescriptionHtml", () => g, "citationsTabVisitHtml", () => f, "interpretationCitationsHtml", () => h, "interpretationFcrHighHtml", () => p, "interpretationFcrLow", () => u, "interpretationFcrVeryHighHtml", () => d, "interpretationJournalHtml", () => l, "interpretationRecency", () => c, "summaryTabLabelCitations", () => n, "summaryTabLabelRecentCitations", () => a])
}, 99340, 66091, t => {
    "use strict";

    function e(t, i = ",") {
        return t ? t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${i}`) : "0"
    }

    function i(t) {
        if ("string" == typeof t) return t;
        let e = t ? ? 0;
        if (e < 1e3) return `${e}`;
        if (e < 1e4) {
            let t = String(Math.round(e / 100) / 10);
            return `${t}k`
        }
        let i = String(Math.round(e / 1e3));
        return `${i}k`
    }

    function s(t, e = 10) {
        return null == t ? "n/a" : t < e ? String(Math.round(100 * t) / 100) : String(Math.floor(t))
    }

    function r(t) {
        return null == t ? "n/a" : +t.toFixed(2)
    }
    t.s(["formatFloatingPoint", () => r, "formatNumberWithDelimiter", () => e, "formatRatio", () => s, "formatThousands", () => i], 99340);
    var o = t.i(43476),
        n = t.i(71645);

    function a({
        text: t,
        maxLength: e = 100
    }) {
        let [i, s] = (0, n.useState)(!1), r = t.length > e, a = (0, n.useMemo)(() => {
            if (r && !i) {
                if (t.length <= e) return t;
                let i = t.slice(0, e),
                    s = i.lastIndexOf(" ");
                return (s > 0 ? i.slice(0, s) : i) + "…"
            }
            return t
        }, [t, e, r, i]);
        return (0, o.jsxs)("span", {
            children: [(0, o.jsx)("span", {
                children: a
            }), r && (0, o.jsx)("button", {
                type: "button",
                onClick: () => s(!i),
                className: "TruncatableText-toggle-button",
                children: i ? "[ show less ]" : "[ show more ]"
            })]
        })
    }
    t.s(["default", () => a], 66091)
}, 14023, t => {
    "use strict";
    var e = t.i(43476),
        i = t.i(71645),
        s = t.i(99340),
        r = t.i(94561);
    let o = "(min-width: 860px)";

    function n(t) {
        let e = window.matchMedia(o);
        return e.addEventListener("change", t), () => e.removeEventListener("change", t)
    }

    function a() {
        return window.matchMedia(o).matches ? 200 : 120
    }

    function l() {
        return 200
    }

    function h({
        totalCitations: t,
        badgeServerUrl: o
    }) {
        let h = null == t ? "?" : (0, s.formatThousands)(t),
            c = (0, i.useSyncExternalStore)(n, a, l),
            d = `${o}/badge?count=${h}&size=${c}&background=fill&format=svg`,
            p = `${o}/badge?count=${h}&size=${c}&background=fill`;
        return (0, e.jsx)("div", {
            className: "Badge",
            style: {
                backgroundImage: `url(${d})`
            },
            children: (0, e.jsx)("img", {
                src: p,
                alt: (0, r.badgeLogo)(t ? ? 0, h)
            })
        })
    }
    var c = t.i(66091);

    function d({
        publication: t,
        badgeServerUrl: s
    }) {
        let [o, n] = (0, i.useState)(!1), a = (0, i.useMemo)(() => {
            var i;
            let s = [],
                r = (i = t.publicationDate) ? new Date(i).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric"
                }) : null,
                o = t.journal ? .title,
                n = null;
            return o && r ? n = (0, e.jsxs)(e.Fragment, {
                children: ["Article in ", (0, e.jsx)("strong", {
                    children: o
                }), ", published ", r]
            }) : o ? n = (0, e.jsxs)(e.Fragment, {
                children: ["Article in ", (0, e.jsx)("strong", {
                    children: o
                })]
            }) : r && (n = (0, e.jsxs)(e.Fragment, {
                children: ["Article published ", r]
            })), s.push({
                key: "publication",
                label: "Publication",
                content: n
            }), t.authorNames && s.push({
                key: "authors",
                label: "Authors",
                content: (0, e.jsx)(c.default, {
                    text: t.authorNames
                })
            }), t.doi && s.push({
                key: "doi",
                label: "DOI",
                content: (0, e.jsx)("a", {
                    href: t.doiUri ? ? `https://doi.org/${t.doi}`,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "external-link",
                    children: t.doi
                })
            }), t.pmid && s.push({
                key: "pmid",
                label: "PubMed ID",
                content: (0, e.jsx)("a", {
                    href: t.pubmedUri ? ? `https://pubmed.ncbi.nlm.nih.gov/${t.pmid}`,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "external-link",
                    children: t.pmid
                })
            }), t.id && s.push({
                key: "id",
                label: "Dimensions ID",
                content: (0, e.jsx)("a", {
                    href: t.dimensionsUri,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "external-link",
                    children: t.id
                })
            }), s
        }, [t]), l = o ? a : a.slice(0, 2), d = a.length > 2;
        return (0, e.jsxs)("div", {
            className: "DocumentMetadata",
            children: [(0, e.jsx)("div", {
                className: "DocumentMetadata-Badge",
                children: (0, e.jsx)(h, {
                    totalCitations: t.totalCitations,
                    badgeServerUrl: s
                })
            }), (0, e.jsxs)("div", {
                className: "DocumentMetadata-Content",
                children: [(0, e.jsx)("h1", {
                    children: t.title
                }), (0, e.jsxs)("div", {
                    className: "DocumentMetadata-Info",
                    children: [(0, e.jsxs)("div", {
                        className: "DocumentMetadata-Table",
                        children: [(0, e.jsx)("table", {
                            children: (0, e.jsx)("tbody", {
                                children: l.map(t => (0, e.jsxs)("tr", {
                                    children: [(0, e.jsx)("th", {
                                        children: t.label
                                    }), (0, e.jsx)("td", {
                                        children: t.content
                                    })]
                                }, t.key))
                            })
                        }), d && (0, e.jsx)("button", {
                            type: "button",
                            onClick: () => n(!o),
                            className: `DocumentMetadata-toggle-button ${o?"expanded":"collapsed"}`,
                            children: o ? "Fewer details" : "More details"
                        })]
                    }), (0, e.jsx)("div", {
                        className: "DocumentMetadata-Links",
                        children: t.doi && (0, e.jsx)("div", {
                            className: "DocumentMetadata-PublisherLink",
                            children: (0, e.jsx)("a", {
                                href: t.doiUri ? ? `https://doi.org/${t.doi}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: r.BUTTON_VIEW_ON_PUBLISHER_SITE
                            })
                        })
                    })]
                })]
            })]
        })
    }
    t.s(["default", () => d], 14023)
}, 43794, (t, e, i) => {
    ! function() {
        "use strict";
        var i = {}.hasOwnProperty;

        function s() {
            for (var t = "", e = 0; e < arguments.length; e++) {
                var o = arguments[e];
                o && (t = r(t, function(t) {
                    if ("string" == typeof t || "number" == typeof t) return t;
                    if ("object" != typeof t) return "";
                    if (Array.isArray(t)) return s.apply(null, t);
                    if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
                    var e = "";
                    for (var o in t) i.call(t, o) && t[o] && (e = r(e, o));
                    return e
                }(o)))
            }
            return t
        }

        function r(t, e) {
            return e ? t ? t + " " + e : t + e : t
        }
        if (e.exports) s.default = s, e.exports = s;
        else if ("function" == typeof define && "object" == typeof define.amd && define.amd) void 0 !== s && t.v(s);
        else window.classNames = s
    }()
}, 73128, 96746, t => {
    "use strict";
    var e = t.i(43476),
        i = t.i(71645);

    function s({
        visible: t,
        onClose: s,
        children: r
    }) {
        let o = (0, i.useCallback)(t => {
            "Escape" === t.key && s()
        }, [s]);
        return ((0, i.useEffect)(() => (t && (document.addEventListener("keydown", o), document.body.style.overflow = "hidden"), () => {
            document.removeEventListener("keydown", o), document.body.style.overflow = ""
        }), [t, o]), t) ? (0, e.jsxs)("div", {
            className: "Lightbox",
            children: [(0, e.jsx)("div", {
                className: "Lightbox-overlay",
                onClick: s,
                "aria-hidden": "true"
            }), (0, e.jsx)("div", {
                className: "Lightbox-wrapper",
                children: (0, e.jsxs)("div", {
                    className: "Lightbox-inner-wrapper",
                    children: [(0, e.jsx)("button", {
                        type: "button",
                        onClick: s,
                        className: "Lightbox-close",
                        "aria-label": "Close"
                    }), (0, e.jsx)("div", {
                        className: "Lightbox-content",
                        children: r
                    })]
                })
            })]
        }) : null
    }
    t.s(["default", () => s], 73128);
    var r = t.i(47167);
    let o = Math.min,
        n = Math.max,
        a = Math.round,
        l = Math.floor,
        h = t => ({
            x: t,
            y: t
        }),
        c = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        d = {
            start: "end",
            end: "start"
        };

    function p(t, e) {
        return "function" == typeof t ? t(e) : t
    }

    function u(t) {
        return t.split("-")[0]
    }

    function g(t) {
        return t.split("-")[1]
    }

    function f(t) {
        return "x" === t ? "y" : "x"
    }

    function m(t) {
        return "y" === t ? "height" : "width"
    }
    let x = new Set(["top", "bottom"]);

    function y(t) {
        return x.has(u(t)) ? "y" : "x"
    }

    function b(t) {
        return t.replace(/start|end/g, t => d[t])
    }
    let v = ["left", "right"],
        w = ["right", "left"],
        k = ["top", "bottom"],
        T = ["bottom", "top"];

    function S(t) {
        return t.replace(/left|right|bottom|top/g, t => c[t])
    }

    function M(t) {
        return "number" != typeof t ? {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
        } : {
            top: t,
            right: t,
            bottom: t,
            left: t
        }
    }

    function C(t) {
        let {
            x: e,
            y: i,
            width: s,
            height: r
        } = t;
        return {
            width: s,
            height: r,
            top: i,
            left: e,
            right: e + s,
            bottom: i + r,
            x: e,
            y: i
        }
    }

    function A(t, e, i) {
        let s, {
                reference: r,
                floating: o
            } = t,
            n = y(e),
            a = f(y(e)),
            l = m(a),
            h = u(e),
            c = "y" === n,
            d = r.x + r.width / 2 - o.width / 2,
            p = r.y + r.height / 2 - o.height / 2,
            x = r[l] / 2 - o[l] / 2;
        switch (h) {
            case "top":
                s = {
                    x: d,
                    y: r.y - o.height
                };
                break;
            case "bottom":
                s = {
                    x: d,
                    y: r.y + r.height
                };
                break;
            case "right":
                s = {
                    x: r.x + r.width,
                    y: p
                };
                break;
            case "left":
                s = {
                    x: r.x - o.width,
                    y: p
                };
                break;
            default:
                s = {
                    x: r.x,
                    y: r.y
                }
        }
        switch (g(e)) {
            case "start":
                s[a] -= x * (i && c ? -1 : 1);
                break;
            case "end":
                s[a] += x * (i && c ? -1 : 1)
        }
        return s
    }
    async function E(t, e) {
        var i;
        void 0 === e && (e = {});
        let {
            x: s,
            y: r,
            platform: o,
            rects: n,
            elements: a,
            strategy: l
        } = t, {
            boundary: h = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: u = !1,
            padding: g = 0
        } = p(e, t), f = M(g), m = a[u ? "floating" === d ? "reference" : "floating" : d], x = C(await o.getClippingRect({
            element: null == (i = await (null == o.isElement ? void 0 : o.isElement(m))) || i ? m : m.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
            boundary: h,
            rootBoundary: c,
            strategy: l
        })), y = "floating" === d ? {
            x: s,
            y: r,
            width: n.floating.width,
            height: n.floating.height
        } : n.reference, b = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), v = await (null == o.isElement ? void 0 : o.isElement(b)) && await (null == o.getScale ? void 0 : o.getScale(b)) || {
            x: 1,
            y: 1
        }, w = C(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: b,
            strategy: l
        }) : y);
        return {
            top: (x.top - w.top + f.top) / v.y,
            bottom: (w.bottom - x.bottom + f.bottom) / v.y,
            left: (x.left - w.left + f.left) / v.x,
            right: (w.right - x.right + f.right) / v.x
        }
    }
    let O = async (t, e, i) => {
            let {
                placement: s = "bottom",
                strategy: r = "absolute",
                middleware: o = [],
                platform: n
            } = i, a = o.filter(Boolean), l = await (null == n.isRTL ? void 0 : n.isRTL(e)), h = await n.getElementRects({
                reference: t,
                floating: e,
                strategy: r
            }), {
                x: c,
                y: d
            } = A(h, s, l), p = s, u = {}, g = 0;
            for (let i = 0; i < a.length; i++) {
                var f;
                let {
                    name: o,
                    fn: m
                } = a[i], {
                    x: x,
                    y: y,
                    data: b,
                    reset: v
                } = await m({
                    x: c,
                    y: d,
                    initialPlacement: s,
                    placement: p,
                    strategy: r,
                    middlewareData: u,
                    rects: h,
                    platform: { ...n,
                        detectOverflow: null != (f = n.detectOverflow) ? f : E
                    },
                    elements: {
                        reference: t,
                        floating: e
                    }
                });
                c = null != x ? x : c, d = null != y ? y : d, u = { ...u,
                    [o]: { ...u[o],
                        ...b
                    }
                }, v && g <= 50 && (g++, "object" == typeof v && (v.placement && (p = v.placement), v.rects && (h = !0 === v.rects ? await n.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: r
                }) : v.rects), {
                    x: c,
                    y: d
                } = A(h, p, l)), i = -1)
            }
            return {
                x: c,
                y: d,
                placement: p,
                strategy: r,
                middlewareData: u
            }
        },
        L = new Set(["left", "top"]);
    async function P(t, e) {
        let {
            placement: i,
            platform: s,
            elements: r
        } = t, o = await (null == s.isRTL ? void 0 : s.isRTL(r.floating)), n = u(i), a = g(i), l = "y" === y(i), h = L.has(n) ? -1 : 1, c = o && l ? -1 : 1, d = p(e, t), {
            mainAxis: f,
            crossAxis: m,
            alignmentAxis: x
        } = "number" == typeof d ? {
            mainAxis: d,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: d.mainAxis || 0,
            crossAxis: d.crossAxis || 0,
            alignmentAxis: d.alignmentAxis
        };
        return a && "number" == typeof x && (m = "end" === a ? -1 * x : x), l ? {
            x: m * c,
            y: f * h
        } : {
            x: f * h,
            y: m * c
        }
    }

    function N() {
        return "u" > typeof window
    }

    function I(t) {
        return B(t) ? (t.nodeName || "").toLowerCase() : "#document"
    }

    function R(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
    }

    function D(t) {
        var e;
        return null == (e = (B(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
    }

    function B(t) {
        return !!N() && (t instanceof Node || t instanceof R(t).Node)
    }

    function j(t) {
        return !!N() && (t instanceof Element || t instanceof R(t).Element)
    }

    function z(t) {
        return !!N() && (t instanceof HTMLElement || t instanceof R(t).HTMLElement)
    }

    function _(t) {
        return !(!N() || "u" < typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof R(t).ShadowRoot)
    }
    let W = new Set(["inline", "contents"]);

    function H(t) {
        let {
            overflow: e,
            overflowX: i,
            overflowY: s,
            display: r
        } = J(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + s + i) && !W.has(r)
    }
    let F = new Set(["table", "td", "th"]),
        X = [":popover-open", ":modal"];

    function Y(t) {
        return X.some(e => {
            try {
                return t.matches(e)
            } catch (t) {
                return !1
            }
        })
    }
    let G = ["transform", "translate", "scale", "rotate", "perspective"],
        $ = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        U = ["paint", "layout", "strict", "content"];

    function V(t) {
        let e = q(),
            i = j(t) ? J(t) : t;
        return G.some(t => !!i[t] && "none" !== i[t]) || !!i.containerType && "normal" !== i.containerType || !e && !!i.backdropFilter && "none" !== i.backdropFilter || !e && !!i.filter && "none" !== i.filter || $.some(t => (i.willChange || "").includes(t)) || U.some(t => (i.contain || "").includes(t))
    }

    function q() {
        return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
    }
    let K = new Set(["html", "body", "#document"]);

    function Z(t) {
        return K.has(I(t))
    }

    function J(t) {
        return R(t).getComputedStyle(t)
    }

    function Q(t) {
        return j(t) ? {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
        } : {
            scrollLeft: t.scrollX,
            scrollTop: t.scrollY
        }
    }

    function tt(t) {
        if ("html" === I(t)) return t;
        let e = t.assignedSlot || t.parentNode || _(t) && t.host || D(t);
        return _(e) ? e.host : e
    }

    function te(t, e, i) {
        var s;
        void 0 === e && (e = []), void 0 === i && (i = !0);
        let r = function t(e) {
                let i = tt(e);
                return Z(i) ? e.ownerDocument ? e.ownerDocument.body : e.body : z(i) && H(i) ? i : t(i)
            }(t),
            o = r === (null == (s = t.ownerDocument) ? void 0 : s.body),
            n = R(r);
        if (o) {
            let t = ti(n);
            return e.concat(n, n.visualViewport || [], H(r) ? r : [], t && i ? te(t) : [])
        }
        return e.concat(r, te(r, [], i))
    }

    function ti(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
    }

    function ts(t) {
        let e = J(t),
            i = parseFloat(e.width) || 0,
            s = parseFloat(e.height) || 0,
            r = z(t),
            o = r ? t.offsetWidth : i,
            n = r ? t.offsetHeight : s,
            l = a(i) !== o || a(s) !== n;
        return l && (i = o, s = n), {
            width: i,
            height: s,
            $: l
        }
    }

    function tr(t) {
        return j(t) ? t : t.contextElement
    }

    function to(t) {
        let e = tr(t);
        if (!z(e)) return h(1);
        let i = e.getBoundingClientRect(),
            {
                width: s,
                height: r,
                $: o
            } = ts(e),
            n = (o ? a(i.width) : i.width) / s,
            l = (o ? a(i.height) : i.height) / r;
        return n && Number.isFinite(n) || (n = 1), l && Number.isFinite(l) || (l = 1), {
            x: n,
            y: l
        }
    }
    let tn = h(0);

    function ta(t) {
        let e = R(t);
        return q() && e.visualViewport ? {
            x: e.visualViewport.offsetLeft,
            y: e.visualViewport.offsetTop
        } : tn
    }

    function tl(t, e, i, s) {
        var r;
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        let o = t.getBoundingClientRect(),
            n = tr(t),
            a = h(1);
        e && (s ? j(s) && (a = to(s)) : a = to(t));
        let l = (void 0 === (r = i) && (r = !1), s && (!r || s === R(n)) && r) ? ta(n) : h(0),
            c = (o.left + l.x) / a.x,
            d = (o.top + l.y) / a.y,
            p = o.width / a.x,
            u = o.height / a.y;
        if (n) {
            let t = R(n),
                e = s && j(s) ? R(s) : s,
                i = t,
                r = ti(i);
            for (; r && s && e !== i;) {
                let t = to(r),
                    e = r.getBoundingClientRect(),
                    s = J(r),
                    o = e.left + (r.clientLeft + parseFloat(s.paddingLeft)) * t.x,
                    n = e.top + (r.clientTop + parseFloat(s.paddingTop)) * t.y;
                c *= t.x, d *= t.y, p *= t.x, u *= t.y, c += o, d += n, r = ti(i = R(r))
            }
        }
        return C({
            width: p,
            height: u,
            x: c,
            y: d
        })
    }

    function th(t, e) {
        let i = Q(t).scrollLeft;
        return e ? e.left + i : tl(D(t)).left + i
    }

    function tc(t, e) {
        let i = t.getBoundingClientRect();
        return {
            x: i.left + e.scrollLeft - th(t, i),
            y: i.top + e.scrollTop
        }
    }
    let td = new Set(["absolute", "fixed"]);

    function tp(t, e, i) {
        var s;
        let r;
        if ("viewport" === e) r = function(t, e) {
            let i = R(t),
                s = D(t),
                r = i.visualViewport,
                o = s.clientWidth,
                n = s.clientHeight,
                a = 0,
                l = 0;
            if (r) {
                o = r.width, n = r.height;
                let t = q();
                (!t || t && "fixed" === e) && (a = r.offsetLeft, l = r.offsetTop)
            }
            let h = th(s);
            if (h <= 0) {
                let t = s.ownerDocument,
                    e = t.body,
                    i = getComputedStyle(e),
                    r = "CSS1Compat" === t.compatMode && parseFloat(i.marginLeft) + parseFloat(i.marginRight) || 0,
                    n = Math.abs(s.clientWidth - e.clientWidth - r);
                n <= 25 && (o -= n)
            } else h <= 25 && (o += h);
            return {
                width: o,
                height: n,
                x: a,
                y: l
            }
        }(t, i);
        else if ("document" === e) {
            let e, i, o, a, l, h, c;
            s = D(t), e = D(s), i = Q(s), o = s.ownerDocument.body, a = n(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), l = n(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight), h = -i.scrollLeft + th(s), c = -i.scrollTop, "rtl" === J(o).direction && (h += n(e.clientWidth, o.clientWidth) - a), r = {
                width: a,
                height: l,
                x: h,
                y: c
            }
        } else if (j(e)) {
            let t, s, o, n, a, l;
            s = (t = tl(e, !0, "fixed" === i)).top + e.clientTop, o = t.left + e.clientLeft, n = z(e) ? to(e) : h(1), a = e.clientWidth * n.x, l = e.clientHeight * n.y, r = {
                width: a,
                height: l,
                x: o * n.x,
                y: s * n.y
            }
        } else {
            let i = ta(t);
            r = {
                x: e.x - i.x,
                y: e.y - i.y,
                width: e.width,
                height: e.height
            }
        }
        return C(r)
    }

    function tu(t) {
        return "static" === J(t).position
    }

    function tg(t, e) {
        if (!z(t) || "fixed" === J(t).position) return null;
        if (e) return e(t);
        let i = t.offsetParent;
        return D(t) === i && (i = i.ownerDocument.body), i
    }

    function tf(t, e) {
        var i;
        let s = R(t);
        if (Y(t)) return s;
        if (!z(t)) {
            let e = tt(t);
            for (; e && !Z(e);) {
                if (j(e) && !tu(e)) return e;
                e = tt(e)
            }
            return s
        }
        let r = tg(t, e);
        for (; r && (i = r, F.has(I(i))) && tu(r);) r = tg(r, e);
        return r && Z(r) && tu(r) && !V(r) ? s : r || function(t) {
            let e = tt(t);
            for (; z(e) && !Z(e);) {
                if (V(e)) return e;
                if (Y(e)) break;
                e = tt(e)
            }
            return null
        }(t) || s
    }
    let tm = async function(t) {
            let e = this.getOffsetParent || tf,
                i = this.getDimensions,
                s = await i(t.floating);
            return {
                reference: function(t, e, i) {
                    let s = z(e),
                        r = D(e),
                        o = "fixed" === i,
                        n = tl(t, !0, o, e),
                        a = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        l = h(0);
                    if (s || !s && !o)
                        if (("body" !== I(e) || H(r)) && (a = Q(e)), s) {
                            let t = tl(e, !0, o, e);
                            l.x = t.x + e.clientLeft, l.y = t.y + e.clientTop
                        } else r && (l.x = th(r));
                    o && !s && r && (l.x = th(r));
                    let c = !r || s || o ? h(0) : tc(r, a);
                    return {
                        x: n.left + a.scrollLeft - l.x - c.x,
                        y: n.top + a.scrollTop - l.y - c.y,
                        width: n.width,
                        height: n.height
                    }
                }(t.reference, await e(t.floating), t.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: s.width,
                    height: s.height
                }
            }
        },
        tx = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                let {
                    elements: e,
                    rect: i,
                    offsetParent: s,
                    strategy: r
                } = t, o = "fixed" === r, n = D(s), a = !!e && Y(e.floating);
                if (s === n || a && o) return i;
                let l = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    c = h(1),
                    d = h(0),
                    p = z(s);
                if ((p || !p && !o) && (("body" !== I(s) || H(n)) && (l = Q(s)), z(s))) {
                    let t = tl(s);
                    c = to(s), d.x = t.x + s.clientLeft, d.y = t.y + s.clientTop
                }
                let u = !n || p || o ? h(0) : tc(n, l);
                return {
                    width: i.width * c.x,
                    height: i.height * c.y,
                    x: i.x * c.x - l.scrollLeft * c.x + d.x + u.x,
                    y: i.y * c.y - l.scrollTop * c.y + d.y + u.y
                }
            },
            getDocumentElement: D,
            getClippingRect: function(t) {
                let {
                    element: e,
                    boundary: i,
                    rootBoundary: s,
                    strategy: r
                } = t, a = [..."clippingAncestors" === i ? Y(e) ? [] : function(t, e) {
                    let i = e.get(t);
                    if (i) return i;
                    let s = te(t, [], !1).filter(t => j(t) && "body" !== I(t)),
                        r = null,
                        o = "fixed" === J(t).position,
                        n = o ? tt(t) : t;
                    for (; j(n) && !Z(n);) {
                        let e = J(n),
                            i = V(n);
                        i || "fixed" !== e.position || (r = null), (o ? !i && !r : !i && "static" === e.position && !!r && td.has(r.position) || H(n) && !i && function t(e, i) {
                            let s = tt(e);
                            return !(s === i || !j(s) || Z(s)) && ("fixed" === J(s).position || t(s, i))
                        }(t, n)) ? s = s.filter(t => t !== n) : r = e, n = tt(n)
                    }
                    return e.set(t, s), s
                }(e, this._c) : [].concat(i), s], l = a[0], h = a.reduce((t, i) => {
                    let s = tp(e, i, r);
                    return t.top = n(s.top, t.top), t.right = o(s.right, t.right), t.bottom = o(s.bottom, t.bottom), t.left = n(s.left, t.left), t
                }, tp(e, l, r));
                return {
                    width: h.right - h.left,
                    height: h.bottom - h.top,
                    x: h.left,
                    y: h.top
                }
            },
            getOffsetParent: tf,
            getElementRects: tm,
            getClientRects: function(t) {
                return Array.from(t.getClientRects())
            },
            getDimensions: function(t) {
                let {
                    width: e,
                    height: i
                } = ts(t);
                return {
                    width: e,
                    height: i
                }
            },
            getScale: to,
            isElement: j,
            isRTL: function(t) {
                return "rtl" === J(t).direction
            }
        };

    function ty(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
    }
    let tb = function(t) {
            return void 0 === t && (t = 0), {
                name: "offset",
                options: t,
                async fn(e) {
                    var i, s;
                    let {
                        x: r,
                        y: o,
                        placement: n,
                        middlewareData: a
                    } = e, l = await P(e, t);
                    return n === (null == (i = a.offset) ? void 0 : i.placement) && null != (s = a.arrow) && s.alignmentOffset ? {} : {
                        x: r + l.x,
                        y: o + l.y,
                        data: { ...l,
                            placement: n
                        }
                    }
                }
            }
        },
        tv = function(t) {
            return void 0 === t && (t = {}), {
                name: "shift",
                options: t,
                async fn(e) {
                    let {
                        x: i,
                        y: s,
                        placement: r,
                        platform: a
                    } = e, {
                        mainAxis: l = !0,
                        crossAxis: h = !1,
                        limiter: c = {
                            fn: t => {
                                let {
                                    x: e,
                                    y: i
                                } = t;
                                return {
                                    x: e,
                                    y: i
                                }
                            }
                        },
                        ...d
                    } = p(t, e), g = {
                        x: i,
                        y: s
                    }, m = await a.detectOverflow(e, d), x = y(u(r)), b = f(x), v = g[b], w = g[x];
                    if (l) {
                        let t = "y" === b ? "top" : "left",
                            e = "y" === b ? "bottom" : "right",
                            i = v + m[t],
                            s = v - m[e];
                        v = n(i, o(v, s))
                    }
                    if (h) {
                        let t = "y" === x ? "top" : "left",
                            e = "y" === x ? "bottom" : "right",
                            i = w + m[t],
                            s = w - m[e];
                        w = n(i, o(w, s))
                    }
                    let k = c.fn({ ...e,
                        [b]: v,
                        [x]: w
                    });
                    return { ...k,
                        data: {
                            x: k.x - i,
                            y: k.y - s,
                            enabled: {
                                [b]: l,
                                [x]: h
                            }
                        }
                    }
                }
            }
        },
        tw = function(t) {
            return void 0 === t && (t = {}), {
                name: "flip",
                options: t,
                async fn(e) {
                    var i, s, r, o, n, a, l, h;
                    let c, d, x, {
                            placement: M,
                            middlewareData: C,
                            rects: A,
                            initialPlacement: E,
                            platform: O,
                            elements: L
                        } = e,
                        {
                            mainAxis: P = !0,
                            crossAxis: N = !0,
                            fallbackPlacements: I,
                            fallbackStrategy: R = "bestFit",
                            fallbackAxisSideDirection: D = "none",
                            flipAlignment: B = !0,
                            ...j
                        } = p(t, e);
                    if (null != (i = C.arrow) && i.alignmentOffset) return {};
                    let z = u(M),
                        _ = y(E),
                        W = u(E) === E,
                        H = await (null == O.isRTL ? void 0 : O.isRTL(L.floating)),
                        F = I || (W || !B ? [S(E)] : (c = S(E), [b(E), c, b(c)])),
                        X = "none" !== D;
                    !I && X && F.push(...(d = g(E), x = function(t, e, i) {
                        switch (t) {
                            case "top":
                            case "bottom":
                                if (i) return e ? w : v;
                                return e ? v : w;
                            case "left":
                            case "right":
                                return e ? k : T;
                            default:
                                return []
                        }
                    }(u(E), "start" === D, H), d && (x = x.map(t => t + "-" + d), B && (x = x.concat(x.map(b)))), x));
                    let Y = [E, ...F],
                        G = await O.detectOverflow(e, j),
                        $ = [],
                        U = (null == (s = C.flip) ? void 0 : s.overflows) || [];
                    if (P && $.push(G[z]), N) {
                        let t, e, i, s, r = (a = M, l = A, void 0 === (h = H) && (h = !1), t = g(a), i = m(e = f(y(a))), s = "x" === e ? t === (h ? "end" : "start") ? "right" : "left" : "start" === t ? "bottom" : "top", l.reference[i] > l.floating[i] && (s = S(s)), [s, S(s)]);
                        $.push(G[r[0]], G[r[1]])
                    }
                    if (U = [...U, {
                            placement: M,
                            overflows: $
                        }], !$.every(t => t <= 0)) {
                        let t = ((null == (r = C.flip) ? void 0 : r.index) || 0) + 1,
                            e = Y[t];
                        if (e && ("alignment" !== N || _ === y(e) || U.every(t => y(t.placement) !== _ || t.overflows[0] > 0))) return {
                            data: {
                                index: t,
                                overflows: U
                            },
                            reset: {
                                placement: e
                            }
                        };
                        let i = null == (o = U.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : o.placement;
                        if (!i) switch (R) {
                            case "bestFit":
                                {
                                    let t = null == (n = U.filter(t => {
                                        if (X) {
                                            let e = y(t.placement);
                                            return e === _ || "y" === e
                                        }
                                        return !0
                                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : n[0];t && (i = t);
                                    break
                                }
                            case "initialPlacement":
                                i = E
                        }
                        if (M !== i) return {
                            reset: {
                                placement: i
                            }
                        }
                    }
                    return {}
                }
            }
        },
        tk = (t, e, i) => {
            let s = new Map,
                r = {
                    platform: tx,
                    ...i
                },
                o = { ...r.platform,
                    _c: s
                };
            return O(t, e, { ...r,
                platform: o
            })
        };
    var tT = t.i(43794);
    let tS = {
        core: !1,
        base: !1
    };

    function tM({
        css: t,
        id: e = "react-tooltip-base-styles",
        type: i = "base",
        ref: s
    }) {
        var o, n;
        if (!t || "u" < typeof document || tS[i] || "core" === i && void 0 !== r.default && (null == (o = null === r.default || void 0 === r.default ? void 0 : r.default.env) ? void 0 : o.REACT_TOOLTIP_DISABLE_CORE_STYLES) || "base" !== i && void 0 !== r.default && (null == (n = null === r.default || void 0 === r.default ? void 0 : r.default.env) ? void 0 : n.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
        "core" === i && (e = "react-tooltip-core-styles"), s || (s = {});
        let {
            insertAt: a
        } = s;
        if (document.getElementById(e)) return;
        let l = document.head || document.getElementsByTagName("head")[0],
            h = document.createElement("style");
        h.id = e, h.type = "text/css", "top" === a && l.firstChild ? l.insertBefore(h, l.firstChild) : l.appendChild(h), h.styleSheet ? h.styleSheet.cssText = t : h.appendChild(document.createTextNode(t)), tS[i] = !0
    }
    let tC = async ({
            elementReference: t = null,
            tooltipReference: e = null,
            tooltipArrowReference: i = null,
            place: s = "top",
            offset: r = 10,
            strategy: a = "absolute",
            middlewares: l = [tb(Number(r)), tw({
                fallbackAxisSideDirection: "start"
            }), tv({
                padding: 5
            })],
            border: h,
            arrowSize: c = 8
        }) => {
            let d;
            return t && null !== e ? i ? (l.push({
                name: "arrow",
                options: d = {
                    element: i,
                    padding: 5
                },
                async fn(t) {
                    let {
                        x: e,
                        y: i,
                        placement: s,
                        rects: r,
                        platform: a,
                        elements: l,
                        middlewareData: h
                    } = t, {
                        element: c,
                        padding: u = 0
                    } = p(d, t) || {};
                    if (null == c) return {};
                    let x = M(u),
                        b = {
                            x: e,
                            y: i
                        },
                        v = f(y(s)),
                        w = m(v),
                        k = await a.getDimensions(c),
                        T = "y" === v,
                        S = T ? "clientHeight" : "clientWidth",
                        C = r.reference[w] + r.reference[v] - b[v] - r.floating[w],
                        A = b[v] - r.reference[v],
                        E = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c)),
                        O = E ? E[S] : 0;
                    O && await (null == a.isElement ? void 0 : a.isElement(E)) || (O = l.floating[S] || r.floating[w]);
                    let L = O / 2 - k[w] / 2 - 1,
                        P = o(x[T ? "top" : "left"], L),
                        N = o(x[T ? "bottom" : "right"], L),
                        I = O - k[w] - N,
                        R = O / 2 - k[w] / 2 + (C / 2 - A / 2),
                        D = n(P, o(R, I)),
                        B = !h.arrow && null != g(s) && R !== D && r.reference[w] / 2 - (R < P ? P : N) - k[w] / 2 < 0,
                        j = B ? R < P ? R - P : R - I : 0;
                    return {
                        [v]: b[v] + j,
                        data: {
                            [v]: D,
                            centerOffset: R - D - j,
                            ...B && {
                                alignmentOffset: j
                            }
                        },
                        reset: B
                    }
                }
            }), tk(t, e, {
                placement: s,
                strategy: a,
                middleware: l
            }).then(({
                x: t,
                y: e,
                placement: i,
                middlewareData: s
            }) => {
                var r, o;
                let n = {
                        left: `${t}px`,
                        top: `${e}px`,
                        border: h
                    },
                    {
                        x: a,
                        y: l
                    } = null != (r = s.arrow) ? r : {
                        x: 0,
                        y: 0
                    },
                    d = null != (o = ({
                        top: "bottom",
                        right: "left",
                        bottom: "top",
                        left: "right"
                    })[i.split("-")[0]]) ? o : "bottom",
                    p = 0;
                if (h) {
                    let t = `${h}`.match(/(\d+)px/);
                    p = (null == t ? void 0 : t[1]) ? Number(t[1]) : 1
                }
                return {
                    tooltipStyles: n,
                    tooltipArrowStyles: {
                        left: null != a ? `${a}px` : "",
                        top: null != l ? `${l}px` : "",
                        right: "",
                        bottom: "",
                        ...h && {
                            borderBottom: h,
                            borderRight: h
                        },
                        [d]: `-${c/2+p}px`
                    },
                    place: i
                }
            })) : tk(t, e, {
                placement: "bottom",
                strategy: a,
                middleware: l
            }).then(({
                x: t,
                y: e,
                placement: i
            }) => ({
                tooltipStyles: {
                    left: `${t}px`,
                    top: `${e}px`
                },
                tooltipArrowStyles: {},
                place: i
            })) : {
                tooltipStyles: {},
                tooltipArrowStyles: {},
                place: s
            }
        },
        tA = (t, e) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(t, e),
        tE = (t, e, i) => {
            let s = null,
                r = function(...r) {
                    let o = () => {
                        s = null, i || t.apply(this, r)
                    };
                    i && !s && (t.apply(this, r), s = setTimeout(o, e)), i || (s && clearTimeout(s), s = setTimeout(o, e))
                };
            return r.cancel = () => {
                s && (clearTimeout(s), s = null)
            }, r
        },
        tO = t => null !== t && !Array.isArray(t) && "object" == typeof t,
        tL = (t, e) => {
            if (t === e) return !0;
            if (Array.isArray(t) && Array.isArray(e)) return t.length === e.length && t.every((t, i) => tL(t, e[i]));
            if (Array.isArray(t) !== Array.isArray(e)) return !1;
            if (!tO(t) || !tO(e)) return t === e;
            let i = Object.keys(t),
                s = Object.keys(e);
            return i.length === s.length && i.every(i => tL(t[i], e[i]))
        },
        tP = t => {
            if (!(t instanceof HTMLElement || t instanceof SVGElement)) return !1;
            let e = getComputedStyle(t);
            return ["overflow", "overflow-x", "overflow-y"].some(t => {
                let i = e.getPropertyValue(t);
                return "auto" === i || "scroll" === i
            })
        },
        tN = t => {
            if (!t) return null;
            let e = t.parentElement;
            for (; e;) {
                if (tP(e)) return e;
                e = e.parentElement
            }
            return document.scrollingElement || document.documentElement
        },
        tI = "u" > typeof window ? i.useLayoutEffect : i.useEffect,
        tR = t => {
            t.current && (clearTimeout(t.current), t.current = null)
        },
        tD = {
            anchorRefs: new Set,
            activeAnchor: {
                current: null
            },
            attach: () => {},
            detach: () => {},
            setActiveAnchor: () => {}
        },
        tB = (0, i.createContext)({
            getTooltipData: () => tD
        });

    function tj(t = "DEFAULT_TOOLTIP_ID") {
        return (0, i.useContext)(tB).getTooltipData(t)
    }
    var tz = {
            tooltip: "core-styles-module_tooltip__3vRRp",
            fixed: "core-styles-module_fixed__pcSol",
            arrow: "core-styles-module_arrow__cvMwQ",
            noArrow: "core-styles-module_noArrow__xock6",
            clickable: "core-styles-module_clickable__ZuTTB",
            show: "core-styles-module_show__Nt9eE",
            closing: "core-styles-module_closing__sGnxF"
        },
        t_ = {
            tooltip: "styles-module_tooltip__mnnfp",
            arrow: "styles-module_arrow__K0L3T",
            dark: "styles-module_dark__xNqje",
            light: "styles-module_light__Z6W-X",
            success: "styles-module_success__A2AKt",
            warning: "styles-module_warning__SCK0X",
            error: "styles-module_error__JvumD",
            info: "styles-module_info__BWdHW"
        };
    let tW = ({
            forwardRef: t,
            id: e,
            className: s,
            classNameArrow: r,
            variant: a = "dark",
            anchorId: h,
            anchorSelect: c,
            place: d = "top",
            offset: p = 10,
            events: u = ["hover"],
            openOnClick: g = !1,
            positionStrategy: f = "absolute",
            middlewares: m,
            wrapper: x,
            delayShow: y = 0,
            delayHide: b = 0,
            float: v = !1,
            hidden: w = !1,
            noArrow: k = !1,
            clickable: T = !1,
            closeOnEsc: S = !1,
            closeOnScroll: M = !1,
            closeOnResize: C = !1,
            openEvents: A,
            closeEvents: E,
            globalCloseEvents: O,
            imperativeModeOnly: L,
            style: P,
            position: N,
            afterShow: I,
            afterHide: R,
            disableTooltip: B,
            content: j,
            contentWrapperRef: z,
            isOpen: _,
            defaultIsOpen: W = !1,
            setIsOpen: H,
            previousActiveAnchor: F,
            activeAnchor: X,
            setActiveAnchor: Y,
            border: G,
            opacity: $,
            arrowColor: U,
            arrowSize: V = 8,
            role: q = "tooltip"
        }) => {
            var K;
            let Z = (0, i.useRef)(null),
                J = (0, i.useRef)(null),
                Q = (0, i.useRef)(null),
                tt = (0, i.useRef)(null),
                ti = (0, i.useRef)(null),
                [ts, to] = (0, i.useState)({
                    tooltipStyles: {},
                    tooltipArrowStyles: {},
                    place: d
                }),
                [tn, ta] = (0, i.useState)(!1),
                [th, tc] = (0, i.useState)(!1),
                [td, tp] = (0, i.useState)(null),
                tu = (0, i.useRef)(!1),
                tg = (0, i.useRef)(null),
                {
                    anchorRefs: tf,
                    setActiveAnchor: tm
                } = tj(e),
                tx = (0, i.useRef)(!1),
                [tb, tv] = (0, i.useState)([]),
                tw = (0, i.useRef)(!1),
                tk = g || u.includes("click"),
                tS = tk || (null == A ? void 0 : A.click) || (null == A ? void 0 : A.dblclick) || (null == A ? void 0 : A.mousedown),
                tM = A ? { ...A
                } : {
                    mouseover: !0,
                    focus: !0,
                    mouseenter: !1,
                    click: !1,
                    dblclick: !1,
                    mousedown: !1
                };
            !A && tk && Object.assign(tM, {
                mouseenter: !1,
                focus: !1,
                mouseover: !1,
                click: !0
            });
            let tA = E ? { ...E
            } : {
                mouseout: !0,
                blur: !0,
                mouseleave: !1,
                click: !1,
                dblclick: !1,
                mouseup: !1
            };
            !E && tk && Object.assign(tA, {
                mouseleave: !1,
                blur: !1,
                mouseout: !1
            });
            let tO = O ? { ...O
            } : {
                escape: S || !1,
                scroll: M || !1,
                resize: C || !1,
                clickOutsideAnchor: tS || !1
            };
            L && (Object.assign(tM, {
                mouseover: !1,
                focus: !1,
                mouseenter: !1,
                click: !1,
                dblclick: !1,
                mousedown: !1
            }), Object.assign(tA, {
                mouseout: !1,
                blur: !1,
                mouseleave: !1,
                click: !1,
                dblclick: !1,
                mouseup: !1
            }), Object.assign(tO, {
                escape: !1,
                scroll: !1,
                resize: !1,
                clickOutsideAnchor: !1
            })), tI(() => (tw.current = !0, () => {
                tw.current = !1
            }), []);
            let tP = t => {
                tw.current && (t && tc(!0), setTimeout(() => {
                    tw.current && (null == H || H(t), void 0 === _ && ta(t))
                }, 10))
            };
            (0, i.useEffect)(() => {
                if (e) {
                    if (tn) {
                        i(F);
                        let s = [...new Set([...t(X), e])].filter(Boolean).join(" ");
                        null == X || X.setAttribute("aria-describedby", s)
                    } else i(X);
                    return () => {
                        i(X), i(F)
                    }
                }

                function t(t) {
                    var e;
                    return (null == (e = null == t ? void 0 : t.getAttribute("aria-describedby")) ? void 0 : e.split(" ")) || []
                }

                function i(i) {
                    let s = t(i).filter(t => t !== e);
                    s.length ? null == i || i.setAttribute("aria-describedby", s.join(" ")) : null == i || i.removeAttribute("aria-describedby")
                }
            }, [X, tn, e, F]), (0, i.useEffect)(() => {
                if (void 0 === _) return () => null;
                _ && tc(!0);
                let t = setTimeout(() => {
                    ta(_)
                }, 10);
                return () => {
                    clearTimeout(t)
                }
            }, [_]), (0, i.useEffect)(() => {
                tn !== tu.current && ((tR(ti), tu.current = tn, tn) ? null == I || I() : ti.current = setTimeout(() => {
                    tc(!1), tp(null), null == R || R()
                }, (t => {
                    let e = t.match(/^([\d.]+)(ms|s)$/);
                    if (!e) return 0;
                    let [, i, s] = e;
                    return Number(i) * ("ms" === s ? 1 : 1e3)
                })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay")) + 25))
            }, [tn]);
            let tD = t => {
                    to(e => tL(e, t) ? e : t)
                },
                tB = (t = y) => {
                    tR(Q), th ? tP(!0) : Q.current = setTimeout(() => {
                        tP(!0)
                    }, t)
                },
                tW = (t = b) => {
                    tR(tt), tt.current = setTimeout(() => {
                        tx.current || tP(!1)
                    }, t)
                },
                tH = t => {
                    var e;
                    if (!t) return;
                    let i = null != (e = t.currentTarget) ? e : t.target;
                    (null == i ? void 0 : i.isConnected) ? (y ? tB() : tP(!0), Y(i), tm({
                        current: i
                    }), tR(tt)) : (Y(null), tm({
                        current: null
                    }))
                },
                tF = () => {
                    T ? tW(b || 100) : b ? tW() : tP(!1), tR(Q)
                },
                tX = ({
                    x: t,
                    y: e
                }) => {
                    var i;
                    tC({
                        place: null != (i = null == td ? void 0 : td.place) ? i : d,
                        offset: p,
                        elementReference: {
                            getBoundingClientRect: () => ({
                                x: t,
                                y: e,
                                width: 0,
                                height: 0,
                                top: e,
                                left: t,
                                right: t,
                                bottom: e
                            })
                        },
                        tooltipReference: Z.current,
                        tooltipArrowReference: J.current,
                        strategy: f,
                        middlewares: m,
                        border: G,
                        arrowSize: V
                    }).then(t => {
                        tD(t)
                    })
                },
                tY = t => {
                    if (!t) return;
                    let e = {
                        x: t.clientX,
                        y: t.clientY
                    };
                    tX(e), tg.current = e
                },
                tG = t => {
                    var e;
                    if (!tn) return;
                    let i = t.target;
                    i.isConnected && (null == (e = Z.current) || !e.contains(i)) && ([document.querySelector(`[id='${h}']`), ...tb].some(t => null == t ? void 0 : t.contains(i)) || (tP(!1), tR(Q)))
                },
                t$ = tE(tH, 50, !0),
                tU = tE(tF, 50, !0),
                tV = t => {
                    tU.cancel(), t$(t)
                },
                tq = () => {
                    t$.cancel(), tU()
                },
                tK = (0, i.useCallback)(() => {
                    var t, e;
                    let i = null != (t = null == td ? void 0 : td.position) ? t : N;
                    i ? tX(i) : v ? tg.current && tX(tg.current) : (null == X ? void 0 : X.isConnected) && tC({
                        place: null != (e = null == td ? void 0 : td.place) ? e : d,
                        offset: p,
                        elementReference: X,
                        tooltipReference: Z.current,
                        tooltipArrowReference: J.current,
                        strategy: f,
                        middlewares: m,
                        border: G,
                        arrowSize: V
                    }).then(t => {
                        tw.current && tD(t)
                    })
                }, [tn, X, j, P, d, null == td ? void 0 : td.place, p, f, N, null == td ? void 0 : td.position, v, V]);
            (0, i.useEffect)(() => {
                var t, e;
                let i = new Set(tf);
                tb.forEach(t => {
                    (null == B ? void 0 : B(t)) || i.add({
                        current: t
                    })
                });
                let s = document.querySelector(`[id='${h}']`);
                !s || (null == B ? void 0 : B(s)) || i.add({
                    current: s
                });
                let r = () => {
                        tP(!1)
                    },
                    a = tN(X),
                    c = tN(Z.current);
                tO.scroll && (window.addEventListener("scroll", r), null == a || a.addEventListener("scroll", r), null == c || c.addEventListener("scroll", r));
                let d = null;
                tO.resize ? window.addEventListener("resize", r) : X && Z.current && (d = function(t, e, i, s) {
                    let r;
                    void 0 === s && (s = {});
                    let {
                        ancestorScroll: a = !0,
                        ancestorResize: h = !0,
                        elementResize: c = "function" == typeof ResizeObserver,
                        layoutShift: d = "function" == typeof IntersectionObserver,
                        animationFrame: p = !1
                    } = s, u = tr(t), g = a || h ? [...u ? te(u) : [], ...te(e)] : [];
                    g.forEach(t => {
                        a && t.addEventListener("scroll", i, {
                            passive: !0
                        }), h && t.addEventListener("resize", i)
                    });
                    let f = u && d ? function(t, e) {
                            let i, s = null,
                                r = D(t);

                            function a() {
                                var t;
                                clearTimeout(i), null == (t = s) || t.disconnect(), s = null
                            }
                            return ! function h(c, d) {
                                void 0 === c && (c = !1), void 0 === d && (d = 1), a();
                                let p = t.getBoundingClientRect(),
                                    {
                                        left: u,
                                        top: g,
                                        width: f,
                                        height: m
                                    } = p;
                                if (c || e(), !f || !m) return;
                                let x = {
                                        rootMargin: -l(g) + "px " + -l(r.clientWidth - (u + f)) + "px " + -l(r.clientHeight - (g + m)) + "px " + -l(u) + "px",
                                        threshold: n(0, o(1, d)) || 1
                                    },
                                    y = !0;

                                function b(e) {
                                    let s = e[0].intersectionRatio;
                                    if (s !== d) {
                                        if (!y) return h();
                                        s ? h(!1, s) : i = setTimeout(() => {
                                            h(!1, 1e-7)
                                        }, 1e3)
                                    }
                                    1 !== s || ty(p, t.getBoundingClientRect()) || h(), y = !1
                                }
                                try {
                                    s = new IntersectionObserver(b, { ...x,
                                        root: r.ownerDocument
                                    })
                                } catch (t) {
                                    s = new IntersectionObserver(b, x)
                                }
                                s.observe(t)
                            }(!0), a
                        }(u, i) : null,
                        m = -1,
                        x = null;
                    c && (x = new ResizeObserver(t => {
                        let [s] = t;
                        s && s.target === u && x && (x.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                            var t;
                            null == (t = x) || t.observe(e)
                        })), i()
                    }), u && !p && x.observe(u), x.observe(e));
                    let y = p ? tl(t) : null;
                    return p && function e() {
                        let s = tl(t);
                        y && !ty(y, s) && i(), y = s, r = requestAnimationFrame(e)
                    }(), i(), () => {
                        var t;
                        g.forEach(t => {
                            a && t.removeEventListener("scroll", i), h && t.removeEventListener("resize", i)
                        }), null == f || f(), null == (t = x) || t.disconnect(), x = null, p && cancelAnimationFrame(r)
                    }
                }(X, Z.current, tK, {
                    ancestorResize: !0,
                    elementResize: !0,
                    layoutShift: !0
                }));
                let p = t => {
                    "Escape" === t.key && tP(!1)
                };
                tO.escape && window.addEventListener("keydown", p), tO.clickOutsideAnchor && window.addEventListener("click", tG);
                let u = [],
                    g = t => !!((null == t ? void 0 : t.target) && (null == X ? void 0 : X.contains(t.target))),
                    f = t => {
                        tn && g(t) || tH(t)
                    },
                    m = t => {
                        tn && g(t) && tF()
                    },
                    x = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"],
                    y = ["click", "dblclick", "mousedown", "mouseup"];
                Object.entries(tM).forEach(([t, e]) => {
                    e && (x.includes(t) ? u.push({
                        event: t,
                        listener: tV
                    }) : y.includes(t) && u.push({
                        event: t,
                        listener: f
                    }))
                }), Object.entries(tA).forEach(([t, e]) => {
                    e && (x.includes(t) ? u.push({
                        event: t,
                        listener: tq
                    }) : y.includes(t) && u.push({
                        event: t,
                        listener: m
                    }))
                }), v && u.push({
                    event: "pointermove",
                    listener: tY
                });
                let b = () => {
                        tx.current = !0
                    },
                    w = () => {
                        tx.current = !1, tF()
                    },
                    k = T && (tA.mouseout || tA.mouseleave);
                return k && (null == (t = Z.current) || t.addEventListener("mouseover", b), null == (e = Z.current) || e.addEventListener("mouseout", w)), u.forEach(({
                    event: t,
                    listener: e
                }) => {
                    i.forEach(i => {
                        var s;
                        null == (s = i.current) || s.addEventListener(t, e)
                    })
                }), () => {
                    var t, e;
                    tO.scroll && (window.removeEventListener("scroll", r), null == a || a.removeEventListener("scroll", r), null == c || c.removeEventListener("scroll", r)), tO.resize ? window.removeEventListener("resize", r) : null == d || d(), tO.clickOutsideAnchor && window.removeEventListener("click", tG), tO.escape && window.removeEventListener("keydown", p), k && (null == (t = Z.current) || t.removeEventListener("mouseover", b), null == (e = Z.current) || e.removeEventListener("mouseout", w)), u.forEach(({
                        event: t,
                        listener: e
                    }) => {
                        i.forEach(i => {
                            var s;
                            null == (s = i.current) || s.removeEventListener(t, e)
                        })
                    })
                }
            }, [X, tK, th, tf, tb, A, E, O, tk, y, b]), (0, i.useEffect)(() => {
                var t, i;
                let s = null != (i = null != (t = null == td ? void 0 : td.anchorSelect) ? t : c) ? i : "";
                !s && e && (s = `[data-tooltip-id='${e.replace(/'/g,"\\'")}']`);
                let r = new MutationObserver(t => {
                    let i = [],
                        r = [];
                    t.forEach(t => {
                        if ("attributes" === t.type && "data-tooltip-id" === t.attributeName && (t.target.getAttribute("data-tooltip-id") === e ? i.push(t.target) : t.oldValue === e && r.push(t.target)), "childList" === t.type) {
                            if (X) {
                                let e = [...t.removedNodes].filter(t => 1 === t.nodeType);
                                if (s) try {
                                    r.push(...e.filter(t => t.matches(s))), r.push(...e.flatMap(t => [...t.querySelectorAll(s)]))
                                } catch (t) {}
                                e.some(t => {
                                    var e;
                                    return !!(null == (e = null == t ? void 0 : t.contains) ? void 0 : e.call(t, X)) && (tc(!1), tP(!1), Y(null), tR(Q), tR(tt), !0)
                                })
                            }
                            if (s) try {
                                let e = [...t.addedNodes].filter(t => 1 === t.nodeType);
                                i.push(...e.filter(t => t.matches(s))), i.push(...e.flatMap(t => [...t.querySelectorAll(s)]))
                            } catch (t) {}
                        }
                    }), (i.length || r.length) && tv(t => [...t.filter(t => !r.includes(t)), ...i])
                });
                return r.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["data-tooltip-id"],
                    attributeOldValue: !0
                }), () => {
                    r.disconnect()
                }
            }, [e, c, null == td ? void 0 : td.anchorSelect, X]), (0, i.useEffect)(() => {
                tK()
            }, [tK]), (0, i.useEffect)(() => {
                if (!(null == z ? void 0 : z.current)) return () => null;
                let t = new ResizeObserver(() => {
                    setTimeout(() => tK())
                });
                return t.observe(z.current), () => {
                    t.disconnect()
                }
            }, [j, null == z ? void 0 : z.current]), (0, i.useEffect)(() => {
                var t;
                let e = document.querySelector(`[id='${h}']`),
                    i = [...tb, e];
                X && i.includes(X) || Y(null != (t = tb[0]) ? t : e)
            }, [h, tb, X]), (0, i.useEffect)(() => (W && tP(!0), () => {
                tR(Q), tR(tt)
            }), []), (0, i.useEffect)(() => {
                var t;
                let i = null != (t = null == td ? void 0 : td.anchorSelect) ? t : c;
                if (!i && e && (i = `[data-tooltip-id='${e.replace(/'/g,"\\'")}']`), i) try {
                    let t = Array.from(document.querySelectorAll(i));
                    tv(t)
                } catch (t) {
                    tv([])
                }
            }, [e, c, null == td ? void 0 : td.anchorSelect]), (0, i.useEffect)(() => {
                Q.current && (tR(Q), tB(y))
            }, [y]);
            let tZ = null != (K = null == td ? void 0 : td.content) ? K : j,
                tJ = tn && Object.keys(ts.tooltipStyles).length > 0;
            return (0, i.useImperativeHandle)(t, () => ({
                open: t => {
                    if (null == t ? void 0 : t.anchorSelect) try {
                        document.querySelector(t.anchorSelect)
                    } catch (e) {
                        return void console.warn(`[react-tooltip] "${t.anchorSelect}" is not a valid CSS selector`)
                    }
                    tp(null != t ? t : null), (null == t ? void 0 : t.delay) ? tB(t.delay) : tP(!0)
                },
                close: t => {
                    (null == t ? void 0 : t.delay) ? tW(t.delay): tP(!1)
                },
                activeAnchor: X,
                place: ts.place,
                isOpen: !!(th && !w && tZ && tJ)
            })), th && !w && tZ ? i.default.createElement(x, {
                id: e,
                role: q,
                className: (0, tT.default)("react-tooltip", tz.tooltip, t_.tooltip, t_[a], s, `react-tooltip__place-${ts.place}`, tz[tJ ? "show" : "closing"], tJ ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === f && tz.fixed, T && tz.clickable),
                onTransitionEnd: t => {
                    tR(ti), tn || "opacity" !== t.propertyName || (tc(!1), tp(null), null == R || R())
                },
                style: { ...P,
                    ...ts.tooltipStyles,
                    opacity: void 0 !== $ && tJ ? $ : void 0
                },
                ref: Z
            }, tZ, i.default.createElement(x, {
                className: (0, tT.default)("react-tooltip-arrow", tz.arrow, t_.arrow, r, k && tz.noArrow),
                style: { ...ts.tooltipArrowStyles,
                    background: U ? `linear-gradient(to right bottom, transparent 50%, ${U} 50%)` : void 0,
                    "--rt-arrow-size": `${V}px`
                },
                ref: J
            })) : null
        },
        tH = ({
            content: t
        }) => i.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: t
            }
        }),
        tF = i.default.forwardRef(({
            id: t,
            anchorId: e,
            anchorSelect: s,
            content: r,
            html: o,
            render: n,
            className: a,
            classNameArrow: l,
            variant: h = "dark",
            place: c = "top",
            offset: d = 10,
            wrapper: p = "div",
            children: u = null,
            events: g = ["hover"],
            openOnClick: f = !1,
            positionStrategy: m = "absolute",
            middlewares: x,
            delayShow: y = 0,
            delayHide: b = 0,
            float: v = !1,
            hidden: w = !1,
            noArrow: k = !1,
            clickable: T = !1,
            closeOnEsc: S = !1,
            closeOnScroll: M = !1,
            closeOnResize: C = !1,
            openEvents: A,
            closeEvents: E,
            globalCloseEvents: O,
            imperativeModeOnly: L = !1,
            style: P,
            position: N,
            isOpen: I,
            defaultIsOpen: R = !1,
            disableStyleInjection: D = !1,
            border: B,
            opacity: j,
            arrowColor: z,
            arrowSize: _,
            setIsOpen: W,
            afterShow: H,
            afterHide: F,
            disableTooltip: X,
            role: Y = "tooltip"
        }, G) => {
            let [$, U] = (0, i.useState)(r), [V, q] = (0, i.useState)(o), [K, Z] = (0, i.useState)(c), [J, Q] = (0, i.useState)(h), [tt, te] = (0, i.useState)(d), [ti, ts] = (0, i.useState)(y), [tr, to] = (0, i.useState)(b), [tn, ta] = (0, i.useState)(v), [tl, th] = (0, i.useState)(w), [tc, td] = (0, i.useState)(p), [tp, tu] = (0, i.useState)(g), [tg, tf] = (0, i.useState)(m), [tm, tx] = (0, i.useState)(null), [ty, tb] = (0, i.useState)(null), tv = (0, i.useRef)(null), tw = (0, i.useRef)(D), {
                anchorRefs: tk,
                activeAnchor: tS
            } = tj(t), tM = t => null == t ? void 0 : t.getAttributeNames().reduce((e, i) => {
                var s;
                return i.startsWith("data-tooltip-") && (e[i.replace(/^data-tooltip-/, "")] = null != (s = null == t ? void 0 : t.getAttribute(i)) ? s : null), e
            }, {}), tC = t => {
                let e = {
                    place: t => {
                        Z(null != t ? t : c)
                    },
                    content: t => {
                        U(null != t ? t : r)
                    },
                    html: t => {
                        q(null != t ? t : o)
                    },
                    variant: t => {
                        Q(null != t ? t : h)
                    },
                    offset: t => {
                        te(null === t ? d : Number(t))
                    },
                    wrapper: t => {
                        td(null != t ? t : p)
                    },
                    events: t => {
                        let e = null == t ? void 0 : t.split(" ");
                        tu(null != e ? e : g)
                    },
                    "position-strategy": t => {
                        tf(null != t ? t : m)
                    },
                    "delay-show": t => {
                        ts(null === t ? y : Number(t))
                    },
                    "delay-hide": t => {
                        to(null === t ? b : Number(t))
                    },
                    float: t => {
                        ta(null === t ? v : "true" === t)
                    },
                    hidden: t => {
                        th(null === t ? w : "true" === t)
                    },
                    "class-name": t => {
                        tx(t)
                    }
                };
                Object.values(e).forEach(t => t(null)), Object.entries(t).forEach(([t, i]) => {
                    var s;
                    null == (s = e[t]) || s.call(e, i)
                })
            };
            (0, i.useEffect)(() => {
                U(r)
            }, [r]), (0, i.useEffect)(() => {
                q(o)
            }, [o]), (0, i.useEffect)(() => {
                Z(c)
            }, [c]), (0, i.useEffect)(() => {
                Q(h)
            }, [h]), (0, i.useEffect)(() => {
                te(d)
            }, [d]), (0, i.useEffect)(() => {
                ts(y)
            }, [y]), (0, i.useEffect)(() => {
                to(b)
            }, [b]), (0, i.useEffect)(() => {
                ta(v)
            }, [v]), (0, i.useEffect)(() => {
                th(w)
            }, [w]), (0, i.useEffect)(() => {
                tf(m)
            }, [m]), (0, i.useEffect)(() => {
                tw.current !== D && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")
            }, [D]), (0, i.useEffect)(() => {
                "u" > typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", {
                    detail: {
                        disableCore: "core" === D,
                        disableBase: D
                    }
                }))
            }, []), (0, i.useEffect)(() => {
                var i;
                let r = new Set(tk),
                    o = s;
                if (!o && t && (o = `[data-tooltip-id='${t.replace(/'/g,"\\'")}']`), o) try {
                    document.querySelectorAll(o).forEach(t => {
                        r.add({
                            current: t
                        })
                    })
                } catch (t) {
                    console.warn(`[react-tooltip] "${o}" is not a valid CSS selector`)
                }
                let n = document.querySelector(`[id='${e}']`);
                if (n && r.add({
                        current: n
                    }), !r.size) return () => null;
                let a = null != (i = null != ty ? ty : n) ? i : tS.current,
                    l = new MutationObserver(t => {
                        t.forEach(t => {
                            var e;
                            a && "attributes" === t.type && (null == (e = t.attributeName) ? void 0 : e.startsWith("data-tooltip-")) && tC(tM(a))
                        })
                    });
                return a && (tC(tM(a)), l.observe(a, {
                    attributes: !0,
                    childList: !1,
                    subtree: !1
                })), () => {
                    l.disconnect()
                }
            }, [tk, tS, ty, e, s]), (0, i.useEffect)(() => {
                (null == P ? void 0 : P.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), B && !tA("border", `${B}`) && console.warn(`[react-tooltip] "${B}" is not a valid \`border\`.`), (null == P ? void 0 : P.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), j && !tA("opacity", `${j}`) && console.warn(`[react-tooltip] "${j}" is not a valid \`opacity\`.`)
            }, []);
            let tE = u,
                tO = (0, i.useRef)(null);
            if (n) {
                let t = n({
                    content: (null == ty ? void 0 : ty.getAttribute("data-tooltip-content")) || $ || null,
                    activeAnchor: ty
                });
                tE = t ? i.default.createElement("div", {
                    ref: tO,
                    className: "react-tooltip-content-wrapper"
                }, t) : null
            } else $ && (tE = $);
            V && (tE = i.default.createElement(tH, {
                content: V
            }));
            let tL = {
                forwardRef: G,
                id: t,
                anchorId: e,
                anchorSelect: s,
                className: (0, tT.default)(a, tm),
                classNameArrow: l,
                content: tE,
                contentWrapperRef: tO,
                place: K,
                variant: J,
                offset: tt,
                wrapper: tc,
                events: tp,
                openOnClick: f,
                positionStrategy: tg,
                middlewares: x,
                delayShow: ti,
                delayHide: tr,
                float: tn,
                hidden: tl,
                noArrow: k,
                clickable: T,
                closeOnEsc: S,
                closeOnScroll: M,
                closeOnResize: C,
                openEvents: A,
                closeEvents: E,
                globalCloseEvents: O,
                imperativeModeOnly: L,
                style: P,
                position: N,
                isOpen: I,
                defaultIsOpen: R,
                border: B,
                opacity: j,
                arrowColor: z,
                arrowSize: _,
                setIsOpen: W,
                afterShow: H,
                afterHide: F,
                disableTooltip: X,
                activeAnchor: ty,
                previousActiveAnchor: tv.current,
                setActiveAnchor: t => {
                    tb(e => ((null == t ? void 0 : t.isSameNode(e)) || (tv.current = e), t))
                },
                role: Y
            };
            return i.default.createElement(tW, { ...tL
            })
        });
    "u" > typeof window && window.addEventListener("react-tooltip-inject-styles", t => {
        t.detail.disableCore || tM({
            css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
            type: "core"
        }), t.detail.disableBase || tM({
            css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
            type: "base"
        })
    }), t.s(["Tooltip", () => tF], 96746)
}, 64961, (t, e, i) => {
    var s;
    s = "u" < typeof window ? t.e : window, s._Highcharts = (() => {
        "use strict";
        let t, e, i, s, r, o;
        var n, a, l, h, c, d, p, u, g, f, m, x, y, b, v, w, k, T, S, M, C, A, E, O, L, P, N, I, R = {};
        R.d = (t, e) => {
            for (var i in e) R.o(e, i) && !R.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
        }, R.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
        var D = {};
        R.d(D, {
            default: () => hq
        }), (n = m || (m = {})).SVG_NS = "http://www.w3.org/2000/svg", n.product = "Highcharts", n.version = "12.5.0", n.win = "u" > typeof window ? window : {}, n.doc = n.win.document, n.svg = !!n.doc ? .createElementNS ? .(n.SVG_NS, "svg") ? .createSVGRect, n.pageLang = n.doc ? .documentElement ? .closest("[lang]") ? .lang, n.userAgent = n.win.navigator ? .userAgent || "", n.isChrome = n.win.chrome, n.isFirefox = -1 !== n.userAgent.indexOf("Firefox"), n.isMS = /(edge|msie|trident)/i.test(n.userAgent) && !n.win.opera, n.isSafari = !n.isChrome && -1 !== n.userAgent.indexOf("Safari"), n.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(n.userAgent), n.isWebKit = -1 !== n.userAgent.indexOf("AppleWebKit"), n.deg2rad = 2 * Math.PI / 360, n.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], n.noop = function() {}, n.supportsPassiveEvents = function() {
            let t = !1;
            if (!n.isMS) {
                let e = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0
                    }
                });
                n.win.addEventListener && n.win.removeEventListener && (n.win.addEventListener("testPassive", n.noop, e), n.win.removeEventListener("testPassive", n.noop, e))
            }
            return t
        }(), n.charts = [], n.composed = [], n.dateFormats = {}, n.seriesTypes = {}, n.symbolSizes = {}, n.chartCount = 0;
        let B = m,
            {
                charts: j,
                doc: z,
                win: _
            } = B;

        function W(t, e, i, s) {
            let r = e ? "Highcharts error" : "Highcharts warning";
            32 === t && (t = `${r}: Deprecated member`);
            let o = U(t),
                n = o ? `${r} #${t}: www.highcharts.com/errors/${t}/` : t.toString();
            if (void 0 !== s) {
                let t = "";
                o && (n += "?"), ts(s, function(e, i) {
                    t += `
 - ${i}: ${e}`, o && (n += encodeURI(i) + "=" + encodeURI(e))
                }), n += t
            }
            to(B, "displayError", {
                chart: i,
                code: t,
                message: n,
                params: s
            }, function() {
                if (e) throw Error(n);
                _.console && -1 === W.messages.indexOf(n) && console.warn(n)
            }), W.messages.push(n)
        }

        function H(t, e) {
            return parseInt(t, e || 10)
        }

        function F(t) {
            return "string" == typeof t
        }

        function X(t) {
            let e = Object.prototype.toString.call(t);
            return "[object Array]" === e || "[object Array Iterator]" === e
        }

        function Y(t, e) {
            return !!t && "object" == typeof t && (!e || !X(t))
        }

        function G(t) {
            return Y(t) && "number" == typeof t.nodeType
        }

        function $(t) {
            let e = t ? .constructor;
            return !!(Y(t, !0) && !G(t) && e ? .name && "Object" !== e.name)
        }

        function U(t) {
            return "number" == typeof t && !isNaN(t) && t < 1 / 0 && t > -1 / 0
        }

        function V(t) {
            return null != t
        }

        function q(t, e, i) {
            let s, r = F(e) && !V(i),
                o = (e, i) => {
                    V(e) ? t.setAttribute(i, e) : r ? (s = t.getAttribute(i)) || "class" !== i || (s = t.getAttribute(i + "Name")) : t.removeAttribute(i)
                };
            return F(e) ? o(i, e) : ts(e, o), s
        }

        function K(t) {
            return X(t) ? t : [t]
        }

        function Z(t, e) {
            let i;
            for (i in t || (t = {}), e) t[i] = e[i];
            return t
        }

        function J() {
            let t = arguments,
                e = t.length;
            for (let i = 0; i < e; i++) {
                let e = t[i];
                if (null != e) return e
            }
        }

        function Q(t, e) {
            Z(t.style, e)
        }

        function tt(t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
        }

        function te(t, e) {
            return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14))
        }(W || (W = {})).messages = [], Math.easeInOutSine = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        };
        let ti = Array.prototype.find ? function(t, e) {
            return t.find(e)
        } : function(t, e) {
            let i, s = t.length;
            for (i = 0; i < s; i++)
                if (e(t[i], i)) return t[i]
        };

        function ts(t, e, i) {
            for (let s in t) Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t)
        }

        function tr(t, e, i) {
            function s(e, i) {
                let s = t.removeEventListener;
                s && s.call(t, e, i, !1)
            }

            function r(i) {
                let r, o;
                t.nodeName && (e ? (r = {})[e] = !0 : r = i, ts(r, function(t, e) {
                    if (i[e])
                        for (o = i[e].length; o--;) s(e, i[e][o].fn)
                }))
            }
            let o = "function" == typeof t && t.prototype || t;
            if (Object.hasOwnProperty.call(o, "hcEvents")) {
                let t = o.hcEvents;
                if (e) {
                    let o = t[e] || [];
                    i ? (t[e] = o.filter(function(t) {
                        return i !== t.fn
                    }), s(e, i)) : (r(t), t[e] = [])
                } else r(t), delete o.hcEvents
            }
        }

        function to(t, e, i, s) {
            if (i = i || {}, z ? .createEvent && (t.dispatchEvent || t.fireEvent && t !== B)) {
                let s = z.createEvent("Events");
                s.initEvent(e, !0, !0), i = Z(s, i), t.dispatchEvent ? t.dispatchEvent(i) : t.fireEvent(e, i)
            } else if (t.hcEvents) {
                i.target || Z(i, {
                    preventDefault: function() {
                        i.defaultPrevented = !0
                    },
                    target: t,
                    type: e
                });
                let s = [],
                    r = t,
                    o = !1;
                for (; r.hcEvents;) Object.hasOwnProperty.call(r, "hcEvents") && r.hcEvents[e] && (s.length && (o = !0), s.unshift.apply(s, r.hcEvents[e])), r = Object.getPrototypeOf(r);
                o && s.sort((t, e) => t.order - e.order), s.forEach(e => {
                    !1 === e.fn.call(t, i) && i.preventDefault()
                })
            }
            s && !i.defaultPrevented && s.call(t, i)
        }
        let tn = (i = Math.random().toString(36).substring(2, 9) + "-", s = 0, function() {
            return "highcharts-" + (t ? "" : i) + s++
        });
        _.jQuery && (_.jQuery.fn.highcharts = function() {
            let t = [].slice.call(arguments);
            if (this[0]) return t[0] ? (new B[F(t[0]) ? t.shift() : "Chart"](this[0], t[0], t[1]), this) : j[q(this[0], "data-highcharts-chart")]
        });
        let ta = {
                addEvent: function(t, e, i, s = {}) {
                    let r = "function" == typeof t && t.prototype || t;
                    Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
                    let o = r.hcEvents;
                    B.Point && t instanceof B.Point && t.series && t.series.chart && (t.series.chart.runTrackerClick = !0);
                    let n = t.addEventListener;
                    n && n.call(t, e, i, !!B.supportsPassiveEvents && {
                        passive: void 0 === s.passive ? -1 !== e.indexOf("touch") : s.passive,
                        capture: !1
                    }), o[e] || (o[e] = []);
                    let a = {
                        fn: i,
                        order: "number" == typeof s.order ? s.order : 1 / 0
                    };
                    return o[e].push(a), o[e].sort((t, e) => t.order - e.order),
                        function() {
                            tr(t, e, i)
                        }
                },
                arrayMax: function(t) {
                    let e = t.length,
                        i = t[0];
                    for (; e--;) t[e] > i && (i = t[e]);
                    return i
                },
                arrayMin: function(t) {
                    let e = t.length,
                        i = t[0];
                    for (; e--;) t[e] < i && (i = t[e]);
                    return i
                },
                attr: q,
                clamp: function(t, e, i) {
                    return t > e ? t < i ? t : i : e
                },
                clearTimeout: function(t) {
                    V(t) && clearTimeout(t)
                },
                correctFloat: te,
                createElement: function(t, e, i, s, r) {
                    let o = z.createElement(t);
                    return e && Z(o, e), r && Q(o, {
                        padding: "0",
                        border: "none",
                        margin: "0"
                    }), i && Q(o, i), s && s.appendChild(o), o
                },
                crisp: function(t, e = 0, i) {
                    let s = e % 2 / 2,
                        r = i ? -1 : 1;
                    return (Math.round(t * r - s) + s) * r
                },
                css: Q,
                defined: V,
                destroyObjectProperties: function(t, e, i) {
                    ts(t, function(s, r) {
                        s !== e && s ? .destroy && s.destroy(), (s ? .destroy || !i) && delete t[r]
                    })
                },
                diffObjects: function(t, e, i, s) {
                    let r = {};
                    return ! function t(e, r, o, n) {
                        let a = i ? r : e;
                        ts(e, function(i, l) {
                            if (!n && s && s.indexOf(l) > -1 && r[l]) {
                                i = K(i), o[l] = [];
                                for (let e = 0; e < Math.max(i.length, r[l].length); e++) r[l][e] && (void 0 === i[e] ? o[l][e] = r[l][e] : (o[l][e] = {}, t(i[e], r[l][e], o[l][e], n + 1)))
                            } else Y(i, !0) && !i.nodeType ? (o[l] = X(i) ? [] : {}, t(i, r[l] || {}, o[l], n + 1), 0 === Object.keys(o[l]).length && ("colorAxis" !== l || 0 !== n) && delete o[l]) : (e[l] !== r[l] || l in e && !(l in r)) && "__proto__" !== l && "constructor" !== l && (o[l] = a[l])
                        })
                    }(t, e, r, 0), r
                },
                discardElement: function(t) {
                    t ? .parentElement ? .removeChild(t)
                },
                erase: function(t, e) {
                    let i = t.length;
                    for (; i--;)
                        if (t[i] === e) {
                            t.splice(i, 1);
                            break
                        }
                },
                error: W,
                extend: Z,
                extendClass: function(t, e) {
                    let i = function() {};
                    return i.prototype = new t, Z(i.prototype, e), i
                },
                find: ti,
                fireEvent: to,
                getAlignFactor: (t = "") => ({
                    center: .5,
                    right: 1,
                    middle: .5,
                    bottom: 1
                })[t] || 0,
                getClosestDistance: function(t, e) {
                    let i, s, r, o, n = !e;
                    return t.forEach(t => {
                        if (t.length > 1)
                            for (o = s = t.length - 1; o > 0; o--)(r = t[o] - t[o - 1]) < 0 && !n ? (e ? .(), e = void 0) : r && (void 0 === i || r < i) && (i = r)
                    }), i
                },
                getMagnitude: tt,
                getNestedProperty: function(t, e) {
                    let i = t.split(".");
                    for (; i.length && V(e);) {
                        let t = i.shift();
                        if (void 0 === t || "__proto__" === t) return;
                        if ("this" === t) {
                            let t;
                            return Y(e) && (t = e["@this"]), t ? ? e
                        }
                        let s = e[t.replace(/[\\'"]/g, "")];
                        if (!V(s) || "function" == typeof s || "number" == typeof s.nodeType || s === _) return;
                        e = s
                    }
                    return e
                },
                getStyle: function t(e, i, s) {
                    let r;
                    if ("width" === i) {
                        let i = Math.min(e.offsetWidth, e.scrollWidth),
                            s = e.getBoundingClientRect ? .().width;
                        return s < i && s >= i - 1 && (i = Math.floor(s)), Math.max(0, i - (t(e, "padding-left", !0) || 0) - (t(e, "padding-right", !0) || 0))
                    }
                    if ("height" === i) return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (t(e, "padding-top", !0) || 0) - (t(e, "padding-bottom", !0) || 0));
                    let o = _.getComputedStyle(e, void 0);
                    return o && (r = o.getPropertyValue(i), J(s, "opacity" !== i) && (r = H(r))), r
                },
                insertItem: function(t, e) {
                    let i, s = t.options.index,
                        r = e.length;
                    for (i = t.options.isInternal ? r : 0; i < r + 1; i++)
                        if (!e[i] || U(s) && s < J(e[i].options.index, e[i]._i) || e[i].options.isInternal) {
                            e.splice(i, 0, t);
                            break
                        }
                    return i
                },
                isArray: X,
                isClass: $,
                isDOMElement: G,
                isFunction: function(t) {
                    return "function" == typeof t
                },
                isNumber: U,
                isObject: Y,
                isString: F,
                merge: function(t, ...e) {
                    let i, s = [t, ...e],
                        r = {},
                        o = function(t, e) {
                            return "object" != typeof t && (t = {}), ts(e, function(i, s) {
                                "__proto__" !== s && "constructor" !== s && (!Y(i, !0) || $(i) || G(i) ? t[s] = e[s] : t[s] = o(t[s] || {}, i))
                            }), t
                        };
                    !0 === t && (r = s[1], s = Array.prototype.slice.call(s, 2));
                    let n = s.length;
                    for (i = 0; i < n; i++) r = o(r, s[i]);
                    return r
                },
                normalizeTickInterval: function(t, e, i, s, r) {
                    let o, n = t;
                    i = J(i, tt(t));
                    let a = t / i;
                    for (!e && (e = r ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === s && (1 === i ? e = e.filter(function(t) {
                            return t % 1 == 0
                        }) : i <= .1 && (e = [1 / i]))), o = 0; o < e.length && (n = e[o], (!r || !(n * i >= t)) && (r || !(a <= (e[o] + (e[o + 1] || e[o])) / 2))); o++);
                    return te(n * i, -Math.round(Math.log(.001) / Math.LN10))
                },
                objectEach: ts,
                offset: function(t) {
                    let e = z.documentElement,
                        i = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        };
                    return {
                        top: i.top + (_.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (_.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                        width: i.width,
                        height: i.height
                    }
                },
                pad: function(t, e, i) {
                    return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t
                },
                pick: J,
                pInt: H,
                pushUnique: function(t, e) {
                    return 0 > t.indexOf(e) && !!t.push(e)
                },
                relativeLength: function(t, e, i) {
                    return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                },
                removeEvent: tr,
                replaceNested: function(t, ...e) {
                    let i, s;
                    do
                        for (s of (i = t, e)) t = t.replace(s[0], s[1]); while (t !== i) return t
                },
                splat: K,
                stableSort: function(t, e) {
                    let i, s, r = t.length;
                    for (s = 0; s < r; s++) t[s].safeI = s;
                    for (t.sort(function(t, s) {
                            return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i
                        }), s = 0; s < r; s++) delete t[s].safeI
                },
                syncTimeout: function(t, e, i) {
                    return e > 0 ? setTimeout(t, e, i) : (t.call(0, i), -1)
                },
                timeUnits: {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                    month: 24192e5,
                    year: 314496e5
                },
                ucfirst: function(t) {
                    return F(t) ? t.substring(0, 1).toUpperCase() + t.substring(1) : String(t)
                },
                uniqueKey: tn,
                useSerialIds: function(e) {
                    return t = J(e, t)
                },
                wrap: function(t, e, i) {
                    let s = t[e];
                    t[e] = function() {
                        let t = arguments,
                            e = this;
                        return i.apply(this, [function() {
                            return s.apply(e, arguments.length ? arguments : t)
                        }].concat([].slice.call(arguments)))
                    }
                }
            },
            {
                pageLang: tl,
                win: th
            } = B,
            {
                defined: tc,
                error: td,
                extend: tp,
                isNumber: tu,
                isObject: tg,
                isString: tf,
                merge: tm,
                objectEach: tx,
                pad: ty,
                splat: tb,
                timeUnits: tv,
                ucfirst: tw
            } = ta,
            tk = B.isSafari && th.Intl && !th.Intl.DateTimeFormat.prototype.formatRange,
            tT = class {
                constructor(t, e) {
                    this.options = {
                        timezone: "UTC"
                    }, this.variableTimezone = !1, this.Date = th.Date, this.update(t), this.lang = e
                }
                update(t = {}) {
                    this.dTLCache = {}, this.options = t = tm(!0, this.options, t);
                    let {
                        timezoneOffset: e,
                        useUTC: i,
                        locale: s
                    } = t;
                    this.Date = t.Date || th.Date || Date;
                    let r = t.timezone;
                    tc(i) && (r = i ? "UTC" : void 0), e && e % 60 == 0 && (r = "Etc/GMT" + (e > 0 ? "+" : "") + e / 60), this.variableTimezone = "UTC" !== r && r ? .indexOf("Etc/GMT") !== 0, this.timezone = r, this.lang && s && (this.lang.locale = s), ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach(t => {
                        let e = /months/i.test(t),
                            i = /short/.test(t),
                            s = {
                                timeZone: "UTC"
                            };
                        s[e ? "month" : "weekday"] = i ? "short" : "long", this[t] = (e ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map(t => this.dateFormat(s, (e ? 31 : 1) * 24 * 36e5 * t))
                    })
                }
                toParts(t) {
                    let [e, i, s, r, o, n, a] = this.dateTimeFormat({
                        weekday: "narrow",
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    }, t, "es").split(/(?:, | |\/|:)/g);
                    return [r, s - 1, i, o, n, a, Math.floor(Number(t) || 0) % 1e3, "DLMXJVS".indexOf(e)].map(Number)
                }
                dateTimeFormat(t, e, i = this.options.locale || tl) {
                    let s = JSON.stringify(t) + i;
                    tf(t) && (t = this.str2dtf(t));
                    let r = this.dTLCache[s];
                    if (!r) {
                        t.timeZone ? ? (t.timeZone = this.timezone);
                        try {
                            r = new Intl.DateTimeFormat(i, t)
                        } catch (e) {
                            /Invalid time zone/i.test(e.message) ? (td(34), t.timeZone = "UTC", r = new Intl.DateTimeFormat(i, t)) : td(e.message, !1)
                        }
                    }
                    return this.dTLCache[s] = r, r ? .format(e) || ""
                }
                str2dtf(t, e = {}) {
                    let i = {
                        L: {
                            fractionalSecondDigits: 3
                        },
                        S: {
                            second: "2-digit"
                        },
                        M: {
                            minute: "numeric"
                        },
                        H: {
                            hour: "2-digit"
                        },
                        k: {
                            hour: "numeric"
                        },
                        E: {
                            weekday: "narrow"
                        },
                        a: {
                            weekday: "short"
                        },
                        A: {
                            weekday: "long"
                        },
                        d: {
                            day: "2-digit"
                        },
                        e: {
                            day: "numeric"
                        },
                        b: {
                            month: "short"
                        },
                        B: {
                            month: "long"
                        },
                        m: {
                            month: "2-digit"
                        },
                        o: {
                            month: "numeric"
                        },
                        y: {
                            year: "2-digit"
                        },
                        Y: {
                            year: "numeric"
                        }
                    };
                    return Object.keys(i).forEach(s => {
                        -1 !== t.indexOf(s) && tp(e, i[s])
                    }), e
                }
                makeTime(t, e, i = 1, s = 0, r, o, n) {
                    let a = this.Date.UTC(t, e, i, s, r || 0, o || 0, n || 0);
                    if ("UTC" !== this.timezone) {
                        let t = this.getTimezoneOffset(a);
                        if (a += t, -1 !== [2, 3, 8, 9, 10, 11].indexOf(e) && (s < 5 || s > 20)) {
                            let e = this.getTimezoneOffset(a);
                            t !== e ? a += e - t : t - 36e5 !== this.getTimezoneOffset(a - 36e5) || tk || (a -= 36e5)
                        }
                    }
                    return a
                }
                parse(t) {
                    if (!tf(t)) return t ? ? void 0;
                    let e = (t = t.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(t),
                        i = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(t);
                    e || i || (t += "Z");
                    let s = Date.parse(t);
                    if (tu(s)) return s + (!e || i ? this.getTimezoneOffset(s) : 0)
                }
                getTimezoneOffset(t) {
                    if ("UTC" !== this.timezone) {
                        let [e, i, s, r, o = 0] = this.dateTimeFormat({
                            timeZoneName: "shortOffset"
                        }, t, "en").split(/(GMT|:)/).map(Number), n = -(60 * (s + o / 60) * 6e4);
                        if (tu(n)) return n
                    }
                    return 0
                }
                dateFormat(t, e, i) {
                    let s = this.lang;
                    if (!tc(e) || isNaN(e)) return s ? .invalidDate || "";
                    if (tf(t = t ? ? "%Y-%m-%d %H:%M:%S")) {
                        let i, r = /%\[([a-zA-Z]+)\]/g;
                        for (; i = r.exec(t);) t = t.replace(i[0], this.dateTimeFormat(i[1], e, s ? .locale))
                    }
                    if (tf(t) && -1 !== t.indexOf("%")) {
                        let i = this,
                            [r, o, n, a, l, h, c, d] = this.toParts(e),
                            p = s ? .weekdays || this.weekdays,
                            u = s ? .shortWeekdays || this.shortWeekdays,
                            g = s ? .months || this.months,
                            f = s ? .shortMonths || this.shortMonths;
                        tx(tp({
                            a: u ? u[d] : p[d].substr(0, 3),
                            A: p[d],
                            d: ty(n),
                            e: ty(n, 2, " "),
                            w: d,
                            v: s ? .weekFrom ? ? "",
                            b: f[o],
                            B: g[o],
                            m: ty(o + 1),
                            o: o + 1,
                            y: r.toString().substr(2, 2),
                            Y: r,
                            H: ty(a),
                            k: a,
                            I: ty(a % 12 || 12),
                            l: a % 12 || 12,
                            M: ty(l),
                            p: a < 12 ? "AM" : "PM",
                            P: a < 12 ? "am" : "pm",
                            S: ty(h),
                            L: ty(c, 3)
                        }, B.dateFormats), function(s, r) {
                            if (tf(t))
                                for (; - 1 !== t.indexOf("%" + r);) t = t.replace("%" + r, "function" == typeof s ? s.call(i, e) : s)
                        })
                    } else if (tg(t)) {
                        let i = (this.getTimezoneOffset(e) || 0) / 36e5,
                            s = this.timezone || "Etc/GMT" + (i >= 0 ? "+" : "") + i,
                            {
                                prefix: r = "",
                                suffix: o = ""
                            } = t;
                        t = r + this.dateTimeFormat(tp({
                            timeZone: s
                        }, t), e) + o
                    }
                    return i ? tw(t) : t
                }
                resolveDTLFormat(t) {
                    return tg(t, !0) ? tg(t, !0) && void 0 === t.main ? {
                        main: t
                    } : t : {
                        main: (t = tb(t))[0],
                        from: t[1],
                        to: t[2]
                    }
                }
                getDateFormat(t, e, i, s) {
                    let r = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                        o = "01-01 00:00:00.000",
                        n = {
                            millisecond: 15,
                            second: 12,
                            minute: 9,
                            hour: 6,
                            day: 3
                        },
                        a = "millisecond",
                        l = a;
                    for (a in tv) {
                        if (t && t === tv.week && +this.dateFormat("%w", e) === i && r.substr(6) === o.substr(6)) {
                            a = "week";
                            break
                        }
                        if (t && tv[a] > t) {
                            a = l;
                            break
                        }
                        if (n[a] && r.substr(n[a]) !== o.substr(n[a])) break;
                        "week" !== a && (l = a)
                    }
                    return this.resolveDTLFormat(s[a]).main
                }
            },
            {
                defined: tS,
                extend: tM,
                timeUnits: tC
            } = ta,
            tA = class extends tT {
                getTimeTicks(t, e, i, s) {
                    let r = this,
                        o = [],
                        n = {},
                        {
                            count: a = 1,
                            unitRange: l
                        } = t,
                        [h, c, d, p, u, g] = r.toParts(e),
                        f = (e || 0) % 1e3,
                        m;
                    if (s ? ? (s = 1), tS(e)) {
                        if (f = l >= tC.second ? 0 : a * Math.floor(f / a), l >= tC.second && (g = l >= tC.minute ? 0 : a * Math.floor(g / a)), l >= tC.minute && (u = l >= tC.hour ? 0 : a * Math.floor(u / a)), l >= tC.hour && (p = l >= tC.day ? 0 : a * Math.floor(p / a)), l >= tC.day && (d = l >= tC.month ? 1 : Math.max(1, a * Math.floor(d / a))), l >= tC.month && (c = l >= tC.year ? 0 : a * Math.floor(c / a)), l >= tC.year && (h -= h % a), l === tC.week) {
                            a && (e = r.makeTime(h, c, d, p, u, g, f));
                            let t = this.dateTimeFormat({
                                    timeZone: this.timezone,
                                    weekday: "narrow"
                                }, e, "es"),
                                i = "DLMXJVS".indexOf(t);
                            d += -i + s + (i < s ? -7 : 0)
                        }
                        e = r.makeTime(h, c, d, p, u, g, f), r.variableTimezone && tS(i) && (m = i - e > 4 * tC.month || r.getTimezoneOffset(e) !== r.getTimezoneOffset(i));
                        let t = e,
                            x = 1;
                        for (; t < i;) o.push(t), l === tC.year ? t = r.makeTime(h + x * a, 0) : l === tC.month ? t = r.makeTime(h, c + x * a) : m && (l === tC.day || l === tC.week) ? t = r.makeTime(h, c, d + x * a * (l === tC.day ? 1 : 7)) : m && l === tC.hour && a > 1 ? t = r.makeTime(h, c, d, p + x * a) : t += l * a, x++;
                        o.push(t), l <= tC.hour && o.length < 1e4 && o.forEach(t => {
                            t % 18e5 == 0 && "000000000" === r.dateFormat("%H%M%S%L", t) && (n[t] = "day")
                        })
                    }
                    return o.info = tM(t, {
                        higherRanks: n,
                        totalRange: l * a
                    }), o
                }
            },
            {
                isTouchDevice: tE
            } = B,
            {
                fireEvent: tO,
                merge: tL
            } = ta,
            tP = {
                colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"],
                symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                lang: {
                    weekFrom: "week from",
                    chartTitle: "Chart title",
                    locale: void 0,
                    loading: "Loading...",
                    months: void 0,
                    seriesName: "Series {add index 1}",
                    shortMonths: void 0,
                    weekdays: void 0,
                    numericSymbols: ["k", "M", "G", "T", "P", "E"],
                    pieSliceName: "Slice",
                    resetZoom: "Reset zoom",
                    yAxisTitle: "Values",
                    resetZoomTitle: "Reset zoom level 1:1"
                },
                global: {
                    buttonTheme: {
                        fill: "#f7f7f7",
                        padding: 8,
                        r: 2,
                        stroke: "#cccccc",
                        "stroke-width": 1,
                        style: {
                            color: "#333333",
                            cursor: "pointer",
                            fontSize: "0.8em",
                            fontWeight: "normal"
                        },
                        states: {
                            hover: {
                                fill: "#e6e6e6"
                            },
                            select: {
                                fill: "#e6e9ff",
                                style: {
                                    color: "#000000",
                                    fontWeight: "bold"
                                }
                            },
                            disabled: {
                                style: {
                                    color: "#cccccc"
                                }
                            }
                        }
                    }
                },
                time: {
                    Date: void 0,
                    timezone: "UTC",
                    timezoneOffset: 0,
                    useUTC: void 0
                },
                chart: {
                    alignThresholds: !1,
                    panning: {
                        enabled: !1,
                        type: "x"
                    },
                    styledMode: !1,
                    borderRadius: 0,
                    colorCount: 10,
                    allowMutatingData: !0,
                    ignoreHiddenSeries: !0,
                    spacing: [10, 10, 15, 10],
                    resetZoomButton: {
                        theme: {},
                        position: {}
                    },
                    reflow: !0,
                    type: "line",
                    zooming: {
                        singleTouch: !1,
                        resetButton: {
                            theme: {
                                zIndex: 6
                            },
                            position: {
                                align: "right",
                                x: -10,
                                y: 10
                            }
                        }
                    },
                    width: null,
                    height: null,
                    borderColor: "#334eff",
                    backgroundColor: "#ffffff",
                    plotBorderColor: "#cccccc"
                },
                title: {
                    style: {
                        color: "#333333",
                        fontWeight: "bold"
                    },
                    text: "Chart title",
                    margin: 15,
                    minScale: .67
                },
                subtitle: {
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    },
                    text: ""
                },
                caption: {
                    margin: 15,
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    },
                    text: "",
                    align: "left",
                    verticalAlign: "bottom"
                },
                plotOptions: {},
                legend: {
                    enabled: !0,
                    align: "center",
                    alignColumns: !0,
                    className: "highcharts-no-tooltip",
                    events: {},
                    layout: "horizontal",
                    itemMarginBottom: 2,
                    itemMarginTop: 2,
                    labelFormatter: function() {
                        return this.name
                    },
                    borderColor: "#999999",
                    borderRadius: 0,
                    navigation: {
                        style: {
                            fontSize: "0.8em"
                        },
                        activeColor: "#0022ff",
                        inactiveColor: "#cccccc"
                    },
                    itemStyle: {
                        color: "#333333",
                        cursor: "pointer",
                        fontSize: "0.8em",
                        textDecoration: "none",
                        textOverflow: "ellipsis"
                    },
                    itemHoverStyle: {
                        color: "#000000"
                    },
                    itemHiddenStyle: {
                        color: "#666666",
                        textDecoration: "line-through"
                    },
                    shadow: !1,
                    itemCheckboxStyle: {
                        position: "absolute",
                        width: "13px",
                        height: "13px"
                    },
                    squareSymbol: !0,
                    symbolPadding: 5,
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    title: {
                        style: {
                            color: "#333333",
                            fontSize: "0.8em",
                            fontWeight: "bold"
                        }
                    }
                },
                loading: {
                    labelStyle: {
                        fontWeight: "bold",
                        position: "relative",
                        top: "45%"
                    },
                    style: {
                        position: "absolute",
                        backgroundColor: "#ffffff",
                        opacity: .5,
                        textAlign: "center"
                    }
                },
                tooltip: {
                    enabled: !0,
                    animation: {
                        duration: 300,
                        easing: t => Math.sqrt(1 - Math.pow(t - 1, 2))
                    },
                    borderRadius: 3,
                    dateTimeLabelFormats: {
                        millisecond: "%[AebHMSL]",
                        second: "%[AebHMS]",
                        minute: "%[AebHM]",
                        hour: "%[AebHM]",
                        day: "%[AebY]",
                        week: "%v %[AebY]",
                        month: "%[BY]",
                        year: "%Y"
                    },
                    footerFormat: "",
                    headerShape: "callout",
                    hideDelay: 500,
                    padding: 8,
                    position: {
                        x: 0,
                        y: 3
                    },
                    shared: !1,
                    snap: tE ? 25 : 10,
                    headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>',
                    pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                    backgroundColor: "#ffffff",
                    borderWidth: void 0,
                    stickOnContact: !1,
                    style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "0.8em"
                    },
                    useHTML: !1
                },
                credits: {
                    enabled: !0,
                    href: "https://www.highcharts.com?credits",
                    position: {
                        align: "right",
                        x: -10,
                        verticalAlign: "bottom",
                        y: -5
                    },
                    style: {
                        cursor: "pointer",
                        color: "#999999",
                        fontSize: "0.6em"
                    },
                    text: "Highcharts.com"
                }
            },
            tN = new tA(tP.time, tP.lang),
            tI = {
                defaultOptions: tP,
                defaultTime: tN,
                getOptions: function() {
                    return tP
                },
                setOptions: function(t) {
                    return tO(B, "setOptions", {
                        options: t
                    }), tL(!0, tP, t), t.time && tN.update(tP.time), t.lang && "locale" in t.lang && tN.update({
                        locale: t.lang.locale
                    }), t.lang ? .chartTitle && (tP.title = { ...tP.title,
                        text: t.lang.chartTitle
                    }), tP
                }
            },
            {
                win: tR
            } = B,
            {
                isNumber: tD,
                isString: tB,
                merge: tj,
                pInt: tz,
                defined: t_
            } = ta,
            tW = (t, e, i) => `color-mix(in srgb,${t},${e} ${100*i}%)`,
            tH = t => tB(t) && !!t && "none" !== t;
        class tF {
            static parse(t) {
                return t ? new tF(t) : tF.None
            }
            constructor(t) {
                let e, i, s, r;
                this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
                const o = B.Color;
                if (o && o !== tF) return new o(t);
                if ("object" == typeof t && void 0 !== t.stops) this.stops = t.stops.map(t => new tF(t[1]));
                else if ("string" == typeof t)
                    for (this.input = t = tF.names[t.toLowerCase()] || t, s = tF.parsers.length; s-- && !i;)(e = (r = tF.parsers[s]).regex.exec(t)) && (i = r.parse(e));
                i && (this.rgba = i)
            }
            get(t) {
                let e = this.input,
                    i = this.rgba;
                if (this.output) return this.output;
                if ("object" == typeof e && void 0 !== this.stops) {
                    let i = tj(e);
                    return i.stops = [].slice.call(i.stops), this.stops.forEach((e, s) => {
                        i.stops[s] = [i.stops[s][0], e.get(t)]
                    }), i
                }
                return i && tD(i[0]) ? "rgb" !== t && (t || 1 !== i[3]) ? "a" === t ? `${i[3]}` : "rgba(" + i.join(",") + ")" : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : e
            }
            brighten(t) {
                let e = this.rgba;
                if (this.stops) this.stops.forEach(function(e) {
                    e.brighten(t)
                });
                else if (tD(t) && 0 !== t)
                    if (tD(e[0]))
                        for (let i = 0; i < 3; i++) e[i] += tz(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
                    else tF.useColorMix && tH(this.input) && (this.output = tW(this.input, t > 0 ? "white" : "black", Math.abs(t)));
                return this
            }
            setOpacity(t) {
                return this.rgba[3] = t, this
            }
            tweenTo(t, e) {
                let i = this.rgba,
                    s = t.rgba;
                if (!tD(i[0]) || !tD(s[0])) return tF.useColorMix && tH(this.input) && tH(t.input) && e < .99 ? tW(this.input, t.input, e) : t.input || "none";
                let r = 1 !== s[3] || 1 !== i[3],
                    o = (t, s) => t + (i[s] - t) * (1 - e),
                    n = s.slice(0, 3).map(o).map(Math.round);
                return r && n.push(o(s[3], 3)), (r ? "rgba(" : "rgb(") + n.join(",") + ")"
            }
        }
        tF.names = {
            white: "#ffffff",
            black: "#000000"
        }, tF.parsers = [{
            regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
            parse: function(t) {
                return [tz(t[1]), tz(t[2]), tz(t[3]), parseFloat(t[4], 10)]
            }
        }, {
            regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
            parse: function(t) {
                return [tz(t[1]), tz(t[2]), tz(t[3]), 1]
            }
        }, {
            regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
            parse: function(t) {
                return [tz(t[1] + t[1], 16), tz(t[2] + t[2], 16), tz(t[3] + t[3], 16), t_(t[4]) ? tz(t[4] + t[4], 16) / 255 : 1]
            }
        }, {
            regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
            parse: function(t) {
                return [tz(t[1], 16), tz(t[2], 16), tz(t[3], 16), t_(t[4]) ? tz(t[4], 16) / 255 : 1]
            }
        }], tF.useColorMix = tR.CSS ? .supports("color", "color-mix(in srgb,red,blue 9%)"), tF.None = new tF("");
        let {
            parse: tX
        } = tF, {
            win: tY
        } = B, {
            isNumber: tG,
            objectEach: t$
        } = ta;
        class tU {
            constructor(t, e, i) {
                this.pos = NaN, this.options = e, this.elem = t, this.prop = i
            }
            dSetter() {
                let t = this.paths,
                    e = t ? .[0],
                    i = t ? .[1],
                    s = this.now || 0,
                    r = [];
                if (1 !== s && e && i)
                    if (e.length === i.length && s < 1)
                        for (let t = 0; t < i.length; t++) {
                            let o = e[t],
                                n = i[t],
                                a = [];
                            for (let t = 0; t < n.length; t++) {
                                let e = o[t],
                                    i = n[t];
                                tG(e) && tG(i) && ("A" !== n[0] || 4 !== t && 5 !== t) ? a[t] = e + s * (i - e) : a[t] = i
                            }
                            r.push(a)
                        } else r = i;
                    else r = this.toD || [];
                this.elem.attr("d", r, void 0, !0)
            }
            update() {
                let t = this.elem,
                    e = this.prop,
                    i = this.now,
                    s = this.options.step;
                this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this)
            }
            run(t, e, i) {
                let s = this,
                    r = s.options,
                    o = function(t) {
                        return !o.stopped && s.step(t)
                    },
                    n = tY.requestAnimationFrame || function(t) {
                        setTimeout(t, 13)
                    },
                    a = function() {
                        for (let t = 0; t < tU.timers.length; t++) tU.timers[t]() || tU.timers.splice(t--, 1);
                        tU.timers.length && n(a)
                    };
                t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, o.elem = this.elem, o.prop = this.prop, o() && 1 === tU.timers.push(o) && n(a)) : (delete r.curAnim[this.prop], r.complete && 0 === Object.keys(r.curAnim).length && r.complete.call(this.elem))
            }
            step(t) {
                let e, i, s = +new Date,
                    r = this.options,
                    o = this.elem,
                    n = r.complete,
                    a = r.duration,
                    l = r.curAnim;
                return o.attr && !o.element ? e = !1 : t || s >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), l[this.prop] = !0, i = !0, t$(l, function(t) {
                    !0 !== t && (i = !1)
                }), i && n && n.call(o), e = !1) : (this.pos = r.easing((s - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e
            }
            initPath(t, e, i) {
                let s = t.startX,
                    r = t.endX,
                    o = i.slice(),
                    n = t.isArea,
                    a = n ? 2 : 1,
                    l = e && i.length > e.length && i.hasStackedCliffs,
                    h, c, d, p, u = e ? .slice();
                if (!u || l) return [o, o];

                function g(t, e) {
                    for (; t.length < c;) {
                        let i = t[0],
                            s = e[c - t.length];
                        if (s && "M" === i[0] && ("C" === s[0] ? t[0] = ["C", i[1], i[2], i[1], i[2], i[1], i[2]] : t[0] = ["L", i[1], i[2]]), t.unshift(i), n) {
                            let e = t.pop();
                            t.push(t[t.length - 1], e)
                        }
                    }
                }

                function f(t) {
                    for (; t.length < c;) {
                        let e = t[Math.floor(t.length / a) - 1].slice();
                        if ("C" === e[0] && (e[1] = e[5], e[2] = e[6]), n) {
                            let i = t[Math.floor(t.length / a)].slice();
                            t.splice(t.length / 2, 0, e, i)
                        } else t.push(e)
                    }
                }
                if (s && r && r.length) {
                    for (d = 0; d < s.length; d++)
                        if (s[d] === r[0]) {
                            h = d;
                            break
                        } else if (s[0] === r[r.length - s.length + d]) {
                        h = d, p = !0;
                        break
                    } else if (s[s.length - 1] === r[r.length - s.length + d]) {
                        h = s.length - d;
                        break
                    }
                    void 0 === h && (u = [])
                }
                return u.length && tG(h) && (c = o.length + h * a, p ? (g(u, o), f(o)) : (g(o, u), f(u))), [u, o]
            }
            fillSetter() {
                tU.prototype.strokeSetter.apply(this, arguments)
            }
            strokeSetter() {
                this.elem.attr(this.prop, tX(this.start).tweenTo(tX(this.end), this.pos), void 0, !0)
            }
        }
        tU.timers = [];
        let {
            defined: tV,
            getStyle: tq,
            isArray: tK,
            isNumber: tZ,
            isObject: tJ,
            merge: tQ,
            objectEach: t0,
            pick: t1
        } = ta;

        function t2(t) {
            return tJ(t) ? tQ({
                duration: 500,
                defer: 0
            }, t) : {
                duration: 500 * !!t,
                defer: 0
            }
        }

        function t3(t, e) {
            let i = tU.timers.length;
            for (; i--;) tU.timers[i].elem !== t || e && e !== tU.timers[i].prop || (tU.timers[i].stopped = !0)
        }
        let t5 = {
                animate: function(t, e, i) {
                    let s, r = "",
                        o, n, a;
                    tJ(i) || (a = arguments, i = {
                        duration: a[2],
                        easing: a[3],
                        complete: a[4]
                    }), tZ(i.duration) || (i.duration = 400), i.easing = "function" == typeof i.easing ? i.easing : Math[i.easing] || Math.easeInOutSine, i.curAnim = tQ(e), t0(e, function(a, l) {
                        t3(t, l), n = new tU(t, i, l), o = void 0, "d" === l && tK(e.d) ? (n.paths = n.initPath(t, t.pathArray, e.d), n.toD = e.d, s = 0, o = 1) : t.attr ? s = t.attr(l) : (s = parseFloat(tq(t, l)) || 0, "opacity" !== l && (r = "px")), o || (o = a), "string" == typeof o && o.match("px") && (o = o.replace(/px/g, "")), n.run(s, o, r)
                    })
                },
                animObject: t2,
                getDeferredAnimation: function(t, e, i) {
                    let s = t2(e),
                        r = i ? [i] : t.series,
                        o = 0,
                        n = 0;
                    return r.forEach(t => {
                        let i = t2(t.options.animation);
                        o = tJ(e) && tV(e.defer) ? s.defer : Math.max(o, i.duration + i.defer), n = Math.min(s.duration, i.duration)
                    }), t.renderer.forExport && (o = 0), {
                        defer: Math.max(0, o - n),
                        duration: Math.min(o, n)
                    }
                },
                setAnimation: function(t, e) {
                    e.renderer.globalAnimation = t1(t, e.options.chart.animation, !0)
                },
                stop: t3
            },
            {
                SVG_NS: t6,
                win: t4
            } = B,
            {
                attr: t9,
                createElement: t7,
                css: t8,
                error: et,
                isFunction: ee,
                isString: ei,
                objectEach: es,
                splat: er
            } = ta,
            {
                trustedTypes: eo
            } = t4,
            en = eo && ee(eo.createPolicy) && eo.createPolicy("highcharts", {
                createHTML: t => t
            }),
            ea = en ? en.createHTML("") : "";
        class el {
            static filterUserAttributes(t) {
                return es(t, (e, i) => {
                    let s = !0; - 1 === el.allowedAttributes.indexOf(i) && (s = !1), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) && (s = ei(e) && el.allowedReferences.some(t => 0 === e.indexOf(t))), s || (et(33, !1, void 0, {
                        "Invalid attribute in config": `${i}`
                    }), delete t[i]), ei(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"))
                }), t
            }
            static parseStyle(t) {
                return t.split(";").reduce((t, e) => {
                    let i = e.split(":").map(t => t.trim()),
                        s = i.shift();
                    return s && i.length && (t[s.replace(/-([a-z])/g, t => t[1].toUpperCase())] = i.join(":")), t
                }, {})
            }
            static setElementHTML(t, e) {
                t.innerHTML = el.emptyHTML, e && new el(e).addToDOM(t)
            }
            constructor(t) {
                this.nodes = "string" == typeof t ? this.parseMarkup(t) : t
            }
            addToDOM(t) {
                return function t(e, i) {
                    let s;
                    return er(e).forEach(function(e) {
                        let r, o = e.tagName,
                            n = e.textContent ? B.doc.createTextNode(e.textContent) : void 0,
                            a = el.bypassHTMLFiltering;
                        if (o)
                            if ("#text" === o) r = n;
                            else if (-1 !== el.allowedTags.indexOf(o) || a) {
                            let s = "svg" === o ? t6 : i.namespaceURI || t6,
                                l = B.doc.createElementNS(s, o),
                                h = e.attributes || {};
                            es(e, function(t, e) {
                                "tagName" !== e && "attributes" !== e && "children" !== e && "style" !== e && "textContent" !== e && (h[e] = t)
                            }), t9(l, a ? h : el.filterUserAttributes(h)), e.style && t8(l, e.style), n && l.appendChild(n), t(e.children || [], l), r = l
                        } else et(33, !1, void 0, {
                            "Invalid tagName in config": o
                        });
                        r && i.appendChild(r), s = r
                    }), s
                }(this.nodes, t)
            }
            parseMarkup(t) {
                let e, i = [];
                t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
                try {
                    e = new DOMParser().parseFromString(en ? en.createHTML(t) : t, "text/html")
                } catch {}
                if (!e) {
                    let i = t7("div");
                    i.innerHTML = t, e = {
                        body: i
                    }
                }
                let s = (t, e) => {
                    let i = t.nodeName.toLowerCase(),
                        r = {
                            tagName: i
                        };
                    "#text" === i && (r.textContent = t.textContent || "");
                    let o = t.attributes;
                    if (o) {
                        let t = {};
                        [].forEach.call(o, e => {
                            "data-style" === e.name ? r.style = el.parseStyle(e.value) : t[e.name] = e.value
                        }), r.attributes = t
                    }
                    if (t.childNodes.length) {
                        let e = [];
                        [].forEach.call(t.childNodes, t => {
                            s(t, e)
                        }), e.length && (r.children = e)
                    }
                    e.push(r)
                };
                return [].forEach.call(e.body.childNodes, t => s(t, i)), i
            }
        }
        el.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "disabled", "dx", "dy", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "result", "role", "rowspan", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke-linecap", "stroke-width", "stroke", "style", "summary", "tabindex", "tableValues", "target", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], el.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], el.allowedTags = ["#text", "a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "tbody", "td", "text", "textPath", "th", "thead", "title", "tr", "tspan", "u", "ul"], el.emptyHTML = ea, el.bypassHTMLFiltering = !1;
        let {
            defaultOptions: eh,
            defaultTime: ec
        } = tI, {
            pageLang: ed
        } = B, {
            extend: ep,
            getNestedProperty: eu,
            isArray: eg,
            isNumber: ef,
            isObject: em,
            isString: ex,
            pick: ey,
            ucfirst: eb
        } = ta, ev = {
            add: (t, e) => t + e,
            divide: (t, e) => 0 !== e ? t / e : "",
            eq: (t, e) => t == e,
            each: function(t) {
                let e = arguments[arguments.length - 1];
                return !!eg(t) && t.map((i, s) => ek(e.body, ep(em(i) ? i : {
                    "@this": i
                }, {
                    "@index": s,
                    "@first": 0 === s,
                    "@last": s === t.length - 1
                }))).join("")
            },
            ge: (t, e) => t >= e,
            gt: (t, e) => t > e,
            if: t => !!t,
            le: (t, e) => t <= e,
            lt: (t, e) => t < e,
            multiply: (t, e) => t * e,
            ne: (t, e) => t != e,
            subtract: (t, e) => t - e,
            ucfirst: eb,
            unless: t => !t
        }, ew = {};

        function ek(t = "", e, i) {
            let s = RegExp("\\{([\\p{L}\\d:\\.,;\\-\\/<>\\[\\]%_@+\"'’= #\\(\\)]+)\\}", "gu"),
                r = RegExp("\\(([\\p{L}\\d:\\.,;\\-\\/<>\\[\\]%_@+\"'= ]+)\\)", "gu"),
                o = [],
                n = /f$/,
                a = /\.(\d)/,
                l = i ? .options ? .lang || eh.lang,
                h = i ? .time || ec,
                c = i ? .numberFormatter || eT.bind(i),
                d = (t = "") => {
                    let i;
                    return "true" === t || "false" !== t && ((i = Number(t)).toString() === t ? i : /^["'].+["']$/.test(t) ? t.slice(1, -1) : eu(t, e))
                },
                p, u, g = 0,
                f;
            for (; null !== (p = s.exec(t));) {
                let i = p,
                    s = r.exec(p[1]);
                s && (p = s, f = !0), u ? .isBlock || (u = {
                    ctx: e,
                    expression: p[1],
                    find: p[0],
                    isBlock: "#" === p[1].charAt(0),
                    start: p.index,
                    startInner: p.index + p[0].length,
                    length: p[0].length
                });
                let n = (u.isBlock ? i : p)[1].split(" ")[0].replace("#", "");
                ev[n] && (u.isBlock && n === u.fn && g++, u.fn || (u.fn = n));
                let a = "else" === p[1];
                if (u.isBlock && u.fn && (p[1] === `/${u.fn}` || a))
                    if (g) !a && g--;
                    else {
                        let e = u.startInner,
                            i = t.substr(e, p.index - e);
                        void 0 === u.body ? (u.body = i, u.startInner = p.index + p[0].length) : u.elseBody = i, u.find += i + p[0], a || (o.push(u), u = void 0)
                    }
                else u.isBlock || o.push(u);
                if (s && !u ? .isBlock) break
            }
            return o.forEach(s => {
                let o, p, {
                    body: u,
                    elseBody: g,
                    expression: f,
                    fn: m
                } = s;
                if (m) {
                    let t = [s],
                        r = [],
                        n = f.length,
                        a = 0,
                        l;
                    for (p = 0; p <= n; p++) {
                        let t = f.charAt(p);
                        l || '"' !== t && "'" !== t ? l === t && (l = "") : l = t, l || " " !== t && p !== n || (r.push(f.substr(a, p - a)), a = p + 1)
                    }
                    for (p = ev[m].length; p--;) t.unshift(d(r[p + 1]));
                    o = ev[m].apply(e, t), s.isBlock && "boolean" == typeof o && (o = ek(o ? u : g, e, i))
                } else {
                    let t = /^["'].+["']$/.test(f) ? [f] : f.split(":");
                    if (o = d(t.shift() || ""), t.length && "number" == typeof o) {
                        let e = t.join(":");
                        if (n.test(e)) {
                            let t = parseInt((e.match(a) || ["", "-1"])[1], 10);
                            null !== o && (o = c(o, t, l.decimalPoint, e.indexOf(",") > -1 ? l.thousandsSep : ""))
                        } else o = h.dateFormat(e, o)
                    }
                    r.lastIndex = 0, r.test(s.find) && ex(o) && (o = `"${o}"`)
                }
                t = t.replace(s.find, ey(o, ""))
            }), f ? ek(t, e, i) : t
        }

        function eT(t, e, i, s) {
            e *= 1;
            let r, o, [n, a] = (t = +t || 0).toString().split("e").map(Number),
                l = this ? .options ? .lang || eh.lang,
                h = (t.toString().split(".")[1] || "").split("e")[0].length,
                c = e,
                d = {};
            i ? ? (i = l.decimalPoint), s ? ? (s = l.thousandsSep), -1 === e ? e = Math.min(h, 20) : ef(e) ? e && a < 0 && ((o = e + a) >= 0 ? (n = +n.toExponential(o).split("e")[0], e = o) : (n = Math.floor(n), t = e < 20 ? +(n * Math.pow(10, a)).toFixed(e) : 0, a = 0)) : e = 2, a && (e ? ? (e = 2), t = n), ef(e) && e >= 0 && (d.minimumFractionDigits = e, d.maximumFractionDigits = e), "" === s && (d.useGrouping = !1);
            let p = s || i,
                u = p ? "en" : this ? .locale || l.locale || ed,
                g = JSON.stringify(d) + u;
            return r = (ew[g] ? ? (ew[g] = new Intl.NumberFormat(u, d))).format(t), p && (r = r.replace(/([,\.])/g, "_$1").replace(/_\,/g, s ? ? ",").replace("_.", i ? ? ".")), (e || 0 != +r) && (!(a < 0) || c) || (r = "0"), a && 0 != +r && (r += "e" + (a < 0 ? "" : "+") + a), r
        }
        let eS = {
            dateFormat: function(t, e, i) {
                return ec.dateFormat(t, e, i)
            },
            format: ek,
            helpers: ev,
            numberFormat: eT
        };
        (a = x || (x = {})).rendererTypes = {}, a.getRendererType = function(t = r) {
            return a.rendererTypes[t] || a.rendererTypes[r]
        }, a.registerRendererType = function(t, e, i) {
            a.rendererTypes[t] = e, (!r || i) && (r = t, B.Renderer = e)
        };
        let eM = x,
            {
                clamp: eC,
                pick: eA,
                pushUnique: eE,
                stableSort: eO
            } = ta;
        (y || (y = {})).distribute = function t(e, i, s) {
            let r = e,
                o = r.reducedLen || i,
                n = (t, e) => t.target - e.target,
                a = [],
                l = e.length,
                h = [],
                c = a.push,
                d, p, u, g = !0,
                f, m, x = 0,
                y;
            for (d = l; d--;) x += e[d].size;
            if (x > o) {
                for (eO(e, (t, e) => (e.rank || 0) - (t.rank || 0)), u = (y = e[0].rank === e[e.length - 1].rank) ? l / 2 : -1, p = y ? u : l - 1; u && x > o;) f = e[d = Math.floor(p)], eE(h, d) && (x -= f.size), p += u, y && p >= e.length && (u /= 2, p = u);
                h.sort((t, e) => e - t).forEach(t => c.apply(a, e.splice(t, 1)))
            }
            for (eO(e, n), e = e.map(t => ({
                    size: t.size,
                    targets: [t.target],
                    align: eA(t.align, .5)
                })); g;) {
                for (d = e.length; d--;) f = e[d], m = (Math.min.apply(0, f.targets) + Math.max.apply(0, f.targets)) / 2, f.pos = eC(m - f.size * f.align, 0, i - f.size);
                for (d = e.length, g = !1; d--;) d > 0 && e[d - 1].pos + e[d - 1].size > e[d].pos && (e[d - 1].size += e[d].size, e[d - 1].targets = e[d - 1].targets.concat(e[d].targets), e[d - 1].align = .5, e[d - 1].pos + e[d - 1].size > i && (e[d - 1].pos = i - e[d - 1].size), e.splice(d, 1), g = !0)
            }
            return c.apply(r, a), d = 0, e.some(e => {
                let o = 0;
                return (e.targets || []).some(() => (r[d].pos = e.pos + o, void 0 !== s && Math.abs(r[d].pos - r[d].target) > s) ? (r.slice(0, d + 1).forEach(t => delete t.pos), r.reducedLen = (r.reducedLen || i) - .1 * i, r.reducedLen > .1 * i && t(r, i, s), !0) : (o += r[d].size, d++, !1))
            }), eO(r, n), r
        };
        let eL = y,
            {
                animate: eP,
                animObject: eN,
                stop: eI
            } = t5,
            {
                deg2rad: eR,
                doc: eD,
                svg: eB,
                SVG_NS: ej,
                win: ez,
                isFirefox: e_
            } = B,
            {
                addEvent: eW,
                attr: eH,
                createElement: eF,
                crisp: eX,
                css: eY,
                defined: eG,
                erase: e$,
                extend: eU,
                fireEvent: eV,
                getAlignFactor: eq,
                isArray: eK,
                isFunction: eZ,
                isNumber: eJ,
                isObject: eQ,
                isString: e0,
                merge: e1,
                objectEach: e2,
                pick: e3,
                pInt: e5,
                pushUnique: e6,
                replaceNested: e4,
                syncTimeout: e9,
                uniqueKey: e7
            } = ta;
        class e8 {
            _defaultGetter(t) {
                let e = e3(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
                return /^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e
            }
            _defaultSetter(t, e, i) {
                i.setAttribute(e, t)
            }
            add(t) {
                let e, i = this.renderer,
                    s = this.element;
                return t && (this.parentGroup = t), void 0 !== this.textStr && "text" === this.element.nodeName && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this
            }
            addClass(t, e) {
                let i = e ? "" : this.attr("class") || "";
                return (t = (t || "").split(/ /g).reduce(function(t, e) {
                    return -1 === i.indexOf(e) && t.push(e), t
                }, i ? [i] : []).join(" ")) !== i && this.attr("class", t), this
            }
            afterSetters() {
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            align(t, e, i, s = !0) {
                let r = this.renderer,
                    o = r.alignedObjects,
                    n = !!t;
                t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
                let a = !i || e0(i) ? i || "renderer" : void 0;
                a && (n && e6(o, this), i = void 0);
                let l = e3(i, r[a], r),
                    h = (l.x || 0) + (t.x || 0) + ((l.width || 0) - (t.width || 0)) * eq(t.align),
                    c = (l.y || 0) + (t.y || 0) + ((l.height || 0) - (t.height || 0)) * eq(t.verticalAlign),
                    d = {};
                return t.align && (d["text-align"] = t.align), d[e ? "translateX" : "x"] = Math.round(h), d[e ? "translateY" : "y"] = Math.round(c), s && (this[this.placed ? "animate" : "attr"](d), this.placed = !0), this.alignAttr = d, this
            }
            alignSetter(t) {
                let e = {
                    left: "start",
                    center: "middle",
                    right: "end"
                };
                e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]))
            }
            animate(t, e, i) {
                let s = eN(e3(e, this.renderer.globalAnimation, !0)),
                    r = s.defer;
                return eD.hidden && (s.duration = 0), 0 !== s.duration ? (i && (s.complete = i), e9(() => {
                    this.element && eP(this, t, s)
                }, r)) : (this.attr(t, void 0, i || s.complete), e2(t, function(t, e) {
                    s.step && s.step.call(this, t, {
                        prop: e,
                        pos: 1,
                        elem: this
                    })
                }, this)), this
            }
            applyTextOutline(t) {
                let e = this.element; - 1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
                let i = t.indexOf(" "),
                    s = t.substring(i + 1),
                    r = t.substring(0, i);
                if (r && "none" !== r && B.svg) {
                    this.fakeTS = !0, r = r.replace(/(^[\d\.]+)(.*?)$/g, function(t, e, i) {
                        return 2 * Number(e) + i
                    }), this.removeTextOutline();
                    let t = eD.createElementNS(ej, "tspan");
                    eH(t, {
                        class: "highcharts-text-outline",
                        fill: s,
                        stroke: s,
                        "stroke-width": r,
                        "stroke-linejoin": "round"
                    });
                    let i = e.querySelector("textPath") || e;
                    [].forEach.call(i.childNodes, e => {
                        let i = e.cloneNode(!0);
                        i.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(t => i.removeAttribute(t)), t.appendChild(i)
                    });
                    let o = 0;
                    [].forEach.call(i.querySelectorAll("text tspan"), t => {
                        o += Number(t.getAttribute("dy"))
                    });
                    let n = eD.createElementNS(ej, "tspan");
                    n.textContent = "​", eH(n, {
                        x: Number(e.getAttribute("x")),
                        dy: -o
                    }), t.appendChild(n), i.insertBefore(t, i.firstChild)
                }
            }
            attr(t, e, i, s) {
                let {
                    element: r
                } = this, o = e8.symbolCustomAttribs, n, a, l = this, h;
                return "string" == typeof t && void 0 !== e && (n = t, (t = {})[n] = e), "string" == typeof t ? l = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (e2(t, function(e, i) {
                    h = !1, s || eI(this, i), this.symbolName && -1 !== o.indexOf(i) && (a || (this.symbolAttr(t), a = !0), h = !0), this.rotation && ("x" === i || "y" === i) && (this.doTransform = !0), h || (this[i + "Setter"] || this._defaultSetter).call(this, e, i, r)
                }, this), this.afterSetters()), i && i.call(this), l
            }
            clip(t) {
                if (t && !t.clipPath) {
                    let e = e7() + "-",
                        i = this.renderer.createElement("clipPath").attr({
                            id: e
                        }).add(this.renderer.defs);
                    eU(t, {
                        clipPath: i,
                        id: e,
                        count: 0
                    }), t.add(i)
                }
                return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none")
            }
            crisp(t, e) {
                e = Math.round(e || t.strokeWidth || 0);
                let i = t.x || this.x || 0,
                    s = t.y || this.y || 0,
                    r = (t.width || this.width || 0) + i,
                    o = (t.height || this.height || 0) + s,
                    n = eX(i, e),
                    a = eX(s, e);
                return eU(t, {
                    x: n,
                    y: a,
                    width: eX(r, e) - n,
                    height: eX(o, e) - a
                }), eG(t.strokeWidth) && (t.strokeWidth = e), t
            }
            complexColor(t, e, i) {
                let s = this.renderer,
                    r, o, n, a, l, h, c, d, p, u, g = [],
                    f;
                eV(this.renderer, "complexColor", {
                    args: arguments
                }, function() {
                    if (t.radialGradient ? o = "radialGradient" : t.linearGradient && (o = "linearGradient"), o) {
                        if (n = t[o], l = s.gradients, h = t.stops, p = i.radialReference, eK(n) && (t[o] = n = {
                                x1: n[0],
                                y1: n[1],
                                x2: n[2],
                                y2: n[3],
                                gradientUnits: "userSpaceOnUse"
                            }), "radialGradient" === o && p && !eG(n.gradientUnits) && (a = n, n = e1(n, s.getRadialAttr(p, a), {
                                gradientUnits: "userSpaceOnUse"
                            })), e2(n, function(t, e) {
                                "id" !== e && g.push(e, t)
                            }), e2(h, function(t) {
                                g.push(t)
                            }), l[g = g.join(",")]) u = l[g].attr("id");
                        else {
                            n.id = u = e7();
                            let t = l[g] = s.createElement(o).attr(n).add(s.defs);
                            t.radAttr = a, t.stops = [], h.forEach(function(e) {
                                0 === e[1].indexOf("rgba") ? (c = (r = tF.parse(e[1])).get("rgb"), d = r.get("a")) : (c = e[1], d = 1);
                                let i = s.createElement("stop").attr({
                                    offset: e[0],
                                    "stop-color": c,
                                    "stop-opacity": d
                                }).add(t);
                                t.stops.push(i)
                            })
                        }
                        f = "url(" + s.url + "#" + u + ")", i.setAttribute(e, f), i.gradient = g, t.toString = function() {
                            return f
                        }
                    }
                })
            }
            css(t) {
                let e = this.styles,
                    i = {},
                    s = this.element,
                    r, o = !e;
                if (e && e2(t, function(t, s) {
                        e && e[s] !== t && (i[s] = t, o = !0)
                    }), o) {
                    e && (t = eU(e, i)), null === t.width || "auto" === t.width ? delete this.textWidth : "text" === s.nodeName.toLowerCase() && t.width && (r = this.textWidth = e5(t.width)), eU(this.styles, t), r && !eB && this.renderer.forExport && delete t.width;
                    let o = e_ && t.fontSize || null;
                    o && (eJ(o) || /^\d+$/.test(o)) && (t.fontSize += "px");
                    let n = e1(t);
                    s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach(t => n && delete n[t]), n.color && (n.fill = n.color, delete n.color)), eY(s, n)
                }
                return this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this
            }
            dashstyleSetter(t) {
                let e, i = this["stroke-width"];
                if ("inherit" === i && (i = 1), t) {
                    let s = (t = t.toLowerCase()).replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                    for (e = s.length; e--;) s[e] = "" + e5(s[e]) * e3(i, NaN);
                    t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                }
            }
            destroy() {
                let t = this,
                    {
                        element: e = {},
                        renderer: i,
                        stops: s
                    } = t,
                    r = e.ownerSVGElement,
                    o = "SPAN" === e.nodeName && t.parentGroup || void 0,
                    n;
                if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, eI(t), t.clipPath && r) {
                    let e = t.clipPath;
                    [].forEach.call(r.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t) {
                        t.getAttribute("clip-path").indexOf(e.element.id) > -1 && t.removeAttribute("clip-path")
                    }), t.clipPath = e.destroy()
                }
                if (s) {
                    for (let t of s) t.destroy();
                    s.length = 0
                }
                for (t.safeRemoveChild(e); o ? .div && 0 === o.div.childNodes.length;) n = o.parentGroup, t.safeRemoveChild(o.div), delete o.div, o = n;
                t.alignOptions && e$(i.alignedObjects, t), e2(t, (e, i) => {
                    (t[i] ? .parentGroup === t || -1 !== ["connector", "foreignObject"].indexOf(i)) && t[i] ? .destroy ? .(), delete t[i]
                })
            }
            dSetter(t, e, i) {
                eK(t) && ("string" == typeof t[0] && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((t, e, i) => e ? .join ? (i ? t + " " : "") + e.join(" ") : (e || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
            }
            fillSetter(t, e, i) {
                "string" == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
            }
            hrefSetter(t, e, i) {
                i.setAttributeNS("http://www.w3.org/1999/xlink", e, t)
            }
            getBBox(t, e) {
                let i, s, r, {
                        element: o,
                        renderer: n,
                        styles: a,
                        textStr: l
                    } = this,
                    {
                        cache: h,
                        cacheKeys: c
                    } = n,
                    d = o.namespaceURI === this.SVG_NS,
                    p = e3(e, this.rotation, 0),
                    u = n.styledMode ? o && e8.prototype.getStyle.call(o, "font-size") : a.fontSize,
                    g = this.getBBoxCacheKey([n.rootFontSize, this.textWidth, this.alignValue, a.fontWeight, a.lineClamp, a.textOverflow, u, p]);
                if (g && !t && (i = h[g]), !i || i.polygon) {
                    if (d || n.forExport) {
                        try {
                            r = this.fakeTS && function(t) {
                                let e = o.querySelector(".highcharts-text-outline");
                                e && eY(e, {
                                    display: t
                                })
                            }, eZ(r) && r("none"), i = o.getBBox ? eU({}, o.getBBox()) : {
                                width: o.offsetWidth,
                                height: o.offsetHeight,
                                x: 0,
                                y: 0
                            }, eZ(r) && r("")
                        } catch {}(!i || i.width < 0) && (i = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        })
                    } else i = this.htmlGetBBox();
                    s = i.height, d && (i.height = s = ({
                        "11px,17": 14,
                        "13px,20": 16
                    })[`${u||""},${Math.round(s)}`] || s), p && (i = this.getRotatedBox(i, p));
                    let t = {
                        bBox: i
                    };
                    eV(this, "afterGetBBox", t), i = t.bBox
                }
                if (g && ("" === l || i.height > 0)) {
                    for (; c.length > 250;) delete h[c.shift()];
                    h[g] || c.push(g), h[g] = i
                }
                return i
            }
            getBBoxCacheKey(t) {
                if (eG(this.textStr)) {
                    let e = "" + this.textStr;
                    return -1 === e.indexOf("<") && (e = e.replace(/\d/g, "0")), [e, ...t].join(",")
                }
            }
            getRotatedBox(t, e) {
                let {
                    x: i,
                    y: s,
                    width: r,
                    height: o
                } = t, {
                    alignValue: n,
                    translateY: a,
                    rotationOriginX: l = 0,
                    rotationOriginY: h = 0
                } = this, c = eq(n), d = Number(this.element.getAttribute("y") || 0) - (a ? 0 : s), p = e * eR, u = (e - 90) * eR, g = Math.cos(p), f = Math.sin(p), m = r * g, x = r * f, y = Math.cos(u), b = Math.sin(u), [
                    [v, w],
                    [k, T]
                ] = [l, h].map(t => [t - t * g, t * f]), S = i + c * (r - m) + v + T + d * y, M = S + m, C = M - o * y, A = C - m, E = s + d - c * x - w + k + d * b, O = E + x, L = O - o * b, P = L - x, N = Math.min(S, M, C, A), I = Math.min(E, O, L, P), R = Math.max(S, M, C, A) - N, D = Math.max(E, O, L, P) - I;
                return {
                    x: N,
                    y: I,
                    width: R,
                    height: D,
                    polygon: [
                        [S, E],
                        [M, O],
                        [C, L],
                        [A, P]
                    ]
                }
            }
            getStyle(t) {
                return ez.getComputedStyle(this.element || this, "").getPropertyValue(t)
            }
            hasClass(t) {
                return -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
            }
            hide() {
                return this.attr({
                    visibility: "hidden"
                })
            }
            htmlGetBBox() {
                return {
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0
                }
            }
            constructor(t, e) {
                this.onEvents = {}, this.opacity = 1, this.SVG_NS = ej, this.element = "span" === e || "body" === e ? eF(e) : eD.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, eV(this, "afterInit")
            }
            on(t, e) {
                let {
                    onEvents: i
                } = this;
                return i[t] && i[t](), i[t] = eW(this.element, t, e), this
            }
            opacitySetter(t, e, i) {
                let s = Number(Number(t).toFixed(3));
                this.opacity = s, i.setAttribute(e, s)
            }
            reAlign() {
                this.alignOptions ? .width && "left" !== this.alignOptions.align && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align())
            }
            removeClass(t) {
                return this.attr("class", ("" + this.attr("class")).replace(e0(t) ? RegExp(`(^| )${t}( |$)`) : t, " ").replace(/ +/g, " ").trim())
            }
            removeTextOutline() {
                let t = this.element.querySelector("tspan.highcharts-text-outline");
                t && this.safeRemoveChild(t)
            }
            safeRemoveChild(t) {
                let e = t.parentNode;
                e && e.removeChild(t)
            }
            setRadialReference(t) {
                let e = this.element.gradient && this.renderer.gradients[this.element.gradient] || void 0;
                return this.element.radialReference = t, e ? .radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
            }
            shadow(t) {
                let {
                    renderer: e
                } = this, i = e1(this.parentGroup ? .rotation === 90 ? {
                    offsetX: -1,
                    offsetY: -1
                } : {}, eQ(t) ? t : {}), s = e.shadowDefinition(i);
                return this.attr({
                    filter: t ? `url(${e.url}#${s})` : "none"
                })
            }
            show(t = !0) {
                return this.attr({
                    visibility: t ? "inherit" : "visible"
                })
            }
            "stroke-widthSetter" (t, e, i) {
                this[e] = t, i.setAttribute(e, t)
            }
            strokeWidth() {
                if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                let t = this.getStyle("stroke-width"),
                    e = 0,
                    i;
                return /px$/.test(t) ? e = e5(t) : "" !== t && (eH(i = eD.createElementNS(ej, "rect"), {
                    width: t,
                    "stroke-width": 0
                }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e
            }
            symbolAttr(t) {
                let e = this;
                e8.symbolCustomAttribs.forEach(function(i) {
                    e[i] = e3(t[i], e[i])
                }), e.attr({
                    d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                })
            }
            textSetter(t) {
                t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign())
            }
            titleSetter(t) {
                let e = this.element,
                    i = e.getElementsByTagName("title")[0] || eD.createElementNS(this.SVG_NS, "title");
                e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = e4(e3(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            }
            toFront() {
                let t = this.element;
                return t.parentNode.appendChild(t), this
            }
            translate(t, e) {
                return this.attr({
                    translateX: t,
                    translateY: e
                })
            }
            updateTransform(t = "transform") {
                let {
                    element: e,
                    foreignObject: i,
                    matrix: s,
                    padding: r,
                    rotation: o = 0,
                    rotationOriginX: n,
                    rotationOriginY: a,
                    scaleX: l,
                    scaleY: h,
                    text: c,
                    translateX: d = 0,
                    translateY: p = 0
                } = this, u = [`translate(${d},${p})`];
                eG(s) && u.push("matrix(" + s.join(",") + ")"), o && (u.push("rotate(" + o + " " + (n ? ? e.getAttribute("x") ? ? this.x ? ? 0) + " " + (a ? ? e.getAttribute("y") ? ? this.y ? ? 0) + ")"), c ? .element.tagName !== "SPAN" || c ? .foreignObject || c.attr({
                    rotation: o,
                    rotationOriginX: (n || 0) - r,
                    rotationOriginY: (a || 0) - r
                })), (eG(l) || eG(h)) && u.push(`scale(${l??1} ${h??1})`), u.length && !(c || this).textPath && (i ? .element || e).setAttribute(t, u.join(" "))
            }
            visibilitySetter(t, e, i) {
                "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
            }
            xGetter(t) {
                return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
            }
            zIndexSetter(t, e) {
                let i = this.renderer,
                    s = this.parentGroup,
                    r = (s || i).element || i.box,
                    o = this.element,
                    n = r === i.box,
                    a, l, h, c = !1,
                    d, p = this.added,
                    u;
                if (eG(t) ? (o.setAttribute("data-z-index", t), t *= 1, this[e] === t && (p = !1)) : eG(this[e]) && o.removeAttribute("data-z-index"), this[e] = t, p) {
                    for ((t = this.zIndex) && s && (s.handleZ = !0), u = (a = r.childNodes).length - 1; u >= 0 && !c; u--) d = !eG(h = (l = a[u]).getAttribute("data-z-index")), l !== o && (t < 0 && d && !n && !u ? (r.insertBefore(o, a[u]), c = !0) : (e5(h) <= t || d && (!eG(t) || t >= 0)) && (r.insertBefore(o, a[u + 1]), c = !0));
                    c || (r.insertBefore(o, a[3 * !!n]), c = !0)
                }
                return c
            }
        }
        e8.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], e8.prototype.strokeSetter = e8.prototype.fillSetter, e8.prototype.yGetter = e8.prototype.xGetter, e8.prototype.matrixSetter = e8.prototype.rotationOriginXSetter = e8.prototype.rotationOriginYSetter = e8.prototype.rotationSetter = e8.prototype.scaleXSetter = e8.prototype.scaleYSetter = e8.prototype.translateXSetter = e8.prototype.translateYSetter = e8.prototype.verticalAlignSetter = function(t, e) {
            this[e] = t, this.doTransform = !0
        };
        let it = e8,
            {
                defined: ie,
                extend: ii,
                getAlignFactor: is,
                isNumber: ir,
                merge: io,
                pick: ia,
                removeEvent: il
            } = ta;
        class ih extends it {
            constructor(t, e, i, s, r, o, n, a, l, h) {
                let c;
                super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = n, this.baseline = l, this.className = h, this.addClass("button" === h ? "highcharts-no-tooltip" : "highcharts-label"), h && this.addClass("highcharts-" + h), this.text = t.text(void 0, 0, 0, a).attr({
                    zIndex: 1
                }), "string" == typeof r && ((c = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = ih.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || c, this.deferredAttr = {}, this.alignFactor = 0
            }
            alignSetter(t) {
                let e = is(t);
                this.textAlign = t, e !== this.alignFactor && (this.alignFactor = e, this.bBox && ir(this.xSetting) && this.attr({
                    x: this.xSetting
                }), this.updateTextPadding())
            }
            anchorXSetter(t, e) {
                this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting)
            }
            anchorYSetter(t, e) {
                this.anchorY = t, this.boxAttr(e, t - this.ySetting)
            }
            boxAttr(t, e) {
                this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e
            }
            css(t) {
                if (t) {
                    let e = {};
                    t = io(t), ih.textProps.forEach(i => {
                        void 0 !== t[i] && (e[i] = t[i], delete t[i])
                    }), this.text.css(e), "fontSize" in e || "fontWeight" in e || "width" in e ? this.updateTextPadding() : "textOverflow" in e && this.updateBoxSize()
                }
                return it.prototype.css.call(this, t)
            }
            destroy() {
                il(this.element, "mouseenter"), il(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), it.prototype.destroy.call(this)
            }
            fillSetter(t, e) {
                t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t)
            }
            getBBox(t, e) {
                (this.textStr && 0 === this.bBox.width && 0 === this.bBox.height || this.rotation) && this.updateBoxSize();
                let {
                    padding: i,
                    height: s = 0,
                    translateX: r = 0,
                    translateY: o = 0,
                    width: n = 0
                } = this, a = ia(this.paddingLeft, i), l = e ? ? (this.rotation || 0), h = {
                    width: n,
                    height: s,
                    x: r + this.bBox.x - a,
                    y: o + this.bBox.y - i + this.baselineOffset
                };
                return l && (h = this.getRotatedBox(h, l)), h
            }
            getCrispAdjust() {
                return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
            }
            heightSetter(t) {
                this.heightSetting = t, this.doUpdate = !0
            }
            afterSetters() {
                super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1)
            }
            onAdd() {
                this.text.add(this), this.attr({
                    text: ia(this.textStr, ""),
                    x: this.x || 0,
                    y: this.y || 0
                }), this.box && ie(this.anchorX) && this.attr({
                    anchorX: this.anchorX,
                    anchorY: this.anchorY
                })
            }
            paddingSetter(t, e) {
                ir(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0
            }
            rSetter(t, e) {
                this.boxAttr(e, t)
            }
            strokeSetter(t, e) {
                this.stroke = t, this.boxAttr(e, t)
            }
            "stroke-widthSetter" (t, e) {
                t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t)
            }
            "text-alignSetter" (t) {
                this.textAlign = this["text-align"] = t, this.updateTextPadding()
            }
            textSetter(t) {
                void 0 !== t && this.text.attr({
                    text: t
                }), this.updateTextPadding(), this.reAlign()
            }
            updateBoxSize() {
                let t, e = this.text,
                    i = {},
                    s = this.padding,
                    r = this.bBox = (!ir(this.widthSetting) || !ir(this.heightSetting) || this.textAlign) && ie(e.textStr) ? e.getBBox(void 0, 0) : ih.emptyBBox;
                this.width = this.getPaddedWidth(), this.height = (this.heightSetting || r.height || 0) + 2 * s;
                let o = this.renderer.fontMetrics(e);
                if (this.baselineOffset = s + Math.min((this.text.firstLineMetrics || o).b, r.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - o.h) / 2), this.needsBox && !e.textPath) {
                    if (!this.box) {
                        let t = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                        t.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t.add(this)
                    }
                    i.x = t = this.getCrispAdjust(), i.y = (this.baseline ? -this.baselineOffset : 0) + t, i.width = Math.round(this.width), i.height = Math.round(this.height), this.box.attr(ii(i, this.deferredAttr)), this.deferredAttr = {}
                }
            }
            updateTextPadding() {
                let t = this.text,
                    e = t.styles.textAlign || this.textAlign;
                if (!t.textPath) {
                    this.updateBoxSize();
                    let i = this.baseline ? 0 : this.baselineOffset,
                        s = (this.paddingLeft ? ? this.padding) + is(e) * (this.widthSetting ? ? this.bBox.width);
                    (s !== t.x || i !== t.y) && (t.attr({
                        align: e,
                        x: s
                    }), void 0 !== i && t.attr("y", i)), t.x = s, t.y = i
                }
            }
            widthSetter(t) {
                this.widthSetting = ir(t) ? t : void 0, this.doUpdate = !0
            }
            getPaddedWidth() {
                let t = this.padding,
                    e = ia(this.paddingLeft, t),
                    i = ia(this.paddingRight, t);
                return (this.widthSetting || this.bBox.width || 0) + e + i
            }
            xSetter(t) {
                this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting)
            }
            ySetter(t) {
                this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting)
            }
        }
        ih.emptyBBox = {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        }, ih.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineClamp", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"];
        let {
            defined: ic,
            isNumber: id,
            pick: ip
        } = ta;

        function iu(t, e, i, s, r) {
            let o = [];
            if (r) {
                let n = r.start || 0,
                    a = r.end || 0,
                    l = ip(r.r, i),
                    h = ip(r.r, s || i),
                    c = 2e-4 / (r.borderRadius ? 1 : Math.max(l, 1)),
                    d = Math.abs(a - n - 2 * Math.PI) < c;
                d && (n = Math.PI / 2, a = 2.5 * Math.PI - c);
                let p = r.innerR,
                    u = ip(r.open, d),
                    g = Math.cos(n),
                    f = Math.sin(n),
                    m = Math.cos(a),
                    x = Math.sin(a),
                    y = ip(r.longArc, a - n - Math.PI < c ? 0 : 1),
                    b = ["A", l, h, 0, y, ip(r.clockwise, 1), t + l * m, e + h * x];
                b.params = {
                    start: n,
                    end: a,
                    cx: t,
                    cy: e
                }, o.push(["M", t + l * g, e + h * f], b), ic(p) && ((b = ["A", p, p, 0, y, ic(r.clockwise) ? 1 - r.clockwise : 0, t + p * g, e + p * f]).params = {
                    start: a,
                    end: n,
                    cx: t,
                    cy: e
                }, o.push(u ? ["M", t + p * m, e + p * x] : ["L", t + p * m, e + p * x], b)), u || o.push(["Z"])
            }
            return o
        }

        function ig(t, e, i, s, r) {
            return r ? .r ? im(t, e, i, s, r) : [
                ["M", t, e],
                ["L", t + i, e],
                ["L", t + i, e + s],
                ["L", t, e + s],
                ["Z"]
            ]
        }

        function im(t, e, i, s, r) {
            let o = r ? .r || 0;
            return [
                ["M", t + o, e],
                ["L", t + i - o, e],
                ["A", o, o, 0, 0, 1, t + i, e + o],
                ["L", t + i, e + s - o],
                ["A", o, o, 0, 0, 1, t + i - o, e + s],
                ["L", t + o, e + s],
                ["A", o, o, 0, 0, 1, t, e + s - o],
                ["L", t, e + o],
                ["A", o, o, 0, 0, 1, t + o, e],
                ["Z"]
            ]
        }
        let ix = {
                arc: iu,
                callout: function(t, e, i, s, r) {
                    let o = Math.min(r ? .r || 0, i, s),
                        n = o + 6,
                        a = r ? .anchorX,
                        l = r ? .anchorY || 0,
                        h = im(t, e, i, s, {
                            r: o
                        });
                    if (!id(a) || a < i && a > 0 && l < s && l > 0) return h;
                    if (t + a > i - n)
                        if (l > e + n && l < e + s - n) h.splice(3, 1, ["L", t + i, l - 6], ["L", t + i + 6, l], ["L", t + i, l + 6], ["L", t + i, e + s - o]);
                        else if (a < i) {
                        let r = l < e + n,
                            c = r ? e : e + s;
                        h.splice(r ? 2 : 5, 0, ["L", a, l], ["L", t + i - o, c])
                    } else h.splice(3, 1, ["L", t + i, s / 2], ["L", a, l], ["L", t + i, s / 2], ["L", t + i, e + s - o]);
                    else if (t + a < n)
                        if (l > e + n && l < e + s - n) h.splice(7, 1, ["L", t, l + 6], ["L", t - 6, l], ["L", t, l - 6], ["L", t, e + o]);
                        else if (a > 0) {
                        let i = l < e + n,
                            r = i ? e : e + s;
                        h.splice(i ? 1 : 6, 0, ["L", a, l], ["L", t + o, r])
                    } else h.splice(7, 1, ["L", t, s / 2], ["L", a, l], ["L", t, s / 2], ["L", t, e + o]);
                    else l > s && a < i - n ? h.splice(5, 1, ["L", a + 6, e + s], ["L", a, e + s + 6], ["L", a - 6, e + s], ["L", t + o, e + s]) : l < 0 && a > n && h.splice(1, 1, ["L", a - 6, e], ["L", a, e - 6], ["L", a + 6, e], ["L", i - o, e]);
                    return h
                },
                circle: function(t, e, i, s) {
                    return iu(t + i / 2, e + s / 2, i / 2, s / 2, {
                        start: .5 * Math.PI,
                        end: 2.5 * Math.PI,
                        open: !1
                    })
                },
                diamond: function(t, e, i, s) {
                    return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s / 2],
                        ["L", t + i / 2, e + s],
                        ["L", t, e + s / 2],
                        ["Z"]
                    ]
                },
                rect: ig,
                roundedRect: im,
                square: ig,
                triangle: function(t, e, i, s) {
                    return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s],
                        ["L", t, e + s],
                        ["Z"]
                    ]
                },
                "triangle-down": function(t, e, i, s) {
                    return [
                        ["M", t, e],
                        ["L", t + i, e],
                        ["L", t + i / 2, e + s],
                        ["Z"]
                    ]
                }
            },
            {
                doc: iy,
                SVG_NS: ib,
                win: iv
            } = B,
            {
                attr: iw,
                extend: ik,
                fireEvent: iT,
                isString: iS,
                objectEach: iM,
                pick: iC
            } = ta,
            iA = (t, e) => t.substring(0, e) + "…",
            iE = class {
                constructor(t) {
                    const e = t.styles;
                    this.renderer = t.renderer, this.svgElement = t, this.width = t.textWidth, this.textLineHeight = e ? .lineHeight, this.textOutline = e ? .textOutline, this.ellipsis = e ? .textOverflow === "ellipsis", this.lineClamp = e ? .lineClamp, this.noWrap = e ? .whiteSpace === "nowrap"
                }
                buildSVG() {
                    let t = this.svgElement,
                        e = t.element,
                        i = t.renderer,
                        s = iC(t.textStr, "").toString(),
                        r = -1 !== s.indexOf("<"),
                        o = e.childNodes,
                        n = !t.added && i.box,
                        a = [s, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, t.getStyle("font-size"), t.styles.lineClamp, this.width].join(",");
                    if (a !== t.textCache) {
                        t.textCache = a, delete t.actualWidth;
                        for (let t = o.length; t--;) e.removeChild(o[t]);
                        if (r || this.ellipsis || this.width || t.textPath || -1 !== s.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(s))) {
                            if ("" !== s) {
                                n && n.appendChild(e);
                                let i = new el(s);
                                this.modifyTree(i.nodes), i.addToDOM(e), this.modifyDOM(), this.ellipsis && -1 !== (e.textContent || "").indexOf("…") && t.attr("title", this.unescapeEntities(t.textStr || "", ["&lt;", "&gt;"])), n && n.removeChild(e)
                            }
                        } else e.appendChild(iy.createTextNode(this.unescapeEntities(s)));
                        iS(this.textOutline) && t.applyTextOutline && t.applyTextOutline(this.textOutline)
                    }
                }
                modifyDOM() {
                    let t, e = this.svgElement,
                        i = iw(e.element, "x");
                    for (e.firstLineMetrics = void 0; t = e.element.firstChild;)
                        if (/^[\s\u200B]*$/.test(t.textContent || " ")) e.element.removeChild(t);
                        else break;
                    [].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (t, s) => {
                        t.nextSibling && t.previousSibling && (0 === s && 1 === t.previousSibling.nodeType && (e.firstLineMetrics = e.renderer.fontMetrics(t.previousSibling)), iw(t, {
                            dy: this.getLineHeight(t.nextSibling),
                            x: i
                        }))
                    });
                    let s = this.width || 0;
                    if (!s) return;
                    let r = (t, r) => {
                            let o = t.textContent || "",
                                n = o.replace(/([^\^])-/g, "$1- ").split(" "),
                                a = !this.noWrap && (n.length > 1 || e.element.childNodes.length > 1),
                                l = this.getLineHeight(r),
                                h = Math.max(0, s - .8 * l),
                                c = 0,
                                d = e.actualWidth;
                            if (a) {
                                let o = [],
                                    a = [];
                                for (; r.firstChild && r.firstChild !== t;) a.push(r.firstChild), r.removeChild(r.firstChild);
                                for (; n.length;)
                                    if (n.length && !this.noWrap && c > 0 && (o.push(t.textContent || ""), t.textContent = n.join(" ").replace(/- /g, "-")), this.truncate(t, void 0, n, 0 === c && d || 0, s, h, (t, e) => n.slice(0, e).join(" ").replace(/- /g, "-")), d = e.actualWidth, c++, this.lineClamp && c >= this.lineClamp) {
                                        n.length && (this.truncate(t, t.textContent || "", void 0, 0, s, h, iA), t.textContent = t.textContent ? .replace("…", "") + "…");
                                        break
                                    }
                                a.forEach(e => {
                                    r.insertBefore(e, t)
                                }), o.forEach(e => {
                                    r.insertBefore(iy.createTextNode(e), t);
                                    let s = iy.createElementNS(ib, "tspan");
                                    s.textContent = "​", iw(s, {
                                        dy: l,
                                        x: i
                                    }), r.insertBefore(s, t)
                                })
                            } else this.ellipsis && o && this.truncate(t, o, void 0, 0, s, h, iA)
                        },
                        o = t => {
                            [].slice.call(t.childNodes).forEach(i => {
                                i.nodeType === iv.Node.TEXT_NODE ? r(i, t) : (-1 !== i.className.baseVal.indexOf("highcharts-br") && (e.actualWidth = 0), o(i))
                            })
                        };
                    o(e.element)
                }
                getLineHeight(t) {
                    let e = t.nodeType === iv.Node.TEXT_NODE ? t.parentElement : t;
                    return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e || this.svgElement.element).h
                }
                modifyTree(t) {
                    let e = (i, s) => {
                        let {
                            attributes: r = {},
                            children: o,
                            style: n = {},
                            tagName: a
                        } = i, l = this.renderer.styledMode;
                        if ("b" === a || "strong" === a ? l ? r.class = "highcharts-strong" : n.fontWeight = "bold" : ("i" === a || "em" === a) && (l ? r.class = "highcharts-emphasized" : n.fontStyle = "italic"), n ? .color && (n.fill = n.color), "br" === a) {
                            r.class = "highcharts-br", i.textContent = "​";
                            let e = t[s + 1];
                            e ? .textContent && (e.textContent = e.textContent.replace(/^ +/gm, ""))
                        } else "a" === a && o && o.some(t => "#text" === t.tagName) && (i.children = [{
                            children: o,
                            tagName: "tspan"
                        }]);
                        "#text" !== a && "a" !== a && (i.tagName = "tspan"), ik(i, {
                            attributes: r,
                            style: n
                        }), o && o.filter(t => "#text" !== t.tagName).forEach(e)
                    };
                    t.forEach(e), iT(this.svgElement, "afterModifyTree", {
                        nodes: t
                    })
                }
                truncate(t, e, i, s, r, o, n) {
                    let a, l, h = this.svgElement,
                        {
                            rotation: c
                        } = h,
                        d = [],
                        p = i && !s ? 1 : 0,
                        u = (e || i || "").length,
                        g = u;
                    i || (r = o);
                    let f = function(e, r) {
                        let o = r || e,
                            n = t.parentNode;
                        if (n && void 0 === d[o] && n.getSubStringLength) try {
                            d[o] = s + n.getSubStringLength(0, i ? o + 1 : o)
                        } catch {}
                        return d[o]
                    };
                    if (h.rotation = 0, s + (l = f(t.textContent.length)) > r) {
                        for (; p <= u;) g = Math.ceil((p + u) / 2), i && (a = n(i, g)), l = f(g, a && a.length - 1), p === u ? p = u + 1 : l > r ? u = g - 1 : p = g;
                        0 === u ? t.textContent = "" : e && u === e.length - 1 || (t.textContent = a || n(e || i, g)), this.ellipsis && l > r && this.truncate(t, t.textContent || "", void 0, 0, r, o, iA)
                    }
                    i && i.splice(0, g), h.actualWidth = l, h.rotation = c
                }
                unescapeEntities(t, e) {
                    return iM(this.renderer.escapes, function(i, s) {
                        e && -1 !== e.indexOf(i) || (t = t.toString().replace(RegExp(i, "g"), s))
                    }), t
                }
            },
            {
                defaultOptions: iO
            } = tI,
            {
                charts: iL,
                deg2rad: iP,
                doc: iN,
                isFirefox: iI,
                isMS: iR,
                isWebKit: iD,
                noop: iB,
                SVG_NS: ij,
                symbolSizes: iz,
                win: i_
            } = B,
            {
                addEvent: iW,
                attr: iH,
                createElement: iF,
                crisp: iX,
                css: iY,
                defined: iG,
                destroyObjectProperties: i$,
                extend: iU,
                isArray: iV,
                isNumber: iq,
                isObject: iK,
                isString: iZ,
                merge: iJ,
                pick: iQ,
                pInt: i0,
                replaceNested: i1,
                uniqueKey: i2
            } = ta;
        class i3 {
            constructor(t, e, i, s, r, o, n) {
                let a, l;
                this.x = 0, this.y = 0;
                const h = this.createElement("svg").attr({
                        version: "1.1",
                        class: "highcharts-root"
                    }),
                    c = h.element;
                n || h.css(this.getStyle(s || {})), t.appendChild(c), iH(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && iH(c, "xmlns", this.SVG_NS), this.box = c, this.boxWrapper = h, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(iN.createTextNode("Created with Highcharts 12.5.0")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = h.getStyle("font-size"), this.setSize(e, i, !1), iI && t.getBoundingClientRect && ((a = function() {
                    iY(t, {
                        left: 0,
                        top: 0
                    }), l = t.getBoundingClientRect(), iY(t, {
                        left: Math.ceil(l.left) - l.left + "px",
                        top: Math.ceil(l.top) - l.top + "px"
                    })
                })(), this.unSubPixelFix = iW(i_, "resize", a))
            }
            definition(t) {
                return new el([t]).addToDOM(this.defs.element)
            }
            getReferenceURL() {
                if ((iI || iD) && iN.getElementsByTagName("base").length) {
                    if (!iG(e)) {
                        let t = i2(),
                            i = new el([{
                                tagName: "svg",
                                attributes: {
                                    width: 8,
                                    height: 8
                                },
                                children: [{
                                    tagName: "defs",
                                    children: [{
                                        tagName: "clipPath",
                                        attributes: {
                                            id: t
                                        },
                                        children: [{
                                            tagName: "rect",
                                            attributes: {
                                                width: 4,
                                                height: 4
                                            }
                                        }]
                                    }]
                                }, {
                                    tagName: "rect",
                                    attributes: {
                                        id: "hitme",
                                        width: 8,
                                        height: 8,
                                        "clip-path": `url(#${t})`,
                                        fill: "rgba(0,0,0,0.001)"
                                    }
                                }]
                            }]).addToDOM(iN.body);
                        iY(i, {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 9e5
                        });
                        let s = iN.elementFromPoint(6, 6);
                        e = s ? .id === "hitme", iN.body.removeChild(i)
                    }
                    if (e) return i1(i_.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"])
                }
                return ""
            }
            getStyle(t) {
                return this.style = iU({
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                    fontSize: "1rem"
                }, t), this.style
            }
            setStyle(t) {
                this.boxWrapper.css(this.getStyle(t))
            }
            isHidden() {
                return !this.boxWrapper.getBBox().width
            }
            destroy() {
                let t = this.defs;
                return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), i$(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null
            }
            createElement(t) {
                return new this.Element(this, t)
            }
            getRadialAttr(t, e) {
                return {
                    cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                    cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                    r: (e.r || 0) * t[2]
                }
            }
            shadowDefinition(t) {
                let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map(e => `${e}-${t[e]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""),
                    i = iJ({
                        color: "#000000",
                        offsetX: 1,
                        offsetY: 1,
                        opacity: .15,
                        width: 5
                    }, t);
                return this.defs.element.querySelector(`#${e}`) || this.definition({
                    tagName: "filter",
                    attributes: {
                        id: e,
                        filterUnits: i.filterUnits
                    },
                    children: this.getShadowFilterContent(i)
                }), e
            }
            getShadowFilterContent(t) {
                return [{
                    tagName: "feDropShadow",
                    attributes: {
                        dx: t.offsetX,
                        dy: t.offsetY,
                        "flood-color": t.color,
                        "flood-opacity": Math.min(5 * t.opacity, 1),
                        stdDeviation: t.width / 2
                    }
                }]
            }
            buildText(t) {
                new iE(t).buildSVG()
            }
            getContrast(t) {
                if ("transparent" === t) return "#000000";
                let e = tF.parse(t).rgba,
                    i = " clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1)";
                if (iq(e[0]) || !tF.useColorMix) {
                    let t = e.map(t => {
                            let e = t / 255;
                            return e <= .04 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                        }),
                        i = .2126 * t[0] + .7152 * t[1] + .0722 * t[2];
                    return 1.05 / (i + .05) > (i + .05) / .05 ? "#FFFFFF" : "#000000"
                }
                return "color(from " + t + " srgb" + i + i + i + ")"
            }
            button(t, e, i, s, r = {}, o, n, a, l, h) {
                let c = this.label(t, e, i, l, void 0, void 0, h, void 0, "button"),
                    d = this.styledMode,
                    p = arguments,
                    u = 0;
                r = iJ(iO.global.buttonTheme, r), d && (delete r.fill, delete r.stroke, delete r["stroke-width"]);
                let g = r.states || {},
                    f = r.style || {};
                delete r.states, delete r.style;
                let m = [el.filterUserAttributes(r)],
                    x = [f];
                return d || ["hover", "select", "disabled"].forEach((t, e) => {
                    m.push(iJ(m[0], el.filterUserAttributes(p[e + 5] || g[t] || {}))), x.push(m[e + 1].style), delete m[e + 1].style
                }), iW(c.element, iR ? "mouseover" : "mouseenter", function() {
                    3 !== u && c.setState(1)
                }), iW(c.element, iR ? "mouseout" : "mouseleave", function() {
                    3 !== u && c.setState(u)
                }), c.setState = (t = 0) => {
                    if (1 !== t && (c.state = u = t), c.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t]), !d) {
                        c.attr(m[t]);
                        let e = x[t];
                        iK(e) && c.css(e)
                    }
                }, c.attr(m[0]), !d && (c.css(iU({
                    cursor: "default"
                }, f)), h && c.text.css({
                    pointerEvents: "none"
                })), c.on("touchstart", t => t.stopPropagation()).on("click", function(t) {
                    3 !== u && s ? .call(c, t)
                })
            }
            crispLine(t, e) {
                let [i, s] = t;
                return iG(i[1]) && i[1] === s[1] && (i[1] = s[1] = iX(i[1], e)), iG(i[2]) && i[2] === s[2] && (i[2] = s[2] = iX(i[2], e)), t
            }
            path(t) {
                let e = this.styledMode ? {} : {
                    fill: "none"
                };
                return iV(t) ? e.d = t : iK(t) && iU(e, t), this.createElement("path").attr(e)
            }
            circle(t, e, i) {
                let s = iK(t) ? t : void 0 === t ? {} : {
                        x: t,
                        y: e,
                        r: i
                    },
                    r = this.createElement("circle");
                return r.xSetter = r.ySetter = function(t, e, i) {
                    i.setAttribute("c" + e, t)
                }, r.attr(s)
            }
            arc(t, e, i, s, r, o) {
                let n;
                iK(t) ? (e = (n = t).y, i = n.r, s = n.innerR, r = n.start, o = n.end, t = n.x) : n = {
                    innerR: s,
                    start: r,
                    end: o
                };
                let a = this.symbol("arc", t, e, i, i, n);
                return a.r = i, a
            }
            rect(t, e, i, s, r, o) {
                let n = iK(t) ? t : void 0 === t ? {} : {
                        x: t,
                        y: e,
                        r: r,
                        width: Math.max(i || 0, 0),
                        height: Math.max(s || 0, 0)
                    },
                    a = this.createElement("rect");
                return this.styledMode || (void 0 !== o && (n["stroke-width"] = o, iU(n, a.crisp(n))), n.fill = "none"), a.rSetter = function(t, e, i) {
                    a.r = t, iH(i, {
                        rx: t,
                        ry: t
                    })
                }, a.rGetter = function() {
                    return a.r || 0
                }, a.attr(n)
            }
            roundedRect(t) {
                return this.symbol("roundedRect").attr(t)
            }
            setSize(t, e, i) {
                this.width = t, this.height = e, this.boxWrapper.animate({
                    width: t,
                    height: e
                }, {
                    step: function() {
                        this.attr({
                            viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                        })
                    },
                    duration: iQ(i, !0) ? void 0 : 0
                }), this.alignElements()
            }
            g(t) {
                let e = this.createElement("g");
                return t ? e.attr({
                    class: "highcharts-" + t
                }) : e
            }
            image(t, e, i, s, r, o) {
                let n = {
                    preserveAspectRatio: "none"
                };
                iq(e) && (n.x = e), iq(i) && (n.y = i), iq(s) && (n.width = s), iq(r) && (n.height = r);
                let a = this.createElement("image").attr(n),
                    l = function(e) {
                        a.attr({
                            href: t
                        }), o.call(a, e)
                    };
                if (o) {
                    a.attr({
                        href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    });
                    let e = new i_.Image;
                    iW(e, "load", l), e.src = t, e.complete && l({})
                } else a.attr({
                    href: t
                });
                return a
            }
            symbol(t, e, i, s, r, o) {
                let n, a, l, h, c = this,
                    d = /^url\((.*?)\)$/,
                    p = d.test(t),
                    u = !p && (this.symbols[t] ? t : "circle"),
                    g = u && this.symbols[u];
                if (g) "number" == typeof e && (a = g.call(this.symbols, e || 0, i || 0, s || 0, r || 0, o)), n = this.path(a), c.styledMode || n.attr("fill", "none"), iU(n, {
                    symbolName: u || void 0,
                    x: e,
                    y: i,
                    width: s,
                    height: r
                }), o && iU(n, o);
                else if (p) {
                    l = t.match(d)[1];
                    let s = n = this.image(l);
                    s.imgwidth = iQ(o ? .width, iz[l] ? .width), s.imgheight = iQ(o ? .height, iz[l] ? .height), h = t => t.attr({
                        width: t.width,
                        height: t.height
                    }), ["width", "height"].forEach(t => {
                        s[`${t}Setter`] = function(t, e) {
                            this[e] = t;
                            let {
                                alignByTranslate: i,
                                element: s,
                                width: r,
                                height: n,
                                imgwidth: a,
                                imgheight: l
                            } = this, h = "width" === e ? a : l, c = 1;
                            o && "within" === o.backgroundSize && r && n && a && l ? (c = Math.min(r / a, n / l), iH(s, {
                                width: Math.round(a * c),
                                height: Math.round(l * c)
                            })) : s && h && s.setAttribute(e, h), !i && a && l && this.translate(((r || 0) - a * c) / 2, ((n || 0) - l * c) / 2)
                        }
                    }), iG(e) && s.attr({
                        x: e,
                        y: i
                    }), s.isImg = !0, s.symbolUrl = t, iG(s.imgwidth) && iG(s.imgheight) ? h(s) : (s.attr({
                        width: 0,
                        height: 0
                    }), iF("img", {
                        onload: function() {
                            let t = iL[c.chartIndex];
                            0 === this.width && (iY(this, {
                                position: "absolute",
                                top: "-999em"
                            }), iN.body.appendChild(this)), iz[l] = {
                                width: this.width,
                                height: this.height
                            }, s.imgwidth = this.width, s.imgheight = this.height, s.element && h(s), this.parentNode && this.parentNode.removeChild(this), c.imgCount--, c.imgCount || !t || t.hasLoaded || t.onload()
                        },
                        src: l
                    }), this.imgCount++)
                }
                return n
            }
            clipRect(t, e, i, s) {
                return this.rect(t, e, i, s, 0)
            }
            text(t, e, i, s) {
                let r = {};
                if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
                r.x = Math.round(e || 0), i && (r.y = Math.round(i)), iG(t) && (r.text = t);
                let o = this.createElement("text").attr(r);
                return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(t, e, i) {
                    let s = i.getElementsByTagName("tspan"),
                        r = i.getAttribute(e);
                    for (let i = 0, o; i < s.length; i++)(o = s[i]).getAttribute(e) === r && o.setAttribute(e, t);
                    i.setAttribute(e, t)
                }), o
            }
            fontMetrics(t) {
                let e = iq(t) ? t : i0(it.prototype.getStyle.call(t, "font-size") || 0),
                    i = e < 24 ? e + 3 : Math.round(1.2 * e),
                    s = Math.round(.8 * i);
                return {
                    h: i,
                    b: s,
                    f: e
                }
            }
            rotCorr(t, e, i) {
                let s = t;
                return e && i && (s = Math.max(s * Math.cos(e * iP), 4)), {
                    x: -t / 3 * Math.sin(e * iP),
                    y: s
                }
            }
            pathToSegments(t) {
                let e = [],
                    i = [],
                    s = {
                        A: 8,
                        C: 7,
                        H: 2,
                        L: 3,
                        M: 3,
                        Q: 5,
                        S: 5,
                        T: 3,
                        V: 2
                    };
                for (let r = 0; r < t.length; r++) iZ(i[0]) && iq(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), "string" == typeof t[r] && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
                return e.push(i.slice(0)), e
            }
            label(t, e, i, s, r, o, n, a, l) {
                return new ih(this, t, e, i, s, r, o, n, a, l)
            }
            alignElements() {
                this.alignedObjects.forEach(t => t.align())
            }
        }
        iU(i3.prototype, {
            Element: it,
            SVG_NS: ij,
            escapes: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            },
            symbols: ix,
            draw: iB
        }), eM.registerRendererType("svg", i3, !0);
        let {
            composed: i5,
            isFirefox: i6
        } = B, {
            attr: i4,
            css: i9,
            createElement: i7,
            defined: i8,
            extend: st,
            getAlignFactor: se,
            isNumber: si,
            pInt: ss,
            pushUnique: sr
        } = ta;

        function so(t, e, i) {
            let s = this.div ? .style;
            it.prototype[`${e}Setter`].call(this, t, e, i), s && (i.style[e] = s[e] = t)
        }
        let sn = (t, e) => {
            if (!t.div) {
                let i = i4(t.element, "class"),
                    s = t.css,
                    r = i7("div", i ? {
                        className: i
                    } : void 0, {
                        position: "absolute",
                        left: `${t.translateX||0}px`,
                        top: `${t.translateY||0}px`,
                        ...t.styles,
                        display: t.display,
                        opacity: t.opacity,
                        visibility: t.visibility
                    }, t.parentGroup ? .div || e);
                t.classSetter = (t, e, i) => {
                    i.setAttribute("class", t), r.className = t
                }, t.translateXSetter = t.translateYSetter = (e, i) => {
                    t[i] = e, r.style["translateX" === i ? "left" : "top"] = `${e}px`, t.doTransform = !0
                }, t.scaleXSetter = t.scaleYSetter = (e, i) => {
                    t[i] = e, t.doTransform = !0
                }, t.opacitySetter = t.visibilitySetter = so, t.css = e => (s.call(t, e), e.cursor && (r.style.cursor = e.cursor), e.pointerEvents && (r.style.pointerEvents = e.pointerEvents), t), t.on = function() {
                    return it.prototype.on.apply({
                        element: r,
                        onEvents: t.onEvents
                    }, arguments), t
                }, t.div = r
            }
            return t.div
        };
        class sa extends it {
            static compose(t) {
                sr(i5, this.compose) && (t.prototype.html = function(t, e, i) {
                    return new sa(this, "span").attr({
                        text: t,
                        x: Math.round(e),
                        y: Math.round(i)
                    })
                })
            }
            constructor(t, e) {
                super(t, e), sa.useForeignObject ? this.foreignObject = t.createElement("foreignObject").attr({
                    zIndex: 2
                }) : this.css({
                    position: "absolute",
                    ...t.styledMode ? {} : {
                        fontFamily: t.style.fontFamily,
                        fontSize: t.style.fontSize
                    }
                }), this.element.style.whiteSpace = "nowrap"
            }
            getSpanCorrection(t, e, i) {
                this.xCorr = -t * i, this.yCorr = -e
            }
            css(t) {
                let e, {
                        element: i
                    } = this,
                    s = "SPAN" === i.tagName && t && "width" in t,
                    r = s && t.width;
                return s && (delete t.width, this.textWidth = ss(r) || void 0, e = !0), t ? .textOverflow === "ellipsis" && (t.overflow = "hidden", t.whiteSpace = "nowrap"), t ? .lineClamp && (t.display = "-webkit-box", t.WebkitLineClamp = t.lineClamp, t.WebkitBoxOrient = "vertical", t.overflow = "hidden"), si(Number(t ? .fontSize)) && (t.fontSize += "px"), st(this.styles, t), i9(i, t), e && this.updateTransform(), this
            }
            htmlGetBBox() {
                let {
                    element: t
                } = this;
                return {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }
            updateTransform() {
                if (!this.added) {
                    this.alignOnAdd = !0;
                    return
                }
                let {
                    element: t,
                    foreignObject: e,
                    oldTextWidth: i,
                    renderer: s,
                    rotation: r,
                    rotationOriginX: o,
                    rotationOriginY: n,
                    scaleX: a,
                    scaleY: l,
                    styles: {
                        display: h = "inline-block",
                        whiteSpace: c
                    },
                    textAlign: d = "left",
                    textWidth: p,
                    translateX: u = 0,
                    translateY: g = 0,
                    x: f = 0,
                    y: m = 0
                } = this, x = () => this.textPxLength ? this.textPxLength : (i9(t, {
                    width: "",
                    whiteSpace: c || "nowrap"
                }), t.offsetWidth);
                if (e || i9(t, {
                        marginLeft: `${u}px`,
                        marginTop: `${g}px`
                    }), "SPAN" === t.tagName) {
                    let u, g = [r, d, t.innerHTML, p, this.textAlign].join(","),
                        y = -(this.parentGroup ? .padding * 1) || 0;
                    if (p !== i) {
                        let e = x(),
                            o = p || 0,
                            n = !s.styledMode && "" === t.style.textOverflow && t.style.webkitLineClamp;
                        (o > i || e > o || n) && (/[\-\s\u00AD]/.test(t.textContent || t.innerText) || "ellipsis" === t.style.textOverflow) && (i9(t, {
                            width: (r || a || e > o || n) && si(p) ? p + "px" : "auto",
                            display: h,
                            whiteSpace: c || "normal"
                        }), this.oldTextWidth = p)
                    }
                    e && (i9(t, {
                        display: "inline-block",
                        verticalAlign: "top"
                    }), e.attr({
                        width: s.width,
                        height: s.height
                    })), g !== this.cTT && (u = s.fontMetrics(t).b, i8(r) && !e && (r !== (this.oldRotation || 0) || d !== this.oldAlign) && i9(t, {
                        transform: `rotate(${r}deg)`,
                        transformOrigin: `${y}% ${y}px`
                    }), this.getSpanCorrection(!i8(r) && !this.textWidth && this.textPxLength || t.offsetWidth, u, se(d)));
                    let {
                        xCorr: b = 0,
                        yCorr: v = 0
                    } = this, w = {
                        left: `${f+b}px`,
                        top: `${m+v}px`,
                        textAlign: d,
                        transformOrigin: `${(o??f)-b-f-y}px ${(n??m)-v-m-y}px`
                    };
                    (a || l) && (w.transform = `scale(${a??1},${l??1})`), e ? (super.updateTransform(), si(f) && si(m) ? (e.attr({
                        x: f + b,
                        y: m + v,
                        width: t.offsetWidth + 3,
                        height: t.offsetHeight,
                        "transform-origin": t.getAttribute("transform-origin") || "0 0"
                    }), i9(t, {
                        display: h,
                        textAlign: d
                    })) : i6 && e.attr({
                        width: 0,
                        height: 0
                    })) : i9(t, w), this.cTT = g, this.oldRotation = r, this.oldAlign = d
                }
            }
            add(t) {
                let {
                    foreignObject: e,
                    renderer: i
                } = this, s = i.box.parentNode, r = [];
                if (e) e.add(t), super.add(i.createElement("body").attr({
                    xmlns: "http://www.w3.org/1999/xhtml"
                }).css({
                    background: "transparent",
                    margin: "0 3px 0 0"
                }).add(e));
                else {
                    let e;
                    if (this.parentGroup = t, t && !(e = t.div)) {
                        let i = t;
                        for (; i;) r.push(i), i = i.parentGroup;
                        for (let t of r.reverse()) e = sn(t, s)
                    }(e || s).appendChild(this.element)
                }
                return this.added = !0, this.alignOnAdd && this.updateTransform(), this
            }
            textSetter(t) {
                t !== this.textStr && (delete this.bBox, delete this.oldTextWidth, el.setElementHTML(this.element, t ? ? ""), this.textStr = t, this.doTransform = !0)
            }
            alignSetter(t) {
                this.alignValue = this.textAlign = t, this.doTransform = !0
            }
            xSetter(t, e) {
                this[e] = t, this.doTransform = !0
            }
        }
        let sl = sa.prototype;
        sl.visibilitySetter = sl.opacitySetter = so, sl.ySetter = sl.rotationSetter = sl.rotationOriginXSetter = sl.rotationOriginYSetter = sl.xSetter, (l = b || (b = {})).xAxis = {
            alignTicks: !0,
            allowDecimals: void 0,
            panningEnabled: !0,
            zIndex: 2,
            zoomEnabled: !0,
            dateTimeLabelFormats: {
                millisecond: {
                    main: "%[HMSL]",
                    range: !1
                },
                second: {
                    main: "%[HMS]",
                    range: !1
                },
                minute: {
                    main: "%[HM]",
                    range: !1
                },
                hour: {
                    main: "%[HM]",
                    range: !1
                },
                day: {
                    main: "%[eb]"
                },
                week: {
                    main: "%[eb]"
                },
                month: {
                    main: "%[bY]"
                },
                year: {
                    main: "%Y"
                }
            },
            endOnTick: !1,
            gridLineDashStyle: "Solid",
            gridZIndex: 1,
            labels: {
                autoRotationLimit: 80,
                distance: 15,
                enabled: !0,
                indentation: 10,
                overflow: "justify",
                reserveSpace: void 0,
                rotation: void 0,
                staggerLines: 0,
                step: 0,
                useHTML: !1,
                zIndex: 7,
                style: {
                    color: "#333333",
                    cursor: "default",
                    fontSize: "0.8em",
                    textOverflow: "ellipsis"
                }
            },
            maxPadding: .01,
            minorGridLineDashStyle: "Solid",
            minorTickLength: 2,
            minorTickPosition: "outside",
            minorTicksPerMajor: 5,
            minPadding: .01,
            offset: void 0,
            reversed: void 0,
            reversedStacks: !1,
            showEmpty: !0,
            showFirstLabel: !0,
            showLastLabel: !0,
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                useHTML: !1,
                x: 0,
                y: 0,
                style: {
                    color: "#666666",
                    fontSize: "0.8em"
                }
            },
            visible: !0,
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#333333",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            gridLineWidth: void 0,
            tickColor: "#333333"
        }, l.yAxis = {
            reversedStacks: !0,
            endOnTick: !0,
            maxPadding: .05,
            minPadding: .05,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: void 0
            },
            startOnTick: !0,
            title: {},
            stackLabels: {
                animation: {},
                allowOverlap: !1,
                enabled: !1,
                crop: !0,
                overflow: "justify",
                formatter: function() {
                    let {
                        numberFormatter: t
                    } = this.axis.chart;
                    return t(this.total || 0, -1)
                },
                style: {
                    color: "#000000",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                    textOutline: "1px contrast"
                }
            },
            gridLineWidth: 1,
            lineWidth: 0
        };
        let sh = b,
            {
                addEvent: sc,
                isFunction: sd,
                objectEach: sp,
                removeEvent: su
            } = ta;
        (v || (v = {})).registerEventOptions = function(t, e) {
            t.eventOptions = t.eventOptions || {}, sp(e.events, function(e, i) {
                t.eventOptions[i] !== e && (t.eventOptions[i] && (su(t, i, t.eventOptions[i]), delete t.eventOptions[i]), sd(e) && (t.eventOptions[i] = e, sc(t, i, e, {
                    order: 0
                })))
            })
        };
        let sg = v,
            {
                deg2rad: sf
            } = B,
            {
                clamp: sm,
                correctFloat: sx,
                defined: sy,
                destroyObjectProperties: sb,
                extend: sv,
                fireEvent: sw,
                getAlignFactor: sk,
                isNumber: sT,
                merge: sS,
                objectEach: sM,
                pick: sC
            } = ta,
            sA = class {
                constructor(t, e, i, s, r) {
                    this.isNew = !0, this.isNewLabel = !0, this.axis = t, this.pos = e, this.type = i || "", this.parameters = r || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, sw(this, "init"), i || s || this.addLabel()
                }
                addLabel() {
                    let t = this,
                        e = t.axis,
                        i = e.options,
                        s = e.chart,
                        r = e.categories,
                        o = e.logarithmic,
                        n = e.names,
                        a = t.pos,
                        l = sC(t.options ? .labels, i.labels),
                        h = e.tickPositions,
                        c = a === h[0],
                        d = a === h[h.length - 1],
                        p = (!l.step || 1 === l.step) && 1 === e.tickInterval,
                        u = h.info,
                        g = t.label,
                        f, m, x, y = this.parameters.category || (r ? sC(r[a], n[a], a) : a);
                    o && sT(y) && (y = sx(o.lin2log(y))), e.dateTime && (u ? f = (m = s.time.resolveDTLFormat(i.dateTimeLabelFormats[!i.grid ? .enabled && u.higherRanks[a] || u.unitName])).main : sT(y) && (f = e.dateTime.getXDateFormat(y, i.dateTimeLabelFormats || {}))), t.isFirst = c, t.isLast = d;
                    let b = {
                        axis: e,
                        chart: s,
                        dateTimeLabelFormat: f,
                        isFirst: c,
                        isLast: d,
                        pos: a,
                        tick: t,
                        tickPositionInfo: u,
                        value: y
                    };
                    sw(this, "labelFormat", b);
                    let v = t => l.formatter ? l.formatter.call(t, t) : l.format ? (t.text = e.defaultLabelFormatter.call(t), eS.format(l.format, t, s)) : e.defaultLabelFormatter.call(t),
                        w = v.call(b, b),
                        k = m ? .list;
                    k ? t.shortenLabel = function() {
                        for (x = 0; x < k.length; x++)
                            if (sv(b, {
                                    dateTimeLabelFormat: k[x]
                                }), g.attr({
                                    text: v.call(b, b)
                                }), g.getBBox().width < e.getSlotWidth(t) - 2 * (l.padding || 0)) return;
                        g.attr({
                            text: ""
                        })
                    } : t.shortenLabel = void 0, p && e._addedPlotLB && t.moveLabel(w, l), sy(g) || t.movedLabel ? g && g.textStr !== w && !p && (!g.textWidth || l.style.width || g.styles.width || g.css({
                        width: null
                    }), g.attr({
                        text: w
                    }), g.textPxLength = g.getBBox().width) : (t.label = g = t.createLabel(w, l), t.rotation = 0)
                }
                createLabel(t, e, i) {
                    let s = this.axis,
                        {
                            renderer: r,
                            styledMode: o
                        } = s.chart,
                        n = e.style.whiteSpace,
                        a = sy(t) && e.enabled ? r.text(t, i ? .x, i ? .y, e.useHTML).add(s.labelGroup) : void 0;
                    return a && (o || a.css(sS(e.style)), a.textPxLength = a.getBBox().width, !o && n && a.css({
                        whiteSpace: n
                    })), a
                }
                destroy() {
                    sb(this, this.axis)
                }
                getPosition(t, e, i, s) {
                    let r = this.axis,
                        o = r.chart,
                        n = s && o.oldChartHeight || o.chartHeight,
                        a = {
                            x: t ? sx(r.translate(e + i, void 0, void 0, s) + r.transB) : r.left + r.offset + (r.opposite ? (s && o.oldChartWidth || o.chartWidth) - r.right - r.left : 0),
                            y: t ? n - r.bottom + r.offset - (r.opposite ? r.height : 0) : sx(n - r.translate(e + i, void 0, void 0, s) - r.transB)
                        };
                    return a.y = sm(a.y, -1e9, 1e9), sw(this, "afterGetPosition", {
                        pos: a
                    }), a
                }
                getLabelPosition(t, e, i, s, r, o, n, a) {
                    let l, h, c = this.axis,
                        d = c.transA,
                        p = c.isLinked && c.linkedParent ? c.linkedParent.reversed : c.reversed,
                        u = c.staggerLines,
                        g = c.tickRotCorr || {
                            x: 0,
                            y: 0
                        },
                        f = s || c.reserveSpaceDefault ? 0 : -c.labelOffset * ("center" === c.labelAlign ? .5 : 1),
                        m = r.distance,
                        x = {};
                    return l = 0 === c.side ? i.rotation ? -m : -i.getBBox().height : 2 === c.side ? g.y + m : Math.cos(i.rotation * sf) * (g.y - i.getBBox(!1, 0).height / 2), sy(r.y) && (l = 0 === c.side && c.horiz ? r.y + l : r.y), t = t + sC(r.x, [0, 1, 0, -1][c.side] * m) + f + g.x - (o && s ? o * d * (p ? -1 : 1) : 0), e = e + l - (o && !s ? o * d * (p ? 1 : -1) : 0), u && (h = n / (a || 1) % u, c.opposite && (h = u - h - 1), e += h * (c.labelOffset / u)), x.x = t, x.y = Math.round(e), sw(this, "afterGetLabelPosition", {
                        pos: x,
                        tickmarkOffset: o,
                        index: n
                    }), x
                }
                getLabelSize() {
                    return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                }
                getMarkPath(t, e, i, s, r = !1, o) {
                    return o.crispLine([
                        ["M", t, e],
                        ["L", t + (r ? 0 : -i), e + (r ? i : 0)]
                    ], s)
                }
                handleOverflow(t) {
                    let e = this.axis,
                        i = e.options.labels,
                        s = t.x,
                        r = e.chart.chartWidth,
                        o = e.chart.spacing,
                        n = sC(e.labelLeft, Math.min(e.pos, o[3])),
                        a = sC(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, r - o[1])),
                        l = this.label,
                        h = this.rotation,
                        c = sk(e.labelAlign || l.attr("align")),
                        d = l.getBBox().width,
                        p = e.getSlotWidth(this),
                        u = p,
                        g = 1,
                        f;
                    h || "justify" !== i.overflow ? h < 0 && s - c * d < n ? f = Math.round(s / Math.cos(h * sf) - n) : h > 0 && s + c * d > a && (f = Math.round((r - s) / Math.cos(h * sf))) : (s - c * d < n ? u = t.x + u * (1 - c) - n : s + (1 - c) * d > a && (u = a - t.x + u * c, g = -1), (u = Math.min(p, u)) < p && "center" === e.labelAlign && (t.x += g * (p - u - c * (p - Math.min(d, u)))), (d > u || e.autoRotation && l ? .styles ? .width) && (f = u)), f && l && (this.shortenLabel ? this.shortenLabel() : l.css(sv({}, {
                        width: Math.floor(f) + "px",
                        lineClamp: +!e.isRadial
                    })))
                }
                moveLabel(t, e) {
                    let i = this,
                        s = i.label,
                        r = i.axis,
                        o = !1,
                        n;
                    s && s.textStr === t ? (i.movedLabel = s, o = !0, delete i.label) : sM(r.ticks, function(e) {
                        o || e.isNew || e === i || !e.label || e.label.textStr !== t || (i.movedLabel = e.label, o = !0, e.labelPos = i.movedLabel.xy, delete e.label)
                    }), !o && (i.labelPos || s) && (n = i.labelPos || s.xy, i.movedLabel = i.createLabel(t, e, n), i.movedLabel && i.movedLabel.attr({
                        opacity: 0
                    }))
                }
                render(t, e, i) {
                    let s = this.axis,
                        r = s.horiz,
                        o = this.pos,
                        n = sC(this.tickmarkOffset, s.tickmarkOffset),
                        a = this.getPosition(r, o, n, e),
                        l = a.x,
                        h = a.y,
                        c = s.pos,
                        d = c + s.len,
                        p = r ? l : h,
                        u = sC(i, this.label ? .newOpacity, 1);
                    !s.chart.polar && (sx(p) < c || p > d) && (i = 0), i ? ? (i = 1), this.isActive = !0, this.renderGridLine(e, i), this.renderMark(a, i), this.renderLabel(a, e, u, t), this.isNew = !1, sw(this, "afterRender")
                }
                renderGridLine(t, e) {
                    let i = this.axis,
                        s = i.options,
                        r = {},
                        o = this.pos,
                        n = this.type,
                        a = sC(this.tickmarkOffset, i.tickmarkOffset),
                        l = i.chart.renderer,
                        h = this.gridLine,
                        c, d = s.gridLineWidth,
                        p = s.gridLineColor,
                        u = s.gridLineDashStyle;
                    "minor" === this.type && (d = s.minorGridLineWidth, p = s.minorGridLineColor, u = s.minorGridLineDashStyle), h || (i.chart.styledMode || (r.stroke = p, r["stroke-width"] = d || 0, r.dashstyle = u), n || (r.zIndex = 1), t && (e = 0), this.gridLine = h = l.path().attr(r).addClass("highcharts-" + (n ? n + "-" : "") + "grid-line").add(i.gridGroup)), h && (c = i.getPlotLinePath({
                        value: o + a,
                        lineWidth: h.strokeWidth(),
                        force: "pass",
                        old: t,
                        acrossPanes: !1
                    })) && h[t || this.isNew ? "attr" : "animate"]({
                        d: c,
                        opacity: e
                    })
                }
                renderMark(t, e) {
                    let i = this.axis,
                        s = i.options,
                        r = i.chart.renderer,
                        o = this.type,
                        n = i.tickSize(o ? o + "Tick" : "tick"),
                        a = t.x,
                        l = t.y,
                        h = sC(s["minor" !== o ? "tickWidth" : "minorTickWidth"], !o && i.isXAxis ? 1 : 0),
                        c = s["minor" !== o ? "tickColor" : "minorTickColor"],
                        d = this.mark,
                        p = !d;
                    n && (i.opposite && (n[0] = -n[0]), !d && (this.mark = d = r.path().addClass("highcharts-" + (o ? o + "-" : "") + "tick").add(i.axisGroup), i.chart.styledMode || d.attr({
                        stroke: c,
                        "stroke-width": h
                    })), d[p ? "attr" : "animate"]({
                        d: this.getMarkPath(a, l, n[0], d.strokeWidth(), i.horiz, r),
                        opacity: e
                    }))
                }
                renderLabel(t, e, i, s) {
                    let r = this.axis,
                        o = r.horiz,
                        n = r.options,
                        a = this.label,
                        l = n.labels,
                        h = l.step,
                        c = sC(this.tickmarkOffset, r.tickmarkOffset),
                        d = t.x,
                        p = t.y,
                        u = !0;
                    a && sT(d) && (a.xy = t = this.getLabelPosition(d, p, a, o, l, c, s, h), (!this.isFirst || this.isLast || n.showFirstLabel) && (!this.isLast || this.isFirst || n.showLastLabel) ? !o || l.step || l.rotation || e || 0 === i || this.handleOverflow(t) : u = !1, h && s % h && (u = !1), u && sT(t.y) ? (t.opacity = i, a[this.isNewLabel ? "attr" : "animate"](t).show(!0), this.isNewLabel = !1) : (a.hide(), this.isNewLabel = !0))
                }
                replaceMovedLabel() {
                    let t = this.label,
                        e = this.axis;
                    t && !this.isNew && (t.animate({
                        opacity: 0
                    }, void 0, t.destroy), delete this.label), e.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel
                }
            },
            {
                animObject: sE
            } = t5,
            {
                xAxis: sO,
                yAxis: sL
            } = sh,
            {
                defaultOptions: sP
            } = tI,
            {
                registerEventOptions: sN
            } = sg,
            {
                deg2rad: sI
            } = B,
            {
                arrayMax: sR,
                arrayMin: sD,
                clamp: sB,
                correctFloat: sj,
                defined: sz,
                destroyObjectProperties: s_,
                erase: sW,
                error: sH,
                extend: sF,
                fireEvent: sX,
                getClosestDistance: sY,
                insertItem: sG,
                isArray: s$,
                isNumber: sU,
                isString: sV,
                merge: sq,
                normalizeTickInterval: sK,
                objectEach: sZ,
                pick: sJ,
                relativeLength: sQ,
                removeEvent: s0,
                splat: s1,
                syncTimeout: s2
            } = ta,
            s3 = (t, e) => sK(e, void 0, void 0, sJ(t.options.allowDecimals, e < .5 || void 0 !== t.tickAmount), !!t.tickAmount);
        sF(sP, {
            xAxis: sO,
            yAxis: sq(sO, sL)
        });
        class s5 {
            constructor(t, e, i) {
                this.init(t, e, i)
            }
            init(t, e, i = this.coll) {
                let s = "xAxis" === i,
                    r = this.isZAxis || (t.inverted ? !s : s);
                this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, sX(this, "init", {
                    userOptions: e
                }), this.opposite = sJ(e.opposite, this.opposite), this.side = sJ(e.side, this.side, r ? 2 * !this.opposite : this.opposite ? 1 : 3), this.setOptions(e);
                let o = this.options,
                    n = o.labels;
                this.type ? ? (this.type = o.type || "linear"), this.uniqueNames ? ? (this.uniqueNames = o.uniqueNames ? ? !0), sX(this, "afterSetType"), this.userOptions = e, this.minPixelPadding = 0, this.reversed = sJ(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = "category" === this.type || !0 === o.categories, this.categories = s$(o.categories) && o.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = sz(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ? ? (this.len = 0), this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.max = void 0, this.min = void 0;
                let a = sJ(o.crosshair, s1(t.options.tooltip.crosshairs)[+!s]);
                this.crosshair = !0 === a ? {} : a, -1 === t.axes.indexOf(this) && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), sG(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !sz(this.reversed) && (this.reversed = !0), this.labelRotation = sU(n.rotation) ? n.rotation : void 0, sN(this, o), sX(this, "afterInit")
            }
            setOptions(t) {
                let e = this.horiz ? {
                    labels: {
                        autoRotation: [-45],
                        padding: 3
                    },
                    margin: 15
                } : {
                    labels: {
                        padding: 1
                    },
                    title: {
                        rotation: 90 * this.side
                    }
                };
                this.options = sq(e, "yAxis" === this.coll ? {
                    title: {
                        text: this.chart.options.lang.yAxisTitle
                    }
                } : {}, sP[this.coll], t), sX(this, "afterSetOptions", {
                    userOptions: t
                })
            }
            defaultLabelFormatter() {
                let t = this.axis,
                    {
                        numberFormatter: e
                    } = this.chart,
                    i = sU(this.value) ? this.value : NaN,
                    s = t.chart.time,
                    r = t.categories,
                    o = this.dateTimeLabelFormat,
                    n = sP.lang,
                    a = n.numericSymbols,
                    l = n.numericSymbolMagnitude || 1e3,
                    h = t.logarithmic ? Math.abs(i) : t.tickInterval,
                    c = a ? .length,
                    d, p;
                if (r) p = `${this.value}`;
                else if (o) p = s.dateFormat(o, i, !0);
                else if (c && a && h >= 1e3)
                    for (; c-- && void 0 === p;) h >= (d = Math.pow(l, c + 1)) && 10 * i % d == 0 && null !== a[c] && 0 !== i && (p = e(i / d, -1) + a[c]);
                return void 0 === p && (p = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), p
            }
            getSeriesExtremes() {
                let t, e = this;
                sX(this, "getSeriesExtremes", null, function() {
                    e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach(i => {
                        if (i.reserveSpace()) {
                            let s = i.options,
                                r, o = s.threshold,
                                n, a;
                            if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (o || 0) && (o = void 0), e.isXAxis)(r = i.getColumn("x")).length && (r = e.logarithmic ? r.filter(t => t > 0) : r, n = (t = i.getXExtremes(r)).min, a = t.max, sU(n) || n instanceof Date || (r = r.filter(sU), n = (t = i.getXExtremes(r)).min, a = t.max), r.length && (e.dataMin = Math.min(sJ(e.dataMin, n), n), e.dataMax = Math.max(sJ(e.dataMax, a), a)));
                            else {
                                let t = i.applyExtremes();
                                sU(t.dataMin) && (n = t.dataMin, e.dataMin = Math.min(sJ(e.dataMin, n), n)), sU(t.dataMax) && (a = t.dataMax, e.dataMax = Math.max(sJ(e.dataMax, a), a)), sz(o) && (e.threshold = o), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1)
                            }
                        }
                    })
                }), sX(this, "afterGetSeriesExtremes")
            }
            translate(t, e, i, s, r, o) {
                let n = this.linkedParent || this,
                    a = s && n.old ? n.old.min : n.min;
                if (!sU(a)) return NaN;
                let l = n.minPixelPadding,
                    h = (n.isOrdinal || n.brokenAxis ? .hasBreaks || n.logarithmic && r) && !!n.lin2val,
                    c = 1,
                    d = 0,
                    p = s && n.old ? n.old.transA : n.transA,
                    u = 0;
                return p || (p = n.transA), i && (c *= -1, d = n.len), n.reversed && (c *= -1, d -= c * (n.sector || n.len)), e ? (u = (t = t * c + d - l) / p + a, h && (u = n.lin2val(u))) : (h && (t = n.val2lin(t)), u = c * (t - a) * p + d + c * l + (sU(o) ? p * o : 0), n.isRadial || (u = sj(u))), u
            }
            toPixels(t, e) {
                return this.translate(this.chart ? .time.parse(t) ? ? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos)
            }
            toValue(t, e) {
                return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0)
            }
            getPlotLinePath(t) {
                let e = this,
                    i = e.chart,
                    s = e.left,
                    r = e.top,
                    o = t.old,
                    n = t.value,
                    a = t.lineWidth,
                    l = o && i.oldChartHeight || i.chartHeight,
                    h = o && i.oldChartWidth || i.chartWidth,
                    c = e.transB,
                    d = t.translatedValue,
                    p = t.force,
                    u, g, f, m, x;

                function y(t, e, i) {
                    return "pass" !== p && (t < e || t > i) && (p ? t = sB(t, e, i) : x = !0), t
                }
                let b = {
                    value: n,
                    lineWidth: a,
                    old: o,
                    force: p,
                    acrossPanes: t.acrossPanes,
                    translatedValue: d
                };
                return sX(this, "getPlotLinePath", b, function(t) {
                    u = f = (d = sB(d = sJ(d, e.translate(n, void 0, void 0, o)), -1e9, 1e9)) + c, g = m = l - d - c, sU(d) ? e.horiz ? (g = r, m = l - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), u = f = y(u, s, s + e.width)) : (u = s, f = h - e.right + (i.scrollablePixelsX || 0), g = m = y(g, r, r + e.height)) : (x = !0, p = !1), t.path = x && !p ? void 0 : i.renderer.crispLine([
                        ["M", u, g],
                        ["L", f, m]
                    ], a || 1)
                }), b.path
            }
            getLinearTickPositions(t, e, i) {
                let s, r, o, n = sj(Math.floor(e / t) * t),
                    a = sj(Math.ceil(i / t) * t),
                    l = [];
                if (sj(n + t) === n && (o = 20), this.single) return [e];
                for (s = n; s <= a && (l.push(s), (s = sj(s + t, o)) !== r);) r = s;
                return l
            }
            getMinorTickInterval() {
                let {
                    minorTicks: t,
                    minorTickInterval: e
                } = this.options;
                return !0 === t ? sJ(e, "auto") : !1 !== t ? e : void 0
            }
            getMinorTickPositions() {
                let t = this.options,
                    e = this.tickPositions,
                    i = this.minorTickInterval,
                    s = this.pointRangePadding || 0,
                    r = (this.min || 0) - s,
                    o = (this.max || 0) + s,
                    n = this.brokenAxis ? .hasBreaks ? this.brokenAxis.unitLength : o - r,
                    a = [],
                    l;
                if (n && n / i < this.len / 3) {
                    let s = this.logarithmic;
                    if (s) this.paddedTicks.forEach(function(t, e, r) {
                        e && a.push.apply(a, s.getLogTickPositions(i, r[e - 1], r[e], !0))
                    });
                    else if (this.dateTime && "auto" === this.getMinorTickInterval()) a = a.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), r, o, t.startOfWeek));
                    else
                        for (l = r + (e[0] - r) % i; l <= o && l !== a[0]; l += i) a.push(l)
                }
                return 0 !== a.length && this.trimTicks(a), a
            }
            adjustForMinRange() {
                let t = this.options,
                    e = this.logarithmic,
                    i = this.chart.time,
                    {
                        max: s,
                        min: r,
                        minRange: o
                    } = this,
                    n, a, l, h;
                this.isXAxis && void 0 === o && !e && (o = sz(t.min) || sz(t.max) || sz(t.floor) || sz(t.ceiling) ? null : Math.min(5 * (sY(this.series.map(t => {
                    let e = t.getColumn("x");
                    return t.xIncrement ? e.slice(0, 2) : e
                })) || 0), this.dataMax - this.dataMin)), sU(s) && sU(r) && sU(o) && s - r < o && (a = this.dataMax - this.dataMin >= o, n = (o - s + r) / 2, l = [r - n, i.parse(t.min) ? ? r - n], a && (l[2] = e ? e.log2lin(this.dataMin) : this.dataMin), h = [(r = sR(l)) + o, i.parse(t.max) ? ? r + o], a && (h[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (s = sD(h)) - r < o && (l[0] = s - o, l[1] = i.parse(t.min) ? ? s - o, r = sR(l))), this.minRange = o, this.min = r, this.max = s
            }
            getClosest() {
                let t, e;
                if (this.categories) e = 1;
                else {
                    let i = [];
                    this.series.forEach(function(t) {
                        let s = t.closestPointRange,
                            r = t.getColumn("x");
                        1 === r.length ? i.push(r[0]) : t.sorted && sz(s) && t.reserveSpace() && (e = sz(e) ? Math.min(e, s) : s)
                    }), i.length && (i.sort((t, e) => t - e), t = sY([i]))
                }
                return t && e ? Math.min(t, e) : t || e
            }
            nameToX(t) {
                let e = s$(this.options.categories),
                    i = e ? this.categories : this.names,
                    s = t.options.x,
                    r;
                return t.series.requireSorting = !1, sz(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : sJ(i.keys[t.name], -1) : t.series.autoIncrement()), -1 === s ? !e && i && (r = i.length) : sU(s) && (r = s), void 0 !== r ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r
            }
            updateNames() {
                let t = this,
                    e = this.names;
                e.length > 0 && (Object.keys(e.keys).forEach(function(t) {
                    delete e.keys[t]
                }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(e => {
                    e.xIncrement = null, (!e.points || e.isDirtyData) && (t.max = Math.max(t.max || 0, e.dataTable.rowCount - 1), e.processData(), e.generatePoints());
                    let i = e.getColumn("x").slice();
                    e.data.forEach((e, s) => {
                        let r = i[s];
                        e ? .options && void 0 !== e.name && void 0 !== (r = t.nameToX(e)) && r !== e.x && (i[s] = e.x = r)
                    }), e.dataTable.setColumn("x", i)
                }))
            }
            setAxisTranslation() {
                let t = this,
                    e = t.max - t.min,
                    i = t.linkedParent,
                    s = !!t.categories,
                    r = t.isXAxis,
                    o = t.axisPointRange || 0,
                    n, a = 0,
                    l = 0,
                    h, c = t.transA;
                (r || s || o) && (n = t.getClosest(), i ? (a = i.minPointOffset, l = i.pointRangePadding) : t.series.forEach(function(e) {
                    let i = s ? 1 : r ? sJ(e.options.pointRange, n, 0) : t.axisPointRange || 0,
                        h = e.options.pointPlacement;
                    if (o = Math.max(o, i), !t.single || s) {
                        let t = e.is("xrange") ? !r : r;
                        a = Math.max(a, t && sV(h) ? 0 : i / 2), l = Math.max(l, t && "on" === h ? 0 : i)
                    }
                }), h = t.ordinal ? .slope && n ? t.ordinal.slope / n : 1, t.minPointOffset = a *= h, t.pointRangePadding = l *= h, t.pointRange = Math.min(o, t.single && s ? 1 : e), r && (t.closestPointRange = n)), t.translationSlope = t.transA = c = t.staticScale || t.len / (e + l || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = c * a, sX(this, "afterSetAxisTranslation")
            }
            minFromRange() {
                let {
                    max: t,
                    min: e
                } = this;
                return sU(t) && sU(e) && t - e || void 0
            }
            setTickInterval(t) {
                let {
                    categories: e,
                    chart: i,
                    dataMax: s,
                    dataMin: r,
                    dateTime: o,
                    isXAxis: n,
                    logarithmic: a,
                    options: l,
                    softThreshold: h
                } = this, c = i.time, d = sU(this.threshold) ? this.threshold : void 0, p = this.minRange || 0, {
                    ceiling: u,
                    floor: g,
                    linkedTo: f,
                    softMax: m,
                    softMin: x
                } = l, y = sU(f) && i[this.coll] ? .[f], b = l.tickPixelInterval, v = l.maxPadding, w = l.minPadding, k = 0, T, S = sU(l.tickInterval) && l.tickInterval >= 0 ? l.tickInterval : void 0, M, C, A, E;
                if (o || e || y || this.getTickAmount(), A = sJ(this.userMin, c.parse(l.min)), E = sJ(this.userMax, c.parse(l.max)), y ? (this.linkedParent = y, T = y.getExtremes(), this.min = sJ(T.min, T.dataMin), this.max = sJ(T.max, T.dataMax), this.type !== y.type && sH(11, !0, i)) : (h && sz(d) && sU(s) && sU(r) && (r >= d ? (M = d, w = 0) : s <= d && (C = d, v = 0)), this.min = sJ(A, M, r), this.max = sJ(E, C, s)), sU(this.max) && sU(this.min) && (a && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, sJ(r, this.min)) && sH(10, !0, i), this.min = sj(a.log2lin(this.min), 16), this.max = sj(a.log2lin(this.max), 16)), this.range && sU(r) && (this.userMin = this.min = A = Math.max(r, this.minFromRange() || 0), this.userMax = E = this.max, this.range = void 0)), sX(this, "foundExtremes"), this.adjustForMinRange(), sU(this.min) && sU(this.max)) {
                    if (!sU(this.userMin) && sU(x) && x < this.min && (this.min = A = x), !sU(this.userMax) && sU(m) && m > this.max && (this.max = E = m), e || this.axisPointRange || this.stacking ? .usePercentage || y || (k = this.max - this.min) && (!sz(A) && w && (this.min -= k * w), !sz(E) && v && (this.max += k * v)), !sU(this.userMin) && sU(g) && (this.min = Math.max(this.min, g)), !sU(this.userMax) && sU(u) && (this.max = Math.min(this.max, u)), h && sU(r) && sU(s)) {
                        let t = d || 0;
                        !sz(A) && this.min < t && r >= t ? this.min = l.minRange ? Math.min(t, this.max - p) : t : !sz(E) && this.max > t && s <= t && (this.max = l.minRange ? Math.max(t, this.min + p) : t)
                    }!i.polar && this.min > this.max && (sz(l.min) ? this.max = this.min : sz(l.max) && (this.min = this.max)), k = this.max - this.min
                }
                if (this.min !== this.max && sU(this.min) && sU(this.max) ? y && !S && b === y.options.tickPixelInterval ? this.tickInterval = S = y.tickInterval : this.tickInterval = sJ(S, this.tickAmount ? k / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : k * b / Math.max(this.len, b)) : this.tickInterval = 1, n && !t) {
                    let t = this.min !== this.old ? .min || this.max !== this.old ? .max;
                    this.series.forEach(function(e) {
                        e.forceCrop = e.forceCropping ? .(), e.processData(t)
                    }), sX(this, "postProcessData", {
                        hasExtremesChanged: t
                    })
                }
                this.setAxisTranslation(), sX(this, "initialAxisTranslation"), this.pointRange && !S && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
                let O = sJ(l.minTickInterval, o && !this.series.some(t => !t.sorted) ? this.closestPointRange : 0);
                !S && O && this.tickInterval < O && (this.tickInterval = O), o || a || S || (this.tickInterval = s3(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions()
            }
            setTickPositions() {
                let t = this.options,
                    e = t.tickPositions,
                    i = t.tickPositioner,
                    s = this.getMinorTickInterval(),
                    r = !this.isPanning,
                    o = r && t.startOnTick,
                    n = r && t.endOnTick,
                    a = [],
                    l;
                if (this.tickmarkOffset = this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.single = this.min === this.max && sz(this.min) && !this.tickAmount && (this.min % 1 == 0 || !1 !== t.allowDecimals), e) a = e.slice();
                else if (sU(this.min) && sU(this.max)) {
                    if (!this.ordinal ? .positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) a = [this.min, this.max], sH(19, !1, this.chart);
                    else if (this.dateTime) a = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal ? .positions, this.closestPointRange, !0);
                    else if (this.logarithmic) a = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
                    else {
                        let t = this.tickInterval,
                            e = t;
                        for (; e <= 2 * t;)
                            if (a = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && a.length > this.tickAmount) this.tickInterval = s3(this, e *= 1.1);
                            else break
                    }
                    a.length > this.len && (a = [a[0], a[a.length - 1]])[0] === a[1] && (a.length = 1), i && (this.tickPositions = a, (l = i.apply(this, [this.min, this.max])) && (a = l))
                }
                this.tickPositions = a, this.minorTickInterval = "auto" === s && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.paddedTicks = a.slice(0), this.trimTicks(a, o, n), !this.isLinked && sU(this.min) && sU(this.max) && (this.single && a.length < 2 && !this.categories && !this.series.some(t => t.is("heatmap") && "between" === t.options.pointPlacement) && (this.min -= .5, this.max += .5), e || l || this.adjustTickAmount()), sX(this, "afterSetTickPositions")
            }
            trimTicks(t, e, i) {
                let s = t[0],
                    r = t[t.length - 1],
                    o = !this.isOrdinal && this.minPointOffset || 0;
                if (sX(this, "trimTicks"), !this.isLinked || !this.grid) {
                    if (e && s !== -1 / 0) this.min = s;
                    else
                        for (; this.min - o > t[0];) t.shift();
                    if (i) this.max = r;
                    else
                        for (; this.max + o < t[t.length - 1];) t.pop();
                    0 === t.length && sz(s) && !this.options.tickPositions && t.push((r + s) / 2)
                }
            }
            alignToOthers() {
                let t, e = this,
                    i = e.chart,
                    s = [this],
                    r = e.options,
                    o = i.options.chart,
                    n = "yAxis" === this.coll && o.alignThresholds,
                    a = [];
                if (e.thresholdAlignment = void 0, (!1 !== o.alignTicks && r.alignTicks || n) && !1 !== r.startOnTick && !1 !== r.endOnTick && !e.logarithmic) {
                    let r = t => {
                            let {
                                horiz: e,
                                options: i
                            } = t;
                            return [e ? i.left : i.top, i.width, i.height, i.pane].join(",")
                        },
                        o = r(this);
                    i[this.coll].forEach(function(i) {
                        let {
                            series: n
                        } = i;
                        n.length && n.some(t => t.visible) && i !== e && r(i) === o && (t = !0, s.push(i))
                    })
                }
                if (t && n) {
                    s.forEach(t => {
                        let i = t.getThresholdAlignment(e);
                        sU(i) && a.push(i)
                    });
                    let t = a.length > 1 ? a.reduce((t, e) => t += e, 0) / a.length : void 0;
                    s.forEach(e => {
                        e.thresholdAlignment = t
                    })
                }
                return t
            }
            getThresholdAlignment(t) {
                if ((!sU(this.dataMin) || this !== t && this.series.some(t => t.isDirty || t.isDirtyData || t.xAxis ? .isDirty)) && this.getSeriesExtremes(), sU(this.threshold)) {
                    let t = sB((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
                    return this.options.reversed && (t = 1 - t), t
                }
            }
            getTickAmount() {
                let t = this.options,
                    e = t.tickPixelInterval,
                    i = t.tickAmount;
                sz(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i
            }
            adjustTickAmount() {
                let t = this,
                    {
                        finalTickAmt: e,
                        max: i,
                        min: s,
                        options: r,
                        tickPositions: o,
                        tickAmount: n,
                        thresholdAlignment: a
                    } = t,
                    l = o ? .length,
                    h = sJ(t.threshold, t.softThreshold ? 0 : null),
                    c, d, p = t.tickInterval,
                    u, g = () => o.push(sj(o[o.length - 1] + p)),
                    f = () => o.unshift(sj(o[0] - p));
                if (sU(a) && (u = 0 === a ? 0 : 1 === a ? n - 1 : Math.round(sB(a * (n - 1), 1, n - 2)), r.reversed && (u = n - 1 - u)), t.hasData() && sU(s) && sU(i)) {
                    let a = () => {
                        t.transA *= (l - 1) / (n - 1), t.min = r.startOnTick ? o[0] : Math.min(s, o[0]), t.max = r.endOnTick ? o[o.length - 1] : Math.max(i, o[o.length - 1])
                    };
                    if (sU(u) && sU(t.threshold)) {
                        for (; o[u] !== h || o.length !== n || o[0] > s || o[o.length - 1] < i;) {
                            for (o.length = 0, o.push(t.threshold); o.length < n;) void 0 === o[u] || o[u] > t.threshold ? f() : g();
                            if (p > 8 * t.tickInterval) break;
                            p *= 2
                        }
                        a()
                    } else if (l < n) {
                        for (; o.length < n;) o.length % 2 || s === h ? g() : f();
                        a()
                    }
                    if (sz(e)) {
                        for (d = c = o.length; d--;)(3 === e && d % 2 == 1 || e <= 2 && d > 0 && d < c - 1) && o.splice(d, 1);
                        t.finalTickAmt = void 0
                    }
                }
            }
            setScale() {
                let {
                    coll: t,
                    stacking: e
                } = this, i = !1, s = !1;
                this.series.forEach(t => {
                    i = i || t.isDirtyData || t.isDirty, s = s || t.xAxis ? .isDirty || !1
                }), this.setAxisSize();
                let r = this.len !== this.old ? .len;
                r || i || s || this.isLinked || this.forceRedraw || this.userMin !== this.old ? .userMin || this.userMax !== this.old ? .userMax || this.alignToOthers() ? (e && "yAxis" === t && e.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e && "xAxis" === t && e.buildStacks(), this.isDirty || (this.isDirty = r || this.min !== this.old ? .min || this.max !== this.old ? .max)) : e && e.cleanStacks(), i && delete this.allExtremes, sX(this, "afterSetScale")
            }
            setExtremes(t, e, i = !0, s, r) {
                let o = this.chart;
                this.series.forEach(t => {
                    delete t.kdTree
                }), t = o.time.parse(t), e = o.time.parse(e), sX(this, "setExtremes", r = sF(r, {
                    min: t,
                    max: e
                }), t => {
                    this.userMin = t.min, this.userMax = t.max, this.eventArgs = t, i && o.redraw(s)
                })
            }
            setAxisSize() {
                let t = this.chart,
                    e = this.options,
                    i = e.offsets || [0, 0, 0, 0],
                    s = this.horiz,
                    r = this.width = Math.round(sQ(sJ(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)),
                    o = this.height = Math.round(sQ(sJ(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)),
                    n = this.top = Math.round(sQ(sJ(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)),
                    a = this.left = Math.round(sQ(sJ(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
                this.bottom = t.chartHeight - o - n, this.right = t.chartWidth - r - a, this.len = Math.max(s ? r : o, 0), this.pos = s ? a : n
            }
            getExtremes() {
                let t = this.logarithmic;
                return {
                    min: t ? sj(t.lin2log(this.min)) : this.min,
                    max: t ? sj(t.lin2log(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                }
            }
            getThreshold(t) {
                let e = this.logarithmic,
                    i = e ? e.lin2log(this.min) : this.min,
                    s = e ? e.lin2log(this.max) : this.max;
                return null === t || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1)
            }
            autoLabelAlign(t) {
                let e = ((t - 90 * this.side) % 360 + 360) % 360,
                    i = {
                        align: "center"
                    };
                return sX(this, "autoLabelAlign", i, function(t) {
                    e > 15 && e < 165 ? t.align = "right" : e > 195 && e < 345 && (t.align = "left")
                }), i.align
            }
            tickSize(t) {
                let e = this.options,
                    i = sJ(e["tick" === t ? "tickWidth" : "minorTickWidth"], "tick" === t && this.isXAxis && !this.categories ? 1 : 0),
                    s = e["tick" === t ? "tickLength" : "minorTickLength"],
                    r;
                i && s && ("inside" === e[t + "Position"] && (s = -s), r = [s, i]);
                let o = {
                    tickSize: r
                };
                return sX(this, "afterTickSize", o), o.tickSize
            }
            labelMetrics() {
                let t = this.chart.renderer,
                    e = this.ticks,
                    i = e[Object.keys(e)[0]] || {};
                return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box)
            }
            unsquish() {
                let t = this.options.labels,
                    e = t.padding || 0,
                    i = this.horiz,
                    s = this.tickInterval,
                    r = this.len / ((+!!this.categories + this.max - this.min) / s),
                    o = t.rotation,
                    n = sj(.8 * this.labelMetrics().h),
                    a = Math.max(this.max - this.min, 0),
                    l = function(t) {
                        let i = (t + 2 * e) / (r || 1);
                        return (i = i > 1 ? Math.ceil(i) : 1) * s > a && t !== 1 / 0 && r !== 1 / 0 && a && (i = Math.ceil(a / s)), sj(i * s)
                    },
                    h = s,
                    c, d = Number.MAX_VALUE,
                    p;
                if (i) {
                    if (!t.staggerLines && (sU(o) ? p = [o] : r < t.autoRotationLimit && (p = t.autoRotation)), p) {
                        let t, e;
                        for (let i of p)(i === o || i && i >= -90 && i <= 90) && (e = (t = l(Math.abs(n / Math.sin(sI * i)))) + Math.abs(i / 360)) < d && (d = e, c = i, h = t)
                    }
                } else h = l(.75 * n);
                return this.autoRotation = p, this.labelRotation = sJ(c, sU(o) ? o : 0), t.step ? s : h
            }
            getSlotWidth(t) {
                let e = this.chart,
                    i = this.horiz,
                    s = this.options.labels,
                    r = Math.max(this.tickPositions.length - !this.categories, 1),
                    o = e.margin[3];
                if (t && sU(t.slotWidth)) return t.slotWidth;
                if (i && s.step < 2 && !this.isRadial) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
                if (!i) {
                    let t = s.style.width;
                    if (void 0 !== t) return parseInt(String(t), 10);
                    if (!this.opposite && o) return o - e.spacing[3]
                }
                return .33 * e.chartWidth
            }
            renderUnsquish() {
                let t = this.chart,
                    e = t.renderer,
                    i = this.tickPositions,
                    s = this.ticks,
                    r = this.options.labels,
                    o = r.style,
                    n = this.horiz,
                    a = this.getSlotWidth(),
                    l = Math.max(1, Math.round(a - (n ? 2 * (r.padding || 0) : r.distance || 0))),
                    h = {},
                    c = this.labelMetrics(),
                    d = o.lineClamp,
                    p, u = d ? ? (Math.floor(this.len / (i.length * c.h)) || 1),
                    g = 0;
                sV(r.rotation) || (h.rotation = r.rotation || 0), i.forEach(function(t) {
                    let e = s[t];
                    e.movedLabel && e.replaceMovedLabel();
                    let i = e.label ? .textPxLength || 0;
                    i > g && (g = i)
                }), this.maxLabelLength = g, this.autoRotation ? g > l && g > c.h ? h.rotation = this.labelRotation : this.labelRotation = 0 : a && (p = l), h.rotation && (p = g > .5 * t.chartHeight ? .33 * t.chartHeight : g, d || (u = 1)), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation || 0), this.labelAlign && (h.align = this.labelAlign), i.forEach(function(t) {
                    let e = s[t],
                        i = e ? .label,
                        r = o.width,
                        n = {};
                    i && (i.attr(h), e.shortenLabel ? e.shortenLabel() : p && !r && "nowrap" !== o.whiteSpace && (p < (i.textPxLength || 0) || "SPAN" === i.element.tagName) ? i.css(sF(n, {
                        width: `${p}px`,
                        lineClamp: u
                    })) : !i.styles.width || n.width || r || i.css({
                        width: "auto"
                    }), e.rotation = h.rotation)
                }, this), this.tickRotCorr = e.rotCorr(c.b, this.labelRotation || 0, 0 !== this.side)
            }
            hasData() {
                return this.series.some(function(t) {
                    return t.hasData()
                }) || this.options.showEmpty && sz(this.min) && sz(this.max)
            }
            addTitle(t) {
                let e, i = this.chart.renderer,
                    s = this.horiz,
                    r = this.opposite,
                    o = this.options.title,
                    n = this.chart.styledMode;
                this.axisTitle || ((e = o.textAlign) || (e = (s ? {
                    low: "left",
                    middle: "center",
                    high: "right"
                } : {
                    low: r ? "right" : "left",
                    middle: "center",
                    high: r ? "left" : "right"
                })[o.align]), this.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({
                    zIndex: 7,
                    rotation: o.rotation || 0,
                    align: e
                }).addClass("highcharts-axis-title"), n || this.axisTitle.css(sq(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), n || o.style.width || this.isRadial || this.axisTitle.css({
                    width: this.len + "px"
                }), this.axisTitle[t ? "show" : "hide"](t)
            }
            generateTick(t) {
                let e = this.ticks;
                e[t] ? e[t].addLabel() : e[t] = new sA(this, t)
            }
            createGroups() {
                let {
                    axisParent: t,
                    chart: e,
                    coll: i,
                    options: s
                } = this, r = e.renderer, o = (e, o, n) => r.g(e).attr({
                    zIndex: n
                }).addClass(`highcharts-${i.toLowerCase()}${o} ` + (this.isRadial ? `highcharts-radial-axis${o} ` : "") + (s.className || "")).add(t);
                this.axisGroup || (this.gridGroup = o("grid", "-grid", s.gridZIndex), this.axisGroup = o("axis", "", s.zIndex), this.labelGroup = o("axis-labels", "-labels", s.labels.zIndex))
            }
            getOffset() {
                let t = this,
                    {
                        chart: e,
                        horiz: i,
                        options: s,
                        side: r,
                        ticks: o,
                        tickPositions: n,
                        coll: a
                    } = t,
                    l = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r,
                    h = t.hasData(),
                    c = s.title,
                    d = s.labels,
                    p = sU(s.crossing),
                    u = e.axisOffset,
                    g = e.clipOffset,
                    f = [-1, 1, 1, -1][r],
                    m, x = 0,
                    y, b = 0,
                    v = 0,
                    w, k;
                if (t.showAxis = m = h || s.showEmpty, t.staggerLines = t.horiz && d.staggerLines || void 0, t.createGroups(), h || t.isLinked ? (n.forEach(function(e) {
                        t.generateTick(e)
                    }), t.renderUnsquish(), t.reserveSpaceDefault = 0 === r || 2 === r || ({
                        1: "left",
                        3: "right"
                    })[r] === t.labelAlign, sJ(d.reserveSpace, !p && null, "center" === t.labelAlign || null, t.reserveSpaceDefault) && n.forEach(function(t) {
                        v = Math.max(o[t].getLabelSize(), v)
                    }), t.staggerLines && (v *= t.staggerLines), t.labelOffset = v * (t.opposite ? -1 : 1)) : sZ(o, function(t, e) {
                        t.destroy(), delete o[e]
                    }), c ? .text && !1 !== c.enabled && (t.addTitle(m), m && !p && !1 !== c.reserveSpace && (t.titleOffset = x = t.axisTitle.getBBox()[i ? "height" : "width"], b = sz(y = c.offset) ? 0 : sJ(c.margin, i ? 5 : 10))), t.renderLine(), t.offset = f * sJ(s.offset, u[r] ? u[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || {
                        x: 0,
                        y: 0
                    }, k = 0 === r ? -t.labelMetrics().h : 2 === r ? t.tickRotCorr.y : 0, w = Math.abs(v) + b, v && (w -= k, w += f * (i ? sJ(d.y, t.tickRotCorr.y + f * d.distance) : sJ(d.x, f * d.distance))), t.axisTitleMargin = sJ(y, w), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(o, n)), "colorAxis" !== a && g) {
                    let e = this.tickSize("tick");
                    u[r] = Math.max(u[r], (t.axisTitleMargin || 0) + x + f * t.offset, w, n ? .length && e ? e[0] + f * t.offset : 0);
                    let i = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
                    g[l] = Math.max(g[l], i)
                }
                sX(this, "afterGetOffset")
            }
            getLinePath(t) {
                let e = this.chart,
                    i = this.opposite,
                    s = this.offset,
                    r = this.horiz,
                    o = this.left + (i ? this.width : 0) + s,
                    n = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
                return i && (t *= -1), e.renderer.crispLine([
                    ["M", r ? this.left : o, r ? n : this.top],
                    ["L", r ? e.chartWidth - this.right : o, r ? n : e.chartHeight - this.bottom]
                ], t)
            }
            renderLine() {
                !this.axisLine && (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                    stroke: this.options.lineColor,
                    "stroke-width": this.options.lineWidth,
                    zIndex: 7
                }))
            }
            getTitlePosition(t) {
                let e = this.horiz,
                    i = this.left,
                    s = this.top,
                    r = this.len,
                    o = this.options.title,
                    n = e ? i : s,
                    a = this.opposite,
                    l = this.offset,
                    h = o.x,
                    c = o.y,
                    d = this.chart.renderer.fontMetrics(t),
                    p = t ? Math.max(t.getBBox(!1, 0).height - d.h - 1, 0) : 0,
                    u = {
                        low: n + (e ? 0 : r),
                        middle: n + r / 2,
                        high: n + (e ? r : 0)
                    }[o.align],
                    g = (e ? s + this.height : i) + (e ? 1 : -1) * (a ? -1 : 1) * (this.axisTitleMargin || 0) + [-p, p, d.f, -p][this.side],
                    f = {
                        x: e ? u + h : g + (a ? this.width : 0) + l + h,
                        y: e ? g + c - (a ? this.height : 0) + l : u + c
                    };
                return sX(this, "afterGetTitlePosition", {
                    titlePosition: f
                }), f
            }
            renderMinorTick(t, e) {
                let i = this.minorTicks;
                i[t] || (i[t] = new sA(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
            }
            renderTick(t, e, i) {
                let s = this.isLinked,
                    r = this.ticks;
                (!s || t >= this.min && t <= this.max || this.grid ? .isColumn) && (r[t] || (r[t] = new sA(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e))
            }
            render() {
                let t, e, i = this,
                    s = i.chart,
                    r = i.logarithmic,
                    o = s.renderer,
                    n = i.options,
                    a = i.isLinked,
                    l = i.tickPositions,
                    h = i.axisTitle,
                    c = i.ticks,
                    d = i.minorTicks,
                    p = i.alternateBands,
                    u = n.stackLabels,
                    g = n.alternateGridColor,
                    f = n.crossing,
                    m = i.tickmarkOffset,
                    x = i.axisLine,
                    y = i.showAxis,
                    b = sE(o.globalAnimation);
                if (i.labelEdge.length = 0, i.overlap = !1, [c, d, p].forEach(function(t) {
                        sZ(t, function(t) {
                            t.isActive = !1
                        })
                    }), sU(f)) {
                    let t = this.isXAxis ? s.yAxis[0] : s.xAxis[0],
                        e = [1, -1, -1, 1][this.side];
                    if (t) {
                        let s = t.toPixels(f, !0);
                        i.horiz && (s = t.len - s), i.offset = e * s
                    }
                }
                if (i.hasData() || a) {
                    let o = i.chart.hasRendered && i.old && sU(i.old.min);
                    i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function(t) {
                        i.renderMinorTick(t, o)
                    }), l.length && (l.forEach(function(t, e) {
                        i.renderTick(t, e, o)
                    }), m && (0 === i.min || i.single) && (c[-1] || (c[-1] = new sA(i, -1, null, !0)), c[-1].render(-1))), g && l.forEach(function(o, n) {
                        e = void 0 !== l[n + 1] ? l[n + 1] + m : i.max - m, n % 2 == 0 && o < i.max && e <= i.max + (s.polar ? -m : m) && (p[o] || (p[o] = new B.PlotLineOrBand(i, {})), t = o + m, p[o].options = {
                            from: r ? r.lin2log(t) : t,
                            to: r ? r.lin2log(e) : e,
                            color: g,
                            className: "highcharts-alternate-grid"
                        }, p[o].render(), p[o].isActive = !0)
                    }), i._addedPlotLB || (i._addedPlotLB = !0, (n.plotLines || []).concat(n.plotBands || []).forEach(function(t) {
                        i.addPlotBandOrLine(t)
                    }))
                }[c, d, p].forEach(function(t) {
                    let e = [],
                        i = b.duration;
                    sZ(t, function(t, i) {
                        t.isActive || (t.render(i, !1, 0), t.isActive = !1, e.push(i))
                    }), s2(function() {
                        let i = e.length;
                        for (; i--;) t[e[i]] && !t[e[i]].isActive && (t[e[i]].destroy(), delete t[e[i]])
                    }, t !== p && s.hasRendered && i ? i : 0)
                }), x && (x[x.isPlaced ? "animate" : "attr"]({
                    d: this.getLinePath(x.strokeWidth())
                }), x.isPlaced = !0, x[y ? "show" : "hide"](y)), h && y && (h[h.isNew ? "attr" : "animate"](i.getTitlePosition(h)), h.isNew = !1), u ? .enabled && i.stacking && i.stacking.renderStackTotals(), i.old = {
                    len: i.len,
                    max: i.max,
                    min: i.min,
                    transA: i.transA,
                    userMax: i.userMax,
                    userMin: i.userMin
                }, i.isDirty = !1, sX(this, "afterRender")
            }
            redraw() {
                this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
                    t.render()
                })), this.series.forEach(function(t) {
                    t.isDirty = !0
                })
            }
            getKeepProps() {
                return this.keepProps || s5.keepProps
            }
            destroy(t) {
                let e = this,
                    i = e.plotLinesAndBands,
                    s = this.eventOptions;
                if (sX(this, "destroy", {
                        keepEvents: t
                    }), t || s0(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(t) {
                        s_(t)
                    }), i) {
                    let t = i.length;
                    for (; t--;) i[t].destroy()
                }
                for (let t in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(t) {
                        e[t] && (e[t] = e[t].destroy())
                    }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[t] = e.plotLinesAndBandsGroups[t].destroy();
                sZ(e, function(t, i) {
                    -1 === e.getKeepProps().indexOf(i) && delete e[i]
                }), this.eventOptions = s
            }
            drawCrosshair(t, e) {
                let i = this.crosshair,
                    s = i ? .snap ? ? !0,
                    r = this.chart,
                    o, n, a, l = this.cross,
                    h;
                if (sX(this, "drawCrosshair", {
                        e: t,
                        point: e
                    }), t || (t = this.cross ? .e), i && !1 !== (sz(e) || !s)) {
                    if (s ? sz(e) && (n = sJ("colorAxis" !== this.coll ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), sz(n) && (h = {
                            value: e && (this.isXAxis ? e.x : sJ(e.stackY, e.y)),
                            translatedValue: n
                        }, r.polar && sF(h, {
                            isCrosshair: !0,
                            chartX: t ? .chartX,
                            chartY: t ? .chartY,
                            point: e
                        }), o = this.getPlotLinePath(h) || null), !sz(o)) return void this.hideCrosshair();
                    a = this.categories && !this.isRadial, l || (this.cross = l = r.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (a ? "category " : "thin ") + (i.className || "")).attr({
                        zIndex: sJ(i.zIndex, 2)
                    }).add(), !r.styledMode && (l.attr({
                        stroke: i.color || (a ? tF.parse("#ccd3ff").setOpacity(.25).get() : "#cccccc"),
                        "stroke-width": sJ(i.width, 1)
                    }).css({
                        "pointer-events": "none"
                    }), i.dashStyle && l.attr({
                        dashstyle: i.dashStyle
                    }))), l.show().attr({
                        d: o
                    }), a && !i.width && l.attr({
                        "stroke-width": this.transA
                    }), this.cross.e = t
                } else this.hideCrosshair();
                sX(this, "afterDrawCrosshair", {
                    e: t,
                    point: e
                })
            }
            hideCrosshair() {
                this.cross && this.cross.hide(), sX(this, "afterHideCrosshair")
            }
            update(t, e) {
                let i = this.chart;
                t = sq(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, sJ(e, !0) && i.redraw()
            }
            remove(t) {
                let e = this.chart,
                    i = this.coll,
                    s = this.series,
                    r = s.length;
                for (; r--;) s[r] && s[r].remove(!1);
                sW(e.axes, this), sW(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, sJ(t, !0) && e.redraw()
            }
            setTitle(t, e) {
                this.update({
                    title: t
                }, e)
            }
            setCategories(t, e) {
                this.update({
                    categories: t
                }, e)
            }
        }
        s5.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"];
        let {
            addEvent: s6,
            getMagnitude: s4,
            normalizeTickInterval: s9,
            timeUnits: s7
        } = ta;
        ! function(t) {
            function e() {
                return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
            }

            function i() {
                if ("datetime" !== this.type) {
                    this.dateTime = void 0;
                    return
                }
                this.dateTime || (this.dateTime = new s(this))
            }
            t.compose = function(t) {
                return t.keepProps.includes("dateTime") || (t.keepProps.push("dateTime"), t.prototype.getTimeTicks = e, s6(t, "afterSetType", i)), t
            };
            class s {
                constructor(t) {
                    this.axis = t
                }
                normalizeTimeTickInterval(t, e) {
                    let i = e || [
                            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                            ["second", [1, 2, 5, 10, 15, 30]],
                            ["minute", [1, 2, 5, 10, 15, 30]],
                            ["hour", [1, 2, 3, 4, 6, 8, 12]],
                            ["day", [1, 2]],
                            ["week", [1, 2]],
                            ["month", [1, 2, 3, 4, 6]],
                            ["year", null]
                        ],
                        s = i[i.length - 1],
                        r = s7[s[0]],
                        o = s[1],
                        n;
                    for (n = 0; n < i.length && (r = s7[(s = i[n])[0]], o = s[1], !i[n + 1] || !(t <= (r * o[o.length - 1] + s7[i[n + 1][0]]) / 2)); n++);
                    r === s7.year && t < 5 * r && (o = [1, 2, 5]);
                    let a = s9(t / r, o, "year" === s[0] ? Math.max(s4(t / r), 1) : 1);
                    return {
                        unitRange: r,
                        count: a,
                        unitName: s[0]
                    }
                }
                getXDateFormat(t, e) {
                    let {
                        axis: i
                    } = this, s = i.chart.time;
                    return i.closestPointRange ? s.getDateFormat(i.closestPointRange, t, i.options.startOfWeek, e) || s.resolveDTLFormat(e.year).main : s.resolveDTLFormat(e.day).main
                }
            }
            t.Additions = s
        }(w || (w = {}));
        let s8 = w,
            {
                addEvent: rt,
                normalizeTickInterval: re,
                pick: ri
            } = ta;
        ! function(t) {
            function e() {
                "logarithmic" !== this.type ? this.logarithmic = void 0 : this.logarithmic ? ? (this.logarithmic = new s(this))
            }

            function i() {
                let t = this.logarithmic;
                t && (this.lin2val = function(e) {
                    return t.lin2log(e)
                }, this.val2lin = function(e) {
                    return t.log2lin(e)
                })
            }
            t.compose = function(t) {
                return t.keepProps.includes("logarithmic") || (t.keepProps.push("logarithmic"), rt(t, "afterSetType", e), rt(t, "afterInit", i)), t
            };
            class s {
                constructor(t) {
                    this.axis = t
                }
                getLogTickPositions(t, e, i, s) {
                    let r = this.axis,
                        o = r.len,
                        n = r.options,
                        a = [];
                    if (s || (this.minorAutoInterval = void 0), t >= .5) t = Math.round(t), a = r.getLinearTickPositions(t, e, i);
                    else if (t >= .08) {
                        let r, o, n, l, h, c, d, p = Math.floor(e);
                        for (r = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], o = p; o < i + 1 && !d; o++)
                            for (n = 0, l = r.length; n < l && !d; n++)(h = this.log2lin(this.lin2log(o) * r[n])) > e && (!s || c <= i) && void 0 !== c && a.push(c), c > i && (d = !0), c = h
                    } else {
                        let l = this.lin2log(e),
                            h = this.lin2log(i),
                            c = s ? r.getMinorTickInterval() : n.tickInterval,
                            d = n.tickPixelInterval / (s ? 5 : 1),
                            p = s ? o / r.tickPositions.length : o;
                        t = re(t = ri("auto" === c ? null : c, this.minorAutoInterval, (h - l) * d / (p || 1))), a = r.getLinearTickPositions(t, l, h).map(this.log2lin), s || (this.minorAutoInterval = t / 5)
                    }
                    return s || (r.tickInterval = t), a
                }
                lin2log(t) {
                    return Math.pow(10, t)
                }
                log2lin(t) {
                    return Math.log(t) / Math.LN10
                }
            }
            t.Additions = s
        }(k || (k = {}));
        let rs = k,
            {
                erase: rr,
                extend: ro,
                isNumber: rn
            } = ta;
        ! function(t) {
            let e;

            function i(t) {
                return this.addPlotBandOrLine(t, "plotBands")
            }

            function s(t, i) {
                let s = this.userOptions,
                    r = new e(this, t);
                if (this.visible && (r = r.render()), r) {
                    if (this._addedPlotLB || (this._addedPlotLB = !0, (s.plotLines || []).concat(s.plotBands || []).forEach(t => {
                            this.addPlotBandOrLine(t)
                        })), i) {
                        let e = s[i] || [];
                        e.push(t), s[i] = e
                    }
                    this.plotLinesAndBands.push(r)
                }
                return r
            }

            function r(t) {
                return this.addPlotBandOrLine(t, "plotLines")
            }

            function o(t, e, i) {
                i = i || this.options;
                let s = this.getPlotLinePath({
                        value: e,
                        force: !0,
                        acrossPanes: i.acrossPanes
                    }),
                    r = [],
                    o = this.horiz,
                    n = !rn(this.min) || !rn(this.max) || t < this.min && e < this.min || t > this.max && e > this.max,
                    a = this.getPlotLinePath({
                        value: t,
                        force: !0,
                        acrossPanes: i.acrossPanes
                    }),
                    l, h = 1,
                    c;
                if (a && s)
                    for (n && (c = a.toString() === s.toString(), h = 0), l = 0; l < a.length; l += 2) {
                        let t = a[l],
                            e = a[l + 1],
                            i = s[l],
                            n = s[l + 1];
                        ("M" === t[0] || "L" === t[0]) && ("M" === e[0] || "L" === e[0]) && ("M" === i[0] || "L" === i[0]) && ("M" === n[0] || "L" === n[0]) && (o && i[1] === t[1] ? (i[1] += h, n[1] += h) : o || i[2] !== t[2] || (i[2] += h, n[2] += h), r.push(["M", t[1], t[2]], ["L", e[1], e[2]], ["L", n[1], n[2]], ["L", i[1], i[2]], ["Z"])), r.isFlat = c
                    }
                return r
            }

            function n(t) {
                this.removePlotBandOrLine(t)
            }

            function a(t) {
                let e = this.plotLinesAndBands,
                    i = this.options,
                    s = this.userOptions;
                if (e) {
                    let r = e.length;
                    for (; r--;) e[r].id === t && e[r].destroy();
                    [i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || []].forEach(function(e) {
                        for (r = e.length; r--;) e[r] ? .id === t && rr(e, e[r])
                    })
                }
            }

            function l(t) {
                this.removePlotBandOrLine(t)
            }
            t.compose = function(t, h) {
                let c = h.prototype;
                return c.addPlotBand || (e = t, ro(c, {
                    addPlotBand: i,
                    addPlotLine: r,
                    addPlotBandOrLine: s,
                    getPlotBandPath: o,
                    removePlotBand: n,
                    removePlotLine: l,
                    removePlotBandOrLine: a
                })), h
            }
        }(T || (T = {}));
        let ra = T,
            {
                addEvent: rl,
                arrayMax: rh,
                arrayMin: rc,
                defined: rd,
                destroyObjectProperties: rp,
                erase: ru,
                fireEvent: rg,
                merge: rf,
                objectEach: rm,
                pick: rx
            } = ta;
        class ry {
            static compose(t, e) {
                return rl(t, "afterInit", function() {
                    this.labelCollectors.push(() => {
                        let t = [];
                        for (let e of this.axes)
                            for (let {
                                    label: i,
                                    options: s
                                } of e.plotLinesAndBands) i && !s ? .label ? .allowOverlap && t.push(i);
                        return t
                    })
                }), ra.compose(ry, e)
            }
            constructor(t, e) {
                this.axis = t, this.options = e, this.id = e.id
            }
            render() {
                rg(this, "render");
                let {
                    axis: t,
                    options: e
                } = this, {
                    horiz: i,
                    logarithmic: s
                } = t, {
                    color: r,
                    events: o,
                    zIndex: n = 0
                } = e, {
                    renderer: a,
                    time: l
                } = t.chart, h = {}, c = l.parse(e.to), d = l.parse(e.from), p = l.parse(e.value), u = e.borderWidth, g = e.label, {
                    label: f,
                    svgElem: m
                } = this, x = [], y, b = rd(d) && rd(c), v = rd(p), w = !m, k = {
                    class: "highcharts-plot-" + (b ? "band " : "line ") + (e.className || "")
                }, T = b ? "bands" : "lines";
                if (!t.chart.styledMode && (v ? (k.stroke = r || "#999999", k["stroke-width"] = rx(e.width, 1), e.dashStyle && (k.dashstyle = e.dashStyle)) : b && (k.fill = r || "#e6e9ff", u && (k.stroke = e.borderColor, k["stroke-width"] = u))), h.zIndex = n, T += "-" + n, (y = t.plotLinesAndBandsGroups[T]) || (t.plotLinesAndBandsGroups[T] = y = a.g("plot-" + T).attr(h).add()), m || (this.svgElem = m = a.path().attr(k).add(y)), rd(p)) x = t.getPlotLinePath({
                    value: s ? .log2lin(p) ? ? p,
                    lineWidth: m.strokeWidth(),
                    acrossPanes: e.acrossPanes
                });
                else {
                    if (!(rd(d) && rd(c))) return;
                    x = t.getPlotBandPath(s ? .log2lin(d) ? ? d, s ? .log2lin(c) ? ? c, e)
                }
                return !this.eventsAdded && o && (rm(o, (t, e) => {
                    m ? .on(e, t => {
                        o[e].apply(this, [t])
                    })
                }), this.eventsAdded = !0), (w || !m.d) && x ? .length ? m.attr({
                    d: x
                }) : m && (x ? (m.show(), m.animate({
                    d: x
                })) : m.d && (m.hide(), f && (this.label = f = f.destroy()))), g && (rd(g.text) || rd(g.formatter)) && x ? .length && t.width > 0 && t.height > 0 && !x.isFlat ? (g = rf({
                    align: i && b ? "center" : void 0,
                    x: i ? !b && 4 : 10,
                    verticalAlign: !i && b ? "middle" : void 0,
                    y: i ? b ? 16 : 10 : b ? 6 : -4,
                    rotation: i && !b ? 90 : 0,
                    ...b ? {
                        inside: !0
                    } : {}
                }, g), this.renderLabel(g, x, b, n)) : f && f.hide(), this
            }
            renderLabel(t, e, i, s) {
                let r = this.axis,
                    o = r.chart.renderer,
                    n = t.inside,
                    a = this.label;
                a || (this.label = a = o.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
                    align: t.textAlign || t.align,
                    rotation: t.rotation,
                    class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""),
                    zIndex: s
                }), r.chart.styledMode || a.css(rf({
                    color: r.chart.options.title ? .style ? .color,
                    fontSize: "0.8em",
                    textOverflow: i && !n ? "" : "ellipsis"
                }, t.style)), a.add());
                let l = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]],
                    h = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]],
                    c = rc(l),
                    d = rc(h),
                    p = rh(l) - c;
                a.align(t, !1, {
                    x: c,
                    y: d,
                    width: p,
                    height: rh(h) - d
                }), a.alignAttr.y -= o.fontMetrics(a).b, (!a.alignValue || "left" === a.alignValue || rd(n)) && a.css({
                    width: (t.style ? .width || (i && n ? p : 90 === a.rotation ? r.height - (a.alignAttr.y - r.top) : (t.clip ? r.width : r.chart.chartWidth) - (a.alignAttr.x - r.left))) + "px"
                }), a.show(!0)
            }
            getLabelText(t) {
                return rd(t.formatter) ? t.formatter.call(this) : t.text
            }
            destroy() {
                ru(this.axis.plotLinesAndBands, this), delete this.axis, rp(this)
            }
        }
        let {
            animObject: rb
        } = t5, {
            format: rv
        } = eS, {
            composed: rw,
            dateFormats: rk,
            doc: rT,
            isSafari: rS
        } = B, {
            distribute: rM
        } = eL, {
            addEvent: rC,
            clamp: rA,
            css: rE,
            clearTimeout: rO,
            discardElement: rL,
            extend: rP,
            fireEvent: rN,
            getAlignFactor: rI,
            isArray: rR,
            isNumber: rD,
            isObject: rB,
            isString: rj,
            merge: rz,
            pick: r_,
            pushUnique: rW,
            splat: rH,
            syncTimeout: rF
        } = ta;
        class rX {
            constructor(t, e, i) {
                this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e), this.pointer = i
            }
            bodyFormatter(t) {
                return t.map(t => {
                    let e = t.series.tooltipOptions,
                        i = t.formatPrefix || "point";
                    return (e[i + "Formatter"] || t.tooltipFormatter).call(t, e[i + "Format"] || "")
                })
            }
            cleanSplit(t) {
                this.chart.series.forEach(function(e) {
                    let i = e ? .tt;
                    i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                })
            }
            defaultFormatter(t) {
                let e, i = this.points || rH(this);
                return (e = (e = [t.headerFooterFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.headerFooterFormatter(i[0], !0)), e
            }
            destroy() {
                this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), rL(this.container)), rO(this.hideTimer)
            }
            getAnchor(t, e) {
                let i, {
                        chart: s,
                        pointer: r
                    } = this,
                    o = s.inverted,
                    n = s.plotTop,
                    a = s.plotLeft;
                if (t = rH(t), t[0].series ? .yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) void 0 === e.chartX && (e = r.normalize(e)), i = [e.chartX - a, e.chartY - n];
                else if (t[0].tooltipPos) i = t[0].tooltipPos;
                else {
                    let s = 0,
                        r = 0;
                    t.forEach(function(t) {
                        let e = t.pos(!0);
                        e && (s += e[0], r += e[1])
                    }), s /= t.length, r /= t.length, this.shared && t.length > 1 && e && (o ? s = e.chartX : r = e.chartY), i = [s - a, r - n]
                }
                let l = {
                    point: t[0],
                    ret: i
                };
                return rN(this, "getAnchor", l), l.ret.map(Math.round)
            }
            getClassName(t, e, i) {
                let s = this.options,
                    r = t.series,
                    o = r.options;
                return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + r_(t.colorIndex, r.colorIndex), o ? .className].filter(rj).join(" ")
            }
            getLabel({
                anchorX: t,
                anchorY: e
            } = {
                anchorX: 0,
                anchorY: 0
            }) {
                let i = this,
                    s = this.chart.styledMode,
                    r = this.options,
                    o = this.split && this.allowShared,
                    n = this.container,
                    a = this.chart.renderer;
                if (this.label) {
                    let t = !this.label.hasClass("highcharts-label");
                    (!o && t || o && !t) && this.destroy()
                }
                if (!this.label) {
                    if (this.outside) {
                        let t = this.chart,
                            e = t.options.chart.style,
                            i = eM.getRendererType();
                        this.container = n = B.doc.createElement("div"), n.className = "highcharts-tooltip-container " + (t.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), rE(n, {
                            position: "absolute",
                            top: "1px",
                            pointerEvents: "none",
                            zIndex: Math.max(this.options.style.zIndex || 0, (e ? .zIndex || 0) + 3)
                        }), this.renderer = a = new i(n, 0, 0, e, void 0, void 0, a.styledMode)
                    }
                    if (o ? this.label = a.g("tooltip") : (this.label = a.label("", t, e, r.shape || "callout", void 0, void 0, r.useHTML, void 0, "tooltip").attr({
                            padding: r.padding,
                            r: r.borderRadius
                        }), s || this.label.attr({
                            fill: r.backgroundColor,
                            "stroke-width": r.borderWidth || 0
                        }).css(r.style).css({
                            pointerEvents: r.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none")
                        })), i.outside) {
                        let t = this.label;
                        [t.xSetter, t.ySetter].forEach((e, s) => {
                            t[s ? "ySetter" : "xSetter"] = r => {
                                e.call(t, i.distance), t[s ? "y" : "x"] = r, n && (n.style[s ? "top" : "left"] = `${r}px`)
                            }
                        })
                    }
                    this.label.attr({
                        zIndex: 8
                    }).shadow(r.shadow ? ? !r.fixed).add()
                }
                return n && !n.parentElement && B.doc.body.appendChild(n), this.label
            }
            getPlayingField() {
                let {
                    body: t,
                    documentElement: e
                } = rT, {
                    chart: i,
                    distance: s,
                    outside: r
                } = this;
                return {
                    width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s - 2 : i.chartWidth,
                    height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight
                }
            }
            getPosition(t, e, i) {
                let {
                    distance: s,
                    chart: r,
                    outside: o,
                    pointer: n
                } = this, {
                    inverted: a,
                    plotLeft: l,
                    plotTop: h,
                    polar: c
                } = r, {
                    plotX: d = 0,
                    plotY: p = 0
                } = i, u = {}, g = a && i.h || 0, {
                    height: f,
                    width: m
                } = this.getPlayingField(), x = n.getChartPosition(), y = i => {
                    let n = "x" === i;
                    return [i, n ? m : f, n ? t : e].concat(o ? [n ? t * x.scaleX : e * x.scaleY, n ? x.left - s + (d + l) * x.scaleX : x.top - s + (p + h) * x.scaleY, 0, n ? m : f] : [n ? t : e, n ? d + l : p + h, n ? l : h, n ? l + r.plotWidth : h + r.plotHeight])
                }, b = y("y"), v = y("x"), w, k = !!i.negative;
                !c && r.hoverSeries ? .yAxis ? .reversed && (k = !k);
                let T = !this.followPointer && r_(i.ttBelow, !c && !a === k),
                    S = function(t, e, i, r, n, a, l) {
                        let h = o ? "y" === t ? s * x.scaleY : s * x.scaleX : s,
                            c = (i - r) / 2,
                            d = r < n - s,
                            p = n + s + r < e,
                            f = n - h - i + c,
                            m = n + h - c;
                        if (T && p) u[t] = m;
                        else if (!T && d) u[t] = f;
                        else if (d) u[t] = Math.min(l - r, f - g < 0 ? f : f - g);
                        else {
                            if (!p) return u[t] = 0, !1;
                            u[t] = Math.max(a, m + g + i > e ? m : m + g)
                        }
                    },
                    M = function(t, e, i, r, o) {
                        if (o < s || o > e - s) return !1;
                        o < i / 2 ? u[t] = 1 : o > e - r / 2 ? u[t] = e - r - 2 : u[t] = o - i / 2
                    },
                    C = function(t) {
                        [b, v] = [v, b], w = t
                    },
                    A = () => {
                        !1 !== S.apply(0, b) ? !1 !== M.apply(0, v) || w || (C(!0), A()) : w ? u.x = u.y = 0 : (C(!0), A())
                    };
                return (a && !c || this.len > 1) && C(), A(), u
            }
            getFixedPosition(t, e, i) {
                let s = i.series,
                    {
                        chart: r,
                        options: o,
                        split: n
                    } = this,
                    a = o.position,
                    l = a.relativeTo,
                    h = o.shared || s ? .yAxis ? .isRadial && ("pane" === l || !l) ? "plotBox" : l,
                    c = "chart" === h ? r.renderer : r[h] || r.getClipBox(s, !0);
                return {
                    x: c.x + (c.width - t) * rI(a.align) + a.x,
                    y: c.y + (c.height - e) * rI(a.verticalAlign) + (!n && a.y || 0)
                }
            }
            hide(t) {
                let e = this;
                rO(this.hideTimer), t = r_(t, this.options.hideDelay), this.isHidden || (this.hideTimer = rF(function() {
                    let i = e.getLabel();
                    e.getLabel().animate({
                        opacity: 0
                    }, {
                        duration: t ? 150 : t,
                        complete: () => {
                            i.hide(), e.container && e.container.remove()
                        }
                    }), e.isHidden = !0
                }, t))
            }
            init(t, e) {
                this.chart = t, this.options = e, this.crosshairs = [], this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = r_(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY))
            }
            shouldStickOnContact(t) {
                return !!(!this.followPointer && this.options.stickOnContact && (!t || this.pointer.inClass(t.target, "highcharts-tooltip")))
            }
            move(t, e, i, s) {
                let {
                    followPointer: r,
                    options: o
                } = this, n = rb(!r && !this.isHidden && !o.fixed && o.animation), a = r || (this.len || 0) > 1, l = {
                    x: t,
                    y: e
                };
                a ? l.anchorX = l.anchorY = NaN : (l.anchorX = i, l.anchorY = s), n.step = () => this.drawTracker(), this.getLabel().animate(l, n)
            }
            refresh(t, e) {
                let {
                    chart: i,
                    options: s,
                    pointer: r,
                    shared: o
                } = this, n = rH(t), a = n[0], l = s.format, h = s.formatter || this.defaultFormatter, c = i.styledMode, d = this.allowShared;
                if (!s.enabled || !a.series) return;
                rO(this.hideTimer), this.allowShared = !(!rR(t) && t.series && t.series.noSharedTooltip), d = d && !this.allowShared, this.followPointer = !this.split && a.series.tooltipOptions.followPointer;
                let p = this.getAnchor(t, e),
                    u = p[0],
                    g = p[1];
                o && this.allowShared && (r.applyInactiveState(n), n.forEach(t => t.setState("hover")), a.points = n), this.len = n.length;
                let f = rj(l) ? rv(l, a, i) : h.call(a, this);
                a.points = void 0;
                let m = a.series;
                if (this.distance = r_(m.tooltipOptions.distance, 16), !1 === f) this.hide();
                else {
                    if (this.split && this.allowShared) this.renderSplit(f, n);
                    else {
                        let t = u,
                            o = g;
                        if (e && r.isDirectTouch && (t = e.chartX - i.plotLeft, o = e.chartY - i.plotTop), !(i.polar || !1 === m.options.clip || n.some(e => r.isDirectTouch || e.series.shouldShowTooltip(t, o)))) return void this.hide(); {
                            let t = this.getLabel(d && this.tt || {});
                            (!s.style.width || c) && t.css({
                                width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px"
                            }), t.attr({
                                class: this.getClassName(a),
                                text: f && f.join ? f.join("") : f
                            }), this.outside && t.attr({
                                x: rA(t.x || 0, 0, this.getPlayingField().width - (t.width || 0) - 1)
                            }), c || t.attr({
                                stroke: s.borderColor || a.color || m.color || "#666666"
                            }), this.updatePosition({
                                plotX: u,
                                plotY: g,
                                negative: a.negative,
                                ttBelow: a.ttBelow,
                                series: m,
                                h: p[2] || 0
                            })
                        }
                    }
                    this.isHidden && this.label && this.label.attr({
                        opacity: 1
                    }).show(), this.isHidden = !1
                }
                rN(this, "refresh")
            }
            renderSplit(t, e) {
                let i = this,
                    {
                        chart: s,
                        chart: {
                            chartWidth: r,
                            chartHeight: o,
                            plotHeight: n,
                            plotLeft: a,
                            plotTop: l,
                            scrollablePixelsY: h = 0,
                            scrollablePixelsX: c,
                            styledMode: d
                        },
                        distance: p,
                        options: u,
                        options: {
                            fixed: g,
                            position: f,
                            positioner: m
                        },
                        pointer: x
                    } = i,
                    {
                        scrollLeft: y = 0,
                        scrollTop: b = 0
                    } = s.scrollablePlotArea ? .scrollingContainer || {},
                    v = i.outside && "number" != typeof c ? rT.documentElement.getBoundingClientRect() : {
                        left: y,
                        right: y + r,
                        top: b,
                        bottom: b + o
                    },
                    w = i.getLabel(),
                    k = this.renderer || s.renderer,
                    T = !!s.xAxis[0] ? .opposite,
                    {
                        left: S,
                        top: M
                    } = x.getChartPosition(),
                    C = m || g,
                    A = l + b,
                    E = 0,
                    O = n - h,
                    L = function(t, e, s, r = [0, 0], o = !0) {
                        let n, a;
                        if (s.isHeader) a = T ? 0 : O, n = rA(r[0] - t / 2, v.left, v.right - t - (i.outside ? S : 0));
                        else if (g && s) {
                            let r = i.getFixedPosition(t, e, s);
                            n = r.x, a = r.y - A
                        } else a = r[1] - A, n = rA(n = o ? r[0] - t - p : r[0] + p, o ? n : v.left, v.right);
                        return {
                            x: n,
                            y: a
                        }
                    };
                rj(t) && (t = [!1, t]);
                let P = t.slice(0, e.length + 1).reduce(function(t, s, r) {
                    if (!1 !== s && "" !== s) {
                        let o = e[r - 1] || {
                                isHeader: !0,
                                plotX: e[0].plotX,
                                plotY: n,
                                series: {}
                            },
                            h = o.isHeader,
                            c = h ? i : o.series,
                            f = c.tt = function(t, e, s) {
                                let r = t,
                                    {
                                        isHeader: o,
                                        series: n
                                    } = e,
                                    a = n.tooltipOptions || u;
                                if (!r) {
                                    let t = {
                                        padding: a.padding,
                                        r: a.borderRadius
                                    };
                                    d || (t.fill = a.backgroundColor, t["stroke-width"] = a.borderWidth ? ? (g && !o ? 0 : 1)), r = k.label("", 0, 0, a[o ? "headerShape" : "shape"] || (g && !o ? "rect" : "callout"), void 0, void 0, a.useHTML).addClass(i.getClassName(e, !0, o)).attr(t).add(w)
                                }
                                return r.isActive = !0, r.attr({
                                    text: s
                                }), d || r.css(a.style).attr({
                                    stroke: a.borderColor || e.color || n.color || "#333333"
                                }), r
                            }(c.tt, o, s.toString()),
                            x = f.getBBox(),
                            y = x.width + f.strokeWidth();
                        h && (E = x.height, O += E, T && (A -= E));
                        let {
                            anchorX: b,
                            anchorY: S
                        } = function(t) {
                            let e, i, {
                                isHeader: s,
                                plotX: r = 0,
                                plotY: o = 0,
                                series: h
                            } = t;
                            if (s) e = Math.max(a + r, a), i = l + n / 2;
                            else {
                                let {
                                    xAxis: t,
                                    yAxis: s
                                } = h;
                                e = t.pos + rA(r, -p, t.len + p), h.shouldShowTooltip(0, s.pos - l + o, {
                                    ignoreX: !0
                                }) && (i = s.pos + o)
                            }
                            return {
                                anchorX: e = rA(e, v.left - p, v.right + p),
                                anchorY: i
                            }
                        }(o);
                        if ("number" == typeof S) {
                            let e = x.height + 1,
                                s = (m || L).call(i, y, e, o, [b, S]);
                            t.push({
                                align: C ? 0 : void 0,
                                anchorX: b,
                                anchorY: S,
                                boxWidth: y,
                                point: o,
                                rank: r_(s.rank, +!!h),
                                size: e,
                                target: s.y,
                                tt: f,
                                x: s.x
                            })
                        } else f.isActive = !1
                    }
                    return t
                }, []);
                !C && P.some(t => {
                    let {
                        outside: e
                    } = i, s = (e ? S : 0) + t.anchorX;
                    return s < v.left && s + t.boxWidth < v.right || s < S - v.left + t.boxWidth && v.right - s > s
                }) && (P = P.map(t => {
                    let {
                        x: e,
                        y: i
                    } = L.call(this, t.boxWidth, t.size, t.point, [t.anchorX, t.anchorY], !1);
                    return rP(t, {
                        target: i,
                        x: e
                    })
                })), i.cleanSplit(), rM(P, O);
                let N = {
                    left: S,
                    right: S
                };
                P.forEach(function(t) {
                    let {
                        x: e,
                        boxWidth: s,
                        isHeader: r
                    } = t;
                    !r && (i.outside && S + e < N.left && (N.left = S + e), !r && i.outside && N.left + s > N.right && (N.right = S + e))
                }), P.forEach(function(t) {
                    let {
                        x: e,
                        anchorX: s,
                        anchorY: r,
                        pos: o,
                        point: {
                            isHeader: n
                        }
                    } = t, a = {
                        visibility: void 0 === o ? "hidden" : "inherit",
                        x: e,
                        y: (o || 0) + A + (g && f.y || 0),
                        anchorX: s,
                        anchorY: r
                    };
                    if (i.outside && e < s) {
                        let t = S - N.left;
                        t > 0 && (n || (a.x = e + t, a.anchorX = s + t), n && (a.x = (N.right - N.left) / 2, a.anchorX = s + t))
                    }
                    t.tt.attr(a)
                });
                let {
                    container: I,
                    outside: R,
                    renderer: D
                } = i;
                if (R && I && D) {
                    let {
                        width: t,
                        height: e,
                        x: i,
                        y: s
                    } = w.getBBox();
                    D.setSize(t + i, e + s, !1), I.style.left = N.left + "px", I.style.top = M + "px"
                }
                rS && w.attr({
                    opacity: 1 === w.opacity ? .999 : 1
                })
            }
            drawTracker() {
                let t = this;
                if (!this.shouldStickOnContact()) {
                    t.tracker && (t.tracker = t.tracker.destroy());
                    return
                }
                let e = t.chart,
                    i = t.label,
                    s = t.shared ? e.hoverPoints : e.hoverPoint;
                if (!i || !s) return;
                let r = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    o = this.getAnchor(s),
                    n = i.getBBox();
                o[0] += e.plotLeft - (i.translateX || 0), o[1] += e.plotTop - (i.translateY || 0), r.x = Math.min(0, o[0]), r.y = Math.min(0, o[1]), r.width = o[0] < 0 ? Math.max(Math.abs(o[0]), n.width - o[0]) : Math.max(Math.abs(o[0]), n.width), r.height = o[1] < 0 ? Math.max(Math.abs(o[1]), n.height - Math.abs(o[1])) : Math.max(Math.abs(o[1]), n.height), t.tracker ? t.tracker.attr(r) : (t.tracker = i.renderer.rect(r).addClass("highcharts-tracker").add(i), rC(t.tracker.element, "mouseenter", () => {
                    rO(t.hideTimer)
                }), e.styledMode || t.tracker.attr({
                    fill: "rgba(0,0,0,0)"
                }))
            }
            styledModeFormat(t) {
                return t.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')
            }
            headerFooterFormatter(t, e) {
                let i = t.series,
                    s = i.tooltipOptions,
                    r = i.xAxis,
                    o = r ? .dateTime,
                    n = {
                        isFooter: e,
                        point: t
                    },
                    a = s.xDateFormat || "",
                    l = s[e ? "footerFormat" : "headerFormat"];
                return rN(this, "headerFormatter", n, function(e) {
                    if (o && !a && rD(t.key) && (a = o.getXDateFormat(t.key, s.dateTimeLabelFormats)), o && a) {
                        if (rB(a)) {
                            let t = a;
                            rk[0] = e => i.chart.time.dateFormat(t, e), a = "%0"
                        }(t.tooltipDateKeys || ["key"]).forEach(t => {
                            l = l.replace(RegExp("point\\." + t + "([ \\)}])"), `(point.${t}:${a})$1`)
                        })
                    }
                    i.chart.styledMode && (l = this.styledModeFormat(l)), e.text = rv(l, t, this.chart)
                }), n.text || ""
            }
            update(t) {
                this.destroy(), this.init(this.chart, rz(!0, this.options, t))
            }
            updatePosition(t) {
                let {
                    chart: e,
                    container: i,
                    distance: s,
                    options: r,
                    pointer: o,
                    renderer: n
                } = this, {
                    height: a = 0,
                    width: l = 0
                } = this.getLabel(), {
                    fixed: h,
                    positioner: c
                } = r, {
                    left: d,
                    top: p,
                    scaleX: u,
                    scaleY: g
                } = o.getChartPosition(), f = (c || h && this.getFixedPosition || this.getPosition).call(this, l, a, t), m = B.doc, x = (t.plotX || 0) + e.plotLeft, y = (t.plotY || 0) + e.plotTop, b;
                if (n && i) {
                    if (c || h) {
                        let {
                            scrollLeft: t = 0,
                            scrollTop: i = 0
                        } = e.scrollablePlotArea ? .scrollingContainer || {};
                        f.x += t + d - s, f.y += i + p - s
                    }
                    b = (r.borderWidth || 0) + 2 * s + 2, n.setSize(rA(l + b, 0, m.documentElement.clientWidth) - 1, a + b, !1), (1 !== u || 1 !== g) && (rE(i, {
                        transform: `scale(${u}, ${g})`
                    }), x *= u, y *= g), x += d - f.x, y += p - f.y
                }
                this.move(Math.round(f.x), Math.round(f.y || 0), x, y)
            }
        }(h = rX || (rX = {})).compose = function(t) {
            rW(rw, "Core.Tooltip") && rC(t, "afterInit", function() {
                let t = this.chart;
                t.options.tooltip && (t.tooltip = new h(t, t.options.tooltip, this))
            })
        };
        let rY = rX,
            {
                animObject: rG
            } = t5,
            {
                defaultOptions: r$
            } = tI,
            {
                format: rU
            } = eS,
            {
                addEvent: rV,
                crisp: rq,
                erase: rK,
                extend: rZ,
                fireEvent: rJ,
                getNestedProperty: rQ,
                isArray: r0,
                isFunction: r1,
                isNumber: r2,
                isObject: r3,
                merge: r5,
                pick: r6,
                syncTimeout: r4,
                removeEvent: r9,
                uniqueKey: r7
            } = ta;
        class r8 {
            constructor(t, e, i) {
                this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ? ? (this.id = r7()), this.resolveColor(), this.dataLabelOnNull ? ? (this.dataLabelOnNull = t.options.nullInteraction), t.chart.pointCount++, this.category = t.xAxis ? .categories ? .[this.x] ? ? this.x, this.key = this.name ? ? this.category, rJ(this, "afterInit")
            }
            animateBeforeDestroy() {
                let t = this,
                    e = {
                        x: t.startXPos,
                        opacity: 0
                    },
                    i = t.getGraphicalProps();
                i.singular.forEach(function(i) {
                    t[i] = t[i].animate("dataLabel" === i ? {
                        x: t[i].startXPos,
                        y: t[i].startYPos,
                        opacity: 0
                    } : e)
                }), i.plural.forEach(function(e) {
                    t[e].forEach(function(e) {
                        e.element && e.animate(rZ({
                            x: t.startXPos
                        }, e.startYPos ? {
                            x: e.startXPos,
                            y: e.startYPos
                        } : {}))
                    })
                })
            }
            applyOptions(t, e) {
                let i = this.series,
                    s = i.options.pointValKey || i.pointValKey;
                return rZ(this, t = r8.prototype.optionsToObject.call(this, t)), this.options = this.options ? rZ(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = r8.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && void 0 === e && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), void 0 === this.x && i ? this.x = e ? ? i.autoIncrement() : r2(t.x) && i.options.relativeXValue ? this.x = i.autoIncrement(t.x) : "string" == typeof this.x && (e ? ? (e = i.chart.time.parse(this.x)), r2(e) && (this.x = e)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this
            }
            destroy() {
                if (!this.destroyed) {
                    let t = this,
                        e = t.series,
                        i = e.chart,
                        s = e.options.dataSorting,
                        r = i.hoverPoints,
                        o = rG(t.series.chart.renderer.globalAnimation),
                        n = () => {
                            for (let e in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (r9(t), t.destroyElements()), t) delete t[e]
                        };
                    t.legendItem && i.legend.destroyItem(t), r && (t.setState(), rK(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s ? .enabled ? (this.animateBeforeDestroy(), r4(n, o.duration)) : n(), i.pointCount--
                }
                this.destroyed = !0
            }
            destroyElements(t) {
                let e = this,
                    i = e.getGraphicalProps(t);
                i.singular.forEach(function(t) {
                    e[t] = e[t].destroy()
                }), i.plural.forEach(function(t) {
                    e[t].forEach(function(t) {
                        t ? .element && t.destroy()
                    }), delete e[t]
                })
            }
            firePointEvent(t, e, i) {
                let s = this,
                    r = this.series.options;
                s.manageEvent(t), "click" === t && r.allowPointSelect && (i = function(t) {
                    !s.destroyed && s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                }), rJ(s, t, e, i)
            }
            getClassName() {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone ? .className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            }
            getGraphicalProps(t) {
                let e, i, s = this,
                    r = [],
                    o = {
                        singular: [],
                        plural: []
                    };
                for ((t = t || {
                        graphic: 1,
                        dataLabel: 1
                    }).graphic && r.push("graphic", "connector"), t.dataLabel && r.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = r.length; i--;) s[e = r[i]] && o.singular.push(e);
                return ["graphic", "dataLabel"].forEach(function(e) {
                    let i = e + "s";
                    t[e] && s[i] && o.plural.push(i)
                }), o
            }
            getNestedProperty(t) {
                if (t) return 0 === t.indexOf("custom.") ? rQ(t, this.options) : this[t]
            }
            getZone() {
                let t = this.series,
                    e = t.zones,
                    i = t.zoneAxis || "y",
                    s, r = 0;
                for (s = e[0]; this[i] >= s.value;) s = e[++r];
                return this.nonZonedColor || (this.nonZonedColor = this.color), s ? .color && !this.options.color ? this.color = s.color : this.color = this.nonZonedColor, s
            }
            hasNewShapeType() {
                return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
            }
            isValid() {
                return (r2(this.x) || this.x instanceof Date) && r2(this.y)
            }
            optionsToObject(t) {
                let e = this.series,
                    i = e.options.keys,
                    s = i || e.pointArrayMap || ["y"],
                    r = s.length,
                    o = {},
                    n, a = 0,
                    l = 0;
                if (r2(t) || null === t) o[s[0]] = t;
                else if (r0(t))
                    for (!i && t.length > r && ("string" == (n = typeof t[0]) ? e.xAxis ? .dateTime ? o.x = e.chart.time.parse(t[0]) : o.name = t[0] : "number" === n && (o.x = t[0]), a++); l < r;) i && void 0 === t[a] || (s[l].indexOf(".") > 0 ? r8.prototype.setNestedProperty(o, t[a], s[l]) : o[s[l]] = t[a]), a++, l++;
                else "object" == typeof t && (o = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
                return o
            }
            pos(t, e = this.plotY) {
                if (!this.destroyed) {
                    let {
                        plotX: i,
                        series: s
                    } = this, {
                        chart: r,
                        xAxis: o,
                        yAxis: n
                    } = s, a = 0, l = 0;
                    if (r2(i) && r2(e)) return t && (a = o ? o.pos : r.plotLeft, l = n ? n.pos : r.plotTop), r.inverted && o && n ? [n.len - e + l, o.len - i + a] : [i + a, e + l]
                }
            }
            resolveColor() {
                let t = this.series,
                    e = t.chart.options.chart,
                    i = t.chart.styledMode,
                    s, r, o = e.colorCount,
                    n;
                delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (r = t.options.colors || t.chart.options.colors)[t.colorCounter], o = r.length), n = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0)) : (i || (s = t.color), n = t.colorIndex), this.colorIndex = r6(this.options.colorIndex, n), this.color = r6(this.options.color, s)
            }
            setNestedProperty(t, e, i) {
                return i.split(".").reduce(function(t, i, s, r) {
                    let o = r.length - 1 === s;
                    return t[i] = o ? e : r3(t[i], !0) ? t[i] : {}, t[i]
                }, t), t
            }
            shouldDraw() {
                return !this.isNull
            }
            tooltipFormatter(t) {
                let {
                    chart: e,
                    pointArrayMap: i = ["y"],
                    tooltipOptions: s
                } = this.series, {
                    valueDecimals: r = "",
                    valuePrefix: o = "",
                    valueSuffix: n = ""
                } = s;
                return e.styledMode && (t = e.tooltip ? .styledModeFormat(t) || t), i.forEach(e => {
                    e = "{point." + e, (o || n) && (t = t.replace(RegExp(e + "}", "g"), o + e + "}" + n)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + r + "f}")
                }), rU(t, this, e)
            }
            update(t, e, i, s) {
                let r, o = this,
                    n = o.series,
                    a = o.graphic,
                    l = n.chart,
                    h = n.options;

                function c() {
                    o.applyOptions(t);
                    let s = a && o.hasMockGraphic,
                        c = null === o.y ? !s : s;
                    a && c && (o.graphic = a.destroy(), delete o.hasMockGraphic), r3(t, !0) && (a ? .element && t && t.marker && void 0 !== t.marker.symbol && (o.graphic = a.destroy()), t ? .dataLabels && o.dataLabel && (o.dataLabel = o.dataLabel.destroy())), r = o.index;
                    let d = {};
                    for (let t of n.dataColumnKeys()) d[t] = o[t];
                    n.dataTable.setRow(d, r), h.data[r] = r3(h.data[r], !0) || r3(t, !0) ? o.options : r6(t, h.data[r]), n.isDirty = n.isDirtyData = !0, !n.fixedBox && n.hasCartesianSeries && (l.isDirtyBox = !0), "point" === h.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
                }
                e = r6(e, !0), !1 === s ? c() : o.firePointEvent("update", {
                    options: t
                }, c)
            }
            remove(t, e) {
                this.series.removePoint(this.series.data.indexOf(this), t, e)
            }
            select(t, e) {
                let i = this,
                    s = i.series,
                    r = s.chart;
                t = r6(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", {
                    accumulate: e
                }, function() {
                    i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach(function(t) {
                        let e = t.series;
                        t.selected && t !== i && (t.selected = t.options.selected = !1, e.options.data[e.data.indexOf(t)] = t.options, t.setState(r.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""), t.firePointEvent("unselect"))
                    })
                }), delete this.selectedStaging
            }
            onMouseOver(t) {
                let {
                    inverted: e,
                    pointer: i
                } = this.series.chart;
                i && (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e), i.runPointActions(t, this))
            }
            onMouseOut() {
                let t = this.series.chart;
                this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(t) {
                    t.setState()
                }), t.hoverPoints = t.hoverPoint = null
            }
            manageEvent(t) {
                let e = r5(this.series.options.point, this.options),
                    i = e.events ? .[t];
                r1(i) && (!this.hcEvents ? .[t] || this.hcEvents ? .[t] ? .map(t => t.fn).indexOf(i) === -1) ? (this.importedUserEvent ? .(), this.importedUserEvent = rV(this, t, i), this.hcEvents && (this.hcEvents[t].userEvent = !0)) : this.importedUserEvent && !i && this.hcEvents ? .[t] && this.hcEvents ? .[t].userEvent && (r9(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || delete this.importedUserEvent)
            }
            setState(t, e) {
                let i = this.series,
                    s = this.state,
                    r = i.options.states[t || "normal"] || {},
                    o = r$.plotOptions[i.type].marker && i.options.marker,
                    n = o && !1 === o.enabled,
                    a = o ? .states ? .[t || "normal"] || {},
                    l = !1 === a.enabled,
                    h = this.marker || {},
                    c = i.chart,
                    d = o && i.markerAttribs,
                    p = i.halo,
                    u, g, f, m = i.stateMarkerGraphic,
                    x;
                if ((t = t || "") === this.state && !e || this.selected && "select" !== t || !1 === r.enabled || t && (l || n && !1 === a.enabled) || t && h.states && h.states[t] && !1 === h.states[t].enabled) return;
                if (this.state = t, d && (u = i.markerAttribs(this, t)), this.graphic && !this.hasMockGraphic) {
                    if (s && this.graphic.removeClass("highcharts-point-" + s), t && this.graphic.addClass("highcharts-point-" + t), !c.styledMode) {
                        g = i.pointAttribs(this, t), f = r6(c.options.chart.animation, r.animation);
                        let e = g.opacity;
                        i.options.inactiveOtherPoints && r2(e) && (this.dataLabels || []).forEach(function(t) {
                            t && !t.hasClass("highcharts-data-label-hidden") && (t.animate({
                                opacity: e
                            }, f), t.connector && t.connector.animate({
                                opacity: e
                            }, f))
                        }), this.graphic.animate(g, f)
                    }
                    u && this.graphic.animate(u, r6(c.options.chart.animation, a.animation, o.animation)), m && m.hide()
                } else t && a && (x = h.symbol || i.symbol, m && m.currentSymbol !== x && (m = m.destroy()), u && (m ? m[e ? "animate" : "attr"]({
                    x: u.x,
                    y: u.y
                }) : x && (i.stateMarkerGraphic = m = c.renderer.symbol(x, u.x, u.y, u.width, u.height, r5(o, a)).add(i.markerGroup), m.currentSymbol = x)), !c.styledMode && m && "inactive" !== this.state && m.attr(i.pointAttribs(this, t))), m && (m[t && this.isInside ? "show" : "hide"](), m.element.point = this, m.addClass(this.getClassName(), !0));
                let y = r.halo,
                    b = this.graphic || m,
                    v = b ? .visibility || "inherit";
                y ? .size && b && "hidden" !== v && !this.isCluster ? (p || (i.halo = p = c.renderer.path().add(b.parentGroup)), p.show()[e ? "animate" : "attr"]({
                    d: this.haloPath(y.size)
                }), p.attr({
                    class: "highcharts-halo highcharts-color-" + r6(this.colorIndex, i.colorIndex) + (this.className ? " " + this.className : ""),
                    visibility: v,
                    zIndex: -1
                }), p.point = this, c.styledMode || p.attr(rZ({
                    fill: this.color || i.color,
                    "fill-opacity": y.opacity
                }, el.filterUserAttributes(y.attributes || {})))) : p ? .point ? .haloPath && !p.point.destroyed && p.animate({
                    d: p.point.haloPath(0)
                }, null, p.hide), rJ(this, "afterSetState", {
                    state: t
                })
            }
            haloPath(t) {
                let e = this.pos();
                return e ? this.series.chart.renderer.symbols.circle(rq(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : []
            }
        }
        let ot = r8,
            {
                parse: oe
            } = tF,
            {
                charts: oi,
                composed: os,
                isTouchDevice: or
            } = B,
            {
                addEvent: oo,
                attr: on,
                css: oa,
                extend: ol,
                find: oh,
                fireEvent: oc,
                isNumber: od,
                isObject: op,
                objectEach: ou,
                offset: og,
                pick: of ,
                pushUnique: om,
                splat: ox
            } = ta;
        class oy {
            applyInactiveState(t = []) {
                let e = [];
                for (let i of (t.forEach(t => {
                        let i = t.series;
                        e.push(i), i.linkedParent && e.push(i.linkedParent), i.linkedSeries && e.push.apply(e, i.linkedSeries), i.navigatorSeries && e.push(i.navigatorSeries), i.boosted && i.markerGroup && e.push.apply(e, this.chart.series.filter(t => t.markerGroup === i.markerGroup))
                    }), this.chart.series)) {
                    let t = i.options;
                    t.states ? .inactive ? .enabled !== !1 && (-1 === e.indexOf(i) ? i.setState("inactive", !0) : t.inactiveOtherPoints && i.setAllPointsToState("inactive"))
                }
            }
            destroy() {
                let t = this;
                this.eventsToUnbind.forEach(t => t()), this.eventsToUnbind = [], !B.chartCount && (oy.unbindDocumentMouseUp.forEach(t => t.unbind()), oy.unbindDocumentMouseUp.length = 0, oy.unbindDocumentTouchEnd && (oy.unbindDocumentTouchEnd = oy.unbindDocumentTouchEnd())), ou(t, function(e, i) {
                    t[i] = void 0
                })
            }
            getSelectionMarkerAttrs(t, e) {
                let i = {
                    args: {
                        chartX: t,
                        chartY: e
                    },
                    attrs: {},
                    shapeType: "rect"
                };
                return oc(this, "getSelectionMarkerAttrs", i, i => {
                    let s, {
                            chart: r,
                            zoomHor: o,
                            zoomVert: n
                        } = this,
                        {
                            mouseDownX: a = 0,
                            mouseDownY: l = 0
                        } = r,
                        h = i.attrs;
                    h.x = r.plotLeft, h.y = r.plotTop, h.width = o ? 1 : r.plotWidth, h.height = n ? 1 : r.plotHeight, o && (h.width = Math.max(1, Math.abs(s = t - a)), h.x = (s > 0 ? 0 : s) + a), n && (h.height = Math.max(1, Math.abs(s = e - l)), h.y = (s > 0 ? 0 : s) + l)
                }), i
            }
            drag(t) {
                let {
                    chart: e
                } = this, {
                    mouseDownX: i = 0,
                    mouseDownY: s = 0
                } = e, {
                    panning: r,
                    panKey: o,
                    selectionMarkerFill: n
                } = e.options.chart, a = e.plotLeft, l = e.plotTop, h = e.plotWidth, c = e.plotHeight, d = op(r) ? r.enabled : r, p = o && t[`${o}Key`], u = t.chartX, g = t.chartY, f, m = this.selectionMarker;
                if ((!m || !m.touch) && (u < a ? u = a : u > a + h && (u = a + h), g < l ? g = l : g > l + c && (g = l + c), this.hasDragged = Math.sqrt(Math.pow(i - u, 2) + Math.pow(s - g, 2)), this.hasDragged > 10)) {
                    f = e.isInsidePlot(i - a, s - l, {
                        visiblePlotOnly: !0
                    });
                    let {
                        shapeType: o,
                        attrs: h
                    } = this.getSelectionMarkerAttrs(u, g);
                    this.hasZoom && f && !p && !m && (this.selectionMarker = m = e.renderer[o](), m.attr({
                        class: "highcharts-selection-marker",
                        zIndex: 7
                    }).add(), e.styledMode || m.attr({
                        fill: n || oe("#334eff").setOpacity(.25).get()
                    })), m && m.attr(h), f && !m && d && e.pan(t, r)
                }
            }
            dragStart(t) {
                let e = this.chart;
                e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY
            }
            getSelectionBox(t) {
                let e = {
                    args: {
                        marker: t
                    },
                    result: t.getBBox()
                };
                return oc(this, "getSelectionBox", e), e.result
            }
            drop(t) {
                let e, {
                    chart: i,
                    selectionMarker: s
                } = this;
                for (let t of i.axes) t.isPanning && (t.isPanning = !1, (t.options.startOnTick || t.options.endOnTick || t.series.some(t => t.boosted)) && (t.forceRedraw = !0, t.setExtremes(t.userMin, t.userMax, !1), e = !0));
                if (e && i.redraw(), s && t) {
                    if (this.hasDragged) {
                        let e = this.getSelectionBox(s);
                        i.transform({
                            axes: i.axes.filter(t => t.zoomEnabled && ("xAxis" === t.coll && this.zoomX || "yAxis" === t.coll && this.zoomY)),
                            selection: {
                                originalEvent: t,
                                xAxis: [],
                                yAxis: [],
                                ...e
                            },
                            from: e
                        })
                    }
                    od(i.index) && (this.selectionMarker = s.destroy())
                }
                i && od(i.index) && (oa(i.container, {
                    cursor: i._cursor
                }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1)
            }
            findNearestKDPoint(t, e, i) {
                let s;
                return t.forEach(function(t) {
                    var r;
                    let o, n, a, l = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y"),
                        h = t.searchPoint(i, l);
                    op(h, !0) && h.series && (!op(s, !0) || (o = (r = s).distX - h.distX, n = r.dist - h.dist, a = h.series.group ? .zIndex - r.series.group ? .zIndex, (0 !== o && e ? o : 0 !== n ? n : 0 !== a ? a : r.series.index > h.series.index ? -1 : 1) > 0)) && (s = h)
                }), s
            }
            getChartCoordinatesFromPoint(t, e) {
                let {
                    xAxis: i,
                    yAxis: s
                } = t.series, r = t.shapeArgs;
                if (i && s) {
                    let o = t.clientX ? ? t.plotX ? ? 0,
                        n = t.plotY || 0;
                    return t.isNode && r && od(r.x) && od(r.y) && (o = r.x, n = r.y), e ? {
                        chartX: s.len + s.pos - n,
                        chartY: i.len + i.pos - o
                    } : {
                        chartX: o + i.pos,
                        chartY: n + s.pos
                    }
                }
                if (r ? .x && r.y) return {
                    chartX: r.x,
                    chartY: r.y
                }
            }
            getChartPosition() {
                if (this.chartPosition) return this.chartPosition;
                let {
                    container: t
                } = this.chart, e = og(t);
                this.chartPosition = {
                    left: e.left,
                    top: e.top,
                    scaleX: 1,
                    scaleY: 1
                };
                let {
                    offsetHeight: i,
                    offsetWidth: s
                } = t;
                return s > 2 && i > 2 && (this.chartPosition.scaleX = e.width / s, this.chartPosition.scaleY = e.height / i), this.chartPosition
            }
            getCoordinates(t) {
                let e = {
                    xAxis: [],
                    yAxis: []
                };
                for (let i of this.chart.axes) e[i.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: i,
                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                });
                return e
            }
            getHoverData(t, e, i, s, r, o) {
                let n = [],
                    a = function(t) {
                        return t.visible && !(!r && t.directTouch) && of (t.options.enableMouseTracking, !0)
                    },
                    l = e,
                    h, c = {
                        chartX: o ? o.chartX : void 0,
                        chartY: o ? o.chartY : void 0,
                        shared: r
                    };
                oc(this, "beforeGetHoverData", c), h = l && !l.stickyTracking ? [l] : i.filter(t => t.stickyTracking && (c.filter || a)(t));
                let d = s && t || !o ? t : this.findNearestKDPoint(h, r, o);
                return l = d ? .series, d && (r && !l.noSharedTooltip ? (h = i.filter(function(t) {
                    return c.filter ? c.filter(t) : a(t) && !t.noSharedTooltip
                })).forEach(function(t) {
                    let e = t.options ? .nullInteraction,
                        i = oh(t.points, function(t) {
                            return t.x === d.x && (!t.isNull || !!e)
                        });
                    op(i) && (t.boosted && t.boost && (i = t.boost.getPoint(i)), n.push(i))
                }) : n.push(d)), oc(this, "afterGetHoverData", c = {
                    hoverPoint: d
                }), {
                    hoverPoint: c.hoverPoint,
                    hoverSeries: l,
                    hoverPoints: n
                }
            }
            getPointFromEvent(t) {
                let e = t.target,
                    i;
                for (; e && !i;) i = e.point, e = e.parentNode;
                return i
            }
            onTrackerMouseOut(t) {
                let e = this.chart,
                    i = t.relatedTarget,
                    s = e.hoverSeries;
                this.isDirectTouch = !1, !s || !i || s.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + s.index) && this.inClass(i, "highcharts-tracker") || s.onMouseOut()
            }
            inClass(t, e) {
                let i = t,
                    s;
                for (; i;) {
                    if (s = on(i, "class")) {
                        if (-1 !== s.indexOf(e)) return !0;
                        if (-1 !== s.indexOf("highcharts-container")) return !1
                    }
                    i = i.parentElement
                }
            }
            constructor(t, e) {
                this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!e.chart.events ? .click, this.pinchDown = [], this.setDOMEvents(), oc(this, "afterInit")
            }
            normalize(t, e) {
                let i = t.touches,
                    s = i ? i.length ? i.item(0) : of (i.changedTouches, t.changedTouches)[0] : t;
                e || (e = this.getChartPosition());
                let r = s.pageX - e.left,
                    o = s.pageY - e.top;
                return ol(t, {
                    chartX: Math.round(r /= e.scaleX),
                    chartY: Math.round(o /= e.scaleY)
                })
            }
            onContainerClick(t) {
                let e = this.chart,
                    i = e.hoverPoint,
                    s = this.normalize(t),
                    r = e.plotLeft,
                    o = e.plotTop;
                !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (oc(i.series, "click", ol(s, {
                    point: i
                })), e.hoverPoint && i.firePointEvent("click", s)) : (ol(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - o, {
                    visiblePlotOnly: !0
                }) && oc(e, "click", s)))
            }
            onContainerMouseDown(t) {
                let e = (1 & (t.buttons || t.button)) == 1;
                t = this.normalize(t), B.isFirefox && 0 !== t.button && this.onContainerMouseMove(t), (void 0 === t.button || e) && (this.zoomOption(t), e && t.preventDefault ? .(), this.dragStart(t))
            }
            onContainerMouseLeave(t) {
                let {
                    pointer: e
                } = oi[ of (oy.hoverChartIndex, -1)] || {};
                t = this.normalize(t), this.onContainerMouseMove(t), e && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (e.reset(), e.chartPosition = void 0)
            }
            onContainerMouseEnter() {
                delete this.chartPosition
            }
            onContainerMouseMove(t) {
                let e = this.chart,
                    i = e.tooltip,
                    s = this.normalize(t);
                this.setHoverChartIndex(t), ("mousedown" === e.mouseIsDown || this.touchSelect(s)) && this.drag(s), !e.exporting ? .openMenu && (this.inClass(s.target, "highcharts-tracker") || e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, {
                    visiblePlotOnly: !0
                })) && !i ? .shouldStickOnContact(s) && (this.inClass(s.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(s))
            }
            onDocumentTouchEnd(t) {
                this.onDocumentMouseUp(t)
            }
            onContainerTouchMove(t) {
                this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t)
            }
            onContainerTouchStart(t) {
                this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0))
            }
            onDocumentMouseMove(t) {
                let e = this.chart,
                    i = e.tooltip,
                    s = this.chartPosition,
                    r = this.normalize(t, s);
                !s || e.isInsidePlot(r.chartX - e.plotLeft, r.chartY - e.plotTop, {
                    visiblePlotOnly: !0
                }) || i ? .shouldStickOnContact(r) || r.target !== e.container.ownerDocument && this.inClass(r.target, "highcharts-tracker") || this.reset()
            }
            onDocumentMouseUp(t) {
                t ? .touches && this.hasPinchMoved && t ? .preventDefault ? .(), oi[ of (oy.hoverChartIndex, -1)] ? .pointer ? .drop(t)
            }
            pinch(t) {
                let e = this,
                    {
                        chart: i,
                        hasZoom: s,
                        lastTouches: r
                    } = e,
                    o = [].map.call(t.touches || [], t => e.normalize(t)),
                    n = o.length,
                    a = 1 === n && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                    l = i.tooltip,
                    h = 1 === n && of (l ? .options.followTouchMove, !0);
                n > 1 ? e.initiated = !0 : h && (e.initiated = !1), s && e.initiated && !a && !1 !== t.cancelable && t.preventDefault(), "touchstart" === t.type ? (e.pinchDown = o, e.res = !0, i.mouseDownX = t.chartX) : h ? this.runPointActions(e.normalize(t)) : r && (oc(i, "touchpan", {
                    originalEvent: t,
                    touches: o
                }, () => {
                    let e = t => {
                        let e = t[0],
                            i = t[1] || e;
                        return {
                            x: e.chartX,
                            y: e.chartY,
                            width: i.chartX - e.chartX,
                            height: i.chartY - e.chartY
                        }
                    };
                    i.transform({
                        axes: i.axes.filter(t => t.zoomEnabled && (this.zoomHor && t.horiz || this.zoomVert && !t.horiz)),
                        to: e(o),
                        from: e(r),
                        trigger: t.type
                    })
                }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = o
            }
            reset(t, e) {
                let i = this.chart,
                    s = i.hoverSeries,
                    r = i.hoverPoint,
                    o = i.hoverPoints,
                    n = i.tooltip,
                    a = n ? .shared ? o : r;
                t && a && ox(a).forEach(function(e) {
                    e.series.isCartesian && void 0 === e.plotX && (t = !1)
                }), t ? n && a && ox(a).length && (n.refresh(a), n.shared && o ? o.forEach(function(t) {
                    t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                }) : r && (r.setState(r.state, !0), i.axes.forEach(function(t) {
                    t.crosshair && r.series[t.coll] === t && t.drawCrosshair(null, r)
                }))) : (r && r.onMouseOut(), o && o.forEach(function(t) {
                    t.setState()
                }), s && s.onMouseOut(), n && n.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function(t) {
                    t.hideCrosshair()
                }), i.hoverPoints = i.hoverPoint = void 0)
            }
            runPointActions(t, e, i) {
                let s = this.chart,
                    r = s.series,
                    o = s.tooltip ? .options.enabled ? s.tooltip : void 0,
                    n = !!o && o.shared,
                    a = e || s.hoverPoint,
                    l = a ? .series || s.hoverSeries,
                    h = (!t || "touchmove" !== t.type) && (!!e || l ? .directTouch && this.isDirectTouch),
                    c = this.getHoverData(a, l, r, h, n, t);
                a = c.hoverPoint, l = c.hoverSeries;
                let d = c.hoverPoints,
                    p = l ? .tooltipOptions.followPointer && !l.tooltipOptions.split,
                    u = n && l && !l.noSharedTooltip;
                if (a && (i || a !== s.hoverPoint || o ? .isHidden)) {
                    if ((s.hoverPoints || []).forEach(function(t) {
                            -1 === d.indexOf(t) && t.setState()
                        }), s.hoverSeries !== l && l.onMouseOver(), this.applyInactiveState(d), (d || []).forEach(function(t) {
                            t.setState("hover")
                        }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !a.series) return;
                    s.hoverPoints = d, s.hoverPoint = a, a.firePointEvent("mouseOver", void 0, () => {
                        o && a && o.refresh(u ? d : a, t)
                    })
                } else if (p && o && !o.isHidden) {
                    let e = o.getAnchor([{}], t);
                    s.isInsidePlot(e[0], e[1], {
                        visiblePlotOnly: !0
                    }) && o.updatePosition({
                        plotX: e[0],
                        plotY: e[1]
                    })
                }
                this.unDocMouseMove || (this.unDocMouseMove = oo(s.container.ownerDocument, "mousemove", t => oi[oy.hoverChartIndex ? ? -1] ? .pointer ? .onDocumentMouseMove(t)), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function(e) {
                    let i, r = e.crosshair ? .snap ? ? !0;
                    r && ((i = s.hoverPoint) && i.series[e.coll] === e || (i = oh(d, t => t.series ? .[e.coll] === e))), i || !r ? e.drawCrosshair(t, i) : e.hideCrosshair()
                })
            }
            setDOMEvents() {
                let t = this.chart.container,
                    e = t.ownerDocument,
                    i = t => t.parentElement || t.getRootNode() ? .host ? .parentElement;
                t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(oo(t, "mouseenter", this.onContainerMouseEnter.bind(this)), oo(t, "mouseleave", this.onContainerMouseLeave.bind(this))), oy.unbindDocumentMouseUp.some(t => t.doc === e) || oy.unbindDocumentMouseUp.push({
                    doc: e,
                    unbind: oo(e, "mouseup", this.onDocumentMouseUp.bind(this))
                });
                let s = i(this.chart.renderTo);
                for (; s && "BODY" !== s.tagName;) this.eventsToUnbind.push(oo(s, "scroll", () => {
                    delete this.chartPosition
                })), s = i(s);
                this.eventsToUnbind.push(oo(t, "touchstart", this.onContainerTouchStart.bind(this), {
                    passive: !1
                }), oo(t, "touchmove", this.onContainerTouchMove.bind(this), {
                    passive: !1
                })), oy.unbindDocumentTouchEnd || (oy.unbindDocumentTouchEnd = oo(e, "touchend", this.onDocumentTouchEnd.bind(this), {
                    passive: !1
                })), this.setPointerCapture(), oo(this.chart, "redraw", this.setPointerCapture.bind(this))
            }
            setPointerCapture() {
                if (!or) return;
                let t = this.pointerCaptureEventsToUnbind,
                    e = this.chart,
                    i = e.container,
                    s = of (e.options.tooltip ? .followTouchMove, !0) && e.series.some(t => t.options.findNearestPointBy.indexOf("y") > -1);
                !this.hasPointerCapture && s ? (t.push(oo(i, "pointerdown", t => {
                    t.target ? .hasPointerCapture(t.pointerId) && t.target ? .releasePointerCapture(t.pointerId)
                }), oo(i, "pointermove", t => {
                    e.pointer ? .getPointFromEvent(t) ? .onMouseOver(t)
                })), e.styledMode || oa(i, {
                    "touch-action": "none"
                }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach(t => t()), t.length = 0, e.styledMode || oa(i, {
                    "touch-action": of (e.options.chart.style ? .["touch-action"], "manipulation")
                }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1)
            }
            setHoverChartIndex(t) {
                let e = this.chart,
                    i = B.charts[ of (oy.hoverChartIndex, -1)];
                if (i && i !== e) {
                    let s = {
                        relatedTarget: e.container
                    };
                    t && !t ? .relatedTarget && Object.assign({}, t, s), i.pointer ? .onContainerMouseLeave(t || s)
                }
                i ? .mouseIsDown || (oy.hoverChartIndex = e.index)
            }
            touch(t, e) {
                let i, {
                    chart: s,
                    pinchDown: r = []
                } = this;
                this.setHoverChartIndex(), 1 === (t = this.normalize(t)).touches.length ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                    visiblePlotOnly: !0
                }) && !s.exporting ? .openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (this.hasPinchMoved = i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), of (i, !0) && this.pinch(t)) : e && this.reset() : 2 === t.touches.length && this.pinch(t)
            }
            touchSelect(t) {
                return !!(this.chart.zooming.singleTouch && t.touches && 1 === t.touches.length)
            }
            zoomOption(t) {
                let e = this.chart,
                    i = e.inverted,
                    s = e.zooming.type || "",
                    r, o;
                /touch/.test(t.type) && (s = of (e.zooming.pinchType, s)), this.zoomX = r = /x/.test(s), this.zoomY = o = /y/.test(s), this.zoomHor = r && !i || o && i, this.zoomVert = o && !i || r && i, this.hasZoom = r || o
            }
        }
        oy.unbindDocumentMouseUp = [], (c = oy || (oy = {})).compose = function(t) {
            om(os, "Core.Pointer") && oo(t, "beforeRender", function() {
                this.pointer = new c(this, this.options)
            })
        };
        let ob = oy;
        (d = S || (S = {})).setLength = function(t, e, i) {
            return Array.isArray(t) ? (t.length = e, t) : t[i ? "subarray" : "slice"](0, e)
        }, d.splice = function(t, e, i, s, r = []) {
            if (Array.isArray(t)) return Array.isArray(r) || (r = Array.from(r)), {
                removed: t.splice(e, i, ...r),
                array: t
            };
            let o = Object.getPrototypeOf(t).constructor,
                n = t[s ? "subarray" : "slice"](e, e + i),
                a = new o(t.length - i + r.length);
            return a.set(t.subarray(0, e), 0), a.set(r, e), a.set(t.subarray(e + i), e + r.length), {
                removed: n,
                array: a
            }
        }, d.convertToNumber = function(t, e) {
            switch (typeof t) {
                case "boolean":
                    return +!!t;
                case "number":
                    return isNaN(t) && !e ? null : t;
                default:
                    return isNaN(t = parseFloat(`${t??""}`)) && !e ? null : t
            }
        };
        let {
            setLength: ov,
            splice: ow
        } = S, {
            fireEvent: ok,
            objectEach: oT,
            uniqueKey: oS
        } = ta, oM = class {
            constructor(t = {}) {
                this.autoId = !t.id, this.columns = {}, this.id = t.id || oS(), this.rowCount = 0, this.versionTag = oS();
                let e = 0;
                oT(t.columns || {}, (t, i) => {
                    this.columns[i] = t.slice(), e = Math.max(e, t.length)
                }), this.applyRowCount(e)
            }
            applyRowCount(t) {
                this.rowCount = t, oT(this.columns, (e, i) => {
                    e.length !== t && (this.columns[i] = ov(e, t))
                })
            }
            deleteRows(t, e = 1) {
                if (e > 0 && t < this.rowCount) {
                    let i = 0;
                    oT(this.columns, (s, r) => {
                        this.columns[r] = ow(s, t, e).array, i = s.length
                    }), this.rowCount = i
                }
                ok(this, "afterDeleteRows", {
                    rowIndex: t,
                    rowCount: e
                }), this.versionTag = oS()
            }
            getColumn(t, e) {
                return this.columns[t]
            }
            getColumns(t, e) {
                return (t || Object.keys(this.columns)).reduce((t, e) => (t[e] = this.columns[e], t), {})
            }
            getRow(t, e) {
                return (e || Object.keys(this.columns)).map(e => this.columns[e] ? .[t])
            }
            setColumn(t, e = [], i = 0, s) {
                this.setColumns({
                    [t]: e
                }, i, s)
            }
            setColumns(t, e, i) {
                let s = this.rowCount;
                oT(t, (t, e) => {
                    this.columns[e] = t.slice(), s = t.length
                }), this.applyRowCount(s), i ? .silent || (ok(this, "afterSetColumns"), this.versionTag = oS())
            }
            setRow(t, e = this.rowCount, i, s) {
                let {
                    columns: r
                } = this, o = i ? this.rowCount + 1 : e + 1, n = Object.keys(t);
                if (s ? .addColumns !== !1)
                    for (let t = 0, e = n.length; t < e; t++) {
                        let e = n[t];
                        r[e] || (r[e] = [])
                    }
                oT(r, (n, a) => {
                    n || s ? .addColumns === !1 || (n = Array(o)), n && (i ? n = ow(n, e, 0, !0, [t[a] ? ? null]).array : n[e] = t[a] ? ? null, r[a] = n)
                }), o > this.rowCount && this.applyRowCount(o), s ? .silent || (ok(this, "afterSetRows"), this.versionTag = oS())
            }
            getModified() {
                return this.modified || this
            }
        }, {
            extend: oC,
            merge: oA,
            pick: oE
        } = ta;
        var oO = M || (M = {});

        function oL(t, e, i) {
            let s = this.legendItem = this.legendItem || {},
                {
                    chart: r,
                    options: o
                } = this,
                {
                    baseline: n = 0,
                    symbolWidth: a,
                    symbolHeight: l
                } = t,
                h = this.symbol || "circle",
                c = l / 2,
                d = r.renderer,
                p = s.group,
                u = n - Math.round((t.fontMetrics ? .b || l) * (i ? .4 : .3)),
                g = {},
                f, m = o.marker,
                x = 0;
            if (r.styledMode || (g["stroke-width"] = Math.min(o.lineWidth || 0, 24), o.dashStyle ? g.dashstyle = o.dashStyle : "square" !== o.linecap && (g["stroke-linecap"] = "round")), s.line = d.path().addClass("highcharts-graph").attr(g).add(p), i && (s.area = d.path().addClass("highcharts-area").add(p)), g["stroke-linecap"] && (x = Math.min(s.line.strokeWidth(), a) / 2), a) {
                let t = [
                    ["M", x, u],
                    ["L", a - x, u]
                ];
                s.line.attr({
                    d: t
                }), s.area ? .attr({
                    d: [...t, ["L", a - x, n],
                        ["L", x, n]
                    ]
                })
            }
            if (m && !1 !== m.enabled && a) {
                let t = Math.min(oE(m.radius, c), c);
                0 === h.indexOf("url") && (m = oA(m, {
                    width: l,
                    height: l
                }), t = 0), s.symbol = f = d.symbol(h, a / 2 - t, u - t, 2 * t, 2 * t, oC({
                    context: "legend"
                }, m)).addClass("highcharts-point").add(p), f.isMarker = !0
            }
        }
        oO.areaMarker = function(t, e) {
            oL.call(this, t, e, !0)
        }, oO.lineMarker = oL, oO.rectangle = function(t, e) {
            let i = e.legendItem || {},
                s = t.options,
                r = t.symbolHeight,
                o = s.squareSymbol,
                n = o ? r : t.symbolWidth;
            i.symbol = this.chart.renderer.rect(o ? (t.symbolWidth - r) / 2 : 0, t.baseline - r + 1, n, r, oE(t.options.symbolRadius, r / 2)).addClass("highcharts-point").attr({
                zIndex: 3
            }).add(i.group)
        };
        let oP = M,
            {
                defaultOptions: oN
            } = tI,
            {
                extend: oI,
                extendClass: oR,
                merge: oD
            } = ta;
        var oB = C || (C = {});

        function oj(t, e) {
            let i = oN.plotOptions || {},
                s = e.defaultOptions,
                r = e.prototype;
            return r.type = t, r.pointClass || (r.pointClass = ot), !oB.seriesTypes[t] && (s && (i[t] = s), oB.seriesTypes[t] = e, !0)
        }
        oB.seriesTypes = B.seriesTypes, oB.registerSeriesType = oj, oB.seriesType = function(t, e, i, s, r) {
            let o = oN.plotOptions || {};
            if (e = e || "", o[t] = oD(o[e], i), delete oB.seriesTypes[t], oj(t, oR(oB.seriesTypes[e] || B.Series, s)), oB.seriesTypes[t].prototype.type = t, r) {
                class e extends ot {}
                oI(e.prototype, r), oB.seriesTypes[t].prototype.pointClass = e
            }
            return oB.seriesTypes[t]
        };
        let oz = C,
            {
                animObject: o_,
                setAnimation: oW
            } = t5,
            {
                defaultOptions: oH
            } = tI,
            {
                registerEventOptions: oF
            } = sg,
            {
                svg: oX,
                win: oY
            } = B,
            {
                seriesTypes: oG
            } = oz,
            {
                format: o$
            } = eS,
            {
                arrayMax: oU,
                arrayMin: oV,
                clamp: oq,
                correctFloat: oK,
                crisp: oZ,
                defined: oJ,
                destroyObjectProperties: oQ,
                diffObjects: o0,
                erase: o1,
                error: o2,
                extend: o3,
                find: o5,
                fireEvent: o6,
                getClosestDistance: o4,
                getNestedProperty: o9,
                insertItem: o7,
                isArray: o8,
                isNumber: nt,
                isString: ne,
                merge: ni,
                objectEach: ns,
                pick: nr,
                removeEvent: no,
                syncTimeout: nn
            } = ta;
        class na {
            constructor() {
                this.zoneAxis = "y"
            }
            init(t, e) {
                let i;
                o6(this, "init", {
                    options: e
                }), this.dataTable ? ? (this.dataTable = new oM);
                let s = t.series;
                this.eventsToUnbind = [], this.chart = t, this.options = this.setOptions(e);
                let r = this.options,
                    o = !1 !== r.visible;
                this.linkedSeries = [], this.bindAxes(), o3(this, {
                    name: r.name,
                    state: "",
                    visible: o,
                    selected: !0 === r.selected
                }), oF(this, r);
                let n = r.events;
                (n ? .click || r.point ? .events ? .click || r.allowPointSelect) && (t.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (t.hasCartesianSeries = !0), s.length && (i = s[s.length - 1]), this._i = nr(i ? ._i, -1) + 1, this.opacity = this.options.opacity, t.orderItems("series", o7(this, s)), r.dataSorting ? .enabled ? this.setDataSortingOptions() : this.points || this.data || this.setData(r.data, !1), o6(this, "afterInit")
            }
            is(t) {
                return oG[t] && this instanceof oG[t]
            }
            bindAxes() {
                let t, e = this,
                    i = e.options,
                    s = e.chart;
                o6(this, "bindAxes", null, function() {
                    (e.axisTypes || []).forEach(function(r) {
                        (s[r] || []).forEach(function(s) {
                            t = s.options, (nr(i[r], 0) === s.index || void 0 !== i[r] && i[r] === t.id) && (o7(e, s.series), e[r] = s, s.isDirty = !0)
                        }), e[r] || e.optionalAxis === r || o2(18, !0, s)
                    })
                }), o6(this, "afterBindAxes")
            }
            hasData() {
                return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.dataTable.rowCount > 0
            }
            hasMarkerChanged(t, e) {
                let i = t.marker,
                    s = e.marker || {};
                return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width)
            }
            autoIncrement(t) {
                let e, i = this.options,
                    {
                        pointIntervalUnit: s,
                        relativeXValue: r
                    } = this.options,
                    o = this.chart.time,
                    n = this.xIncrement ? ? o.parse(i.pointStart) ? ? 0;
                if (this.pointInterval = e = nr(this.pointInterval, i.pointInterval, 1), r && nt(t) && (e *= t), s) {
                    let t = o.toParts(n);
                    "day" === s ? t[2] += e : "month" === s ? t[1] += e : "year" === s && (t[0] += e), e = o.makeTime.apply(o, t) - n
                }
                return r && nt(t) ? n + e : (this.xIncrement = n + e, n)
            }
            setDataSortingOptions() {
                let t = this.options;
                o3(this, {
                    requireSorting: !1,
                    sorted: !1,
                    enabledDataSorting: !0,
                    allowDG: !1
                }), oJ(t.pointRange) || (t.pointRange = 1)
            }
            setOptions(t) {
                let e, i = this.chart,
                    s = i.options.plotOptions,
                    r = i.userOptions || {},
                    o = ni(t),
                    n = i.styledMode,
                    a = {
                        plotOptions: s,
                        userOptions: o
                    };
                o6(this, "setOptions", a);
                let l = a.plotOptions[this.type],
                    h = r.plotOptions || {},
                    c = h.series || {},
                    d = oH.plotOptions[this.type] || {},
                    p = h[this.type] || {};
                l.dataLabels = this.mergeArrays(d.dataLabels, l.dataLabels), this.userOptions = a.userOptions;
                let u = ni(l, s.series, p, o);
                this.tooltipOptions = ni(oH.tooltip, oH.plotOptions.series ? .tooltip, d ? .tooltip, i.userOptions.tooltip, h.series ? .tooltip, p.tooltip, o.tooltip), this.stickyTracking = nr(o.stickyTracking, p.stickyTracking, c.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || u.stickyTracking), null === l.marker && delete u.marker, this.zoneAxis = u.zoneAxis || "y";
                let g = this.zones = (u.zones || []).map(t => ({ ...t
                }));
                return (u.negativeColor || u.negativeFillColor) && !u.zones && (e = {
                    value: u[this.zoneAxis + "Threshold"] || u.threshold || 0,
                    className: "highcharts-negative"
                }, n || (e.color = u.negativeColor, e.fillColor = u.negativeFillColor), g.push(e)), g.length && oJ(g[g.length - 1].value) && g.push(n ? {} : {
                    color: this.color,
                    fillColor: this.fillColor
                }), o6(this, "afterSetOptions", {
                    options: u
                }), u
            }
            getName() {
                return this.options.name ? ? o$(this.chart.options.lang.seriesName, this, this.chart)
            }
            getCyclic(t, e, i) {
                let s, r, o = this.chart,
                    n = `${t}Index`,
                    a = `${t}Counter`,
                    l = i ? .length || o.options.chart.colorCount;
                !e && (oJ(r = nr("color" === t ? this.options.colorIndex : void 0, this[n])) ? s = r : (o.series.length || (o[a] = 0), s = o[a] % l, o[a] += 1), i && (e = i[s])), void 0 !== s && (this[n] = s), this[t] = e
            }
            getColor() {
                this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || oH.plotOptions[this.type].color, this.chart.options.colors)
            }
            getPointsCollection() {
                return (this.hasGroupedData ? this.points : this.data) || []
            }
            getSymbol() {
                let t = this.options.marker;
                this.getCyclic("symbol", t.symbol, this.chart.options.symbols)
            }
            getColumn(t, e) {
                return (e ? this.dataTable.getModified() : this.dataTable).getColumn(t, !0) || []
            }
            findPointIndex(t, e) {
                let i, s, r, {
                        id: o,
                        x: n
                    } = t,
                    a = this.points,
                    l = this.options.dataSorting,
                    h = this.cropStart || 0;
                if (o) {
                    let t = this.chart.get(o);
                    t instanceof ot && (i = t)
                } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
                    let e = e => !e.touched && e.index === t.index;
                    if (l ? .matchByName ? e = e => !e.touched && e.name === t.name : this.options.relativeXValue && (e = e => !e.touched && e.options.x === t.x), !(i = o5(a, e))) return
                }
                return i && void 0 !== (r = i ? .index) && (s = !0), void 0 === r && nt(n) && (r = this.getColumn("x").indexOf(n, e)), -1 !== r && void 0 !== r && this.cropped && (r = r >= h ? r - h : r), !s && nt(r) && a[r] ? .touched && (r = void 0), r
            }
            updateData(t, e) {
                let {
                    options: i,
                    requireSorting: s
                } = this, r = i.dataSorting, o = this.points, n = [], a = t.length === o.length, l = this.xIncrement, h, c, d, p, u = !0;
                if (this.xIncrement = null, t.forEach((t, e) => {
                        let l, c = oJ(t) && this.pointClass.prototype.optionsToObject.call({
                                series: this
                            }, t) || {},
                            {
                                id: d,
                                x: u
                            } = c;
                        d || nt(u) ? (-1 === (l = this.findPointIndex(c, p)) || void 0 === l ? n.push(t) : o[l] && t !== i.data ? .[l] ? (o[l].update(t, !1, void 0, !1), o[l].touched = !0, s && (p = l + 1)) : o[l] && (o[l].touched = !0), (!a || e !== l || r ? .enabled || this.hasDerivedData) && (h = !0)) : n.push(t)
                    }, this), h)
                    for (c = o.length; c--;)(d = o[c]) && !d.touched && d.remove ? .(!1, e);
                else a && !r ? .enabled ? (t.forEach((t, e) => {
                    t === o[e].y || o[e].destroyed || o[e].update(t, !1, void 0, !1)
                }), n.length = 0) : u = !1;
                if (o.forEach(t => {
                        t && (t.touched = !1)
                    }), !u) return !1;
                n.forEach(t => {
                    this.addPoint(t, !1, void 0, void 0, !1)
                }, this);
                let g = this.getColumn("x");
                return null !== l && null === this.xIncrement && g.length && (this.xIncrement = oU(g), this.autoIncrement()), !0
            }
            dataColumnKeys() {
                return ["x", ...this.pointArrayMap || ["y"]]
            }
            setData(t, e = !0, i, s) {
                let r = this.points,
                    o = r ? .length || 0,
                    n = this.options,
                    a = this.chart,
                    l = n.dataSorting,
                    h = this.xAxis,
                    c = n.turboThreshold,
                    d = this.dataTable,
                    p = this.dataColumnKeys(),
                    u = this.pointValKey || "y",
                    g = (this.pointArrayMap || []).length,
                    f = n.keys,
                    m, x, y = 0,
                    b = 1,
                    v;
                a.options.chart.allowMutatingData || (n.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, v = ni(!0, t));
                let w = (t = v || t || []).length;
                if (l ? .enabled && (t = this.sortData(t)), a.options.chart.allowMutatingData && !1 !== s && w && o && !this.cropped && !this.hasGroupedData && this.visible && !this.boosted && (x = this.updateData(t, i)), !x) {
                    this.xIncrement = null, this.colorCounter = 0;
                    let e = c && !n.relativeXValue && w > c;
                    if (e) {
                        let i = this.getFirstValidPoint(t),
                            s = this.getFirstValidPoint(t, w - 1, -1),
                            r = t => !!(o8(t) && (f || nt(t[0])));
                        if (nt(i) && nt(s)) {
                            let e = [],
                                i = [];
                            for (let s of t) e.push(this.autoIncrement()), i.push(s);
                            d.setColumns({
                                x: e,
                                [u]: i
                            })
                        } else if (r(i) && r(s))
                            if (g) {
                                let e = +(i.length === g),
                                    s = Array(p.length).fill(0).map(() => []);
                                for (let i of t) {
                                    e && s[0].push(this.autoIncrement());
                                    for (let t = e; t <= g; t++) s[t] ? .push(i[t - e])
                                }
                                d.setColumns(p.reduce((t, e, i) => (t[e] = s[i], t), {}))
                            } else {
                                f && (y = f.indexOf("x"), b = f.indexOf("y"), y = y >= 0 ? y : 0, b = b >= 0 ? b : 1), 1 === i.length && (b = 0);
                                let e = [],
                                    s = [];
                                if (y === b)
                                    for (let i of t) e.push(this.autoIncrement()), s.push(i[b]);
                                else
                                    for (let i of t) e.push(i[y]), s.push(i[b]);
                                d.setColumns({
                                    x: e,
                                    [u]: s
                                })
                            }
                        else e = !1
                    }
                    if (!e) {
                        let e = p.reduce((t, e) => (t[e] = [], t), {});
                        for (m = 0; m < w; m++) {
                            let i = this.pointClass.prototype.applyOptions.apply({
                                series: this
                            }, [t[m]]);
                            for (let t of p) e[t][m] = i[t]
                        }
                        d.setColumns(e)
                    }
                    for (ne(this.getColumn("y")[0]) && o2(14, !0, a), this.data = [], this.options.data = this.userOptions.data = t, m = o; m--;) r[m] ? .destroy();
                    h && (h.minRange = h.userMinRange), this.isDirty = a.isDirtyBox = !0, this.isDirtyData = !!r, i = !1
                }
                "point" === n.legendType && (this.processData(), this.generatePoints()), e && a.redraw(i)
            }
            sortData(t) {
                let e = this,
                    i = e.options.dataSorting.sortKey || "y",
                    s = function(t, e) {
                        return oJ(e) && t.pointClass.prototype.optionsToObject.call({
                            series: t
                        }, e) || {}
                    };
                return t.forEach(function(i, r) {
                    t[r] = s(e, i), t[r].index = r
                }, this), t.concat().sort((t, e) => {
                    let s = o9(i, t),
                        r = o9(i, e);
                    return r < s ? -1 : +(r > s)
                }).forEach(function(t, e) {
                    t.x = e
                }, this), e.linkedSeries && e.linkedSeries.forEach(function(e) {
                    let i = e.options,
                        r = i.data;
                    !i.dataSorting ? .enabled && r && (r.forEach(function(i, o) {
                        r[o] = s(e, i), t[o] && (r[o].x = t[o].x, r[o].index = o)
                    }), e.setData(r, !1))
                }), t
            }
            getProcessedData(t) {
                let e = this,
                    {
                        dataTable: i,
                        isCartesian: s,
                        options: r,
                        xAxis: o
                    } = e,
                    n = r.cropThreshold,
                    a = t || e.getExtremesFromAll,
                    l = o ? .logarithmic,
                    h = i.rowCount,
                    c, d, p = 0,
                    u, g, f, m = e.getColumn("x"),
                    x = i,
                    y = !1;
                return o && (g = (u = o.getExtremes()).min, f = u.max, y = !!(o.categories && !o.names.length), s && e.sorted && !a && (!n || h > n || e.forceCrop) && (m[h - 1] < g || m[0] > f ? x = new oM : e.getColumn(e.pointValKey || "y").length && (m[0] < g || m[h - 1] > f) && (x = (c = this.cropData(i, g, f)).modified, p = c.start, d = !0))), m = x.getColumn("x") || [], {
                    modified: x,
                    cropped: d,
                    cropStart: p,
                    closestPointRange: o4([l ? m.map(l.log2lin) : m], () => e.requireSorting && !y && o2(15, !1, e.chart))
                }
            }
            processData(t) {
                let e = this.xAxis,
                    i = this.dataTable;
                if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
                let s = this.getProcessedData();
                i.modified = s.modified, this.cropped = s.cropped, this.cropStart = s.cropStart, this.closestPointRange = this.basePointRange = s.closestPointRange, o6(this, "afterProcessData")
            }
            cropData(t, e, i) {
                let s = t.getColumn("x", !0) || [],
                    r = s.length,
                    o = {},
                    n, a, l = 0,
                    h = r;
                for (n = 0; n < r; n++)
                    if (s[n] >= e) {
                        l = Math.max(0, n - 1);
                        break
                    }
                for (a = n; a < r; a++)
                    if (s[a] > i) {
                        h = a + 1;
                        break
                    }
                for (let e of this.dataColumnKeys()) {
                    let i = t.getColumn(e, !0);
                    i && (o[e] = i.slice(l, h))
                }
                return {
                    modified: new oM({
                        columns: o
                    }),
                    start: l,
                    end: h
                }
            }
            generatePoints() {
                let t = this.options,
                    e = this.processedData || t.data,
                    i = this.dataTable.getModified(),
                    s = this.getColumn("x", !0),
                    r = this.pointClass,
                    o = i.rowCount,
                    n = this.cropStart || 0,
                    a = this.hasGroupedData,
                    l = t.keys,
                    h = [],
                    c = t.dataGrouping ? .groupAll ? n : 0,
                    d = this.pointArrayMap || ["y"],
                    p = this.dataColumnKeys(),
                    u, g, f, m, x = this.data,
                    y;
                if (!x && !a) {
                    let t = [];
                    t.length = e ? .length || 0, x = this.data = t
                }
                for (l && a && (this.options.keys = !1), m = 0; m < o; m++) g = n + m, a ? ((f = new r(this, i.getRow(m, p) || [])).dataGroup = this.groupMap ? .[c + m], f.dataGroup ? .options && (f.options = f.dataGroup.options, o3(f, f.dataGroup.options), delete f.dataLabels, f.key = f.name ? ? f.category)) : (f = x[g], y = e ? e[g] : i.getRow(m, d), f || void 0 === y ? f && (f.category = this.xAxis ? .categories ? .[f.x] ? ? f.x, f.key = f.name ? ? f.category) : x[g] = f = new r(this, y, s[m])), f && (f.index = a ? c + m : g, h[m] = f);
                if (this.options.keys = l, x && (o !== (u = x.length) || a))
                    for (m = 0; m < u; m++) m !== n || a || (m += o), x[m] && (x[m].destroyElements(), x[m].plotX = void 0);
                this.data = x, this.points = h, o6(this, "afterGeneratePoints")
            }
            getXExtremes(t) {
                return {
                    min: oV(t),
                    max: oU(t)
                }
            }
            getExtremes(t, e) {
                let {
                    xAxis: i,
                    yAxis: s
                } = this, r = e || this.getExtremesFromAll || this.options.getExtremesFromAll, o = r && this.cropped ? this.dataTable : this.dataTable.getModified(), n = o.rowCount, a = t || this.stackedYData, l = a ? [a] : (this.keysAffectYAxis || this.pointArrayMap || ["y"]) ? .map(t => o.getColumn(t, !0) || []) || [], h = this.getColumn("x", !0), c = [], d = this.requireSorting && !this.is("column") ? 1 : 0, p = !!s && s.positiveValuesOnly, u = r || this.cropped || !i, g, f, m, x = 0, y = 0;
                for (i && (x = (g = i.getExtremes()).min, y = g.max), m = 0; m < n; m++)
                    if (f = h[m], u || (h[m + d] || f) >= x && (h[m - d] || f) <= y)
                        for (let t of l) {
                            let e = t[m];
                            nt(e) && (e > 0 || !p) && c.push(e)
                        }
                let b = {
                    activeYData: c,
                    dataMin: oV(c),
                    dataMax: oU(c)
                };
                return o6(this, "afterGetExtremes", {
                    dataExtremes: b
                }), b
            }
            applyExtremes() {
                let t = this.getExtremes();
                return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t
            }
            getFirstValidPoint(t, e = 0, i = 1) {
                let s = t.length,
                    r = e;
                for (; r >= 0 && r < s;) {
                    if (oJ(t[r])) return t[r];
                    r += i
                }
            }
            translate() {
                this.generatePoints();
                let t = this.options,
                    e = t.stacking,
                    i = this.xAxis,
                    s = this.enabledDataSorting,
                    r = this.yAxis,
                    o = this.points,
                    n = o.length,
                    a = this.pointPlacementToXValue(),
                    l = !!a,
                    h = t.threshold,
                    c = t.startFromThreshold ? h : 0,
                    d = t ? .nullInteraction && r.len,
                    p, u, g, f, m = Number.MAX_VALUE;

                function x(t) {
                    return oq(t, -1e9, 1e9)
                }
                for (p = 0; p < n; p++) {
                    let t, n = o[p],
                        y = n.x,
                        b, v, w = n.y,
                        k = n.low,
                        T = e && r.stacking ? .stacks[(this.negStacks && w < (c ? 0 : h) ? "-" : "") + this.stackKey];
                    n.plotX = nt(u = i.translate(y, !1, !1, !1, !0, a)) ? oK(x(u)) : void 0, e && this.visible && T && T[y] && (f = this.getStackIndicator(f, y, this.index), !n.isNull && f.key && (v = (b = T[y]).points[f.key]), b && o8(v) && (k = v[0], w = v[1], k === c && f.key === T[y].base && (k = nr(nt(h) ? h : r.min)), r.positiveValuesOnly && oJ(k) && k <= 0 && (k = void 0), n.total = n.stackTotal = nr(b.total), n.percentage = oJ(n.y) && b.total ? n.y / b.total * 100 : void 0, n.stackY = w, this.irregularWidths || b.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), n.yBottom = oJ(k) ? x(r.translate(k, !1, !0, !1, !0)) : void 0, this.dataModify && (w = this.dataModify.modifyValue(w, p)), nt(w) && void 0 !== n.plotX ? t = nt(t = r.translate(w, !1, !0, !1, !0)) ? x(t) : void 0 : !nt(w) && d && (t = d), n.plotY = t, n.isInside = this.isPointInside(n), n.clientX = l ? oK(i.translate(y, !1, !1, !1, !0, a)) : u, n.negative = (n.y || 0) < (h || 0), n.isNull || !1 === n.visible || (void 0 !== g && (m = Math.min(m, Math.abs(u - g))), g = u), n.zone = this.zones.length ? n.getZone() : void 0, !n.graphic && this.group && s && (n.isNew = !0)
                }
                this.closestPointRangePx = m, o6(this, "afterTranslate")
            }
            getValidPoints(t, e, i) {
                let s = this.chart;
                return (t || this.points || []).filter(function(t) {
                    let {
                        plotX: r,
                        plotY: o
                    } = t;
                    return (!!i || !t.isNull && !!nt(o)) && (!e || !!s.isInsidePlot(r, o, {
                        inverted: s.inverted
                    })) && !1 !== t.visible
                })
            }
            getSharedClipKey() {
                return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey
            }
            setClip() {
                let {
                    chart: t,
                    group: e,
                    markerGroup: i
                } = this, s = t.sharedClips, r = t.renderer, o = t.getClipBox(this), n = this.getSharedClipKey(), a = s[n];
                o6(this, "setClip", {
                    clipBox: o
                }), a ? a.animate(o) : s[n] = a = r.clipRect(o), e && e.clip(!1 === this.options.clip ? void 0 : a), i && i.clip()
            }
            animate(t) {
                let {
                    chart: e,
                    group: i,
                    markerGroup: s
                } = this, r = e.inverted, o = o_(this.options.animation), n = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), a = e.sharedClips[n], l = e.sharedClips[n + "m"];
                if (t && i) {
                    let t = e.getClipBox(this);
                    if (a) a.attr("height", t.height);
                    else {
                        t.width = 0, r && (t.x = e.plotHeight), a = e.renderer.clipRect(t), e.sharedClips[n] = a;
                        let i = {
                            x: -99,
                            y: -99,
                            width: r ? e.plotWidth + 199 : 99,
                            height: r ? 99 : e.plotHeight + 199
                        };
                        l = e.renderer.clipRect(i), e.sharedClips[n + "m"] = l
                    }
                    i.clip(a), s ? .clip(l)
                } else if (a && !a.hasClass("highcharts-animating")) {
                    let t = e.getClipBox(this),
                        i = o.step;
                    (s ? .element.childNodes.length || e.series.length > 1) && (o.step = function(t, e) {
                        i && i.apply(e, arguments), "width" === e.prop && l ? .element && l.attr(r ? "height" : "width", t + 99)
                    }), a.addClass("highcharts-animating").animate(t, o)
                }
            }
            afterAnimate() {
                this.setClip(), ns(this.chart.sharedClips, (t, e, i) => {
                    t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e])
                }), this.finishedAnimating = !0, o6(this, "afterAnimate")
            }
            drawPoints(t = this.points) {
                let e, i, s, r, o, n, a, l = this.chart,
                    h = l.styledMode,
                    {
                        colorAxis: c,
                        options: d
                    } = this,
                    p = d.marker,
                    u = d.nullInteraction,
                    g = this[this.specialGroup || "markerGroup"],
                    f = this.xAxis,
                    m = nr(p.enabled, !f || !!f.isRadial || null, this.closestPointRangePx >= p.enabledThreshold * p.radius);
                if (!1 !== p.enabled || this._hasPointMarkers)
                    for (e = 0; e < t.length; e++) {
                        r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, n = !!i.marker;
                        let d = i.isNull;
                        if ((m && !oJ(o.enabled) || o.enabled) && (!d || u) && !1 !== i.visible) {
                            let t = nr(o.symbol, this.symbol, "rect");
                            a = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = f.reversed ? -(a.width || 0) : f.width);
                            let e = !1 !== i.isInside;
                            if (!s && e && ((a.width || 0) > 0 || i.hasImage) && (i.graphic = s = l.renderer.symbol(t, a.x, a.y, a.width, a.height, n ? o : p).add(g), this.enabledDataSorting && l.hasRendered && (s.attr({
                                    x: i.startXPos
                                }), r = "animate")), s && "animate" === r && s[e ? "show" : "hide"](e).animate(a), s) {
                                let t = this.pointAttribs(i, h || !i.selected ? void 0 : "select");
                                h ? c && s.css({
                                    fill: t.fill
                                }) : s[r](t)
                            }
                            s && s.addClass(i.getClassName(), !0)
                        } else s && (i.graphic = s.destroy())
                    }
            }
            markerAttribs(t, e) {
                let i = this.options,
                    s = i.marker,
                    r = t.marker || {},
                    o = r.symbol || s.symbol,
                    n = {},
                    a, l, h = nr(r.radius, s ? .radius);
                e && (a = s.states[e], l = r.states && r.states[e], h = nr(l ? .radius, a ? .radius, h && h + (a ? .radiusPlus || 0))), t.hasImage = o && 0 === o.indexOf("url"), t.hasImage && (h = 0);
                let c = t.pos();
                return nt(h) && c && (i.crisp && (c[0] = oZ(c[0], t.hasImage ? 0 : "rect" === o ? s ? .lineWidth || 0 : 1)), n.x = c[0] - h, n.y = c[1] - h), h && (n.width = n.height = 2 * h), n
            }
            pointAttribs(t, e) {
                let i = this.options,
                    s = i.marker,
                    r = t ? .options,
                    o = r ? .marker || {},
                    n = r ? .color,
                    a = t ? .color,
                    l = t ? .zone ? .color,
                    h, c, d = this.color,
                    p, u, g = nr(o.lineWidth, s.lineWidth),
                    f = t ? .isNull && i.nullInteraction ? 0 : 1;
                return d = n || l || a || d, p = o.fillColor || s.fillColor || d, u = o.lineColor || s.lineColor || d, e = e || "normal", h = s.states[e] || {}, g = nr((c = o.states && o.states[e] || {}).lineWidth, h.lineWidth, g + nr(c.lineWidthPlus, h.lineWidthPlus, 0)), p = c.fillColor || h.fillColor || p, {
                    stroke: u = c.lineColor || h.lineColor || u,
                    "stroke-width": g,
                    fill: p,
                    opacity: f = nr(c.opacity, h.opacity, f)
                }
            }
            destroy(t) {
                let e, i, s = this,
                    r = s.chart,
                    o = /AppleWebKit\/533/.test(oY.navigator.userAgent),
                    n = s.data || [];
                for (o6(s, "destroy", {
                        keepEventsForUpdate: t
                    }), this.removeEvents(t), (s.axisTypes || []).forEach(function(t) {
                        i = s[t], i ? .series && (o1(i.series, s), i.isDirty = i.forceRedraw = !0)
                    }), s.legendItem && s.chart.legend.destroyItem(s), e = n.length; e--;) n[e] ? .destroy ? .();
                for (let t of s.zones) oQ(t, void 0, !0);
                ta.clearTimeout(s.animationTimeout), ns(s, function(t, e) {
                    t instanceof it && !t.survive && t[o && "group" === e ? "hide" : "destroy"]()
                }), r.hoverSeries === s && (r.hoverSeries = void 0), o1(r.series, s), r.orderItems("series"), ns(s, function(e, i) {
                    t && "hcEvents" === i || delete s[i]
                })
            }
            applyZones() {
                let {
                    area: t,
                    chart: e,
                    graph: i,
                    zones: s,
                    points: r,
                    xAxis: o,
                    yAxis: n,
                    zoneAxis: a
                } = this, {
                    inverted: l,
                    renderer: h
                } = e, c = this[`${a}Axis`], {
                    isXAxis: d,
                    len: p = 0,
                    minPointOffset: u = 0
                } = c || {}, g = (i ? .strokeWidth() || 0) / 2 + 1, f = (t, e = 0, i = 0) => {
                    l && (i = p - i);
                    let {
                        translated: s = 0,
                        lineClip: r
                    } = t, o = i - s;
                    r ? .push(["L", e, Math.abs(o) < g ? i - g * (o <= 0 ? -1 : 1) : s])
                };
                if (s.length && (i || t) && c && nt(c.min)) {
                    let e = c.getExtremes().max + u,
                        g = t => {
                            t.forEach((e, i) => {
                                ("M" === e[0] || "L" === e[0]) && (t[i] = [e[0], d ? p - e[1] : e[1], d ? e[2] : p - e[2]])
                            })
                        };
                    if (s.forEach(t => {
                            t.lineClip = [], t.translated = oq(c.toPixels(nr(t.value, e), !0) || 0, 0, p)
                        }), i && !this.showLine && i.hide(), t && t.hide(), "y" === a && r.length < o.len)
                        for (let t of r) {
                            let {
                                plotX: e,
                                plotY: i,
                                zone: r
                            } = t, o = r && s[s.indexOf(r) - 1];
                            r && f(r, e, i), o && f(o, e, i)
                        }
                    let m = [],
                        x = c.toPixels(c.getExtremes().min - u, !0);
                    s.forEach(e => {
                        let s = e.lineClip || [],
                            r = Math.round(e.translated || 0);
                        o.reversed && s.reverse();
                        let {
                            clip: a,
                            simpleClip: c
                        } = e, p = 0, u = 0, f = o.len, y = n.len;
                        d ? (p = r, f = x) : (u = r, y = x);
                        let b = [
                                ["M", p, u],
                                ["L", f, u],
                                ["L", f, y],
                                ["L", p, y],
                                ["Z"]
                            ],
                            v = [b[0], ...s, b[1], b[2], ...m, b[3], b[4]];
                        m = s.reverse(), x = r, l && (g(v), t && g(b)), a ? (a.animate({
                            d: v
                        }), c ? .animate({
                            d: b
                        })) : (a = e.clip = h.path(v), t && (c = e.simpleClip = h.path(b))), i && e.graph ? .clip(a), t && e.area ? .clip(c)
                    })
                } else this.visible && (i && i.show(), t && t.show())
            }
            plotGroup(t, e, i, s, r) {
                let o = this[t],
                    n = !o,
                    a = {
                        visibility: i,
                        zIndex: s || .1
                    };
                return oJ(this.opacity) && !this.chart.styledMode && "inactive" !== this.state && (a.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (oJ(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(a)[n ? "attr" : "animate"](this.getPlotBox(e)), o
            }
            getPlotBox(t) {
                let e = this.xAxis,
                    i = this.yAxis,
                    s = this.chart,
                    r = s.inverted && !s.polar && e && this.invertible && "series" === t;
                s.inverted && (e = i, i = this.xAxis);
                let o = {
                    scale: 1,
                    translateX: e ? e.left : s.plotLeft,
                    translateY: i ? i.top : s.plotTop,
                    name: t
                };
                o6(this, "getPlotBox", o);
                let {
                    scale: n,
                    translateX: a,
                    translateY: l
                } = o;
                return {
                    translateX: a,
                    translateY: l,
                    rotation: 90 * !!r,
                    rotationOriginX: r ? n * (e.len - i.len) / 2 : 0,
                    rotationOriginY: r ? n * (e.len + i.len) / 2 : 0,
                    scaleX: r ? -n : n,
                    scaleY: n
                }
            }
            removeEvents(t) {
                let {
                    eventsToUnbind: e
                } = this;
                t || no(this), e.length && (e.forEach(t => {
                    t()
                }), e.length = 0)
            }
            render() {
                let t = this,
                    {
                        chart: e,
                        options: i,
                        hasRendered: s
                    } = t,
                    r = o_(i.animation),
                    o = t.visible ? "inherit" : "hidden",
                    n = i.zIndex,
                    a = e.seriesGroup,
                    l = t.finishedAnimating ? 0 : r.duration;
                o6(this, "render"), t.plotGroup("group", "series", o, n, a), t.markerGroup = t.plotGroup("markerGroup", "markers", o, n, a), !1 !== i.clip && t.setClip(), l && t.animate ? .(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels ? .(), t.redrawPoints ? .(), i.enableMouseTracking && t.drawTracker ? .(), l && t.animate ? .(), s || (l && r.defer && (l += r.defer), t.animationTimeout = nn(() => {
                    t.afterAnimate()
                }, l || 0)), t.isDirty = !1, t.hasRendered = !0, o6(t, "afterRender")
            }
            redraw() {
                let t = this.isDirty || this.isDirtyData;
                this.translate(), this.render(), t && delete this.kdTree
            }
            reserveSpace() {
                return this.visible || !this.chart.options.chart.ignoreHiddenSeries
            }
            searchPoint(t, e) {
                let {
                    xAxis: i,
                    yAxis: s
                } = this, r = this.chart.inverted;
                return this.searchKDTree({
                    clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                    plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos
                }, e, t)
            }
            buildKDTree(t) {
                this.buildingKdTree = !0;
                let e = this,
                    i = e.options,
                    s = i.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
                delete e.kdTree, nn(function() {
                    e.kdTree = function t(i, s, r) {
                        let o, n, a = i ? .length;
                        if (a) return o = e.kdAxisArray[s % r], i.sort((t, e) => (t[o] || 0) - (e[o] || 0)), {
                            point: i[n = Math.floor(a / 2)],
                            left: t(i.slice(0, n), s + 1, r),
                            right: t(i.slice(n + 1), s + 1, r)
                        }
                    }(e.getValidPoints(void 0, !e.directTouch, i ? .nullInteraction), s, s), e.buildingKdTree = !1
                }, i.kdNow || t ? .type === "touchstart" ? 0 : 1)
            }
            searchKDTree(t, e, i, s, r) {
                let o = this,
                    [n, a] = this.kdAxisArray,
                    l = e ? "distX" : "dist",
                    h = (o.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
                    c = !!o.isBubble,
                    d = s || ((t, e, i) => {
                        let s = t[i] || 0,
                            r = e[i] || 0;
                        return [s === r && t.index > e.index || s < r ? t : e, !1]
                    }),
                    p = r || ((t, e) => t < e);
                if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function t(e, i, s, r) {
                    let h, u, g, f, m, x, y, b = i.point,
                        v = o.kdAxisArray[s % r],
                        w = b,
                        k = !1;
                    h = e[n], u = b[n], g = oJ(h) && oJ(u) ? h - u : null, f = e[a], m = b[a], x = oJ(f) && oJ(m) ? f - m : 0, y = c && b.marker ? .radius || 0, b.dist = Math.sqrt((g && g * g || 0) + x * x) - y, b.distX = oJ(g) ? Math.abs(g) - y : Number.MAX_VALUE;
                    let T = (e[v] || 0) - (b[v] || 0) + (c && b.marker ? .radius || 0),
                        S = T < 0 ? "left" : "right",
                        M = T < 0 ? "right" : "left";
                    return i[S] && ([w, k] = d(b, t(e, i[S], s + 1, r), l)), i[M] && p(Math.sqrt(T * T), w[l], k) && (w = d(w, t(e, i[M], s + 1, r), l)[0]), w
                }(t, this.kdTree, h, h)
            }
            pointPlacementToXValue() {
                let {
                    options: t,
                    xAxis: e
                } = this, i = t.pointPlacement;
                return "between" === i && (i = e.reversed ? -.5 : .5), nt(i) ? i * (t.pointRange || e.pointRange) : 0
            }
            isPointInside(t) {
                let {
                    chart: e,
                    xAxis: i,
                    yAxis: s
                } = this, {
                    plotX: r = -1,
                    plotY: o = -1
                } = t;
                return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth)
            }
            drawTracker() {
                let t = this,
                    e = t.options,
                    i = e.trackByArea,
                    s = [].concat((i ? t.areaPath : t.graphPath) || []),
                    r = t.chart,
                    o = r.pointer,
                    n = r.renderer,
                    a = r.options.tooltip ? .snap || 0,
                    l = () => {
                        e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver()
                    },
                    h = "rgba(192,192,192," + (oX ? 1e-4 : .002) + ")",
                    c = t.tracker;
                c ? c.attr({
                    d: s
                }) : t.graph && (t.tracker = c = n.path(s).attr({
                    visibility: t.visible ? "inherit" : "hidden",
                    zIndex: 2
                }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || c.attr({
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    stroke: h,
                    fill: i ? h : "none",
                    "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a)
                }), [t.tracker, t.markerGroup, ...t.dataLabelsGroups || []].forEach(t => {
                    t && (t.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", t => {
                        o ? .onTrackerMouseOut(t)
                    }), e.cursor && !r.styledMode && t.css({
                        cursor: e.cursor
                    }), t.on("touchstart", l))
                })), o6(this, "afterDrawTracker")
            }
            addPoint(t, e, i, s, r) {
                let o, n, a = this.options,
                    {
                        chart: l,
                        data: h,
                        dataTable: c,
                        xAxis: d
                    } = this,
                    p = d ? .hasNames && d.names,
                    u = a.data,
                    g = this.getColumn("x");
                e = nr(e, !0);
                let f = {
                    series: this
                };
                this.pointClass.prototype.applyOptions.apply(f, [t]);
                let m = f.x;
                if (n = g.length, this.requireSorting && m < g[n - 1])
                    for (o = !0; n && g[n - 1] > m;) n--;
                c.setRow(f, n, !0, {
                    addColumns: !1
                }), p && f.name && (p[m] = f.name), u ? .splice(n, 0, t), (o || this.processedData) && (this.data.splice(n, 0, null), this.processData()), "point" === a.legendType && this.generatePoints(), i && (h[0] && h[0].remove ? h[0].remove(!1) : ([h, u].filter(oJ).forEach(t => {
                    t.shift()
                }), c.deleteRows(0))), !1 !== r && o6(this, "addPoint", {
                    point: f
                }), this.isDirty = !0, this.isDirtyData = !0, e && l.redraw(s)
            }
            removePoint(t, e, i) {
                let s = this,
                    {
                        chart: r,
                        data: o,
                        points: n,
                        dataTable: a
                    } = s,
                    l = o[t],
                    h = function() {
                        [n ? .length === o.length ? n : void 0, o, s.options.data].filter(oJ).forEach(e => {
                            e.splice(t, 1)
                        }), a.deleteRows(t), l ? .destroy(), s.isDirty = !0, s.isDirtyData = !0, e && r.redraw()
                    };
                oW(i, r), e = nr(e, !0), l ? l.firePointEvent("remove", null, h) : h()
            }
            remove(t, e, i, s) {
                let r = this,
                    o = r.chart;

                function n() {
                    r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), nr(t, !0) && o.redraw(e)
                }!1 !== i ? o6(r, "remove", null, n) : n()
            }
            update(t, e) {
                o6(this, "update", {
                    options: t = o0(t, this.userOptions)
                });
                let i = this,
                    s = i.chart,
                    r = i.userOptions,
                    o = i.initialType || i.type,
                    n = s.options.plotOptions,
                    a = oG[o].prototype,
                    l = i.finishedAnimating && {
                        animation: !1
                    },
                    h = {},
                    c, d, p = na.keepProps.slice(),
                    u = t.type || r.type || s.options.chart.type,
                    g = !(this.hasDerivedData || u && u !== this.type || void 0 !== t.keys || void 0 !== t.pointStart || void 0 !== t.pointInterval || void 0 !== t.relativeXValue || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some(t => i.hasOptionChanged(t)));
                u = u || o, g ? (p.push.apply(p, na.keepPropsForPoints), !1 !== t.visible && p.push("area", "graph"), i.parallelArrays.forEach(function(t) {
                    p.push(t + "Data")
                }), t.data && (t.dataSorting && o3(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t.dataLabels && r.dataLabels && (t.dataLabels = this.mergeArrays(r.dataLabels, t.dataLabels)), t = ni(r, {
                    index: void 0 === r.index ? i.index : r.index,
                    pointStart: n ? .series ? .pointStart ? ? r.pointStart ? ? i.getColumn("x")[0]
                }, !g && {
                    data: i.options.data
                }, t, l), g && t.data && (t.data = i.options.data), (p = ["dataLabelsGroup", "dataLabelsGroups", "dataLabelsParentGroups", "group", "markerGroup", "transformGroup"].concat(p)).forEach(function(t) {
                    p[t] = i[t], delete i[t]
                });
                let f = !1;
                if (oG[u]) {
                    if (f = u !== i.type, i.remove(!1, !1, !1, !0), f)
                        if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, oG[u].prototype);
                        else {
                            let t = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                            for (d in a) i[d] = void 0;
                            o3(i, oG[u].prototype), t ? i.hcEvents = t : delete i.hcEvents
                        }
                } else o2(17, !0, s, {
                    missingModuleFor: u
                });
                if (p.forEach(function(t) {
                        i[t] = p[t]
                    }), i.init(s, t), g && this.points)
                    for (let t of (!1 === (c = i.options).visible ? (h.graphic = 1, h.dataLabel = 1) : (this.hasMarkerChanged(c, r) && (h.graphic = 1), i.hasDataLabels ? .() || (h.dataLabel = 1)), this.points)) t ? .series && (t.resolveColor(), Object.keys(h).length && t.destroyElements(h), !1 === c.showInLegend && t.legendItem && s.legend.destroyItem(t));
                i.initialType = o, s.linkSeries(), s.setSortedData(), f && i.linkedSeries.length && (i.isDirtyData = !0), o6(this, "afterUpdate"), nr(e, !0) && s.redraw(!!g && void 0)
            }
            setName(t) {
                this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
            }
            hasOptionChanged(t) {
                let e = this.chart,
                    i = this.options[t],
                    s = e.options.plotOptions,
                    r = this.userOptions[t],
                    o = nr(s ? .[this.type] ? .[t], s ? .series ? .[t]);
                return r && !oJ(o) ? i !== r : i !== nr(o, i)
            }
            onMouseOver() {
                let t = this.chart,
                    e = t.hoverSeries,
                    i = t.pointer;
                i ? .setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && o6(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
            }
            onMouseOut() {
                let t = this.options,
                    e = this.chart,
                    i = e.tooltip,
                    s = e.hoverPoint;
                e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && o6(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(t) {
                    t.setState("", !0)
                })
            }
            setState(t, e) {
                let i = this,
                    {
                        graph: s,
                        options: r
                    } = i,
                    {
                        inactiveOtherPoints: o,
                        states: n
                    } = r,
                    a = nr(n ? .[t || "normal"] ? .animation, i.chart.options.chart.animation),
                    {
                        lineWidth: l,
                        opacity: h
                    } = r;
                if (t = t || "", i.state !== t && ([i.group, i.markerGroup, ...i.dataLabelsGroups || []].forEach(function(e) {
                        e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
                    }), i.state = t, !i.chart.styledMode)) {
                    if (n[t] ? .enabled === !1) return;
                    if (t && (l = n[t].lineWidth || l + (n[t].lineWidthPlus || 0), h = nr(n[t].opacity, h)), s && !s.dashstyle && nt(l))
                        for (let t of [s, ...this.zones.map(t => t.graph)]) t ? .animate({
                            "stroke-width": l
                        }, a);
                    o || [i.group, i.markerGroup, ...i.dataLabelsGroups || [], i.labelBySeries].forEach(function(t) {
                        t ? .animate({
                            opacity: h
                        }, a)
                    })
                }
                e && o && i.points && i.setAllPointsToState(t || void 0)
            }
            setAllPointsToState(t) {
                this.points.forEach(function(e) {
                    e.setState && e.setState(t)
                })
            }
            setVisible(t, e) {
                let i = this,
                    s = i.chart,
                    r = s.options.chart.ignoreHiddenSeries,
                    o = i.visible;
                i.visible = t = i.options.visible = i.userOptions.visible = void 0 === t ? !o : t;
                let n = t ? "show" : "hide";
                ["group", "markerGroup", "tracker", "tt"].forEach(t => {
                    i[t] ? .[n]()
                }), i.dataLabelsGroups ? .forEach(t => {
                    t ? .[n]()
                }), (s.hoverSeries === i || s.hoverPoint ? .series === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach(t => {
                    t.options.stacking && t.visible && (t.isDirty = !0)
                }), i.linkedSeries.forEach(e => {
                    e.setVisible(t, !1)
                }), r && (s.isDirtyBox = !0), o6(i, n), !1 !== e && s.redraw()
            }
            show() {
                this.setVisible(!0)
            }
            hide() {
                this.setVisible(!1)
            }
            select(t) {
                this.selected = t = this.options.selected = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), o6(this, t ? "select" : "unselect")
            }
            shouldShowTooltip(t, e, i = {}) {
                return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i)
            }
            drawLegendSymbol(t, e) {
                oP[this.options.legendSymbol || "rectangle"] ? .call(this, t, e)
            }
        }
        na.defaultOptions = {
            lineWidth: 2,
            allowPointSelect: !1,
            crisp: !0,
            showCheckbox: !1,
            animation: {
                duration: 1e3
            },
            enableMouseTracking: !0,
            events: {},
            marker: {
                enabledThreshold: 2,
                lineColor: "#ffffff",
                lineWidth: 0,
                radius: 4,
                states: {
                    normal: {
                        animation: !0
                    },
                    hover: {
                        animation: {
                            duration: 150
                        },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    },
                    select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2
                    }
                }
            },
            point: {
                events: {}
            },
            dataLabels: {
                animation: {},
                align: "center",
                borderWidth: 0,
                defer: !0,
                formatter: function() {
                    let {
                        numberFormatter: t
                    } = this.series.chart;
                    return "number" != typeof this.y ? "" : t(this.y, -1)
                },
                padding: 5,
                style: {
                    fontSize: "0.7em",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast"
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0
            },
            cropThreshold: 300,
            opacity: 1,
            pointRange: 0,
            softThreshold: !0,
            states: {
                normal: {
                    animation: !0
                },
                hover: {
                    animation: {
                        duration: 150
                    },
                    lineWidthPlus: 1,
                    marker: {},
                    halo: {
                        size: 10,
                        opacity: .25
                    }
                },
                select: {
                    animation: {
                        duration: 0
                    }
                },
                inactive: {
                    animation: {
                        duration: 150
                    },
                    opacity: .2
                }
            },
            stickyTracking: !0,
            turboThreshold: 1e3,
            findNearestPointBy: "x"
        }, na.types = oz.seriesTypes, na.registerType = oz.registerSeriesType, na.keepProps = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], na.keepPropsForPoints = ["data", "isDirtyData", "isDirtyCanvas", "points", "dataTable", "processedData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"], o3(na.prototype, {
            axisTypes: ["xAxis", "yAxis"],
            coll: "series",
            colorCounter: 0,
            directTouch: !1,
            invertible: !0,
            isCartesian: !0,
            kdAxisArray: ["clientX", "plotY"],
            parallelArrays: ["x", "y"],
            pointClass: ot,
            requireSorting: !0,
            sorted: !0
        }), oz.series = na;
        let nl = na,
            {
                animObject: nh,
                setAnimation: nc
            } = t5,
            {
                registerEventOptions: nd
            } = sg,
            {
                composed: np,
                marginNames: nu
            } = B,
            {
                distribute: ng
            } = eL,
            {
                format: nf
            } = eS,
            {
                addEvent: nm,
                createElement: nx,
                css: ny,
                defined: nb,
                discardElement: nv,
                find: nw,
                fireEvent: nk,
                isNumber: nT,
                merge: nS,
                pick: nM,
                pushUnique: nC,
                relativeLength: nA,
                stableSort: nE,
                syncTimeout: nO
            } = ta;
        class nL {
            constructor(t, e) {
                this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), nd(this, e), nm(this.chart, "endResize", function() {
                    this.legend.positionCheckboxes()
                })), nm(this.chart, "render", () => {
                    this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems())
                })
            }
            setOptions(t) {
                let e = nM(t.padding, 8);
                this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = nS(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = nM(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted, this.baseline = void 0
            }
            update(t, e) {
                let i = this.chart;
                this.setOptions(nS(!0, this.options, t)), "events" in this.options && nd(this, this.options), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, nM(e, !0) && i.redraw(), nk(this, "afterUpdate", {
                    redraw: e
                })
            }
            colorizeItem(t, e) {
                let i = t.color,
                    {
                        area: s,
                        group: r,
                        label: o,
                        line: n,
                        symbol: a
                    } = t.legendItem || {};
                if ((t instanceof nl || t instanceof ot) && (t.color = t.options ? .legendSymbolColor || i), r ? .[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
                    let {
                        itemHiddenStyle: i = {}
                    } = this, r = i.color, {
                        fillColor: l,
                        fillOpacity: h,
                        lineColor: c,
                        marker: d
                    } = t.options, p = t => (!e && (t.fill && (t.fill = r), t.stroke && (t.stroke = r)), t);
                    o ? .css(nS(e ? this.itemStyle : i)), n ? .attr(p({
                        stroke: c || t.color
                    })), a && a.attr(p(d && a.isMarker ? t.pointAttribs() : {
                        fill: t.color
                    })), s ? .attr(p({
                        fill: l || t.color,
                        "fill-opacity": l ? 1 : h ? ? .75
                    }))
                }
                t.color = i, nk(this, "afterColorizeItem", {
                    item: t,
                    visible: e
                })
            }
            positionItems() {
                this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
            }
            positionItem(t) {
                let {
                    group: e,
                    x: i = 0,
                    y: s = 0
                } = t.legendItem || {}, r = this.options, o = r.symbolPadding, n = !r.rtl, a = t.checkbox;
                if (e ? .element) {
                    let r = {
                            translateX: n ? i : this.legendWidth - i - 2 * o - 4,
                            translateY: s
                        },
                        a = () => {
                            nk(this, "afterPositionItem", {
                                item: t
                            })
                        };
                    e[nb(e.translateY) ? "animate" : "attr"](r, void 0, a)
                }
                a && (a.x = i, a.y = s)
            }
            destroyItem(t) {
                let e = t.legendItem || {};
                for (let t of ["group", "label", "line", "symbol"]) e[t] && (e[t] = e[t].destroy());
                t.checkbox = nv(t.checkbox), t.legendItem = void 0
            }
            destroy() {
                for (let t of this.getAllItems()) this.destroyItem(t);
                for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
                this.display = null
            }
            positionCheckboxes() {
                let t, e = this.group ? .alignAttr,
                    i = this.clipHeight || this.legendHeight,
                    s = this.titleHeight;
                e && (t = e.translateY, this.allItems.forEach(function(r) {
                    let o, n = r.checkbox;
                    n && (o = t + s + n.y + (this.scrollOffset || 0) + 3, ny(n, {
                        left: e.translateX + r.checkboxOffset + n.x - 20 + "px",
                        top: o + "px",
                        display: this.proximate || o > t - 6 && o < t + i - 6 ? "" : "none"
                    }))
                }, this))
            }
            renderTitle() {
                let t = this.options,
                    e = this.padding,
                    i = t.title,
                    s, r = 0;
                i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({
                    zIndex: 1
                }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({
                    width: this.maxLegendWidth + "px"
                }), r = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({
                    translateY: r
                })), this.titleHeight = r
            }
            setText(t) {
                let e = this.options;
                t.legendItem.label.attr({
                    text: e.labelFormat ? nf(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
                })
            }
            renderItem(t) {
                let e = t.legendItem = t.legendItem || {},
                    i = this.chart,
                    s = i.renderer,
                    r = this.options,
                    o = "horizontal" === r.layout,
                    n = this.symbolWidth,
                    a = r.symbolPadding || 0,
                    l = this.itemStyle,
                    h = this.itemHiddenStyle,
                    c = o ? nM(r.itemDistance, 20) : 0,
                    d = !r.rtl,
                    p = !t.series,
                    u = !p && t.series.drawLegendSymbol ? t.series : t,
                    g = u.options,
                    f = !!this.createCheckboxForItem && g && g.showCheckbox,
                    m = r.useHTML,
                    x = t.options.className,
                    y = e.label,
                    b = n + a + c + 20 * !!f;
                !y && (e.group = s.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + t.colorIndex + (x ? " " + x : "") + (p ? " highcharts-series-" + t.index : "")).attr({
                    zIndex: 1
                }).add(this.scrollGroup), e.label = y = s.text("", d ? n + a : -a, this.baseline || 0, m), i.styledMode || y.css(nS(t.visible ? l : h)), y.attr({
                    align: d ? "left" : "right",
                    zIndex: 2
                }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(y), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y.attr("y", this.baseline), this.symbolHeight = nM(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = nM(r.symbolWidth, Math.max(this.symbolHeight, 16)), b = this.symbolWidth + a + c + 20 * !!f, d && y.attr("x", this.symbolWidth + a))), u.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, y, m)), f && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !l.width) && y.css({
                    width: Math.min(r.itemWidth || this.widthOption || i.spacingBox.width, r.maxWidth ? nA(r.maxWidth, i.chartWidth) : 1 / 0) - b + "px"
                }), this.setText(t);
                let v = y.getBBox(),
                    w = this.fontMetrics ? .h || 0;
                t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || v.width + b, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (v.height > 1.5 * w ? v.height : w))
            }
            layoutItem(t) {
                let e = this.options,
                    i = this.padding,
                    s = "horizontal" === e.layout,
                    r = t.itemHeight,
                    o = this.itemMarginBottom,
                    n = this.itemMarginTop,
                    a = s ? nM(e.itemDistance, 20) : 0,
                    l = this.maxLegendWidth,
                    h = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth,
                    c = t.legendItem || {};
                s && this.itemX - i + h > l && (this.itemX = i, this.lastLineHeight && (this.itemY += n + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = n + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), c.x = this.itemX, c.y = this.itemY, s ? this.itemX += h : (this.itemY += n + r + o, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : a) : h) + i, this.offsetWidth)
            }
            getAllItems() {
                let t = [];
                return this.chart.series.forEach(function(e) {
                    let i = e ? .options;
                    e && nM(i.showInLegend, !nb(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItem ? .labels || ("point" === i.legendType ? e.data : e)))
                }), nk(this, "afterGetAllItems", {
                    allItems: t
                }), t
            }
            getAlignment() {
                let t = this.options;
                return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
            }
            adjustMargins(t, e) {
                let i = this.chart,
                    s = this.options,
                    r = this.getAlignment();
                r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((o, n) => {
                    o.test(r) && !nb(t[n]) && (i[nu[n]] = Math.max(i[nu[n]], i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][n] * s[n % 2 ? "x" : "y"] + (s.margin ? ? 12) + e[n] + (i.titleOffset[n] || 0)))
                })
            }
            proximatePositions() {
                let t, e = this.chart,
                    i = [],
                    s = "left" === this.options.align;
                for (let r of (this.allItems.forEach(function(t) {
                        let r, o, n = s,
                            a, l;
                        t.yAxis && (t.xAxis.options.reversed && (n = !n), t.points && (r = nw(n ? t.points : t.points.slice(0).reverse(), function(t) {
                            return nT(t.plotY)
                        })), o = this.itemMarginTop + t.legendItem.label.getBBox().height + this.itemMarginBottom, l = t.yAxis.top - e.plotTop, a = t.visible ? (r ? r.plotY : t.yAxis.height) + (l - .3 * o) : l + t.yAxis.height, i.push({
                            target: a,
                            size: o,
                            item: t
                        }))
                    }, this), ng(i, e.plotHeight))) t = r.item.legendItem || {}, nT(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos)
            }
            render() {
                let t = this.chart,
                    e = t.spacingBox.width,
                    i = t.renderer,
                    s = this.options,
                    r = this.padding,
                    o = this.getAllItems(),
                    n, a, l, h = this.group,
                    c, d = this.box;
                this.itemX = r, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = nA(s.width, e - r), c = e - 2 * r - s.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (c /= 2), this.maxLegendWidth = this.widthOption || c, h || (this.group = h = i.g("legend").addClass(s.className || "").attr({
                    zIndex: 7
                }).add(), this.contentGroup = i.g().attr({
                    zIndex: 1
                }).add(h), this.scrollGroup = i.g().add(this.contentGroup)), this.renderTitle(), nE(o, (t, e) => (t.options ? .legendIndex || 0) - (e.options ? .legendIndex || 0)), s.reversed && o.reverse(), this.allItems = o, this.display = n = !!o.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, o.forEach(this.renderItem, this), o.forEach(this.layoutItem, this), a = (s.maxWidth ? Math.min(this.widthOption || this.offsetWidth, c, nA(s.maxWidth, t.chartWidth) || 1 / 0) : this.widthOption || this.offsetWidth) + r, l = this.lastItemY + this.lastLineHeight + this.titleHeight, l = this.handleOverflow(l) + r, d || (this.box = d = i.rect().addClass("highcharts-legend-box").attr({
                    r: s.borderRadius
                }).add(h)), t.styledMode || d.attr({
                    stroke: s.borderColor,
                    "stroke-width": s.borderWidth || 0,
                    fill: s.backgroundColor || "none"
                }).shadow(s.shadow), a > 0 && l > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, {
                    x: 0,
                    y: 0,
                    width: a,
                    height: l
                }, d.strokeWidth())), h[n ? "show" : "hide"](), t.styledMode && "none" === h.getStyle("display") && (a = l = 0), this.legendWidth = a, this.legendHeight = l, n && this.align(), this.proximate || this.positionItems(), nk(this, "afterRender")
            }
            align(t = this.chart.spacingBox) {
                let e = this.chart,
                    i = this.options,
                    s = t.y;
                /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = nS(t, {
                    y: s
                })), e.hasRendered || (this.group.placed = !1), this.group.align(nS(i, {
                    width: this.legendWidth,
                    height: this.legendHeight,
                    verticalAlign: this.proximate ? "top" : i.verticalAlign
                }), !0, t)
            }
            handleOverflow(t) {
                let e = this,
                    i = this.chart,
                    s = i.renderer,
                    r = this.options,
                    o = r.y,
                    n = "top" === r.verticalAlign,
                    a = this.padding,
                    l = r.maxHeight,
                    h = r.navigation,
                    c = nM(h.animation, !0),
                    d = h.arrowSize || 12,
                    p = this.pages,
                    u = this.allItems,
                    g = function(t) {
                        "number" == typeof t ? k.attr({
                            height: t
                        }) : k && (e.clipRect = k.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = t ? "rect(" + a + "px,9999px," + (a + t) + "px,0)" : "auto")
                    },
                    f = function(t) {
                        return e[t] = s.circle(0, 0, 1.3 * d).translate(d / 2, d / 2).add(w), i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"), e[t]
                    },
                    m, x, y, b, v = i.spacingBox.height + (n ? -o : o) - a,
                    w = this.nav,
                    k = this.clipRect;
                return "horizontal" !== r.layout || "middle" === r.verticalAlign || r.floating || (v /= 2), l && (v = Math.min(v, l)), p.length = 0, t && v > 0 && t > v && !1 !== h.enabled ? (this.clipHeight = m = Math.max(v - 20 - this.titleHeight - a, 0), this.currentPage = nM(this.currentPage, 1), this.fullHeight = t, u.forEach((t, e) => {
                    let i = (y = t.legendItem || {}).y || 0,
                        s = Math.round(y.label.getBBox().height),
                        r = p.length;
                    (!r || i - p[r - 1] > m && (x || i) !== p[r - 1]) && (p.push(x || i), r++), y.pageIx = r - 1, x && b && (b.pageIx = r - 1), e === u.length - 1 && i + s - p[r - 1] > m && i > p[r - 1] && (p.push(i), y.pageIx = r), i !== x && (x = i), b = y
                }), k || (k = e.clipRect = s.clipRect(0, a - 2, 9999, 0), e.contentGroup.clip(k)), g(m), w || (this.nav = w = s.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = s.symbol("triangle", 0, 0, d, d).add(w), f("upTracker").on("click", function() {
                    e.scroll(-1, c)
                }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && h.style && this.pager.css(h.style), this.pager.add(w), this.down = s.symbol("triangle-down", 0, 0, d, d).add(w), f("downTracker").on("click", function() {
                    e.scroll(1, c)
                })), e.scroll(0), t = v) : w && (g(), this.nav = w.destroy(), this.scrollGroup.attr({
                    translateY: 1
                }), this.clipHeight = 0), t
            }
            scroll(t, e) {
                let i = this.chart,
                    s = this.pages,
                    r = s.length,
                    o = this.clipHeight,
                    n = this.options.navigation,
                    a = this.pager,
                    l = this.padding,
                    h = this.currentPage + t;
                h > r && (h = r), h > 0 && (void 0 !== e && nc(e, i), this.nav.attr({
                    translateX: l,
                    translateY: o + this.padding + 7 + this.titleHeight,
                    visibility: "inherit"
                }), [this.up, this.upTracker].forEach(function(t) {
                    t.attr({
                        class: 1 === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    })
                }), a.attr({
                    text: h + "/" + r
                }), [this.down, this.downTracker].forEach(function(t) {
                    t.attr({
                        x: 18 + this.pager.getBBox().width,
                        class: h === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    })
                }, this), i.styledMode || (this.up.attr({
                    fill: 1 === h ? n.inactiveColor : n.activeColor
                }), this.upTracker.css({
                    cursor: 1 === h ? "default" : "pointer"
                }), this.down.attr({
                    fill: h === r ? n.inactiveColor : n.activeColor
                }), this.downTracker.css({
                    cursor: h === r ? "default" : "pointer"
                })), this.scrollOffset = -s[h - 1] + this.initialItemY, this.scrollGroup.animate({
                    translateY: this.scrollOffset
                }), this.currentPage = h, this.positionCheckboxes(), nO(() => {
                    nk(this, "afterScroll", {
                        currentPage: h
                    })
                }, nh(nM(e, i.renderer.globalAnimation, !0)).duration))
            }
            setItemEvents(t, e, i) {
                let s = this,
                    r = t.legendItem || {},
                    o = s.chart.renderer.boxWrapper,
                    n = t instanceof ot,
                    a = t instanceof nl,
                    l = "highcharts-legend-" + (n ? "point" : "series") + "-active",
                    h = s.chart.styledMode,
                    c = i ? [e, r.symbol] : [r.group],
                    d = e => {
                        s.allItems.forEach(i => {
                            t !== i && [i].concat(i.linkedSeries || []).forEach(t => {
                                t.setState(e, !n)
                            })
                        })
                    };
                for (let i of c) i && i.on("mouseover", function() {
                    t.visible && d("inactive"), t.setState("hover"), t.visible && o.addClass(l), h || e.css(s.options.itemHoverStyle)
                }).on("mouseout", function() {
                    s.chart.styledMode || e.css(nS(t.visible ? s.itemStyle : s.itemHiddenStyle)), d(""), o.removeClass(l), t.setState()
                }).on("click", function(e) {
                    let i = function() {
                        t.setVisible && t.setVisible(), d(t.visible ? "inactive" : "")
                    };
                    o.removeClass(l), nk(s, "itemClick", {
                        browserEvent: e,
                        legendItem: t
                    }, i), n ? t.firePointEvent("legendItemClick", {
                        browserEvent: e
                    }) : a && nk(t, "legendItemClick", {
                        browserEvent: e
                    })
                })
            }
            createCheckboxForItem(t) {
                t.checkbox = nx("input", {
                    type: "checkbox",
                    className: "highcharts-legend-checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected
                }, this.options.itemCheckboxStyle, this.chart.container), nm(t.checkbox, "click", function(e) {
                    let i = e.target;
                    nk(t.series || t, "checkboxClick", {
                        checked: i.checked,
                        item: t
                    }, function() {
                        t.select()
                    })
                })
            }
        }(p = nL || (nL = {})).compose = function(t) {
            nC(np, "Core.Legend") && nm(t, "beforeMargins", function() {
                this.legend = new p(this, this.options.legend)
            })
        };
        let nP = nL,
            {
                animate: nN,
                animObject: nI,
                setAnimation: nR
            } = t5,
            {
                defaultOptions: nD
            } = tI,
            {
                numberFormat: nB
            } = eS,
            {
                registerEventOptions: nj
            } = sg,
            {
                charts: nz,
                doc: n_,
                marginNames: nW,
                svg: nH,
                win: nF
            } = B,
            {
                seriesTypes: nX
            } = oz,
            {
                addEvent: nY,
                attr: nG,
                createElement: n$,
                css: nU,
                defined: nV,
                diffObjects: nq,
                discardElement: nK,
                erase: nZ,
                error: nJ,
                extend: nQ,
                find: n0,
                fireEvent: n1,
                getAlignFactor: n2,
                getStyle: n3,
                isArray: n5,
                isNumber: n6,
                isObject: n4,
                isString: n9,
                merge: n7,
                objectEach: n8,
                pick: at,
                pInt: ae,
                relativeLength: ai,
                removeEvent: as,
                splat: ar,
                syncTimeout: ao,
                uniqueKey: an
            } = ta;
        class aa {
            static chart(t, e, i) {
                return new aa(t, e, i)
            }
            constructor(t, e, i) {
                this.sharedClips = {};
                const s = [...arguments];
                (n9(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1])
            }
            setZoomOptions() {
                let t = this.options.chart,
                    e = t.zooming;
                this.zooming = { ...e,
                    type: at(t.zoomType, e.type),
                    key: at(t.zoomKey, e.key),
                    pinchType: at(t.pinchType, e.pinchType),
                    singleTouch: at(t.zoomBySingleTouch, e.singleTouch, !1),
                    resetButton: n7(e.resetButton, t.resetZoomButton)
                }
            }
            init(t, e) {
                n1(this, "init", {
                    args: arguments
                }, function() {
                    let i = n7(nD, t),
                        s = i.chart,
                        r = this.renderTo || s.renderTo;
                    this.userOptions = nQ({}, t), (this.renderTo = n9(r) ? n_.getElementById(r) : r) || nJ(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ? ? this.renderTo.closest("[lang]") ? .lang, this.time = new tA(nQ(i.time || {}, {
                        locale: this.locale
                    }), i.lang), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || nB).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = nz.length, nz.push(this), B.chartCount++, nj(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), n1(this, "afterInit"), this.firstRender()
                })
            }
            initSeries(t) {
                let e = this.options.chart,
                    i = t.type || e.type,
                    s = nX[i];
                s || nJ(17, !0, this, {
                    missingModuleFor: i
                });
                let r = new s;
                return "function" == typeof r.init && r.init(this, t), r
            }
            setSortedData() {
                this.getSeriesOrderByLinks().forEach(function(t) {
                    t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1)
                })
            }
            getSeriesOrderByLinks() {
                return this.series.concat().sort(function(t, e) {
                    return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0
                })
            }
            orderItems(t, e = 0) {
                let i = this[t],
                    s = this.options[t] = ar(this.options[t]).slice(),
                    r = this.userOptions[t] = this.userOptions[t] ? ar(this.userOptions[t]).slice() : [];
                if (this.hasRendered && (s.splice(e), r.splice(e)), i)
                    for (let t = e, o = i.length; t < o; ++t) {
                        let e = i[t];
                        e && (e.index = t, e instanceof nl && (e.name = e.getName()), e.options.isInternal || (s[t] = e.options, r[t] = e.userOptions))
                    }
            }
            getClipBox(t, e) {
                let i = this.inverted,
                    {
                        xAxis: s,
                        yAxis: r
                    } = t || {},
                    {
                        x: o,
                        y: n,
                        width: a,
                        height: l
                    } = n7(this.clipBox);
                return t && (s && s.len !== this.plotSizeX && (a = s.len), r && r.len !== this.plotSizeY && (l = r.len), i && !t.invertible && ([a, l] = [l, a])), e && (o += (i ? r : s) ? .pos ? ? this.plotLeft, n += (i ? s : r) ? .pos ? ? this.plotTop), {
                    x: o,
                    y: n,
                    width: a,
                    height: l
                }
            }
            isInsidePlot(t, e, i = {}) {
                let {
                    inverted: s,
                    plotBox: r,
                    plotLeft: o,
                    plotTop: n,
                    scrollablePlotBox: a
                } = this, {
                    scrollLeft: l = 0,
                    scrollTop: h = 0
                } = i.visiblePlotOnly && this.scrollablePlotArea ? .scrollingContainer || {}, c = i.series, d = i.visiblePlotOnly && a || r, p = i.inverted ? e : t, u = i.inverted ? t : e, g = {
                    x: p,
                    y: u,
                    isInsidePlot: !0,
                    options: i
                };
                if (!i.ignoreX) {
                    let t = c && (s && !this.polar ? c.yAxis : c.xAxis) || {
                            pos: o,
                            len: 1 / 0
                        },
                        e = i.paneCoordinates ? t.pos + p : o + p;
                    e >= Math.max(l + o, t.pos) && e <= Math.min(l + o + d.width, t.pos + t.len) || (g.isInsidePlot = !1)
                }
                if (!i.ignoreY && g.isInsidePlot) {
                    let t = !s && i.axis && !i.axis.isXAxis && i.axis || c && (s ? c.xAxis : c.yAxis) || {
                            pos: n,
                            len: 1 / 0
                        },
                        e = i.paneCoordinates ? t.pos + u : n + u;
                    e >= Math.max(h + n, t.pos) && e <= Math.min(h + n + d.height, t.pos + t.len) || (g.isInsidePlot = !1)
                }
                return n1(this, "afterIsInsidePlot", g), g.isInsidePlot
            }
            redraw(t) {
                n1(this, "beforeRedraw");
                let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
                    i = this.series,
                    s = this.pointer,
                    r = this.legend,
                    o = this.userOptions.legend,
                    n = this.renderer,
                    a = n.isHidden(),
                    l = [],
                    h, c, d, p = this.isDirtyBox,
                    u = this.isDirtyLegend,
                    g;
                for (n.rootFontSize = n.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), nR(!!this.hasRendered && t, this), a && this.temporaryDisplay(), this.layOutTitles(!1), d = i.length; d--;)
                    if (((g = i[d]).options.stacking || g.options.centerInCategory) && (c = !0, g.isDirty)) {
                        h = !0;
                        break
                    }
                if (h)
                    for (d = i.length; d--;)(g = i[d]).options.stacking && (g.isDirty = !0);
                i.forEach(function(t) {
                    t.isDirty && ("point" === t.options.legendType ? ("function" == typeof t.updateTotals && t.updateTotals(), u = !0) : o && (o.labelFormatter || o.labelFormat) && (u = !0)), t.isDirtyData && n1(t, "updatedData")
                }), u && r && r.options.enabled && (r.render(), this.isDirtyLegend = !1), c && this.getStacks(), e.forEach(function(t) {
                    t.updateNames(), t.setScale()
                }), this.getMargins(), e.forEach(function(t) {
                    t.isDirty && (p = !0)
                }), e.forEach(function(t) {
                    let e = t.min + "," + t.max;
                    t.extKey !== e && (t.extKey = e, l.push(function() {
                        n1(t, "afterSetExtremes", nQ(t.eventArgs, t.getExtremes())), delete t.eventArgs
                    })), (p || c) && t.redraw()
                }), p && this.drawChartBox(), n1(this, "predraw"), i.forEach(function(t) {
                    (p || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                }), s && s.reset(!0), n.draw(), n1(this, "redraw"), n1(this, "render"), a && this.temporaryDisplay(!0), l.forEach(function(t) {
                    t.call()
                })
            }
            get(t) {
                let e = this.series;

                function i(e) {
                    return e.id === t || e.options && e.options.id === t
                }
                let s = n0(this.axes, i) || n0(this.series, i);
                for (let t = 0; !s && t < e.length; t++) s = n0(e[t].points || [], i);
                return s
            }
            createAxes() {
                let t = this.userOptions;
                for (let e of (n1(this, "createAxes"), ["xAxis", "yAxis"]))
                    for (let i of t[e] = ar(t[e] || {})) new s5(this, i, e);
                n1(this, "afterCreateAxes")
            }
            getSelectedPoints() {
                return this.series.reduce((t, e) => (e.getPointsCollection().forEach(e => {
                    at(e.selectedStaging, e.selected) && t.push(e)
                }), t), [])
            }
            getSelectedSeries() {
                return this.series.filter(t => t.selected)
            }
            setTitle(t, e, i) {
                this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i)
            }
            applyDescription(t, e) {
                let i = this,
                    s = this.options[t] = n7(this.options[t], e),
                    r = this[t];
                r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({
                    align: s.align,
                    class: "highcharts-" + t,
                    zIndex: s.zIndex || 4
                }).css({
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }).add()).update = function(e, s) {
                    i.applyDescription(t, e), i.layOutTitles(s)
                }, this.styledMode || r.css(nQ("title" === t ? {
                    fontSize: this.options.isStock ? "1em" : "1.2em"
                } : {}, s.style)), r.textPxLength = r.getBBox().width, r.css({
                    whiteSpace: s.style ? .whiteSpace
                }), this[t] = r)
            }
            layOutTitles(t = !0) {
                let e = [0, 0, 0],
                    {
                        options: i,
                        renderer: s,
                        spacingBox: r
                    } = this;
                ["title", "subtitle", "caption"].forEach(t => {
                    let i = this[t],
                        o = this.options[t],
                        n = n7(r),
                        a = i ? .textPxLength || 0;
                    if (i && o) {
                        n1(this, "layOutTitle", {
                            alignTo: n,
                            key: t,
                            textPxLength: a
                        });
                        let r = s.fontMetrics(i),
                            l = r.b,
                            h = r.h,
                            c = o.verticalAlign || "top",
                            d = "top" === c,
                            p = d && o.minScale || 1,
                            u = "title" === t ? d ? -3 : 0 : d ? e[0] + 2 : 0,
                            g = Math.min(n.width / a, 1),
                            f = Math.max(p, g),
                            m = n7({
                                y: "bottom" === c ? l : u + l
                            }, {
                                align: "title" === t ? g < p ? "left" : "center" : this.title ? .alignValue
                            }, o),
                            x = (o.width || (g > p ? this.chartWidth : n.width) / f) + "px";
                        i.alignValue !== m.align && (i.placed = !1);
                        let y = Math.round(i.css({
                            width: x
                        }).getBBox(o.useHTML).height);
                        if (m.height = y, i.align(m, !1, n).attr({
                                align: m.align,
                                scaleX: f,
                                scaleY: f,
                                "transform-origin": `${n.x+a*f*n2(m.align)} ${h}`
                            }), !o.floating) {
                            let t = y * (y < 1.2 * h ? 1 : f);
                            "top" === c ? e[0] = Math.ceil(e[0] + t) : "bottom" === c && (e[2] = Math.ceil(e[2] + t))
                        }
                    }
                }, this), e[0] && "top" === (i.title ? .verticalAlign || "top") && (e[0] += i.title ? .margin || 0), e[2] && i.caption ? .verticalAlign === "bottom" && (e[2] += i.caption ? .margin || 0);
                let o = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
                this.titleOffset = e, n1(this, "afterLayOutTitles"), !this.isDirtyBox && o && (this.isDirtyBox = this.isDirtyLegend = o, this.hasRendered && t && this.isDirtyBox && this.redraw())
            }
            getContainerBox() {
                let t = [].map.call(this.renderTo.children, t => {
                        if (t !== this.container) {
                            let e = t.style.display;
                            return t.style.display = "none", [t, e]
                        }
                    }),
                    e = {
                        width: n3(this.renderTo, "width", !0) || 0,
                        height: n3(this.renderTo, "height", !0) || 0
                    };
                return t.filter(Boolean).forEach(([t, e]) => {
                    t.style.display = e
                }), e
            }
            getChartSize() {
                let t = this.options.chart,
                    e = t.width,
                    i = t.height,
                    s = this.getContainerBox(),
                    r = s.height <= 1 || !this.renderTo.parentElement ? .style.height && "100%" === this.renderTo.style.height;
                this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, ai(i, this.chartWidth) || (r ? 400 : s.height)), this.containerBox = s
            }
            temporaryDisplay(t) {
                let e = this.renderTo,
                    i;
                if (t)
                    for (; e ? .style;) e.hcOrigStyle && (nU(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (n_.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
                else
                    for (; e ? .style && (n_.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, n_.body.appendChild(e)), ("none" === n3(e, "display", !1) || e.hcOricDetached) && (e.hcOrigStyle = {
                            display: e.style.display,
                            height: e.style.height,
                            overflow: e.style.overflow
                        }, i = {
                            display: "block",
                            overflow: "hidden"
                        }, e !== this.renderTo && (i.height = 0), nU(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== n_.body););
            }
            setClassName(t) {
                this.container.className = "highcharts-container " + (t || "")
            }
            getContainer() {
                let t, e = this.options,
                    i = e.chart,
                    s = "data-highcharts-chart",
                    r = an(),
                    o = this.renderTo,
                    n = ae(nG(o, s));
                n6(n) && nz[n] && nz[n].hasRendered && nz[n].destroy(), nG(o, s, this.index), o.innerHTML = el.emptyHTML, i.skipClone || o.offsetWidth || this.temporaryDisplay(), this.getChartSize();
                let a = this.chartHeight,
                    l = this.chartWidth;
                nU(o, {
                    overflow: "hidden"
                }), this.styledMode || (t = nQ({
                    position: "relative",
                    overflow: "hidden",
                    width: l + "px",
                    height: a + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    userSelect: "none",
                    "touch-action": "manipulation",
                    outline: "none",
                    padding: "0px"
                }, i.style || {}));
                let h = n$("div", {
                    id: r
                }, t, o);
                this.container = h, this.getChartSize(), l !== this.chartWidth && (l = this.chartWidth, this.styledMode || nU(h, {
                    width: at(i.style ? .width, l + "px")
                })), this.containerBox = this.getContainerBox(), this._cursor = h.style.cursor;
                let c = i.renderer || !nH ? eM.getRendererType(i.renderer) : i3;
                if (this.renderer = new c(h, l, a, void 0, i.forExport, e.exporting ? .allowHTML, this.styledMode), nR(void 0, this), this.setClassName(i.className), this.styledMode)
                    for (let t in e.defs) this.renderer.definition(e.defs[t]);
                else this.renderer.setStyle(i.style);
                this.renderer.chartIndex = this.index, n1(this, "afterGetContainer")
            }
            getMargins(t) {
                let {
                    spacing: e,
                    margin: i,
                    titleOffset: s
                } = this;
                this.resetMargins(), s[0] && !nV(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !nV(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend ? .display && this.legend.adjustMargins(i, e), n1(this, "getMargins"), t || this.getAxisMargins()
            }
            getAxisMargins() {
                let t = this,
                    e = t.axisOffset = [0, 0, 0, 0],
                    i = t.colorAxis,
                    s = t.margin,
                    r = t => {
                        t.forEach(t => {
                            t.visible && t.getOffset()
                        })
                    };
                t.hasCartesianSeries ? r(t.axes) : i ? .length && r(i), nW.forEach((i, r) => {
                    nV(s[r]) || (t[i] += e[r])
                }), t.setChartSize()
            }
            getOptions() {
                return nq(this.userOptions, nD)
            }
            reflow(t) {
                let e = this,
                    i = e.containerBox,
                    s = e.getContainerBox();
                delete e.pointer ? .chartPosition, !e.exporting ? .isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && (ta.clearTimeout(e.reflowTimeout), e.reflowTimeout = ao(function() {
                    e.container && e.setSize(void 0, void 0, !1)
                }, 100 * !!t)), e.containerBox = s)
            }
            setReflow() {
                let t = this,
                    e = e => {
                        t.options ? .chart.reflow && t.hasLoaded && t.reflow(e)
                    };
                if ("function" == typeof ResizeObserver) new ResizeObserver(e).observe(t.renderTo);
                else {
                    let t = nY(nF, "resize", e);
                    nY(this, "destroy", t)
                }
            }
            setSize(t, e, i) {
                let s = this,
                    r = s.renderer;
                s.isResizing += 1, nR(i, s);
                let o = r.globalAnimation;
                s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, void 0 !== t && (s.options.chart.width = t), void 0 !== e && (s.options.chart.height = e), s.getChartSize();
                let {
                    chartWidth: n,
                    chartHeight: a,
                    scrollablePixelsX: l = 0,
                    scrollablePixelsY: h = 0
                } = s;
                (s.isDirtyBox || n !== s.oldChartWidth || a !== s.oldChartHeight) && (s.styledMode || (o ? nN : nU)(s.container, {
                    width: `${n+l}px`,
                    height: `${a+h}px`
                }, o), s.setChartSize(!0), r.setSize(n, a, o), s.axes.forEach(function(t) {
                    t.isDirty = !0, t.setScale()
                }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(o), s.oldChartHeight = void 0, n1(s, "resize"), setTimeout(() => {
                    s && n1(s, "endResize")
                }, nI(o).duration)), s.isResizing -= 1
            }
            setChartSize(t) {
                let e, i, s, r, {
                        chartHeight: o,
                        chartWidth: n,
                        inverted: a,
                        spacing: l,
                        renderer: h
                    } = this,
                    c = this.clipOffset,
                    d = Math[a ? "floor" : "round"];
                this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(n - e - (this.marginRight ? ? 0))), this.plotHeight = r = Math.max(0, Math.round(o - i - (this.marginBottom ? ? 0))), this.plotSizeX = a ? r : s, this.plotSizeY = a ? s : r, this.spacingBox = h.spacingBox = {
                    x: l[3],
                    y: l[0],
                    width: n - l[3] - l[1],
                    height: o - l[0] - l[2]
                }, this.plotBox = h.plotBox = {
                    x: e,
                    y: i,
                    width: s,
                    height: r
                }, c && (this.clipBox = {
                    x: d(c[3]),
                    y: d(c[0]),
                    width: d(this.plotSizeX - c[1] - c[3]),
                    height: d(this.plotSizeY - c[0] - c[2])
                }), t || (this.axes.forEach(function(t) {
                    t.setAxisSize(), t.setAxisTranslation()
                }), h.alignElements()), n1(this, "afterSetChartSize", {
                    skipAxes: t
                })
            }
            resetMargins() {
                n1(this, "resetMargins");
                let t = this,
                    e = t.options.chart,
                    i = e.plotBorderWidth || 0,
                    s = Math.round(i) / 2;
                ["margin", "spacing"].forEach(i => {
                    let s = e[i],
                        r = n4(s) ? s : [s, s, s, s];
                    ["Top", "Right", "Bottom", "Left"].forEach((s, o) => {
                        t[i][o] = e[`${i}${s}`] ? ? r[o]
                    })
                }), nW.forEach((e, i) => {
                    t[e] = t.margin[i] ? ? t.spacing[i]
                }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i
            }
            drawChartBox() {
                let t = this.options.chart,
                    e = this.renderer,
                    i = this.chartWidth,
                    s = this.chartHeight,
                    r = this.styledMode,
                    o = this.plotBGImage,
                    n = t.backgroundColor,
                    a = t.plotBackgroundColor,
                    l = t.plotBackgroundImage,
                    h = this.plotLeft,
                    c = this.plotTop,
                    d = this.plotWidth,
                    p = this.plotHeight,
                    u = this.plotBox,
                    g = this.clipRect,
                    f = this.clipBox,
                    m = this.chartBackground,
                    x = this.plotBackground,
                    y = this.plotBorder,
                    b, v, w, k = "animate";
                m || (this.chartBackground = m = e.rect().addClass("highcharts-background").add(), k = "attr"), r ? b = v = m.strokeWidth() : (v = (b = t.borderWidth || 0) + 8 * !!t.shadow, w = {
                    fill: n || "none"
                }, (b || m["stroke-width"]) && (w.stroke = t.borderColor, w["stroke-width"] = b), m.attr(w).shadow(t.shadow)), m[k]({
                    x: v / 2,
                    y: v / 2,
                    width: i - v - b % 2,
                    height: s - v - b % 2,
                    r: t.borderRadius
                }), k = "animate", x || (k = "attr", this.plotBackground = x = e.rect().addClass("highcharts-plot-background").add()), x[k](u), !r && (x.attr({
                    fill: a || "none"
                }).shadow(t.plotShadow), l && (o ? (l !== o.attr("href") && o.attr("href", l), o.animate(u)) : this.plotBGImage = e.image(l, h, c, d, p).add())), g ? g.animate({
                    width: f.width,
                    height: f.height
                }) : this.clipRect = e.clipRect(f), k = "animate", y || (k = "attr", this.plotBorder = y = e.rect().addClass("highcharts-plot-border").attr({
                    zIndex: 1
                }).add()), r || y.attr({
                    stroke: t.plotBorderColor,
                    "stroke-width": t.plotBorderWidth || 0,
                    fill: "none"
                }), y[k](y.crisp(u, -y.strokeWidth())), this.isDirtyBox = !1, n1(this, "afterDrawChartBox")
            }
            propFromSeries() {
                let t, e, i, s = this,
                    r = s.options.chart,
                    o = s.options.series;
                ["inverted", "angular", "polar"].forEach(function(n) {
                    for (e = nX[r.type], i = r[n] || e && e.prototype[n], t = o ? .length; !i && t--;)(e = nX[o[t].type]) && e.prototype[n] && (i = !0);
                    s[n] = i
                })
            }
            linkSeries(t) {
                let e = this,
                    i = e.series;
                i.forEach(function(t) {
                    t.linkedSeries.length = 0
                }), i.forEach(function(t) {
                    let {
                        linkedTo: s
                    } = t.options, r = n9(s) && (":previous" === s ? i[t.index - 1] : e.get(s));
                    r && r.linkedParent !== t && (r.linkedSeries.push(t), t.linkedParent = r, r.enabledDataSorting && t.setDataSortingOptions(), t.visible = t.options.visible ? ? r.options.visible ? ? t.visible)
                }), n1(this, "afterLinkSeries", {
                    isUpdating: t
                })
            }
            renderSeries() {
                this.series.forEach(function(t) {
                    t.translate(), t.render()
                })
            }
            render() {
                let t = this.axes,
                    e = this.colorAxis,
                    i = this.renderer,
                    s = this.options.chart.axisLayoutRuns || 2,
                    r = t => {
                        t.forEach(t => {
                            t.visible && t.render()
                        })
                    },
                    o = 0,
                    n = !0,
                    a, l = 0;
                for (let e of (this.setTitle(), n1(this, "beforeMargins"), this.getStacks ? .(), this.getMargins(!0), this.setChartSize(), t)) {
                    let {
                        options: t
                    } = e, {
                        labels: i
                    } = t;
                    if (this.hasCartesianSeries && e.horiz && e.visible && i.enabled && e.series.length && "colorAxis" !== e.coll && !this.polar) {
                        o = t.tickLength, e.createGroups();
                        let s = new sA(e, 0, "", !0),
                            r = s.createLabel("x", i);
                        if (s.destroy(), r && at(i.reserveSpace, !n6(t.crossing)) && (o = r.getBBox().height + i.distance + Math.max(t.offset || 0, 0)), o) {
                            r ? .destroy();
                            break
                        }
                    }
                }
                for (this.plotHeight = Math.max(this.plotHeight - o, 0);
                    (n || a || s > 1) && l < s;) {
                    let e = this.plotWidth,
                        i = this.plotHeight;
                    for (let e of t) 0 === l ? e.setScale() : (e.horiz && n || !e.horiz && a) && e.setTickInterval(!0);
                    0 === l ? this.getAxisMargins() : this.getMargins(), n = e / this.plotWidth > (l ? 1 : 1.1), a = i / this.plotHeight > (l ? 1 : 1.05), l++
                }
                this.drawChartBox(), this.hasCartesianSeries ? r(t) : e ? .length && r(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({
                    zIndex: 3
                }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
            }
            addCredits(t) {
                let e = this,
                    i = n7(!0, this.options.credits, t);
                i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                    i.href && (nF.location.href = i.href)
                }).attr({
                    align: i.position.align,
                    zIndex: 8
                }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(t) {
                    e.credits = e.credits.destroy(), e.addCredits(t)
                })
            }
            destroy() {
                let t, e = this,
                    i = e.axes,
                    s = e.series,
                    r = e.container,
                    o = r ? .parentNode;
                for (n1(e, "destroy"), e.renderer.forExport ? nZ(nz, e) : nz[e.index] = void 0, B.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), as(e), t = i.length; t--;) i[t] = i[t].destroy();
                for (this.scroller ? .destroy ? .(), t = s.length; t--;) s[t] = s[t].destroy();
                ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(t => {
                    e[t] = e[t] ? .destroy ? .()
                }), r && (r.innerHTML = el.emptyHTML, as(r), o && nK(r)), n8(e, function(t, i) {
                    delete e[i]
                })
            }
            firstRender() {
                let t = this,
                    e = t.options;
                t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
                let i = n5(e.series) ? e.series : [];
                e.series = [], i.forEach(function(e) {
                    t.initSeries(e)
                }), t.linkSeries(), t.setSortedData(), n1(t, "beforeRender"), t.render(), t.pointer ? .getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0)
            }
            onload() {
                this.callbacks.concat([this.callback]).forEach(function(t) {
                    t && void 0 !== this.index && t.apply(this, [this])
                }, this), n1(this, "load"), n1(this, "render"), nV(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.warnIfCSSNotLoaded(), this.hasLoaded = !0
            }
            warnIfA11yModuleNotLoaded() {
                let {
                    options: t,
                    title: e
                } = this;
                t && !this.accessibility && (this.renderer.boxWrapper.attr({
                    role: "img",
                    "aria-label": (e ? .element.textContent || "").replace(/</g, "&lt;")
                }), t.accessibility && !1 === t.accessibility.enabled || nJ('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this))
            }
            warnIfCSSNotLoaded() {
                this.styledMode && "0" !== nF.getComputedStyle(this.container).zIndex && nJ(35, !1, this)
            }
            addSeries(t, e, i) {
                let s, r = this;
                return t && (e = at(e, !0), n1(r, "addSeries", {
                    options: t
                }, function() {
                    s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), n1(r, "afterAddSeries", {
                        series: s
                    }), e && r.redraw(i)
                })), s
            }
            addAxis(t, e, i, s) {
                return this.createAxis(e ? "xAxis" : "yAxis", {
                    axis: t,
                    redraw: i,
                    animation: s
                })
            }
            addColorAxis(t, e, i) {
                return this.createAxis("colorAxis", {
                    axis: t,
                    redraw: e,
                    animation: i
                })
            }
            createAxis(t, e) {
                let i = new s5(this, e.axis, t);
                return at(e.redraw, !0) && this.redraw(e.animation), i
            }
            showLoading(t) {
                let e = this,
                    i = e.options,
                    s = i.loading,
                    r = function() {
                        o && nU(o, {
                            left: e.plotLeft + "px",
                            top: e.plotTop + "px",
                            width: e.plotWidth + "px",
                            height: e.plotHeight + "px"
                        })
                    },
                    o = e.loadingDiv,
                    n = e.loadingSpan;
                o || (e.loadingDiv = o = n$("div", {
                    className: "highcharts-loading highcharts-loading-hidden"
                }, null, e.container)), n || (e.loadingSpan = n = n$("span", {
                    className: "highcharts-loading-inner"
                }, null, o), nY(e, "redraw", r)), o.className = "highcharts-loading", el.setElementHTML(n, at(t, i.lang.loading, "")), !e.styledMode && (nU(o, nQ(s.style, {
                    zIndex: 10
                })), nU(n, s.labelStyle), e.loadingShown || (nU(o, {
                    opacity: 0,
                    display: ""
                }), nN(o, {
                    opacity: s.style.opacity || .5
                }, {
                    duration: s.showDuration || 0
                }))), e.loadingShown = !0, r()
            }
            hideLoading() {
                let t = this.options,
                    e = this.loadingDiv;
                e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || nN(e, {
                    opacity: 0
                }, {
                    duration: t.loading.hideDuration || 100,
                    complete: function() {
                        nU(e, {
                            display: "none"
                        })
                    }
                })), this.loadingShown = !1
            }
            update(t, e, i, s) {
                let r, o, n, a = this,
                    l = {
                        credits: "addCredits",
                        title: "setTitle",
                        subtitle: "setSubtitle",
                        caption: "setCaption"
                    },
                    h = t.isResponsiveOptions,
                    c = [];
                n1(a, "update", {
                    options: t
                }), h || a.setResponsive(!1, !0), t = nq(t, a.options), a.userOptions = n7(a.userOptions, t);
                let d = t.chart;
                d && (n7(!0, a.options.chart, d), this.setZoomOptions(), "className" in d && a.setClassName(d.className), ("inverted" in d || "polar" in d || "type" in d) && (a.propFromSeries(), r = !0), "alignTicks" in d && (r = !0), "events" in d && nj(this, d), n8(d, function(t, e) {
                    -1 !== a.propsRequireUpdateSeries.indexOf("chart." + e) && (o = !0), -1 !== a.propsRequireDirtyBox.indexOf(e) && (a.isDirtyBox = !0), -1 !== a.propsRequireReflow.indexOf(e) && (a.isDirtyBox = !0, h || (n = !0))
                }), !a.styledMode && d.style && a.renderer.setStyle(a.options.chart.style || {})), !a.styledMode && t.colors && (this.options.colors = t.colors), n8(t, function(e, i) {
                    a[i] && "function" == typeof a[i].update ? a[i].update(e, !1) : "function" == typeof a[l[i]] ? a[l[i]](e) : "colors" !== i && -1 === a.collectionsWithUpdate.indexOf(i) && n7(!0, a.options[i], t[i]), "chart" !== i && -1 !== a.propsRequireUpdateSeries.indexOf(i) && (o = !0)
                }), this.collectionsWithUpdate.forEach(function(e) {
                    t[e] && (ar(t[e]).forEach(function(t, s) {
                        let r, o = nV(t.id);
                        o && (r = a.get(t.id)), !r && a[e] && (r = a[e][at(t.index, s)]) && (o && nV(r.options.id) || r.options.isInternal) && (r = void 0), r && r.coll === e && (r.update(t, !1), i && (r.touched = !0)), !r && i && a.collectionsWithInit[e] && (a.collectionsWithInit[e][0].apply(a, [t].concat(a.collectionsWithInit[e][1] || []).concat([!1])).touched = !0)
                    }), i && a[e].forEach(function(t) {
                        t.touched || t.options.isInternal ? delete t.touched : c.push(t)
                    }))
                }), c.forEach(function(t) {
                    t.chart && t.remove && t.remove(!1)
                }), r && a.axes.forEach(function(t) {
                    t.update({}, !1)
                }), o && a.getSeriesOrderByLinks().forEach(function(t) {
                    t.chart && t.update({}, !1)
                }, this);
                let p = d ? .width,
                    u = d && (n9(d.height) ? ai(d.height, p || a.chartWidth) : d.height);
                n || n6(p) && p !== a.chartWidth || n6(u) && u !== a.chartHeight ? a.setSize(p, u, s) : at(e, !0) && a.redraw(s), n1(a, "afterUpdate", {
                    options: t,
                    redraw: e,
                    animation: s
                })
            }
            setSubtitle(t, e) {
                this.applyDescription("subtitle", t), this.layOutTitles(e)
            }
            setCaption(t, e) {
                this.applyDescription("caption", t), this.layOutTitles(e)
            }
            showResetZoom() {
                let t = this,
                    e = nD.lang,
                    i = t.zooming.resetButton,
                    s = i.theme,
                    r = "chart" === i.relativeTo || "spacingBox" === i.relativeTo ? null : "plotBox";

                function o() {
                    t.zoomOut()
                }
                n1(this, "beforeShowResetZoom", null, function() {
                    t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, o, s).attr({
                        align: i.position.align,
                        title: e.resetZoomTitle
                    }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r)
                }), n1(this, "afterShowResetZoom")
            }
            zoomOut() {
                n1(this, "selection", {
                    resetSelection: !0
                }, () => this.transform({
                    reset: !0,
                    trigger: "zoom"
                }))
            }
            pan(t, e) {
                let i = this,
                    s = "object" == typeof e ? e : {
                        enabled: e,
                        type: "x"
                    },
                    r = s.type,
                    o = r && i[({
                        x: "xAxis",
                        xy: "axes",
                        y: "yAxis"
                    })[r]].filter(t => t.options.panningEnabled && !t.options.isInternal),
                    n = i.options.chart;
                n ? .panning && (n.panning = s), n1(this, "pan", {
                    originalEvent: t
                }, () => {
                    i.transform({
                        axes: o,
                        event: t,
                        to: {
                            x: t.chartX - (i.mouseDownX || 0),
                            y: t.chartY - (i.mouseDownY || 0)
                        },
                        trigger: "pan"
                    }), nU(i.container, {
                        cursor: "move"
                    })
                })
            }
            transform(t) {
                let {
                    axes: e = this.axes,
                    event: i,
                    from: s = {},
                    reset: r,
                    selection: o,
                    to: n = {},
                    trigger: a,
                    allowResetButton: l = !0
                } = t, {
                    inverted: h,
                    time: c
                } = this;
                this.hoverPoints ? .forEach(t => t.setState()), n1(this, "transform", t);
                let d = t.hasZoomed || !1,
                    p, u;
                for (let t of e) {
                    let {
                        horiz: e,
                        len: g,
                        minPointOffset: f = 0,
                        options: m,
                        reversed: x
                    } = t, y = e ? "width" : "height", b = e ? "x" : "y", v = at(n[y], t.len), w = at(s[y], t.len), k = 10 > Math.abs(v) ? 1 : v / w, T = (s[b] || 0) + w / 2 - t.pos, S = T - ((n[b] ? ? t.pos) + v / 2 - t.pos) / k, M = x && !h || !x && h ? -1 : 1;
                    if (!r && (T < 0 || T > t.len)) continue;
                    let C = t.chart.polar || t.isOrdinal ? 0 : f * M || 0,
                        A = t.toValue(S, !0),
                        E = t.toValue(S + g / k, !0),
                        O = A + C,
                        L = E - C,
                        P = t.allExtremes;
                    if (o && o[t.coll].push({
                            axis: t,
                            min: Math.min(A, E),
                            max: Math.max(A, E)
                        }), O > L && ([O, L] = [L, O]), 1 === k && !r && "yAxis" === t.coll && !P) {
                        for (let e of t.series) {
                            let t = e.getExtremes(e.getProcessedData(!0).modified.getColumn(e.pointValKey || "y") || [], !0);
                            P ? ? (P = {
                                dataMin: Number.MAX_VALUE,
                                dataMax: -Number.MAX_VALUE
                            }), n6(t.dataMin) && n6(t.dataMax) && (P.dataMin = Math.min(t.dataMin, P.dataMin), P.dataMax = Math.max(t.dataMax, P.dataMax))
                        }
                        t.allExtremes = P
                    }
                    let {
                        dataMin: N,
                        dataMax: I,
                        min: R,
                        max: D
                    } = nQ(t.getExtremes(), P || {}), B = c.parse(m.min), j = c.parse(m.max), z = N ? ? B, _ = I ? ? j, W = L - O, H = t.categories ? 0 : Math.min(W, _ - z), F = z - H * (nV(B) ? 0 : m.minPadding), X = _ + H * (nV(j) ? 0 : m.maxPadding), Y = t.allowZoomOutside || 1 === k || "zoom" !== a && k > 1, G = Math.min(B ? ? F, F, Y ? R : F), $ = Math.max(j ? ? X, X, Y ? D : X);
                    (!t.isOrdinal || 1 !== k || r) && (O < G && (O = G, k >= 1 && (L = O + W)), L > $ && (L = $, k >= 1 && (O = L - W)), (r || t.series.length && (O !== R || L !== D) && O >= G && L <= $) && (o ? o[t.coll].push({
                        axis: t,
                        min: O,
                        max: L
                    }) : (t.isPanning = "zoom" !== a, t.isPanning && "mousewheel" !== a && (u = !0), t.setExtremes(r ? void 0 : O, r ? void 0 : L, !1, !1, {
                        move: S,
                        trigger: a,
                        scale: k
                    }), !r && (O > G || L < $) && (p = l)), d = !0), this.hasCartesianSeries || r || (p = l), i && (this[e ? "mouseDownX" : "mouseDownY"] = i[e ? "chartX" : "chartY"]))
                }
                return d && (o ? n1(this, "selection", o, () => {
                    delete t.selection, t.trigger = "zoom", this.transform(t)
                }) : (!p || u || this.resetZoomButton ? !p && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw("zoom" === a && (this.options.chart.animation ? ? this.pointCount < 100)))), d
            }
        }
        nQ(aa.prototype, {
            callbacks: [],
            collectionsWithInit: {
                xAxis: [aa.prototype.addAxis, [!0]],
                yAxis: [aa.prototype.addAxis, [!1]],
                series: [aa.prototype.addSeries]
            },
            collectionsWithUpdate: ["xAxis", "yAxis", "series"],
            propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"],
            propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"],
            propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"]
        });
        let {
            stop: al
        } = t5, {
            composed: ah
        } = B, {
            addEvent: ac,
            createElement: ad,
            css: ap,
            defined: au,
            erase: ag,
            merge: af,
            pushUnique: am
        } = ta;

        function ax() {
            let t = this.scrollablePlotArea;
            (this.scrollablePixelsX || this.scrollablePixelsY) && !t && (this.scrollablePlotArea = t = new ab(this)), t ? .applyFixed()
        }

        function ay() {
            this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0)
        }
        class ab {
            static compose(t, e, i) {
                am(ah, this.compose) && (ac(t, "afterInit", ay), ac(e, "afterSetChartSize", t => this.afterSetSize(t.target, t)), ac(e, "render", ax), ac(i, "show", ay))
            }
            static afterSetSize(t, e) {
                let i, s, r, {
                        minWidth: o,
                        minHeight: n
                    } = t.options.chart.scrollablePlotArea || {},
                    {
                        clipBox: a,
                        plotBox: l,
                        inverted: h,
                        renderer: c
                    } = t;
                if (!c.forExport)
                    if (o ? (t.scrollablePixelsX = i = Math.max(0, o - t.chartWidth), i && (t.scrollablePlotBox = af(t.plotBox), l.width = t.plotWidth += i, a[h ? "height" : "width"] += i, r = !0)) : n && (t.scrollablePixelsY = s = Math.max(0, n - t.chartHeight), au(s) && (t.scrollablePlotBox = af(t.plotBox), l.height = t.plotHeight += s, a[h ? "width" : "height"] += s, r = !1)), au(r)) {
                        if (!e.skipAxes)
                            for (let e of t.axes)(e.horiz === r || t.hasParallelCoordinates && "yAxis" === e.coll) && (e.setAxisSize(), e.setAxisTranslation())
                    } else delete t.scrollablePlotBox
            }
            constructor(t) {
                let e;
                const i = t.options.chart,
                    s = eM.getRendererType(),
                    r = i.scrollablePlotArea || {},
                    o = this.moveFixedElements.bind(this),
                    n = {
                        WebkitOverflowScrolling: "touch",
                        overflowX: "hidden",
                        overflowY: "hidden"
                    };
                t.scrollablePixelsX && (n.overflowX = "auto"), t.scrollablePixelsY && (n.overflowY = "auto"), this.chart = t;
                const a = this.parentDiv = ad("div", {
                        className: "highcharts-scrolling-parent"
                    }, {
                        position: "relative"
                    }, t.renderTo),
                    l = this.scrollingContainer = ad("div", {
                        className: "highcharts-scrolling"
                    }, n, a),
                    h = this.innerContainer = ad("div", {
                        className: "highcharts-inner-container"
                    }, void 0, l),
                    c = this.fixedDiv = ad("div", {
                        className: "highcharts-fixed"
                    }, {
                        position: "absolute",
                        overflow: "hidden",
                        pointerEvents: "none",
                        zIndex: (i.style ? .zIndex || 0) + 2,
                        top: 0
                    }, void 0, !0),
                    d = this.fixedRenderer = new s(c, t.chartWidth, t.chartHeight, i.style);
                this.mask = d.path().attr({
                    fill: i.backgroundColor || "#fff",
                    "fill-opacity": r.opacity ? ? .85,
                    zIndex: -1
                }).addClass("highcharts-scrollable-mask").add(), l.parentNode.insertBefore(c, l), ap(t.renderTo, {
                    overflow: "visible"
                }), ac(t, "afterShowResetZoom", o), ac(t, "afterApplyDrilldown", o), ac(t, "afterLayOutTitles", o), ac(l, "scroll", () => {
                    let {
                        pointer: i,
                        hoverPoint: s
                    } = t;
                    i && (delete i.chartPosition, s && (e = s), i.runPointActions(void 0, e, !0))
                }), h.appendChild(t.container)
            }
            applyFixed() {
                let {
                    chart: t,
                    fixedRenderer: e,
                    isDirty: i,
                    scrollingContainer: s
                } = this, {
                    axisOffset: r,
                    chartWidth: o,
                    chartHeight: n,
                    container: a,
                    plotHeight: l,
                    plotLeft: h,
                    plotTop: c,
                    plotWidth: d,
                    scrollablePixelsX: p = 0,
                    scrollablePixelsY: u = 0
                } = t, {
                    scrollPositionX: g = 0,
                    scrollPositionY: f = 0
                } = t.options.chart.scrollablePlotArea || {}, m = o + p, x = n + u;
                e.setSize(o, n), (i ? ? !0) && (this.isDirty = !1, this.moveFixedElements()), al(t.container), ap(a, {
                    width: `${m}px`,
                    height: `${x}px`
                }), t.renderer.boxWrapper.attr({
                    width: m,
                    height: x,
                    viewBox: ["0 0", m, x].join(" ")
                }), t.chartBackground ? .attr({
                    width: m,
                    height: x
                }), ap(s, {
                    width: `${o}px`,
                    height: `${n}px`
                }), au(i) || (s.scrollLeft = p * g, s.scrollTop = u * f);
                let y = c - r[0] - 1,
                    b = h - r[3] - 1,
                    v = c + l + r[2] + 1,
                    w = h + d + r[1] + 1,
                    k = h + d - p,
                    T = c + l - u,
                    S = [
                        ["M", 0, 0]
                    ];
                p ? S = [
                    ["M", 0, y],
                    ["L", h - 1, y],
                    ["L", h - 1, v],
                    ["L", 0, v],
                    ["Z"],
                    ["M", k, y],
                    ["L", o, y],
                    ["L", o, v],
                    ["L", k, v],
                    ["Z"]
                ] : u && (S = [
                    ["M", b, 0],
                    ["L", b, c - 1],
                    ["L", w, c - 1],
                    ["L", w, 0],
                    ["Z"],
                    ["M", b, T],
                    ["L", b, n],
                    ["L", w, n],
                    ["L", w, T],
                    ["Z"]
                ]), "adjustHeight" !== t.redrawTrigger && this.mask.attr({
                    d: S
                })
            }
            moveFixedElements() {
                let t, {
                        container: e,
                        inverted: i,
                        scrollablePixelsX: s,
                        scrollablePixelsY: r
                    } = this.chart,
                    o = this.fixedRenderer,
                    n = ab.fixedSelectors;
                if (s && !i ? t = ".highcharts-yaxis" : s && i || r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && !(this.chart.hasParallelCoordinates && ".highcharts-yaxis" === t))
                    for (let e of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) am(n, e);
                else
                    for (let t of [".highcharts-xaxis", ".highcharts-yaxis"])
                        for (let e of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) ag(n, e);
                for (let t of n)[].forEach.call(e.querySelectorAll(t), t => {
                    (t.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                })
            }
        }
        ab.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
        let {
            format: av
        } = eS, {
            series: aw
        } = oz, {
            destroyObjectProperties: ak,
            fireEvent: aT,
            getAlignFactor: aS,
            isNumber: aM,
            pick: aC
        } = ta, aA = class {
            constructor(t, e, i, s, r) {
                const o = t.chart.inverted,
                    n = t.reversed;
                this.axis = t;
                const a = this.isNegative = !!i != !!n;
                this.options = e = e || {}, this.x = s, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = r, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
                    align: e.align || (o ? a ? "left" : "right" : "center"),
                    verticalAlign: e.verticalAlign || (o ? "middle" : a ? "bottom" : "top"),
                    y: e.y,
                    x: e.x
                }, this.textAlign = e.textAlign || (o ? a ? "right" : "left" : "center")
            }
            destroy() {
                ak(this, this.axis)
            }
            render(t) {
                let e = this.axis.chart,
                    i = this.options,
                    s = i.format,
                    r = s ? av(s, this, e) : i.formatter.call(this);
                if (this.label) this.label.attr({
                    text: r,
                    visibility: "hidden"
                });
                else {
                    this.label = e.renderer.label(r, null, void 0, i.shape, void 0, void 0, i.useHTML, !1, "stack-labels");
                    let s = {
                        r: i.borderRadius || 0,
                        text: r,
                        padding: aC(i.padding, 5),
                        visibility: "hidden"
                    };
                    e.styledMode || (s.fill = i.backgroundColor, s.stroke = i.borderColor, s["stroke-width"] = i.borderWidth, this.label.css(i.style || {})), this.label.attr(s), this.label.added || this.label.add(t)
                }
                this.label.labelrank = e.plotSizeY, aT(this, "afterRender")
            }
            setOffset(t, e, i, s, r, o) {
                let {
                    alignOptions: n,
                    axis: a,
                    label: l,
                    options: h,
                    textAlign: c
                } = this, d = a.chart, p = this.getStackBox({
                    xOffset: t,
                    width: e,
                    boxBottom: i,
                    boxTop: s,
                    defaultX: r,
                    xAxis: o
                }), {
                    verticalAlign: u
                } = n;
                if (l && p) {
                    let t = l.getBBox(void 0, 0),
                        e = l.padding,
                        i = "justify" === aC(h.overflow, "justify"),
                        s;
                    n.x = h.x || 0, n.y = h.y || 0;
                    let {
                        x: r,
                        y: o
                    } = this.adjustStackPosition({
                        labelBox: t,
                        verticalAlign: u,
                        textAlign: c
                    });
                    p.x -= r, p.y -= o, l.align(n, !1, p), (s = d.isInsidePlot(l.alignAttr.x + n.x + r, l.alignAttr.y + n.y + o)) || (i = !1), i && aw.prototype.justifyDataLabel.call(a, l, n, l.alignAttr, t, p), l.attr({
                        x: l.alignAttr.x,
                        y: l.alignAttr.y,
                        rotation: h.rotation,
                        rotationOriginX: t.width * aS(h.textAlign || "center"),
                        rotationOriginY: t.height / 2
                    }), aC(!i && h.crop, !0) && (s = aM(l.x) && aM(l.y) && d.isInsidePlot(l.x - e + (l.width || 0), l.y) && d.isInsidePlot(l.x + e, l.y)), l[s ? "show" : "hide"]()
                }
                aT(this, "afterSetOffset", {
                    xOffset: t,
                    width: e
                })
            }
            adjustStackPosition({
                labelBox: t,
                verticalAlign: e,
                textAlign: i
            }) {
                return {
                    x: t.width / 2 + t.width / 2 * (2 * aS(i) - 1),
                    y: t.height / 2 * 2 * (1 - aS(e))
                }
            }
            getStackBox(t) {
                let e = this.axis,
                    i = e.chart,
                    {
                        boxTop: s,
                        defaultX: r,
                        xOffset: o,
                        width: n,
                        boxBottom: a
                    } = t,
                    l = e.stacking.usePercentage ? 100 : aC(s, this.total, 0),
                    h = e.toPixels(l),
                    c = t.xAxis || i.xAxis[0],
                    d = aC(r, c.translate(this.x)) + o,
                    p = Math.abs(h - e.toPixels(a || aM(e.min) && e.logarithmic && e.logarithmic.lin2log(e.min) || 0)),
                    u = i.inverted,
                    g = this.isNegative;
                return u ? {
                    x: (g ? h : h - p) - i.plotLeft,
                    y: c.height - d - n + c.top - i.plotTop,
                    width: p,
                    height: n
                } : {
                    x: d + c.transB - i.plotLeft,
                    y: (g ? h - p : h) - i.plotTop,
                    width: n,
                    height: p
                }
            }
        }, {
            getDeferredAnimation: aE
        } = t5, {
            series: {
                prototype: aO
            }
        } = oz, {
            addEvent: aL,
            correctFloat: aP,
            defined: aN,
            destroyObjectProperties: aI,
            fireEvent: aR,
            isNumber: aD,
            objectEach: aB,
            pick: aj
        } = ta;

        function az() {
            let t = this.inverted;
            this.axes.forEach(t => {
                t.stacking ? .stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks)
            }), this.series.forEach(e => {
                let i = e.xAxis ? .options || {};
                e.options.stacking && e.reserveSpace() && (e.stackKey = [e.type, aj(e.options.stack, ""), t ? i.top : i.left, t ? i.height : i.width].join(","))
            })
        }

        function a_() {
            let t = this.stacking;
            if (t) {
                let e = t.stacks;
                aB(e, (t, i) => {
                    aI(t), delete e[i]
                }), t.stackTotalGroup ? .destroy()
            }
        }

        function aW() {
            this.stacking || (this.stacking = new a$(this))
        }

        function aH(t, e, i, s) {
            return !aN(t) || t.x !== e || s && t.stackKey !== s ? t = {
                x: e,
                index: 0,
                key: s,
                stackKey: s
            } : t.index++, t.key = [i, e, t.index].join(","), t
        }

        function aF() {
            let t, e = this,
                i = e.yAxis,
                s = e.stackKey || "",
                r = i.stacking.stacks,
                o = e.getColumn("x", !0),
                n = e.options.stacking,
                a = e[n + "Stacker"];
            a && [s, "-" + s].forEach(i => {
                let s = o.length,
                    n, l, h;
                for (; s--;) n = o[s], t = e.getStackIndicator(t, n, e.index, i), l = r[i] ? .[n], (h = l ? .points[t.key || ""]) && a.call(e, h, l, s)
            })
        }

        function aX(t, e, i) {
            let s = e.total ? 100 / e.total : 0;
            t[0] = aP(t[0] * s), t[1] = aP(t[1] * s), this.stackedYData[i] = t[1]
        }

        function aY(t) {
            (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? aO.setStackedPoints.call(this, t, "group") : t.stacking.resetStacks())
        }

        function aG(t, e) {
            let i, s, r, o, n, a, l, h = e || this.options.stacking;
            if (!h || !this.reserveSpace() || (({
                    group: "xAxis"
                })[h] || "yAxis") !== t.coll) return;
            let c = this.getColumn("x", !0),
                d = this.getColumn(this.pointValKey || "y", !0),
                p = [],
                u = d.length,
                g = this.options,
                f = g.threshold || 0,
                m = g.startFromThreshold ? f : 0,
                x = g.stack,
                y = e ? `${this.type},${h}` : this.stackKey || "",
                b = "-" + y,
                v = this.negStacks,
                w = t.stacking,
                k = w.stacks,
                T = w.oldStacks;
            for (w.stacksTouched += 1, l = 0; l < u; l++) {
                let e = c[l] || 0,
                    u = d[l],
                    g = aD(u) && u || 0;
                a = (i = this.getStackIndicator(i, e, this.index)).key || "", k[n = (s = v && g < (m ? 0 : f)) ? b : y] || (k[n] = {}), k[n][e] || (T[n] ? .[e] ? (k[n][e] = T[n][e], k[n][e].total = null) : k[n][e] = new aA(t, t.options.stackLabels, !!s, e, x)), r = k[n][e], null !== u ? (r.points[a] = r.points[this.index] = [aj(r.cumulative, m)], aN(r.cumulative) || (r.base = a), r.touched = w.stacksTouched, i.index > 0 && !1 === this.singleStacks && (r.points[a][0] = r.points[this.index + "," + e + ",0"][0])) : (delete r.points[a], delete r.points[this.index]);
                let S = r.total || 0;
                "percent" === h ? (o = s ? y : b, S = v && k[o] ? .[e] ? (o = k[o][e]).total = Math.max(o.total || 0, S) + Math.abs(g) : aP(S + Math.abs(g))) : "group" === h ? aD(u) && S++ : S = aP(S + g), "group" === h ? r.cumulative = (S || 1) - 1 : r.cumulative = aP(aj(r.cumulative, m) + g), r.total = S, null !== u && (r.points[a].push(r.cumulative), p[l] = r.cumulative, r.hasValidPoints = !0)
            }
            "percent" === h && (w.usePercentage = !0), "group" !== h && (this.stackedYData = p), w.oldStacks = {}
        }
        class a$ {
            constructor(t) {
                this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t
            }
            buildStacks() {
                let t, e, i = this.axis,
                    s = i.series,
                    r = "xAxis" === i.coll,
                    o = i.options.reversedStacks,
                    n = s.length;
                for (this.resetStacks(), this.usePercentage = !1, e = n; e--;) t = s[o ? e : n - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
                if (!r)
                    for (e = 0; e < n; e++) s[e].modifyStacks();
                aR(i, "afterBuildStacks")
            }
            cleanStacks() {
                this.oldStacks && (this.stacks = this.oldStacks, aB(this.stacks, t => {
                    aB(t, t => {
                        t.cumulative = t.total
                    })
                }))
            }
            resetStacks() {
                aB(this.stacks, t => {
                    aB(t, (e, i) => {
                        aD(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null)
                    })
                })
            }
            renderStackTotals() {
                let t = this.axis,
                    e = t.chart,
                    i = e.renderer,
                    s = this.stacks,
                    r = aE(e, t.options.stackLabels ? .animation || !1),
                    o = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({
                        zIndex: 6,
                        opacity: 0
                    }).add();
                o.translate(e.plotLeft, e.plotTop), aB(s, t => {
                    aB(t, t => {
                        t.render(o)
                    })
                }), o.animate({
                    opacity: 1
                }, r)
            }
        }(A || (A = {})).compose = function(t, e, i) {
            let s = e.prototype,
                r = i.prototype;
            s.getStacks || (aL(t, "init", aW), aL(t, "destroy", a_), s.getStacks = az, r.getStackIndicator = aH, r.modifyStacks = aF, r.percentStacker = aX, r.setGroupedPoints = aY, r.setStackedPoints = aG)
        };
        let aU = A,
            {
                defined: aV,
                merge: aq,
                isObject: aK
            } = ta;
        class aZ extends nl {
            drawGraph() {
                let t = this.options,
                    e = (this.gappedPath || this.getGraphPath).call(this),
                    i = this.chart.styledMode;
                [this, ...this.zones].forEach((s, r) => {
                    let o, n = s.graph,
                        a = n ? "animate" : "attr",
                        l = s.dashStyle || t.dashStyle;
                    n ? (n.endX = this.preventGraphAnimation ? null : e.xMap, n.animate({
                        d: e
                    })) : e.length && (s.graph = n = this.chart.renderer.path(e).addClass("highcharts-graph" + (r ? ` highcharts-zone-graph-${r-1} ` : " ") + (r && s.className || "")).attr({
                        zIndex: 1
                    }).add(this.group)), n && !i && (o = {
                        stroke: !r && t.lineColor || s.color || this.color || "#cccccc",
                        "stroke-width": t.lineWidth || 0,
                        fill: this.fillGraph && this.color || "none"
                    }, l ? o.dashstyle = l : "square" !== t.linecap && (o["stroke-linecap"] = o["stroke-linejoin"] = "round"), n[a](o).shadow(t.shadow && aq({
                        filterUnits: "userSpaceOnUse"
                    }, aK(t.shadow) ? t.shadow : {}))), n && (n.startX = e.xMap, n.isArea = e.isArea)
                })
            }
            getGraphPath(t, e, i) {
                let s = this,
                    r = s.options,
                    o = [],
                    n = [],
                    a, l = r.step,
                    h = (t = t || s.points).reversed;
                return h && t.reverse(), (l = ({
                    right: 1,
                    center: 2
                })[l] || l && 3) && h && (l = 4 - l), (t = this.getValidPoints(t, !1, r.nullInteraction || !(r.connectNulls && !e && !i))).forEach(function(h, c) {
                    let d, p = h.plotX,
                        u = h.plotY,
                        g = t[c - 1],
                        f = h.isNull || "number" != typeof u;
                    (h.leftCliff || g ? .rightCliff) && !i && (a = !0), f && !aV(e) && c > 0 ? a = !r.connectNulls : f && !e ? a = !0 : (0 === c || a ? d = [
                        ["M", h.plotX, h.plotY]
                    ] : s.getPointSpline ? d = [s.getPointSpline(t, h, c)] : l ? (d = 1 === l ? [
                        ["L", g.plotX, u]
                    ] : 2 === l ? [
                        ["L", (g.plotX + p) / 2, g.plotY],
                        ["L", (g.plotX + p) / 2, u]
                    ] : [
                        ["L", p, g.plotY]
                    ]).push(["L", p, u]) : d = [
                        ["L", p, u]
                    ], n.push(h.x), l && (n.push(h.x), 2 === l && n.push(h.x)), o.push.apply(o, d), a = !1)
                }), o.xMap = n, s.graphPath = o, o
            }
        }
        aZ.defaultOptions = aq(nl.defaultOptions, {
            legendSymbol: "lineMarker"
        }), oz.registerSeriesType("line", aZ);
        let {
            seriesTypes: {
                line: aJ
            }
        } = oz, {
            extend: aQ,
            merge: a0,
            objectEach: a1,
            pick: a2
        } = ta;
        class a3 extends aJ {
            drawGraph() {
                this.areaPath = [], super.drawGraph.apply(this);
                let {
                    areaPath: t,
                    options: e
                } = this;
                [this, ...this.zones].forEach((i, s) => {
                    let r = {},
                        o = i.fillColor || e.fillColor,
                        n = i.area,
                        a = n ? "animate" : "attr";
                    n ? (n.endX = this.preventGraphAnimation ? null : t.xMap, n.animate({
                        d: t
                    })) : (r.zIndex = 0, (n = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s-1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = o || i.color || this.color, r["fill-opacity"] = o ? 1 : e.fillOpacity ? ? .75, n.css({
                        pointerEvents: this.stickyTracking ? "none" : "auto"
                    })), n[a](r), n.startX = t.xMap, n.shiftUnit = e.step ? 2 : 1
                })
            }
            getGraphPath(t) {
                let e, i, s, r = aJ.prototype.getGraphPath,
                    o = this.options,
                    n = o.stacking,
                    a = this.yAxis,
                    l = [],
                    h = [],
                    c = this.index,
                    d = a.stacking.stacks[this.stackKey],
                    p = o.threshold,
                    u = Math.round(a.getThreshold(o.threshold)),
                    g = a2(o.connectNulls, "percent" === n),
                    f = function(i, s, r) {
                        let o = t[i],
                            g = n && d[o.x].points[c],
                            f = o[r + "Null"] || 0,
                            m = o[r + "Cliff"] || 0,
                            x, y, b = !0;
                        m || f ? (x = (f ? g[0] : g[1]) + m, y = g[0] + m, b = !!f) : !n && t[s] && t[s].isNull && (x = y = p), void 0 !== x && (h.push({
                            plotX: e,
                            plotY: null === x ? u : a.getThreshold(x),
                            isNull: b,
                            isCliff: !0
                        }), l.push({
                            plotX: e,
                            plotY: null === y ? u : a.getThreshold(y),
                            doCurve: !1
                        }))
                    };
                t = t || this.points, n && (t = this.getStackPoints(t));
                for (let r = 0, o = t.length; r < o; ++r) n || (t[r].leftCliff = t[r].rightCliff = t[r].leftNull = t[r].rightNull = void 0), i = t[r].isNull, e = a2(t[r].rectPlotX, t[r].plotX), s = n ? a2(t[r].yBottom, u) : u, (!i || g) && (g || f(r, r - 1, "left"), i && !n && g || (h.push(t[r]), l.push({
                    x: r,
                    plotX: e,
                    plotY: s
                })), g || f(r, r + 1, "right"));
                let m = r.call(this, h, !0, !0);
                l.reversed = !0;
                let x = r.call(this, l, !0, !0),
                    y = x[0];
                y && "M" === y[0] && (x[0] = ["L", y[1], y[2]]);
                let b = m.concat(x);
                b.length && b.push(["Z"]);
                let v = r.call(this, h, !1, g);
                return this.chart.series.length > 1 && n && h.some(t => t.isCliff) && (b.hasStackedCliffs = v.hasStackedCliffs = !0), b.xMap = m.xMap, this.areaPath = b, v
            }
            getStackPoints(t) {
                let e = this,
                    i = [],
                    s = [],
                    r = this.xAxis,
                    o = this.yAxis,
                    n = o.stacking.stacks[this.stackKey],
                    a = {},
                    l = o.series,
                    h = l.length,
                    c = o.options.reversedStacks ? 1 : -1,
                    d = l.indexOf(e);
                if (t = t || this.points, this.options.stacking) {
                    for (let e = 0; e < t.length; e++) t[e].leftNull = t[e].rightNull = void 0, a[t[e].x] = t[e];
                    a1(n, function(t, e) {
                        null !== t.total && s.push(e)
                    }), s.sort(function(t, e) {
                        return t - e
                    });
                    let p = l.map(t => t.visible);
                    s.forEach(function(t, u) {
                        let g = 0,
                            f, m;
                        if (a[t] && !a[t].isNull) i.push(a[t]), [-1, 1].forEach(function(i) {
                            let r = 1 === i ? "rightNull" : "leftNull",
                                o = n[s[u + i]],
                                g = 0;
                            if (o) {
                                let i = d;
                                for (; i >= 0 && i < h;) {
                                    let s = l[i].index;
                                    !(f = o.points[s]) && (s === e.index ? a[t][r] = !0 : p[i] && (m = n[t].points[s]) && (g -= m[1] - m[0])), i += c
                                }
                            }
                            a[t][1 === i ? "rightCliff" : "leftCliff"] = g
                        });
                        else {
                            let e = d;
                            for (; e >= 0 && e < h;) {
                                let i = l[e].index;
                                if (f = n[t].points[i]) {
                                    g = f[1];
                                    break
                                }
                                e += c
                            }
                            g = a2(g, 0), g = o.translate(g, 0, 1, 0, 1), i.push({
                                isNull: !0,
                                plotX: r.translate(t, 0, 0, 0, 1),
                                x: t,
                                plotY: g,
                                yBottom: g
                            })
                        }
                    })
                }
                return i
            }
        }
        a3.defaultOptions = a0(aJ.defaultOptions, {
            threshold: 0,
            legendSymbol: "areaMarker"
        }), aQ(a3.prototype, {
            singleStacks: !1
        }), oz.registerSeriesType("area", a3);
        let {
            line: a5
        } = oz.seriesTypes, {
            merge: a6,
            pick: a4
        } = ta;
        class a9 extends a5 {
            getPointSpline(t, e, i) {
                let s, r, o, n, a = e.plotX || 0,
                    l = e.plotY || 0,
                    h = t[i - 1],
                    c = t[i + 1];

                function d(t) {
                    return t && !t.isNull && !1 !== t.doCurve && !e.isCliff
                }
                if (d(h) && d(c)) {
                    let t = h.plotX || 0,
                        i = h.plotY || 0,
                        d = c.plotX || 0,
                        p = c.plotY || 0,
                        u = 0;
                    s = (1.5 * a + t) / 2.5, r = (1.5 * l + i) / 2.5, o = (1.5 * a + d) / 2.5, n = (1.5 * l + p) / 2.5, o !== s && (u = (n - r) * (o - a) / (o - s) + l - n), r += u, n += u, r > i && r > l ? (r = Math.max(i, l), n = 2 * l - r) : r < i && r < l && (r = Math.min(i, l), n = 2 * l - r), n > p && n > l ? (n = Math.max(p, l), r = 2 * l - n) : n < p && n < l && (n = Math.min(p, l), r = 2 * l - n), e.rightContX = o, e.rightContY = n, e.controlPoints = {
                        low: [s, r],
                        high: [o, n]
                    }
                }
                let p = ["C", a4(h.rightContX, h.plotX, 0), a4(h.rightContY, h.plotY, 0), a4(s, a, 0), a4(r, l, 0), a, l];
                return h.rightContX = h.rightContY = void 0, p
            }
        }
        a9.defaultOptions = a6(a5.defaultOptions), oz.registerSeriesType("spline", a9);
        let a7 = a9,
            {
                area: a8,
                area: {
                    prototype: lt
                }
            } = oz.seriesTypes,
            {
                extend: le,
                merge: li
            } = ta;
        class ls extends a7 {}
        ls.defaultOptions = li(a7.defaultOptions, a8.defaultOptions), le(ls.prototype, {
            getGraphPath: lt.getGraphPath,
            getStackPoints: lt.getStackPoints,
            drawGraph: lt.drawGraph
        }), oz.registerSeriesType("areaspline", ls);
        let {
            animObject: lr
        } = t5, {
            parse: lo
        } = tF, {
            noop: ln
        } = B, {
            clamp: la,
            crisp: ll,
            defined: lh,
            extend: lc,
            fireEvent: ld,
            isArray: lp,
            isNumber: lu,
            merge: lg,
            pick: lf,
            objectEach: lm
        } = ta;
        class lx extends nl {
            animate(t) {
                let e, i, s = this,
                    r = this.yAxis,
                    o = r.pos,
                    n = r.reversed,
                    a = s.options,
                    {
                        clipOffset: l,
                        inverted: h
                    } = this.chart,
                    c = {},
                    d = h ? "translateX" : "translateY";
                t && l ? (c.scaleY = .001, i = la(r.toPixels(a.threshold || 0), o, o + r.len), h ? c.translateX = (i += n ? -Math.floor(l[0]) : Math.ceil(l[2])) - r.len : c.translateY = i += n ? Math.ceil(l[0]) : -Math.floor(l[2]), s.clipBox && s.setClip(), s.group.attr(c)) : (e = Number(s.group.attr(d)), s.group.animate({
                    scaleY: 1
                }, lc(lr(s.options.animation), {
                    step: function(t, i) {
                        s.group && (c[d] = e + i.pos * (o - e), s.group.attr(c))
                    }
                })))
            }
            init(t, e) {
                super.init.apply(this, arguments);
                let i = this;
                (t = i.chart).hasRendered && t.series.forEach(function(t) {
                    t.type === i.type && (t.isDirty = !0)
                })
            }
            getColumnMetrics() {
                let t = this,
                    e = t.options,
                    i = t.xAxis,
                    s = t.yAxis,
                    r = i.options.reversedStacks,
                    o = i.reversed && !r || !i.reversed && r,
                    n = {},
                    a, l = 0;
                !1 === e.grouping ? l = 1 : t.chart.series.forEach(function(e) {
                    let i, r = e.yAxis,
                        o = e.options;
                    e.type === t.type && e.reserveSpace() && s.len === r.len && s.pos === r.pos && (o.stacking && "group" !== o.stacking ? (void 0 === n[a = e.stackKey] && (n[a] = l++), i = n[a]) : !1 !== o.grouping && (i = l++), e.columnIndex = i)
                });
                let h = Math.min(Math.abs(i.transA) * (!i.brokenAxis ? .hasBreaks && i.ordinal ? .slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len),
                    c = h * e.groupPadding,
                    d = (h - 2 * c) / (l || 1),
                    p = Math.min(e.maxPointWidth || i.len, lf(e.pointWidth, d * (1 - 2 * e.pointPadding))),
                    u = (t.columnIndex || 0) + +!!o;
                return t.columnMetrics = {
                    width: p,
                    offset: (d - p) / 2 + (c + u * d - h / 2) * (o ? -1 : 1),
                    paddedWidth: d,
                    columnCount: l
                }, t.columnMetrics
            }
            crispCol(t, e, i, s) {
                let r = this.borderWidth,
                    o = this.chart.inverted;
                return s = ll(e + s, r, o) - (e = ll(e, r, o)), this.options.crisp && (i = ll(t + i, r) - (t = ll(t, r))), {
                    x: t,
                    y: e,
                    width: i,
                    height: s
                }
            }
            adjustForMissingColumns(t, e, i, s) {
                if (!i.isNull && s.columnCount > 1) {
                    let r = this.xAxis.series.filter(t => t.visible).map(t => t.index),
                        o = 0,
                        n = 0;
                    lm(this.xAxis.stacking ? .stacks, t => {
                        let e = "number" == typeof i.x ? t[i.x.toString()] ? .points : void 0,
                            s = e ? .[this.index],
                            a = {};
                        if (e && lp(s)) {
                            let t = this.index,
                                i = Object.keys(e).filter(t => !t.match(",") && e[t] && e[t].length > 1).map(parseFloat).filter(t => -1 !== r.indexOf(t)).filter(e => {
                                    let i = this.chart.series[e].options,
                                        s = i.stacking && i.stack;
                                    if (lh(s)) {
                                        if (lu(a[s])) return t === e && (t = a[s]), !1;
                                        a[s] = e
                                    }
                                    return !0
                                }).sort((t, e) => e - t);
                            o = i.indexOf(t), n = i.length
                        }
                    }), o = this.xAxis.reversed ? n - 1 - o : o;
                    let a = (n - 1) * s.paddedWidth + e;
                    t = (i.plotX || 0) + a / 2 - e - o * s.paddedWidth
                }
                return t
            }
            translate() {
                let t = this,
                    e = t.chart,
                    i = t.options,
                    s = t.dense = t.closestPointRange * t.xAxis.transA < 2,
                    r = t.borderWidth = lf(i.borderWidth, +!s),
                    o = t.xAxis,
                    n = t.yAxis,
                    a = i.threshold,
                    l = lf(i.minPointLength, 5),
                    h = t.getColumnMetrics(),
                    c = h.width,
                    d = t.pointXOffset = h.offset,
                    p = t.dataMin,
                    u = t.dataMax,
                    g = t.translatedThreshold = n.getThreshold(a),
                    f = t.barW = Math.max(c, 1 + 2 * r);
                i.pointPadding && i.crisp && (f = Math.ceil(f)), nl.prototype.translate.apply(t), t.points.forEach(function(s) {
                    let r = lf(s.yBottom, g),
                        m = 999 + Math.abs(r),
                        x = s.plotX || 0,
                        y = la(s.plotY, -m, n.len + m),
                        b, v = Math.min(y, r),
                        w = Math.max(y, r) - v,
                        k = c,
                        T = x + d,
                        S = f;
                    l && Math.abs(w) < l && (w = l, b = !n.reversed && !s.negative || n.reversed && s.negative, lu(a) && lu(u) && s.y === a && u <= a && (n.min || 0) < a && (p !== u || (n.max || 0) <= a) && (b = !b, s.negative = !s.negative), v = Math.abs(v - g) > l ? r - l : g - (b ? l : 0)), lh(s.options.pointWidth) && (T -= Math.round(((k = S = Math.ceil(s.options.pointWidth)) - c) / 2)), i.centerInCategory && (T = t.adjustForMissingColumns(T, k, s, h)), s.barX = T, s.pointWidth = k, s.tooltipPos = e.inverted ? [la(n.len + n.pos - e.plotLeft - y, n.pos - e.plotLeft, n.len + n.pos - e.plotLeft), o.len + o.pos - e.plotTop - T - S / 2, w] : [o.left - e.plotLeft + T + S / 2, la(y + n.pos - e.plotTop, n.pos - e.plotTop, n.len + n.pos - e.plotTop), w], s.shapeType = t.pointClass.prototype.shapeType || "roundedRect", s.shapeArgs = t.crispCol(T, v, S, s.isNull ? 0 : w)
                }), ld(this, "afterColumnTranslate")
            }
            drawGraph() {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
            }
            pointAttribs(t, e) {
                let i = this.options,
                    s = this.pointAttrToOptions || {},
                    r = s.stroke || "borderColor",
                    o = s["stroke-width"] || "borderWidth",
                    n, a, l, h = t && t.color || this.color,
                    c = t && t[r] || i[r] || h,
                    d = t && t.options.dashStyle || i.dashStyle,
                    p = t && t[o] || i[o] || this[o] || 0,
                    u = t ? .isNull && i.nullInteraction ? 0 : t ? .opacity ? ? i.opacity ? ? 1;
                t && this.zones.length && (a = t.getZone(), h = t.options.color || a && (a.color || t.nonZonedColor) || this.color, a && (c = a.borderColor || c, d = a.dashStyle || d, p = a.borderWidth || p)), e && t && (l = (n = lg(i.states[e], t.options.states ? .[e] || {})).brightness, h = n.color || void 0 !== l && lo(h).brighten(n.brightness).get() || h, c = n[r] || c, p = n[o] || p, d = n.dashStyle || d, u = lf(n.opacity, u));
                let g = {
                    fill: h,
                    stroke: c,
                    "stroke-width": p,
                    opacity: u
                };
                return d && (g.dashstyle = d), g
            }
            drawPoints(t = this.points) {
                let e, i = this,
                    s = this.chart,
                    r = i.options,
                    o = r.nullInteraction,
                    n = s.renderer,
                    a = r.animationLimit || 250;
                t.forEach(function(t) {
                    let l = t.plotY,
                        h = t.graphic,
                        c = !!h,
                        d = h && s.pointCount < a ? "animate" : "attr";
                    lu(l) && (null !== t.y || o) ? (e = t.shapeArgs, h && t.hasNewShapeType() && (h = h.destroy()), i.enabledDataSorting && (t.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !h && (t.graphic = h = n[t.shapeType](e).add(t.group || i.group), h && i.enabledDataSorting && s.hasRendered && s.pointCount < a && (h.attr({
                        x: t.startXPos
                    }), c = !0, d = "animate")), h && c && h[d](lg(e)), s.styledMode || h[d](i.pointAttribs(t, t.selected && "select")).shadow(!1 !== t.allowShadow && r.shadow), h && (h.addClass(t.getClassName(), !0), h.attr({
                        visibility: t.visible ? "inherit" : "hidden"
                    }))) : h && (t.graphic = h.destroy())
                })
            }
            drawTracker(t = this.points) {
                let e, i = this,
                    s = i.chart,
                    r = s.pointer,
                    o = function(t) {
                        r ? .normalize(t);
                        let e = r ? .getPointFromEvent(t);
                        r && e && i.options.enableMouseTracking && (s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                            visiblePlotOnly: !0
                        }) || r ? .inClass(t.target, "highcharts-data-label")) && (r.isDirectTouch = !0, e.onMouseOver(t))
                    };
                t.forEach(function(t) {
                    e = lp(t.dataLabels) ? t.dataLabels : t.dataLabel ? [t.dataLabel] : [], t.graphic && (t.graphic.element.point = t), e.forEach(function(e) {
                        (e.div || e.element).point = t
                    })
                }), i._hasTracking || (i.trackerGroups ? .reduce((t, e) => ("dataLabelsGroup" === e ? t.push(...i.dataLabelsGroups || []) : t.push(i[e]), t), []).forEach(t => {
                    t && (t.addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(t) {
                        r ? .onTrackerMouseOut(t)
                    }).on("touchstart", o), !s.styledMode && i.options.cursor && t.css({
                        cursor: i.options.cursor
                    }))
                }), i._hasTracking = !0), ld(this, "afterDrawTracker")
            }
            remove() {
                let t = this,
                    e = t.chart;
                e.hasRendered && e.series.forEach(function(e) {
                    e.type === t.type && (e.isDirty = !0)
                }), nl.prototype.remove.apply(t, arguments)
            }
        }
        lx.defaultOptions = lg(nl.defaultOptions, {
            borderRadius: 3,
            centerInCategory: !1,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {
                    halo: !1,
                    brightness: .1
                },
                select: {
                    color: "#cccccc",
                    borderColor: "#000000"
                }
            },
            dataLabels: {
                align: void 0,
                verticalAlign: void 0,
                y: void 0
            },
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {
                distance: 6
            },
            threshold: 0,
            borderColor: "#ffffff"
        }), lc(lx.prototype, {
            directTouch: !0,
            getSymbol: ln,
            negStacks: !0,
            trackerGroups: ["group", "dataLabelsGroup"]
        }), oz.registerSeriesType("column", lx);
        let ly = lx,
            {
                getDeferredAnimation: lb
            } = t5,
            {
                format: lv
            } = eS,
            {
                defined: lw,
                extend: lk,
                fireEvent: lT,
                getAlignFactor: lS,
                isArray: lM,
                isString: lC,
                merge: lA,
                objectEach: lE,
                pick: lO,
                pInt: lL,
                splat: lP
            } = ta;
        ! function(t) {
            function e() {
                return l(this).some(t => t ? .enabled)
            }

            function i(t, e, i, s, r) {
                let {
                    chart: o,
                    enabledDataSorting: n
                } = this, a = this.isCartesian && o.inverted, l = t.plotX, h = t.plotY, c = i.rotation || 0, d = lw(l) && lw(h) && o.isInsidePlot(l, Math.round(h), {
                    inverted: a,
                    paneCoordinates: !0,
                    series: this
                }), p = 0 === c && "justify" === lO(i.overflow, n ? "none" : "justify"), u = this.visible && !1 !== t.visible && lw(l) && (t.series.forceDL || n && !p || d || lO(i.inside, !!this.options.stacking) && s && o.isInsidePlot(l, a ? s.x + 1 : s.y + s.height - 1, {
                    inverted: a,
                    paneCoordinates: !0,
                    series: this
                })), g = t.pos();
                if (u && g) {
                    var f;
                    let l = e.getBBox(),
                        h = e.getBBox(void 0, 0);
                    if (s = lk({
                            x: g[0],
                            y: Math.round(g[1]),
                            width: 0,
                            height: 0
                        }, s || {}), "plotEdges" === i.alignTo && this.isCartesian && (s[a ? "x" : "y"] = 0, s[a ? "width" : "height"] = this.yAxis ? .len || 0), lk(i, {
                            width: l.width,
                            height: l.height
                        }), f = s, n && this.xAxis && !p && this.setDataLabelStartPos(t, e, r, d, f), e.align(lA(i, {
                            width: h.width,
                            height: h.height
                        }), !1, s, !1), e.alignAttr.x += lS(i.align) * (h.width - l.width), e.alignAttr.y += lS(i.verticalAlign) * (h.height - l.height), e[e.placed ? "animate" : "attr"]({
                            "text-align": e.alignAttr["text-align"] || "center",
                            x: e.alignAttr.x + (l.width - h.width) / 2,
                            y: e.alignAttr.y + (l.height - h.height) / 2,
                            rotationOriginX: (e.width || 0) / 2,
                            rotationOriginY: (e.height || 0) / 2
                        }), p && s.height >= 0) this.justifyDataLabel(e, i, e.alignAttr, l, s, r);
                    else if (lO(i.crop, !0)) {
                        let {
                            x: t,
                            y: i
                        } = e.alignAttr;
                        u = o.isInsidePlot(t, i, {
                            paneCoordinates: !0,
                            series: this
                        }) && o.isInsidePlot(t + l.width - 1, i + l.height - 1, {
                            paneCoordinates: !0,
                            series: this
                        })
                    }
                    i.shape && !c && e[r ? "attr" : "animate"]({
                        anchorX: g[0],
                        anchorY: g[1]
                    })
                }
                r && n && (e.placed = !1), u || n && !p ? (e.show(), e.placed = !0) : (e.hide(), e.placed = !1)
            }

            function s(t, e) {
                lT(this, "initDataLabelsGroup", {
                    index: t,
                    zIndex: e ? .zIndex ? ? 6
                }), this.dataLabelsGroup = this.dataLabelsGroups ? .[t];
                let i = this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", e ? .zIndex ? ? 6, this.dataLabelsParentGroups ? .[t]);
                return this.dataLabelsGroups || (this.dataLabelsGroups = []), this.dataLabelsGroups[t] = i, this.dataLabelsGroup = this.dataLabelsGroups[0], i
            }

            function r(t, e, i) {
                let s = !!this.hasRendered,
                    r = this.initDataLabelsGroup(t, i).attr({
                        opacity: +s
                    });
                return !s && r && (this.visible && r.show(), this.options.animation ? r.animate({
                    opacity: 1
                }, e) : r.attr({
                    opacity: 1
                })), r
            }

            function o(t) {
                let e;
                t = t || this.points;
                let i = this,
                    s = i.chart,
                    r = i.options,
                    o = s.renderer,
                    {
                        backgroundColor: n,
                        plotBackgroundColor: h
                    } = s.options.chart,
                    c = o.getContrast(lC(h) && h || lC(n) && n || "#000000"),
                    d = l(i),
                    {
                        animation: p,
                        defer: u
                    } = d[0],
                    g = u ? lb(s, p, i) : {
                        defer: 0,
                        duration: 0
                    };
                lT(this, "drawDataLabels"), i.hasDataLabels ? .() && t.forEach(t => {
                    let n = t.dataLabels || [],
                        l = t.color || i.color;
                    lP(a(d, t.dlOptions || t.options ? .dataLabels)).forEach((a, h) => {
                        e = this.initDataLabels(h, g, a);
                        let d = a.enabled && (t.visible || t.dataLabelOnHidden) && (!t.isNull || t.dataLabelOnNull) && function(t, e) {
                                let i = e.filter;
                                if (i) {
                                    let e = i.operator,
                                        s = t[i.property],
                                        r = i.value;
                                    return ">" === e && s > r || "<" === e && s < r || ">=" === e && s >= r || "<=" === e && s <= r || "==" === e && s == r || "===" === e && s === r || "!=" === e && s != r || "!==" === e && s !== r || !1
                                }
                                return !0
                            }(t, a),
                            {
                                backgroundColor: p,
                                borderColor: u,
                                distance: f,
                                style: m = {}
                            } = a,
                            x, y, b, v = {},
                            w = n[h],
                            k = !w,
                            T;
                        d && (y = lw(x = lO(a[t.formatPrefix + "Format"], a.format)) ? lv(x, t, s) : (a[t.formatPrefix + "Formatter"] || a.formatter).call(t, a), b = a.rotation, !s.styledMode && (m.color = lO(a.color, m.color, lC(i.color) ? i.color : void 0, "#000000"), "contrast" === m.color ? ("none" !== p && (T = p), t.contrastColor = o.getContrast("auto" !== T && lC(T) && T || (lC(l) ? l : "")), m.color = T || !lw(f) && a.inside || 0 > lL(f || 0) || r.stacking ? t.contrastColor : c) : delete t.contrastColor, r.cursor && (m.cursor = r.cursor)), v = {
                            r: a.borderRadius || 0,
                            rotation: b,
                            padding: a.padding,
                            zIndex: 1
                        }, s.styledMode || (v.fill = "auto" === p ? t.color : p, v.stroke = "auto" === u ? t.color : u, v["stroke-width"] = a.borderWidth), lE(v, (t, e) => {
                            void 0 === t && delete v[e]
                        })), !w || d && lw(y) && !!(w.div || w.text ? .foreignObject) == !!a.useHTML && (w.rotation && a.rotation || w.rotation === a.rotation) || (w = void 0, k = !0), d && lw(y) && "" !== y && (w ? v.text = y : (w = o.label(y, 0, 0, a.shape, void 0, void 0, a.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + t.colorIndex + " " + (a.className || "") + (a.useHTML ? " highcharts-tracker" : "")), w && (w.options = a, w.attr(v), s.styledMode ? m.width && w.css({
                            width: m.width,
                            textOverflow: m.textOverflow,
                            whiteSpace: m.whiteSpace
                        }) : w.css(m).shadow(a.shadow), lT(w, "beforeAddingDataLabel", {
                            labelOptions: a,
                            point: t
                        }), w.added || w.add(e), i.alignDataLabel(t, w, a, void 0, k), w.isActive = !0, n[h] && n[h] !== w && n[h].destroy(), n[h] = w))
                    });
                    let h = n.length;
                    for (; h--;) n[h] ? .isActive ? n[h].isActive = !1 : (n[h] ? .destroy(), n.splice(h, 1));
                    t.dataLabel = n[0], t.dataLabels = n
                }), lT(this, "afterDrawDataLabels")
            }

            function n(t, e, i, s, r, o) {
                let n = this.chart,
                    a = e.align,
                    l = e.verticalAlign,
                    h = t.box ? 0 : t.padding || 0,
                    c = n.inverted ? this.yAxis : this.xAxis,
                    d = c ? c.left - n.plotLeft : 0,
                    p = n.inverted ? this.xAxis : this.yAxis,
                    u = p ? p.top - n.plotTop : 0,
                    {
                        x: g = 0,
                        y: f = 0
                    } = e,
                    m, x;
                return (m = (i.x || 0) + h + d) < 0 && ("right" === a && g >= 0 ? (e.align = "left", e.inside = !0) : g -= m, x = !0), (m = (i.x || 0) + s.width - h + d) > n.plotWidth && ("left" === a && g <= 0 ? (e.align = "right", e.inside = !0) : g += n.plotWidth - m, x = !0), (m = i.y + h + u) < 0 && ("bottom" === l && f >= 0 ? (e.verticalAlign = "top", e.inside = !0) : f -= m, x = !0), (m = (i.y || 0) + s.height - h + u) > n.plotHeight && ("top" === l && f <= 0 ? (e.verticalAlign = "bottom", e.inside = !0) : f += n.plotHeight - m, x = !0), x && (e.x = g, e.y = f, t.placed = !o, t.align(e, void 0, r)), x
            }

            function a(t, e) {
                let i = [],
                    s;
                if (lM(t) && !lM(e)) i = t.map(function(t) {
                    return lA(t, e)
                });
                else if (lM(e) && !lM(t)) i = e.map(function(e) {
                    return lA(t, e)
                });
                else if (lM(t) || lM(e)) {
                    if (lM(t) && lM(e))
                        for (s = Math.max(t.length, e.length); s--;) i[s] = lA(t[s], e[s])
                } else i = lA(t, e);
                return i
            }

            function l(t) {
                let e = t.chart.options.plotOptions;
                return lP(a(a(e ? .series ? .dataLabels, e ? .[t.type] ? .dataLabels), t.options.dataLabels))
            }

            function h(t, e, i, s, r) {
                let o = this.chart,
                    n = o.inverted,
                    a = this.xAxis,
                    l = a.reversed,
                    h = ((n ? e.height : e.width) || 0) / 2,
                    c = t.pointWidth,
                    d = c ? c / 2 : 0;
                e.startXPos = n ? r.x : l ? -h - d : a.width - h + d, e.startYPos = n ? l ? this.yAxis.height - h + d : -h - d : r.y, s ? "hidden" === e.visibility && (e.show(), e.attr({
                    opacity: 0
                }).animate({
                    opacity: 1
                })) : e.attr({
                    opacity: 1
                }).animate({
                    opacity: 0
                }, void 0, e.hide), o.hasRendered && (i && e.attr({
                    x: e.startXPos,
                    y: e.startYPos
                }), e.placed = !0)
            }
            t.compose = function(t) {
                let l = t.prototype;
                l.initDataLabels || (l.initDataLabels = r, l.initDataLabelsGroup = s, l.alignDataLabel = i, l.drawDataLabels = o, l.justifyDataLabel = n, l.mergeArrays = a, l.setDataLabelStartPos = h, l.hasDataLabels = e)
            }
        }(E || (E = {}));
        let lN = E,
            {
                composed: lI
            } = B,
            {
                series: lR
            } = oz,
            {
                merge: lD,
                pushUnique: lB
            } = ta;

        function lj(t, e, i, s, r) {
            let {
                chart: o,
                options: n
            } = this, a = o.inverted, l = this.xAxis ? .len || o.plotSizeX || 0, h = this.yAxis ? .len || o.plotSizeY || 0, c = t.dlBox || t.shapeArgs, d = t.below ? ? (t.plotY || 0) > (this.translatedThreshold ? ? h), p = i.inside ? ? !!n.stacking;
            if (c) {
                if (s = lD(c), "allow" !== i.overflow || !1 !== i.crop || !1 !== n.clip) {
                    s.y < 0 && (s.height += s.y, s.y = 0);
                    let t = s.y + s.height - h;
                    t > 0 && t < s.height - 1 && (s.height -= t)
                }
                a && (s = {
                    x: h - s.y - s.height,
                    y: l - s.x - s.width,
                    width: s.height,
                    height: s.width
                }), p || (a ? (s.x += d ? 0 : s.width, s.width = 0) : (s.y += d ? s.height : 0, s.height = 0))
            }
            i.align ? ? (i.align = !a || p ? "center" : d ? "right" : "left"), i.verticalAlign ? ? (i.verticalAlign = a || p ? "middle" : d ? "top" : "bottom"), lR.prototype.alignDataLabel.call(this, t, e, i, s, r), i.inside && t.contrastColor && e.css({
                color: t.contrastColor
            })
        }(O || (O = {})).compose = function(t) {
            lN.compose(lR), lB(lI, "ColumnDataLabel") && (t.prototype.alignDataLabel = lj)
        };
        let lz = O,
            {
                extend: l_,
                merge: lW
            } = ta;
        class lH extends ly {}
        lH.defaultOptions = lW(ly.defaultOptions, {}), l_(lH.prototype, {
            inverted: !0
        }), oz.registerSeriesType("bar", lH);
        let {
            column: lF,
            line: lX
        } = oz.seriesTypes, {
            addEvent: lY,
            extend: lG,
            merge: l$
        } = ta;
        class lU extends lX {
            applyJitter() {
                let t = this,
                    e = this.options.jitter,
                    i = this.points.length;
                e && this.points.forEach(function(s, r) {
                    ["x", "y"].forEach(function(o, n) {
                        if (e[o] && !s.isNull) {
                            let a = `plot${o.toUpperCase()}`,
                                l = t[`${o}Axis`],
                                h = e[o] * l.transA;
                            if (l && !l.logarithmic) {
                                let t, e = Math.max(0, (s[a] || 0) - h),
                                    c = Math.min(l.len, (s[a] || 0) + h);
                                s[a] = e + (c - e) * ((t = 1e4 * Math.sin(r + n * i)) - Math.floor(t)), "x" === o && (s.clientX = s.plotX)
                            }
                        }
                    })
                })
            }
            drawGraph() {
                this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy())
            }
        }
        lU.defaultOptions = l$(lX.defaultOptions, {
            lineWidth: 0,
            findNearestPointBy: "xy",
            jitter: {
                x: 0,
                y: 0
            },
            marker: {
                enabled: !0
            },
            tooltip: {
                headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
            }
        }), lG(lU.prototype, {
            drawTracker: lF.prototype.drawTracker,
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"]
        }), lY(lU, "afterTranslate", function() {
            this.applyJitter()
        }), oz.registerSeriesType("scatter", lU);
        let {
            deg2rad: lV
        } = B, {
            fireEvent: lq,
            isNumber: lK,
            pick: lZ,
            relativeLength: lJ
        } = ta;
        (u = L || (L = {})).getCenter = function() {
            let t = this.options,
                e = this.chart,
                i = 2 * (t.slicedOffset || 0),
                s = e.plotWidth - 2 * i,
                r = e.plotHeight - 2 * i,
                o = t.center,
                n = Math.min(s, r),
                a = t.thickness,
                l, h = t.size,
                c = t.innerSize || 0,
                d, p;
            "string" == typeof h && (h = parseFloat(h)), "string" == typeof c && (c = parseFloat(c));
            let u = [lZ(o ? .[0], "50%"), lZ(o ? .[1], "50%"), lZ(h && h < 0 ? void 0 : t.size, "100%"), lZ(c && c < 0 ? void 0 : t.innerSize || 0, "0%")];
            for (!e.angular || this instanceof nl || (u[3] = 0), d = 0; d < 4; ++d) p = u[d], l = d < 2 || 2 === d && /%$/.test(p), u[d] = lJ(p, [s, r, n, u[2]][d]) + (l ? i : 0);
            return u[3] > u[2] && (u[3] = u[2]), lK(a) && 2 * a < u[2] && a > 0 && (u[3] = u[2] - 2 * a), lq(this, "afterGetCenter", {
                positions: u
            }), u
        }, u.getStartAndEndRadians = function(t, e) {
            let i = lK(t) ? t : 0,
                s = lK(e) && e > i && e - i < 360 ? e : i + 360;
            return {
                start: lV * (i + -90),
                end: lV * (s + -90)
            }
        };
        let lQ = L,
            {
                setAnimation: l0
            } = t5,
            {
                addEvent: l1,
                defined: l2,
                extend: l3,
                isNumber: l5,
                pick: l6,
                relativeLength: l4
            } = ta;
        class l9 extends ot {
            getConnectorPath(t) {
                let e = t.dataLabelPosition,
                    i = t.options || {},
                    s = i.connectorShape,
                    r = this.connectorShapes[s] || s;
                return e && r.call(this, { ...e.computed,
                    alignment: e.alignment
                }, e.connectorPosition, i) || []
            }
            getTranslate() {
                return this.sliced && this.slicedTranslation || {
                    translateX: 0,
                    translateY: 0
                }
            }
            haloPath(t) {
                let e = this.shapeArgs;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                    innerR: e.r - 1,
                    start: e.start,
                    end: e.end,
                    borderRadius: e.borderRadius
                })
            }
            constructor(t, e, i) {
                super(t, e, i), this.half = 0, this.name ? ? (this.name = t.chart.options.lang.pieSliceName);
                const s = t => {
                    this.slice("select" === t.type)
                };
                l1(this, "select", s), l1(this, "unselect", s)
            }
            isValid() {
                return l5(this.y) && this.y >= 0
            }
            setVisible(t, e = !0) {
                t !== this.visible && this.update({
                    visible: t ? ? !this.visible
                }, e, void 0, !1)
            }
            slice(t, e, i) {
                let s = this.series;
                l0(i, s.chart), e = l6(e, !0), this.sliced = this.options.sliced = t = l2(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate())
            }
        }
        l3(l9.prototype, {
            connectorShapes: {
                fixedOffset: function(t, e, i) {
                    let s = e.breakAt,
                        r = e.touchingSliceAt,
                        o = i.softConnector ? ["C", t.x + ("left" === t.alignment ? -5 : 5), t.y, 2 * s.x - r.x, 2 * s.y - r.y, s.x, s.y] : ["L", s.x, s.y];
                    return [
                        ["M", t.x, t.y], o, ["L", r.x, r.y]
                    ]
                },
                straight: function(t, e) {
                    let i = e.touchingSliceAt;
                    return [
                        ["M", t.x, t.y],
                        ["L", i.x, i.y]
                    ]
                },
                crookedLine: function(t, e, i) {
                    let {
                        angle: s = this.angle || 0,
                        breakAt: r,
                        touchingSliceAt: o
                    } = e, {
                        series: n
                    } = this, [a, l, h] = n.center, c = h / 2, {
                        plotLeft: d,
                        plotWidth: p
                    } = n.chart, u = "left" === t.alignment, {
                        x: g,
                        y: f
                    } = t, m = r.x;
                    if (i.crookDistance) {
                        let t = l4(i.crookDistance, 1);
                        m = u ? a + c + (p + d - a - c) * (1 - t) : d + (a - c) * t
                    } else m = a + (l - f) * Math.tan(s - Math.PI / 2);
                    let x = [
                        ["M", g, f]
                    ];
                    return (u ? m <= g && m >= r.x : m >= g && m <= r.x) && x.push(["L", m, f]), x.push(["L", r.x, r.y], ["L", o.x, o.y]), x
                }
            }
        });
        let {
            getStartAndEndRadians: l7
        } = lQ, {
            noop: l8
        } = B, {
            clamp: ht,
            extend: he,
            fireEvent: hi,
            merge: hs,
            pick: hr
        } = ta;
        class ho extends nl {
            animate(t) {
                let e = this,
                    i = e.points,
                    s = e.startAngleRad;
                t || i.forEach(function(t) {
                    let i = t.graphic,
                        r = t.shapeArgs;
                    i && r && (i.attr({
                        r: hr(t.startR, e.center && e.center[3] / 2),
                        start: s,
                        end: s
                    }), i.animate({
                        r: r.r,
                        start: r.start,
                        end: r.end
                    }, e.options.animation))
                })
            }
            drawEmpty() {
                let t, e, i = this.startAngleRad,
                    s = this.endAngleRad,
                    r = this.options;
                0 === this.total && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
                    d: ix.arc(t, e, this.center[2] / 2, 0, {
                        start: i,
                        end: s,
                        innerR: this.center[3] / 2
                    })
                }), this.chart.styledMode || this.graph.attr({
                    "stroke-width": r.borderWidth,
                    fill: r.fillColor || "none",
                    stroke: r.color || "#cccccc"
                })) : this.graph && (this.graph = this.graph.destroy())
            }
            drawPoints() {
                let t = this.chart.renderer;
                this.points.forEach(function(e) {
                    e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
                })
            }
            generatePoints() {
                super.generatePoints(), this.updateTotals()
            }
            getX(t, e, i, s) {
                let r = this.center,
                    o = this.radii ? this.radii[i.index] || 0 : r[2] / 2,
                    n = s.dataLabelPosition,
                    a = n ? .distance || 0,
                    l = Math.asin(ht((t - r[1]) / (o + a), -1, 1));
                return r[0] + Math.cos(l) * (o + a) * (e ? -1 : 1) + (a > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0)
            }
            hasData() {
                return this.points.some(t => t.visible)
            }
            redrawPoints() {
                let t, e, i, s, r = this,
                    o = r.chart;
                this.drawEmpty(), r.group && !o.styledMode && r.group.shadow(r.options.shadow), r.points.forEach(function(n) {
                    let a = {};
                    e = n.graphic, !n.isNull && e ? (s = n.shapeArgs, t = n.getTranslate(), o.styledMode || (i = r.pointAttribs(n, n.selected && "select")), n.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), o.styledMode || e.attr(i).attr({
                        "stroke-linejoin": "round"
                    }), n.delayedRendering = !1) : (e.setRadialReference(r.center), o.styledMode || hs(!0, a, i), hs(!0, a, s, t), e.animate(a)), e.attr({
                        visibility: n.visible ? "inherit" : "hidden"
                    }), e.addClass(n.getClassName(), !0)) : e && (n.graphic = e.destroy())
                })
            }
            sortByAngle(t, e) {
                t.sort(function(t, i) {
                    return void 0 !== t.angle && (i.angle - t.angle) * e
                })
            }
            translate(t) {
                hi(this, "translate"), this.generatePoints();
                let e = this.options,
                    i = e.slicedOffset,
                    s = l7(e.startAngle, e.endAngle),
                    r = this.startAngleRad = s.start,
                    o = (this.endAngleRad = s.end) - r,
                    n = this.points,
                    a = e.ignoreHiddenPoint,
                    l = n.length,
                    h, c, d, p, u, g, f, m = 0;
                for (t || (this.center = t = this.getCenter()), g = 0; g < l; g++) {
                    f = n[g], h = r + m * o, f.isValid() && (!a || f.visible) && (m += f.percentage / 100), c = r + m * o;
                    let e = {
                        x: t[0],
                        y: t[1],
                        r: t[2] / 2,
                        innerR: t[3] / 2,
                        start: Math.round(1e3 * h) / 1e3,
                        end: Math.round(1e3 * c) / 1e3
                    };
                    f.shapeType = "arc", f.shapeArgs = e, (d = (c + h) / 2) > 1.5 * Math.PI ? d -= 2 * Math.PI : d < -Math.PI / 2 && (d += 2 * Math.PI), f.slicedTranslation = {
                        translateX: Math.round(Math.cos(d) * i),
                        translateY: Math.round(Math.sin(d) * i)
                    }, p = Math.cos(d) * t[2] / 2, u = Math.sin(d) * t[2] / 2, f.tooltipPos = [t[0] + .7 * p, t[1] + .7 * u], f.half = +(d < -Math.PI / 2 || d > Math.PI / 2), f.angle = d
                }
                hi(this, "afterTranslate")
            }
            updateTotals() {
                let t = this.points,
                    e = t.length,
                    i = this.options.ignoreHiddenPoint,
                    s, r, o = 0;
                for (s = 0; s < e; s++)(r = t[s]).isValid() && (!i || r.visible) && (o += r.y);
                for (s = 0, this.total = o; s < e; s++)(r = t[s]).percentage = o > 0 && (r.visible || !i) ? r.y / o * 100 : 0, r.total = o
            }
        }
        ho.defaultOptions = hs(nl.defaultOptions, {
            borderRadius: 3,
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                connectorPadding: 5,
                connectorShape: "crookedLine",
                crookDistance: void 0,
                distance: 30,
                enabled: !0,
                formatter: function() {
                    return this.isNull ? void 0 : this.name
                },
                softConnector: !0,
                x: 0
            },
            fillColor: void 0,
            ignoreHiddenPoint: !0,
            inactiveOtherPoints: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            stickyTracking: !1,
            tooltip: {
                followPointer: !0
            },
            borderColor: "#ffffff",
            borderWidth: 1,
            lineWidth: void 0,
            states: {
                hover: {
                    brightness: .1
                }
            }
        }), he(ho.prototype, {
            axisTypes: [],
            directTouch: !0,
            drawGraph: void 0,
            drawTracker: ly.prototype.drawTracker,
            getCenter: lQ.getCenter,
            getSymbol: l8,
            invertible: !1,
            isCartesian: !1,
            noSharedTooltip: !0,
            pointAttribs: ly.prototype.pointAttribs,
            pointClass: l9,
            requireSorting: !1,
            searchPoint: l8,
            trackerGroups: ["group", "dataLabelsGroup"]
        }), oz.registerSeriesType("pie", ho);
        let {
            composed: hn,
            noop: ha
        } = B, {
            distribute: hl
        } = eL, {
            series: hh
        } = oz, {
            arrayMax: hc,
            clamp: hd,
            defined: hp,
            isNumber: hu,
            pick: hg,
            pushUnique: hf,
            relativeLength: hm
        } = ta;
        ! function(t) {
            let e = {
                radialDistributionY: function(t, e) {
                    return (e.dataLabelPosition ? .top || 0) + t.distributeBox.pos
                },
                radialDistributionX: function(t, e, i, s, r) {
                    let o = r.dataLabelPosition;
                    return t.getX(i < (o ? .top || 0) + 2 || i > (o ? .bottom || 0) - 2 ? s : i, e.half, e, r)
                },
                justify: function(t, e, i, s) {
                    return s[0] + (t.half ? -1 : 1) * (i + (e.dataLabelPosition ? .distance || 0))
                },
                alignToPlotEdges: function(t, e, i, s) {
                    let r = t.getBBox().width;
                    return e ? r + s : i - r - s
                },
                alignToConnectors: function(t, e, i, s) {
                    let r = 0,
                        o;
                    return t.forEach(function(t) {
                        (o = t.dataLabel.getBBox().width) > r && (r = o)
                    }), e ? r + s : i - r - s
                }
            };

            function i(t, e) {
                let i = Math.PI / 2,
                    {
                        start: s = 0,
                        end: r = 0
                    } = t.shapeArgs || {},
                    o = t.angle || 0;
                e > 0 && s < i && r > i && o > i / 2 && o < 1.5 * i && (o = o <= i ? Math.max(i / 2, (s + i) / 2) : Math.min(1.5 * i, (i + r) / 2));
                let {
                    center: n,
                    options: a
                } = this, l = n[2] / 2, h = Math.cos(o), c = Math.sin(o), d = n[0] + h * l, p = n[1] + c * l, u = Math.min((a.slicedOffset || 0) + (a.borderWidth || 0), e / 5);
                return {
                    natural: {
                        x: d + h * e,
                        y: p + c * e
                    },
                    computed: {},
                    alignment: e < 0 ? "center" : t.half ? "right" : "left",
                    connectorPosition: {
                        angle: o,
                        breakAt: {
                            x: d + h * u,
                            y: p + c * u
                        },
                        touchingSliceAt: {
                            x: d,
                            y: p
                        }
                    },
                    distance: e
                }
            }

            function s() {
                let t = this,
                    e = t.points,
                    i = t.chart,
                    s = i.plotWidth,
                    r = i.plotHeight,
                    o = i.plotLeft,
                    n = Math.round(i.chartWidth / 3),
                    a = t.center,
                    l = a[2] / 2,
                    h = a[1],
                    c = [
                        [],
                        []
                    ],
                    d = [0, 0, 0, 0],
                    p = t.dataLabelPositioners,
                    u, g, f, m = 0;
                t.visible && t.hasDataLabels ? .() && (e.forEach(t => {
                    (t.dataLabels || []).forEach(t => {
                        t.shortened && (t.attr({
                            width: "auto"
                        }).css({
                            width: "auto",
                            textOverflow: "clip"
                        }), t.shortened = !1)
                    })
                }), hh.prototype.drawDataLabels.apply(t), e.forEach(t => {
                    (t.dataLabels || []).forEach((e, i) => {
                        let s = a[2] / 2,
                            r = e.options,
                            o = hm(r ? .distance || 0, s);
                        0 === i && c[t.half].push(t), !hp(r ? .style ? .width) && e.getBBox().width > n && (e.css({
                            width: Math.round(.7 * n) + "px"
                        }), e.shortened = !0), e.dataLabelPosition = this.getDataLabelPosition(t, o), m = Math.max(m, o)
                    })
                }), c.forEach((e, n) => {
                    let c = e.length,
                        u = [],
                        x, y, b = 0,
                        v;
                    c && (t.sortByAngle(e, n - .5), m > 0 && (x = Math.max(0, h - l - m), y = Math.min(h + l + m, i.plotHeight), e.forEach(t => {
                        (t.dataLabels || []).forEach(e => {
                            let s = e.dataLabelPosition;
                            s && s.distance > 0 && (s.top = Math.max(0, h - l - s.distance), s.bottom = Math.min(h + l + s.distance, i.plotHeight), b = e.getBBox().height || 21, e.lineHeight = i.renderer.fontMetrics(e.text || e).h + 2 * e.padding, t.distributeBox = {
                                target: (e.dataLabelPosition ? .natural.y || 0) - s.top + e.lineHeight / 2,
                                size: b,
                                rank: t.y
                            }, u.push(t.distributeBox))
                        })
                    }), hl(u, v = y + b - x, v / 5)), e.forEach(i => {
                        (i.dataLabels || []).forEach(h => {
                            let c = h.options || {},
                                m = i.distributeBox,
                                x = h.dataLabelPosition,
                                y = x ? .natural.y || 0,
                                b = c.connectorPadding || 0,
                                v = h.lineHeight || 21,
                                w = (v - h.getBBox().height) / 2,
                                k = 0,
                                T = y,
                                S = "inherit";
                            if (x) {
                                if (u && hp(m) && x.distance > 0 && (void 0 === m.pos ? S = "hidden" : (f = m.size, T = p.radialDistributionY(i, h))), c.justify) k = p.justify(i, h, l, a);
                                else switch (c.alignTo) {
                                    case "connectors":
                                        k = p.alignToConnectors(e, n, s, o);
                                        break;
                                    case "plotEdges":
                                        k = p.alignToPlotEdges(h, n, s, o);
                                        break;
                                    default:
                                        k = p.radialDistributionX(t, i, T - w, y, h)
                                }
                                if (x.attribs = {
                                        visibility: S,
                                        align: x.alignment
                                    }, x.posAttribs = {
                                        x: k + (c.x || 0) + (({
                                            left: b,
                                            right: -b
                                        })[x.alignment] || 0),
                                        y: T + (c.y || 0) - v / 2
                                    }, x.computed.x = k, x.computed.y = T - w, hg(c.crop, !0)) {
                                    let t;
                                    k - (g = h.getBBox().width) < b && 1 === n ? (t = Math.round(g - k + b), d[3] = Math.max(t, d[3])) : k + g > s - b && 0 === n && (t = Math.round(k + g - s + b), d[1] = Math.max(t, d[1])), T - f / 2 < 0 ? d[0] = Math.max(Math.round(-T + f / 2), d[0]) : T + f / 2 > r && (d[2] = Math.max(Math.round(T + f / 2 - r), d[2])), x.sideOverflow = t
                                }
                            }
                        })
                    }))
                }), (0 === hc(d) || this.verifyDataLabelOverflow(d)) && (this.placeDataLabels(), this.points.forEach(e => {
                    e.dataLabels ? .forEach((s, r) => {
                        let {
                            connectorColor: o,
                            connectorWidth: n = 1
                        } = s.options || {}, a = s.dataLabelPosition;
                        if (hu(n)) {
                            let l;
                            u = s.connector, a && a.distance > 0 ? (l = !u, u || (s.connector = u = i.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e.colorIndex + (e.className ? " " + e.className : "")).add(t.dataLabelsGroups ? .[r])), i.styledMode || u.attr({
                                "stroke-width": n,
                                stroke: o || e.color || "#666666"
                            }), u[l ? "attr" : "animate"]({
                                d: e.getConnectorPath(s)
                            }), u.attr({
                                visibility: a.attribs ? .visibility
                            })) : u && (s.connector = u.destroy())
                        }
                    })
                })))
            }

            function r() {
                this.points.forEach(t => {
                    (t.dataLabels || []).forEach(t => {
                        let e = t.dataLabelPosition;
                        e ? (e.sideOverflow && (t.css({
                            width: Math.max(t.getBBox().width - e.sideOverflow, 0) + "px",
                            textOverflow: t.options ? .style ? .textOverflow || "ellipsis"
                        }), t.shortened = !0), t.attr(e.attribs), t[t.moved ? "animate" : "attr"](e.posAttribs), t.moved = !0) : t && t.attr({
                            y: -9999
                        })
                    }), delete t.distributeBox
                }, this)
            }

            function o(t) {
                let e = this.center,
                    i = this.options,
                    s = i.center,
                    r = i.minSize || 80,
                    o = r,
                    n = null !== i.size;
                return !n && (null !== s[0] ? o = Math.max(e[2] - Math.max(t[1], t[3]), r) : (o = Math.max(e[2] - t[1] - t[3], r), e[0] += (t[3] - t[1]) / 2), null !== s[1] ? o = hd(o, r, e[2] - Math.max(t[0], t[2])) : (o = hd(o, r, e[2] - t[0] - t[2]), e[1] += (t[0] - t[2]) / 2), o < e[2] ? (e[2] = o, e[3] = Math.min(i.thickness ? Math.max(0, o - 2 * i.thickness) : Math.max(0, hm(i.innerSize || 0, o)), o), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : n = !0), n
            }
            t.compose = function(t) {
                if (lN.compose(hh), hf(hn, "PieDataLabel")) {
                    let n = t.prototype;
                    n.dataLabelPositioners = e, n.alignDataLabel = ha, n.drawDataLabels = s, n.getDataLabelPosition = i, n.placeDataLabels = r, n.verifyDataLabelOverflow = o
                }
            }
        }(P || (P = {}));
        let hx = P;
        (g = N || (N = {})).getCenterOfPoints = function(t) {
            let e = t.reduce((t, e) => (t.x += e.x, t.y += e.y, t), {
                x: 0,
                y: 0
            });
            return {
                x: e.x / t.length,
                y: e.y / t.length
            }
        }, g.getDistanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }, g.getAngleBetweenPoints = function(t, e) {
            return Math.atan2(e.x - t.x, e.y - t.y)
        }, g.pointInPolygon = function({
            x: t,
            y: e
        }, i) {
            let s = i.length,
                r, o, n = !1;
            for (r = 0, o = s - 1; r < s; o = r++) {
                let [s, a] = i[r], [l, h] = i[o];
                a > e != h > e && t < (l - s) * (e - a) / (h - a) + s && (n = !n)
            }
            return n
        };
        let {
            pointInPolygon: hy
        } = N, {
            addEvent: hb,
            getAlignFactor: hv,
            fireEvent: hw,
            objectEach: hk,
            pick: hT
        } = ta;

        function hS(t, e) {
            let i, s = !1;
            return t && (i = t.newOpacity, t.oldOpacity !== i && (t.hasClass("highcharts-data-label") ? (t[i ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), s = !0, t[t.isOld ? "animate" : "attr"]({
                opacity: i
            }, void 0, function() {
                e.styledMode || t.css({
                    pointerEvents: i ? "auto" : "none"
                })
            }), hw(e, "afterHideOverlappingLabel")) : t.attr({
                opacity: i
            })), t.isOld = !0), s
        }
        let {
            defaultOptions: hM
        } = tI, {
            noop: hC
        } = B, {
            addEvent: hA,
            extend: hE,
            isObject: hO,
            merge: hL,
            relativeLength: hP
        } = ta, hN = {
            radius: 0,
            scope: "stack",
            where: void 0
        }, hI = hC, hR = hC;

        function hD(t, e, i, s, r = {}) {
            let o = hI(t, e, i, s, r),
                {
                    brStart: n = !0,
                    brEnd: a = !0,
                    innerR: l = 0,
                    r: h = i,
                    start: c = 0,
                    end: d = 0
                } = r;
            if (r.open || !r.borderRadius) return o;
            let p = d - c,
                u = Math.sin(p / 2),
                g = Math.max(Math.min(hP(r.borderRadius || 0, h - l), (h - l) / 2, h * u / (1 + u)), 0),
                f = Math.min(g, p / Math.PI * 2 * l),
                m = o.length - 1;
            for (; m--;)(n || 0 !== m && 3 !== m) && (a || 1 !== m && 2 !== m) && function(t, e, i) {
                let s, r, o, n = t[e],
                    a = t[e + 1];
                if ("Z" === a[0] && (a = t[0]), ("M" === n[0] || "L" === n[0]) && "A" === a[0] ? (s = n, r = a, o = !0) : "A" === n[0] && ("M" === a[0] || "L" === a[0]) && (s = a, r = n), s && r && r.params) {
                    let n = r[1],
                        a = r[5],
                        l = r.params,
                        {
                            start: h,
                            end: c,
                            cx: d,
                            cy: p
                        } = l,
                        u = a ? n - i : n + i,
                        g = u ? Math.asin(i / u) : 0,
                        f = a ? g : -g,
                        m = Math.cos(g) * u;
                    o ? (l.start = h + f, s[1] = d + m * Math.cos(h), s[2] = p + m * Math.sin(h), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, d + n * Math.cos(l.start), p + n * Math.sin(l.start)])) : (l.end = c - f, r[6] = d + n * Math.cos(l.end), r[7] = p + n * Math.sin(l.end), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, d + m * Math.cos(c), p + m * Math.sin(c)])), r[4] = Math.abs(l.end - l.start) < Math.PI ? 0 : 1
                }
            }(o, m, m > 1 ? f : g);
            return o
        }

        function hB() {
            if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
                let {
                    options: t,
                    yAxis: e
                } = this, i = "percent" === t.stacking, s = hM.plotOptions ? .[this.type] ? .borderRadius, r = hj(t.borderRadius, hO(s) ? s : {}), o = e.options.reversed;
                for (let s of this.points) {
                    let {
                        shapeArgs: n
                    } = s;
                    if ("roundedRect" === s.shapeType && n) {
                        let {
                            width: a = 0,
                            height: l = 0,
                            y: h = 0
                        } = n, c = h, d = l;
                        if ("stack" === r.scope && s.stackTotal) {
                            let r = e.translate(i ? 100 : s.stackTotal, !1, !0, !1, !0),
                                o = e.translate(t.threshold || 0, !1, !0, !1, !0),
                                n = this.crispCol(0, Math.min(r, o), 0, Math.abs(r - o));
                            c = n.y, d = n.height
                        }
                        let p = (s.negative ? -1 : 1) * (o ? -1 : 1) == -1,
                            u = r.where;
                        !u && this.is("waterfall") && Math.abs((s.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (u = "all"), u || (u = "end");
                        let g = Math.min(hP(r.radius, a), a / 2, "all" === u ? l / 2 : 1 / 0) || 0;
                        "end" === u && (p && (c -= g), d += g), hE(n, {
                            brBoxHeight: d,
                            brBoxY: c,
                            r: g
                        })
                    }
                }
            }
        }

        function hj(t, e) {
            return hO(t) || (t = {
                radius: t || 0
            }), hL(hN, e, t)
        }

        function hz() {
            let t = hj(this.options.borderRadius);
            for (let e of this.points) {
                let i = e.shapeArgs;
                i && (i.borderRadius = hP(t.radius, (i.r || 0) - (i.innerR || 0)))
            }
        }

        function h_(t, e, i, s, r = {}) {
            let o = hR(t, e, i, s, r),
                {
                    r: n = 0,
                    brBoxHeight: a = s,
                    brBoxY: l = e
                } = r,
                h = e - l,
                c = l + a - (e + s),
                d = h - n > -.1 ? 0 : n,
                p = c - n > -.1 ? 0 : n,
                u = Math.max(d && h, 0),
                g = Math.max(p && c, 0),
                f = [t + d, e],
                m = [t + i - d, e],
                x = [t + i, e + d],
                y = [t + i, e + s - p],
                b = [t + i - p, e + s],
                v = [t + p, e + s],
                w = [t, e + s - p],
                k = [t, e + d],
                T = (t, e) => Math.sqrt(Math.pow(t, 2) - Math.pow(e, 2));
            if (u) {
                let t = T(d, d - u);
                f[0] -= t, m[0] += t, x[1] = k[1] = e + d - u
            }
            if (s < d - u) {
                let r = T(d, d - u - s);
                x[0] = y[0] = t + i - d + r, b[0] = Math.min(x[0], b[0]), v[0] = Math.max(y[0], v[0]), w[0] = k[0] = t + d - r, x[1] = k[1] = e + s
            }
            if (g) {
                let t = T(p, p - g);
                b[0] += t, v[0] -= t, y[1] = w[1] = e + s - p + g
            }
            if (s < p - g) {
                let r = T(p, p - g - s);
                x[0] = y[0] = t + i - p + r, m[0] = Math.min(x[0], m[0]), f[0] = Math.max(y[0], f[0]), w[0] = k[0] = t + p - r, y[1] = w[1] = e
            }
            return o.length = 0, o.push(["M", ...f], ["L", ...m], ["A", d, d, 0, 0, 1, ...x], ["L", ...y], ["A", p, p, 0, 0, 1, ...b], ["L", ...v], ["A", p, p, 0, 0, 1, ...w], ["L", ...k], ["A", d, d, 0, 0, 1, ...f], ["Z"]), o
        }
        let {
            diffObjects: hW,
            extend: hH,
            find: hF,
            merge: hX,
            pick: hY,
            uniqueKey: hG
        } = ta;

        function h$(t, e) {
            let i = t.condition;
            (i.callback || function() {
                return this.chartWidth <= hY(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= hY(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= hY(i.minWidth, 0) && this.chartHeight >= hY(i.minHeight, 0)
            }).call(this) && e.push(t._id)
        }

        function hU(t, e) {
            let i = this.options.responsive,
                s = this.currentResponsive,
                r = [],
                o;
            !e && i && i.rules && i.rules.forEach(t => {
                void 0 === t._id && (t._id = hG()), this.matchResponsiveRule(t, r)
            }, this);
            let n = hX(...r.map(t => hF(i ? .rules || [], e => e._id === t)).map(t => t ? .chartOptions));
            n.isResponsiveOptions = !0, r = r.toString() || void 0;
            let a = s ? .ruleIds;
            r !== a && (s && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(s.undoOptions, t, !0), this.updatingResponsive = !1), r ? ((o = hW(n, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = {
                ruleIds: r,
                mergedOptions: n,
                undoOptions: o
            }, this.updatingResponsive || this.update(n, t, !0)) : this.currentResponsive = void 0)
        }(I || (I = {})).compose = function(t) {
            let e = t.prototype;
            return e.matchResponsiveRule || hH(e, {
                matchResponsiveRule: h$,
                setResponsive: hU
            }), t
        };
        let hV = I;
        B.AST = el, B.Axis = s5, B.Chart = aa, B.Color = tF, B.DataLabel = lN, B.DataTableCore = oM, B.Fx = tU, B.HTMLElement = sa, B.Legend = nP, B.LegendSymbol = oP, B.PlotLineOrBand = ry, B.Point = ot, B.Pointer = ob, B.RendererRegistry = eM, B.Series = nl, B.SeriesRegistry = oz, B.StackItem = aA, B.SVGElement = it, B.SVGRenderer = i3, B.Templating = eS, B.Tick = sA, B.Time = tA, B.Tooltip = rY, B.animate = t5.animate, B.animObject = t5.animObject, B.chart = aa.chart, B.color = tF.parse, B.dateFormat = eS.dateFormat, B.defaultOptions = tI.defaultOptions, B.distribute = eL.distribute, B.format = eS.format, B.getDeferredAnimation = t5.getDeferredAnimation, B.getOptions = tI.getOptions, B.numberFormat = eS.numberFormat, B.seriesType = oz.seriesType, B.setAnimation = t5.setAnimation, B.setOptions = tI.setOptions, B.stop = t5.stop, B.time = tI.defaultTime, B.timers = tU.timers, ({
            compose: function(t, e, i) {
                let s = t.types.pie;
                if (!e.symbolCustomAttribs.includes("borderRadius")) {
                    let r = i.prototype.symbols;
                    hA(t, "afterColumnTranslate", hB, {
                        order: 9
                    }), hA(s, "afterTranslate", hz), e.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), hI = r.arc, hR = r.roundedRect, r.arc = hD, r.roundedRect = h_
                }
            },
            optionsToObject: hj
        }).compose(B.Series, B.SVGElement, B.SVGRenderer), lz.compose(B.Series.types.column), lN.compose(B.Series), s8.compose(B.Axis), sa.compose(B.SVGRenderer), nP.compose(B.Chart), rs.compose(B.Axis), (o = (f = B.Chart).prototype).hideOverlappingLabels || (o.hideOverlappingLabels = function(t) {
            let e = t.length,
                i = (t, e) => !(e.x >= t.x + t.width || e.x + e.width <= t.x || e.y >= t.y + t.height || e.y + e.height <= t.y),
                s = (t, e) => {
                    for (let i of t)
                        if (hy({
                                x: i[0],
                                y: i[1]
                            }, e)) return !0;
                    return !1
                },
                r, o, n, a, l, h = !1;
            for (let i = 0; i < e; i++)(r = t[i]) && (r.oldOpacity = r.opacity, r.newOpacity = 1, r.absoluteBox = function(t) {
                if (t && (!t.alignAttr || t.placed)) {
                    let e = t.box ? 0 : t.padding || 0,
                        i = t.alignAttr || {
                            x: t.attr("x"),
                            y: t.attr("y")
                        },
                        {
                            height: s,
                            polygon: r,
                            width: o
                        } = t.getBBox(),
                        n = hv(t.alignValue) * o;
                    return t.width = o, t.height = s, {
                        x: i.x + (t.parentGroup ? .translateX || 0) + e - n,
                        y: i.y + (t.parentGroup ? .translateY || 0) + e,
                        width: o - 2 * e,
                        height: s - 2 * e,
                        polygon: r
                    }
                }
            }(r));
            t.sort((t, e) => (e ? .labelrank || 0) - (t ? .labelrank || 0));
            for (let r = 0; r < e; ++r) {
                a = (o = t[r]) && o.absoluteBox;
                let h = a ? .polygon;
                for (let c = r + 1; c < e; ++c) {
                    l = (n = t[c]) && n.absoluteBox;
                    let e = !1;
                    if (a && l && o !== n && o ? .newOpacity !== 0 && n ? .newOpacity !== 0 && o ? .visibility !== "hidden" && n ? .visibility !== "hidden") {
                        let t = l.polygon;
                        if (h && t && h !== t ? s(h, t) && (e = !0) : i(a, l) && (e = !0), e) {
                            let t = o ? .labelrank < n ? .labelrank ? o : n,
                                e = t ? .text;
                            t && (t.newOpacity = 0), e ? .element.querySelector("textPath") && e.hide()
                        }
                    }
                }
            }
            for (let e of t) e && hS(e, this) && (h = !0);
            h && hw(this, "afterHideAllOverlappingLabels")
        }, hb(f, "render", function() {
            let t = this,
                e = [];
            for (let i of t.labelCollectors || []) e = e.concat(i());
            for (let i of t.yAxis || []) i.stacking && i.options.stackLabels && !i.options.stackLabels.allowOverlap && hk(i.stacking.stacks, t => {
                hk(t, t => {
                    t.label && e.push(t.label)
                })
            });
            for (let i of t.series || [])
                if (i.visible && i.hasDataLabels ? .()) {
                    let s = i => {
                        for (let s of i) s.visible && (s.dataLabels || []).forEach(i => {
                            let r = i.options || {};
                            i.labelrank = hT(r.labelrank, s.labelrank, s.shapeArgs ? .height), r.allowOverlap ? ? Number(r.distance) > 0 ? (i.oldOpacity = i.opacity, i.newOpacity = 1, hS(i, t)) : e.push(i)
                        })
                    };
                    s(i.nodes || []), s(i.points)
                }
            this.hideOverlappingLabels(e)
        })), hx.compose(B.Series.types.pie), ry.compose(B.Chart, B.Axis), ob.compose(B.Chart), hV.compose(B.Chart), ab.compose(B.Axis, B.Chart, B.Series), aU.compose(B.Axis, B.Chart, B.Series), rY.compose(B.Pointer), ta.extend(B, ta);
        let hq = B;
        return D.default
    })(), e.exports = s._Highcharts
}, 3280, (t, e, i) => {
    "u" > typeof self ? self : t.e, e.exports = function(t) {
        var e = [function(t, e, i) {
            "use strict";

            function s() {
                return (s = Object.assign.bind()).apply(this, arguments)
            }

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = Array(e); i < e; i++) s[i] = t[i];
                return s
            }

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), i.d(e, "HighchartsReact", function() {
                return h
            });
            var n = i(1),
                a = i.n(n),
                l = "u" > typeof window ? n.useLayoutEffect : n.useEffect,
                h = Object(n.memo)(Object(n.forwardRef)(function(t, e) {
                    var i = Object(n.useRef)(),
                        h = Object(n.useRef)(),
                        c = Object(n.useRef)(t.constructorType),
                        d = Object(n.useRef)(t.highcharts);
                    return l(function() {
                        function e() {
                            var e = t.highcharts || "object" === ("u" < typeof window ? "undefined" : o(window)) && window.Highcharts,
                                s = t.constructorType || "chart";
                            e ? e[s] ? t.options ? h.current = e[s](i.current, t.options, t.callback) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                        }
                        if (h.current) {
                            if (!1 !== t.allowChartUpdate)
                                if (t.constructorType !== c.current || t.highcharts !== d.current) c.current = t.constructorType, d.current = t.highcharts, e();
                                else if (!t.immutable && h.current) {
                                var s, n;
                                (s = h.current).update.apply(s, [t.options].concat(function(t) {
                                    if (Array.isArray(t)) return r(t)
                                }(n = t.updateArgs || [!0, !0]) || function(t) {
                                    if ("u" > typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                                }(n) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return r(t, void 0);
                                        var i = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(t, void 0) : void 0
                                    }
                                }(n) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()))
                            } else e()
                        } else e()
                    }, [t.options, t.allowChartUpdate, t.updateArgs, t.containerProps, t.highcharts, t.constructorType]), l(function() {
                        return function() {
                            h.current && (h.current.destroy(), h.current = null)
                        }
                    }, []), Object(n.useImperativeHandle)(e, function() {
                        return {
                            get chart() {
                                return h.current
                            },
                            container: i
                        }
                    }, []), a.a.createElement("div", s({}, t.containerProps, {
                        ref: i
                    }))
                }));
            e.default = h
        }, function(e, i) {
            e.exports = t
        }];

        function i(t) {
            if (s[t]) return s[t].exports;
            var r = s[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
        }
        var s = {};
        return i.m = e, i.c = s, i.d = function(t, e, s) {
            i.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: s
            })
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 0)
    }(t.r(71645))
}, 23340, t => {
    "use strict";
    var e = t.i(43476),
        i = t.i(71645);

    function s(t, e) {
        let i = t + .5 * Math.PI || 0;
        return [50 + -50 * Math.cos(i += (1 - e) * Math.PI), 50 + 50 * Math.sin(i)]
    }

    function r(t, e, i) {
        let r = Math.min(i, .999),
            o = 2 * Math.PI * r,
            n = o - t * Math.PI * 2 * r,
            a = o - e * Math.PI * 2 * r,
            [l, h] = s(n, i),
            [c, d] = s(a, i),
            p = +(n - a >= Math.PI);
        return `M ${l} ${h} A 50 50 0 ${p} 1 ${c} ${d}`
    }

    function o({
        value: t,
        circumference: s = .75,
        trackWidth: o = 10,
        transitionDelay: n = 0,
        transitionDuration: a = 500,
        framerate: l = 60,
        max: h = 100,
        min: c = 0
    }) {
        let [d, p] = (0, i.useState)(0), u = (0, i.useRef)(0), g = (0, i.useRef)(null), f = (0, i.useRef)(null), m = (0, i.useCallback)(t => t > h ? h : t, [h]), x = (0, i.useCallback)(t => {
            let e = m(t) / (h - c),
                i = u.current,
                s = e - i,
                r = 0,
                o = 1e3 / l,
                n = () => {
                    let t;
                    r += o;
                    let e = (t = r / (a / 2)) < 1 ? s / 2 * (t * t) + i : -(s / 2) * ((t -= 1) * (t - 2) - 1) + i;
                    u.current = e, p(e), r < a && (g.current = setTimeout(n, o))
                };
            n()
        }, [m, h, c, l, a]);
        (0, i.useEffect)(() => (f.current = setTimeout(() => {
            f.current = null, x(t)
        }, n), () => {
            f.current && clearTimeout(f.current), g.current && clearTimeout(g.current)
        }), [t, n, x]);
        let y = -.5 * o,
            b = o + 100,
            v = `${y} ${y} ${b} ${b}`,
            w = r(0, 1, s),
            k = r(0, d, s);
        return (0, e.jsxs)("div", {
            className: "Gauge",
            children: [(0, e.jsx)("div", {
                className: "Gauge-background"
            }), (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: v,
                children: [(0, e.jsx)("path", {
                    d: w,
                    strokeWidth: o,
                    fill: "none",
                    className: "Gauge-track"
                }), (0, e.jsx)("path", {
                    d: k,
                    strokeWidth: o,
                    fill: "none",
                    className: "Gauge-filled",
                    strokeLinecap: "round"
                })]
            })]
        })
    }
    var n = t.i(96746);

    function a({
        text: t,
        onClick: s
    }) {
        let r = (0, i.useId)();
        return (0, e.jsx)("div", {
            "data-tooltip-id": r,
            className: "Tooltip",
            onClick: s,
            role: "button",
            tabIndex: 0,
            "aria-label": "More information",
            children: (0, e.jsx)(n.Tooltip, {
                id: r,
                place: "top",
                children: t
            })
        })
    }
    var l = t.i(99340),
        h = t.i(94561);

    function c(t) {
        if (!t) return 0;
        let e = new Date(t);
        return new Date().getFullYear() - e.getFullYear()
    }

    function d(t) {
        return null === t ? 0 : Math.min(100, 50 * Math.pow(t, .2))
    }

    function p({
        publication: t,
        onToggleGlossary: i
    }) {
        let s = t.totalCitations ? ? 0,
            r = t.recentCitations ? ? 0,
            n = t.fieldCitationRatio,
            p = t.relativeCitationRatio,
            u = function(t) {
                let e = [h.INTERPRETATION_INTRO];
                if (t.journal && e.push(h.interpretationJournalHtml(t.journal.title)), t.totalCitations > 0) {
                    let i = h.interpretationCitationsHtml(t.totalCitations, (0, l.formatNumberWithDelimiter)(t.totalCitations)),
                        s = function(t) {
                            let e = c(t.publicationDate),
                                i = 0 !== t.recentCitations;
                            if (e < 2 || !i) return "";
                            let s = Math.floor(t.recentCitations / t.totalCitations * 100),
                                r = h.interpretationRecency(String(s));
                            return s > 100 / e * 1.5 && t.totalCitations >= 10 ? `${r}, ${h.INTERPRETATION_HIGH_RECENCY_HTML}.` : `${r}.`
                        }(t);
                    e.push(i + (s ? " " + s : ""))
                } else {
                    var i;
                    let s, r = h.INTERPRETATION_NO_CITATIONS,
                        o = null === (s = (i = t.publicationDate) ? new Date(i).getFullYear() : null) ? "" : s <= 1997 ? h.INTERPRETATION_OLDER_PAPER : s === new Date().getFullYear() ? h.INTERPRETATION_CURRENT_PAPER : "";
                    e.push(r + (o ? " " + o : ""))
                }
                return e.join(" ")
            }(t),
            g = function(t) {
                let e = t.fieldCitationRatio;
                if (null !== e && e >= 5) return h.interpretationFcrVeryHighHtml((0, l.formatRatio)(e));
                if (null !== e && e >= 1.2) return h.interpretationFcrHighHtml((0, l.formatRatio)(e));
                if (null !== e && e >= .8) return h.INTERPRETATION_FCR_AVERAGE;
                if (null !== e && e > 0) {
                    let t = Math.floor(100 * e);
                    return h.interpretationFcrLow(String(t))
                }
                if (2 >= c(t.publicationDate) && t.totalCitations > 0) return h.INTERPRETATION_FCR_NA_NEW;
                return h.INTERPRETATION_FCR_NA_OTHER
            }(t);
        return (0, e.jsxs)("div", {
            className: "SummaryTab",
            children: [(0, e.jsx)("div", {
                className: "SummaryTab-summary-wrapper",
                children: (0, e.jsxs)("div", {
                    className: "SummaryTab-summary",
                    children: [(0, e.jsx)("span", {
                        className: "count"
                    }), (0, e.jsx)("span", {
                        className: "content",
                        children: (0, e.jsx)("p", {
                            dangerouslySetInnerHTML: {
                                __html: h.SUMMARY_TAB_DATA_FROM_DIMENSIONS_HTML
                            }
                        })
                    })]
                })
            }), (0, e.jsxs)("div", {
                className: "SummaryTab-content",
                children: [(0, e.jsxs)("div", {
                    className: "SummaryTab-content-text",
                    children: [(0, e.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: u
                        }
                    }), (0, e.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: g
                        }
                    }), (0, e.jsx)("a", {
                        href: t.dimensionsUri,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "jump-button",
                        children: "View more details in Dimensions"
                    })]
                }), (0, e.jsxs)("div", {
                    className: "SummaryTab-content-gauges",
                    children: [(0, e.jsxs)("div", {
                        className: "SummaryTab-gauge-container total-citations",
                        children: [(0, e.jsx)("div", {
                            className: "SummaryTab-gauge",
                            children: (0, e.jsx)(o, {
                                value: Math.min(10 * Math.pow(s, .4), 100),
                                circumference: .75
                            })
                        }), (0, e.jsxs)("div", {
                            className: "metric-data",
                            children: [(0, e.jsx)("div", {
                                className: "count",
                                children: (0, l.formatThousands)(s)
                            }), (0, e.jsx)("div", {
                                className: "label",
                                children: h.summaryTabLabelCitations(s)
                            })]
                        }), (0, e.jsx)(a, {
                            onClick: i,
                            text: h.SUMMARY_TAB_DESC_TOTAL_CITATIONS
                        })]
                    }), (0, e.jsxs)("div", {
                        className: "SummaryTab-gauge-container recent-citations",
                        children: [(0, e.jsx)("div", {
                            className: "SummaryTab-gauge",
                            children: (0, e.jsx)(o, {
                                value: s && r ? r / s * 100 : 0,
                                circumference: .75,
                                transitionDelay: 500
                            })
                        }), (0, e.jsxs)("div", {
                            className: "metric-data",
                            children: [(0, e.jsx)("div", {
                                className: "count",
                                children: (0, l.formatThousands)(r)
                            }), (0, e.jsx)("div", {
                                className: "label",
                                children: h.summaryTabLabelRecentCitations(r)
                            })]
                        }), (0, e.jsx)(a, {
                            onClick: i,
                            text: h.SUMMARY_TAB_DESC_RECENT_CITATIONS
                        })]
                    }), (0, e.jsxs)("div", {
                        className: "SummaryTab-gauge-container fcr",
                        children: [(0, e.jsx)("div", {
                            className: "SummaryTab-gauge",
                            children: (0, e.jsx)(o, {
                                value: d(n),
                                circumference: .75,
                                transitionDelay: 1e3
                            })
                        }), (0, e.jsxs)("div", {
                            className: "metric-data",
                            children: [(0, e.jsx)("div", {
                                className: "count",
                                children: (0, l.formatFloatingPoint)(n)
                            }), (0, e.jsx)("div", {
                                className: "label",
                                children: h.SUMMARY_TAB_LABEL_FIELD_CITATION_RATIO
                            })]
                        }), (0, e.jsx)(a, {
                            onClick: i,
                            text: h.SUMMARY_TAB_DESC_FCR
                        })]
                    }), (0, e.jsxs)("div", {
                        className: "SummaryTab-gauge-container rcr",
                        children: [(0, e.jsx)("div", {
                            className: "SummaryTab-gauge",
                            children: (0, e.jsx)(o, {
                                value: d(p),
                                circumference: .75,
                                transitionDelay: 1500
                            })
                        }), (0, e.jsxs)("div", {
                            className: "metric-data",
                            children: [(0, e.jsx)("div", {
                                className: "count",
                                children: (0, l.formatFloatingPoint)(p)
                            }), (0, e.jsx)("div", {
                                className: "label",
                                children: h.SUMMARY_TAB_LABEL_RELATIVE_CITATION_RATIO
                            })]
                        }), (0, e.jsx)(a, {
                            onClick: i,
                            text: h.SUMMARY_TAB_DESC_RCR
                        })]
                    })]
                })]
            })]
        })
    }
    var u = t.i(66091),
        g = t.i(64961),
        f = t.i(3280);

    function m({
        data: t
    }) {
        let i = function(t) {
            if (!t.length) return [];
            let e = Object.fromEntries(t.map(t => [t.id, t])),
                i = t[0].id;
            return Array.from({
                length: new Date().getFullYear() - i + 1
            }, (t, e) => i + e).map(t => ({
                x: t,
                y: e[t] ? .count ? ? 0
            }))
        }(t);
        return (0, e.jsx)("div", {
            className: "CitationsTab-chart",
            children: (0, e.jsx)(f.default, {
                highcharts: g.default,
                options: {
                    chart: {
                        style: {
                            fontFamily: "system-ui, -apple-system, sans-serif"
                        }
                    },
                    credits: {
                        enabled: !1
                    },
                    plotOptions: {
                        line: {
                            color: "#1565c0",
                            lineWidth: 4,
                            marker: {
                                radius: 6
                            }
                        }
                    },
                    series: [{
                        type: "line",
                        data: i,
                        name: "Citations this year",
                        showInLegend: !1
                    }],
                    title: {
                        style: {
                            fontWeight: "normal"
                        },
                        text: "Citations by year"
                    },
                    xAxis: {
                        allowDecimals: !1,
                        lineColor: "#ccd6eb",
                        minorTicks: !1,
                        tickLength: 0,
                        title: void 0
                    },
                    yAxis: {
                        allowDecimals: !1,
                        labels: {
                            format: "{value:,.0f}"
                        },
                        title: void 0
                    }
                }
            })
        })
    }

    function x({
        citation: t
    }) {
        var i;
        let s = (i = t.publicationDate) ? new Date(i).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
            }) : null,
            r = t.journal ? .title;
        return r && s ? (0, e.jsx)("div", {
            className: "metadata",
            dangerouslySetInnerHTML: {
                __html: h.citationsTabArticleFullHtml(r, s)
            }
        }) : r ? (0, e.jsx)("div", {
            className: "metadata",
            dangerouslySetInnerHTML: {
                __html: h.citationsTabArticleJournalHtml(r)
            }
        }) : s ? (0, e.jsx)("div", {
            className: "metadata",
            dangerouslySetInnerHTML: {
                __html: h.citationsTabArticleDateHtml(s)
            }
        }) : null
    }

    function y({
        citation: t,
        maxLength: i
    }) {
        let s;
        return t.doi ? s = `https://doi.org/${t.doi}` : t.pmid && (s = `https://pubmed.ncbi.nlm.nih.gov/${t.pmid}`), (0, e.jsxs)("li", {
            className: "CitationsTab-citation-item",
            children: [(0, e.jsx)("h2", {
                className: "title",
                children: s ? (0, e.jsx)("a", {
                    href: s,
                    target: "_blank",
                    rel: "noreferrer",
                    children: t.title
                }) : t.title
            }), (0, e.jsx)(x, {
                citation: t
            }), t.authorNames && (0, e.jsxs)("div", {
                className: "metadata",
                children: [(0, e.jsx)("strong", {
                    children: "Authors: "
                }), (0, e.jsx)(u.default, {
                    text: t.authorNames,
                    maxLength: 100
                })]
            }), t.abstract && (0, e.jsx)("div", {
                className: "abstract",
                children: (0, e.jsx)(u.default, {
                    text: t.abstract,
                    maxLength: i
                })
            })]
        })
    }

    function b({
        publication: t
    }) {
        let i = t.totalCitations;
        if (!i) return (0, e.jsx)("div", {
            className: "CitationsTab",
            children: (0, e.jsx)("div", {
                className: "CitationsTab-empty-message",
                children: h.CITATIONS_TAB_NO_CITATIONS
            })
        });
        let s = (0, l.formatNumberWithDelimiter)(i),
            r = t.citations.length,
            o = t.citationsYearlyAggregation.length > 1,
            n = o ? 100 : 250;
        return (0, e.jsxs)("div", {
            className: "CitationsTab",
            children: [(0, e.jsxs)("div", {
                className: "CitationsTab-summary",
                children: [(0, e.jsxs)("span", {
                    className: "count",
                    children: [(0, e.jsx)("span", {
                        className: "number",
                        children: s
                    }), (0, e.jsx)("span", {
                        className: "text",
                        children: h.citationsLabel(i)
                    })]
                }), (0, e.jsxs)("span", {
                    className: "content",
                    children: [(0, e.jsx)("span", {
                        dangerouslySetInnerHTML: {
                            __html: h.citationsTabDescriptionHtml(i, s, String(r))
                        }
                    }), " ", i > r && (0, e.jsx)("span", {
                        dangerouslySetInnerHTML: {
                            __html: h.citationsTabVisitHtml(t.dimensionsUri)
                        }
                    })]
                }), (0, e.jsx)("span", {
                    className: "button",
                    children: (0, e.jsx)("a", {
                        href: t.dimensionsUri,
                        target: "_blank",
                        rel: "noreferrer",
                        children: h.BUTTON_VIEW_IN_DIMENSIONS
                    })
                })]
            }), o && (0, e.jsx)(m, {
                data: t.citationsYearlyAggregation
            }), (0, e.jsx)("ol", {
                className: "CitationsTab-list",
                children: t.citations.map((t, i) => (0, e.jsx)(y, {
                    citation: t,
                    maxLength: n
                }, i))
            })]
        })
    }
    g.default.setOptions({
        lang: {
            thousandsSep: ","
        }
    });
    let v = ["#0d47a1", "#1565c0", "#1976d2", "#1e88e5", "#2196f3", "#42a5f5", "#64b5f6", "#90caf9", "#bbdefb", "#e3f2fd"];

    function w({
        categories: t
    }) {
        let [s, r] = (0, i.useState)(!1), o = s ? t : t.slice(0, 15), n = t.reduce((t, e) => t + e.count, 0), a = t.map(t => ({
            name: t.name,
            y: t.count
        })), l = t.length - 15, c = t.length > 15 ? (0, e.jsxs)("button", {
            type: "button",
            onClick: () => r(!s),
            className: "CitingResearchCategoriesTab-button",
            children: ["[", " ", s ? (0, h.buttonShowFewerCategories)(l) : (0, h.buttonShowMoreCategories)(l), " ", "]"]
        }) : null;
        return (0, e.jsxs)("div", {
            className: "CitingResearchCategoriesTab-chart-wrapper",
            children: [(0, e.jsx)("div", {
                className: "CitingResearchCategoriesTab-chart",
                children: (0, e.jsx)(f.default, {
                    highcharts: g.default,
                    options: {
                        chart: {
                            height: 400,
                            style: {
                                fontFamily: "system-ui, -apple-system, sans-serif"
                            },
                            type: "pie"
                        },
                        credits: {
                            enabled: !1
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: !0,
                                colors: v,
                                dataLabels: {
                                    enabled: !1
                                },
                                showInLegend: !1
                            }
                        },
                        series: [{
                            type: "pie",
                            data: a,
                            name: "Categories"
                        }],
                        title: {
                            text: void 0
                        },
                        tooltip: {
                            headerFormat: "",
                            pointFormat: '<span style="color:{point.color}">●</span> {point.name}: <b>{point.percentage:.2f}%</b>'
                        }
                    }
                })
            }), (0, e.jsxs)("div", {
                className: "CitingResearchCategoriesTab-legend",
                children: [c, (0, e.jsxs)("table", {
                    children: [(0, e.jsx)("thead", {
                        children: (0, e.jsxs)("tr", {
                            children: [(0, e.jsx)("th", {
                                className: "category-color"
                            }), (0, e.jsx)("th", {
                                className: "category-name",
                                children: "Research Category (FOR code)"
                            }), (0, e.jsx)("th", {
                                className: "category-percentage",
                                children: "%"
                            })]
                        })
                    }), (0, e.jsx)("tbody", {
                        children: o.map((t, i) => {
                            let s = (t.count / n * 100).toFixed(2),
                                r = .01 > Number(s) ? "< 0.01" : s,
                                o = i % v.length;
                            return (0, e.jsxs)("tr", {
                                children: [(0, e.jsx)("td", {
                                    className: "category-color",
                                    style: {
                                        backgroundColor: v[o]
                                    }
                                }), (0, e.jsx)("td", {
                                    className: "category-name",
                                    children: t.name
                                }), (0, e.jsx)("td", {
                                    className: "category-percentage",
                                    children: r
                                })]
                            }, i)
                        })
                    })]
                }), c]
            })]
        })
    }

    function k({
        publication: t
    }) {
        let i = t.researchCategories;
        if (!i.length) return (0, e.jsx)("div", {
            className: "CitingResearchCategoriesTab",
            children: (0, e.jsx)("div", {
                className: "CitingResearchCategoriesTab-empty-message",
                children: h.CATEGORIES_TAB_NO_CATEGORIES
            })
        });
        let s = i.length,
            r = (0, l.formatNumberWithDelimiter)(s);
        return (0, e.jsxs)("div", {
            className: "CitingResearchCategoriesTab",
            children: [(0, e.jsxs)("div", {
                className: "CitingResearchCategoriesTab-summary",
                children: [(0, e.jsxs)("span", {
                    className: "count",
                    children: [(0, e.jsx)("span", {
                        className: "number",
                        children: r
                    }), (0, e.jsx)("span", {
                        className: "text",
                        children: 1 === s ? "category" : "categories"
                    })]
                }), (0, e.jsx)("span", {
                    className: "content",
                    children: h.CATEGORIES_TAB_DESCRIPTION
                }), (0, e.jsx)("span", {
                    className: "button",
                    children: (0, e.jsx)("a", {
                        href: t.dimensionsUri,
                        target: "_blank",
                        rel: "noreferrer",
                        children: h.BUTTON_VIEW_IN_DIMENSIONS
                    })
                })]
            }), (0, e.jsx)(w, {
                categories: i
            })]
        })
    }
    var T = t.i(73128);

    function S() {
        return (0, e.jsxs)("div", {
            children: [(0, e.jsx)("h1", {
                children: "Guide to the metrics"
            }), (0, e.jsx)("h2", {
                children: "Total citations"
            }), (0, e.jsx)("p", {
                children: "This is the total number of times a publication has been cited. We count citations from the reference list in all publications that have been indexed by Dimensions."
            }), (0, e.jsx)("h2", {
                children: "Recent citations"
            }), (0, e.jsx)("p", {
                children: "The recent citations value is the number of citations that were received in the last two years."
            }), (0, e.jsx)("h2", {
                children: "Field Citation Ratio (FCR)"
            }), (0, e.jsx)("p", {
                children: "The Field Citation Ratio (FCR) indicates the relative citation performance of an article, when compared to similarly-aged articles in its subject area. The FCR is normalized to 1.0 for this selection of articles. An FCR value of more than 1.0 shows that the publication has a higher than average number of citations for its group (defined by its FoR subject code and publication year)."
            }), (0, e.jsx)("p", {
                children: "Articles that are less than 2 years old do not have an FCR. An article with zero citations has an FCR of 0."
            }), (0, e.jsx)("h2", {
                children: "Relative Citation Ratio (RCR)"
            }), (0, e.jsx)("p", {
                children: "The Relative Citation Ratio (RCR) indicates the relative citation performance of an article, when compared to other articles in its area of research. The RCR is normalized to 1.0 and calculated for all articles funded by the NIH in the Dimensions catalog. An RCR of more than 1.0 shows that a publication has an above average citation rate for its group, when defined by the subject area citation rates of the articles that have been cited with it."
            }), (0, e.jsx)("p", {
                children: "Articles that are less than 2 years old, or do not have citations, do not have an RCR."
            }), (0, e.jsx)("h1", {
                children: "Where can I find out more?"
            }), (0, e.jsxs)("p", {
                children: ["Please visit our", " ", (0, e.jsx)("a", {
                    href: "https://support.dimensions.ai/support/home",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: "Support Center"
                }), " ", "to read more about Dimensions or email us at", " ", (0, e.jsx)("a", {
                    href: "mailto:support@dimensions.ai",
                    children: "support@dimensions.ai"
                }), "."]
            })]
        })
    }
    let M = [{
        key: "summary",
        label: "Summary"
    }, {
        key: "citations",
        label: "Citations"
    }, {
        key: "categories",
        label: "Citing research categories"
    }];

    function C({
        publication: t,
        rootUrl: s,
        initialTab: r = "summary"
    }) {
        let [o, n] = (0, i.useState)(["summary", "citations", "categories"].includes(r) ? r : "summary"), [a, l] = (0, i.useState)(!1), h = (0, i.useCallback)(e => {
            n(e);
            let i = `${s}/details/id/${t.id}`;
            "summary" !== e && (i = `${i}/${e}`);
            try {
                window.history.replaceState({}, "", i)
            } catch {}
        }, [s, t.id]), c = (0, i.useCallback)(() => {
            l(t => !t)
        }, []);
        return (0, e.jsxs)("div", {
            className: "DocumentTabs",
            children: [(0, e.jsx)("div", {
                className: "DocumentTabs-tabs",
                children: M.map(({
                    key: t,
                    label: i
                }) => (0, e.jsx)("a", {
                    href: `#${t}`,
                    onClick: e => {
                        e.preventDefault(), h(t)
                    },
                    className: o === t ? "active" : "",
                    children: i
                }, t))
            }), (0, e.jsxs)("div", {
                className: "DocumentTabs-content",
                children: ["summary" === o && (0, e.jsx)(p, {
                    publication: t,
                    onToggleGlossary: c
                }), "citations" === o && (0, e.jsx)(b, {
                    publication: t
                }), "categories" === o && (0, e.jsx)(k, {
                    publication: t
                })]
            }), (0, e.jsx)(T.default, {
                visible: a,
                onClose: c,
                children: (0, e.jsx)(S, {})
            })]
        })
    }
    t.s(["default", () => C], 23340)
}, 18958, t => {
    "use strict";
    var e = t.i(43476),
        i = t.i(71645),
        s = t.i(73128);

    function r() {
        return (0, e.jsxs)("div", {
            children: [(0, e.jsx)("h1", {
                children: "What is this page?"
            }), (0, e.jsx)("p", {
                children: "This is a Dimensions details page, which tells you about the citations that have been identified for a publication. Several metrics to help you understand the scholarly impact of the publication:"
            }), (0, e.jsxs)("ul", {
                children: [(0, e.jsx)("li", {
                    children: "Total citations"
                }), (0, e.jsx)("li", {
                    children: "Recent citations"
                }), (0, e.jsx)("li", {
                    children: "Relative Citation Ratio (RCR)"
                }), (0, e.jsx)("li", {
                    children: "Field Citation Ratio (FCR)"
                })]
            }), (0, e.jsx)("p", {
                children: 'You can use the Dimensions details page to find out which works that have cited this particular publication - this information is available in the "Citations tab". You can also go to the "Citing research categories" tab to see the research categories (subject areas) of the citing publications.'
            }), (0, e.jsx)("h1", {
                children: "Where can I find out more?"
            }), (0, e.jsxs)("p", {
                children: ["Please visit our", " ", (0, e.jsx)("a", {
                    href: "https://support.dimensions.ai/support/home",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: "Support Center"
                }), " ", "to read more about Dimensions or email us at", " ", (0, e.jsx)("a", {
                    href: "mailto:support@dimensions.ai",
                    children: "support@dimensions.ai"
                }), "."]
            })]
        })
    }
    var o = t.i(96746);

    function n({
        shareUrl: t,
        shareTitle: i
    }) {
        let s = encodeURIComponent(t),
            r = encodeURIComponent(i);
        return (0, e.jsxs)("div", {
            className: "share-networks",
            children: [(0, e.jsx)("a", {
                href: `https://facebook.com/sharer/sharer.php?u=${s}`,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Share on Facebook",
                className: "network facebook",
                children: (0, e.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, e.jsx)("path", {
                        d: "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
                    })
                })
            }), (0, e.jsx)("a", {
                href: `https://twitter.com/intent/tweet/?text=${r}%20${s}`,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Share on X (Twitter)",
                className: "network twitter",
                children: (0, e.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, e.jsx)("path", {
                        d: "M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
                    })
                })
            }), (0, e.jsx)("a", {
                href: `mailto:?subject=${r}&body=${s}`,
                "aria-label": "Share via email",
                className: "network email",
                children: (0, e.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, e.jsx)("path", {
                        d: "M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"
                    })
                })
            })]
        })
    }

    function a({
        shareUrl: t,
        shareTitle: i
    }) {
        return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)("div", {
                tabIndex: 0,
                className: "Sharing Header-button",
                "data-tooltip-id": "shareTooltip",
                children: "Share"
            }), (0, e.jsx)(o.Tooltip, {
                openOnClick: !0,
                openEvents: {
                    click: !0,
                    dblclick: !1,
                    focus: !0,
                    mousedown: !1,
                    mouseenter: !1
                },
                id: "shareTooltip",
                variant: "light",
                place: "bottom",
                clickable: !0,
                className: "Sharing",
                children: (0, e.jsx)(n, {
                    shareUrl: t,
                    shareTitle: i
                })
            })]
        })
    }
    var l = t.i(94561);

    function h({
        publication: t,
        rootUrl: o
    }) {
        let [n, h] = (0, i.useState)(!1), c = (0, i.useCallback)(() => {
            h(t => !t)
        }, []), d = t ? `/?identifier=${t.id}#build` : "/#build", p = `${o}/details/id/${t.id}`, u = `Dimensions - ${t.title}`;
        return (0, e.jsx)("div", {
            className: "HeaderButtonBar-wrapper",
            children: (0, e.jsxs)("div", {
                className: "HeaderButtonBar",
                children: [(0, e.jsx)("a", {
                    href: d,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "Header-button",
                    children: l.BUTTON_EMBED
                }), (0, e.jsx)("button", {
                    type: "button",
                    onClick: c,
                    className: "Header-button",
                    children: l.BUTTON_ABOUT
                }), (0, e.jsx)(a, {
                    shareUrl: p,
                    shareTitle: u
                }), (0, e.jsx)(s.default, {
                    visible: n,
                    onClose: c,
                    children: (0, e.jsx)(r, {})
                })]
            })
        })
    }
    t.s(["default", () => h], 18958)
}]);

//# debugId=4260ab4d-974e-1cba-851e-c6f0460e819a
//# sourceMappingURL=e2b4fe307fcb7992.js.map