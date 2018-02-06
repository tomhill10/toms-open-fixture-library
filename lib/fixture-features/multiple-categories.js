/* eslint-disable no-unused-vars */
const AbstractChannel = require(`../model/AbstractChannel.js`);
const Capability = require(`../model/Capability.js`);
const Channel = require(`../model/Channel.js`);
const FineChannel = require(`../model/FineChannel.js`);
const Fixture = require(`../model/Fixture.js`);
const Manufacturer = require(`../model/Manufacturer.js`);
const Matrix = require(`../model/Matrix.js`);
const MatrixChannel = require(`../model/MatrixChannel.js`);
const MatrixChannelReference = require(`../model/MatrixChannelReference.js`);
const Meta = require(`../model/Meta.js`);
const Mode = require(`../model/Mode.js`);
const NullChannel = require(`../model/NullChannel.js`);
const Physical = require(`../model/Physical.js`);
const Range = require(`../model/Range.js`);
const SwitchingChannel = require(`../model/SwitchingChannel.js`);
const TemplateChannel = require(`../model/TemplateChannel.js`);
/* eslint-enable no-unused-vars */

module.exports = [{
  name: `Multiple categories`,

  /**
   * @param {!Fixture} fixture The Fixture instance
   * @returns {!boolean} true if the fixture uses the feature
   */
  hasFeature: fixture => fixture.categories.length > 1
}];