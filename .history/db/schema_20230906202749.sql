-- Define the Anime table
CREATE TABLE IF NOT EXISTS Anime (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genre TEXT,
    episodes INTEGER,
    release_year INTEGER
);

-- Define the Character table
CREATE TABLE IF NOT EXISTS Character (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    anime_id INTEGER,
    FOREIGN KEY (anime_id) REFERENCES Anime(id)
);
