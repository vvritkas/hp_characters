CREATE TABLE hp_characters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  house VARCHAR(255),
  actor VARCHAR(255)
);

INSERT INTO hp_characters (name, house, actor)
VALUES
("Harry Potter", "Gryffindor", "Daniel Radcliffe"),
("Ron Weasley", "Gryffindor", "Rupert Grint"),
("Hermione Granger", "Gryffindor", "Emma Watson"),
("Draco Malfoy", "Slytherin", "Tom Felton"),
("Albus Dumbledore", "----", "Richard Harris/Michael Gambon"),
("Severus Snape", "Slytherin", "Alan Rickman"),
("Rubeus Hagrid", "----", "Robbie Coltrane"),
("Sirius Black", "Gryffindor", "Gary Oldman"),
("Luna Lovegood", "Ravenclaw", "Evanna Lynch"),
("Neville Longbottom", "Gryffindor", "Matthew Lewis"),
("Ginny Weasley", "Gryffindor", "Bonnie Wright"),
("Fred Weasley", "Gryffindor", "James Phelps"),
("George Weasley", "Gryffindor", "Oliver Phelps"),
("Bellatrix Lestrange", "Slytherin", "Helena Bonham Carter"),
("Voldemort", "----", "Ralph Fiennes"),
("Dobby", "----", "Toby Jones"),
("Griphook", "----", "Warwick Davis"),
("Nagini", "----", "Frances de la Tour"),
("Barty Crouch Jr.", "----", "David Tennant");