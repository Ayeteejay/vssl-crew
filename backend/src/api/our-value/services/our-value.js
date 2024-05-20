'use strict';

/**
 * our-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-value.our-value');
