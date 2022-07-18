!(function (e) {
  var t = {}

  function n(r) {
    if (t[r]) return t[r].exports
    var i = (t[r] = {
      i: r,
      l: !1,
      exports: {},
    })
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: r,
        })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          value: e,
        }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t]
            }.bind(null, i)
          )
      return r
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
    n((n.s = 1))
})([
  function (e, t) {
    e.exports = {
      init: function () {
        dataLayer.push({
          event: 'virtualpageview',
          division: '',
          page_axis: '',
          region_chanel: 'us',
          locale: 'en',
          page_type: 'appointment booking',
          page: window.location.href.split('/us')[1],
          divisionFlag: '',
          category: 'service',
        })
      },
    }
  },
  function (e, t, n) {
    n(2), (e.exports = n(0))
  },
  function (e, t, n) {
    var r = n(0)
    window.addEventListener('DOMContentLoaded', function () {
      ;(function e() {
        window.jQuery
          ? (!(function () {
              var e = {
                  '/fashion/': ['fashion', 'jewelry', 'watches', 'fragrance', 'makeup', 'skincare'],
                  '/fine-jewelry/': [
                    'jewelry',
                    'watches',
                    'fashion',
                    'fragrance',
                    'makeup',
                    'skincare',
                  ],
                  '/high-jewelry/': [
                    'jewelry',
                    'watches',
                    'fashion',
                    'fragrance',
                    'makeup',
                    'skincare',
                  ],
                  '/watches/': ['watches', 'jewelry', 'fashion', 'fragrance', 'makeup', 'skincare'],
                  '/fragrance/': [
                    'fragrance',
                    'makeup',
                    'skincare',
                    'fashion',
                    'jewelry',
                    'watches',
                  ],
                  '/makeup/': ['makeup', 'skincare', 'fragrance', 'fashion', 'jewelry', 'watches'],
                  '/skincare/': [
                    'skincare',
                    'makeup',
                    'fragrance',
                    'fashion',
                    'jewelry',
                    'watches',
                  ],
                  '/care-services/': [
                    'watches',
                    'jewelry',
                    'fashion',
                    'makeup',
                    'skincare',
                    'fragrance',
                  ],
                  '/care_services_hub_v2/': [
                    'watches',
                    'jewelry',
                    'fashion',
                    'makeup',
                    'skincare',
                    'fragrance',
                  ],
                },
                t = window.sessionStorage.mtLastVisitedURL
              if (t)
                for (var n = Object.keys(e), r = 0; r < n.length; r++)
                  if (t.includes(n[r]))
                    for (var i = e[n[r]], a = 0; a < i.length; a++) {
                      var o = `oab-${i[a]}-service`,
                        c = $(`#${o}`)
                      $(`#${o}`).remove(), $('.ft-oab-content-carousel').append(c)
                    }
            })(),
            $.when(
              $.getScript(
                'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
              ),
              $.Deferred(function (e) {
                $(e.resolve)
              })
            ).done(c))
          : setTimeout(function () {
              e()
            }, 50)
      })(),
        r.init(),
        (function () {
          try {
            Typekit.load()
          } catch (e) {
            console.log(e)
          }
        })()
    }),
      (window.dataLayer = window.dataLayer || []),
      (window.ftCurrentSlideIndex = 0)
    const i = [
        'https://www.chanel.com/us/',
        'https://origin-prd-one-www.chanel.com/us/',
        'https://origin-prd-one-staged-www.chanel.com/us/',
        'https://origin-prd-one-staged-emea-www.chanel.com/us/',
      ],
      a = (function () {
        for (var e = 'uat', t = 0; t < i.length; t++)
          window.location.href.includes(i[t]) && (e = 'prod')
        return e
      })()

    function o() {
      return 'prod' === a
    }

    function c() {
      var e = $('.ft-oab-content-carousel')
      e.slick({
        dots: !1,
        arrows: !1,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: !1,
        arrows: !0,
        nextArrow: $(this).find('.ft-oab-content-carousel__next-button'),
        prevArrow: $(this).find('.ft-oab-content-carousel__previous-button'),
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              focusOnSelect: !0,
              centerMode: !0,
            },
          },
        ],
      }),
        (window.ftCurrentSlideIndex = window.ftCurrentSlideIndex + 1),
        s(),
        e.on('afterChange', function (e, t, n) {
          ;(window.ftCurrentSlideIndex = n + 1), s(), $('.slick-current button').focus(), d()
        }),
        (function () {
          const e = o() ? '' : '',
            t = o() ? '' : '',
            n = o() ? '' : '',
            r = o() ? '' : '',
            i = o()
              ? '07595940-1ed7-4329-b124-89a24c3939be'
              : '58bd1c40-afa4-4bf9-a087-26de15f33787',
            c = o() ? '' : '',
            s = o()
              ? '462c9e86-6764-4064-b5e5-18c72a9f4a24'
              : 'b0b28a41-44bd-46bc-bd53-fc8ffc2ee83f',
            l = o()
              ? 'ffe3f66c-a09e-4d6a-b159-461f6b54f1ad'
              : 'f5478d6d-8ecb-4709-bbf8-48e60a15a0a5'

          function f(e) {
            !(function (e) {
              var t = e.id,
                n = document.querySelector(t),
                r = (function (e) {
                  var t = 'monetate-brickwork-button-' + Math.floor(2e3 * Math.random())
                  return (
                    '<button class="ft-button-black" aria-label="Select a service - ' +
                    e.name +
                    '"  id="' +
                    t +
                    '"> <span><span>' +
                    e.name +
                    '</span></span> </button>'
                  )
                })(e)
              ;(n.innerHTML = r), console.log('brickwork option: ', e, n)
            })({
              id: '#brickwork-' + e.id + '-appt-booking',
              filterServiceIds: e.filterServiceIds,
              startsWith: e.startsWith,
              name: e.name,
            }),
              $('#brickwork-' + e.id + '-appt-booking').click(() => {
                u('book an appointment', e.id, 'click')
              }),
              (function (e) {
                var t = document.querySelector(e.id),
                  n = (function (e) {
                    var t = e.id.substring(1),
                      n = a,
                      r = e.startsWith || 'location',
                      i = (function (e) {
                        var t = []
                        for (var n in e) e.hasOwnProperty(n) && e[n] && t.push(n + '=' + e[n])
                        return t.join('&')
                      })({
                        domElementId: t,
                        startsWith: r,
                        locationId: e.initLocation || '',
                        serviceId: e.initService || '',
                      })
                    return (function (e) {
                      var t = document.createElement('script')
                      return (
                        (t.type = 'text/javascript'),
                        (t.src = e.fullUrl),
                        console.log('getScript option parameter: ', e),
                        console.log('option service ids: ', e.filterServiceIds),
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
                        console.log('script before return: ', t),
                        t
                      )
                    })({
                      fullUrl:
                        {
                          uat: 'https://chanel-uat.brickworksoftware.com/render/widgets?',
                          prod: 'https://chanel.brickworksoftware.com/render/widgets?',
                        }[n] + i,
                      idNameOnly: t,
                      startsWith: r,
                      filterServiceIds: e.filterServiceIds || [],
                      showServiceIds: e.showServiceIds || [],
                    })
                  })(e)
                t.append(n)
              })({
                id: '#oab-' + e.id + '-service',
                filterServiceIds: e.filterServiceIds,
                startsWith: e.startsWith,
                name: e.name,
              }),
              $('#oab-' + e.id + '-service').click(() => {
                u('book an appointment', e.id, 'click')
              })
          }

          function u(e, t, n) {
            dataLayer.push({
              eventCategory: e,
              eventAction: t,
              eventLabel: n,
              event: 'uaevent',
            })
          }
          f({
            id: 'fashion',
            filterServiceIds: [s, l],
            startsWith: 'service',
            name: 'fashion',
          }),
            f({
              id: 'fragrance',
              filterServiceIds: [i],
              startsWith: 'service',
              name: 'fragrance and beauty',
            }),
            $('.ft-oab-content-carousel__previous-button').click(() => {
              u('carousel', 'home', 'swipe')
            }),
            $('.ft-oab-content-carousel__next-button').click(() => {
              u('carousel', 'home', 'swipe')
            }),
            d()
        })()
    }

    function s() {
      var e = document.getElementsByClassName('slick-slide').length,
        t = window.ftCurrentSlideIndex
      window.matchMedia('(min-width: 600px)').matches &&
        ((e = Math.ceil(e / 3)), (t = window.ftCurrentSlideIndex > 3 ? 2 : 1)),
        (document.getElementById('oab-carousel-index').innerHTML =
          t + '<span class="is-sr-only">of</span><span aria-hidden="true">/</span>' + e)
    }

    function d() {
      for (var e = document.getElementsByClassName('slick-slide'), t = 0; t < e.length; t++) {
        var n = e[t]
        n.classList.contains('slick-active')
          ? n.querySelector('button').removeAttribute('tabIndex')
          : n.querySelector('button').setAttribute('tabIndex', '-1')
      }
    }

    function hideLastParagraph() {
      let container = $('.ft-oab-parent-container .ft-row').last()
      if (container[0].innerHTML.includes('Explore collections')) {
        container.hide()
      }
    }

    hideLastParagraph()
  },
])
