#!/usr/bin/env node
var argv = process.argv.slice(2),
    fs   = require("fs"),
    fd   = require("path");

var cs       = require("coffee-script");
if (cs.register) cs.register(); // so we can require .coffee files
var Template = require("./src/template");

var expandPath = function(path, dir){
  if (fd.basename(path) == path)
    path = dir + path  
  return fd.normalize(path);
};

var camelize = function(str){
  return str.replace(/-|_+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^(.)?/, function(match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
};

var help = [
    "usage: spine [options] ",
    "",
    "Generates a spine app using the specified command-line options",
    "",
    "options:",
    " app path          Generates a new Spine application",
    " mobile path       Generates a new Spine Mobile application",
    " controller name   Generates a Spine Controller",
    " model name        Generates a Spine Model",
].join('\n');

var generators = {};

generators.app = generators.new = function(){
  var template = __dirname + "/../templates/app";
  var path     = fd.normalize(argv[1]);
  
  // Create parent dir
  if (fs.existsSync(path)) throw(path + " already exists");
  fs.mkdirSync(path, 0775);
  
  (new Template(template, path)).write();
};

generators.mobile = function(){
  var template = __dirname + "/../templates/mobile";
  var path     = fd.normalize(argv[1]);
  
  // Create parent dir
  if (fs.existsSync(path)) throw(path + " already exists");
  fs.mkdirSync(path, 0775);
  
  (new Template(template, path)).write();
};

generators.controller = function(){
  var template = __dirname + "/../templates/controller.coffee";
  var values   = {name: camelize(fd.basename(argv[1]))};
  var path     = expandPath(argv[1], "./app/controllers/") + ".coffee";
  
  (new Template(template, path, values)).write();
  generators.controllerSpec();
};

generators.controllerSpec = function(){
  if ( !fs.existsSync("./test/specs") ) return;
  
  var template = __dirname + "/../templates/spec.controller.coffee";
  var values   = {name: camelize(fd.basename(argv[1]))};
  values.path  = values.name.toLowerCase();
  var path     = expandPath(argv[1], "./test/specs/controllers/") + ".coffee";
  
  (new Template(template, path, values)).write();
};

generators.model = function(){
  var template = __dirname + "/../templates/model.coffee";
  var values   = {name: camelize(fd.basename(argv[1]))};
  var path     = expandPath(argv[1], "./app/models/") + ".coffee";
  
  (new Template(template, path, values)).write();
  generators.modelSpec();
};

generators.modelSpec = function(){
  if ( !fs.existsSync("./test/specs") ) return;

  var template = __dirname + "/../templates/spec.model.coffee";
  var values   = {name: camelize(fd.basename(argv[1]))};
  values.path  = values.name.toLowerCase();
  var path     = expandPath(argv[1], "./test/specs/models/") + ".coffee";
  
  (new Template(template, path, values)).write();
};

if (generators[argv[0]])
  generators[argv[0]]();
else
  console.log(help);
