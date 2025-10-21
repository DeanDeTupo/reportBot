(function () {
  const X = document.createElement('link').relList;
  if (X && X.supports && X.supports('modulepreload')) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) h(R);
  new MutationObserver((R) => {
    for (const j of R)
      if (j.type === 'childList')
        for (const dl of j.addedNodes)
          dl.tagName === 'LINK' && dl.rel === 'modulepreload' && h(dl);
  }).observe(document, { childList: !0, subtree: !0 });
  function U(R) {
    const j = {};
    return (
      R.integrity && (j.integrity = R.integrity),
      R.referrerPolicy && (j.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === 'use-credentials'
        ? (j.credentials = 'include')
        : R.crossOrigin === 'anonymous'
        ? (j.credentials = 'omit')
        : (j.credentials = 'same-origin'),
      j
    );
  }
  function h(R) {
    if (R.ep) return;
    R.ep = !0;
    const j = U(R);
    fetch(R.href, j);
  }
})();
var li = { exports: {} },
  Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lv;
function Go() {
  if (lv) return Se;
  lv = 1;
  var A = Symbol.for('react.transitional.element'),
    X = Symbol.for('react.fragment');
  function U(h, R, j) {
    var dl = null;
    if (
      (j !== void 0 && (dl = '' + j),
      R.key !== void 0 && (dl = '' + R.key),
      'key' in R)
    ) {
      j = {};
      for (var Sl in R) Sl !== 'key' && (j[Sl] = R[Sl]);
    } else j = R;
    return (
      (R = j.ref),
      { $$typeof: A, type: h, key: dl, ref: R !== void 0 ? R : null, props: j }
    );
  }
  return (Se.Fragment = X), (Se.jsx = U), (Se.jsxs = U), Se;
}
var tv;
function jo() {
  return tv || ((tv = 1), (li.exports = Go())), li.exports;
}
var L = jo(),
  ti = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uv;
function Xo() {
  if (uv) return Z;
  uv = 1;
  var A = Symbol.for('react.transitional.element'),
    X = Symbol.for('react.portal'),
    U = Symbol.for('react.fragment'),
    h = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    j = Symbol.for('react.consumer'),
    dl = Symbol.for('react.context'),
    Sl = Symbol.for('react.forward_ref'),
    H = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    p = Symbol.for('react.lazy'),
    fl = Symbol.iterator;
  function ul(s) {
    return s === null || typeof s != 'object'
      ? null
      : ((s = (fl && s[fl]) || s['@@iterator']),
        typeof s == 'function' ? s : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    W = Object.assign,
    pl = {};
  function Ml(s, _, D) {
    (this.props = s),
      (this.context = _),
      (this.refs = pl),
      (this.updater = D || I);
  }
  (Ml.prototype.isReactComponent = {}),
    (Ml.prototype.setState = function (s, _) {
      if (typeof s != 'object' && typeof s != 'function' && s != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, s, _, 'setState');
    }),
    (Ml.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, 'forceUpdate');
    });
  function zt() {}
  zt.prototype = Ml.prototype;
  function Ot(s, _, D) {
    (this.props = s),
      (this.context = _),
      (this.refs = pl),
      (this.updater = D || I);
  }
  var Hl = (Ot.prototype = new zt());
  (Hl.constructor = Ot), W(Hl, Ml.prototype), (Hl.isPureReactComponent = !0);
  var ot = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
    Ll = Object.prototype.hasOwnProperty;
  function Kl(s, _, D, z, q, k) {
    return (
      (D = k.ref),
      { $$typeof: A, type: s, key: _, ref: D !== void 0 ? D : null, props: k }
    );
  }
  function Jl(s, _) {
    return Kl(s.type, _, void 0, void 0, void 0, s.props);
  }
  function gt(s) {
    return typeof s == 'object' && s !== null && s.$$typeof === A;
  }
  function Yu(s) {
    var _ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      s.replace(/[=:]/g, function (D) {
        return _[D];
      })
    );
  }
  var Dt = /\/+/g;
  function ql(s, _) {
    return typeof s == 'object' && s !== null && s.key != null
      ? Yu('' + s.key)
      : _.toString(36);
  }
  function hu() {}
  function ru(s) {
    switch (s.status) {
      case 'fulfilled':
        return s.value;
      case 'rejected':
        throw s.reason;
      default:
        switch (
          (typeof s.status == 'string'
            ? s.then(hu, hu)
            : ((s.status = 'pending'),
              s.then(
                function (_) {
                  s.status === 'pending' &&
                    ((s.status = 'fulfilled'), (s.value = _));
                },
                function (_) {
                  s.status === 'pending' &&
                    ((s.status = 'rejected'), (s.reason = _));
                }
              )),
          s.status)
        ) {
          case 'fulfilled':
            return s.value;
          case 'rejected':
            throw s.reason;
        }
    }
    throw s;
  }
  function Yl(s, _, D, z, q) {
    var k = typeof s;
    (k === 'undefined' || k === 'boolean') && (s = null);
    var Q = !1;
    if (s === null) Q = !0;
    else
      switch (k) {
        case 'bigint':
        case 'string':
        case 'number':
          Q = !0;
          break;
        case 'object':
          switch (s.$$typeof) {
            case A:
            case X:
              Q = !0;
              break;
            case p:
              return (Q = s._init), Yl(Q(s._payload), _, D, z, q);
          }
      }
    if (Q)
      return (
        (q = q(s)),
        (Q = z === '' ? '.' + ql(s, 0) : z),
        ot(q)
          ? ((D = ''),
            Q != null && (D = Q.replace(Dt, '$&/') + '/'),
            Yl(q, _, D, '', function (Ct) {
              return Ct;
            }))
          : q != null &&
            (gt(q) &&
              (q = Jl(
                q,
                D +
                  (q.key == null || (s && s.key === q.key)
                    ? ''
                    : ('' + q.key).replace(Dt, '$&/') + '/') +
                  Q
              )),
            _.push(q)),
        1
      );
    Q = 0;
    var wl = z === '' ? '.' : z + ':';
    if (ot(s))
      for (var vl = 0; vl < s.length; vl++)
        (z = s[vl]), (k = wl + ql(z, vl)), (Q += Yl(z, _, D, k, q));
    else if (((vl = ul(s)), typeof vl == 'function'))
      for (s = vl.call(s), vl = 0; !(z = s.next()).done; )
        (z = z.value), (k = wl + ql(z, vl++)), (Q += Yl(z, _, D, k, q));
    else if (k === 'object') {
      if (typeof s.then == 'function') return Yl(ru(s), _, D, z, q);
      throw (
        ((_ = String(s)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (_ === '[object Object]'
              ? 'object with keys {' + Object.keys(s).join(', ') + '}'
              : _) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return Q;
  }
  function S(s, _, D) {
    if (s == null) return s;
    var z = [],
      q = 0;
    return (
      Yl(s, z, '', '', function (k) {
        return _.call(D, k, q++);
      }),
      z
    );
  }
  function O(s) {
    if (s._status === -1) {
      var _ = s._result;
      (_ = _()),
        _.then(
          function (D) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = D));
          },
          function (D) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = D));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = _));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var x =
    typeof reportError == 'function'
      ? reportError
      : function (s) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var _ = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == 'object' &&
                s !== null &&
                typeof s.message == 'string'
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(_)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', s);
            return;
          }
          console.error(s);
        };
  function cl() {}
  return (
    (Z.Children = {
      map: S,
      forEach: function (s, _, D) {
        S(
          s,
          function () {
            _.apply(this, arguments);
          },
          D
        );
      },
      count: function (s) {
        var _ = 0;
        return (
          S(s, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (s) {
        return (
          S(s, function (_) {
            return _;
          }) || []
        );
      },
      only: function (s) {
        if (!gt(s))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return s;
      },
    }),
    (Z.Component = Ml),
    (Z.Fragment = U),
    (Z.Profiler = R),
    (Z.PureComponent = Ot),
    (Z.StrictMode = h),
    (Z.Suspense = H),
    (Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (Z.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return $.H.useMemoCache(s);
      },
    }),
    (Z.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (Z.cloneElement = function (s, _, D) {
      if (s == null)
        throw Error(
          'The argument must be a React element, but you passed ' + s + '.'
        );
      var z = W({}, s.props),
        q = s.key,
        k = void 0;
      if (_ != null)
        for (Q in (_.ref !== void 0 && (k = void 0),
        _.key !== void 0 && (q = '' + _.key),
        _))
          !Ll.call(_, Q) ||
            Q === 'key' ||
            Q === '__self' ||
            Q === '__source' ||
            (Q === 'ref' && _.ref === void 0) ||
            (z[Q] = _[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) z.children = D;
      else if (1 < Q) {
        for (var wl = Array(Q), vl = 0; vl < Q; vl++)
          wl[vl] = arguments[vl + 2];
        z.children = wl;
      }
      return Kl(s.type, q, void 0, void 0, k, z);
    }),
    (Z.createContext = function (s) {
      return (
        (s = {
          $$typeof: dl,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: j, _context: s }),
        s
      );
    }),
    (Z.createElement = function (s, _, D) {
      var z,
        q = {},
        k = null;
      if (_ != null)
        for (z in (_.key !== void 0 && (k = '' + _.key), _))
          Ll.call(_, z) &&
            z !== 'key' &&
            z !== '__self' &&
            z !== '__source' &&
            (q[z] = _[z]);
      var Q = arguments.length - 2;
      if (Q === 1) q.children = D;
      else if (1 < Q) {
        for (var wl = Array(Q), vl = 0; vl < Q; vl++)
          wl[vl] = arguments[vl + 2];
        q.children = wl;
      }
      if (s && s.defaultProps)
        for (z in ((Q = s.defaultProps), Q)) q[z] === void 0 && (q[z] = Q[z]);
      return Kl(s, k, void 0, void 0, null, q);
    }),
    (Z.createRef = function () {
      return { current: null };
    }),
    (Z.forwardRef = function (s) {
      return { $$typeof: Sl, render: s };
    }),
    (Z.isValidElement = gt),
    (Z.lazy = function (s) {
      return { $$typeof: p, _payload: { _status: -1, _result: s }, _init: O };
    }),
    (Z.memo = function (s, _) {
      return { $$typeof: E, type: s, compare: _ === void 0 ? null : _ };
    }),
    (Z.startTransition = function (s) {
      var _ = $.T,
        D = {};
      $.T = D;
      try {
        var z = s(),
          q = $.S;
        q !== null && q(D, z),
          typeof z == 'object' &&
            z !== null &&
            typeof z.then == 'function' &&
            z.then(cl, x);
      } catch (k) {
        x(k);
      } finally {
        $.T = _;
      }
    }),
    (Z.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (Z.use = function (s) {
      return $.H.use(s);
    }),
    (Z.useActionState = function (s, _, D) {
      return $.H.useActionState(s, _, D);
    }),
    (Z.useCallback = function (s, _) {
      return $.H.useCallback(s, _);
    }),
    (Z.useContext = function (s) {
      return $.H.useContext(s);
    }),
    (Z.useDebugValue = function () {}),
    (Z.useDeferredValue = function (s, _) {
      return $.H.useDeferredValue(s, _);
    }),
    (Z.useEffect = function (s, _, D) {
      var z = $.H;
      if (typeof D == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return z.useEffect(s, _);
    }),
    (Z.useId = function () {
      return $.H.useId();
    }),
    (Z.useImperativeHandle = function (s, _, D) {
      return $.H.useImperativeHandle(s, _, D);
    }),
    (Z.useInsertionEffect = function (s, _) {
      return $.H.useInsertionEffect(s, _);
    }),
    (Z.useLayoutEffect = function (s, _) {
      return $.H.useLayoutEffect(s, _);
    }),
    (Z.useMemo = function (s, _) {
      return $.H.useMemo(s, _);
    }),
    (Z.useOptimistic = function (s, _) {
      return $.H.useOptimistic(s, _);
    }),
    (Z.useReducer = function (s, _, D) {
      return $.H.useReducer(s, _, D);
    }),
    (Z.useRef = function (s) {
      return $.H.useRef(s);
    }),
    (Z.useState = function (s) {
      return $.H.useState(s);
    }),
    (Z.useSyncExternalStore = function (s, _, D) {
      return $.H.useSyncExternalStore(s, _, D);
    }),
    (Z.useTransition = function () {
      return $.H.useTransition();
    }),
    (Z.version = '19.1.1'),
    Z
  );
}
var av;
function fi() {
  return av || ((av = 1), (ti.exports = Xo())), ti.exports;
}
var ou = fi(),
  ui = { exports: {} },
  be = {},
  ai = { exports: {} },
  ei = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ev;
function Qo() {
  return (
    ev ||
      ((ev = 1),
      (function (A) {
        function X(S, O) {
          var x = S.length;
          S.push(O);
          l: for (; 0 < x; ) {
            var cl = (x - 1) >>> 1,
              s = S[cl];
            if (0 < R(s, O)) (S[cl] = O), (S[x] = s), (x = cl);
            else break l;
          }
        }
        function U(S) {
          return S.length === 0 ? null : S[0];
        }
        function h(S) {
          if (S.length === 0) return null;
          var O = S[0],
            x = S.pop();
          if (x !== O) {
            S[0] = x;
            l: for (var cl = 0, s = S.length, _ = s >>> 1; cl < _; ) {
              var D = 2 * (cl + 1) - 1,
                z = S[D],
                q = D + 1,
                k = S[q];
              if (0 > R(z, x))
                q < s && 0 > R(k, z)
                  ? ((S[cl] = k), (S[q] = x), (cl = q))
                  : ((S[cl] = z), (S[D] = x), (cl = D));
              else if (q < s && 0 > R(k, x)) (S[cl] = k), (S[q] = x), (cl = q);
              else break l;
            }
          }
          return O;
        }
        function R(S, O) {
          var x = S.sortIndex - O.sortIndex;
          return x !== 0 ? x : S.id - O.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var j = performance;
          A.unstable_now = function () {
            return j.now();
          };
        } else {
          var dl = Date,
            Sl = dl.now();
          A.unstable_now = function () {
            return dl.now() - Sl;
          };
        }
        var H = [],
          E = [],
          p = 1,
          fl = null,
          ul = 3,
          I = !1,
          W = !1,
          pl = !1,
          Ml = !1,
          zt = typeof setTimeout == 'function' ? setTimeout : null,
          Ot = typeof clearTimeout == 'function' ? clearTimeout : null,
          Hl = typeof setImmediate < 'u' ? setImmediate : null;
        function ot(S) {
          for (var O = U(E); O !== null; ) {
            if (O.callback === null) h(E);
            else if (O.startTime <= S)
              h(E), (O.sortIndex = O.expirationTime), X(H, O);
            else break;
            O = U(E);
          }
        }
        function $(S) {
          if (((pl = !1), ot(S), !W))
            if (U(H) !== null) (W = !0), Ll || ((Ll = !0), ql());
            else {
              var O = U(E);
              O !== null && Yl($, O.startTime - S);
            }
        }
        var Ll = !1,
          Kl = -1,
          Jl = 5,
          gt = -1;
        function Yu() {
          return Ml ? !0 : !(A.unstable_now() - gt < Jl);
        }
        function Dt() {
          if (((Ml = !1), Ll)) {
            var S = A.unstable_now();
            gt = S;
            var O = !0;
            try {
              l: {
                (W = !1), pl && ((pl = !1), Ot(Kl), (Kl = -1)), (I = !0);
                var x = ul;
                try {
                  t: {
                    for (
                      ot(S), fl = U(H);
                      fl !== null && !(fl.expirationTime > S && Yu());

                    ) {
                      var cl = fl.callback;
                      if (typeof cl == 'function') {
                        (fl.callback = null), (ul = fl.priorityLevel);
                        var s = cl(fl.expirationTime <= S);
                        if (((S = A.unstable_now()), typeof s == 'function')) {
                          (fl.callback = s), ot(S), (O = !0);
                          break t;
                        }
                        fl === U(H) && h(H), ot(S);
                      } else h(H);
                      fl = U(H);
                    }
                    if (fl !== null) O = !0;
                    else {
                      var _ = U(E);
                      _ !== null && Yl($, _.startTime - S), (O = !1);
                    }
                  }
                  break l;
                } finally {
                  (fl = null), (ul = x), (I = !1);
                }
                O = void 0;
              }
            } finally {
              O ? ql() : (Ll = !1);
            }
          }
        }
        var ql;
        if (typeof Hl == 'function')
          ql = function () {
            Hl(Dt);
          };
        else if (typeof MessageChannel < 'u') {
          var hu = new MessageChannel(),
            ru = hu.port2;
          (hu.port1.onmessage = Dt),
            (ql = function () {
              ru.postMessage(null);
            });
        } else
          ql = function () {
            zt(Dt, 0);
          };
        function Yl(S, O) {
          Kl = zt(function () {
            S(A.unstable_now());
          }, O);
        }
        (A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (A.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Jl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return ul;
          }),
          (A.unstable_next = function (S) {
            switch (ul) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = ul;
            }
            var x = ul;
            ul = O;
            try {
              return S();
            } finally {
              ul = x;
            }
          }),
          (A.unstable_requestPaint = function () {
            Ml = !0;
          }),
          (A.unstable_runWithPriority = function (S, O) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var x = ul;
            ul = S;
            try {
              return O();
            } finally {
              ul = x;
            }
          }),
          (A.unstable_scheduleCallback = function (S, O, x) {
            var cl = A.unstable_now();
            switch (
              (typeof x == 'object' && x !== null
                ? ((x = x.delay),
                  (x = typeof x == 'number' && 0 < x ? cl + x : cl))
                : (x = cl),
              S)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = x + s),
              (S = {
                id: p++,
                callback: O,
                priorityLevel: S,
                startTime: x,
                expirationTime: s,
                sortIndex: -1,
              }),
              x > cl
                ? ((S.sortIndex = x),
                  X(E, S),
                  U(H) === null &&
                    S === U(E) &&
                    (pl ? (Ot(Kl), (Kl = -1)) : (pl = !0), Yl($, x - cl)))
                : ((S.sortIndex = s),
                  X(H, S),
                  W || I || ((W = !0), Ll || ((Ll = !0), ql()))),
              S
            );
          }),
          (A.unstable_shouldYield = Yu),
          (A.unstable_wrapCallback = function (S) {
            var O = ul;
            return function () {
              var x = ul;
              ul = O;
              try {
                return S.apply(this, arguments);
              } finally {
                ul = x;
              }
            };
          });
      })(ei)),
    ei
  );
}
var nv;
function Zo() {
  return nv || ((nv = 1), (ai.exports = Qo())), ai.exports;
}
var ni = { exports: {} },
  Gl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fv;
function Co() {
  if (fv) return Gl;
  fv = 1;
  var A = fi();
  function X(H) {
    var E = 'https://react.dev/errors/' + H;
    if (1 < arguments.length) {
      E += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        E += '&args[]=' + encodeURIComponent(arguments[p]);
    }
    return (
      'Minified React error #' +
      H +
      '; visit ' +
      E +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function U() {}
  var h = {
      d: {
        f: U,
        r: function () {
          throw Error(X(522));
        },
        D: U,
        C: U,
        L: U,
        m: U,
        X: U,
        S: U,
        M: U,
      },
      p: 0,
      findDOMNode: null,
    },
    R = Symbol.for('react.portal');
  function j(H, E, p) {
    var fl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: fl == null ? null : '' + fl,
      children: H,
      containerInfo: E,
      implementation: p,
    };
  }
  var dl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Sl(H, E) {
    if (H === 'font') return '';
    if (typeof E == 'string') return E === 'use-credentials' ? E : '';
  }
  return (
    (Gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Gl.createPortal = function (H, E) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(X(299));
      return j(H, E, null, p);
    }),
    (Gl.flushSync = function (H) {
      var E = dl.T,
        p = h.p;
      try {
        if (((dl.T = null), (h.p = 2), H)) return H();
      } finally {
        (dl.T = E), (h.p = p), h.d.f();
      }
    }),
    (Gl.preconnect = function (H, E) {
      typeof H == 'string' &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == 'string'
                ? E === 'use-credentials'
                  ? E
                  : ''
                : void 0))
          : (E = null),
        h.d.C(H, E));
    }),
    (Gl.prefetchDNS = function (H) {
      typeof H == 'string' && h.d.D(H);
    }),
    (Gl.preinit = function (H, E) {
      if (typeof H == 'string' && E && typeof E.as == 'string') {
        var p = E.as,
          fl = Sl(p, E.crossOrigin),
          ul = typeof E.integrity == 'string' ? E.integrity : void 0,
          I = typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0;
        p === 'style'
          ? h.d.S(H, typeof E.precedence == 'string' ? E.precedence : void 0, {
              crossOrigin: fl,
              integrity: ul,
              fetchPriority: I,
            })
          : p === 'script' &&
            h.d.X(H, {
              crossOrigin: fl,
              integrity: ul,
              fetchPriority: I,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
            });
      }
    }),
    (Gl.preinitModule = function (H, E) {
      if (typeof H == 'string')
        if (typeof E == 'object' && E !== null) {
          if (E.as == null || E.as === 'script') {
            var p = Sl(E.as, E.crossOrigin);
            h.d.M(H, {
              crossOrigin: p,
              integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
            });
          }
        } else E == null && h.d.M(H);
    }),
    (Gl.preload = function (H, E) {
      if (
        typeof H == 'string' &&
        typeof E == 'object' &&
        E !== null &&
        typeof E.as == 'string'
      ) {
        var p = E.as,
          fl = Sl(p, E.crossOrigin);
        h.d.L(H, p, {
          crossOrigin: fl,
          integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
          nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
          type: typeof E.type == 'string' ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == 'string' ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == 'string' ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == 'string' ? E.imageSizes : void 0,
          media: typeof E.media == 'string' ? E.media : void 0,
        });
      }
    }),
    (Gl.preloadModule = function (H, E) {
      if (typeof H == 'string')
        if (E) {
          var p = Sl(E.as, E.crossOrigin);
          h.d.m(H, {
            as: typeof E.as == 'string' && E.as !== 'script' ? E.as : void 0,
            crossOrigin: p,
            integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
          });
        } else h.d.m(H);
    }),
    (Gl.requestFormReset = function (H) {
      h.d.r(H);
    }),
    (Gl.unstable_batchedUpdates = function (H, E) {
      return H(E);
    }),
    (Gl.useFormState = function (H, E, p) {
      return dl.H.useFormState(H, E, p);
    }),
    (Gl.useFormStatus = function () {
      return dl.H.useHostTransitionStatus();
    }),
    (Gl.version = '19.1.1'),
    Gl
  );
}
var cv;
function Vo() {
  if (cv) return ni.exports;
  cv = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (X) {
        console.error(X);
      }
  }
  return A(), (ni.exports = Co()), ni.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var iv;
