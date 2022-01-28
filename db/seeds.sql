INSERT INTO department (name)
VALUES 
('Accounting'),
('Operations'),
('Research & Development'),
('Transportation'),
('Human Resources'),
('Quality Assurance');

INSERT INTO role (title, salary, department_id)
VALUES
('Research Analyst', 70000, 3),
('Manager', 120000, 2),
('Developer', 80000, 3),
('Transportation Manager', 65000, 4),
('Accountant', 70000, 1),
('Operations Analyst', 75000, 2),
('Data Manager', 80000, 6),
('Corporate Counselor', 55000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Filbert', 1, 4),
('Gregory', 'Schmidt', 8, 2),
('Dirk', 'Mardruck', 2),
('Kacie', 'Chandler', 6, 2),
('Unice', 'Blight', 5, 2);