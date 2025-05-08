StartupEvents.registry('item', event => {
  // Cataclysm
  event.create('ebs_upgrade_smithing_template')
    .displayName('Incomplete Cursium Upgrade Smithing Template');

  // // AE2
  // event.create("incomplete_printed_logic_processor")
  //   .texture("ae2:item/printed_logic_processor");

  // event.create("incomplete_printed_calculation_processor")
  //   .texture("ae2:item/printed_calculation_processor");

  // event.create("incomplete_printed_engineering_processor")
  //   .texture("ae2:item/printed_engineering_processor");
})

StartupEvents.registry('fluid', event => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('molten_black_steel')
    .thickTexture(0x2C303C)
    .bucketColor(0x2C303C)
    .displayName('Molten Black Steel')
    .density(2000)
    .viscosity(10000)
    .temperature(1050)

  event.create('molten_ender_black_steel')
    .thickTexture(0x203c4f)
    .bucketColor(0x203c4f)
    .displayName('Molten Ender Black Steel')
    .density(2000)
    .viscosity(10000)
    .temperature(1550)

})

