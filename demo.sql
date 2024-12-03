CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL
);

INSERT INTO Products (ProductID, ProductName, Price) VALUES
(1, 'Product A', 10.99),
(2, 'Product B', 15.49),
(3, 'Product C', 7.99),
(4, 'Product D', 12.75),
(5, 'Product E', 9.50);