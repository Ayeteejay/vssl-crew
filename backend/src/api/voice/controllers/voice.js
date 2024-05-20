'use strict';

/**
 * voice controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::voice.voice');
