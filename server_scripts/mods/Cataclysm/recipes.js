ServerEvents.recipes(event => {
    event.remove({ id: 'cataclysm:ignitium_upgrade_smithing_template' });
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "item": "minecraft:netherite_upgrade_smithing_template"
            },
            "cast_consumed": true,
            "cooling_time": 180,
            "fluid": {
                "amount": 1000,
                "tag": "tconstruct:blazing_blood"
            },
            "result": 'cataclysm:ignitium_upgrade_smithing_template'
        }
    ).id('cataclysm:ignitium_upgrade_smithing_template');

    event.remove({ id: 'cataclysm:cursium_upgrade_smithing_template' });
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "item": "kubejs:ebs_upgrade_smithing_template"
            },
            "cast_consumed": true,
            "cooling_time": 180,
            "fluid": {
                "amount": 540,
                "tag": "forge:molten_gold"
            },
            "result": 'cataclysm:cursium_upgrade_smithing_template'
        }
    ).id('cataclysm:cursium_upgrade_smithing_template');

    event.remove({ id: 'cataclysm:abyssal_sacrifice' });
    event.remove({ id: 'cataclysm:abyssal_sacrifice2' });
    event.shapeless(
        'cataclysm:abyssal_sacrifice',
        [
            'minecraft:nautilus_shell',
            'cataclysm:athame',
            ['cataclysm:coral_chunk', 'cataclysm:crystallized_coral'],
            'minecraft:diamond_block',
            'minecraft:heart_of_the_sea',
            'minecraft:emerald_block',
            'minecraft:iron_block',
            'minecraft:amethyst_block',
            'minecraft:gold_block'
        ]
    ).id('cataclysm:abyssal_sacrifice');
})