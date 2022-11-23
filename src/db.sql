CREATE TABLE tasks(
    id_task INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    scheduled_date DATE,
    status VARCHAR(5)
);
