!(function (e) {
  var t = {}
  function n(o) {
    if (t[o]) return t[o].exports
    var i = (t[o] = { i: o, l: !1, exports: {} })
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var o = Object.create(null)
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            o,
            i,
            function (t) {
              return e[t]
            }.bind(null, i)
          )
      return o
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 5))
})([
  function (e, t) {
    e.exports = function (e) {
      if (e.length <= 1) return new Error('Please specify more then just one character, ')
      var t = e.substr(0, 1),
        n = e.substr(1)
      switch (t) {
        case '#':
          return document.getElementById(n)
        default:
          return document.querySelectorAll(e)
      }
    }
  },
  function (e, t, n) {
    var o = n(0)
    e.exports = {
      getHeaderOffset: function () {
        return o('.header__level-one')[0].clientHeight + o('#ft-spotlight-nav').clientHeight
      },
      isDesktop: function () {
        return window.innerWidth >= 1160
      },
      debounce: function (e, t, n) {
        var o
        return function () {
          var i = this,
            r = arguments,
            c = n && !o
          clearTimeout(o),
            (o = setTimeout(function () {
              ;(o = null), n || e.apply(i, r)
            }, t)),
            c && e.apply(i, r)
        }
      },
      getHeaderOffsetX: function () {
        return (
          o('.header__level-one')[0].clientHeight +
          o('#ft-spotlight-nav').clientHeight +
          o('.ft-mobile-header')[0].clientHeight
        )
      },
    }
  },
  function (e, t, n) {
    n(0), n(1)
    e.exports = {
      init: function () {
        dataLayer.push({
          newsletter_optin: 'newsletter non opt in',
          locale: 'en_US',
          region_chanel: 'us',
          page_sub_category: '',
          logged: 'not logged',
          division: 'fsh',
          page_type: 'connect - book an appointment',
          cartId: '',
          cartValue: '',
          divisionFlag: 'fsh',
          userId: '',
          collection: '',
          category: 'connect',
          lookid: '',
          sub_category_level1: '',
          sub_category_level2: '',
          sub_category_level3: '',
          page_name: 'Appointment Booking',
          site_type_device: (function () {
            var e = window.matchMedia('(max-width: 600px)'),
              t = window.matchMedia('(min-width: 601px) and (max-width: 960px)')
            return e.matches ? 'mobile' : t.matches ? 'tablet' : 'desktop'
          })(),
          content_type: 'private-space-mda',
        })
      },
    }
  },
  function (e, t, n) {
    n(0), n(1), n(2)
    e.exports = function () {}
  },
  function (e, t) {
    e.exports = {
      load: function () {
        const e = '654',
          t = '754',
          n = 'b2e3bd49-52bf-44dc-b232-82faf5e432cb'
        o = '66ef696c-edf2-40b2-ba08-00b6eeb02b35'
        function r(e) {
          var t = e.id,
            n = document.querySelector(t),
            i = (function (e) {
              var t = 'monetate-brickwork-button-' + Math.floor(2e3 * Math.random())
              return (
                '<button aria-label="Book Now ' +
                e.name +
                '" class="apptBookingWidget" data-starts-with="location" id="' +
                t +
                '" data-location-id="' +
                e.initLocation +
                '"> <span class="button__wrapper"><span> Book Now</span></span> </button>'
              )
            })(e),
            r = (function (e) {
              var t = e.id.substring(1),
                n = e.startsWith || 'location',
                i = (function (e) {
                  var t = []
                  for (var n in e) e.hasOwnProperty(n) && e[n] && t.push(n + '=' + e[n])
                  return t.join('&')
                })({
                  domElementId: t,
                  startsWith: n,
                  locationId: e.initLocation || '',
                  serviceId: e.initService || '',
                })
              return (function (e) {
                var t = document.createElement('script')
                return (
                  (t.type = 'text/javascript'),
                  (t.src = e.fullUrl),
                  console.log('option.url', e.fullUrl),
                  (t.onload = function () {
                    ;(window.brickworkWidgets = window.__brickworkWidgets__ || {}),
                      (window.brickworkWidgets[e.idNameOnly] =
                        window.brickworkWidgets[e.idNameOnly] || {}),
                      (window.brickworkWidgets[e.idNameOnly].ApptLayout = {
                        startsWith: e.startsWith,
                        locale: 'en',
                        hideLocation: !1,
                      }),
                      (window.brickworkWidgets[e.idNameOnly].ApptServicePage = {
                        filterServiceIds: e.filterServiceIds,
                        showServiceIds: e.showServiceIds,
                      })
                  }),
                  t
                )
              })({
                fullUrl:
                  {
                    uat: 'https://chanel-uat.brickworksoftware.com/render/widgets?',
                    prod: 'https://chanel.brickworksoftware.com/render/widgets?',
                  }[o] + i,
                idNameOnly: t,
                startsWith: n,
                filterServiceIds: e.filterServiceIds || [],
                showServiceIds: e.showServiceIds || [],
              })
            })(e)
          n.innerHTML = i
        }
        function c(e, t, n) {
          dataLayer.push({ eventCategory: e, eventAction: t, eventLabel: n, event: 'uaevent' })
        }
        r({
          id: '#brickwork-service1-appt-booking',
          initService: n,
          initLocation: e,
          filterServiceIds: [n],
          startsWith: 'service',
          name: 'New York Employee Sale',
        }),
          r({
            id: '#brickwork-service2-appt-booking',
            initService: n,
            initLocation: t,
            filterServiceIds: [n],
            startsWith: 'service',
            name: 'New Jersery Employee Sale',
          }),
          document
            .getElementById('brickwork-service1-appt-booking')
            .addEventListener('click', function () {
              c('connect', 'book an appointment', 'book a boutique appointment')
            }),
          document
            .getElementById('brickwork-service2-appt-booking')
            .addEventListener('click', function () {
              c('connect', 'book an appointment', 'book a virtual appointment')
            })
      },
    }
    const n = [
        'https://www.chanel.com/us/',
        'https://origin-prd-one-www.chanel.com/us/',
        'https://origin-prd-one-staged-www.chanel.com/us/',
      ],
      o = (function () {
        for (var e = 'uat', t = 0; t < n.length; t++)
          window.location.href.includes(n[t]) && (e = 'prod')
        return e
      })()
  },
  function (e, t, n) {
    n(6), n(4), n(0), n(3), n(2), (e.exports = n(1))
  },
  function (e, t, n) {
    n(0)
    var o = n(3),
      i = (n(1), n(2)),
      r = n(4)
    window.addEventListener('DOMContentLoaded', function () {
      o(),
        i.init(),
        r.load(),
        (function () {
          try {
            Typekit.load()
          } catch (e) {
            console.log(e)
          }
        })()
    }),
      (window.dataLayer = window.dataLayer || [])
  },
])
