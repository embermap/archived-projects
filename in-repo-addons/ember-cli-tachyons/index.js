/* eslint-env node */
'use strict';

var path = require('path');
var stew = require('broccoli-stew');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-tachyons',

  isDevelopingAddon: function() {
    return true;
  },

  treeForStyles(tree) {
    var trees = tree ? [ tree ] : [];

    var dir = path.dirname(require.resolve('tachyons-sass/tachyons.scss'));
    var newTree = stew.mv(dir, './ember-cli-tachyons');
    trees.push(newTree);

    return new MergeTrees(trees);
  }
};
