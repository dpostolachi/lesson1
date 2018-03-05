const animals = [
    {
        name: 'Jhony',
        species: 'cat',
    },
    {
        name: 'Puffy',
        species: 'dog',
    },
    {
        name: 'Fluffy',
        species: 'cat',
    },
    {
        name: 'Snowflake',
        species: 'cat',
    },
    {
        name: 'Yamal',
        species: 'dog',
    },
]

const dogs = animals.filter( ( animal ) => {
    return animal.species === 'dog'
} )

const cats = animals.filter( ( animal ) => {
    return animal.species === 'cat'
} )

dogs

cats
