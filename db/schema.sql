CREATE DATABASE IF NOT EXISTS corporate;
USE corporate;

CREATE TABLE IF NOT EXISTS 
department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS 
roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2) NOT NULL,
    dep_id INTEGER NOT NULL,
    CONSTRAINT fk_department
        FOREIGN KEY (dep_id) 
        REFERENCES department(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS
managers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INTEGER,
    FOREIGN KEY (roles_id) 
        REFERENCES roles(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS
employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_roles
        FOREIGN KEY (roles_id)
        REFERENCES roles(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_man
        FOREIGN KEY (manager_id)
        REFERENCES managers(id)
        ON DELETE SET NULL
);