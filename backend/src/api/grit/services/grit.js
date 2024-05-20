'use strict';

/**
 * grit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grit.grit');
