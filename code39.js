/*! JsBarcode v3.6.0 | (c) Johan Lindell | MIT license */ ! function(t) {
	function e(r) {
		if (n[r]) return n[r].exports;
		var i = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
	}
	var n = {};
	return e.m = t, e.c = n, e.i = function(t) {
		return t
	}, e.d = function(t, e, n) {
		Object.defineProperty(t, e, {
			configurable: !1,
			enumerable: !0,
			get: n
		})
	}, e.n = function(t) {
		var n = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e(e.s = 17)
}([function(t, e) {
	"use strict";

	function n(t, e) {
		var n, r = {};
		for (n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
		for (n in e) e.hasOwnProperty(n) && "undefined" != typeof e[n] && (r[n] = e[n]);
		return r
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e["default"] = n
}, function(t, e) {
	"use strict";

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function r(t, e) {
		if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !e || "object" != typeof e && "function" != typeof e ? t : e
	}

	function i(t, e) {
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
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function(t) {
			function e(i, o) {
				n(this, e);
				var a = r(this, t.call(this));
				return a.name = "InvalidInputException", a.symbology = i, a.input = o, a.message = '"' + a.input + '" is not a valid input for ' + a.symbology, a
			}
			return i(e, t), e
		}(Error),
		a = function(t) {
			function e() {
				n(this, e);
				var i = r(this, t.call(this));
				return i.name = "InvalidElementException", i.message = "Not supported type to render on", i
			}
			return i(e, t), e
		}(Error),
		s = function(t) {
			function e() {
				n(this, e);
				var i = r(this, t.call(this));
				return i.name = "NoElementException", i.message = "No element to render on.", i
			}
			return i(e, t), e
		}(Error);
	e.InvalidInputException = o, e.InvalidElementException = a, e.NoElementException = s
}, function(t, e) {
	"use strict";

	function n(t) {
		var e = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
		for (var n in e) e.hasOwnProperty(n) && (n = e[n], "string" == typeof t[n] && (t[n] = parseInt(t[n], 10)));
		return "string" == typeof t.displayValue && (t.displayValue = "false" != t.displayValue), t
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e["default"] = n
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = {
		width: 2,
		height: 100,
		format: "auto",
		displayValue: !0,
		fontOptions: "",
		font: "monospace",
		text: void 0,
		textAlign: "center",
		textPosition: "bottom",
		textMargin: 2,
		fontSize: 20,
		background: "#ffffff",
		lineColor: "#000000",
		margin: 10,
		marginTop: void 0,
		marginBottom: void 0,
		marginLeft: void 0,
		marginRight: void 0,
		valid: function() {}
	};
	e["default"] = n
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function i(t, e) {
		return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom
	}

	function o(t, e, n) {
		if (n.displayValue && e < t) {
			if ("center" == n.textAlign) return Math.floor((t - e) / 2);
			if ("left" == n.textAlign) return 0;
			if ("right" == n.textAlign) return Math.floor(t - e)
		}
		return 0
	}

	function a(t, e, n) {
		for (var r = 0; r < t.length; r++) {
			var a, s = t[r],
				u = (0, c["default"])(e, s.options);
			a = u.displayValue ? f(s.text, u, n) : 0;
			var d = s.data.length * u.width;
			s.width = Math.ceil(Math.max(a, d)), s.height = i(s, u), s.barcodePadding = o(a, d, u)
		}
	}

	function s(t) {
		for (var e = 0, n = 0; n < t.length; n++) e += t[n].width;
		return e
	}

	function u(t) {
		for (var e = 0, n = 0; n < t.length; n++) t[n].height > e && (e = t[n].height);
		return e
	}

	function f(t, e, n) {
		var r;
		r = "undefined" == typeof n ? document.createElement("canvas").getContext("2d") : n, r.font = e.fontOptions + " " + e.fontSize + "px " + e.font;
		var i = r.measureText(t).width;
		return i
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0;
	var d = n(0),
		c = r(d);
	e.getMaximumHeightOfEncodings = u, e.getEncodingHeight = i, e.getBarcodePadding = o, e.calculateEncodingAttributes = a, e.getTotalWidthOfEncodings = s
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = n(11);
	e["default"] = {
		CODE39: r.CODE39
	}
}, function(t, e) {
	"use strict";

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function() {
		function t(e) {
			n(this, t), this.api = e
		}
		return t.prototype.handleCatch = function(t) {
			if ("InvalidInputException" !== t.name) throw t;
			if (this.api._options.valid === this.api._defaults.valid) throw t.message;
			this.api._options.valid(!1), this.api.render = function() {}
		}, t.prototype.wrapBarcodeCall = function(t) {
			try {
				var e = t.apply(void 0, arguments);
				return this.api._options.valid(!0), e
			} catch (n) {
				return this.handleCatch(n), this.api
			}
		}, t
	}();
	e["default"] = r
}, function(t, e) {
	"use strict";

	function n(t) {
		return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e["default"] = n
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function i(t) {
		if ("string" == typeof t) return o(t);
		if (Array.isArray(t)) {
			for (var e = [], n = 0; n < t.length; n++) e.push(i(t[n]));
			return e
		}
		if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLImageElement) return a(t);
		if ("undefined" != typeof SVGElement && t instanceof SVGElement) return {
			element: t,
			options: (0, f["default"])(t),
			renderer: c["default"].SVGRenderer
		};
		if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) return {
			element: t,
			options: (0, f["default"])(t),
			renderer: c["default"].CanvasRenderer
		};
		if (t && t.getContext) return {
			element: t,
			renderer: c["default"].CanvasRenderer
		};
		if (t && "object" === ("undefined" == typeof t ? "undefined" : s(t)) && !t.nodeName) return {
			element: t,
			renderer: c["default"].ObjectRenderer
		};
		throw new l.InvalidElementException
	}

	function o(t) {
		var e = document.querySelectorAll(t);
		if (0 !== e.length) {
			for (var n = [], r = 0; r < e.length; r++) n.push(i(e[r]));
			return n
		}
	}

	function a(t) {
		var e = document.createElement("canvas");
		return {
			element: e,
			options: (0, f["default"])(t),
			renderer: c["default"].CanvasRenderer,
			afterRender: function() {
				t.setAttribute("src", e.toDataURL())
			}
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
		},
		u = n(12),
		f = r(u),
		d = n(14),
		c = r(d),
		l = n(1);
	e["default"] = i
}, function(t, e) {
	"use strict";

	function n(t) {
		function e(t) {
			if (Array.isArray(t))
				for (var r = 0; r < t.length; r++) e(t[r]);
			else t.text = t.text || "", t.data = t.data || "", n.push(t)
		}
		var n = [];
		return e(t), n
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e["default"] = n
}, function(t, e) {
	"use strict";

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function i(t, e) {
		n(this, i), this.data = t, this.text = e.text || t, this.options = e
	};
	e["default"] = r
}, function(t, e, n) {
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

	function s(t) {
		return u(d(t))
	}

	function u(t) {
		return v[t].toString(2)
	}

	function f(t) {
		return g[t]
	}

	function d(t) {
		return g.indexOf(t)
	}

	function c(t) {
		for (var e = 0, n = 0; n < t.length; n++) e += d(t[n]);
		return e %= 43
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.CODE39 = void 0;
	var l = n(10),
		p = r(l),
		h = function(t) {
			function e(n, r) {
				return i(this, e), n = n.toUpperCase(), r.mod43 && (n += f(c(n))), o(this, t.call(this, n, r))
			}
			return a(e, t), e.prototype.encode = function() {
				for (var t = s("*"), e = 0; e < this.data.length; e++) t += s(this.data[e]) + "0";
				return t += s("*"), {
					data: t,
					text: this.text
				}
			}, e.prototype.valid = function() {
				return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1
			}, e
		}(p["default"]),
		g = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"],
		v = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
	e.CODE39 = h
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function i(t) {
		var e = {};
		for (var n in u["default"]) u["default"].hasOwnProperty(n) && (t.hasAttribute("jsbarcode-" + n.toLowerCase()) && (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())), t.hasAttribute("data-" + n.toLowerCase()) && (e[n] = t.getAttribute("data-" + n.toLowerCase())));
		return e.value = t.getAttribute("jsbarcode-value") || t.getAttribute("data-value"), e = (0, a["default"])(e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(2),
		a = r(o),
		s = n(3),
		u = r(s);
	e["default"] = i
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(0),
		a = r(o),
		s = n(4),
		u = function() {
			function t(e, n, r) {
				i(this, t), this.canvas = e, this.encodings = n, this.options = r
			}
			return t.prototype.render = function() {
				if (!this.canvas.getContext) throw new Error("The browser does not support canvas.");
				this.prepareCanvas();
				for (var t = 0; t < this.encodings.length; t++) {
					var e = (0, a["default"])(this.options, this.encodings[t].options);
					this.drawCanvasBarcode(e, this.encodings[t]), this.drawCanvasText(e, this.encodings[t]), this.moveCanvasDrawing(this.encodings[t])
				}
				this.restoreCanvas()
			}, t.prototype.prepareCanvas = function() {
				var t = this.canvas.getContext("2d");
				t.save(), (0, s.calculateEncodingAttributes)(this.encodings, this.options, t);
				var e = (0, s.getTotalWidthOfEncodings)(this.encodings),
					n = (0, s.getMaximumHeightOfEncodings)(this.encodings);
				this.canvas.width = e + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (t.fillStyle = this.options.background, t.fillRect(0, 0, this.canvas.width, this.canvas.height)), t.translate(this.options.marginLeft, 0)
			}, t.prototype.drawCanvasBarcode = function(t, e) {
				var n, r = this.canvas.getContext("2d"),
					i = e.data;
				n = "top" == t.textPosition ? t.marginTop + t.fontSize + t.textMargin : t.marginTop, r.fillStyle = t.lineColor;
				for (var o = 0; o < i.length; o++) {
					var a = o * t.width + e.barcodePadding;
					"1" === i[o] ? r.fillRect(a, n, t.width, t.height) : i[o] && r.fillRect(a, n, t.width, t.height * i[o])
				}
			}, t.prototype.drawCanvasText = function(t, e) {
				var n = this.canvas.getContext("2d"),
					r = t.fontOptions + " " + t.fontSize + "px " + t.font;
				if (t.displayValue) {
					var i, o;
					o = "top" == t.textPosition ? t.marginTop + t.fontSize - t.textMargin : t.height + t.textMargin + t.marginTop + t.fontSize, n.font = r, "left" == t.textAlign || e.barcodePadding > 0 ? (i = 0, n.textAlign = "left") : "right" == t.textAlign ? (i = e.width - 1, n.textAlign = "right") : (i = e.width / 2, n.textAlign = "center"), n.fillText(e.text, i, o)
				}
			}, t.prototype.moveCanvasDrawing = function(t) {
				var e = this.canvas.getContext("2d");
				e.translate(t.width, 0)
			}, t.prototype.restoreCanvas = function() {
				var t = this.canvas.getContext("2d");
				t.restore()
			}, t
		}();
	e["default"] = u
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(13),
		o = r(i),
		a = n(16),
		s = r(a),
		u = n(15),
		f = r(u);
	e["default"] = {
		CanvasRenderer: o["default"],
		SVGRenderer: s["default"],
		ObjectRenderer: f["default"]
	}
}, function(t, e) {
	"use strict";

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function() {
		function t(e, r, i) {
			n(this, t), this.object = e, this.encodings = r, this.options = i
		}
		return t.prototype.render = function() {
			this.object.encodings = this.encodings
		}, t
	}();
	e["default"] = r
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function o(t, e, n) {
		var r = document.createElementNS(c, "g");
		return r.setAttribute("transform", "translate(" + t + ", " + e + ")"), n.appendChild(r), r
	}

	function a(t, e) {
		t.setAttribute("style", "fill:" + e.lineColor + ";")
	}

	function s(t, e, n, r, i) {
		var o = document.createElementNS(c, "rect");
		return o.setAttribute("x", t), o.setAttribute("y", e), o.setAttribute("width", n), o.setAttribute("height", r), i.appendChild(o), o
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var u = n(0),
		f = r(u),
		d = n(4),
		c = "http://www.w3.org/2000/svg",
		l = function() {
			function t(e, n, r) {
				i(this, t), this.svg = e, this.encodings = n, this.options = r
			}
			return t.prototype.render = function() {
				var t = this.options.marginLeft;
				this.prepareSVG();
				for (var e = 0; e < this.encodings.length; e++) {
					var n = this.encodings[e],
						r = (0, f["default"])(this.options, n.options),
						i = o(t, r.marginTop, this.svg);
					a(i, r), this.drawSvgBarcode(i, r, n), this.drawSVGText(i, r, n), t += n.width
				}
			}, t.prototype.prepareSVG = function() {
				for (; this.svg.firstChild;) this.svg.removeChild(this.svg.firstChild);
				(0, d.calculateEncodingAttributes)(this.encodings, this.options);
				var t = (0, d.getTotalWidthOfEncodings)(this.encodings),
					e = (0, d.getMaximumHeightOfEncodings)(this.encodings),
					n = t + this.options.marginLeft + this.options.marginRight;
				this.setSvgAttributes(n, e), this.options.background && s(0, 0, n, e, this.svg).setAttribute("style", "fill:" + this.options.background + ";")
			}, t.prototype.drawSvgBarcode = function(t, e, n) {
				var r, i = n.data;
				r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0;
				for (var o = 0, a = 0, u = 0; u < i.length; u++) a = u * e.width + n.barcodePadding, "1" === i[u] ? o++ : o > 0 && (s(a - e.width * o, r, e.width * o, e.height, t), o = 0);
				o > 0 && s(a - e.width * (o - 1), r, e.width * o, e.height, t)
			}, t.prototype.drawSVGText = function(t, e, n) {
				var r = document.createElementNS(c, "text");
				if (e.displayValue) {
					var i, o;
					r.setAttribute("style", "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font), o = "top" == e.textPosition ? e.fontSize - e.textMargin : e.height + e.textMargin + e.fontSize, "left" == e.textAlign || n.barcodePadding > 0 ? (i = 0, r.setAttribute("text-anchor", "start")) : "right" == e.textAlign ? (i = n.width - 1, r.setAttribute("text-anchor", "end")) : (i = n.width / 2, r.setAttribute("text-anchor", "middle")), r.setAttribute("x", i), r.setAttribute("y", o), r.appendChild(document.createTextNode(n.text)), t.appendChild(r)
				}
			}, t.prototype.setSvgAttributes = function(t, e) {
				var n = this.svg;
				n.setAttribute("width", t + "px"), n.setAttribute("height", e + "px"), n.setAttribute("x", "0px"), n.setAttribute("y", "0px"), n.setAttribute("viewBox", "0 0 " + t + " " + e), n.setAttribute("xmlns", c), n.setAttribute("version", "1.1"), n.style.transform = "translate(0,0)"
			}, t
		}();
	e["default"] = l
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function i(t, e) {
		O.prototype[e] = O.prototype[e.toUpperCase()] = O.prototype[e.toLowerCase()] = function(n, r) {
			var i = this;
			return i._errorHandler.wrapBarcodeCall(function() {
				r.text = "undefined" == typeof r.text ? void 0 : "" + r.text;
				var a = (0, c["default"])(i._options, r);
				a = (0, b["default"])(a);
				var s = t[e],
					u = o(n, s, a);
				return i._encodings.push(u), i
			})
		}
	}

	function o(t, e, n) {
		t = "" + t;
		var r = new e(t, n);
		if (!r.valid()) throw new _.InvalidInputException(r.constructor.name, t);
		var i = r.encode();
		i = (0, p["default"])(i);
		for (var o = 0; o < i.length; o++) i[o].options = (0, c["default"])(n, i[o].options);
		return i
	}

	function a() {
		return f["default"].CODE128 ? "CODE128" : Object.keys(f["default"])[0]
	}

	function s(t, e, n) {
		e = (0, p["default"])(e);
		for (var r = 0; r < e.length; r++) e[r].options = (0, c["default"])(n, e[r].options), (0, g["default"])(e[r].options);
		(0, g["default"])(n);
		var i = t.renderer,
			o = new i(t.element, e, n);
		o.render(), t.afterRender && t.afterRender()
	}
	var u = n(5),
		f = r(u),
		d = n(0),
		c = r(d),
		l = n(9),
		p = r(l),
		h = n(7),
		g = r(h),
		v = n(8),
		y = r(v),
		m = n(2),
		b = r(m),
		w = n(6),
		x = r(w),
		_ = n(1),
		E = n(3),
		C = r(E),
		O = function() {},
		A = function(t, e, n) {
			var r = new O;
			if ("undefined" == typeof t) throw Error("No element to render on was provided.");
			return r._renderProperties = (0, y["default"])(t), r._encodings = [], r._options = C["default"], r._errorHandler = new x["default"](r), "undefined" != typeof e && (n = n || {}, n.format || (n.format = a()), r.options(n)[n.format](e, n).render()), r
		};
	A.getModule = function(t) {
		return f["default"][t]
	};
	for (var P in f["default"]) f["default"].hasOwnProperty(P) && i(f["default"], P);
	O.prototype.options = function(t) {
		return this._options = (0, c["default"])(this._options, t), this
	}, O.prototype.blank = function(t) {
		var e = "0".repeat(t);
		return this._encodings.push({
			data: e
		}), this
	}, O.prototype.init = function() {
		if (this._renderProperties) {
			Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]);
			var t;
			for (var e in this._renderProperties) {
				t = this._renderProperties[e];
				var n = (0, c["default"])(this._options, t.options);
				"auto" == n.format && (n.format = a()), this._errorHandler.wrapBarcodeCall(function() {
					var e = n.value,
						r = f["default"][n.format.toUpperCase()],
						i = o(e, r, n);
					s(t, i, n)
				})
			}
		}
	}, O.prototype.render = function() {
		if (!this._renderProperties) throw new _.NoElementException;
		if (Array.isArray(this._renderProperties))
			for (var t = 0; t < this._renderProperties.length; t++) s(this._renderProperties[t], this._encodings, this._options);
		else s(this._renderProperties, this._encodings, this._options);
		return this
	}, O.prototype._defaults = C["default"], "undefined" != typeof window && (window.JsBarcode = A), "undefined" != typeof jQuery && (jQuery.fn.JsBarcode = function(t, e) {
		var n = [];
		return jQuery(this).each(function() {
			n.push(this)
		}), A(n, t, e)
	}), t.exports = A
}]);
