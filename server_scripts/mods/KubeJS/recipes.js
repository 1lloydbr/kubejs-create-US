ServerEvents.recipes(event => {
    // Ender Black Steel Alloy
    event.custom(
        {
            "type": "tconstruct:alloy",
            "inputs": [
                {
                    "amount": 180,
                    "tag": "forge:molten_black_steel"
                },
                {
                    "amount": 250,
                    "tag": "forge:ender"
                }
            ],
            "result": {
                "amount": 180,
                "tag": "forge:molten_ender_black_steel"
            },
            "temperature": 1450
        }
    );

    // Black Steel Compat

    let casts = ['single_use', 'multi_use']
    let things = ['nugget', 'ingot']

    things.forEach(thing => {
        event.custom(
            {
                "type": "tconstruct:melting",
                "ingredient": {
                    "item": `cataclysm:black_steel_${thing}`
                },
                "result": {
                    "amount": thing === 'nugget' ? 10 : 90,
                    "tag": "forge:molten_black_steel"
                },
                "temperature": 1050,
                "time": thing === 'nugget' ? 23 : 68
            }
        ).id(`tconstruct:smeltery/melting/metal/black_steel/${thing}`);
        casts.forEach(cast => {
            event.custom(
                {
                    "type": "tconstruct:casting_table",
                    "cast": {
                        "tag": `tconstruct:casts/${cast}/${thing}`
                    },
                    "cooling_time": thing === 'nugget' ? 23 : 68,
                    "fluid": {
                        "amount": thing === 'nugget' ? 10 : 90,
                        "tag": "forge:molten_black_steel"
                    },
                    "result": {
                        "item": `cataclysm:black_steel_${thing}`
                    }
                }
            ).id(`tconstruct:smeltery/casting/metal/black_steel/${thing}_${(cast === 'multi_use' ? 'gold_cast' : 'sand_cast')}`)
        })
    })

    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "ingredient": [
                {
                    "item": "cataclysm:black_steel_pickaxe"
                },
                {
                    "item": "cataclysm:black_steel_axe"
                },
            ],
            "result": {
                "amount": 270,
                "tag": "forge:molten_black_steel",
                "unit_size": 10
            },
            "temperature": 1050,
            "time": 118
        }
    )

    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "ingredient": [
                {
                    "item": "cataclysm:black_steel_sword"
                },
                {
                    "item": "cataclysm:black_steel_hoe"
                },
            ],
            "result": {
                "amount": 180,
                "tag": "forge:molten_black_steel",
                "unit_size": 10
            },
            "temperature": 1050,
            "time": 96
        }
    )

    event.custom(
        {
            "type": "tconstruct:damagable_melting",
            "ingredient": {
                "item": "cataclysm:black_steel_shovel"
            },
            "result": {
                "amount": 90,
                "tag": "forge:molten_black_steel",
                "unit_size": 10
            },
            "temperature": 1050,
            "time": 68
        }
    )

    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "item": "deeperdarker:warden_upgrade_smithing_template"
            },
            "cast_consumed": true,
            "cooling_time": 180,
            "fluid": {
                "amount": 180,
                "tag": "forge:molten_ender_black_steel"
            },
            "result": 'kubejs:ebs_upgrade_smithing_template'
        }
    ).id('kubejs:ebs_upgrade_smithing_template');


})