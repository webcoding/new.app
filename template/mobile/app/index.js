// Generated by CoffeeScript 1.8.0
(function() {
  var App, Spine, Stage,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require('lib/setup');

  Spine = require('spine');

  Stage = require('spine.mobile').Stage;

  App = (function(_super) {
    __extends(App, _super);

    function App() {
      App.__super__.constructor.apply(this, arguments);
    }

    return App;

  })(Stage.Global);

  module.exports = App;

}).call(this);