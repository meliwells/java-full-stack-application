drop database if exists disney_snacks;
create database disney_snacks;
use disney_snacks;

CREATE TABLE location (
    location_id INT PRIMARY KEY,
    park_location VARCHAR(128) NOT NULL
);

CREATE TABLE users (
    users_id INT PRIMARY KEY AUTO_INCREMENT,
    users_name VARCHAR(128) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role ENUM('USER', 'ADMIN') NOT NULL,
    password_hash VARCHAR(1000) NOT NULL
);

CREATE TABLE snacks (
    snacks_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(128) UNIQUE NOT NULL,
    image_path VARCHAR(500),
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    location_id int NOT NULL,
    CONSTRAINT fk_snacks_location_id 
		FOREIGN KEY (location_id) 
		REFERENCES location(location_id)
);

CREATE TABLE user_snack_preference (
    user_snack_preference_id INT PRIMARY KEY AUTO_INCREMENT,
    users_id INT NOT NULL,
    snacks_id INT NOT NULL,
    want_to_try BOOLEAN,
    tried BOOLEAN,
    favorite BOOLEAN,
    CONSTRAINT fk_user_snack_preference_users_id
		FOREIGN KEY (users_id) 
        REFERENCES users(users_id),
    CONSTRAINT fk_user_snack_preference_snacks_id 
		FOREIGN KEY (snacks_id) 
        REFERENCES snacks(snacks_id)
);

INSERT INTO location (location_id, park_location) VALUES
(1, 'Adventureland'),
(2, 'Carts throughout park'),
(3, 'Critter Country'),
(4, 'Fantasyland'),
(5, 'Frontierland'),
(6, 'Main Street'),
(7, 'Mickey\'s Toontown'),
(8, 'New Orleans Square'),
(9, 'Tomorrowland');


INSERT INTO users (users_name, email, role, password_hash) VALUES
('Alexis Thornton', 'alexis.thornton94@example.com', 'admin', 'Password'),
('Jordan Ramirez', 'jordan.ramirez78@example.com', 'admin', 'Password'),
('Taylor Morgan', 'taylor.morgan22@example.com', 'user', 'Password'),
('Riley Bennett', 'riley.bennett89@example.com', 'user', 'Password'),
('Parker Ellis', 'parker.ellis74@example.com', 'admin', 'Password'),
('Casey Phillips', 'casey.phillips57@example.com', 'user', 'Password');

INSERT INTO snacks (title, image_path, description, price, location_id) VALUES 
('Dole Pineapple Whip','/dole_whip.jpg', 'A refreshing soft-serve pineapple dessert loved by many', 5.00, 1), 
('Mickey Pretzel', '/pretzel.jpg', 'A soft pretzel shaped like Mickey Mouse, served warm and salty', 6.00, 2), 
('Churro', '/churro.jpg', 'Classic cinnamon-sugar-coated churro, a fan-favorite Disney treat', 4.50, 6), 
('Turkey Leg', '/turkey_leg.jpg', 'A massive, flavorful smoked turkey leg, iconic at Disney parks', 12.50, 4), 
('Mickey Chocolate Chip Cookie', '/chocolate _chip_cookie.jpg', 'A large chocolate chip cookie shaped like Mickey Mouse', 4.00, 5), 
('Mickey Ice Cream Sandwich', '/icecream.jpg', 'Vanilla ice cream sandwiched between two chocolate cookies in Mickey shape', 4.50, 6), 
('Cinnamon Roll', '/cinnamon_roll.jpg', 'A warm and gooey cinnamon roll, topped with cream cheese frosting', 7.00, 3), 
('Corndog', '/corndog.jpg', 'A classic battered and fried corndog, served with dipping sauce', 8.00, 2), 
('Mickey Beignets', '/beignet.jpg', 'Puffy, fried beignets dusted with powdered sugar in Mickey shapes', 7.00, 3), 
('Popcorn', '/popcorn.jpg', 'Freshly popped buttery popcorn, served in collectible Disney buckets', 6.00, 6), 
('Funnel Cake', '/funnel_cake.jpg', 'A crispy and sweet funnel cake topped with powdered sugar and optional toppings', 7.50, 2);

INSERT INTO user_snack_preference (users_id, snacks_id, want_to_try, tried, favorite) VALUES
(3, 1, FALSE, TRUE, TRUE),
(4, 5, TRUE, FALSE, FALSE),
(6, 8, FALSE, TRUE, TRUE),
(4, 2, FALSE, TRUE, FALSE),
(6, 4, TRUE, FALSE, FALSE);

SELECT 
    snacks.*,
    location.park_location
FROM
    snacks
INNER JOIN
    location ON snacks.location_id = location.location_id;
    
    SELECT * FROM snacks;
	SELECT * FROM users;

