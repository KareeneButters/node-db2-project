// STRETCH
const cars = [
    {
        vin: '2T3DFREV7FW254740',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    }, 
    {
        vin: '4V4NC9TJX8N491928',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {

        vin: '2G1WB5EK7A1182614',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'clean',
    },
]

exports.seed = async function(knex) {
    await knex('cars'). truncate()
    await knex ('cars').insert(cars)
}