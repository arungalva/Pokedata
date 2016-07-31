var slidingTabsDirective = angular.module("ionic").directive("ionSlideTabs", ["$timeout", "$compile", "$interval", "$ionicSlideBoxDelegate", "$ionicScrollDelegate", "$ionicGesture", function(e, a, t, l, n, i) {
    return {
        require: "^ionSlideBox",
        restrict: "A",
        link: function(t, i, s, r) {
            var o, c, f, u, b, g, h, p = {
                    slideTabsScrollable: !1
                },
                v = function() {
                    angular.isDefined(s.slideTabsScrollable) && "false" === s.slideTabsScrollable && (p.slideTabsScrollable = !1);
                    var e = '<li ng-repeat="(key, value) in tabs" ng-click="onTabTabbed($event, {{key}})" class="slider-slide-tab" ng-class="{true:\'col col-50\', fase:\' col col-33 \'}[$index>2]" ng-bind-html="value"></li>';
                    p.slideTabsScrollable ? (f = "ion-slide-tabs-handle-" + Math.floor(1e4 * Math.random() + 1), h = angular.element('<ion-scroll delegate-handle="' + f + '" class="slidingTabs" direction="x" scrollbar-x="false"><ul>' + e + '</ul> <div class="tab-indicator-wrapper"><div class="tab-indicator"></div></div> </ion-scroll>')) : h = angular.element('<div class="slidingTabs"><ul>' + e + '</ul> <div class="tab-indicator-wrapper"><div class="tab-indicator"></div></div> </div>'), g = angular.element(i);
                    var r = a(h);
                    g.parent().prepend(h), r(t), b = angular.element(h[0].querySelector(".tab-indicator"));
                    var d = g.attr("delegate-handle"),
                        u = h.attr("delegate-handle");
                    o = l, d && (o = o.$getByHandle(d)), p.slideTabsScrollable && (c = n, u && (c = c.$getByHandle(u))), m(), T(), k()
                },
                m = function() {
                    ionic.onGesture("dragleft", t.onSlideMove, g[0]), ionic.onGesture("dragright", t.onSlideMove, g[0]), ionic.onGesture("release", t.onSlideChange, g[0])
                },
                T = function() {
                    if (!angular.isDefined(u) || 0 == u.length) return !1;
                    tabsList = h.find("ul");
                    var e = 0;
                    angular.forEach(u, function(a, t) {
                        var l = angular.element(a);
                        e += l[0].offsetWidth
                    }), p.slideTabsScrollable ? angular.element(h[0].querySelector(".scroll")).css("width", e + 1 + "px") : u.css("width", tabsList[0].offsetWidth / u.length + "px"), k()
                },
                S = function(e, a) {
                    var t = angular.element(a[0].querySelector(".ink"));
                    angular.isDefined(t) && 0 != t.length || (t = angular.element("<span class='ink'></span>"), a.prepend(t)), t.removeClass("animate"), t.offsetHeight || t.offsetWidth || (d = Math.max(a[0].offsetWidth, a[0].offsetHeight), t.css("height", d + "px"), t.css("width", d + "px")), x = e.offsetX - t[0].offsetWidth / 2, y = e.offsetY - t[0].offsetHeight / 2, t.css("top", y + "px"), t.css("left", x + "px"), t.addClass("animate")
                },
                k = function() {
                    if (!angular.isDefined(u) || 0 == u.length) return !1;
                    var e = o.currentIndex(),
                        a = angular.element(u[e]),
                        l = a.prop("offsetLeft"),
                        n = a[0].offsetWidth;
                    if (console.log(t.tabs), o.update(), b.css({
                            "-webkit-transition-duration": "300ms",
                            "-webkit-transform": "translate(" + l + "px,0px)",
                            width: n + "px"
                        }), p.slideTabsScrollable && c) {
                        var i = 40;
                        c.scrollTo(l - i, 0, !0)
                    }
                    u.removeClass("tab-active"), a.addClass("tab-active")
                },
                w = function(e, a, t, l) {
                    var n = angular.element(u[a]),
                        i = angular.element(u[e]),
                        s = n.prop("offsetLeft"),
                        r = i.prop("offsetLeft"),
                        d = Math.abs(s - r);
                    if (!(0 == e && a == o.slidesCount() - 1 && "right" == l || 0 == a && e == o.slidesCount() - 1 && "left" == l)) {
                        var f = n[0].offsetWidth,
                            g = i[0].offsetWidth,
                            h = f - g,
                            v = 0,
                            m = 0;
                        if (e > a ? (v = s - d * (t - 1), m = f - h * (1 - t)) : a > e && (v = s + d * (t - 1), m = f + h * (t - 1)), b.css({
                                "-webkit-transition-duration": "0ms",
                                "-webkit-transform": "translate(" + v + "px,0px)",
                                width: m + "px"
                            }), p.slideTabsScrollable && c) {
                            var T = 40;
                            c.scrollTo(v - T, 0, !1)
                        }
                    }
                };
            t.onTabTabbed = function(e, a) {
                S(e, angular.element(e.currentTarget)), o.slide(a), k()
            }, t.tabs = [], t.addTabContent = function(a) {
                t.tabs.push(a), t.$apply(), e(function() {
                    u = angular.element(h[0].querySelector("ul").querySelectorAll(".slider-slide-tab")), k(), T()
                })
            }, t.onSlideChange = function(e) {
                k()
            }, t.onSlideMove = function() {
                var e = g[0].getElementsByClassName("slider-slide"),
                    a = o.currentIndex(),
                    t = angular.element(e[a]),
                    l = t.css("-webkit-transform").replace(/[^0-9\-.,]/g, "").split(",")[0],
                    n = (a + 1) % e.length;
                l > g.prop("offsetLeft") && (n = a - 1, n < 0 && (n = e.length - 1));
                var i = (angular.element(e[n]), l / g[0].offsetWidth),
                    s = i > 0 ? "right" : "left";
                i = Math.abs(i), w(a, n, i, s)
            }, v()
        },
        controller: ["$scope", function(a) {
            this.addTab = function(t) {
                e(function() {
                    a.addTabContent && a.addTabContent(t)
                })
            }
        }]
    }
}]);
slidingTabsDirective.directive("ionSlideTabLabel", [function() {
    return {
        require: "^ionSlideTabs",
        link: function(e, a, t, l) {
            l.addTab(t.ionSlideTabLabel)
        }
    }
}]);
