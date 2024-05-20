'use strict';

/**
 * positioning service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::positioning.positioning');
