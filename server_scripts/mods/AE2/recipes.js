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
});
