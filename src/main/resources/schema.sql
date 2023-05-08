DROP TABLE IF EXISTS pet;

CREATE TABLE IF NOT EXISTS pet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    identification_code VARCHAR(50),
    type VARCHAR(50),
    fur_color VARCHAR(50),
    country VARCHAR(50)
);