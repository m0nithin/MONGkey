(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [591], {
        81749: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return v
                }
            });
            let n = i(21024),
                r = i(68533)._(i(2265)),
                s = n._(i(54887)),
                o = n._(i(42251)),
                a = i(38630),
                l = i(76906),
                u = i(60337);
            i(76184);
            let h = i(46993),
                c = n._(i(10536)),
                d = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function p(t, e, i, n, r, s) {
                let o = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== o && (t["data-loaded-src"] = o, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && r(!0), null == i ? void 0 : i.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                r = !1;
                            i.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => r,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    r = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function f(t) {
                let [e, i] = r.version.split(".", 2), n = parseInt(e, 10), s = parseInt(i, 10);
                return n > 18 || 18 === n && s >= 3 ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            let m = (0, r.forwardRef)((t, e) => {
                let {
                    src: i,
                    srcSet: n,
                    sizes: s,
                    height: o,
                    width: a,
                    decoding: l,
                    className: u,
                    style: h,
                    fetchPriority: c,
                    placeholder: d,
                    loading: m,
                    unoptimized: g,
                    fill: v,
                    onLoadRef: y,
                    onLoadingCompleteRef: x,
                    setBlurComplete: P,
                    setShowAltText: b,
                    onLoad: w,
                    onError: S,
                    ...C
                } = t;
                return r.default.createElement("img", { ...C,
                    ...f(c),
                    loading: m,
                    width: a,
                    height: o,
                    decoding: l,
                    "data-nimg": v ? "fill" : "1",
                    className: u,
                    style: h,
                    sizes: s,
                    srcSet: n,
                    src: i,
                    ref: (0, r.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (S && (t.src = t.src), t.complete && p(t, d, y, x, P, g))
                    }, [i, d, y, x, P, S, g, e]),
                    onLoad: t => {
                        p(t.currentTarget, d, y, x, P, g)
                    },
                    onError: t => {
                        b(!0), "empty" !== d && P(!0), S && S(t)
                    }
                })
            });

            function g(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: i
                } = t, n = {
                    as: "image",
                    imageSrcSet: i.srcSet,
                    imageSizes: i.sizes,
                    crossOrigin: i.crossOrigin,
                    referrerPolicy: i.referrerPolicy,
                    ...f(i.fetchPriority)
                };
                return e && s.default.preload ? (s.default.preload(i.src, n), null) : r.default.createElement(o.default, null, r.default.createElement("link", {
                    key: "__nimg-" + i.src + i.srcSet + i.sizes,
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src,
                    ...n
                }))
            }
            let v = (0, r.forwardRef)((t, e) => {
                let i = (0, r.useContext)(h.RouterContext),
                    n = (0, r.useContext)(u.ImageConfigContext),
                    s = (0, r.useMemo)(() => {
                        let t = d || n || l.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            i = t.deviceSizes.sort((t, e) => t - e);
                        return { ...t,
                            allSizes: e,
                            deviceSizes: i
                        }
                    }, [n]),
                    {
                        onLoad: o,
                        onLoadingComplete: p
                    } = t,
                    f = (0, r.useRef)(o);
                (0, r.useEffect)(() => {
                    f.current = o
                }, [o]);
                let v = (0, r.useRef)(p);
                (0, r.useEffect)(() => {
                    v.current = p
                }, [p]);
                let [y, x] = (0, r.useState)(!1), [P, b] = (0, r.useState)(!1), {
                    props: w,
                    meta: S
                } = (0, a.getImgProps)(t, {
                    defaultLoader: c.default,
                    imgConf: s,
                    blurComplete: y,
                    showAltText: P
                });
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(m, { ...w,
                    unoptimized: S.unoptimized,
                    placeholder: S.placeholder,
                    fill: S.fill,
                    onLoadRef: f,
                    onLoadingCompleteRef: v,
                    setBlurComplete: x,
                    setShowAltText: b,
                    ref: e
                }), S.priority ? r.default.createElement(g, {
                    isAppRouter: !i,
                    imgAttributes: w
                }) : null)
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        2595: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(21024)._(i(2265)).default.createContext({})
        },
        43044: function(t, e) {
            "use strict";

            function i(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: i = !1,
                    hasQuery: n = !1
                } = void 0 === t ? {} : t;
                return e || i && n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        38630: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), i(76184);
            let n = i(67160),
                r = i(76906);

            function s(t) {
                return void 0 !== t.default
            }

            function o(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function a(t, e) {
                var i;
                let a, l, u, {
                        src: h,
                        sizes: c,
                        unoptimized: d = !1,
                        priority: p = !1,
                        loading: f,
                        className: m,
                        quality: g,
                        width: v,
                        height: y,
                        fill: x = !1,
                        style: P,
                        onLoad: b,
                        onLoadingComplete: w,
                        placeholder: S = "empty",
                        blurDataURL: C,
                        fetchPriority: A,
                        layout: T,
                        objectFit: E,
                        objectPosition: V,
                        lazyBoundary: M,
                        lazyRoot: D,
                        ...j
                    } = t,
                    {
                        imgConf: k,
                        showAltText: R,
                        blurComplete: L,
                        defaultLoader: O
                    } = e,
                    F = k || r.imageConfigDefault;
                if ("allSizes" in F) a = F;
                else {
                    let t = [...F.deviceSizes, ...F.imageSizes].sort((t, e) => t - e),
                        e = F.deviceSizes.sort((t, e) => t - e);
                    a = { ...F,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                let B = j.loader || O;
                delete j.loader, delete j.srcSet;
                let I = "__next_img_default" in B;
                if (I) {
                    if ("custom" === a.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = B;
                    B = e => {
                        let {
                            config: i,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (T) {
                    "fill" === T && (x = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[T];
                    t && (P = { ...P,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[T];
                    e && !c && (c = e)
                }
                let _ = "",
                    W = o(v),
                    U = o(y);
                if ("object" == typeof(i = h) && (s(i) || void 0 !== i.src)) {
                    let t = s(h) ? h.default : h;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (l = t.blurWidth, u = t.blurHeight, C = C || t.blurDataURL, _ = t.src, !x) {
                        if (W || U) {
                            if (W && !U) {
                                let e = W / t.width;
                                U = Math.round(t.height * e)
                            } else if (!W && U) {
                                let e = U / t.height;
                                W = Math.round(t.width * e)
                            }
                        } else W = t.width, U = t.height
                    }
                }
                let $ = !p && ("lazy" === f || void 0 === f);
                (!(h = "string" == typeof h ? h : _) || h.startsWith("data:") || h.startsWith("blob:")) && (d = !0, $ = !1), a.unoptimized && (d = !0), I && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0), p && (A = "high");
                let z = o(g),
                    N = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: E,
                        objectPosition: V
                    } : {}, R ? {} : {
                        color: "transparent"
                    }, P),
                    H = L || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: W,
                        heightInt: U,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: C || "",
                        objectFit: N.objectFit
                    }) + '")' : 'url("' + S + '")',
                    X = H ? {
                        backgroundSize: N.objectFit || "cover",
                        backgroundPosition: N.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: H
                    } : {},
                    G = function(t) {
                        let {
                            config: e,
                            src: i,
                            unoptimized: n,
                            width: r,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (n) return {
                            src: i,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, i) {
                            let {
                                deviceSizes: n,
                                allSizes: r
                            } = t;
                            if (i) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(i); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: r.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: r,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))],
                                kind: "x"
                            }
                        }(e, r, o), h = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((t, n) => a({
                                config: e,
                                src: i,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: i,
                                quality: s,
                                width: l[h]
                            })
                        }
                    }({
                        config: a,
                        src: h,
                        unoptimized: d,
                        width: W,
                        quality: z,
                        sizes: c,
                        loader: B
                    });
                return {
                    props: { ...j,
                        loading: $ ? "lazy" : f,
                        fetchPriority: A,
                        width: W,
                        height: U,
                        decoding: "async",
                        className: m,
                        style: { ...N,
                            ...X
                        },
                        sizes: G.sizes,
                        srcSet: G.srcSet,
                        src: G.src
                    },
                    meta: {
                        unoptimized: d,
                        priority: p,
                        placeholder: S,
                        fill: x
                    }
                }
            }
        },
        42251: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    defaultHead: function() {
                        return u
                    },
                    default: function() {
                        return p
                    }
                });
            let n = i(21024),
                r = i(68533)._(i(2265)),
                s = n._(i(27392)),
                o = i(2595),
                a = i(27484),
                l = i(43044);

            function u(t) {
                void 0 === t && (t = !1);
                let e = [r.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return t || e.push(r.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function h(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === r.default.Fragment ? t.concat(r.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            i(76184);
            let c = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(t, e) {
                let {
                    inAmpMode: i
                } = e;
                return t.reduce(h, []).reverse().concat(u(i).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        i = new Set,
                        n = {};
                    return r => {
                        let s = !0,
                            o = !1;
                        if (r.key && "number" != typeof r.key && r.key.indexOf("$") > 0) {
                            o = !0;
                            let e = r.key.slice(r.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (r.type) {
                            case "title":
                            case "base":
                                e.has(r.type) ? s = !1 : e.add(r.type);
                                break;
                            case "meta":
                                for (let t = 0, e = c.length; t < e; t++) {
                                    let e = c[t];
                                    if (r.props.hasOwnProperty(e)) {
                                        if ("charSet" === e) i.has(e) ? s = !1 : i.add(e);
                                        else {
                                            let t = r.props[e],
                                                i = n[e] || new Set;
                                            ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t), n[e] = i)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = { ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, r.default.cloneElement(t, e)
                    }
                    return r.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let p = function(t) {
                let {
                    children: e
                } = t, i = (0, r.useContext)(o.AmpStateContext), n = (0, r.useContext)(a.HeadManagerContext);
                return r.default.createElement(s.default, {
                    reduceComponentsToState: d,
                    headManager: n,
                    inAmpMode: (0, l.isInAmpMode)(i)
                }, e)
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        67160: function(t, e) {
            "use strict";

            function i(t) {
                let {
                    widthInt: e,
                    heightInt: i,
                    blurWidth: n,
                    blurHeight: r,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = n ? 40 * n : e, l = r ? 40 * r : i, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        60337: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(21024)._(i(2265)),
                r = i(76906),
                s = n.default.createContext(r.imageConfigDefault)
        },
        76906: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    VALID_LOADERS: function() {
                        return i
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        67447: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    unstable_getImgProps: function() {
                        return l
                    },
                    default: function() {
                        return u
                    }
                });
            let n = i(21024),
                r = i(38630),
                s = i(76184),
                o = i(81749),
                a = n._(i(10536)),
                l = t => {
                    (0, s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: e
                    } = (0, r.getImgProps)(t, {
                        defaultLoader: a.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
                    return {
                        props: e
                    }
                },
                u = o.Image
        },
        10536: function(t, e) {
            "use strict";

            function i(t) {
                let {
                    config: e,
                    src: i,
                    width: n,
                    quality: r
                } = t;
                return e.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (r || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i.__next_img_default = !0;
            let n = i
        },
        46993: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(21024)._(i(2265)).default.createContext(null)
        },
        27392: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = i(2265),
                r = n.useLayoutEffect,
                s = n.useEffect;

            function o(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: i
                } = t;

                function o() {
                    if (e && e.mountedInstances) {
                        let r = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(i(r, t))
                    }
                }
                return r(() => {
                    var i;
                    return null == e || null == (i = e.mountedInstances) || i.add(t.children), () => {
                        var i;
                        null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                    }
                }), r(() => (e && (e._pendingUpdate = o), () => {
                    e && (e._pendingUpdate = o)
                })), s(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        76184: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let i = t => {}
        },
        30622: function(t, e, i) {
            "use strict";
            var n = i(2265),
                r = Symbol.for("react.element"),
                s = Symbol.for("react.fragment"),
                o = Object.prototype.hasOwnProperty,
                a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(t, e, i) {
                var n, s = {},
                    u = null,
                    h = null;
                for (n in void 0 !== i && (u = "" + i), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (h = e.ref), e) o.call(e, n) && !l.hasOwnProperty(n) && (s[n] = e[n]);
                if (t && t.defaultProps)
                    for (n in e = t.defaultProps) void 0 === s[n] && (s[n] = e[n]);
                return {
                    $$typeof: r,
                    type: t,
                    key: u,
                    ref: h,
                    props: s,
                    _owner: a.current
                }
            }
            e.Fragment = s, e.jsx = u, e.jsxs = u
        },
        57437: function(t, e, i) {
            "use strict";
            t.exports = i(30622)
        },
        16691: function(t, e, i) {
            t.exports = i(67447)
        },
        29115: function(t, e, i) {
            "use strict";
            let n;
            i.d(e, {
                v: function() {
                    return tb
                }
            });
            var r, s = i(46567),
                o = i(81356);
            let a = {
                    current: !1
                },
                l = t => Array.isArray(t) && "number" == typeof t[0],
                u = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                h = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: u([0, .65, .55, 1]),
                    circOut: u([.55, 0, 1, .45]),
                    backIn: u([.31, .01, .66, -.59]),
                    backOut: u([.33, 1.53, .69, .99])
                };
            var c = i(26977);
            let d = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function p(t, e, i, n) {
                if (t === e && i === n) return c.Z;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = d(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : d(r(t), e, n)
            }
            let f = p(.42, 0, 1, 1),
                m = p(0, 0, .58, 1),
                g = p(.42, 0, .58, 1),
                v = t => Array.isArray(t) && "number" != typeof t[0];
            var y = i(927),
                x = i(90933),
                P = i(30484);
            let b = p(.33, 1.53, .69, .99),
                w = (0, P.M)(b),
                S = (0, x.o)(w),
                C = {
                    linear: c.Z,
                    easeIn: f,
                    easeInOut: g,
                    easeOut: m,
                    circIn: y.Z7,
                    circInOut: y.X7,
                    circOut: y.Bn,
                    backIn: w,
                    backInOut: S,
                    backOut: b,
                    anticipate: t => (t *= 2) < 1 ? .5 * w(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                A = t => {
                    if (Array.isArray(t)) {
                        (0, s.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return p(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, s.k)(void 0 !== C[t], `Invalid easing type '${t}'`), C[t]) : t
                };
            var T = i(2199),
                E = i(43021),
                V = i(40007);

            function M(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var D = i(93257),
                j = i(72808),
                k = i(26002);
            let R = (t, e, i) => {
                    let n = t * t;
                    return Math.sqrt(Math.max(0, i * (e * e - n) + n))
                },
                L = [D.$, j.m, k.J],
                O = t => L.find(e => e.test(t));

            function F(t) {
                let e = O(t);
                (0, s.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let i = e.parse(t);
                return e === k.J && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - n;
                        r = M(a, n, t + 1 / 3), s = M(a, n, t), o = M(a, n, t - 1 / 3)
                    } else r = s = o = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(i)), i
            }
            let B = (t, e) => {
                let i = F(t),
                    n = F(e),
                    r = { ...i
                    };
                return t => (r.red = R(i.red, n.red, t), r.green = R(i.green, n.green, t), r.blue = R(i.blue, n.blue, t), r.alpha = (0, V.C)(i.alpha, n.alpha, t), j.m.transform(r))
            };
            var I = i(44694),
                _ = i(89155);
            let W = (t, e) => i => `${i>0?e:t}`;

            function U(t, e) {
                return "number" == typeof t ? i => (0, V.C)(t, e, i) : T.$.test(t) ? B(t, e) : t.startsWith("var(") ? W(t, e) : N(t, e)
            }
            let $ = (t, e) => {
                    let i = [...t],
                        n = i.length,
                        r = t.map((t, i) => U(t, e[i]));
                    return t => {
                        for (let e = 0; e < n; e++) i[e] = r[e](t);
                        return i
                    }
                },
                z = (t, e) => {
                    let i = { ...t,
                            ...e
                        },
                        n = {};
                    for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = U(t[r], e[r]));
                    return t => {
                        for (let e in n) i[e] = n[e](t);
                        return i
                    }
                },
                N = (t, e) => {
                    let i = _.P.createTransformer(e),
                        n = (0, _.V)(t),
                        r = (0, _.V)(e);
                    return n.numVars === r.numVars && n.numColors === r.numColors && n.numNumbers >= r.numNumbers ? (0, I.z)($(n.values, r.values), i) : ((0, s.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), W(t, e))
                };
            var H = i(42868);
            let X = (t, e) => i => (0, V.C)(t, e, i);

            function G(t, e, {
                clamp: i = !0,
                ease: n,
                mixer: r
            } = {}) {
                let o = t.length;
                if ((0, s.k)(o === e.length, "Both input and output ranges must be the same length"), 1 === o) return () => e[0];
                t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let a = function(t, e, i) {
                        let n = [],
                            r = i || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return T.$.test(t) ? B : N;
                                else if (Array.isArray(t)) return $;
                                else if ("object" == typeof t) return z;
                                return X
                            }(t[0]),
                            s = t.length - 1;
                        for (let i = 0; i < s; i++) {
                            let s = r(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] || c.Z : e;
                                s = (0, I.z)(t, s)
                            }
                            n.push(s)
                        }
                        return n
                    }(e, n, r),
                    l = a.length,
                    u = e => {
                        let i = 0;
                        if (l > 1)
                            for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                        let n = (0, H.Y)(t[i], t[i + 1], e);
                        return a[i](n)
                    };
                return i ? e => u((0, E.u)(t[0], t[o - 1], e)) : u
            }

            function Z({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = v(n) ? n.map(A) : A(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = G((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let r = (0, H.Y)(0, e, n);
                                t.push((0, V.C)(i, 1, r))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || g).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }
            var Y = i(69815);

            function q(t, e, i) {
                let n = Math.max(e - 5, 0);
                return (0, Y.R)(i - t(n), e - n)
            }

            function K(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let J = ["duration", "bounce"],
                Q = ["stiffness", "damping", "mass"];

            function tt(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function te({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...n
            }) {
                let r;
                let a = t[0],
                    l = t[t.length - 1],
                    u = {
                        done: !1,
                        value: a
                    },
                    {
                        stiffness: h,
                        damping: c,
                        mass: d,
                        velocity: p,
                        duration: f,
                        isResolvedFromDuration: m
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!tt(t, Q) && tt(t, J)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: n = 1
                            }) {
                                let r, a;
                                (0, s.K)(t <= (0, o.w)(10), "Spring duration must be 10 seconds or less");
                                let l = 1 - e;
                                l = (0, E.u)(.05, 1, l), t = (0, E.u)(.01, 10, (0, o.X)(t)), l < 1 ? (r = e => {
                                    let n = e * l,
                                        r = n * t;
                                    return .001 - (n - i) / K(e, l) * Math.exp(-r)
                                }, a = e => {
                                    let n = e * l * t,
                                        s = Math.pow(l, 2) * Math.pow(e, 2) * t,
                                        o = K(Math.pow(e, 2), l);
                                    return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / o
                                }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), a = e => t * t * (i - e) * Math.exp(-e * t));
                                let u = function(t, e, i) {
                                    let n = i;
                                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                    return n
                                }(r, a, 5 / t);
                                if (t = (0, o.w)(t), isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(u, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * l * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...i,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(n),
                    g = p ? -(0, o.X)(p) : 0,
                    v = c / (2 * Math.sqrt(h * d)),
                    y = l - a,
                    x = (0, o.X)(Math.sqrt(h / d)),
                    P = 5 > Math.abs(y);
                if (i || (i = P ? .01 : 2), e || (e = P ? .005 : .5), v < 1) {
                    let t = K(x, v);
                    r = e => l - Math.exp(-v * x * e) * ((g + v * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
                } else if (1 === v) r = t => l - Math.exp(-x * t) * (y + (g + x * y) * t);
                else {
                    let t = x * Math.sqrt(v * v - 1);
                    r = e => {
                        let i = Math.exp(-v * x * e),
                            n = Math.min(t * e, 300);
                        return l - i * ((g + v * x * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: m && f || null,
                    next: t => {
                        let n = r(t);
                        if (m) u.done = t >= f;
                        else {
                            let s = g;
                            0 !== t && (s = v < 1 ? q(r, t, n) : 0);
                            let o = Math.abs(s) <= i,
                                a = Math.abs(l - n) <= e;
                            u.done = o && a
                        }
                        return u.value = u.done ? l : n, u
                    }
                }
            }

            function ti({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let p = t[0],
                    f = {
                        done: !1,
                        value: p
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = i * e,
                    y = p + v,
                    x = void 0 === o ? y : o(y);
                x !== y && (v = x - p);
                let P = t => -v * Math.exp(-t / n),
                    b = t => x + P(t),
                    w = t => {
                        let e = P(t),
                            i = b(t);
                        f.done = Math.abs(e) <= u, f.value = f.done ? x : i
                    },
                    S = t => {
                        m(f.value) && (c = t, d = te({
                            keyframes: [f.value, g(f.value)],
                            velocity: q(b, t, f.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, w(t), S(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || w(t), f)
                    }
                }
            }
            var tn = i(72363);
            let tr = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => tn.Wi.update(e, !0),
                    stop: () => (0, tn.Pn)(e),
                    now: () => tn.frameData.isProcessing ? tn.frameData.timestamp : performance.now()
                }
            };

            function ts(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let to = {
                decay: ti,
                inertia: ti,
                tween: Z,
                keyframes: Z,
                spring: te
            };

            function ta({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = tr,
                keyframes: n,
                type: r = "keyframes",
                repeat: s = 0,
                repeatDelay: a = 0,
                repeatType: l = "loop",
                onPlay: u,
                onStop: h,
                onComplete: c,
                onUpdate: d,
                ...p
            }) {
                let f, m, g, v, y, x = 1,
                    P = !1,
                    b = () => {
                        m = new Promise(t => {
                            f = t
                        })
                    };
                b();
                let w = to[r] || Z;
                w !== Z && "number" != typeof n[0] && (v = G([0, 100], n, {
                    clamp: !1
                }), n = [0, 100]);
                let S = w({ ...p,
                    keyframes: n
                });
                "mirror" === l && (y = w({ ...p,
                    keyframes: [...n].reverse(),
                    velocity: -(p.velocity || 0)
                }));
                let C = "idle",
                    A = null,
                    T = null,
                    V = null;
                null === S.calculatedDuration && s && (S.calculatedDuration = ts(S));
                let {
                    calculatedDuration: M
                } = S, D = 1 / 0, j = 1 / 0;
                null !== M && (j = (D = M + a) * (s + 1) - a);
                let k = 0,
                    R = t => {
                        if (null === T) return;
                        x > 0 && (T = Math.min(T, t)), x < 0 && (T = Math.min(t - j / x, T));
                        let i = (k = null !== A ? A : Math.round(t - T) * x) - e * (x >= 0 ? 1 : -1),
                            r = x >= 0 ? i < 0 : i > j;
                        k = Math.max(i, 0), "finished" === C && null === A && (k = j);
                        let o = k,
                            u = S;
                        if (s) {
                            let t = k / D,
                                e = Math.floor(t),
                                i = t % 1;
                            !i && t >= 1 && (i = 1), 1 === i && e--;
                            let n = !!((e = Math.min(e, s + 1)) % 2);
                            n && ("reverse" === l ? (i = 1 - i, a && (i -= a / D)) : "mirror" === l && (u = y));
                            let r = (0, E.u)(0, 1, i);
                            k > j && (r = "reverse" === l && n ? 1 : 0), o = r * D
                        }
                        let h = r ? {
                            done: !1,
                            value: n[0]
                        } : u.next(o);
                        v && (h.value = v(h.value));
                        let {
                            done: c
                        } = h;
                        r || null === M || (c = x >= 0 ? k >= j : k <= 0);
                        let p = null === A && ("finished" === C || "running" === C && c);
                        return d && d(h.value), p && F(), h
                    },
                    L = () => {
                        g && g.stop(), g = void 0
                    },
                    O = () => {
                        C = "idle", L(), f(), b(), T = V = null
                    },
                    F = () => {
                        C = "finished", c && c(), L(), f()
                    },
                    B = () => {
                        if (P) return;
                        g || (g = i(R));
                        let t = g.now();
                        u && u(), null !== A ? T = t - A : T && "finished" !== C || (T = t), "finished" === C && b(), V = T, A = null, C = "running", g.start()
                    };
                t && B();
                let I = {
                    then: (t, e) => m.then(t, e),
                    get time() {
                        return (0, o.X)(k)
                    },
                    set time(newTime) {
                        k = newTime = (0, o.w)(newTime), null === A && g && 0 !== x ? T = g.now() - newTime / x : A = newTime
                    },
                    get duration() {
                        let t = null === S.calculatedDuration ? ts(S) : S.calculatedDuration;
                        return (0, o.X)(t)
                    },
                    get speed() {
                        return x
                    },
                    set speed(newSpeed) {
                        if (newSpeed === x || !g) return;
                        x = newSpeed, I.time = (0, o.X)(k)
                    },
                    get state() {
                        return C
                    },
                    play: B,
                    pause: () => {
                        C = "paused", A = k
                    },
                    stop: () => {
                        P = !0, "idle" !== C && (C = "idle", h && h(), O())
                    },
                    cancel: () => {
                        null !== V && R(V), O()
                    },
                    complete: () => {
                        C = "finished"
                    },
                    sample: t => (T = 0, R(t))
                };
                return I
            }
            let tl = (r = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === n && (n = r()), n)),
                tu = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                th = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return !!(!e || "string" == typeof e && h[e] || l(e) || Array.isArray(e) && e.every(t))
                }(e.ease);
            var tc = i(49303);
            let td = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                tp = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                tf = {
                    type: "keyframes",
                    duration: .8
                },
                tm = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                tg = (t, {
                    keyframes: e
                }) => e.length > 2 ? tf : tc.G.has(t) ? t.startsWith("scale") ? tp(e[1]) : td : tm,
                tv = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (_.P.test(e) || "0" === e) && !e.startsWith("url("));
            var ty = i(19006),
                tx = i(85243),
                tP = i(37924);
            let tb = (t, e, i, n = {}) => r => {
                let d = (0, tP.e)(n, t) || {},
                    p = d.delay || n.delay || 0,
                    {
                        elapsed: f = 0
                    } = n;
                f -= (0, o.w)(p);
                let m = function(t, e, i, n) {
                        let r, s;
                        let o = tv(e, i);
                        r = Array.isArray(i) ? [...i] : [null, i];
                        let a = void 0 !== n.from ? n.from : t.get(),
                            l = [];
                        for (let t = 0; t < r.length; t++) {
                            var u;
                            null === r[t] && (r[t] = 0 === t ? a : r[t - 1]), ("number" == typeof(u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || (0, tx.W)(u) : void 0) && l.push(t), "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (s = r[t])
                        }
                        if (o && l.length && s)
                            for (let t = 0; t < l.length; t++) r[l[t]] = (0, ty.T)(e, s);
                        return r
                    }(e, t, i, d),
                    g = m[0],
                    v = m[m.length - 1],
                    y = tv(t, g),
                    x = tv(t, v);
                (0, s.K)(y === x, `You are trying to animate ${t} from "${g}" to "${v}". ${g} is not an animatable value - to enable this animation set ${g} to a value animatable to ${v} via the \`style\` property.`);
                let P = {
                    keyframes: m,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...d,
                    delay: -f,
                    onUpdate: t => {
                        e.set(t), d.onUpdate && d.onUpdate(t)
                    },
                    onComplete: () => {
                        r(), d.onComplete && d.onComplete()
                    }
                };
                if ((0, tP.r)(d) || (P = { ...P,
                        ...tg(t, P)
                    }), P.duration && (P.duration = (0, o.w)(P.duration)), P.repeatDelay && (P.repeatDelay = (0, o.w)(P.repeatDelay)), !y || !x || a.current || !1 === d.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: i,
                    onComplete: n
                }) {
                    let r = () => (i && i(t[t.length - 1]), n && n(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: c.Z,
                        pause: c.Z,
                        stop: c.Z,
                        then: t => (t(), Promise.resolve()),
                        cancel: c.Z,
                        complete: c.Z
                    });
                    return e ? ta({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: r
                    }) : r()
                }(a.current ? { ...P,
                    delay: 0
                } : P);
                if (!n.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let i = function(t, e, {
                        onUpdate: i,
                        onComplete: n,
                        ...r
                    }) {
                        let s, a;
                        if (!(tl() && tu.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type)) return !1;
                        let d = !1,
                            p = () => {
                                a = new Promise(t => {
                                    s = t
                                })
                            };
                        p();
                        let {
                            keyframes: f,
                            duration: m = 300,
                            ease: g,
                            times: v
                        } = r;
                        if (th(e, r)) {
                            let t = ta({ ...r,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: f[0]
                                },
                                i = [],
                                n = 0;
                            for (; !e.done && n < 2e4;) e = t.sample(n), i.push(e.value), n += 10;
                            v = void 0, f = i, m = n - 10, g = "linear"
                        }
                        let y = function(t, e, i, {
                                delay: n = 0,
                                duration: r,
                                repeat: s = 0,
                                repeatType: o = "loop",
                                ease: a,
                                times: c
                            } = {}) {
                                let d = {
                                    [e]: i
                                };
                                c && (d.offset = c);
                                let p = function t(e) {
                                    if (e) return l(e) ? u(e) : Array.isArray(e) ? e.map(t) : h[e]
                                }(a);
                                return Array.isArray(p) && (d.easing = p), t.animate(d, {
                                    delay: n,
                                    duration: r,
                                    easing: Array.isArray(p) ? "linear" : p,
                                    fill: "both",
                                    iterations: s + 1,
                                    direction: "reverse" === o ? "alternate" : "normal"
                                })
                            }(t.owner.current, e, f, { ...r,
                                duration: m,
                                ease: g,
                                times: v
                            }),
                            x = () => y.cancel(),
                            P = () => {
                                tn.Wi.update(x), s(), p()
                            };
                        return y.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: i = "loop"
                            }) {
                                let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                                return t[n]
                            }(f, r)), n && n(), P()
                        }, {
                            then: (t, e) => a.then(t, e),
                            attachTimeline: t => (y.timeline = t, y.onfinish = null, c.Z),
                            get time() {
                                return (0, o.X)(y.currentTime || 0)
                            },
                            set time(newTime) {
                                y.currentTime = (0, o.w)(newTime)
                            },
                            get speed() {
                                return y.playbackRate
                            },
                            set speed(newSpeed) {
                                y.playbackRate = newSpeed
                            },
                            get duration() {
                                return (0, o.X)(m)
                            },
                            play: () => {
                                d || (y.play(), (0, tn.Pn)(x))
                            },
                            pause: () => y.pause(),
                            stop: () => {
                                if (d = !0, "idle" === y.playState) return;
                                let {
                                    currentTime: e
                                } = y;
                                if (e) {
                                    let i = ta({ ...r,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                                }
                                P()
                            },
                            complete: () => y.finish(),
                            cancel: P
                        }
                    }(e, t, P);
                    if (i) return i
                }
                return ta(P)
            }
        },
        99716: function(t, e, i) {
            "use strict";
            i.d(e, {
                d: function() {
                    return f
                }
            });
            var n = i(32593),
                r = i(49303),
                s = i(76348),
                o = i(29115),
                a = i(63227),
                l = i(27798),
                u = i(37924),
                h = i(72363);

            function c(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: c
            } = {}) {
                let {
                    transition: d = t.getDefaultTransition(),
                    transitionEnd: p,
                    ...f
                } = t.makeTargetAnimatable(e), m = t.getValue("willChange");
                n && (d = n);
                let g = [],
                    v = c && t.animationState && t.animationState.getState()[c];
                for (let e in f) {
                    let n = t.getValue(e),
                        l = f[e];
                    if (!n || void 0 === l || v && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(v, e)) continue;
                    let c = {
                        delay: i,
                        elapsed: 0,
                        ...(0, u.e)(d || {}, e)
                    };
                    if (window.HandoffAppearAnimations) {
                        let i = t.getProps()[s.M];
                        if (i) {
                            let t = window.HandoffAppearAnimations(i, e, n, h.Wi);
                            null !== t && (c.elapsed = t, c.isHandoff = !0)
                        }
                    }
                    let p = !c.isHandoff && ! function(t, e) {
                        let i = t.get();
                        if (!Array.isArray(e)) return i !== e;
                        for (let t = 0; t < e.length; t++)
                            if (e[t] !== i) return !0
                    }(n, l);
                    if ("spring" === c.type && (n.getVelocity() || c.velocity) && (p = !1), n.animation && (p = !1), p) continue;
                    n.start((0, o.v)(e, n, l, t.shouldReduceMotion && r.G.has(e) ? {
                        type: !1
                    } : c));
                    let y = n.animation;
                    (0, a.L)(m) && (m.add(e), y.then(() => m.remove(e))), g.push(y)
                }
                return p && Promise.all(g).then(() => {
                    p && (0, l.CD)(t, p)
                }), g
            }

            function d(t, e, i = {}) {
                let r = (0, n.x)(t, e, i.custom),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = r ? () => Promise.all(c(t, r, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(p).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(d(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function p(t, e) {
                return t.sortNodePosition(e)
            }

            function f(t, e, i = {}) {
                let r;
                if (t.notify("AnimationStart", e), Array.isArray(e)) r = Promise.all(e.map(e => d(t, e, i)));
                else if ("string" == typeof e) r = d(t, e, i);
                else {
                    let s = "function" == typeof e ? (0, n.x)(t, e, i.custom) : e;
                    r = Promise.all(c(t, s, i))
                }
                return r.then(() => t.notify("AnimationComplete", e))
            }
        },
        76348: function(t, e, i) {
            "use strict";
            i.d(e, {
                M: function() {
                    return n
                }
            });
            let n = "data-" + (0, i(27905).D)("framerAppearId")
        },
        10363: function(t, e, i) {
            "use strict";
            i.d(e, {
                C: function() {
                    return n
                }
            });
            let n = t => Array.isArray(t)
        },
        37924: function(t, e, i) {
            "use strict";

            function n({
                when: t,
                delay: e,
                delayChildren: i,
                staggerChildren: n,
                staggerDirection: r,
                repeat: s,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: u,
                ...h
            }) {
                return !!Object.keys(h).length
            }

            function r(t, e) {
                return t[e] || t.default || t
            }
            i.d(e, {
                e: function() {
                    return r
                },
                r: function() {
                    return n
                }
            })
        },
        927: function(t, e, i) {
            "use strict";
            i.d(e, {
                Bn: function() {
                    return o
                },
                X7: function() {
                    return a
                },
                Z7: function() {
                    return s
                }
            });
            var n = i(90933),
                r = i(30484);
            let s = t => 1 - Math.sin(Math.acos(t)),
                o = (0, r.M)(s),
                a = (0, n.o)(s)
        },
        90933: function(t, e, i) {
            "use strict";
            i.d(e, {
                o: function() {
                    return n
                }
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        30484: function(t, e, i) {
            "use strict";
            i.d(e, {
                M: function() {
                    return n
                }
            });
            let n = t => e => 1 - t(1 - e)
        },
        72363: function(t, e, i) {
            "use strict";
            i.d(e, {
                Pn: function() {
                    return a
                },
                Wi: function() {
                    return o
                },
                frameData: function() {
                    return l
                },
                S6: function() {
                    return u
                }
            });
            var n = i(26977);
            class r {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            }
            let s = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: o,
                    cancel: a,
                    state: l,
                    steps: u
                } = function(t, e) {
                    let i = !1,
                        n = !0,
                        o = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        a = s.reduce((t, e) => (t[e] = function(t) {
                            let e = new r,
                                i = new r,
                                n = 0,
                                s = !1,
                                o = !1,
                                a = new WeakSet,
                                l = {
                                    schedule: (t, r = !1, o = !1) => {
                                        let l = o && s,
                                            u = l ? e : i;
                                        return r && a.add(t), u.add(t) && l && s && (n = e.order.length), t
                                    },
                                    cancel: t => {
                                        i.remove(t), a.delete(t)
                                    },
                                    process: r => {
                                        if (s) {
                                            o = !0;
                                            return
                                        }
                                        if (s = !0, [e, i] = [i, e], i.clear(), n = e.order.length)
                                            for (let i = 0; i < n; i++) {
                                                let n = e.order[i];
                                                n(r), a.has(n) && (l.schedule(n), t())
                                            }
                                        s = !1, o && (o = !1, l.process(r))
                                    }
                                };
                            return l
                        }(() => i = !0), t), {}),
                        l = t => a[t].process(o),
                        u = () => {
                            let r = performance.now();
                            i = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1), o.timestamp = r, o.isProcessing = !0, s.forEach(l), o.isProcessing = !1, i && e && (n = !1, t(u))
                        },
                        h = () => {
                            i = !0, n = !0, o.isProcessing || t(u)
                        };
                    return {
                        schedule: s.reduce((t, e) => {
                            let n = a[e];
                            return t[e] = (t, e = !1, r = !1) => (i || h(), n.schedule(t, e, r)), t
                        }, {}),
                        cancel: t => s.forEach(e => a[e].cancel(t)),
                        state: o,
                        steps: a
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        347: function(t, e, i) {
            "use strict";
            i.d(e, {
                E: function() {
                    return ne
                }
            });
            var n, r = i(2265);
            let s = (0, r.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                o = (0, r.createContext)({}),
                a = (0, r.createContext)(null);
            var l = i(538);
            let u = (0, r.createContext)({
                strict: !1
            });
            var h = i(76348);

            function c(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function d(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function p(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let f = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                m = ["initial", ...f];

            function g(t) {
                return p(t.animate) || m.some(e => d(t[e]))
            }

            function v(t) {
                return !!(g(t) || t.variants)
            }

            function y(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let x = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                P = {};
            for (let t in x) P[t] = {
                isEnabled: e => x[t].some(t => !!e[t])
            };
            var b = i(16613);
            let w = (0, r.createContext)({}),
                S = (0, r.createContext)({}),
                C = Symbol.for("motionComponentSymbol"),
                A = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function T(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (A.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let E = {};
            var V = i(49303);

            function M(t, {
                layout: e,
                layoutId: i
            }) {
                return V.G.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!E[t] || "opacity" === t)
            }
            var D = i(65735);
            let j = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                k = V._.length;
            var R = i(80417);
            let L = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var O = i(83002);

            function F(t, e, i, n) {
                let {
                    style: r,
                    vars: s,
                    transform: o,
                    transformOrigin: a
                } = t, l = !1, u = !1, h = !0;
                for (let t in e) {
                    let i = e[t];
                    if ((0, R.f9)(t)) {
                        s[t] = i;
                        continue
                    }
                    let n = O.j[t],
                        c = L(i, n);
                    if (V.G.has(t)) {
                        if (l = !0, o[t] = c, !h) continue;
                        i !== (n.default || 0) && (h = !1)
                    } else t.startsWith("origin") ? (u = !0, a[t] = c) : r[t] = c
                }
                if (!e.transform && (l || n ? r.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, n, r) {
                        let s = "";
                        for (let e = 0; e < k; e++) {
                            let i = V._[e];
                            if (void 0 !== t[i]) {
                                let e = j[i] || i;
                                s += `${e}(${t[i]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, n ? "" : s) : i && n && (s = "none"), s
                    }(t.transform, i, h, n) : r.transform && (r.transform = "none")), u) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = a;
                    r.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let B = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function I(t, e, i) {
                for (let n in e)(0, D.i)(e[n]) || M(n, i) || (t[n] = e[n])
            }
            let _ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function W(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || _.has(t)
            }
            let U = t => !W(t);
            try {
                (n = require("@emotion/is-prop-valid").default) && (U = t => t.startsWith("on") ? !W(t) : n(t))
            } catch (t) {}
            var $ = i(43681);

            function z(t, e, i) {
                return "string" == typeof t ? t : $.px.transform(e + i * t)
            }
            let N = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                H = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function X(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (F(t, u, h, d), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: f,
                    dimensions: m
                } = t;
                p.transform && (m && (f.transform = p.transform), delete p.transform), m && (void 0 !== r || void 0 !== s || f.transform) && (f.transformOrigin = function(t, e, i) {
                    let n = z(e, t.x, t.width),
                        r = z(i, t.y, t.height);
                    return `${n} ${r}`
                }(m, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== n && (p.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? N : H;
                    t[s.offset] = $.px.transform(-n);
                    let o = $.px.transform(e),
                        a = $.px.transform(i);
                    t[s.array] = `${o} ${a}`
                }(p, o, a, l, !1)
            }
            let G = () => ({ ...B(),
                    attrs: {}
                }),
                Z = t => "string" == typeof t && "svg" === t.toLowerCase();
            var Y = i(27905);

            function q(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let K = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function J(t, e, i, n) {
                for (let i in q(t, e, void 0, n), e.attrs) t.setAttribute(K.has(i) ? i : (0, Y.D)(i), e.attrs[i])
            }

            function Q(t, e) {
                let {
                    style: i
                } = t, n = {};
                for (let r in i)((0, D.i)(i[r]) || e.style && (0, D.i)(e.style[r]) || M(r, t)) && (n[r] = i[r]);
                return n
            }

            function tt(t, e) {
                let i = Q(t, e);
                for (let n in t)((0, D.i)(t[n]) || (0, D.i)(e[n])) && (i[-1 !== V._.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
                return i
            }
            var te = i(93331),
                ti = i(10961),
                tn = i(61832);

            function tr(t) {
                let e = (0, D.i)(t) ? t.get() : t;
                return (0, tn.p)(e) ? e.toValue() : e
            }
            let ts = t => (e, i) => {
                let n = (0, r.useContext)(o),
                    s = (0, r.useContext)(a),
                    l = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: i
                    }, n, r, s) {
                        let o = {
                            latestValues: function(t, e, i, n) {
                                let r = {},
                                    s = n(t, {});
                                for (let t in s) r[t] = tr(s[t]);
                                let {
                                    initial: o,
                                    animate: a
                                } = t, l = g(t), u = v(t);
                                e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                let h = !!i && !1 === i.initial,
                                    c = (h = h || !1 === o) ? a : o;
                                return c && "boolean" != typeof c && !p(c) && (Array.isArray(c) ? c : [c]).forEach(e => {
                                    let i = (0, te.o)(t, e);
                                    if (!i) return;
                                    let {
                                        transitionEnd: n,
                                        transition: s,
                                        ...o
                                    } = i;
                                    for (let t in o) {
                                        let e = o[t];
                                        if (Array.isArray(e)) {
                                            let t = h ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (r[t] = e)
                                    }
                                    for (let t in n) r[t] = n[t]
                                }), r
                            }(n, r, s, t),
                            renderState: e()
                        };
                        return i && (o.mount = t => i(n, t, o)), o
                    })(t, e, n, s);
                return i ? l() : (0, ti.h)(l)
            };
            var to = i(72363);
            let ta = {
                    useVisualState: ts({
                        scrapeMotionValuesFromProps: tt,
                        createRenderState: G,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            to.Wi.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), to.Wi.render(() => {
                                X(i, n, {
                                    enableHardwareAcceleration: !1
                                }, Z(e.tagName), t.transformTemplate), J(e, i)
                            })
                        }
                    })
                },
                tl = {
                    useVisualState: ts({
                        scrapeMotionValuesFromProps: Q,
                        createRenderState: B
                    })
                };

            function tu(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }
            let th = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tc(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let td = t => e => th(e) && t(e, tc(e));

            function tp(t, e, i, n) {
                return tu(t, e, td(i), n)
            }
            var tf = i(44694);

            function tm(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let tg = tm("dragHorizontal"),
                tv = tm("dragVertical");

            function ty(t) {
                let e = !1;
                if ("y" === t) e = tv();
                else if ("x" === t) e = tg();
                else {
                    let t = tg(),
                        i = tv();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function tx() {
                let t = ty(!0);
                return !t || (t(), !1)
            }
            class tP {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function tb(t, e) {
                let i = "onHover" + (e ? "Start" : "End");
                return tp(t.current, "pointer" + (e ? "enter" : "leave"), (n, r) => {
                    if ("touch" === n.type || tx()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[i] && to.Wi.update(() => s[i](n, r))
                }, {
                    passive: !t.getProps()[i]
                })
            }
            class tw extends tP {
                mount() {
                    this.unmount = (0, tf.z)(tb(this.node, !0), tb(this.node, !1))
                }
                unmount() {}
            }
            class tS extends tP {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, tf.z)(tu(this.node.current, "focus", () => this.onFocus()), tu(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let tC = (t, e) => !!e && (t === e || tC(t, e.parentElement));
            var tA = i(26977);

            function tT(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, tc(i))
            }
            class tE extends tP {
                constructor() {
                    super(...arguments), this.removeStartListeners = tA.Z, this.removeEndListeners = tA.Z, this.removeAccessibleListeners = tA.Z, this.startPointerPress = (t, e) => {
                        if (this.removeEndListeners(), this.isPressing) return;
                        let i = this.node.getProps(),
                            n = tp(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: i,
                                    onTapCancel: n
                                } = this.node.getProps();
                                to.Wi.update(() => {
                                    tC(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                })
                            }, {
                                passive: !(i.onTap || i.onPointerUp)
                            }),
                            r = tp(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(i.onTapCancel || i.onPointerCancel)
                            });
                        this.removeEndListeners = (0, tf.z)(n, r), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = tu(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = tu(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && tT("up", (t, e) => {
                                        let {
                                            onTap: i
                                        } = this.node.getProps();
                                        i && to.Wi.update(() => i(t, e))
                                    })
                                }), tT("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = tu(this.node.current, "blur", () => {
                                this.isPressing && tT("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = (0, tf.z)(t, e)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: i,
                        whileTap: n
                    } = this.node.getProps();
                    n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && to.Wi.update(() => i(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tx()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: i
                    } = this.node.getProps();
                    i && to.Wi.update(() => i(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = tp(this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        i = tu(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = (0, tf.z)(e, i)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let tV = new WeakMap,
                tM = new WeakMap,
                tD = t => {
                    let e = tV.get(t.target);
                    e && e(t)
                },
                tj = t => {
                    t.forEach(tD)
                },
                tk = {
                    some: 0,
                    all: 1
                };
            class tR extends tP {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : tk[n]
                    };
                    return function(t, e, i) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            tM.has(i) || tM.set(i, {});
                            let n = tM.get(i),
                                r = JSON.stringify(e);
                            return n[r] || (n[r] = new IntersectionObserver(tj, {
                                root: t,
                                ...e
                            })), n[r]
                        }(e);
                        return tV.set(t, i), n.observe(t), () => {
                            tV.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            var tL = i(10363);

            function tO(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var tF = i(32593),
                tB = i(99716);
            let tI = [...f].reverse(),
                t_ = f.length;

            function tW(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            class tU extends tP {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (0, tB.d)(t, e, i))),
                            i = {
                                animate: tW(!0),
                                whileInView: tW(),
                                whileHover: tW(),
                                whileTap: tW(),
                                whileDrag: tW(),
                                whileFocus: tW(),
                                exit: tW()
                            },
                            n = !0,
                            r = (e, i) => {
                                let n = (0, tF.x)(t, i);
                                if (n) {
                                    let {
                                        transition: t,
                                        transitionEnd: i,
                                        ...r
                                    } = n;
                                    e = { ...e,
                                        ...r,
                                        ...i
                                    }
                                }
                                return e
                            };

                        function s(s, o) {
                            let a = t.getProps(),
                                l = t.getVariantContext(!0) || {},
                                u = [],
                                h = new Set,
                                c = {},
                                f = 1 / 0;
                            for (let e = 0; e < t_; e++) {
                                var m;
                                let g = tI[e],
                                    v = i[g],
                                    y = void 0 !== a[g] ? a[g] : l[g],
                                    x = d(y),
                                    P = g === o ? v.isActive : null;
                                !1 === P && (f = e);
                                let b = y === l[g] && y !== a[g] && x;
                                if (b && n && t.manuallyAnimateOnMount && (b = !1), v.protectedKeys = { ...c
                                    }, !v.isActive && null === P || !y && !v.prevProp || p(y) || "boolean" == typeof y) continue;
                                let w = (m = v.prevProp, "string" == typeof y ? y !== m : !!Array.isArray(y) && !tO(y, m)),
                                    S = w || g === o && v.isActive && !b && x || e > f && x,
                                    C = Array.isArray(y) ? y : [y],
                                    A = C.reduce(r, {});
                                !1 === P && (A = {});
                                let {
                                    prevResolvedValues: T = {}
                                } = v, E = { ...T,
                                    ...A
                                }, V = t => {
                                    S = !0, h.delete(t), v.needsAnimating[t] = !0
                                };
                                for (let t in E) {
                                    let e = A[t],
                                        i = T[t];
                                    c.hasOwnProperty(t) || (e !== i ? (0, tL.C)(e) && (0, tL.C)(i) ? !tO(e, i) || w ? V(t) : v.protectedKeys[t] = !0 : void 0 !== e ? V(t) : h.add(t) : void 0 !== e && h.has(t) ? V(t) : v.protectedKeys[t] = !0)
                                }
                                v.prevProp = y, v.prevResolvedValues = A, v.isActive && (c = { ...c,
                                    ...A
                                }), n && t.blockInitialAnimation && (S = !1), S && !b && u.push(...C.map(t => ({
                                    animation: t,
                                    options: {
                                        type: g,
                                        ...s
                                    }
                                })))
                            }
                            if (h.size) {
                                let e = {};
                                h.forEach(i => {
                                    let n = t.getBaseTarget(i);
                                    void 0 !== n && (e[i] = n)
                                }), u.push({
                                    animation: e
                                })
                            }
                            let g = !!u.length;
                            return n && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (g = !1), n = !1, g ? e(u) : Promise.resolve()
                        }
                        return {
                            animateChanges: s,
                            setActive: function(e, n, r) {
                                var o;
                                if (i[e].isActive === n) return Promise.resolve();
                                null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let a = s(r, e);
                                for (let t in i) i[t].protectedKeys = {};
                                return a
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    this.unmount(), p(t) && (this.unmount = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {}
            }
            let t$ = 0;
            class tz extends tP {
                constructor() {
                    super(...arguments), this.id = t$++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e,
                        custom: i
                    } = this.node.presenceContext, {
                        isPresent: n
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === n) return;
                    let r = this.node.animationState.setActive("exit", !t, {
                        custom: null != i ? i : this.node.getProps().custom
                    });
                    e && !t && r.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            var tN = i(46567),
                tH = i(81356);
            let tX = (t, e) => Math.abs(t - e);
            class tG {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = tq(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                r = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(tX(t.x, e.x) ** 2 + tX(t.y, e.y) ** 2) >= 3);
                            if (!n && !r) return;
                            let {
                                point: s
                            } = i, {
                                timestamp: o
                            } = to.frameData;
                            this.history.push({ ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = tZ(e, this.transformPagePoint), to.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: n
                            } = this.handlers, r = tq("pointercancel" === t.type ? this.lastMoveEventInfo : tZ(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), n && n(t, r)
                        }, !th(t)) return;
                    this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let r = tZ(tc(t), this.transformPagePoint),
                        {
                            point: s
                        } = r,
                        {
                            timestamp: o
                        } = to.frameData;
                    this.history = [{ ...s,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: a
                    } = e;
                    a && a(t, tq(r, this.history)), this.removeListeners = (0, tf.z)(tp(this.contextWindow, "pointermove", this.handlePointerMove), tp(this.contextWindow, "pointerup", this.handlePointerUp), tp(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, to.Pn)(this.updatePoint)
                }
            }

            function tZ(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function tY(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function tq({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: tY(t, tK(e)),
                    offset: tY(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = tK(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > (0, tH.w)(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, tH.X)(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function tK(t) {
                return t[t.length - 1]
            }
            var tJ = i(42868),
                tQ = i(40007);

            function t0(t) {
                return t.max - t.min
            }

            function t1(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function t2(t, e, i, n = .5) {
                t.origin = n, t.originPoint = (0, tQ.C)(e.min, e.max, t.origin), t.scale = t0(i) / t0(e), (t1(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, tQ.C)(i.min, i.max, t.origin) - t.originPoint, (t1(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function t3(t, e, i, n) {
                t2(t.x, e.x, i.x, n ? n.originX : void 0), t2(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function t5(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + t0(e)
            }

            function t6(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + t0(e)
            }

            function t8(t, e, i) {
                t6(t.x, e.x, i.x), t6(t.y, e.y, i.y)
            }
            var t4 = i(43021);

            function t9(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function t7(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function et(t, e, i) {
                return {
                    min: ee(t, e),
                    max: ee(t, i)
                }
            }

            function ee(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let ei = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                en = () => ({
                    x: ei(),
                    y: ei()
                }),
                er = () => ({
                    min: 0,
                    max: 0
                }),
                es = () => ({
                    x: er(),
                    y: er()
                });

            function eo(t) {
                return [t("x"), t("y")]
            }

            function ea({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function el(t) {
                return void 0 === t || 1 === t
            }

            function eu({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !el(t) || !el(e) || !el(i)
            }

            function eh(t) {
                return eu(t) || ec(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function ec(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function ed(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function ep(t, e = 0, i = 1, n, r) {
                t.min = ed(t.min, e, i, n, r), t.max = ed(t.max, e, i, n, r)
            }

            function ef(t, {
                x: e,
                y: i
            }) {
                ep(t.x, e.translate, e.scale, e.originPoint), ep(t.y, i.translate, i.scale, i.originPoint)
            }

            function em(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function eg(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function ev(t, e, [i, n, r]) {
                let s = void 0 !== e[r] ? e[r] : .5,
                    o = (0, tQ.C)(t.min, t.max, s);
                ep(t, e[i], e[n], o, e.scale)
            }
            let ey = ["x", "scaleX", "originX"],
                ex = ["y", "scaleY", "originY"];

            function eP(t, e) {
                ev(t.x, e, ey), ev(t.y, e, ex)
            }

            function eb(t, e) {
                return ea(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var ew = i(29115);
            let eS = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                eC = new WeakMap;
            class eA {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = es(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    i && !1 === i.isPresent || (this.panSession = new tG(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(tc(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ty(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eo(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if ($.aQ.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = t0(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && to.Wi.update(() => r(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        contextWindow: eS(this.visualElement)
                    }))
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && to.Wi.update(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !eT(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? (0, tQ.C)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, tQ.C)(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                    e && c(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: t9(t.x, i, r),
                            y: t9(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: et(t, "left", "right"),
                            y: et(t, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && eo(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !c(e)) return !1;
                    let n = e.current;
                    (0, tN.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = eb(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (eg(n.x, r.offset.x), eg(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: t7((t = r.layout.layoutBox).x, s.x),
                            y: t7(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = ea(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(eo(o => {
                        if (!eT(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start((0, ew.v)(t, i, 0, e))
                }
                stopAnimation() {
                    eo(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    eo(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!eT(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - (0, tQ.C)(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!c(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    eo(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = t0(t),
                                    r = t0(e);
                                return r > n ? i = (0, tJ.Y)(e.min, e.max - n, t.min) : n > r && (i = (0, tJ.Y)(t.min, t.max - r, e.min)), (0, t4.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), eo(e => {
                        if (!eT(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set((0, tQ.C)(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    eC.set(this.visualElement, this);
                    let t = tp(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            c(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), e();
                    let r = tu(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (eo(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function eT(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class eE extends tP {
                constructor(t) {
                    super(t), this.removeGroupControls = tA.Z, this.removeListeners = tA.Z, this.controls = new eA(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tA.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let eV = t => (e, i) => {
                t && to.Wi.update(() => t(e, i))
            };
            class eM extends tP {
                constructor() {
                    super(...arguments), this.removePointerDownListener = tA.Z
                }
                onPointerDown(t) {
                    this.session = new tG(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: eS(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: eV(t),
                        onStart: eV(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && to.Wi.update(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = tp(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            let eD = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function ej(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let ek = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!$.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = ej(t, e.target.x),
                        n = ej(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };
            var eR = i(89155);
            class eL extends r.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(E, eF), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), eD.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || to.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function eO(t) {
                let [e, i] = function() {
                    let t = (0, r.useContext)(a);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, s = (0, r.useId)();
                    return (0, r.useEffect)(() => n(s), []), !e && i ? [!1, () => i && i(s)] : [!0]
                }(), n = (0, r.useContext)(w);
                return r.createElement(eL, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, r.useContext)(S),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let eF = {
                borderRadius: { ...ek,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: ek,
                borderTopRightRadius: ek,
                borderBottomLeftRadius: ek,
                borderBottomRightRadius: ek,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let n = eR.P.parse(t);
                        if (n.length > 5) return t;
                        let r = eR.P.createTransformer(t),
                            s = "number" != typeof n[0] ? 1 : 0,
                            o = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        n[0 + s] /= o, n[1 + s] /= a;
                        let l = (0, tQ.C)(o, a, .5);
                        return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                    }
                }
            };
            var eB = i(27026),
                eI = i(927);
            let e_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                eW = e_.length,
                eU = t => "string" == typeof t ? parseFloat(t) : t,
                e$ = t => "number" == typeof t || $.px.test(t);

            function ez(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let eN = eX(0, .5, eI.Bn),
                eH = eX(.5, .95, tA.Z);

            function eX(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i((0, tJ.Y)(t, e, n))
            }

            function eG(t, e) {
                t.min = e.min, t.max = e.max
            }

            function eZ(t, e) {
                eG(t.x, e.x), eG(t.y, e.y)
            }

            function eY(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function eq(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if ($.aQ.test(e) && (e = parseFloat(e), e = (0, tQ.C)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = (0, tQ.C)(s.min, s.max, n);
                    t === s && (a -= e), t.min = eY(t.min, e, i, a, r), t.max = eY(t.max, e, i, a, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let eK = ["x", "scaleX", "originX"],
                eJ = ["y", "scaleY", "originY"];

            function eQ(t, e, i, n) {
                eq(t.x, e, eK, i ? i.x : void 0, n ? n.x : void 0), eq(t.y, e, eJ, i ? i.y : void 0, n ? n.y : void 0)
            }
            var e0 = i(37924);

            function e1(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function e2(t) {
                return e1(t.x) && e1(t.y)
            }

            function e3(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function e5(t) {
                return t0(t.x) / t0(t.y)
            }
            var e6 = i(77081);
            class e8 {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, e6.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, e6.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function e4(t, e, i) {
                let n = "",
                    r = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: r
                    } = i;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), r && (n += `rotateY(${r}deg) `)
                }
                let o = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none"
            }
            let e9 = (t, e) => t.depth - e.depth;
            class e7 {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, e6.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, e6.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(e9), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var it = i(74101);
            let ie = ["", "X", "Y", "Z"],
                ii = {
                    visibility: "hidden"
                },
                ir = 0,
                is = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function io({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = ir++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, is.totalNodes = is.resolvedTargetDeltas = is.recalculatedProjection = 0, this.nodes.forEach(iu), this.nodes.forEach(iv), this.nodes.forEach(iy), this.nodes.forEach(ih), window.MotionDebug && window.MotionDebug.record(is)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new e7)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new eB.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = performance.now(),
                                        n = ({
                                            timestamp: r
                                        }) => {
                                            let s = r - i;
                                            s >= e && ((0, to.Pn)(n), t(s - e))
                                        };
                                    return to.Wi.read(n, !0), () => (0, to.Pn)(n)
                                }(n, 250), eD.hasAnimatedSinceResize && (eD.hasAnimatedSinceResize = !1, this.nodes.forEach(ig))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || iC,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !e3(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...(0, e0.e)(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || ig(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, to.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(ix), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(id);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(ip), this.isUpdating = !1, this.nodes.forEach(im), this.nodes.forEach(ia), this.nodes.forEach(il), this.clearAllSnapshots();
                        let t = performance.now();
                        to.frameData.delta = (0, t4.u)(0, 1e3 / 60, t - to.frameData.timestamp), to.frameData.timestamp = t, to.frameData.isProcessing = !0, to.S6.update.process(to.frameData), to.S6.preRender.process(to.frameData), to.S6.render.process(to.frameData), to.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(ic), this.sharedNodes.forEach(iP)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, to.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        to.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = es(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !e2(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || eh(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), iE((e = n).x), iE(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return es();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (eg(e.x, i.offset.x), eg(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = es();
                        eZ(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            if (n !== this.root && r && s.layoutScroll) {
                                if (r.isRoot) {
                                    eZ(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (eg(e.x, -i.offset.x), eg(e.y, -i.offset.y))
                                }
                                eg(e.x, r.offset.x), eg(e.y, r.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = es();
                        eZ(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && eP(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), eh(n.latestValues) && eP(i, n.latestValues)
                        }
                        return eh(this.latestValues) && eP(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = es();
                        eZ(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !eh(i.latestValues)) continue;
                            eu(i.latestValues) && i.updateSnapshot();
                            let n = es();
                            eZ(n, i.measurePageBox()), eQ(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return eh(this.latestValues) && eQ(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== to.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = to.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = es(), this.relativeTargetOrigin = es(), t8(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), eZ(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = es(), this.targetWithTransforms = es()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, t5(i.x, n.x, r.x), t5(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : eZ(this.target, this.layout.layoutBox), ef(this.target, this.targetDelta)) : eZ(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = es(), this.relativeTargetOrigin = es(), t8(this.relativeTargetOrigin, this.target, t.target), eZ(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                is.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || eu(this.parent.latestValues) || ec(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === to.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        eZ(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let o = r.instance;
                                    (!o || !o.style || "contents" !== o.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && eP(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, ef(t, s)), n && eh(r.latestValues) && eP(t, r.latestValues))
                                }
                                e.x = em(e.x), e.y = em(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = en(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = en(), this.projectionDeltaWithTransform = en());
                        let u = this.projectionTransform;
                        t3(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = e4(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), is.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = en();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = es(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(iS));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (ib(o.x, t.x, n), ib(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, p, f;
                                t8(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, iw(p.x, f.x, a.x, n), iw(p.y, f.y, a.y, n), i && (u = this.relativeTarget, d = i, u.x.min === d.x.min && u.x.max === d.x.max && u.y.min === d.y.min && u.y.max === d.y.max) && (this.isProjectionDirty = !1), i || (i = es()), eZ(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = (0, tQ.C)(0, void 0 !== i.opacity ? i.opacity : 1, eN(n)), t.opacityExit = (0, tQ.C)(void 0 !== e.opacity ? e.opacity : 1, 0, eH(n))) : s && (t.opacity = (0, tQ.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < eW; r++) {
                                    let s = `border${e_[r]}Radius`,
                                        o = ez(e, s),
                                        a = ez(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || e$(o) === e$(a) ? (t[s] = Math.max((0, tQ.C)(eU(o), eU(a), n), 0), ($.aQ.test(a) || $.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = (0, tQ.C)(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, to.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = to.Wi.update(() => {
                            eD.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = (0, D.i)(t) ? t : (0, it.BX)(t);
                                return n.start((0, ew.v)("", n, 1e3, i)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && iV(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || es();
                                let e = t0(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = t0(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            eZ(e, i), eP(e, r), t3(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new e8), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let n = {};
                        for (let e = 0; e < ie.length; e++) {
                            let r = "rotate" + ie[e];
                            i[r] && (n[r] = i[r], t.setStaticValue(r, 0))
                        }
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return ii;
                        let n = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = tr(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tr(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !eh(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = e4(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, E) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = E[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? tr(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(id), this.root.sharedNodes.clear()
                    }
                }
            }

            function ia(t) {
                t.updateLayout()
            }

            function il(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? eo(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = t0(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : iV(r, i.layoutBox, e) && eo(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = t0(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = en();
                    t3(o, e, i.layoutBox);
                    let a = en();
                    s ? t3(a, t.applyTransform(n, !0), i.measuredBox) : t3(a, e, i.layoutBox);
                    let l = !e2(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = es();
                                t8(o, i.layoutBox, r.layoutBox);
                                let a = es();
                                t8(a, e, s.layoutBox), e3(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function iu(t) {
                is.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function ih(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function ic(t) {
                t.clearSnapshot()
            }

            function id(t) {
                t.clearMeasurements()
            }

            function ip(t) {
                t.isLayoutDirty = !1
            }

            function im(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function ig(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function iv(t) {
                t.resolveTargetDelta()
            }

            function iy(t) {
                t.calcProjection()
            }

            function ix(t) {
                t.resetRotation()
            }

            function iP(t) {
                t.removeLeadSnapshot()
            }

            function ib(t, e, i) {
                t.translate = (0, tQ.C)(e.translate, 0, i), t.scale = (0, tQ.C)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function iw(t, e, i, n) {
                t.min = (0, tQ.C)(e.min, i.min, n), t.max = (0, tQ.C)(e.max, i.max, n)
            }

            function iS(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let iC = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                iA = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                iT = iA("applewebkit/") && !iA("chrome/") ? Math.round : tA.Z;

            function iE(t) {
                t.min = iT(t.min), t.max = iT(t.max)
            }

            function iV(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !t1(e5(e), e5(i), .2)
            }
            let iM = io({
                    attachResizeListener: (t, e) => tu(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                iD = {
                    current: void 0
                },
                ij = io({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!iD.current) {
                            let t = new iM({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), iD.current = t
                        }
                        return iD.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });
            var ik = i(95008),
                iR = i(27798),
                iL = i(44747);
            let iO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function iF(t, e, i = 1) {
                (0, tN.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [n, r] = function(t) {
                    let e = iO.exec(t);
                    if (!e) return [, ];
                    let [, i, n] = e;
                    return [i, n]
                }(t);
                if (!n) return;
                let s = window.getComputedStyle(e).getPropertyValue(n);
                if (s) {
                    let t = s.trim();
                    return (0, iL.P)(t) ? parseFloat(t) : t
                }
                return (0, R.tm)(r) ? iF(r, e, i + 1) : r
            }
            var iB = i(38824),
                iI = i(2980);
            let i_ = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                iW = t => i_.has(t),
                iU = t => Object.keys(t).some(iW),
                i$ = t => t === iI.Rx || t === $.px,
                iz = (t, e) => parseFloat(t.split(", ")[e]),
                iN = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/);
                    if (r) return iz(r[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/);
                        return e ? iz(e[1], t) : 0
                    }
                },
                iH = new Set(["x", "y", "z"]),
                iX = V._.filter(t => !iH.has(t)),
                iG = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: iN(4, 13),
                    y: iN(5, 14)
                };
            iG.translateX = iG.x, iG.translateY = iG.y;
            let iZ = (t, e, i) => {
                    let n = e.measureViewportBox(),
                        r = e.current,
                        s = getComputedStyle(r),
                        {
                            display: o
                        } = s,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                        a[t] = iG[t](n, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return i.forEach(i => {
                        let n = e.getValue(i);
                        n && n.jump(a[i]), t[i] = iG[i](l, s)
                    }), t
                },
                iY = (t, e, i = {}, n = {}) => {
                    e = { ...e
                    }, n = { ...n
                    };
                    let r = Object.keys(e).filter(iW),
                        s = [],
                        o = !1,
                        a = [];
                    if (r.forEach(r => {
                            let l;
                            let u = t.getValue(r);
                            if (!t.hasValue(r)) return;
                            let h = i[r],
                                c = (0, iB.C)(h),
                                d = e[r];
                            if ((0, tL.C)(d)) {
                                let t = d.length,
                                    e = null === d[0] ? 1 : 0;
                                h = d[e], c = (0, iB.C)(h);
                                for (let i = e; i < t && null !== d[i]; i++) l ? (0, tN.k)((0, iB.C)(d[i]) === l, "All keyframes must be of the same type") : (l = (0, iB.C)(d[i]), (0, tN.k)(l === c || i$(c) && i$(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = (0, iB.C)(d);
                            if (c !== l) {
                                if (i$(c) && i$(l)) {
                                    let t = u.get();
                                    "string" == typeof t && u.set(parseFloat(t)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === $.px && (e[r] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (o || (s = function(t) {
                                    let e = [];
                                    return iX.forEach(i => {
                                        let n = t.getValue(i);
                                        void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), o = !0), a.push(r), n[r] = void 0 !== n[r] ? n[r] : e[r], u.jump(d))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: n
                    }; {
                        let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            r = iZ(e, t, a);
                        return s.length && s.forEach(([e, i]) => {
                            t.getValue(e).set(i)
                        }), t.render(), b.j && null !== i && window.scrollTo({
                            top: i
                        }), {
                            target: r,
                            transitionEnd: n
                        }
                    }
                },
                iq = (t, e, i, n) => {
                    var r, s;
                    let o = function(t, { ...e
                    }, i) {
                        let n = t.current;
                        if (!(n instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        for (let r in i && (i = { ...i
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!(0, R.tm)(e)) return;
                                let i = iF(e, n);
                                i && t.set(i)
                            }), e) {
                            let t = e[r];
                            if (!(0, R.tm)(t)) continue;
                            let s = iF(t, n);
                            s && (e[r] = s, i || (i = {}), void 0 === i[r] && (i[r] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, n);
                    return e = o.target, n = o.transitionEnd, r = e, s = n, iU(r) ? iY(t, r, i, s) : {
                        target: r,
                        transitionEnd: s
                    }
                },
                iK = {
                    current: null
                },
                iJ = {
                    current: !1
                };
            var iQ = i(63227);
            let i0 = new WeakMap,
                i1 = Object.keys(P),
                i2 = i1.length,
                i3 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                i5 = m.length;
            class i6 {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    visualState: r
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => to.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = r;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = g(e), this.isVariantNode = v(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== o[t] && (0, D.i)(e) && (e.set(o[t], !1), (0, iQ.L)(l) && l.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, i0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), iJ.current || function() {
                        if (iJ.current = !0, b.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => iK.current = t.matches;
                                t.addListener(e), e()
                            } else iK.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iK.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in i0.delete(this.current), this.projection && this.projection.unmount(), (0, to.Pn)(this.notifyUpdate), (0, to.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = V.G.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && to.Wi.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), r()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, n, r) {
                    let s, o;
                    for (let t = 0; t < i2; t++) {
                        let i = i1[t],
                            {
                                isEnabled: n,
                                Feature: r,
                                ProjectionNode: a,
                                MeasureLayout: l
                            } = P[i];
                        a && (s = a), n(e) && (!this.features[i] && r && (this.features[i] = new r(this)), l && (o = l))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: i,
                            drag: n,
                            dragConstraints: o,
                            layoutScroll: a,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: i,
                            alwaysMeasureLayout: !!n || o && c(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: r,
                            layoutScroll: a,
                            layoutRoot: l
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : es()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < i3.length; e++) {
                        let i = i3[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: n
                        } = e;
                        for (let r in e) {
                            let s = e[r],
                                o = i[r];
                            if ((0, D.i)(s)) t.addValue(r, s), (0, iQ.L)(n) && n.add(r);
                            else if ((0, D.i)(o)) t.addValue(r, (0, it.BX)(s, {
                                owner: t
                            })), (0, iQ.L)(n) && n.remove(r);
                            else if (o !== s) {
                                if (t.hasValue(r)) {
                                    let e = t.getValue(r);
                                    e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(r);
                                    t.addValue(r, (0, it.BX)(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < i5; t++) {
                        let i = m[t],
                            n = this.props[i];
                        (d(n) || !1 === n) && (e[i] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, it.BX)(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: i
                    } = this.props, n = "string" == typeof i || "object" == typeof i ? null === (e = (0, te.o)(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== n) return n;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || (0, D.i)(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new eB.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class i8 extends i6 {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, {
                    transformValues: n
                }, r) {
                    let s = (0, iR.P$)(i, t || {}, this);
                    if (n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r) {
                        (0, iR.GJ)(this, i, s);
                        let t = iq(this, i, s, e);
                        e = t.transitionEnd, i = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            class i4 extends i8 {
                readValueFromInstance(t, e) {
                    if (V.G.has(e)) {
                        let t = (0, ik.A)(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = ((0, R.f9)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return eb(t, e)
                }
                build(t, e, i, n) {
                    F(t, e, i, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return Q(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, D.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, n) {
                    q(t, e, i, n)
                }
            }
            class i9 extends i8 {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (V.G.has(e)) {
                        let t = (0, ik.A)(e);
                        return t && t.default || 0
                    }
                    return e = K.has(e) ? e : (0, Y.D)(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return es()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tt(t, e)
                }
                build(t, e, i, n) {
                    X(t, e, i, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    J(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = Z(t.tagName), super.mount(t)
                }
            }
            let i7 = (t, e) => T(t) ? new i9(e, {
                    enableHardwareAcceleration: !1
                }) : new i4(e, {
                    enableHardwareAcceleration: !0
                }),
                nt = {
                    animation: {
                        Feature: tU
                    },
                    exit: {
                        Feature: tz
                    },
                    inView: {
                        Feature: tR
                    },
                    tap: {
                        Feature: tE
                    },
                    focus: {
                        Feature: tS
                    },
                    hover: {
                        Feature: tw
                    },
                    pan: {
                        Feature: eM
                    },
                    drag: {
                        Feature: eE,
                        ProjectionNode: ij,
                        MeasureLayout: eO
                    },
                    layout: {
                        ProjectionNode: ij,
                        MeasureLayout: eO
                    }
                },
                ne = function(t) {
                    function e(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: n,
                            Component: p
                        }) {
                            t && function(t) {
                                for (let e in t) P[e] = { ...P[e],
                                    ...t[e]
                                }
                            }(t);
                            let f = (0, r.forwardRef)(function(f, m) {
                                var v;
                                let x;
                                let P = { ...(0, r.useContext)(s),
                                        ...f,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, r.useContext)(w).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(f)
                                    },
                                    {
                                        isStatic: C
                                    } = P,
                                    A = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (g(t)) {
                                                let {
                                                    initial: e,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === e || d(e) ? e : void 0,
                                                    animate: d(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, r.useContext)(o));
                                        return (0, r.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [y(e), y(i)])
                                    }(f),
                                    T = n(f, C);
                                if (!C && b.j) {
                                    A.visualElement = function(t, e, i, n) {
                                        let {
                                            visualElement: c
                                        } = (0, r.useContext)(o), d = (0, r.useContext)(u), p = (0, r.useContext)(a), f = (0, r.useContext)(s).reducedMotion, m = (0, r.useRef)();
                                        n = n || d.renderer, !m.current && n && (m.current = n(t, {
                                            visualState: e,
                                            parent: c,
                                            props: i,
                                            presenceContext: p,
                                            blockInitialAnimation: !!p && !1 === p.initial,
                                            reducedMotionConfig: f
                                        }));
                                        let g = m.current;
                                        (0, r.useInsertionEffect)(() => {
                                            g && g.update(i, p)
                                        });
                                        let v = (0, r.useRef)(!!(i[h.M] && !window.HandoffComplete));
                                        return (0, l.L)(() => {
                                            g && (g.render(), v.current && g.animationState && g.animationState.animateChanges())
                                        }), (0, r.useEffect)(() => {
                                            g && (g.updateFeatures(), !v.current && g.animationState && g.animationState.animateChanges(), v.current && (v.current = !1, window.HandoffComplete = !0))
                                        }), g
                                    }(p, T, P, e);
                                    let i = (0, r.useContext)(S),
                                        n = (0, r.useContext)(u).strict;
                                    A.visualElement && (x = A.visualElement.loadFeatures(P, n, t, i))
                                }
                                return r.createElement(o.Provider, {
                                    value: A
                                }, x && A.visualElement ? r.createElement(x, {
                                    visualElement: A.visualElement,
                                    ...P
                                }) : null, i(p, f, (v = A.visualElement, (0, r.useCallback)(t => {
                                    t && T.mount && T.mount(t), v && (t ? v.mount(t) : v.unmount()), m && ("function" == typeof m ? m(t) : c(m) && (m.current = t))
                                }, [v])), T, C, A.visualElement))
                            });
                            return f[C] = p, f
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let i = new Map;
                    return new Proxy(e, {
                        get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, n) {
                    return { ...T(t) ? ta : tl,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            return (e, i, n, {
                                latestValues: s
                            }, o) => {
                                let a = (T(e) ? function(t, e, i, n) {
                                        let s = (0, r.useMemo)(() => {
                                            let i = G();
                                            return X(i, e, {
                                                enableHardwareAcceleration: !1
                                            }, Z(n), t.transformTemplate), { ...i.attrs,
                                                style: { ...i.style
                                                }
                                            }
                                        }, [e]);
                                        if (t.style) {
                                            let e = {};
                                            I(e, t.style, t), s.style = { ...e,
                                                ...s.style
                                            }
                                        }
                                        return s
                                    } : function(t, e, i) {
                                        let n = {},
                                            s = function(t, e, i) {
                                                let n = t.style || {},
                                                    s = {};
                                                return I(s, n, t), Object.assign(s, function({
                                                    transformTemplate: t
                                                }, e, i) {
                                                    return (0, r.useMemo)(() => {
                                                        let n = B();
                                                        return F(n, e, {
                                                            enableHardwareAcceleration: !i
                                                        }, t), Object.assign({}, n.vars, n.style)
                                                    }, [e])
                                                }(t, e, i)), t.transformValues ? t.transformValues(s) : s
                                            }(t, e, i);
                                        return t.drag && !1 !== t.dragListener && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n
                                    })(i, s, o, e),
                                    l = { ... function(t, e, i) {
                                            let n = {};
                                            for (let r in t)("values" !== r || "object" != typeof t.values) && (U(r) || !0 === i && W(r) || !e && !W(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                            return n
                                        }(i, "string" == typeof e, t),
                                        ...a,
                                        ref: n
                                    },
                                    {
                                        children: u
                                    } = i,
                                    h = (0, r.useMemo)(() => (0, D.i)(u) ? u.get() : u, [u]);
                                return (0, r.createElement)(e, { ...l,
                                    children: h
                                })
                            }
                        }(e),
                        createVisualElement: n,
                        Component: t
                    }
                })(t, e, nt, i7))
        },
        27905: function(t, e, i) {
            "use strict";
            i.d(e, {
                D: function() {
                    return n
                }
            });
            let n = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        },
        80417: function(t, e, i) {
            "use strict";
            i.d(e, {
                Xp: function() {
                    return o
                },
                f9: function() {
                    return r
                },
                tm: function() {
                    return s
                }
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                r = n("--"),
                s = n("var(--"),
                o = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
        },
        19006: function(t, e, i) {
            "use strict";
            i.d(e, {
                T: function() {
                    return o
                }
            });
            var n = i(89155),
                r = i(34875),
                s = i(95008);

            function o(t, e) {
                let i = (0, s.A)(t);
                return i !== r.h && (i = n.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
        },
        95008: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: function() {
                    return o
                }
            });
            var n = i(2199),
                r = i(34875);
            let s = { ...i(83002).j,
                    color: n.$,
                    backgroundColor: n.$,
                    outlineColor: n.$,
                    fill: n.$,
                    stroke: n.$,
                    borderColor: n.$,
                    borderTopColor: n.$,
                    borderRightColor: n.$,
                    borderBottomColor: n.$,
                    borderLeftColor: n.$,
                    filter: r.h,
                    WebkitFilter: r.h
                },
                o = t => s[t]
        },
        38824: function(t, e, i) {
            "use strict";
            i.d(e, {
                $: function() {
                    return o
                },
                C: function() {
                    return a
                }
            });
            var n = i(2980),
                r = i(43681),
                s = i(88598);
            let o = [n.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                a = t => o.find((0, s.l)(t))
        },
        83002: function(t, e, i) {
            "use strict";
            i.d(e, {
                j: function() {
                    return o
                }
            });
            var n = i(2980),
                r = i(43681);
            let s = { ...n.Rx,
                    transform: Math.round
                },
                o = {
                    borderWidth: r.px,
                    borderTopWidth: r.px,
                    borderRightWidth: r.px,
                    borderBottomWidth: r.px,
                    borderLeftWidth: r.px,
                    borderRadius: r.px,
                    radius: r.px,
                    borderTopLeftRadius: r.px,
                    borderTopRightRadius: r.px,
                    borderBottomRightRadius: r.px,
                    borderBottomLeftRadius: r.px,
                    width: r.px,
                    maxWidth: r.px,
                    height: r.px,
                    maxHeight: r.px,
                    size: r.px,
                    top: r.px,
                    right: r.px,
                    bottom: r.px,
                    left: r.px,
                    padding: r.px,
                    paddingTop: r.px,
                    paddingRight: r.px,
                    paddingBottom: r.px,
                    paddingLeft: r.px,
                    margin: r.px,
                    marginTop: r.px,
                    marginRight: r.px,
                    marginBottom: r.px,
                    marginLeft: r.px,
                    rotate: r.RW,
                    rotateX: r.RW,
                    rotateY: r.RW,
                    rotateZ: r.RW,
                    scale: n.bA,
                    scaleX: n.bA,
                    scaleY: n.bA,
                    scaleZ: n.bA,
                    skew: r.RW,
                    skewX: r.RW,
                    skewY: r.RW,
                    distance: r.px,
                    translateX: r.px,
                    translateY: r.px,
                    translateZ: r.px,
                    x: r.px,
                    y: r.px,
                    z: r.px,
                    perspective: r.px,
                    transformPerspective: r.px,
                    opacity: n.Fq,
                    originX: r.$C,
                    originY: r.$C,
                    originZ: r.px,
                    zIndex: s,
                    fillOpacity: n.Fq,
                    strokeOpacity: n.Fq,
                    numOctaves: s
                }
        },
        88598: function(t, e, i) {
            "use strict";
            i.d(e, {
                l: function() {
                    return n
                }
            });
            let n = t => e => e.test(t)
        },
        49303: function(t, e, i) {
            "use strict";
            i.d(e, {
                G: function() {
                    return r
                },
                _: function() {
                    return n
                }
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                r = new Set(n)
        },
        32593: function(t, e, i) {
            "use strict";
            i.d(e, {
                x: function() {
                    return r
                }
            });
            var n = i(93331);

            function r(t, e, i) {
                let r = t.getProps();
                return (0, n.o)(r, e, void 0 !== i ? i : r.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
                }(t))
            }
        },
        93331: function(t, e, i) {
            "use strict";

            function n(t, e, i, n = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), e
            }
            i.d(e, {
                o: function() {
                    return n
                }
            })
        },
        27798: function(t, e, i) {
            "use strict";
            i.d(e, {
                GJ: function() {
                    return y
                },
                P$: function() {
                    return x
                },
                CD: function() {
                    return m
                },
                gg: function() {
                    return v
                }
            });
            var n = i(44747),
                r = i(85243),
                s = i(61832),
                o = i(74101),
                a = i(89155),
                l = i(19006),
                u = i(2199),
                h = i(38824),
                c = i(88598);
            let d = [...h.$, u.$, a.P],
                p = t => d.find((0, c.l)(t));
            var f = i(32593);

            function m(t, e) {
                let i = (0, f.x)(t, e),
                    {
                        transitionEnd: n = {},
                        transition: r = {},
                        ...a
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                for (let e in a = { ...a,
                        ...n
                    }) {
                    let i = (0, s.Y)(a[e]);
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, o.BX)(i))
                }
            }

            function g(t, e) {
                [...e].reverse().forEach(i => {
                    let n = t.getVariant(i);
                    n && m(t, n), t.variantChildren && t.variantChildren.forEach(t => {
                        g(t, e)
                    })
                })
            }

            function v(t, e) {
                return Array.isArray(e) ? g(t, e) : "string" == typeof e ? g(t, [e]) : void m(t, e)
            }

            function y(t, e, i) {
                var s, u;
                let h = Object.keys(e).filter(e => !t.hasValue(e)),
                    c = h.length;
                if (c)
                    for (let d = 0; d < c; d++) {
                        let c = h[d],
                            f = e[c],
                            m = null;
                        Array.isArray(f) && (m = f[0]), null === m && (m = null !== (u = null !== (s = i[c]) && void 0 !== s ? s : t.readValue(c)) && void 0 !== u ? u : e[c]), null != m && ("string" == typeof m && ((0, n.P)(m) || (0, r.W)(m)) ? m = parseFloat(m) : !p(m) && a.P.test(f) && (m = (0, l.T)(c, f)), t.addValue(c, (0, o.BX)(m, {
                            owner: t
                        })), void 0 === i[c] && (i[c] = m), null !== m && t.setBaseTarget(c, m))
                    }
            }

            function x(t, e, i) {
                let n = {};
                for (let r in t) {
                    let t = function(t, e) {
                        if (e) return (e[t] || e.default || e).from
                    }(r, e);
                    if (void 0 !== t) n[r] = t;
                    else {
                        let t = i.getValue(r);
                        t && (n[r] = t.get())
                    }
                }
                return n
            }
        },
        77081: function(t, e, i) {
            "use strict";

            function n(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function r(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            i.d(e, {
                cl: function() {
                    return r
                },
                y4: function() {
                    return n
                }
            })
        },
        43021: function(t, e, i) {
            "use strict";
            i.d(e, {
                u: function() {
                    return n
                }
            });
            let n = (t, e, i) => Math.min(Math.max(i, t), e)
        },
        46567: function(t, e, i) {
            "use strict";
            i.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var n = i(26977);
            let r = n.Z,
                s = n.Z
        },
        16613: function(t, e, i) {
            "use strict";
            i.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof document
        },
        44747: function(t, e, i) {
            "use strict";
            i.d(e, {
                P: function() {
                    return n
                }
            });
            let n = t => /^\-?\d*\.?\d+$/.test(t)
        },
        85243: function(t, e, i) {
            "use strict";
            i.d(e, {
                W: function() {
                    return n
                }
            });
            let n = t => /^0[^.\s]+$/.test(t)
        },
        40007: function(t, e, i) {
            "use strict";
            i.d(e, {
                C: function() {
                    return n
                }
            });
            let n = (t, e, i) => -i * t + i * e + t
        },
        26977: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        },
        44694: function(t, e, i) {
            "use strict";
            i.d(e, {
                z: function() {
                    return r
                }
            });
            let n = (t, e) => i => e(t(i)),
                r = (...t) => t.reduce(n)
        },
        42868: function(t, e, i) {
            "use strict";
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            let n = (t, e, i) => {
                let n = e - t;
                return 0 === n ? 1 : (i - t) / n
            }
        },
        61832: function(t, e, i) {
            "use strict";
            i.d(e, {
                Y: function() {
                    return s
                },
                p: function() {
                    return r
                }
            });
            var n = i(10363);
            let r = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                s = t => (0, n.C)(t) ? t[t.length - 1] || 0 : t
        },
        27026: function(t, e, i) {
            "use strict";
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(77081);
            class r {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, n.y4)(this.subscriptions, t), () => (0, n.cl)(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        81356: function(t, e, i) {
            "use strict";
            i.d(e, {
                X: function() {
                    return r
                },
                w: function() {
                    return n
                }
            });
            let n = t => 1e3 * t,
                r = t => t / 1e3
        },
        10961: function(t, e, i) {
            "use strict";
            i.d(e, {
                h: function() {
                    return r
                }
            });
            var n = i(2265);

            function r(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        538: function(t, e, i) {
            "use strict";
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(2265);
            let r = i(16613).j ? n.useLayoutEffect : n.useEffect
        },
        69815: function(t, e, i) {
            "use strict";

            function n(t, e) {
                return e ? 1e3 / e * t : 0
            }
            i.d(e, {
                R: function() {
                    return n
                }
            })
        },
        74101: function(t, e, i) {
            "use strict";
            i.d(e, {
                BX: function() {
                    return u
                }
            });
            var n = i(27026),
                r = i(69815),
                s = i(72363);
            let o = t => !isNaN(parseFloat(t)),
                a = {
                    current: void 0
                };
            class l {
                constructor(t, e = {}) {
                    this.version = "10.16.16", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: i,
                            timestamp: n
                        } = s.frameData;
                        this.lastUpdated !== n && (this.timeDelta = i, this.lastUpdated = n, s.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => s.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = o(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new n.L);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), s.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = t, this.timeDelta = i
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return a.current && a.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? (0, r.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function u(t, e) {
                return new l(t, e)
            }
        },
        93257: function(t, e, i) {
            "use strict";
            i.d(e, {
                $: function() {
                    return r
                }
            });
            var n = i(72808);
            let r = {
                test: (0, i(50686).i)("#"),
                parse: function(t) {
                    let e = "",
                        i = "",
                        n = "",
                        r = "";
                    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                        red: parseInt(e, 16),
                        green: parseInt(i, 16),
                        blue: parseInt(n, 16),
                        alpha: r ? parseInt(r, 16) / 255 : 1
                    }
                },
                transform: n.m.transform
            }
        },
        26002: function(t, e, i) {
            "use strict";
            i.d(e, {
                J: function() {
                    return a
                }
            });
            var n = i(2980),
                r = i(43681),
                s = i(2038),
                o = i(50686);
            let a = {
                test: (0, o.i)("hsl", "hue"),
                parse: (0, o.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: o = 1
                }) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0, s.Nw)(e)) + ", " + r.aQ.transform((0, s.Nw)(i)) + ", " + (0, s.Nw)(n.Fq.transform(o)) + ")"
            }
        },
        2199: function(t, e, i) {
            "use strict";
            i.d(e, {
                $: function() {
                    return a
                }
            });
            var n = i(2038),
                r = i(93257),
                s = i(26002),
                o = i(72808);
            let a = {
                test: t => o.m.test(t) || r.$.test(t) || s.J.test(t),
                parse: t => o.m.test(t) ? o.m.parse(t) : s.J.test(t) ? s.J.parse(t) : r.$.parse(t),
                transform: t => (0, n.HD)(t) ? t : t.hasOwnProperty("red") ? o.m.transform(t) : s.J.transform(t)
            }
        },
        72808: function(t, e, i) {
            "use strict";
            i.d(e, {
                m: function() {
                    return u
                }
            });
            var n = i(43021),
                r = i(2980),
                s = i(2038),
                o = i(50686);
            let a = t => (0, n.u)(0, 255, t),
                l = { ...r.Rx,
                    transform: t => Math.round(a(t))
                },
                u = {
                    test: (0, o.i)("rgb", "red"),
                    parse: (0, o.d)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0, s.Nw)(r.Fq.transform(n)) + ")"
                }
        },
        50686: function(t, e, i) {
            "use strict";
            i.d(e, {
                d: function() {
                    return s
                },
                i: function() {
                    return r
                }
            });
            var n = i(2038);
            let r = (t, e) => i => !!((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                s = (t, e, i) => r => {
                    if (!(0, n.HD)(r)) return r;
                    let [s, o, a, l] = r.match(n.KP);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(o),
                        [i]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        34875: function(t, e, i) {
            "use strict";
            i.d(e, {
                h: function() {
                    return l
                }
            });
            var n = i(89155),
                r = i(2038);
            let s = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function o(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(r.KP) || [];
                if (!n) return t;
                let o = i.replace(n, ""),
                    a = s.has(e) ? 1 : 0;
                return n !== i && (a *= 100), e + "(" + a + o + ")"
            }
            let a = /([a-z-]*)\(.*?\)/g,
                l = { ...n.P,
                    getAnimatableNone: t => {
                        let e = t.match(a);
                        return e ? e.map(o).join(" ") : t
                    }
                }
        },
        89155: function(t, e, i) {
            "use strict";
            i.d(e, {
                P: function() {
                    return g
                },
                V: function() {
                    return d
                }
            });
            var n = i(80417),
                r = i(26977),
                s = i(2199),
                o = i(2980),
                a = i(2038);
            let l = {
                    regex: n.Xp,
                    countKey: "Vars",
                    token: "${v}",
                    parse: r.Z
                },
                u = {
                    regex: a.dA,
                    countKey: "Colors",
                    token: "${c}",
                    parse: s.$.parse
                },
                h = {
                    regex: a.KP,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: o.Rx.parse
                };

            function c(t, {
                regex: e,
                countKey: i,
                token: n,
                parse: r
            }) {
                let s = t.tokenised.match(e);
                s && (t["num" + i] = s.length, t.tokenised = t.tokenised.replace(e, n), t.values.push(...s.map(r)))
            }

            function d(t) {
                let e = t.toString(),
                    i = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return i.value.includes("var(--") && c(i, l), c(i, u), c(i, h), i
            }

            function p(t) {
                return d(t).values
            }

            function f(t) {
                let {
                    values: e,
                    numColors: i,
                    numVars: n,
                    tokenised: r
                } = d(t), o = e.length;
                return t => {
                    let e = r;
                    for (let r = 0; r < o; r++) e = r < n ? e.replace(l.token, t[r]) : r < n + i ? e.replace(u.token, s.$.transform(t[r])) : e.replace(h.token, (0, a.Nw)(t[r]));
                    return e
                }
            }
            let m = t => "number" == typeof t ? 0 : t,
                g = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && (0, a.HD)(t) && ((null === (e = t.match(a.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(a.dA)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: p,
                    createTransformer: f,
                    getAnimatableNone: function(t) {
                        let e = p(t);
                        return f(t)(e.map(m))
                    }
                }
        },
        2980: function(t, e, i) {
            "use strict";
            i.d(e, {
                Fq: function() {
                    return s
                },
                Rx: function() {
                    return r
                },
                bA: function() {
                    return o
                }
            });
            var n = i(43021);
            let r = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = { ...r,
                    transform: t => (0, n.u)(0, 1, t)
                },
                o = { ...r,
                    default: 1
                }
        },
        43681: function(t, e, i) {
            "use strict";
            i.d(e, {
                $C: function() {
                    return h
                },
                RW: function() {
                    return s
                },
                aQ: function() {
                    return o
                },
                px: function() {
                    return a
                },
                vh: function() {
                    return l
                },
                vw: function() {
                    return u
                }
            });
            var n = i(2038);
            let r = t => ({
                    test: e => (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                s = r("deg"),
                o = r("%"),
                a = r("px"),
                l = r("vh"),
                u = r("vw"),
                h = { ...o,
                    parse: t => o.parse(t) / 100,
                    transform: t => o.transform(100 * t)
                }
        },
        2038: function(t, e, i) {
            "use strict";
            i.d(e, {
                HD: function() {
                    return a
                },
                KP: function() {
                    return r
                },
                Nw: function() {
                    return n
                },
                dA: function() {
                    return s
                },
                mj: function() {
                    return o
                }
            });
            let n = t => Math.round(1e5 * t) / 1e5,
                r = /(-)?([\d]*\.?[\d])+/g,
                s = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                o = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function a(t) {
                return "string" == typeof t
            }
        },
        63227: function(t, e, i) {
            "use strict";
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(65735);

            function r(t) {
                return !!((0, n.i)(t) && t.add)
            }
        },
        65735: function(t, e, i) {
            "use strict";
            i.d(e, {
                i: function() {
                    return n
                }
            });
            let n = t => !!(t && t.getVelocity)
        }
    }
]);