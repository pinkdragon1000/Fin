# Creates a database called Fin and selects it so you can enter data in
create database Fin;
use Fin;

#Tables are created when Spring starts up**

# Show table results
Select * from Users;
Select * from Accounts;
Select * from Transactions;

# Create some data for the user table
Insert into Users (email, full_name, password) values ("sita.robinson@gmail.com", "Sita Robinson", "S12345");
Insert into Users (email, full_name, password) values ("padma.robinson@gmail.com", "Padma Robinson", "P12345");

# Update passwords to have a sha1 hash
UPDATE Users SET password = SHA1('password') where user_id=1;
UPDATE Users SET password = SHA1('password') where user_id=2;

# Create some data for the account table
Insert into Accounts (account_description, account_starting_amount, account_type, deposit_amount, withdraw_amount, user_id) values ("TD Bank Checking", 500, "Checking", "100", "300", 1);
Insert into Accounts (account_description, account_starting_amount, account_type, deposit_amount, withdraw_amount, user_id) values ("TD Bank Savings", 5000, "Savings", "400", "100", 1);
Insert into Accounts (account_description, account_starting_amount, account_type, deposit_amount, withdraw_amount, user_id) values ("Discover Checking", 100, "Checking", "100", "300", 2);

# Create some data for the transactions table
Insert into Transactions (transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values (1000, 0, "Deposit", "2021-06-09", 1);
Insert into Transactions (transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values (500, 0, "Deposit", "2021-05-08", 1);
Insert into Transactions (transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values (10, 0, "Withdraw", "2021-05-08", 1);

Insert into Transactions (transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values (5000, 0, "Deposit", "2021-06-09", 2);
Insert into Transactions (transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values (100, 0, "Deposit", "2021-05-08", 2);
Insert into Transactions (transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values (10, 0, "Withdraw", "2021-05-08", 2);


# Show all tables in database
Show tables;


drop database fin;
