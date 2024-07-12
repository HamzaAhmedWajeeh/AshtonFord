/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Xi = u(() => {
    window.tram = (function (e) {
      function t(l, I) {
        var O = new W.Bare();
        return O.init(l, I);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (I) {
          return "-" + I.toLowerCase();
        });
      }
      function n(l) {
        var I = parseInt(l.slice(1), 16),
          O = (I >> 16) & 255,
          A = (I >> 8) & 255,
          m = 255 & I;
        return [O, A, m];
      }
      function o(l, I, O) {
        return (
          "#" + ((1 << 24) | (l << 16) | (I << 8) | O).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, I) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof I + "] " + I);
      }
      function s(l, I, O) {
        f("Units do not match [" + l + "]: " + I + ", " + O);
      }
      function c(l, I, O) {
        if ((I !== void 0 && (O = I), l === void 0)) return O;
        var A = O;
        return (
          Ui.test(l) || !an.test(l)
            ? (A = parseInt(l, 10))
            : an.test(l) && (A = 1e3 * parseFloat(l)),
          0 > A && (A = 0),
          A === A ? A : O
        );
      }
      function f(l) {
        ce.debug && window && window.console.warn(l);
      }
      function v(l) {
        for (var I = -1, O = l ? l.length : 0, A = []; ++I < O; ) {
          var m = l[I];
          m && A.push(m);
        }
        return A;
      }
      var d = (function (l, I, O) {
          function A(te) {
            return typeof te == "object";
          }
          function m(te) {
            return typeof te == "function";
          }
          function S() {}
          function Q(te, pe) {
            function H() {
              var Pe = new oe();
              return m(Pe.init) && Pe.init.apply(Pe, arguments), Pe;
            }
            function oe() {}
            pe === O && ((pe = te), (te = Object)), (H.Bare = oe);
            var se,
              ye = (S[l] = te[l]),
              it = (oe[l] = H[l] = new S());
            return (
              (it.constructor = H),
              (H.mixin = function (Pe) {
                return (oe[l] = H[l] = Q(H, Pe)[l]), H;
              }),
              (H.open = function (Pe) {
                if (
                  ((se = {}),
                  m(Pe) ? (se = Pe.call(H, it, ye, H, te)) : A(Pe) && (se = Pe),
                  A(se))
                )
                  for (var Or in se) I.call(se, Or) && (it[Or] = se[Or]);
                return m(it.init) || (it.init = te), H;
              }),
              H.open(pe)
            );
          }
          return Q;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (l, I, O, A) {
              var m = (l /= A) * l,
                S = m * l;
              return (
                I +
                O * (-2.75 * S * m + 11 * m * m + -15.5 * S + 8 * m + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, I, O, A) {
              var m = (l /= A) * l,
                S = m * l;
              return I + O * (-1 * S * m + 3 * m * m + -3 * S + 2 * m);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, I, O, A) {
              var m = (l /= A) * l,
                S = m * l;
              return (
                I +
                O * (0.3 * S * m + -1.6 * m * m + 2.2 * S + -1.8 * m + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, I, O, A) {
              var m = (l /= A) * l,
                S = m * l;
              return I + O * (2 * S * m + -5 * m * m + 2 * S + 2 * m);
            },
          ],
          linear: [
            "linear",
            function (l, I, O, A) {
              return (O * l) / A + I;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, I, O, A) {
              return O * (l /= A) * l + I;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, I, O, A) {
              return -O * (l /= A) * (l - 2) + I;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, I, O, A) {
              return (l /= A / 2) < 1
                ? (O / 2) * l * l + I
                : (-O / 2) * (--l * (l - 2) - 1) + I;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, I, O, A) {
              return O * (l /= A) * l * l + I;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, I, O, A) {
              return O * ((l = l / A - 1) * l * l + 1) + I;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, I, O, A) {
              return (l /= A / 2) < 1
                ? (O / 2) * l * l * l + I
                : (O / 2) * ((l -= 2) * l * l + 2) + I;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, I, O, A) {
              return O * (l /= A) * l * l * l + I;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, I, O, A) {
              return -O * ((l = l / A - 1) * l * l * l - 1) + I;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, I, O, A) {
              return (l /= A / 2) < 1
                ? (O / 2) * l * l * l * l + I
                : (-O / 2) * ((l -= 2) * l * l * l - 2) + I;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, I, O, A) {
              return O * (l /= A) * l * l * l * l + I;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, I, O, A) {
              return O * ((l = l / A - 1) * l * l * l * l + 1) + I;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, I, O, A) {
              return (l /= A / 2) < 1
                ? (O / 2) * l * l * l * l * l + I
                : (O / 2) * ((l -= 2) * l * l * l * l + 2) + I;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, I, O, A) {
              return -O * Math.cos((l / A) * (Math.PI / 2)) + O + I;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, I, O, A) {
              return O * Math.sin((l / A) * (Math.PI / 2)) + I;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, I, O, A) {
              return (-O / 2) * (Math.cos((Math.PI * l) / A) - 1) + I;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, I, O, A) {
              return l === 0 ? I : O * Math.pow(2, 10 * (l / A - 1)) + I;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, I, O, A) {
              return l === A
                ? I + O
                : O * (-Math.pow(2, (-10 * l) / A) + 1) + I;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, I, O, A) {
              return l === 0
                ? I
                : l === A
                ? I + O
                : (l /= A / 2) < 1
                ? (O / 2) * Math.pow(2, 10 * (l - 1)) + I
                : (O / 2) * (-Math.pow(2, -10 * --l) + 2) + I;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, I, O, A) {
              return -O * (Math.sqrt(1 - (l /= A) * l) - 1) + I;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, I, O, A) {
              return O * Math.sqrt(1 - (l = l / A - 1) * l) + I;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, I, O, A) {
              return (l /= A / 2) < 1
                ? (-O / 2) * (Math.sqrt(1 - l * l) - 1) + I
                : (O / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + I;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, I, O, A, m) {
              return (
                m === void 0 && (m = 1.70158),
                O * (l /= A) * l * ((m + 1) * l - m) + I
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, I, O, A, m) {
              return (
                m === void 0 && (m = 1.70158),
                O * ((l = l / A - 1) * l * ((m + 1) * l + m) + 1) + I
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, I, O, A, m) {
              return (
                m === void 0 && (m = 1.70158),
                (l /= A / 2) < 1
                  ? (O / 2) * l * l * (((m *= 1.525) + 1) * l - m) + I
                  : (O / 2) *
                      ((l -= 2) * l * (((m *= 1.525) + 1) * l + m) + 2) +
                    I
              );
            },
          ],
        },
        h = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        _ = document,
        y = window,
        D = "bkwld-tram",
        b = /[\-\.0-9]/g,
        R = /[A-Z]/,
        T = "number",
        L = /^(rgb|#)/,
        q = /(em|cm|mm|in|pt|pc|px)$/,
        M = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        z = "unitless",
        Y = /(all|none) 0s ease 0s/,
        ee = /^(width|height)$/,
        V = " ",
        w = _.createElement("a"),
        g = ["Webkit", "Moz", "O", "ms"],
        x = ["-webkit-", "-moz-", "-o-", "-ms-"],
        P = function (l) {
          if (l in w.style) return { dom: l, css: l };
          var I,
            O,
            A = "",
            m = l.split("-");
          for (I = 0; I < m.length; I++)
            A += m[I].charAt(0).toUpperCase() + m[I].slice(1);
          for (I = 0; I < g.length; I++)
            if (((O = g[I] + A), O in w.style))
              return { dom: O, css: x[I] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: P("transform"),
          transition: P("transition"),
          backface: P("backface-visibility"),
          timing: P("transition-timing-function"),
        });
      if (G.transition) {
        var $ = G.timing.dom;
        if (((w.style[$] = E["ease-in-back"][0]), !w.style[$]))
          for (var Z in h) E[Z][0] = h[Z];
      }
      var F = (t.frame = (function () {
          var l =
            y.requestAnimationFrame ||
            y.webkitRequestAnimationFrame ||
            y.mozRequestAnimationFrame ||
            y.oRequestAnimationFrame ||
            y.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(y)
            : function (I) {
                y.setTimeout(I, 16);
              };
        })()),
        j = (t.now = (function () {
          var l = y.performance,
            I = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return I && G.bind
            ? I.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        K = d(function (l) {
          function I(J, ue) {
            var Ee = v(("" + J).split(V)),
              le = Ee[0];
            ue = ue || {};
            var qe = Tr[le];
            if (!qe) return f("Unsupported property: " + le);
            if (!ue.weak || !this.props[le]) {
              var je = qe[0],
                De = this.props[le];
              return (
                De || (De = this.props[le] = new je.Bare()),
                De.init(this.$el, Ee, qe, ue),
                De
              );
            }
          }
          function O(J, ue, Ee) {
            if (J) {
              var le = typeof J;
              if (
                (ue ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                le == "number" && ue)
              )
                return (
                  (this.timer = new ae({
                    duration: J,
                    context: this,
                    complete: S,
                  })),
                  void (this.active = !0)
                );
              if (le == "string" && ue) {
                switch (J) {
                  case "hide":
                    H.call(this);
                    break;
                  case "stop":
                    Q.call(this);
                    break;
                  case "redraw":
                    oe.call(this);
                    break;
                  default:
                    I.call(this, J, Ee && Ee[1]);
                }
                return S.call(this);
              }
              if (le == "function") return void J.call(this, this);
              if (le == "object") {
                var qe = 0;
                it.call(
                  this,
                  J,
                  function (Ie, mI) {
                    Ie.span > qe && (qe = Ie.span), Ie.stop(), Ie.animate(mI);
                  },
                  function (Ie) {
                    "wait" in Ie && (qe = c(Ie.wait, 0));
                  }
                ),
                  ye.call(this),
                  qe > 0 &&
                    ((this.timer = new ae({ duration: qe, context: this })),
                    (this.active = !0),
                    ue && (this.timer.complete = S));
                var je = this,
                  De = !1,
                  sn = {};
                F(function () {
                  it.call(je, J, function (Ie) {
                    Ie.active && ((De = !0), (sn[Ie.name] = Ie.nextStyle));
                  }),
                    De && je.$el.css(sn);
                });
              }
            }
          }
          function A(J) {
            (J = c(J, 0)),
              this.active
                ? this.queue.push({ options: J })
                : ((this.timer = new ae({
                    duration: J,
                    context: this,
                    complete: S,
                  })),
                  (this.active = !0));
          }
          function m(J) {
            return this.active
              ? (this.queue.push({ options: J, args: arguments }),
                void (this.timer.complete = S))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function S() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var J = this.queue.shift();
              O.call(this, J.options, !0, J.args);
            }
          }
          function Q(J) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ue;
            typeof J == "string"
              ? ((ue = {}), (ue[J] = 1))
              : (ue = typeof J == "object" && J != null ? J : this.props),
              it.call(this, ue, Pe),
              ye.call(this);
          }
          function te(J) {
            Q.call(this, J), it.call(this, J, Or, yI);
          }
          function pe(J) {
            typeof J != "string" && (J = "block"), (this.el.style.display = J);
          }
          function H() {
            Q.call(this), (this.el.style.display = "none");
          }
          function oe() {
            this.el.offsetHeight;
          }
          function se() {
            Q.call(this), e.removeData(this.el, D), (this.$el = this.el = null);
          }
          function ye() {
            var J,
              ue,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (J in this.props)
              (ue = this.props[J]), ue.active && Ee.push(ue.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[G.transition.dom] = Ee));
          }
          function it(J, ue, Ee) {
            var le,
              qe,
              je,
              De,
              sn = ue !== Pe,
              Ie = {};
            for (le in J)
              (je = J[le]),
                le in nt
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[le] = je))
                  : (R.test(le) && (le = r(le)),
                    le in Tr
                      ? (Ie[le] = je)
                      : (De || (De = {}), (De[le] = je)));
            for (le in Ie) {
              if (((je = Ie[le]), (qe = this.props[le]), !qe)) {
                if (!sn) continue;
                qe = I.call(this, le);
              }
              ue.call(this, qe, je);
            }
            Ee && De && Ee.call(this, De);
          }
          function Pe(J) {
            J.stop();
          }
          function Or(J, ue) {
            J.set(ue);
          }
          function yI(J) {
            this.$el.css(J);
          }
          function He(J, ue) {
            l[J] = function () {
              return this.children
                ? II.call(this, ue, arguments)
                : (this.el && ue.apply(this, arguments), this);
            };
          }
          function II(J, ue) {
            var Ee,
              le = this.children.length;
            for (Ee = 0; le > Ee; Ee++) J.apply(this.children[Ee], ue);
            return this;
          }
          (l.init = function (J) {
            if (
              ((this.$el = e(J)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ce.keepInherited && !ce.fallback)
            ) {
              var ue = rt(this.el, "transition");
              ue && !Y.test(ue) && (this.upstream = ue);
            }
            G.backface &&
              ce.hideBackface &&
              Be(this.el, G.backface.css, "hidden");
          }),
            He("add", I),
            He("start", O),
            He("wait", A),
            He("then", m),
            He("next", S),
            He("stop", Q),
            He("set", te),
            He("show", pe),
            He("hide", H),
            He("redraw", oe),
            He("destroy", se);
        }),
        W = d(K, function (l) {
          function I(O, A) {
            var m = e.data(O, D) || e.data(O, D, new K.Bare());
            return m.el || m.init(O), A ? m.start(A) : m;
          }
          l.init = function (O, A) {
            var m = e(O);
            if (!m.length) return this;
            if (m.length === 1) return I(m[0], A);
            var S = [];
            return (
              m.each(function (Q, te) {
                S.push(I(te, A));
              }),
              (this.children = S),
              this
            );
          };
        }),
        U = d(function (l) {
          function I() {
            var S = this.get();
            this.update("auto");
            var Q = this.get();
            return this.update(S), Q;
          }
          function O(S, Q, te) {
            return Q !== void 0 && (te = Q), S in E ? S : te;
          }
          function A(S) {
            var Q = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
            return (Q ? o(Q[1], Q[2], Q[3]) : S).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var m = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (S, Q, te, pe) {
            (this.$el = S), (this.el = S[0]);
            var H = Q[0];
            te[2] && (H = te[2]),
              mr[H] && (H = mr[H]),
              (this.name = H),
              (this.type = te[1]),
              (this.duration = c(Q[1], this.duration, m.duration)),
              (this.ease = O(Q[2], this.ease, m.ease)),
              (this.delay = c(Q[3], this.delay, m.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ee.test(this.name)),
              (this.unit = pe.unit || this.unit || ce.defaultUnit),
              (this.angle = pe.angle || this.angle || ce.defaultAngle),
              ce.fallback || pe.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    V +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? V + E[this.ease][0] : "") +
                    (this.delay ? V + this.delay + "ms" : "")));
          }),
            (l.set = function (S) {
              (S = this.convert(S, this.type)), this.update(S), this.redraw();
            }),
            (l.transition = function (S) {
              (this.active = !0),
                (S = this.convert(S, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  S == "auto" && (S = I.call(this))),
                (this.nextStyle = S);
            }),
            (l.fallback = function (S) {
              var Q =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (S = this.convert(S, this.type)),
                this.auto &&
                  (Q == "auto" && (Q = this.convert(this.get(), this.type)),
                  S == "auto" && (S = I.call(this))),
                (this.tween = new C({
                  from: Q,
                  to: S,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return rt(this.el, this.name);
            }),
            (l.update = function (S) {
              Be(this.el, this.name, S);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Be(this.el, this.name, this.get()));
              var S = this.tween;
              S && S.context && S.destroy();
            }),
            (l.convert = function (S, Q) {
              if (S == "auto" && this.auto) return S;
              var te,
                pe = typeof S == "number",
                H = typeof S == "string";
              switch (Q) {
                case T:
                  if (pe) return S;
                  if (H && S.replace(b, "") === "") return +S;
                  te = "number(unitless)";
                  break;
                case L:
                  if (H) {
                    if (S === "" && this.original) return this.original;
                    if (Q.test(S))
                      return S.charAt(0) == "#" && S.length == 7 ? S : A(S);
                  }
                  te = "hex or rgb string";
                  break;
                case q:
                  if (pe) return S + this.unit;
                  if (H && Q.test(S)) return S;
                  te = "number(px) or string(unit)";
                  break;
                case M:
                  if (pe) return S + this.unit;
                  if (H && Q.test(S)) return S;
                  te = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (pe) return S + this.angle;
                  if (H && Q.test(S)) return S;
                  te = "number(deg) or string(angle)";
                  break;
                case z:
                  if (pe || (H && M.test(S))) return S;
                  te = "number(unitless) or string(unit or %)";
              }
              return a(te, S), S;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        p = d(U, function (l, I) {
          l.init = function () {
            I.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), L));
          };
        }),
        B = d(U, function (l, I) {
          (l.init = function () {
            I.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (O) {
              this.$el[this.name](O);
            });
        }),
        k = d(U, function (l, I) {
          function O(A, m) {
            var S, Q, te, pe, H;
            for (S in A)
              (pe = nt[S]),
                (te = pe[0]),
                (Q = pe[1] || S),
                (H = this.convert(A[S], te)),
                m.call(this, Q, H, te);
          }
          (l.init = function () {
            I.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                nt.perspective &&
                  ce.perspective &&
                  ((this.current.perspective = ce.perspective),
                  Be(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (A) {
              O.call(this, A, function (m, S) {
                this.current[m] = S;
              }),
                Be(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (A) {
              var m = this.values(A);
              this.tween = new Oe({
                current: this.current,
                values: m,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var S,
                Q = {};
              for (S in this.current) Q[S] = S in m ? m[S] : this.current[S];
              (this.active = !0), (this.nextStyle = this.style(Q));
            }),
            (l.fallback = function (A) {
              var m = this.values(A);
              this.tween = new Oe({
                current: this.current,
                values: m,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              Be(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (A) {
              var m,
                S = "";
              for (m in A) S += m + "(" + A[m] + ") ";
              return S;
            }),
            (l.values = function (A) {
              var m,
                S = {};
              return (
                O.call(this, A, function (Q, te, pe) {
                  (S[Q] = te),
                    this.current[Q] === void 0 &&
                      ((m = 0),
                      ~Q.indexOf("scale") && (m = 1),
                      (this.current[Q] = this.convert(m, pe)));
                }),
                S
              );
            });
        }),
        C = d(function (l) {
          function I(H) {
            te.push(H) === 1 && F(O);
          }
          function O() {
            var H,
              oe,
              se,
              ye = te.length;
            if (ye)
              for (F(O), oe = j(), H = ye; H--; )
                (se = te[H]), se && se.render(oe);
          }
          function A(H) {
            var oe,
              se = e.inArray(H, te);
            se >= 0 &&
              ((oe = te.slice(se + 1)),
              (te.length = se),
              oe.length && (te = te.concat(oe)));
          }
          function m(H) {
            return Math.round(H * pe) / pe;
          }
          function S(H, oe, se) {
            return o(
              H[0] + se * (oe[0] - H[0]),
              H[1] + se * (oe[1] - H[1]),
              H[2] + se * (oe[2] - H[2])
            );
          }
          var Q = { ease: E.ease[1], from: 0, to: 1 };
          (l.init = function (H) {
            (this.duration = H.duration || 0), (this.delay = H.delay || 0);
            var oe = H.ease || Q.ease;
            E[oe] && (oe = E[oe][1]),
              typeof oe != "function" && (oe = Q.ease),
              (this.ease = oe),
              (this.update = H.update || i),
              (this.complete = H.complete || i),
              (this.context = H.context || this),
              (this.name = H.name);
            var se = H.from,
              ye = H.to;
            se === void 0 && (se = Q.from),
              ye === void 0 && (ye = Q.to),
              (this.unit = H.unit || ""),
              typeof se == "number" && typeof ye == "number"
                ? ((this.begin = se), (this.change = ye - se))
                : this.format(ye, se),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              H.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), I(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), A(this));
            }),
            (l.render = function (H) {
              var oe,
                se = H - this.start;
              if (this.delay) {
                if (se <= this.delay) return;
                se -= this.delay;
              }
              if (se < this.duration) {
                var ye = this.ease(se, 0, 1, this.duration);
                return (
                  (oe = this.startRGB
                    ? S(this.startRGB, this.endRGB, ye)
                    : m(this.begin + ye * this.change)),
                  (this.value = oe + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (oe = this.endHex || this.begin + this.change),
                (this.value = oe + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (H, oe) {
              if (((oe += ""), (H += ""), H.charAt(0) == "#"))
                return (
                  (this.startRGB = n(oe)),
                  (this.endRGB = n(H)),
                  (this.endHex = H),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var se = oe.replace(b, ""),
                  ye = H.replace(b, "");
                se !== ye && s("tween", oe, H), (this.unit = se);
              }
              (oe = parseFloat(oe)),
                (H = parseFloat(H)),
                (this.begin = this.value = oe),
                (this.change = H - oe);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var te = [],
            pe = 1e3;
        }),
        ae = d(C, function (l) {
          (l.init = function (I) {
            (this.duration = I.duration || 0),
              (this.complete = I.complete || i),
              (this.context = I.context),
              this.play();
          }),
            (l.render = function (I) {
              var O = I - this.start;
              O < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Oe = d(C, function (l, I) {
          (l.init = function (O) {
            (this.context = O.context),
              (this.update = O.update),
              (this.tweens = []),
              (this.current = O.current);
            var A, m;
            for (A in O.values)
              (m = O.values[A]),
                this.current[A] !== m &&
                  this.tweens.push(
                    new C({
                      name: A,
                      from: this.current[A],
                      to: m,
                      duration: O.duration,
                      delay: O.delay,
                      ease: O.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (O) {
              var A,
                m,
                S = this.tweens.length,
                Q = !1;
              for (A = S; A--; )
                (m = this.tweens[A]),
                  m.context &&
                    (m.render(O), (this.current[m.name] = m.value), (Q = !0));
              return Q
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((I.destroy.call(this), this.tweens)) {
                var O,
                  A = this.tweens.length;
                for (O = A; O--; ) this.tweens[O].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ce = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (ce.fallback = !0);
        ce.agentTests.push("(" + l + ")");
        var I = new RegExp(ce.agentTests.join("|"), "i");
        ce.fallback = I.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new C(l);
        }),
        (t.delay = function (l, I, O) {
          return new ae({ complete: I, duration: l, context: O });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var Be = e.style,
        rt = e.css,
        mr = { transform: G.transform && G.transform.css },
        Tr = {
          color: [p, L],
          background: [p, L, "background-color"],
          "outline-color": [p, L],
          "border-color": [p, L],
          "border-top-color": [p, L],
          "border-right-color": [p, L],
          "border-bottom-color": [p, L],
          "border-left-color": [p, L],
          "border-width": [U, q],
          "border-top-width": [U, q],
          "border-right-width": [U, q],
          "border-bottom-width": [U, q],
          "border-left-width": [U, q],
          "border-spacing": [U, q],
          "letter-spacing": [U, q],
          margin: [U, q],
          "margin-top": [U, q],
          "margin-right": [U, q],
          "margin-bottom": [U, q],
          "margin-left": [U, q],
          padding: [U, q],
          "padding-top": [U, q],
          "padding-right": [U, q],
          "padding-bottom": [U, q],
          "padding-left": [U, q],
          "outline-width": [U, q],
          opacity: [U, T],
          top: [U, M],
          right: [U, M],
          bottom: [U, M],
          left: [U, M],
          "font-size": [U, M],
          "text-indent": [U, M],
          "word-spacing": [U, M],
          width: [U, M],
          "min-width": [U, M],
          "max-width": [U, M],
          height: [U, M],
          "min-height": [U, M],
          "max-height": [U, M],
          "line-height": [U, z],
          "scroll-top": [B, T, "scrollTop"],
          "scroll-left": [B, T, "scrollLeft"],
        },
        nt = {};
      G.transform &&
        ((Tr.transform = [k]),
        (nt = {
          x: [M, "translateX"],
          y: [M, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        G.transform &&
          G.backface &&
          ((nt.z = [M, "translateZ"]),
          (nt.rotateZ = [X]),
          (nt.scaleZ = [T]),
          (nt.perspective = [q]));
      var Ui = /ms/,
        an = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ws = u((VW, Ss) => {
    var TI = window.$,
      OI = Xi() && TI.tram;
    Ss.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        v = r.forEach,
        d = r.map,
        E = r.reduce,
        h = r.reduceRight,
        _ = r.filter,
        y = r.every,
        D = r.some,
        b = r.indexOf,
        R = r.lastIndexOf,
        T = Array.isArray,
        L = Object.keys,
        q = o.bind,
        M =
          (e.each =
          e.forEach =
            function (g, x, P) {
              if (g == null) return g;
              if (v && g.forEach === v) g.forEach(x, P);
              else if (g.length === +g.length) {
                for (var G = 0, $ = g.length; G < $; G++)
                  if (x.call(P, g[G], G, g) === t) return;
              } else
                for (var Z = e.keys(g), G = 0, $ = Z.length; G < $; G++)
                  if (x.call(P, g[Z[G]], Z[G], g) === t) return;
              return g;
            });
      (e.map = e.collect =
        function (g, x, P) {
          var G = [];
          return g == null
            ? G
            : d && g.map === d
            ? g.map(x, P)
            : (M(g, function ($, Z, F) {
                G.push(x.call(P, $, Z, F));
              }),
              G);
        }),
        (e.find = e.detect =
          function (g, x, P) {
            var G;
            return (
              X(g, function ($, Z, F) {
                if (x.call(P, $, Z, F)) return (G = $), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (g, x, P) {
            var G = [];
            return g == null
              ? G
              : _ && g.filter === _
              ? g.filter(x, P)
              : (M(g, function ($, Z, F) {
                  x.call(P, $, Z, F) && G.push($);
                }),
                G);
          });
      var X =
        (e.some =
        e.any =
          function (g, x, P) {
            x || (x = e.identity);
            var G = !1;
            return g == null
              ? G
              : D && g.some === D
              ? g.some(x, P)
              : (M(g, function ($, Z, F) {
                  if (G || (G = x.call(P, $, Z, F))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (g, x) {
          return g == null
            ? !1
            : b && g.indexOf === b
            ? g.indexOf(x) != -1
            : X(g, function (P) {
                return P === x;
              });
        }),
        (e.delay = function (g, x) {
          var P = a.call(arguments, 2);
          return setTimeout(function () {
            return g.apply(null, P);
          }, x);
        }),
        (e.defer = function (g) {
          return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (g) {
          var x, P, G;
          return function () {
            x ||
              ((x = !0),
              (P = arguments),
              (G = this),
              OI.frame(function () {
                (x = !1), g.apply(G, P);
              }));
          };
        }),
        (e.debounce = function (g, x, P) {
          var G,
            $,
            Z,
            F,
            j,
            K = function () {
              var W = e.now() - F;
              W < x
                ? (G = setTimeout(K, x - W))
                : ((G = null), P || ((j = g.apply(Z, $)), (Z = $ = null)));
            };
          return function () {
            (Z = this), ($ = arguments), (F = e.now());
            var W = P && !G;
            return (
              G || (G = setTimeout(K, x)),
              W && ((j = g.apply(Z, $)), (Z = $ = null)),
              j
            );
          };
        }),
        (e.defaults = function (g) {
          if (!e.isObject(g)) return g;
          for (var x = 1, P = arguments.length; x < P; x++) {
            var G = arguments[x];
            for (var $ in G) g[$] === void 0 && (g[$] = G[$]);
          }
          return g;
        }),
        (e.keys = function (g) {
          if (!e.isObject(g)) return [];
          if (L) return L(g);
          var x = [];
          for (var P in g) e.has(g, P) && x.push(P);
          return x;
        }),
        (e.has = function (g, x) {
          return f.call(g, x);
        }),
        (e.isObject = function (g) {
          return g === Object(g);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        Y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ee = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (g) {
          return "\\" + Y[g];
        },
        w = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (g, x, P) {
          !x && P && (x = P), (x = e.defaults({}, x, e.templateSettings));
          var G = RegExp(
              [
                (x.escape || z).source,
                (x.interpolate || z).source,
                (x.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            $ = 0,
            Z = "__p+='";
          g.replace(G, function (W, U, p, B, k) {
            return (
              (Z += g.slice($, k).replace(ee, V)),
              ($ = k + W.length),
              U
                ? (Z +=
                    `'+
    ((__t=(` +
                    U +
                    `))==null?'':_.escape(__t))+
    '`)
                : p
                ? (Z +=
                    `'+
    ((__t=(` +
                    p +
                    `))==null?'':__t)+
    '`)
                : B &&
                  (Z +=
                    `';
    ` +
                    B +
                    `
    __p+='`),
              W
            );
          }),
            (Z += `';
    `);
          var F = x.variable;
          if (F) {
            if (!w.test(F))
              throw new Error("variable is not a bare identifier: " + F);
          } else
            (Z =
              `with(obj||{}){
    ` +
              Z +
              `}
    `),
              (F = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            Z +
            `return __p;
    `;
          var j;
          try {
            j = new Function(x.variable || "obj", "_", Z);
          } catch (W) {
            throw ((W.source = Z), W);
          }
          var K = function (W) {
            return j.call(this, W, e);
          };
          return (
            (K.source =
              "function(" +
              F +
              `){
    ` +
              Z +
              "}"),
            K
          );
        }),
        e
      );
    })();
  });
  var Xe = u((WW, Ms) => {
    var fe = {},
      Ht = {},
      jt = [],
      Wi = window.Webflow || [],
      yt = window.jQuery,
      Ke = yt(window),
      bI = yt(document),
      ot = yt.isFunction,
      ke = (fe._ = ws()),
      Cs = (fe.tram = Xi() && yt.tram),
      cn = !1,
      Bi = !1;
    Cs.config.hideBackface = !1;
    Cs.config.keepInherited = !0;
    fe.define = function (e, t, r) {
      Ht[e] && Ps(Ht[e]);
      var n = (Ht[e] = t(yt, ke, r) || {});
      return Ns(n), n;
    };
    fe.require = function (e) {
      return Ht[e];
    };
    function Ns(e) {
      fe.env() &&
        (ot(e.design) && Ke.on("__wf_design", e.design),
        ot(e.preview) && Ke.on("__wf_preview", e.preview)),
        ot(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && ot(e.ready) && AI(e);
    }
    function AI(e) {
      if (cn) {
        e.ready();
        return;
      }
      ke.contains(jt, e.ready) || jt.push(e.ready);
    }
    function Ps(e) {
      ot(e.design) && Ke.off("__wf_design", e.design),
        ot(e.preview) && Ke.off("__wf_preview", e.preview),
        ot(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && ot(e.ready) && SI(e);
    }
    function SI(e) {
      jt = ke.filter(jt, function (t) {
        return t !== e.ready;
      });
    }
    fe.push = function (e) {
      if (cn) {
        ot(e) && e();
        return;
      }
      Wi.push(e);
    };
    fe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var un = navigator.userAgent.toLowerCase(),
      qs = (fe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      wI = (fe.env.chrome =
        /chrome/.test(un) &&
        /Google/.test(navigator.vendor) &&
        parseInt(un.match(/chrome\/(\d+)\./)[1], 10)),
      RI = (fe.env.ios = /(ipod|iphone|ipad)/.test(un));
    fe.env.safari = /safari/.test(un) && !wI && !RI;
    var Vi;
    qs &&
      bI.on("touchstart mousedown", function (e) {
        Vi = e.target;
      });
    fe.validClick = qs
      ? function (e) {
          return e === Vi || yt.contains(e, Vi);
        }
      : function () {
          return !0;
        };
    var Ls = "resize.webflow orientationchange.webflow load.webflow",
      CI = "scroll.webflow " + Ls;
    fe.resize = Hi(Ke, Ls);
    fe.scroll = Hi(Ke, CI);
    fe.redraw = Hi();
    function Hi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ke.throttle(function (o) {
          ke.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (ke.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ke.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    fe.location = function (e) {
      window.location = e;
    };
    fe.env() && (fe.location = function () {});
    fe.ready = function () {
      (cn = !0), Bi ? NI() : ke.each(jt, Rs), ke.each(Wi, Rs), fe.resize.up();
    };
    function Rs(e) {
      ot(e) && e();
    }
    function NI() {
      (Bi = !1), ke.each(Ht, Ns);
    }
    var Nt;
    fe.load = function (e) {
      Nt.then(e);
    };
    function xs() {
      Nt && (Nt.reject(), Ke.off("load", Nt.resolve)),
        (Nt = new yt.Deferred()),
        Ke.on("load", Nt.resolve);
    }
    fe.destroy = function (e) {
      (e = e || {}),
        (Bi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (cn = e.domready),
        ke.each(Ht, Ps),
        fe.resize.off(),
        fe.scroll.off(),
        fe.redraw.off(),
        (jt = []),
        (Wi = []),
        Nt.state() === "pending" && xs();
    };
    yt(fe.ready);
    xs();
    Ms.exports = window.Webflow = fe;
  });
  var Gs = u((BW, Fs) => {
    var Ds = Xe();
    Ds.define(
      "brand",
      (Fs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var h = n.attr("data-wf-status"),
            _ = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && a.hostname !== _ && (h = !0),
            h &&
              !s &&
              ((f = f || d()),
              E(),
              setTimeout(E, 500),
              e(r).off(c, v).on(c, v));
        };
        function v() {
          var h =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", h ? "display: none !important;" : "");
        }
        function d() {
          var h = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            y = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return h.append(_, y), h[0];
        }
        function E() {
          var h = o.children(i),
            _ = h.length && h.get(0) === f,
            y = Ds.env("editor");
          if (_) {
            y && h.remove();
            return;
          }
          h.length && h.remove(), y || o.append(f);
        }
        return t;
      })
    );
  });
  var Xs = u((HW, Us) => {
    var ji = Xe();
    ji.define(
      "edit",
      (Us.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (ji.env("test") || ji.env("frame")) && !r.fixture && !PI())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || E,
          v = !1;
        try {
          v =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        v
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : o.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function E() {
          (c = !0),
            (window.WebflowEditor = !0),
            o.off(s, d),
            R(function (L) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: h(L),
              });
            });
        }
        function h(L) {
          return function (q) {
            if (!q) {
              console.error("Could not load editor data");
              return;
            }
            (q.thirdPartyCookiesSupported = L),
              _(D(q.bugReporterScriptPath), function () {
                _(D(q.scriptPath), function () {
                  window.WebflowEditor(q);
                });
              });
          };
        }
        function _(L, q) {
          e.ajax({ type: "GET", url: L, dataType: "script", cache: !0 }).then(
            q,
            y
          );
        }
        function y(L, q, M) {
          throw (console.error("Could not load editor script: " + q), M);
        }
        function D(L) {
          return L.indexOf("//") >= 0
            ? L
            : b("https://editor-api.webflow.com" + L);
        }
        function b(L) {
          return L.replace(/([^:])\/\//g, "$1/");
        }
        function R(L) {
          var q = window.document.createElement("iframe");
          (q.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (q.style.display = "none"),
            (q.sandbox = "allow-scripts allow-same-origin");
          var M = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (T(q, M), L(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (T(q, M), L(!0));
          };
          (q.onerror = function () {
            T(q, M), L(!1);
          }),
            window.addEventListener("message", M, !1),
            window.document.body.appendChild(q);
        }
        function T(L, q) {
          window.removeEventListener("message", q, !1), L.remove();
        }
        return n;
      })
    );
    function PI() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ws = u((jW, Vs) => {
    var qI = Xe();
    qI.define(
      "focus-visible",
      (Vs.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function c(T) {
            var L = T.type,
              q = T.tagName;
            return !!(
              (q === "INPUT" && a[L] && !T.readOnly) ||
              (q === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-wf-focus-visible") ||
              T.setAttribute("data-wf-focus-visible", "true");
          }
          function v(T) {
            T.getAttribute("data-wf-focus-visible") &&
              T.removeAttribute("data-wf-focus-visible");
          }
          function d(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function h(T) {
            s(T.target) && (n || c(T.target)) && f(T.target);
          }
          function _(T) {
            s(T.target) &&
              T.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              v(T.target));
          }
          function y() {
            document.visibilityState === "hidden" && (o && (n = !0), D());
          }
          function D() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function b() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", y, !0),
            D(),
            r.addEventListener("focus", h, !0),
            r.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var js = u((kW, Hs) => {
    var Bs = Xe();
    Bs.define(
      "focus",
      (Hs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Bs.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var zs = u((KW, Ks) => {
    "use strict";
    var ki = window.jQuery,
      at = {},
      ln = [],
      ks = ".w-ix",
      fn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ki(t).triggerHandler(at.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ki(t).triggerHandler(at.types.OUTRO));
        },
      };
    at.triggers = {};
    at.types = { INTRO: "w-ix-intro" + ks, OUTRO: "w-ix-outro" + ks };
    at.init = function () {
      for (var e = ln.length, t = 0; t < e; t++) {
        var r = ln[t];
        r[0](0, r[1]);
      }
      (ln = []), ki.extend(at.triggers, fn);
    };
    at.async = function () {
      for (var e in fn) {
        var t = fn[e];
        fn.hasOwnProperty(e) &&
          (at.triggers[e] = function (r, n) {
            ln.push([t, n]);
          });
      }
    };
    at.async();
    Ks.exports = at;
  });
  var pn = u((zW, Qs) => {
    "use strict";
    var Ki = zs();
    function Ys(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var LI = window.jQuery,
      dn = {},
      $s = ".w-ix",
      xI = {
        reset: function (e, t) {
          Ki.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ki.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ki.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE");
        },
      };
    dn.triggers = {};
    dn.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
    LI.extend(dn.triggers, xI);
    Qs.exports = dn;
  });
  var Zs = u((YW, vt) => {
    function zi(e) {
      return (
        (vt.exports = zi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (vt.exports.__esModule = !0),
        (vt.exports.default = vt.exports),
        zi(e)
      );
    }
    (vt.exports = zi),
      (vt.exports.__esModule = !0),
      (vt.exports.default = vt.exports);
  });
  var Pt = u(($W, br) => {
    var MI = Zs().default;
    function Js(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Js = function (o) {
        return o ? r : t;
      })(e);
    }
    function DI(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (MI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Js(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (br.exports = DI),
      (br.exports.__esModule = !0),
      (br.exports.default = br.exports);
  });
  var ze = u((QW, Ar) => {
    function FI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ar.exports = FI),
      (Ar.exports.__esModule = !0),
      (Ar.exports.default = Ar.exports);
  });
  var ge = u((ZW, eu) => {
    var vn = function (e) {
      return e && e.Math == Math && e;
    };
    eu.exports =
      vn(typeof globalThis == "object" && globalThis) ||
      vn(typeof window == "object" && window) ||
      vn(typeof self == "object" && self) ||
      vn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var kt = u((JW, tu) => {
    tu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var qt = u((eB, ru) => {
    var GI = kt();
    ru.exports = !GI(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var gn = u((tB, nu) => {
    var Sr = Function.prototype.call;
    nu.exports = Sr.bind
      ? Sr.bind(Sr)
      : function () {
          return Sr.apply(Sr, arguments);
        };
  });
  var su = u((au) => {
    "use strict";
    var iu = {}.propertyIsEnumerable,
      ou = Object.getOwnPropertyDescriptor,
      UI = ou && !iu.call({ 1: 2 }, 1);
    au.f = UI
      ? function (t) {
          var r = ou(this, t);
          return !!r && r.enumerable;
        }
      : iu;
  });
  var Yi = u((nB, uu) => {
    uu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = u((iB, lu) => {
    var cu = Function.prototype,
      $i = cu.bind,
      Qi = cu.call,
      XI = $i && $i.bind(Qi);
    lu.exports = $i
      ? function (e) {
          return e && XI(Qi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Qi.apply(e, arguments);
            }
          );
        };
  });
  var pu = u((oB, du) => {
    var fu = Ye(),
      VI = fu({}.toString),
      WI = fu("".slice);
    du.exports = function (e) {
      return WI(VI(e), 8, -1);
    };
  });
  var gu = u((aB, vu) => {
    var BI = ge(),
      HI = Ye(),
      jI = kt(),
      kI = pu(),
      Zi = BI.Object,
      KI = HI("".split);
    vu.exports = jI(function () {
      return !Zi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return kI(e) == "String" ? KI(e, "") : Zi(e);
        }
      : Zi;
  });
  var Ji = u((sB, Eu) => {
    var zI = ge(),
      YI = zI.TypeError;
    Eu.exports = function (e) {
      if (e == null) throw YI("Can't call method on " + e);
      return e;
    };
  });
  var wr = u((uB, hu) => {
    var $I = gu(),
      QI = Ji();
    hu.exports = function (e) {
      return $I(QI(e));
    };
  });
  var st = u((cB, _u) => {
    _u.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Kt = u((lB, yu) => {
    var ZI = st();
    yu.exports = function (e) {
      return typeof e == "object" ? e !== null : ZI(e);
    };
  });
  var Rr = u((fB, Iu) => {
    var eo = ge(),
      JI = st(),
      em = function (e) {
        return JI(e) ? e : void 0;
      };
    Iu.exports = function (e, t) {
      return arguments.length < 2 ? em(eo[e]) : eo[e] && eo[e][t];
    };
  });
  var Tu = u((dB, mu) => {
    var tm = Ye();
    mu.exports = tm({}.isPrototypeOf);
  });
  var bu = u((pB, Ou) => {
    var rm = Rr();
    Ou.exports = rm("navigator", "userAgent") || "";
  });
  var Pu = u((vB, Nu) => {
    var Cu = ge(),
      to = bu(),
      Au = Cu.process,
      Su = Cu.Deno,
      wu = (Au && Au.versions) || (Su && Su.version),
      Ru = wu && wu.v8,
      $e,
      En;
    Ru &&
      (($e = Ru.split(".")),
      (En = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !En &&
      to &&
      (($e = to.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = to.match(/Chrome\/(\d+)/)), $e && (En = +$e[1])));
    Nu.exports = En;
  });
  var ro = u((gB, Lu) => {
    var qu = Pu(),
      nm = kt();
    Lu.exports =
      !!Object.getOwnPropertySymbols &&
      !nm(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && qu && qu < 41)
        );
      });
  });
  var no = u((EB, xu) => {
    var im = ro();
    xu.exports = im && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var io = u((hB, Mu) => {
    var om = ge(),
      am = Rr(),
      sm = st(),
      um = Tu(),
      cm = no(),
      lm = om.Object;
    Mu.exports = cm
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = am("Symbol");
          return sm(t) && um(t.prototype, lm(e));
        };
  });
  var Fu = u((_B, Du) => {
    var fm = ge(),
      dm = fm.String;
    Du.exports = function (e) {
      try {
        return dm(e);
      } catch {
        return "Object";
      }
    };
  });
  var Uu = u((yB, Gu) => {
    var pm = ge(),
      vm = st(),
      gm = Fu(),
      Em = pm.TypeError;
    Gu.exports = function (e) {
      if (vm(e)) return e;
      throw Em(gm(e) + " is not a function");
    };
  });
  var Vu = u((IB, Xu) => {
    var hm = Uu();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : hm(r);
    };
  });
  var Bu = u((mB, Wu) => {
    var _m = ge(),
      oo = gn(),
      ao = st(),
      so = Kt(),
      ym = _m.TypeError;
    Wu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ao((r = e.toString)) && !so((n = oo(r, e)))) ||
        (ao((r = e.valueOf)) && !so((n = oo(r, e)))) ||
        (t !== "string" && ao((r = e.toString)) && !so((n = oo(r, e))))
      )
        return n;
      throw ym("Can't convert object to primitive value");
    };
  });
  var ju = u((TB, Hu) => {
    Hu.exports = !1;
  });
  var hn = u((OB, Ku) => {
    var ku = ge(),
      Im = Object.defineProperty;
    Ku.exports = function (e, t) {
      try {
        Im(ku, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        ku[e] = t;
      }
      return t;
    };
  });
  var _n = u((bB, Yu) => {
    var mm = ge(),
      Tm = hn(),
      zu = "__core-js_shared__",
      Om = mm[zu] || Tm(zu, {});
    Yu.exports = Om;
  });
  var uo = u((AB, Qu) => {
    var bm = ju(),
      $u = _n();
    (Qu.exports = function (e, t) {
      return $u[e] || ($u[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: bm ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Ju = u((SB, Zu) => {
    var Am = ge(),
      Sm = Ji(),
      wm = Am.Object;
    Zu.exports = function (e) {
      return wm(Sm(e));
    };
  });
  var It = u((wB, ec) => {
    var Rm = Ye(),
      Cm = Ju(),
      Nm = Rm({}.hasOwnProperty);
    ec.exports =
      Object.hasOwn ||
      function (t, r) {
        return Nm(Cm(t), r);
      };
  });
  var co = u((RB, tc) => {
    var Pm = Ye(),
      qm = 0,
      Lm = Math.random(),
      xm = Pm((1).toString);
    tc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + xm(++qm + Lm, 36);
    };
  });
  var lo = u((CB, ac) => {
    var Mm = ge(),
      Dm = uo(),
      rc = It(),
      Fm = co(),
      nc = ro(),
      oc = no(),
      zt = Dm("wks"),
      Lt = Mm.Symbol,
      ic = Lt && Lt.for,
      Gm = oc ? Lt : (Lt && Lt.withoutSetter) || Fm;
    ac.exports = function (e) {
      if (!rc(zt, e) || !(nc || typeof zt[e] == "string")) {
        var t = "Symbol." + e;
        nc && rc(Lt, e)
          ? (zt[e] = Lt[e])
          : oc && ic
          ? (zt[e] = ic(t))
          : (zt[e] = Gm(t));
      }
      return zt[e];
    };
  });
  var lc = u((NB, cc) => {
    var Um = ge(),
      Xm = gn(),
      sc = Kt(),
      uc = io(),
      Vm = Vu(),
      Wm = Bu(),
      Bm = lo(),
      Hm = Um.TypeError,
      jm = Bm("toPrimitive");
    cc.exports = function (e, t) {
      if (!sc(e) || uc(e)) return e;
      var r = Vm(e, jm),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = Xm(r, e, t)), !sc(n) || uc(n))
        )
          return n;
        throw Hm("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), Wm(e, t);
    };
  });
  var fo = u((PB, fc) => {
    var km = lc(),
      Km = io();
    fc.exports = function (e) {
      var t = km(e, "string");
      return Km(t) ? t : t + "";
    };
  });
  var vo = u((qB, pc) => {
    var zm = ge(),
      dc = Kt(),
      po = zm.document,
      Ym = dc(po) && dc(po.createElement);
    pc.exports = function (e) {
      return Ym ? po.createElement(e) : {};
    };
  });
  var go = u((LB, vc) => {
    var $m = qt(),
      Qm = kt(),
      Zm = vo();
    vc.exports =
      !$m &&
      !Qm(function () {
        return (
          Object.defineProperty(Zm("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var Eo = u((Ec) => {
    var Jm = qt(),
      eT = gn(),
      tT = su(),
      rT = Yi(),
      nT = wr(),
      iT = fo(),
      oT = It(),
      aT = go(),
      gc = Object.getOwnPropertyDescriptor;
    Ec.f = Jm
      ? gc
      : function (t, r) {
          if (((t = nT(t)), (r = iT(r)), aT))
            try {
              return gc(t, r);
            } catch {}
          if (oT(t, r)) return rT(!eT(tT.f, t, r), t[r]);
        };
  });
  var Cr = u((MB, _c) => {
    var hc = ge(),
      sT = Kt(),
      uT = hc.String,
      cT = hc.TypeError;
    _c.exports = function (e) {
      if (sT(e)) return e;
      throw cT(uT(e) + " is not an object");
    };
  });
  var Nr = u((mc) => {
    var lT = ge(),
      fT = qt(),
      dT = go(),
      yc = Cr(),
      pT = fo(),
      vT = lT.TypeError,
      Ic = Object.defineProperty;
    mc.f = fT
      ? Ic
      : function (t, r, n) {
          if ((yc(t), (r = pT(r)), yc(n), dT))
            try {
              return Ic(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw vT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = u((FB, Tc) => {
    var gT = qt(),
      ET = Nr(),
      hT = Yi();
    Tc.exports = gT
      ? function (e, t, r) {
          return ET.f(e, t, hT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var _o = u((GB, Oc) => {
    var _T = Ye(),
      yT = st(),
      ho = _n(),
      IT = _T(Function.toString);
    yT(ho.inspectSource) ||
      (ho.inspectSource = function (e) {
        return IT(e);
      });
    Oc.exports = ho.inspectSource;
  });
  var Sc = u((UB, Ac) => {
    var mT = ge(),
      TT = st(),
      OT = _o(),
      bc = mT.WeakMap;
    Ac.exports = TT(bc) && /native code/.test(OT(bc));
  });
  var yo = u((XB, Rc) => {
    var bT = uo(),
      AT = co(),
      wc = bT("keys");
    Rc.exports = function (e) {
      return wc[e] || (wc[e] = AT(e));
    };
  });
  var In = u((VB, Cc) => {
    Cc.exports = {};
  });
  var Mc = u((WB, xc) => {
    var ST = Sc(),
      Lc = ge(),
      Io = Ye(),
      wT = Kt(),
      RT = yn(),
      mo = It(),
      To = _n(),
      CT = yo(),
      NT = In(),
      Nc = "Object already initialized",
      bo = Lc.TypeError,
      PT = Lc.WeakMap,
      mn,
      Pr,
      Tn,
      qT = function (e) {
        return Tn(e) ? Pr(e) : mn(e, {});
      },
      LT = function (e) {
        return function (t) {
          var r;
          if (!wT(t) || (r = Pr(t)).type !== e)
            throw bo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    ST || To.state
      ? ((mt = To.state || (To.state = new PT())),
        (Pc = Io(mt.get)),
        (Oo = Io(mt.has)),
        (qc = Io(mt.set)),
        (mn = function (e, t) {
          if (Oo(mt, e)) throw new bo(Nc);
          return (t.facade = e), qc(mt, e, t), t;
        }),
        (Pr = function (e) {
          return Pc(mt, e) || {};
        }),
        (Tn = function (e) {
          return Oo(mt, e);
        }))
      : ((xt = CT("state")),
        (NT[xt] = !0),
        (mn = function (e, t) {
          if (mo(e, xt)) throw new bo(Nc);
          return (t.facade = e), RT(e, xt, t), t;
        }),
        (Pr = function (e) {
          return mo(e, xt) ? e[xt] : {};
        }),
        (Tn = function (e) {
          return mo(e, xt);
        }));
    var mt, Pc, Oo, qc, xt;
    xc.exports = { set: mn, get: Pr, has: Tn, enforce: qT, getterFor: LT };
  });
  var Gc = u((BB, Fc) => {
    var Ao = qt(),
      xT = It(),
      Dc = Function.prototype,
      MT = Ao && Object.getOwnPropertyDescriptor,
      So = xT(Dc, "name"),
      DT = So && function () {}.name === "something",
      FT = So && (!Ao || (Ao && MT(Dc, "name").configurable));
    Fc.exports = { EXISTS: So, PROPER: DT, CONFIGURABLE: FT };
  });
  var Bc = u((HB, Wc) => {
    var GT = ge(),
      Uc = st(),
      UT = It(),
      Xc = yn(),
      XT = hn(),
      VT = _o(),
      Vc = Mc(),
      WT = Gc().CONFIGURABLE,
      BT = Vc.get,
      HT = Vc.enforce,
      jT = String(String).split("String");
    (Wc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Uc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!UT(r, "name") || (WT && r.name !== s)) && Xc(r, "name", s),
          (c = HT(r)),
          c.source || (c.source = jT.join(typeof s == "string" ? s : ""))),
        e === GT)
      ) {
        i ? (e[t] = r) : XT(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Uc(this) && BT(this).source) || VT(this);
    });
  });
  var wo = u((jB, Hc) => {
    var kT = Math.ceil,
      KT = Math.floor;
    Hc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? KT : kT)(t);
    };
  });
  var kc = u((kB, jc) => {
    var zT = wo(),
      YT = Math.max,
      $T = Math.min;
    jc.exports = function (e, t) {
      var r = zT(e);
      return r < 0 ? YT(r + t, 0) : $T(r, t);
    };
  });
  var zc = u((KB, Kc) => {
    var QT = wo(),
      ZT = Math.min;
    Kc.exports = function (e) {
      return e > 0 ? ZT(QT(e), 9007199254740991) : 0;
    };
  });
  var $c = u((zB, Yc) => {
    var JT = zc();
    Yc.exports = function (e) {
      return JT(e.length);
    };
  });
  var Ro = u((YB, Zc) => {
    var eO = wr(),
      tO = kc(),
      rO = $c(),
      Qc = function (e) {
        return function (t, r, n) {
          var o = eO(t),
            i = rO(o),
            a = tO(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Zc.exports = { includes: Qc(!0), indexOf: Qc(!1) };
  });
  var No = u(($B, el) => {
    var nO = Ye(),
      Co = It(),
      iO = wr(),
      oO = Ro().indexOf,
      aO = In(),
      Jc = nO([].push);
    el.exports = function (e, t) {
      var r = iO(e),
        n = 0,
        o = [],
        i;
      for (i in r) !Co(aO, i) && Co(r, i) && Jc(o, i);
      for (; t.length > n; ) Co(r, (i = t[n++])) && (~oO(o, i) || Jc(o, i));
      return o;
    };
  });
  var On = u((QB, tl) => {
    tl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var nl = u((rl) => {
    var sO = No(),
      uO = On(),
      cO = uO.concat("length", "prototype");
    rl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return sO(t, cO);
      };
  });
  var ol = u((il) => {
    il.f = Object.getOwnPropertySymbols;
  });
  var sl = u((eH, al) => {
    var lO = Rr(),
      fO = Ye(),
      dO = nl(),
      pO = ol(),
      vO = Cr(),
      gO = fO([].concat);
    al.exports =
      lO("Reflect", "ownKeys") ||
      function (t) {
        var r = dO.f(vO(t)),
          n = pO.f;
        return n ? gO(r, n(t)) : r;
      };
  });
  var cl = u((tH, ul) => {
    var EO = It(),
      hO = sl(),
      _O = Eo(),
      yO = Nr();
    ul.exports = function (e, t) {
      for (var r = hO(t), n = yO.f, o = _O.f, i = 0; i < r.length; i++) {
        var a = r[i];
        EO(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var fl = u((rH, ll) => {
    var IO = kt(),
      mO = st(),
      TO = /#|\.prototype\./,
      qr = function (e, t) {
        var r = bO[OO(e)];
        return r == SO ? !0 : r == AO ? !1 : mO(t) ? IO(t) : !!t;
      },
      OO = (qr.normalize = function (e) {
        return String(e).replace(TO, ".").toLowerCase();
      }),
      bO = (qr.data = {}),
      AO = (qr.NATIVE = "N"),
      SO = (qr.POLYFILL = "P");
    ll.exports = qr;
  });
  var pl = u((nH, dl) => {
    var Po = ge(),
      wO = Eo().f,
      RO = yn(),
      CO = Bc(),
      NO = hn(),
      PO = cl(),
      qO = fl();
    dl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        c,
        f,
        v;
      if (
        (n
          ? (a = Po)
          : o
          ? (a = Po[r] || NO(r, {}))
          : (a = (Po[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((v = wO(a, s)), (c = v && v.value)) : (c = a[s]),
            (i = qO(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            PO(f, c);
          }
          (e.sham || (c && c.sham)) && RO(f, "sham", !0), CO(a, s, f, e);
        }
    };
  });
  var gl = u((iH, vl) => {
    var LO = No(),
      xO = On();
    vl.exports =
      Object.keys ||
      function (t) {
        return LO(t, xO);
      };
  });
  var hl = u((oH, El) => {
    var MO = qt(),
      DO = Nr(),
      FO = Cr(),
      GO = wr(),
      UO = gl();
    El.exports = MO
      ? Object.defineProperties
      : function (t, r) {
          FO(t);
          for (var n = GO(r), o = UO(r), i = o.length, a = 0, s; i > a; )
            DO.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var yl = u((aH, _l) => {
    var XO = Rr();
    _l.exports = XO("document", "documentElement");
  });
  var wl = u((sH, Sl) => {
    var VO = Cr(),
      WO = hl(),
      Il = On(),
      BO = In(),
      HO = yl(),
      jO = vo(),
      kO = yo(),
      ml = ">",
      Tl = "<",
      Lo = "prototype",
      xo = "script",
      bl = kO("IE_PROTO"),
      qo = function () {},
      Al = function (e) {
        return Tl + xo + ml + e + Tl + "/" + xo + ml;
      },
      Ol = function (e) {
        e.write(Al("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      KO = function () {
        var e = jO("iframe"),
          t = "java" + xo + ":",
          r;
        return (
          (e.style.display = "none"),
          HO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Al("document.F=Object")),
          r.close(),
          r.F
        );
      },
      bn,
      An = function () {
        try {
          bn = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && bn
              ? Ol(bn)
              : KO()
            : Ol(bn);
        for (var e = Il.length; e--; ) delete An[Lo][Il[e]];
        return An();
      };
    BO[bl] = !0;
    Sl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((qo[Lo] = VO(t)), (n = new qo()), (qo[Lo] = null), (n[bl] = t))
            : (n = An()),
          r === void 0 ? n : WO(n, r)
        );
      };
  });
  var Cl = u((uH, Rl) => {
    var zO = lo(),
      YO = wl(),
      $O = Nr(),
      Mo = zO("unscopables"),
      Do = Array.prototype;
    Do[Mo] == null && $O.f(Do, Mo, { configurable: !0, value: YO(null) });
    Rl.exports = function (e) {
      Do[Mo][e] = !0;
    };
  });
  var Nl = u(() => {
    "use strict";
    var QO = pl(),
      ZO = Ro().includes,
      JO = Cl();
    QO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return ZO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    JO("includes");
  });
  var ql = u((fH, Pl) => {
    var eb = ge(),
      tb = Ye();
    Pl.exports = function (e, t) {
      return tb(eb[e].prototype[t]);
    };
  });
  var xl = u((dH, Ll) => {
    Nl();
    var rb = ql();
    Ll.exports = rb("Array", "includes");
  });
  var Dl = u((pH, Ml) => {
    var nb = xl();
    Ml.exports = nb;
  });
  var Gl = u((vH, Fl) => {
    var ib = Dl();
    Fl.exports = ib;
  });
  var Fo = u((gH, Ul) => {
    var ob =
      typeof global == "object" && global && global.Object === Object && global;
    Ul.exports = ob;
  });
  var Qe = u((EH, Xl) => {
    var ab = Fo(),
      sb = typeof self == "object" && self && self.Object === Object && self,
      ub = ab || sb || Function("return this")();
    Xl.exports = ub;
  });
  var Yt = u((hH, Vl) => {
    var cb = Qe(),
      lb = cb.Symbol;
    Vl.exports = lb;
  });
  var jl = u((_H, Hl) => {
    var Wl = Yt(),
      Bl = Object.prototype,
      fb = Bl.hasOwnProperty,
      db = Bl.toString,
      Lr = Wl ? Wl.toStringTag : void 0;
    function pb(e) {
      var t = fb.call(e, Lr),
        r = e[Lr];
      try {
        e[Lr] = void 0;
        var n = !0;
      } catch {}
      var o = db.call(e);
      return n && (t ? (e[Lr] = r) : delete e[Lr]), o;
    }
    Hl.exports = pb;
  });
  var Kl = u((yH, kl) => {
    var vb = Object.prototype,
      gb = vb.toString;
    function Eb(e) {
      return gb.call(e);
    }
    kl.exports = Eb;
  });
  var Tt = u((IH, $l) => {
    var zl = Yt(),
      hb = jl(),
      _b = Kl(),
      yb = "[object Null]",
      Ib = "[object Undefined]",
      Yl = zl ? zl.toStringTag : void 0;
    function mb(e) {
      return e == null
        ? e === void 0
          ? Ib
          : yb
        : Yl && Yl in Object(e)
        ? hb(e)
        : _b(e);
    }
    $l.exports = mb;
  });
  var Go = u((mH, Ql) => {
    function Tb(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Ql.exports = Tb;
  });
  var Uo = u((TH, Zl) => {
    var Ob = Go(),
      bb = Ob(Object.getPrototypeOf, Object);
    Zl.exports = bb;
  });
  var gt = u((OH, Jl) => {
    function Ab(e) {
      return e != null && typeof e == "object";
    }
    Jl.exports = Ab;
  });
  var Xo = u((bH, tf) => {
    var Sb = Tt(),
      wb = Uo(),
      Rb = gt(),
      Cb = "[object Object]",
      Nb = Function.prototype,
      Pb = Object.prototype,
      ef = Nb.toString,
      qb = Pb.hasOwnProperty,
      Lb = ef.call(Object);
    function xb(e) {
      if (!Rb(e) || Sb(e) != Cb) return !1;
      var t = wb(e);
      if (t === null) return !0;
      var r = qb.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ef.call(r) == Lb;
    }
    tf.exports = xb;
  });
  var rf = u((Vo) => {
    "use strict";
    Object.defineProperty(Vo, "__esModule", { value: !0 });
    Vo.default = Mb;
    function Mb(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var nf = u((Bo, Wo) => {
    "use strict";
    Object.defineProperty(Bo, "__esModule", { value: !0 });
    var Db = rf(),
      Fb = Gb(Db);
    function Gb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var $t;
    typeof self < "u"
      ? ($t = self)
      : typeof window < "u"
      ? ($t = window)
      : typeof global < "u"
      ? ($t = global)
      : typeof Wo < "u"
      ? ($t = Wo)
      : ($t = Function("return this")());
    var Ub = (0, Fb.default)($t);
    Bo.default = Ub;
  });
  var Ho = u((xr) => {
    "use strict";
    xr.__esModule = !0;
    xr.ActionTypes = void 0;
    xr.default = uf;
    var Xb = Xo(),
      Vb = sf(Xb),
      Wb = nf(),
      of = sf(Wb);
    function sf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var af = (xr.ActionTypes = { INIT: "@@redux/INIT" });
    function uf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(uf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function v() {
        return i;
      }
      function d(y) {
        if (typeof y != "function")
          throw new Error("Expected listener to be a function.");
        var D = !0;
        return (
          f(),
          s.push(y),
          function () {
            if (D) {
              (D = !1), f();
              var R = s.indexOf(y);
              s.splice(R, 1);
            }
          }
        );
      }
      function E(y) {
        if (!(0, Vb.default)(y))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof y.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = o(i, y));
        } finally {
          c = !1;
        }
        for (var D = (a = s), b = 0; b < D.length; b++) D[b]();
        return y;
      }
      function h(y) {
        if (typeof y != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = y), E({ type: af.INIT });
      }
      function _() {
        var y,
          D = d;
        return (
          (y = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                R.next && R.next(v());
              }
              T();
              var L = D(T);
              return { unsubscribe: L };
            },
          }),
          (y[of.default] = function () {
            return this;
          }),
          y
        );
      }
      return (
        E({ type: af.INIT }),
        (n = { dispatch: E, subscribe: d, getState: v, replaceReducer: h }),
        (n[of.default] = _),
        n
      );
    }
  });
  var ko = u((jo) => {
    "use strict";
    jo.__esModule = !0;
    jo.default = Bb;
    function Bb(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ff = u((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    Ko.default = zb;
    var cf = Ho(),
      Hb = Xo(),
      RH = lf(Hb),
      jb = ko(),
      CH = lf(jb);
    function lf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function kb(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Kb(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: cf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                cf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function zb(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        Kb(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          v = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var E = !1, h = {}, _ = 0; _ < i.length; _++) {
          var y = i[_],
            D = r[y],
            b = f[y],
            R = D(b, v);
          if (typeof R > "u") {
            var T = kb(y, v);
            throw new Error(T);
          }
          (h[y] = R), (E = E || R !== b);
        }
        return E ? h : f;
      };
    }
  });
  var pf = u((zo) => {
    "use strict";
    zo.__esModule = !0;
    zo.default = Yb;
    function df(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Yb(e, t) {
      if (typeof e == "function") return df(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = df(a, t));
      }
      return n;
    }
  });
  var $o = u((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    Yo.default = $b;
    function $b() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var vf = u((Qo) => {
    "use strict";
    Qo.__esModule = !0;
    var Qb =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Qo.default = tA;
    var Zb = $o(),
      Jb = eA(Zb);
    function eA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function tA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            c = s.dispatch,
            f = [],
            v = {
              getState: s.getState,
              dispatch: function (E) {
                return c(E);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(v);
            })),
            (c = Jb.default.apply(void 0, f)(s.dispatch)),
            Qb({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Zo = u((Ve) => {
    "use strict";
    Ve.__esModule = !0;
    Ve.compose =
      Ve.applyMiddleware =
      Ve.bindActionCreators =
      Ve.combineReducers =
      Ve.createStore =
        void 0;
    var rA = Ho(),
      nA = Qt(rA),
      iA = ff(),
      oA = Qt(iA),
      aA = pf(),
      sA = Qt(aA),
      uA = vf(),
      cA = Qt(uA),
      lA = $o(),
      fA = Qt(lA),
      dA = ko(),
      xH = Qt(dA);
    function Qt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ve.createStore = nA.default;
    Ve.combineReducers = oA.default;
    Ve.bindActionCreators = sA.default;
    Ve.applyMiddleware = cA.default;
    Ve.compose = fA.default;
  });
  var gf = u((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.QuickEffectIds =
      Se.QuickEffectDirectionConsts =
      Se.EventTypeConsts =
      Se.EventLimitAffectedElements =
      Se.EventContinuousMouseAxes =
      Se.EventBasedOn =
      Se.EventAppliesTo =
        void 0;
    var pA = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Se.EventTypeConsts = pA;
    var vA = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Se.EventAppliesTo = vA;
    var gA = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Se.EventBasedOn = gA;
    var EA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Se.EventContinuousMouseAxes = EA;
    var hA = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Se.EventLimitAffectedElements = hA;
    var _A = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Se.QuickEffectIds = _A;
    var yA = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Se.QuickEffectDirectionConsts = yA;
  });
  var Jo = u((Zt) => {
    "use strict";
    Object.defineProperty(Zt, "__esModule", { value: !0 });
    Zt.ActionTypeConsts = Zt.ActionAppliesTo = void 0;
    var IA = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      OBJECT_VALUE: "OBJECT_VALUE",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      PLUGIN_SPLINE: "PLUGIN_SPLINE",
      PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    Zt.ActionTypeConsts = IA;
    var mA = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    Zt.ActionAppliesTo = mA;
  });
  var Ef = u((Sn) => {
    "use strict";
    Object.defineProperty(Sn, "__esModule", { value: !0 });
    Sn.InteractionTypeConsts = void 0;
    var TA = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Sn.InteractionTypeConsts = TA;
  });
  var hf = u((wn) => {
    "use strict";
    Object.defineProperty(wn, "__esModule", { value: !0 });
    wn.ReducedMotionTypes = void 0;
    var OA = Jo(),
      {
        TRANSFORM_MOVE: bA,
        TRANSFORM_SCALE: AA,
        TRANSFORM_ROTATE: SA,
        TRANSFORM_SKEW: wA,
        STYLE_SIZE: RA,
        STYLE_FILTER: CA,
        STYLE_FONT_VARIATION: NA,
      } = OA.ActionTypeConsts,
      PA = {
        [bA]: !0,
        [AA]: !0,
        [SA]: !0,
        [wA]: !0,
        [RA]: !0,
        [CA]: !0,
        [NA]: !0,
      };
    wn.ReducedMotionTypes = PA;
  });
  var _f = u((ne) => {
    "use strict";
    Object.defineProperty(ne, "__esModule", { value: !0 });
    ne.IX2_VIEWPORT_WIDTH_CHANGED =
      ne.IX2_TEST_FRAME_RENDERED =
      ne.IX2_STOP_REQUESTED =
      ne.IX2_SESSION_STOPPED =
      ne.IX2_SESSION_STARTED =
      ne.IX2_SESSION_INITIALIZED =
      ne.IX2_RAW_DATA_IMPORTED =
      ne.IX2_PREVIEW_REQUESTED =
      ne.IX2_PLAYBACK_REQUESTED =
      ne.IX2_PARAMETER_CHANGED =
      ne.IX2_MEDIA_QUERIES_DEFINED =
      ne.IX2_INSTANCE_STARTED =
      ne.IX2_INSTANCE_REMOVED =
      ne.IX2_INSTANCE_ADDED =
      ne.IX2_EVENT_STATE_CHANGED =
      ne.IX2_EVENT_LISTENER_ADDED =
      ne.IX2_ELEMENT_STATE_CHANGED =
      ne.IX2_CLEAR_REQUESTED =
      ne.IX2_ANIMATION_FRAME_CHANGED =
      ne.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var qA = "IX2_RAW_DATA_IMPORTED";
    ne.IX2_RAW_DATA_IMPORTED = qA;
    var LA = "IX2_SESSION_INITIALIZED";
    ne.IX2_SESSION_INITIALIZED = LA;
    var xA = "IX2_SESSION_STARTED";
    ne.IX2_SESSION_STARTED = xA;
    var MA = "IX2_SESSION_STOPPED";
    ne.IX2_SESSION_STOPPED = MA;
    var DA = "IX2_PREVIEW_REQUESTED";
    ne.IX2_PREVIEW_REQUESTED = DA;
    var FA = "IX2_PLAYBACK_REQUESTED";
    ne.IX2_PLAYBACK_REQUESTED = FA;
    var GA = "IX2_STOP_REQUESTED";
    ne.IX2_STOP_REQUESTED = GA;
    var UA = "IX2_CLEAR_REQUESTED";
    ne.IX2_CLEAR_REQUESTED = UA;
    var XA = "IX2_EVENT_LISTENER_ADDED";
    ne.IX2_EVENT_LISTENER_ADDED = XA;
    var VA = "IX2_EVENT_STATE_CHANGED";
    ne.IX2_EVENT_STATE_CHANGED = VA;
    var WA = "IX2_ANIMATION_FRAME_CHANGED";
    ne.IX2_ANIMATION_FRAME_CHANGED = WA;
    var BA = "IX2_PARAMETER_CHANGED";
    ne.IX2_PARAMETER_CHANGED = BA;
    var HA = "IX2_INSTANCE_ADDED";
    ne.IX2_INSTANCE_ADDED = HA;
    var jA = "IX2_INSTANCE_STARTED";
    ne.IX2_INSTANCE_STARTED = jA;
    var kA = "IX2_INSTANCE_REMOVED";
    ne.IX2_INSTANCE_REMOVED = kA;
    var KA = "IX2_ELEMENT_STATE_CHANGED";
    ne.IX2_ELEMENT_STATE_CHANGED = KA;
    var zA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ne.IX2_ACTION_LIST_PLAYBACK_CHANGED = zA;
    var YA = "IX2_VIEWPORT_WIDTH_CHANGED";
    ne.IX2_VIEWPORT_WIDTH_CHANGED = YA;
    var $A = "IX2_MEDIA_QUERIES_DEFINED";
    ne.IX2_MEDIA_QUERIES_DEFINED = $A;
    var QA = "IX2_TEST_FRAME_RENDERED";
    ne.IX2_TEST_FRAME_RENDERED = QA;
  });
  var yf = u((N) => {
    "use strict";
    Object.defineProperty(N, "__esModule", { value: !0 });
    N.W_MOD_JS =
      N.W_MOD_IX =
      N.WILL_CHANGE =
      N.WIDTH =
      N.WF_PAGE =
      N.TRANSLATE_Z =
      N.TRANSLATE_Y =
      N.TRANSLATE_X =
      N.TRANSLATE_3D =
      N.TRANSFORM =
      N.SKEW_Y =
      N.SKEW_X =
      N.SKEW =
      N.SIBLINGS =
      N.SCALE_Z =
      N.SCALE_Y =
      N.SCALE_X =
      N.SCALE_3D =
      N.ROTATE_Z =
      N.ROTATE_Y =
      N.ROTATE_X =
      N.RENDER_TRANSFORM =
      N.RENDER_STYLE =
      N.RENDER_PLUGIN =
      N.RENDER_GENERAL =
      N.PRESERVE_3D =
      N.PLAIN_OBJECT =
      N.PARENT =
      N.OPACITY =
      N.IX2_ID_DELIMITER =
      N.IMMEDIATE_CHILDREN =
      N.HTML_ELEMENT =
      N.HEIGHT =
      N.FONT_VARIATION_SETTINGS =
      N.FLEX =
      N.FILTER =
      N.DISPLAY =
      N.CONFIG_Z_VALUE =
      N.CONFIG_Z_UNIT =
      N.CONFIG_Y_VALUE =
      N.CONFIG_Y_UNIT =
      N.CONFIG_X_VALUE =
      N.CONFIG_X_UNIT =
      N.CONFIG_VALUE =
      N.CONFIG_UNIT =
      N.COMMA_DELIMITER =
      N.COLOR =
      N.COLON_DELIMITER =
      N.CHILDREN =
      N.BOUNDARY_SELECTOR =
      N.BORDER_COLOR =
      N.BAR_DELIMITER =
      N.BACKGROUND_COLOR =
      N.BACKGROUND =
      N.AUTO =
      N.ABSTRACT_NODE =
        void 0;
    var ZA = "|";
    N.IX2_ID_DELIMITER = ZA;
    var JA = "data-wf-page";
    N.WF_PAGE = JA;
    var eS = "w-mod-js";
    N.W_MOD_JS = eS;
    var tS = "w-mod-ix";
    N.W_MOD_IX = tS;
    var rS = ".w-dyn-item";
    N.BOUNDARY_SELECTOR = rS;
    var nS = "xValue";
    N.CONFIG_X_VALUE = nS;
    var iS = "yValue";
    N.CONFIG_Y_VALUE = iS;
    var oS = "zValue";
    N.CONFIG_Z_VALUE = oS;
    var aS = "value";
    N.CONFIG_VALUE = aS;
    var sS = "xUnit";
    N.CONFIG_X_UNIT = sS;
    var uS = "yUnit";
    N.CONFIG_Y_UNIT = uS;
    var cS = "zUnit";
    N.CONFIG_Z_UNIT = cS;
    var lS = "unit";
    N.CONFIG_UNIT = lS;
    var fS = "transform";
    N.TRANSFORM = fS;
    var dS = "translateX";
    N.TRANSLATE_X = dS;
    var pS = "translateY";
    N.TRANSLATE_Y = pS;
    var vS = "translateZ";
    N.TRANSLATE_Z = vS;
    var gS = "translate3d";
    N.TRANSLATE_3D = gS;
    var ES = "scaleX";
    N.SCALE_X = ES;
    var hS = "scaleY";
    N.SCALE_Y = hS;
    var _S = "scaleZ";
    N.SCALE_Z = _S;
    var yS = "scale3d";
    N.SCALE_3D = yS;
    var IS = "rotateX";
    N.ROTATE_X = IS;
    var mS = "rotateY";
    N.ROTATE_Y = mS;
    var TS = "rotateZ";
    N.ROTATE_Z = TS;
    var OS = "skew";
    N.SKEW = OS;
    var bS = "skewX";
    N.SKEW_X = bS;
    var AS = "skewY";
    N.SKEW_Y = AS;
    var SS = "opacity";
    N.OPACITY = SS;
    var wS = "filter";
    N.FILTER = wS;
    var RS = "font-variation-settings";
    N.FONT_VARIATION_SETTINGS = RS;
    var CS = "width";
    N.WIDTH = CS;
    var NS = "height";
    N.HEIGHT = NS;
    var PS = "backgroundColor";
    N.BACKGROUND_COLOR = PS;
    var qS = "background";
    N.BACKGROUND = qS;
    var LS = "borderColor";
    N.BORDER_COLOR = LS;
    var xS = "color";
    N.COLOR = xS;
    var MS = "display";
    N.DISPLAY = MS;
    var DS = "flex";
    N.FLEX = DS;
    var FS = "willChange";
    N.WILL_CHANGE = FS;
    var GS = "AUTO";
    N.AUTO = GS;
    var US = ",";
    N.COMMA_DELIMITER = US;
    var XS = ":";
    N.COLON_DELIMITER = XS;
    var VS = "|";
    N.BAR_DELIMITER = VS;
    var WS = "CHILDREN";
    N.CHILDREN = WS;
    var BS = "IMMEDIATE_CHILDREN";
    N.IMMEDIATE_CHILDREN = BS;
    var HS = "SIBLINGS";
    N.SIBLINGS = HS;
    var jS = "PARENT";
    N.PARENT = jS;
    var kS = "preserve-3d";
    N.PRESERVE_3D = kS;
    var KS = "HTML_ELEMENT";
    N.HTML_ELEMENT = KS;
    var zS = "PLAIN_OBJECT";
    N.PLAIN_OBJECT = zS;
    var YS = "ABSTRACT_NODE";
    N.ABSTRACT_NODE = YS;
    var $S = "RENDER_TRANSFORM";
    N.RENDER_TRANSFORM = $S;
    var QS = "RENDER_GENERAL";
    N.RENDER_GENERAL = QS;
    var ZS = "RENDER_STYLE";
    N.RENDER_STYLE = ZS;
    var JS = "RENDER_PLUGIN";
    N.RENDER_PLUGIN = JS;
  });
  var Fe = u((me) => {
    "use strict";
    var If = Pt().default;
    Object.defineProperty(me, "__esModule", { value: !0 });
    var Rn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    me.IX2EngineConstants = me.IX2EngineActionTypes = void 0;
    var ea = gf();
    Object.keys(ea).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Rn, e) ||
        (e in me && me[e] === ea[e]) ||
        Object.defineProperty(me, e, {
          enumerable: !0,
          get: function () {
            return ea[e];
          },
        });
    });
    var ta = Jo();
    Object.keys(ta).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Rn, e) ||
        (e in me && me[e] === ta[e]) ||
        Object.defineProperty(me, e, {
          enumerable: !0,
          get: function () {
            return ta[e];
          },
        });
    });
    var ra = Ef();
    Object.keys(ra).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Rn, e) ||
        (e in me && me[e] === ra[e]) ||
        Object.defineProperty(me, e, {
          enumerable: !0,
          get: function () {
            return ra[e];
          },
        });
    });
    var na = hf();
    Object.keys(na).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Rn, e) ||
        (e in me && me[e] === na[e]) ||
        Object.defineProperty(me, e, {
          enumerable: !0,
          get: function () {
            return na[e];
          },
        });
    });
    var e0 = If(_f());
    me.IX2EngineActionTypes = e0;
    var t0 = If(yf());
    me.IX2EngineConstants = t0;
  });
  var mf = u((Cn) => {
    "use strict";
    Object.defineProperty(Cn, "__esModule", { value: !0 });
    Cn.ixData = void 0;
    var r0 = Fe(),
      { IX2_RAW_DATA_IMPORTED: n0 } = r0.IX2EngineActionTypes,
      i0 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case n0:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Cn.ixData = i0;
  });
  var Jt = u((HH, Et) => {
    function ia() {
      return (
        (Et.exports = ia =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (Et.exports.__esModule = !0),
        (Et.exports.default = Et.exports),
        ia.apply(this, arguments)
      );
    }
    (Et.exports = ia),
      (Et.exports.__esModule = !0),
      (Et.exports.default = Et.exports);
  });
  var er = u((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var o0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    he.clone = Pn;
    he.addLast = bf;
    he.addFirst = Af;
    he.removeLast = Sf;
    he.removeFirst = wf;
    he.insert = Rf;
    he.removeAt = Cf;
    he.replaceAt = Nf;
    he.getIn = qn;
    he.set = Ln;
    he.setIn = xn;
    he.update = qf;
    he.updateIn = Lf;
    he.merge = xf;
    he.mergeDeep = Mf;
    he.mergeIn = Df;
    he.omit = Ff;
    he.addDefaults = Gf;
    var Tf = "INVALID_ARGS";
    function Of(e) {
      throw new Error(e);
    }
    function oa(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var a0 = {}.hasOwnProperty;
    function Pn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = oa(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function Ge(e, t, r) {
      var n = r;
      n == null && Of(Tf);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var v = oa(f);
          if (v.length)
            for (var d = 0; d <= v.length; d++) {
              var E = v[d];
              if (!(e && n[E] !== void 0)) {
                var h = f[E];
                t && Nn(n[E]) && Nn(h) && (h = Ge(e, t, n[E], h)),
                  !(h === void 0 || h === n[E]) &&
                    (o || ((o = !0), (n = Pn(n))), (n[E] = h));
              }
            }
        }
      }
      return n;
    }
    function Nn(e) {
      var t = typeof e > "u" ? "undefined" : o0(e);
      return e != null && (t === "object" || t === "function");
    }
    function bf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Af(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Sf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function wf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Rf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Cf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Nf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function qn(e, t) {
      if ((!Array.isArray(t) && Of(Tf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Ln(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = Pn(o);
      return (i[t] = r), i;
    }
    function Pf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          Nn(e) && Nn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Pf(a, t, r, n + 1);
      }
      return Ln(e, i, o);
    }
    function xn(e, t, r) {
      return t.length ? Pf(e, t, r, 0) : r;
    }
    function qf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Ln(e, t, o);
    }
    function Lf(e, t, r) {
      var n = qn(e, t),
        o = r(n);
      return xn(e, t, o);
    }
    function xf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Ge.call.apply(Ge, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : Ge(!1, !1, e, t, r, n, o, i);
    }
    function Mf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Ge.call.apply(Ge, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : Ge(!1, !0, e, t, r, n, o, i);
    }
    function Df(e, t, r, n, o, i, a) {
      var s = qn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          v = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        v[d - 7] = arguments[d];
      return (
        v.length
          ? (c = Ge.call.apply(Ge, [null, !1, !1, s, r, n, o, i, a].concat(v)))
          : (c = Ge(!1, !1, s, r, n, o, i, a)),
        xn(e, t, c)
      );
    }
    function Ff(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (a0.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = oa(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function Gf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Ge.call.apply(Ge, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : Ge(!0, !1, e, t, r, n, o, i);
    }
    var s0 = {
      clone: Pn,
      addLast: bf,
      addFirst: Af,
      removeLast: Sf,
      removeFirst: wf,
      insert: Rf,
      removeAt: Cf,
      replaceAt: Nf,
      getIn: qn,
      set: Ln,
      setIn: xn,
      update: qf,
      updateIn: Lf,
      merge: xf,
      mergeDeep: Mf,
      mergeIn: Df,
      omit: Ff,
      addDefaults: Gf,
    };
    he.default = s0;
  });
  var Xf = u((Mn) => {
    "use strict";
    var u0 = ze().default;
    Object.defineProperty(Mn, "__esModule", { value: !0 });
    Mn.ixRequest = void 0;
    var c0 = u0(Jt()),
      l0 = Fe(),
      f0 = er(),
      {
        IX2_PREVIEW_REQUESTED: d0,
        IX2_PLAYBACK_REQUESTED: p0,
        IX2_STOP_REQUESTED: v0,
        IX2_CLEAR_REQUESTED: g0,
      } = l0.IX2EngineActionTypes,
      E0 = { preview: {}, playback: {}, stop: {}, clear: {} },
      Uf = Object.create(null, {
        [d0]: { value: "preview" },
        [p0]: { value: "playback" },
        [v0]: { value: "stop" },
        [g0]: { value: "clear" },
      }),
      h0 = (e = E0, t) => {
        if (t.type in Uf) {
          let r = [Uf[t.type]];
          return (0, f0.setIn)(e, [r], (0, c0.default)({}, t.payload));
        }
        return e;
      };
    Mn.ixRequest = h0;
  });
  var Wf = u((Dn) => {
    "use strict";
    Object.defineProperty(Dn, "__esModule", { value: !0 });
    Dn.ixSession = void 0;
    var _0 = Fe(),
      ut = er(),
      {
        IX2_SESSION_INITIALIZED: y0,
        IX2_SESSION_STARTED: I0,
        IX2_TEST_FRAME_RENDERED: m0,
        IX2_SESSION_STOPPED: T0,
        IX2_EVENT_LISTENER_ADDED: O0,
        IX2_EVENT_STATE_CHANGED: b0,
        IX2_ANIMATION_FRAME_CHANGED: A0,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: S0,
        IX2_VIEWPORT_WIDTH_CHANGED: w0,
        IX2_MEDIA_QUERIES_DEFINED: R0,
      } = _0.IX2EngineActionTypes,
      Vf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      C0 = 20,
      N0 = (e = Vf, t) => {
        switch (t.type) {
          case y0: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, ut.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case I0:
            return (0, ut.set)(e, "active", !0);
          case m0: {
            let {
              payload: { step: r = C0 },
            } = t;
            return (0, ut.set)(e, "tick", e.tick + r);
          }
          case T0:
            return Vf;
          case A0: {
            let {
              payload: { now: r },
            } = t;
            return (0, ut.set)(e, "tick", r);
          }
          case O0: {
            let r = (0, ut.addLast)(e.eventListeners, t.payload);
            return (0, ut.set)(e, "eventListeners", r);
          }
          case b0: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, ut.setIn)(e, ["eventState", r], n);
          }
          case S0: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, ut.setIn)(e, ["playbackState", r], n);
          }
          case w0: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: s, min: c, max: f } = n[a];
              if (r >= c && r <= f) {
                i = s;
                break;
              }
            }
            return (0, ut.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case R0:
            return (0, ut.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Dn.ixSession = N0;
  });
  var Hf = u((zH, Bf) => {
    function P0() {
      (this.__data__ = []), (this.size = 0);
    }
    Bf.exports = P0;
  });
  var Fn = u((YH, jf) => {
    function q0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    jf.exports = q0;
  });
  var Mr = u(($H, kf) => {
    var L0 = Fn();
    function x0(e, t) {
      for (var r = e.length; r--; ) if (L0(e[r][0], t)) return r;
      return -1;
    }
    kf.exports = x0;
  });
  var zf = u((QH, Kf) => {
    var M0 = Mr(),
      D0 = Array.prototype,
      F0 = D0.splice;
    function G0(e) {
      var t = this.__data__,
        r = M0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : F0.call(t, r, 1), --this.size, !0;
    }
    Kf.exports = G0;
  });
  var $f = u((ZH, Yf) => {
    var U0 = Mr();
    function X0(e) {
      var t = this.__data__,
        r = U0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Yf.exports = X0;
  });
  var Zf = u((JH, Qf) => {
    var V0 = Mr();
    function W0(e) {
      return V0(this.__data__, e) > -1;
    }
    Qf.exports = W0;
  });
  var ed = u((e5, Jf) => {
    var B0 = Mr();
    function H0(e, t) {
      var r = this.__data__,
        n = B0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Jf.exports = H0;
  });
  var Dr = u((t5, td) => {
    var j0 = Hf(),
      k0 = zf(),
      K0 = $f(),
      z0 = Zf(),
      Y0 = ed();
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = j0;
    tr.prototype.delete = k0;
    tr.prototype.get = K0;
    tr.prototype.has = z0;
    tr.prototype.set = Y0;
    td.exports = tr;
  });
  var nd = u((r5, rd) => {
    var $0 = Dr();
    function Q0() {
      (this.__data__ = new $0()), (this.size = 0);
    }
    rd.exports = Q0;
  });
  var od = u((n5, id) => {
    function Z0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    id.exports = Z0;
  });
  var sd = u((i5, ad) => {
    function J0(e) {
      return this.__data__.get(e);
    }
    ad.exports = J0;
  });
  var cd = u((o5, ud) => {
    function ew(e) {
      return this.__data__.has(e);
    }
    ud.exports = ew;
  });
  var ct = u((a5, ld) => {
    function tw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    ld.exports = tw;
  });
  var aa = u((s5, fd) => {
    var rw = Tt(),
      nw = ct(),
      iw = "[object AsyncFunction]",
      ow = "[object Function]",
      aw = "[object GeneratorFunction]",
      sw = "[object Proxy]";
    function uw(e) {
      if (!nw(e)) return !1;
      var t = rw(e);
      return t == ow || t == aw || t == iw || t == sw;
    }
    fd.exports = uw;
  });
  var pd = u((u5, dd) => {
    var cw = Qe(),
      lw = cw["__core-js_shared__"];
    dd.exports = lw;
  });
  var Ed = u((c5, gd) => {
    var sa = pd(),
      vd = (function () {
        var e = /[^.]+$/.exec((sa && sa.keys && sa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function fw(e) {
      return !!vd && vd in e;
    }
    gd.exports = fw;
  });
  var ua = u((l5, hd) => {
    var dw = Function.prototype,
      pw = dw.toString;
    function vw(e) {
      if (e != null) {
        try {
          return pw.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    hd.exports = vw;
  });
  var yd = u((f5, _d) => {
    var gw = aa(),
      Ew = Ed(),
      hw = ct(),
      _w = ua(),
      yw = /[\\^$.*+?()[\]{}|]/g,
      Iw = /^\[object .+?Constructor\]$/,
      mw = Function.prototype,
      Tw = Object.prototype,
      Ow = mw.toString,
      bw = Tw.hasOwnProperty,
      Aw = RegExp(
        "^" +
          Ow.call(bw)
            .replace(yw, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Sw(e) {
      if (!hw(e) || Ew(e)) return !1;
      var t = gw(e) ? Aw : Iw;
      return t.test(_w(e));
    }
    _d.exports = Sw;
  });
  var md = u((d5, Id) => {
    function ww(e, t) {
      return e?.[t];
    }
    Id.exports = ww;
  });
  var Ot = u((p5, Td) => {
    var Rw = yd(),
      Cw = md();
    function Nw(e, t) {
      var r = Cw(e, t);
      return Rw(r) ? r : void 0;
    }
    Td.exports = Nw;
  });
  var Gn = u((v5, Od) => {
    var Pw = Ot(),
      qw = Qe(),
      Lw = Pw(qw, "Map");
    Od.exports = Lw;
  });
  var Fr = u((g5, bd) => {
    var xw = Ot(),
      Mw = xw(Object, "create");
    bd.exports = Mw;
  });
  var wd = u((E5, Sd) => {
    var Ad = Fr();
    function Dw() {
      (this.__data__ = Ad ? Ad(null) : {}), (this.size = 0);
    }
    Sd.exports = Dw;
  });
  var Cd = u((h5, Rd) => {
    function Fw(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Rd.exports = Fw;
  });
  var Pd = u((_5, Nd) => {
    var Gw = Fr(),
      Uw = "__lodash_hash_undefined__",
      Xw = Object.prototype,
      Vw = Xw.hasOwnProperty;
    function Ww(e) {
      var t = this.__data__;
      if (Gw) {
        var r = t[e];
        return r === Uw ? void 0 : r;
      }
      return Vw.call(t, e) ? t[e] : void 0;
    }
    Nd.exports = Ww;
  });
  var Ld = u((y5, qd) => {
    var Bw = Fr(),
      Hw = Object.prototype,
      jw = Hw.hasOwnProperty;
    function kw(e) {
      var t = this.__data__;
      return Bw ? t[e] !== void 0 : jw.call(t, e);
    }
    qd.exports = kw;
  });
  var Md = u((I5, xd) => {
    var Kw = Fr(),
      zw = "__lodash_hash_undefined__";
    function Yw(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Kw && t === void 0 ? zw : t),
        this
      );
    }
    xd.exports = Yw;
  });
  var Fd = u((m5, Dd) => {
    var $w = wd(),
      Qw = Cd(),
      Zw = Pd(),
      Jw = Ld(),
      eR = Md();
    function rr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    rr.prototype.clear = $w;
    rr.prototype.delete = Qw;
    rr.prototype.get = Zw;
    rr.prototype.has = Jw;
    rr.prototype.set = eR;
    Dd.exports = rr;
  });
  var Xd = u((T5, Ud) => {
    var Gd = Fd(),
      tR = Dr(),
      rR = Gn();
    function nR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Gd(),
          map: new (rR || tR)(),
          string: new Gd(),
        });
    }
    Ud.exports = nR;
  });
  var Wd = u((O5, Vd) => {
    function iR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Vd.exports = iR;
  });
  var Gr = u((b5, Bd) => {
    var oR = Wd();
    function aR(e, t) {
      var r = e.__data__;
      return oR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Bd.exports = aR;
  });
  var jd = u((A5, Hd) => {
    var sR = Gr();
    function uR(e) {
      var t = sR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Hd.exports = uR;
  });
  var Kd = u((S5, kd) => {
    var cR = Gr();
    function lR(e) {
      return cR(this, e).get(e);
    }
    kd.exports = lR;
  });
  var Yd = u((w5, zd) => {
    var fR = Gr();
    function dR(e) {
      return fR(this, e).has(e);
    }
    zd.exports = dR;
  });
  var Qd = u((R5, $d) => {
    var pR = Gr();
    function vR(e, t) {
      var r = pR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    $d.exports = vR;
  });
  var Un = u((C5, Zd) => {
    var gR = Xd(),
      ER = jd(),
      hR = Kd(),
      _R = Yd(),
      yR = Qd();
    function nr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    nr.prototype.clear = gR;
    nr.prototype.delete = ER;
    nr.prototype.get = hR;
    nr.prototype.has = _R;
    nr.prototype.set = yR;
    Zd.exports = nr;
  });
  var ep = u((N5, Jd) => {
    var IR = Dr(),
      mR = Gn(),
      TR = Un(),
      OR = 200;
    function bR(e, t) {
      var r = this.__data__;
      if (r instanceof IR) {
        var n = r.__data__;
        if (!mR || n.length < OR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new TR(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Jd.exports = bR;
  });
  var ca = u((P5, tp) => {
    var AR = Dr(),
      SR = nd(),
      wR = od(),
      RR = sd(),
      CR = cd(),
      NR = ep();
    function ir(e) {
      var t = (this.__data__ = new AR(e));
      this.size = t.size;
    }
    ir.prototype.clear = SR;
    ir.prototype.delete = wR;
    ir.prototype.get = RR;
    ir.prototype.has = CR;
    ir.prototype.set = NR;
    tp.exports = ir;
  });
  var np = u((q5, rp) => {
    var PR = "__lodash_hash_undefined__";
    function qR(e) {
      return this.__data__.set(e, PR), this;
    }
    rp.exports = qR;
  });
  var op = u((L5, ip) => {
    function LR(e) {
      return this.__data__.has(e);
    }
    ip.exports = LR;
  });
  var sp = u((x5, ap) => {
    var xR = Un(),
      MR = np(),
      DR = op();
    function Xn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new xR(); ++t < r; ) this.add(e[t]);
    }
    Xn.prototype.add = Xn.prototype.push = MR;
    Xn.prototype.has = DR;
    ap.exports = Xn;
  });
  var cp = u((M5, up) => {
    function FR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    up.exports = FR;
  });
  var fp = u((D5, lp) => {
    function GR(e, t) {
      return e.has(t);
    }
    lp.exports = GR;
  });
  var la = u((F5, dp) => {
    var UR = sp(),
      XR = cp(),
      VR = fp(),
      WR = 1,
      BR = 2;
    function HR(e, t, r, n, o, i) {
      var a = r & WR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = i.get(e),
        v = i.get(t);
      if (f && v) return f == t && v == e;
      var d = -1,
        E = !0,
        h = r & BR ? new UR() : void 0;
      for (i.set(e, t), i.set(t, e); ++d < s; ) {
        var _ = e[d],
          y = t[d];
        if (n) var D = a ? n(y, _, d, t, e, i) : n(_, y, d, e, t, i);
        if (D !== void 0) {
          if (D) continue;
          E = !1;
          break;
        }
        if (h) {
          if (
            !XR(t, function (b, R) {
              if (!VR(h, R) && (_ === b || o(_, b, r, n, i))) return h.push(R);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(_ === y || o(_, y, r, n, i))) {
          E = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), E;
    }
    dp.exports = HR;
  });
  var vp = u((G5, pp) => {
    var jR = Qe(),
      kR = jR.Uint8Array;
    pp.exports = kR;
  });
  var Ep = u((U5, gp) => {
    function KR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    gp.exports = KR;
  });
  var _p = u((X5, hp) => {
    function zR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    hp.exports = zR;
  });
  var Op = u((V5, Tp) => {
    var yp = Yt(),
      Ip = vp(),
      YR = Fn(),
      $R = la(),
      QR = Ep(),
      ZR = _p(),
      JR = 1,
      eC = 2,
      tC = "[object Boolean]",
      rC = "[object Date]",
      nC = "[object Error]",
      iC = "[object Map]",
      oC = "[object Number]",
      aC = "[object RegExp]",
      sC = "[object Set]",
      uC = "[object String]",
      cC = "[object Symbol]",
      lC = "[object ArrayBuffer]",
      fC = "[object DataView]",
      mp = yp ? yp.prototype : void 0,
      fa = mp ? mp.valueOf : void 0;
    function dC(e, t, r, n, o, i, a) {
      switch (r) {
        case fC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case lC:
          return !(e.byteLength != t.byteLength || !i(new Ip(e), new Ip(t)));
        case tC:
        case rC:
        case oC:
          return YR(+e, +t);
        case nC:
          return e.name == t.name && e.message == t.message;
        case aC:
        case uC:
          return e == t + "";
        case iC:
          var s = QR;
        case sC:
          var c = n & JR;
          if ((s || (s = ZR), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= eC), a.set(e, t);
          var v = $R(s(e), s(t), n, o, i, a);
          return a.delete(e), v;
        case cC:
          if (fa) return fa.call(e) == fa.call(t);
      }
      return !1;
    }
    Tp.exports = dC;
  });
  var Vn = u((W5, bp) => {
    function pC(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    bp.exports = pC;
  });
  var we = u((B5, Ap) => {
    var vC = Array.isArray;
    Ap.exports = vC;
  });
  var da = u((H5, Sp) => {
    var gC = Vn(),
      EC = we();
    function hC(e, t, r) {
      var n = t(e);
      return EC(e) ? n : gC(n, r(e));
    }
    Sp.exports = hC;
  });
  var Rp = u((j5, wp) => {
    function _C(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    wp.exports = _C;
  });
  var pa = u((k5, Cp) => {
    function yC() {
      return [];
    }
    Cp.exports = yC;
  });
  var va = u((K5, Pp) => {
    var IC = Rp(),
      mC = pa(),
      TC = Object.prototype,
      OC = TC.propertyIsEnumerable,
      Np = Object.getOwnPropertySymbols,
      bC = Np
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                IC(Np(e), function (t) {
                  return OC.call(e, t);
                }));
          }
        : mC;
    Pp.exports = bC;
  });
  var Lp = u((z5, qp) => {
    function AC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    qp.exports = AC;
  });
  var Mp = u((Y5, xp) => {
    var SC = Tt(),
      wC = gt(),
      RC = "[object Arguments]";
    function CC(e) {
      return wC(e) && SC(e) == RC;
    }
    xp.exports = CC;
  });
  var Ur = u(($5, Gp) => {
    var Dp = Mp(),
      NC = gt(),
      Fp = Object.prototype,
      PC = Fp.hasOwnProperty,
      qC = Fp.propertyIsEnumerable,
      LC = Dp(
        (function () {
          return arguments;
        })()
      )
        ? Dp
        : function (e) {
            return NC(e) && PC.call(e, "callee") && !qC.call(e, "callee");
          };
    Gp.exports = LC;
  });
  var Xp = u((Q5, Up) => {
    function xC() {
      return !1;
    }
    Up.exports = xC;
  });
  var Wn = u((Xr, or) => {
    var MC = Qe(),
      DC = Xp(),
      Bp = typeof Xr == "object" && Xr && !Xr.nodeType && Xr,
      Vp = Bp && typeof or == "object" && or && !or.nodeType && or,
      FC = Vp && Vp.exports === Bp,
      Wp = FC ? MC.Buffer : void 0,
      GC = Wp ? Wp.isBuffer : void 0,
      UC = GC || DC;
    or.exports = UC;
  });
  var Bn = u((Z5, Hp) => {
    var XC = 9007199254740991,
      VC = /^(?:0|[1-9]\d*)$/;
    function WC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? XC),
        !!t &&
          (r == "number" || (r != "symbol" && VC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Hp.exports = WC;
  });
  var Hn = u((J5, jp) => {
    var BC = 9007199254740991;
    function HC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= BC;
    }
    jp.exports = HC;
  });
  var Kp = u((ej, kp) => {
    var jC = Tt(),
      kC = Hn(),
      KC = gt(),
      zC = "[object Arguments]",
      YC = "[object Array]",
      $C = "[object Boolean]",
      QC = "[object Date]",
      ZC = "[object Error]",
      JC = "[object Function]",
      eN = "[object Map]",
      tN = "[object Number]",
      rN = "[object Object]",
      nN = "[object RegExp]",
      iN = "[object Set]",
      oN = "[object String]",
      aN = "[object WeakMap]",
      sN = "[object ArrayBuffer]",
      uN = "[object DataView]",
      cN = "[object Float32Array]",
      lN = "[object Float64Array]",
      fN = "[object Int8Array]",
      dN = "[object Int16Array]",
      pN = "[object Int32Array]",
      vN = "[object Uint8Array]",
      gN = "[object Uint8ClampedArray]",
      EN = "[object Uint16Array]",
      hN = "[object Uint32Array]",
      ve = {};
    ve[cN] =
      ve[lN] =
      ve[fN] =
      ve[dN] =
      ve[pN] =
      ve[vN] =
      ve[gN] =
      ve[EN] =
      ve[hN] =
        !0;
    ve[zC] =
      ve[YC] =
      ve[sN] =
      ve[$C] =
      ve[uN] =
      ve[QC] =
      ve[ZC] =
      ve[JC] =
      ve[eN] =
      ve[tN] =
      ve[rN] =
      ve[nN] =
      ve[iN] =
      ve[oN] =
      ve[aN] =
        !1;
    function _N(e) {
      return KC(e) && kC(e.length) && !!ve[jC(e)];
    }
    kp.exports = _N;
  });
  var Yp = u((tj, zp) => {
    function yN(e) {
      return function (t) {
        return e(t);
      };
    }
    zp.exports = yN;
  });
  var Qp = u((Vr, ar) => {
    var IN = Fo(),
      $p = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
      Wr = $p && typeof ar == "object" && ar && !ar.nodeType && ar,
      mN = Wr && Wr.exports === $p,
      ga = mN && IN.process,
      TN = (function () {
        try {
          var e = Wr && Wr.require && Wr.require("util").types;
          return e || (ga && ga.binding && ga.binding("util"));
        } catch {}
      })();
    ar.exports = TN;
  });
  var jn = u((rj, ev) => {
    var ON = Kp(),
      bN = Yp(),
      Zp = Qp(),
      Jp = Zp && Zp.isTypedArray,
      AN = Jp ? bN(Jp) : ON;
    ev.exports = AN;
  });
  var Ea = u((nj, tv) => {
    var SN = Lp(),
      wN = Ur(),
      RN = we(),
      CN = Wn(),
      NN = Bn(),
      PN = jn(),
      qN = Object.prototype,
      LN = qN.hasOwnProperty;
    function xN(e, t) {
      var r = RN(e),
        n = !r && wN(e),
        o = !r && !n && CN(e),
        i = !r && !n && !o && PN(e),
        a = r || n || o || i,
        s = a ? SN(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || LN.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              NN(f, c))
          ) &&
          s.push(f);
      return s;
    }
    tv.exports = xN;
  });
  var kn = u((ij, rv) => {
    var MN = Object.prototype;
    function DN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || MN;
      return e === r;
    }
    rv.exports = DN;
  });
  var iv = u((oj, nv) => {
    var FN = Go(),
      GN = FN(Object.keys, Object);
    nv.exports = GN;
  });
  var Kn = u((aj, ov) => {
    var UN = kn(),
      XN = iv(),
      VN = Object.prototype,
      WN = VN.hasOwnProperty;
    function BN(e) {
      if (!UN(e)) return XN(e);
      var t = [];
      for (var r in Object(e)) WN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ov.exports = BN;
  });
  var Mt = u((sj, av) => {
    var HN = aa(),
      jN = Hn();
    function kN(e) {
      return e != null && jN(e.length) && !HN(e);
    }
    av.exports = kN;
  });
  var Br = u((uj, sv) => {
    var KN = Ea(),
      zN = Kn(),
      YN = Mt();
    function $N(e) {
      return YN(e) ? KN(e) : zN(e);
    }
    sv.exports = $N;
  });
  var cv = u((cj, uv) => {
    var QN = da(),
      ZN = va(),
      JN = Br();
    function eP(e) {
      return QN(e, JN, ZN);
    }
    uv.exports = eP;
  });
  var dv = u((lj, fv) => {
    var lv = cv(),
      tP = 1,
      rP = Object.prototype,
      nP = rP.hasOwnProperty;
    function iP(e, t, r, n, o, i) {
      var a = r & tP,
        s = lv(e),
        c = s.length,
        f = lv(t),
        v = f.length;
      if (c != v && !a) return !1;
      for (var d = c; d--; ) {
        var E = s[d];
        if (!(a ? E in t : nP.call(t, E))) return !1;
      }
      var h = i.get(e),
        _ = i.get(t);
      if (h && _) return h == t && _ == e;
      var y = !0;
      i.set(e, t), i.set(t, e);
      for (var D = a; ++d < c; ) {
        E = s[d];
        var b = e[E],
          R = t[E];
        if (n) var T = a ? n(R, b, E, t, e, i) : n(b, R, E, e, t, i);
        if (!(T === void 0 ? b === R || o(b, R, r, n, i) : T)) {
          y = !1;
          break;
        }
        D || (D = E == "constructor");
      }
      if (y && !D) {
        var L = e.constructor,
          q = t.constructor;
        L != q &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof L == "function" &&
            L instanceof L &&
            typeof q == "function" &&
            q instanceof q
          ) &&
          (y = !1);
      }
      return i.delete(e), i.delete(t), y;
    }
    fv.exports = iP;
  });
  var vv = u((fj, pv) => {
    var oP = Ot(),
      aP = Qe(),
      sP = oP(aP, "DataView");
    pv.exports = sP;
  });
  var Ev = u((dj, gv) => {
    var uP = Ot(),
      cP = Qe(),
      lP = uP(cP, "Promise");
    gv.exports = lP;
  });
  var _v = u((pj, hv) => {
    var fP = Ot(),
      dP = Qe(),
      pP = fP(dP, "Set");
    hv.exports = pP;
  });
  var ha = u((vj, yv) => {
    var vP = Ot(),
      gP = Qe(),
      EP = vP(gP, "WeakMap");
    yv.exports = EP;
  });
  var zn = u((gj, Sv) => {
    var _a = vv(),
      ya = Gn(),
      Ia = Ev(),
      ma = _v(),
      Ta = ha(),
      Av = Tt(),
      sr = ua(),
      Iv = "[object Map]",
      hP = "[object Object]",
      mv = "[object Promise]",
      Tv = "[object Set]",
      Ov = "[object WeakMap]",
      bv = "[object DataView]",
      _P = sr(_a),
      yP = sr(ya),
      IP = sr(Ia),
      mP = sr(ma),
      TP = sr(Ta),
      Dt = Av;
    ((_a && Dt(new _a(new ArrayBuffer(1))) != bv) ||
      (ya && Dt(new ya()) != Iv) ||
      (Ia && Dt(Ia.resolve()) != mv) ||
      (ma && Dt(new ma()) != Tv) ||
      (Ta && Dt(new Ta()) != Ov)) &&
      (Dt = function (e) {
        var t = Av(e),
          r = t == hP ? e.constructor : void 0,
          n = r ? sr(r) : "";
        if (n)
          switch (n) {
            case _P:
              return bv;
            case yP:
              return Iv;
            case IP:
              return mv;
            case mP:
              return Tv;
            case TP:
              return Ov;
          }
        return t;
      });
    Sv.exports = Dt;
  });
  var xv = u((Ej, Lv) => {
    var Oa = ca(),
      OP = la(),
      bP = Op(),
      AP = dv(),
      wv = zn(),
      Rv = we(),
      Cv = Wn(),
      SP = jn(),
      wP = 1,
      Nv = "[object Arguments]",
      Pv = "[object Array]",
      Yn = "[object Object]",
      RP = Object.prototype,
      qv = RP.hasOwnProperty;
    function CP(e, t, r, n, o, i) {
      var a = Rv(e),
        s = Rv(t),
        c = a ? Pv : wv(e),
        f = s ? Pv : wv(t);
      (c = c == Nv ? Yn : c), (f = f == Nv ? Yn : f);
      var v = c == Yn,
        d = f == Yn,
        E = c == f;
      if (E && Cv(e)) {
        if (!Cv(t)) return !1;
        (a = !0), (v = !1);
      }
      if (E && !v)
        return (
          i || (i = new Oa()),
          a || SP(e) ? OP(e, t, r, n, o, i) : bP(e, t, c, r, n, o, i)
        );
      if (!(r & wP)) {
        var h = v && qv.call(e, "__wrapped__"),
          _ = d && qv.call(t, "__wrapped__");
        if (h || _) {
          var y = h ? e.value() : e,
            D = _ ? t.value() : t;
          return i || (i = new Oa()), o(y, D, r, n, i);
        }
      }
      return E ? (i || (i = new Oa()), AP(e, t, r, n, o, i)) : !1;
    }
    Lv.exports = CP;
  });
  var ba = u((hj, Fv) => {
    var NP = xv(),
      Mv = gt();
    function Dv(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!Mv(e) && !Mv(t))
        ? e !== e && t !== t
        : NP(e, t, r, n, Dv, o);
    }
    Fv.exports = Dv;
  });
  var Uv = u((_j, Gv) => {
    var PP = ca(),
      qP = ba(),
      LP = 1,
      xP = 2;
    function MP(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var c = s[0],
          f = e[c],
          v = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var d = new PP();
          if (n) var E = n(f, v, c, e, t, d);
          if (!(E === void 0 ? qP(v, f, LP | xP, n, d) : E)) return !1;
        }
      }
      return !0;
    }
    Gv.exports = MP;
  });
  var Aa = u((yj, Xv) => {
    var DP = ct();
    function FP(e) {
      return e === e && !DP(e);
    }
    Xv.exports = FP;
  });
  var Wv = u((Ij, Vv) => {
    var GP = Aa(),
      UP = Br();
    function XP(e) {
      for (var t = UP(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, GP(o)];
      }
      return t;
    }
    Vv.exports = XP;
  });
  var Sa = u((mj, Bv) => {
    function VP(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Bv.exports = VP;
  });
  var jv = u((Tj, Hv) => {
    var WP = Uv(),
      BP = Wv(),
      HP = Sa();
    function jP(e) {
      var t = BP(e);
      return t.length == 1 && t[0][2]
        ? HP(t[0][0], t[0][1])
        : function (r) {
            return r === e || WP(r, e, t);
          };
    }
    Hv.exports = jP;
  });
  var Hr = u((Oj, kv) => {
    var kP = Tt(),
      KP = gt(),
      zP = "[object Symbol]";
    function YP(e) {
      return typeof e == "symbol" || (KP(e) && kP(e) == zP);
    }
    kv.exports = YP;
  });
  var $n = u((bj, Kv) => {
    var $P = we(),
      QP = Hr(),
      ZP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      JP = /^\w*$/;
    function eq(e, t) {
      if ($P(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        QP(e)
        ? !0
        : JP.test(e) || !ZP.test(e) || (t != null && e in Object(t));
    }
    Kv.exports = eq;
  });
  var $v = u((Aj, Yv) => {
    var zv = Un(),
      tq = "Expected a function";
    function wa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(tq);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (wa.Cache || zv)()), r;
    }
    wa.Cache = zv;
    Yv.exports = wa;
  });
  var Zv = u((Sj, Qv) => {
    var rq = $v(),
      nq = 500;
    function iq(e) {
      var t = rq(e, function (n) {
          return r.size === nq && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Qv.exports = iq;
  });
  var eg = u((wj, Jv) => {
    var oq = Zv(),
      aq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      sq = /\\(\\)?/g,
      uq = oq(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(aq, function (r, n, o, i) {
            t.push(o ? i.replace(sq, "$1") : n || r);
          }),
          t
        );
      });
    Jv.exports = uq;
  });
  var Ra = u((Rj, tg) => {
    function cq(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    tg.exports = cq;
  });
  var sg = u((Cj, ag) => {
    var rg = Yt(),
      lq = Ra(),
      fq = we(),
      dq = Hr(),
      pq = 1 / 0,
      ng = rg ? rg.prototype : void 0,
      ig = ng ? ng.toString : void 0;
    function og(e) {
      if (typeof e == "string") return e;
      if (fq(e)) return lq(e, og) + "";
      if (dq(e)) return ig ? ig.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -pq ? "-0" : t;
    }
    ag.exports = og;
  });
  var cg = u((Nj, ug) => {
    var vq = sg();
    function gq(e) {
      return e == null ? "" : vq(e);
    }
    ug.exports = gq;
  });
  var jr = u((Pj, lg) => {
    var Eq = we(),
      hq = $n(),
      _q = eg(),
      yq = cg();
    function Iq(e, t) {
      return Eq(e) ? e : hq(e, t) ? [e] : _q(yq(e));
    }
    lg.exports = Iq;
  });
  var ur = u((qj, fg) => {
    var mq = Hr(),
      Tq = 1 / 0;
    function Oq(e) {
      if (typeof e == "string" || mq(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Tq ? "-0" : t;
    }
    fg.exports = Oq;
  });
  var Qn = u((Lj, dg) => {
    var bq = jr(),
      Aq = ur();
    function Sq(e, t) {
      t = bq(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[Aq(t[r++])];
      return r && r == n ? e : void 0;
    }
    dg.exports = Sq;
  });
  var Zn = u((xj, pg) => {
    var wq = Qn();
    function Rq(e, t, r) {
      var n = e == null ? void 0 : wq(e, t);
      return n === void 0 ? r : n;
    }
    pg.exports = Rq;
  });
  var gg = u((Mj, vg) => {
    function Cq(e, t) {
      return e != null && t in Object(e);
    }
    vg.exports = Cq;
  });
  var hg = u((Dj, Eg) => {
    var Nq = jr(),
      Pq = Ur(),
      qq = we(),
      Lq = Bn(),
      xq = Hn(),
      Mq = ur();
    function Dq(e, t, r) {
      t = Nq(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = Mq(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && xq(o) && Lq(a, o) && (qq(e) || Pq(e)));
    }
    Eg.exports = Dq;
  });
  var yg = u((Fj, _g) => {
    var Fq = gg(),
      Gq = hg();
    function Uq(e, t) {
      return e != null && Gq(e, t, Fq);
    }
    _g.exports = Uq;
  });
  var mg = u((Gj, Ig) => {
    var Xq = ba(),
      Vq = Zn(),
      Wq = yg(),
      Bq = $n(),
      Hq = Aa(),
      jq = Sa(),
      kq = ur(),
      Kq = 1,
      zq = 2;
    function Yq(e, t) {
      return Bq(e) && Hq(t)
        ? jq(kq(e), t)
        : function (r) {
            var n = Vq(r, e);
            return n === void 0 && n === t ? Wq(r, e) : Xq(t, n, Kq | zq);
          };
    }
    Ig.exports = Yq;
  });
  var Jn = u((Uj, Tg) => {
    function $q(e) {
      return e;
    }
    Tg.exports = $q;
  });
  var Ca = u((Xj, Og) => {
    function Qq(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Og.exports = Qq;
  });
  var Ag = u((Vj, bg) => {
    var Zq = Qn();
    function Jq(e) {
      return function (t) {
        return Zq(t, e);
      };
    }
    bg.exports = Jq;
  });
  var wg = u((Wj, Sg) => {
    var eL = Ca(),
      tL = Ag(),
      rL = $n(),
      nL = ur();
    function iL(e) {
      return rL(e) ? eL(nL(e)) : tL(e);
    }
    Sg.exports = iL;
  });
  var bt = u((Bj, Rg) => {
    var oL = jv(),
      aL = mg(),
      sL = Jn(),
      uL = we(),
      cL = wg();
    function lL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? sL
        : typeof e == "object"
        ? uL(e)
          ? aL(e[0], e[1])
          : oL(e)
        : cL(e);
    }
    Rg.exports = lL;
  });
  var Na = u((Hj, Cg) => {
    var fL = bt(),
      dL = Mt(),
      pL = Br();
    function vL(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!dL(t)) {
          var i = fL(r, 3);
          (t = pL(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    Cg.exports = vL;
  });
  var Pa = u((jj, Ng) => {
    function gL(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    Ng.exports = gL;
  });
  var qg = u((kj, Pg) => {
    var EL = /\s/;
    function hL(e) {
      for (var t = e.length; t-- && EL.test(e.charAt(t)); );
      return t;
    }
    Pg.exports = hL;
  });
  var xg = u((Kj, Lg) => {
    var _L = qg(),
      yL = /^\s+/;
    function IL(e) {
      return e && e.slice(0, _L(e) + 1).replace(yL, "");
    }
    Lg.exports = IL;
  });
  var ei = u((zj, Fg) => {
    var mL = xg(),
      Mg = ct(),
      TL = Hr(),
      Dg = 0 / 0,
      OL = /^[-+]0x[0-9a-f]+$/i,
      bL = /^0b[01]+$/i,
      AL = /^0o[0-7]+$/i,
      SL = parseInt;
    function wL(e) {
      if (typeof e == "number") return e;
      if (TL(e)) return Dg;
      if (Mg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Mg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = mL(e);
      var r = bL.test(e);
      return r || AL.test(e) ? SL(e.slice(2), r ? 2 : 8) : OL.test(e) ? Dg : +e;
    }
    Fg.exports = wL;
  });
  var Xg = u((Yj, Ug) => {
    var RL = ei(),
      Gg = 1 / 0,
      CL = 17976931348623157e292;
    function NL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = RL(e)), e === Gg || e === -Gg)) {
        var t = e < 0 ? -1 : 1;
        return t * CL;
      }
      return e === e ? e : 0;
    }
    Ug.exports = NL;
  });
  var qa = u(($j, Vg) => {
    var PL = Xg();
    function qL(e) {
      var t = PL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Vg.exports = qL;
  });
  var Bg = u((Qj, Wg) => {
    var LL = Pa(),
      xL = bt(),
      ML = qa(),
      DL = Math.max;
    function FL(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : ML(r);
      return o < 0 && (o = DL(n + o, 0)), LL(e, xL(t, 3), o);
    }
    Wg.exports = FL;
  });
  var La = u((Zj, Hg) => {
    var GL = Na(),
      UL = Bg(),
      XL = GL(UL);
    Hg.exports = XL;
  });
  var ri = u((Le) => {
    "use strict";
    var VL = ze().default;
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.withBrowser =
      Le.TRANSFORM_STYLE_PREFIXED =
      Le.TRANSFORM_PREFIXED =
      Le.IS_BROWSER_ENV =
      Le.FLEX_PREFIXED =
      Le.ELEMENT_MATCHES =
        void 0;
    var WL = VL(La()),
      kg = typeof window < "u";
    Le.IS_BROWSER_ENV = kg;
    var ti = (e, t) => (kg ? e() : t);
    Le.withBrowser = ti;
    var BL = ti(() =>
      (0, WL.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Le.ELEMENT_MATCHES = BL;
    var HL = ti(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Le.FLEX_PREFIXED = HL;
    var Kg = ti(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    Le.TRANSFORM_PREFIXED = Kg;
    var jg = Kg.split("transform")[0],
      jL = jg ? jg + "TransformStyle" : "transformStyle";
    Le.TRANSFORM_STYLE_PREFIXED = jL;
  });
  var xa = u((ek, Zg) => {
    var kL = 4,
      KL = 0.001,
      zL = 1e-7,
      YL = 10,
      kr = 11,
      ni = 1 / (kr - 1),
      $L = typeof Float32Array == "function";
    function zg(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Yg(e, t) {
      return 3 * t - 6 * e;
    }
    function $g(e) {
      return 3 * e;
    }
    function ii(e, t, r) {
      return ((zg(t, r) * e + Yg(t, r)) * e + $g(t)) * e;
    }
    function Qg(e, t, r) {
      return 3 * zg(t, r) * e * e + 2 * Yg(t, r) * e + $g(t);
    }
    function QL(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = ii(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > zL && ++s < YL);
      return a;
    }
    function ZL(e, t, r, n) {
      for (var o = 0; o < kL; ++o) {
        var i = Qg(t, r, n);
        if (i === 0) return t;
        var a = ii(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    Zg.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = $L ? new Float32Array(kr) : new Array(kr);
      if (t !== r || n !== o)
        for (var a = 0; a < kr; ++a) i[a] = ii(a * ni, t, n);
      function s(c) {
        for (var f = 0, v = 1, d = kr - 1; v !== d && i[v] <= c; ++v) f += ni;
        --v;
        var E = (c - i[v]) / (i[v + 1] - i[v]),
          h = f + E * ni,
          _ = Qg(h, t, n);
        return _ >= KL ? ZL(c, h, t, n) : _ === 0 ? h : QL(c, f, f + ni, t, n);
      }
      return function (f) {
        return t === r && n === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : ii(s(f), r, o);
      };
    };
  });
  var Ma = u((re) => {
    "use strict";
    var JL = ze().default;
    Object.defineProperty(re, "__esModule", { value: !0 });
    re.bounce = Mx;
    re.bouncePast = Dx;
    re.easeOut = re.easeInOut = re.easeIn = re.ease = void 0;
    re.inBack = Sx;
    re.inCirc = Tx;
    re.inCubic = sx;
    re.inElastic = Cx;
    re.inExpo = yx;
    re.inOutBack = Rx;
    re.inOutCirc = bx;
    re.inOutCubic = cx;
    re.inOutElastic = Px;
    re.inOutExpo = mx;
    re.inOutQuad = ax;
    re.inOutQuart = dx;
    re.inOutQuint = gx;
    re.inOutSine = _x;
    re.inQuad = ix;
    re.inQuart = lx;
    re.inQuint = px;
    re.inSine = Ex;
    re.outBack = wx;
    re.outBounce = Ax;
    re.outCirc = Ox;
    re.outCubic = ux;
    re.outElastic = Nx;
    re.outExpo = Ix;
    re.outQuad = ox;
    re.outQuart = fx;
    re.outQuint = vx;
    re.outSine = hx;
    re.swingFrom = Lx;
    re.swingFromTo = qx;
    re.swingTo = xx;
    var oi = JL(xa()),
      ht = 1.70158,
      ex = (0, oi.default)(0.25, 0.1, 0.25, 1);
    re.ease = ex;
    var tx = (0, oi.default)(0.42, 0, 1, 1);
    re.easeIn = tx;
    var rx = (0, oi.default)(0, 0, 0.58, 1);
    re.easeOut = rx;
    var nx = (0, oi.default)(0.42, 0, 0.58, 1);
    re.easeInOut = nx;
    function ix(e) {
      return Math.pow(e, 2);
    }
    function ox(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function ax(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function sx(e) {
      return Math.pow(e, 3);
    }
    function ux(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function cx(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function lx(e) {
      return Math.pow(e, 4);
    }
    function fx(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function dx(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function px(e) {
      return Math.pow(e, 5);
    }
    function vx(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function gx(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function Ex(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function hx(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function _x(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function yx(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function Ix(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function mx(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function Tx(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function Ox(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function bx(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function Ax(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function Sx(e) {
      let t = ht;
      return e * e * ((t + 1) * e - t);
    }
    function wx(e) {
      let t = ht;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function Rx(e) {
      let t = ht;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function Cx(e) {
      let t = ht,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function Nx(e) {
      let t = ht,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function Px(e) {
      let t = ht,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function qx(e) {
      let t = ht;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function Lx(e) {
      let t = ht;
      return e * e * ((t + 1) * e - t);
    }
    function xx(e) {
      let t = ht;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function Mx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function Dx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Fa = u((Kr) => {
    "use strict";
    var Fx = ze().default,
      Gx = Pt().default;
    Object.defineProperty(Kr, "__esModule", { value: !0 });
    Kr.applyEasing = Vx;
    Kr.createBezierEasing = Xx;
    Kr.optimizeFloat = Da;
    var Jg = Gx(Ma()),
      Ux = Fx(xa());
    function Da(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        o = Number(Math.round(e * n) / n);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function Xx(e) {
      return (0, Ux.default)(...e);
    }
    function Vx(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Da(r ? (t > 0 ? r(t) : t) : t > 0 && e && Jg[e] ? Jg[e](t) : t);
    }
  });
  var nE = u((cr) => {
    "use strict";
    Object.defineProperty(cr, "__esModule", { value: !0 });
    cr.createElementState = rE;
    cr.ixElements = void 0;
    cr.mergeActionState = Ga;
    var ai = er(),
      tE = Fe(),
      {
        HTML_ELEMENT: nk,
        PLAIN_OBJECT: Wx,
        ABSTRACT_NODE: ik,
        CONFIG_X_VALUE: Bx,
        CONFIG_Y_VALUE: Hx,
        CONFIG_Z_VALUE: jx,
        CONFIG_VALUE: kx,
        CONFIG_X_UNIT: Kx,
        CONFIG_Y_UNIT: zx,
        CONFIG_Z_UNIT: Yx,
        CONFIG_UNIT: $x,
      } = tE.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: Qx,
        IX2_INSTANCE_ADDED: Zx,
        IX2_ELEMENT_STATE_CHANGED: Jx,
      } = tE.IX2EngineActionTypes,
      eE = {},
      eM = "refState",
      tM = (e = eE, t = {}) => {
        switch (t.type) {
          case Qx:
            return eE;
          case Zx: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = i,
              c = e;
            return (
              (0, ai.getIn)(c, [r, n]) !== n && (c = rE(c, n, a, r, i)),
              Ga(c, r, s, o, i)
            );
          }
          case Jx: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return Ga(e, r, n, o, i);
          }
          default:
            return e;
        }
      };
    cr.ixElements = tM;
    function rE(e, t, r, n, o) {
      let i =
        r === Wx ? (0, ai.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, ai.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function Ga(e, t, r, n, o) {
      let i = nM(o),
        a = [t, eM, r];
      return (0, ai.mergeIn)(e, a, n, i);
    }
    var rM = [
      [Bx, Kx],
      [Hx, zx],
      [jx, Yx],
      [kx, $x],
    ];
    function nM(e) {
      let { config: t } = e;
      return rM.reduce((r, n) => {
        let o = n[0],
          i = n[1],
          a = t[o],
          s = t[i];
        return a != null && s != null && (r[i] = s), r;
      }, {});
    }
  });
  var iE = u((Re) => {
    "use strict";
    Object.defineProperty(Re, "__esModule", { value: !0 });
    Re.renderPlugin =
      Re.getPluginOrigin =
      Re.getPluginDuration =
      Re.getPluginDestination =
      Re.getPluginConfig =
      Re.createPluginInstance =
      Re.clearPlugin =
        void 0;
    var iM = (e) => e.value;
    Re.getPluginConfig = iM;
    var oM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Re.getPluginDuration = oM;
    var aM = (e) => e || { value: 0 };
    Re.getPluginOrigin = aM;
    var sM = (e) => ({ value: e.value });
    Re.getPluginDestination = sM;
    var uM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Re.createPluginInstance = uM;
    var cM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Re.renderPlugin = cM;
    var lM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Re.clearPlugin = lM;
  });
  var aE = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.renderPlugin =
      Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    var fM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      dM = () => window.Webflow.require("spline"),
      pM = (e, t) => e.filter((r) => !t.includes(r)),
      vM = (e, t) => e.value[t];
    Ce.getPluginConfig = vM;
    var gM = () => null;
    Ce.getPluginDuration = gM;
    var oE = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      EM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let i = Object.keys(e),
            a = pM(n, i);
          return a.length ? a.reduce((c, f) => ((c[f] = oE[f]), c), e) : e;
        }
        return n.reduce((i, a) => ((i[a] = oE[a]), i), {});
      };
    Ce.getPluginOrigin = EM;
    var hM = (e) => e.value;
    Ce.getPluginDestination = hM;
    var _M = (e, t) => {
      var r, n;
      let o =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return o ? fM(o) : null;
    };
    Ce.createPluginInstance = _M;
    var yM = (e, t, r) => {
      let n = dM().getInstance(e),
        o = r.config.target.objectId;
      if (!n || !o) return;
      let i = n.spline.findObjectById(o);
      if (!i) return;
      let { PLUGIN_SPLINE: a } = t;
      a.positionX != null && (i.position.x = a.positionX),
        a.positionY != null && (i.position.y = a.positionY),
        a.positionZ != null && (i.position.z = a.positionZ),
        a.rotationX != null && (i.rotation.x = a.rotationX),
        a.rotationY != null && (i.rotation.y = a.rotationY),
        a.rotationZ != null && (i.rotation.z = a.rotationZ),
        a.scaleX != null && (i.scale.x = a.scaleX),
        a.scaleY != null && (i.scale.y = a.scaleY),
        a.scaleZ != null && (i.scale.z = a.scaleZ);
    };
    Ce.renderPlugin = yM;
    var IM = () => null;
    Ce.clearPlugin = IM;
  });
  var uE = u((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    be.getPluginOrigin =
      be.getPluginDuration =
      be.getPluginDestination =
      be.getPluginConfig =
      be.createPluginInstance =
      be.clearPlugin =
        void 0;
    be.normalizeColor = sE;
    be.renderPlugin = void 0;
    function sE(e) {
      let t,
        r,
        n,
        o = 1,
        i = e.replace(/\s/g, "").toLowerCase();
      if (i.startsWith("#")) {
        let a = i.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (i.startsWith("rgba")) {
        let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (o = parseFloat(a[3]));
      } else if (i.startsWith("rgb")) {
        let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (i.startsWith("hsla")) {
        let a = i.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        o = parseFloat(a[3]);
        let v = (1 - Math.abs(2 * f - 1)) * c,
          d = v * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = f - v / 2,
          h,
          _,
          y;
        s >= 0 && s < 60
          ? ((h = v), (_ = d), (y = 0))
          : s >= 60 && s < 120
          ? ((h = d), (_ = v), (y = 0))
          : s >= 120 && s < 180
          ? ((h = 0), (_ = v), (y = d))
          : s >= 180 && s < 240
          ? ((h = 0), (_ = d), (y = v))
          : s >= 240 && s < 300
          ? ((h = d), (_ = 0), (y = v))
          : ((h = v), (_ = 0), (y = d)),
          (t = Math.round((h + E) * 255)),
          (r = Math.round((_ + E) * 255)),
          (n = Math.round((y + E) * 255));
      } else if (i.startsWith("hsl")) {
        let a = i.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          v = (1 - Math.abs(2 * f - 1)) * c,
          d = v * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = f - v / 2,
          h,
          _,
          y;
        s >= 0 && s < 60
          ? ((h = v), (_ = d), (y = 0))
          : s >= 60 && s < 120
          ? ((h = d), (_ = v), (y = 0))
          : s >= 120 && s < 180
          ? ((h = 0), (_ = v), (y = d))
          : s >= 180 && s < 240
          ? ((h = 0), (_ = d), (y = v))
          : s >= 240 && s < 300
          ? ((h = d), (_ = 0), (y = v))
          : ((h = v), (_ = 0), (y = d)),
          (t = Math.round((h + E) * 255)),
          (r = Math.round((_ + E) * 255)),
          (n = Math.round((y + E) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: o }
      );
    }
    var mM = (e, t) => e.value[t];
    be.getPluginConfig = mM;
    var TM = () => null;
    be.getPluginDuration = TM;
    var OM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        o = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(o, 10) };
      if (r.red != null && r.green != null && r.blue != null) return sE(o);
    };
    be.getPluginOrigin = OM;
    var bM = (e) => e.value;
    be.getPluginDestination = bM;
    var AM = () => null;
    be.createPluginInstance = AM;
    var SM = (e, t, r) => {
      let n = r.config.target.objectId,
        o = r.config.value.unit,
        { PLUGIN_VARIABLE: i } = t,
        { size: a, red: s, green: c, blue: f, alpha: v } = i,
        d;
      a != null && (d = a + o),
        s != null &&
          f != null &&
          c != null &&
          v != null &&
          (d = `rgba(${s}, ${c}, ${f}, ${v})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    be.renderPlugin = SM;
    var wM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    be.clearPlugin = wM;
  });
  var cE = u((si) => {
    "use strict";
    var Va = Pt().default,
      RM = ze().default;
    Object.defineProperty(si, "__esModule", { value: !0 });
    si.pluginMethodMap = void 0;
    var Ua = RM(Jt()),
      Xa = Fe(),
      CM = Va(iE()),
      NM = Va(aE()),
      PM = Va(uE()),
      qM = new Map([
        [Xa.ActionTypeConsts.PLUGIN_LOTTIE, (0, Ua.default)({}, CM)],
        [Xa.ActionTypeConsts.PLUGIN_SPLINE, (0, Ua.default)({}, NM)],
        [Xa.ActionTypeConsts.PLUGIN_VARIABLE, (0, Ua.default)({}, PM)],
      ]);
    si.pluginMethodMap = qM;
  });
  var Wa = u((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    Ae.isPluginType = xM;
    Ae.renderPlugin = void 0;
    var LM = ri(),
      lE = cE();
    function xM(e) {
      return lE.pluginMethodMap.has(e);
    }
    var Ft = (e) => (t) => {
        if (!LM.IS_BROWSER_ENV) return () => null;
        let r = lE.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      MM = Ft("getPluginConfig");
    Ae.getPluginConfig = MM;
    var DM = Ft("getPluginOrigin");
    Ae.getPluginOrigin = DM;
    var FM = Ft("getPluginDuration");
    Ae.getPluginDuration = FM;
    var GM = Ft("getPluginDestination");
    Ae.getPluginDestination = GM;
    var UM = Ft("createPluginInstance");
    Ae.createPluginInstance = UM;
    var XM = Ft("renderPlugin");
    Ae.renderPlugin = XM;
    var VM = Ft("clearPlugin");
    Ae.clearPlugin = VM;
  });
  var dE = u((fk, fE) => {
    function WM(e, t) {
      return e == null || e !== e ? t : e;
    }
    fE.exports = WM;
  });
  var vE = u((dk, pE) => {
    function BM(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    pE.exports = BM;
  });
  var EE = u((pk, gE) => {
    function HM(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++o];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    gE.exports = HM;
  });
  var _E = u((vk, hE) => {
    var jM = EE(),
      kM = jM();
    hE.exports = kM;
  });
  var Ba = u((gk, yE) => {
    var KM = _E(),
      zM = Br();
    function YM(e, t) {
      return e && KM(e, t, zM);
    }
    yE.exports = YM;
  });
  var mE = u((Ek, IE) => {
    var $M = Mt();
    function QM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!$M(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    IE.exports = QM;
  });
  var Ha = u((hk, TE) => {
    var ZM = Ba(),
      JM = mE(),
      eD = JM(ZM);
    TE.exports = eD;
  });
  var bE = u((_k, OE) => {
    function tD(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    OE.exports = tD;
  });
  var SE = u((yk, AE) => {
    var rD = vE(),
      nD = Ha(),
      iD = bt(),
      oD = bE(),
      aD = we();
    function sD(e, t, r) {
      var n = aD(e) ? rD : oD,
        o = arguments.length < 3;
      return n(e, iD(t, 4), r, o, nD);
    }
    AE.exports = sD;
  });
  var RE = u((Ik, wE) => {
    var uD = Pa(),
      cD = bt(),
      lD = qa(),
      fD = Math.max,
      dD = Math.min;
    function pD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = lD(r)), (o = r < 0 ? fD(n + o, 0) : dD(o, n - 1))),
        uD(e, cD(t, 3), o, !0)
      );
    }
    wE.exports = pD;
  });
  var NE = u((mk, CE) => {
    var vD = Na(),
      gD = RE(),
      ED = vD(gD);
    CE.exports = ED;
  });
  var qE = u((ui) => {
    "use strict";
    Object.defineProperty(ui, "__esModule", { value: !0 });
    ui.default = void 0;
    var hD = Object.prototype.hasOwnProperty;
    function PE(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function _D(e, t) {
      if (PE(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let o = 0; o < r.length; o++)
        if (!hD.call(t, r[o]) || !PE(e[r[o]], t[r[o]])) return !1;
      return !0;
    }
    var yD = _D;
    ui.default = yD;
  });
  var QE = u((de) => {
    "use strict";
    var di = ze().default;
    Object.defineProperty(de, "__esModule", { value: !0 });
    de.cleanupHTMLElement = h1;
    de.clearAllStyles = E1;
    de.clearObjectCache = FD;
    de.getActionListProgress = y1;
    de.getAffectedElements = Qa;
    de.getComputedStyle = jD;
    de.getDestinationValues = ZD;
    de.getElementId = VD;
    de.getInstanceId = UD;
    de.getInstanceOrigin = zD;
    de.getItemConfigByKey = void 0;
    de.getMaxDurationItemIndex = $E;
    de.getNamespacedParameterId = T1;
    de.getRenderType = KE;
    de.getStyleProp = JD;
    de.mediaQueriesEqual = b1;
    de.observeStore = HD;
    de.reduceListToGroup = I1;
    de.reifyState = WD;
    de.renderHTMLElement = e1;
    Object.defineProperty(de, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return XE.default;
      },
    });
    de.shouldAllowMediaQuery = O1;
    de.shouldNamespaceEventParameter = m1;
    de.stringifyTarget = A1;
    var At = di(dE()),
      Ka = di(SE()),
      ka = di(NE()),
      LE = er(),
      Gt = Fe(),
      XE = di(qE()),
      ID = Fa(),
      dt = Wa(),
      xe = ri(),
      {
        BACKGROUND: mD,
        TRANSFORM: TD,
        TRANSLATE_3D: OD,
        SCALE_3D: bD,
        ROTATE_X: AD,
        ROTATE_Y: SD,
        ROTATE_Z: wD,
        SKEW: RD,
        PRESERVE_3D: CD,
        FLEX: ND,
        OPACITY: li,
        FILTER: zr,
        FONT_VARIATION_SETTINGS: Yr,
        WIDTH: lt,
        HEIGHT: ft,
        BACKGROUND_COLOR: VE,
        BORDER_COLOR: PD,
        COLOR: qD,
        CHILDREN: xE,
        IMMEDIATE_CHILDREN: LD,
        SIBLINGS: ME,
        PARENT: xD,
        DISPLAY: fi,
        WILL_CHANGE: lr,
        AUTO: St,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: MD,
        BAR_DELIMITER: ja,
        RENDER_TRANSFORM: WE,
        RENDER_GENERAL: za,
        RENDER_STYLE: Ya,
        RENDER_PLUGIN: BE,
      } = Gt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: fr,
        TRANSFORM_SCALE: dr,
        TRANSFORM_ROTATE: pr,
        TRANSFORM_SKEW: Qr,
        STYLE_OPACITY: HE,
        STYLE_FILTER: Zr,
        STYLE_FONT_VARIATION: Jr,
        STYLE_SIZE: vr,
        STYLE_BACKGROUND_COLOR: gr,
        STYLE_BORDER: Er,
        STYLE_TEXT_COLOR: hr,
        GENERAL_DISPLAY: pi,
        OBJECT_VALUE: DD,
      } = Gt.ActionTypeConsts,
      jE = (e) => e.trim(),
      $a = Object.freeze({ [gr]: VE, [Er]: PD, [hr]: qD }),
      kE = Object.freeze({
        [xe.TRANSFORM_PREFIXED]: TD,
        [VE]: mD,
        [li]: li,
        [zr]: zr,
        [lt]: lt,
        [ft]: ft,
        [Yr]: Yr,
      }),
      ci = new Map();
    function FD() {
      ci.clear();
    }
    var GD = 1;
    function UD() {
      return "i" + GD++;
    }
    var XD = 1;
    function VD(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + XD++;
    }
    function WD({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Ka.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        o = r && r.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var BD = (e, t) => e === t;
    function HD({ store: e, select: t, onChange: r, comparator: n = BD }) {
      let { getState: o, subscribe: i } = e,
        a = i(c),
        s = t(o());
      function c() {
        let f = t(o());
        if (f == null) {
          a();
          return;
        }
        n(f, s) || ((s = f), r(s, e));
      }
      return a;
    }
    function DE(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function Qa({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: o,
    }) {
      var i, a, s;
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (P, G) =>
            P.concat(
              Qa({
                config: { target: G },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: v,
          queryDocument: d,
          getChildElements: E,
          getSiblingElements: h,
          matchSelector: _,
          elementContains: y,
          isSiblingNode: D,
        } = o,
        { target: b } = e;
      if (!b) return [];
      let {
        id: R,
        objectId: T,
        selector: L,
        selectorGuids: q,
        appliesTo: M,
        useEventTarget: X,
      } = DE(b);
      if (T) return [ci.has(T) ? ci.get(T) : ci.set(T, {}).get(T)];
      if (M === Gt.EventAppliesTo.PAGE) {
        let P = f(R);
        return P ? [P] : [];
      }
      let Y =
          ((i =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && i !== void 0
            ? i
            : {})[R || L] || {},
        ee = !!(Y.id || Y.selector),
        V,
        w,
        g,
        x = t && v(DE(t.target));
      if (
        (ee
          ? ((V = Y.limitAffectedElements), (w = x), (g = v(Y)))
          : (w = g = v({ id: R, selector: L, selectorGuids: q })),
        t && X)
      ) {
        let P = r && (g || X === !0) ? [r] : d(x);
        if (g) {
          if (X === xD) return d(g).filter((G) => P.some(($) => y(G, $)));
          if (X === xE) return d(g).filter((G) => P.some(($) => y($, G)));
          if (X === ME) return d(g).filter((G) => P.some(($) => D($, G)));
        }
        return P;
      }
      return w == null || g == null
        ? []
        : xe.IS_BROWSER_ENV && n
        ? d(g).filter((P) => n.contains(P))
        : V === xE
        ? d(w, g)
        : V === LD
        ? E(d(w)).filter(_(g))
        : V === ME
        ? h(d(w)).filter(_(g))
        : d(g);
    }
    function jD({ element: e, actionItem: t }) {
      if (!xe.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case vr:
        case gr:
        case Er:
        case hr:
        case pi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var FE = /px/,
      kD = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = t1[n.type]), r),
          e || {}
        ),
      KD = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = r1[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function zD(e, t = {}, r = {}, n, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = n;
      if ((0, dt.isPluginType)(a)) return (0, dt.getPluginOrigin)(a)(t[a], n);
      switch (n.actionTypeId) {
        case fr:
        case dr:
        case pr:
        case Qr:
          return t[n.actionTypeId] || Za[n.actionTypeId];
        case Zr:
          return kD(t[n.actionTypeId], n.config.filters);
        case Jr:
          return KD(t[n.actionTypeId], n.config.fontVariations);
        case HE:
          return { value: (0, At.default)(parseFloat(i(e, li)), 1) };
        case vr: {
          let s = i(e, lt),
            c = i(e, ft),
            f,
            v;
          return (
            n.config.widthUnit === St
              ? (f = FE.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (f = (0, At.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === St
              ? (v = FE.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (v = (0, At.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: v }
          );
        }
        case gr:
        case Er:
        case hr:
          return p1({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case pi:
          return { value: (0, At.default)(i(e, fi), r.display) };
        case DD:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var YD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      $D = (e, t) => (t && (e[t.type] = t.value || 0), e),
      QD = (e, t, r) => {
        if ((0, dt.isPluginType)(e)) return (0, dt.getPluginConfig)(e)(r, t);
        switch (e) {
          case Zr: {
            let n = (0, ka.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case Jr: {
            let n = (0, ka.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    de.getItemConfigByKey = QD;
    function ZD({ element: e, actionItem: t, elementApi: r }) {
      if ((0, dt.isPluginType)(t.actionTypeId))
        return (0, dt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case fr:
        case dr:
        case pr:
        case Qr: {
          let { xValue: n, yValue: o, zValue: i } = t.config;
          return { xValue: n, yValue: o, zValue: i };
        }
        case vr: {
          let { getStyle: n, setStyle: o, getProperty: i } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!xe.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (a === St) {
            let v = n(e, lt);
            o(e, lt, ""), (c = i(e, "offsetWidth")), o(e, lt, v);
          }
          if (s === St) {
            let v = n(e, ft);
            o(e, ft, ""), (f = i(e, "offsetHeight")), o(e, ft, v);
          }
          return { widthValue: c, heightValue: f };
        }
        case gr:
        case Er:
        case hr: {
          let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
          return { rValue: n, gValue: o, bValue: i, aValue: a };
        }
        case Zr:
          return t.config.filters.reduce(YD, {});
        case Jr:
          return t.config.fontVariations.reduce($D, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function KE(e) {
      if (/^TRANSFORM_/.test(e)) return WE;
      if (/^STYLE_/.test(e)) return Ya;
      if (/^GENERAL_/.test(e)) return za;
      if (/^PLUGIN_/.test(e)) return BE;
    }
    function JD(e, t) {
      return e === Ya ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function e1(e, t, r, n, o, i, a, s, c) {
      switch (s) {
        case WE:
          return o1(e, t, r, o, a);
        case Ya:
          return v1(e, t, r, o, i, a);
        case za:
          return g1(e, o, a);
        case BE: {
          let { actionTypeId: f } = o;
          if ((0, dt.isPluginType)(f)) return (0, dt.renderPlugin)(f)(c, t, o);
        }
      }
    }
    var Za = {
        [fr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [dr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [pr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      t1 = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      r1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      n1 = (e, t) => {
        let r = (0, ka.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      i1 = Object.keys(Za);
    function o1(e, t, r, n, o) {
      let i = i1
          .map((s) => {
            let c = Za[s],
              {
                xValue: f = c.xValue,
                yValue: v = c.yValue,
                zValue: d = c.zValue,
                xUnit: E = "",
                yUnit: h = "",
                zUnit: _ = "",
              } = t[s] || {};
            switch (s) {
              case fr:
                return `${OD}(${f}${E}, ${v}${h}, ${d}${_})`;
              case dr:
                return `${bD}(${f}${E}, ${v}${h}, ${d}${_})`;
              case pr:
                return `${AD}(${f}${E}) ${SD}(${v}${h}) ${wD}(${d}${_})`;
              case Qr:
                return `${RD}(${f}${E}, ${v}${h})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = o;
      Ut(e, xe.TRANSFORM_PREFIXED, o),
        a(e, xe.TRANSFORM_PREFIXED, i),
        u1(n, r) && a(e, xe.TRANSFORM_STYLE_PREFIXED, CD);
    }
    function a1(e, t, r, n) {
      let o = (0, Ka.default)(t, (a, s, c) => `${a} ${c}(${s}${n1(c, r)})`, ""),
        { setStyle: i } = n;
      Ut(e, zr, n), i(e, zr, o);
    }
    function s1(e, t, r, n) {
      let o = (0, Ka.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: i } = n;
      Ut(e, Yr, n), i(e, Yr, o);
    }
    function u1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === fr && n !== void 0) ||
        (e === dr && n !== void 0) ||
        (e === pr && (t !== void 0 || r !== void 0))
      );
    }
    var c1 = "\\(([^)]+)\\)",
      l1 = /^rgb/,
      f1 = RegExp(`rgba?${c1}`);
    function d1(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function p1({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let o = $a[t],
        i = n(e, o),
        a = l1.test(i) ? i : r[o],
        s = d1(f1, a).split($r);
      return {
        rValue: (0, At.default)(parseInt(s[0], 10), 255),
        gValue: (0, At.default)(parseInt(s[1], 10), 255),
        bValue: (0, At.default)(parseInt(s[2], 10), 255),
        aValue: (0, At.default)(parseFloat(s[3]), 1),
      };
    }
    function v1(e, t, r, n, o, i) {
      let { setStyle: a } = i;
      switch (n.actionTypeId) {
        case vr: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: v } = r;
          f !== void 0 &&
            (s === St && (s = "px"), Ut(e, lt, i), a(e, lt, f + s)),
            v !== void 0 &&
              (c === St && (c = "px"), Ut(e, ft, i), a(e, ft, v + c));
          break;
        }
        case Zr: {
          a1(e, r, n.config, i);
          break;
        }
        case Jr: {
          s1(e, r, n.config, i);
          break;
        }
        case gr:
        case Er:
        case hr: {
          let s = $a[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            v = Math.round(r.bValue),
            d = r.aValue;
          Ut(e, s, i),
            a(
              e,
              s,
              d >= 1 ? `rgb(${c},${f},${v})` : `rgba(${c},${f},${v},${d})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Ut(e, o, i), a(e, o, r.value + s);
          break;
        }
      }
    }
    function g1(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case pi: {
          let { value: o } = t.config;
          o === ND && xe.IS_BROWSER_ENV
            ? n(e, fi, xe.FLEX_PREFIXED)
            : n(e, fi, o);
          return;
        }
      }
    }
    function Ut(e, t, r) {
      if (!xe.IS_BROWSER_ENV) return;
      let n = kE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, lr);
      if (!a) {
        i(e, lr, n);
        return;
      }
      let s = a.split($r).map(jE);
      s.indexOf(n) === -1 && i(e, lr, s.concat(n).join($r));
    }
    function zE(e, t, r) {
      if (!xe.IS_BROWSER_ENV) return;
      let n = kE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, lr);
      !a ||
        a.indexOf(n) === -1 ||
        i(
          e,
          lr,
          a
            .split($r)
            .map(jE)
            .filter((s) => s !== n)
            .join($r)
        );
    }
    function E1({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: o = {} } = r;
      Object.keys(n).forEach((i) => {
        let a = n[i],
          { config: s } = a.action,
          { actionListId: c } = s,
          f = o[c];
        f && GE({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          GE({ actionList: o[i], elementApi: t });
        });
    }
    function GE({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e;
      n &&
        n.forEach((i) => {
          UE({ actionGroup: i, event: t, elementApi: r });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((s) => {
              UE({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function UE({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach((o) => {
        let { actionTypeId: i, config: a } = o,
          s;
        (0, dt.isPluginType)(i)
          ? (s = (c) => (0, dt.clearPlugin)(i)(c, o))
          : (s = YE({ effect: _1, actionTypeId: i, elementApi: r })),
          Qa({ config: a, event: t, elementApi: r }).forEach(s);
      });
    }
    function h1(e, t, r) {
      let { setStyle: n, getStyle: o } = r,
        { actionTypeId: i } = t;
      if (i === vr) {
        let { config: a } = t;
        a.widthUnit === St && n(e, lt, ""), a.heightUnit === St && n(e, ft, "");
      }
      o(e, lr) && YE({ effect: zE, actionTypeId: i, elementApi: r })(e);
    }
    var YE =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case fr:
          case dr:
          case pr:
          case Qr:
            e(n, xe.TRANSFORM_PREFIXED, r);
            break;
          case Zr:
            e(n, zr, r);
            break;
          case Jr:
            e(n, Yr, r);
            break;
          case HE:
            e(n, li, r);
            break;
          case vr:
            e(n, lt, r), e(n, ft, r);
            break;
          case gr:
          case Er:
          case hr:
            e(n, $a[t], r);
            break;
          case pi:
            e(n, fi, r);
            break;
        }
      };
    function _1(e, t, r) {
      let { setStyle: n } = r;
      zE(e, t, r),
        n(e, t, ""),
        t === xe.TRANSFORM_PREFIXED && n(e, xe.TRANSFORM_STYLE_PREFIXED, "");
    }
    function $E(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, o) => {
          let { config: i } = n,
            a = i.delay + i.duration;
          a >= t && ((t = a), (r = o));
        }),
        r
      );
    }
    function y1(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: v } = c,
            d = v[$E(v)],
            { config: E, actionTypeId: h } = d;
          o.id === d.id && (s = a + i);
          let _ = KE(h) === za ? 0 : E.duration;
          a += E.delay + _;
        }),
        a > 0 ? (0, ID.optimizeFloat)(s / a) : 0
      );
    }
    function I1({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e,
        i = [],
        a = (s) => (
          i.push((0, LE.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        o &&
          o.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: f }) => f.some(a));
          }),
        (0, LE.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function m1(e, { basedOn: t }) {
      return (
        (e === Gt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Gt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Gt.EventTypeConsts.MOUSE_MOVE && t === Gt.EventBasedOn.ELEMENT)
      );
    }
    function T1(e, t) {
      return e + MD + t;
    }
    function O1(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function b1(e, t) {
      return (0, XE.default)(e && e.sort(), t && t.sort());
    }
    function A1(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + ja + e.objectId;
      if (e.objectId) return e.objectId;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + ja + r + ja + n;
    }
  });
  var Xt = u((Me) => {
    "use strict";
    var _r = Pt().default;
    Object.defineProperty(Me, "__esModule", { value: !0 });
    Me.IX2VanillaUtils =
      Me.IX2VanillaPlugins =
      Me.IX2ElementsReducer =
      Me.IX2Easings =
      Me.IX2EasingUtils =
      Me.IX2BrowserSupport =
        void 0;
    var S1 = _r(ri());
    Me.IX2BrowserSupport = S1;
    var w1 = _r(Ma());
    Me.IX2Easings = w1;
    var R1 = _r(Fa());
    Me.IX2EasingUtils = R1;
    var C1 = _r(nE());
    Me.IX2ElementsReducer = C1;
    var N1 = _r(Wa());
    Me.IX2VanillaPlugins = N1;
    var P1 = _r(QE());
    Me.IX2VanillaUtils = P1;
  });
  var th = u((gi) => {
    "use strict";
    Object.defineProperty(gi, "__esModule", { value: !0 });
    gi.ixInstances = void 0;
    var ZE = Fe(),
      JE = Xt(),
      yr = er(),
      {
        IX2_RAW_DATA_IMPORTED: q1,
        IX2_SESSION_STOPPED: L1,
        IX2_INSTANCE_ADDED: x1,
        IX2_INSTANCE_STARTED: M1,
        IX2_INSTANCE_REMOVED: D1,
        IX2_ANIMATION_FRAME_CHANGED: F1,
      } = ZE.IX2EngineActionTypes,
      {
        optimizeFloat: vi,
        applyEasing: eh,
        createBezierEasing: G1,
      } = JE.IX2EasingUtils,
      { RENDER_GENERAL: U1 } = ZE.IX2EngineConstants,
      {
        getItemConfigByKey: Ja,
        getRenderType: X1,
        getStyleProp: V1,
      } = JE.IX2VanillaUtils,
      W1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: v,
            skipToValue: d,
          } = e,
          { parameters: E } = t.payload,
          h = Math.max(1 - a, 0.01),
          _ = E[n];
        _ == null && ((h = 1), (_ = s));
        let y = Math.max(_, 0) || 0,
          D = vi(y - r),
          b = v ? d : vi(r + D * h),
          R = b * 100;
        if (b === r && e.current) return e;
        let T, L, q, M;
        for (let z = 0, { length: Y } = o; z < Y; z++) {
          let { keyframe: ee, actionItems: V } = o[z];
          if ((z === 0 && (T = V[0]), R >= ee)) {
            T = V[0];
            let w = o[z + 1],
              g = w && R !== ee;
            (L = g ? w.actionItems[0] : null),
              g && ((q = ee / 100), (M = (w.keyframe - ee) / 100));
          }
        }
        let X = {};
        if (T && !L)
          for (let z = 0, { length: Y } = i; z < Y; z++) {
            let ee = i[z];
            X[ee] = Ja(c, ee, T.config);
          }
        else if (T && L && q !== void 0 && M !== void 0) {
          let z = (b - q) / M,
            Y = T.config.easing,
            ee = eh(Y, z, f);
          for (let V = 0, { length: w } = i; V < w; V++) {
            let g = i[V],
              x = Ja(c, g, T.config),
              $ = (Ja(c, g, L.config) - x) * ee + x;
            X[g] = $;
          }
        }
        return (0, yr.merge)(e, { position: b, current: X });
      },
      B1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: f,
            destinationKeys: v,
            pluginDuration: d,
            instanceDelay: E,
            customEasingFn: h,
            skipMotion: _,
          } = e,
          y = c.config.easing,
          { duration: D, delay: b } = c.config;
        d != null && (D = d),
          (b = E ?? b),
          a === U1 ? (D = 0) : (i || _) && (D = b = 0);
        let { now: R } = t.payload;
        if (r && n) {
          let T = R - (o + b);
          if (s) {
            let z = R - o,
              Y = D + b,
              ee = vi(Math.min(Math.max(0, z / Y), 1));
            e = (0, yr.set)(e, "verboseTimeElapsed", Y * ee);
          }
          if (T < 0) return e;
          let L = vi(Math.min(Math.max(0, T / D), 1)),
            q = eh(y, L, h),
            M = {},
            X = null;
          return (
            v.length &&
              (X = v.reduce((z, Y) => {
                let ee = f[Y],
                  V = parseFloat(n[Y]) || 0,
                  g = (parseFloat(ee) - V) * q + V;
                return (z[Y] = g), z;
              }, {})),
            (M.current = X),
            (M.position = L),
            L === 1 && ((M.active = !1), (M.complete = !0)),
            (0, yr.merge)(e, M)
          );
        }
        return e;
      },
      H1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case q1:
            return t.payload.ixInstances || Object.freeze({});
          case L1:
            return Object.freeze({});
          case x1: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                isCarrier: v,
                origin: d,
                destination: E,
                immediate: h,
                verbose: _,
                continuous: y,
                parameterId: D,
                actionGroups: b,
                smoothing: R,
                restingValue: T,
                pluginInstance: L,
                pluginDuration: q,
                instanceDelay: M,
                skipMotion: X,
                skipToValue: z,
              } = t.payload,
              { actionTypeId: Y } = o,
              ee = X1(Y),
              V = V1(ee, Y),
              w = Object.keys(E).filter(
                (x) => E[x] != null && typeof E[x] != "string"
              ),
              { easing: g } = o.config;
            return (0, yr.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: E,
              destinationKeys: w,
              immediate: h,
              verbose: _,
              current: null,
              actionItem: o,
              actionTypeId: Y,
              eventId: i,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: f,
              renderType: ee,
              isCarrier: v,
              styleProp: V,
              continuous: y,
              parameterId: D,
              actionGroups: b,
              smoothing: R,
              restingValue: T,
              pluginInstance: L,
              pluginDuration: q,
              instanceDelay: M,
              skipMotion: X,
              skipToValue: z,
              customEasingFn:
                Array.isArray(g) && g.length === 4 ? G1(g) : void 0,
            });
          }
          case M1: {
            let { instanceId: r, time: n } = t.payload;
            return (0, yr.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case D1: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let s = o[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case F1: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                s = e[a],
                c = s.continuous ? W1 : B1;
              r = (0, yr.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    gi.ixInstances = H1;
  });
  var rh = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixParameters = void 0;
    var j1 = Fe(),
      {
        IX2_RAW_DATA_IMPORTED: k1,
        IX2_SESSION_STOPPED: K1,
        IX2_PARAMETER_CHANGED: z1,
      } = j1.IX2EngineActionTypes,
      Y1 = (e = {}, t) => {
        switch (t.type) {
          case k1:
            return t.payload.ixParameters || {};
          case K1:
            return {};
          case z1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    Ei.ixParameters = Y1;
  });
  var nh = u((hi) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", { value: !0 });
    hi.default = void 0;
    var $1 = Zo(),
      Q1 = mf(),
      Z1 = Xf(),
      J1 = Wf(),
      eF = Xt(),
      tF = th(),
      rF = rh(),
      { ixElements: nF } = eF.IX2ElementsReducer,
      iF = (0, $1.combineReducers)({
        ixData: Q1.ixData,
        ixRequest: Z1.ixRequest,
        ixSession: J1.ixSession,
        ixElements: nF,
        ixInstances: tF.ixInstances,
        ixParameters: rF.ixParameters,
      });
    hi.default = iF;
  });
  var ih = u((Rk, en) => {
    function oF(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        o,
        i;
      for (i = 0; i < n.length; i++)
        (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
      return r;
    }
    (en.exports = oF),
      (en.exports.__esModule = !0),
      (en.exports.default = en.exports);
  });
  var ah = u((Ck, oh) => {
    var aF = Tt(),
      sF = we(),
      uF = gt(),
      cF = "[object String]";
    function lF(e) {
      return typeof e == "string" || (!sF(e) && uF(e) && aF(e) == cF);
    }
    oh.exports = lF;
  });
  var uh = u((Nk, sh) => {
    var fF = Ca(),
      dF = fF("length");
    sh.exports = dF;
  });
  var lh = u((Pk, ch) => {
    var pF = "\\ud800-\\udfff",
      vF = "\\u0300-\\u036f",
      gF = "\\ufe20-\\ufe2f",
      EF = "\\u20d0-\\u20ff",
      hF = vF + gF + EF,
      _F = "\\ufe0e\\ufe0f",
      yF = "\\u200d",
      IF = RegExp("[" + yF + pF + hF + _F + "]");
    function mF(e) {
      return IF.test(e);
    }
    ch.exports = mF;
  });
  var yh = u((qk, _h) => {
    var dh = "\\ud800-\\udfff",
      TF = "\\u0300-\\u036f",
      OF = "\\ufe20-\\ufe2f",
      bF = "\\u20d0-\\u20ff",
      AF = TF + OF + bF,
      SF = "\\ufe0e\\ufe0f",
      wF = "[" + dh + "]",
      es = "[" + AF + "]",
      ts = "\\ud83c[\\udffb-\\udfff]",
      RF = "(?:" + es + "|" + ts + ")",
      ph = "[^" + dh + "]",
      vh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      gh = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      CF = "\\u200d",
      Eh = RF + "?",
      hh = "[" + SF + "]?",
      NF = "(?:" + CF + "(?:" + [ph, vh, gh].join("|") + ")" + hh + Eh + ")*",
      PF = hh + Eh + NF,
      qF = "(?:" + [ph + es + "?", es, vh, gh, wF].join("|") + ")",
      fh = RegExp(ts + "(?=" + ts + ")|" + qF + PF, "g");
    function LF(e) {
      for (var t = (fh.lastIndex = 0); fh.test(e); ) ++t;
      return t;
    }
    _h.exports = LF;
  });
  var mh = u((Lk, Ih) => {
    var xF = uh(),
      MF = lh(),
      DF = yh();
    function FF(e) {
      return MF(e) ? DF(e) : xF(e);
    }
    Ih.exports = FF;
  });
  var Oh = u((xk, Th) => {
    var GF = Kn(),
      UF = zn(),
      XF = Mt(),
      VF = ah(),
      WF = mh(),
      BF = "[object Map]",
      HF = "[object Set]";
    function jF(e) {
      if (e == null) return 0;
      if (XF(e)) return VF(e) ? WF(e) : e.length;
      var t = UF(e);
      return t == BF || t == HF ? e.size : GF(e).length;
    }
    Th.exports = jF;
  });
  var Ah = u((Mk, bh) => {
    var kF = "Expected a function";
    function KF(e) {
      if (typeof e != "function") throw new TypeError(kF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    bh.exports = KF;
  });
  var rs = u((Dk, Sh) => {
    var zF = Ot(),
      YF = (function () {
        try {
          var e = zF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Sh.exports = YF;
  });
  var ns = u((Fk, Rh) => {
    var wh = rs();
    function $F(e, t, r) {
      t == "__proto__" && wh
        ? wh(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Rh.exports = $F;
  });
  var Nh = u((Gk, Ch) => {
    var QF = ns(),
      ZF = Fn(),
      JF = Object.prototype,
      e2 = JF.hasOwnProperty;
    function t2(e, t, r) {
      var n = e[t];
      (!(e2.call(e, t) && ZF(n, r)) || (r === void 0 && !(t in e))) &&
        QF(e, t, r);
    }
    Ch.exports = t2;
  });
  var Lh = u((Uk, qh) => {
    var r2 = Nh(),
      n2 = jr(),
      i2 = Bn(),
      Ph = ct(),
      o2 = ur();
    function a2(e, t, r, n) {
      if (!Ph(e)) return e;
      t = n2(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var c = o2(t[o]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (o != a) {
          var v = s[c];
          (f = n ? n(v, c, s) : void 0),
            f === void 0 && (f = Ph(v) ? v : i2(t[o + 1]) ? [] : {});
        }
        r2(s, c, f), (s = s[c]);
      }
      return e;
    }
    qh.exports = a2;
  });
  var Mh = u((Xk, xh) => {
    var s2 = Qn(),
      u2 = Lh(),
      c2 = jr();
    function l2(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = s2(e, a);
        r(s, a) && u2(i, c2(a, e), s);
      }
      return i;
    }
    xh.exports = l2;
  });
  var Fh = u((Vk, Dh) => {
    var f2 = Vn(),
      d2 = Uo(),
      p2 = va(),
      v2 = pa(),
      g2 = Object.getOwnPropertySymbols,
      E2 = g2
        ? function (e) {
            for (var t = []; e; ) f2(t, p2(e)), (e = d2(e));
            return t;
          }
        : v2;
    Dh.exports = E2;
  });
  var Uh = u((Wk, Gh) => {
    function h2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Gh.exports = h2;
  });
  var Vh = u((Bk, Xh) => {
    var _2 = ct(),
      y2 = kn(),
      I2 = Uh(),
      m2 = Object.prototype,
      T2 = m2.hasOwnProperty;
    function O2(e) {
      if (!_2(e)) return I2(e);
      var t = y2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !T2.call(e, n))) || r.push(n);
      return r;
    }
    Xh.exports = O2;
  });
  var Bh = u((Hk, Wh) => {
    var b2 = Ea(),
      A2 = Vh(),
      S2 = Mt();
    function w2(e) {
      return S2(e) ? b2(e, !0) : A2(e);
    }
    Wh.exports = w2;
  });
  var jh = u((jk, Hh) => {
    var R2 = da(),
      C2 = Fh(),
      N2 = Bh();
    function P2(e) {
      return R2(e, N2, C2);
    }
    Hh.exports = P2;
  });
  var Kh = u((kk, kh) => {
    var q2 = Ra(),
      L2 = bt(),
      x2 = Mh(),
      M2 = jh();
    function D2(e, t) {
      if (e == null) return {};
      var r = q2(M2(e), function (n) {
        return [n];
      });
      return (
        (t = L2(t)),
        x2(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    kh.exports = D2;
  });
  var Yh = u((Kk, zh) => {
    var F2 = bt(),
      G2 = Ah(),
      U2 = Kh();
    function X2(e, t) {
      return U2(e, G2(F2(t)));
    }
    zh.exports = X2;
  });
  var Qh = u((zk, $h) => {
    var V2 = Kn(),
      W2 = zn(),
      B2 = Ur(),
      H2 = we(),
      j2 = Mt(),
      k2 = Wn(),
      K2 = kn(),
      z2 = jn(),
      Y2 = "[object Map]",
      $2 = "[object Set]",
      Q2 = Object.prototype,
      Z2 = Q2.hasOwnProperty;
    function J2(e) {
      if (e == null) return !0;
      if (
        j2(e) &&
        (H2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          k2(e) ||
          z2(e) ||
          B2(e))
      )
        return !e.length;
      var t = W2(e);
      if (t == Y2 || t == $2) return !e.size;
      if (K2(e)) return !V2(e).length;
      for (var r in e) if (Z2.call(e, r)) return !1;
      return !0;
    }
    $h.exports = J2;
  });
  var Jh = u((Yk, Zh) => {
    var eG = ns(),
      tG = Ba(),
      rG = bt();
    function nG(e, t) {
      var r = {};
      return (
        (t = rG(t, 3)),
        tG(e, function (n, o, i) {
          eG(r, o, t(n, o, i));
        }),
        r
      );
    }
    Zh.exports = nG;
  });
  var t_ = u(($k, e_) => {
    function iG(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    e_.exports = iG;
  });
  var n_ = u((Qk, r_) => {
    var oG = Jn();
    function aG(e) {
      return typeof e == "function" ? e : oG;
    }
    r_.exports = aG;
  });
  var o_ = u((Zk, i_) => {
    var sG = t_(),
      uG = Ha(),
      cG = n_(),
      lG = we();
    function fG(e, t) {
      var r = lG(e) ? sG : uG;
      return r(e, cG(t));
    }
    i_.exports = fG;
  });
  var s_ = u((Jk, a_) => {
    var dG = Qe(),
      pG = function () {
        return dG.Date.now();
      };
    a_.exports = pG;
  });
  var l_ = u((eK, c_) => {
    var vG = ct(),
      is = s_(),
      u_ = ei(),
      gG = "Expected a function",
      EG = Math.max,
      hG = Math.min;
    function _G(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        c,
        f = 0,
        v = !1,
        d = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(gG);
      (t = u_(t) || 0),
        vG(r) &&
          ((v = !!r.leading),
          (d = "maxWait" in r),
          (i = d ? EG(u_(r.maxWait) || 0, t) : i),
          (E = "trailing" in r ? !!r.trailing : E));
      function h(M) {
        var X = n,
          z = o;
        return (n = o = void 0), (f = M), (a = e.apply(z, X)), a;
      }
      function _(M) {
        return (f = M), (s = setTimeout(b, t)), v ? h(M) : a;
      }
      function y(M) {
        var X = M - c,
          z = M - f,
          Y = t - X;
        return d ? hG(Y, i - z) : Y;
      }
      function D(M) {
        var X = M - c,
          z = M - f;
        return c === void 0 || X >= t || X < 0 || (d && z >= i);
      }
      function b() {
        var M = is();
        if (D(M)) return R(M);
        s = setTimeout(b, y(M));
      }
      function R(M) {
        return (s = void 0), E && n ? h(M) : ((n = o = void 0), a);
      }
      function T() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = o = s = void 0);
      }
      function L() {
        return s === void 0 ? a : R(is());
      }
      function q() {
        var M = is(),
          X = D(M);
        if (((n = arguments), (o = this), (c = M), X)) {
          if (s === void 0) return _(c);
          if (d) return clearTimeout(s), (s = setTimeout(b, t)), h(c);
        }
        return s === void 0 && (s = setTimeout(b, t)), a;
      }
      return (q.cancel = T), (q.flush = L), q;
    }
    c_.exports = _G;
  });
  var d_ = u((tK, f_) => {
    var yG = l_(),
      IG = ct(),
      mG = "Expected a function";
    function TG(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(mG);
      return (
        IG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        yG(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    f_.exports = TG;
  });
  var _i = u((ie) => {
    "use strict";
    var OG = ze().default;
    Object.defineProperty(ie, "__esModule", { value: !0 });
    ie.viewportWidthChanged =
      ie.testFrameRendered =
      ie.stopRequested =
      ie.sessionStopped =
      ie.sessionStarted =
      ie.sessionInitialized =
      ie.rawDataImported =
      ie.previewRequested =
      ie.playbackRequested =
      ie.parameterChanged =
      ie.mediaQueriesDefined =
      ie.instanceStarted =
      ie.instanceRemoved =
      ie.instanceAdded =
      ie.eventStateChanged =
      ie.eventListenerAdded =
      ie.elementStateChanged =
      ie.clearRequested =
      ie.animationFrameChanged =
      ie.actionListPlaybackChanged =
        void 0;
    var p_ = OG(Jt()),
      v_ = Fe(),
      bG = Xt(),
      {
        IX2_RAW_DATA_IMPORTED: AG,
        IX2_SESSION_INITIALIZED: SG,
        IX2_SESSION_STARTED: wG,
        IX2_SESSION_STOPPED: RG,
        IX2_PREVIEW_REQUESTED: CG,
        IX2_PLAYBACK_REQUESTED: NG,
        IX2_STOP_REQUESTED: PG,
        IX2_CLEAR_REQUESTED: qG,
        IX2_EVENT_LISTENER_ADDED: LG,
        IX2_TEST_FRAME_RENDERED: xG,
        IX2_EVENT_STATE_CHANGED: MG,
        IX2_ANIMATION_FRAME_CHANGED: DG,
        IX2_PARAMETER_CHANGED: FG,
        IX2_INSTANCE_ADDED: GG,
        IX2_INSTANCE_STARTED: UG,
        IX2_INSTANCE_REMOVED: XG,
        IX2_ELEMENT_STATE_CHANGED: VG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: WG,
        IX2_VIEWPORT_WIDTH_CHANGED: BG,
        IX2_MEDIA_QUERIES_DEFINED: HG,
      } = v_.IX2EngineActionTypes,
      { reifyState: jG } = bG.IX2VanillaUtils,
      kG = (e) => ({ type: AG, payload: (0, p_.default)({}, jG(e)) });
    ie.rawDataImported = kG;
    var KG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: SG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    ie.sessionInitialized = KG;
    var zG = () => ({ type: wG });
    ie.sessionStarted = zG;
    var YG = () => ({ type: RG });
    ie.sessionStopped = YG;
    var $G = ({ rawData: e, defer: t }) => ({
      type: CG,
      payload: { defer: t, rawData: e },
    });
    ie.previewRequested = $G;
    var QG = ({
      actionTypeId: e = v_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: o,
      immediate: i,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: NG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: o,
        immediate: i,
        verbose: s,
        rawData: c,
      },
    });
    ie.playbackRequested = QG;
    var ZG = (e) => ({ type: PG, payload: { actionListId: e } });
    ie.stopRequested = ZG;
    var JG = () => ({ type: qG });
    ie.clearRequested = JG;
    var eU = (e, t) => ({
      type: LG,
      payload: { target: e, listenerParams: t },
    });
    ie.eventListenerAdded = eU;
    var tU = (e = 1) => ({ type: xG, payload: { step: e } });
    ie.testFrameRendered = tU;
    var rU = (e, t) => ({ type: MG, payload: { stateKey: e, newState: t } });
    ie.eventStateChanged = rU;
    var nU = (e, t) => ({ type: DG, payload: { now: e, parameters: t } });
    ie.animationFrameChanged = nU;
    var iU = (e, t) => ({ type: FG, payload: { key: e, value: t } });
    ie.parameterChanged = iU;
    var oU = (e) => ({ type: GG, payload: (0, p_.default)({}, e) });
    ie.instanceAdded = oU;
    var aU = (e, t) => ({ type: UG, payload: { instanceId: e, time: t } });
    ie.instanceStarted = aU;
    var sU = (e) => ({ type: XG, payload: { instanceId: e } });
    ie.instanceRemoved = sU;
    var uU = (e, t, r, n) => ({
      type: VG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    ie.elementStateChanged = uU;
    var cU = ({ actionListId: e, isPlaying: t }) => ({
      type: WG,
      payload: { actionListId: e, isPlaying: t },
    });
    ie.actionListPlaybackChanged = cU;
    var lU = ({ width: e, mediaQueries: t }) => ({
      type: BG,
      payload: { width: e, mediaQueries: t },
    });
    ie.viewportWidthChanged = lU;
    var fU = () => ({ type: HG });
    ie.mediaQueriesDefined = fU;
  });
  var h_ = u((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.elementContains = OU;
    Ne.getChildElements = AU;
    Ne.getClosestElement = void 0;
    Ne.getProperty = _U;
    Ne.getQuerySelector = IU;
    Ne.getRefType = RU;
    Ne.getSiblingElements = SU;
    Ne.getStyle = hU;
    Ne.getValidDocument = mU;
    Ne.isSiblingNode = bU;
    Ne.matchSelector = yU;
    Ne.queryDocument = TU;
    Ne.setStyle = EU;
    var dU = Xt(),
      pU = Fe(),
      { ELEMENT_MATCHES: os } = dU.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: g_,
        HTML_ELEMENT: vU,
        PLAIN_OBJECT: gU,
        WF_PAGE: E_,
      } = pU.IX2EngineConstants;
    function EU(e, t, r) {
      e.style[t] = r;
    }
    function hU(e, t) {
      return e.style[t];
    }
    function _U(e, t) {
      return e[t];
    }
    function yU(e) {
      return (t) => t[os](e);
    }
    function IU({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(g_) !== -1) {
          let n = e.split(g_),
            o = n[0];
          if (((r = n[1]), o !== document.documentElement.getAttribute(E_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function mU(e) {
      return e == null || e === document.documentElement.getAttribute(E_)
        ? document
        : null;
    }
    function TU(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function OU(e, t) {
      return e.contains(t);
    }
    function bU(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function AU(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: o } = e[r],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function SU(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: o } = e; n < o; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var wU = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[os] && r[os](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Ne.getClosestElement = wU;
    function RU(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? vU
          : gU
        : null;
    }
  });
  var as = u((iK, y_) => {
    var CU = ct(),
      __ = Object.create,
      NU = (function () {
        function e() {}
        return function (t) {
          if (!CU(t)) return {};
          if (__) return __(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    y_.exports = NU;
  });
  var yi = u((oK, I_) => {
    function PU() {}
    I_.exports = PU;
  });
  var mi = u((aK, m_) => {
    var qU = as(),
      LU = yi();
    function Ii(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ii.prototype = qU(LU.prototype);
    Ii.prototype.constructor = Ii;
    m_.exports = Ii;
  });
  var A_ = u((sK, b_) => {
    var T_ = Yt(),
      xU = Ur(),
      MU = we(),
      O_ = T_ ? T_.isConcatSpreadable : void 0;
    function DU(e) {
      return MU(e) || xU(e) || !!(O_ && e && e[O_]);
    }
    b_.exports = DU;
  });
  var R_ = u((uK, w_) => {
    var FU = Vn(),
      GU = A_();
    function S_(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = GU), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? S_(s, t - 1, r, n, o)
            : FU(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    w_.exports = S_;
  });
  var N_ = u((cK, C_) => {
    var UU = R_();
    function XU(e) {
      var t = e == null ? 0 : e.length;
      return t ? UU(e, 1) : [];
    }
    C_.exports = XU;
  });
  var q_ = u((lK, P_) => {
    function VU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    P_.exports = VU;
  });
  var M_ = u((fK, x_) => {
    var WU = q_(),
      L_ = Math.max;
    function BU(e, t, r) {
      return (
        (t = L_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = L_(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), WU(e, this, s);
        }
      );
    }
    x_.exports = BU;
  });
  var F_ = u((dK, D_) => {
    function HU(e) {
      return function () {
        return e;
      };
    }
    D_.exports = HU;
  });
  var X_ = u((pK, U_) => {
    var jU = F_(),
      G_ = rs(),
      kU = Jn(),
      KU = G_
        ? function (e, t) {
            return G_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: jU(t),
              writable: !0,
            });
          }
        : kU;
    U_.exports = KU;
  });
  var W_ = u((vK, V_) => {
    var zU = 800,
      YU = 16,
      $U = Date.now;
    function QU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = $U(),
          o = YU - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= zU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    V_.exports = QU;
  });
  var H_ = u((gK, B_) => {
    var ZU = X_(),
      JU = W_(),
      eX = JU(ZU);
    B_.exports = eX;
  });
  var k_ = u((EK, j_) => {
    var tX = N_(),
      rX = M_(),
      nX = H_();
    function iX(e) {
      return nX(rX(e, void 0, tX), e + "");
    }
    j_.exports = iX;
  });
  var Y_ = u((hK, z_) => {
    var K_ = ha(),
      oX = K_ && new K_();
    z_.exports = oX;
  });
  var Q_ = u((_K, $_) => {
    function aX() {}
    $_.exports = aX;
  });
  var ss = u((yK, J_) => {
    var Z_ = Y_(),
      sX = Q_(),
      uX = Z_
        ? function (e) {
            return Z_.get(e);
          }
        : sX;
    J_.exports = uX;
  });
  var ty = u((IK, ey) => {
    var cX = {};
    ey.exports = cX;
  });
  var us = u((mK, ny) => {
    var ry = ty(),
      lX = Object.prototype,
      fX = lX.hasOwnProperty;
    function dX(e) {
      for (
        var t = e.name + "", r = ry[t], n = fX.call(ry, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    ny.exports = dX;
  });
  var Oi = u((TK, iy) => {
    var pX = as(),
      vX = yi(),
      gX = 4294967295;
    function Ti(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = gX),
        (this.__views__ = []);
    }
    Ti.prototype = pX(vX.prototype);
    Ti.prototype.constructor = Ti;
    iy.exports = Ti;
  });
  var ay = u((OK, oy) => {
    function EX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    oy.exports = EX;
  });
  var uy = u((bK, sy) => {
    var hX = Oi(),
      _X = mi(),
      yX = ay();
    function IX(e) {
      if (e instanceof hX) return e.clone();
      var t = new _X(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = yX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    sy.exports = IX;
  });
  var fy = u((AK, ly) => {
    var mX = Oi(),
      cy = mi(),
      TX = yi(),
      OX = we(),
      bX = gt(),
      AX = uy(),
      SX = Object.prototype,
      wX = SX.hasOwnProperty;
    function bi(e) {
      if (bX(e) && !OX(e) && !(e instanceof mX)) {
        if (e instanceof cy) return e;
        if (wX.call(e, "__wrapped__")) return AX(e);
      }
      return new cy(e);
    }
    bi.prototype = TX.prototype;
    bi.prototype.constructor = bi;
    ly.exports = bi;
  });
  var py = u((SK, dy) => {
    var RX = Oi(),
      CX = ss(),
      NX = us(),
      PX = fy();
    function qX(e) {
      var t = NX(e),
        r = PX[t];
      if (typeof r != "function" || !(t in RX.prototype)) return !1;
      if (e === r) return !0;
      var n = CX(r);
      return !!n && e === n[0];
    }
    dy.exports = qX;
  });
  var hy = u((wK, Ey) => {
    var vy = mi(),
      LX = k_(),
      xX = ss(),
      cs = us(),
      MX = we(),
      gy = py(),
      DX = "Expected a function",
      FX = 8,
      GX = 32,
      UX = 128,
      XX = 256;
    function VX(e) {
      return LX(function (t) {
        var r = t.length,
          n = r,
          o = vy.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(DX);
          if (o && !a && cs(i) == "wrapper") var a = new vy([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = cs(i),
            c = s == "wrapper" ? xX(i) : void 0;
          c &&
          gy(c[0]) &&
          c[1] == (UX | FX | GX | XX) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[cs(c[0])].apply(a, c[3]))
            : (a = i.length == 1 && gy(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            v = f[0];
          if (a && f.length == 1 && MX(v)) return a.plant(v).value();
          for (var d = 0, E = r ? t[d].apply(this, f) : v; ++d < r; )
            E = t[d].call(this, E);
          return E;
        };
      });
    }
    Ey.exports = VX;
  });
  var yy = u((RK, _y) => {
    var WX = hy(),
      BX = WX();
    _y.exports = BX;
  });
  var my = u((CK, Iy) => {
    function HX(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Iy.exports = HX;
  });
  var Oy = u((NK, Ty) => {
    var jX = my(),
      ls = ei();
    function kX(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ls(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ls(t)), (t = t === t ? t : 0)),
        jX(ls(e), t, r)
      );
    }
    Ty.exports = kX;
  });
  var Vy = u((Ci) => {
    "use strict";
    var Ri = ze().default;
    Object.defineProperty(Ci, "__esModule", { value: !0 });
    Ci.default = void 0;
    var We = Ri(Jt()),
      KX = Ri(yy()),
      zX = Ri(Zn()),
      YX = Ri(Oy()),
      Vt = Fe(),
      fs = gs(),
      Ai = _i(),
      $X = Xt(),
      {
        MOUSE_CLICK: QX,
        MOUSE_SECOND_CLICK: ZX,
        MOUSE_DOWN: JX,
        MOUSE_UP: eV,
        MOUSE_OVER: tV,
        MOUSE_OUT: rV,
        DROPDOWN_CLOSE: nV,
        DROPDOWN_OPEN: iV,
        SLIDER_ACTIVE: oV,
        SLIDER_INACTIVE: aV,
        TAB_ACTIVE: sV,
        TAB_INACTIVE: uV,
        NAVBAR_CLOSE: cV,
        NAVBAR_OPEN: lV,
        MOUSE_MOVE: fV,
        PAGE_SCROLL_DOWN: qy,
        SCROLL_INTO_VIEW: Ly,
        SCROLL_OUT_OF_VIEW: dV,
        PAGE_SCROLL_UP: pV,
        SCROLLING_IN_VIEW: vV,
        PAGE_FINISH: xy,
        ECOMMERCE_CART_CLOSE: gV,
        ECOMMERCE_CART_OPEN: EV,
        PAGE_START: My,
        PAGE_SCROLL: hV,
      } = Vt.EventTypeConsts,
      ds = "COMPONENT_ACTIVE",
      Dy = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: by } = Vt.IX2EngineConstants,
      { getNamespacedParameterId: Ay } = $X.IX2VanillaUtils,
      Fy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      rn = Fy(({ element: e, nativeEvent: t }) => e === t.target),
      _V = Fy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      pt = (0, KX.default)([rn, _V]),
      Gy = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !IV[o.eventTypeId]) return o;
        }
        return null;
      },
      yV = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Gy(e, n);
      },
      Ue = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: s, autoStopEventId: c } = i.config,
          f = Gy(e, c);
        return (
          f &&
            (0, fs.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + by + n.split(by)[1],
              actionListId: (0, zX.default)(f, "action.config.actionListId"),
            }),
          (0, fs.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, fs.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          o
        );
      },
      Ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      nn = { handler: Ze(pt, Ue) },
      Uy = (0, We.default)({}, nn, { types: [ds, Dy].join(" ") }),
      ps = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      Sy = "mouseover mouseout",
      vs = { types: ps },
      IV = { PAGE_START: My, PAGE_FINISH: xy },
      tn = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, YX.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      mV = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      TV = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      },
      OV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = tn(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return mV(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: o - c,
        });
      },
      Xy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [ds, Dy].indexOf(n) !== -1 ? n === ds : r.isActive,
          i = (0, We.default)({}, r, { isActive: o });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      wy = (e) => (t, r) => {
        let n = { elementHovered: TV(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      bV = (e) => (t, r) => {
        let n = (0, We.default)({}, r, { elementVisible: OV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      Ry =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = tn(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
            v = f === "PX",
            d = o - i,
            E = Number((n / d).toFixed(2));
          if (r && r.percentTop === E) return r;
          let h = (v ? c : (i * (c || 0)) / 100) / d,
            _,
            y,
            D = 0;
          r &&
            ((_ = E > r.percentTop),
            (y = r.scrollingDown !== _),
            (D = y ? E : r.anchorTop));
          let b = s === qy ? E >= D + h : E <= D - h,
            R = (0, We.default)({}, r, {
              percentTop: E,
              inBounds: b,
              anchorTop: D,
              scrollingDown: _,
            });
          return (r && b && (y || R.inBounds !== r.inBounds) && e(t, R)) || R;
        },
      AV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      SV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      wV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Cy =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Si = (e = !0) =>
        (0, We.default)({}, Uy, {
          handler: Ze(
            e ? pt : rn,
            Xy((t, r) => (r.isActive ? nn.handler(t, r) : r))
          ),
        }),
      wi = (e = !0) =>
        (0, We.default)({}, Uy, {
          handler: Ze(
            e ? pt : rn,
            Xy((t, r) => (r.isActive ? r : nn.handler(t, r)))
          ),
        }),
      Ny = (0, We.default)({}, vs, {
        handler: bV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Ly) === r
            ? (Ue(e), (0, We.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Py = 0.05,
      RV = {
        [oV]: Si(),
        [aV]: wi(),
        [iV]: Si(),
        [nV]: wi(),
        [lV]: Si(!1),
        [cV]: wi(!1),
        [sV]: Si(),
        [uV]: wi(),
        [EV]: { types: "ecommerce-cart-open", handler: Ze(pt, Ue) },
        [gV]: { types: "ecommerce-cart-close", handler: Ze(pt, Ue) },
        [QX]: {
          types: "click",
          handler: Ze(
            pt,
            Cy((e, { clickCount: t }) => {
              yV(e) ? t === 1 && Ue(e) : Ue(e);
            })
          ),
        },
        [ZX]: {
          types: "click",
          handler: Ze(
            pt,
            Cy((e, { clickCount: t }) => {
              t === 2 && Ue(e);
            })
          ),
        },
        [JX]: (0, We.default)({}, nn, { types: "mousedown" }),
        [eV]: (0, We.default)({}, nn, { types: "mouseup" }),
        [tV]: {
          types: Sy,
          handler: Ze(
            pt,
            wy((e, t) => {
              t.elementHovered && Ue(e);
            })
          ),
        },
        [rV]: {
          types: Sy,
          handler: Ze(
            pt,
            wy((e, t) => {
              t.elementHovered || Ue(e);
            })
          ),
        },
        [fV]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: v = 0,
              } = r,
              {
                clientX: d = i.clientX,
                clientY: E = i.clientY,
                pageX: h = i.pageX,
                pageY: _ = i.pageY,
              } = n,
              y = s === "X_AXIS",
              D = n.type === "mouseout",
              b = v / 100,
              R = c,
              T = !1;
            switch (a) {
              case Vt.EventBasedOn.VIEWPORT: {
                b = y
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(E, window.innerHeight) / window.innerHeight;
                break;
              }
              case Vt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: L,
                  scrollTop: q,
                  scrollWidth: M,
                  scrollHeight: X,
                } = tn();
                b = y ? Math.min(L + h, M) / M : Math.min(q + _, X) / X;
                break;
              }
              case Vt.EventBasedOn.ELEMENT:
              default: {
                R = Ay(o, c);
                let L = n.type.indexOf("mouse") === 0;
                if (L && pt({ element: t, nativeEvent: n }) !== !0) break;
                let q = t.getBoundingClientRect(),
                  { left: M, top: X, width: z, height: Y } = q;
                if (!L && !AV({ left: d, top: E }, q)) break;
                (T = !0), (b = y ? (d - M) / z : (E - X) / Y);
                break;
              }
            }
            return (
              D && (b > 1 - Py || b < Py) && (b = Math.round(b)),
              (a !== Vt.EventBasedOn.ELEMENT || T || T !== i.elementHovered) &&
                ((b = f ? 1 - b : b),
                e.dispatch((0, Ai.parameterChanged)(R, b))),
              { elementHovered: T, clientX: d, clientY: E, pageX: h, pageY: _ }
            );
          },
        },
        [hV]: {
          types: ps,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = tn(),
              s = o / (i - a);
            (s = n ? 1 - s : s), e.dispatch((0, Ai.parameterChanged)(r, s));
          },
        },
        [vV]: {
          types: ps,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: f,
              } = tn(),
              {
                basedOn: v,
                selectedAxis: d,
                continuousParameterGroupId: E,
                startsEntering: h,
                startsExiting: _,
                addEndOffset: y,
                addStartOffset: D,
                addOffsetValue: b = 0,
                endOffsetValue: R = 0,
              } = r,
              T = d === "X_AXIS";
            if (v === Vt.EventBasedOn.VIEWPORT) {
              let L = T ? i / s : a / c;
              return (
                L !== o.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(E, L)),
                { scrollPercent: L }
              );
            } else {
              let L = Ay(n, E),
                q = e.getBoundingClientRect(),
                M = (D ? b : 0) / 100,
                X = (y ? R : 0) / 100;
              (M = h ? M : 1 - M), (X = _ ? X : 1 - X);
              let z = q.top + Math.min(q.height * M, f),
                ee = q.top + q.height * X - z,
                V = Math.min(f + ee, c),
                g = Math.min(Math.max(0, f - z), V) / V;
              return (
                g !== o.scrollPercent &&
                  t.dispatch((0, Ai.parameterChanged)(L, g)),
                { scrollPercent: g }
              );
            }
          },
        },
        [Ly]: Ny,
        [dV]: Ny,
        [qy]: (0, We.default)({}, vs, {
          handler: Ry((e, t) => {
            t.scrollingDown && Ue(e);
          }),
        }),
        [pV]: (0, We.default)({}, vs, {
          handler: Ry((e, t) => {
            t.scrollingDown || Ue(e);
          }),
        }),
        [xy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ze(rn, SV(Ue)),
        },
        [My]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ze(rn, wV(Ue)),
        },
      };
    Ci.default = RV;
  });
  var gs = u((Rt) => {
    "use strict";
    var et = ze().default,
      CV = Pt().default;
    Object.defineProperty(Rt, "__esModule", { value: !0 });
    Rt.observeRequests = oW;
    Rt.startActionGroup = ms;
    Rt.startEngine = xi;
    Rt.stopActionGroup = Is;
    Rt.stopAllActionGroups = $y;
    Rt.stopEngine = Mi;
    var NV = et(Jt()),
      PV = et(ih()),
      qV = et(La()),
      wt = et(Zn()),
      LV = et(Oh()),
      xV = et(Yh()),
      MV = et(Qh()),
      DV = et(Jh()),
      on = et(o_()),
      FV = et(d_()),
      Je = Fe(),
      Hy = Xt(),
      _e = _i(),
      Te = CV(h_()),
      GV = et(Vy()),
      UV = ["store", "computedStyle"],
      XV = Object.keys(Je.QuickEffectIds),
      Es = (e) => XV.includes(e),
      {
        COLON_DELIMITER: hs,
        BOUNDARY_SELECTOR: Ni,
        HTML_ELEMENT: jy,
        RENDER_GENERAL: VV,
        W_MOD_IX: Wy,
      } = Je.IX2EngineConstants,
      {
        getAffectedElements: Pi,
        getElementId: WV,
        getDestinationValues: _s,
        observeStore: Wt,
        getInstanceId: BV,
        renderHTMLElement: HV,
        clearAllStyles: ky,
        getMaxDurationItemIndex: jV,
        getComputedStyle: kV,
        getInstanceOrigin: KV,
        reduceListToGroup: zV,
        shouldNamespaceEventParameter: YV,
        getNamespacedParameterId: $V,
        shouldAllowMediaQuery: qi,
        cleanupHTMLElement: QV,
        clearObjectCache: ZV,
        stringifyTarget: JV,
        mediaQueriesEqual: eW,
        shallowEqual: tW,
      } = Hy.IX2VanillaUtils,
      {
        isPluginType: Li,
        createPluginInstance: ys,
        getPluginDuration: rW,
      } = Hy.IX2VanillaPlugins,
      By = navigator.userAgent,
      nW = By.match(/iPad/i) || By.match(/iPhone/),
      iW = 12;
    function oW(e) {
      Wt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: uW }),
        Wt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: cW,
        }),
        Wt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: lW }),
        Wt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: fW });
    }
    function aW(e) {
      Wt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Mi(e),
            ky({ store: e, elementApi: Te }),
            xi({ store: e, allowEvents: !0 }),
            Ky();
        },
      });
    }
    function sW(e, t) {
      let r = Wt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function uW({ rawData: e, defer: t }, r) {
      let n = () => {
        xi({ store: r, rawData: e, allowEvents: !0 }), Ky();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Ky() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function cW(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: v } = e;
      if (n && o && v && s) {
        let d = v.actionLists[n];
        d && (v = zV({ actionList: d, actionItemId: o, rawData: v }));
      }
      if (
        (xi({ store: t, rawData: v, allowEvents: a, testManual: c }),
        (n && r === Je.ActionTypeConsts.GENERAL_START_ACTION) || Es(r))
      ) {
        Is({ store: t, actionListId: n }),
          Yy({ store: t, actionListId: n, eventId: i });
        let d = ms({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: s,
          verbose: f,
        });
        f &&
          d &&
          t.dispatch(
            (0, _e.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function lW({ actionListId: e }, t) {
      e ? Is({ store: t, actionListId: e }) : $y({ store: t }), Mi(t);
    }
    function fW(e, t) {
      Mi(t), ky({ store: t, elementApi: Te });
    }
    function xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, _e.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, _e.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Ni),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (hW(e),
            dW(),
            e.getState().ixSession.hasDefinedMediaQueries && aW(e)),
          e.dispatch((0, _e.sessionStarted)()),
          pW(e, n));
    }
    function dW() {
      let { documentElement: e } = document;
      e.className.indexOf(Wy) === -1 && (e.className += ` ${Wy}`);
    }
    function pW(e, t) {
      let r = (n) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, _e.animationFrameChanged)(n, i)),
          t ? sW(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Mi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(vW), ZV(), e.dispatch((0, _e.sessionStopped)());
      }
    }
    function vW({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function gW({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: v } = e.getState(),
        { events: d } = f,
        E = d[n],
        { eventTypeId: h } = E,
        _ = {},
        y = {},
        D = [],
        { continuousActionGroups: b } = a,
        { id: R } = a;
      YV(h, o) && (R = $V(t, R));
      let T = v.hasBoundaryNodes && r ? Te.getClosestElement(r, Ni) : null;
      b.forEach((L) => {
        let { keyframe: q, actionItems: M } = L;
        M.forEach((X) => {
          let { actionTypeId: z } = X,
            { target: Y } = X.config;
          if (!Y) return;
          let ee = Y.boundaryMode ? T : null,
            V = JV(Y) + hs + z;
          if (((y[V] = EW(y[V], q, X)), !_[V])) {
            _[V] = !0;
            let { config: w } = X;
            Pi({
              config: w,
              event: E,
              eventTarget: r,
              elementRoot: ee,
              elementApi: Te,
            }).forEach((g) => {
              D.push({ element: g, key: V });
            });
          }
        });
      }),
        D.forEach(({ element: L, key: q }) => {
          let M = y[q],
            X = (0, wt.default)(M, "[0].actionItems[0]", {}),
            { actionTypeId: z } = X,
            Y = Li(z) ? ys(z)(L, X) : null,
            ee = _s({ element: L, actionItem: X, elementApi: Te }, Y);
          Ts({
            store: e,
            element: L,
            eventId: n,
            actionListId: i,
            actionItem: X,
            destination: ee,
            continuous: !0,
            parameterId: R,
            actionGroups: M,
            smoothing: s,
            restingValue: c,
            pluginInstance: Y,
          });
        });
    }
    function EW(e = [], t, r) {
      let n = [...e],
        o;
      return (
        n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[o].actionItems.push(r),
        n
      );
    }
    function hW(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      zy(e),
        (0, on.default)(r, (o, i) => {
          let a = GV.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          OW({ logic: a, store: e, events: o });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && yW(e);
    }
    var _W = ["resize", "orientationchange"];
    function yW(e) {
      let t = () => {
        zy(e);
      };
      _W.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, _e.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function zy(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: o } = r;
        e.dispatch((0, _e.viewportWidthChanged)({ width: n, mediaQueries: o }));
      }
    }
    var IW = (e, t) => (0, xV.default)((0, DV.default)(e, t), MV.default),
      mW = (e, t) => {
        (0, on.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + hs + i;
            t(o, n, a);
          });
        });
      },
      TW = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Pi({ config: t, elementApi: Te });
      };
    function OW({ logic: e, store: t, events: r }) {
      bW(r);
      let { types: n, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        s = IW(r, TW);
      if (!(0, LV.default)(s)) return;
      (0, on.default)(s, (d, E) => {
        let h = r[E],
          { action: _, id: y, mediaQueries: D = i.mediaQueryKeys } = h,
          { actionListId: b } = _.config;
        eW(D, i.mediaQueryKeys) || t.dispatch((0, _e.mediaQueriesDefined)()),
          _.actionTypeId === Je.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(h.config) ? h.config : [h.config]).forEach((T) => {
              let { continuousParameterGroupId: L } = T,
                q = (0, wt.default)(a, `${b}.continuousParameterGroups`, []),
                M = (0, qV.default)(q, ({ id: Y }) => Y === L),
                X = (T.smoothing || 0) / 100,
                z = (T.restingState || 0) / 100;
              M &&
                d.forEach((Y, ee) => {
                  let V = y + hs + ee;
                  gW({
                    store: t,
                    eventStateKey: V,
                    eventTarget: Y,
                    eventId: y,
                    eventConfig: T,
                    actionListId: b,
                    parameterGroup: M,
                    smoothing: X,
                    restingValue: z,
                  });
                });
            }),
          (_.actionTypeId === Je.ActionTypeConsts.GENERAL_START_ACTION ||
            Es(_.actionTypeId)) &&
            Yy({ store: t, actionListId: b, eventId: y });
      });
      let c = (d) => {
          let { ixSession: E } = t.getState();
          mW(s, (h, _, y) => {
            let D = r[_],
              b = E.eventState[y],
              { action: R, mediaQueries: T = i.mediaQueryKeys } = D;
            if (!qi(T, E.mediaQueryKey)) return;
            let L = (q = {}) => {
              let M = o(
                {
                  store: t,
                  element: h,
                  event: D,
                  eventConfig: q,
                  nativeEvent: d,
                  eventStateKey: y,
                },
                b
              );
              tW(M, b) || t.dispatch((0, _e.eventStateChanged)(y, M));
            };
            R.actionTypeId === Je.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(D.config) ? D.config : [D.config]).forEach(L)
              : L();
          });
        },
        f = (0, FV.default)(c, iW),
        v = ({ target: d = document, types: E, throttle: h }) => {
          E.split(" ")
            .filter(Boolean)
            .forEach((_) => {
              let y = h ? f : c;
              d.addEventListener(_, y),
                t.dispatch((0, _e.eventListenerAdded)(d, [_, y]));
            });
        };
      Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e);
    }
    function bW(e) {
      if (!nW) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: o, target: i } = e[n],
          a = Te.getQuerySelector(i);
        t[a] ||
          ((o === Je.EventTypeConsts.MOUSE_CLICK ||
            o === Je.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Yy({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = n,
        s = a[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, wt.default)(c, "actionItemGroups[0].actionItems", []),
          v = (0, wt.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!qi(v, o.mediaQueryKey)) return;
        f.forEach((d) => {
          var E;
          let { config: h, actionTypeId: _ } = d,
            y =
              (h == null || (E = h.target) === null || E === void 0
                ? void 0
                : E.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : h,
            D = Pi({ config: y, event: s, elementApi: Te }),
            b = Li(_);
          D.forEach((R) => {
            let T = b ? ys(_)(R, d) : null;
            Ts({
              destination: _s({ element: R, actionItem: d, elementApi: Te }, T),
              immediate: !0,
              store: e,
              element: R,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: T,
            });
          });
        });
      }
    }
    function $y({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, on.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: o } = r;
          Os(r, e),
            o &&
              e.dispatch(
                (0, _e.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Is({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Te.getClosestElement(r, Ni) : null;
      (0, on.default)(i, (c) => {
        let f = (0, wt.default)(c, "actionItem.config.target.boundaryMode"),
          v = n ? c.eventStateKey === n : !0;
        if (c.actionListId === o && c.eventId === t && v) {
          if (s && f && !Te.elementContains(s, c.element)) return;
          Os(c, e),
            c.verbose &&
              e.dispatch(
                (0, _e.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ms({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: f, ixSession: v } = e.getState(),
        { events: d } = f,
        E = d[t] || {},
        { mediaQueries: h = f.mediaQueryKeys } = E,
        _ = (0, wt.default)(f, `actionLists.${o}`, {}),
        { actionItemGroups: y, useFirstGroupAsInitialState: D } = _;
      if (!y || !y.length) return !1;
      i >= y.length && (0, wt.default)(E, "config.loop") && (i = 0),
        i === 0 && D && i++;
      let R =
          (i === 0 || (i === 1 && D)) &&
          Es((c = E.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? E.config.delay
            : void 0,
        T = (0, wt.default)(y, [i, "actionItems"], []);
      if (!T.length || !qi(h, v.mediaQueryKey)) return !1;
      let L = v.hasBoundaryNodes && r ? Te.getClosestElement(r, Ni) : null,
        q = jV(T),
        M = !1;
      return (
        T.forEach((X, z) => {
          let { config: Y, actionTypeId: ee } = X,
            V = Li(ee),
            { target: w } = Y;
          if (!w) return;
          let g = w.boundaryMode ? L : null;
          Pi({
            config: Y,
            event: E,
            eventTarget: r,
            elementRoot: g,
            elementApi: Te,
          }).forEach((P, G) => {
            let $ = V ? ys(ee)(P, X) : null,
              Z = V ? rW(ee)(P, X) : null;
            M = !0;
            let F = q === z && G === 0,
              j = kV({ element: P, actionItem: X }),
              K = _s({ element: P, actionItem: X, elementApi: Te }, $);
            Ts({
              store: e,
              element: P,
              actionItem: X,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: o,
              groupIndex: i,
              isCarrier: F,
              computedStyle: j,
              destination: K,
              immediate: a,
              verbose: s,
              pluginInstance: $,
              pluginDuration: Z,
              instanceDelay: R,
            });
          });
        }),
        M
      );
    }
    function Ts(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        o = (0, PV.default)(e, UV),
        {
          element: i,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: f,
          restingValue: v,
          eventId: d,
        } = o,
        E = !f,
        h = BV(),
        { ixElements: _, ixSession: y, ixData: D } = r.getState(),
        b = WV(_, i),
        { refState: R } = _[b] || {},
        T = Te.getRefType(i),
        L = y.reducedMotion && Je.ReducedMotionTypes[a.actionTypeId],
        q;
      if (L && f)
        switch (
          (t = D.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case Je.EventTypeConsts.MOUSE_MOVE:
          case Je.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            q = v;
            break;
          default:
            q = 0.5;
            break;
        }
      let M = KV(i, R, n, a, Te, c);
      if (
        (r.dispatch(
          (0, _e.instanceAdded)(
            (0, NV.default)(
              {
                instanceId: h,
                elementId: b,
                origin: M,
                refType: T,
                skipMotion: L,
                skipToValue: q,
              },
              o
            )
          )
        ),
        Qy(document.body, "ix2-animation-started", h),
        s)
      ) {
        AW(r, h);
        return;
      }
      Wt({ store: r, select: ({ ixInstances: X }) => X[h], onChange: Zy }),
        E && r.dispatch((0, _e.instanceStarted)(h, y.tick));
    }
    function Os(e, t) {
      Qy(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[r] || {};
      a === jy && QV(i, n, Te), t.dispatch((0, _e.instanceRemoved)(e.id));
    }
    function Qy(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function AW(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, _e.instanceStarted)(t, 0)),
        e.dispatch((0, _e.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Zy(n[t], e);
    }
    function Zy(e, t) {
      let {
          active: r,
          continuous: n,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: f,
          groupIndex: v,
          eventId: d,
          eventTarget: E,
          eventStateKey: h,
          actionListId: _,
          isCarrier: y,
          styleProp: D,
          verbose: b,
          pluginInstance: R,
        } = e,
        { ixData: T, ixSession: L } = t.getState(),
        { events: q } = T,
        M = q[d] || {},
        { mediaQueries: X = T.mediaQueryKeys } = M;
      if (qi(X, L.mediaQueryKey) && (n || r || o)) {
        if (f || (c === VV && o)) {
          t.dispatch((0, _e.elementStateChanged)(i, s, f, a));
          let { ixElements: z } = t.getState(),
            { ref: Y, refType: ee, refState: V } = z[i] || {},
            w = V && V[s];
          (ee === jy || Li(s)) && HV(Y, V, w, d, a, D, Te, c, R);
        }
        if (o) {
          if (y) {
            let z = ms({
              store: t,
              eventId: d,
              eventTarget: E,
              eventStateKey: h,
              actionListId: _,
              groupIndex: v + 1,
              verbose: b,
            });
            b &&
              !z &&
              t.dispatch(
                (0, _e.actionListPlaybackChanged)({
                  actionListId: _,
                  isPlaying: !1,
                })
              );
          }
          Os(e, t);
        }
      }
    }
  });
  var eI = u((_t) => {
    "use strict";
    var SW = Pt().default,
      wW = ze().default;
    Object.defineProperty(_t, "__esModule", { value: !0 });
    _t.actions = void 0;
    _t.destroy = Jy;
    _t.init = qW;
    _t.setEnv = PW;
    _t.store = void 0;
    Gl();
    var RW = Zo(),
      CW = wW(nh()),
      bs = gs(),
      NW = SW(_i());
    _t.actions = NW;
    var Di = (0, RW.createStore)(CW.default);
    _t.store = Di;
    function PW(e) {
      e() && (0, bs.observeRequests)(Di);
    }
    function qW(e) {
      Jy(), (0, bs.startEngine)({ store: Di, rawData: e, allowEvents: !0 });
    }
    function Jy() {
      (0, bs.stopEngine)(Di);
    }
  });
  var iI = u((xK, nI) => {
    var tI = Xe(),
      rI = eI();
    rI.setEnv(tI.env);
    tI.define(
      "ix2",
      (nI.exports = function () {
        return rI;
      })
    );
  });
  var aI = u((MK, oI) => {
    var Ir = Xe();
    Ir.define(
      "links",
      (oI.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = Ir.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          v = /\/$/,
          d,
          E;
        r.ready = r.design = r.preview = h;
        function h() {
          (o = i && Ir.env("design")),
            (E = Ir.env("slug") || a.pathname || ""),
            Ir.scroll.off(y),
            (d = []);
          for (var b = document.links, R = 0; R < b.length; ++R) _(b[R]);
          d.length && (Ir.scroll.on(y), y());
        }
        function _(b) {
          var R =
            (o && b.getAttribute("href-disabled")) || b.getAttribute("href");
          if (((s.href = R), !(R.indexOf(":") >= 0))) {
            var T = e(b);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var L = e(s.hash);
              L.length && d.push({ link: T, sec: L, active: !1 });
              return;
            }
            if (!(R === "#" || R === "")) {
              var q = s.href === a.href || R === E || (f.test(R) && v.test(E));
              D(T, c, q);
            }
          }
        }
        function y() {
          var b = n.scrollTop(),
            R = n.height();
          t.each(d, function (T) {
            var L = T.link,
              q = T.sec,
              M = q.offset().top,
              X = q.outerHeight(),
              z = R * 0.5,
              Y = q.is(":visible") && M + X - z >= b && M + z <= b + R;
            T.active !== Y && ((T.active = Y), D(L, c, Y));
          });
        }
        function D(b, R, T) {
          var L = b.hasClass(R);
          (T && L) || (!T && !L) || (T ? b.addClass(R) : b.removeClass(R));
        }
        return r;
      })
    );
  });
  var uI = u((DK, sI) => {
    var Fi = Xe();
    Fi.define(
      "scroll",
      (sI.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = _() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (w) {
              window.setTimeout(w, 15);
            },
          c = Fi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          h = document.createElement("style");
        h.appendChild(document.createTextNode(E));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var y = /^#[a-zA-Z0-9][\w:.-]*$/;
        function D(w) {
          return y.test(w.hash) && w.host + w.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function T(w, g) {
          var x;
          switch (g) {
            case "add":
              (x = w.attr("tabindex")),
                x
                  ? w.attr("data-wf-tabindex-swap", x)
                  : w.attr("tabindex", "-1");
              break;
            case "remove":
              (x = w.attr("data-wf-tabindex-swap")),
                x
                  ? (w.attr("tabindex", x),
                    w.removeAttr("data-wf-tabindex-swap"))
                  : w.removeAttr("tabindex");
              break;
          }
          w.toggleClass("wf-force-outline-none", g === "add");
        }
        function L(w) {
          var g = w.currentTarget;
          if (
            !(
              Fi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))
            )
          ) {
            var x = D(g) ? g.hash : "";
            if (x !== "") {
              var P = e(x);
              P.length &&
                (w && (w.preventDefault(), w.stopPropagation()),
                q(x, w),
                window.setTimeout(
                  function () {
                    M(P, function () {
                      T(P, "add"),
                        P.get(0).focus({ preventScroll: !0 }),
                        T(P, "remove");
                    });
                  },
                  w ? 0 : 300
                ));
            }
          }
        }
        function q(w) {
          if (
            r.hash !== w &&
            n &&
            n.pushState &&
            !(Fi.env.chrome && r.protocol === "file:")
          ) {
            var g = n.state && n.state.hash;
            g !== w && n.pushState({ hash: w }, "", w);
          }
        }
        function M(w, g) {
          var x = o.scrollTop(),
            P = X(w);
          if (x !== P) {
            var G = z(w, x, P),
              $ = Date.now(),
              Z = function () {
                var F = Date.now() - $;
                window.scroll(0, Y(x, P, F, G)),
                  F <= G ? s(Z) : typeof g == "function" && g();
              };
            s(Z);
          }
        }
        function X(w) {
          var g = e(f),
            x = g.css("position") === "fixed" ? g.outerHeight() : 0,
            P = w.offset().top - x;
          if (w.data("scroll") === "mid") {
            var G = o.height() - x,
              $ = w.outerHeight();
            $ < G && (P -= Math.round((G - $) / 2));
          }
          return P;
        }
        function z(w, g, x) {
          if (R()) return 0;
          var P = 1;
          return (
            a.add(w).each(function (G, $) {
              var Z = parseFloat($.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (P = Z);
            }),
            (472.143 * Math.log(Math.abs(g - x) + 125) - 2e3) * P
          );
        }
        function Y(w, g, x, P) {
          return x > P ? g : w + (g - w) * ee(x / P);
        }
        function ee(w) {
          return w < 0.5
            ? 4 * w * w * w
            : (w - 1) * (2 * w - 2) * (2 * w - 2) + 1;
        }
        function V() {
          var { WF_CLICK_EMPTY: w, WF_CLICK_SCROLL: g } = t;
          i.on(g, d, L),
            i.on(w, v, function (x) {
              x.preventDefault();
            }),
            document.head.insertBefore(h, document.head.firstChild);
        }
        return { ready: V };
      })
    );
  });
  var lI = u((FK, cI) => {
    var LW = Xe();
    LW.define(
      "touch",
      (cI.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            v;
          i.addEventListener("touchstart", d, !1),
            i.addEventListener("touchmove", E, !1),
            i.addEventListener("touchend", h, !1),
            i.addEventListener("touchcancel", _, !1),
            i.addEventListener("mousedown", d, !1),
            i.addEventListener("mousemove", E, !1),
            i.addEventListener("mouseup", h, !1),
            i.addEventListener("mouseout", _, !1);
          function d(D) {
            var b = D.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((s = !0), (f = b[0].clientX)) : (f = D.clientX),
              (v = f));
          }
          function E(D) {
            if (a) {
              if (s && D.type === "mousemove") {
                D.preventDefault(), D.stopPropagation();
                return;
              }
              var b = D.touches,
                R = b ? b[0].clientX : D.clientX,
                T = R - v;
              (v = R),
                Math.abs(T) > c &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", D, { direction: T > 0 ? "right" : "left" }), _());
            }
          }
          function h(D) {
            if (a && ((a = !1), s && D.type === "mouseup")) {
              D.preventDefault(), D.stopPropagation(), (s = !1);
              return;
            }
          }
          function _() {
            a = !1;
          }
          function y() {
            i.removeEventListener("touchstart", d, !1),
              i.removeEventListener("touchmove", E, !1),
              i.removeEventListener("touchend", h, !1),
              i.removeEventListener("touchcancel", _, !1),
              i.removeEventListener("mousedown", d, !1),
              i.removeEventListener("mousemove", E, !1),
              i.removeEventListener("mouseup", h, !1),
              i.removeEventListener("mouseout", _, !1),
              (i = null);
          }
          this.destroy = y;
        }
        function o(i, a, s) {
          var c = e.Event(i, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var pI = u((GK, dI) => {
    var Bt = Xe(),
      xW = pn(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      fI = !0,
      MW = /^#[a-zA-Z0-9\-_]+$/;
    Bt.define(
      "dropdown",
      (dI.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          o = Bt.env(),
          i = !1,
          a,
          s = Bt.env.touch,
          c = ".w-dropdown",
          f = "w--open",
          v = xW.triggers,
          d = 900,
          E = "focusout" + c,
          h = "keydown" + c,
          _ = "mouseenter" + c,
          y = "mousemove" + c,
          D = "mouseleave" + c,
          b = (s ? "click" : "mouseup") + c,
          R = "w-close" + c,
          T = "setting" + c,
          L = e(document),
          q;
        (n.ready = M),
          (n.design = function () {
            i && g(), (i = !1), M();
          }),
          (n.preview = function () {
            (i = !0), M();
          });
        function M() {
          (a = o && Bt.env("design")), (q = L.find(c)), q.each(X);
        }
        function X(p, B) {
          var k = e(B),
            C = e.data(B, c);
          C ||
            (C = e.data(B, c, {
              open: !1,
              el: k,
              config: {},
              selectedIdx: -1,
            })),
            (C.toggle = C.el.children(".w-dropdown-toggle")),
            (C.list = C.el.children(".w-dropdown-list")),
            (C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (C.complete = G(C)),
            (C.mouseLeave = Z(C)),
            (C.mouseUpOutside = P(C)),
            (C.mouseMoveOutside = F(C)),
            z(C);
          var ae = C.toggle.attr("id"),
            Oe = C.list.attr("id");
          ae || (ae = "w-dropdown-toggle-" + p),
            Oe || (Oe = "w-dropdown-list-" + p),
            C.toggle.attr("id", ae),
            C.toggle.attr("aria-controls", Oe),
            C.toggle.attr("aria-haspopup", "menu"),
            C.toggle.attr("aria-expanded", "false"),
            C.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            C.toggle.prop("tagName") !== "BUTTON" &&
              (C.toggle.attr("role", "button"),
              C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")),
            C.list.attr("id", Oe),
            C.list.attr("aria-labelledby", ae),
            C.links.each(function (Be, rt) {
              rt.hasAttribute("tabindex") || rt.setAttribute("tabindex", "0"),
                MW.test(rt.hash) &&
                  rt.addEventListener("click", w.bind(null, C));
            }),
            C.el.off(c),
            C.toggle.off(c),
            C.nav && C.nav.off(c);
          var ce = ee(C, fI);
          a && C.el.on(T, Y(C)),
            a ||
              (o && ((C.hovering = !1), w(C)),
              C.config.hover && C.toggle.on(_, $(C)),
              C.el.on(R, ce),
              C.el.on(h, j(C)),
              C.el.on(E, U(C)),
              C.toggle.on(b, ce),
              C.toggle.on(h, W(C)),
              (C.nav = C.el.closest(".w-nav")),
              C.nav.on(R, ce));
        }
        function z(p) {
          var B = Number(p.el.css("z-index"));
          (p.manageZ = B === d || B === d + 1),
            (p.config = {
              hover: p.el.attr("data-hover") === "true" && !s,
              delay: p.el.attr("data-delay"),
            });
        }
        function Y(p) {
          return function (B, k) {
            (k = k || {}),
              z(p),
              k.open === !0 && V(p, !0),
              k.open === !1 && w(p, { immediate: !0 });
          };
        }
        function ee(p, B) {
          return r(function (k) {
            if (p.open || (k && k.type === "w-close"))
              return w(p, { forceClose: B });
            V(p);
          });
        }
        function V(p) {
          if (!p.open) {
            x(p),
              (p.open = !0),
              p.list.addClass(f),
              p.toggle.addClass(f),
              p.toggle.attr("aria-expanded", "true"),
              v.intro(0, p.el[0]),
              Bt.redraw.up(),
              p.manageZ && p.el.css("z-index", d + 1);
            var B = Bt.env("editor");
            a || L.on(b, p.mouseUpOutside),
              p.hovering && !B && p.el.on(D, p.mouseLeave),
              p.hovering && B && L.on(y, p.mouseMoveOutside),
              window.clearTimeout(p.delayId);
          }
        }
        function w(p, { immediate: B, forceClose: k } = {}) {
          if (p.open && !(p.config.hover && p.hovering && !k)) {
            p.toggle.attr("aria-expanded", "false"), (p.open = !1);
            var C = p.config;
            if (
              (v.outro(0, p.el[0]),
              L.off(b, p.mouseUpOutside),
              L.off(y, p.mouseMoveOutside),
              p.el.off(D, p.mouseLeave),
              window.clearTimeout(p.delayId),
              !C.delay || B)
            )
              return p.complete();
            p.delayId = window.setTimeout(p.complete, C.delay);
          }
        }
        function g() {
          L.find(c).each(function (p, B) {
            e(B).triggerHandler(R);
          });
        }
        function x(p) {
          var B = p.el[0];
          q.each(function (k, C) {
            var ae = e(C);
            ae.is(B) || ae.has(B).length || ae.triggerHandler(R);
          });
        }
        function P(p) {
          return (
            p.mouseUpOutside && L.off(b, p.mouseUpOutside),
            r(function (B) {
              if (p.open) {
                var k = e(B.target);
                if (!k.closest(".w-dropdown-toggle").length) {
                  var C = e.inArray(p.el[0], k.parents(c)) === -1,
                    ae = Bt.env("editor");
                  if (C) {
                    if (ae) {
                      var Oe =
                          k.parents().length === 1 &&
                          k.parents("svg").length === 1,
                        ce = k.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (Oe || ce) return;
                    }
                    w(p);
                  }
                }
              }
            })
          );
        }
        function G(p) {
          return function () {
            p.list.removeClass(f),
              p.toggle.removeClass(f),
              p.manageZ && p.el.css("z-index", "");
          };
        }
        function $(p) {
          return function () {
            (p.hovering = !0), V(p);
          };
        }
        function Z(p) {
          return function () {
            (p.hovering = !1), p.links.is(":focus") || w(p);
          };
        }
        function F(p) {
          return r(function (B) {
            if (p.open) {
              var k = e(B.target),
                C = e.inArray(p.el[0], k.parents(c)) === -1;
              if (C) {
                var ae = k.parents(".w-editor-bem-EditorHoverControls").length,
                  Oe = k.parents(".w-editor-bem-RTToolbar").length,
                  ce = e(".w-editor-bem-EditorOverlay"),
                  Be =
                    ce.find(".w-editor-edit-outline").length ||
                    ce.find(".w-editor-bem-RTToolbar").length;
                if (ae || Oe || Be) return;
                (p.hovering = !1), w(p);
              }
            }
          });
        }
        function j(p) {
          return function (B) {
            if (!(a || !p.open))
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case tt.HOME:
                  return p.open
                    ? ((p.selectedIdx = 0), K(p), B.preventDefault())
                    : void 0;
                case tt.END:
                  return p.open
                    ? ((p.selectedIdx = p.links.length - 1),
                      K(p),
                      B.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return w(p), p.toggle.focus(), B.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    K(p),
                    B.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    K(p),
                    B.preventDefault()
                  );
              }
          };
        }
        function K(p) {
          p.links[p.selectedIdx] && p.links[p.selectedIdx].focus();
        }
        function W(p) {
          var B = ee(p, fI);
          return function (k) {
            if (!a) {
              if (!p.open)
                switch (k.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return k.stopPropagation();
                }
              switch (k.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return B(), k.stopPropagation(), k.preventDefault();
              }
            }
          };
        }
        function U(p) {
          return r(function (B) {
            var { relatedTarget: k, target: C } = B,
              ae = p.el[0],
              Oe = ae.contains(k) || ae.contains(C);
            return Oe || w(p), B.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var vI = u((As) => {
    "use strict";
    Object.defineProperty(As, "__esModule", { value: !0 });
    As.default = DW;
    function DW(e, t, r, n, o, i, a, s, c, f, v, d, E) {
      return function (h) {
        e(h);
        var _ = h.form,
          y = {
            name: _.attr("data-name") || _.attr("name") || "Untitled Form",
            pageId: _.attr("data-wf-page-id") || "",
            elementId: _.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              _.html()
            ),
            trackingCookies: n(),
          };
        let D = _.attr("data-wf-flow");
        D && (y.wfFlow = D), o(h);
        var b = i(_, y.fields);
        if (b) return a(b);
        if (((y.fileUploads = s(_)), c(h), !f)) {
          v(h);
          return;
        }
        d.ajax({
          url: E,
          type: "POST",
          data: y,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (h.success = !0), v(h);
          })
          .fail(function () {
            v(h);
          });
      };
    }
  });
  var EI = u((XK, gI) => {
    var Gi = Xe();
    Gi.define(
      "forms",
      (gI.exports = function (e, t) {
        var r = {},
          n = e(document),
          o,
          i = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          f = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          d = window.alert,
          E = Gi.env(),
          h,
          _,
          y,
          D = /list-manage[1-9]?.com/i,
          b = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              R(), !E && !h && L();
            };
        function R() {
          (c = e("html").attr("data-wf-site")),
            (_ = "https://webflow.com/api/v1/form/" + c),
            a &&
              _.indexOf("https://webflow.com") >= 0 &&
              (_ = _.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (y = `${_}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(T);
        }
        function T(F, j) {
          var K = e(j),
            W = e.data(j, s);
          W || (W = e.data(j, s, { form: K })), q(W);
          var U = K.closest("div.w-form");
          (W.done = U.find("> .w-form-done")),
            (W.fail = U.find("> .w-form-fail")),
            (W.fileUploads = U.find(".w-file-upload")),
            W.fileUploads.each(function (k) {
              G(k, W);
            });
          var p =
            W.form.attr("aria-label") || W.form.attr("data-name") || "Form";
          W.done.attr("aria-label") || W.form.attr("aria-label", p),
            W.done.attr("tabindex", "-1"),
            W.done.attr("role", "region"),
            W.done.attr("aria-label") ||
              W.done.attr("aria-label", p + " success"),
            W.fail.attr("tabindex", "-1"),
            W.fail.attr("role", "region"),
            W.fail.attr("aria-label") ||
              W.fail.attr("aria-label", p + " failure");
          var B = (W.action = K.attr("action"));
          if (
            ((W.handler = null),
            (W.redirect = K.attr("data-redirect")),
            D.test(B))
          ) {
            W.handler = g;
            return;
          }
          if (!B) {
            if (c) {
              W.handler = (() => {
                let k = vI().default;
                return k(q, i, Gi, ee, P, X, d, z, M, c, x, e, _);
              })();
              return;
            }
            b();
          }
        }
        function L() {
          (h = !0),
            n.on("submit", s + " form", function (k) {
              var C = e.data(this, s);
              C.handler && ((C.evt = k), C.handler(C));
            });
          let F = ".w-checkbox-input",
            j = ".w-radio-input",
            K = "w--redirected-checked",
            W = "w--redirected-focus",
            U = "w--redirected-focus-visible",
            p = ":focus-visible, [data-wf-focus-visible]",
            B = [
              ["checkbox", F],
              ["radio", j],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + F + ")",
            (k) => {
              e(k.target).siblings(F).toggleClass(K);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (k) => {
              e(`input[name="${k.target.name}"]:not(${F})`).map((ae, Oe) =>
                e(Oe).siblings(j).removeClass(K)
              );
              let C = e(k.target);
              C.hasClass("w-radio-input") || C.siblings(j).addClass(K);
            }),
            B.forEach(([k, C]) => {
              n.on(
                "focus",
                s + ` form input[type="${k}"]:not(` + C + ")",
                (ae) => {
                  e(ae.target).siblings(C).addClass(W),
                    e(ae.target).filter(p).siblings(C).addClass(U);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${k}"]:not(` + C + ")",
                  (ae) => {
                    e(ae.target).siblings(C).removeClass(`${W} ${U}`);
                  }
                );
            });
        }
        function q(F) {
          var j = (F.btn = F.form.find(':input[type="submit"]'));
          (F.wait = F.btn.attr("data-wait") || null),
            (F.success = !1),
            j.prop("disabled", !1),
            F.label && j.val(F.label);
        }
        function M(F) {
          var j = F.btn,
            K = F.wait;
          j.prop("disabled", !0), K && ((F.label = j.val()), j.val(K));
        }
        function X(F, j) {
          var K = null;
          return (
            (j = j || {}),
            F.find(':input:not([type="submit"]):not([type="file"])').each(
              function (W, U) {
                var p = e(U),
                  B = p.attr("type"),
                  k =
                    p.attr("data-name") || p.attr("name") || "Field " + (W + 1),
                  C = p.val();
                if (B === "checkbox") C = p.is(":checked");
                else if (B === "radio") {
                  if (j[k] === null || typeof j[k] == "string") return;
                  C =
                    F.find(
                      'input[name="' + p.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof C == "string" && (C = e.trim(C)),
                  (j[k] = C),
                  (K = K || V(p, B, k, C));
              }
            ),
            K
          );
        }
        function z(F) {
          var j = {};
          return (
            F.find(':input[type="file"]').each(function (K, W) {
              var U = e(W),
                p = U.attr("data-name") || U.attr("name") || "File " + (K + 1),
                B = U.attr("data-value");
              typeof B == "string" && (B = e.trim(B)), (j[p] = B);
            }),
            j
          );
        }
        let Y = { _mkto_trk: "marketo" };
        function ee() {
          return document.cookie.split("; ").reduce(function (j, K) {
            let W = K.split("="),
              U = W[0];
            if (U in Y) {
              let p = Y[U],
                B = W.slice(1).join("=");
              j[p] = B;
            }
            return j;
          }, {});
        }
        function V(F, j, K, W) {
          var U = null;
          return (
            j === "password"
              ? (U = "Passwords cannot be submitted.")
              : F.attr("required")
              ? W
                ? f.test(F.attr("type")) &&
                  (v.test(W) ||
                    (U = "Please enter a valid email address for: " + K))
                : (U = "Please fill out the required field: " + K)
              : K === "g-recaptcha-response" &&
                !W &&
                (U = "Please confirm you\u2019re not a robot."),
            U
          );
        }
        function w(F) {
          P(F), x(F);
        }
        function g(F) {
          q(F);
          var j = F.form,
            K = {};
          if (/^https/.test(i.href) && !/^https/.test(F.action)) {
            j.attr("method", "post");
            return;
          }
          P(F);
          var W = X(j, K);
          if (W) return d(W);
          M(F);
          var U;
          t.each(K, function (C, ae) {
            f.test(ae) && (K.EMAIL = C),
              /^((full[ _-]?)?name)$/i.test(ae) && (U = C),
              /^(first[ _-]?name)$/i.test(ae) && (K.FNAME = C),
              /^(last[ _-]?name)$/i.test(ae) && (K.LNAME = C);
          }),
            U &&
              !K.FNAME &&
              ((U = U.split(" ")),
              (K.FNAME = U[0]),
              (K.LNAME = K.LNAME || U[1]));
          var p = F.action.replace("/post?", "/post-json?") + "&c=?",
            B = p.indexOf("u=") + 2;
          B = p.substring(B, p.indexOf("&", B));
          var k = p.indexOf("id=") + 3;
          (k = p.substring(k, p.indexOf("&", k))),
            (K["b_" + B + "_" + k] = ""),
            e
              .ajax({ url: p, data: K, dataType: "jsonp" })
              .done(function (C) {
                (F.success = C.result === "success" || /already/.test(C.msg)),
                  F.success || console.info("MailChimp error: " + C.msg),
                  x(F);
              })
              .fail(function () {
                x(F);
              });
        }
        function x(F) {
          var j = F.form,
            K = F.redirect,
            W = F.success;
          if (W && K) {
            Gi.location(K);
            return;
          }
          F.done.toggle(W),
            F.fail.toggle(!W),
            W ? F.done.focus() : F.fail.focus(),
            j.toggle(!W),
            q(F);
        }
        function P(F) {
          F.evt && F.evt.preventDefault(), (F.evt = null);
        }
        function G(F, j) {
          if (!j.fileUploads || !j.fileUploads[F]) return;
          var K,
            W = e(j.fileUploads[F]),
            U = W.find("> .w-file-upload-default"),
            p = W.find("> .w-file-upload-uploading"),
            B = W.find("> .w-file-upload-success"),
            k = W.find("> .w-file-upload-error"),
            C = U.find(".w-file-upload-input"),
            ae = U.find(".w-file-upload-label"),
            Oe = ae.children(),
            ce = k.find(".w-file-upload-error-msg"),
            Be = B.find(".w-file-upload-file"),
            rt = B.find(".w-file-remove-link"),
            mr = Be.find(".w-file-upload-file-name"),
            Tr = ce.attr("data-w-size-error"),
            nt = ce.attr("data-w-type-error"),
            Ui = ce.attr("data-w-generic-error");
          if (
            (E ||
              ae.on("click keydown", function (m) {
                (m.type === "keydown" && m.which !== 13 && m.which !== 32) ||
                  (m.preventDefault(), C.click());
              }),
            ae.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            rt.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            C.on("click", function (m) {
              m.preventDefault();
            }),
              ae.on("click", function (m) {
                m.preventDefault();
              }),
              Oe.on("click", function (m) {
                m.preventDefault();
              });
          else {
            rt.on("click keydown", function (m) {
              if (m.type === "keydown") {
                if (m.which !== 13 && m.which !== 32) return;
                m.preventDefault();
              }
              C.removeAttr("data-value"),
                C.val(""),
                mr.html(""),
                U.toggle(!0),
                B.toggle(!1),
                ae.focus();
            }),
              C.on("change", function (m) {
                (K = m.target && m.target.files && m.target.files[0]),
                  K &&
                    (U.toggle(!1),
                    k.toggle(!1),
                    p.toggle(!0),
                    p.focus(),
                    mr.text(K.name),
                    A() || M(j),
                    (j.fileUploads[F].uploading = !0),
                    $(K, I));
              });
            var an = ae.outerHeight();
            C.height(an), C.width(1);
          }
          function l(m) {
            var S = m.responseJSON && m.responseJSON.msg,
              Q = Ui;
            typeof S == "string" && S.indexOf("InvalidFileTypeError") === 0
              ? (Q = nt)
              : typeof S == "string" &&
                S.indexOf("MaxFileSizeError") === 0 &&
                (Q = Tr),
              ce.text(Q),
              C.removeAttr("data-value"),
              C.val(""),
              p.toggle(!1),
              U.toggle(!0),
              k.toggle(!0),
              k.focus(),
              (j.fileUploads[F].uploading = !1),
              A() || q(j);
          }
          function I(m, S) {
            if (m) return l(m);
            var Q = S.fileName,
              te = S.postData,
              pe = S.fileId,
              H = S.s3Url;
            C.attr("data-value", pe), Z(H, te, K, Q, O);
          }
          function O(m) {
            if (m) return l(m);
            p.toggle(!1),
              B.css("display", "inline-block"),
              B.focus(),
              (j.fileUploads[F].uploading = !1),
              A() || q(j);
          }
          function A() {
            var m = (j.fileUploads && j.fileUploads.toArray()) || [];
            return m.some(function (S) {
              return S.uploading;
            });
          }
        }
        function $(F, j) {
          var K = new URLSearchParams({ name: F.name, size: F.size });
          e.ajax({ type: "GET", url: `${y}?${K}`, crossDomain: !0 })
            .done(function (W) {
              j(null, W);
            })
            .fail(function (W) {
              j(W);
            });
        }
        function Z(F, j, K, W, U) {
          var p = new FormData();
          for (var B in j) p.append(B, j[B]);
          p.append("file", K, W),
            e
              .ajax({
                type: "POST",
                url: F,
                data: p,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                U(null);
              })
              .fail(function (k) {
                U(k);
              });
        }
        return r;
      })
    );
  });
  var _I = u((VK, hI) => {
    var Ct = Xe(),
      FW = pn();
    Ct.define(
      "tabs",
      (hI.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          o,
          i,
          a = Ct.env,
          s = a.safari,
          c = a(),
          f = "data-w-tab",
          v = "data-w-pane",
          d = ".w-tabs",
          E = "w--current",
          h = "w--tab-active",
          _ = FW.triggers,
          y = !1;
        (t.ready = t.design = t.preview = D),
          (t.redraw = function () {
            (y = !0), D(), (y = !1);
          }),
          (t.destroy = function () {
            (o = n.find(d)), o.length && (o.each(T), b());
          });
        function D() {
          (i = c && Ct.env("design")),
            (o = n.find(d)),
            o.length &&
              (o.each(L), Ct.env("preview") && !y && o.each(T), b(), R());
        }
        function b() {
          Ct.redraw.off(t.redraw);
        }
        function R() {
          Ct.redraw.on(t.redraw);
        }
        function T(V, w) {
          var g = e.data(w, d);
          g &&
            (g.links && g.links.each(_.reset),
            g.panes && g.panes.each(_.reset));
        }
        function L(V, w) {
          var g = d.substr(1) + "-" + V,
            x = e(w),
            P = e.data(w, d);
          if (
            (P || (P = e.data(w, d, { el: x, config: {} })),
            (P.current = null),
            (P.tabIdentifier = g + "-" + f),
            (P.paneIdentifier = g + "-" + v),
            (P.menu = x.children(".w-tab-menu")),
            (P.links = P.menu.children(".w-tab-link")),
            (P.content = x.children(".w-tab-content")),
            (P.panes = P.content.children(".w-tab-pane")),
            P.el.off(d),
            P.links.off(d),
            P.menu.attr("role", "tablist"),
            P.links.attr("tabindex", "-1"),
            q(P),
            !i)
          ) {
            P.links.on("click" + d, X(P)), P.links.on("keydown" + d, z(P));
            var G = P.links.filter("." + E),
              $ = G.attr(f);
            $ && Y(P, { tab: $, immediate: !0 });
          }
        }
        function q(V) {
          var w = {};
          w.easing = V.el.attr("data-easing") || "ease";
          var g = parseInt(V.el.attr("data-duration-in"), 10);
          g = w.intro = g === g ? g : 0;
          var x = parseInt(V.el.attr("data-duration-out"), 10);
          (x = w.outro = x === x ? x : 0),
            (w.immediate = !g && !x),
            (V.config = w);
        }
        function M(V) {
          var w = V.current;
          return Array.prototype.findIndex.call(
            V.links,
            (g) => g.getAttribute(f) === w,
            null
          );
        }
        function X(V) {
          return function (w) {
            w.preventDefault();
            var g = w.currentTarget.getAttribute(f);
            g && Y(V, { tab: g });
          };
        }
        function z(V) {
          return function (w) {
            var g = M(V),
              x = w.key,
              P = {
                ArrowLeft: g - 1,
                ArrowUp: g - 1,
                ArrowRight: g + 1,
                ArrowDown: g + 1,
                End: V.links.length - 1,
                Home: 0,
              };
            if (x in P) {
              w.preventDefault();
              var G = P[x];
              G === -1 && (G = V.links.length - 1),
                G === V.links.length && (G = 0);
              var $ = V.links[G],
                Z = $.getAttribute(f);
              Z && Y(V, { tab: Z });
            }
          };
        }
        function Y(V, w) {
          w = w || {};
          var g = V.config,
            x = g.easing,
            P = w.tab;
          if (P !== V.current) {
            V.current = P;
            var G;
            V.links.each(function (U, p) {
              var B = e(p);
              if (w.immediate || g.immediate) {
                var k = V.panes[U];
                p.id || (p.id = V.tabIdentifier + "-" + U),
                  k.id || (k.id = V.paneIdentifier + "-" + U),
                  (p.href = "#" + k.id),
                  p.setAttribute("role", "tab"),
                  p.setAttribute("aria-controls", k.id),
                  p.setAttribute("aria-selected", "false"),
                  k.setAttribute("role", "tabpanel"),
                  k.setAttribute("aria-labelledby", p.id);
              }
              p.getAttribute(f) === P
                ? ((G = p),
                  B.addClass(E)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(_.intro))
                : B.hasClass(E) &&
                  B.removeClass(E)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(_.outro);
            });
            var $ = [],
              Z = [];
            V.panes.each(function (U, p) {
              var B = e(p);
              p.getAttribute(f) === P ? $.push(p) : B.hasClass(h) && Z.push(p);
            });
            var F = e($),
              j = e(Z);
            if (w.immediate || g.immediate) {
              F.addClass(h).each(_.intro),
                j.removeClass(h),
                y || Ct.redraw.up();
              return;
            } else {
              var K = window.scrollX,
                W = window.scrollY;
              G.focus(), window.scrollTo(K, W);
            }
            j.length && g.outro
              ? (j.each(_.outro),
                r(j)
                  .add("opacity " + g.outro + "ms " + x, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => ee(g, j, F)))
              : ee(g, j, F);
          }
        }
        function ee(V, w, g) {
          if (
            (w
              .removeClass(h)
              .css({
                opacity: "",
                transition: "",
                transform: "",
                width: "",
                height: "",
              }),
            g.addClass(h).each(_.intro),
            Ct.redraw.up(),
            !V.intro)
          )
            return r(g).set({ opacity: 1 });
          r(g)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + V.intro + "ms " + V.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Gs();
  Xs();
  Ws();
  js();
  pn();
  iI();
  aI();
  uI();
  lI();
  pI();
  EI();
  _I();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|0bb04071-39bb-67a3-7126-c106f837130b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|0bb04071-39bb-67a3-7126-c106f837130b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 6,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686219984914,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|efcae4d3-b786-3ad5-4305-4863e6b3b4f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|efcae4d3-b786-3ad5-4305-4863e6b3b4f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 51,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1686221726707,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|efcae4d3-b786-3ad5-4305-4863e6b3b4f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|efcae4d3-b786-3ad5-4305-4863e6b3b4f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686221726707,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|efcae4d3-b786-3ad5-4305-4863e6b3b4f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|efcae4d3-b786-3ad5-4305-4863e6b3b4f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686221726707,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|d3d2ecee-3a8b-37d5-6889-d1112b48e2bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|d3d2ecee-3a8b-37d5-6889-d1112b48e2bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686221743206,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|d3d2ecee-3a8b-37d5-6889-d1112b48e2bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|d3d2ecee-3a8b-37d5-6889-d1112b48e2bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 51,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1686221743206,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|d3d2ecee-3a8b-37d5-6889-d1112b48e2bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|d3d2ecee-3a8b-37d5-6889-d1112b48e2bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686221743206,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|f1f3ebe3-ca06-aeff-e8a6-d673592ae5fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|f1f3ebe3-ca06-aeff-e8a6-d673592ae5fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686221757239,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|f1f3ebe3-ca06-aeff-e8a6-d673592ae5fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|f1f3ebe3-ca06-aeff-e8a6-d673592ae5fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 51,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1686221757239,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|f1f3ebe3-ca06-aeff-e8a6-d673592ae5fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|f1f3ebe3-ca06-aeff-e8a6-d673592ae5fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686221757239,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-4", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|37536cfe-4163-575a-b56e-5d34abbc7967",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|37536cfe-4163-575a-b56e-5d34abbc7967",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-4-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 100,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686222688255,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-227",
        },
      },
      mediaQueries: ["main", "medium", "tiny"],
      target: {
        selector: ".o_tab-button",
        originalId:
          "64c803678593ada1d6478aad|ec3be0bb-ce18-30a8-a79d-2ef9238cdcac",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".o_tab-button",
          originalId:
            "64c803678593ada1d6478aad|ec3be0bb-ce18-30a8-a79d-2ef9238cdcac",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686232790851,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".o_tab-button",
        originalId:
          "64c803678593ada1d6478aad|ec3be0bb-ce18-30a8-a79d-2ef9238cdcac",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".o_tab-button",
          originalId:
            "64c803678593ada1d6478aad|ec3be0bb-ce18-30a8-a79d-2ef9238cdcac",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686237314651,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".div-block-66",
        originalId:
          "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".div-block-66",
          originalId:
            "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686585639123,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".div-block-66",
        originalId:
          "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".div-block-66",
          originalId:
            "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686585639124,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".plus-button",
        originalId:
          "64c803678593ada1d6478ab6|daf3814c-d4f3-5c23-a5c9-d34fd3d69194",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".plus-button",
          originalId:
            "64c803678593ada1d6478ab6|daf3814c-d4f3-5c23-a5c9-d34fd3d69194",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686588748439,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".plus-button",
        originalId:
          "64c803678593ada1d6478ab6|daf3814c-d4f3-5c23-a5c9-d34fd3d69194",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".plus-button",
          originalId:
            "64c803678593ada1d6478ab6|daf3814c-d4f3-5c23-a5c9-d34fd3d69194",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686588748440,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fs-dropdown-1",
        originalId:
          "64c803678593ada1d6478ab6|85b43ed2-9a94-6a86-ca0a-ea47e3d2276d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fs-dropdown-1",
          originalId:
            "64c803678593ada1d6478ab6|85b43ed2-9a94-6a86-ca0a-ea47e3d2276d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1638823214921,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fs-dropdown-1",
        originalId:
          "64c803678593ada1d6478ab6|85b43ed2-9a94-6a86-ca0a-ea47e3d2276d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fs-dropdown-1",
          originalId:
            "64c803678593ada1d6478ab6|85b43ed2-9a94-6a86-ca0a-ea47e3d2276d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1638823214922,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-53" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq-item",
        originalId:
          "64c803678593ada1d6478ab6|83c6fa43-2ec2-a560-93db-ac2b66037c78",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq-item",
          originalId:
            "64c803678593ada1d6478ab6|83c6fa43-2ec2-a560-93db-ac2b66037c78",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1684410331330,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".title-and-arrow",
        originalId:
          "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".title-and-arrow",
          originalId:
            "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563047942088,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".title-and-arrow",
        originalId:
          "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".title-and-arrow",
          originalId:
            "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563047942089,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-57" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tf-faq-item",
        originalId:
          "64c803678593ada1d6478ab6|83c6fa43-2ec2-a560-93db-ac2b66037c78",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tf-faq-item",
          originalId:
            "64c803678593ada1d6478ab6|83c6fa43-2ec2-a560-93db-ac2b66037c78",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1684410331330,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tf-title-arrow",
        originalId:
          "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tf-title-arrow",
          originalId:
            "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563047942088,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tf-title-arrow",
        originalId:
          "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tf-title-arrow",
          originalId:
            "5d8a3de733b3d43789cc777c|4b0e1a5e-8203-ee28-9ae6-1af6f238b33f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1563047942089,
    },
    "e-60": {
      id: "e-60",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".the-tab-button",
        originalId:
          "64c803678593ada1d6478aad|6f77867f-cdbc-0d71-4b8b-4a2e4a49fb18",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".the-tab-button",
          originalId:
            "64c803678593ada1d6478aad|6f77867f-cdbc-0d71-4b8b-4a2e4a49fb18",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1582253271996,
    },
    "e-61": {
      id: "e-61",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".the-tab-button",
        originalId:
          "64c803678593ada1d6478aad|6f77867f-cdbc-0d71-4b8b-4a2e4a49fb18",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".the-tab-button",
          originalId:
            "64c803678593ada1d6478aad|6f77867f-cdbc-0d71-4b8b-4a2e4a49fb18",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1582253271997,
    },
    "e-62": {
      id: "e-62",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|c7a5c16d-6d39-21bf-db96-f8091371a8f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|c7a5c16d-6d39-21bf-db96-f8091371a8f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1570756208102,
    },
    "e-63": {
      id: "e-63",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|c7a5c16d-6d39-21bf-db96-f8091371a8f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|c7a5c16d-6d39-21bf-db96-f8091371a8f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1570756208104,
    },
    "e-64": {
      id: "e-64",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tab-button",
        originalId:
          "64c803678593ada1d6478aad|ef2d6201-55c6-a872-4d8a-4ecb6b2e8caa",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-button",
          originalId:
            "64c803678593ada1d6478aad|ef2d6201-55c6-a872-4d8a-4ecb6b2e8caa",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1582253271996,
    },
    "e-65": {
      id: "e-65",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".tab-button",
        originalId:
          "64c803678593ada1d6478aad|ef2d6201-55c6-a872-4d8a-4ecb6b2e8caa",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".tab-button",
          originalId:
            "64c803678593ada1d6478aad|ef2d6201-55c6-a872-4d8a-4ecb6b2e8caa",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1582253271997,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-nav-element",
        originalId:
          "64c803678593ada1d6478ab4|19a66462-a336-4f3b-b0d6-f9f149285d38",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-nav-element",
          originalId:
            "64c803678593ada1d6478ab4|19a66462-a336-4f3b-b0d6-f9f149285d38",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687278149627,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-nav-element",
        originalId:
          "64c803678593ada1d6478ab4|19a66462-a336-4f3b-b0d6-f9f149285d38",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-nav-element",
          originalId:
            "64c803678593ada1d6478ab4|19a66462-a336-4f3b-b0d6-f9f149285d38",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687278149627,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-37", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|04e4f439-6163-1aa3-b81d-03372a308222",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|04e4f439-6163-1aa3-b81d-03372a308222",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-37-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1687440972743,
    },
    "e-69": {
      id: "e-69",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbcfa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbcfa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1593505649831,
    },
    "e-70": {
      id: "e-70",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbcf9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbcf9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 33,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 33,
          restingState: 50,
        },
      ],
      createdOn: 1593464028931,
    },
    "e-71": {
      id: "e-71",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1593118668130,
    },
    "e-72": {
      id: "e-72",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "58d45ab1-aa06-db19-0de5-3e7dbc1a433d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "58d45ab1-aa06-db19-0de5-3e7dbc1a433d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1592817318275,
    },
    "e-73": {
      id: "e-73",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1593118358457,
    },
    "e-74": {
      id: "e-74",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1593118668130,
    },
    "e-76": {
      id: "e-76",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbd01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1593118358458,
    },
    "e-77": {
      id: "e-77",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "58d45ab1-aa06-db19-0de5-3e7dbc1a433d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "58d45ab1-aa06-db19-0de5-3e7dbc1a433d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1592817318295,
    },
    "e-79": {
      id: "e-79",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbcfa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|db1f5672-e792-5077-9947-b1958c4dbcfa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1593505649831,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|c4ebce54-1d14-9359-c5ce-b9cf77a89e7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|c4ebce54-1d14-9359-c5ce-b9cf77a89e7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687621792245,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|c4ebce54-1d14-9359-c5ce-b9cf77a89e7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|c4ebce54-1d14-9359-c5ce-b9cf77a89e7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687621792245,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40267",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40267",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
      ],
      createdOn: 1687688559408,
    },
    "e-150": {
      id: "e-150",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40268",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40268",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40268",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40268",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b4026b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b4026b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b4026b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b4026b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-156": {
      id: "e-156",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-157",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40271",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40271",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40271",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40271",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-158": {
      id: "e-158",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-159",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40274",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40274",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40274",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|bd56edb0-f023-8a95-370d-ca6228b40274",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688559408,
    },
    "e-160": {
      id: "e-160",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
      ],
      createdOn: 1687688600322,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-162",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-162": {
      id: "e-162",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-161",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-163",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e157972f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579735",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579735",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579735",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579735",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579738",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579738",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579738",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab6|6c996836-817f-6d1f-a294-ab25e1579738",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688600322,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
      ],
      createdOn: 1687688629246,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-178": {
      id: "e-178",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|254c5156-4298-9907-2572-6dcc05df75e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688629246,
    },
    "e-182": {
      id: "e-182",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc053",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc053",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
      ],
      createdOn: 1687688643566,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-184",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc054",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc054",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-184": {
      id: "e-184",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-183",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc054",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc054",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-186",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc057",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc057",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-186": {
      id: "e-186",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-185",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc057",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc057",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-190",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc05d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc05d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-190": {
      id: "e-190",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-189",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc05d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc05d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-192",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc060",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc060",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-192": {
      id: "e-192",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-191",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc060",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|77db096f-329f-9fd8-d1d6-81b98cabc060",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688643566,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf02f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf02f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
      ],
      createdOn: 1687688660965,
    },
    "e-194": {
      id: "e-194",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-195",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf030",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf030",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf030",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf030",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-196": {
      id: "e-196",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-197",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf033",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf033",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-196",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf033",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf033",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-198": {
      id: "e-198",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-199",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf036",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf036",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-198",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf036",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf036",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-200": {
      id: "e-200",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-201",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf039",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf039",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-200",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf039",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf039",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-202": {
      id: "e-202",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-203",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf03c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf03c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf03c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab3|94205c99-a3ff-8cf9-0f93-aa429fabf03c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688660965,
    },
    "e-204": {
      id: "e-204",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e419",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e419",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
      ],
      createdOn: 1687688698494,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-206",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-206": {
      id: "e-206",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-205",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-208": {
      id: "e-208",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-207",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e41d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-212",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e423",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e423",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-212": {
      id: "e-212",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-211",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e423",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e423",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-214",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e426",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e426",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-214": {
      id: "e-214",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-213",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e426",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab1|8526c8e1-02b6-5bf7-060b-e1a762a4e426",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688698494,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 92,
          restingState: 50,
        },
      ],
      createdOn: 1687688715833,
    },
    "e-216": {
      id: "e-216",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-217",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-218": {
      id: "e-218",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-219",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af161e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-220": {
      id: "e-220",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-221",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1621",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1621",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1621",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1621",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-222": {
      id: "e-222",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-223",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-222",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-224": {
      id: "e-224",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-225",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1627",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1627",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-224",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1627",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aac|43afd947-a74f-d640-d534-524c39af1627",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687688715833,
    },
    "e-230": {
      id: "e-230",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-49",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-231",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687719283447,
    },
    "e-232": {
      id: "e-232",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-233",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|a885ebd8-37dd-1de0-c2fd-3b3dce847f19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|a885ebd8-37dd-1de0-c2fd-3b3dce847f19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687727584955,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-232",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|a885ebd8-37dd-1de0-c2fd-3b3dce847f19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|a885ebd8-37dd-1de0-c2fd-3b3dce847f19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687727584957,
    },
    "e-234": {
      id: "e-234",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|d8960cc0-a40d-0265-efe6-ae263318cdc4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|d8960cc0-a40d-0265-efe6-ae263318cdc4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687728125589,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|d8960cc0-a40d-0265-efe6-ae263318cdc4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|d8960cc0-a40d-0265-efe6-ae263318cdc4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687728125590,
    },
    "e-236": {
      id: "e-236",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-237",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|8fc8df8b-2c39-499d-f5ed-24fa899aaf9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|8fc8df8b-2c39-499d-f5ed-24fa899aaf9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923048257,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|8fc8df8b-2c39-499d-f5ed-24fa899aaf9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|8fc8df8b-2c39-499d-f5ed-24fa899aaf9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923048259,
    },
    "e-238": {
      id: "e-238",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a8511ce2-ecab-c20c-65b9-e5e1d01e262c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a8511ce2-ecab-c20c-65b9-e5e1d01e262c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923106659,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-238",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a8511ce2-ecab-c20c-65b9-e5e1d01e262c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a8511ce2-ecab-c20c-65b9-e5e1d01e262c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923106695,
    },
    "e-242": {
      id: "e-242",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-243",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|b864e132-4394-4743-c4c1-6a04fc3a8e59",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|b864e132-4394-4743-c4c1-6a04fc3a8e59",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923395600,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-242",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aad|b864e132-4394-4743-c4c1-6a04fc3a8e59",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aad|b864e132-4394-4743-c4c1-6a04fc3a8e59",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923395600,
    },
    "e-246": {
      id: "e-246",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-247",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "199e583d-aac0-9995-d195-642a9fa8a085",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "199e583d-aac0-9995-d195-642a9fa8a085",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923512228,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-246",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "199e583d-aac0-9995-d195-642a9fa8a085",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "199e583d-aac0-9995-d195-642a9fa8a085",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923512228,
    },
    "e-248": {
      id: "e-248",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-249",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|0588fae8-e8a1-1c5b-19e4-afe365e65f83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|0588fae8-e8a1-1c5b-19e4-afe365e65f83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923577327,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-248",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478ab4|0588fae8-e8a1-1c5b-19e4-afe365e65f83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478ab4|0588fae8-e8a1-1c5b-19e4-afe365e65f83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923577329,
    },
    "e-250": {
      id: "e-250",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-53",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-251",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923650173,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-58",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-250",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aae|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aae|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688923650175,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-253",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|5753adba-6ed0-76d3-3fc1-d033573778c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|5753adba-6ed0-76d3-3fc1-d033573778c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688924214630,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-252",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|5753adba-6ed0-76d3-3fc1-d033573778c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|5753adba-6ed0-76d3-3fc1-d033573778c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688924214632,
    },
    "e-254": {
      id: "e-254",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 6,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1690909707283,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1690909707283,
    },
    "e-256": {
      id: "e-256",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-257",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 51,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1690909707283,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-256",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690909707283,
    },
    "e-258": {
      id: "e-258",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-259",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 51,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1690909707283,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-258",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690909707283,
    },
    "e-260": {
      id: "e-260",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1690909707283,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1690909707283,
    },
    "e-262": {
      id: "e-262",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-263",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 51,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1690909707283,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-262",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|9d5a4a95-ece2-19cd-2453-e666530daf97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690909707283,
    },
    "e-264": {
      id: "e-264",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-265",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|118aee0a-47af-f728-fa78-ddd0117f9890",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|118aee0a-47af-f728-fa78-ddd0117f9890",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690909860047,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-264",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|118aee0a-47af-f728-fa78-ddd0117f9890",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|118aee0a-47af-f728-fa78-ddd0117f9890",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690909860047,
    },
    "e-266": {
      id: "e-266",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-267",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|f680986d-9132-cfd6-ce17-862b8a9ab0fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|f680986d-9132-cfd6-ce17-862b8a9ab0fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690910489859,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64c803678593ada1d6478aa6|f680986d-9132-cfd6-ce17-862b8a9ab0fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64c803678593ada1d6478aa6|f680986d-9132-cfd6-ce17-862b8a9ab0fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1690910489859,
    },
    "e-270": {
      id: "e-270",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "64c803678593ada1d6478aa6|326e6cc8-a387-85f1-da9d-f29efd001bce",
      },
      targets: [],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 90,
          startsEntering: false,
          addStartOffset: true,
          addOffsetValue: 100,
          startsExiting: true,
          addEndOffset: true,
          endOffsetValue: 0,
        },
      ],
      createdOn: 1695591747043,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "64c803678593ada1d6478aa6|77392895-f8b4-3ad1-4408-588614de9883",
      },
      targets: [],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 90,
          startsEntering: false,
          addStartOffset: true,
          addOffsetValue: 100,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1695591958689,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "64c803678593ada1d6478aa6|245a0240-4639-ef10-8959-8ac1d2c2ab24",
      },
      targets: [],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 90,
          startsEntering: false,
          addStartOffset: true,
          addOffsetValue: 100,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1695592005699,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-12", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        appliesTo: "ELEMENT",
        styleBlockIds: [],
        id: "64c803678593ada1d6478aad|d63b4089-3952-d7ec-0f65-0f453ec51e3c",
      },
      targets: [],
      config: [
        {
          continuousParameterGroupId: "a-12-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1695592123658,
    },
  },
  actionLists: {
    "a-3": {
      id: "a-3",
      title: "Scroll Animation Transparency",
      continuousParameterGroups: [
        {
          id: "a-3-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-3-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|0bb04071-39bb-67a3-7126-c106f837130b",
                    },
                    value: 0.4,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-3-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|0bb04071-39bb-67a3-7126-c106f837130b",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1686219993722,
    },
    a: {
      id: "a",
      title: "Opacity",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aad|0bb04071-39bb-67a3-7126-c106f837130b",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686219761566,
    },
    "a-4": {
      id: "a-4",
      title: "New Scroll Animation",
      continuousParameterGroups: [
        {
          id: "a-4-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-4-n",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|37536cfe-4163-575a-b56e-5d34abbc7967",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-4-n-2",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|37536cfe-4163-575a-b56e-5d34abbc7967",
                    },
                    globalSwatchId: "",
                    rValue: 242,
                    bValue: 121,
                    gValue: 163,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1686222695623,
    },
    "a-5": {
      id: "a-5",
      title: "Tab Load On",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 5000,
                target: {},
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686232809674,
    },
    "a-9": {
      id: "a-9",
      title: "Tab Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1686237327570,
    },
    "a-19": {
      id: "a-19",
      title: "Show Portfolio Company",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
                },
                xValue: 0,
                yValue: 0,
                zValue: 45,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-19-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "none",
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "none",
              },
            },
            {
              id: "a-19-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-19-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
                },
                xValue: 0,
                yValue: 0,
                zValue: 180,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-19-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-19-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-19-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "block",
              },
            },
            {
              id: "a-19-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686585644636,
    },
    "a-20": {
      id: "a-20",
      title: "Hide Portfolio Company",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
                },
                xValue: 0,
                yValue: 0,
                zValue: 180,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-20-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "flex",
              },
            },
            {
              id: "a-20-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "block",
              },
            },
            {
              id: "a-20-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {},
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|0dca15cb-bf4e-867c-aca1-a86cd3c707f1",
                },
                xValue: 0,
                yValue: 0,
                zValue: 45,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "none",
              },
            },
            {
              id: "a-20-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1686585644636,
    },
    "a-21": {
      id: "a-21",
      title: "Open portfolio content",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n-14",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|daf3814c-d4f3-5c23-a5c9-d34fd3d69194",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-21-n-27",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-21-n-26",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  boundaryMode: true,
                  id: "64c803678593ada1d6478ab6|ebdd9919-a26c-d629-e122-4b1e2e2d4ae5",
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-21-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  boundaryMode: true,
                  id: "64c803678593ada1d6478ab6|ebdd9919-a26c-d629-e122-4b1e2e2d4ae5",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-15",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|daf3814c-d4f3-5c23-a5c9-d34fd3d69194",
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-21-n-29",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 500,
                target: {
                  boundaryMode: true,
                  id: "64c803678593ada1d6478ab6|ebdd9919-a26c-d629-e122-4b1e2e2d4ae5",
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-21-n-28",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 500,
                target: {},
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-21-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 500,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 500,
                target: {
                  boundaryMode: true,
                  id: "64c803678593ada1d6478ab6|ebdd9919-a26c-d629-e122-4b1e2e2d4ae5",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-21",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 0,
                target: {
                  boundaryMode: true,
                  id: "64c803678593ada1d6478ab6|ebdd9919-a26c-d629-e122-4b1e2e2d4ae5",
                },
                value: "flex",
              },
            },
            {
              id: "a-21-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 0,
                target: {},
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686587274561,
    },
    "a-22": {
      id: "a-22",
      title: "Close portfolio content",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|daf3814c-d4f3-5c23-a5c9-d34fd3d69194",
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-22-n-12",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {},
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-22-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  boundaryMode: true,
                  id: "64c803678593ada1d6478ab6|ebdd9919-a26c-d629-e122-4b1e2e2d4ae5",
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-22-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  boundaryMode: true,
                  id: "64c803678593ada1d6478ab6|ebdd9919-a26c-d629-e122-4b1e2e2d4ae5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1686587274561,
    },
    "a-25": {
      id: "a-25",
      title: "Dropdown 1 - Open Dropdown",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {},
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1638823218457,
    },
    "a-26": {
      id: "a-26",
      title: "Dropdown 1 - Close Dropdown",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {},
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1638823218457,
    },
    "a-27": {
      id: "a-27",
      title: "FAQ in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "rem",
                locked: false,
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1563048958242,
    },
    "a-28": {
      id: "a-28",
      title: "FAQ out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "rem",
                locked: false,
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1563049077348,
    },
    "a-29": {
      id: "a-29",
      title: "(TAB) Click",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {},
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 6000,
                target: {},
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1582253318412,
    },
    "a-30": {
      id: "a-30",
      title: "(TAB) Click [out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {},
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-30-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-3",
              actionTypeId: "PLUGIN_LOTTIE",
              config: {
                delay: 1000,
                easing: "easeOut",
                duration: 300,
                target: {},
                value: 0,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1582253318412,
    },
    "a-31": {
      id: "a-31",
      title: "FAQ Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|c7a5c16d-6d39-21bf-db96-f8091371a8f6",
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-31-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tf-arrow-faq",
                  selectorGuids: ["9d7ebff9-9f18-e278-fd69-cebbf01e3257"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|c7a5c16d-6d39-21bf-db96-f8091371a8f6",
                },
                heightValue: 60,
                widthUnit: "AUTO",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-31-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tf-arrow-faq",
                  selectorGuids: ["9d7ebff9-9f18-e278-fd69-cebbf01e3257"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1570756212282,
    },
    "a-32": {
      id: "a-32",
      title: "FAQ Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478ab6|c7a5c16d-6d39-21bf-db96-f8091371a8f6",
                },
                heightValue: 100,
                widthUnit: "AUTO",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-32-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".tf-arrow-faq",
                  selectorGuids: ["9d7ebff9-9f18-e278-fd69-cebbf01e3257"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1570756212282,
    },
    "a-33": {
      id: "a-33",
      title: "(TAB) Click 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".load-bar",
                  selectorGuids: ["b65c30f5-8970-fb84-e42c-cd5e55419a5a"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 6000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".load-bar",
                  selectorGuids: ["b65c30f5-8970-fb84-e42c-cd5e55419a5a"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1582253318412,
    },
    "a-34": {
      id: "a-34",
      title: "(TAB) Click [out] 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".load-bar",
                  selectorGuids: ["b65c30f5-8970-fb84-e42c-cd5e55419a5a"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1582253318412,
    },
    "a-35": {
      id: "a-35",
      title: "Footer Nav Item Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".diamond-on-hover-element",
                  selectorGuids: ["5d0816c1-393c-44f4-756e-2a6c8c2207a3"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".diamond-on-hover-element",
                  selectorGuids: ["5d0816c1-393c-44f4-756e-2a6c8c2207a3"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1687278161030,
    },
    "a-36": {
      id: "a-36",
      title: "Footer Nav Item Hover Off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".diamond-on-hover-element",
                  selectorGuids: ["5d0816c1-393c-44f4-756e-2a6c8c2207a3"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1687278161030,
    },
    "a-37": {
      id: "a-37",
      title: "Scroll Animation Transparency 2",
      continuousParameterGroups: [
        {
          id: "a-37-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-37-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|0bb04071-39bb-67a3-7126-c106f837130b",
                    },
                    value: 0.35,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-37-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "easeInOut",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|0bb04071-39bb-67a3-7126-c106f837130b",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1686219993722,
    },
    "a-41": {
      id: "a-41",
      title: "Hover on - Link 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-41-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-41-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-41-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  selector: ".nav-menu-photo-image.nav-menu-photo-image-4",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb70",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb82",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1593117828178,
    },
    "a-44": {
      id: "a-44",
      title: "XY - Photos",
      continuousParameterGroups: [
        {
          id: "a-44-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-44-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-menu-photo-mask",
                      selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb76"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-44-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-menu-photo-mask",
                      selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb76"],
                    },
                    xValue: 50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-44-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-44-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-menu-photo-mask",
                      selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb76"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-44-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-menu-photo-mask",
                      selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb76"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1593462946179,
    },
    "a-45": {
      id: "a-45",
      title: "Hover off - Link 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-45-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  selector: ".nav-menu-photo-image.nav-menu-photo-image-4",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb70",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb82",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-45-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1593117828178,
    },
    "a-39": {
      id: "a-39",
      title: "Open - Nav Bar Menu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-menu-background",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb72"],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-39-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-middle-line",
                  selectorGuids: ["30ab1fea-5ad4-8977-fd71-8252642fcdab"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-39-n-21",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-middle-line",
                  selectorGuids: ["30ab1fea-5ad4-8977-fd71-8252642fcdab"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-39-n-20",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-39-n-19",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-39-n-15",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-39-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-middle-line",
                  selectorGuids: ["30ab1fea-5ad4-8977-fd71-8252642fcdab"],
                },
                value: "block",
              },
            },
            {
              id: "a-39-n-11",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                xValue: 0,
                zValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-39-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".small-links",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb80"],
                },
                yValue: -150,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-menu-item-number",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb7b"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-menu-link-text",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb7a"],
                },
                yValue: -101,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-menu-2",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb6e"],
                },
                value: "flex",
              },
            },
            {
              id: "a-39-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 1000,
                target: {
                  selector: ".nav-menu-background",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb72"],
                },
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-39-n-7",
              actionTypeId: "PLUGIN_LOTTIE",
              config: {
                delay: 0,
                easing: "",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-bar-menu-icon",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb71"],
                },
                value: 100,
              },
            },
            {
              id: "a-39-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutQuint",
                duration: 1000,
                target: {
                  selector: ".small-links",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb80"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-middle-line",
                  selectorGuids: ["30ab1fea-5ad4-8977-fd71-8252642fcdab"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-24",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 200,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-39-n-23",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 200,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-39-n-22",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 200,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-middle-line",
                  selectorGuids: ["30ab1fea-5ad4-8977-fd71-8252642fcdab"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-39-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                yValue: -12,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-17",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 200,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-39-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutQuint",
                duration: 1000,
                target: {
                  selector: ".nav-menu-link-text",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb7a"],
                },
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-16",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 200,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 45,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-39-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 400,
                easing: "inOutQuart",
                duration: 700,
                target: {
                  selector: ".nav-menu-item-number",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb7b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1592817326208,
    },
    "a-42": {
      id: "a-42",
      title: "Hover on - Link 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-42-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  selector: ".nav-menu-photo-image.nav-menu-photo-image-4",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb70",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb82",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-42-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-42-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1593117828178,
    },
    "a-38": {
      id: "a-38",
      title: "Hover off - Link 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  selector: ".nav-menu-photo-image.nav-menu-photo-image-4",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb70",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb82",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1593117828178,
    },
    "a-43": {
      id: "a-43",
      title: "Close - Nav Bar Menu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "PLUGIN_LOTTIE",
              config: {
                delay: 0,
                easing: "",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-bar-menu-icon",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb71"],
                },
                value: 0,
              },
            },
            {
              id: "a-43-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-middle-line",
                  selectorGuids: ["30ab1fea-5ad4-8977-fd71-8252642fcdab"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-43-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-43-n-14",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-43-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-43-n-11",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
            {
              id: "a-43-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-bottom-line",
                  selectorGuids: ["d2a5d0b6-cf39-55ad-e866-b4ecf1094220"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-43-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-middle-line",
                  selectorGuids: ["30ab1fea-5ad4-8977-fd71-8252642fcdab"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-43-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-top-line",
                  selectorGuids: ["448c9aa9-8df9-9ba9-4f28-9e75c0bd3811"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-43-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  selector: ".nav-menu-item-number",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb7b"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-43-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  selector: ".nav-menu-link-text",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb7a"],
                },
                yValue: -101,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-43-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  selector: ".small-links",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb80"],
                },
                yValue: -150,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-43-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: "inOutQuad",
                duration: 900,
                target: {
                  selector: ".nav-menu-background",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb72"],
                },
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-menu-2",
                  selectorGuids: ["07cd8206-88aa-c9b7-df67-c1423a72eb6e"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1592817326208,
    },
    "a-40": {
      id: "a-40",
      title: "Hover on - Link 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-40-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-40-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".nav-menu-link.nav-menu-link-3",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb74",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb83",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
            {
              id: "a-40-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  selector: ".nav-menu-photo-image.nav-menu-photo-image-4",
                  selectorGuids: [
                    "07cd8206-88aa-c9b7-df67-c1423a72eb70",
                    "07cd8206-88aa-c9b7-df67-c1423a72eb82",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1593117828178,
    },
    "a-49": {
      id: "a-49",
      title: "Intro Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-49-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba51b",
                },
                xValue: -110,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba518",
                },
                xValue: 110,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba519",
                },
                widthValue: 1,
                heightValue: 0,
                widthUnit: "px",
                heightUnit: "em",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-49-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 2000,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba518",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba519",
                },
                widthValue: 1,
                heightValue: 1.5,
                widthUnit: "px",
                heightUnit: "em",
                locked: false,
              },
            },
            {
              id: "a-49-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 2000,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba51b",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-49-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutQuart",
                duration: 2000,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba51b",
                },
                xValue: -110,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutQuart",
                duration: 2000,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba518",
                },
                xValue: 110,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1200,
                easing: "",
                duration: 200,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba519",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-49-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba51d",
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba51c",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-49-n-16",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64c803678593ada1d6478aa6|113c5454-e3b2-8b35-9b0b-0b89e04ba50f",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1687719288115,
    },
    "a-51": {
      id: "a-51",
      title: "CTA Hover Light",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-51-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".primary-cta",
                  selectorGuids: ["899c0a89-8189-5dd8-fb30-8eb3346efb21"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-51-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-body-2",
                  selectorGuids: ["9992adf9-40ba-892e-e204-c018d2cc2935"],
                },
                globalSwatchId: "7adce5fd",
                rValue: 246,
                bValue: 246,
                gValue: 246,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-51-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".primary-cta",
                  selectorGuids: ["899c0a89-8189-5dd8-fb30-8eb3346efb21"],
                },
                globalSwatchId: "8770f050",
                rValue: 244,
                bValue: 236,
                gValue: 241,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-body-2",
                  selectorGuids: ["9992adf9-40ba-892e-e204-c018d2cc2935"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1687727592006,
    },
    "a-52": {
      id: "a-52",
      title: "CTA Hover Light Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-52-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".primary-cta",
                  selectorGuids: ["899c0a89-8189-5dd8-fb30-8eb3346efb21"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-52-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-body-2",
                  selectorGuids: ["9992adf9-40ba-892e-e204-c018d2cc2935"],
                },
                globalSwatchId: "7adce5fd",
                rValue: 246,
                bValue: 246,
                gValue: 246,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1687727592006,
    },
    "a-57": {
      id: "a-57",
      title: "CTA Hover Dark",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-57-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aa6|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-57-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-body-2-dark",
                  selectorGuids: ["203a4bc3-0e73-2bbf-7552-2de906830182"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aa6|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-57-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-body-2-dark",
                  selectorGuids: ["203a4bc3-0e73-2bbf-7552-2de906830182"],
                },
                globalSwatchId: "7adce5fd",
                rValue: 246,
                bValue: 246,
                gValue: 246,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1687727592006,
    },
    "a-54": {
      id: "a-54",
      title: "CTA Hover Dark Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-54-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aa6|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-54-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-body-2-dark",
                  selectorGuids: ["203a4bc3-0e73-2bbf-7552-2de906830182"],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1687727592006,
    },
    "a-53": {
      id: "a-53",
      title: "CTA Hover Dark Form",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-53-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aa6|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-53-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aa6|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-53-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aa6|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
            {
              id: "a-53-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "64c803678593ada1d6478aa6|ebfa6d8b-d451-5023-518b-8a7b050c1f8e",
                },
                globalSwatchId: "7adce5fd",
                rValue: 246,
                bValue: 246,
                gValue: 246,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1687727592006,
    },
    "a-58": {
      id: "a-58",
      title: "CTA Hover Dark Out Form",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-58-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  selector: ".primary-cta-dark.form",
                  selectorGuids: [
                    "e60c1304-b8f4-4e10-4132-13ad52869de8",
                    "30033840-4fda-cdbb-cb33-fbbae8e00d92",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-58-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".primary-cta-dark.form",
                  selectorGuids: [
                    "e60c1304-b8f4-4e10-4132-13ad52869de8",
                    "30033840-4fda-cdbb-cb33-fbbae8e00d92",
                  ],
                },
                globalSwatchId: "68f29143",
                rValue: 22,
                bValue: 88,
                gValue: 61,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1687727592006,
    },
    "a-11": {
      id: "a-11",
      title: "Title Colour Change",
      continuousParameterGroups: [
        {
          id: "a-11-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 65,
              actionItems: [
                {
                  id: "a-11-n",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|d63b4089-3952-d7ec-0f65-0f453ec51e3c",
                    },
                    globalSwatchId: "68f29143",
                    rValue: 22,
                    bValue: 88,
                    gValue: 61,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 75,
              actionItems: [
                {
                  id: "a-11-n-2",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|d63b4089-3952-d7ec-0f65-0f453ec51e3c",
                    },
                    globalSwatchId: "",
                    rValue: 242,
                    bValue: 121,
                    gValue: 163,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1686238986526,
    },
    "a-12": {
      id: "a-12",
      title: "Title Colour Change About",
      continuousParameterGroups: [
        {
          id: "a-12-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 65,
              actionItems: [
                {
                  id: "a-12-n",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|d63b4089-3952-d7ec-0f65-0f453ec51e3c",
                    },
                    globalSwatchId: "7adce5fd",
                    rValue: 246,
                    bValue: 246,
                    gValue: 246,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 75,
              actionItems: [
                {
                  id: "a-12-n-2",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64c803678593ada1d6478aad|d63b4089-3952-d7ec-0f65-0f453ec51e3c",
                    },
                    globalSwatchId: "",
                    rValue: 242,
                    bValue: 121,
                    gValue: 163,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1686238986526,
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
