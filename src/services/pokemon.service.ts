export interface PokemonType {
  name: string;
  color: string;
}

export interface PokemonMeasurement {
  metric: string;
  imperial: string;
}

export interface Pokemon {
  name: string;
  image: string;
  types: PokemonType[];
  classification: string;
  height: PokemonMeasurement;
  weight: PokemonMeasurement;
}

const WATER = "#6890F0";
const GRASS = "#78C850";
const PURPLE = "#A040A0";
const FIRE = "#F08030";
const PSYCHIC = "#F85888";

const STARTER_POKEMON: Pokemon[] = [
  {
    name: "Squirtle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    types: [{ name: "Water", color: WATER }],
    classification: "Tiny Turtle Pokémon",
    height: { metric: "0.5m", imperial: "1'08\"" },
    weight: { metric: "9.0kg", imperial: "19.8lbs" },
  },
  {
    name: "Bulbasaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png",
    types: [
      { name: "Grass", color: GRASS },
      { name: "Poison", color: PURPLE },
    ],
    classification: "Seed Pokémon",
    height: { metric: "0.7m", imperial: "2'00\"" },
    weight: { metric: "6.9kg", imperial: "15.2lbs" },
  },
  {
    name: "Charmander",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Lizard Pokémon",
    height: { metric: "0.6m", imperial: "1'10\"" },
    weight: { metric: "8.5kg", imperial: "18.7lbs" },
  },
    {
    name: "Cyndaquil",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/155.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Fire Mouse Pokémon",
    height: { metric: "0.6m", imperial: "1'08\"" },
    weight: { metric: "7.9kg", imperial: "17.4lbs" },
  },
    {
    name: "Torchic",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/255.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Chick Pokémon",
    height: { metric: "0.4m", imperial: "1'04\"" },
    weight: { metric: "2.5kg", imperial: "5.5lbs" },
  },
    {
    name: "Chimchar",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/390.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Chimp Pokémon",
    height: { metric: "0.5m", imperial: "1'08\"" },
    weight: { metric: "6.2kg", imperial: "13.7lbs" },
  },
    {
    name: "Tepig",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/498.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Fire Pig Pokémon",
    height: { metric: "0.5m", imperial: "1'08\"" },
    weight: { metric: "9.9kg", imperial: "21.8lbs" },
  },
    {
    name: "Fennekin",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/653.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Fox Pokémon",
    height: { metric: "0.4m", imperial: "1'04\"" },
    weight: { metric: "9.4kg", imperial: "20.7lbs" },
  },
    {
    name: "Litten",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/725.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Fire Cat Pokémon",
    height: { metric: "0.4m", imperial: "1'04\"" },
    weight: { metric: "4.3kg", imperial: "9.5lbs" },
  },
    {
    name: "Scorbunny",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/813.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Rabbit Pokémon",
    height: { metric: "0.3m", imperial: "1'00\"" },
    weight: { metric: "4.5kg", imperial: "9.9lbs" },
  },
    {
    name: "Fuecoco",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/909.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Fire Croc Pokémon",
    height: { metric: "0.4m", imperial: "1'04\"" },
    weight: { metric: "9.8kg", imperial: "21.6lbs" },
  },
    {
    name: "Koffing",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/109.png",
    types: [{ name: "Poison", color: PURPLE }],
    classification: "Poison Gas Pokémon",
    height: { metric: "0.6m", imperial: "2'00\"" },
    weight: { metric: "1.0kg", imperial: "2.2lbs" },
  },
    {
    name: "Espeon",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/196.png",
    types: [{ name: "Psychic", color: PSYCHIC }],
    classification: "Sun Pokémon",
    height: { metric: "0.9m", imperial: "2'11\"" },
    weight: { metric: "26.5kg", imperial: "58.4lbs" },
  },
];

export const getStarterPokemon = (): Pokemon[] => STARTER_POKEMON;
