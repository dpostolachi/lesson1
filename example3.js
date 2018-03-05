const animals = [
    {
        name: 'Jhony',
        species: 'cat',
        age: 2,
    },
    {
        name: 'Puffy',
        species: 'dog',
        age: 4,
    },
    {
        name: 'Fluffy',
        species: 'cat',
        age: 5,
    },
    {
        name: 'Snowflake',
        species: 'cat',
        age: 6,
    },
    {
        name: 'Yamal',
        species: 'dog',
        age: 7,
    },
]

const age = animals.reduce( ( acc, newVal  ) => {
    return acc + newVal.age
}, 0 )

age

const names = animals.reduce( ( acc, newVal  ) => {
    acc.push( newVal.name )
    return acc
}, [] )

names
