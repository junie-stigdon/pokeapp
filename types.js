module.exports = {
    normal: {
        weakness: 'Fighting',
        resistant: 'Ghost has no effect',
        super: 'N/A',
        not: 'Rock, Steel; No effect on Ghost'
    },
    fire: {
        weakness: 'Water, Ground, Rock',
        resistant: 'Fire, Grass, Ice, Bug, Steel, Fairy',
        super: 'Grass, Ice, Bug, Steel',
        not: 'Fire, Water, Rock, Dragon'
    },
    water: {
        weakness: 'Electric, Grass',
        resistant: 'Fire, Water, Ice, Steel',
        super: 'Fire, Ground, Rock',
        not: 'Water, Grass, Dragon'
    },
    electric: {
        weakness: 'Ground',
        resistant: 'Electric, Flying, Steel',
        super: 'Water, Flying',
        not: 'Electric, Grass, Dragon; No effect on Ground'
    },
    grass: {
        weakness: 'Fire, Ice, Poison, Flying, Bug',
        resistant: 'Water, Electric, Grass, Ground',
        super: 'Water, Ground, Rock',
        not: 'Fire, Grass, Poison, Flying, Bug, Dragon, Steel'
    },
    ice: {
        weakness: 'Fire, Fighting, Rock, Steel',
        resistant: 'Ice',
        super: 'Grass, Ground, Flying, Dragon',
        not: 'Fire, Water, Ice, Steel'
    },
    fighting: {
        weakness: 'Flying, Psychic, Fairy',
        resistant: 'Bug, Rock, Dark',
        super: 'Normal, Ice, Rock, Dark, Steel',
        not: 'Poison, Flying, Psychic, Bug, Fairy; No effect on Ghost'
    },
    poison: {
        weakness: 'Ground, Psychic',
        resistant: 'Grass, Fighting, Poison, Bug, Fairy',
        super: 'Grass, Fairy',
        not: 'Poison, Ground, Rock, Ghost; No effect on Steel'
    },
    ground: {
        weakness: 'Water, Grass, Ice',
        resistant: 'Poison, Rock; Electric has no effect',
        super: 'Fire, Electric, Poison, Rock, Steel',
        not: 'Grass, Bug; No effect on Flying'
    },
    flying: {
        weakness: 'Electric, Ice, Rock',
        resistant: 'Grass, Fighting, Bug; Ground has no effect',
        super: 'Grass, Fighting, Bug',
        not: 'Electric, Rock, Steel'
    },
    psychic: {
        weakness: 'Bug, Ghost, Dark',
        resistant: 'Fighting, Psychic',
        super: 'Fighting, Poison',
        not: 'Psychic, Steel; No effect on Dark'
    },
    bug: {
        weakness: 'Fire, Flying, Rock',
        resistant: 'Grass, Fighting, Ground',
        super: 'Grass, Psychic, Dark',
        not: 'Fire, Fighting, Poison, Flying, Ghost, Steel, Fairy'
    },
    rock: {
        weakness: 'Water, Grass, Fighting, Ground, Steel',
        resistant: 'Normal, Fire, Poison, Flying',
        super: 'Fire, Ice, Flying, Bug',
        not: 'Fighting, Ground, Steel'
    },
    ghost: {
        weakness: 'Ghost, Dark',
        resistant: 'Poison, Bug; Normal and Fighting have no effect',
        super: 'Psychic, Ghost',
        not: 'Dark; No effect on Normal'
    },
    dragon: {
        weakness: 'Ice, Dragon, Fairy',
        resistant: 'Fire, Water, Electric, Grass',
        super: 'Dragon',
        not: 'Steel; No effect on Fairy'
    },
    dark: {
        weakness: 'Fighting, Bug, Fairy',
        resistant: 'Ghost, Dark; Psychic has no effect',
        super: 'Psychic, Ghost',
        not: 'Fighting, Dark, Fairy'
    },
    steel: {
        weakness: 'Fire, Fighting, Ground',
        resistant: 'Normal, Grass, Ice, Flying, Psychic, Bug, Rock, Dragon, Steel, Fairy; Poison has no effect',
        super: 'Ice, Rock, Fairy',
        not: 'Fire, Water, Electric, Steel'
    },
    fairy: {
        weakness: 'Poison, Steel',
        resistant: 'Fighting, Bug, Dark; Dragon has no effect',
        super: 'Fighting, Dragon, Dark',
        not: 'Fire, Poison, Steel'
    },
}