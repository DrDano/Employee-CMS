USE corporate;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE IF NOT EXISTS 
department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS 
role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2) NOT NULL,
    CONSTRAINT cs_department
        FOREIGN KEY (dep_id) 
        REFERENCES department (id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS
employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    CONSTRAINT sn_role
        FOREIGN KEY (role_id)
        REFERENCES role (id)
        ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE SET NULL
        ON UPDATE SET NULL
);