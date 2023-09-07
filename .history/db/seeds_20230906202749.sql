-- Insert sample Anime data
INSERT INTO Anime (title, genre, episodes, release_year) VALUES
    ('Naruto', 'Action, Adventure', 220, 2002),
    ('One Piece', 'Action, Adventure', 1044, 1999),
    ('Attack on Titan', 'Action, Fantasy', 75, 2013),
    ('My Hero Academia', 'Action, Superhero', 113, 2016);

-- Insert sample Character data
INSERT INTO Character (name, anime_id) VALUES
    ('Naruto Uzumaki', 1),
    ('Monkey D. Luffy', 2),
    ('Eren Yeager', 3),
    ('Izuku Midoriya', 4);
