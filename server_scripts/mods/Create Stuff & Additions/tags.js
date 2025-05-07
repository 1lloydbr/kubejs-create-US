
ServerEvents.tags('item', event => {
    event.add('forge:armors/helmets/copper', `${CSA_ID}copper_helmet`);
    event.add('forge:armors/chestplates/copper', `${CSA_ID}copper_chestplate`);
    event.add('forge:armors/leggings/copper', `${CSA_ID}copper_leggings`);
    event.add('forge:armors/boots/copper', `${CSA_ID}copper_boots`);

    event.add('tconstruct:melting/copper/tools_costing_1', `${CSA_ID}copper_shovel`);

    event.add('tconstruct:melting/copper/tools_costing_2', `${CSA_ID}copper_sword`);
    event.add('tconstruct:melting/copper/tools_costing_2', `${CSA_ID}copper_hoe`);
    event.add('tconstruct:melting/copper/tools_costing_2', `${MUC_ID}shears`);

    event.add('tconstruct:melting/copper/tools_costing_3', `${CSA_ID}copper_axe`);
    event.add('tconstruct:melting/copper/tools_costing_3', `${CSA_ID}copper_pickaxe`);
})