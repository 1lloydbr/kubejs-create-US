const MUC_ID = 'more_useful_copper:copper_';

ServerEvents.tags('item', event => {
    //Adding crushing tags to items
    const small = ['shovel', 'chain'];
    const medium = ['pressure_plate', 'pickaxe', 'axe', 'hoe', 'bucket', 'water_bucket', 'milk_bucket', 'shears', 'sword', 'helmet', 'chestplate', 'leggings', 'boots'];

    small.forEach(item => event.add('create:scrap_copper_small', `${MUC_ID}${item}`));
    medium.forEach(item => event.add('create:scrap_copper_medium', `${MUC_ID}${item}`));


    // Adding tags to copper nugget
    const nuggetTags = ['forge:nuggets/copper', 'forge:nuggets', 'balm:nuggets'];
    nuggetTags.forEach(tag => event.add(tag, `${MUC_ID}nugget`));

    //Adding belt tag to powder snow
    event.add('create:upright_on_belt', `${MUC_ID}powder_snow_bucket`);

    //Creating powder snow tag and adding both buckets
    event.add('c:water_buckets', `${MUC_ID}water_bucket`);

    event.add('forge:milk', `${MUC_ID}milk_bucket`);

    event.add('forge:powder_snow_bucket', 'minecraft:powder_snow_bucket');
    event.add('forge:powder_snow_bucket', `${MUC_ID}powder_snow_bucket`);


    //Creating chain tag
    event.add('forge:chain', 'minecraft:chain');
    event.add('forge:chain', `${MUC_ID}chain`);


    event.add('forge:armors/helmets/coppermail', `${MUC_ID}helmet`);
    event.add('forge:armors/chestplates/coppermail', `${MUC_ID}chestplate`);
    event.add('forge:armors/leggings/coppermail', `${MUC_ID}leggings`);
    event.add('forge:armors/boots/coppermail', `${MUC_ID}boots`);

    event.add('tconstruct:melting/coppermail/tools_costing_1', `${MUC_ID}shovel`);

    event.add('tconstruct:melting/coppermail/tools_costing_2', `${MUC_ID}sword`);
    event.add('tconstruct:melting/coppermail/tools_costing_2', `${MUC_ID}hoe`);

    event.add('tconstruct:melting/coppermail/tools_costing_3', `${MUC_ID}axe`);
    event.add('tconstruct:melting/coppermail/tools_costing_3', `${MUC_ID}pickaxe`);
})