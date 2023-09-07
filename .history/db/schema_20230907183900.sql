CREATE TABLE IF NOT EXISTS Anime (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255),
    episodes INT,
    release_year INT
);

CREATE TABLE IF NOT EXISTS `Character` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    anime_id INT,
    FOREIGN KEY (anime_id) REFERENCES Anime(id)
);