function Lo() {
  if (iv) return be;
  iv = 1;
  var A = Zo(),
    X = fi(),
    U = Vo();
  function h(l) {
    var t = 'https://react.dev/errors/' + l;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += '&args[]=' + encodeURIComponent(arguments[u]);
    }
    return (
      'Minified React error #' +
      l +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function R(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function j(l) {
    var t = l,
      u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (u = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Sl(l) {
    if (j(l) !== l) throw Error(h(188));
  }
  function H(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = j(l)), t === null)) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((a = e.return), a !== null)) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return Sl(e), l;
          if (n === a) return Sl(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) (u = e), (a = n);
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            (f = !0), (u = e), (a = n);
            break;
          }
          if (c === a) {
            (f = !0), (a = e), (u = n);
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              (f = !0), (u = n), (a = e);
              break;
            }
            if (c === a) {
              (f = !0), (a = n), (u = e);
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = E(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var p = Object.assign,
    fl = Symbol.for('react.element'),
    ul = Symbol.for('react.transitional.element'),
    I = Symbol.for('react.portal'),
    W = Symbol.for('react.fragment'),
    pl = Symbol.for('react.strict_mode'),
    Ml = Symbol.for('react.profiler'),
    zt = Symbol.for('react.provider'),
    Ot = Symbol.for('react.consumer'),
    Hl = Symbol.for('react.context'),
    ot = Symbol.for('react.forward_ref'),
    $ = Symbol.for('react.suspense'),
    Ll = Symbol.for('react.suspense_list'),
    Kl = Symbol.for('react.memo'),
    Jl = Symbol.for('react.lazy'),
    gt = Symbol.for('react.activity'),
    Yu = Symbol.for('react.memo_cache_sentinel'),
    Dt = Symbol.iterator;
  function ql(l) {
    return l === null || typeof l != 'object'
      ? null
      : ((l = (Dt && l[Dt]) || l['@@iterator']),
        typeof l == 'function' ? l : null);
  }
  var hu = Symbol.for('react.client.reference');
  function ru(l) {
    if (l == null) return null;
    if (typeof l == 'function')
      return l.$$typeof === hu ? null : l.displayName || l.name || null;
    if (typeof l == 'string') return l;
    switch (l) {
      case W:
        return 'Fragment';
      case Ml:
        return 'Profiler';
      case pl:
        return 'StrictMode';
      case $:
        return 'Suspense';
      case Ll:
        return 'SuspenseList';
      case gt:
        return 'Activity';
    }
    if (typeof l == 'object')
      switch (l.$$typeof) {
        case I:
          return 'Portal';
        case Hl:
          return (l.displayName || 'Context') + '.Provider';
        case Ot:
          return (l._context.displayName || 'Context') + '.Consumer';
        case ot:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ''),
              (l = l !== '' ? 'ForwardRef(' + l + ')' : 'ForwardRef')),
            l
          );
        case Kl:
          return (
            (t = l.displayName || null), t !== null ? t : ru(l.type) || 'Memo'
          );
        case Jl:
          (t = l._payload), (l = l._init);
          try {
            return ru(l(t));
          } catch {}
      }
    return null;
  }
  var Yl = Array.isArray,
    S = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = { pending: !1, data: null, method: null, action: null },
    cl = [],
    s = -1;
  function _(l) {
    return { current: l };
  }
  function D(l) {
    0 > s || ((l.current = cl[s]), (cl[s] = null), s--);
  }
  function z(l, t) {
    s++, (cl[s] = l.current), (l.current = t);
  }
  var q = _(null),
    k = _(null),
    Q = _(null),
    wl = _(null);
  function vl(l, t) {
    switch ((z(Q, t), z(k, l), z(q, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ud(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Ud(t)), (l = Rd(t, l));
        else
          switch (l) {
            case 'svg':
              l = 1;
              break;
            case 'math':
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    D(q), z(q, l);
  }
  function Ct() {
    D(q), D(k), D(Q);
  }
  function jn(l) {
    l.memoizedState !== null && z(wl, l);
    var t = q.current,
      u = Rd(t, l.type);
    t !== u && (z(k, l), z(q, u));
  }
  function Te(l) {
    k.current === l && (D(q), D(k)),
      wl.current === l && (D(wl), (oe._currentValue = x));
  }
  var Xn = Object.prototype.hasOwnProperty,
    Qn = A.unstable_scheduleCallback,
    Zn = A.unstable_cancelCallback,
    hv = A.unstable_shouldYield,
    rv = A.unstable_requestPaint,
    St = A.unstable_now,
    mv = A.unstable_getCurrentPriorityLevel,
    ii = A.unstable_ImmediatePriority,
    si = A.unstable_UserBlockingPriority,
    Ee = A.unstable_NormalPriority,
    gv = A.unstable_LowPriority,
    di = A.unstable_IdlePriority,
    Sv = A.log,
    bv = A.unstable_setDisableYieldValue,
    Ea = null,
    Wl = null;
  function Vt(l) {
    if (
      (typeof Sv == 'function' && bv(l),
      Wl && typeof Wl.setStrictMode == 'function')
    )
      try {
        Wl.setStrictMode(Ea, l);
      } catch {}
  }
  var $l = Math.clz32 ? Math.clz32 : _v,
    Tv = Math.log,
    Ev = Math.LN2;
  function _v(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((Tv(l) / Ev) | 0)) | 0;
  }
  var _e = 256,
    Ae = 4194304;
  function mu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ze(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (e = mu(a))
            : ((f &= c),
              f !== 0
                ? (e = mu(f))
                : u || ((u = c & ~l), u !== 0 && (e = mu(u)))))
        : ((c = a & ~n),
          c !== 0
            ? (e = mu(c))
            : f !== 0
            ? (e = mu(f))
            : u || ((u = a & ~l), u !== 0 && (e = mu(u)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (u = t & -t),
          n >= u || (n === 32 && (u & 4194048) !== 0))
        ? t
        : e
    );
  }
  function _a(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Av(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vi() {
    var l = _e;
    return (_e <<= 1), (_e & 4194048) === 0 && (_e = 256), l;
  }
  function yi() {
    var l = Ae;
    return (Ae <<= 1), (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function Cn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Aa(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function zv(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    (l.pendingLanes = u),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= u),
      (l.entangledLanes &= u),
      (l.errorRecoveryDisabledLanes &= u),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      i = l.expirationTimes,
      o = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - $l(u),
        T = 1 << g;
      (c[g] = 0), (i[g] = -1);
      var r = o[g];
      if (r !== null)
        for (o[g] = null, g = 0; g < r.length; g++) {
          var m = r[g];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && oi(l, a, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function oi(l, t, u) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - $l(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (u & 4194090));
  }
  function hi(l, t) {
    var u = (l.entangledLanes |= t);
    for (l = l.entanglements; u; ) {
      var a = 31 - $l(u),
        e = 1 << a;
      (e & t) | (l[a] & t) && (l[a] |= t), (u &= ~e);
    }
  }
  function Vn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Ln(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ri() {
    var l = O.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Wd(l.type));
  }
  function Ov(l, t) {
    var u = O.p;
    try {
      return (O.p = l), t();
    } finally {
      O.p = u;
    }
  }
  var Lt = Math.random().toString(36).slice(2),
    Bl = '__reactFiber$' + Lt,
    Xl = '__reactProps$' + Lt,
    Bu = '__reactContainer$' + Lt,
    Kn = '__reactEvents$' + Lt,
    Dv = '__reactListeners$' + Lt,
    Mv = '__reactHandles$' + Lt,
    mi = '__reactResources$' + Lt,
    za = '__reactMarker$' + Lt;
  function Jn(l) {
    delete l[Bl], delete l[Xl], delete l[Kn], delete l[Dv], delete l[Mv];
  }
  function xu(l) {
    var t = l[Bl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if ((t = u[Bu] || u[Bl])) {
        if (
          ((u = t.alternate),
          t.child !== null || (u !== null && u.child !== null))
        )
          for (l = qd(l); l !== null; ) {
            if ((u = l[Bl])) return u;
            l = qd(l);
          }
        return t;
      }
      (l = u), (u = l.parentNode);
    }
    return null;
  }
  function Gu(l) {
    if ((l = l[Bl] || l[Bu])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Oa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function ju(l) {
    var t = l[mi];
    return (
      t ||
        (t = l[mi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Al(l) {
    l[za] = !0;
  }
  var gi = new Set(),
    Si = {};
  function gu(l, t) {
    Xu(l, t), Xu(l + 'Capture', t);
  }
  function Xu(l, t) {
    for (Si[l] = t, l = 0; l < t.length; l++) gi.add(t[l]);
  }
  var Uv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    bi = {},
    Ti = {};
  function Rv(l) {
    return Xn.call(Ti, l)
      ? !0
      : Xn.call(bi, l)
      ? !1
      : Uv.test(l)
      ? (Ti[l] = !0)
      : ((bi[l] = !0), !1);
  }
  function Oe(l, t, u) {
    if (Rv(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case 'undefined':
          case 'function':
          case 'symbol':
            l.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, '' + u);
      }
  }
  function De(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, '' + u);
    }
  }
  function Mt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, '' + a);
    }
  }
  var wn, Ei;
  function Qu(l) {
    if (wn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        (wn = (t && t[1]) || ''),
          (Ei =
            -1 <
            u.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < u.stack.indexOf('@')
              ? '@unknown:0:0'
              : '');
      }
    return (
      `
` +
      wn +
      l +
      Ei
    );
  }
  var Wn = !1;
  function $n(l, t) {
    if (!l || Wn) return '';
    Wn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (m) {
                  var r = m;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (m) {
                  r = m;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                r = m;
              }
              (T = l()) &&
                typeof T.catch == 'function' &&
                T.catch(function () {});
            }
          } catch (m) {
            if (m && r && typeof m.stack == 'string') return [m.stack, r.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name'
      );
      e &&
        e.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var n = a.DetermineComponentFrameRoot(),
        f = n[0],
        c = n[1];
      if (f && c) {
        var i = f.split(`
`),
          o = c.split(`
`);
        for (
          e = a = 0;
          a < i.length && !i[a].includes('DetermineComponentFrameRoot');

        )
          a++;
        for (; e < o.length && !o[e].includes('DetermineComponentFrameRoot'); )
          e++;
        if (a === i.length || e === o.length)
          for (
            a = i.length - 1, e = o.length - 1;
            1 <= a && 0 <= e && i[a] !== o[e];

          )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== o[e]) {
            if (a !== 1 || e !== 1)
              do
                if ((a--, e--, 0 > e || i[a] !== o[e])) {
                  var g =
                    `
` + i[a].replace(' at new ', ' at ');
                  return (
                    l.displayName &&
                      g.includes('<anonymous>') &&
                      (g = g.replace('<anonymous>', l.displayName)),
                    g
                  );
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      (Wn = !1), (Error.prepareStackTrace = u);
    }
    return (u = l ? l.displayName || l.name : '') ? Qu(u) : '';
  }
  function Nv(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Qu(l.type);
      case 16:
        return Qu('Lazy');
      case 13:
        return Qu('Suspense');
      case 19:
        return Qu('SuspenseList');
      case 0:
      case 15:
        return $n(l.type, !1);
      case 11:
        return $n(l.type.render, !1);
      case 1:
        return $n(l.type, !0);
      case 31:
        return Qu('Activity');
      default:
        return '';
    }
  }
  function _i(l) {
    try {
      var t = '';
      do (t += Nv(l)), (l = l.return);
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  function at(l) {
    switch (typeof l) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return l;
      case 'object':
        return l;
      default:
        return '';
    }
  }
  function Ai(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function pv(l) {
    var t = Ai(l) ? 'checked' : 'value',
      u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = '' + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof u < 'u' &&
      typeof u.get == 'function' &&
      typeof u.set == 'function'
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (f) {
            (a = '' + f), n.call(this, f);
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = '' + f;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Me(l) {
    l._valueTracker || (l._valueTracker = pv(l));
  }
  function zi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(),
      a = '';
    return (
      l && (a = Ai(l) ? (l.checked ? 'true' : 'false') : l.value),
      (l = a),
      l !== u ? (t.setValue(l), !0) : !1
    );
  }
  function Ue(l) {
    if (
      ((l = l || (typeof document < 'u' ? document : void 0)), typeof l > 'u')
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Hv = /[\n"\\]/g;
  function et(l) {
    return l.replace(Hv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function kn(l, t, u, a, e, n, f, c) {
    (l.name = ''),
      f != null &&
      typeof f != 'function' &&
      typeof f != 'symbol' &&
      typeof f != 'boolean'
        ? (l.type = f)
        : l.removeAttribute('type'),
      t != null
        ? f === 'number'
          ? ((t === 0 && l.value === '') || l.value != t) &&
            (l.value = '' + at(t))
          : l.value !== '' + at(t) && (l.value = '' + at(t))
        : (f !== 'submit' && f !== 'reset') || l.removeAttribute('value'),
      t != null
        ? Fn(l, f, at(t))
        : u != null
        ? Fn(l, f, at(u))
        : a != null && l.removeAttribute('value'),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != 'function' && typeof e != 'symbol'),
      c != null &&
      typeof c != 'function' &&
      typeof c != 'symbol' &&
      typeof c != 'boolean'
        ? (l.name = '' + at(c))
        : l.removeAttribute('name');
  }
  function Oi(l, t, u, a, e, n, f, c) {
    if (
      (n != null &&
        typeof n != 'function' &&
        typeof n != 'symbol' &&
        typeof n != 'boolean' &&
        (l.type = n),
      t != null || u != null)
    ) {
      if (!((n !== 'submit' && n !== 'reset') || t != null)) return;
      (u = u != null ? '' + at(u) : ''),
        (t = t != null ? '' + at(t) : u),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? e),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean' &&
        (l.name = f);
  }
  function Fn(l, t, u) {
    (t === 'number' && Ue(l.ownerDocument) === l) ||
      l.defaultValue === '' + u ||
      (l.defaultValue = '' + u);
  }
  function Zu(l, t, u, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < u.length; e++) t['$' + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        (e = t.hasOwnProperty('$' + l[u].value)),
          l[u].selected !== e && (l[u].selected = e),
          e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = '' + at(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          (l[e].selected = !0), a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Di(l, t, u) {
    if (
      t != null &&
      ((t = '' + at(t)), t !== l.value && (l.value = t), u == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? '' + at(u) : '';
  }
  function Mi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (Yl(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ''), (t = u);
    }
    (u = at(t)),
      (l.defaultValue = u),
      (a = l.textContent),
      a === u && a !== '' && a !== null && (l.value = a);
  }
  function Cu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var qv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ui(l, t, u) {
    var a = t.indexOf('--') === 0;
    u == null || typeof u == 'boolean' || u === ''
      ? a
        ? l.setProperty(t, '')
        : t === 'float'
        ? (l.cssFloat = '')
        : (l[t] = '')
      : a
      ? l.setProperty(t, u)
      : typeof u != 'number' || u === 0 || qv.has(t)
      ? t === 'float'
        ? (l.cssFloat = u)
        : (l[t] = ('' + u).trim())
      : (l[t] = u + 'px');
  }
  function Ri(l, t, u) {
    if (t != null && typeof t != 'object') throw Error(h(62));
    if (((l = l.style), u != null)) {
      for (var a in u)
        !u.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? l.setProperty(a, '')
            : a === 'float'
            ? (l.cssFloat = '')
            : (l[a] = ''));
      for (var e in t)
        (a = t[e]), t.hasOwnProperty(e) && u[e] !== a && Ui(l, e, a);
    } else for (var n in t) t.hasOwnProperty(n) && Ui(l, n, t[n]);
  }
  function In(l) {
    if (l.indexOf('-') === -1) return !1;
    switch (l) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Yv = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Bv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return Bv.test('' + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var Pn = null;
  function lf(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Vu = null,
    Lu = null;
  function Ni(l) {
    var t = Gu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Xl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case 'input':
          if (
            (kn(
              l,
              u.value,
              u.defaultValue,
              u.defaultValue,
              u.checked,
              u.defaultChecked,
              u.type,
              u.name
            ),
            (t = u.name),
            u.type === 'radio' && t != null)
          ) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (
              u = u.querySelectorAll(
                'input[name="' + et('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < u.length;
              t++
            ) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Xl] || null;
                if (!e) throw Error(h(90));
                kn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              (a = u[t]), a.form === l.form && zi(a);
          }
          break l;
        case 'textarea':
          Di(l, u.value, u.defaultValue);
          break l;
        case 'select':
          (t = u.value), t != null && Zu(l, !!u.multiple, t, !1);
      }
    }
  }
  var tf = !1;
  function pi(l, t, u) {
    if (tf) return l(t, u);
    tf = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((tf = !1),
        (Vu !== null || Lu !== null) &&
          (rn(), Vu && ((t = Vu), (l = Lu), (Lu = Vu = null), Ni(t), l)))
      )
        for (t = 0; t < l.length; t++) Ni(l[t]);
    }
  }
  function Da(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Xl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === 'button' ||
            l === 'input' ||
            l === 'select' ||
            l === 'textarea'
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != 'function') throw Error(h(231, t, typeof u));
    return u;
  }
  var Ut = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    uf = !1;
  if (Ut)
    try {
      var Ma = {};
      Object.defineProperty(Ma, 'passive', {
        get: function () {
          uf = !0;
        },
      }),
        window.addEventListener('test', Ma, Ma),
        window.removeEventListener('test', Ma, Ma);
    } catch {
      uf = !1;
    }
  var Kt = null,
    af = null,
    Ne = null;
  function Hi() {
    if (Ne) return Ne;
    var l,
      t = af,
      u = t.length,
      a,
      e = 'value' in Kt ? Kt.value : Kt.textContent,
      n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++);
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++);
    return (Ne = e.slice(l, 1 < a ? 1 - a : void 0));
  }
  function pe(l) {
    var t = l.keyCode;
    return (
      'charCode' in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function He() {
    return !0;
  }
  function qi() {
    return !1;
  }
  function Ql(l) {
    function t(u, a, e, n, f) {
      (this._reactName = u),
        (this._targetInst = e),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((u = l[c]), (this[c] = u ? u(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? He
          : qi),
        (this.isPropagationStopped = qi),
        this
      );
    }
    return (
      p(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != 'unknown' && (u.returnValue = !1),
            (this.isDefaultPrevented = He));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != 'unknown' && (u.cancelBubble = !0),
            (this.isPropagationStopped = He));
        },
        persist: function () {},
        isPersistent: He,
      }),
      t
    );
  }
  var Su = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qe = Ql(Su),
    Ua = p({}, Su, { view: 0, detail: 0 }),
    xv = Ql(Ua),
    ef,
    nf,
    Ra,
    Ye = p({}, Ua, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cf,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return 'movementX' in l
          ? l.movementX
          : (l !== Ra &&
              (Ra && l.type === 'mousemove'
                ? ((ef = l.screenX - Ra.screenX), (nf = l.screenY - Ra.screenY))
                : (nf = ef = 0),
              (Ra = l)),
            ef);
      },
      movementY: function (l) {
        return 'movementY' in l ? l.movementY : nf;
      },
    }),
    Yi = Ql(Ye),
    Gv = p({}, Ye, { dataTransfer: 0 }),
    jv = Ql(Gv),
    Xv = p({}, Ua, { relatedTarget: 0 }),
    ff = Ql(Xv),
    Qv = p({}, Su, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zv = Ql(Qv),
    Cv = p({}, Su, {
      clipboardData: function (l) {
        return 'clipboardData' in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Vv = Ql(Cv),
    Lv = p({}, Su, { data: 0 }),
    Bi = Ql(Lv),
    Kv = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Jv = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    wv = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Wv(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = wv[l])
      ? !!t[l]
      : !1;
  }
  function cf() {
    return Wv;
  }
  var $v = p({}, Ua, {
      key: function (l) {
        if (l.key) {
          var t = Kv[l.key] || l.key;
          if (t !== 'Unidentified') return t;
        }
        return l.type === 'keypress'
          ? ((l = pe(l)), l === 13 ? 'Enter' : String.fromCharCode(l))
          : l.type === 'keydown' || l.type === 'keyup'
          ? Jv[l.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cf,
      charCode: function (l) {
        return l.type === 'keypress' ? pe(l) : 0;
      },
      keyCode: function (l) {
        return l.type === 'keydown' || l.type === 'keyup' ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === 'keypress'
          ? pe(l)
          : l.type === 'keydown' || l.type === 'keyup'
          ? l.keyCode
          : 0;
      },
    }),
    kv = Ql($v),
    Fv = p({}, Ye, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xi = Ql(Fv),
    Iv = p({}, Ua, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cf,
    }),
    Pv = Ql(Iv),
    ly = p({}, Su, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ty = Ql(ly),
    uy = p({}, Ye, {
      deltaX: function (l) {
        return 'deltaX' in l
          ? l.deltaX
          : 'wheelDeltaX' in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return 'deltaY' in l
          ? l.deltaY
          : 'wheelDeltaY' in l
          ? -l.wheelDeltaY
          : 'wheelDelta' in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ay = Ql(uy),
    ey = p({}, Su, { newState: 0, oldState: 0 }),
    ny = Ql(ey),
    fy = [9, 13, 27, 32],
    sf = Ut && 'CompositionEvent' in window,
    Na = null;
  Ut && 'documentMode' in document && (Na = document.documentMode);
  var cy = Ut && 'TextEvent' in window && !Na,
    Gi = Ut && (!sf || (Na && 8 < Na && 11 >= Na)),
    ji = ' ',
    Xi = !1;
  function Qi(l, t) {
    switch (l) {
      case 'keyup':
        return fy.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Zi(l) {
    return (l = l.detail), typeof l == 'object' && 'data' in l ? l.data : null;
  }
  var Ku = !1;
  function iy(l, t) {
    switch (l) {
      case 'compositionend':
        return Zi(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Xi = !0), ji);
      case 'textInput':
        return (l = t.data), l === ji && Xi ? null : l;
      default:
        return null;
    }
  }
  function sy(l, t) {
    if (Ku)
      return l === 'compositionend' || (!sf && Qi(l, t))
        ? ((l = Hi()), (Ne = af = Kt = null), (Ku = !1), l)
        : null;
    switch (l) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Gi && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var dy = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ci(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === 'input' ? !!dy[l.type] : t === 'textarea';
  }
  function Vi(l, t, u, a) {
    Vu ? (Lu ? Lu.push(a) : (Lu = [a])) : (Vu = a),
      (t = En(t, 'onChange')),
      0 < t.length &&
        ((u = new qe('onChange', 'change', null, u, a)),
        l.push({ event: u, listeners: t }));
  }
  var pa = null,
    Ha = null;
  function vy(l) {
    Ad(l, 0);
  }
  function Be(l) {
    var t = Oa(l);
    if (zi(t)) return l;
  }
  function Li(l, t) {
    if (l === 'change') return t;
  }
  var Ki = !1;
  if (Ut) {
    var df;
    if (Ut) {
      var vf = 'oninput' in document;
      if (!vf) {
        var Ji = document.createElement('div');
        Ji.setAttribute('oninput', 'return;'),
          (vf = typeof Ji.oninput == 'function');
      }
      df = vf;
    } else df = !1;
    Ki = df && (!document.documentMode || 9 < document.documentMode);
  }
  function wi() {
    pa && (pa.detachEvent('onpropertychange', Wi), (Ha = pa = null));
  }
  function Wi(l) {
    if (l.propertyName === 'value' && Be(Ha)) {
      var t = [];
      Vi(t, Ha, l, lf(l)), pi(vy, t);
    }
  }
  function yy(l, t, u) {
    l === 'focusin'
      ? (wi(), (pa = t), (Ha = u), pa.attachEvent('onpropertychange', Wi))
      : l === 'focusout' && wi();
  }
  function oy(l) {
    if (l === 'selectionchange' || l === 'keyup' || l === 'keydown')
      return Be(Ha);
  }
  function hy(l, t) {
    if (l === 'click') return Be(t);
  }
  function ry(l, t) {
    if (l === 'input' || l === 'change') return Be(t);
  }
  function my(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var kl = typeof Object.is == 'function' ? Object.is : my;
  function qa(l, t) {
    if (kl(l, t)) return !0;
    if (
      typeof l != 'object' ||
      l === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var u = Object.keys(l),
      a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Xn.call(t, e) || !kl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function $i(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ki(l, t) {
    var u = $i(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (((a = l + u.textContent.length), l <= t && a >= t))
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = $i(u);
    }
  }
  function Fi(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Fi(l, t.parentNode)
        : 'contains' in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ii(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == 'string';
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function yf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (l.type === 'text' ||
          l.type === 'search' ||
          l.type === 'tel' ||
          l.type === 'url' ||
          l.type === 'password')) ||
        t === 'textarea' ||
        l.contentEditable === 'true')
    );
  }
  var gy = Ut && 'documentMode' in document && 11 >= document.documentMode,
    Ju = null,
    of = null,
    Ya = null,
    hf = !1;
  function Pi(l, t, u) {
    var a =
      u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    hf ||
      Ju == null ||
      Ju !== Ue(a) ||
      ((a = Ju),
      'selectionStart' in a && yf(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ya && qa(Ya, a)) ||
        ((Ya = a),
        (a = En(of, 'onSelect')),
        0 < a.length &&
          ((t = new qe('onSelect', 'select', null, t, u)),
          l.push({ event: t, listeners: a }),
          (t.target = Ju))));
  }
  function bu(l, t) {
    var u = {};
    return (
      (u[l.toLowerCase()] = t.toLowerCase()),
      (u['Webkit' + l] = 'webkit' + t),
      (u['Moz' + l] = 'moz' + t),
      u
    );
  }
  var wu = {
      animationend: bu('Animation', 'AnimationEnd'),
      animationiteration: bu('Animation', 'AnimationIteration'),
      animationstart: bu('Animation', 'AnimationStart'),
      transitionrun: bu('Transition', 'TransitionRun'),
      transitionstart: bu('Transition', 'TransitionStart'),
      transitioncancel: bu('Transition', 'TransitionCancel'),
      transitionend: bu('Transition', 'TransitionEnd'),
    },
    rf = {},
    ls = {};
  Ut &&
    ((ls = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete wu.animationend.animation,
      delete wu.animationiteration.animation,
      delete wu.animationstart.animation),
    'TransitionEvent' in window || delete wu.transitionend.transition);
  function Tu(l) {
    if (rf[l]) return rf[l];
    if (!wu[l]) return l;
    var t = wu[l],
      u;
    for (u in t) if (t.hasOwnProperty(u) && u in ls) return (rf[l] = t[u]);
    return l;
  }
  var ts = Tu('animationend'),
    us = Tu('animationiteration'),
    as = Tu('animationstart'),
    Sy = Tu('transitionrun'),
    by = Tu('transitionstart'),
    Ty = Tu('transitioncancel'),
    es = Tu('transitionend'),
    ns = new Map(),
    mf =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  mf.push('scrollEnd');
  function ht(l, t) {
    ns.set(l, t), gu(t, [l]);
  }
  var fs = new WeakMap();
  function nt(l, t) {
    if (typeof l == 'object' && l !== null) {
      var u = fs.get(l);
      return u !== void 0
        ? u
        : ((t = { value: l, source: t, stack: _i(t) }), fs.set(l, t), t);
    }
    return { value: l, source: t, stack: _i(t) };
  }
  var ft = [],
    Wu = 0,
    gf = 0;
  function xe() {
    for (var l = Wu, t = (gf = Wu = 0); t < l; ) {
      var u = ft[t];
      ft[t++] = null;
      var a = ft[t];
      ft[t++] = null;
      var e = ft[t];
      ft[t++] = null;
      var n = ft[t];
      if (((ft[t++] = null), a !== null && e !== null)) {
        var f = a.pending;
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
          (a.pending = e);
      }
      n !== 0 && cs(u, e, n);
    }
  }
  function Ge(l, t, u, a) {
    (ft[Wu++] = l),
      (ft[Wu++] = t),
      (ft[Wu++] = u),
      (ft[Wu++] = a),
      (gf |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function Sf(l, t, u, a) {
    return Ge(l, t, u, a), je(l);
  }
  function $u(l, t) {
    return Ge(l, null, null, t), je(l);
  }
  function cs(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= u),
        (a = n.alternate),
        a !== null && (a.childLanes |= u),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - $l(u)),
          (l = n.hiddenUpdates),
          (a = l[e]),
          a === null ? (l[e] = [t]) : a.push(t),
          (t.lane = u | 536870912)),
        n)
      : null;
  }
  function je(l) {
    if (50 < ne) throw ((ne = 0), (zc = null), Error(h(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ku = {};
  function Ey(l, t, u, a) {
    (this.tag = l),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Fl(l, t, u, a) {
    return new Ey(l, t, u, a);
  }
  function bf(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Rt(l, t) {
    var u = l.alternate;
    return (
      u === null
        ? ((u = Fl(l.tag, t, l.key, l.mode)),
          (u.elementType = l.elementType),
          (u.type = l.type),
          (u.stateNode = l.stateNode),
          (u.alternate = l),
          (l.alternate = u))
        : ((u.pendingProps = t),
          (u.type = l.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = l.flags & 65011712),
      (u.childLanes = l.childLanes),
      (u.lanes = l.lanes),
      (u.child = l.child),
      (u.memoizedProps = l.memoizedProps),
      (u.memoizedState = l.memoizedState),
      (u.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (u.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (u.sibling = l.sibling),
      (u.index = l.index),
      (u.ref = l.ref),
      (u.refCleanup = l.refCleanup),
      u
    );
  }
  function is(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return (
      u === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = u.childLanes),
          (l.lanes = u.lanes),
          (l.child = u.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = u.memoizedProps),
          (l.memoizedState = u.memoizedState),
          (l.updateQueue = u.updateQueue),
          (l.type = u.type),
          (t = u.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Xe(l, t, u, a, e, n) {
    var f = 0;
    if (((a = l), typeof l == 'function')) bf(l) && (f = 1);
    else if (typeof l == 'string')
      f = zo(l, u, q.current)
        ? 26
        : l === 'html' || l === 'head' || l === 'body'
        ? 27
        : 5;
    else
      l: switch (l) {
        case gt:
          return (l = Fl(31, u, t, e)), (l.elementType = gt), (l.lanes = n), l;
        case W:
          return Eu(u.children, e, n, t);
        case pl:
          (f = 8), (e |= 24);
          break;
        case Ml:
          return (
            (l = Fl(12, u, t, e | 2)), (l.elementType = Ml), (l.lanes = n), l
          );
        case $:
          return (l = Fl(13, u, t, e)), (l.elementType = $), (l.lanes = n), l;
        case Ll:
          return (l = Fl(19, u, t, e)), (l.elementType = Ll), (l.lanes = n), l;
        default:
          if (typeof l == 'object' && l !== null)
            switch (l.$$typeof) {
              case zt:
              case Hl:
                f = 10;
                break l;
              case Ot:
                f = 9;
                break l;
              case ot:
                f = 11;
                break l;
              case Kl:
                f = 14;
                break l;
              case Jl:
                (f = 16), (a = null);
                break l;
            }
          (f = 29),
            (u = Error(h(130, l === null ? 'null' : typeof l, ''))),
            (a = null);
      }
    return (
      (t = Fl(f, u, t, e)), (t.elementType = l), (t.type = a), (t.lanes = n), t
    );
  }
  function Eu(l, t, u, a) {
    return (l = Fl(7, l, a, t)), (l.lanes = u), l;
  }
  function Tf(l, t, u) {
    return (l = Fl(6, l, null, t)), (l.lanes = u), l;
  }
  function Ef(l, t, u) {
    return (
      (t = Fl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = u),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Fu = [],
    Iu = 0,
    Qe = null,
    Ze = 0,
    ct = [],
    it = 0,
    _u = null,
    Nt = 1,
    pt = '';
  function Au(l, t) {
    (Fu[Iu++] = Ze), (Fu[Iu++] = Qe), (Qe = l), (Ze = t);
  }
  function ss(l, t, u) {
    (ct[it++] = Nt), (ct[it++] = pt), (ct[it++] = _u), (_u = l);
    var a = Nt;
    l = pt;
    var e = 32 - $l(a) - 1;
    (a &= ~(1 << e)), (u += 1);
    var n = 32 - $l(t) + e;
    if (30 < n) {
      var f = e - (e % 5);
      (n = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (e -= f),
        (Nt = (1 << (32 - $l(t) + e)) | (u << e) | a),
        (pt = n + l);
    } else (Nt = (1 << n) | (u << e) | a), (pt = l);
  }
  function _f(l) {
    l.return !== null && (Au(l, 1), ss(l, 1, 0));
  }
  function Af(l) {
    for (; l === Qe; )
      (Qe = Fu[--Iu]), (Fu[Iu] = null), (Ze = Fu[--Iu]), (Fu[Iu] = null);
    for (; l === _u; )
      (_u = ct[--it]),
        (ct[it] = null),
        (pt = ct[--it]),
        (ct[it] = null),
        (Nt = ct[--it]),
        (ct[it] = null);
  }
  var jl = null,
    hl = null,
    P = !1,
    zu = null,
    bt = !1,
    zf = Error(h(519));
  function Ou(l) {
    var t = Error(h(418, ''));
    throw (Ga(nt(t, l)), zf);
  }
  function ds(l) {
    var t = l.stateNode,
      u = l.type,
      a = l.memoizedProps;
    switch (((t[Bl] = l), (t[Xl] = a), u)) {
      case 'dialog':
        J('cancel', t), J('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        J('load', t);
        break;
      case 'video':
      case 'audio':
        for (u = 0; u < ce.length; u++) J(ce[u], t);
        break;
      case 'source':
        J('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        J('error', t), J('load', t);
        break;
      case 'details':
        J('toggle', t);
        break;
      case 'input':
        J('invalid', t),
          Oi(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Me(t);
        break;
      case 'select':
        J('invalid', t);
        break;
      case 'textarea':
        J('invalid', t), Mi(t, a.value, a.defaultValue, a.children), Me(t);
    }
    (u = a.children),
      (typeof u != 'string' && typeof u != 'number' && typeof u != 'bigint') ||
      t.textContent === '' + u ||
      a.suppressHydrationWarning === !0 ||
      Md(t.textContent, u)
        ? (a.popover != null && (J('beforetoggle', t), J('toggle', t)),
          a.onScroll != null && J('scroll', t),
          a.onScrollEnd != null && J('scrollend', t),
          a.onClick != null && (t.onclick = _n),
          (t = !0))
        : (t = !1),
      t || Ou(l);
  }
  function vs(l) {
    for (jl = l.return; jl; )
      switch (jl.tag) {
        case 5:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          jl = jl.return;
      }
  }
  function Ba(l) {
    if (l !== jl) return !1;
    if (!P) return vs(l), (P = !0), !1;
    var t = l.tag,
      u;
    if (
      ((u = t !== 3 && t !== 27) &&
        ((u = t === 5) &&
          ((u = l.type),
          (u =
            !(u !== 'form' && u !== 'button') || Qc(l.type, l.memoizedProps))),
        (u = !u)),
      u && hl && Ou(l),
      vs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((u = l.data), u === '/$')) {
              if (t === 0) {
                hl = mt(l.nextSibling);
                break l;
              }
              t--;
            } else (u !== '$' && u !== '$!' && u !== '$?') || t++;
          l = l.nextSibling;
        }
        hl = null;
      }
    } else
      t === 27
        ? ((t = hl), cu(l.type) ? ((l = Lc), (Lc = null), (hl = l)) : (hl = t))
        : (hl = jl ? mt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function xa() {
    (hl = jl = null), (P = !1);
  }
  function ys() {
    var l = zu;
    return (
      l !== null &&
        (Vl === null ? (Vl = l) : Vl.push.apply(Vl, l), (zu = null)),
      l
    );
  }
  function Ga(l) {
    zu === null ? (zu = [l]) : zu.push(l);
  }
  var Of = _(null),
    Du = null,
    Ht = null;
  function Jt(l, t, u) {
    z(Of, t._currentValue), (t._currentValue = u);
  }
  function qt(l) {
    (l._currentValue = Of.current), D(Of);
  }
  function Df(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === u)
      )
        break;
      l = l.return;
    }
  }
  function Mf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              (n.lanes |= u),
                (c = n.alternate),
                c !== null && (c.lanes |= u),
                Df(n.return, u, l),
                a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (((f = e.return), f === null)) throw Error(h(341));
        (f.lanes |= u),
          (n = f.alternate),
          n !== null && (n.lanes |= u),
          Df(f, u, l),
          (f = null);
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (((e = f.sibling), e !== null)) {
            (e.return = f.return), (f = e);
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function ja(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (((f = f.memoizedProps), f !== null)) {
          var c = e.type;
          kl(e.pendingProps.value, f.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (e === wl.current) {
        if (((f = e.alternate), f === null)) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(oe) : (l = [oe]));
      }
      e = e.return;
    }
    l !== null && Mf(t, l, u, a), (t.flags |= 262144);
  }
  function Ce(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!kl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Mu(l) {
    (Du = l),
      (Ht = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function xl(l) {
    return os(Du, l);
  }
  function Ve(l, t) {
    return Du === null && Mu(l), os(l, t);
  }
  function os(l, t) {
    var u = t._currentValue;
    if (((t = { context: t, memoizedValue: u, next: null }), Ht === null)) {
      if (l === null) throw Error(h(308));
      (Ht = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Ht = Ht.next = t;
    return u;
  }
  var _y =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (u, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (u) {
                  return u();
                });
            };
          },
    Ay = A.unstable_scheduleCallback,
    zy = A.unstable_NormalPriority,
    El = {
      $$typeof: Hl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Uf() {
    return { controller: new _y(), data: new Map(), refCount: 0 };
  }
  function Xa(l) {
    l.refCount--,
      l.refCount === 0 &&
        Ay(zy, function () {
          l.controller.abort();
        });
  }
  var Qa = null,
    Rf = 0,
    Pu = 0,
    la = null;
  function Oy(l, t) {
    if (Qa === null) {
      var u = (Qa = []);
      (Rf = 0),
        (Pu = pc()),
        (la = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            u.push(a);
          },
        });
    }
    return Rf++, t.then(hs, hs), t;
  }
  function hs() {
    if (--Rf === 0 && Qa !== null) {
      la !== null && (la.status = 'fulfilled');
      var l = Qa;
      (Qa = null), (Pu = 0), (la = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Dy(l, t) {
    var u = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (e) {
          u.push(e);
        },
      };
    return (
      l.then(
        function () {
          (a.status = 'fulfilled'), (a.value = t);
          for (var e = 0; e < u.length; e++) (0, u[e])(t);
        },
        function (e) {
          for (a.status = 'rejected', a.reason = e, e = 0; e < u.length; e++)
            (0, u[e])(void 0);
        }
      ),
      a
    );
  }
  var rs = S.S;
  S.S = function (l, t) {
    typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      Oy(l, t),
      rs !== null && rs(l, t);
  };
  var Uu = _(null);
  function Nf() {
    var l = Uu.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Le(l, t) {
    t === null ? z(Uu, Uu.current) : z(Uu, t.pool);
  }
  function ms() {
    var l = Nf();
    return l === null ? null : { parent: El._currentValue, pool: l };
  }
  var Za = Error(h(460)),
    gs = Error(h(474)),
    Ke = Error(h(542)),
    pf = { then: function () {} };
  function Ss(l) {
    return (l = l.status), l === 'fulfilled' || l === 'rejected';
  }
  function Je() {}
  function bs(l, t, u) {
    switch (
      ((u = l[u]),
      u === void 0 ? l.push(t) : u !== t && (t.then(Je, Je), (t = u)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((l = t.reason), Es(l), l);
      default:
        if (typeof t.status == 'string') t.then(Je, Je);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(h(482));
          (l = t),
            (l.status = 'pending'),
            l.then(
              function (a) {
                if (t.status === 'pending') {
                  var e = t;
                  (e.status = 'fulfilled'), (e.value = a);
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var e = t;
                  (e.status = 'rejected'), (e.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((l = t.reason), Es(l), l);
        }
        throw ((Ca = t), Za);
    }
  }
  var Ca = null;
  function Ts() {
    if (Ca === null) throw Error(h(459));
    var l = Ca;
    return (Ca = null), l;
  }
  function Es(l) {
    if (l === Za || l === Ke) throw Error(h(483));
  }
  var wt = !1;
  function Hf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qf(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function Wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function $t(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ll & 2) !== 0)) {
      var e = a.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (a.pending = t),
        (t = je(l)),
        cs(l, null, u),
        t
      );
    }
    return Ge(l, a, t, u), je(l);
  }
  function Va(l, t, u) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (u & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), hi(l, u);
    }
  }
  function Yf(l, t) {
    var u = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), u === a)) {
      var e = null,
        n = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = f) : (n = n.next = f), (u = u.next);
        } while (u !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = u);
      return;
    }
    (l = u.lastBaseUpdate),
      l === null ? (u.firstBaseUpdate = t) : (l.next = t),
      (u.lastBaseUpdate = t);
  }
  var Bf = !1;
  function La() {
    if (Bf) {
      var l = la;
      if (l !== null) throw l;
    }
  }
  function Ka(l, t, u, a) {
    Bf = !1;
    var e = l.updateQueue;
    wt = !1;
    var n = e.firstBaseUpdate,
      f = e.lastBaseUpdate,
      c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c,
        o = i.next;
      (i.next = null), f === null ? (n = o) : (f.next = o), (f = i);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (c = g.lastBaseUpdate),
        c !== f &&
          (c === null ? (g.firstBaseUpdate = o) : (c.next = o),
          (g.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var T = e.baseState;
      (f = 0), (g = o = i = null), (c = n);
      do {
        var r = c.lane & -536870913,
          m = r !== c.lane;
        if (m ? (w & r) === r : (a & r) === r) {
          r !== 0 && r === Pu && (Bf = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var G = l,
              Y = c;
            r = t;
            var nl = u;
            switch (Y.tag) {
              case 1:
                if (((G = Y.payload), typeof G == 'function')) {
                  T = G.call(nl, T, r);
                  break l;
                }
                T = G;
                break l;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Y.payload),
                  (r = typeof G == 'function' ? G.call(nl, T, r) : G),
                  r == null)
                )
                  break l;
                T = p({}, T, r);
                break l;
              case 2:
                wt = !0;
            }
          }
          (r = c.callback),
            r !== null &&
              ((l.flags |= 64),
              m && (l.flags |= 8192),
              (m = e.callbacks),
              m === null ? (e.callbacks = [r]) : m.push(r));
        } else
          (m = {
            lane: r,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            g === null ? ((o = g = m), (i = T)) : (g = g.next = m),
            (f |= r);
        if (((c = c.next), c === null)) {
          if (((c = e.shared.pending), c === null)) break;
          (m = c),
            (c = m.next),
            (m.next = null),
            (e.lastBaseUpdate = m),
            (e.shared.pending = null);
        }
      } while (!0);
      g === null && (i = T),
        (e.baseState = i),
        (e.firstBaseUpdate = o),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (au |= f),
        (l.lanes = f),
        (l.memoizedState = T);
    }
  }
  function _s(l, t) {
    if (typeof l != 'function') throw Error(h(191, l));
    l.call(t);
  }
  function As(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++) _s(u[l], t);
  }
  var ta = _(null),
    we = _(0);
  function zs(l, t) {
    (l = Qt), z(we, l), z(ta, t), (Qt = l | t.baseLanes);
  }
  function xf() {
    z(we, Qt), z(ta, ta.current);
  }
  function Gf() {
    (Qt = we.current), D(ta), D(we);
  }
  var kt = 0,
    C = null,
    al = null,
    bl = null,
    We = !1,
    ua = !1,
    Ru = !1,
    $e = 0,
    Ja = 0,
    aa = null,
    My = 0;
  function ml() {
    throw Error(h(321));
  }
  function jf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!kl(l[u], t[u])) return !1;
    return !0;
  }
  function Xf(l, t, u, a, e, n) {
    return (
      (kt = n),
      (C = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? c0 : i0),
      (Ru = !1),
      (n = u(a, e)),
      (Ru = !1),
      ua && (n = Ds(t, u, a, e)),
      Os(l),
      n
    );
  }
  function Os(l) {
    S.H = tn;
    var t = al !== null && al.next !== null;
    if (((kt = 0), (bl = al = C = null), (We = !1), (Ja = 0), (aa = null), t))
      throw Error(h(300));
    l === null ||
      zl ||
      ((l = l.dependencies), l !== null && Ce(l) && (zl = !0));
  }
  function Ds(l, t, u, a) {
    C = l;
    var e = 0;
    do {
      if ((ua && (aa = null), (Ja = 0), (ua = !1), 25 <= e))
        throw Error(h(301));
      if (((e += 1), (bl = al = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = Yy), (n = t(u, a));
    } while (ua);
    return n;
  }
  function Uy() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == 'function' ? wa(t) : t),
      (l = l.useState()[0]),
      (al !== null ? al.memoizedState : null) !== l && (C.flags |= 1024),
      t
    );
  }
  function Qf() {
    var l = $e !== 0;
    return ($e = 0), l;
  }
  function Zf(l, t, u) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~u);
  }
  function Cf(l) {
    if (We) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      We = !1;
    }
    (kt = 0), (bl = al = C = null), (ua = !1), (Ja = $e = 0), (aa = null);
  }
  function Zl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return bl === null ? (C.memoizedState = bl = l) : (bl = bl.next = l), bl;
  }
  function Tl() {
    if (al === null) {
      var l = C.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = bl === null ? C.memoizedState : bl.next;
    if (t !== null) (bl = t), (al = l);
    else {
      if (l === null)
        throw C.alternate === null ? Error(h(467)) : Error(h(310));
      (al = l),
        (l = {
          memoizedState: al.memoizedState,
          baseState: al.baseState,
          baseQueue: al.baseQueue,
          queue: al.queue,
          next: null,
        }),
        bl === null ? (C.memoizedState = bl = l) : (bl = bl.next = l);
    }
    return bl;
  }
  function Vf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wa(l) {
    var t = Ja;
    return (
      (Ja += 1),
      aa === null && (aa = []),
      (l = bs(aa, l, t)),
      (t = C),
      (bl === null ? t.memoizedState : bl.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? c0 : i0)),
      l
    );
  }
  function ke(l) {
    if (l !== null && typeof l == 'object') {
      if (typeof l.then == 'function') return wa(l);
      if (l.$$typeof === Hl) return xl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Lf(l) {
    var t = null,
      u = C.updateQueue;
    if ((u !== null && (t = u.memoCache), t == null)) {
      var a = C.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      u === null && ((u = Vf()), (C.updateQueue = u)),
      (u.memoCache = t),
      (u = t.data[t.index]),
      u === void 0)
    )
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Yu;
    return t.index++, u;
  }
  function Yt(l, t) {
    return typeof t == 'function' ? t(l) : t;
  }
  function Fe(l) {
    var t = Tl();
    return Kf(t, al, l);
  }
  function Kf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        (e.next = n.next), (n.next = f);
      }
      (t.baseQueue = e = n), (a.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var c = (f = null),
        i = null,
        o = t,
        g = !1;
      do {
        var T = o.lane & -536870913;
        if (T !== o.lane ? (w & T) === T : (kt & T) === T) {
          var r = o.revertLane;
          if (r === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: o.action,
                  hasEagerState: o.hasEagerState,
                  eagerState: o.eagerState,
                  next: null,
                }),
              T === Pu && (g = !0);
          else if ((kt & r) === r) {
            (o = o.next), r === Pu && (g = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: o.revertLane,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null,
            }),
              i === null ? ((c = i = T), (f = n)) : (i = i.next = T),
              (C.lanes |= r),
              (au |= r);
          (T = o.action),
            Ru && u(n, T),
            (n = o.hasEagerState ? o.eagerState : u(n, T));
        } else
          (r = {
            lane: T,
            revertLane: o.revertLane,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null,
          }),
            i === null ? ((c = i = r), (f = n)) : (i = i.next = r),
            (C.lanes |= T),
            (au |= T);
        o = o.next;
      } while (o !== null && o !== t);
      if (
        (i === null ? (f = n) : (i.next = c),
        !kl(n, l.memoizedState) && ((zl = !0), g && ((u = la), u !== null)))
      )
        throw u;
      (l.memoizedState = n),
        (l.baseState = f),
        (l.baseQueue = i),
        (a.lastRenderedState = n);
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Jf(l) {
    var t = Tl(),
      u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch,
      e = u.pending,
      n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = (e = e.next);
      do (n = l(n, f.action)), (f = f.next);
      while (f !== e);
      kl(n, t.memoizedState) || (zl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (u.lastRenderedState = n);
    }
    return [n, a];
  }
  function Ms(l, t, u) {
    var a = C,
      e = Tl(),
      n = P;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !kl((al || e).memoizedState, u);
    f && ((e.memoizedState = u), (zl = !0)), (e = e.queue);
    var c = Ns.bind(null, a, e, l);
    if (
      (Wa(2048, 8, c, [l]),
      e.getSnapshot !== t || f || (bl !== null && bl.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ea(9, Ie(), Rs.bind(null, a, e, u, t), null),
        sl === null)
      )
        throw Error(h(349));
      n || (kt & 124) !== 0 || Us(a, t, u);
    }
    return u;
  }
  function Us(l, t, u) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: u }),
      (t = C.updateQueue),
      t === null
        ? ((t = Vf()), (C.updateQueue = t), (t.stores = [l]))
        : ((u = t.stores), u === null ? (t.stores = [l]) : u.push(l));
  }
  function Rs(l, t, u, a) {
    (t.value = u), (t.getSnapshot = a), ps(t) && Hs(l);
  }
  function Ns(l, t, u) {
    return u(function () {
      ps(t) && Hs(l);
    });
  }
  function ps(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !kl(l, u);
    } catch {
      return !0;
    }
  }
  function Hs(l) {
    var t = $u(l, 2);
    t !== null && ut(t, l, 2);
  }
  function wf(l) {
    var t = Zl();
    if (typeof l == 'function') {
      var u = l;
      if (((l = u()), Ru)) {
        Vt(!0);
        try {
          u();
        } finally {
          Vt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function qs(l, t, u, a) {
    return (l.baseState = u), Kf(l, al, typeof a == 'function' ? a : Yt);
  }
  function Ry(l, t, u, a, e) {
    if (ln(l)) throw Error(h(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          n.listeners.push(f);
        },
      };
      S.T !== null ? u(!0) : (n.isTransition = !1),
        a(n),
        (u = t.pending),
        u === null
          ? ((n.next = t.pending = n), Ys(t, n))
          : ((n.next = u.next), (t.pending = u.next = n));
    }
  }
  function Ys(l, t) {
    var u = t.action,
      a = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = S.T,
        f = {};
      S.T = f;
      try {
        var c = u(e, a),
          i = S.S;
        i !== null && i(f, c), Bs(l, t, c);
      } catch (o) {
        Wf(l, t, o);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = u(e, a)), Bs(l, t, n);
      } catch (o) {
        Wf(l, t, o);
      }
  }
  function Bs(l, t, u) {
    u !== null && typeof u == 'object' && typeof u.then == 'function'
      ? u.then(
          function (a) {
            xs(l, t, a);
          },
          function (a) {
            return Wf(l, t, a);
          }
        )
      : xs(l, t, u);
  }
  function xs(l, t, u) {
    (t.status = 'fulfilled'),
      (t.value = u),
      Gs(t),
      (l.state = u),
      (t = l.pending),
      t !== null &&
        ((u = t.next),
        u === t ? (l.pending = null) : ((u = u.next), (t.next = u), Ys(l, u)));
  }
  function Wf(l, t, u) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = 'rejected'), (t.reason = u), Gs(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function Gs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function js(l, t) {
    return t;
  }
  function Xs(l, t) {
    if (P) {
      var u = sl.formState;
      if (u !== null) {
        l: {
          var a = C;
          if (P) {
            if (hl) {
              t: {
                for (var e = hl, n = bt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = mt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === 'F!' || n === 'F' ? e : null);
              }
              if (e) {
                (hl = mt(e.nextSibling)), (a = e.data === 'F!');
                break l;
              }
            }
            Ou(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return (
      (u = Zl()),
      (u.memoizedState = u.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: js,
        lastRenderedState: t,
      }),
      (u.queue = a),
      (u = e0.bind(null, C, a)),
      (a.dispatch = u),
      (a = wf(!1)),
      (n = Pf.bind(null, C, !1, a.queue)),
      (a = Zl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = e),
      (u = Ry.bind(null, C, e, n, u)),
      (e.dispatch = u),
      (a.memoizedState = l),
      [t, u, !1]
    );
  }
  function Qs(l) {
    var t = Tl();
    return Zs(t, al, l);
  }
  function Zs(l, t, u) {
    if (
      ((t = Kf(l, t, js)[0]),
      (l = Fe(Yt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = wa(t);
      } catch (f) {
        throw f === Za ? Ke : f;
      }
    else a = t;
    t = Tl();
    var e = t.queue,
      n = e.dispatch;
    return (
      u !== t.memoizedState &&
        ((C.flags |= 2048), ea(9, Ie(), Ny.bind(null, e, u), null)),
      [a, n, l]
    );
  }
  function Ny(l, t) {
    l.action = t;
  }
  function Cs(l) {
    var t = Tl(),
      u = al;
    if (u !== null) return Zs(t, u, l);
    Tl(), (t = t.memoizedState), (u = Tl());
    var a = u.queue.dispatch;
    return (u.memoizedState = l), [t, a, !1];
  }
  function ea(l, t, u, a) {
    return (
      (l = { tag: l, create: u, deps: a, inst: t, next: null }),
      (t = C.updateQueue),
      t === null && ((t = Vf()), (C.updateQueue = t)),
      (u = t.lastEffect),
      u === null
        ? (t.lastEffect = l.next = l)
        : ((a = u.next), (u.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function Ie() {
    return { destroy: void 0, resource: void 0 };
  }
  function Vs() {
    return Tl().memoizedState;
  }
  function Pe(l, t, u, a) {
    var e = Zl();
    (a = a === void 0 ? null : a),
      (C.flags |= l),
      (e.memoizedState = ea(1 | t, Ie(), u, a));
  }
  function Wa(l, t, u, a) {
    var e = Tl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    al !== null && a !== null && jf(a, al.memoizedState.deps)
      ? (e.memoizedState = ea(t, n, u, a))
      : ((C.flags |= l), (e.memoizedState = ea(1 | t, n, u, a)));
  }
  function Ls(l, t) {
    Pe(8390656, 8, l, t);
  }
  function Ks(l, t) {
    Wa(2048, 8, l, t);
  }
  function Js(l, t) {
    return Wa(4, 2, l, t);
  }
  function ws(l, t) {
    return Wa(4, 4, l, t);
  }
  function Ws(l, t) {
    if (typeof t == 'function') {
      l = l();
      var u = t(l);
      return function () {
        typeof u == 'function' ? u() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function $s(l, t, u) {
    (u = u != null ? u.concat([l]) : null), Wa(4, 4, Ws.bind(null, t, l), u);
  }
  function $f() {}
  function ks(l, t) {
    var u = Tl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && jf(t, a[1]) ? a[0] : ((u.memoizedState = [l, t]), l);
  }
  function Fs(l, t) {
    var u = Tl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && jf(t, a[1])) return a[0];
    if (((a = l()), Ru)) {
      Vt(!0);
      try {
        l();
      } finally {
        Vt(!1);
      }
    }
    return (u.memoizedState = [a, t]), a;
  }
  function kf(l, t, u) {
    return u === void 0 || (kt & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = u), (l = ld()), (C.lanes |= l), (au |= l), u);
  }
  function Is(l, t, u, a) {
    return kl(u, t)
      ? u
      : ta.current !== null
      ? ((l = kf(l, u, a)), kl(l, t) || (zl = !0), l)
      : (kt & 42) === 0
      ? ((zl = !0), (l.memoizedState = u))
      : ((l = ld()), (C.lanes |= l), (au |= l), t);
  }
  function Ps(l, t, u, a, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T,
      c = {};
    (S.T = c), Pf(l, !1, t, u);
    try {
      var i = e(),
        o = S.S;
      if (
        (o !== null && o(c, i),
        i !== null && typeof i == 'object' && typeof i.then == 'function')
      ) {
        var g = Dy(i, a);
        $a(l, t, g, tt(l));
      } else $a(l, t, a, tt(l));
    } catch (T) {
      $a(l, t, { then: function () {}, status: 'rejected', reason: T }, tt());
    } finally {
      (O.p = n), (S.T = f);
    }
  }
  function py() {}
  function Ff(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = l0(l).queue;
    Ps(
      l,
      e,
      t,
      x,
      u === null
        ? py
        : function () {
            return t0(l), u(a);
          }
    );
  }
  function l0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: x,
      baseState: x,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: x,
      },
      next: null,
    };
    var u = {};
    return (
      (t.next = {
        memoizedState: u,
        baseState: u,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yt,
          lastRenderedState: u,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function t0(l) {
    var t = l0(l).next.queue;
    $a(l, t, {}, tt());
  }
  function If() {
    return xl(oe);
  }
  function u0() {
    return Tl().memoizedState;
  }
  function a0() {
    return Tl().memoizedState;
  }
  function Hy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = tt();
          l = Wt(u);
          var a = $t(t, l, u);
          a !== null && (ut(a, t, u), Va(a, t, u)),
            (t = { cache: Uf() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function qy(l, t, u) {
    var a = tt();
    (u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ln(l)
        ? n0(t, u)
        : ((u = Sf(l, t, u, a)), u !== null && (ut(u, l, a), f0(u, t, a)));
  }
  function e0(l, t, u) {
    var a = tt();
    $a(l, t, u, a);
  }
  function $a(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ln(l)) n0(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var f = t.lastRenderedState,
            c = n(f, u);
          if (((e.hasEagerState = !0), (e.eagerState = c), kl(c, f)))
            return Ge(l, t, e, 0), sl === null && xe(), !1;
        } catch {
        } finally {
        }
      if (((u = Sf(l, t, e, a)), u !== null))
        return ut(u, l, a), f0(u, t, a), !0;
    }
    return !1;
  }
  function Pf(l, t, u, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: pc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ln(l))
    ) {
      if (t) throw Error(h(479));
    } else (t = Sf(l, u, a, 2)), t !== null && ut(t, l, 2);
  }
  function ln(l) {
    var t = l.alternate;
    return l === C || (t !== null && t === C);
  }
  function n0(l, t) {
    ua = We = !0;
    var u = l.pending;
    u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
      (l.pending = t);
  }
  function f0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), hi(l, u);
    }
  }
  var tn = {
      readContext: xl,
      use: ke,
      useCallback: ml,
      useContext: ml,
      useEffect: ml,
      useImperativeHandle: ml,
      useLayoutEffect: ml,
      useInsertionEffect: ml,
      useMemo: ml,
      useReducer: ml,
      useRef: ml,
      useState: ml,
      useDebugValue: ml,
      useDeferredValue: ml,
      useTransition: ml,
      useSyncExternalStore: ml,
      useId: ml,
      useHostTransitionStatus: ml,
      useFormState: ml,
      useActionState: ml,
      useOptimistic: ml,
      useMemoCache: ml,
      useCacheRefresh: ml,
    },
    c0 = {
      readContext: xl,
      use: ke,
      useCallback: function (l, t) {
        return (Zl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: xl,
      useEffect: Ls,
      useImperativeHandle: function (l, t, u) {
        (u = u != null ? u.concat([l]) : null),
          Pe(4194308, 4, Ws.bind(null, t, l), u);
      },
      useLayoutEffect: function (l, t) {
        return Pe(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Pe(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var u = Zl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Ru) {
          Vt(!0);
          try {
            l();
          } finally {
            Vt(!1);
          }
        }
        return (u.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, u) {
        var a = Zl();
        if (u !== void 0) {
          var e = u(t);
          if (Ru) {
            Vt(!0);
            try {
              u(t);
            } finally {
              Vt(!1);
            }
          }
        } else e = t;
        return (
          (a.memoizedState = a.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (a.queue = l),
          (l = l.dispatch = qy.bind(null, C, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Zl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = wf(l);
        var t = l.queue,
          u = e0.bind(null, C, t);
        return (t.dispatch = u), [l.memoizedState, u];
      },
      useDebugValue: $f,
      useDeferredValue: function (l, t) {
        var u = Zl();
        return kf(u, l, t);
      },
      useTransition: function () {
        var l = wf(!1);
        return (
          (l = Ps.bind(null, C, l.queue, !0, !1)),
          (Zl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, u) {
        var a = C,
          e = Zl();
        if (P) {
          if (u === void 0) throw Error(h(407));
          u = u();
        } else {
          if (((u = t()), sl === null)) throw Error(h(349));
          (w & 124) !== 0 || Us(a, t, u);
        }
        e.memoizedState = u;
        var n = { value: u, getSnapshot: t };
        return (
          (e.queue = n),
          Ls(Ns.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          ea(9, Ie(), Rs.bind(null, a, n, u, t), null),
          u
        );
      },
      useId: function () {
        var l = Zl(),
          t = sl.identifierPrefix;
        if (P) {
          var u = pt,
            a = Nt;
          (u = (a & ~(1 << (32 - $l(a) - 1))).toString(32) + u),
            (t = '«' + t + 'R' + u),
            (u = $e++),
            0 < u && (t += 'H' + u.toString(32)),
            (t += '»');
        } else (u = My++), (t = '«' + t + 'r' + u.toString(32) + '»');
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: If,
      useFormState: Xs,
      useActionState: Xs,
      useOptimistic: function (l) {
        var t = Zl();
        t.memoizedState = t.baseState = l;
        var u = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = u), (t = Pf.bind(null, C, !0, u)), (u.dispatch = t), [l, t]
        );
      },
      useMemoCache: Lf,
      useCacheRefresh: function () {
        return (Zl().memoizedState = Hy.bind(null, C));
      },
    },
    i0 = {
      readContext: xl,
      use: ke,
      useCallback: ks,
      useContext: xl,
      useEffect: Ks,
      useImperativeHandle: $s,
      useInsertionEffect: Js,
      useLayoutEffect: ws,
      useMemo: Fs,
      useReducer: Fe,
      useRef: Vs,
      useState: function () {
        return Fe(Yt);
      },
      useDebugValue: $f,
      useDeferredValue: function (l, t) {
        var u = Tl();
        return Is(u, al.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Fe(Yt)[0],
          t = Tl().memoizedState;
        return [typeof l == 'boolean' ? l : wa(l), t];
      },
      useSyncExternalStore: Ms,
      useId: u0,
      useHostTransitionStatus: If,
      useFormState: Qs,
      useActionState: Qs,
      useOptimistic: function (l, t) {
        var u = Tl();
        return qs(u, al, l, t);
      },
      useMemoCache: Lf,
      useCacheRefresh: a0,
    },
    Yy = {
      readContext: xl,
      use: ke,
      useCallback: ks,
      useContext: xl,
      useEffect: Ks,
      useImperativeHandle: $s,
      useInsertionEffect: Js,
      useLayoutEffect: ws,
      useMemo: Fs,
      useReducer: Jf,
      useRef: Vs,
      useState: function () {
        return Jf(Yt);
      },
      useDebugValue: $f,
      useDeferredValue: function (l, t) {
        var u = Tl();
        return al === null ? kf(u, l, t) : Is(u, al.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Jf(Yt)[0],
          t = Tl().memoizedState;
        return [typeof l == 'boolean' ? l : wa(l), t];
      },
      useSyncExternalStore: Ms,
      useId: u0,
      useHostTransitionStatus: If,
      useFormState: Cs,
      useActionState: Cs,
      useOptimistic: function (l, t) {
        var u = Tl();
        return al !== null
          ? qs(u, al, l, t)
          : ((u.baseState = l), [l, u.queue.dispatch]);
      },
      useMemoCache: Lf,
      useCacheRefresh: a0,
    },
    na = null,
    ka = 0;
  function un(l) {
    var t = ka;
    return (ka += 1), na === null && (na = []), bs(na, l, t);
  }
  function Fa(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function an(l, t) {
    throw t.$$typeof === fl
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            l === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : l
          )
        ));
  }
  function s0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function d0(l) {
    function t(v, d) {
      if (l) {
        var y = v.deletions;
        y === null ? ((v.deletions = [d]), (v.flags |= 16)) : y.push(d);
      }
    }
    function u(v, d) {
      if (!l) return null;
      for (; d !== null; ) t(v, d), (d = d.sibling);
      return null;
    }
    function a(v) {
      for (var d = new Map(); v !== null; )
        v.key !== null ? d.set(v.key, v) : d.set(v.index, v), (v = v.sibling);
      return d;
    }
    function e(v, d) {
      return (v = Rt(v, d)), (v.index = 0), (v.sibling = null), v;
    }
    function n(v, d, y) {
      return (
        (v.index = y),
        l
          ? ((y = v.alternate),
            y !== null
              ? ((y = y.index), y < d ? ((v.flags |= 67108866), d) : y)
              : ((v.flags |= 67108866), d))
          : ((v.flags |= 1048576), d)
      );
    }
    function f(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, d, y, b) {
      return d === null || d.tag !== 6
        ? ((d = Tf(y, v.mode, b)), (d.return = v), d)
        : ((d = e(d, y)), (d.return = v), d);
    }
    function i(v, d, y, b) {
      var M = y.type;
      return M === W
        ? g(v, d, y.props.children, b, y.key)
        : d !== null &&
          (d.elementType === M ||
            (typeof M == 'object' &&
              M !== null &&
              M.$$typeof === Jl &&
              s0(M) === d.type))
        ? ((d = e(d, y.props)), Fa(d, y), (d.return = v), d)
        : ((d = Xe(y.type, y.key, y.props, null, v.mode, b)),
          Fa(d, y),
          (d.return = v),
          d);
    }
    function o(v, d, y, b) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== y.containerInfo ||
        d.stateNode.implementation !== y.implementation
        ? ((d = Ef(y, v.mode, b)), (d.return = v), d)
        : ((d = e(d, y.children || [])), (d.return = v), d);
    }
    function g(v, d, y, b, M) {
      return d === null || d.tag !== 7
        ? ((d = Eu(y, v.mode, b, M)), (d.return = v), d)
        : ((d = e(d, y)), (d.return = v), d);
    }
    function T(v, d, y) {
      if (
        (typeof d == 'string' && d !== '') ||
        typeof d == 'number' ||
        typeof d == 'bigint'
      )
        return (d = Tf('' + d, v.mode, y)), (d.return = v), d;
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case ul:
            return (
              (y = Xe(d.type, d.key, d.props, null, v.mode, y)),
              Fa(y, d),
              (y.return = v),
              y
            );
          case I:
            return (d = Ef(d, v.mode, y)), (d.return = v), d;
          case Jl:
            var b = d._init;
            return (d = b(d._payload)), T(v, d, y);
        }
        if (Yl(d) || ql(d))
          return (d = Eu(d, v.mode, y, null)), (d.return = v), d;
        if (typeof d.then == 'function') return T(v, un(d), y);
        if (d.$$typeof === Hl) return T(v, Ve(v, d), y);
        an(v, d);
      }
      return null;
    }
    function r(v, d, y, b) {
      var M = d !== null ? d.key : null;
      if (
        (typeof y == 'string' && y !== '') ||
        typeof y == 'number' ||
        typeof y == 'bigint'
      )
        return M !== null ? null : c(v, d, '' + y, b);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case ul:
            return y.key === M ? i(v, d, y, b) : null;
          case I:
            return y.key === M ? o(v, d, y, b) : null;
          case Jl:
            return (M = y._init), (y = M(y._payload)), r(v, d, y, b);
        }
        if (Yl(y) || ql(y)) return M !== null ? null : g(v, d, y, b, null);
        if (typeof y.then == 'function') return r(v, d, un(y), b);
        if (y.$$typeof === Hl) return r(v, d, Ve(v, y), b);
        an(v, y);
      }
      return null;
    }
    function m(v, d, y, b, M) {
      if (
        (typeof b == 'string' && b !== '') ||
        typeof b == 'number' ||
        typeof b == 'bigint'
      )
        return (v = v.get(y) || null), c(d, v, '' + b, M);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case ul:
            return (
              (v = v.get(b.key === null ? y : b.key) || null), i(d, v, b, M)
            );
          case I:
            return (
              (v = v.get(b.key === null ? y : b.key) || null), o(d, v, b, M)
            );
          case Jl:
            var V = b._init;
            return (b = V(b._payload)), m(v, d, y, b, M);
        }
        if (Yl(b) || ql(b)) return (v = v.get(y) || null), g(d, v, b, M, null);
        if (typeof b.then == 'function') return m(v, d, y, un(b), M);
        if (b.$$typeof === Hl) return m(v, d, y, Ve(d, b), M);
        an(d, b);
      }
      return null;
    }
    function G(v, d, y, b) {
      for (
        var M = null, V = null, N = d, B = (d = 0), Dl = null;
        N !== null && B < y.length;
        B++
      ) {
        N.index > B ? ((Dl = N), (N = null)) : (Dl = N.sibling);
        var F = r(v, N, y[B], b);
        if (F === null) {
          N === null && (N = Dl);
          break;
        }
        l && N && F.alternate === null && t(v, N),
          (d = n(F, d, B)),
          V === null ? (M = F) : (V.sibling = F),
          (V = F),
          (N = Dl);
      }
      if (B === y.length) return u(v, N), P && Au(v, B), M;
      if (N === null) {
        for (; B < y.length; B++)
          (N = T(v, y[B], b)),
            N !== null &&
              ((d = n(N, d, B)),
              V === null ? (M = N) : (V.sibling = N),
              (V = N));
        return P && Au(v, B), M;
      }
      for (N = a(N); B < y.length; B++)
        (Dl = m(N, v, B, y[B], b)),
          Dl !== null &&
            (l &&
              Dl.alternate !== null &&
              N.delete(Dl.key === null ? B : Dl.key),
            (d = n(Dl, d, B)),
            V === null ? (M = Dl) : (V.sibling = Dl),
            (V = Dl));
      return (
        l &&
          N.forEach(function (yu) {
            return t(v, yu);
          }),
        P && Au(v, B),
        M
      );
    }
    function Y(v, d, y, b) {
      if (y == null) throw Error(h(151));
      for (
        var M = null, V = null, N = d, B = (d = 0), Dl = null, F = y.next();
        N !== null && !F.done;
        B++, F = y.next()
      ) {
        N.index > B ? ((Dl = N), (N = null)) : (Dl = N.sibling);
        var yu = r(v, N, F.value, b);
        if (yu === null) {
          N === null && (N = Dl);
          break;
        }
        l && N && yu.alternate === null && t(v, N),
          (d = n(yu, d, B)),
          V === null ? (M = yu) : (V.sibling = yu),
          (V = yu),
          (N = Dl);
      }
      if (F.done) return u(v, N), P && Au(v, B), M;
      if (N === null) {
        for (; !F.done; B++, F = y.next())
          (F = T(v, F.value, b)),
            F !== null &&
              ((d = n(F, d, B)),
              V === null ? (M = F) : (V.sibling = F),
              (V = F));
        return P && Au(v, B), M;
      }
      for (N = a(N); !F.done; B++, F = y.next())
        (F = m(N, v, B, F.value, b)),
          F !== null &&
            (l && F.alternate !== null && N.delete(F.key === null ? B : F.key),
            (d = n(F, d, B)),
            V === null ? (M = F) : (V.sibling = F),
            (V = F));
      return (
        l &&
          N.forEach(function (xo) {
            return t(v, xo);
          }),
        P && Au(v, B),
        M
      );
    }
    function nl(v, d, y, b) {
      if (
        (typeof y == 'object' &&
          y !== null &&
          y.type === W &&
          y.key === null &&
          (y = y.props.children),
        typeof y == 'object' && y !== null)
      ) {
        switch (y.$$typeof) {
          case ul:
            l: {
              for (var M = y.key; d !== null; ) {
                if (d.key === M) {
                  if (((M = y.type), M === W)) {
                    if (d.tag === 7) {
                      u(v, d.sibling),
                        (b = e(d, y.props.children)),
                        (b.return = v),
                        (v = b);
                      break l;
                    }
                  } else if (
                    d.elementType === M ||
                    (typeof M == 'object' &&
                      M !== null &&
                      M.$$typeof === Jl &&
                      s0(M) === d.type)
                  ) {
                    u(v, d.sibling),
                      (b = e(d, y.props)),
                      Fa(b, y),
                      (b.return = v),
                      (v = b);
                    break l;
                  }
                  u(v, d);
                  break;
                } else t(v, d);
                d = d.sibling;
              }
              y.type === W
                ? ((b = Eu(y.props.children, v.mode, b, y.key)),
                  (b.return = v),
                  (v = b))
                : ((b = Xe(y.type, y.key, y.props, null, v.mode, b)),
                  Fa(b, y),
                  (b.return = v),
                  (v = b));
            }
            return f(v);
          case I:
            l: {
              for (M = y.key; d !== null; ) {
                if (d.key === M)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === y.containerInfo &&
                    d.stateNode.implementation === y.implementation
                  ) {
                    u(v, d.sibling),
                      (b = e(d, y.children || [])),
                      (b.return = v),
                      (v = b);
                    break l;
                  } else {
                    u(v, d);
                    break;
                  }
                else t(v, d);
                d = d.sibling;
              }
              (b = Ef(y, v.mode, b)), (b.return = v), (v = b);
            }
            return f(v);
          case Jl:
            return (M = y._init), (y = M(y._payload)), nl(v, d, y, b);
        }
        if (Yl(y)) return G(v, d, y, b);
        if (ql(y)) {
          if (((M = ql(y)), typeof M != 'function')) throw Error(h(150));
          return (y = M.call(y)), Y(v, d, y, b);
        }
        if (typeof y.then == 'function') return nl(v, d, un(y), b);
        if (y.$$typeof === Hl) return nl(v, d, Ve(v, y), b);
        an(v, y);
      }
      return (typeof y == 'string' && y !== '') ||
        typeof y == 'number' ||
        typeof y == 'bigint'
        ? ((y = '' + y),
          d !== null && d.tag === 6
            ? (u(v, d.sibling), (b = e(d, y)), (b.return = v), (v = b))
            : (u(v, d), (b = Tf(y, v.mode, b)), (b.return = v), (v = b)),
          f(v))
        : u(v, d);
    }
    return function (v, d, y, b) {
      try {
        ka = 0;
        var M = nl(v, d, y, b);
        return (na = null), M;
      } catch (N) {
        if (N === Za || N === Ke) throw N;
        var V = Fl(29, N, null, v.mode);
        return (V.lanes = b), (V.return = v), V;
      } finally {
      }
    };
  }
  var fa = d0(!0),
    v0 = d0(!1),
    st = _(null),
    Tt = null;
  function Ft(l) {
    var t = l.alternate;
    z(_l, _l.current & 1),
      z(st, l),
      Tt === null &&
        (t === null || ta.current !== null || t.memoizedState !== null) &&
        (Tt = l);
  }
  function y0(l) {
    if (l.tag === 22) {
      if ((z(_l, _l.current), z(st, l), Tt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Tt = l);
      }
    } else It();
  }
  function It() {
    z(_l, _l.current), z(st, st.current);
  }
  function Bt(l) {
    D(st), Tt === l && (Tt = null), D(_l);
  }
  var _l = _(0);
  function en(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (
          u !== null &&
          ((u = u.dehydrated), u === null || u.data === '$?' || Vc(u))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function lc(l, t, u, a) {
    (t = l.memoizedState),
      (u = u(a, t)),
      (u = u == null ? t : p({}, t, u)),
      (l.memoizedState = u),
      l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var tc = {
    enqueueSetState: function (l, t, u) {
      l = l._reactInternals;
      var a = tt(),
        e = Wt(a);
      (e.payload = t),
        u != null && (e.callback = u),
        (t = $t(l, e, a)),
        t !== null && (ut(t, l, a), Va(t, l, a));
    },
    enqueueReplaceState: function (l, t, u) {
      l = l._reactInternals;
      var a = tt(),
        e = Wt(a);
      (e.tag = 1),
        (e.payload = t),
        u != null && (e.callback = u),
        (t = $t(l, e, a)),
        t !== null && (ut(t, l, a), Va(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var u = tt(),
        a = Wt(u);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = $t(l, a, u)),
        t !== null && (ut(t, l, u), Va(t, l, u));
    },
  };
  function o0(l, t, u, a, e, n, f) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == 'function'
        ? l.shouldComponentUpdate(a, n, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !qa(u, a) || !qa(e, n)
        : !0
    );
  }
  function h0(l, t, u, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(u, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(u, a),
      t.state !== l && tc.enqueueReplaceState(t, t.state, null);
  }
  function Nu(l, t) {
    var u = t;
    if ('ref' in t) {
      u = {};
      for (var a in t) a !== 'ref' && (u[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      u === t && (u = p({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var nn =
    typeof reportError == 'function'
      ? reportError
      : function (l) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == 'object' &&
                l !== null &&
                typeof l.message == 'string'
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', l);
            return;
          }
          console.error(l);
        };
  function r0(l) {
    nn(l);
  }
  function m0(l) {
    console.error(l);
  }
  function g0(l) {
    nn(l);
  }
  function fn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function S0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function uc(l, t, u) {
    return (
      (u = Wt(u)),
      (u.tag = 3),
      (u.payload = { element: null }),
      (u.callback = function () {
        fn(l, t);
      }),
      u
    );
  }
  function b0(l) {
    return (l = Wt(l)), (l.tag = 3), l;
  }
  function T0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == 'function') {
      var n = a.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          S0(t, u, a);
        });
    }
    var f = u.stateNode;
    f !== null &&
      typeof f.componentDidCatch == 'function' &&
      (l.callback = function () {
        S0(t, u, a),
          typeof e != 'function' &&
            (eu === null ? (eu = new Set([this])) : eu.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : '',
        });
      });
  }
  function By(l, t, u, a, e) {
    if (
      ((u.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((t = u.alternate),
        t !== null && ja(t, u, e, !0),
        (u = st.current),
        u !== null)
      ) {
        switch (u.tag) {
          case 13:
            return (
              Tt === null ? Dc() : u.alternate === null && rl === 0 && (rl = 3),
              (u.flags &= -257),
              (u.flags |= 65536),
              (u.lanes = e),
              a === pf
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null ? (u.updateQueue = new Set([a])) : t.add(a),
                  Uc(l, a, e)),
              !1
            );
          case 22:
            return (
              (u.flags |= 65536),
              a === pf
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (u.updateQueue = t))
                    : ((u = t.retryQueue),
                      u === null ? (t.retryQueue = new Set([a])) : u.add(a)),
                  Uc(l, a, e)),
              !1
            );
        }
        throw Error(h(435, u.tag));
      }
      return Uc(l, a, e), Dc(), !1;
    }
    if (P)
      return (
        (t = st.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            a !== zf && ((l = Error(h(422), { cause: a })), Ga(nt(l, u))))
          : (a !== zf && ((t = Error(h(423), { cause: a })), Ga(nt(t, u))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (a = nt(a, u)),
            (e = uc(l.stateNode, a, e)),
            Yf(l, e),
            rl !== 4 && (rl = 2)),
        !1
      );
    var n = Error(h(520), { cause: a });
    if (
      ((n = nt(n, u)),
      ee === null ? (ee = [n]) : ee.push(n),
      rl !== 4 && (rl = 2),
      t === null)
    )
      return !0;
    (a = nt(a, u)), (u = t);
    do {
      switch (u.tag) {
        case 3:
          return (
            (u.flags |= 65536),
            (l = e & -e),
            (u.lanes |= l),
            (l = uc(u.stateNode, a, l)),
            Yf(u, l),
            !1
          );
        case 1:
          if (
            ((t = u.type),
            (n = u.stateNode),
            (u.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (n !== null &&
                  typeof n.componentDidCatch == 'function' &&
                  (eu === null || !eu.has(n)))))
          )
            return (
              (u.flags |= 65536),
              (e &= -e),
              (u.lanes |= e),
              (e = b0(e)),
              T0(e, l, u, a),
              Yf(u, e),
              !1
            );
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var E0 = Error(h(461)),
    zl = !1;
  function Ul(l, t, u, a) {
    t.child = l === null ? v0(t, null, u, a) : fa(t, l.child, u, a);
  }
  function _0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ('ref' in a) {
      var f = {};
      for (var c in a) c !== 'ref' && (f[c] = a[c]);
    } else f = a;
    return (
      Mu(t),
      (a = Xf(l, t, u, f, n, e)),
      (c = Qf()),
      l !== null && !zl
        ? (Zf(l, t, e), xt(l, t, e))
        : (P && c && _f(t), (t.flags |= 1), Ul(l, t, a, e), t.child)
    );
  }
  function A0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == 'function' &&
        !bf(n) &&
        n.defaultProps === void 0 &&
        u.compare === null
        ? ((t.tag = 15), (t.type = n), z0(l, t, n, a, e))
        : ((l = Xe(u.type, null, a, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !dc(l, e))) {
      var f = n.memoizedProps;
      if (
        ((u = u.compare), (u = u !== null ? u : qa), u(f, a) && l.ref === t.ref)
      )
        return xt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Rt(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function z0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (qa(n, a) && l.ref === t.ref)
        if (((zl = !1), (t.pendingProps = a = n), dc(l, e)))
          (l.flags & 131072) !== 0 && (zl = !0);
        else return (t.lanes = l.lanes), xt(l, t, e);
    }
    return ac(l, t, u, a, e);
  }
  function O0(l, t, u) {
    var a = t.pendingProps,
      e = a.children,
      n = l !== null ? l.memoizedState : null;
    if (a.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | u : u), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return D0(l, t, a, u);
      }
      if ((u & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Le(t, n !== null ? n.cachePool : null),
          n !== null ? zs(t, n) : xf(),
          y0(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          D0(l, t, n !== null ? n.baseLanes | u : u, u)
        );
    } else
      n !== null
        ? (Le(t, n.cachePool), zs(t, n), It(), (t.memoizedState = null))
        : (l !== null && Le(t, null), xf(), It());
    return Ul(l, t, e, u), t.child;
  }
  function D0(l, t, u, a) {
    var e = Nf();
    return (
      (e = e === null ? null : { parent: El._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: u, cachePool: e }),
      l !== null && Le(t, null),
      xf(),
      y0(t),
      l !== null && ja(l, t, a, !0),
      null
    );
  }
  function cn(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != 'function' && typeof u != 'object') throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function ac(l, t, u, a, e) {
    return (
      Mu(t),
      (u = Xf(l, t, u, a, void 0, e)),
      (a = Qf()),
      l !== null && !zl
        ? (Zf(l, t, e), xt(l, t, e))
        : (P && a && _f(t), (t.flags |= 1), Ul(l, t, u, e), t.child)
    );
  }
  function M0(l, t, u, a, e, n) {
    return (
      Mu(t),
      (t.updateQueue = null),
      (u = Ds(t, a, u, e)),
      Os(l),
      (a = Qf()),
      l !== null && !zl
        ? (Zf(l, t, n), xt(l, t, n))
        : (P && a && _f(t), (t.flags |= 1), Ul(l, t, u, n), t.child)
    );
  }
  function U0(l, t, u, a, e) {
    if ((Mu(t), t.stateNode === null)) {
      var n = ku,
        f = u.contextType;
      typeof f == 'object' && f !== null && (n = xl(f)),
        (n = new u(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = tc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Hf(t),
        (f = u.contextType),
        (n.context = typeof f == 'object' && f !== null ? xl(f) : ku),
        (n.state = t.memoizedState),
        (f = u.getDerivedStateFromProps),
        typeof f == 'function' && (lc(t, u, f, a), (n.state = t.memoizedState)),
        typeof u.getDerivedStateFromProps == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function' ||
          (typeof n.UNSAFE_componentWillMount != 'function' &&
            typeof n.componentWillMount != 'function') ||
          ((f = n.state),
          typeof n.componentWillMount == 'function' && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == 'function' &&
            n.UNSAFE_componentWillMount(),
          f !== n.state && tc.enqueueReplaceState(n, n.state, null),
          Ka(t, a, n, e),
          La(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        i = Nu(u, c);
      n.props = i;
      var o = n.context,
        g = u.contextType;
      (f = ku), typeof g == 'object' && g !== null && (f = xl(g));
      var T = u.getDerivedStateFromProps;
      (g =
        typeof T == 'function' ||
        typeof n.getSnapshotBeforeUpdate == 'function'),
        (c = t.pendingProps !== c),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((c || o !== f) && h0(t, n, a, f)),
        (wt = !1);
      var r = t.memoizedState;
      (n.state = r),
        Ka(t, a, n, e),
        La(),
        (o = t.memoizedState),
        c || r !== o || wt
          ? (typeof T == 'function' && (lc(t, u, T, a), (o = t.memoizedState)),
            (i = wt || o0(t, u, i, a, r, o, f))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != 'function' &&
                    typeof n.componentWillMount != 'function') ||
                  (typeof n.componentWillMount == 'function' &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == 'function' &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = o)),
            (n.props = a),
            (n.state = o),
            (n.context = f),
            (a = i))
          : (typeof n.componentDidMount == 'function' && (t.flags |= 4194308),
            (a = !1));
    } else {
      (n = t.stateNode),
        qf(l, t),
        (f = t.memoizedProps),
        (g = Nu(u, f)),
        (n.props = g),
        (T = t.pendingProps),
        (r = n.context),
        (o = u.contextType),
        (i = ku),
        typeof o == 'object' && o !== null && (i = xl(o)),
        (c = u.getDerivedStateFromProps),
        (o =
          typeof c == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function') ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((f !== T || r !== i) && h0(t, n, a, i)),
        (wt = !1),
        (r = t.memoizedState),
        (n.state = r),
        Ka(t, a, n, e),
        La();
      var m = t.memoizedState;
      f !== T ||
      r !== m ||
      wt ||
      (l !== null && l.dependencies !== null && Ce(l.dependencies))
        ? (typeof c == 'function' && (lc(t, u, c, a), (m = t.memoizedState)),
          (g =
            wt ||
            o0(t, u, g, a, r, m, i) ||
            (l !== null && l.dependencies !== null && Ce(l.dependencies)))
            ? (o ||
                (typeof n.UNSAFE_componentWillUpdate != 'function' &&
                  typeof n.componentWillUpdate != 'function') ||
                (typeof n.componentWillUpdate == 'function' &&
                  n.componentWillUpdate(a, m, i),
                typeof n.UNSAFE_componentWillUpdate == 'function' &&
                  n.UNSAFE_componentWillUpdate(a, m, i)),
              typeof n.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != 'function' ||
                (f === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != 'function' ||
                (f === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = m)),
          (n.props = a),
          (n.state = m),
          (n.context = i),
          (a = g))
        : (typeof n.componentDidUpdate != 'function' ||
            (f === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != 'function' ||
            (f === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      cn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (u =
            a && typeof u.getDerivedStateFromError != 'function'
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = fa(t, l.child, null, e)),
              (t.child = fa(t, null, u, e)))
            : Ul(l, t, u, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = xt(l, t, e)),
      l
    );
  }
  function R0(l, t, u, a) {
    return xa(), (t.flags |= 256), Ul(l, t, u, a), t.child;
  }
  var ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function nc(l) {
    return { baseLanes: l, cachePool: ms() };
  }
  function fc(l, t, u) {
    return (l = l !== null ? l.childLanes & ~u : 0), t && (l |= dt), l;
  }
  function N0(l, t, u) {
    var a = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          l !== null && l.memoizedState === null ? !1 : (_l.current & 2) !== 0),
      f && ((e = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if ((e ? Ft(t) : It(), P)) {
          var c = hl,
            i;
          if ((i = c)) {
            l: {
              for (i = c, c = bt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (((i = mt(i.nextSibling)), i === null)) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: _u !== null ? { id: Nt, overflow: pt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Fl(18, null, null, 0)),
                (i.stateNode = c),
                (i.return = t),
                (t.child = i),
                (jl = t),
                (hl = null),
                (i = !0))
              : (i = !1);
          }
          i || Ou(t);
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return Vc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Bt(t);
      }
      return (
        (c = a.children),
        (a = a.fallback),
        e
          ? (It(),
            (e = t.mode),
            (c = sn({ mode: 'hidden', children: c }, e)),
            (a = Eu(a, e, u, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = nc(u)),
            (e.childLanes = fc(l, f, u)),
            (t.memoizedState = ec),
            a)
          : (Ft(t), cc(t, c))
      );
    }
    if (
      ((i = l.memoizedState), i !== null && ((c = i.dehydrated), c !== null))
    ) {
      if (n)
        t.flags & 256
          ? (Ft(t), (t.flags &= -257), (t = ic(l, t, u)))
          : t.memoizedState !== null
          ? (It(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (It(),
            (e = a.fallback),
            (c = t.mode),
            (a = sn({ mode: 'visible', children: a.children }, c)),
            (e = Eu(e, c, u, null)),
            (e.flags |= 2),
            (a.return = t),
            (e.return = t),
            (a.sibling = e),
            (t.child = a),
            fa(t, l.child, null, u),
            (a = t.child),
            (a.memoizedState = nc(u)),
            (a.childLanes = fc(l, f, u)),
            (t.memoizedState = ec),
            (t = e));
      else if ((Ft(t), Vc(c))) {
        if (((f = c.nextSibling && c.nextSibling.dataset), f)) var o = f.dgst;
        (f = o),
          (a = Error(h(419))),
          (a.stack = ''),
          (a.digest = f),
          Ga({ value: a, source: null, stack: null }),
          (t = ic(l, t, u));
      } else if (
        (zl || ja(l, t, u, !1), (f = (u & l.childLanes) !== 0), zl || f)
      ) {
        if (
          ((f = sl),
          f !== null &&
            ((a = u & -u),
            (a = (a & 42) !== 0 ? 1 : Vn(a)),
            (a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a),
            a !== 0 && a !== i.retryLane))
        )
          throw ((i.retryLane = a), $u(l, a), ut(f, l, a), E0);
        c.data === '$?' || Dc(), (t = ic(l, t, u));
      } else
        c.data === '$?'
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (hl = mt(c.nextSibling)),
            (jl = t),
            (P = !0),
            (zu = null),
            (bt = !1),
            l !== null &&
              ((ct[it++] = Nt),
              (ct[it++] = pt),
              (ct[it++] = _u),
              (Nt = l.id),
              (pt = l.overflow),
              (_u = t)),
            (t = cc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (It(),
        (e = a.fallback),
        (c = t.mode),
        (i = l.child),
        (o = i.sibling),
        (a = Rt(i, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = i.subtreeFlags & 65011712),
        o !== null ? (e = Rt(o, e)) : ((e = Eu(e, c, u, null)), (e.flags |= 2)),
        (e.return = t),
        (a.return = t),
        (a.sibling = e),
        (t.child = a),
        (a = e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = nc(u))
          : ((i = c.cachePool),
            i !== null
              ? ((o = El._currentValue),
                (i = i.parent !== o ? { parent: o, pool: o } : i))
              : (i = ms()),
            (c = { baseLanes: c.baseLanes | u, cachePool: i })),
        (e.memoizedState = c),
        (e.childLanes = fc(l, f, u)),
        (t.memoizedState = ec),
        a)
      : (Ft(t),
        (u = l.child),
        (l = u.sibling),
        (u = Rt(u, { mode: 'visible', children: a.children })),
        (u.return = t),
        (u.sibling = null),
        l !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
        (t.child = u),
        (t.memoizedState = null),
        u);
  }
  function cc(l, t) {
    return (
      (t = sn({ mode: 'visible', children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function sn(l, t) {
    return (
      (l = Fl(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function ic(l, t, u) {
    return (
      fa(t, l.child, null, u),
      (l = cc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function p0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Df(l.return, t, u);
  }
  function sc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: u,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = u),
        (n.tailMode = e));
  }
  function H0(l, t, u) {
    var a = t.pendingProps,
      e = a.revealOrder,
      n = a.tail;
    if ((Ul(l, t, a.children, u), (a = _l.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && p0(l, u, t);
          else if (l.tag === 19) p0(l, u, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      a &= 1;
    }
    switch ((z(_l, a), e)) {
      case 'forwards':
        for (u = t.child, e = null; u !== null; )
          (l = u.alternate),
            l !== null && en(l) === null && (e = u),
            (u = u.sibling);
        (u = e),
          u === null
            ? ((e = t.child), (t.child = null))
            : ((e = u.sibling), (u.sibling = null)),
          sc(t, !1, e, u, n);
        break;
      case 'backwards':
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && en(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = u), (u = e), (e = l);
        }
        sc(t, !0, u, null, n);
        break;
      case 'together':
        sc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xt(l, t, u) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (au |= t.lanes),
      (u & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ja(l, t, u, !1), (u & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        l = t.child, u = Rt(l, l.pendingProps), t.child = u, u.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (u = u.sibling = Rt(l, l.pendingProps)),
          (u.return = t);
      u.sibling = null;
    }
    return t.child;
  }
  function dc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ce(l)));
  }
  function xy(l, t, u) {
    switch (t.tag) {
      case 3:
        vl(t, t.stateNode.containerInfo),
          Jt(t, El, l.memoizedState.cache),
          xa();
        break;
      case 27:
      case 5:
        jn(t);
        break;
      case 4:
        vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Ft(t), (t.flags |= 128), null)
            : (u & t.child.childLanes) !== 0
            ? N0(l, t, u)
            : (Ft(t), (l = xt(l, t, u)), l !== null ? l.sibling : null);
        Ft(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((a = (u & t.childLanes) !== 0),
          a || (ja(l, t, u, !1), (a = (u & t.childLanes) !== 0)),
          e)
        ) {
          if (a) return H0(l, t, u);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          z(_l, _l.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), O0(l, t, u);
      case 24:
        Jt(t, El, l.memoizedState.cache);
    }
    return xt(l, t, u);
  }
  function q0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) zl = !0;
      else {
        if (!dc(l, u) && (t.flags & 128) === 0) return (zl = !1), xy(l, t, u);
        zl = (l.flags & 131072) !== 0;
      }
    else (zl = !1), P && (t.flags & 1048576) !== 0 && ss(t, Ze, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            e = a._init;
          if (((a = e(a._payload)), (t.type = a), typeof a == 'function'))
            bf(a)
              ? ((l = Nu(a, l)), (t.tag = 1), (t = U0(null, t, a, l, u)))
              : ((t.tag = 0), (t = ac(null, t, a, l, u)));
          else {
            if (a != null) {
              if (((e = a.$$typeof), e === ot)) {
                (t.tag = 11), (t = _0(null, t, a, l, u));
                break l;
              } else if (e === Kl) {
                (t.tag = 14), (t = A0(null, t, a, l, u));
                break l;
              }
            }
            throw ((t = ru(a) || a), Error(h(306, t, '')));
          }
        }
        return t;
      case 0:
        return ac(l, t, t.type, t.pendingProps, u);
      case 1:
        return (a = t.type), (e = Nu(a, t.pendingProps)), U0(l, t, a, e, u);
      case 3:
        l: {
          if ((vl(t, t.stateNode.containerInfo), l === null))
            throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), qf(l, t), Ka(t, a, null, u);
          var f = t.memoizedState;
          if (
            ((a = f.cache),
            Jt(t, El, a),
            a !== n.cache && Mf(t, [El], u, !0),
            La(),
            (a = f.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = R0(l, t, a, u);
              break l;
            } else if (a !== e) {
              (e = nt(Error(h(424)), t)), Ga(e), (t = R0(l, t, a, u));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === 'HTML' ? l.ownerDocument.body : l;
              }
              for (
                hl = mt(l.firstChild),
                  jl = t,
                  P = !0,
                  zu = null,
                  bt = !0,
                  u = v0(t, null, a, u),
                  t.child = u;
                u;

              )
                (u.flags = (u.flags & -3) | 4096), (u = u.sibling);
            }
          else {
            if ((xa(), a === e)) {
              t = xt(l, t, u);
              break l;
            }
            Ul(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          cn(l, t),
          l === null
            ? (u = Gd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = u)
              : P ||
                ((u = t.type),
                (l = t.pendingProps),
                (a = An(Q.current).createElement(u)),
                (a[Bl] = t),
                (a[Xl] = l),
                Nl(a, u, l),
                Al(a),
                (t.stateNode = a))
            : (t.memoizedState = Gd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          jn(t),
          l === null &&
            P &&
            ((a = t.stateNode = Yd(t.type, t.pendingProps, Q.current)),
            (jl = t),
            (bt = !0),
            (e = hl),
            cu(t.type) ? ((Lc = e), (hl = mt(a.firstChild))) : (hl = e)),
          Ul(l, t, t.pendingProps.children, u),
          cn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((e = a = hl) &&
              ((a = vo(a, t.type, t.pendingProps, bt)),
              a !== null
                ? ((t.stateNode = a),
                  (jl = t),
                  (hl = mt(a.firstChild)),
                  (bt = !1),
                  (e = !0))
                : (e = !1)),
            e || Ou(t)),
          jn(t),
          (e = t.type),
          (n = t.pendingProps),
          (f = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Qc(e, n) ? (a = null) : f !== null && Qc(e, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Xf(l, t, Uy, null, null, u)), (oe._currentValue = e)),
          cn(l, t),
          Ul(l, t, a, u),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = u = hl) &&
              ((u = yo(u, t.pendingProps, bt)),
              u !== null
                ? ((t.stateNode = u), (jl = t), (hl = null), (l = !0))
                : (l = !1)),
            l || Ou(t)),
          null
        );
      case 13:
        return N0(l, t, u);
      case 4:
        return (
          vl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = fa(t, null, a, u)) : Ul(l, t, a, u),
          t.child
        );
      case 11:
        return _0(l, t, t.type, t.pendingProps, u);
      case 7:
        return Ul(l, t, t.pendingProps, u), t.child;
      case 8:
        return Ul(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return Ul(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          Jt(t, t.type, a.value),
          Ul(l, t, a.children, u),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (a = t.pendingProps.children),
          Mu(t),
          (e = xl(e)),
          (a = a(e)),
          (t.flags |= 1),
          Ul(l, t, a, u),
          t.child
        );
      case 14:
        return A0(l, t, t.type, t.pendingProps, u);
      case 15:
        return z0(l, t, t.type, t.pendingProps, u);
      case 19:
        return H0(l, t, u);
      case 31:
        return (
          (a = t.pendingProps),
          (u = t.mode),
          (a = { mode: a.mode, children: a.children }),
          l === null
            ? ((u = sn(a, u)),
              (u.ref = t.ref),
              (t.child = u),
              (u.return = t),
              (t = u))
            : ((u = Rt(l.child, a)),
              (u.ref = t.ref),
              (t.child = u),
              (u.return = t),
              (t = u)),
          t
        );
      case 22:
        return O0(l, t, u);
      case 24:
        return (
          Mu(t),
          (a = xl(El)),
          l === null
            ? ((e = Nf()),
              e === null &&
                ((e = sl),
                (n = Uf()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= u),
                (e = n)),
              (t.memoizedState = { parent: a, cache: e }),
              Hf(t),
              Jt(t, El, e))
            : ((l.lanes & u) !== 0 && (qf(l, t), Ka(t, null, null, u), La()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== a
                ? ((e = { parent: a, cache: a }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Jt(t, El, a))
                : ((a = n.cache),
                  Jt(t, El, a),
                  a !== e.cache && Mf(t, [El], u, !0))),
          Ul(l, t, t.pendingProps.children, u),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function Y0(l, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Cd(t))) {
      if (
        ((t = st.current),
        t !== null &&
          ((w & 4194048) === w
            ? Tt !== null
            : ((w & 62914560) !== w && (w & 536870912) === 0) || t !== Tt))
      )
        throw ((Ca = pf), gs);
      l.flags |= 8192;
    }
  }
  function dn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? yi() : 536870912), (l.lanes |= t), (da |= t));
  }
  function Ia(l, t) {
    if (!P)
      switch (l.tailMode) {
        case 'hidden':
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), (t = t.sibling);
          u === null ? (l.tail = null) : (u.sibling = null);
          break;
        case 'collapsed':
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), (u = u.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function ol(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      u = 0,
      a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags & 65011712),
          (a |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags),
          (a |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = u), t;
  }
  function Gy(l, t, u) {
    var a = t.pendingProps;
    switch ((Af(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ol(t), null;
      case 1:
        return ol(t), null;
      case 3:
        return (
          (u = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          qt(El),
          Ct(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (l === null || l.child === null) &&
            (Ba(t)
              ? Gt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ys())),
          ol(t),
          null
        );
      case 26:
        return (
          (u = t.memoizedState),
          l === null
            ? (Gt(t),
              u !== null ? (ol(t), Y0(t, u)) : (ol(t), (t.flags &= -16777217)))
            : u
            ? u !== l.memoizedState
              ? (Gt(t), ol(t), Y0(t, u))
              : (ol(t), (t.flags &= -16777217))
            : (l.memoizedProps !== a && Gt(t), ol(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Te(t), (u = Q.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return ol(t), null;
          }
          (l = q.current),
            Ba(t) ? ds(t) : ((l = Yd(e, a, u)), (t.stateNode = l), Gt(t));
        }
        return ol(t), null;
      case 5:
        if ((Te(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return ol(t), null;
          }
          if (((l = q.current), Ba(t))) ds(t);
          else {
            switch (((e = An(Q.current)), l)) {
              case 1:
                l = e.createElementNS('http://www.w3.org/2000/svg', u);
                break;
              case 2:
                l = e.createElementNS('http://www.w3.org/1998/Math/MathML', u);
                break;
              default:
                switch (u) {
                  case 'svg':
                    l = e.createElementNS('http://www.w3.org/2000/svg', u);
                    break;
                  case 'math':
                    l = e.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      u
                    );
                    break;
                  case 'script':
                    (l = e.createElement('div')),
                      (l.innerHTML = '<script></script>'),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case 'select':
                    (l =
                      typeof a.is == 'string'
                        ? e.createElement('select', { is: a.is })
                        : e.createElement('select')),
                      a.multiple
                        ? (l.multiple = !0)
                        : a.size && (l.size = a.size);
                    break;
                  default:
                    l =
                      typeof a.is == 'string'
                        ? e.createElement(u, { is: a.is })
                        : e.createElement(u);
                }
            }
            (l[Bl] = t), (l[Xl] = a);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Nl(l, u, a), u)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                l = !!a.autoFocus;
                break l;
              case 'img':
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Gt(t);
          }
        }
        return ol(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Gt(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(h(166));
          if (((l = Q.current), Ba(t))) {
            if (
              ((l = t.stateNode),
              (u = t.memoizedProps),
              (a = null),
              (e = jl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            (l[Bl] = t),
              (l = !!(
                l.nodeValue === u ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Md(l.nodeValue, u)
              )),
              l || Ou(t);
          } else (l = An(l).createTextNode(a)), (l[Bl] = t), (t.stateNode = l);
        }
        return ol(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = Ba(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(h(317));
              e[Bl] = t;
            } else
              xa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ol(t), (e = !1);
          } else
            (e = ys()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        if ((Bt(t), (t.flags & 128) !== 0)) return (t.lanes = u), t;
        if (
          ((u = a !== null), (l = l !== null && l.memoizedState !== null), u)
        ) {
          (a = t.child),
            (e = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== e && (a.flags |= 2048);
        }
        return (
          u !== l && u && (t.child.flags |= 8192),
          dn(t, t.updateQueue),
          ol(t),
          null
        );
      case 4:
        return Ct(), l === null && Bc(t.stateNode.containerInfo), ol(t), null;
      case 10:
        return qt(t.type), ol(t), null;
      case 19:
        if ((D(_l), (e = t.memoizedState), e === null)) return ol(t), null;
        if (((a = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (a) Ia(e, !1);
          else {
            if (rl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = en(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      Ia(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      dn(t, l),
                      t.subtreeFlags = 0,
                      l = u,
                      u = t.child;
                    u !== null;

                  )
                    is(u, l), (u = u.sibling);
                  return z(_l, (_l.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              St() > on &&
              ((t.flags |= 128), (a = !0), Ia(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((l = en(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                dn(t, l),
                Ia(e, !0),
                e.tail === null &&
                  e.tailMode === 'hidden' &&
                  !n.alternate &&
                  !P)
              )
                return ol(t), null;
            } else
              2 * St() - e.renderingStartTime > on &&
                u !== 536870912 &&
                ((t.flags |= 128), (a = !0), Ia(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = St()),
            (t.sibling = null),
            (l = _l.current),
            z(_l, a ? (l & 1) | 2 : l & 1),
            t)
          : (ol(t), null);
      case 22:
      case 23:
        return (
          Bt(t),
          Gf(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (u & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ol(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ol(t),
          (u = t.updateQueue),
          u !== null && dn(t, u.retryQueue),
          (u = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== u && (t.flags |= 2048),
          l !== null && D(Uu),
          null
        );
      case 24:
        return (
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          qt(El),
          ol(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function jy(l, t) {
    switch ((Af(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          qt(El),
          Ct(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 13:
        if (
          (Bt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          xa();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return D(_l), null;
      case 4:
        return Ct(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return (
          Bt(t),
          Gf(),
          l !== null && D(Uu),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return qt(El), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function B0(l, t) {
    switch ((Af(t), t.tag)) {
      case 3:
        qt(El), Ct();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        Ct();
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        D(_l);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        Bt(t), Gf(), l !== null && D(Uu);
        break;
      case 24:
        qt(El);
    }
  }
  function Pa(l, t) {
    try {
      var u = t.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create,
              f = u.inst;
            (a = n()), (f.destroy = a);
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      il(t, t.return, c);
    }
  }
  function Pt(l, t, u) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst,
              c = f.destroy;
            if (c !== void 0) {
              (f.destroy = void 0), (e = t);
              var i = u,
                o = c;
              try {
                o();
              } catch (g) {
                il(e, i, g);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      il(t, t.return, g);
    }
  }
  function x0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        As(t, u);
      } catch (a) {
        il(l, l.return, a);
      }
    }
  }
  function G0(l, t, u) {
    (u.props = Nu(l.type, l.memoizedProps)), (u.state = l.memoizedState);
    try {
      u.componentWillUnmount();
    } catch (a) {
      il(l, t, a);
    }
  }
  function le(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == 'function' ? (l.refCleanup = u(a)) : (u.current = a);
      }
    } catch (e) {
      il(l, t, e);
    }
  }
  function Et(l, t) {
    var u = l.ref,
      a = l.refCleanup;
    if (u !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (e) {
          il(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof u == 'function')
        try {
          u(null);
        } catch (e) {
          il(l, t, e);
        }
      else u.current = null;
  }
  function j0(l) {
    var t = l.type,
      u = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          u.autoFocus && a.focus();
          break l;
        case 'img':
          u.src ? (a.src = u.src) : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      il(l, l.return, e);
    }
  }
  function vc(l, t, u) {
    try {
      var a = l.stateNode;
      no(a, l.type, u, t), (a[Xl] = t);
    } catch (e) {
      il(l, l.return, e);
    }
  }
  function X0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && cu(l.type)) ||
      l.tag === 4
    );
  }
  function yc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || X0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && cu(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function oc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (u.nodeType === 9
              ? u.body
              : u.nodeName === 'HTML'
              ? u.ownerDocument.body
              : u
            ).insertBefore(l, t)
          : ((t =
              u.nodeType === 9
                ? u.body
                : u.nodeName === 'HTML'
                ? u.ownerDocument.body
                : u),
            t.appendChild(l),
            (u = u._reactRootContainer),
            u != null || t.onclick !== null || (t.onclick = _n));
    else if (
      a !== 4 &&
      (a === 27 && cu(l.type) && ((u = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (oc(l, t, u), l = l.sibling; l !== null; )
        oc(l, t, u), (l = l.sibling);
  }
  function vn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && cu(l.type) && (u = l.stateNode), (l = l.child), l !== null)
    )
      for (vn(l, t, u), l = l.sibling; l !== null; )
        vn(l, t, u), (l = l.sibling);
  }
  function Q0(l) {
    var t = l.stateNode,
      u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Nl(t, a, u), (t[Bl] = l), (t[Xl] = u);
    } catch (n) {
      il(l, l.return, n);
    }
  }
  var jt = !1,
    gl = !1,
    hc = !1,
    Z0 = typeof WeakSet == 'function' ? WeakSet : Set,
    Ol = null;
  function Xy(l, t) {
    if (((l = l.containerInfo), (jc = Rn), (l = Ii(l)), yf(l))) {
      if ('selectionStart' in l)
        var u = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          u = ((u = l.ownerDocument) && u.defaultView) || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0,
              c = -1,
              i = -1,
              o = 0,
              g = 0,
              T = l,
              r = null;
            t: for (;;) {
              for (
                var m;
                T !== u || (e !== 0 && T.nodeType !== 3) || (c = f + e),
                  T !== n || (a !== 0 && T.nodeType !== 3) || (i = f + a),
                  T.nodeType === 3 && (f += T.nodeValue.length),
                  (m = T.firstChild) !== null;

              )
                (r = T), (T = m);
              for (;;) {
                if (T === l) break t;
                if (
                  (r === u && ++o === e && (c = f),
                  r === n && ++g === a && (i = f),
                  (m = T.nextSibling) !== null)
                )
                  break;
                (T = r), (r = T.parentNode);
              }
              T = m;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (
      Xc = { focusedElem: l, selectionRange: u }, Rn = !1, Ol = t;
      Ol !== null;

    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Ol = l);
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (u = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = u.stateNode);
                try {
                  var G = Nu(u.type, e, u.elementType === u.type);
                  (l = a.getSnapshotBeforeUpdate(G, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Y) {
                  il(u, u.return, Y);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (u = l.nodeType), u === 9)
                )
                  Cc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Cc(l);
                      break;
                    default:
                      l.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ol = l);
            break;
          }
          Ol = t.return;
        }
  }
  function C0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        lu(l, u), a & 4 && Pa(5, u);
        break;
      case 1:
        if ((lu(l, u), a & 4))
          if (((l = u.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              il(u, u.return, f);
            }
          else {
            var e = Nu(u.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              il(u, u.return, f);
            }
          }
        a & 64 && x0(u), a & 512 && le(u, u.return);
        break;
      case 3:
        if ((lu(l, u), a & 64 && ((l = u.updateQueue), l !== null))) {
          if (((t = null), u.child !== null))
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            As(l, t);
          } catch (f) {
            il(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Q0(u);
      case 26:
      case 5:
        lu(l, u), t === null && a & 4 && j0(u), a & 512 && le(u, u.return);
        break;
      case 12:
        lu(l, u);
        break;
      case 13:
        lu(l, u),
          a & 4 && K0(l, u),
          a & 64 &&
            ((l = u.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((u = Wy.bind(null, u)), oo(l, u))));
        break;
      case 22:
        if (((a = u.memoizedState !== null || jt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || gl), (e = jt);
          var n = gl;
          (jt = a),
            (gl = t) && !n ? tu(l, u, (u.subtreeFlags & 8772) !== 0) : lu(l, u),
            (jt = e),
            (gl = n);
        }
        break;
      case 30:
        break;
      default:
        lu(l, u);
    }
  }
  function V0(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), V0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Jn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var yl = null,
    Cl = !1;
  function Xt(l, t, u) {
    for (u = u.child; u !== null; ) L0(l, t, u), (u = u.sibling);
  }
  function L0(l, t, u) {
    if (Wl && typeof Wl.onCommitFiberUnmount == 'function')
      try {
        Wl.onCommitFiberUnmount(Ea, u);
      } catch {}
    switch (u.tag) {
      case 26:
        gl || Et(u, t),
          Xt(l, t, u),
          u.memoizedState
            ? u.memoizedState.count--
            : u.stateNode && ((u = u.stateNode), u.parentNode.removeChild(u));
        break;
      case 27:
        gl || Et(u, t);
        var a = yl,
          e = Cl;
        cu(u.type) && ((yl = u.stateNode), (Cl = !1)),
          Xt(l, t, u),
          se(u.stateNode),
          (yl = a),
          (Cl = e);
        break;
      case 5:
        gl || Et(u, t);
      case 6:
        if (
          ((a = yl),
          (e = Cl),
          (yl = null),
          Xt(l, t, u),
          (yl = a),
          (Cl = e),
          yl !== null)
        )
          if (Cl)
            try {
              (yl.nodeType === 9
                ? yl.body
                : yl.nodeName === 'HTML'
                ? yl.ownerDocument.body
                : yl
              ).removeChild(u.stateNode);
            } catch (n) {
              il(u, t, n);
            }
          else
            try {
              yl.removeChild(u.stateNode);
            } catch (n) {
              il(u, t, n);
            }
        break;
      case 18:
        yl !== null &&
          (Cl
            ? ((l = yl),
              Hd(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === 'HTML'
                  ? l.ownerDocument.body
                  : l,
                u.stateNode
              ),
              ge(l))
            : Hd(yl, u.stateNode));
        break;
      case 4:
        (a = yl),
          (e = Cl),
          (yl = u.stateNode.containerInfo),
          (Cl = !0),
          Xt(l, t, u),
          (yl = a),
          (Cl = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gl || Pt(2, u, t), gl || Pt(4, u, t), Xt(l, t, u);
        break;
      case 1:
        gl ||
          (Et(u, t),
          (a = u.stateNode),
          typeof a.componentWillUnmount == 'function' && G0(u, t, a)),
          Xt(l, t, u);
        break;
      case 21:
        Xt(l, t, u);
        break;
      case 22:
        (gl = (a = gl) || u.memoizedState !== null), Xt(l, t, u), (gl = a);
        break;
      default:
        Xt(l, t, u);
    }
  }
  function K0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        ge(l);
      } catch (u) {
        il(t, t.return, u);
      }
  }
  function Qy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Z0()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Z0()),
          t
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function rc(l, t) {
    var u = Qy(l);
    t.forEach(function (a) {
      var e = $y.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function Il(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a],
          n = l,
          f = t,
          c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (cu(c.type)) {
                (yl = c.stateNode), (Cl = !1);
                break l;
              }
              break;
            case 5:
              (yl = c.stateNode), (Cl = !1);
              break l;
            case 3:
            case 4:
              (yl = c.stateNode.containerInfo), (Cl = !0);
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(h(160));
        L0(n, f, e),
          (yl = null),
          (Cl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) J0(t, l), (t = t.sibling);
  }
  var rt = null;
  function J0(l, t) {
    var u = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Il(t, l),
          Pl(l),
          a & 4 && (Pt(3, l, l.return), Pa(3, l), Pt(5, l, l.return));
        break;
      case 1:
        Il(t, l),
          Pl(l),
          a & 512 && (gl || u === null || Et(u, u.return)),
          a & 64 &&
            jt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((u = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = u === null ? a : u.concat(a)))));
        break;
      case 26:
        var e = rt;
        if (
          (Il(t, l),
          Pl(l),
          a & 512 && (gl || u === null || Et(u, u.return)),
          a & 4)
        ) {
          var n = u !== null ? u.memoizedState : null;
          if (((a = l.memoizedState), u === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (u = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (a) {
                    case 'title':
                      (n = e.getElementsByTagName('title')[0]),
                        (!n ||
                          n[za] ||
                          n[Bl] ||
                          n.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          n.hasAttribute('itemprop')) &&
                          ((n = e.createElement(a)),
                          e.head.insertBefore(
                            n,
                            e.querySelector('head > title')
                          )),
                        Nl(n, a, u),
                        (n[Bl] = l),
                        Al(n),
                        (a = n);
                      break l;
                    case 'link':
                      var f = Qd('link', 'href', e).get(a + (u.href || ''));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute('href') ===
                              (u.href == null || u.href === ''
                                ? null
                                : u.href) &&
                              n.getAttribute('rel') ===
                                (u.rel == null ? null : u.rel) &&
                              n.getAttribute('title') ===
                                (u.title == null ? null : u.title) &&
                              n.getAttribute('crossorigin') ===
                                (u.crossOrigin == null ? null : u.crossOrigin))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        Nl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    case 'meta':
                      if (
                        (f = Qd('meta', 'content', e).get(
                          a + (u.content || '')
                        ))
                      ) {
                        for (c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute('content') ===
                              (u.content == null ? null : '' + u.content) &&
                              n.getAttribute('name') ===
                                (u.name == null ? null : u.name) &&
                              n.getAttribute('property') ===
                                (u.property == null ? null : u.property) &&
                              n.getAttribute('http-equiv') ===
                                (u.httpEquiv == null ? null : u.httpEquiv) &&
                              n.getAttribute('charset') ===
                                (u.charSet == null ? null : u.charSet))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        Nl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  (n[Bl] = l), Al(n), (a = n);
                }
                l.stateNode = a;
              } else Zd(e, l.type, l.stateNode);
            else l.stateNode = Xd(e, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? u.stateNode !== null &&
                    ((u = u.stateNode), u.parentNode.removeChild(u))
                  : n.count--,
                a === null
                  ? Zd(e, l.type, l.stateNode)
                  : Xd(e, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                vc(l, l.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        Il(t, l),
          Pl(l),
          a & 512 && (gl || u === null || Et(u, u.return)),
          u !== null && a & 4 && vc(l, l.memoizedProps, u.memoizedProps);
        break;
      case 5:
        if (
          (Il(t, l),
          Pl(l),
          a & 512 && (gl || u === null || Et(u, u.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Cu(e, '');
          } catch (m) {
            il(l, l.return, m);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), vc(l, e, u !== null ? u.memoizedProps : e)),
          a & 1024 && (hc = !0);
        break;
      case 6:
        if ((Il(t, l), Pl(l), a & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          (a = l.memoizedProps), (u = l.stateNode);
          try {
            u.nodeValue = a;
          } catch (m) {
            il(l, l.return, m);
          }
        }
        break;
      case 3:
        if (
          ((Dn = null),
          (e = rt),
          (rt = zn(t.containerInfo)),
          Il(t, l),
          (rt = e),
          Pl(l),
          a & 4 && u !== null && u.memoizedState.isDehydrated)
        )
          try {
            ge(t.containerInfo);
          } catch (m) {
            il(l, l.return, m);
          }
        hc && ((hc = !1), w0(l));
        break;
      case 4:
        (a = rt),
          (rt = zn(l.stateNode.containerInfo)),
          Il(t, l),
          Pl(l),
          (rt = a);
        break;
      case 12:
        Il(t, l), Pl(l);
        break;
      case 13:
        Il(t, l),
          Pl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (u !== null && u.memoizedState !== null) &&
            (Ec = St()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), rc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null,
          o = jt,
          g = gl;
        if (
          ((jt = o || e),
          (gl = g || i),
          Il(t, l),
          (gl = g),
          (jt = o),
          Pl(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (u === null || i || jt || gl || pu(l)),
              u = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (((n = i.stateNode), e))
                    (f = n.style),
                      typeof f.setProperty == 'function'
                        ? f.setProperty('display', 'none', 'important')
                        : (f.display = 'none');
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style,
                      r =
                        T != null && T.hasOwnProperty('display')
                          ? T.display
                          : null;
                    c.style.display =
                      r == null || typeof r == 'boolean' ? '' : ('' + r).trim();
                  }
                } catch (m) {
                  il(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? '' : i.memoizedProps;
                } catch (m) {
                  il(i, i.return, m);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), (t = t.return);
            }
            u === t && (u = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((u = a.retryQueue),
            u !== null && ((a.retryQueue = null), rc(l, u))));
        break;
      case 19:
        Il(t, l),
          Pl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), rc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Il(t, l), Pl(l);
    }
  }
  function Pl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (X0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode,
              n = yc(l);
            vn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Cu(f, ''), (u.flags &= -33));
            var c = yc(l);
            vn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo,
              o = yc(l);
            oc(l, o, i);
            break;
          default:
            throw Error(h(161));
        }
      } catch (g) {
        il(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function w0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        w0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function lu(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) C0(l, t.alternate, t), (t = t.sibling);
  }
  function pu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pt(4, t, t.return), pu(t);
          break;
        case 1:
          Et(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == 'function' && G0(t, t.return, u),
            pu(t);
          break;
        case 27:
          se(t.stateNode);
        case 26:
        case 5:
          Et(t, t.return), pu(t);
          break;
        case 22:
          t.memoizedState === null && pu(t);
          break;
        case 30:
          pu(t);
          break;
        default:
          pu(t);
      }
      l = l.sibling;
    }
  }
  function tu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        e = l,
        n = t,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          tu(e, n, u), Pa(4, n);
          break;
        case 1:
          if (
            (tu(e, n, u),
            (a = n),
            (e = a.stateNode),
            typeof e.componentDidMount == 'function')
          )
            try {
              e.componentDidMount();
            } catch (o) {
              il(a, a.return, o);
            }
          if (((a = n), (e = a.updateQueue), e !== null)) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  _s(i[e], c);
            } catch (o) {
              il(a, a.return, o);
            }
          }
          u && f & 64 && x0(n), le(n, n.return);
          break;
        case 27:
          Q0(n);
        case 26:
        case 5:
          tu(e, n, u), u && a === null && f & 4 && j0(n), le(n, n.return);
          break;
        case 12:
          tu(e, n, u);
          break;
        case 13:
          tu(e, n, u), u && f & 4 && K0(e, n);
          break;
        case 22:
          n.memoizedState === null && tu(e, n, u), le(n, n.return);
          break;
        case 30:
          break;
        default:
          tu(e, n, u);
      }
      t = t.sibling;
    }
  }
  function mc(l, t) {
    var u = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (u = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== u && (l != null && l.refCount++, u != null && Xa(u));
  }
  function gc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Xa(l));
  }
  function _t(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) W0(l, t, u, a), (t = t.sibling);
  }
  function W0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _t(l, t, u, a), e & 2048 && Pa(9, t);
        break;
      case 1:
        _t(l, t, u, a);
        break;
      case 3:
        _t(l, t, u, a),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Xa(l)));
        break;
      case 12:
        if (e & 2048) {
          _t(l, t, u, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              f = n.id,
              c = n.onPostCommit;
            typeof c == 'function' &&
              c(
                f,
                t.alternate === null ? 'mount' : 'update',
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            il(t, t.return, i);
          }
        } else _t(l, t, u, a);
        break;
      case 13:
        _t(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? _t(l, t, u, a)
              : te(l, t)
            : n._visibility & 2
            ? _t(l, t, u, a)
            : ((n._visibility |= 2),
              ca(l, t, u, a, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && mc(f, t);
        break;
      case 24:
        _t(l, t, u, a), e & 2048 && gc(t.alternate, t);
        break;
      default:
        _t(l, t, u, a);
    }
  }
  function ca(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        f = t,
        c = u,
        i = a,
        o = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ca(n, f, c, i, e), Pa(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null
            ? g._visibility & 2
              ? ca(n, f, c, i, e)
              : te(n, f)
            : ((g._visibility |= 2), ca(n, f, c, i, e)),
            e && o & 2048 && mc(f.alternate, f);
          break;
        case 24:
          ca(n, f, c, i, e), e && o & 2048 && gc(f.alternate, f);
          break;
        default:
          ca(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function te(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l,
          a = t,
          e = a.flags;
        switch (a.tag) {
          case 22:
            te(u, a), e & 2048 && mc(a.alternate, a);
            break;
          case 24:
            te(u, a), e & 2048 && gc(a.alternate, a);
            break;
          default:
            te(u, a);
        }
        t = t.sibling;
      }
  }
  var ue = 8192;
  function ia(l) {
    if (l.subtreeFlags & ue)
      for (l = l.child; l !== null; ) $0(l), (l = l.sibling);
  }
  function $0(l) {
    switch (l.tag) {
      case 26:
        ia(l),
          l.flags & ue &&
            l.memoizedState !== null &&
            Do(rt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ia(l);
        break;
      case 3:
      case 4:
        var t = rt;
        (rt = zn(l.stateNode.containerInfo)), ia(l), (rt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ue), (ue = 16777216), ia(l), (ue = t))
            : ia(l));
        break;
      default:
        ia(l);
    }
  }
  function k0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ae(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Ol = a), I0(a, l);
        }
      k0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) F0(l), (l = l.sibling);
  }
  function F0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ae(l), l.flags & 2048 && Pt(9, l, l.return);
        break;
      case 3:
        ae(l);
        break;
      case 12:
        ae(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), yn(l))
          : ae(l);
        break;
      default:
        ae(l);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Ol = a), I0(a, l);
        }
      k0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          Pt(8, t, t.return), yn(t);
          break;
        case 22:
          (u = t.stateNode),
            u._visibility & 2 && ((u._visibility &= -3), yn(t));
          break;
        default:
          yn(t);
      }
      l = l.sibling;
    }
  }
  function I0(l, t) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Xa(u.memoizedState.cache);
      }
      if (((a = u.child), a !== null)) (a.return = u), (Ol = a);
      else
        l: for (u = l; Ol !== null; ) {
          a = Ol;
          var e = a.sibling,
            n = a.return;
          if ((V0(a), a === u)) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Ol = e);
            break l;
          }
          Ol = n;
        }
    }
  }
  var Zy = {
      getCacheForType: function (l) {
        var t = xl(El),
          u = t.data.get(l);
        return u === void 0 && ((u = l()), t.data.set(l, u)), u;
      },
    },
    Cy = typeof WeakMap == 'function' ? WeakMap : Map,
    ll = 0,
    sl = null,
    K = null,
    w = 0,
    tl = 0,
    lt = null,
    uu = !1,
    sa = !1,
    Sc = !1,
    Qt = 0,
    rl = 0,
    au = 0,
    Hu = 0,
    bc = 0,
    dt = 0,
    da = 0,
    ee = null,
    Vl = null,
    Tc = !1,
    Ec = 0,
    on = 1 / 0,
    hn = null,
    eu = null,
    Rl = 0,
    nu = null,
    va = null,
    ya = 0,
    _c = 0,
    Ac = null,
    P0 = null,
    ne = 0,
    zc = null;
  function tt() {
    if ((ll & 2) !== 0 && w !== 0) return w & -w;
    if (S.T !== null) {
      var l = Pu;
      return l !== 0 ? l : pc();
    }
    return ri();
  }
  function ld() {
    dt === 0 && (dt = (w & 536870912) === 0 || P ? vi() : 536870912);
    var l = st.current;
    return l !== null && (l.flags |= 32), dt;
  }
  function ut(l, t, u) {
    ((l === sl && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null) &&
      (oa(l, 0), fu(l, w, dt, !1)),
      Aa(l, u),
      ((ll & 2) === 0 || l !== sl) &&
        (l === sl &&
          ((ll & 2) === 0 && (Hu |= u), rl === 4 && fu(l, w, dt, !1)),
        At(l));
  }
  function td(l, t, u) {
    if ((ll & 6) !== 0) throw Error(h(327));
    var a = (!u && (t & 124) === 0 && (t & l.expiredLanes) === 0) || _a(l, t),
      e = a ? Ky(l, t) : Mc(l, t, !0),
      n = a;
    do {
      if (e === 0) {
        sa && !a && fu(l, t, 0, !1);
        break;
      } else {
        if (((u = l.current.alternate), n && !Vy(u))) {
          (e = Mc(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var f = 0;
          else
            (f = l.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ee;
              var i = c.current.memoizedState.isDehydrated;
              if ((i && (oa(c, f).flags |= 256), (f = Mc(c, f, !1)), f !== 2)) {
                if (Sc && !i) {
                  (c.errorRecoveryDisabledLanes |= n), (Hu |= n), (e = 4);
                  break l;
                }
                (n = Vl),
                  (Vl = e),
                  n !== null && (Vl === null ? (Vl = n) : Vl.push.apply(Vl, n));
              }
              e = f;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          oa(l, 0), fu(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              fu(a, t, dt, !uu);
              break l;
            case 2:
              Vl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((e = Ec + 300 - St()), 10 < e)) {
            if ((fu(a, t, dt, !uu), ze(a, 0, !0) !== 0)) break l;
            a.timeoutHandle = Nd(
              ud.bind(null, a, u, Vl, hn, Tc, t, dt, Hu, da, uu, n, 2, -0, 0),
              e
            );
            break l;
          }
          ud(a, u, Vl, hn, Tc, t, dt, Hu, da, uu, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    At(l);
  }
  function ud(l, t, u, a, e, n, f, c, i, o, g, T, r, m) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((ye = { stylesheets: null, count: 0, unsuspend: Oo }),
        $0(t),
        (T = Mo()),
        T !== null))
    ) {
      (l.cancelPendingCommit = T(
        sd.bind(null, l, t, n, u, a, e, f, c, i, g, 1, r, m)
      )),
        fu(l, n, f, !o);
      return;
    }
    sd(l, t, n, u, a, e, f, c, i);
  }
  function Vy(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if (
        (u === 0 || u === 11 || u === 15) &&
        t.flags & 16384 &&
        ((u = t.updateQueue), u !== null && ((u = u.stores), u !== null))
      )
        for (var a = 0; a < u.length; a++) {
          var e = u[a],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!kl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((u = t.child), t.subtreeFlags & 16384 && u !== null))
        (u.return = t), (t = u);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function fu(l, t, u, a) {
    (t &= ~bc),
      (t &= ~Hu),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - $l(e),
        f = 1 << n;
      (a[n] = -1), (e &= ~f);
    }
    u !== 0 && oi(l, u, t);
  }
  function rn() {
    return (ll & 6) === 0 ? (fe(0), !1) : !0;
  }
  function Oc() {
    if (K !== null) {
      if (tl === 0) var l = K.return;
      else (l = K), (Ht = Du = null), Cf(l), (na = null), (ka = 0), (l = K);
      for (; l !== null; ) B0(l.alternate, l), (l = l.return);
      K = null;
    }
  }
  function oa(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && ((l.timeoutHandle = -1), co(u)),
      (u = l.cancelPendingCommit),
      u !== null && ((l.cancelPendingCommit = null), u()),
      Oc(),
      (sl = l),
      (K = u = Rt(l.current, null)),
      (w = t),
      (tl = 0),
      (lt = null),
      (uu = !1),
      (sa = _a(l, t)),
      (Sc = !1),
      (da = dt = bc = Hu = au = rl = 0),
      (Vl = ee = null),
      (Tc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - $l(a),
          n = 1 << e;
        (t |= l[e]), (a &= ~n);
      }
    return (Qt = t), xe(), u;
  }
  function ad(l, t) {
    (C = null),
      (S.H = tn),
      t === Za || t === Ke
        ? ((t = Ts()), (tl = 3))
        : t === gs
        ? ((t = Ts()), (tl = 4))
        : (tl =
            t === E0
              ? 8
              : t !== null &&
                typeof t == 'object' &&
                typeof t.then == 'function'
              ? 6
              : 1),
      (lt = t),
      K === null && ((rl = 1), fn(l, nt(t, l.current)));
  }
  function ed() {
    var l = S.H;
    return (S.H = tn), l === null ? tn : l;
  }
  function nd() {
    var l = S.A;
    return (S.A = Zy), l;
  }
  function Dc() {
    (rl = 4),
      uu || ((w & 4194048) !== w && st.current !== null) || (sa = !0),
      ((au & 134217727) === 0 && (Hu & 134217727) === 0) ||
        sl === null ||
        fu(sl, w, dt, !1);
  }
  function Mc(l, t, u) {
    var a = ll;
    ll |= 2;
    var e = ed(),
      n = nd();
    (sl !== l || w !== t) && ((hn = null), oa(l, t)), (t = !1);
    var f = rl;
    l: do
      try {
        if (tl !== 0 && K !== null) {
          var c = K,
            i = lt;
          switch (tl) {
            case 8:
              Oc(), (f = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var o = tl;
              if (((tl = 0), (lt = null), ha(l, c, i, o), u && sa)) {
                f = 0;
                break l;
              }
              break;
            default:
              (o = tl), (tl = 0), (lt = null), ha(l, c, i, o);
          }
        }
        Ly(), (f = rl);
        break;
      } catch (g) {
        ad(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Ht = Du = null),
      (ll = a),
      (S.H = e),
      (S.A = n),
      K === null && ((sl = null), (w = 0), xe()),
      f
    );
  }
  function Ly() {
    for (; K !== null; ) fd(K);
  }
  function Ky(l, t) {
    var u = ll;
    ll |= 2;
    var a = ed(),
      e = nd();
    sl !== l || w !== t
      ? ((hn = null), (on = St() + 500), oa(l, t))
      : (sa = _a(l, t));
    l: do
      try {
        if (tl !== 0 && K !== null) {
          t = K;
          var n = lt;
          t: switch (tl) {
            case 1:
              (tl = 0), (lt = null), ha(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ss(n)) {
                (tl = 0), (lt = null), cd(t);
                break;
              }
              (t = function () {
                (tl !== 2 && tl !== 9) || sl !== l || (tl = 7), At(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              Ss(n)
                ? ((tl = 0), (lt = null), cd(t))
                : ((tl = 0), (lt = null), ha(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (K.tag) {
                case 26:
                  f = K.memoizedState;
                case 5:
                case 27:
                  var c = K;
                  if (!f || Cd(f)) {
                    (tl = 0), (lt = null);
                    var i = c.sibling;
                    if (i !== null) K = i;
                    else {
                      var o = c.return;
                      o !== null ? ((K = o), mn(o)) : (K = null);
                    }
                    break t;
                  }
              }
              (tl = 0), (lt = null), ha(l, t, n, 5);
              break;
            case 6:
              (tl = 0), (lt = null), ha(l, t, n, 6);
              break;
            case 8:
              Oc(), (rl = 6);
              break l;
            default:
              throw Error(h(462));
          }
        }
        Jy();
        break;
      } catch (g) {
        ad(l, g);
      }
    while (!0);
    return (
      (Ht = Du = null),
      (S.H = a),
      (S.A = e),
      (ll = u),
      K !== null ? 0 : ((sl = null), (w = 0), xe(), rl)
    );
  }
  function Jy() {
    for (; K !== null && !hv(); ) fd(K);
  }
  function fd(l) {
    var t = q0(l.alternate, l, Qt);
    (l.memoizedProps = l.pendingProps), t === null ? mn(l) : (K = t);
  }
  function cd(l) {
    var t = l,
      u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = M0(u, t, t.pendingProps, t.type, void 0, w);
        break;
      case 11:
        t = M0(u, t, t.pendingProps, t.type.render, t.ref, w);
        break;
      case 5:
        Cf(t);
      default:
        B0(u, t), (t = K = is(t, Qt)), (t = q0(u, t, Qt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? mn(l) : (K = t);
  }
  function ha(l, t, u, a) {
    (Ht = Du = null), Cf(t), (na = null), (ka = 0);
    var e = t.return;
    try {
      if (By(l, e, t, u, w)) {
        (rl = 1), fn(l, nt(u, l.current)), (K = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((K = e), n);
      (rl = 1), fn(l, nt(u, l.current)), (K = null);
      return;
    }
    t.flags & 32768
      ? (P || a === 1
          ? (l = !0)
          : sa || (w & 536870912) !== 0
          ? (l = !1)
          : ((uu = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = st.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        id(t, l))
      : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        id(t, uu);
        return;
      }
      l = t.return;
      var u = Gy(t.alternate, t, Qt);
      if (u !== null) {
        K = u;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    rl === 0 && (rl = 5);
  }
  function id(l, t) {
    do {
      var u = jy(l.alternate, l);
      if (u !== null) {
        (u.flags &= 32767), (K = u);
        return;
      }
      if (
        ((u = l.return),
        u !== null &&
          ((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        K = l;
        return;
      }
      K = l = u;
    } while (l !== null);
    (rl = 6), (K = null);
  }
  function sd(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do gn();
    while (Rl !== 0);
    if ((ll & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= gf),
        zv(l, u, n, f, c, i),
        l === sl && ((K = sl = null), (w = 0)),
        (va = t),
        (nu = l),
        (ya = u),
        (_c = n),
        (Ac = e),
        (P0 = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            ky(Ee, function () {
              return hd(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = S.T), (S.T = null), (e = O.p), (O.p = 2), (f = ll), (ll |= 4);
        try {
          Xy(l, t, u);
        } finally {
          (ll = f), (O.p = e), (S.T = a);
        }
      }
      (Rl = 1), dd(), vd(), yd();
    }
  }
  function dd() {
    if (Rl === 1) {
      Rl = 0;
      var l = nu,
        t = va,
        u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        (u = S.T), (S.T = null);
        var a = O.p;
        O.p = 2;
        var e = ll;
        ll |= 4;
        try {
          J0(t, l);
          var n = Xc,
            f = Ii(l.containerInfo),
            c = n.focusedElem,
            i = n.selectionRange;
          if (
            f !== c &&
            c &&
            c.ownerDocument &&
            Fi(c.ownerDocument.documentElement, c)
          ) {
            if (i !== null && yf(c)) {
              var o = i.start,
                g = i.end;
              if ((g === void 0 && (g = o), 'selectionStart' in c))
                (c.selectionStart = o),
                  (c.selectionEnd = Math.min(g, c.value.length));
              else {
                var T = c.ownerDocument || document,
                  r = (T && T.defaultView) || window;
                if (r.getSelection) {
                  var m = r.getSelection(),
                    G = c.textContent.length,
                    Y = Math.min(i.start, G),
                    nl = i.end === void 0 ? Y : Math.min(i.end, G);
                  !m.extend && Y > nl && ((f = nl), (nl = Y), (Y = f));
                  var v = ki(c, Y),
                    d = ki(c, nl);
                  if (
                    v &&
                    d &&
                    (m.rangeCount !== 1 ||
                      m.anchorNode !== v.node ||
                      m.anchorOffset !== v.offset ||
                      m.focusNode !== d.node ||
                      m.focusOffset !== d.offset)
                  ) {
                    var y = T.createRange();
                    y.setStart(v.node, v.offset),
                      m.removeAllRanges(),
                      Y > nl
                        ? (m.addRange(y), m.extend(d.node, d.offset))
                        : (y.setEnd(d.node, d.offset), m.addRange(y));
                  }
                }
              }
            }
            for (T = [], m = c; (m = m.parentNode); )
              m.nodeType === 1 &&
                T.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
            for (
              typeof c.focus == 'function' && c.focus(), c = 0;
              c < T.length;
              c++
            ) {
              var b = T[c];
              (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
            }
          }
          (Rn = !!jc), (Xc = jc = null);
        } finally {
          (ll = e), (O.p = a), (S.T = u);
        }
      }
      (l.current = t), (Rl = 2);
    }
  }
  function vd() {
    if (Rl === 2) {
      Rl = 0;
      var l = nu,
        t = va,
        u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        (u = S.T), (S.T = null);
        var a = O.p;
        O.p = 2;
        var e = ll;
        ll |= 4;
        try {
          C0(l, t.alternate, t);
        } finally {
          (ll = e), (O.p = a), (S.T = u);
        }
      }
      Rl = 3;
    }
  }
  function yd() {
    if (Rl === 4 || Rl === 3) {
      (Rl = 0), rv();
      var l = nu,
        t = va,
        u = ya,
        a = P0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Rl = 5)
        : ((Rl = 0), (va = nu = null), od(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (eu = null),
        Ln(u),
        (t = t.stateNode),
        Wl && typeof Wl.onCommitFiberRoot == 'function')
      )
        try {
          Wl.onCommitFiberRoot(Ea, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = S.T), (e = O.p), (O.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (S.T = t), (O.p = e);
        }
      }
      (ya & 3) !== 0 && gn(),
        At(l),
        (e = l.pendingLanes),
        (u & 4194090) !== 0 && (e & 42) !== 0
          ? l === zc
            ? ne++
            : ((ne = 0), (zc = l))
          : (ne = 0),
        fe(0);
    }
  }
  function od(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Xa(t)));
  }
  function gn(l) {
    return dd(), vd(), yd(), hd();
  }
  function hd() {
    if (Rl !== 5) return !1;
    var l = nu,
      t = _c;
    _c = 0;
    var u = Ln(ya),
      a = S.T,
      e = O.p;
    try {
      (O.p = 32 > u ? 32 : u), (S.T = null), (u = Ac), (Ac = null);
      var n = nu,
        f = ya;
      if (((Rl = 0), (va = nu = null), (ya = 0), (ll & 6) !== 0))
        throw Error(h(331));
      var c = ll;
      if (
        ((ll |= 4),
        F0(n.current),
        W0(n, n.current, f, u),
        (ll = c),
        fe(0, !1),
        Wl && typeof Wl.onPostCommitFiberRoot == 'function')
      )
        try {
          Wl.onPostCommitFiberRoot(Ea, n);
        } catch {}
      return !0;
    } finally {
      (O.p = e), (S.T = a), od(l, t);
    }
  }
  function rd(l, t, u) {
    (t = nt(u, t)),
      (t = uc(l.stateNode, t, 2)),
      (l = $t(l, t, 2)),
      l !== null && (Aa(l, 2), At(l));
  }
  function il(l, t, u) {
    if (l.tag === 3) rd(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rd(t, l, u);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (eu === null || !eu.has(a)))
          ) {
            (l = nt(u, l)),
              (u = b0(2)),
              (a = $t(t, u, 2)),
              a !== null && (T0(u, a, t, l), Aa(a, 2), At(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Cy();
      var e = new Set();
      a.set(t, e);
    } else (e = a.get(t)), e === void 0 && ((e = new Set()), a.set(t, e));
    e.has(u) ||
      ((Sc = !0), e.add(u), (l = wy.bind(null, l, t, u)), t.then(l, l));
  }
  function wy(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & u),
      (l.warmLanes &= ~u),
      sl === l &&
        (w & u) === u &&
        (rl === 4 || (rl === 3 && (w & 62914560) === w && 300 > St() - Ec)
          ? (ll & 2) === 0 && oa(l, 0)
          : (bc |= u),
        da === w && (da = 0)),
      At(l);
  }
  function md(l, t) {
    t === 0 && (t = yi()), (l = $u(l, t)), l !== null && (Aa(l, t), At(l));
  }
  function Wy(l) {
    var t = l.memoizedState,
      u = 0;
    t !== null && (u = t.retryLane), md(l, u);
  }
  function $y(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), md(l, u);
  }
  function ky(l, t) {
    return Qn(l, t);
  }
  var Sn = null,
    ra = null,
    Rc = !1,
    bn = !1,
    Nc = !1,
    qu = 0;
  function At(l) {
    l !== ra &&
      l.next === null &&
      (ra === null ? (Sn = ra = l) : (ra = ra.next = l)),
      (bn = !0),
      Rc || ((Rc = !0), Iy());
  }
  function fe(l, t) {
    if (!Nc && bn) {
      Nc = !0;
      do
        for (var u = !1, a = Sn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes,
                c = a.pingedLanes;
              (n = (1 << (31 - $l(42 | l) + 1)) - 1),
                (n &= e & ~(f & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((u = !0), Td(a, n));
          } else
            (n = w),
              (n = ze(
                a,
                a === sl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || _a(a, n) || ((u = !0), Td(a, n));
          a = a.next;
        }
      while (u);
      Nc = !1;
    }
  }
  function Fy() {
    gd();
  }
  function gd() {
    bn = Rc = !1;
    var l = 0;
    qu !== 0 && (fo() && (l = qu), (qu = 0));
    for (var t = St(), u = null, a = Sn; a !== null; ) {
      var e = a.next,
        n = Sd(a, t);
      n === 0
        ? ((a.next = null),
          u === null ? (Sn = e) : (u.next = e),
          e === null && (ra = u))
        : ((u = a), (l !== 0 || (n & 3) !== 0) && (bn = !0)),
        (a = e);
    }
    fe(l);
  }
  function Sd(l, t) {
    for (
      var u = l.suspendedLanes,
        a = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var f = 31 - $l(n),
        c = 1 << f,
        i = e[f];
      i === -1
        ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Av(c, t))
        : i <= t && (l.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((t = sl),
      (u = w),
      (u = ze(
        l,
        l === t ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      u === 0 ||
        (l === t && (tl === 2 || tl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Zn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((u & 3) === 0 || _a(l, u)) {
      if (((t = u & -u), t === l.callbackPriority)) return t;
      switch ((a !== null && Zn(a), Ln(u))) {
        case 2:
        case 8:
          u = si;
          break;
        case 32:
          u = Ee;
          break;
        case 268435456:
          u = di;
          break;
        default:
          u = Ee;
      }
      return (
        (a = bd.bind(null, l)),
        (u = Qn(u, a)),
        (l.callbackPriority = t),
        (l.callbackNode = u),
        t
      );
    }
    return (
      a !== null && a !== null && Zn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function bd(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var u = l.callbackNode;
    if (gn() && l.callbackNode !== u) return null;
    var a = w;
    return (
      (a = ze(
        l,
        l === sl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (td(l, a, t),
          Sd(l, St()),
          l.callbackNode != null && l.callbackNode === u
            ? bd.bind(null, l)
            : null)
    );
  }
  function Td(l, t) {
    if (gn()) return null;
    td(l, t, !0);
  }
  function Iy() {
    io(function () {
      (ll & 6) !== 0 ? Qn(ii, Fy) : gd();
    });
  }
  function pc() {
    return qu === 0 && (qu = vi()), qu;
  }
  function Ed(l) {
    return l == null || typeof l == 'symbol' || typeof l == 'boolean'
      ? null
      : typeof l == 'function'
      ? l
      : Re('' + l);
  }
  function _d(l, t) {
    var u = t.ownerDocument.createElement('input');
    return (
      (u.name = t.name),
      (u.value = t.value),
      l.id && u.setAttribute('form', l.id),
      t.parentNode.insertBefore(u, t),
      (l = new FormData(l)),
      u.parentNode.removeChild(u),
      l
    );
  }
  function Py(l, t, u, a, e) {
    if (t === 'submit' && u && u.stateNode === e) {
      var n = Ed((e[Xl] || null).action),
        f = a.submitter;
      f &&
        ((t = (t = f[Xl] || null)
          ? Ed(t.formAction)
          : f.getAttribute('formAction')),
        t !== null && ((n = t), (f = null)));
      var c = new qe('action', 'action', null, a, e);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (qu !== 0) {
                  var i = f ? _d(e, f) : new FormData(e);
                  Ff(
                    u,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i
                  );
                }
              } else
                typeof n == 'function' &&
                  (c.preventDefault(),
                  (i = f ? _d(e, f) : new FormData(e)),
                  Ff(
                    u,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Hc = 0; Hc < mf.length; Hc++) {
    var qc = mf[Hc],
      lo = qc.toLowerCase(),
      to = qc[0].toUpperCase() + qc.slice(1);
    ht(lo, 'on' + to);
  }
  ht(ts, 'onAnimationEnd'),
    ht(us, 'onAnimationIteration'),
    ht(as, 'onAnimationStart'),
    ht('dblclick', 'onDoubleClick'),
    ht('focusin', 'onFocus'),
    ht('focusout', 'onBlur'),
    ht(Sy, 'onTransitionRun'),
    ht(by, 'onTransitionStart'),
    ht(Ty, 'onTransitionCancel'),
    ht(es, 'onTransitionEnd'),
    Xu('onMouseEnter', ['mouseout', 'mouseover']),
    Xu('onMouseLeave', ['mouseout', 'mouseover']),
    Xu('onPointerEnter', ['pointerout', 'pointerover']),
    Xu('onPointerLeave', ['pointerout', 'pointerover']),
    gu(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    gu(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    gu('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    gu(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    gu(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    gu(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var ce =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    uo = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(ce)
    );
  function Ad(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u],
        e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f],
              i = c.instance,
              o = c.currentTarget;
            if (((c = c.listener), i !== n && e.isPropagationStopped()))
              break l;
            (n = c), (e.currentTarget = o);
            try {
              n(e);
            } catch (g) {
              nn(g);
            }
            (e.currentTarget = null), (n = i);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((c = a[f]),
              (i = c.instance),
              (o = c.currentTarget),
              (c = c.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            (n = c), (e.currentTarget = o);
            try {
              n(e);
            } catch (g) {
              nn(g);
            }
            (e.currentTarget = null), (n = i);
          }
      }
    }
  }
  function J(l, t) {
    var u = t[Kn];
    u === void 0 && (u = t[Kn] = new Set());
    var a = l + '__bubble';
    u.has(a) || (zd(t, l, 2, !1), u.add(a));
  }
  function Yc(l, t, u) {
    var a = 0;
    t && (a |= 4), zd(u, l, a, t);
  }
  var Tn = '_reactListening' + Math.random().toString(36).slice(2);
  function Bc(l) {
    if (!l[Tn]) {
      (l[Tn] = !0),
        gi.forEach(function (u) {
          u !== 'selectionchange' && (uo.has(u) || Yc(u, !1, l), Yc(u, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Tn] || ((t[Tn] = !0), Yc('selectionchange', !1, t));
    }
  }
  function zd(l, t, u, a) {
    switch (Wd(t)) {
      case 2:
        var e = No;
        break;
      case 8:
        e = po;
        break;
      default:
        e = $c;
    }
    (u = e.bind(null, t, u, l)),
      (e = void 0),
      !uf ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (e = !0),
      a
        ? e !== void 0
          ? l.addEventListener(t, u, { capture: !0, passive: e })
          : l.addEventListener(t, u, !0)
        : e !== void 0
        ? l.addEventListener(t, u, { passive: e })
        : l.addEventListener(t, u, !1);
  }
  function xc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (((f = xu(c)), f === null)) return;
            if (((i = f.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    pi(function () {
      var o = n,
        g = lf(u),
        T = [];
      l: {
        var r = ns.get(l);
        if (r !== void 0) {
          var m = qe,
            G = l;
          switch (l) {
            case 'keypress':
              if (pe(u) === 0) break l;
            case 'keydown':
            case 'keyup':
              m = kv;
              break;
            case 'focusin':
              (G = 'focus'), (m = ff);
              break;
            case 'focusout':
              (G = 'blur'), (m = ff);
              break;
            case 'beforeblur':
            case 'afterblur':
              m = ff;
              break;
            case 'click':
              if (u.button === 2) break l;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              m = Yi;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              m = jv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              m = Pv;
              break;
            case ts:
            case us:
            case as:
              m = Zv;
              break;
            case es:
              m = ty;
              break;
            case 'scroll':
            case 'scrollend':
              m = xv;
              break;
            case 'wheel':
              m = ay;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              m = Vv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              m = xi;
              break;
            case 'toggle':
            case 'beforetoggle':
              m = ny;
          }
          var Y = (t & 4) !== 0,
            nl = !Y && (l === 'scroll' || l === 'scrollend'),
            v = Y ? (r !== null ? r + 'Capture' : null) : r;
          Y = [];
          for (var d = o, y; d !== null; ) {
            var b = d;
            if (
              ((y = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                y === null ||
                v === null ||
                ((b = Da(d, v)), b != null && Y.push(ie(d, b, y))),
              nl)
            )
              break;
            d = d.return;
          }
          0 < Y.length &&
            ((r = new m(r, G, null, u, g)), T.push({ event: r, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((r = l === 'mouseover' || l === 'pointerover'),
            (m = l === 'mouseout' || l === 'pointerout'),
            r &&
              u !== Pn &&
              (G = u.relatedTarget || u.fromElement) &&
              (xu(G) || G[Bu]))
          )
            break l;
          if (
            (m || r) &&
            ((r =
              g.window === g
                ? g
                : (r = g.ownerDocument)
                ? r.defaultView || r.parentWindow
                : window),
            m
              ? ((G = u.relatedTarget || u.toElement),
                (m = o),
                (G = G ? xu(G) : null),
                G !== null &&
                  ((nl = j(G)),
                  (Y = G.tag),
                  G !== nl || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (G = null))
              : ((m = null), (G = o)),
            m !== G)
          ) {
            if (
              ((Y = Yi),
              (b = 'onMouseLeave'),
              (v = 'onMouseEnter'),
              (d = 'mouse'),
              (l === 'pointerout' || l === 'pointerover') &&
                ((Y = xi),
                (b = 'onPointerLeave'),
                (v = 'onPointerEnter'),
                (d = 'pointer')),
              (nl = m == null ? r : Oa(m)),
              (y = G == null ? r : Oa(G)),
              (r = new Y(b, d + 'leave', m, u, g)),
              (r.target = nl),
              (r.relatedTarget = y),
              (b = null),
              xu(g) === o &&
                ((Y = new Y(v, d + 'enter', G, u, g)),
                (Y.target = y),
                (Y.relatedTarget = nl),
                (b = Y)),
              (nl = b),
              m && G)
            )
              t: {
                for (Y = m, v = G, d = 0, y = Y; y; y = ma(y)) d++;
                for (y = 0, b = v; b; b = ma(b)) y++;
                for (; 0 < d - y; ) (Y = ma(Y)), d--;
                for (; 0 < y - d; ) (v = ma(v)), y--;
                for (; d--; ) {
                  if (Y === v || (v !== null && Y === v.alternate)) break t;
                  (Y = ma(Y)), (v = ma(v));
                }
                Y = null;
              }
            else Y = null;
            m !== null && Od(T, r, m, Y, !1),
              G !== null && nl !== null && Od(T, nl, G, Y, !0);
          }
        }
        l: {
          if (
            ((r = o ? Oa(o) : window),
            (m = r.nodeName && r.nodeName.toLowerCase()),
            m === 'select' || (m === 'input' && r.type === 'file'))
          )
            var M = Li;
          else if (Ci(r))
            if (Ki) M = ry;
            else {
              M = oy;
              var V = yy;
            }
          else
            (m = r.nodeName),
              !m ||
              m.toLowerCase() !== 'input' ||
              (r.type !== 'checkbox' && r.type !== 'radio')
                ? o && In(o.elementType) && (M = Li)
                : (M = hy);
          if (M && (M = M(l, o))) {
            Vi(T, M, u, g);
            break l;
          }
          V && V(l, r, o),
            l === 'focusout' &&
              o &&
              r.type === 'number' &&
              o.memoizedProps.value != null &&
              Fn(r, 'number', r.value);
        }
        switch (((V = o ? Oa(o) : window), l)) {
          case 'focusin':
            (Ci(V) || V.contentEditable === 'true') &&
              ((Ju = V), (of = o), (Ya = null));
            break;
          case 'focusout':
            Ya = of = Ju = null;
            break;
          case 'mousedown':
            hf = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (hf = !1), Pi(T, u, g);
            break;
          case 'selectionchange':
            if (gy) break;
          case 'keydown':
          case 'keyup':
            Pi(T, u, g);
        }
        var N;
        if (sf)
          l: {
            switch (l) {
              case 'compositionstart':
                var B = 'onCompositionStart';
                break l;
              case 'compositionend':
                B = 'onCompositionEnd';
                break l;
              case 'compositionupdate':
                B = 'onCompositionUpdate';
                break l;
            }
            B = void 0;
          }
        else
          Ku
            ? Qi(l, u) && (B = 'onCompositionEnd')
            : l === 'keydown' &&
              u.keyCode === 229 &&
              (B = 'onCompositionStart');
        B &&
          (Gi &&
            u.locale !== 'ko' &&
            (Ku || B !== 'onCompositionStart'
              ? B === 'onCompositionEnd' && Ku && (N = Hi())
              : ((Kt = g),
                (af = 'value' in Kt ? Kt.value : Kt.textContent),
                (Ku = !0))),
          (V = En(o, B)),
          0 < V.length &&
            ((B = new Bi(B, l, null, u, g)),
            T.push({ event: B, listeners: V }),
            N ? (B.data = N) : ((N = Zi(u)), N !== null && (B.data = N)))),
          (N = cy ? iy(l, u) : sy(l, u)) &&
            ((B = En(o, 'onBeforeInput')),
            0 < B.length &&
              ((V = new Bi('onBeforeInput', 'beforeinput', null, u, g)),
              T.push({ event: V, listeners: B }),
              (V.data = N))),
          Py(T, l, o, u, g);
      }
      Ad(T, t);
    });
  }
  function ie(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function En(l, t) {
    for (var u = t + 'Capture', a = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Da(l, u)),
          e != null && a.unshift(ie(l, e, n)),
          (e = Da(l, t)),
          e != null && a.push(ie(l, e, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function ma(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Od(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u,
        i = c.alternate,
        o = c.stateNode;
      if (((c = c.tag), i !== null && i === a)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        o === null ||
        ((i = o),
        e
          ? ((o = Da(u, n)), o != null && f.unshift(ie(u, o, i)))
          : e || ((o = Da(u, n)), o != null && f.push(ie(u, o, i)))),
        (u = u.return);
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var ao = /\r\n?/g,
    eo = /\u0000|\uFFFD/g;
  function Dd(l) {
    return (typeof l == 'string' ? l : '' + l)
      .replace(
        ao,
        `
`
      )
      .replace(eo, '');
  }
  function Md(l, t) {
    return (t = Dd(t)), Dd(l) === t;
  }
  function _n() {}
  function el(l, t, u, a, e, n) {
    switch (u) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || Cu(l, a)
          : (typeof a == 'number' || typeof a == 'bigint') &&
            t !== 'body' &&
            Cu(l, '' + a);
        break;
      case 'className':
        De(l, 'class', a);
        break;
      case 'tabIndex':
        De(l, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        De(l, u, a);
        break;
      case 'style':
        Ri(l, a, n);
        break;
      case 'data':
        if (t !== 'object') {
          De(l, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || u !== 'href')) {
          l.removeAttribute(u);
          break;
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          l.removeAttribute(u);
          break;
        }
        (a = Re('' + a)), l.setAttribute(u, a);
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == 'function' &&
            (u === 'formAction'
              ? (t !== 'input' && el(l, t, 'name', e.name, e, null),
                el(l, t, 'formEncType', e.formEncType, e, null),
                el(l, t, 'formMethod', e.formMethod, e, null),
                el(l, t, 'formTarget', e.formTarget, e, null))
              : (el(l, t, 'encType', e.encType, e, null),
                el(l, t, 'method', e.method, e, null),
                el(l, t, 'target', e.target, e, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          l.removeAttribute(u);
          break;
        }
        (a = Re('' + a)), l.setAttribute(u, a);
        break;
      case 'onClick':
        a != null && (l.onclick = _n);
        break;
      case 'onScroll':
        a != null && J('scroll', l);
        break;
      case 'onScrollEnd':
        a != null && J('scrollend', l);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(h(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case 'multiple':
        l.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        l.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'boolean' ||
          typeof a == 'symbol'
        ) {
          l.removeAttribute('xlink:href');
          break;
        }
        (u = Re('' + a)),
          l.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', u);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? l.setAttribute(u, '' + a)
          : l.removeAttribute(u);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? l.setAttribute(u, '')
          : l.removeAttribute(u);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? l.setAttribute(u, '')
          : a !== !1 &&
            a != null &&
            typeof a != 'function' &&
            typeof a != 'symbol'
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? l.removeAttribute(u)
          : l.setAttribute(u, a);
        break;
      case 'popover':
        J('beforetoggle', l), J('toggle', l), Oe(l, 'popover', a);
        break;
      case 'xlinkActuate':
        Mt(l, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Mt(l, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Mt(l, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Mt(l, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Mt(l, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Mt(l, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Mt(l, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Mt(l, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Mt(l, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Oe(l, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < u.length) ||
          (u[0] !== 'o' && u[0] !== 'O') ||
          (u[1] !== 'n' && u[1] !== 'N')) &&
          ((u = Yv.get(u) || u), Oe(l, u, a));
    }
  }
  function Gc(l, t, u, a, e, n) {
    switch (u) {
      case 'style':
        Ri(l, a, n);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(h(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? Cu(l, a)
          : (typeof a == 'number' || typeof a == 'bigint') && Cu(l, '' + a);
        break;
      case 'onScroll':
        a != null && J('scroll', l);
        break;
      case 'onScrollEnd':
        a != null && J('scrollend', l);
        break;
      case 'onClick':
        a != null && (l.onclick = _n);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Si.hasOwnProperty(u))
          l: {
            if (
              u[0] === 'o' &&
              u[1] === 'n' &&
              ((e = u.endsWith('Capture')),
              (t = u.slice(2, e ? u.length - 7 : void 0)),
              (n = l[Xl] || null),
              (n = n != null ? n[u] : null),
              typeof n == 'function' && l.removeEventListener(t, n, e),
              typeof a == 'function')
            ) {
              typeof n != 'function' &&
                n !== null &&
                (u in l
                  ? (l[u] = null)
                  : l.hasAttribute(u) && l.removeAttribute(u)),
                l.addEventListener(t, a, e);
              break l;
            }
            u in l
              ? (l[u] = a)
              : a === !0
              ? l.setAttribute(u, '')
              : Oe(l, u, a);
          }
    }
  }
  function Nl(l, t, u) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        J('error', l), J('load', l);
        var a = !1,
          e = !1,
          n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  e = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(h(137, t));
                default:
                  el(l, t, n, f, u, null);
              }
          }
        e && el(l, t, 'srcSet', u.srcSet, u, null),
          a && el(l, t, 'src', u.src, u, null);
        return;
      case 'input':
        J('invalid', l);
        var c = (n = f = e = null),
          i = null,
          o = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case 'name':
                  e = g;
                  break;
                case 'type':
                  f = g;
                  break;
                case 'checked':
                  i = g;
                  break;
                case 'defaultChecked':
                  o = g;
                  break;
                case 'value':
                  n = g;
                  break;
                case 'defaultValue':
                  c = g;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (g != null) throw Error(h(137, t));
                  break;
                default:
                  el(l, t, a, g, u, null);
              }
          }
        Oi(l, n, c, i, o, f, e, !1), Me(l);
        return;
      case 'select':
        J('invalid', l), (a = f = n = null);
        for (e in u)
          if (u.hasOwnProperty(e) && ((c = u[e]), c != null))
            switch (e) {
              case 'value':
                n = c;
                break;
              case 'defaultValue':
                f = c;
                break;
              case 'multiple':
                a = c;
              default:
                el(l, t, e, c, u, null);
            }
        (t = n),
          (u = f),
          (l.multiple = !!a),
          t != null ? Zu(l, !!a, t, !1) : u != null && Zu(l, !!a, u, !0);
        return;
      case 'textarea':
        J('invalid', l), (n = e = a = null);
        for (f in u)
          if (u.hasOwnProperty(f) && ((c = u[f]), c != null))
            switch (f) {
              case 'value':
                a = c;
                break;
              case 'defaultValue':
                e = c;
                break;
              case 'children':
                n = c;
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(h(91));
                break;
              default:
                el(l, t, f, c, u, null);
            }
        Mi(l, a, e, n), Me(l);
        return;
      case 'option':
        for (i in u)
          if (u.hasOwnProperty(i) && ((a = u[i]), a != null))
            switch (i) {
              case 'selected':
                l.selected =
                  a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                el(l, t, i, a, u, null);
            }
        return;
      case 'dialog':
        J('beforetoggle', l), J('toggle', l), J('cancel', l), J('close', l);
        break;
      case 'iframe':
      case 'object':
        J('load', l);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < ce.length; a++) J(ce[a], l);
        break;
      case 'image':
        J('error', l), J('load', l);
        break;
      case 'details':
        J('toggle', l);
        break;
      case 'embed':
      case 'source':
      case 'link':
        J('error', l), J('load', l);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (o in u)
          if (u.hasOwnProperty(o) && ((a = u[o]), a != null))
            switch (o) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(h(137, t));
              default:
                el(l, t, o, a, u, null);
            }
        return;
      default:
        if (In(t)) {
          for (g in u)
            u.hasOwnProperty(g) &&
              ((a = u[g]), a !== void 0 && Gc(l, t, g, a, u, void 0));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && ((a = u[c]), a != null && el(l, t, c, a, u, null));
  }
  function no(l, t, u, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var e = null,
          n = null,
          f = null,
          c = null,
          i = null,
          o = null,
          g = null;
        for (m in u) {
          var T = u[m];
          if (u.hasOwnProperty(m) && T != null)
            switch (m) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                i = T;
              default:
                a.hasOwnProperty(m) || el(l, t, m, null, a, T);
            }
        }
        for (var r in a) {
          var m = a[r];
          if (((T = u[r]), a.hasOwnProperty(r) && (m != null || T != null)))
            switch (r) {
              case 'type':
                n = m;
                break;
              case 'name':
                e = m;
                break;
              case 'checked':
                o = m;
                break;
              case 'defaultChecked':
                g = m;
                break;
              case 'value':
                f = m;
                break;
              case 'defaultValue':
                c = m;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (m != null) throw Error(h(137, t));
                break;
              default:
                m !== T && el(l, t, r, m, a, T);
            }
        }
        kn(l, f, c, i, o, g, n, e);
        return;
      case 'select':
        m = f = c = r = null;
        for (n in u)
          if (((i = u[n]), u.hasOwnProperty(n) && i != null))
            switch (n) {
              case 'value':
                break;
              case 'multiple':
                m = i;
              default:
                a.hasOwnProperty(n) || el(l, t, n, null, a, i);
            }
        for (e in a)
          if (
            ((n = a[e]),
            (i = u[e]),
            a.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case 'value':
                r = n;
                break;
              case 'defaultValue':
                c = n;
                break;
              case 'multiple':
                f = n;
              default:
                n !== i && el(l, t, e, n, a, i);
            }
        (t = c),
          (u = f),
          (a = m),
          r != null
            ? Zu(l, !!u, r, !1)
            : !!a != !!u &&
              (t != null ? Zu(l, !!u, t, !0) : Zu(l, !!u, u ? [] : '', !1));
        return;
      case 'textarea':
        m = r = null;
        for (c in u)
          if (
            ((e = u[c]),
            u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                el(l, t, c, null, a, e);
            }
        for (f in a)
          if (
            ((e = a[f]),
            (n = u[f]),
            a.hasOwnProperty(f) && (e != null || n != null))
          )
            switch (f) {
              case 'value':
                r = e;
                break;
              case 'defaultValue':
                m = e;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && el(l, t, f, e, a, n);
            }
        Di(l, r, m);
        return;
      case 'option':
        for (var G in u)
          if (
            ((r = u[G]),
            u.hasOwnProperty(G) && r != null && !a.hasOwnProperty(G))
          )
            switch (G) {
              case 'selected':
                l.selected = !1;
                break;
              default:
                el(l, t, G, null, a, r);
            }
        for (i in a)
          if (
            ((r = a[i]),
            (m = u[i]),
            a.hasOwnProperty(i) && r !== m && (r != null || m != null))
          )
            switch (i) {
              case 'selected':
                l.selected =
                  r && typeof r != 'function' && typeof r != 'symbol';
                break;
              default:
                el(l, t, i, r, a, m);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Y in u)
          (r = u[Y]),
            u.hasOwnProperty(Y) &&
              r != null &&
              !a.hasOwnProperty(Y) &&
              el(l, t, Y, null, a, r);
        for (o in a)
          if (
            ((r = a[o]),
            (m = u[o]),
            a.hasOwnProperty(o) && r !== m && (r != null || m != null))
          )
            switch (o) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (r != null) throw Error(h(137, t));
                break;
              default:
                el(l, t, o, r, a, m);
            }
        return;
      default:
        if (In(t)) {
          for (var nl in u)
            (r = u[nl]),
              u.hasOwnProperty(nl) &&
                r !== void 0 &&
                !a.hasOwnProperty(nl) &&
                Gc(l, t, nl, void 0, a, r);
          for (g in a)
            (r = a[g]),
              (m = u[g]),
              !a.hasOwnProperty(g) ||
                r === m ||
                (r === void 0 && m === void 0) ||
                Gc(l, t, g, r, a, m);
          return;
        }
    }
    for (var v in u)
      (r = u[v]),
        u.hasOwnProperty(v) &&
          r != null &&
          !a.hasOwnProperty(v) &&
          el(l, t, v, null, a, r);
    for (T in a)
      (r = a[T]),
        (m = u[T]),
        !a.hasOwnProperty(T) ||
          r === m ||
          (r == null && m == null) ||
          el(l, t, T, r, a, m);
  }
  var jc = null,
    Xc = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ud(l) {
    switch (l) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Rd(l, t) {
    if (l === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === 'foreignObject' ? 0 : l;
  }
  function Qc(l, t) {
    return (
      l === 'textarea' ||
      l === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Zc = null;
  function fo() {
    var l = window.event;
    return l && l.type === 'popstate'
      ? l === Zc
        ? !1
        : ((Zc = l), !0)
      : ((Zc = null), !1);
  }
  var Nd = typeof setTimeout == 'function' ? setTimeout : void 0,
    co = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    pd = typeof Promise == 'function' ? Promise : void 0,
    io =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof pd < 'u'
        ? function (l) {
            return pd.resolve(null).then(l).catch(so);
          }
        : Nd;
  function so(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function cu(l) {
    return l === 'head';
  }
  function Hd(l, t) {
    var u = t,
      a = 0,
      e = 0;
    do {
      var n = u.nextSibling;
      if ((l.removeChild(u), n && n.nodeType === 8))
        if (((u = n.data), u === '/$')) {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if ((u & 1 && se(f.documentElement), u & 2 && se(f.body), u & 4))
              for (u = f.head, se(u), f = u.firstChild; f; ) {
                var c = f.nextSibling,
                  i = f.nodeName;
                f[za] ||
                  i === 'SCRIPT' ||
                  i === 'STYLE' ||
                  (i === 'LINK' && f.rel.toLowerCase() === 'stylesheet') ||
                  u.removeChild(f),
                  (f = c);
              }
          }
          if (e === 0) {
            l.removeChild(n), ge(t);
            return;
          }
          e--;
        } else
          u === '$' || u === '$?' || u === '$!'
            ? e++
            : (a = u.charCodeAt(0) - 48);
      else a = 0;
      u = n;
    } while (u);
    ge(t);
  }
  function Cc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (((t = t.nextSibling), u.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Cc(u), Jn(u);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (u.rel.toLowerCase() === 'stylesheet') continue;
      }
      l.removeChild(u);
    }
  }
  function vo(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== 'INPUT' || l.type !== 'hidden')) break;
      } else if (a) {
        if (!l[za])
          switch (t) {
            case 'meta':
              if (!l.hasAttribute('itemprop')) break;
              return l;
            case 'link':
              if (
                ((n = l.getAttribute('rel')),
                n === 'stylesheet' && l.hasAttribute('data-precedence'))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute('href') !==
                  (e.href == null || e.href === '' ? null : e.href) ||
                l.getAttribute('crossorigin') !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute('title') !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case 'style':
              if (l.hasAttribute('data-precedence')) break;
              return l;
            case 'script':
              if (
                ((n = l.getAttribute('src')),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute('type') !== (e.type == null ? null : e.type) ||
                  l.getAttribute('crossorigin') !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute('async') &&
                  !l.hasAttribute('itemprop'))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === 'input' && l.type === 'hidden') {
        var n = e.name == null ? null : '' + e.name;
        if (e.type === 'hidden' && l.getAttribute('name') === n) return l;
      } else return l;
      if (((l = mt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function yo(l, t, u) {
    if (t === '') return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== 'INPUT' || l.type !== 'hidden') &&
          !u) ||
        ((l = mt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Vc(l) {
    return (
      l.data === '$!' ||
      (l.data === '$?' && l.ownerDocument.readyState === 'complete')
    );
  }
  function oo(l, t) {
    var u = l.ownerDocument;
    if (l.data !== '$?' || u.readyState === 'complete') t();
    else {
      var a = function () {
        t(), u.removeEventListener('DOMContentLoaded', a);
      };
      u.addEventListener('DOMContentLoaded', a), (l._reactRetry = a);
    }
  }
  function mt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break;
        if (t === '/$') return null;
      }
    }
    return l;
  }
  var Lc = null;
  function qd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === '$' || u === '$!' || u === '$?') {
          if (t === 0) return l;
          t--;
        } else u === '/$' && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Yd(l, t, u) {
    switch (((t = An(u)), l)) {
      case 'html':
        if (((l = t.documentElement), !l)) throw Error(h(452));
        return l;
      case 'head':
        if (((l = t.head), !l)) throw Error(h(453));
        return l;
      case 'body':
        if (((l = t.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function se(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Jn(l);
  }
  var vt = new Map(),
    Bd = new Set();
  function zn(l) {
    return typeof l.getRootNode == 'function'
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Zt = O.d;
  O.d = { f: ho, r: ro, D: mo, C: go, L: So, m: bo, X: Eo, S: To, M: _o };
  function ho() {
    var l = Zt.f(),
      t = rn();
    return l || t;
  }
  function ro(l) {
    var t = Gu(l);
    t !== null && t.tag === 5 && t.type === 'form' ? t0(t) : Zt.r(l);
  }
  var ga = typeof document > 'u' ? null : document;
  function xd(l, t, u) {
    var a = ga;
    if (a && typeof t == 'string' && t) {
      var e = et(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof u == 'string' && (e += '[crossorigin="' + u + '"]'),
        Bd.has(e) ||
          (Bd.add(e),
          (l = { rel: l, crossOrigin: u, href: t }),
          a.querySelector(e) === null &&
            ((t = a.createElement('link')),
            Nl(t, 'link', l),
            Al(t),
            a.head.appendChild(t)));
    }
  }
  function mo(l) {
    Zt.D(l), xd('dns-prefetch', l, null);
  }
  function go(l, t) {
    Zt.C(l, t), xd('preconnect', l, t);
  }
  function So(l, t, u) {
    Zt.L(l, t, u);
    var a = ga;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + et(t) + '"]';
      t === 'image' && u && u.imageSrcSet
        ? ((e += '[imagesrcset="' + et(u.imageSrcSet) + '"]'),
          typeof u.imageSizes == 'string' &&
            (e += '[imagesizes="' + et(u.imageSizes) + '"]'))
        : (e += '[href="' + et(l) + '"]');
      var n = e;
      switch (t) {
        case 'style':
          n = Sa(l);
          break;
        case 'script':
          n = ba(l);
      }
      vt.has(n) ||
        ((l = p(
          {
            rel: 'preload',
            href: t === 'image' && u && u.imageSrcSet ? void 0 : l,
            as: t,
          },
          u
        )),
        vt.set(n, l),
        a.querySelector(e) !== null ||
          (t === 'style' && a.querySelector(de(n))) ||
          (t === 'script' && a.querySelector(ve(n))) ||
          ((t = a.createElement('link')),
          Nl(t, 'link', l),
          Al(t),
          a.head.appendChild(t)));
    }
  }
  function bo(l, t) {
    Zt.m(l, t);
    var u = ga;
    if (u && l) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        e =
          'link[rel="modulepreload"][as="' + et(a) + '"][href="' + et(l) + '"]',
        n = e;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          n = ba(l);
      }
      if (
        !vt.has(n) &&
        ((l = p({ rel: 'modulepreload', href: l }, t)),
        vt.set(n, l),
        u.querySelector(e) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (u.querySelector(ve(n))) return;
        }
        (a = u.createElement('link')),
          Nl(a, 'link', l),
          Al(a),
          u.head.appendChild(a);
      }
    }
  }
  function To(l, t, u) {
    Zt.S(l, t, u);
    var a = ga;
    if (a && l) {
      var e = ju(a).hoistableStyles,
        n = Sa(l);
      t = t || 'default';
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if ((f = a.querySelector(de(n)))) c.loading = 5;
        else {
          (l = p({ rel: 'stylesheet', href: l, 'data-precedence': t }, u)),
            (u = vt.get(n)) && Kc(l, u);
          var i = (f = a.createElement('link'));
          Al(i),
            Nl(i, 'link', l),
            (i._p = new Promise(function (o, g) {
              (i.onload = o), (i.onerror = g);
            })),
            i.addEventListener('load', function () {
              c.loading |= 1;
            }),
            i.addEventListener('error', function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            On(f, t, a);
        }
        (f = { type: 'stylesheet', instance: f, count: 1, state: c }),
          e.set(n, f);
      }
    }
  }
  function Eo(l, t) {
    Zt.X(l, t);
    var u = ga;
    if (u && l) {
      var a = ju(u).hoistableScripts,
        e = ba(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(ve(e))),
        n ||
          ((l = p({ src: l, async: !0 }, t)),
          (t = vt.get(e)) && Jc(l, t),
          (n = u.createElement('script')),
          Al(n),
          Nl(n, 'link', l),
          u.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function _o(l, t) {
    Zt.M(l, t);
    var u = ga;
    if (u && l) {
      var a = ju(u).hoistableScripts,
        e = ba(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(ve(e))),
        n ||
          ((l = p({ src: l, async: !0, type: 'module' }, t)),
          (t = vt.get(e)) && Jc(l, t),
          (n = u.createElement('script')),
          Al(n),
          Nl(n, 'link', l),
          u.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function Gd(l, t, u, a) {
    var e = (e = Q.current) ? zn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof u.precedence == 'string' && typeof u.href == 'string'
          ? ((t = Sa(u.href)),
            (u = ju(e).hoistableStyles),
            (a = u.get(t)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              u.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          u.rel === 'stylesheet' &&
          typeof u.href == 'string' &&
          typeof u.precedence == 'string'
        ) {
          l = Sa(u.href);
          var n = ju(e).hoistableStyles,
            f = n.get(l);
          if (
            (f ||
              ((e = e.ownerDocument || e),
              (f = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, f),
              (n = e.querySelector(de(l))) &&
                !n._p &&
                ((f.instance = n), (f.state.loading = 5)),
              vt.has(l) ||
                ((u = {
                  rel: 'preload',
                  as: 'style',
                  href: u.href,
                  crossOrigin: u.crossOrigin,
                  integrity: u.integrity,
                  media: u.media,
                  hrefLang: u.hrefLang,
                  referrerPolicy: u.referrerPolicy,
                }),
                vt.set(l, u),
                n || Ao(e, l, u, f.state))),
            t && a === null)
          )
            throw Error(h(528, ''));
          return f;
        }
        if (t && a !== null) throw Error(h(529, ''));
        return null;
      case 'script':
        return (
          (t = u.async),
          (u = u.src),
          typeof u == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = ba(u)),
              (u = ju(e).hoistableScripts),
              (a = u.get(t)),
              a ||
                ((a = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                u.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, l));
    }
  }
  function Sa(l) {
    return 'href="' + et(l) + '"';
  }
  function de(l) {
    return 'link[rel="stylesheet"][' + l + ']';
  }
  function jd(l) {
    return p({}, l, { 'data-precedence': l.precedence, precedence: null });
  }
  function Ao(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = l.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2);
        }),
        Nl(t, 'link', u),
        Al(t),
        l.head.appendChild(t));
  }
  function ba(l) {
    return '[src="' + et(l) + '"]';
  }
  function ve(l) {
    return 'script[async]' + l;
  }
  function Xd(l, t, u) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = l.querySelector('style[data-href~="' + et(u.href) + '"]');
          if (a) return (t.instance = a), Al(a), a;
          var e = p({}, u, {
            'data-href': u.href,
            'data-precedence': u.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement('style')),
            Al(a),
            Nl(a, 'style', e),
            On(a, u.precedence, l),
            (t.instance = a)
          );
        case 'stylesheet':
          e = Sa(u.href);
          var n = l.querySelector(de(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Al(n), n;
          (a = jd(u)),
            (e = vt.get(e)) && Kc(a, e),
            (n = (l.ownerDocument || l).createElement('link')),
            Al(n);
          var f = n;
          return (
            (f._p = new Promise(function (c, i) {
              (f.onload = c), (f.onerror = i);
            })),
            Nl(n, 'link', a),
            (t.state.loading |= 4),
            On(n, u.precedence, l),
            (t.instance = n)
          );
        case 'script':
          return (
            (n = ba(u.src)),
            (e = l.querySelector(ve(n)))
              ? ((t.instance = e), Al(e), e)
              : ((a = u),
                (e = vt.get(n)) && ((a = p({}, u)), Jc(a, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement('script')),
                Al(e),
                Nl(e, 'link', a),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case 'void':
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), On(a, u.precedence, l));
    return t.instance;
  }
  function On(l, t, u) {
    for (
      var a = u.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = a.length ? a[a.length - 1] : null,
        n = e,
        f = 0;
      f < a.length;
      f++
    ) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = u.nodeType === 9 ? u.head : u), t.insertBefore(l, t.firstChild));
  }
  function Kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Jc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Dn = null;
  function Qd(l, t, u) {
    if (Dn === null) {
      var a = new Map(),
        e = (Dn = new Map());
      e.set(u, a);
    } else (e = Dn), (a = e.get(u)), a || ((a = new Map()), e.set(u, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), u = u.getElementsByTagName(l), e = 0;
      e < u.length;
      e++
    ) {
      var n = u[e];
      if (
        !(
          n[za] ||
          n[Bl] ||
          (l === 'link' && n.getAttribute('rel') === 'stylesheet')
        ) &&
        n.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var f = n.getAttribute(t) || '';
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Zd(l, t, u) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        u,
        t === 'title' ? l.querySelector('head > title') : null
      );
  }
  function zo(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (l = t.disabled), typeof t.precedence == 'string' && l == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Cd(l) {
    return !(l.type === 'stylesheet' && (l.state.loading & 3) === 0);
  }
  var ye = null;
  function Oo() {}
  function Do(l, t, u) {
    if (ye === null) throw Error(h(475));
    var a = ye;
    if (
      t.type === 'stylesheet' &&
      (typeof u.media != 'string' || matchMedia(u.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = Sa(u.href),
          n = l.querySelector(de(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == 'object' &&
              typeof l.then == 'function' &&
              (a.count++, (a = Mn.bind(a)), l.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = n),
            Al(n);
          return;
        }
        (n = l.ownerDocument || l),
          (u = jd(u)),
          (e = vt.get(e)) && Kc(u, e),
          (n = n.createElement('link')),
          Al(n);
        var f = n;
        (f._p = new Promise(function (c, i) {
          (f.onload = c), (f.onerror = i);
        })),
          Nl(n, 'link', u),
          (t.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Mn.bind(a)),
          l.addEventListener('load', t),
          l.addEventListener('error', t));
    }
  }
  function Mo() {
    if (ye === null) throw Error(h(475));
    var l = ye;
    return (
      l.stylesheets && l.count === 0 && wc(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var u = setTimeout(function () {
              if ((l.stylesheets && wc(l, l.stylesheets), l.unsuspend)) {
                var a = l.unsuspend;
                (l.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function Mn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) wc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Un = null;
  function wc(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Un = new Map()),
        t.forEach(Uo, l),
        (Un = null),
        Mn.call(l));
  }
  function Uo(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Un.get(l);
      if (u) var a = u.get(null);
      else {
        (u = new Map()), Un.set(l, u);
        for (
          var e = l.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var f = e[n];
          (f.nodeName === 'LINK' || f.getAttribute('media') !== 'not all') &&
            (u.set(f.dataset.precedence, f), (a = f));
        }
        a && u.set(null, a);
      }
      (e = t.instance),
        (f = e.getAttribute('data-precedence')),
        (n = u.get(f) || a),
        n === a && u.set(null, e),
        u.set(f, e),
        this.count++,
        (a = Mn.bind(this)),
        e.addEventListener('load', a),
        e.addEventListener('error', a),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var oe = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: x,
    _currentValue2: x,
    _threadCount: 0,
  };
  function Ro(l, t, u, a, e, n, f, c) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Cn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Cn(0)),
      (this.hiddenUpdates = Cn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function Vd(l, t, u, a, e, n, f, c, i, o, g, T) {
    return (
      (l = new Ro(l, t, u, f, c, i, o, T)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Fl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Uf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: u, cache: t }),
      Hf(n),
      l
    );
  }
  function Ld(l) {
    return l ? ((l = ku), l) : ku;
  }
  function Kd(l, t, u, a, e, n) {
    (e = Ld(e)),
      a.context === null ? (a.context = e) : (a.pendingContext = e),
      (a = Wt(t)),
      (a.payload = { element: u }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (u = $t(l, a, t)),
      u !== null && (ut(u, l, t), Va(u, l, t));
  }
  function Jd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Wc(l, t) {
    Jd(l, t), (l = l.alternate) && Jd(l, t);
  }
  function wd(l) {
    if (l.tag === 13) {
      var t = $u(l, 67108864);
      t !== null && ut(t, l, 67108864), Wc(l, 67108864);
    }
  }
  var Rn = !0;
  function No(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = O.p;
    try {
      (O.p = 2), $c(l, t, u, a);
    } finally {
      (O.p = n), (S.T = e);
    }
  }
  function po(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = O.p;
    try {
      (O.p = 8), $c(l, t, u, a);
    } finally {
      (O.p = n), (S.T = e);
    }
  }
  function $c(l, t, u, a) {
    if (Rn) {
      var e = kc(a);
      if (e === null) xc(l, t, a, Nn, u), $d(l, a);
      else if (qo(e, l, t, u, a)) a.stopPropagation();
      else if (($d(l, a), t & 4 && -1 < Ho.indexOf(l))) {
        for (; e !== null; ) {
          var n = Gu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = mu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << (31 - $l(f));
                      (c.entanglements[1] |= i), (f &= ~i);
                    }
                    At(n), (ll & 6) === 0 && ((on = St() + 500), fe(0));
                  }
                }
                break;
              case 13:
                (c = $u(n, 2)), c !== null && ut(c, n, 2), rn(), Wc(n, 2);
            }
          if (((n = kc(a)), n === null && xc(l, t, a, Nn, u), n === e)) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else xc(l, t, a, null, u);
    }
  }
  function kc(l) {
    return (l = lf(l)), Fc(l);
  }
  var Nn = null;
  function Fc(l) {
    if (((Nn = null), (l = xu(l)), l !== null)) {
      var t = j(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (((l = dl(t)), l !== null)) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Nn = l), null;
  }
  function Wd(l) {
    switch (l) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (mv()) {
          case ii:
            return 2;
          case si:
            return 8;
          case Ee:
          case gv:
            return 32;
          case di:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ic = !1,
    iu = null,
    su = null,
    du = null,
    he = new Map(),
    re = new Map(),
    vu = [],
    Ho =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function $d(l, t) {
    switch (l) {
      case 'focusin':
      case 'focusout':
        iu = null;
        break;
      case 'dragenter':
      case 'dragleave':
        su = null;
        break;
      case 'mouseover':
      case 'mouseout':
        du = null;
        break;
      case 'pointerover':
      case 'pointerout':
        he.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        re.delete(t.pointerId);
    }
  }
  function me(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: u,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Gu(t)), t !== null && wd(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function qo(l, t, u, a, e) {
    switch (t) {
      case 'focusin':
        return (iu = me(iu, l, t, u, a, e)), !0;
      case 'dragenter':
        return (su = me(su, l, t, u, a, e)), !0;
      case 'mouseover':
        return (du = me(du, l, t, u, a, e)), !0;
      case 'pointerover':
        var n = e.pointerId;
        return he.set(n, me(he.get(n) || null, l, t, u, a, e)), !0;
      case 'gotpointercapture':
        return (
          (n = e.pointerId), re.set(n, me(re.get(n) || null, l, t, u, a, e)), !0
        );
    }
    return !1;
  }
  function kd(l) {
    var t = xu(l.target);
    if (t !== null) {
      var u = j(t);
      if (u !== null) {
        if (((t = u.tag), t === 13)) {
          if (((t = dl(u)), t !== null)) {
            (l.blockedOn = t),
              Ov(l.priority, function () {
                if (u.tag === 13) {
                  var a = tt();
                  a = Vn(a);
                  var e = $u(u, a);
                  e !== null && ut(e, u, a), Wc(u, a);
                }
              });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function pn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = kc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        (Pn = a), u.target.dispatchEvent(a), (Pn = null);
      } else return (t = Gu(u)), t !== null && wd(t), (l.blockedOn = u), !1;
      t.shift();
    }
    return !0;
  }
  function Fd(l, t, u) {
    pn(l) && u.delete(t);
  }
  function Yo() {
    (Ic = !1),
      iu !== null && pn(iu) && (iu = null),
      su !== null && pn(su) && (su = null),
      du !== null && pn(du) && (du = null),
      he.forEach(Fd),
      re.forEach(Fd);
  }
  function Hn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      Ic ||
        ((Ic = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, Yo)));
  }
  var qn = null;
  function Id(l) {
    qn !== l &&
      ((qn = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        qn === l && (qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t],
            a = l[t + 1],
            e = l[t + 2];
          if (typeof a != 'function') {
            if (Fc(a || u) === null) continue;
            break;
          }
          var n = Gu(u);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Ff(n, { pending: !0, data: e, method: u.method, action: a }, a, e));
        }
      }));
  }
  function ge(l) {
    function t(i) {
      return Hn(i, l);
    }
    iu !== null && Hn(iu, l),
      su !== null && Hn(su, l),
      du !== null && Hn(du, l),
      he.forEach(t),
      re.forEach(t);
    for (var u = 0; u < vu.length; u++) {
      var a = vu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < vu.length && ((u = vu[0]), u.blockedOn === null); )
      kd(u), u.blockedOn === null && vu.shift();
    if (((u = (l.ownerDocument || l).$$reactFormReplay), u != null))
      for (a = 0; a < u.length; a += 3) {
        var e = u[a],
          n = u[a + 1],
          f = e[Xl] || null;
        if (typeof n == 'function') f || Id(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute('formAction')) {
            if (((e = n), (f = n[Xl] || null))) c = f.formAction;
            else if (Fc(e) !== null) continue;
          } else c = f.action;
          typeof c == 'function' ? (u[a + 1] = c) : (u.splice(a, 3), (a -= 3)),
            Id(u);
        }
      }
  }
  function Pc(l) {
    this._internalRoot = l;
  }
  (Yn.prototype.render = Pc.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var u = t.current,
        a = tt();
      Kd(u, a, l, t, null, null);
    }),
    (Yn.prototype.unmount = Pc.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Kd(l.current, 2, null, l, null, null), rn(), (t[Bu] = null);
        }
      });
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = ri();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < vu.length && t !== 0 && t < vu[u].priority; u++);
      vu.splice(u, 0, l), u === 0 && kd(l);
    }
  };
  var Pd = X.version;
  if (Pd !== '19.1.1') throw Error(h(527, Pd, '19.1.1'));
  O.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == 'function'
        ? Error(h(188))
        : ((l = Object.keys(l).join(',')), Error(h(268, l)));
    return (
      (l = H(t)),
      (l = l !== null ? E(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Bo = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: S,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bn.isDisabled && Bn.supportsFiber)
      try {
        (Ea = Bn.inject(Bo)), (Wl = Bn);
      } catch {}
  }
  return (
    (be.createRoot = function (l, t) {
      if (!R(l)) throw Error(h(299));
      var u = !1,
        a = '',
        e = r0,
        n = m0,
        f = g0,
        c = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (u = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (c = t.unstable_transitionCallbacks)),
        (t = Vd(l, 1, !1, null, null, u, a, e, n, f, c, null)),
        (l[Bu] = t.current),
        Bc(l),
        new Pc(t)
      );
    }),
    (be.hydrateRoot = function (l, t, u) {
      if (!R(l)) throw Error(h(299));
      var a = !1,
        e = '',
        n = r0,
        f = m0,
        c = g0,
        i = null,
        o = null;
      return (
        u != null &&
          (u.unstable_strictMode === !0 && (a = !0),
          u.identifierPrefix !== void 0 && (e = u.identifierPrefix),
          u.onUncaughtError !== void 0 && (n = u.onUncaughtError),
          u.onCaughtError !== void 0 && (f = u.onCaughtError),
          u.onRecoverableError !== void 0 && (c = u.onRecoverableError),
          u.unstable_transitionCallbacks !== void 0 &&
            (i = u.unstable_transitionCallbacks),
          u.formState !== void 0 && (o = u.formState)),
        (t = Vd(l, 1, !0, t, u ?? null, a, e, n, f, c, i, o)),
        (t.context = Ld(null)),
        (u = t.current),
        (a = tt()),
        (a = Vn(a)),
        (e = Wt(a)),
        (e.callback = null),
        $t(u, e, a),
        (u = a),
        (t.current.lanes = u),
        Aa(t, u),
        At(t),
        (l[Bu] = t.current),
        Bc(l),
        new Yn(t)
      );
    }),
    (be.version = '19.1.1'),
    be
  );
}
var sv;
function Ko() {
  if (sv) return ui.exports;
  sv = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (X) {
        console.error(X);
      }
  }
  return A(), (ui.exports = Lo()), ui.exports;
}
var Jo = Ko();
const wo = '_root_paau8_1',
  Wo = '_logo_paau8_15',
  $o = '_react_paau8_24',
  ko = '_notation_paau8_28',
  Fo = '_circle_paau8_33',
  Io = '_active_paau8_39',
  Po = '_deactive_paau8_42',
  l1 = '_card_paau8_61',
  Gn = {
    root: wo,
    logo: Wo,
    react: $o,
    notation: ko,
    circle: Fo,
    active: Io,
    deactive: Po,
    'logo-spin': '_logo-spin_paau8_1',
    card: l1,
    'read-the-docs': '_read-the-docs_paau8_65',
  },
  vv = { 'dev.app.com': 'https://92.62.119.184:8080' },
  t1 = '_calendar_1hiqr_1',
  u1 = '_week_1hiqr_17',
  a1 = '_day_1hiqr_39',
  e1 = '_active_1hiqr_71',
  n1 = '_deactive_1hiqr_79',
  f1 = '_empty_1hiqr_85',
  c1 = '_skeleton_1hiqr_91',
  i1 = '_shimmer_1hiqr_1',
  s1 = '_details_1hiqr_117',
  yt = {
    calendar: t1,
    week: u1,
    day: a1,
    active: e1,
    deactive: n1,
    empty: f1,
    skeleton: c1,
    shimmer: i1,
    details: s1,
  };
function yv(A) {
  const { week: X, isSkeleton: U, dayOffHandler: h } = A,
    R = U ? 'skeleton' : 'empty';
  return L.jsx('div', {
    className: yt.week,
    children: X.map((j) =>
      j.isWorking === void 0
        ? L.jsx(v1, { value: '  ', style: R })
        : L.jsx(d1, {
            value: j.value,
            isWorking: j.isWorking,
            dayOffHandler: h,
          })
    ),
  });
}
function d1(A) {
  const { value: X, isWorking: U, dayOffHandler: h } = A,
    [R, j] = ou.useState(U),
    dl = R ? 'active' : 'deactive';
  function Sl() {
    j(!R), h(X);
  }
  return L.jsx('div', {
    className: yt.day + ' ' + yt[dl],
    onClick: Sl,
    children: X,
  });
}
function v1(A) {
  const { value: X, style: U } = A;
  return L.jsx('div', { className: yt.day + ' ' + yt[U], children: X });
}
function y1(A, X) {
  if (!X.length) return A;
  const U = [...A];
  return (
    U.forEach((h) => {
      h.forEach((R) => {
        X.includes(R.value) && (R.isWorking = !1);
      });
    }),
    U
  );
}
function o1(A) {
  console.log('Calendar render');
  const { grafikData: X, dayOffHandler: U } = A,
    h = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    R = y1(X.calendar.schema, X.userGrafikData.dayOff);
  return L.jsxs('div', {
    className: yt.calendar,
    children: [
      L.jsx('div', {
        className: yt.week,
        children: h.map((j) =>
          L.jsx('div', {
            className: yt.day,
            style: { color: '#888787' },
            children: j,
          })
        ),
      }),
      L.jsx('hr', { style: { width: '100%' } }),
      R.map((j) => L.jsx(yv, { week: j, dayOffHandler: U })),
    ],
  });
}
function h1() {
  const A = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    X = [];
  for (let U = 0; U < 3; U++) {
    let h = [];
    for (let R = 0; R < 7; R++) h.push('');
    X.push(h);
  }
  return L.jsxs('div', {
    className: yt.calendar,
    children: [
      L.jsx('div', {
        className: yt.week,
        children: A.map((U) =>
          L.jsx('div', { className: yt.day, children: U })
        ),
      }),
      L.jsx('hr', { style: { width: '100%' } }),
      X.map((U) => L.jsx(yv, { week: U, isSkeleton: !0 })),
    ],
  });
}
function r1(A) {
  const { changeHandler: X, userDetails: U } = A;
  function h(R) {
    const j = R.target.value;
    X(j);
  }
  return L.jsxs('div', {
    className: yt.details,
    children: [
      L.jsxs('h3', { children: ['Пожелания:', U] }),
      L.jsxs('label', {
        children: [
          'Детали:',
          '  ',
          L.jsx('input', {
            type: 'text',
            id: 'details',
            placeholder: 'Ваши пожелания',
            onChange: () => {
              h(event);
            },
          }),
        ],
      }),
    ],
  });
}
const Ta = window.Telegram.WebApp,
  ov = Ta.initDataUnsafe.user.id,
  ci = Ta.MainButton;
ci.text = 'Сохранить';
ci.onClick(m1);
const xn = { dayOff: [], details: '' };
function dv(A) {
  const { isActive: X } = A,
    U = X ? 'active' : 'deactive';
  return L.jsx('div', { className: Gn.circle + ' ' + Gn[U] });
}
async function m1() {
  const A = xn,
    U = (
      await fetch(`${vv['dev.app.com']}/grafik/${ov}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(A),
      })
    ).ok;
  console.log(U),
    U
      ? (Ta.showPopup({
          title: 'Отправлено',
          message: 'Данные отправлены боту. Спасибо',
          buttons: [{ id: 'close_popup', type: 'close', text: 'Закрыть' }],
        }),
        Ta.close())
      : (Ta.showPopup({
          title: 'Что-то пошло не так',
          message: 'Произошла ошибка, обратись к @dentupo',
          buttons: [{ id: 'close_popup', type: 'close', text: 'Закрыть' }],
        }),
        Ta.close());
}
function g1() {
  const [A, X] = ou.useState(!1),
    [U, h] = ou.useState(null),
    [R, j] = ou.useState(null),
    [dl, Sl] = ou.useState(''),
    [H, E] = ou.useState(!1);
  function p(I) {
    const W = I.userGrafikData.local_name,
      pl = W.first_name[0].toUpperCase() + W.first_name.slice(1).toLowerCase();
    return `${
      W.second_name[0].toUpperCase() + W.second_name.slice(1).toLowerCase()
    } ${pl}`;
  }
  function fl(I) {
    console.log('ДО ', R);
    const W = [...R],
      pl = W.indexOf(I);
    pl == -1 ? W.push(+I) : W.splice(pl, 1),
      W.sort((Ml, zt) => Ml - zt),
      j(W),
      (xn.dayOff = [...W]);
  }
  function ul(I) {
    Sl(I), (xn.details = String(I));
  }
  if (
    (ou.useEffect(() => {
      (async () => {
        try {
          const I = await fetch(`${vv['dev.app.com']}/grafik/${ov}`);
          if (I.status == 403) console.log(I.status), E(!0);
          else {
            const W = await I.json();
            X(!0),
              h(W),
              j(W.userGrafikData.dayOff),
              Sl(W.userGrafikData.details),
              Object.assign(xn, {
                dayOff: W.userGrafikData.dayOff,
                details: W.userGrafikData.details,
              });
          }
        } catch (I) {
          console.log('Ошибка в запросе данных', I), E(!0);
        }
      })();
    }, []),
    H)
  )
    return L.jsxs('div', {
      children: [
        L.jsx('h1', { children: 'Отказ в доступе' }),
        L.jsx('h2', { children: 'ДТолько для зарегистрированных сотрудников' }),
        L.jsx('p', {
          children:
            'Обатитесь к старшему администратору для получения разрешения и перезагрузите страницу',
        }),
      ],
    });
  if (A) {
    console.log('выходные', R), ci.show();
    const I = p(U);
    return L.jsxs(L.Fragment, {
      children: [
        L.jsx('h1', { children: 'График' }),
        L.jsx('h2', { children: I }),
        L.jsx('h3', {
          children: `с ${U.calendar.info.startDate}.${U.calendar.info.month} по ${U.calendar.info.endDate}.${U.calendar.info.month}`,
        }),
        L.jsxs('div', {
          className: Gn.notation,
          children: [
            L.jsx(dv, { isActive: !0 }),
            ' - рабочий ',
            L.jsx(dv, { isActive: !1 }),
            ' - выходной',
          ],
        }),
        L.jsx(o1, { grafikData: U, dayOffHandler: fl }),
        L.jsxs('div', {
          className: Gn.dayoff,
          children: ['твои выходные:', R.length ? R.join() : 'без выходных'],
        }),
        L.jsx(r1, { changeHandler: ul, userDetails: dl }),
      ],
    });
  } else return L.jsx(h1, {});
}
document.body.style.setProperty('--active-color', '#33bac7');
document.body.style.setProperty('--deactive-color', '#d74f4f');
Jo.createRoot(document.getElementById('root')).render(
  L.jsx(ou.StrictMode, { children: L.jsx(g1, {}) })
);
