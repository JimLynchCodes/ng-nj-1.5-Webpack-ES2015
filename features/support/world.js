// features/support/world.js
// var zombie = require('zombie');
function World() {
  console.log('world running.');
}

module.exports = function() {
  this.World = World;
};
