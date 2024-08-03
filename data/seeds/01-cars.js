// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    }, 
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {

        vin: '1111111111111',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'clean',
    },
]

exports.seed = function(knex) {
    return knew('cars')
        .truncate().then(() => {
            return knew('cars').insert(cars)
    })
}