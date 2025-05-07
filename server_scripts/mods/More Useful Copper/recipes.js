ServerEvents.recipes(event => {
    event.remove({ mod: 'more_useful_copper' })
    /* VANILLA RECIPES */

    event.shaped(
        `${MUC_ID}bucket`,
        [
            '   ',
            'i i',
            ' i ',
        ],
        {
            i: "#forge:ingots/copper"
        }
    ).id(`${MUC_ID}bucket`);

    event.shaped(
        `${MUC_ID}shears`,
        [
            '   ',
            '  i',
            ' i ',
        ],
        {
            i: "#forge:ingots/copper"
        }
    ).id(`${MUC_ID}shears`);

    event.shaped(
        `${MUC_ID}chain`,
        [
            ' n ',
            ' i ',
            ' n ',
        ],
        {
            n: "#forge:nuggets/copper",
            i: "#forge:ingots/copper"
        }
    ).id(`${MUC_ID}chain`);

    event.shaped(
        `${MUC_ID}pressure_plate`,
        [
            '   ',
            'ii ',
            '   ',
        ],
        {
            i: "#forge:ingots/copper"
        }
    ).id(`${MUC_ID}pressure_plate`);

    event.stonecutting(`4x ${MUC_ID}button`, '#forge:ingots/copper').id(`${MUC_ID}button`);

    const allItems = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe', 'helmet', 'chestplate', 'leggings', 'boots', 'horse_armor'];

    event.blasting('create:copper_nugget', allItems.map((e) => `${MUC_ID}${e}`)).xp(0.1).id('kjs:copper_nugget_from_blasting');
    event.smelting('create:copper_nugget', allItems.map((e) => `${MUC_ID}${e}`)).xp(0.1).id('kjs:copper_nugget_from_smelting');



    /* CREATE RECIPES */
    // Crushing recipes
    const createCrushing = event.recipes.create.crushing;
    const crushingBaseId = 'create:crushing/copper/';
    createCrushing([Item.of('create:copper_nugget', 2), Item.of('create:copper_nugget', 2).withChance(0.5)], '#create:scrap_copper_small').id(`${crushingBaseId}scrap_copper_small`);
    createCrushing([Item.of('create:copper_nugget', 4), Item.of('create:copper_nugget', 4).withChance(0.5)], '#create:scrap_copper_medium').id(`${crushingBaseId}scrap_copper_medium`);
    createCrushing(['minecraft:copper_ingot', Item.of('minecraft:copper_ingot').withChance(0.5)], '#create:scrap_copper_large').id(`${crushingBaseId}scrap_copper_large`);
    createCrushing(
        [
            Item.of('create:copper_nugget', 4),
            Item.of('create:copper_nugget', 4).withChance(0.5),
            Item.of('minecraft:snowball', 2),
            Item.of('minecraft:snowball', 2).withChance(0.5)
        ],
        `${MUC_ID}powder_snow_bucket`
    ).id(`${crushingBaseId}scrap_bucket_powder_snow`);
    createCrushing(
        [
            Item.of('minecraft:copper_ingot', 1),
            Item.of('minecraft:leather', 1).withChance(0.5),
            Item.of('minecraft:copper_ingot', 3).withChance(0.25),
            Item.of('create:copper_nugget', 4).withChance(0.25)
        ],
        `${MUC_ID}horse_armor`
    ).id(`create:crushing/copper_horse_armor`);


    //Item Application
    function createItemApplication(results, ingredients, id) {
        const resultsArray = Array.isArray(results) ? results : [results];
        const ingredientsArray = Array.isArray(ingredients) ? ingredients : [ingredients];
        event.custom({
            "type": "create:item_application",
            "ingredients": ingredientsArray.map((e) => ((typeof e === "string" && e.startsWith("#")) ? { "tag": e.substring(1) } : { "item": e })),
            "results": resultsArray.map((e) => ({ "item": e }))
        }).id(id);
    }

    event.remove({ id: 'create_connected:item_application/splashing_catalyst_from_empty' });
    event.remove({ id: 'create_connected:item_application/freezing_catalyst_from_empty' });
    createItemApplication('create_connected:fan_splashing_catalyst', ['create_connected:empty_fan_catalyst', '#c:water_buckets'], 'create_connected:item_application/splashing_catalyst_from_empty');
    createItemApplication('create_connected:fan_freezing_catalyst', ['create_connected:empty_fan_catalyst', '#forge:powder_snow_bucket'], 'create_connected:item_application/freezing_catalyst_from_empty');

    // Draining
    function createDraining(output, bucket) {
        event.recipes.create.emptying(output, bucket).id(`create:empty_${bucket.replace('more_useful_copper:', 'muc_')}_of_${output[0].replace(':', '_')}`);
    }
    createDraining(['minecraft:water', `${MUC_ID}bucket`], `${MUC_ID}water_bucket`);
    createDraining(['minecraft:milk', `${MUC_ID}bucket`], `${MUC_ID}milk_bucket`);
    createDraining(['tconstruct:powdered_snow', `${MUC_ID}bucket`], `${MUC_ID}powder_snow_bucket`);

    //Filling
    const createFilling = event.recipes.create.filling;
    createFilling(`${MUC_ID}water_bucket`, [Fluid.water(), `${MUC_ID}bucket`]).id('create:fill_muc_bucket_with_minecraft_water');
    createFilling(`${MUC_ID}milk_bucket`, [Fluid.of('minecraft:milk'), `${MUC_ID}bucket`]).id('create:fill_muc_bucket_with_minecraft_milk');
    createFilling(`${MUC_ID}powder_snow_bucket`, [Fluid.of('tconstruct:powdered_snow'), `${MUC_ID}bucket`]).id('create:fill_muc_bucket_with_tconstruct_powdered_snow');

    // Haunting 
    const createHaunting = event.recipes.create.haunting;
    const hauntingCoppermail = ['shovel', 'pickaxe', 'axe', 'hoe', 'sword', 'helmet', 'chestplate', 'leggings', 'boots'];
    hauntingCoppermail.forEach((e) => createHaunting(`${MUC_ID}${e}`, `${CSA_ID}copper_${e}`).id(`kjs:copper_${e}_haunting`));


    /* TINKERS RECIPES */
    // Filling buckets
    function tcFilling(cast, fluid, result) {
        event.custom(
            {
                "type": "tconstruct:casting_table",
                "cast": {
                    "item": cast
                },
                "cast_consumed": true,
                "cooling_time": 5,
                "fluid": {
                    "amount": 1000,
                    "tag": fluid
                },
                "result": result
            }
        ).id(`tconstruct:smeltery/casting/muc/${fluid.split(':')[1]}`)
    }

    tcFilling(`${MUC_ID}bucket`, 'mantle:water', `${MUC_ID}water_bucket`);
    tcFilling(`${MUC_ID}bucket`, 'forge:milk', `${MUC_ID}milk_bucket`);
    tcFilling(`${MUC_ID}bucket`, 'forge:powdered_snow', `${MUC_ID}powder_snow_bucket`);

    // Copper Modifier Compats
    event.remove({ id: 'tconstruct:tools/modifiers/upgrade/freezing' })
    event.custom({
        "type": "tconstruct:modifier",
        "allow_crystal": true,
        "inputs": [
            {
                "tag": "forge:powder_snow_bucket"
            }
        ],
        "level": {
            "max": 3
        },
        "result": "tconstruct:freezing",
        "slots": {
            "upgrades": 1
        },
        "tools": [
            {
                "tag": "tconstruct:modifiable/melee"
            },
            {
                "tag": "tconstruct:modifiable/ranged/bows"
            },
            {
                "tag": "tconstruct:modifiable/armor/worn"
            },
            {
                "tag": "tconstruct:modifiable/shields"
            }
        ]
    }).id('tconstruct:tools/modifiers/upgrade/freezing');

    event.remove({ id: 'tconstruct:tools/modifiers/upgrade/sweeping_edge' })
    event.custom(
        {
            "type": "tconstruct:incremental_modifier",
            "allow_crystal": true,
            "amount_per_item": 1,
            "input": {
                "tag": "forge:chain"
            },
            "level": {
                "max": 3
            },
            "needed_per_level": 18,
            "result": "tconstruct:sweeping_edge",
            "slots": {
                "upgrades": 1
            },
            "tools": {
                "tag": "tconstruct:modifiable/melee/sword"
            }
        }
    ).id('tconstruct:tools/modifiers/upgrade/sweeping_edge');


    //Melting
    //Bucket
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
                "item": `${MUC_ID}bucket`
            },
            "result": {
                "amount": 270,
                "tag": "forge:molten_copper"
            },
            "temperature": 500,
            "time": 86
        }
    );

    //Helmet
    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "byproducts": [
                {
                    "amount": 150,
                    "tag": "forge:molten_gold",
                    "unit_size": 10
                }
            ],
            "ingredient": {
                "item": `${MUC_ID}helmet`
            },
            "result": {
                "amount": 300,
                "tag": "forge:molten_copper",
                "unit_size": 10
            },
            "temperature": 500,
            "time": 91
        }
    );

    //Chestplate
    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "byproducts": [
                {
                    "amount": 240,
                    "tag": "forge:molten_gold",
                    "unit_size": 10
                }
            ],
            "ingredient": {
                "item": `${MUC_ID}chestplate`
            },
            "result": {
                "amount": 480,
                "tag": "forge:molten_copper",
                "unit_size": 10
            },
            "temperature": 500,
            "time": 115
        }
    );

    //Leggings
    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "byproducts": [
                {
                    "amount": 210,
                    "tag": "forge:molten_gold",
                    "unit_size": 10
                }
            ],
            "ingredient": {
                "item": `${MUC_ID}leggings`
            },
            "result": {
                "amount": 420,
                "tag": "forge:molten_copper",
                "unit_size": 10
            },
            "temperature": 500,
            "time": 108
        }
    );

    //Boots
    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "byproducts": [
                {
                    "amount": 120,
                    "tag": "forge:molten_gold",
                    "unit_size": 10
                }
            ],
            "ingredient": {
                "item": `${MUC_ID}boots`
            },
            "result": {
                "amount": 240,
                "tag": "forge:molten_copper",
                "unit_size": 10
            },
            "temperature": 500,
            "time": 81
        }
    );

    //Pickaxe and Axe
    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "byproducts": [
                {
                    "amount": 90,
                    "tag": "forge:molten_gold",
                    "unit_size": 10
                }
            ],
            "ingredient": {
                "item": "tconstruct:melting/coppermail/tools_costing_3"
            },
            "result": {
                "amount": 180,
                "tag": "forge:molten_copper"
            },
            "temperature": 500,
            "time": 86
        }
    );

    //Sword and Hoe
    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "byproducts": [
                {
                    "amount": 60,
                    "tag": "forge:molten_gold",
                    "unit_size": 10
                }
            ],
            "ingredient": {
                "item": "tconstruct:melting/coppermail/tools_costing_2"
            },
            "result": {
                "amount": 120,
                "tag": "forge:molten_copper"
            },
            "temperature": 500,
            "time": 71
        }
    );

    //Shovel
    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "byproducts": [
                {
                    "amount": 30,
                    "tag": "forge:molten_gold",
                    "unit_size": 10
                }
            ],
            "ingredient": {
                "item": "tconstruct:melting/coppermail/tools_costing_1"
            },
            "result": {
                "amount": 60,
                "tag": "forge:molten_copper"
            },
            "temperature": 500,
            "time": 35
        }
    );

    //Horse Armor
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
                "item": `${MUC_ID}horse_armor`
            },
            "result": {
                "amount": 630,
                "tag": "forge:molten_copper"
            },
            "temperature": 500,
            "time": 250
        }
    );


    /* IMMERSIVE ENGINEERING */
    //Bottling
    function immersiveBottling(results, fluid, inputs) {
        const resultsArray = Array.isArray(results) ? results : [results];
        const inputsArray = Array.isArray(inputs) ? inputs : [inputs];
        event.custom(
            {
                "type": "immersiveengineering:bottling_machine",
                "fluid": {
                    "amount": 1000,
                    "tag": fluid
                },
                "inputs": inputsArray.map((e) => ((typeof e === "string" && e.startsWith("#")) ? { "tag": e.substring(1) } : { "item": e })),
                "results": resultsArray.map((e) => ({ "item": e }))
            }
        ).id(`immersiveengineering:jei_bucket_${fluid.split(':')[1]}`);
    }

    immersiveBottling(`${MUC_ID}water_bucket`, 'mantle:water', `${MUC_ID}bucket`);
    immersiveBottling(`${MUC_ID}milk_bucket`, 'forge:milk', `${MUC_ID}bucket`);
    immersiveBottling(`${MUC_ID}powder_snow_bucket`, 'forge:powdered_snow', `${MUC_ID}bucket`);


});

