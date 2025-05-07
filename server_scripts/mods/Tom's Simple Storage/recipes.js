ServerEvents.recipes(event => {
    event.remove({ id: 'toms_storage:crafting_terminal' });
    event.remove({ id: 'toms_storage:inventory_cable_connector_filtered' });
    event.remove({ id: 'toms_storage:inventory_cable_connector_framed' });
    event.remove({ id: 'toms_storage:inventory_cable_connector' });
    event.remove({ id: 'toms_storage:inventory_cable_framed' });
    event.remove({ id: 'toms_storage:inventory_cable' });
    event.remove({ id: 'toms_storage:inventory_connector' });
    event.remove({ id: 'toms_storage:inventory_proxy' });
    event.remove({ id: 'toms_storage:level_emitter' });
    event.remove({ id: 'toms_storage:storage_terminal' });
    event.remove({ id: 'toms_storage:trim' });


    // Crafting Terminal
    event.recipes.create.mechanical_crafting(
        'toms_storage:ts.crafting_terminal',
        [
            ' P ',
            'SSS',
            'SSS',
            'SSS',
            'AML'
        ],
        {
            P: 'toms_storage:ts.storage_terminal',
            S: 'create:mechanical_crafter',
            L: 'create:linked_controller',
            M: 'create:precision_mechanism',
            A: 'create:sturdy_sheet'
        }
    ).id('toms_storage:crafting_terminal');


    //Inventory Cable Connector Filtered
    event.shaped(
        'toms_storage:ts.inventory_cable_connector_filtered',
        [
            "I",
            "S",
            "P"
        ],
        {
            P: '#forge:plates/brass',
            S: 'toms_storage:ts.inventory_cable_connector',
            I: 'create:electron_tube'
        }
    ).id('toms_storage:inventory_cable_connector_filtered');

    //Inventory Cable Connector Framed
    event.shaped(
        'toms_storage:ts.inventory_cable_connector_framed',
        [
            "SSS",
            "SCS",
            "SSS"
        ],
        {
            C: 'toms_storage:ts.inventory_cable_connector',
            S: '#forge:rods/wooden'

        }
    ).id('toms_storage:inventory_cable_connector_framed');

    // Inventory Cable Connector
    event.shapeless(
        'toms_storage:ts.inventory_cable_connector',
        [
            'toms_storage:ts.inventory_cable',
            'create:chute'
        ],
    ).id('toms_storage:inventory_cable_connector');

    // Inventory Cable Framed
    event.shaped(
        'toms_storage:ts.inventory_cable_framed',
        [
            'SSS',
            'SCS',
            'SSS'
        ],
        {
            C: 'toms_storage:ts.inventory_cable',
            S: '#forge:rods/wooden'
        }
    ).id('toms_storage:inventory_cable_framed');

    // Inventory Cable
    event.shapeless(
        `8x toms_storage:ts.inventory_cable`,
        [
            'create:brass_sheet',
            'minecraft:dried_kelp'
        ]
    ).id('toms_storage:inventory_cable');

    // Inventory Connector
    event.shapeless(
        'toms_storage:ts.inventory_connector',
        [
            'create:brass_casing',
            'create:chute'
        ]
    ).id('toms_storage:inventory_connector')

    // Inventory Hopper Basic


    // Inventory Proxy
    event.shapeless(
        'toms_storage:ts.inventory_proxy',
        [
            'toms_storage:ts.inventory_connector',
            'create:smart_chute'
        ]
    ).id('toms_storage:inventory_proxy');

    // Level Emitter
    event.shapeless(
        'toms_storage:ts.level_emitter',
        [
            'create:content_observer',
            'toms_storage:ts.inventory_cable'
        ]
    ).id('toms_storage:level_emitter');

    // Storage Terminal
    event.shaped(
        'toms_storage:ts.storage_terminal',
        [
            ' C ',
            'cGg',
            'PPP'
        ],
        {
            C: 'create:precision_mechanism',
            c: 'create:content_observer',
            P: '#minecraft:buttons',
            G: 'create:display_link',
            g: 'create:display_board'
        }
    ).id('toms_storage:storage_terminal');

    // Trim
    event.shaped(
        `2x toms_storage:ts.trim`,
        [
            'SSS',
            'SXS',
            'SSS'
        ],
        {
            X: 'create:brass_tunnel',
            S: '#forge:rods/wooden'
        }
    ).id('toms_storage:trim');








})