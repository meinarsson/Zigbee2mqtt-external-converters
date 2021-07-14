const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    {
        zigbeeModel: ['ZGRC-KEY-013'],
        model: 'ZGRC-KEY-013',
        vendor: 'Sunricher',
        description: '4 zone remote and dimmer',
        fromZigbee: [fz.battery, fz.command_move,
            fz.command_stop, fz.command_on,
            fz.command_off, fz.command_recall],
        exposes: [e.battery(), e.action(['brightness_move_up', 'brightness_move_down', 'brightness_stop', 'on', 'off', 'recall_*'])],
        toZigbee: [],
        whiteLabel: [{vendor: 'RGB Genie', model: 'ZGRC-KEY-013'}],
        meta: {multiEndpoint: true, battery: {dontDividePercentage: true}},
    },
    {
        zigbeeModel: ['ICZB-RM11S'],
        model: 'ICZB-RM11S',
        vendor: 'iCasa',
        description: 'Zigbee 3.0 remote control',
        fromZigbee: [fz.command_recall, fz.command_on, fz.command_off, fz.command_move, fz.command_stop, fz.battery],
        exposes: [e.battery(), e.action(['recall_*', 'on', 'off', 'brightness_stop', 'brightness_move_up', 'brightness_move_down'])],
        toZigbee: [],
    },
    {
        zigbeeModel: ['4512705'],
        model: '4512705',
        vendor: 'Namron',
        description: 'Zigbee 4 channel remote control',
        fromZigbee: [fz.command_on, fz.command_off, fz.battery, fz.command_move, fz.command_stop, fz.command_recall],
        toZigbee: [],
        exposes: [e.battery(), e.action([
            'on_l1', 'off_l1', 'brightness_move_up_l1', 'brightness_move_down_l1', 'brightness_stop_l1',
            'on_l2', 'off_l2', 'brightness_move_up_l2', 'brightness_move_down_l2', 'brightness_stop_l2',
            'on_l3', 'off_l3', 'brightness_move_up_l3', 'brightness_move_down_l3', 'brightness_stop_l3',
            'on_l4', 'off_l4', 'brightness_move_up_l4', 'brightness_move_down_l4', 'brightness_stop_l4',
            'recall_*'])],
        meta: {multiEndpoint: true},
        endpoint: (device) => {
            return {l1: 1, l2: 2, l3: 3, l4: 4};
        },
        whiteLabel: [{vendor: 'Sunricher', model: 'SR-ZG9001K12-DIM-Z4'}],
    },
    {
        zigbeeModel: ['RGBgenie ZB-5004'],
        model: 'ZB-5004',
        vendor: 'RGB Genie',
        description: 'Zigbee 3.0 remote control',
        fromZigbee: [fz.command_recall, fz.command_on, fz.command_off, fz.command_move, fz.command_stop, fz.battery],
        exposes: [e.battery(), e.action(['recall_*', 'on', 'off', 'brightness_stop', 'brightness_move_up', 'brightness_move_down'])],
        toZigbee: [],
    },
};

module.exports = definition;
