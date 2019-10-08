! function (t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    t.exports = n(1)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i() {
        if (v.length > 0) {
            document.body.classList.add("isLoading");
            new h.default({
                assets: v
            }).on("error", function (t) {
                console.error(t)
            }).on("progress", function (t) {
                var e = document.body.querySelector(".Loading-Bar");
                e && (e.style.width = (100 * t).toFixed(2) + "%")
            }).on("complete", o).start()
        } else a()
    }

    function o(t) {
        console.log("Image Loaded : ", t), window.assets = t, a()
    }

    function a() {
        var t = document.createElement("canvas");
        t.className = "Main-Canvas", document.body.appendChild(t), d.init(t);
        new f.default
    }
    n(2);
    var s = n(6),
        u = r(s),
        l = n(7),
        f = r(l),
        c = n(126),
        h = r(c),
        d = u.default.GL;
    window.params = {
        numParticles: 256,
        numSnow: 64,
        skipCount: 10,
        gamma: 2.2,
        exposure: 5,
        offset: 1,
        maxRadius: 1.5,
        domeRadius: 5.5,
        flyThreshold: .75,
        renderEnvironment: !0,
        renderParticles: !0,
        particleColor: [255, 255, 255],
        particleOpacity: new u.default.TweenNumber(0, "expIn"),
        time: 999 * Math.random()
    }, window.colors = [
        [1, 45 / 255, 0],
        [1, 160 / 255, 160 / 255],
        [180 / 255, 1, 114 / 255],
        [1, 45 / 255, 0]
    ];
    var v = [{
        id: "aoTerrain",
        url: "assets/aoTerrain.jpg"
    }, {
        id: "aoTree",
        url: "assets/aoTree.jpg"
    }, {
        id: "winter",
        url: "assets/winter.jpg"
    }, {
        id: "spring",
        url: "assets/spring.jpg"
    }, {
        id: "summer",
        url: "assets/summer.jpg"
    }, {
        id: "fall",
        url: "assets/fall.jpg"
    }, {
        id: "noise",
        url: "assets/noise.jpg"
    }];
    document.body ? i() : window.addEventListener("DOMContentLoaded", i)
}, function (t, e) {}, , , , function (t, e, n) {
    var r, r;
    ! function (e) {
        t.exports = e()
    }(function () {
        return function t(e, n, i) {
            function o(s, u) {
                if (!n[s]) {
                    if (!e[s]) {
                        var l = "function" == typeof r && r;
                        if (!u && l) return r(s, !0);
                        if (a) return a(s, !0);
                        var f = new Error("Cannot find module '" + s + "'");
                        throw f.code = "MODULE_NOT_FOUND", f
                    }
                    var c = n[s] = {
                        exports: {}
                    };
                    e[s][0].call(c.exports, function (t) {
                        var n = e[s][1][t];
                        return o(n ? n : t)
                    }, c, c.exports, t, e, n, i)
                }
                return n[s].exports
            }
            for (var a = "function" == typeof r && r, s = 0; s < i.length; s++) o(i[s]);
            return o
        }({
            1: [function (t, e, n) {
                n.glMatrix = t("./gl-matrix/common.js"), n.mat2 = t("./gl-matrix/mat2.js"), n.mat2d = t("./gl-matrix/mat2d.js"), n.mat3 = t("./gl-matrix/mat3.js"), n.mat4 = t("./gl-matrix/mat4.js"), n.quat = t("./gl-matrix/quat.js"), n.vec2 = t("./gl-matrix/vec2.js"), n.vec3 = t("./gl-matrix/vec3.js"), n.vec4 = t("./gl-matrix/vec4.js")
            }, {
                "./gl-matrix/common.js": 2,
                "./gl-matrix/mat2.js": 3,
                "./gl-matrix/mat2d.js": 4,
                "./gl-matrix/mat3.js": 5,
                "./gl-matrix/mat4.js": 6,
                "./gl-matrix/quat.js": 7,
                "./gl-matrix/vec2.js": 8,
                "./gl-matrix/vec3.js": 9,
                "./gl-matrix/vec4.js": 10
            }],
            2: [function (t, e, n) {
                var r = {};
                r.EPSILON = 1e-6, r.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, r.RANDOM = Math.random, r.ENABLE_SIMD = !1, r.SIMD_AVAILABLE = r.ARRAY_TYPE === Float32Array && "SIMD" in this, r.USE_SIMD = r.ENABLE_SIMD && r.SIMD_AVAILABLE, r.setMatrixArrayType = function (t) {
                    r.ARRAY_TYPE = t
                };
                var i = Math.PI / 180;
                r.toRadian = function (t) {
                    return t * i
                }, r.equals = function (t, e) {
                    return Math.abs(t - e) <= r.EPSILON * Math.max(1, Math.abs(t), Math.abs(e))
                }, e.exports = r
            }, {}],
            3: [function (t, e, n) {
                var r = t("./common.js"),
                    i = {};
                i.create = function () {
                    var t = new r.ARRAY_TYPE(4);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
                }, i.clone = function (t) {
                    var e = new r.ARRAY_TYPE(4);
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
                }, i.copy = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
                }, i.identity = function (t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
                }, i.fromValues = function (t, e, n, i) {
                    var o = new r.ARRAY_TYPE(4);
                    return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o
                }, i.set = function (t, e, n, r, i) {
                    return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t
                }, i.transpose = function (t, e) {
                    if (t === e) {
                        var n = e[1];
                        t[1] = e[2], t[2] = n
                    } else t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3];
                    return t
                }, i.invert = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = n * o - i * r;
                    return a ? (a = 1 / a, t[0] = o * a, t[1] = -r * a, t[2] = -i * a, t[3] = n * a, t) : null
                }, i.adjoint = function (t, e) {
                    var n = e[0];
                    return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = n, t
                }, i.determinant = function (t) {
                    return t[0] * t[3] - t[2] * t[1]
                }, i.multiply = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = n[0],
                        u = n[1],
                        l = n[2],
                        f = n[3];
                    return t[0] = r * s + o * u, t[1] = i * s + a * u, t[2] = r * l + o * f, t[3] = i * l + a * f, t
                }, i.mul = i.multiply, i.rotate = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return t[0] = r * u + o * s, t[1] = i * u + a * s, t[2] = r * -s + o * u, t[3] = i * -s + a * u, t
                }, i.scale = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = n[0],
                        u = n[1];
                    return t[0] = r * s, t[1] = i * s, t[2] = o * u, t[3] = a * u, t
                }, i.fromRotation = function (t, e) {
                    var n = Math.sin(e),
                        r = Math.cos(e);
                    return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t
                }, i.fromScaling = function (t, e) {
                    return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t
                }, i.str = function (t) {
                    return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
                }, i.frob = function (t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
                }, i.LDU = function (t, e, n, r) {
                    return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], [t, e, n]
                }, i.add = function (t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
                }, i.subtract = function (t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
                }, i.sub = i.subtract, i.exactEquals = function (t, e) {
                    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
                }, i.equals = function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = t[2],
                        a = t[3],
                        s = e[0],
                        u = e[1],
                        l = e[2],
                        f = e[3];
                    return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - f) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(f))
                }, i.multiplyScalar = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
                }, i.multiplyScalarAndAdd = function (t, e, n, r) {
                    return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
                }, e.exports = i
            }, {
                "./common.js": 2
            }],
            4: [function (t, e, n) {
                var r = t("./common.js"),
                    i = {};
                i.create = function () {
                    var t = new r.ARRAY_TYPE(6);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                }, i.clone = function (t) {
                    var e = new r.ARRAY_TYPE(6);
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
                }, i.copy = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
                }, i.identity = function (t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                }, i.fromValues = function (t, e, n, i, o, a) {
                    var s = new r.ARRAY_TYPE(6);
                    return s[0] = t, s[1] = e, s[2] = n, s[3] = i, s[4] = o, s[5] = a, s
                }, i.set = function (t, e, n, r, i, o, a) {
                    return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t
                }, i.invert = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = e[4],
                        s = e[5],
                        u = n * o - r * i;
                    return u ? (u = 1 / u, t[0] = o * u, t[1] = -r * u, t[2] = -i * u, t[3] = n * u, t[4] = (i * s - o * a) * u, t[5] = (r * a - n * s) * u, t) : null
                }, i.determinant = function (t) {
                    return t[0] * t[3] - t[1] * t[2]
                }, i.multiply = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = n[0],
                        f = n[1],
                        c = n[2],
                        h = n[3],
                        d = n[4],
                        v = n[5];
                    return t[0] = r * l + o * f, t[1] = i * l + a * f, t[2] = r * c + o * h, t[3] = i * c + a * h, t[4] = r * d + o * v + s, t[5] = i * d + a * v + u, t
                }, i.mul = i.multiply, i.rotate = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = Math.sin(n),
                        f = Math.cos(n);
                    return t[0] = r * f + o * l, t[1] = i * f + a * l, t[2] = r * -l + o * f, t[3] = i * -l + a * f, t[4] = s, t[5] = u, t
                }, i.scale = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = n[0],
                        f = n[1];
                    return t[0] = r * l, t[1] = i * l, t[2] = o * f, t[3] = a * f, t[4] = s, t[5] = u, t
                }, i.translate = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = n[0],
                        f = n[1];
                    return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = r * l + o * f + s, t[5] = i * l + a * f + u, t
                }, i.fromRotation = function (t, e) {
                    var n = Math.sin(e),
                        r = Math.cos(e);
                    return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t
                }, i.fromScaling = function (t, e) {
                    return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t
                }, i.fromTranslation = function (t, e) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t
                }, i.str = function (t) {
                    return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
                }, i.frob = function (t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
                }, i.add = function (t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t
                }, i.subtract = function (t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t
                }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t
                }, i.multiplyScalarAndAdd = function (t, e, n, r) {
                    return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t
                }, i.exactEquals = function (t, e) {
                    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
                }, i.equals = function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = t[2],
                        a = t[3],
                        s = t[4],
                        u = t[5],
                        l = e[0],
                        f = e[1],
                        c = e[2],
                        h = e[3],
                        d = e[4],
                        v = e[5];
                    return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(i - f) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(f)) && Math.abs(o - c) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(a - h) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(s - d) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(u - v) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v))
                }, e.exports = i
            }, {
                "./common.js": 2
            }],
            5: [function (t, e, n) {
                var r = t("./common.js"),
                    i = {};
                i.create = function () {
                    var t = new r.ARRAY_TYPE(9);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }, i.fromMat4 = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
                }, i.clone = function (t) {
                    var e = new r.ARRAY_TYPE(9);
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
                }, i.copy = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
                }, i.fromValues = function (t, e, n, i, o, a, s, u, l) {
                    var f = new r.ARRAY_TYPE(9);
                    return f[0] = t, f[1] = e, f[2] = n, f[3] = i, f[4] = o, f[5] = a, f[6] = s, f[7] = u, f[8] = l, f
                }, i.set = function (t, e, n, r, i, o, a, s, u, l) {
                    return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = s, t[7] = u, t[8] = l, t
                }, i.identity = function (t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }, i.transpose = function (t, e) {
                    if (t === e) {
                        var n = e[1],
                            r = e[2],
                            i = e[5];
                        t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = i
                    } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
                    return t
                }, i.invert = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = e[4],
                        s = e[5],
                        u = e[6],
                        l = e[7],
                        f = e[8],
                        c = f * a - s * l,
                        h = -f * o + s * u,
                        d = l * o - a * u,
                        v = n * c + r * h + i * d;
                    return v ? (v = 1 / v, t[0] = c * v, t[1] = (-f * r + i * l) * v, t[2] = (s * r - i * a) * v, t[3] = h * v, t[4] = (f * n - i * u) * v, t[5] = (-s * n + i * o) * v, t[6] = d * v, t[7] = (-l * n + r * u) * v, t[8] = (a * n - r * o) * v, t) : null
                }, i.adjoint = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = e[4],
                        s = e[5],
                        u = e[6],
                        l = e[7],
                        f = e[8];
                    return t[0] = a * f - s * l, t[1] = i * l - r * f, t[2] = r * s - i * a, t[3] = s * u - o * f, t[4] = n * f - i * u, t[5] = i * o - n * s, t[6] = o * l - a * u, t[7] = r * u - n * l, t[8] = n * a - r * o, t
                }, i.determinant = function (t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2],
                        i = t[3],
                        o = t[4],
                        a = t[5],
                        s = t[6],
                        u = t[7],
                        l = t[8];
                    return e * (l * o - a * u) + n * (-l * i + a * s) + r * (u * i - o * s)
                }, i.multiply = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = e[6],
                        f = e[7],
                        c = e[8],
                        h = n[0],
                        d = n[1],
                        v = n[2],
                        p = n[3],
                        m = n[4],
                        x = n[5],
                        _ = n[6],
                        M = n[7],
                        b = n[8];
                    return t[0] = h * r + d * a + v * l, t[1] = h * i + d * s + v * f, t[2] = h * o + d * u + v * c, t[3] = p * r + m * a + x * l, t[4] = p * i + m * s + x * f, t[5] = p * o + m * u + x * c, t[6] = _ * r + M * a + b * l, t[7] = _ * i + M * s + b * f, t[8] = _ * o + M * u + b * c, t
                }, i.mul = i.multiply, i.translate = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = e[6],
                        f = e[7],
                        c = e[8],
                        h = n[0],
                        d = n[1];
                    return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = s, t[5] = u, t[6] = h * r + d * a + l, t[7] = h * i + d * s + f, t[8] = h * o + d * u + c, t
                }, i.rotate = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = e[6],
                        f = e[7],
                        c = e[8],
                        h = Math.sin(n),
                        d = Math.cos(n);
                    return t[0] = d * r + h * a, t[1] = d * i + h * s, t[2] = d * o + h * u, t[3] = d * a - h * r, t[4] = d * s - h * i, t[5] = d * u - h * o, t[6] = l, t[7] = f, t[8] = c, t
                }, i.scale = function (t, e, n) {
                    var r = n[0],
                        i = n[1];
                    return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
                }, i.fromTranslation = function (t, e) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t
                }, i.fromRotation = function (t, e) {
                    var n = Math.sin(e),
                        r = Math.cos(e);
                    return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }, i.fromScaling = function (t, e) {
                    return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }, i.fromMat2d = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t
                }, i.fromQuat = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = n + n,
                        s = r + r,
                        u = i + i,
                        l = n * a,
                        f = r * a,
                        c = r * s,
                        h = i * a,
                        d = i * s,
                        v = i * u,
                        p = o * a,
                        m = o * s,
                        x = o * u;
                    return t[0] = 1 - c - v, t[3] = f - x, t[6] = h + m, t[1] = f + x, t[4] = 1 - l - v, t[7] = d - p, t[2] = h - m, t[5] = d + p, t[8] = 1 - l - c, t
                }, i.normalFromMat4 = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = e[4],
                        s = e[5],
                        u = e[6],
                        l = e[7],
                        f = e[8],
                        c = e[9],
                        h = e[10],
                        d = e[11],
                        v = e[12],
                        p = e[13],
                        m = e[14],
                        x = e[15],
                        _ = n * s - r * a,
                        M = n * u - i * a,
                        b = n * l - o * a,
                        y = r * u - i * s,
                        g = r * l - o * s,
                        E = i * l - o * u,
                        w = f * p - c * v,
                        T = f * m - h * v,
                        S = f * x - d * v,
                        I = c * m - h * p,
                        P = c * x - d * p,
                        D = h * x - d * m,
                        F = _ * D - M * P + b * I + y * S - g * T + E * w;
                    return F ? (F = 1 / F, t[0] = (s * D - u * P + l * I) * F, t[1] = (u * S - a * D - l * T) * F, t[2] = (a * P - s * S + l * w) * F, t[3] = (i * P - r * D - o * I) * F, t[4] = (n * D - i * S + o * T) * F, t[5] = (r * S - n * P - o * w) * F, t[6] = (p * E - m * g + x * y) * F, t[7] = (m * b - v * E - x * M) * F, t[8] = (v * g - p * b + x * _) * F, t) : null
                }, i.str = function (t) {
                    return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
                }, i.frob = function (t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
                }, i.add = function (t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t
                }, i.subtract = function (t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t
                }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t
                }, i.multiplyScalarAndAdd = function (t, e, n, r) {
                    return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t
                }, i.exactEquals = function (t, e) {
                    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
                }, i.equals = function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = t[2],
                        a = t[3],
                        s = t[4],
                        u = t[5],
                        l = t[6],
                        f = t[7],
                        c = t[8],
                        h = e[0],
                        d = e[1],
                        v = e[2],
                        p = e[3],
                        m = e[4],
                        x = e[5],
                        _ = t[6],
                        M = e[7],
                        b = e[8];
                    return Math.abs(n - h) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(i - d) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(o - v) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(a - p) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(s - m) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(u - x) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(x)) && Math.abs(l - _) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(_)) && Math.abs(f - M) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(M)) && Math.abs(c - b) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(b))
                }, e.exports = i
            }, {
                "./common.js": 2
            }],
            6: [function (t, e, n) {
                var r = t("./common.js"),
                    i = {
                        scalar: {},
                        SIMD: {}
                    };
                i.create = function () {
                    var t = new r.ARRAY_TYPE(16);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, i.clone = function (t) {
                    var e = new r.ARRAY_TYPE(16);
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                }, i.copy = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
                }, i.fromValues = function (t, e, n, i, o, a, s, u, l, f, c, h, d, v, p, m) {
                    var x = new r.ARRAY_TYPE(16);
                    return x[0] = t, x[1] = e, x[2] = n, x[3] = i, x[4] = o, x[5] = a, x[6] = s, x[7] = u, x[8] = l, x[9] = f, x[10] = c, x[11] = h, x[12] = d, x[13] = v, x[14] = p, x[15] = m, x
                }, i.set = function (t, e, n, r, i, o, a, s, u, l, f, c, h, d, v, p, m) {
                    return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = s, t[7] = u, t[8] = l, t[9] = f, t[10] = c, t[11] = h, t[12] = d, t[13] = v, t[14] = p, t[15] = m, t
                }, i.identity = function (t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, i.scalar.transpose = function (t, e) {
                    if (t === e) {
                        var n = e[1],
                            r = e[2],
                            i = e[3],
                            o = e[6],
                            a = e[7],
                            s = e[11];
                        t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = n, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = i, t[13] = a, t[14] = s
                    } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
                    return t
                }, i.SIMD.transpose = function (t, e) {
                    var n, r, i, o, a, s, u, l, f, c;
                    return n = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4), i = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12), a = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(i, o, 0, 1, 4, 5), u = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(t, 0, u), SIMD.Float32x4.store(t, 4, l), a = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(i, o, 2, 3, 6, 7), f = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), c = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, f), SIMD.Float32x4.store(t, 12, c), t
                }, i.transpose = r.USE_SIMD ? i.SIMD.transpose : i.scalar.transpose, i.scalar.invert = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = e[4],
                        s = e[5],
                        u = e[6],
                        l = e[7],
                        f = e[8],
                        c = e[9],
                        h = e[10],
                        d = e[11],
                        v = e[12],
                        p = e[13],
                        m = e[14],
                        x = e[15],
                        _ = n * s - r * a,
                        M = n * u - i * a,
                        b = n * l - o * a,
                        y = r * u - i * s,
                        g = r * l - o * s,
                        E = i * l - o * u,
                        w = f * p - c * v,
                        T = f * m - h * v,
                        S = f * x - d * v,
                        I = c * m - h * p,
                        P = c * x - d * p,
                        D = h * x - d * m,
                        F = _ * D - M * P + b * I + y * S - g * T + E * w;
                    return F ? (F = 1 / F, t[0] = (s * D - u * P + l * I) * F, t[1] = (i * P - r * D - o * I) * F, t[2] = (p * E - m * g + x * y) * F, t[3] = (h * g - c * E - d * y) * F, t[4] = (u * S - a * D - l * T) * F, t[5] = (n * D - i * S + o * T) * F, t[6] = (m * b - v * E - x * M) * F, t[7] = (f * E - h * b + d * M) * F, t[8] = (a * P - s * S + l * w) * F, t[9] = (r * S - n * P - o * w) * F, t[10] = (v * g - p * b + x * _) * F, t[11] = (c * b - f * g - d * _) * F, t[12] = (s * T - a * I - u * w) * F, t[13] = (n * I - r * T + i * w) * F, t[14] = (p * M - v * y - m * _) * F, t[15] = (f * y - c * M + h * _) * F, t) : null
                }, i.SIMD.invert = function (t, e) {
                    var n, r, i, o, a, s, u, l, f, c, h = SIMD.Float32x4.load(e, 0),
                        d = SIMD.Float32x4.load(e, 4),
                        v = SIMD.Float32x4.load(e, 8),
                        p = SIMD.Float32x4.load(e, 12);
                    return a = SIMD.Float32x4.shuffle(h, d, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(v, p, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(a, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, a, 1, 3, 5, 7), a = SIMD.Float32x4.shuffle(h, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(v, p, 2, 3, 6, 7), i = SIMD.Float32x4.shuffle(a, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7), a = SIMD.Float32x4.mul(i, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.mul(r, a), u = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, a), s), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), a = SIMD.Float32x4.mul(r, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), s), f = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, a)), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), a = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), s), l = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(i, a)), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), a = SIMD.Float32x4.mul(n, r), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), l), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), f), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), l), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(i, a)), a = SIMD.Float32x4.mul(n, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(i, a)), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), l), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), u), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.mul(n, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), u), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(o, a)), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), f), c = SIMD.Float32x4.mul(n, s), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), a = SIMD.Float32x4.reciprocalApproximation(c), c = SIMD.Float32x4.sub(SIMD.Float32x4.add(a, a), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(a, a))), (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, s)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, u)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, l)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, f)), t) : null
                }, i.invert = r.USE_SIMD ? i.SIMD.invert : i.scalar.invert, i.scalar.adjoint = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = e[4],
                        s = e[5],
                        u = e[6],
                        l = e[7],
                        f = e[8],
                        c = e[9],
                        h = e[10],
                        d = e[11],
                        v = e[12],
                        p = e[13],
                        m = e[14],
                        x = e[15];
                    return t[0] = s * (h * x - d * m) - c * (u * x - l * m) + p * (u * d - l * h), t[1] = -(r * (h * x - d * m) - c * (i * x - o * m) + p * (i * d - o * h)), t[2] = r * (u * x - l * m) - s * (i * x - o * m) + p * (i * l - o * u), t[3] = -(r * (u * d - l * h) - s * (i * d - o * h) + c * (i * l - o * u)), t[4] = -(a * (h * x - d * m) - f * (u * x - l * m) + v * (u * d - l * h)), t[5] = n * (h * x - d * m) - f * (i * x - o * m) + v * (i * d - o * h), t[6] = -(n * (u * x - l * m) - a * (i * x - o * m) + v * (i * l - o * u)), t[7] = n * (u * d - l * h) - a * (i * d - o * h) + f * (i * l - o * u), t[8] = a * (c * x - d * p) - f * (s * x - l * p) + v * (s * d - l * c), t[9] = -(n * (c * x - d * p) - f * (r * x - o * p) + v * (r * d - o * c)), t[10] = n * (s * x - l * p) - a * (r * x - o * p) + v * (r * l - o * s), t[11] = -(n * (s * d - l * c) - a * (r * d - o * c) + f * (r * l - o * s)), t[12] = -(a * (c * m - h * p) - f * (s * m - u * p) + v * (s * h - u * c)), t[13] = n * (c * m - h * p) - f * (r * m - i * p) + v * (r * h - i * c), t[14] = -(n * (s * m - u * p) - a * (r * m - i * p) + v * (r * u - i * s)), t[15] = n * (s * h - u * c) - a * (r * h - i * c) + f * (r * u - i * s), t
                }, i.SIMD.adjoint = function (t, e) {
                    var n, r, i, o, a, s, u, l, f, c, h, d, v, n = SIMD.Float32x4.load(e, 0),
                        r = SIMD.Float32x4.load(e, 4),
                        i = SIMD.Float32x4.load(e, 8),
                        o = SIMD.Float32x4.load(e, 12);
                    return f = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(i, o, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(f, s, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(s, f, 1, 3, 5, 7), f = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(i, o, 2, 3, 6, 7), u = SIMD.Float32x4.shuffle(f, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, f, 1, 3, 5, 7), f = SIMD.Float32x4.mul(u, l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), c = SIMD.Float32x4.mul(s, f), h = SIMD.Float32x4.mul(a, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, f), c), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, f), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), f = SIMD.Float32x4.mul(s, u), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), c), v = SIMD.Float32x4.mul(a, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(l, f)), v = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, f), v), v = SIMD.Float32x4.swizzle(v, 2, 3, 0, 1), f = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, f), c), d = SIMD.Float32x4.mul(a, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(u, f)), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, f), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), f = SIMD.Float32x4.mul(a, s), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), d), v = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, f), v), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, f), d), v = SIMD.Float32x4.sub(v, SIMD.Float32x4.mul(u, f)), f = SIMD.Float32x4.mul(a, l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(u, f)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, f), d), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, f), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(s, f)), f = SIMD.Float32x4.mul(a, u), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), h), v = SIMD.Float32x4.sub(v, SIMD.Float32x4.mul(s, f)), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, f)), v = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, f), v), SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, h), SIMD.Float32x4.store(t, 8, d), SIMD.Float32x4.store(t, 12, v), t
                }, i.adjoint = r.USE_SIMD ? i.SIMD.adjoint : i.scalar.adjoint, i.determinant = function (t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2],
                        i = t[3],
                        o = t[4],
                        a = t[5],
                        s = t[6],
                        u = t[7],
                        l = t[8],
                        f = t[9],
                        c = t[10],
                        h = t[11],
                        d = t[12],
                        v = t[13],
                        p = t[14],
                        m = t[15],
                        x = e * a - n * o,
                        _ = e * s - r * o,
                        M = e * u - i * o,
                        b = n * s - r * a,
                        y = n * u - i * a,
                        g = r * u - i * s,
                        E = l * v - f * d,
                        w = l * p - c * d,
                        T = l * m - h * d,
                        S = f * p - c * v,
                        I = f * m - h * v,
                        P = c * m - h * p;
                    return x * P - _ * I + M * S + b * T - y * w + g * E
                }, i.SIMD.multiply = function (t, e, n) {
                    var r = SIMD.Float32x4.load(e, 0),
                        i = SIMD.Float32x4.load(e, 4),
                        o = SIMD.Float32x4.load(e, 8),
                        a = SIMD.Float32x4.load(e, 12),
                        s = SIMD.Float32x4.load(n, 0),
                        u = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), a))));
                    SIMD.Float32x4.store(t, 0, u);
                    var l = SIMD.Float32x4.load(n, 4),
                        f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), a))));
                    SIMD.Float32x4.store(t, 4, f);
                    var c = SIMD.Float32x4.load(n, 8),
                        h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), a))));
                    SIMD.Float32x4.store(t, 8, h);
                    var d = SIMD.Float32x4.load(n, 12),
                        v = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), a))));
                    return SIMD.Float32x4.store(t, 12, v), t
                }, i.scalar.multiply = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = e[4],
                        u = e[5],
                        l = e[6],
                        f = e[7],
                        c = e[8],
                        h = e[9],
                        d = e[10],
                        v = e[11],
                        p = e[12],
                        m = e[13],
                        x = e[14],
                        _ = e[15],
                        M = n[0],
                        b = n[1],
                        y = n[2],
                        g = n[3];
                    return t[0] = M * r + b * s + y * c + g * p, t[1] = M * i + b * u + y * h + g * m, t[2] = M * o + b * l + y * d + g * x, t[3] = M * a + b * f + y * v + g * _, M = n[4], b = n[5], y = n[6], g = n[7], t[4] = M * r + b * s + y * c + g * p, t[5] = M * i + b * u + y * h + g * m, t[6] = M * o + b * l + y * d + g * x, t[7] = M * a + b * f + y * v + g * _, M = n[8], b = n[9], y = n[10], g = n[11], t[8] = M * r + b * s + y * c + g * p, t[9] = M * i + b * u + y * h + g * m, t[10] = M * o + b * l + y * d + g * x, t[11] = M * a + b * f + y * v + g * _, M = n[12], b = n[13], y = n[14], g = n[15], t[12] = M * r + b * s + y * c + g * p, t[13] = M * i + b * u + y * h + g * m, t[14] = M * o + b * l + y * d + g * x, t[15] = M * a + b * f + y * v + g * _, t
                }, i.multiply = r.USE_SIMD ? i.SIMD.multiply : i.scalar.multiply, i.mul = i.multiply, i.scalar.translate = function (t, e, n) {
                    var r, i, o, a, s, u, l, f, c, h, d, v, p = n[0],
                        m = n[1],
                        x = n[2];
                    return e === t ? (t[12] = e[0] * p + e[4] * m + e[8] * x + e[12], t[13] = e[1] * p + e[5] * m + e[9] * x + e[13], t[14] = e[2] * p + e[6] * m + e[10] * x + e[14], t[15] = e[3] * p + e[7] * m + e[11] * x + e[15]) : (r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], u = e[5], l = e[6], f = e[7], c = e[8], h = e[9], d = e[10], v = e[11], t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = s, t[5] = u, t[6] = l, t[7] = f, t[8] = c, t[9] = h, t[10] = d, t[11] = v, t[12] = r * p + s * m + c * x + e[12], t[13] = i * p + u * m + h * x + e[13], t[14] = o * p + l * m + d * x + e[14], t[15] = a * p + f * m + v * x + e[15]), t
                }, i.SIMD.translate = function (t, e, n) {
                    var r = SIMD.Float32x4.load(e, 0),
                        i = SIMD.Float32x4.load(e, 4),
                        o = SIMD.Float32x4.load(e, 8),
                        a = SIMD.Float32x4.load(e, 12),
                        s = SIMD.Float32x4(n[0], n[1], n[2], 0);
                    e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(s, 0, 0, 0, 0)), i = SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(s, 1, 1, 1, 1)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(s, 2, 2, 2, 2));
                    var u = SIMD.Float32x4.add(r, SIMD.Float32x4.add(i, SIMD.Float32x4.add(o, a)));
                    return SIMD.Float32x4.store(t, 12, u), t
                }, i.translate = r.USE_SIMD ? i.SIMD.translate : i.scalar.translate, i.scalar.scale = function (t, e, n) {
                    var r = n[0],
                        i = n[1],
                        o = n[2];
                    return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
                }, i.SIMD.scale = function (t, e, n) {
                    var r, i, o, a = SIMD.Float32x4(n[0], n[1], n[2], 0);
                    return r = SIMD.Float32x4.load(e, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0))), i = SIMD.Float32x4.load(e, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1))), o = SIMD.Float32x4.load(e, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2))), t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
                }, i.scale = r.USE_SIMD ? i.SIMD.scale : i.scalar.scale, i.rotate = function (t, e, n, i) {
                    var o, a, s, u, l, f, c, h, d, v, p, m, x, _, M, b, y, g, E, w, T, S, I, P, D = i[0],
                        F = i[1],
                        L = i[2],
                        O = Math.sqrt(D * D + F * F + L * L);
                    return Math.abs(O) < r.EPSILON ? null : (O = 1 / O, D *= O, F *= O, L *= O, o = Math.sin(n), a = Math.cos(n), s = 1 - a, u = e[0], l = e[1], f = e[2], c = e[3], h = e[4], d = e[5], v = e[6], p = e[7], m = e[8], x = e[9], _ = e[10], M = e[11], b = D * D * s + a, y = F * D * s + L * o, g = L * D * s - F * o, E = D * F * s - L * o, w = F * F * s + a, T = L * F * s + D * o, S = D * L * s + F * o, I = F * L * s - D * o, P = L * L * s + a, t[0] = u * b + h * y + m * g, t[1] = l * b + d * y + x * g, t[2] = f * b + v * y + _ * g, t[3] = c * b + p * y + M * g, t[4] = u * E + h * w + m * T, t[5] = l * E + d * w + x * T, t[6] = f * E + v * w + _ * T, t[7] = c * E + p * w + M * T, t[8] = u * S + h * I + m * P, t[9] = l * S + d * I + x * P, t[10] = f * S + v * I + _ * P, t[11] = c * S + p * I + M * P, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
                }, i.scalar.rotateX = function (t, e, n) {
                    var r = Math.sin(n),
                        i = Math.cos(n),
                        o = e[4],
                        a = e[5],
                        s = e[6],
                        u = e[7],
                        l = e[8],
                        f = e[9],
                        c = e[10],
                        h = e[11];
                    return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * i + l * r, t[5] = a * i + f * r, t[6] = s * i + c * r, t[7] = u * i + h * r, t[8] = l * i - o * r, t[9] = f * i - a * r, t[10] = c * i - s * r, t[11] = h * i - u * r, t
                }, i.SIMD.rotateX = function (t, e, n) {
                    var r = SIMD.Float32x4.splat(Math.sin(n)),
                        i = SIMD.Float32x4.splat(Math.cos(n));
                    e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                    var o = SIMD.Float32x4.load(e, 4),
                        a = SIMD.Float32x4.load(e, 8);
                    return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t
                }, i.rotateX = r.USE_SIMD ? i.SIMD.rotateX : i.scalar.rotateX, i.scalar.rotateY = function (t, e, n) {
                    var r = Math.sin(n),
                        i = Math.cos(n),
                        o = e[0],
                        a = e[1],
                        s = e[2],
                        u = e[3],
                        l = e[8],
                        f = e[9],
                        c = e[10],
                        h = e[11];
                    return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i - l * r, t[1] = a * i - f * r, t[2] = s * i - c * r, t[3] = u * i - h * r, t[8] = o * r + l * i, t[9] = a * r + f * i, t[10] = s * r + c * i, t[11] = u * r + h * i, t
                }, i.SIMD.rotateY = function (t, e, n) {
                    var r = SIMD.Float32x4.splat(Math.sin(n)),
                        i = SIMD.Float32x4.splat(Math.cos(n));
                    e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                    var o = SIMD.Float32x4.load(e, 0),
                        a = SIMD.Float32x4.load(e, 8);
                    return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(a, i))), t
                }, i.rotateY = r.USE_SIMD ? i.SIMD.rotateY : i.scalar.rotateY, i.scalar.rotateZ = function (t, e, n) {
                    var r = Math.sin(n),
                        i = Math.cos(n),
                        o = e[0],
                        a = e[1],
                        s = e[2],
                        u = e[3],
                        l = e[4],
                        f = e[5],
                        c = e[6],
                        h = e[7];
                    return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i + l * r, t[1] = a * i + f * r, t[2] = s * i + c * r, t[3] = u * i + h * r, t[4] = l * i - o * r, t[5] = f * i - a * r, t[6] = c * i - s * r, t[7] = h * i - u * r, t
                }, i.SIMD.rotateZ = function (t, e, n) {
                    var r = SIMD.Float32x4.splat(Math.sin(n)),
                        i = SIMD.Float32x4.splat(Math.cos(n));
                    e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                    var o = SIMD.Float32x4.load(e, 0),
                        a = SIMD.Float32x4.load(e, 4);
                    return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t
                }, i.rotateZ = r.USE_SIMD ? i.SIMD.rotateZ : i.scalar.rotateZ, i.fromTranslation = function (t, e) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
                }, i.fromScaling = function (t, e) {
                    return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, i.fromRotation = function (t, e, n) {
                    var i, o, a, s = n[0],
                        u = n[1],
                        l = n[2],
                        f = Math.sqrt(s * s + u * u + l * l);
                    return Math.abs(f) < r.EPSILON ? null : (f = 1 / f, s *= f, u *= f, l *= f, i = Math.sin(e), o = Math.cos(e), a = 1 - o, t[0] = s * s * a + o, t[1] = u * s * a + l * i, t[2] = l * s * a - u * i, t[3] = 0, t[4] = s * u * a - l * i, t[5] = u * u * a + o, t[6] = l * u * a + s * i, t[7] = 0, t[8] = s * l * a + u * i, t[9] = u * l * a - s * i, t[10] = l * l * a + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
                }, i.fromXRotation = function (t, e) {
                    var n = Math.sin(e),
                        r = Math.cos(e);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, i.fromYRotation = function (t, e) {
                    var n = Math.sin(e),
                        r = Math.cos(e);
                    return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, i.fromZRotation = function (t, e) {
                    var n = Math.sin(e),
                        r = Math.cos(e);
                    return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, i.fromRotationTranslation = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = r + r,
                        u = i + i,
                        l = o + o,
                        f = r * s,
                        c = r * u,
                        h = r * l,
                        d = i * u,
                        v = i * l,
                        p = o * l,
                        m = a * s,
                        x = a * u,
                        _ = a * l;
                    return t[0] = 1 - (d + p), t[1] = c + _, t[2] = h - x, t[3] = 0, t[4] = c - _, t[5] = 1 - (f + p), t[6] = v + m, t[7] = 0, t[8] = h + x, t[9] = v - m, t[10] = 1 - (f + d), t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
                }, i.getTranslation = function (t, e) {
                    return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
                }, i.getRotation = function (t, e) {
                    var n = e[0] + e[5] + e[10],
                        r = 0;
                    return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] & e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t
                }, i.fromRotationTranslationScale = function (t, e, n, r) {
                    var i = e[0],
                        o = e[1],
                        a = e[2],
                        s = e[3],
                        u = i + i,
                        l = o + o,
                        f = a + a,
                        c = i * u,
                        h = i * l,
                        d = i * f,
                        v = o * l,
                        p = o * f,
                        m = a * f,
                        x = s * u,
                        _ = s * l,
                        M = s * f,
                        b = r[0],
                        y = r[1],
                        g = r[2];
                    return t[0] = (1 - (v + m)) * b, t[1] = (h + M) * b, t[2] = (d - _) * b, t[3] = 0, t[4] = (h - M) * y, t[5] = (1 - (c + m)) * y, t[6] = (p + x) * y, t[7] = 0, t[8] = (d + _) * g, t[9] = (p - x) * g, t[10] = (1 - (c + v)) * g, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
                }, i.fromRotationTranslationScaleOrigin = function (t, e, n, r, i) {
                    var o = e[0],
                        a = e[1],
                        s = e[2],
                        u = e[3],
                        l = o + o,
                        f = a + a,
                        c = s + s,
                        h = o * l,
                        d = o * f,
                        v = o * c,
                        p = a * f,
                        m = a * c,
                        x = s * c,
                        _ = u * l,
                        M = u * f,
                        b = u * c,
                        y = r[0],
                        g = r[1],
                        E = r[2],
                        w = i[0],
                        T = i[1],
                        S = i[2];
                    return t[0] = (1 - (p + x)) * y, t[1] = (d + b) * y, t[2] = (v - M) * y, t[3] = 0, t[4] = (d - b) * g, t[5] = (1 - (h + x)) * g, t[6] = (m + _) * g, t[7] = 0, t[8] = (v + M) * E, t[9] = (m - _) * E, t[10] = (1 - (h + p)) * E, t[11] = 0, t[12] = n[0] + w - (t[0] * w + t[4] * T + t[8] * S), t[13] = n[1] + T - (t[1] * w + t[5] * T + t[9] * S), t[14] = n[2] + S - (t[2] * w + t[6] * T + t[10] * S), t[15] = 1, t
                }, i.fromQuat = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = n + n,
                        s = r + r,
                        u = i + i,
                        l = n * a,
                        f = r * a,
                        c = r * s,
                        h = i * a,
                        d = i * s,
                        v = i * u,
                        p = o * a,
                        m = o * s,
                        x = o * u;
                    return t[0] = 1 - c - v, t[1] = f + x, t[2] = h - m, t[3] = 0, t[4] = f - x, t[5] = 1 - l - v, t[6] = d + p, t[7] = 0, t[8] = h + m, t[9] = d - p, t[10] = 1 - l - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, i.frustum = function (t, e, n, r, i, o, a) {
                    var s = 1 / (n - e),
                        u = 1 / (i - r),
                        l = 1 / (o - a);
                    return t[0] = 2 * o * s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * u, t[6] = 0, t[7] = 0, t[8] = (n + e) * s, t[9] = (i + r) * u, t[10] = (a + o) * l, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * o * 2 * l, t[15] = 0, t
                }, i.perspective = function (t, e, n, r, i) {
                    var o = 1 / Math.tan(e / 2),
                        a = 1 / (r - i);
                    return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (i + r) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * i * r * a, t[15] = 0, t
                }, i.perspectiveFromFieldOfView = function (t, e, n, r) {
                    var i = Math.tan(e.upDegrees * Math.PI / 180),
                        o = Math.tan(e.downDegrees * Math.PI / 180),
                        a = Math.tan(e.leftDegrees * Math.PI / 180),
                        s = Math.tan(e.rightDegrees * Math.PI / 180),
                        u = 2 / (a + s),
                        l = 2 / (i + o);
                    return t[0] = u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, t[8] = -((a - s) * u * .5), t[9] = (i - o) * l * .5, t[10] = r / (n - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t
                }, i.ortho = function (t, e, n, r, i, o, a) {
                    var s = 1 / (e - n),
                        u = 1 / (r - i),
                        l = 1 / (o - a);
                    return t[0] = -2 * s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + n) * s, t[13] = (i + r) * u, t[14] = (a + o) * l, t[15] = 1, t
                }, i.lookAt = function (t, e, n, o) {
                    var a, s, u, l, f, c, h, d, v, p, m = e[0],
                        x = e[1],
                        _ = e[2],
                        M = o[0],
                        b = o[1],
                        y = o[2],
                        g = n[0],
                        E = n[1],
                        w = n[2];
                    return Math.abs(m - g) < r.EPSILON && Math.abs(x - E) < r.EPSILON && Math.abs(_ - w) < r.EPSILON ? i.identity(t) : (h = m - g, d = x - E, v = _ - w, p = 1 / Math.sqrt(h * h + d * d + v * v), h *= p, d *= p, v *= p, a = b * v - y * d, s = y * h - M * v, u = M * d - b * h, p = Math.sqrt(a * a + s * s + u * u), p ? (p = 1 / p, a *= p, s *= p, u *= p) : (a = 0, s = 0, u = 0), l = d * u - v * s, f = v * a - h * u, c = h * s - d * a, p = Math.sqrt(l * l + f * f + c * c), p ? (p = 1 / p, l *= p, f *= p, c *= p) : (l = 0, f = 0, c = 0), t[0] = a, t[1] = l, t[2] = h, t[3] = 0, t[4] = s, t[5] = f, t[6] = d, t[7] = 0, t[8] = u, t[9] = c, t[10] = v, t[11] = 0, t[12] = -(a * m + s * x + u * _), t[13] = -(l * m + f * x + c * _), t[14] = -(h * m + d * x + v * _), t[15] = 1, t)
                }, i.str = function (t) {
                    return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
                }, i.frob = function (t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
                }, i.add = function (t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t[9] = e[9] + n[9], t[10] = e[10] + n[10], t[11] = e[11] + n[11], t[12] = e[12] + n[12], t[13] = e[13] + n[13], t[14] = e[14] + n[14], t[15] = e[15] + n[15], t
                }, i.subtract = function (t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t[9] = e[9] - n[9], t[10] = e[10] - n[10], t[11] = e[11] - n[11], t[12] = e[12] - n[12], t[13] = e[13] - n[13], t[14] = e[14] - n[14], t[15] = e[15] - n[15], t
                }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12] * n, t[13] = e[13] * n, t[14] = e[14] * n, t[15] = e[15] * n, t
                }, i.multiplyScalarAndAdd = function (t, e, n, r) {
                    return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t[9] = e[9] + n[9] * r, t[10] = e[10] + n[10] * r, t[11] = e[11] + n[11] * r, t[12] = e[12] + n[12] * r, t[13] = e[13] + n[13] * r, t[14] = e[14] + n[14] * r, t[15] = e[15] + n[15] * r, t
                }, i.exactEquals = function (t, e) {
                    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
                }, i.equals = function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = t[2],
                        a = t[3],
                        s = t[4],
                        u = t[5],
                        l = t[6],
                        f = t[7],
                        c = t[8],
                        h = t[9],
                        d = t[10],
                        v = t[11],
                        p = t[12],
                        m = t[13],
                        x = t[14],
                        _ = t[15],
                        M = e[0],
                        b = e[1],
                        y = e[2],
                        g = e[3],
                        E = e[4],
                        w = e[5],
                        T = e[6],
                        S = e[7],
                        I = e[8],
                        P = e[9],
                        D = e[10],
                        F = e[11],
                        L = e[12],
                        O = e[13],
                        C = e[14],
                        R = e[15];
                    return Math.abs(n - M) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(M)) && Math.abs(i - b) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(o - y) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(y)) && Math.abs(a - g) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(s - E) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(u - w) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(w)) && Math.abs(l - T) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(T)) && Math.abs(f - S) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(S)) && Math.abs(c - I) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(I)) && Math.abs(h - P) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(P)) && Math.abs(d - D) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(D)) && Math.abs(v - F) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(F)) && Math.abs(p - L) <= r.EPSILON * Math.max(1, Math.abs(p), Math.abs(L)) && Math.abs(m - O) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(O)) && Math.abs(x - C) <= r.EPSILON * Math.max(1, Math.abs(x), Math.abs(C)) && Math.abs(_ - R) <= r.EPSILON * Math.max(1, Math.abs(_), Math.abs(R))
                }, e.exports = i
            }, {
                "./common.js": 2
            }],
            7: [function (t, e, n) {
                var r = t("./common.js"),
                    i = t("./mat3.js"),
                    o = t("./vec3.js"),
                    a = t("./vec4.js"),
                    s = {};
                s.create = function () {
                    var t = new r.ARRAY_TYPE(4);
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
                }, s.rotationTo = function () {
                    var t = o.create(),
                        e = o.fromValues(1, 0, 0),
                        n = o.fromValues(0, 1, 0);
                    return function (r, i, a) {
                        var u = o.dot(i, a);
                        return -.999999 > u ? (o.cross(t, e, i), o.length(t) < 1e-6 && o.cross(t, n, i), o.normalize(t, t), s.setAxisAngle(r, t, Math.PI), r) : u > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (o.cross(t, i, a), r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = 1 + u, s.normalize(r, r))
                    }
                }(), s.setAxes = function () {
                    var t = i.create();
                    return function (e, n, r, i) {
                        return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = i[0], t[4] = i[1], t[7] = i[2], t[2] = -n[0], t[5] = -n[1], t[8] = -n[2], s.normalize(e, s.fromMat3(e, t))
                    }
                }(), s.clone = a.clone, s.fromValues = a.fromValues, s.copy = a.copy, s.set = a.set, s.identity = function (t) {
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
                }, s.setAxisAngle = function (t, e, n) {
                    n = .5 * n;
                    var r = Math.sin(n);
                    return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(n), t
                }, s.getAxisAngle = function (t, e) {
                    var n = 2 * Math.acos(e[3]),
                        r = Math.sin(n / 2);
                    return 0 != r ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), n
                }, s.add = a.add, s.multiply = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = n[0],
                        u = n[1],
                        l = n[2],
                        f = n[3];
                    return t[0] = r * f + a * s + i * l - o * u, t[1] = i * f + a * u + o * s - r * l, t[2] = o * f + a * l + r * u - i * s, t[3] = a * f - r * s - i * u - o * l, t
                }, s.mul = s.multiply, s.scale = a.scale, s.rotateX = function (t, e, n) {
                    n *= .5;
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return t[0] = r * u + a * s, t[1] = i * u + o * s, t[2] = o * u - i * s, t[3] = a * u - r * s, t
                }, s.rotateY = function (t, e, n) {
                    n *= .5;
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return t[0] = r * u - o * s, t[1] = i * u + a * s, t[2] = o * u + r * s, t[3] = a * u - i * s, t
                }, s.rotateZ = function (t, e, n) {
                    n *= .5;
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3],
                        s = Math.sin(n),
                        u = Math.cos(n);
                    return t[0] = r * u + i * s, t[1] = i * u - r * s, t[2] = o * u + a * s, t[3] = a * u - o * s, t
                }, s.calculateW = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2];
                    return t[0] = n, t[1] = r, t[2] = i, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i)), t
                }, s.dot = a.dot, s.lerp = a.lerp, s.slerp = function (t, e, n, r) {
                    var i, o, a, s, u, l = e[0],
                        f = e[1],
                        c = e[2],
                        h = e[3],
                        d = n[0],
                        v = n[1],
                        p = n[2],
                        m = n[3];
                    return o = l * d + f * v + c * p + h * m, 0 > o && (o = -o, d = -d, v = -v, p = -p, m = -m), 1 - o > 1e-6 ? (i = Math.acos(o), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, u = Math.sin(r * i) / a) : (s = 1 - r, u = r), t[0] = s * l + u * d, t[1] = s * f + u * v, t[2] = s * c + u * p, t[3] = s * h + u * m, t
                }, s.sqlerp = function () {
                    var t = s.create(),
                        e = s.create();
                    return function (n, r, i, o, a, u) {
                        return s.slerp(t, r, a, u), s.slerp(e, i, o, u), s.slerp(n, t, e, 2 * u * (1 - u)), n
                    }
                }(), s.invert = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = n * n + r * r + i * i + o * o,
                        s = a ? 1 / a : 0;
                    return t[0] = -n * s, t[1] = -r * s, t[2] = -i * s, t[3] = o * s, t
                }, s.conjugate = function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t
                }, s.length = a.length, s.len = s.length, s.squaredLength = a.squaredLength, s.sqrLen = s.squaredLength, s.normalize = a.normalize, s.fromMat3 = function (t, e) {
                    var n, r = e[0] + e[4] + e[8];
                    if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (e[5] - e[7]) * n, t[1] = (e[6] - e[2]) * n, t[2] = (e[1] - e[3]) * n;
                    else {
                        var i = 0;
                        e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2);
                        var o = (i + 1) % 3,
                            a = (i + 2) % 3;
                        n = Math.sqrt(e[3 * i + i] - e[3 * o + o] - e[3 * a + a] + 1), t[i] = .5 * n, n = .5 / n, t[3] = (e[3 * o + a] - e[3 * a + o]) * n, t[o] = (e[3 * o + i] + e[3 * i + o]) * n, t[a] = (e[3 * a + i] + e[3 * i + a]) * n
                    }
                    return t
                }, s.str = function (t) {
                    return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
                }, s.exactEquals = a.exactEquals, s.equals = a.equals, e.exports = s
            }, {
                "./common.js": 2,
                "./mat3.js": 5,
                "./vec3.js": 9,
                "./vec4.js": 10
            }],
            8: [function (t, e, n) {
                var r = t("./common.js"),
                    i = {};
                i.create = function () {
                    var t = new r.ARRAY_TYPE(2);
                    return t[0] = 0, t[1] = 0, t
                }, i.clone = function (t) {
                    var e = new r.ARRAY_TYPE(2);
                    return e[0] = t[0], e[1] = t[1], e
                }, i.fromValues = function (t, e) {
                    var n = new r.ARRAY_TYPE(2);
                    return n[0] = t, n[1] = e, n
                }, i.copy = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t
                }, i.set = function (t, e, n) {
                    return t[0] = e, t[1] = n, t
                }, i.add = function (t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
                }, i.subtract = function (t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
                }, i.sub = i.subtract, i.multiply = function (t, e, n) {
                    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
                }, i.mul = i.multiply, i.divide = function (t, e, n) {
                    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
                }, i.div = i.divide, i.ceil = function (t, e) {
                    return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
                }, i.floor = function (t, e) {
                    return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
                }, i.min = function (t, e, n) {
                    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
                }, i.max = function (t, e, n) {
                    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
                }, i.round = function (t, e) {
                    return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
                }, i.scale = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t
                }, i.scaleAndAdd = function (t, e, n, r) {
                    return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t
                }, i.distance = function (t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1];
                    return Math.sqrt(n * n + r * r)
                }, i.dist = i.distance, i.squaredDistance = function (t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1];
                    return n * n + r * r
                }, i.sqrDist = i.squaredDistance, i.length = function (t) {
                    var e = t[0],
                        n = t[1];
                    return Math.sqrt(e * e + n * n)
                }, i.len = i.length, i.squaredLength = function (t) {
                    var e = t[0],
                        n = t[1];
                    return e * e + n * n
                }, i.sqrLen = i.squaredLength, i.negate = function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t
                }, i.inverse = function (t, e) {
                    return t[0] = 1 / e[0], t[1] = 1 / e[1], t
                }, i.normalize = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = n * n + r * r;
                    return i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t
                }, i.dot = function (t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                }, i.cross = function (t, e, n) {
                    var r = e[0] * n[1] - e[1] * n[0];
                    return t[0] = t[1] = 0, t[2] = r, t
                }, i.lerp = function (t, e, n, r) {
                    var i = e[0],
                        o = e[1];
                    return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t
                }, i.random = function (t, e) {
                    e = e || 1;
                    var n = 2 * r.RANDOM() * Math.PI;
                    return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t
                }, i.transformMat2 = function (t, e, n) {
                    var r = e[0],
                        i = e[1];
                    return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t
                }, i.transformMat2d = function (t, e, n) {
                    var r = e[0],
                        i = e[1];
                    return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t
                }, i.transformMat3 = function (t, e, n) {
                    var r = e[0],
                        i = e[1];
                    return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t
                }, i.transformMat4 = function (t, e, n) {
                    var r = e[0],
                        i = e[1];
                    return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t
                }, i.forEach = function () {
                    var t = i.create();
                    return function (e, n, r, i, o, a) {
                        var s, u;
                        for (n || (n = 2), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; u > s; s += n) t[0] = e[s], t[1] = e[s + 1], o(t, t, a), e[s] = t[0], e[s + 1] = t[1];
                        return e
                    }
                }(), i.str = function (t) {
                    return "vec2(" + t[0] + ", " + t[1] + ")"
                }, i.exactEquals = function (t, e) {
                    return t[0] === e[0] && t[1] === e[1]
                }, i.equals = function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = e[0],
                        a = e[1];
                    return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a))
                }, e.exports = i
            }, {
                "./common.js": 2
            }],
            9: [function (t, e, n) {
                var r = t("./common.js"),
                    i = {};
                i.create = function () {
                    var t = new r.ARRAY_TYPE(3);
                    return t[0] = 0, t[1] = 0, t[2] = 0, t
                }, i.clone = function (t) {
                    var e = new r.ARRAY_TYPE(3);
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
                }, i.fromValues = function (t, e, n) {
                    var i = new r.ARRAY_TYPE(3);
                    return i[0] = t, i[1] = e, i[2] = n, i
                }, i.copy = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
                }, i.set = function (t, e, n, r) {
                    return t[0] = e, t[1] = n, t[2] = r, t
                }, i.add = function (t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t
                }, i.subtract = function (t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t
                }, i.sub = i.subtract, i.multiply = function (t, e, n) {
                    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t
                }, i.mul = i.multiply, i.divide = function (t, e, n) {
                    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t
                }, i.div = i.divide, i.ceil = function (t, e) {
                    return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t
                }, i.floor = function (t, e) {
                    return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t
                }, i.min = function (t, e, n) {
                    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t
                }, i.max = function (t, e, n) {
                    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t
                }, i.round = function (t, e) {
                    return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t
                }, i.scale = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
                }, i.scaleAndAdd = function (t, e, n, r) {
                    return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t
                }, i.distance = function (t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1],
                        i = e[2] - t[2];
                    return Math.sqrt(n * n + r * r + i * i)
                }, i.dist = i.distance, i.squaredDistance = function (t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1],
                        i = e[2] - t[2];
                    return n * n + r * r + i * i
                }, i.sqrDist = i.squaredDistance, i.length = function (t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2];
                    return Math.sqrt(e * e + n * n + r * r)
                }, i.len = i.length, i.squaredLength = function (t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2];
                    return e * e + n * n + r * r
                }, i.sqrLen = i.squaredLength, i.negate = function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
                }, i.inverse = function (t, e) {
                    return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
                }, i.normalize = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = n * n + r * r + i * i;
                    return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t
                }, i.dot = function (t, e) {
                    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
                }, i.cross = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = n[0],
                        s = n[1],
                        u = n[2];
                    return t[0] = i * u - o * s, t[1] = o * a - r * u, t[2] = r * s - i * a, t
                }, i.lerp = function (t, e, n, r) {
                    var i = e[0],
                        o = e[1],
                        a = e[2];
                    return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t
                }, i.hermite = function (t, e, n, r, i, o) {
                    var a = o * o,
                        s = a * (2 * o - 3) + 1,
                        u = a * (o - 2) + o,
                        l = a * (o - 1),
                        f = a * (3 - 2 * o);
                    return t[0] = e[0] * s + n[0] * u + r[0] * l + i[0] * f, t[1] = e[1] * s + n[1] * u + r[1] * l + i[1] * f, t[2] = e[2] * s + n[2] * u + r[2] * l + i[2] * f, t
                }, i.bezier = function (t, e, n, r, i, o) {
                    var a = 1 - o,
                        s = a * a,
                        u = o * o,
                        l = s * a,
                        f = 3 * o * s,
                        c = 3 * u * a,
                        h = u * o;
                    return t[0] = e[0] * l + n[0] * f + r[0] * c + i[0] * h, t[1] = e[1] * l + n[1] * f + r[1] * c + i[1] * h, t[2] = e[2] * l + n[2] * f + r[2] * c + i[2] * h, t
                }, i.random = function (t, e) {
                    e = e || 1;
                    var n = 2 * r.RANDOM() * Math.PI,
                        i = 2 * r.RANDOM() - 1,
                        o = Math.sqrt(1 - i * i) * e;
                    return t[0] = Math.cos(n) * o, t[1] = Math.sin(n) * o, t[2] = i * e, t
                }, i.transformMat4 = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = n[3] * r + n[7] * i + n[11] * o + n[15];
                    return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t
                }, i.transformMat3 = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2];
                    return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t
                }, i.transformQuat = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = n[0],
                        s = n[1],
                        u = n[2],
                        l = n[3],
                        f = l * r + s * o - u * i,
                        c = l * i + u * r - a * o,
                        h = l * o + a * i - s * r,
                        d = -a * r - s * i - u * o;
                    return t[0] = f * l + d * -a + c * -u - h * -s, t[1] = c * l + d * -s + h * -a - f * -u, t[2] = h * l + d * -u + f * -s - c * -a, t
                }, i.rotateX = function (t, e, n, r) {
                    var i = [],
                        o = [];
                    return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0], o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
                }, i.rotateY = function (t, e, n, r) {
                    var i = [],
                        o = [];
                    return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), o[1] = i[1], o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
                }, i.rotateZ = function (t, e, n, r) {
                    var i = [],
                        o = [];
                    return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), o[2] = i[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
                }, i.forEach = function () {
                    var t = i.create();
                    return function (e, n, r, i, o, a) {
                        var s, u;
                        for (n || (n = 3), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; u > s; s += n) t[0] = e[s], t[1] = e[s + 1], t[2] = e[s + 2], o(t, t, a), e[s] = t[0], e[s + 1] = t[1], e[s + 2] = t[2];
                        return e
                    }
                }(), i.angle = function (t, e) {
                    var n = i.fromValues(t[0], t[1], t[2]),
                        r = i.fromValues(e[0], e[1], e[2]);
                    i.normalize(n, n), i.normalize(r, r);
                    var o = i.dot(n, r);
                    return o > 1 ? 0 : Math.acos(o)
                }, i.str = function (t) {
                    return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                }, i.exactEquals = function (t, e) {
                    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
                }, i.equals = function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = t[2],
                        a = e[0],
                        s = e[1],
                        u = e[2];
                    return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - u) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(u))
                }, e.exports = i
            }, {
                "./common.js": 2
            }],
            10: [function (t, e, n) {
                var r = t("./common.js"),
                    i = {};
                i.create = function () {
                    var t = new r.ARRAY_TYPE(4);
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
                }, i.clone = function (t) {
                    var e = new r.ARRAY_TYPE(4);
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
                }, i.fromValues = function (t, e, n, i) {
                    var o = new r.ARRAY_TYPE(4);
                    return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o
                }, i.copy = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
                }, i.set = function (t, e, n, r, i) {
                    return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t
                }, i.add = function (t, e, n) {
                    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
                }, i.subtract = function (t, e, n) {
                    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
                }, i.sub = i.subtract, i.multiply = function (t, e, n) {
                    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t[3] = e[3] * n[3], t
                }, i.mul = i.multiply, i.divide = function (t, e, n) {
                    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t[3] = e[3] / n[3], t
                }, i.div = i.divide, i.ceil = function (t, e) {
                    return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t
                }, i.floor = function (t, e) {
                    return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t
                }, i.min = function (t, e, n) {
                    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t[3] = Math.min(e[3], n[3]), t
                }, i.max = function (t, e, n) {
                    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t[3] = Math.max(e[3], n[3]), t
                }, i.round = function (t, e) {
                    return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t
                }, i.scale = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
                }, i.scaleAndAdd = function (t, e, n, r) {
                    return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
                }, i.distance = function (t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1],
                        i = e[2] - t[2],
                        o = e[3] - t[3];
                    return Math.sqrt(n * n + r * r + i * i + o * o)
                }, i.dist = i.distance, i.squaredDistance = function (t, e) {
                    var n = e[0] - t[0],
                        r = e[1] - t[1],
                        i = e[2] - t[2],
                        o = e[3] - t[3];
                    return n * n + r * r + i * i + o * o
                }, i.sqrDist = i.squaredDistance, i.length = function (t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2],
                        i = t[3];
                    return Math.sqrt(e * e + n * n + r * r + i * i)
                }, i.len = i.length, i.squaredLength = function (t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2],
                        i = t[3];
                    return e * e + n * n + r * r + i * i
                }, i.sqrLen = i.squaredLength, i.negate = function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t
                }, i.inverse = function (t, e) {
                    return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t
                }, i.normalize = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = n * n + r * r + i * i + o * o;
                    return a > 0 && (a = 1 / Math.sqrt(a), t[0] = n * a, t[1] = r * a, t[2] = i * a, t[3] = o * a), t
                }, i.dot = function (t, e) {
                    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
                }, i.lerp = function (t, e, n, r) {
                    var i = e[0],
                        o = e[1],
                        a = e[2],
                        s = e[3];
                    return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t[3] = s + r * (n[3] - s), t
                }, i.random = function (t, e) {
                    return e = e || 1, t[0] = r.RANDOM(), t[1] = r.RANDOM(), t[2] = r.RANDOM(), t[3] = r.RANDOM(), i.normalize(t, t), i.scale(t, t, e), t
                }, i.transformMat4 = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3];
                    return t[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * a, t[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * a, t[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * a, t[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * a, t
                }, i.transformQuat = function (t, e, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = n[0],
                        s = n[1],
                        u = n[2],
                        l = n[3],
                        f = l * r + s * o - u * i,
                        c = l * i + u * r - a * o,
                        h = l * o + a * i - s * r,
                        d = -a * r - s * i - u * o;
                    return t[0] = f * l + d * -a + c * -u - h * -s, t[1] = c * l + d * -s + h * -a - f * -u, t[2] = h * l + d * -u + f * -s - c * -a, t[3] = e[3], t
                }, i.forEach = function () {
                    var t = i.create();
                    return function (e, n, r, i, o, a) {
                        var s, u;
                        for (n || (n = 4), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; u > s; s += n) t[0] = e[s], t[1] = e[s + 1], t[2] = e[s + 2], t[3] = e[s + 3], o(t, t, a), e[s] = t[0], e[s + 1] = t[1], e[s + 2] = t[2], e[s + 3] = t[3];
                        return e
                    }
                }(), i.str = function (t) {
                    return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
                }, i.exactEquals = function (t, e) {
                    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
                }, i.equals = function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = t[2],
                        a = t[3],
                        s = e[0],
                        u = e[1],
                        l = e[2],
                        f = e[3];
                    return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - f) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(f))
                }, e.exports = i
            }, {
                "./common.js": 2
            }],
            11: [function (t, e, n) {
                "use strict";

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    o = 60,
                    a = function () {
                        function t() {
                            r(this, t), this._delayTasks = [], this._nextTasks = [], this._deferTasks = [], this._highTasks = [], this._usurpTask = [], this._enterframeTasks = [], this._idTable = 0, this._loop()
                        }
                        return i(t, [{
                            key: "addEF",
                            value: function (t, e) {
                                e = e || [];
                                var n = this._idTable;
                                return this._enterframeTasks[n] = {
                                    func: t,
                                    params: e
                                }, this._idTable++, n
                            }
                        }, {
                            key: "removeEF",
                            value: function (t) {
                                return void 0 !== this._enterframeTasks[t] && (this._enterframeTasks[t] = null), -1
                            }
                        }, {
                            key: "delay",
                            value: function (t, e, n) {
                                var r = (new Date).getTime(),
                                    i = {
                                        func: t,
                                        params: e,
                                        delay: n,
                                        time: r
                                    };
                                this._delayTasks.push(i)
                            }
                        }, {
                            key: "defer",
                            value: function (t, e) {
                                var n = {
                                    func: t,
                                    params: e
                                };
                                this._deferTasks.push(n)
                            }
                        }, {
                            key: "next",
                            value: function (t, e) {
                                var n = {
                                    func: t,
                                    params: e
                                };
                                this._nextTasks.push(n)
                            }
                        }, {
                            key: "usurp",
                            value: function (t, e) {
                                var n = {
                                    func: t,
                                    params: e
                                };
                                this._usurpTask.push(n)
                            }
                        }, {
                            key: "_process",
                            value: function () {
                                var t = 0,
                                    e = void 0,
                                    n = void 0,
                                    r = void 0;
                                for (t = 0; t < this._enterframeTasks.length; t++) e = this._enterframeTasks[t], null !== e && void 0 !== e && e.func(e.params);
                                for (; this._highTasks.length > 0;) e = this._highTasks.pop(), e.func(e.params);
                                var i = (new Date).getTime();
                                for (t = 0; t < this._delayTasks.length; t++) e = this._delayTasks[t], i - e.time > e.delay && (e.func(e.params), this._delayTasks.splice(t, 1));
                                for (i = (new Date).getTime(), n = 1e3 / o; this._deferTasks.length > 0;) {
                                    if (e = this._deferTasks.shift(), r = (new Date).getTime(), !(n > r - i)) {
                                        this._deferTasks.unshift(e);
                                        break
                                    }
                                    e.func(e.params)
                                }
                                for (i = (new Date).getTime(), n = 1e3 / o; this._usurpTask.length > 0;) e = this._usurpTask.shift(), r = (new Date).getTime(), n > r - i && e.func(e.params);
                                this._highTasks = this._highTasks.concat(this._nextTasks), this._nextTasks = [], this._usurpTask = []
                            }
                        }, {
                            key: "_loop",
                            value: function () {
                                var t = this;
                                this._process(), window.requestAnimationFrame(function () {
                                    return t._loop()
                                })
                            }
                        }]), t
                    }(),
                    s = new a;
                n.default = s
            }, {}],
            12: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("gl-matrix"),
                    s = r(a),
                    u = t("./alfrid/GLTool"),
                    l = r(u),
                    f = t("./alfrid/GLShader"),
                    c = r(f),
                    h = t("./alfrid/GLTexture"),
                    d = r(h),
                    v = t("./alfrid/GLCubeTexture"),
                    p = r(v),
                    m = t("./alfrid/Mesh"),
                    x = r(m),
                    _ = t("./alfrid/Geom"),
                    M = r(_),
                    b = t("./alfrid/Batch"),
                    y = r(b),
                    g = t("./alfrid/FrameBuffer"),
                    E = r(g),
                    w = t("./alfrid/CubeFrameBuffer"),
                    T = r(w),
                    S = t("scheduling"),
                    I = r(S),
                    P = t("./alfrid/tools/EventDispatcher"),
                    D = r(P),
                    F = t("./alfrid/tools/EaseNumber"),
                    L = r(F),
                    O = t("./alfrid/tools/TweenNumber"),
                    C = r(O),
                    R = t("./alfrid/tools/OrbitalControl"),
                    A = r(R),
                    N = t("./alfrid/tools/QuatRotation"),
                    k = r(N),
                    z = t("./alfrid/cameras/Camera"),
                    j = r(z),
                    V = t("./alfrid/cameras/CameraOrtho"),
                    G = r(V),
                    B = t("./alfrid/cameras/CameraPerspective"),
                    U = r(B),
                    X = t("./alfrid/cameras/CameraCube"),
                    Y = r(X),
                    q = t("./alfrid/loaders/BinaryLoader"),
                    H = r(q),
                    W = t("./alfrid/loaders/ObjLoader"),
                    K = r(W),
                    Z = t("./alfrid/loaders/HDRLoader"),
                    Q = r(Z),
                    J = t("./alfrid/helpers/BatchCopy"),
                    $ = r(J),
                    tt = t("./alfrid/helpers/BatchAxis"),
                    et = r(tt),
                    nt = t("./alfrid/helpers/BatchBall"),
                    rt = r(nt),
                    it = t("./alfrid/helpers/BatchDotsPlane"),
                    ot = r(it),
                    at = t("./alfrid/helpers/BatchSkybox"),
                    st = r(at),
                    ut = t("./alfrid/helpers/Scene"),
                    lt = r(ut),
                    ft = t("./alfrid/helpers/View"),
                    ct = r(ft),
                    ht = t("./alfrid/tools/ShaderLibs"),
                    dt = r(ht),
                    vt = t("./alfrid/post/EffectComposer"),
                    pt = r(vt),
                    mt = "0.0.1",
                    xt = function () {
                        function t() {
                            i(this, t), this.glm = s.default, this.GL = l.default, this.GLTool = l.default, this.GLShader = c.default, this.GLTexture = d.default, this.GLCubeTexture = p.default, this.Mesh = x.default, this.Geom = M.default, this.Batch = y.default, this.FrameBuffer = E.default, this.CubeFrameBuffer = T.default, this.Scheduler = I.default, this.EventDispatcher = D.default, this.EaseNumber = L.default, this.TweenNumber = C.default, this.Camera = j.default, this.CameraOrtho = G.default, this.CameraPerspective = U.default, this.CameraCube = Y.default, this.OrbitalControl = A.default, this.QuatRotation = k.default, this.BinaryLoader = H.default, this.ObjLoader = K.default, this.HDRLoader = Q.default, this.BatchCopy = $.default, this.BatchAxis = et.default, this.BatchBall = rt.default, this.BatchBall = rt.default, this.BatchSkybox = st.default, this.BatchDotsPlane = ot.default, this.Scene = lt.default, this.View = ct.default, this.EffectComposer = pt.default, this.ShaderLibs = dt.default;
                            for (var e in s.default) s.default[e] && (window[e] = s.default[e])
                        }
                        return o(t, [{
                            key: "log",
                            value: function () {
                                navigator.userAgent.indexOf("Chrome") > -1 ? console.log("%clib alfrid : VERSION " + mt, "background: #193441; color: #FCFFF5") : console.log("lib alfrid : VERSION ", mt), console.log("%cClasses : ", "color: #193441");
                                for (var t in this) this[t] && console.log("%c - " + t, "color: #3E606F")
                            }
                        }]), t
                    }(),
                    _t = new xt;
                e.exports = _t
            }, {
                "./alfrid/Batch": 13,
                "./alfrid/CubeFrameBuffer": 14,
                "./alfrid/FrameBuffer": 15,
                "./alfrid/GLCubeTexture": 16,
                "./alfrid/GLShader": 17,
                "./alfrid/GLTexture": 18,
                "./alfrid/GLTool": 19,
                "./alfrid/Geom": 20,
                "./alfrid/Mesh": 21,
                "./alfrid/cameras/Camera": 22,
                "./alfrid/cameras/CameraCube": 23,
                "./alfrid/cameras/CameraOrtho": 24,
                "./alfrid/cameras/CameraPerspective": 25,
                "./alfrid/helpers/BatchAxis": 26,
                "./alfrid/helpers/BatchBall": 27,
                "./alfrid/helpers/BatchCopy": 28,
                "./alfrid/helpers/BatchDotsPlane": 29,
                "./alfrid/helpers/BatchSkybox": 30,
                "./alfrid/helpers/Scene": 31,
                "./alfrid/helpers/View": 32,
                "./alfrid/loaders/BinaryLoader": 33,
                "./alfrid/loaders/HDRLoader": 34,
                "./alfrid/loaders/ObjLoader": 35,
                "./alfrid/post/EffectComposer": 36,
                "./alfrid/tools/EaseNumber": 37,
                "./alfrid/tools/EventDispatcher": 38,
                "./alfrid/tools/OrbitalControl": 40,
                "./alfrid/tools/QuatRotation": 41,
                "./alfrid/tools/ShaderLibs": 42,
                "./alfrid/tools/TweenNumber": 43,
                "gl-matrix": 1,
                scheduling: 11
            }],
            13: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./GLTool"),
                    s = r(a),
                    u = function () {
                        function t(e, n) {
                            i(this, t), this._mesh = e, this._shader = n
                        }
                        return o(t, [{
                            key: "draw",
                            value: function () {
                                this._shader.bind(), s.default.draw(this.mesh)
                            }
                        }, {
                            key: "mesh",
                            get: function () {
                                return this._mesh
                            }
                        }, {
                            key: "shader",
                            get: function () {
                                return this._shader
                            }
                        }]), t
                    }();
                n.default = u
            }, {
                "./GLTool": 19
            }],
            14: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./GLTool"),
                    s = r(a),
                    u = t("./GLCubeTexture"),
                    l = r(u),
                    f = void 0,
                    c = function () {
                        function t(e) {
                            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            i(this, t), f = s.default.gl, this._size = e, this.magFilter = n.magFilter || f.LINEAR, this.minFilter = n.minFilter || f.LINEAR, this.wrapS = n.wrapS || f.CLAMP_TO_EDGE, this.wrapT = n.wrapT || f.CLAMP_TO_EDGE, this._init()
                        }
                        return o(t, [{
                            key: "_init",
                            value: function () {
                                this.texture = f.createTexture(), this.glTexture = new l.default(this.texture, {}, !0), f.bindTexture(f.TEXTURE_CUBE_MAP, this.texture), f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_MAG_FILTER, this.magFilter), f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_MIN_FILTER, this.minFilter), f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_WRAP_S, this.wrapS), f.texParameteri(f.TEXTURE_CUBE_MAP, f.TEXTURE_WRAP_T, this.wrapT);
                                for (var t = [f.TEXTURE_CUBE_MAP_POSITIVE_X, f.TEXTURE_CUBE_MAP_NEGATIVE_X, f.TEXTURE_CUBE_MAP_POSITIVE_Y, f.TEXTURE_CUBE_MAP_NEGATIVE_Y, f.TEXTURE_CUBE_MAP_POSITIVE_Z, f.TEXTURE_CUBE_MAP_NEGATIVE_Z], e = 0; e < t.length; e++) f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL, !1), f.texImage2D(t[e], 0, f.RGBA, this.width, this.height, 0, f.RGBA, f.FLOAT, null);
                                this._frameBuffers = [];
                                for (var n = 0; n < t.length; n++) {
                                    var r = f.createFramebuffer();
                                    f.bindFramebuffer(f.FRAMEBUFFER, r), f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0, t[n], this.texture, 0);
                                    var i = f.checkFramebufferStatus(f.FRAMEBUFFER);
                                    i !== f.FRAMEBUFFER_COMPLETE && console.log("gl.checkFramebufferStatus() returned " + i), this._frameBuffers.push(r)
                                }
                                f.bindFramebuffer(f.FRAMEBUFFER, null), f.bindRenderbuffer(f.RENDERBUFFER, null), f.bindTexture(f.TEXTURE_CUBE_MAP, null)
                            }
                        }, {
                            key: "bind",
                            value: function (t) {
                                s.default.viewport(0, 0, this.width, this.height), f.bindFramebuffer(f.FRAMEBUFFER, this._frameBuffers[t])
                            }
                        }, {
                            key: "unbind",
                            value: function () {
                                f.bindFramebuffer(f.FRAMEBUFFER, null), s.default.viewport(0, 0, s.default.width, s.default.height)
                            }
                        }, {
                            key: "getTexture",
                            value: function () {
                                return this.glTexture
                            }
                        }, {
                            key: "width",
                            get: function () {
                                return this._size
                            }
                        }, {
                            key: "height",
                            get: function () {
                                return this._size
                            }
                        }]), t
                    }();
                n.default = c
            }, {
                "./GLCubeTexture": 16,
                "./GLTool": 19
            }],
            15: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./GLTool"),
                    s = r(a),
                    u = t("./GLTexture"),
                    l = r(u),
                    f = function (t) {
                        return 0 !== t && !(t & t - 1)
                    },
                    c = void 0,
                    h = void 0,
                    d = function () {
                        function t(e, n) {
                            var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i(this, t), c = s.default.gl, h = s.default.checkExtension("WEBGL_depth_texture"), this.width = e, this.height = n, this.magFilter = r.magFilter || c.LINEAR, this.minFilter = r.minFilter || c.LINEAR, this.wrapS = r.wrapS || c.CLAMP_TO_EDGE, this.wrapT = r.wrapT || c.CLAMP_TO_EDGE, this.useDepth = r.useDepth || !0, this.useStencil = r.useStencil || !1, f(this.width) && f(this.height) || (this.wrapS = this.wrapT = c.CLAMP_TO_EDGE, this.minFilter === c.LINEAR_MIPMAP_NEAREST && (this.minFilter = c.LINEAR)), this._init()
                        }
                        return o(t, [{
                            key: "_init",
                            value: function () {
                                this.texture = c.createTexture(), this.glTexture = new l.default(this.texture, !0), this.depthTexture = c.createTexture(), this.glDepthTexture = new l.default(this.depthTexture, !0), this.frameBuffer = c.createFramebuffer(), c.bindFramebuffer(c.FRAMEBUFFER, this.frameBuffer), c.bindTexture(c.TEXTURE_2D, this.texture), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, this.magFilter), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, this.minFilter), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, this.wrapS), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, this.wrapT), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, this.width, this.height, 0, c.RGBA, s.default.isMobile ? c.UNSIGNED_BYTE : c.FLOAT, null), h && (c.bindTexture(c.TEXTURE_2D, this.depthTexture), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, this.magFilter), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, this.minFilter), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, this.wrapS), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, this.wrapT), c.texImage2D(c.TEXTURE_2D, 0, c.DEPTH_COMPONENT, this.width, this.height, 0, c.DEPTH_COMPONENT, c.UNSIGNED_SHORT, null)), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, this.texture, 0), c.framebufferTexture2D(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.TEXTURE_2D, this.depthTexture, 0), this.minFilter === c.LINEAR_MIPMAP_NEAREST && (c.bindTexture(c.TEXTURE_2D, this.texture), c.generateMipmap(c.TEXTURE_2D)), c.bindTexture(c.TEXTURE_2D, null), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), this.clear()
                            }
                        }, {
                            key: "bind",
                            value: function () {
                                s.default.viewport(0, 0, this.width, this.height), c.bindFramebuffer(c.FRAMEBUFFER, this.frameBuffer)
                            }
                        }, {
                            key: "unbind",
                            value: function () {
                                c.bindFramebuffer(c.FRAMEBUFFER, null), s.default.viewport(0, 0, s.default.width, s.default.height)
                            }
                        }, {
                            key: "clear",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                                    e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                                    n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                                    r = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
                                this.bind(), s.default.clear(t, e, n, r), this.unbind()
                            }
                        }, {
                            key: "getTexture",
                            value: function () {
                                return this.glTexture
                            }
                        }, {
                            key: "getDepthTexture",
                            value: function () {
                                return this.glDepthTexture
                            }
                        }, {
                            key: "minFilter",
                            value: function (t) {
                                return t !== c.LINEAR && t !== c.NEAREST && t !== c.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = t, this)
                            }
                        }, {
                            key: "magFilter",
                            value: function (t) {
                                return t !== c.LINEAR && t !== c.NEAREST && t !== c.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = t, this)
                            }
                        }, {
                            key: "wrapS",
                            value: function (t) {
                                return t !== c.CLAMP_TO_EDGE && t !== c.REPEAT && t !== c.MIRRORED_REPEAT ? this : (this.wrapS = t, this)
                            }
                        }, {
                            key: "wrapT",
                            value: function (t) {
                                return t !== c.CLAMP_TO_EDGE && t !== c.REPEAT && t !== c.MIRRORED_REPEAT ? this : (this.wrapT = t, this)
                            }
                        }]), t
                    }();
                n.default = d
            }, {
                "./GLTexture": 18,
                "./GLTool": 19
            }],
            16: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./GLTool"),
                    s = r(a),
                    u = void 0,
                    l = function () {
                        function t(e) {
                            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
                            if (i(this, t), u = s.default.gl, r) return void(this.texture = e);
                            this.texture = u.createTexture(), this.magFilter = n.magFilter || u.LINEAR, this.minFilter = n.minFilter || u.LINEAR_MIPMAP_NEAREST, this.wrapS = n.wrapS || u.CLAMP_TO_EDGE, this.wrapT = n.wrapT || u.CLAMP_TO_EDGE, u.bindTexture(u.TEXTURE_CUBE_MAP, this.texture);
                            for (var o = [u.TEXTURE_CUBE_MAP_POSITIVE_X, u.TEXTURE_CUBE_MAP_NEGATIVE_X, u.TEXTURE_CUBE_MAP_POSITIVE_Y, u.TEXTURE_CUBE_MAP_NEGATIVE_Y, u.TEXTURE_CUBE_MAP_POSITIVE_Z, u.TEXTURE_CUBE_MAP_NEGATIVE_Z], a = 0; 6 > a; a++) u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL, !1), e[a].exposure ? u.texImage2D(o[a], 0, u.RGBA, e[a].shape[0], e[a].shape[1], 0, u.RGBA, u.FLOAT, e[a].data) : u.texImage2D(o[a], 0, u.RGBA, u.RGBA, u.UNSIGNED_BYTE, e[a]), u.texParameteri(u.TEXTURE_CUBE_MAP, u.TEXTURE_WRAP_S, this.wrapS), u.texParameteri(u.TEXTURE_CUBE_MAP, u.TEXTURE_WRAP_T, this.wrapT), u.texParameteri(u.TEXTURE_CUBE_MAP, u.TEXTURE_MAG_FILTER, this.magFilter), u.texParameteri(u.TEXTURE_CUBE_MAP, u.TEXTURE_MIN_FILTER, this.minFilter);
                            u.generateMipmap(u.TEXTURE_CUBE_MAP), u.bindTexture(u.TEXTURE_CUBE_MAP, null)
                        }
                        return o(t, [{
                            key: "bind",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                                s.default.shader && (u.activeTexture(u.TEXTURE0 + t), u.bindTexture(u.TEXTURE_CUBE_MAP, this.texture), u.uniform1i(s.default.shader.uniformTextures[t], t), this._bindIndex = t)
                            }
                        }, {
                            key: "unbind",
                            value: function () {
                                u.bindTexture(u.TEXTURE_CUBE_MAP, null)
                            }
                        }]), t
                    }();
                n.default = l
            }, {
                "./GLTool": 19
            }],
            17: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./GLTool"),
                    s = r(a),
                    u = function (t) {
                        for (var e = t.split("\n"), n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
                        return e.join("\n")
                    },
                    l = void 0,
                    f = "// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    c = "// basic.frag\n\n#define SHADER_NAME BASIC_FRAGMENT\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float time;\n// uniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vTextureCoord, sin(time) * .5 + .5, 1.0);\n}",
                    h = {
                        "float": "uniform1f",
                        vec2: "uniform2fv",
                        vec3: "uniform3fv",
                        vec4: "uniform4fv",
                        "int": "uniform1i",
                        mat3: "uniformMatrix3fv",
                        mat4: "uniformMatrix4fv"
                    },
                    d = function () {
                        function t() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? f : arguments[0],
                                n = arguments.length <= 1 || void 0 === arguments[1] ? c : arguments[1];
                            i(this, t), l = s.default.gl, this.parameters = [], this.uniformValues = {}, this.uniformTextures = [], e || (e = f), n || (n = f);
                            var r = this._createShaderProgram(e, !0),
                                o = this._createShaderProgram(n, !1);
                            this._attachShaderProgram(r, o)
                        }
                        return o(t, [{
                            key: "bind",
                            value: function () {
                                l.useProgram(this.shaderProgram), s.default.useShader(this), this.uniformTextures = []
                            }
                        }, {
                            key: "uniform",
                            value: function (t, e, n) {
                                for (var r = h[e] || e, i = !1, o = void 0, a = 0; a < this.parameters.length; a++)
                                    if (o = this.parameters[a], o.name === t) {
                                        o.value = n, i = !0;
                                        break
                                    } i ? this.shaderProgram[t] = o.uniformLoc : (this.shaderProgram[t] = l.getUniformLocation(this.shaderProgram, t), this.parameters.push({
                                    name: t,
                                    type: r,
                                    value: n,
                                    uniformLoc: this.shaderProgram[t]
                                })), -1 === r.indexOf("Matrix") ? l[r](this.shaderProgram[t], n) : (l[r](this.shaderProgram[t], !1, n), this.uniformValues[t] = n)
                            }
                        }, {
                            key: "_createShaderProgram",
                            value: function (t, e) {
                                var n = e ? s.default.VERTEX_SHADER : s.default.FRAGMENT_SHADER,
                                    r = l.createShader(n);
                                return l.shaderSource(r, t), l.compileShader(r), l.getShaderParameter(r, l.COMPILE_STATUS) ? r : (console.warn("Error in Shader : ", l.getShaderInfoLog(r)), console.log(u(t)), null)
                            }
                        }, {
                            key: "_attachShaderProgram",
                            value: function (t, e) {
                                this.shaderProgram = l.createProgram(), l.attachShader(this.shaderProgram, t), l.attachShader(this.shaderProgram, e), l.linkProgram(this.shaderProgram)
                            }
                        }]), t
                    }();
                n.default = d
            }, {
                "./GLTool": 19
            }],
            18: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./GLTool"),
                    s = r(a),
                    u = function (t) {
                        return 0 !== t && !(t & t - 1)
                    },
                    l = function (t) {
                        var e = t.width || t.videoWidth,
                            n = t.height || t.videoHeight;
                        return e && n ? u(e) && u(n) : !1
                    },
                    f = void 0,
                    c = function () {
                        function t(e) {
                            var n = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                                r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            if (i(this, t), f = s.default.gl, n) this.texture = e;
                            else {
                                this._mSource = e, this.texture = f.createTexture(), this._isVideo = "VIDEO" === e.tagName, this.magFilter = r.magFilter || f.LINEAR, this.minFilter = r.minFilter || f.LINEAR_MIPMAP_NEAREST, this.wrapS = r.wrapS || f.MIRRORED_REPEAT, this.wrapT = r.wrapT || f.MIRRORED_REPEAT;
                                var o = e.width || e.videoWidth;
                                o ? l(e) || (this.wrapS = this.wrapT = f.CLAMP_TO_EDGE, this.minFilter === f.LINEAR_MIPMAP_NEAREST && (this.minFilter = f.LINEAR)) : (this.wrapS = this.wrapT = f.CLAMP_TO_EDGE, this.minFilter === f.LINEAR_MIPMAP_NEAREST && (this.minFilter = f.LINEAR)), f.bindTexture(f.TEXTURE_2D, this.texture), f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL, !0), e.exposure ? f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, e.shape[0], e.shape[1], 0, f.RGBA, f.FLOAT, e.data) : f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, f.RGBA, f.UNSIGNED_BYTE, e), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, this.magFilter), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, this.minFilter), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, this.wrapS), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, this.wrapT);
                                var a = s.default.getExtension("EXT_texture_filter_anisotropic");
                                if (a) {
                                    var u = f.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                    f.texParameterf(f.TEXTURE_2D, a.TEXTURE_MAX_ANISOTROPY_EXT, u)
                                }
                                this.minFilter === f.LINEAR_MIPMAP_NEAREST && f.generateMipmap(f.TEXTURE_2D), f.bindTexture(f.TEXTURE_2D, null)
                            }
                        }
                        return o(t, [{
                            key: "minFilter",
                            value: function (t) {
                                return t !== f.LINEAR && t !== f.NEAREST && t !== f.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = t, this)
                            }
                        }, {
                            key: "magFilter",
                            value: function (t) {
                                return t !== f.LINEAR && t !== f.NEAREST && t !== f.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = t, this)
                            }
                        }, {
                            key: "wrapS",
                            value: function (t) {
                                return t !== f.CLAMP_TO_EDGE && t !== f.REPEAT && t !== f.MIRRORED_REPEAT ? this : (this.wrapS = t, this)
                            }
                        }, {
                            key: "wrapT",
                            value: function (t) {
                                return t !== f.CLAMP_TO_EDGE && t !== f.REPEAT && t !== f.MIRRORED_REPEAT ? this : (this.wrapT = t, this)
                            }
                        }, {
                            key: "updateTexture",
                            value: function (t) {
                                t && (this._mSource = t), f.bindTexture(f.TEXTURE_2D, this.texture), f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL, !0), f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, f.RGBA, f.UNSIGNED_BYTE, this._mSource), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, this.magFilter), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, this.minFilter), this.minFilter === f.LINEAR_MIPMAP_NEAREST && f.generateMipmap(f.TEXTURE_2D), f.bindTexture(f.TEXTURE_2D, null)
                            }
                        }, {
                            key: "bind",
                            value: function (t) {
                                void 0 === t && (t = 0), s.default.shader && (f.activeTexture(f.TEXTURE0 + t), f.bindTexture(f.TEXTURE_2D, this.texture), f.uniform1i(s.default.shader.uniformTextures[t], t), this._bindIndex = t)
                            }
                        }]), t
                    }();
                n.default = c
            }, {
                "./GLTool": 19
            }],
            19: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("gl-matrix"),
                    s = r(a),
                    u = function () {
                        function t() {
                            i(this, t), this.canvas, this._viewport = [0, 0, 0, 0], this._enabledVertexAttribute = [], this.identityMatrix = s.default.mat4.create(), this._normalMatrix = s.default.mat3.create(), this._inverseModelViewMatrix = s.default.mat3.create(), this._modelMatrix = s.default.mat4.create(), this._matrix = s.default.mat4.create(), s.default.mat4.identity(this.identityMatrix, this.identityMatrix), this.isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (this.isMobile = !0)
                        }
                        return o(t, [{
                            key: "init",
                            value: function (t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                if (null === t || void 0 === t) return void console.error("Canvas not exist");
                                void 0 !== this.canvas && null !== this.canvas && this.destroy(), this.canvas = t, this.setSize(window.innerWidth, window.innerHeight), this.gl = this.canvas.getContext("webgl", e) || this.canvas.getContext("experimental-webgl", e);
                                var n = ["EXT_shader_texture_lod", "EXT_sRGB", "EXT_frag_depth", "OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear", "OES_standard_derivatives", "WEBGL_depth_texture", "EXT_texture_filter_anisotropic", "ANGLE_instanced_arrays"];
                                this.extensions = {};
                                for (var r = 0; r < n.length; r++) this.extensions[n[r]] = this.gl.getExtension(n[r]);
                                var i = this.gl;
                                this.VERTEX_SHADER = i.VERTEX_SHADER, this.FRAGMENT_SHADER = i.FRAGMENT_SHADER, this.COMPILE_STATUS = i.COMPILE_STATUS, this.DEPTH_TEST = i.DEPTH_TEST, this.CULL_FACE = i.CULL_FACE, this.BLEND = i.BLEND, this.POINTS = i.POINTS, this.LINES = i.LINES, this.TRIANGLES = i.TRIANGLES, this.LINEAR = i.LINEAR, this.NEAREST = i.NEAREST, this.LINEAR_MIPMAP_NEAREST = i.LINEAR_MIPMAP_NEAREST, this.MIRRORED_REPEAT = i.MIRRORED_REPEAT, this.CLAMP_TO_EDGE = i.CLAMP_TO_EDGE, this.SCISSOR_TEST = i.SCISSOR_TEST, this.enable(this.DEPTH_TEST), this.enable(this.CULL_FACE), this.enable(this.BLEND)
                            }
                        }, {
                            key: "setViewport",
                            value: function (t, e, n, r) {
                                var i = !1;
                                t !== this._viewport[0] && (i = !0), e !== this._viewport[1] && (i = !0), n !== this._viewport[2] && (i = !0), r !== this._viewport[3] && (i = !0), i && (this.gl.viewport(t, e, n, r), this._viewport = [t, e, n, r])
                            }
                        }, {
                            key: "scissor",
                            value: function (t, e, n, r) {
                                this.gl.scissor(t, e, n, r)
                            }
                        }, {
                            key: "clear",
                            value: function (t, e, n, r) {
                                this.gl.clearColor(t, e, n, r), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
                            }
                        }, {
                            key: "setMatrices",
                            value: function (t) {
                                this.camera = t, this.rotate(this.identityMatrix)
                            }
                        }, {
                            key: "useShader",
                            value: function (t) {
                                this.shader = t, this.shaderProgram = this.shader.shaderProgram
                            }
                        }, {
                            key: "rotate",
                            value: function (t) {
                                s.default.mat4.copy(this._modelMatrix, t), s.default.mat4.multiply(this._matrix, this.camera.matrix, this._modelMatrix), s.default.mat3.fromMat4(this._normalMatrix, this._matrix), s.default.mat3.invert(this._normalMatrix, this._normalMatrix), s.default.mat3.transpose(this._normalMatrix, this._normalMatrix), s.default.mat3.fromMat4(this._inverseModelViewMatrix, this._matrix), s.default.mat3.invert(this._inverseModelViewMatrix, this._inverseModelViewMatrix)
                            }
                        }, {
                            key: "draw",
                            value: function (t, e) {
                                function n(t, e, n) {
                                    return void 0 === e.cacheAttribLoc && (e.cacheAttribLoc = {}), void 0 === e.cacheAttribLoc[n] && (e.cacheAttribLoc[n] = t.getAttribLocation(e, n)), e.cacheAttribLoc[n]
                                }
                                if (t.length)
                                    for (var r = 0; r < t.length; r++) this.draw(t[r]);
                                else {
                                    for (var i = 0; i < t.attributes.length; i++) {
                                        var o = t.attributes[i];
                                        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, o.buffer);
                                        var a = n(this.gl, this.shaderProgram, o.name);
                                        this.gl.vertexAttribPointer(a, o.itemSize, this.gl.FLOAT, !1, 0, 0), -1 === this._enabledVertexAttribute.indexOf(a) && (this.gl.enableVertexAttribArray(a), this._enabledVertexAttribute.push(a))
                                    }
                                    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, t.iBuffer), void 0 !== this.camera && (this.shader.uniform("uProjectionMatrix", "mat4", this.camera.projection), this.shader.uniform("uViewMatrix", "mat4", this.camera.matrix)), this.shader.uniform("uModelMatrix", "mat4", this._modelMatrix), this.shader.uniform("uNormalMatrix", "mat3", this._normalMatrix), this.shader.uniform("uModelViewMatrixInverse", "mat3", this._inverseModelViewMatrix);
                                    var s = t.drawType;
                                    void 0 !== e && (s = e), s === this.gl.POINTS ? this.gl.drawArrays(s, 0, t.vertexSize) : this.gl.drawElements(s, t.iBuffer.numItems, this.gl.UNSIGNED_SHORT, 0)
                                }
                            }
                        }, {
                            key: "setSize",
                            value: function (t, e) {
                                this._width = t, this._height = e, this.canvas.width = this._width, this.canvas.height = this._height, this._aspectRatio = this._width / this._height, this.gl && this.viewport(0, 0, this._width, this._height)
                            }
                        }, {
                            key: "showExtensions",
                            value: function () {
                                console.log("Extensions : ", this.extensions);
                                for (var t in this.extensions) this.extensions[t] && console.log(t, ":", this.extensions[t])
                            }
                        }, {
                            key: "checkExtension",
                            value: function (t) {
                                return !!this.extensions[t]
                            }
                        }, {
                            key: "getExtension",
                            value: function (t) {
                                return this.extensions[t]
                            }
                        }, {
                            key: "enableAlphaBlending",
                            value: function () {
                                this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
                            }
                        }, {
                            key: "enableAdditiveBlending",
                            value: function () {
                                this.gl.blendFunc(this.gl.ONE, this.gl.ONE)
                            }
                        }, {
                            key: "enable",
                            value: function (t) {
                                this.gl.enable(t)
                            }
                        }, {
                            key: "disable",
                            value: function (t) {
                                this.gl.disable(t)
                            }
                        }, {
                            key: "viewport",
                            value: function (t, e, n, r) {
                                this.setViewport(t, e, n, r)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                if (this.canvas.parentNode) try {
                                    this.canvas.parentNode.removeChild(this.canvas)
                                } catch (t) {
                                    console.log("Error : ", t)
                                }
                                this.canvas = null
                            }
                        }, {
                            key: "width",
                            get: function () {
                                return this._width
                            }
                        }, {
                            key: "height",
                            get: function () {
                                return this._height
                            }
                        }, {
                            key: "aspectRatio",
                            get: function () {
                                return this._aspectRatio
                            }
                        }]), t
                    }(),
                    l = new u;
                n.default = l
            }, {
                "gl-matrix": 1
            }],
            20: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = t("./Mesh"),
                    o = r(i),
                    a = {};
                a.plane = function (t, e, n) {
                    for (var r = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3], i = arguments.length <= 4 || void 0 === arguments[4] ? "xy" : arguments[4], a = arguments.length <= 5 || void 0 === arguments[5] ? 4 : arguments[5], s = [], u = [], l = [], f = [], c = t / n, h = e / n, d = 1 / n, v = 0, p = .5 * -t, m = .5 * -e, x = 0; n > x; x++)
                        for (var _ = 0; n > _; _++) {
                            var M = c * x + p,
                                b = h * _ + m,
                                y = x / n,
                                g = _ / n;
                            "xz" === i ? (s.push([M, 0, b + h]), s.push([M + c, 0, b + h]), s.push([M + c, 0, b]), s.push([M, 0, b]), u.push([y, 1 - (g + d)]), u.push([y + d, 1 - (g + d)]), u.push([y + d, 1 - g]), u.push([y, 1 - g]), f.push([0, 1, 0]), f.push([0, 1, 0]), f.push([0, 1, 0]), f.push([0, 1, 0])) : "yz" === i ? (s.push([0, b, M]), s.push([0, b, M + c]), s.push([0, b + h, M + c]), s.push([0, b + h, M]), u.push([y, g]), u.push([y + d, g]), u.push([y + d, g + d]), u.push([y, g + d]), f.push([1, 0, 0]), f.push([1, 0, 0]), f.push([1, 0, 0]), f.push([1, 0, 0])) : (s.push([M, b, 0]), s.push([M + c, b, 0]), s.push([M + c, b + h, 0]), s.push([M, b + h, 0]), u.push([y, g]), u.push([y + d, g]), u.push([y + d, g + d]), u.push([y, g + d]), f.push([0, 0, 1]), f.push([0, 0, 1]), f.push([0, 0, 1]), f.push([0, 0, 1])), l.push(4 * v + 0), l.push(4 * v + 1), l.push(4 * v + 2), l.push(4 * v + 0), l.push(4 * v + 2), l.push(4 * v + 3), v++
                        }
                    var E = new o.default(a);
                    return E.bufferVertex(s), E.bufferTexCoords(u), E.bufferIndices(l), r && E.bufferNormal(f), E
                }, a.sphere = function (t, e) {
                    for (var n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2], r = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3], i = arguments.length <= 4 || void 0 === arguments[4] ? 4 : arguments[4], a = [], s = [], u = [], l = [], f = 0, c = 1 / e, h = function (n, r) {
                            var i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                                o = n / e * Math.PI - .5 * Math.PI,
                                a = r / e * Math.PI * 2,
                                s = i ? 1 : t,
                                u = [];
                            u[1] = Math.sin(o) * s;
                            var l = Math.cos(o) * s;
                            u[0] = Math.cos(a) * l, u[2] = Math.sin(a) * l;
                            var f = 1e4;
                            return u[0] = Math.floor(u[0] * f) / f, u[1] = Math.floor(u[1] * f) / f, u[2] = Math.floor(u[2] * f) / f, u
                        }, d = 0; e > d; d++)
                        for (var v = 0; e > v; v++) {
                            a.push(h(d, v)), a.push(h(d + 1, v)), a.push(h(d + 1, v + 1)), a.push(h(d, v + 1)), n && (l.push(h(d, v, !0)), l.push(h(d + 1, v, !0)), l.push(h(d + 1, v + 1, !0)), l.push(h(d, v + 1, !0)));
                            var p = v / e,
                                m = d / e;
                            s.push([1 - p, m]), s.push([1 - p, m + c]), s.push([1 - p - c, m + c]), s.push([1 - p - c, m]), u.push(4 * f + 0), u.push(4 * f + 1), u.push(4 * f + 2), u.push(4 * f + 0), u.push(4 * f + 2), u.push(4 * f + 3), f++
                        }
                    r && u.reverse();
                    var x = new o.default(i);
                    return x.bufferVertex(a), x.bufferTexCoords(s), x.bufferIndices(u), n && x.bufferNormal(l), x
                }, a.cube = function (t, e, n) {
                    var r = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3],
                        i = arguments.length <= 4 || void 0 === arguments[4] ? 4 : arguments[4];
                    e = e || t, n = n || t;
                    var a = t / 2,
                        s = e / 2,
                        u = n / 2,
                        l = [],
                        f = [],
                        c = [],
                        h = [],
                        d = 0;
                    l.push([-a, s, -u]), l.push([a, s, -u]), l.push([a, -s, -u]), l.push([-a, -s, -u]), h.push([0, 0, -1]), h.push([0, 0, -1]), h.push([0, 0, -1]), h.push([0, 0, -1]), f.push([0, 0]), f.push([1, 0]), f.push([1, 1]), f.push([0, 1]), c.push(4 * d + 0), c.push(4 * d + 1), c.push(4 * d + 2), c.push(4 * d + 0), c.push(4 * d + 2), c.push(4 * d + 3), d++, l.push([a, s, -u]), l.push([a, s, u]), l.push([a, -s, u]), l.push([a, -s, -u]), h.push([1, 0, 0]), h.push([1, 0, 0]), h.push([1, 0, 0]), h.push([1, 0, 0]), f.push([0, 0]), f.push([1, 0]), f.push([1, 1]), f.push([0, 1]), c.push(4 * d + 0), c.push(4 * d + 1), c.push(4 * d + 2), c.push(4 * d + 0), c.push(4 * d + 2), c.push(4 * d + 3), d++, l.push([a, s, u]), l.push([-a, s, u]), l.push([-a, -s, u]), l.push([a, -s, u]), h.push([0, 0, 1]), h.push([0, 0, 1]), h.push([0, 0, 1]), h.push([0, 0, 1]), f.push([0, 0]), f.push([1, 0]), f.push([1, 1]), f.push([0, 1]), c.push(4 * d + 0), c.push(4 * d + 1), c.push(4 * d + 2), c.push(4 * d + 0), c.push(4 * d + 2), c.push(4 * d + 3), d++, l.push([-a, s, u]), l.push([-a, s, -u]), l.push([-a, -s, -u]), l.push([-a, -s, u]), h.push([-1, 0, 0]), h.push([-1, 0, 0]), h.push([-1, 0, 0]), h.push([-1, 0, 0]), f.push([0, 0]), f.push([1, 0]), f.push([1, 1]), f.push([0, 1]), c.push(4 * d + 0), c.push(4 * d + 1), c.push(4 * d + 2), c.push(4 * d + 0), c.push(4 * d + 2), c.push(4 * d + 3), d++, l.push([-a, s, u]), l.push([a, s, u]), l.push([a, s, -u]), l.push([-a, s, -u]), h.push([0, 1, 0]), h.push([0, 1, 0]), h.push([0, 1, 0]), h.push([0, 1, 0]), f.push([0, 0]), f.push([1, 0]), f.push([1, 1]), f.push([0, 1]), c.push(4 * d + 0), c.push(4 * d + 1), c.push(4 * d + 2), c.push(4 * d + 0), c.push(4 * d + 2), c.push(4 * d + 3), d++, l.push([-a, -s, -u]), l.push([a, -s, -u]), l.push([a, -s, u]), l.push([-a, -s, u]), h.push([0, -1, 0]), h.push([0, -1, 0]), h.push([0, -1, 0]), h.push([0, -1, 0]), f.push([0, 0]), f.push([1, 0]), f.push([1, 1]), f.push([0, 1]), c.push(4 * d + 0), c.push(4 * d + 1), c.push(4 * d + 2), c.push(4 * d + 0), c.push(4 * d + 2), c.push(4 * d + 3), d++;
                    var v = new o.default(i);
                    return v.bufferVertex(l), v.bufferTexCoords(f), v.bufferIndices(c), r && v.bufferNormal(h), v
                }, a.skybox = function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? 4 : arguments[2],
                        r = [],
                        i = [],
                        a = [],
                        s = [],
                        u = 0;
                    r.push([t, t, -t]), r.push([-t, t, -t]), r.push([-t, -t, -t]), r.push([t, -t, -t]), s.push([0, 0, -1]), s.push([0, 0, -1]), s.push([0, 0, -1]), s.push([0, 0, -1]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), a.push(4 * u + 0), a.push(4 * u + 1), a.push(4 * u + 2), a.push(4 * u + 0), a.push(4 * u + 2), a.push(4 * u + 3), u++, r.push([t, -t, -t]), r.push([t, -t, t]), r.push([t, t, t]), r.push([t, t, -t]), s.push([1, 0, 0]), s.push([1, 0, 0]), s.push([1, 0, 0]), s.push([1, 0, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), a.push(4 * u + 0), a.push(4 * u + 1), a.push(4 * u + 2), a.push(4 * u + 0), a.push(4 * u + 2), a.push(4 * u + 3), u++, r.push([-t, t, t]), r.push([t, t, t]), r.push([t, -t, t]), r.push([-t, -t, t]), s.push([0, 0, 1]), s.push([0, 0, 1]), s.push([0, 0, 1]), s.push([0, 0, 1]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), a.push(4 * u + 0), a.push(4 * u + 1), a.push(4 * u + 2), a.push(4 * u + 0), a.push(4 * u + 2), a.push(4 * u + 3), u++, r.push([-t, -t, t]), r.push([-t, -t, -t]), r.push([-t, t, -t]), r.push([-t, t, t]), s.push([-1, 0, 0]), s.push([-1, 0, 0]), s.push([-1, 0, 0]), s.push([-1, 0, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), a.push(4 * u + 0), a.push(4 * u + 1), a.push(4 * u + 2), a.push(4 * u + 0), a.push(4 * u + 2), a.push(4 * u + 3), u++, r.push([t, t, t]), r.push([-t, t, t]), r.push([-t, t, -t]), r.push([t, t, -t]), s.push([0, 1, 0]), s.push([0, 1, 0]), s.push([0, 1, 0]), s.push([0, 1, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), a.push(4 * u + 0), a.push(4 * u + 1), a.push(4 * u + 2), a.push(4 * u + 0), a.push(4 * u + 2), a.push(4 * u + 3), u++, r.push([t, -t, -t]), r.push([-t, -t, -t]), r.push([-t, -t, t]), r.push([t, -t, t]), s.push([0, -1, 0]), s.push([0, -1, 0]), s.push([0, -1, 0]), s.push([0, -1, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), a.push(4 * u + 0), a.push(4 * u + 1), a.push(4 * u + 2), a.push(4 * u + 0), a.push(4 * u + 2), a.push(4 * u + 3);
                    var l = new o.default(n);
                    return l.bufferVertex(r), l.bufferTexCoords(i), l.bufferIndices(a), e && l.bufferNormal(s), l
                }, a.bigTriangle = function () {
                    var t = [2, 1, 0],
                        e = [
                            [-1, -1],
                            [-1, 4],
                            [4, -1]
                        ],
                        n = new o.default;
                    return n.bufferData(e, "aPosition", 2), n.bufferIndices(t), n
                }, n.default = a
            }, {
                "./Mesh": 21
            }],
            21: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./GLTool"),
                    s = r(a),
                    u = t("gl-matrix"),
                    l = r(u),
                    f = void 0,
                    c = l.default.vec3,
                    h = function () {
                        function t() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? s.default.gl.TRIANGLES : arguments[0];
                            i(this, t), f = s.default.gl, this.drawType = e, this._attributes = [], this._vertexSize = 0, this._vertices = [], this._texCoords = [], this._normals = [], this._faceNormals = [], this._tangents = [], this._indices = [], this._faces = []
                        }
                        return o(t, [{
                            key: "bufferVertex",
                            value: function (t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                                this._vertexSize = t.length, this.bufferData(t, "aVertexPosition", 3, e), this._vertices = t
                            }
                        }, {
                            key: "bufferTexCoords",
                            value: function (t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                                this.bufferData(t, "aTextureCoord", 2, e), this._texCoords = t
                            }
                        }, {
                            key: "bufferNormal",
                            value: function (t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                                this.bufferData(t, "aNormal", 3, e), this._normals = t
                            }
                        }, {
                            key: "bufferIndices",
                            value: function (t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                                    n = e ? f.DYNAMIC_DRAW : f.STATIC_DRAW;
                                this._indices = t, this.iBuffer = f.createBuffer(), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, this.iBuffer), f.bufferData(f.ELEMENT_ARRAY_BUFFER, new Uint16Array(t), n), this.iBuffer.itemSize = 1, this.iBuffer.numItems = t.length, this._indices = t
                            }
                        }, {
                            key: "bufferData",
                            value: function e(t, n, r) {
                                var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3],
                                    o = -1,
                                    a = 0,
                                    s = i ? f.DYNAMIC_DRAW : f.STATIC_DRAW,
                                    e = [],
                                    u = void 0,
                                    l = void 0;
                                for (a = 0; a < this._attributes.length; a++)
                                    if (this._attributes[a].name === n) {
                                        this._attributes[a].data = t, o = a;
                                        break
                                    } for (a = 0; a < t.length; a++)
                                    for (var c = 0; c < t[a].length; c++) e.push(t[a][c]);
                                if (-1 === o) u = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, u), l = new Float32Array(e), f.bufferData(f.ARRAY_BUFFER, l, s), this._attributes.push({
                                    name: n,
                                    data: t,
                                    itemSize: r,
                                    buffer: u,
                                    dataArray: l
                                });
                                else {
                                    for (u = this._attributes[o].buffer, f.bindBuffer(f.ARRAY_BUFFER, u), l = this._attributes[o].dataArray, a = 0; a < e.length; a++) l[a] = e[a];
                                    f.bufferData(f.ARRAY_BUFFER, l, s)
                                }
                            }
                        }, {
                            key: "computeNormals",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                                this._generateFaces(), t ? this._computeFaceNormals() : this._computeVertexNormals()
                            }
                        }, {
                            key: "computeTangents",
                            value: function () {}
                        }, {
                            key: "_computeFaceNormals",
                            value: function () {
                                for (var t = void 0, e = void 0, n = [], r = 0; r < this._indices.length; r += 3) {
                                    t = r / 3, e = this._faces[t];
                                    var i = e.normal;
                                    n[e.indices[0]] = i, n[e.indices[1]] = i, n[e.indices[2]] = i
                                }
                                this.bufferNormal(n)
                            }
                        }, {
                            key: "_computeVertexNormals",
                            value: function () {
                                for (var t = c.create(), e = void 0, n = [], r = 0; r < this._vertices.length; r++) {
                                    c.set(t, 0, 0, 0);
                                    for (var i = 0; i < this._faces.length; i++) e = this._faces[i], e.indices.indexOf(r) >= 0 && (t[0] += e.normal[0], t[1] += e.normal[1], t[2] += e.normal[2]);
                                    c.normalize(t, t), n.push([t[0], t[1], t[2]])
                                }
                                this.bufferNormal(n)
                            }
                        }, {
                            key: "_generateFaces",
                            value: function () {
                                for (var t = void 0, e = void 0, n = void 0, r = void 0, i = void 0, o = void 0, a = c.create(), s = c.create(), u = c.create(), l = 0; l < this._indices.length; l += 3) {
                                    t = this._indices[l], e = this._indices[l + 1], n = this._indices[l + 2], r = c.clone(this._vertices[t]), i = c.clone(this._vertices[e]), o = c.clone(this._vertices[n]), c.sub(a, i, r), c.sub(s, o, r), c.cross(u, a, s), c.normalize(u, u);
                                    var f = [u[0], u[1], u[2]],
                                        h = {
                                            indices: [t, e, n],
                                            normal: f
                                        };
                                    this._faces.push(h)
                                }
                            }
                        }, {
                            key: "vertices",
                            get: function () {
                                return this._vertices
                            }
                        }, {
                            key: "normals",
                            get: function () {
                                return this._normals
                            }
                        }, {
                            key: "attributes",
                            get: function () {
                                return this._attributes
                            }
                        }, {
                            key: "vertexSize",
                            get: function () {
                                return this._vertexSize
                            }
                        }, {
                            key: "hasNormals",
                            get: function () {
                                return 0 !== this._normals.length
                            }
                        }, {
                            key: "hasTangents",
                            get: function () {
                                return 0 !== this._tangents.length
                            }
                        }]), t
                    }();
                n.default = h
            }, {
                "./GLTool": 19,
                "gl-matrix": 1
            }],
            22: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("gl-matrix"),
                    s = r(a),
                    u = function () {
                        function t() {
                            i(this, t), this._matrix = s.default.mat4.create(), this._projection = s.default.mat4.create(), this.position = s.default.vec3.create()
                        }
                        return o(t, [{
                            key: "lookAt",
                            value: function (t, e, n) {
                                s.default.vec3.copy(this.position, t), s.default.mat4.identity(this._matrix), s.default.mat4.lookAt(this._matrix, t, e, n)
                            }
                        }, {
                            key: "matrix",
                            get: function () {
                                return this._matrix
                            }
                        }, {
                            key: "viewMatrix",
                            get: function () {
                                return this._matrix
                            }
                        }, {
                            key: "projection",
                            get: function () {
                                return this._projection
                            }
                        }, {
                            key: "projectionMatrix",
                            get: function () {
                                return this._projection
                            }
                        }]), t
                    }();
                n.default = u
            }, {
                "gl-matrix": 1
            }],
            23: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = t("./CameraPerspective"),
                    l = r(u),
                    f = t("gl-matrix"),
                    c = r(f),
                    h = c.default.vec3,
                    d = [
                        [h.fromValues(0, 0, 0), h.fromValues(1, 0, 0), h.fromValues(0, -1, 0)],
                        [h.fromValues(0, 0, 0), h.fromValues(-1, 0, 0), h.fromValues(0, -1, 0)],
                        [h.fromValues(0, 0, 0), h.fromValues(0, 1, 0), h.fromValues(0, 0, 1)],
                        [h.fromValues(0, 0, 0), h.fromValues(0, -1, 0), h.fromValues(0, 0, -1)],
                        [h.fromValues(0, 0, 0), h.fromValues(0, 0, 1), h.fromValues(0, -1, 0)],
                        [h.fromValues(0, 0, 0), h.fromValues(0, 0, -1), h.fromValues(0, -1, 0)]
                    ],
                    v = function (t) {
                        function e() {
                            i(this, e);
                            var t = o(this, Object.getPrototypeOf(e).call(this));
                            return t.setPerspective(Math.PI / 2, 1, .1, 1e3), t
                        }
                        return a(e, t), s(e, [{
                            key: "face",
                            value: function (t) {
                                var e = d[t];
                                this.lookAt(e[0], e[1], e[2])
                            }
                        }]), e
                    }(l.default);
                n.default = v
            }, {
                "./CameraPerspective": 25,
                "gl-matrix": 1
            }],
            24: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = t("./Camera"),
                    l = r(u),
                    f = t("gl-matrix"),
                    c = r(f),
                    h = function (t) {
                        function e() {
                            i(this, e);
                            var t = o(this, Object.getPrototypeOf(e).call(this)),
                                n = c.default.vec3.clone([0, 0, 5]),
                                r = c.default.vec3.create(),
                                a = c.default.vec3.clone([0, -1, 0]);
                            return t.lookAt(n, r, a), t.ortho(1, -1, 1, -1), t
                        }
                        return a(e, t), s(e, [{
                            key: "setBoundary",
                            value: function (t, e, n, r) {
                                this.ortho(t, e, n, r)
                            }
                        }, {
                            key: "ortho",
                            value: function (t, e, n, r) {
                                this.left = t, this.right = e, this.top = n, this.bottom = r, c.default.mat4.ortho(this._projection, t, e, n, r, 0, 1e4)
                            }
                        }]), e
                    }(l.default);
                n.default = h
            }, {
                "./Camera": 22,
                "gl-matrix": 1
            }],
            25: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = t("./Camera"),
                    l = r(u),
                    f = t("gl-matrix"),
                    c = r(f),
                    h = function (t) {
                        function e() {
                            return i(this, e), o(this, Object.getPrototypeOf(e).call(this))
                        }
                        return a(e, t), s(e, [{
                            key: "setPerspective",
                            value: function (t, e, n, r) {
                                this._fov = t, this._near = n, this._far = r, this._aspectRatio = e, c.default.mat4.perspective(this._projection, t, e, n, r)
                            }
                        }, {
                            key: "setAspectRatio",
                            value: function (t) {
                                this._aspectRatio = t, c.default.mat4.perspective(this.projection, this._fov, t, this._near, this._far)
                            }
                        }]), e
                    }(l.default);
                n.default = h
            }, {
                "./Camera": 22,
                "gl-matrix": 1
            }],
            26: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = t("../GLTool"),
                    u = r(s),
                    l = t("../Mesh"),
                    f = r(l),
                    c = t("../GLShader"),
                    h = r(c),
                    d = t("../Batch"),
                    v = r(d),
                    p = function (t) {
                        function e() {
                            i(this, e);
                            var t = [],
                                n = [],
                                r = [0, 1, 2, 3, 4, 5],
                                a = 9999;
                            t.push([-a, 0, 0]), t.push([a, 0, 0]), t.push([0, -a, 0]), t.push([0, a, 0]), t.push([0, 0, -a]), t.push([0, 0, a]), n.push([1, 0, 0]), n.push([1, 0, 0]), n.push([0, 1, 0]), n.push([0, 1, 0]), n.push([0, 0, 1]), n.push([0, 0, 1]);
                            var s = new f.default(u.default.LINES);
                            s.bufferVertex(t), s.bufferIndices(r), s.bufferData(n, "aColor", 3);
                            var l = new h.default("// axis.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vColor = aColor;\n}", "// axis.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\n\nvoid main(void) {\n    gl_FragColor = vec4(vColor, 1.0);\n}");
                            return o(this, Object.getPrototypeOf(e).call(this, s, l))
                        }
                        return a(e, t), e
                    }(v.default);
                n.default = p
            }, {
                "../Batch": 13,
                "../GLShader": 17,
                "../GLTool": 19,
                "../Mesh": 21
            }],
            27: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function m(t, e, n) {
                        null === t && (t = Function.prototype);
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        if (void 0 === r) {
                            var i = Object.getPrototypeOf(t);
                            return null === i ? void 0 : m(i, e, n)
                        }
                        if ("value" in r) return r.value;
                        var o = r.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    l = t("../Geom"),
                    f = r(l),
                    c = t("../GLShader"),
                    h = r(c),
                    d = t("../Batch"),
                    v = r(d),
                    p = function (t) {
                        function e() {
                            i(this, e);
                            var t = f.default.sphere(1, 24),
                                n = new h.default("// general.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n	vec3 pos      = aVertexPosition * scale;\n	pos           += position;\n	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	vTextureCoord = aTextureCoord;\n}", "// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}");
                            return o(this, Object.getPrototypeOf(e).call(this, t, n))
                        }
                        return a(e, t), s(e, [{
                            key: "draw",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? [0, 0, 0] : arguments[0],
                                    n = arguments.length <= 1 || void 0 === arguments[1] ? [1, 1, 1] : arguments[1],
                                    r = arguments.length <= 2 || void 0 === arguments[2] ? [1, 1, 1] : arguments[2],
                                    i = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3];
                                this.shader.bind(), this.shader.uniform("position", "uniform3fv", t), this.shader.uniform("scale", "uniform3fv", n), this.shader.uniform("color", "uniform3fv", r), this.shader.uniform("opacity", "uniform1f", i), u(Object.getPrototypeOf(e.prototype), "draw", this).call(this)
                            }
                        }]), e
                    }(v.default);
                n.default = p
            }, {
                "../Batch": 13,
                "../GLShader": 17,
                "../Geom": 20
            }],
            28: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function m(t, e, n) {
                        null === t && (t = Function.prototype);
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        if (void 0 === r) {
                            var i = Object.getPrototypeOf(t);
                            return null === i ? void 0 : m(i, e, n)
                        }
                        if ("value" in r) return r.value;
                        var o = r.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    l = t("../Geom"),
                    f = r(l),
                    c = t("../GLShader"),
                    h = r(c),
                    d = t("../Batch"),
                    v = r(d),
                    p = function (t) {
                        function e() {
                            i(this, e);
                            var t = f.default.bigTriangle(),
                                n = new h.default("// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}", "// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}"),
                                r = o(this, Object.getPrototypeOf(e).call(this, t, n));
                            return n.bind(), n.uniform("texture", "uniform1i", 0), r
                        }
                        return a(e, t), s(e, [{
                            key: "draw",
                            value: function (t) {
                                this.shader.bind(), t.bind(0), u(Object.getPrototypeOf(e.prototype), "draw", this).call(this)
                            }
                        }]), e
                    }(v.default);
                n.default = p
            }, {
                "../Batch": 13,
                "../GLShader": 17,
                "../Geom": 20
            }],
            29: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function _(t, e, n) {
                        null === t && (t = Function.prototype);
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        if (void 0 === r) {
                            var i = Object.getPrototypeOf(t);
                            return null === i ? void 0 : _(i, e, n)
                        }
                        if ("value" in r) return r.value;
                        var o = r.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    l = t("../GLTool"),
                    f = r(l),
                    c = t("../Mesh"),
                    h = r(c),
                    d = t("../GLShader"),
                    v = r(d),
                    p = t("../Batch"),
                    m = r(p),
                    x = function (t) {
                        function e() {
                            i(this, e);
                            var t = [],
                                n = [],
                                r = 0,
                                a = 100,
                                s = 50,
                                u = s / a,
                                l = void 0,
                                c = void 0;
                            for (l = -s / 2; s > l; l += u)
                                for (c = -s / 2; s > c; c += u) t.push([l, c, 0]), n.push(r), r++, t.push([l, 0, c]), n.push(r), r++;
                            var d = new h.default(f.default.POINTS);
                            d.bufferVertex(t), d.bufferIndices(n);
                            var p = new v.default("// basic.vert\n\n#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n}", "// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}"),
                                m = o(this, Object.getPrototypeOf(e).call(this, d, p));
                            return m.color = [1, 1, 1], m.opacity = .5, m
                        }
                        return a(e, t), s(e, [{
                            key: "draw",
                            value: function () {
                                this.shader.bind(), this.shader.uniform("color", "uniform3fv", this.color), this.shader.uniform("opacity", "uniform1f", this.opacity), u(Object.getPrototypeOf(e.prototype), "draw", this).call(this)
                            }
                        }]), e
                    }(m.default);
                n.default = x
            }, {
                "../Batch": 13,
                "../GLShader": 17,
                "../GLTool": 19,
                "../Mesh": 21
            }],
            30: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function m(t, e, n) {
                        null === t && (t = Function.prototype);
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        if (void 0 === r) {
                            var i = Object.getPrototypeOf(t);
                            return null === i ? void 0 : m(i, e, n)
                        }
                        if ("value" in r) return r.value;
                        var o = r.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    l = t("../Geom"),
                    f = r(l),
                    c = t("../GLShader"),
                    h = r(c),
                    d = t("../Batch"),
                    v = r(d),
                    p = function (t) {
                        function e() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? 20 : arguments[0];
                            i(this, e);
                            var n = f.default.skybox(t),
                                r = new h.default("// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n	gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n	vTextureCoord = aTextureCoord;\n	\n	vVertex = aVertexPosition;\n}", "// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision highp float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}");
                            return o(this, Object.getPrototypeOf(e).call(this, n, r))
                        }
                        return a(e, t), s(e, [{
                            key: "draw",
                            value: function (t) {
                                this.shader.bind(), t.bind(0), u(Object.getPrototypeOf(e.prototype), "draw", this).call(this)
                            }
                        }]), e
                    }(v.default);
                n.default = p
            }, {
                "../Batch": 13,
                "../GLShader": 17,
                "../Geom": 20
            }],
            31: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("scheduling"),
                    s = r(a),
                    u = t("../GLTool"),
                    l = r(u),
                    f = t("../cameras/CameraPerspective"),
                    c = r(f),
                    h = t("../cameras/CameraOrtho"),
                    d = r(h),
                    v = t("../tools/OrbitalControl"),
                    p = r(v),
                    m = function () {
                        function t() {
                            var e = this;
                            i(this, t), this._init(), this._initTextures(), this._initViews(), this._efIndex = s.default.addEF(function () {
                                return e._loop()
                            }), window.addEventListener("resize", function () {
                                return e.resize()
                            })
                        }
                        return o(t, [{
                            key: "render",
                            value: function () {}
                        }, {
                            key: "stop",
                            value: function () {
                                -1 !== this._efIndex && (this._efIndex = s.default.removeEF(this._efIndex))
                            }
                        }, {
                            key: "start",
                            value: function () {
                                var t = this; - 1 === this._efIndex && (this._efIndex = s.default.addEF(function () {
                                    return t._loop()
                                }))
                            }
                        }, {
                            key: "resize",
                            value: function () {
                                l.default.setSize(window.innerWidth, window.innerHeight), this.camera.setAspectRatio(l.default.aspectRatio)
                            }
                        }, {
                            key: "_initTextures",
                            value: function () {}
                        }, {
                            key: "_initViews",
                            value: function () {}
                        }, {
                            key: "_init",
                            value: function () {
                                this.camera = new c.default, this.camera.setPerspective(45 * Math.PI / 180, l.default.aspectRatio, .1, 100), this.orbitalControl = new p.default(this.camera, window, 15), this.orbitalControl.radius.value = 10, this.cameraOrtho = new d.default
                            }
                        }, {
                            key: "_loop",
                            value: function () {
                                l.default.viewport(0, 0, l.default.width, l.default.height), l.default.setMatrices(this.camera), this.render()
                            }
                        }]), t
                    }();
                n.default = m
            }, {
                "../GLTool": 19,
                "../cameras/CameraOrtho": 24,
                "../cameras/CameraPerspective": 25,
                "../tools/OrbitalControl": 40,
                scheduling: 11
            }],
            32: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("../GLShader"),
                    s = r(a),
                    u = function () {
                        function t(e, n) {
                            i(this, t), this.shader = new s.default(e, n), this._init()
                        }
                        return o(t, [{
                            key: "_init",
                            value: function () {}
                        }, {
                            key: "render",
                            value: function () {}
                        }]), t
                    }();
                n.default = u
            }, {
                "../GLShader": 17
            }],
            33: [function (t, e, n) {
                "use strict";

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    o = function () {
                        function t() {
                            var e = this,
                                n = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                            r(this, t), this._req = new XMLHttpRequest, this._req.addEventListener("load", function (t) {
                                return e._onLoaded(t)
                            }), this._req.addEventListener("progress", function (t) {
                                return e._onProgress(t)
                            }), n && (this._req.responseType = "arraybuffer")
                        }
                        return i(t, [{
                            key: "load",
                            value: function (t, e) {
                                console.log("Loading : ", t), this._callback = e, this._req.open("GET", t), this._req.send()
                            }
                        }, {
                            key: "_onLoaded",
                            value: function () {
                                this._callback(this._req.response)
                            }
                        }, {
                            key: "_onProgress",
                            value: function () {}
                        }]), t
                    }();
                n.default = o
            }, {}],
            34: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = t("./BinaryLoader"),
                    l = r(u),
                    f = t("../tools/HDRParser"),
                    c = r(f),
                    h = function (t) {
                        function e() {
                            return i(this, e), o(this, Object.getPrototypeOf(e).call(this, !0))
                        }
                        return a(e, t), s(e, [{
                            key: "parse",
                            value: function (t) {
                                return (0, c.default)(t)
                            }
                        }, {
                            key: "_onLoaded",
                            value: function () {
                                var t = this.parse(this._req.response);
                                this._callback && this._callback(t)
                            }
                        }]), e
                    }(l.default);
                h.parse = function (t) {
                    return (0, c.default)(t)
                }, n.default = h
            }, {
                "../tools/HDRParser": 39,
                "./BinaryLoader": 33
            }],
            35: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function a(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var s = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function v(t, e, n) {
                        null === t && (t = Function.prototype);
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        if (void 0 === r) {
                            var i = Object.getPrototypeOf(t);
                            return null === i ? void 0 : v(i, e, n)
                        }
                        if ("value" in r) return r.value;
                        var o = r.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    l = t("./BinaryLoader"),
                    f = r(l),
                    c = t("../Mesh"),
                    h = r(c),
                    d = function (t) {
                        function e() {
                            return i(this, e), o(this, Object.getPrototypeOf(e).call(this))
                        }
                        return a(e, t), s(e, [{
                            key: "load",
                            value: function (t, n) {
                                var r = arguments.length <= 2 || void 0 === arguments[2] ? !0 : arguments[2],
                                    i = arguments.length <= 3 || void 0 === arguments[3] ? 4 : arguments[3];
                                this._ignoreNormals = r, this._drawType = i, u(Object.getPrototypeOf(e.prototype), "load", this).call(this, t, n)
                            }
                        }, {
                            key: "_onLoaded",
                            value: function () {
                                this._parseObj(this._req.response)
                            }
                        }, {
                            key: "_parseObj",
                            value: function (t) {
                                function e(t) {
                                    var e = parseInt(t);
                                    return 3 * (e >= 0 ? e - 1 : e + h.length / 3)
                                }

                                function n(t) {
                                    var e = parseInt(t);
                                    return 3 * (e >= 0 ? e - 1 : e + d.length / 3)
                                }

                                function r(t) {
                                    var e = parseInt(t);
                                    return 2 * (e >= 0 ? e - 1 : e + v.length / 2)
                                }

                                function i(t, e, n) {
                                    l.push([h[t], h[t + 1], h[t + 2]]), l.push([h[e], h[e + 1], h[e + 2]]), l.push([h[n], h[n + 1], h[n + 2]]), p.push(3 * m + 0), p.push(3 * m + 1), p.push(3 * m + 2), m++
                                }

                                function o(t, e, n) {
                                    f.push([v[t], v[t + 1]]), f.push([v[e], v[e + 1]]), f.push([v[n], v[n + 1]])
                                }

                                function a(t, e, n) {
                                    c.push([d[t], d[t + 1], d[t + 2]]), c.push([d[e], d[e + 1], d[e + 2]]), c.push([d[n], d[n + 1], d[n + 2]])
                                }

                                function s(t, s, u, l, f, c, h, d, v, p, m, x) {
                                    var _ = e(t),
                                        M = e(s),
                                        b = e(u),
                                        y = void 0;
                                    void 0 === l ? i(_, M, b) : (y = e(l), i(_, M, y), i(M, b, y)), void 0 !== f && (_ = r(f), M = r(c), b = r(h), void 0 === l ? o(_, M, b) : (y = r(d), o(_, M, y), o(M, b, y))), void 0 !== v && (_ = n(v), M = n(p), b = n(m), void 0 === l ? a(_, M, b) : (y = n(x), a(_, M, y), a(M, b, y)))
                                }
                                for (var u = t.split("\n"), l = [], f = [], c = [], h = [], d = [], v = [], p = [], m = 0, x = void 0, _ = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, M = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, b = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, y = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/, g = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/, E = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/, w = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/, T = 0; T < u.length; T++) {
                                    var S = u[T];
                                    S = S.trim(), 0 !== S.length && "#" !== S.charAt(0) && (null !== (x = _.exec(S)) ? h.push(parseFloat(x[1]), parseFloat(x[2]), parseFloat(x[3])) : null !== (x = M.exec(S)) ? d.push(parseFloat(x[1]), parseFloat(x[2]), parseFloat(x[3])) : null !== (x = b.exec(S)) ? v.push(parseFloat(x[1]), parseFloat(x[2])) : null !== (x = y.exec(S)) ? s(x[1], x[2], x[3], x[4]) : null !== (x = g.exec(S)) ? s(x[2], x[5], x[8], x[11], x[3], x[6], x[9], x[12]) : null !== (x = E.exec(S)) ? s(x[2], x[6], x[10], x[14], x[3], x[7], x[11], x[15], x[4], x[8], x[12], x[16]) : null !== (x = w.exec(S)) && s(x[2], x[5], x[8], x[11], void 0, void 0, void 0, void 0, x[3], x[6], x[9], x[12]))
                                }
                                this._generateMeshes({
                                    positions: l,
                                    coords: f,
                                    normals: c,
                                    indices: p
                                })
                            }
                        }, {
                            key: "_generateMeshes",
                            value: function (t) {
                                var e = 65535,
                                    n = t.normals.length > 0,
                                    r = t.coords.length > 0;
                                if (t.positions.length > e) {
                                    var i = [],
                                        o = 0,
                                        a = {};
                                    for (a.positions = t.positions.concat(), a.coords = t.coords.concat(), a.indices = t.indices.concat(), a.normals = t.normals.concat(); t.indices.length > 0;) {
                                        for (var s = Math.min(e, t.positions.length), u = t.indices.splice(0, s), l = [], f = [], c = [], d = void 0, v = 0, p = 0; p < u.length; p++) u[p] > v && (v = u[p]), d = u[p], l.push(a.positions[d]), r && f.push(a.coords[d]), n && c.push(a.normals[d]), u[p] -= o;
                                        o = v + 1;
                                        var m = new h.default(this._drawType);
                                        m.bufferVertex(l), r && m.bufferTexCoords(f), m.bufferIndices(u), !this._ignoreNormals && n && m.bufferNormal(c), i.push(m)
                                    }
                                    this._callback && this._callback(i, a)
                                } else {
                                    var x = new h.default(this._drawType);
                                    x.bufferVertex(t.positions), r && x.bufferTexCoords(t.coords), x.bufferIndices(t.indices), !this._ignoreNormals && n && x.bufferNormal(t.normals), this._callback && this._callback(x, t)
                                }
                            }
                        }]), e
                    }(f.default);
                n.default = d
            }, {
                "../Mesh": 21,
                "./BinaryLoader": 33
            }],
            36: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("../GLTool"),
                    s = (r(a), t("../FrameBuffer")),
                    u = r(s),
                    l = t("../Geom"),
                    f = r(l),
                    c = function () {
                        function t(e, n) {
                            var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i(this, t), this._fbo = new u.default(e, n, r), this._fboTarget = new u.default(e, n, r), this._mesh = f.default.bigTriangle(), this._passes = []
                        }
                        return o(t, [{
                            key: "addPass",
                            value: function (t) {
                                this._passes.push(t)
                            }
                        }, {
                            key: "render",
                            value: function (t) {
                                for (var e = 0; e < this._passes.length; e++) this._swap()
                            }
                        }, {
                            key: "_swap",
                            value: function () {
                                var t = this._fbo;
                                this._fbo = this._fboTarget, this._fboTarget = t
                            }
                        }]), t
                    }();
                n.default = c
            }, {
                "../FrameBuffer": 15,
                "../GLTool": 19,
                "../Geom": 20
            }],
            37: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("scheduling"),
                    s = r(a),
                    u = function () {
                        function t(e) {
                            var n = this,
                                r = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1];
                            i(this, t), this.easing = r, this._value = e, this._targetValue = e, this._efIndex = s.default.addEF(function () {
                                return n._update()
                            })
                        }
                        return o(t, [{
                            key: "_update",
                            value: function () {
                                this._checkLimit(), this._value += (this._targetValue - this._value) * this.easing
                            }
                        }, {
                            key: "setTo",
                            value: function (t) {
                                this._targetValue = this._value = t
                            }
                        }, {
                            key: "add",
                            value: function (t) {
                                this._targetValue += t
                            }
                        }, {
                            key: "limit",
                            value: function (t, e) {
                                return t > e ? void this.limit(e, t) : (this._min = t, this._max = e, void this._checkLimit())
                            }
                        }, {
                            key: "_checkLimit",
                            value: function () {
                                void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                s.default.removeEF(this._efIndex)
                            }
                        }, {
                            key: "value",
                            set: function (t) {
                                this._targetValue = t
                            },
                            get: function () {
                                return this._value
                            }
                        }, {
                            key: "targetValue",
                            get: function () {
                                return this._targetValue
                            }
                        }]), t
                    }();
                n.default = u
            }, {
                scheduling: 11
            }],
            38: [function (t, e, n) {
                "use strict";

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    o = !0;
                try {
                    var a = document.createEvent("CustomEvent");
                    a = null
                } catch (s) {
                    o = !1
                }
                var u = function () {
                    function t() {
                        r(this, t), this._eventListeners = {}
                    }
                    return i(t, [{
                        key: "addEventListener",
                        value: function (t, e) {
                            return null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {}), this._eventListeners[t] || (this._eventListeners[t] = []), this._eventListeners[t].push(e), this
                        }
                    }, {
                        key: "on",
                        value: function (t, e) {
                            return this.addEventListener(t, e)
                        }
                    }, {
                        key: "removeEventListener",
                        value: function (t, e) {
                            null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {});
                            var n = this._eventListeners[t];
                            if ("undefined" == typeof n) return this;
                            for (var r = n.length, i = 0; r > i; i++) n[i] === e && (n.splice(i, 1), i--, r--);
                            return this
                        }
                    }, {
                        key: "off",
                        value: function (t, e) {
                            return this.removeEventListener(t, e)
                        }
                    }, {
                        key: "dispatchEvent",
                        value: function (t) {
                            null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {});
                            var e = t.type;
                            try {
                                null === t.target && (t.target = this), t.currentTarget = this
                            } catch (n) {
                                var r = {
                                    type: e,
                                    detail: t.detail,
                                    dispatcher: this
                                };
                                return this.dispatchEvent(r)
                            }
                            var i = this._eventListeners[e];
                            if (null !== i && void 0 !== i)
                                for (var o = this._copyArray(i), a = o.length, s = 0; a > s; s++) {
                                    var u = o[s];
                                    u.call(this, t)
                                }
                            return this
                        }
                    }, {
                        key: "dispatchCustomEvent",
                        value: function (t, e) {
                            var n = void 0;
                            return o ? (n = document.createEvent("CustomEvent"), n.dispatcher = this, n.initCustomEvent(t, !1, !1, e)) : n = {
                                type: t,
                                detail: e,
                                dispatcher: this
                            }, this.dispatchEvent(n)
                        }
                    }, {
                        key: "trigger",
                        value: function (t, e) {
                            return this.dispatchCustomEvent(t, e)
                        }
                    }, {
                        key: "_destroy",
                        value: function () {
                            if (null !== this._eventListeners) {
                                for (var t in this._eventListeners)
                                    if (this._eventListeners.hasOwnProperty(t)) {
                                        for (var e = this._eventListeners[t], n = e.length, r = 0; n > r; r++) e[r] = null;
                                        delete this._eventListeners[t]
                                    } this._eventListeners = null
                            }
                        }
                    }, {
                        key: "_copyArray",
                        value: function (t) {
                            for (var e = new Array(t.length), n = e.length, r = 0; n > r; r++) e[r] = t[r];
                            return e
                        }
                    }]), t
                }();
                n.default = u
            }, {}],
            39: [function (t, e, n) {
                "use strict";

                function r(t, e, n, r, i, o) {
                    function a(e) {
                        var n = 0;
                        do e[n++] = t[r]; while (++r < p && n < e.length);
                        return n
                    }

                    function s(e, n, i) {
                        var o = 0;
                        do e[n + o++] = t[r]; while (++r < p && i > o);
                        return o
                    }

                    function u(t, e, n, r) {
                        var i = 4 * r,
                            o = s(e, n, i);
                        if (i > o) throw new Error("Error reading raw pixels: got " + o + " bytes, expected " + i)
                    }
                    for (var l = new Array(4), f = null, c = void 0, h = void 0, d = void 0, v = new Array(2), p = t.length; o > 0;) {
                        if (a(l) < l.length) throw new Error("Error reading bytes: expected " + l.length);
                        if (2 !== l[0] || 2 !== l[1] || 0 !== (128 & l[2])) return e[n++] = l[0], e[n++] = l[1], e[n++] = l[2], e[n++] = l[3], void u(t, e, n, i * o - 1);
                        if (((255 & l[2]) << 8 | 255 & l[3]) !== i) throw new Error("Wrong scanline width " + ((255 & l[2]) << 8 | 255 & l[3]) + ", expected " + i);
                        null === f && (f = new Array(4 * i)), c = 0;
                        for (var m = 0; 4 > m; m++)
                            for (h = (m + 1) * i; h > c;) {
                                if (a(v) < v.length) throw new Error("Error reading 2-byte buffer");
                                if ((255 & v[0]) > 128) {
                                    if (d = (255 & v[0]) - 128, 0 === d || d > h - c) throw new Error("Bad scanline data");
                                    for (; d-- > 0;) f[c++] = v[1]
                                } else {
                                    if (d = 255 & v[0], 0 === d || d > h - c) throw new Error("Bad scanline data");
                                    if (f[c++] = v[1], --d > 0) {
                                        if (s(f, c, d) < d) throw new Error("Error reading non-run data");
                                        c += d
                                    }
                                }
                            }
                        for (var x = 0; i > x; x++) e[n + 0] = f[x], e[n + 1] = f[x + i], e[n + 2] = f[x + 2 * i], e[n + 3] = f[x + 3 * i], n += 4;
                        o--
                    }
                }

                function i(t) {
                    function e() {
                        var e = "";
                        do {
                            var r = t[n];
                            if (r === f) {
                                ++n;
                                break
                            }
                            e += String.fromCharCode(r)
                        } while (++n < i);
                        return e
                    }
                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                    for (var n = 0, i = t.length, f = 10, c = 0, h = 0, d = 1, v = 1, p = !1, m = 0; 20 > m; m++) {
                        var x = e(),
                            _ = void 0;
                        if (_ = x.match(o));
                        else if (_ = x.match(u)) p = !0;
                        else if (_ = x.match(s)) d = Number(_[1]);
                        else if (_ = x.match(a));
                        else if (_ = x.match(l)) {
                            h = Number(_[1]), c = Number(_[2]);
                            break
                        }
                    }
                    if (!p) throw new Error("File is not run length encoded!");
                    var M = new Uint8Array(c * h * 4),
                        b = c,
                        y = h;
                    r(t, M, 0, n, b, y);
                    for (var g = new Float32Array(c * h * 4), E = 0; E < M.length; E += 4) {
                        var w = M[E + 0] / 255,
                            T = M[E + 1] / 255,
                            S = M[E + 2] / 255,
                            I = M[E + 3],
                            P = Math.pow(2, I - 128);
                        w *= P, T *= P, S *= P;
                        var D = E;
                        g[D + 0] = w, g[D + 1] = T, g[D + 2] = S, g[D + 3] = 1
                    }
                    return {
                        shape: [c, h],
                        exposure: d,
                        gamma: v,
                        data: g
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = "#\\?RADIANCE",
                    a = "#.*",
                    s = "EXPOSURE=\\s*([0-9]*[.][0-9]*)",
                    u = "FORMAT=32-bit_rle_rgbe",
                    l = "-Y ([0-9]+) \\+X ([0-9]+)";
                n.default = i
            }, {}],
            40: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("./EaseNumber"),
                    s = r(a),
                    u = t("scheduling"),
                    l = r(u),
                    f = t("gl-matrix"),
                    c = r(f),
                    h = function (t, e) {
                        var n = e || {};
                        return t.touches ? (n.x = t.touches[0].pageX, n.y = t.touches[0].pageY) : (n.x = t.clientX, n.y = t.clientY), n
                    },
                    d = function () {
                        function t(e) {
                            var n = this,
                                r = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
                                o = arguments.length <= 2 || void 0 === arguments[2] ? 500 : arguments[2];
                            i(this, t), this._target = e, this._listenerTarget = r, this._mouse = {}, this._preMouse = {}, this.center = c.default.vec3.create(), this._up = c.default.vec3.fromValues(0, 1, 0), this.radius = new s.default(o), this.position = c.default.vec3.fromValues(0, 0, this.radius.value), this.positionOffset = c.default.vec3.create(), this._rx = new s.default(0), this._rx.limit(-Math.PI / 2, Math.PI / 2), this._ry = new s.default(0), this._preRX = 0, this._preRY = 0, this._isLockZoom = !1, this._isLockRotation = !1, this._isInvert = !1, this.sensitivity = 1, this._listenerTarget.addEventListener("mousewheel", function (t) {
                                return n._onWheel(t)
                            }), this._listenerTarget.addEventListener("DOMMouseScroll", function (t) {
                                return n._onWheel(t)
                            }), this._listenerTarget.addEventListener("mousedown", function (t) {
                                return n._onDown(t)
                            }), this._listenerTarget.addEventListener("touchstart", function (t) {
                                return n._onDown(t)
                            }), this._listenerTarget.addEventListener("mousemove", function (t) {
                                return n._onMove(t)
                            }), this._listenerTarget.addEventListener("touchmove", function (t) {
                                return n._onMove(t)
                            }), window.addEventListener("touchend", function () {
                                return n._onUp()
                            }), window.addEventListener("mouseup", function () {
                                return n._onUp()
                            }), l.default.addEF(function () {
                                return n._loop()
                            })
                        }
                        return o(t, [{
                            key: "lock",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                                this._isLockZoom = t, this._isLockRotation = t
                            }
                        }, {
                            key: "lockZoom",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                                this._isLockZoom = t
                            }
                        }, {
                            key: "lockRotation",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                                this._isLockRotation = t
                            }
                        }, {
                            key: "inverseControl",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                                this._isInvert = t
                            }
                        }, {
                            key: "_onDown",
                            value: function (t) {
                                this._isLockRotation || (this._isMouseDown = !0, h(t, this._mouse), h(t, this._preMouse), this._preRX = this._rx.targetValue, this._preRY = this._ry.targetValue)
                            }
                        }, {
                            key: "_onMove",
                            value: function (t) {
                                if (!this._isLockRotation && (h(t, this._mouse), t.touches && t.preventDefault(), this._isMouseDown)) {
                                    var e = -(this._mouse.x - this._preMouse.x);
                                    this._isInvert && (e *= -1), this._ry.value = this._preRY - .01 * e * this.sensitivity;
                                    var n = -(this._mouse.y - this._preMouse.y);
                                    this._isInvert && (n *= -1), this._rx.value = this._preRX - .01 * n * this.sensitivity
                                }
                            }
                        }, {
                            key: "_onUp",
                            value: function () {
                                this._isLockRotation || (this._isMouseDown = !1)
                            }
                        }, {
                            key: "_onWheel",
                            value: function (t) {
                                if (!this._isLockZoom) {
                                    var e = t.wheelDelta,
                                        n = t.detail,
                                        r = 0;
                                    r = n ? e ? e / n / 40 * n > 0 ? 1 : -1 : -n / 3 : e / 120, this.radius.add(2 * -r)
                                }
                            }
                        }, {
                            key: "_loop",
                            value: function () {
                                this._updatePosition(), this._target && this._updateCamera()
                            }
                        }, {
                            key: "_updatePosition",
                            value: function () {
                                this.position[1] = Math.sin(this._rx.value) * this.radius.value;
                                var t = Math.cos(this._rx.value) * this.radius.value;
                                this.position[0] = Math.cos(this._ry.value + .5 * Math.PI) * t, this.position[2] = Math.sin(this._ry.value + .5 * Math.PI) * t, c.default.vec3.add(this.position, this.position, this.positionOffset)
                            }
                        }, {
                            key: "_updateCamera",
                            value: function () {
                                this._target.lookAt(this.position, this.center, this._up)
                            }
                        }, {
                            key: "rx",
                            get: function () {
                                return this._rx
                            }
                        }, {
                            key: "ry",
                            get: function () {
                                return this._ry
                            }
                        }]), t
                    }();
                n.default = d
            }, {
                "./EaseNumber": 37,
                "gl-matrix": 1,
                scheduling: 11
            }],
            41: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = t("gl-matrix"),
                    s = r(a),
                    u = t("./EaseNumber"),
                    l = r(u),
                    f = t("scheduling"),
                    c = r(f),
                    h = function (t, e) {
                        var n = e || {};
                        return t.touches ? (n.x = t.touches[0].pageX, n.y = t.touches[0].pageY) : (n.x = t.clientX, n.y = t.clientY), n
                    },
                    d = function () {
                        function t(e) {
                            var n = this,
                                r = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
                                o = arguments.length <= 2 || void 0 === arguments[2] ? .1 : arguments[2];
                            i(this, t), this._target = e, this._listenerTarget = r, this.matrix = s.default.mat4.create(), this.m = s.default.mat4.create(), this._vZaxis = s.default.vec3.clone([0, 0, 0]), this._zAxis = s.default.vec3.clone([0, 0, 1]), this.preMouse = {
                                x: 0,
                                y: 0
                            }, this.mouse = {
                                x: 0,
                                y: 0
                            }, this._isMouseDown = !1, this._rotation = s.default.quat.create(), this.tempRotation = s.default.quat.create(), this._rotateZMargin = 0, this._offset = .004, this._slerp = -1, this._isLocked = !1, this._diffX = new l.default(0, o), this._diffY = new l.default(0, o), this._listenerTarget.addEventListener("mousedown", function (t) {
                                return n._onDown(t)
                            }), this._listenerTarget.addEventListener("touchstart", function (t) {
                                return n._onDown(t)
                            }), this._listenerTarget.addEventListener("mousemove", function (t) {
                                return n._onMove(t)
                            }), this._listenerTarget.addEventListener("touchmove", function (t) {
                                return n._onMove(t)
                            }), window.addEventListener("touchend", function () {
                                return n._onUp()
                            }), window.addEventListener("mouseup", function () {
                                return n._onUp()
                            }), c.default.addEF(function () {
                                return n._loop()
                            })
                        }
                        return o(t, [{
                            key: "inverseControl",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                                this._isInvert = t
                            }
                        }, {
                            key: "lock",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                                this._isLocked = t
                            }
                        }, {
                            key: "setCameraPos",
                            value: function (t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1];
                                if (this.easing = e, !(this._slerp > 0)) {
                                    var n = s.default.quat.clone(this._rotation);
                                    this._updateRotation(n), this._rotation = s.default.quat.clone(n), this._currDiffX = this.diffX = 0, this._currDiffY = this.diffY = 0, this._isMouseDown = !1, this._isRotateZ = 0, this._targetQuat = s.default.quat.clone(t), this._slerp = 1
                                }
                            }
                        }, {
                            key: "resetQuat",
                            value: function () {
                                this._rotation = s.default.quat.clone([0, 0, 1, 0]), this.tempRotation = s.default.quat.clone([0, 0, 0, 0]), this._targetQuat = void 0, this._slerp = -1
                            }
                        }, {
                            key: "_onDown",
                            value: function (t) {
                                if (!this._isLocked) {
                                    var e = h(t),
                                        n = s.default.quat.clone(this._rotation);
                                    this._updateRotation(n), this._rotation = n, this._isMouseDown = !0, this._isRotateZ = 0, this.preMouse = {
                                        x: e.x,
                                        y: e.y
                                    }, e.y < this._rotateZMargin || e.y > window.innerHeight - this._rotateZMargin ? this._isRotateZ = 1 : (e.x < this._rotateZMargin || e.x > window.innerWidth - this._rotateZMargin) && (this._isRotateZ = 2), this._diffX.setTo(0), this._diffY.setTo(0)
                                }
                            }
                        }, {
                            key: "_onMove",
                            value: function (t) {
                                this._isLocked || h(t, this.mouse)
                            }
                        }, {
                            key: "_onUp",
                            value: function () {
                                this._isLocked || (this._isMouseDown = !1)
                            }
                        }, {
                            key: "_updateRotation",
                            value: function (t) {
                                this._isMouseDown && !this._isLocked && (this._diffX.value = -(this.mouse.x - this.preMouse.x), this._diffY.value = this.mouse.y - this.preMouse.y, this._isInvert && (this._diffX.value = -this._diffX.targetValue, this._diffY.value = -this._diffY.targetValue));
                                var e = void 0,
                                    n = void 0;
                                if (this._isRotateZ > 0) 1 === this._isRotateZ ? (e = -this._diffX.value * this._offset, e *= this.preMouse.y < this._rotateZMargin ? -1 : 1, n = s.default.quat.clone([0, 0, Math.sin(e), Math.cos(e)]), s.default.quat.multiply(n, t, n)) : (e = -this._diffY.value * this._offset, e *= this.preMouse.x < this._rotateZMargin ? 1 : -1, n = s.default.quat.clone([0, 0, Math.sin(e), Math.cos(e)]), s.default.quat.multiply(n, t, n));
                                else {
                                    var r = s.default.vec3.clone([this._diffX.value, this._diffY.value, 0]),
                                        i = s.default.vec3.create();
                                    s.default.vec3.cross(i, r, this._zAxis), s.default.vec3.normalize(i, i), e = s.default.vec3.length(r) * this._offset, n = s.default.quat.clone([Math.sin(e) * i[0], Math.sin(e) * i[1], Math.sin(e) * i[2], Math.cos(e)]), s.default.quat.multiply(t, n, t)
                                }
                            }
                        }, {
                            key: "_loop",
                            value: function () {
                                s.default.mat4.identity(this.m), void 0 === this._targetQuat ? (s.default.quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]), this._updateRotation(this.tempRotation)) : (this._slerp += .1 * (0 - this._slerp), this._slerp < 5e-4 ? (s.default.quat.copy(this._rotation, this._targetQuat), s.default.quat.copy(this.tempRotation, this._targetQuat), this._targetQuat = void 0, this._diffX.setTo(0), this._diffY.setTo(0), this._slerp = -1) : (s.default.quat.set(this.tempRotation, 0, 0, 0, 0), s.default.quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp))), s.default.vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation), s.default.mat4.fromQuat(this.matrix, this.tempRotation)
                            }
                        }, {
                            key: "easing",
                            set: function (t) {
                                this._diffX.easing = t, this._diffY.easing = t
                            },
                            get: function () {
                                return this._diffX.easing
                            }
                        }]), t
                    }();
                n.default = d
            }, {
                "./EaseNumber": 37,
                "gl-matrix": 1,
                scheduling: 11
            }],
            42: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var r = {
                    simpleColorFrag: "// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}",
                    bigTriangleVert: "// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}",
                    generalVert: "// general.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n	vec3 pos      = aVertexPosition * scale;\n	pos           += position;\n	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	vTextureCoord = aTextureCoord;\n}",
                    generalNormalVert: "// generalWithNormal.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	vec3 pos      = aVertexPosition * scale;\n	pos           += position;\n	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	\n	vTextureCoord = aTextureCoord;\n	vNormal       = normalize(uNormalMatrix * aNormal);\n}",
                    copyFrag: "// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}",
                    basicVert: "// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    skyboxVert: "// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n	gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n	vTextureCoord = aTextureCoord;\n	\n	vVertex = aVertexPosition;\n}",
                    skyboxFrag: "// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision highp float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}"
                };
                n.default = r
            }, {}],
            43: [function (t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t) {
                    switch (t) {
                        default:
                        case "linear":
                            return l.Linear.None;
                        case "expIn":
                            return l.Exponential.In;
                        case "expOut":
                            return l.Exponential.Out;
                        case "expInOut":
                            return l.Exponential.InOut;
                        case "cubicIn":
                            return l.Cubic.In;
                        case "cubicOut":
                            return l.Cubic.Out;
                        case "cubicInOut":
                            return l.Cubic.InOut;
                        case "quarticIn":
                            return l.Quartic.In;
                        case "quarticOut":
                            return l.Quartic.Out;
                        case "quarticInOut":
                            return l.Quartic.InOut;
                        case "quinticIn":
                            return l.Quintic.In;
                        case "quinticOut":
                            return l.Quintic.Out;
                        case "quinticInOut":
                            return l.Quintic.InOut;
                        case "sinusoidalIn":
                            return l.Sinusoidal.In;
                        case "sinusoidalOut":
                            return l.Sinusoidal.Out;
                        case "sinusoidalInOut":
                            return l.Sinusoidal.InOut;
                        case "circularIn":
                            return l.Circular.In;
                        case "circularOut":
                            return l.Circular.Out;
                        case "circularInOut":
                            return l.Circular.InOut;
                        case "elasticIn":
                            return l.Elastic.In;
                        case "elasticOut":
                            return l.Elastic.Out;
                        case "elasticInOut":
                            return l.Elastic.InOut;
                        case "backIn":
                            return l.Back.In;
                        case "backOut":
                            return l.Back.Out;
                        case "backInOut":
                            return l.Back.InOut;
                        case "bounceIn":
                            return l.Bounce.In;
                        case "bounceOut":
                            return l.Bounce.Out;
                        case "bounceInOut":
                            return l.Bounce.InOut
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var a = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    s = t("scheduling"),
                    u = r(s),
                    l = {
                        Linear: {
                            None: function (t) {
                                return t
                            }
                        },
                        Quadratic: {
                            In: function (t) {
                                return t * t
                            },
                            Out: function (t) {
                                return t * (2 - t)
                            },
                            InOut: function (t) {
                                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                            }
                        },
                        Cubic: {
                            In: function (t) {
                                return t * t * t
                            },
                            Out: function (t) {
                                return --t * t * t + 1
                            },
                            InOut: function (t) {
                                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                            }
                        },
                        Quartic: {
                            In: function (t) {
                                return t * t * t * t
                            },
                            Out: function (t) {
                                return 1 - --t * t * t * t
                            },
                            InOut: function (t) {
                                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                            }
                        },
                        Quintic: {
                            In: function (t) {
                                return t * t * t * t * t
                            },
                            Out: function (t) {
                                return --t * t * t * t * t + 1
                            },
                            InOut: function (t) {
                                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                            }
                        },
                        Sinusoidal: {
                            In: function (t) {
                                return 1 - Math.cos(t * Math.PI / 2)
                            },
                            Out: function (t) {
                                return Math.sin(t * Math.PI / 2)
                            },
                            InOut: function (t) {
                                return .5 * (1 - Math.cos(Math.PI * t))
                            }
                        },
                        Exponential: {
                            In: function (t) {
                                return 0 === t ? 0 : Math.pow(1024, t - 1)
                            },
                            Out: function (t) {
                                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                            },
                            InOut: function (t) {
                                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
                            }
                        },
                        Circular: {
                            In: function (t) {
                                return 1 - Math.sqrt(1 - t * t)
                            },
                            Out: function (t) {
                                return Math.sqrt(1 - --t * t)
                            },
                            InOut: function (t) {
                                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            }
                        },
                        Elastic: {
                            In: function (t) {
                                var e, n = .1,
                                    r = .4;
                                return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)))
                            },
                            Out: function (t) {
                                var e, n = .1,
                                    r = .4;
                                return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1)
                            },
                            InOut: function (t) {
                                var e, n = .1,
                                    r = .4;
                                return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1)
                            }
                        },
                        Back: {
                            In: function (t) {
                                var e = 1.70158;
                                return t * t * ((e + 1) * t - e)
                            },
                            Out: function (t) {
                                var e = 1.70158;
                                return --t * t * ((e + 1) * t + e) + 1
                            },
                            InOut: function (t) {
                                var e = 2.5949095;
                                return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                            }
                        },
                        Bounce: {
                            In: function (t) {
                                return 1 - l.Bounce.Out(1 - t)
                            },
                            Out: function (t) {
                                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            },
                            InOut: function (t) {
                                return .5 > t ? .5 * l.Bounce.In(2 * t) : .5 * l.Bounce.Out(2 * t - 1) + .5
                            }
                        }
                    },
                    f = function () {
                        function t(e) {
                            var n = this,
                                r = arguments.length <= 1 || void 0 === arguments[1] ? "expOut" : arguments[1],
                                o = arguments.length <= 2 || void 0 === arguments[2] ? .01 : arguments[2];
                            i(this, t), this._value = e, this._startValue = e, this._targetValue = e, this._counter = 1, this.speed = o, this.easing = r, this._needUpdate = !0, this._efIndex = u.default.addEF(function () {
                                return n._update()
                            })
                        }
                        return a(t, [{
                            key: "_update",
                            value: function () {
                                var t = this._counter + this.speed;
                                return t > 1 && (t = 1), this._counter === t ? void(this._needUpdate = !1) : (this._counter = t, void(this._needUpdate = !0))
                            }
                        }, {
                            key: "limit",
                            value: function (t, e) {
                                return t > e ? void this.limit(e, t) : (this._min = t, this._max = e, void this._checkLimit())
                            }
                        }, {
                            key: "_checkLimit",
                            value: function () {
                                void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                u.default.removeEF(this._efIndex)
                            }
                        }, {
                            key: "value",
                            set: function (t) {
                                this._startValue = this._value, this._targetValue = t, this._checkLimit(), this._counter = 0
                            },
                            get: function () {
                                if (this._needUpdate) {
                                    var t = o(this.easing),
                                        e = t(this._counter);
                                    this._value = this._startValue + e * (this._targetValue - this._startValue), this._needUpdate = !1
                                }
                                return this._value
                            }
                        }, {
                            key: "targetValue",
                            get: function () {
                                return this._targetValue
                            }
                        }]), t
                    }();
                n.default = f
            }, {
                scheduling: 11
            }]
        }, {}, [12])(12)
    })
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(94),
        x = r(m),
        _ = n(97),
        M = r(_),
        b = n(99),
        y = r(b),
        g = n(102),
        E = r(g),
        w = n(104),
        T = r(w),
        S = n(107),
        I = r(S),
        P = n(110),
        D = r(P),
        F = n(112),
        L = r(F),
        O = n(114),
        C = r(O),
        R = n(117),
        A = r(R),
        N = Math.PI / 180,
        k = function (t, e) {
            return t + Math.random() * (e - t)
        };
    window.getAsset = function (t) {
        for (var e = 0; e < assets.length; e++)
            if (t === assets[e].id) return assets[e].file
    };
    var z = function (t) {
        function e() {
            (0, s.default)(this, e);
            var t = (0, c.default)(this, (0, o.default)(e).call(this));
            v.GL.enableAlphaBlending(), t.camera.setPerspective(70 * N, v.GL.aspectRatio, .1, 30);
            vec3.fromValues(-3, .37, -2);
            return t.orbitalControl.radius.setTo(5), t.orbitalControl.radius.value = 4.02, t.orbitalControl.center[1] = 1.35, t.orbitalControl.positionOffset[1] = .25, t.orbitalControl.rx.value = .1, t.orbitalControl.rx.limit(.1, .15), t.orbitalControl.lockZoom(!0), t._seasonIndex = 3, t._count = 0, t._hasCreateParticles = !1, t.lightPosition = [.5, 5, 1.5], t.shadowMatrix = mat4.create(), t.cameraLight = new p.default.CameraPerspective, t.cameraLight.setPerspective(90 * N, 1, .5, 30), t.cameraLight.lookAt(t.lightPosition, vec3.fromValues(0, 0, 0), vec3.fromValues(0, 1, 0)), t.startDirection = vec3.fromValues(0, 1, 0), mat4.multiply(t.shadowMatrix, t.cameraLight.projection, t.cameraLight.viewMatrix), window.addEventListener("keydown", function (e) {
                return t._onKey(e)
            }), window.addEventListener("mousedown", function (e) {
                t.orbitalControl.ry.easing = .1
            }), t
        }
        return (0, d.default)(e, t), (0, l.default)(e, [{
            key: "_initTextures",
            value: function () {
                this._textureAOTerrain = new p.default.GLTexture(getAsset("aoTerrain")), this._textureAOTree = new p.default.GLTexture(getAsset("aoTree"));
                var t = new p.default.GLTexture(getAsset("winter")),
                    e = new p.default.GLTexture(getAsset("spring")),
                    n = new p.default.GLTexture(getAsset("summer")),
                    r = new p.default.GLTexture(getAsset("fall"));
                this._textureSeasons = [t, e, n, r];
                var i = params.numParticles,
                    o = {
                        minFilter: v.GL.NEAREST,
                        magFilter: v.GL.NEAREST
                    };
                this._fboCurrentPos = new p.default.FrameBuffer(i, i, o), this._fboTargetPos = new p.default.FrameBuffer(i, i, o), this._fboInitPos = new p.default.FrameBuffer(i, i, o), this._fboCurrentLife = new p.default.FrameBuffer(i, i, o), this._fboTargetLife = new p.default.FrameBuffer(i, i, o), this._fboCurrentVel = new p.default.FrameBuffer(i, i, o), this._fboTargetVel = new p.default.FrameBuffer(i, i, o), this._fboExtra = new p.default.FrameBuffer(i, i, o), this._fboShadowMap = new p.default.FrameBuffer(1024, 1024)
            }
        }, {
            key: "_initViews",
            value: function () {
                this._bCopy = new p.default.BatchCopy, this._bAxis = new p.default.BatchAxis, this._bDots = new p.default.BatchDotsPlane, this._bBall = new p.default.BatchBall, this._bSkybox = new p.default.BatchSkybox, this._vTerrain = new x.default, this._vTree = new M.default, this._vDome = new y.default, this._vAddVel = new E.default, this._vAddLife = new L.default, this._vRender = new I.default, this._vSim = new D.default, this._vShadow = new C.default, this._snow = new A.default(this, this._bCopy)
            }
        }, {
            key: "_initParticles",
            value: function () {
                console.debug("init particles"), this._vSave = new T.default(this._vTree.vertices), v.GL.setMatrices(this.cameraOrtho), this._fboCurrentPos.bind(), this._vSave.render(0), this._fboCurrentPos.unbind(), this._fboExtra.bind(), this._vSave.render(1), this._fboExtra.unbind(), this._fboCurrentLife.bind(), this._vSave.render(2), this._fboCurrentLife.unbind(), this._fboTargetPos.bind(), this._bCopy.draw(this._fboCurrentPos.getTexture()), this._fboTargetPos.unbind(), this._fboInitPos.bind(), this._bCopy.draw(this._fboCurrentPos.getTexture()), this._fboInitPos.unbind(), v.GL.setMatrices(this.camera), this._hasCreateParticles = !0
            }
        }, {
            key: "_onKey",
            value: function (t) {
                if (console.log(t.keyCode), 32 === t.keyCode) {
                    this._seasonIndex++, this._seasonIndex >= 4 && (this._seasonIndex = 0);
                    var e = vec3.fromValues(k(-1, 1), 1, k(-1, 1));
                    vec3.normalize(e, e), this.startDirection = vec3.clone(e), vec3.scale(e, e, params.domeRadius), vec3.scale(this.startDirection, this.startDirection, 2), this._vDome.open(e), this.orbitalControl.ry.easing = .0075, this.orbitalControl.ry.value += Math.PI;
                    var n = 3 == this._seasonIndex ? 0 : 1;
                    params.particleOpacity.value = n
                }
            }
        }, {
            key: "updateFbo",
            value: function () {
                this._fboTargetVel.bind(), v.GL.clear(0, 0, 0, 1), this._vSim.render(this._fboCurrentVel.getTexture(), this._fboCurrentPos.getTexture(), this._fboExtra.getTexture(), this._fboCurrentLife.getTexture()), this._fboTargetVel.unbind(), this._fboTargetPos.bind(), v.GL.clear(0, 0, 0, 1), this._vAddVel.render(this._fboCurrentPos.getTexture(), this._fboTargetVel.getTexture(), this._fboCurrentLife.getTexture(), this._fboInitPos.getTexture()), this._fboTargetPos.unbind(), this._fboTargetLife.bind(), v.GL.clear(0, 0, 0, 1), this._vAddLife.render(this._fboCurrentLife.getTexture()), this._fboTargetLife.unbind();
                var t = this._fboCurrentVel;
                this._fboCurrentVel = this._fboTargetVel, this._fboTargetVel = t;
                var e = this._fboCurrentPos;
                this._fboCurrentPos = this._fboTargetPos, this._fboTargetPos = e;
                var n = this._fboCurrentLife;
                this._fboCurrentLife = this._fboTargetLife, this._fboTargetLife = n
            }
        }, {
            key: "render",
            value: function () {
                params.time += .01, this._count++, this._count % params.skipCount == 0 && (this._count = 0, this.updateFbo()), !this._hasCreateParticles && this._vTree.mesh && (this._initParticles(), document.body.classList.remove("isLoading"));
                var t = this._count / params.skipCount;
                v.GL.clear(0, 0, 0, 0), params.renderEnvironment && (this._vDome.render(this.currentSeasonTexture, this.nextSeasonTexture), this._vTerrain.render(this.currentSeasonTexture, this.nextSeasonTexture, this._textureAOTerrain), this._vTree.render(this.currentSeasonTexture, this.nextSeasonTexture, this._textureAOTree)), params.renderParticles && (this._fboShadowMap.bind(), v.GL.clear(0, 0, 0, 0), v.GL.setMatrices(this.cameraLight), this._vRender.render(this._fboTargetPos.getTexture(), this._fboCurrentPos.getTexture(), t, this._fboExtra.getTexture(), this._fboCurrentLife.getTexture()), this._fboShadowMap.unbind(), v.GL.setMatrices(this.camera), this._vShadow.render(this._fboTargetPos.getTexture(), this._fboCurrentPos.getTexture(), t, this._fboExtra.getTexture(), this._fboCurrentLife.getTexture(), this._fboShadowMap.getDepthTexture(), this.shadowMatrix, this.currentColor, this.nextColor, this.startDirection)), this._snow.render()
            }
        }, {
            key: "resize",
            value: function () {
                v.GL.setSize(window.innerWidth, window.innerHeight), this.camera.setAspectRatio(v.GL.aspectRatio)
            }
        }, {
            key: "color",
            get: function () {
                function t(t, e, n) {
                    return t * (1 - n) + e * n
                }
                return [t(this.currentColor[0], this.nextColor[0], params.offset), t(this.currentColor[1], this.nextColor[1], params.offset), t(this.currentColor[2], this.nextColor[2], params.offset)]
            }
        }, {
            key: "currentColor",
            get: function () {
                return colors[this._seasonIndex]
            }
        }, {
            key: "nextColor",
            get: function () {
                return colors[this.nextIndex]
            }
        }, {
            key: "currentSeasonTexture",
            get: function () {
                return this._textureSeasons[this._seasonIndex]
            }
        }, {
            key: "nextSeasonTexture",
            get: function () {
                return this._textureSeasons[this.nextIndex]
            }
        }, {
            key: "nextIndex",
            get: function () {
                var t = this._seasonIndex + 1;
                return t >= 4 && (t = 0), t
            }
        }]), e
    }(p.default.Scene);
    e.default = z, t.exports = e.default
}, function (t, e, n) {
    t.exports = {
        "default": n(9),
        __esModule: !0
    }
}, function (t, e, n) {
    n(10), t.exports = n(21).Object.getPrototypeOf
}, function (t, e, n) {
    var r = n(11),
        i = n(13);
    n(19)("getPrototypeOf", function () {
        return function (t) {
            return i(r(t))
        }
    })
}, function (t, e, n) {
    var r = n(12);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    var r = n(14),
        i = n(11),
        o = n(15)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(16)("keys"),
        i = n(18);
    t.exports = function (t) {
        return r[t] || (r[t] = i(t))
    }
}, function (t, e, n) {
    var r = n(17),
        i = "__core-js_shared__",
        o = r[i] || (r[i] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e, n) {
    var r = n(20),
        i = n(21),
        o = n(30);
    t.exports = function (t, e) {
        var n = (i.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * o(function () {
            n(1)
        }), "Object", a)
    }
}, function (t, e, n) {
    var r = n(17),
        i = n(21),
        o = n(22),
        a = n(24),
        s = "prototype",
        u = function (t, e, n) {
            var l, f, c, h = t & u.F,
                d = t & u.G,
                v = t & u.S,
                p = t & u.P,
                m = t & u.B,
                x = t & u.W,
                _ = d ? i : i[e] || (i[e] = {}),
                M = _[s],
                b = d ? r : v ? r[e] : (r[e] || {})[s];
            d && (n = e);
            for (l in n) f = !h && b && void 0 !== b[l], f && l in _ || (c = f ? b[l] : n[l], _[l] = d && "function" != typeof b[l] ? n[l] : m && f ? o(c, r) : x && b[l] == c ? function (t) {
                var e = function (e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e[s] = t[s], e
            }(c) : p && "function" == typeof c ? o(Function.call, c) : c, p && ((_.virtual || (_.virtual = {}))[l] = c, t & u.R && M && !M[l] && a(M, l, c)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function (t, e) {
    var n = t.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var r = n(23);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var r = n(25),
        i = n(33);
    t.exports = n(29) ? function (t, e, n) {
        return r.f(t, e, i(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var r = n(26),
        i = n(28),
        o = n(32),
        a = Object.defineProperty;
    e.f = n(29) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
            return a(t, e, n)
        } catch (s) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(27);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    t.exports = !n(29) && !n(30)(function () {
        return 7 != Object.defineProperty(n(31)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    t.exports = !n(30)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, function (t, e, n) {
    var r = n(27),
        i = n(17).document,
        o = r(i) && r(i.createElement);
    t.exports = function (t) {
        return o ? i.createElement(t) : {}
    }
}, function (t, e, n) {
    var r = n(27);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function (t, e) {
    "use strict";
    e.__esModule = !0, e.default = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(36),
        o = r(i);
    e.default = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(t, r.key, r)
            }
        }
        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }()
}, function (t, e, n) {
    t.exports = {
        "default": n(37),
        __esModule: !0
    }
}, function (t, e, n) {
    n(38);
    var r = n(21).Object;
    t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n)
    }
}, function (t, e, n) {
    var r = n(20);
    r(r.S + r.F * !n(29), "Object", {
        defineProperty: n(25).f
    })
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(40),
        o = r(i);
    e.default = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, o.default)(e)) && "function" != typeof e ? t : e
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(41),
        o = r(i),
        a = n(70),
        s = r(a),
        u = "function" == typeof s.default && "symbol" == typeof o.default ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof s.default && t.constructor === s.default ? "symbol" : typeof t
        };
    e.default = "function" == typeof s.default && "symbol" === u(o.default) ? function (t) {
        return "undefined" == typeof t ? "undefined" : u(t)
    } : function (t) {
        return t && "function" == typeof s.default && t.constructor === s.default ? "symbol" : "undefined" == typeof t ? "undefined" : u(t)
    }
}, function (t, e, n) {
    t.exports = {
        "default": n(42),
        __esModule: !0
    }
}, function (t, e, n) {
    n(43), n(65), t.exports = n(69).f("iterator")
}, function (t, e, n) {
    "use strict";
    var r = n(44)(!0);
    n(46)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function (t, e, n) {
    var r = n(45),
        i = n(12);
    t.exports = function (t) {
        return function (e, n) {
            var o, a, s = String(i(e)),
                u = r(n),
                l = s.length;
            return 0 > u || u >= l ? t ? "" : void 0 : (o = s.charCodeAt(u), 55296 > o || o > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function (t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(47),
        i = n(20),
        o = n(48),
        a = n(24),
        s = n(14),
        u = n(49),
        l = n(50),
        f = n(63),
        c = n(13),
        h = n(64)("iterator"),
        d = !([].keys && "next" in [].keys()),
        v = "@@iterator",
        p = "keys",
        m = "values",
        x = function () {
            return this
        };
    t.exports = function (t, e, n, _, M, b, y) {
        l(n, e, _);
        var g, E, w, T = function (t) {
                if (!d && t in D) return D[t];
                switch (t) {
                    case p:
                        return function () {
                            return new n(this, t)
                        };
                    case m:
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            },
            S = e + " Iterator",
            I = M == m,
            P = !1,
            D = t.prototype,
            F = D[h] || D[v] || M && D[M],
            L = F || T(M),
            O = M ? I ? T("entries") : L : void 0,
            C = "Array" == e ? D.entries || F : F;
        if (C && (w = c(C.call(new t)), w !== Object.prototype && (f(w, S, !0),
                r || s(w, h) || a(w, h, x))), I && F && F.name !== m && (P = !0, L = function () {
                return F.call(this)
            }), r && !y || !d && !P && D[h] || a(D, h, L), u[e] = L, u[S] = x, M)
            if (g = {
                    values: I ? L : T(m),
                    keys: b ? L : T(p),
                    entries: O
                }, y)
                for (E in g) E in D || o(D, E, g[E]);
            else i(i.P + i.F * (d || P), e, g);
        return g
    }
}, function (t, e) {
    t.exports = !0
}, function (t, e, n) {
    t.exports = n(24)
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    "use strict";
    var r = n(51),
        i = n(33),
        o = n(63),
        a = {};
    n(24)(a, n(64)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = r(a, {
            next: i(1, n)
        }), o(t, e + " Iterator")
    }
}, function (t, e, n) {
    var r = n(26),
        i = n(52),
        o = n(61),
        a = n(15)("IE_PROTO"),
        s = function () {},
        u = "prototype",
        l = function () {
            var t, e = n(31)("iframe"),
                r = o.length,
                i = ">";
            for (e.style.display = "none", n(62).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + i), t.close(), l = t.F; r--;) delete l[u][o[r]];
            return l()
        };
    t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (s[u] = r(t), n = new s, s[u] = null, n[a] = t) : n = l(), void 0 === e ? n : i(n, e)
    }
}, function (t, e, n) {
    var r = n(25),
        i = n(26),
        o = n(53);
    t.exports = n(29) ? Object.defineProperties : function (t, e) {
        i(t);
        for (var n, a = o(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(54),
        i = n(61);
    t.exports = Object.keys || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(14),
        i = n(55),
        o = n(58)(!1),
        a = n(15)("IE_PROTO");
    t.exports = function (t, e) {
        var n, s = i(t),
            u = 0,
            l = [];
        for (n in s) n != a && r(s, n) && l.push(n);
        for (; e.length > u;) r(s, n = e[u++]) && (~o(l, n) || l.push(n));
        return l
    }
}, function (t, e, n) {
    var r = n(56),
        i = n(12);
    t.exports = function (t) {
        return r(i(t))
    }
}, function (t, e, n) {
    var r = n(57);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var r = n(55),
        i = n(59),
        o = n(60);
    t.exports = function (t) {
        return function (e, n, a) {
            var s, u = r(e),
                l = i(u.length),
                f = o(a, l);
            if (t && n != n) {
                for (; l > f;)
                    if (s = u[f++], s != s) return !0
            } else
                for (; l > f; f++)
                    if ((t || f in u) && u[f] === n) return t || f || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var r = n(45),
        i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    var r = n(45),
        i = Math.max,
        o = Math.min;
    t.exports = function (t, e) {
        return t = r(t), 0 > t ? i(t + e, 0) : o(t, e)
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    t.exports = n(17).document && document.documentElement
}, function (t, e, n) {
    var r = n(25).f,
        i = n(14),
        o = n(64)("toStringTag");
    t.exports = function (t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function (t, e, n) {
    var r = n(16)("wks"),
        i = n(18),
        o = n(17).Symbol,
        a = "function" == typeof o,
        s = t.exports = function (t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
        };
    s.store = r
}, function (t, e, n) {
    n(66);
    for (var r = n(17), i = n(24), o = n(49), a = n(64)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; 5 > u; u++) {
        var l = s[u],
            f = r[l],
            c = f && f.prototype;
        c && !c[a] && i(c, a, l), o[l] = o.Array
    }
}, function (t, e, n) {
    "use strict";
    var r = n(67),
        i = n(68),
        o = n(49),
        a = n(55);
    t.exports = n(46)(Array, "Array", function (t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function (t, e) {
    t.exports = function () {}
}, function (t, e) {
    t.exports = function (t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function (t, e, n) {
    e.f = n(64)
}, function (t, e, n) {
    t.exports = {
        "default": n(71),
        __esModule: !0
    }
}, function (t, e, n) {
    n(72), n(83), n(84), n(85), t.exports = n(21).Symbol
}, function (t, e, n) {
    "use strict";
    var r = n(17),
        i = n(14),
        o = n(29),
        a = n(20),
        s = n(48),
        u = n(73).KEY,
        l = n(30),
        f = n(16),
        c = n(63),
        h = n(18),
        d = n(64),
        v = n(69),
        p = n(74),
        m = n(75),
        x = n(76),
        _ = n(79),
        M = n(26),
        b = n(55),
        y = n(32),
        g = n(33),
        E = n(51),
        w = n(80),
        T = n(82),
        S = n(25),
        I = n(53),
        P = T.f,
        D = S.f,
        F = w.f,
        L = r.Symbol,
        O = r.JSON,
        C = O && O.stringify,
        R = "prototype",
        A = d("_hidden"),
        N = d("toPrimitive"),
        k = {}.propertyIsEnumerable,
        z = f("symbol-registry"),
        j = f("symbols"),
        V = f("op-symbols"),
        G = Object[R],
        B = "function" == typeof L,
        U = r.QObject,
        X = !U || !U[R] || !U[R].findChild,
        Y = o && l(function () {
            return 7 != E(D({}, "a", {
                get: function () {
                    return D(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function (t, e, n) {
            var r = P(G, e);
            r && delete G[e], D(t, e, n), r && t !== G && D(G, e, r)
        } : D,
        q = function (t) {
            var e = j[t] = E(L[R]);
            return e._k = t, e
        },
        H = B && "symbol" == typeof L.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof L
        },
        W = function (t, e, n) {
            return t === G && W(V, e, n), M(t), e = y(e, !0), M(n), i(j, e) ? (n.enumerable ? (i(t, A) && t[A][e] && (t[A][e] = !1), n = E(n, {
                enumerable: g(0, !1)
            })) : (i(t, A) || D(t, A, g(1, {})), t[A][e] = !0), Y(t, e, n)) : D(t, e, n)
        },
        K = function (t, e) {
            M(t);
            for (var n, r = x(e = b(e)), i = 0, o = r.length; o > i;) W(t, n = r[i++], e[n]);
            return t
        },
        Z = function (t, e) {
            return void 0 === e ? E(t) : K(E(t), e)
        },
        Q = function (t) {
            var e = k.call(this, t = y(t, !0));
            return this === G && i(j, t) && !i(V, t) ? !1 : e || !i(this, t) || !i(j, t) || i(this, A) && this[A][t] ? e : !0
        },
        J = function (t, e) {
            if (t = b(t), e = y(e, !0), t !== G || !i(j, e) || i(V, e)) {
                var n = P(t, e);
                return !n || !i(j, e) || i(t, A) && t[A][e] || (n.enumerable = !0), n
            }
        },
        $ = function (t) {
            for (var e, n = F(b(t)), r = [], o = 0; n.length > o;) i(j, e = n[o++]) || e == A || e == u || r.push(e);
            return r
        },
        tt = function (t) {
            for (var e, n = t === G, r = F(n ? V : b(t)), o = [], a = 0; r.length > a;) i(j, e = r[a++]) && (n ? i(G, e) : !0) && o.push(j[e]);
            return o
        };
    B || (L = function () {
        if (this instanceof L) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function (n) {
                this === G && e.call(V, n), i(this, A) && i(this[A], t) && (this[A][t] = !1), Y(this, t, g(1, n))
            };
        return o && X && Y(G, t, {
            configurable: !0,
            set: e
        }), q(t)
    }, s(L[R], "toString", function () {
        return this._k
    }), T.f = J, S.f = W, n(81).f = w.f = $, n(78).f = Q, n(77).f = tt, o && !n(47) && s(G, "propertyIsEnumerable", Q, !0), v.f = function (t) {
        return q(d(t))
    }), a(a.G + a.W + a.F * !B, {
        Symbol: L
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
    for (var et = I(d.store), nt = 0; et.length > nt;) p(et[nt++]);
    a(a.S + a.F * !B, "Symbol", {
        "for": function (t) {
            return i(z, t += "") ? z[t] : z[t] = L(t)
        },
        keyFor: function (t) {
            if (H(t)) return m(z, t);
            throw TypeError(t + " is not a symbol!")
        },
        useSetter: function () {
            X = !0
        },
        useSimple: function () {
            X = !1
        }
    }), a(a.S + a.F * !B, "Object", {
        create: Z,
        defineProperty: W,
        defineProperties: K,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: tt
    }), O && a(a.S + a.F * (!B || l(function () {
        var t = L();
        return "[null]" != C([t]) || "{}" != C({
            a: t
        }) || "{}" != C(Object(t))
    })), "JSON", {
        stringify: function (t) {
            if (void 0 !== t && !H(t)) {
                for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                return e = r[1], "function" == typeof e && (n = e), !n && _(e) || (e = function (t, e) {
                    return n && (e = n.call(this, t, e)), H(e) ? void 0 : e
                }), r[1] = e, C.apply(O, r)
            }
        }
    }), L[R][N] || n(24)(L[R], N, L[R].valueOf), c(L, "Symbol"), c(Math, "Math", !0), c(r.JSON, "JSON", !0)
}, function (t, e, n) {
    var r = n(18)("meta"),
        i = n(27),
        o = n(14),
        a = n(25).f,
        s = 0,
        u = Object.isExtensible || function () {
            return !0
        },
        l = !n(30)(function () {
            return u(Object.preventExtensions({}))
        }),
        f = function (t) {
            a(t, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        c = function (t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, r)) {
                if (!u(t)) return "F";
                if (!e) return "E";
                f(t)
            }
            return t[r].i
        },
        h = function (t, e) {
            if (!o(t, r)) {
                if (!u(t)) return !0;
                if (!e) return !1;
                f(t)
            }
            return t[r].w
        },
        d = function (t) {
            return l && v.NEED && u(t) && !o(t, r) && f(t), t
        },
        v = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: c,
            getWeak: h,
            onFreeze: d
        }
}, function (t, e, n) {
    var r = n(17),
        i = n(21),
        o = n(47),
        a = n(69),
        s = n(25).f;
    t.exports = function (t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function (t, e, n) {
    var r = n(53),
        i = n(55);
    t.exports = function (t, e) {
        for (var n, o = i(t), a = r(o), s = a.length, u = 0; s > u;)
            if (o[n = a[u++]] === e) return n
    }
}, function (t, e, n) {
    var r = n(53),
        i = n(77),
        o = n(78);
    t.exports = function (t) {
        var e = r(t),
            n = i.f;
        if (n)
            for (var a, s = n(t), u = o.f, l = 0; s.length > l;) u.call(t, a = s[l++]) && e.push(a);
        return e
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    var r = n(57);
    t.exports = Array.isArray || function (t) {
        return "Array" == r(t)
    }
}, function (t, e, n) {
    var r = n(55),
        i = n(81).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function (t) {
            try {
                return i(t)
            } catch (e) {
                return a.slice()
            }
        };
    t.exports.f = function (t) {
        return a && "[object Window]" == o.call(t) ? s(t) : i(r(t))
    }
}, function (t, e, n) {
    var r = n(54),
        i = n(61).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(78),
        i = n(33),
        o = n(55),
        a = n(32),
        s = n(14),
        u = n(28),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(29) ? l : function (t, e) {
        if (t = o(t), e = a(e, !0), u) try {
            return l(t, e)
        } catch (n) {}
        return s(t, e) ? i(!r.f.call(t, e), t[e]) : void 0
    }
}, function (t, e) {}, function (t, e, n) {
    n(74)("asyncIterator")
}, function (t, e, n) {
    n(74)("observable")
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(87),
        o = r(i),
        a = n(91),
        s = r(a),
        u = n(40),
        l = r(u);
    e.default = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, l.default)(e)));
        t.prototype = (0, s.default)(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (o.default ? (0, o.default)(t, e) : t.__proto__ = e)
    }
}, function (t, e, n) {
    t.exports = {
        "default": n(88),
        __esModule: !0
    }
}, function (t, e, n) {
    n(89), t.exports = n(21).Object.setPrototypeOf
}, function (t, e, n) {
    var r = n(20);
    r(r.S, "Object", {
        setPrototypeOf: n(90).set
    })
}, function (t, e, n) {
    var r = n(27),
        i = n(26),
        o = function (t, e) {
            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
            try {
                r = n(22)(Function.call, n(82).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
            } catch (i) {
                e = !0
            }
            return function (t, n) {
                return o(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: o
    }
}, function (t, e, n) {
    t.exports = {
        "default": n(92),
        __esModule: !0
    }
}, function (t, e, n) {
    n(93);
    var r = n(21).Object;
    t.exports = function (t, e) {
        return r.create(t, e)
    }
}, function (t, e, n) {
    var r = n(20);
    r(r.S, "Object", {
        create: n(51)
    })
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = p.default.GL,
        x = n(95),
        _ = n(96),
        M = function (t) {
            function e() {
                (0, s.default)(this, e);
                var t = (0, c.default)(this, (0, o.default)(e).call(this, x, _));
                return t.roughness = .9, t.specular = 0, t.metallic = 0, t.baseColor = [1, 1, 1], t.position = [0, 0, 0], t.scale = [2, 1, 2], t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    var t = this;
                    this._objLoader = new p.default.ObjLoader, this._objLoader.load("./assets/terrain.obj", function (e) {
                        return t._onObjLoaded(e)
                    }, !1), this._textureNoise = new p.default.GLTexture(getAsset("noise"), !1, {
                        minFilter: m.NEAREST,
                        magFilter: m.NEAREST
                    })
                }
            }, {
                key: "_onObjLoaded",
                value: function (t) {
                    this.mesh = t, this.shader.bind(), this.shader.uniform("uAoMap", "uniform1i", 0), this.shader.uniform("texture", "uniform1i", 1), this.shader.uniform("textureNext", "uniform1i", 2), this.shader.uniform("textureNoise", "uniform1i", 3), this.shader.uniform("uBaseColor", "uniform3fv", this.baseColor), this.shader.uniform("uPosition", "vec3", this.position), this.shader.uniform("uScale", "vec3", this.scale), this.shader.uniform("uExposure", "uniform1f", params.exposure), this.shader.uniform("uGamma", "uniform1f", params.gamma), this.noiseScale = 5, this.shader.uniform("noiseScale", "float", this.noiseScale)
                }
            }, {
                key: "render",
                value: function (t, e, n) {
                    this.mesh && (this.shader.bind(), n.bind(0), t.bind(1), e.bind(2), this._textureNoise.bind(3), this.shader.uniform("offset", "float", params.offset), this.shader.uniform("colorOffset", "float", 1 - params.particleOpacity.value), m.draw(this.mesh))
                }
            }]), e
        }(p.default.View);
    e.default = M, t.exports = e.default
}, function (t, e) {
    t.exports = "// reflection.vert\n\n#define SHADER_NAME PBR_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\nuniform vec3 uPosition;\nuniform vec3 uScale;\n\nvarying vec2 vTextureCoord;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\n\nvoid main(void) {\n	vec3 position 			= aVertexPosition * uScale + uPosition;\n	vec4 worldSpacePosition	= uModelMatrix * vec4(position, 1.0);\n    vec4 viewSpacePosition	= uViewMatrix * worldSpacePosition;\n	\n    vNormal					= uNormalMatrix * aNormal;\n    vPosition				= viewSpacePosition.xyz;\n	vWsPosition				= worldSpacePosition.xyz;\n	\n	vec4 eyeDirViewSpace	= viewSpacePosition - vec4( 0, 0, 0, 1 );\n	vEyePosition			= -vec3( uModelViewMatrixInverse * eyeDirViewSpace.xyz );\n	vWsNormal				= normalize( uModelViewMatrixInverse * vNormal );\n	\n    gl_Position				= uProjectionMatrix * viewSpacePosition;\n\n	vTextureCoord			= aTextureCoord;\n}\n"
}, function (t, e) {
    t.exports = "// terrain.frag\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D 	texture;\nuniform sampler2D 	textureNext;\nuniform sampler2D 	textureNoise;\nuniform sampler2D 	uAoMap;\nuniform float 		offset;\nuniform vec3 		uBaseColor;\nuniform mat3 		uNormalMatrix;\nuniform float 		noiseScale;\nuniform float 		colorOffset;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\nconst float PI = 3.141592657;\nconst float TwoPI = PI * 2.0;\n\n\nvec2 envMapEquirect(vec3 wcNormal, float flipEnvMap) {\n  float phi = acos(-wcNormal.y);\n  float theta = atan(flipEnvMap * wcNormal.x, wcNormal.z) + PI;\n  return vec2(theta / TwoPI, phi / PI);\n}\n\nvec2 envMapEquirect(vec3 wcNormal) {\n    return envMapEquirect(wcNormal, -1.0);\n}\n\n\nconst vec3 light = vec3(1.0, 0.005, 1.0);\n\nfloat diffuse(vec3 N, vec3 L) {\n	return max(dot(N, normalize(L)), 0.0);\n}\n\nvoid main(void) {\n	vec3 baseColor = texture2D(uAoMap, vTextureCoord).rgb * 1.0 * uBaseColor;\n\n	vec3 noise = texture2D(textureNoise, vTextureCoord * 10.0).rgb * 2.0 - 1.0;\n	vec3 N = normalize(vWsNormal + noise * noiseScale);\n\n	vec2 uv = envMapEquirect(N);\n	vec3 colorNow = texture2D(texture, uv).rgb;\n	vec3 colorNext = texture2D(textureNext, uv).rgb;\n\n	vec3 color = mix(colorNow, colorNext, offset);\n	float d = diffuse(uNormalMatrix * vWsNormal, light);\n	baseColor *= d;\n	baseColor += (colorOffset * .5);\n	baseColor += color * .75;\n\n    gl_FragColor = vec4(baseColor, 1.0);\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = p.default.GL,
        x = n(95),
        _ = n(98),
        M = function (t) {
            function e() {
                (0, s.default)(this, e);
                var t = (0, c.default)(this, (0, o.default)(e).call(this, x, _));
                return t.roughness = .9, t.specular = 0, t.metallic = 0, t.baseColor = [50 / 255, 25 / 255, 25 / 255], t.position = [0, 0, 0], t.scale = [1, 1, 1], t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    var t = this;
                    this._objLoader = new p.default.ObjLoader, this._objLoader.load("./assets/tree.obj", function (e) {
                        return t._onObjLoaded(e)
                    }, !1)
                }
            }, {
                key: "_onObjLoaded",
                value: function (t) {
                    this.mesh = t;
                    var e = .65;
                    this._vertices = [];
                    for (var n = 0; n < this.mesh.vertices.length; n++) {
                        var r = this.mesh.vertices[n];
                        r[1] > e && this._vertices.push(r)
                    }
                    console.log(this._vertices.length, this.mesh.vertices.length), this.shader.bind(), this.shader.uniform("uAoMap", "uniform1i", 0), this.shader.uniform("texture", "uniform1i", 1), this.shader.uniform("textureNext", "uniform1i", 2), this.shader.uniform("uBaseColor", "uniform3fv", this.baseColor), this.shader.uniform("uPosition", "vec3", this.position), this.shader.uniform("uScale", "vec3", this.scale), this.shader.uniform("uExposure", "uniform1f", params.exposure), this.shader.uniform("uGamma", "uniform1f", params.gamma)
                }
            }, {
                key: "render",
                value: function (t, e, n) {
                    this.mesh && (this.shader.bind(), n.bind(0), t.bind(1), e.bind(2), this.shader.uniform("offset", "float", params.offset), m.draw(this.mesh))
                }
            }, {
                key: "vertices",
                get: function () {
                    return this._vertices
                }
            }]), e
        }(p.default.View);
    e.default = M, t.exports = e.default
}, function (t, e) {
    t.exports = "// envLight.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D 	texture;\nuniform sampler2D 	textureNext;\nuniform sampler2D 	uAoMap;\nuniform float 		offset;\nuniform vec3 		uBaseColor;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\nconst float PI = 3.141592657;\nconst float TwoPI = PI * 2.0;\n\n\nvec2 envMapEquirect(vec3 wcNormal, float flipEnvMap) {\n  //I assume envMap texture has been flipped the WebGL way (pixel 0,0 is a the bottom)\n  //therefore we flip wcNorma.y as acos(1) = 0\n  float phi = acos(-wcNormal.y);\n  float theta = atan(flipEnvMap * wcNormal.x, wcNormal.z) + PI;\n  return vec2(theta / TwoPI, phi / PI);\n}\n\nvec2 envMapEquirect(vec3 wcNormal) {\n    //-1.0 for left handed coordinate system oriented texture (usual case)\n    return envMapEquirect(wcNormal, -1.0);\n}\n\nvoid main(void) {\n	vec3 baseColor = texture2D(uAoMap, vTextureCoord).rgb * 1.0 * uBaseColor;\n\n	vec2 uv = envMapEquirect(vWsNormal);\n	vec3 colorNow = texture2D(texture, uv).rgb;\n	vec3 colorNext = texture2D(textureNext, uv).rgb;\n\n	vec3 color = mix(colorNow, colorNext, offset);\n	baseColor += color * .5;\n\n    gl_FragColor = vec4(baseColor, 1.0);\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = p.default.GL,
        x = n(100),
        _ = n(101),
        M = function (t) {
            function e() {
                (0, s.default)(this, e);
                var t = (0, c.default)(this, (0, o.default)(e).call(this, x, _));
                return t.time = Math.random(), t.waveFront = new p.default.EaseNumber(2 * params.domeRadius + 3, .0075), t.waveLength = 1, t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    function t(t, e) {
                        var n = [0, 0, 0],
                            r = t / l * Math.PI * 2,
                            i = e / l * Math.PI - Math.PI / 2;
                        n[1] = Math.sin(i) * params.domeRadius;
                        var o = Math.cos(i) * params.domeRadius;
                        return n[0] = Math.cos(r) * o, n[2] = Math.sin(r) * o, n
                    }

                    function e(t, e, n) {
                        var r = vec3.clone(t),
                            i = vec3.clone(e),
                            o = vec3.clone(n),
                            a = vec3.create(),
                            s = vec3.create(),
                            u = vec3.create();
                        return vec3.sub(a, i, r), vec3.sub(s, o, r), vec3.cross(u, s, a), vec3.normalize(u, u), u
                    }

                    function n(t, e) {
                        return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2, (t[2] + e[2]) / 2]
                    }
                    for (var r = [], i = [], o = [], a = [], s = [], u = 0, l = 60, f = 1 / l, c = 0; l > c; c++)
                        for (var h = 0; l > h; h++) {
                            var d = t(h, c),
                                v = t(h + 1, c),
                                x = t(h + 1, c + 1),
                                _ = t(h, c + 1),
                                M = e(d, v, _),
                                b = n(d, x);
                            r.push(d), r.push(v), r.push(x), r.push(_), a.push(M), a.push(M), a.push(M), a.push(M), s.push(b), s.push(b), s.push(b), s.push(b), i.push([h / l, c / l]), i.push([h / l + f, c / l]), i.push([h / l + f, c / l + f]), i.push([h / l, c / l + f]), o.push(4 * u + 0), o.push(4 * u + 1), o.push(4 * u + 2), o.push(4 * u + 0), o.push(4 * u + 2), o.push(4 * u + 3), u++
                        }
                    this.mesh = new p.default.Mesh(m.TRIANGLES), this.mesh.bufferVertex(r), this.mesh.bufferTexCoords(i), this.mesh.bufferIndices(o), this.mesh.bufferNormal(a), this.mesh.bufferData(s, "aCenter", 3), this.startPosition = [0, params.domeRadius, -1], this.shader.bind(), this.shader.uniform("startPosition", "vec3", this.startPosition), this.shader.uniform("textureCurr", "uniform1i", 0), this.shader.uniform("textureNext", "uniform1i", 1)
                }
            }, {
                key: "open",
                value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? [1, params.domeRadius, 0] : arguments[0];
                    console.log("Open"), this.time = Math.random(), this.startPosition = t, this.waveFront.setTo(-1), this.waveFront.value = 2 * params.domeRadius + 3, this.shader.bind(), this.shader.uniform("startPosition", "vec3", this.startPosition)
                }
            }, {
                key: "render",
                value: function (t, e) {
                    var n = this.waveFront.value / params.domeRadius / 2;
                    0 > n && (n = 0), n > 1 && (n = 1), params.offset = n, this.shader.bind(), this.shader.uniform("time", "float", this.time), this.shader.uniform("waveFront", "float", this.waveFront.value), this.shader.uniform("waveLength", "float", this.waveLength), t.bind(0), e.bind(1), m.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = M, t.exports = e.default
}, function (t, e) {
    t.exports = "// dome.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\nattribute vec3 aCenter;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float waveFront;\nuniform float waveLength;\nuniform vec3 startPosition;\nuniform float time;\n\nvarying vec2 vTextureCoord;\nvarying float vDiffuse;\nvarying vec3 vPosition;\nvarying vec3 vCenter;\n\nconst float PI = 3.141592657;\n\n\nvec4 permute(vec4 x) {  return mod(((x*34.0)+1.0)*x, 289.0);    }\nvec4 taylorInvSqrt(vec4 r) {    return 1.79284291400159 - 0.85373472095314 * r; }\n\nfloat snoise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 = v - i + dot(i, C.xxx) ;\n    \n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n    \n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n    \n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n    \n    float n_ = 1.0/7.0;\n    vec3  ns = n_ * D.wyz - D.xzx;\n    \n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n    \n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );\n    \n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n    \n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n    \n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n    \n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n    \n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n    \n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    \n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise(float x, float y, float z){\n    return snoise(vec3(x, y, z));\n}\n\nmat4 rotationMatrix(vec3 axis, float angle)\n{\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n	mat4 m = rotationMatrix(axis, angle);\n	return (m * vec4(v, 1.0)).xyz;\n}\n\nfloat exponentialOut(float t) {\n    return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\n}\n\nvoid main(void) {\n\n	vec3 relativePos = aVertexPosition - aCenter;\n\n	vec3 axis = cross(startPosition, aNormal);\n	float distToStartPoint = distance(aCenter, startPosition);\n	const float posOffset = 0.2;\n	float distNoise = snoise(aVertexPosition * posOffset + time);\n	distToStartPoint += distNoise * 0.5; \n\n\n	float distToWaveFront = distance(distToStartPoint, waveFront);\n	float angle = 0.0;\n	if(distToWaveFront < waveLength) {\n		angle = (1.0 - exponentialOut(distToWaveFront/waveLength)) * PI;\n	}\n\n\n	relativePos = rotate(relativePos, axis, angle);\n\n	vec3 finalPosition = aCenter + relativePos;\n\n\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(finalPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vec3 N = normalize(aVertexPosition);\n    N = rotate(N, axis, angle);\n    vec3 L = normalize(aCenter);\n    \n    vDiffuse = max(dot(N, L), 0.0);\n    // vDiffuse = dot(N, L) * .5 + .5;\n\n    vPosition = aVertexPosition;\n    vCenter = aCenter;\n}"
}, function (t, e) {
    t.exports = "// dome.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\n\nuniform float waveFront;\nuniform float waveLength;\nuniform vec3 startPosition;\nuniform float time;\n\nvarying float vDiffuse;\nvarying vec3 vPosition;\nvarying vec3 vCenter;\n\nconst float PI = 3.141592657;\n\n\nvec4 permute(vec4 x) {  return mod(((x*34.0)+1.0)*x, 289.0);    }\nvec4 taylorInvSqrt(vec4 r) {    return 1.79284291400159 - 0.85373472095314 * r; }\n\nfloat snoise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 = v - i + dot(i, C.xxx) ;\n    \n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n    \n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n    \n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n    \n    float n_ = 1.0/7.0;\n    vec3  ns = n_ * D.wyz - D.xzx;\n    \n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n    \n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );\n    \n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n    \n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n    \n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n    \n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n    \n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n    \n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    \n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise(float x, float y, float z){\n    return snoise(vec3(x, y, z));\n}\n\nvoid main(void) {\n	float distToStartPoint = distance(vCenter, startPosition);\n	const float posOffset = 0.2;\n	float distNoise = snoise(vPosition * posOffset + time);\n	distToStartPoint += distNoise * 0.5; \n	float distToWaveFront = distance(distToStartPoint, waveFront);\n\n	bool hasFlipped = false;\n	if(distToStartPoint < waveFront) {\n		hasFlipped = true;\n	} \n\n	if(!hasFlipped) {\n		gl_FragColor = texture2D(textureCurr, vTextureCoord);	\n	} else {\n		gl_FragColor = texture2D(textureNext, vTextureCoord);\n	}\n    \n    gl_FragColor.rgb *= vDiffuse;\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(103),
        x = p.default.GL,
        _ = function (t) {
            function e() {
                return (0, s.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, p.default.ShaderLibs.bigTriangleVert, m))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    this.mesh = p.default.Geom.bigTriangle()
                }
            }, {
                key: "render",
                value: function (t, e, n, r) {
                    this.shader.bind(), this.shader.uniform("texturePos", "uniform1i", 0), t.bind(0), this.shader.uniform("textureVel", "uniform1i", 1), e.bind(1), this.shader.uniform("textureLife", "uniform1i", 2), n.bind(2), this.shader.uniform("textureInit", "uniform1i", 3), r.bind(3), this.shader.uniform("flyThreshold", "float", params.flyThreshold), x.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = _, t.exports = e.default
}, function (t, e) {
    t.exports = "// addvel.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texturePos;\nuniform sampler2D textureVel;\nuniform sampler2D textureLife;\nuniform sampler2D textureInit;\nuniform float flyThreshold;\n\nvoid main(void) {\n	vec3 pos = texture2D(texturePos, vTextureCoord).rgb;\n	vec3 init = texture2D(textureInit, vTextureCoord).rgb;\n	vec3 vel = texture2D(textureVel, vTextureCoord).rgb;\n	vec3 life = texture2D(textureLife, vTextureCoord).rgb;\n\n    gl_FragColor = vec4(pos + vel, 1.0);\n    if(life.r < flyThreshold) {\n    	gl_FragColor = vec4(init, 1.0);\n    }\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(105),
        x = n(106),
        _ = p.default.GL,
        M = function (t, e) {
            return t + Math.random() * (e - t)
        },
        b = function (t) {
            function e(t) {
                (0, s.default)(this, e);
                var n = (0, c.default)(this, (0, o.default)(e).call(this, m, x));
                return n._vertices = t, n._initMesh(), n
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_initMesh",
                value: function () {
                    function t() {
                        var t = Math.floor(Math.random() * e.length),
                            r = e[t];
                        return r[0] += M(-n, n), r[1] += M(-n, n), r[2] += M(-n, n), r
                    }
                    for (var e = this._vertices, n = .025, r = [], i = [], o = [], a = [], s = [], u = 0, l = params.numParticles, f = void 0, c = void 0, h = 0; l > h; h++)
                        for (var d = 0; l > d; d++) r.push(t()), f = d / l * 2 - 1 + .5 / l, c = h / l * 2 - 1 + .5 / l, a.push([Math.random(), Math.random(), Math.random()]), s.push([Math.random(), .25 * M(.005, .01), Math.random()]), i.push([f, c]), o.push(u), u++;
                    this.mesh = new p.default.Mesh(_.POINTS), this.mesh.bufferVertex(r), this.mesh.bufferTexCoords(i), this.mesh.bufferIndices(o), this.meshExtra = new p.default.Mesh(_.POINTS), this.meshExtra.bufferVertex(a), this.meshExtra.bufferTexCoords(i), this.meshExtra.bufferIndices(o), this.meshLife = new p.default.Mesh(_.POINTS), this.meshLife.bufferVertex(s), this.meshLife.bufferTexCoords(i), this.meshLife.bufferIndices(o)
                }
            }, {
                key: "render",
                value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    this.shader.bind(), 0 === t ? _.draw(this.mesh) : 1 === t ? _.draw(this.meshExtra) : 2 === t && _.draw(this.meshLife)
                }
            }]), e
        }(p.default.View);
    e.default = b, t.exports = e.default
}, function (t, e) {
    t.exports = "// save.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vColor;\n\nvoid main(void) {\n	vColor      = aVertexPosition;\n	vec3 pos    = vec3(aTextureCoord, 0.0);\n	gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\n    gl_PointSize = 1.0;\n}"
}, function (t, e) {
    t.exports = "// save.frag\n\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vColor;\n\nvoid main(void) {\n    gl_FragColor = vec4(vColor, 1.0);\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(108),
        x = n(109),
        _ = p.default.GL,
        M = function (t) {
            function e() {
                return (0, s.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, m, x))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    for (var t = [], e = [], n = 0, r = params.numParticles, i = void 0, o = void 0, a = 0; r > a; a++)
                        for (var s = 0; r > s; s++) i = s / r, o = a / r, t.push([i, o, 0]), e.push(n), n++;
                    this.mesh = new p.default.Mesh(_.POINTS), this.mesh.bufferVertex(t), this.mesh.bufferIndices(e),
                        this.mid = .93, this.range = .05, this.shader.bind(), this.shader.uniform("textureCurr", "uniform1i", 0), this.shader.uniform("textureNext", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("textureLife", "uniform1i", 3), this.shader.uniform("mid", "float", this.mid), this.shader.uniform("range", "float", this.range)
                }
            }, {
                key: "render",
                value: function (t, e, n, r, i) {
                    this.shader.bind(), t.bind(0), e.bind(1), r.bind(2), i.bind(3), this.shader.uniform("percent", "float", n), this.shader.uniform("time", "float", params.time), _.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = M, t.exports = e.default
}, function (t, e) {
    t.exports = "// render.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform sampler2D textureLife;\nuniform float percent;\nuniform float time;\nuniform float mid;\nuniform float range;\n\nvarying vec4 vColor;\nvarying vec3 vExtra;\n\nvoid main(void) {\n	vec2 uv      = aVertexPosition.xy;\n	vec3 posCurr = texture2D(textureCurr, uv).rgb;\n	vec3 posNext = texture2D(textureNext, uv).rgb;\n	vec3 pos     = mix(posCurr, posNext, percent);\n	vec3 extra   = texture2D(textureExtra, uv).rgb;\n	float life   = texture2D(textureLife, uv).r;\n	vec4 V  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	gl_Position = V;\n	\n	float d      = V.z/V.w;\n\n	d = 1.0-smoothstep(mid-range, mid+range, d);\n\n	\n	\n	float opacity;\n	if(life > .5) {\n		opacity = 1.0-smoothstep(0.95, 1.0, life);\n	} else {\n		opacity = smoothstep(0.1, 0.2, life);\n	}\n\n	d *= opacity;\n	// gl_PointSize = d * 2.0 * (.5 + extra.r * 1.5);\n	gl_PointSize = 1.0;\n\n	vColor       = vec4(vec3(mix(d, 1.0, .8)), opacity);\n	vExtra 		 = extra;\n}"
}, function (t, e) {
    t.exports = "precision highp float;\n#define GLSLIFY 1\nvarying vec4 vColor;\nvarying vec3 vExtra;\n\nvoid main(void) {\n	if(distance(gl_PointCoord, vec2(.5)) > .5) discard;\n	if(vColor.a <= 0.0) discard;\n\n	vec4 color = vColor;\n	// color.rgb *= mix(vExtra.g, 1.0, .75);\n    gl_FragColor = color;\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = p.default.GL,
        x = n(111),
        _ = function (t) {
            function e() {
                (0, s.default)(this, e);
                var t = (0, c.default)(this, (0, o.default)(e).call(this, p.default.ShaderLibs.bigTriangleVert, x));
                return t.time = 255 * Math.random(), t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    this.mesh = p.default.Geom.bigTriangle(), this.shader.bind(), this.shader.uniform("textureVel", "uniform1i", 0), this.shader.uniform("texturePos", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("textureLife", "uniform1i", 3)
                }
            }, {
                key: "render",
                value: function (t, e, n, r) {
                    this.time += .01, this.shader.bind(), this.shader.uniform("time", "float", this.time), this.shader.uniform("maxRadius", "float", params.maxRadius), this.shader.uniform("flyThreshold", "float", params.flyThreshold), t.bind(0), e.bind(1), n.bind(2), r.bind(3), m.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = _, t.exports = e.default
}, function (t, e) {
    t.exports = "// sim.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D textureVel;\nuniform sampler2D texturePos;\nuniform sampler2D textureExtra;\nuniform sampler2D textureLife;\nuniform float time;\nuniform float maxRadius;\nuniform float flyThreshold;\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 permute(vec4 x) {  return mod289(((x*34.0)+1.0)*x);  }\n\nvec4 taylorInvSqrt(vec4 r) {  return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v) { \n	const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n	vec3 i  = floor(v + dot(v, C.yyy) );\n	vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n	vec3 g = step(x0.yzx, x0.xyz);\n	vec3 l = 1.0 - g;\n	vec3 i1 = min( g.xyz, l.zxy );\n	vec3 i2 = max( g.xyz, l.zxy );\n\n	vec3 x1 = x0 - i1 + C.xxx;\n	vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n	vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n	i = mod289(i); \n	vec4 p = permute( permute( permute( \n						 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n					 + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n					 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n	float n_ = 0.142857142857; // 1.0/7.0\n	vec3  ns = n_ * D.wyz - D.xzx;\n\n	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n	vec4 x_ = floor(j * ns.z);\n	vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n	vec4 x = x_ *ns.x + ns.yyyy;\n	vec4 y = y_ *ns.x + ns.yyyy;\n	vec4 h = 1.0 - abs(x) - abs(y);\n\n	vec4 b0 = vec4( x.xy, y.xy );\n	vec4 b1 = vec4( x.zw, y.zw );\n\n	vec4 s0 = floor(b0)*2.0 + 1.0;\n	vec4 s1 = floor(b1)*2.0 + 1.0;\n	vec4 sh = -step(h, vec4(0.0));\n\n	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n	vec3 p0 = vec3(a0.xy,h.x);\n	vec3 p1 = vec3(a0.zw,h.y);\n	vec3 p2 = vec3(a1.xy,h.z);\n	vec3 p3 = vec3(a1.zw,h.w);\n\n	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n	p0 *= norm.x;\n	p1 *= norm.y;\n	p2 *= norm.z;\n	p3 *= norm.w;\n\n	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n	m = m * m;\n	return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n																dot(p2,x2), dot(p3,x3) ) );\n}\n\nvec3 snoiseVec3( vec3 x ){\n\n	float s  = snoise(vec3( x ));\n	float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n	float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n	vec3 c = vec3( s , s1 , s2 );\n	return c;\n\n}\n\n\nvec3 curlNoise( vec3 p ){\n	\n	const float e = .1;\n	vec3 dx = vec3( e   , 0.0 , 0.0 );\n	vec3 dy = vec3( 0.0 , e   , 0.0 );\n	vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n	vec3 p_x0 = snoiseVec3( p - dx );\n	vec3 p_x1 = snoiseVec3( p + dx );\n	vec3 p_y0 = snoiseVec3( p - dy );\n	vec3 p_y1 = snoiseVec3( p + dy );\n	vec3 p_z0 = snoiseVec3( p - dz );\n	vec3 p_z1 = snoiseVec3( p + dz );\n\n	float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n	float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n	float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n	const float divisor = 1.0 / ( 2.0 * e );\n	return normalize( vec3( x , y , z ) * divisor );\n\n}\n\nconst float FORCE_MULTIPLIER = 1.0;\n\nvoid main(void) {\n	vec3 pos        = texture2D(texturePos, vTextureCoord).rgb;\n	vec3 vel        = texture2D(textureVel, vTextureCoord).rgb;\n	vec3 extra      = texture2D(textureExtra, vTextureCoord).rgb;\n	vec3 life       = texture2D(textureLife, vTextureCoord).rgb;\n	float posOffset = (0.5 + extra.r * 0.2) * .25 * 3.0;\n	vec3 acc        = curlNoise(pos * posOffset + time * .5);\n	acc.y = acc.y *.5 + .5;\n\n	float lifeOffset = smoothstep(flyThreshold, 1.0, life.r);\n	\n	vel += acc * .01 * lifeOffset * FORCE_MULTIPLIER;\n\n	float dist = length(pos+vec3(0.0, -0.65, 0.0));\n	if(dist > maxRadius) {\n		float f = (dist - maxRadius) * .005 * FORCE_MULTIPLIER;\n		vel -= normalize(pos) * f;\n	}\n\n	const float decrease = .93;\n	vel *= decrease;\n\n	gl_FragColor = vec4(vel, 1.0);\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(113),
        x = function (t) {
            function e() {
                return (0, s.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, p.default.ShaderLibs.bigTriangleVert, m))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    this.mesh = p.default.Geom.bigTriangle()
                }
            }, {
                key: "render",
                value: function (t) {
                    this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), t.bind(0), v.GL.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = x, t.exports = e.default
}, function (t, e) {
    t.exports = "// addLife.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    vec3 life = texture2D(texture, vTextureCoord).rgb;\n    life.r += life.g;\n    if(life.r >= 1.0) {\n    	life.r = 0.0;\n    }\n\n    gl_FragColor = vec4(life, 1.0);\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(115),
        x = n(116),
        _ = function (t) {
            function e() {
                return (0, s.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, m, x))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    for (var t = [], e = [], n = 0, r = params.numParticles, i = void 0, o = void 0, a = 0; r > a; a++)
                        for (var s = 0; r > s; s++) i = s / r, o = a / r, t.push([i, o, 0]), e.push(n), n++;
                    this.mesh = new p.default.Mesh(v.GL.POINTS), this.mesh.bufferVertex(t), this.mesh.bufferIndices(e), this.mid = .93, this.range = .05, this.shader.bind(), this.shader.uniform("textureCurr", "uniform1i", 0), this.shader.uniform("textureNext", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("textureLife", "uniform1i", 3), this.shader.uniform("textureShadow", "uniform1i", 4), this.shader.uniform("mid", "float", this.mid), this.shader.uniform("range", "float", this.range), this.shadowThreshold = .55, this.shadowStrength = .25, this.waveLength = .5, this.shader.uniform("uShadowThreshold", "float", this.shadowThreshold), this.shader.uniform("uShadowStrength", "float", this.shadowStrength)
                }
            }, {
                key: "render",
                value: function (t, e, n, r, i, o, a, s, u, l) {
                    this.time += .1, this.shader.bind(), t.bind(0), e.bind(1), r.bind(2), i.bind(3), this.shader.uniform("percent", "float", n), this.shader.uniform("time", "float", params.time), this.shader.uniform("uShadowMatrix", "uniformMatrix4fv", a), this.shader.uniform("color0", "vec3", s), this.shader.uniform("color1", "vec3", u), this.shader.uniform("particleAlpha", "float", params.particleOpacity.value), this.shader.uniform("startPoint", "vec3", l), this.shader.uniform("waveFront", "float", -.5 + 3 * params.offset), this.shader.uniform("waveLength", "float", .5), o.bind(4), v.GL.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = _, t.exports = e.default
}, function (t, e) {
    t.exports = "// render.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uShadowMatrix;\n\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform sampler2D textureLife;\nuniform float percent;\nuniform float time;\nuniform float mid;\nuniform float range;\nuniform float particleAlpha;\nuniform float waveFront;\nuniform float waveLength;\nuniform vec3 startPoint;\nuniform vec3 color0;\nuniform vec3 color1;\n\nvarying vec4 vColor;\nvarying vec3 vExtra;\nvarying vec4 vShadowCoord;\n\nconst mat4 biasMatrix = mat4( 0.5, 0.0, 0.0, 0.0,\n							  0.0, 0.5, 0.0, 0.0,\n							  0.0, 0.0, 0.5, 0.0,\n							  0.5, 0.5, 0.5, 1.0 );\n\nvoid main(void) {\n	vec2 uv      = aVertexPosition.xy;\n	vec3 posCurr = texture2D(textureCurr, uv).rgb;\n	vec3 posNext = texture2D(textureNext, uv).rgb;\n	vec3 pos     = mix(posCurr, posNext, percent);\n	vec3 extra   = texture2D(textureExtra, uv).rgb;\n	float life   = texture2D(textureLife, uv).r;\n	vec4 V  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	gl_Position = V;\n	\n	float d      = V.z/V.w;\n\n	d = 1.0-smoothstep(mid-range, mid+range, d);\n\n	\n	\n	float opacity;\n	if(life > .5) {\n		opacity = 1.0-smoothstep(0.95, 1.0, life);\n	} else {\n		opacity = smoothstep(0.1, 0.2, life);\n	}\n\n	d *= opacity;\n	gl_PointSize = d * 5.0 * (.5 + extra.r * 1.5) + 1.0;\n\n\n	float distToStart = distance(pos, startPoint) + pow(extra.b, 2.0);\n	float distToWaveFront = distance(distToStart, waveFront);\n	float mixOffset = 0.0;\n\n	if(distToWaveFront < waveLength) {\n		mixOffset = smoothstep(0.0, 1.0, 1.0 - distToWaveFront / waveLength);\n	}\n	if(distToWaveFront < waveFront) {\n		mixOffset = 1.0;\n	}\n\n	vec3 colorOffset = mix(color0, color1, mixOffset);\n	colorOffset = mix(colorOffset, extra, .3);\n\n	vColor       = vec4(vec3(mix(d, 1.0, .8)) * colorOffset, opacity * particleAlpha);\n	vExtra 		 = extra;\n\n	vShadowCoord    = ( biasMatrix * uShadowMatrix ) * vec4(pos, 1.0);;\n}"
}, function (t, e) {
    t.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D textureShadow;\n\nvarying vec4 vColor;\nvarying vec3 vExtra;\nvarying vec4 vShadowCoord;\n\nuniform float uShadowThreshold;\nuniform float uShadowStrength;\n\nfloat pcfSoftShadow(sampler2D shadowMap) {\n	const float shadowMapSize  = 1024.0;\n	const float shadowBias     = .00005;\n	float shadow = 0.0;\n	float texelSizeX =  1.0 / shadowMapSize;\n	float texelSizeY =  1.0 / shadowMapSize;\n	vec4 shadowCoord	= vShadowCoord / vShadowCoord.w;\n\n	bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n	bool inFrustum = all( inFrustumVec );\n\n	bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n	bool frustumTest = all( frustumTestVec );\n	\n\n	if ( frustumTest ) {\n		shadowCoord.z += shadowBias;\n		float xPixelOffset = texelSizeX;\n		float yPixelOffset = texelSizeY;\n\n		float dx0 = - 1.0 * xPixelOffset;\n		float dy0 = - 1.0 * yPixelOffset;\n		float dx1 = 1.0 * xPixelOffset;\n		float dy1 = 1.0 * yPixelOffset;\n\n		mat3 shadowKernel;\n		mat3 depthKernel;\n\n		depthKernel[ 0 ][ 0 ] = texture2D( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ) ).r ;\n		depthKernel[ 0 ][ 1 ] = texture2D( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ) ).r ;\n		depthKernel[ 0 ][ 2 ] = texture2D( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ) ).r ;\n		depthKernel[ 1 ][ 0 ] = texture2D( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ) ).r ;\n		depthKernel[ 1 ][ 1 ] = texture2D( shadowMap, shadowCoord.xy ).r ;\n		depthKernel[ 1 ][ 2 ] = texture2D( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ) ).r ;\n		depthKernel[ 2 ][ 0 ] = texture2D( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ) ).r ;\n		depthKernel[ 2 ][ 1 ] = texture2D( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ) ).r ;\n		depthKernel[ 2 ][ 2 ] = texture2D( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ) ).r ;\n\n		vec3 shadowZ = vec3( shadowCoord.z );\n		shadowKernel[ 0 ] = vec3( lessThan( depthKernel[ 0 ], shadowZ ) );\n		shadowKernel[ 0 ] *= vec3( 0.25 );\n\n		shadowKernel[ 1 ] = vec3( lessThan( depthKernel[ 1 ], shadowZ ) );\n		shadowKernel[ 1 ] *= vec3( 0.25 );\n\n		shadowKernel[ 2 ] = vec3( lessThan( depthKernel[ 2 ], shadowZ ) );\n		shadowKernel[ 2 ] *= vec3( 0.25 );\n\n		vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize );\n\n		shadowKernel[ 0 ] = mix( shadowKernel[ 1 ], shadowKernel[ 0 ], fractionalCoord.x );\n		shadowKernel[ 1 ] = mix( shadowKernel[ 2 ], shadowKernel[ 1 ], fractionalCoord.x );\n\n		vec4 shadowValues;\n		shadowValues.x = mix( shadowKernel[ 0 ][ 1 ], shadowKernel[ 0 ][ 0 ], fractionalCoord.y );\n		shadowValues.y = mix( shadowKernel[ 0 ][ 2 ], shadowKernel[ 0 ][ 1 ], fractionalCoord.y );\n		shadowValues.z = mix( shadowKernel[ 1 ][ 1 ], shadowKernel[ 1 ][ 0 ], fractionalCoord.y );\n		shadowValues.w = mix( shadowKernel[ 1 ][ 2 ], shadowKernel[ 1 ][ 1 ], fractionalCoord.y );\n\n		shadow = dot( shadowValues, vec4( 1.0 ) ) * uShadowStrength;\n\n	}\n\n	return shadow;\n}\n\nvoid main(void) {\n	if(distance(gl_PointCoord, vec2(.5)) > .5) discard;\n	if(vColor.a <= 0.0) discard;\n	vec4 color = vColor;\n	float pcf    = pcfSoftShadow(textureShadow);\n	pcf = 1.0 - smoothstep(0.0, uShadowThreshold, pcf);\n	// color.rgb *= mix(uBaseColor, vExtra, .1);\n	color.rgb *= pcf;\n\n    gl_FragColor = color;\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(34),
        o = r(i),
        a = n(35),
        s = r(a),
        u = n(6),
        l = r(u),
        f = n(118),
        c = r(f),
        h = n(119),
        d = r(h),
        v = n(122),
        p = r(v),
        m = n(124),
        x = r(m),
        _ = function () {
            function t(e, n) {
                (0, o.default)(this, t), this.scene = e, this._bCopy = n, this._count = Math.floor(params.skipCount / 2), this._init()
            }
            return (0, s.default)(t, [{
                key: "_init",
                value: function () {
                    var t = params.numSnow,
                        e = {
                            minFilter: u.GL.NEAREST,
                            magFilter: u.GL.NEAREST
                        };
                    this._fboCurrentPos = new l.default.FrameBuffer(t, t, e), this._fboTargetPos = new l.default.FrameBuffer(t, t, e), this._fboCurrentVel = new l.default.FrameBuffer(t, t, e), this._fboTargetVel = new l.default.FrameBuffer(t, t, e), this._fboExtra = new l.default.FrameBuffer(t, t, e), this._vRender = new d.default, this._vAddVel = new p.default, this._vSim = new x.default, this._vSave = new c.default, u.GL.setMatrices(this.scene.cameraOrtho), this._fboCurrentPos.bind(), this._vSave.render(0), this._fboCurrentPos.unbind(), this._fboExtra.bind(), this._vSave.render(1), this._fboExtra.unbind(), this._fboTargetPos.bind(), this._bCopy.draw(this._fboCurrentPos.getTexture()), this._fboTargetPos.unbind(), u.GL.setMatrices(this.scene.camera)
                }
            }, {
                key: "updateFbo",
                value: function () {
                    this._fboTargetVel.bind(), u.GL.clear(0, 0, 0, 1), this._vSim.render(this._fboCurrentVel.getTexture(), this._fboCurrentPos.getTexture(), this._fboExtra.getTexture()), this._fboTargetVel.unbind(), this._fboTargetPos.bind(), u.GL.clear(0, 0, 0, 1), this._vAddVel.render(this._fboCurrentPos.getTexture(), this._fboTargetVel.getTexture()), this._fboTargetPos.unbind();
                    var t = this._fboCurrentVel;
                    this._fboCurrentVel = this._fboTargetVel, this._fboTargetVel = t;
                    var e = this._fboCurrentPos;
                    this._fboCurrentPos = this._fboTargetPos, this._fboTargetPos = e
                }
            }, {
                key: "render",
                value: function () {
                    this._count++, this._count % params.skipCount == 0 && (this._count = 0, this.updateFbo());
                    var t = this._count / params.skipCount;
                    this._vRender.render(this._fboTargetPos.getTexture(), this._fboCurrentPos.getTexture(), t, this._fboExtra.getTexture())
                }
            }]), t
        }();
    e.default = _, t.exports = e.default
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(105),
        x = n(106),
        _ = p.default.GL,
        M = function (t, e) {
            return t + Math.random() * (e - t)
        },
        b = function (t) {
            function e() {
                return (0, s.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, m, x))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    function t() {
                        var t = [M(-e, e), M(-e, e), M(-e, e)];
                        return t
                    }
                    for (var e = 5, n = [], r = [], i = [], o = [], a = 0, s = params.numSnow, u = void 0, l = void 0, f = 0; s > f; f++)
                        for (var c = 0; s > c; c++) n.push(t()), u = c / s * 2 - 1 + .5 / s, l = f / s * 2 - 1 + .5 / s, o.push([Math.random(), Math.random(), Math.random()]), r.push([u, l]), i.push(a), a++;
                    this.mesh = new p.default.Mesh(_.POINTS), this.mesh.bufferVertex(n), this.mesh.bufferTexCoords(r), this.mesh.bufferIndices(i), this.meshExtra = new p.default.Mesh(_.POINTS), this.meshExtra.bufferVertex(o), this.meshExtra.bufferTexCoords(r), this.meshExtra.bufferIndices(i)
                }
            }, {
                key: "render",
                value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    this.shader.bind(), 0 === t ? _.draw(this.mesh) : 1 === t && _.draw(this.meshExtra)
                }
            }]), e
        }(p.default.View);
    e.default = b, t.exports = e.default
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(120),
        x = n(121),
        _ = p.default.GL,
        M = function (t) {
            function e() {
                return (0, s.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, m, x))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    for (var t = [], e = [], n = 0, r = params.numSnow, i = void 0, o = void 0, a = 0; r > a; a++)
                        for (var s = 0; r > s; s++) i = s / r, o = a / r, t.push([i, o, 0]), e.push(n), n++;
                    this.mesh = new p.default.Mesh(_.POINTS), this.mesh.bufferVertex(t), this.mesh.bufferIndices(e), this.mid = .93, this.range = .05, this.shader.bind(), this.shader.uniform("textureCurr", "uniform1i", 0), this.shader.uniform("textureNext", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("mid", "float", this.mid), this.shader.uniform("range", "float", this.range)
                }
            }, {
                key: "render",
                value: function (t, e, n, r) {
                    this.shader.bind(), t.bind(0), e.bind(1), r.bind(2), this.shader.uniform("percent", "float", n), this.shader.uniform("opacity", "float", 1 - params.particleOpacity.value), _.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = M, t.exports = e.default
}, function (t, e) {
    t.exports = "// render.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform float percent;\nuniform float mid;\nuniform float range;\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec3 vExtra;\n\nvoid main(void) {\n	vec2 uv      = aVertexPosition.xy;\n	vec3 posCurr = texture2D(textureCurr, uv).rgb;\n	vec3 posNext = texture2D(textureNext, uv).rgb;\n	vec3 pos     = mix(posCurr, posNext, percent);\n	vec3 extra   = texture2D(textureExtra, uv).rgb;\n	vec4 V  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	gl_Position = V;\n	\n	float d      = V.z/V.w;\n\n	d = 1.0-smoothstep(mid-range, mid+range, d);\n	gl_PointSize = d * 5.0 * (.5 + extra.r * 1.5);\n	float alpha = 1.0;\n\n	if(posNext.x < posCurr.x) {\n		alpha = 0.0;\n	}\n\n	vec3 color = vec3(mix(extra.r, 1.0, 0.75));\n\n	vColor       = vec4(color, opacity * alpha);\n}"
}, function (t, e) {
    t.exports = "precision highp float;\n#define GLSLIFY 1\nvarying vec4 vColor;\n\nvoid main(void) {\n	if(distance(gl_PointCoord, vec2(.5)) > .5) discard;\n	if(vColor.a <= 0.0) discard;\n    gl_FragColor = vColor;\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = n(123),
        x = p.default.GL,
        _ = function (t) {
            function e() {
                return (0, s.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, p.default.ShaderLibs.bigTriangleVert, m))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    this.mesh = p.default.Geom.bigTriangle()
                }
            }, {
                key: "render",
                value: function (t, e) {
                    this.shader.bind(), this.shader.uniform("texturePos", "uniform1i", 0), t.bind(0), this.shader.uniform("textureVel", "uniform1i", 1), e.bind(1), x.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = _, t.exports = e.default
}, function (t, e) {
    t.exports = "// addvel.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texturePos;\nuniform sampler2D textureVel;\n\nvoid main(void) {\n	vec3 pos = texture2D(texturePos, vTextureCoord).rgb;\n	vec3 vel = texture2D(textureVel, vTextureCoord).rgb;\n	pos += vel;\n	if(pos.x > 5.0) {\n		pos.x -= 10.0;\n	}\n    gl_FragColor = vec4(pos, 1.0);\n}"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        o = r(i),
        a = n(34),
        s = r(a),
        u = n(35),
        l = r(u),
        f = n(39),
        c = r(f),
        h = n(86),
        d = r(h),
        v = n(6),
        p = r(v),
        m = p.default.GL,
        x = n(125),
        _ = function (t) {
            function e() {
                (0, s.default)(this, e);
                var t = (0, c.default)(this, (0, o.default)(e).call(this, p.default.ShaderLibs.bigTriangleVert, x));
                return t.time = 255 * Math.random(), t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function () {
                    this.mesh = p.default.Geom.bigTriangle(), this.shader.bind(), this.shader.uniform("textureVel", "uniform1i", 0), this.shader.uniform("texturePos", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2)
                }
            }, {
                key: "render",
                value: function (t, e, n) {
                    this.time += .01, this.shader.bind(), this.shader.uniform("time", "float", this.time), t.bind(0), e.bind(1), n.bind(2), m.draw(this.mesh)
                }
            }]), e
        }(p.default.View);
    e.default = _, t.exports = e.default
}, function (t, e) {
    t.exports = "// sim.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D textureVel;\nuniform sampler2D texturePos;\nuniform sampler2D textureExtra;\nuniform float time;\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 permute(vec4 x) {  return mod289(((x*34.0)+1.0)*x);  }\n\nvec4 taylorInvSqrt(vec4 r) {  return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v) { \n	const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n	vec3 i  = floor(v + dot(v, C.yyy) );\n	vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n	vec3 g = step(x0.yzx, x0.xyz);\n	vec3 l = 1.0 - g;\n	vec3 i1 = min( g.xyz, l.zxy );\n	vec3 i2 = max( g.xyz, l.zxy );\n\n	vec3 x1 = x0 - i1 + C.xxx;\n	vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n	vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n	i = mod289(i); \n	vec4 p = permute( permute( permute( \n						 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n					 + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n					 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n	float n_ = 0.142857142857; // 1.0/7.0\n	vec3  ns = n_ * D.wyz - D.xzx;\n\n	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n	vec4 x_ = floor(j * ns.z);\n	vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n	vec4 x = x_ *ns.x + ns.yyyy;\n	vec4 y = y_ *ns.x + ns.yyyy;\n	vec4 h = 1.0 - abs(x) - abs(y);\n\n	vec4 b0 = vec4( x.xy, y.xy );\n	vec4 b1 = vec4( x.zw, y.zw );\n\n	vec4 s0 = floor(b0)*2.0 + 1.0;\n	vec4 s1 = floor(b1)*2.0 + 1.0;\n	vec4 sh = -step(h, vec4(0.0));\n\n	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n	vec3 p0 = vec3(a0.xy,h.x);\n	vec3 p1 = vec3(a0.zw,h.y);\n	vec3 p2 = vec3(a1.xy,h.z);\n	vec3 p3 = vec3(a1.zw,h.w);\n\n	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n	p0 *= norm.x;\n	p1 *= norm.y;\n	p2 *= norm.z;\n	p3 *= norm.w;\n\n	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n	m = m * m;\n	return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n																dot(p2,x2), dot(p3,x3) ) );\n}\n\nvec3 snoiseVec3( vec3 x ){\n\n	float s  = snoise(vec3( x ));\n	float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n	float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n	vec3 c = vec3( s , s1 , s2 );\n	return c;\n\n}\n\n\nvec3 curlNoise( vec3 p ){\n	\n	const float e = .1;\n	vec3 dx = vec3( e   , 0.0 , 0.0 );\n	vec3 dy = vec3( 0.0 , e   , 0.0 );\n	vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n	vec3 p_x0 = snoiseVec3( p - dx );\n	vec3 p_x1 = snoiseVec3( p + dx );\n	vec3 p_y0 = snoiseVec3( p - dy );\n	vec3 p_y1 = snoiseVec3( p + dy );\n	vec3 p_z0 = snoiseVec3( p - dz );\n	vec3 p_z1 = snoiseVec3( p + dz );\n\n	float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n	float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n	float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n	const float divisor = 1.0 / ( 2.0 * e );\n	return normalize( vec3( x , y , z ) * divisor );\n\n}\n\nconst float FORCE_MULTIPLIER = 0.5;\n\nvoid main(void) {\n	vec3 pos        = texture2D(texturePos, vTextureCoord).rgb;\n	vec3 vel        = texture2D(textureVel, vTextureCoord).rgb;\n	vec3 extra      = texture2D(textureExtra, vTextureCoord).rgb;\n	float posOffset = (0.5 + extra.r * 0.2) * .25 * 3.0;\n	vec3 acc        = curlNoise(pos * posOffset + time * .5);\n	acc.y 			*= 0.5;\n	acc.x = acc.x * 0.5 + 0.5;\n\n	vel += acc * 0.01 * FORCE_MULTIPLIER;\n\n	const float decrease = .93;\n	vel *= decrease;\n\n	gl_FragColor = vec4(vel, 1.0);\n}"
}, function (t, e, n) {
    "use strict";
    var r = n(127);
    r.stats = n(132), t.exports = r
}, function (t, e, n) {
    "use strict";
    var r = n(128),
        i = n(130),
        o = 0;
    t.exports = function a(t) {
        var e, n = {},
            s = [],
            u = [],
            l = 0,
            f = 0,
            c = {},
            h = function (n) {
                if (Array.isArray(n)) return n.forEach(h), e;
                var r, o = !!n.assets && Array.isArray(n.assets);
                return r = o ? a(m(n, t)) : i(m(n, t)), r.once("destroy", y), u.push(r), c[r.id] = r, e
            },
            d = function (t) {
                return arguments.length ? n[t] : s
            },
            v = function (t) {
                if (d(t)) return d(t);
                var e = null;
                return Object.keys(c).some(function (n) {
                    return e = c[n].find && c[n].find(t), !!e
                }), e
            },
            p = function (t) {
                return t && t.split("?")[0].split(".").pop().toLowerCase()
            },
            m = function (t, e) {
                if ("string" == typeof t) {
                    var n = t;
                    t = {
                        url: n
                    }
                }
                return void 0 === t.isTouchLocked && (t.isTouchLocked = e.isTouchLocked), void 0 === t.blob && (t.blob = e.blob), void 0 === t.basePath && (t.basePath = e.basePath), t.id = t.id || t.url || String(++o), t.type = t.type || p(t.url), t.crossOrigin = t.crossOrigin || e.crossOrigin, t.webAudioContext = t.webAudioContext || e.webAudioContext, t.log = e.log, t
            },
            x = function () {
                return f = u.length, u.forEach(function (t) {
                    t.on("progress", _).once("complete", M).once("error", b).start()
                }), u = [], e
            },
            _ = function (t) {
                var n = l + t;
                e.emit("progress", n / f)
            },
            M = function (t, r, i) {
                Array.isArray(t) && (t = {
                    id: r,
                    file: t,
                    type: i
                }), l++, e.emit("progress", l / f), n[t.id] = t.file, s.push(t), e.emit("childcomplete", t), g()
            },
            b = function (t) {
                f--, e.listeners("error").length ? e.emit("error", t) : console.error(t), g()
            },
            y = function (t) {
                c[t] = null, delete c[t], n[t] = null, delete n[t], s.some(function (e, n) {
                    return e.id === t ? (s.splice(n, 1), !0) : void 0
                })
            },
            g = function () {
                l >= f && e.emit("complete", s, t.id, "group")
            },
            E = function () {
                for (; u.length;) u.pop().destroy();
                return e.off("error"), e.off("progress"), e.off("complete"), s = [], n = {}, t.webAudioContext = null, f = 0, l = 0, Object.keys(c).forEach(function (t) {
                    c[t].destroy()
                }), c = {}, e.emit("destroy", e.id), e
            };
        return e = Object.create(r.prototype, {
            _events: {
                value: {}
            },
            id: {
                get: function () {
                    return t.id
                }
            },
            add: {
                value: h
            },
            start: {
                value: x
            },
            get: {
                value: d
            },
            find: {
                value: v
            },
            getLoader: {
                value: function (t) {
                    return c[t]
                }
            },
            loaded: {
                get: function () {
                    return l >= f
                }
            },
            file: {
                get: function () {
                    return s
                }
            },
            destroy: {
                value: E
            }
        }), t = m(t || {}, {
            basePath: "",
            blob: !1,
            touchLocked: !1,
            crossOrigin: null,
            webAudioContext: null,
            log: !1
        }), Array.isArray(t.assets) && h(t.assets), Object.freeze(e)
    }
}, function (t, e, n) {
    "use strict";

    function r() {
        i.call(this), this.setMaxListeners(20)
    }
    var i = n(129).EventEmitter;
    r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.prototype.off = function (t, e) {
        return e ? this.removeListener(t, e) : t ? this.removeAllListeners(t) : this.removeAllListeners()
    }, t.exports = r
}, function (t, e) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(t) {
        return "function" == typeof t
    }

    function i(t) {
        return "number" == typeof t
    }

    function o(t) {
        return "object" == typeof t && null !== t
    }

    function a(t) {
        return void 0 === t
    }
    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
        if (!i(t) || 0 > t || isNaN(t)) throw TypeError("n must be a positive number");
        return this._maxListeners = t, this
    }, n.prototype.emit = function (t) {
        var e, n, i, s, u, l;
        if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (e = arguments[1], e instanceof Error) throw e;
            throw TypeError('Uncaught, unspecified "error" event.')
        }
        if (n = this._events[t], a(n)) return !1;
        if (r(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
        } else if (o(n))
            for (s = Array.prototype.slice.call(arguments, 1), l = n.slice(), i = l.length, u = 0; i > u; u++) l[u].apply(this, s);
        return !0
    }, n.prototype.addListener = function (t, e) {
        var i;
        if (!r(e)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, i && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
        function n() {
            this.removeListener(t, n), i || (i = !0, e.apply(this, arguments))
        }
        if (!r(e)) throw TypeError("listener must be a function");
        var i = !1;
        return n.listener = e,
            this.on(t, n), this
    }, n.prototype.removeListener = function (t, e) {
        var n, i, a, s;
        if (!r(e)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[t]) return this;
        if (n = this._events[t], a = n.length, i = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
        else if (o(n)) {
            for (s = a; s-- > 0;)
                if (n[s] === e || n[s].listener && n[s].listener === e) {
                    i = s;
                    break
                } if (0 > i) return this;
            1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }, n.prototype.removeAllListeners = function (t) {
        var e, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
        if (0 === arguments.length) {
            for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[t], r(n)) this.removeListener(t, n);
        else if (n)
            for (; n.length;) this.removeListener(t, n[n.length - 1]);
        return delete this._events[t], this
    }, n.prototype.listeners = function (t) {
        var e;
        return e = this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, n.prototype.listenerCount = function (t) {
        if (this._events) {
            var e = this._events[t];
            if (r(e)) return 1;
            if (e) return e.length
        }
        return 0
    }, n.listenerCount = function (t, e) {
        return t.listenerCount(e)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(128),
        i = n(131),
        o = n(132);
    t.exports = function (t) {
        var e, n, a, s, u, l, f = t.id,
            c = t.basePath || "",
            h = t.url,
            d = t.type,
            v = t.crossOrigin,
            p = t.isTouchLocked,
            m = t.blob && i,
            x = t.webAudioContext,
            _ = t.log,
            M = function () {
                switch (s = Date.now(), d) {
                    case "json":
                        T();
                        break;
                    case "jpg":
                    case "png":
                    case "gif":
                    case "webp":
                        S();
                        break;
                    case "mp3":
                    case "ogg":
                    case "opus":
                    case "wav":
                    case "m4a":
                        L();
                        break;
                    case "ogv":
                    case "mp4":
                    case "webm":
                    case "hls":
                        O();
                        break;
                    case "bin":
                    case "binary":
                        y("arraybuffer");
                        break;
                    case "txt":
                    case "text":
                        y("text");
                        break;
                    default:
                        throw "AssetsLoader ERROR: Unknown type for file with URL: " + c + h + " (" + d + ")"
                }
            },
            b = function (t) {
                t && (l = {
                    id: f,
                    file: t,
                    type: d
                }, e.emit("progress", 1), e.emit("complete", l, f, d), N())
            },
            y = function (t, e) {
                n = e || E, a = new XMLHttpRequest, a.open("GET", c + h, !0), a.responseType = t, a.addEventListener("progress", g), a.addEventListener("load", n), a.addEventListener("error", A), a.send()
            },
            g = function (t) {
                t.lengthComputable && e.emit("progress", t.loaded / t.total)
            },
            E = function () {
                w() && b(a.response)
            },
            w = function () {
                return a && a.status < 400 ? (o.update(a, s, h, _), !0) : (A(a && a.statusText), !1)
            },
            T = function () {
                y("json", function () {
                    if (w()) {
                        var t = a.response;
                        "string" == typeof t && (t = JSON.parse(t)), b(t)
                    }
                })
            },
            S = function () {
                m ? D() : I()
            },
            I = function () {
                a = new Image, v && (a.crossOrigin = "anonymous"), a.addEventListener("error", A, !1), a.addEventListener("load", P, !1), a.src = c + h
            },
            P = function () {
                window.clearTimeout(u), b(a)
            },
            D = function () {
                y("blob", function () {
                    w() && (a = new Image, a.addEventListener("error", A, !1), a.addEventListener("load", F, !1), a.src = window.URL.createObjectURL(a.response))
                })
            },
            F = function () {
                window.URL.revokeObjectURL(a.src), b(a)
            },
            L = function () {
                x ? C() : R("audio")
            },
            O = function () {
                m ? y("blob") : R("video")
            },
            C = function () {
                y("arraybuffer", function () {
                    w() && x.decodeAudioData(a.response, function (t) {
                        a = null, b(t)
                    }, function (t) {
                        A(t)
                    })
                })
            },
            R = function (t) {
                a = document.createElement(t), p || (window.clearTimeout(u), u = window.setTimeout(P, 2e3), a.addEventListener("canplaythrough", P, !1)), a.addEventListener("error", A, !1), a.preload = "auto", a.src = c + h, a.load(), p && b(a)
            },
            A = function (t) {
                window.clearTimeout(u);
                var n = t;
                if (a && a.tagName && a.error) {
                    var r = ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"];
                    n = "MediaError: " + r[a.error.code] + " " + a.src
                } else a && a.statusText ? n = a.statusText : t && t.message ? n = t.message : t && t.type && (n = t.type);
                e.emit("error", 'Error loading "' + c + h + '" ' + n), k()
            },
            N = function () {
                e.off("error"), e.off("progress"), e.off("complete"), a && (a.removeEventListener("progress", g), a.removeEventListener("load", n), a.removeEventListener("error", A), a.removeEventListener("load", P), a.removeEventListener("canplaythrough", P), a.removeEventListener("load", F))
            },
            k = function () {
                N(), a && a.abort && a.readyState < 4 && a.abort(), a = null, x = null, l = null, window.clearTimeout(u), e.emit("destroy", f)
            };
        return e = Object.create(r.prototype, {
            _events: {
                value: {}
            },
            id: {
                value: t.id
            },
            start: {
                value: M
            },
            loaded: {
                get: function () {
                    return !!l
                }
            },
            file: {
                get: function () {
                    return l
                }
            },
            destroy: {
                value: k
            }
        }), Object.freeze(e)
    }
}, function (t, e) {
    "use strict";
    t.exports = function () {
        try {
            return !!new Blob
        } catch (t) {
            return !1
        }
    }()
}, function (t, e) {
    "use strict";
    t.exports = {
        mbs: 0,
        secs: 0,
        update: function (t, e, n, r) {
            var i, o = t.getAllResponseHeaders();
            if (o) {
                var a = o.match(/content-length: (\d+)/i);
                a && a.length && (i = a[1])
            }
            if (i) {
                i = parseInt(i, 10);
                var s = i / 1024 / 1024,
                    u = (Date.now() - e) / 1e3;
                this.secs += u, this.mbs += s, r && this.log(n, s, u)
            } else r && console.warn.call(console, "Can't get Content-Length:", n)
        },
        log: function (t, e, n) {
            if (t) {
                var r = "File loaded: " + t.substr(t.lastIndexOf("/") + 1) + " size:" + e.toFixed(2) + "mb time:" + n.toFixed(2) + "s speed:" + (e / n).toFixed(2) + "mbps";
                console.log.call(console, r)
            }
            var i = "Total loaded: " + this.mbs.toFixed(2) + "mb time:" + this.secs.toFixed(2) + "s speed:" + this.getMbps().toFixed(2) + "mbps";
            console.log.call(console, i)
        },
        getMbps: function () {
            return this.mbs / this.secs
        }
    }
}]);