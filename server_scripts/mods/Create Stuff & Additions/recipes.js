const CSA_ID = 'create_sa:'

ServerEvents.tags('item', event => {
    const large = ['helmet', 'chestplate', 'leggings', 'boots'];

    large.forEach(item => event.add('create:scrap_copper_large', `${CSA_ID}copper_${item}`));

})