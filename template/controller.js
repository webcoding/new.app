// Generated by CoffeeScript 1.8.0
(function() {
  var Spine, {{name}},
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Spine = require('spine');

  {{name}} = (function(_super) {
    __extends({{name}}, _super);

    function {{name}}() {
      {{name}}.__super__.constructor.apply(this, arguments);
    }

    return {{name}};

  })(Spine.Controller);

  module.exports = {{name}};

}).call(this);
