# robs-pokemon-server

Express + TypeScript server that returns starter Pokemon data scraped from [Serebii Gen I listings](https://www.serebii.net/pokemon/gen1pokemon.shtml).

## Project structure

```
src/
├── server.ts
├── routes/
│   ├── index.ts
│   └── pokemon.routes.ts
├── controllers/
│   └── pokemon.controller.ts
└── services/
    └── pokemon.service.ts
```

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000/api/pokemon](http://localhost:3000/api/pokemon)

## Example response

```json
{
  "pokemon": [
    {
      "name": "Squirtle",
      "image": "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
      "types": [{ "name": "Water", "color": "#6890F0" }]
    },
    {
      "name": "Bulbasaur",
      "image": "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png",
      "types": [
        { "name": "Grass", "color": "#78C850" },
        { "name": "Poison", "color": "#A040A0" }
      ]
    },
    {
      "name": "Charmander",
      "image": "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png",
      "types": [{ "name": "Fire", "color": "#F08030" }]
    }
  ]
}
```

## Scripts

| Command         | Description                      |
|-----------------|----------------------------------|
| `npm run dev`   | Start dev server with hot reload |
| `npm run build` | Compile TypeScript to `dist/`    |
| `npm start`     | Run compiled production server   |
