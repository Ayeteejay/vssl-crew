'use strict';

/**
 * voice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::voice.voice');
