ServerEvents.recipes((event) => {
    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("ae2:silicon").toJson(),
            Ingredient.of("ae2:silicon_press").toJson(),
        ],
        results: [Item.of("ae2:printed_silicon")],
        keepHeldItem: true,
    });

    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("minecraft:gold_ingot").toJson(),
            Ingredient.of("ae2:logic_processor_press").toJson(),
        ],
        results: [Item.of("ae2:printed_logic_processor")],
        keepHeldItem: true,
    });

    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("ae2:certus_quartz_crystal").toJson(),
            Ingredient.of("ae2:calculation_processor_press").toJson(),
        ],
        results: [Item.of("ae2:printed_calculation_processor")],
        keepHeldItem: true,
    });

    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("minecraft:diamond").toJson(),
            Ingredient.of("ae2:engineering_processor_press").toJson(),
        ],
        results: [Item.of("ae2:printed_engineering_processor")],
        keepHeldItem: true,
    });

    const ilp = "kubejs:incomplete_printed_logic_processor";
    event.recipes
        .createSequencedAssembly(
            "ae2:logic_processor",
            "ae2:printed_logic_processor",
            [
                event.recipes.createDeploying(ilp, [ilp, "ae2:printed_silicon"]),
                event.recipes.createDeploying(ilp, [ilp, "minecraft:redstone"]),
                event.recipes.createPressing(ilp, ilp),
            ]
        )
        .transitionalItem(ilp)
        .loops(1);

    const icp = "kubejs:incomplete_printed_calculation_processor";
    event.recipes
        .createSequencedAssembly(
            "ae2:calculation_processor",
            "ae2:printed_calculation_processor",
            [
                event.recipes.createDeploying(icp, [icp, "ae2:printed_silicon"]),
                event.recipes.createDeploying(icp, [icp, "minecraft:redstone"]),
                event.recipes.createPressing(icp, icp),
            ]
        )
        .transitionalItem(icp)
        .loops(1);

    const iep = "kubejs:incomplete_printed_engineering_processor";
    event.recipes
        .createSequencedAssembly(
            "ae2:engineering_processor",
            "ae2:printed_engineering_processor",
            [
                event.recipes.createDeploying(iep, [iep, "ae2:printed_silicon"]),
                event.recipes.createDeploying(iep, [iep, "minecraft:redstone"]),
                event.recipes.createPressing(iep, iep),
            ]
        )
        .transitionalItem(iep)
        .loops(1);

    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("minecraft:iron_block").toJson(),
            Ingredient.of("ae2:silicon_press").toJson(),
        ],
        results: [Item.of("ae2:silicon_press")],
        keepHeldItem: true,
    });

    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("minecraft:iron_block").toJson(),
            Ingredient.of("ae2:logic_processor_press").toJson(),
        ],
        results: [Item.of("ae2:logic_processor_press")],
        keepHeldItem: true,
    });

    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("minecraft:iron_block").toJson(),
            Ingredient.of("ae2:calculation_processor_press").toJson(),
        ],
        results: [Item.of("ae2:calculation_processor_press")],
        keepHeldItem: true,
    });

    event.recipes.create.deploying({
        ingredients: [
            Ingredient.of("minecraft:iron_block").toJson(),
            Ingredient.of("ae2:engineering_processor_press").toJson(),
        ],
        results: [Item.of("ae2:engineering_processor_press")],
        keepHeldItem: true,
    });

    event.remove({ id: "ae2:network/blocks/inscribers" });

    // Cables adjustment

    const colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'fluix'];
    const types = ['glass', 'covered', 'smart'];

    colors.forEach((c) => {
        event.shapeless(`ae2:${c}_smart_dense_cable`, [`ae2:${c}_covered_dense_cable`, '4x minecraft:redstone', '4x minecraft:glowstone_dust']).id(`ae2:network/cables/dense_smart_${c}_1`);
        event.shapeless(`ae2:${c}_smart_dense_cable`, [`ae2:${c}_covered_dense_cable`, '4x minecraft:redstone', 'minecraft:glowstone']).id(`ae2:network/cables/dense_smart_${c}_2`);
        if (c != 'fluix') {
            event.shapeless(`ae2:${c}_smart_cable`, [`ae2:${c}_covered_cable`, 'minecraft:redstone', 'minecraft:glowstone_dust']).id(`ae2:network/cables/smart_${c}_1`);
        }
        types.forEach((t) => {
            if (t != 'glass') {
                if (c != 'fluix') {
                    event.remove({ id: `ae2:network/cables/${t}_${c}` });
                } else {
                    event.remove({ id: `ae2:network/cables/dense_${t}_from_${t}` });
                }
                event.remove({ id: `ae2:network/cables/dense_${t}_${c}` });
                event.shapeless(`4x ae2:${c}_${t}_cable`, [`ae2:${c}_${t}_dense_cable`]).id(`ae2:network/cables/${t}_from_dense_${t}_${c}`);
                event.shapeless(`ae2:${c}_${t}_dense_cable`, [`4x ae2:${c}_${t}_cable`]).id(`ae2:network/cables/dense_${t}_from_${t}_${c}`);

            }

            if (c != 'fluix') {
                if (t != 'glass') {
                    event.shaped(
                        `8x ae2:${c}_${t}_dense_cable`,
                        [
                            'ccc',
                            'cdc',
                            'ccc',
                        ],
                        {
                            c: `#ae2:${t}_dense_cable`,
                            d: `#forge:dyes/${c}`
                        }
                    ).id(`ae2:network/cables/dense_${t}_${c}`);
                }
                event.shaped(
                    `8x ae2:${c}_${t}_cable`,
                    [
                        'ccc',
                        'cdc',
                        'ccc',
                    ],
                    {
                        c: `#ae2:${t}_cable`,
                        d: `#forge:dyes/${c}`
                    }
                ).id(`ae2:network/cables/${t}_${c}`);
            }


        });

    });
});
