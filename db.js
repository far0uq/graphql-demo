let games = [
  { id: "1", title: "Tekken 8", platform: ["PS5", "Xbox", "PC"] },
  { id: "2", title: "Doom Eternal", platform: ["PS5", "Xbox", "PC"] },
  { id: "3", title: "Pokemon Scarlet", platform: ["Switch"] },
  { id: "4", title: "Zelda, Tears of the Kingdom", platform: ["Switch"] },
  { id: "5", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
];

let authors = [
  { id: "1", name: "harada", verified: true },
  { id: "2", name: "iwata", verified: false },
  { id: "3", name: "hugo", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: 10,
    content: "Kazuya would be proud",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 9,
    content: "Rip and tear!",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "3",
    rating: 8,
    content: "Gotta catch em all!",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 9,
    content: "Still love Zelda",
    author_id: "1",
    game_id: "4",
  },
  {
    id: "5",
    rating: 7,
    content: "Too hard for me lol",
    author_id: "2",
    game_id: "5",
  },
];

export default {
  games,
  authors,
  reviews,
};
