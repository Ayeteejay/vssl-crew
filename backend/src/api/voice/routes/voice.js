'use strict';

/**
 * voice router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::voice.voice');
