ItemEvents.modification(event => {
    event.modify('more_useful_copper:copper_water_bucket', item => {
        item.craftingRemainder = Item.of('more_useful_copper:copper_bucket');
    });

    event.modify('more_useful_copper:copper_milk_bucket', item => {
        item.craftingRemainder = Item.of('more_useful_copper:copper_bucket');
    });

    event.modify('more_useful_copper:copper_powder_snow_bucket', item => {
        item.craftingRemainder = Item.of('more_useful_copper:copper_bucket');
    });

});

