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

const snowFlake = animals.find( ( animal ) => {
    return animal.name === 'Snowflake'
} )


snowFlake
