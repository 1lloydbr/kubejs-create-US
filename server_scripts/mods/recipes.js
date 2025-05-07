ServerEvents.recipes(event => {
    event.remove({ id: 'tconstruct:smeltery/melting/diamond/smithing_template' });
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": [
                {
                    "item": "deeperdarker:warden_upgrade_smithing_template"
                },
                {
                    "item": "minecraft:netherite_upgrade_smithing_template"
                },
                {
                    "tag": "minecraft:trim_templates"
                }
            ],
            "result": {
                "amount": 500,
                "fluid": "tconstruct:molten_diamond"
            },
            "temperature": 1450,
            "time": 186
        }
    ).id('tconstruct:smeltery/melting/diamond/smithing_template');

    event.remove({ id: 'tconstruct:smeltery/casting/diamond/smithing_template' });
    event.custom(
        {
            "type": "tconstruct:table_duplication",
            "cast": [
                {
                    "item": "deeperdarker:warden_upgrade_smithing_template"
                },
                {
                    "item": "minecraft:netherite_upgrade_smithing_template"
                },
                {
                    "tag": "minecraft:trim_templates"
                }
            ],
            "cooling_time": 186,
            "fluid": {
                "amount": 500,
                "tag": "tconstruct:molten_diamond"
            }
        }
    ).id('tconstruct:smeltery/casting/diamond/smithing_template');

})