!function(){"use strict";function t(t){t.defaults.xsrfHeaderName="X-CSRFToken",t.defaults.xsrfCookieName="csrftoken"}angular.module("thinkster",["thinkster.config","thinkster.routes","thinkster.accounts","thinkster.authentication","thinkster.layout","thinkster.posts","thinkster.utils"]),angular.module("thinkster.config",[]),angular.module("thinkster.routes",["ngRoute"]),angular.module("thinkster").run(t),t.$inject=["$http"]}();