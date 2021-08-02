const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
        zigbeeModel: ['ZGRC-KEY-013'],
        model: 'ZGRC-KEY-013',
        vendor: 'Sunricher',
        description: '4 zone remote and dimmer',
        fromZigbee: [fz.command_recall, fz.command_on, fz.command_off, fz.command_move, fz.command_stop, fz.battery],
        exposes: [e.battery(), e.action(['recall_*', 'on', 'off', 'brightness_stop', 'brightness_move_up', 'brightness_move_down'])],
        toZigbee: [],
        meta: {multiEndpoint: true, battery: {dontDividePercentage: true}},
        configure: [],
};

module.exports = definition;
