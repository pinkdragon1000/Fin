# Creates a database called Fin and selects it so you can enter data in
create database Fin;
use Fin;

#Tables are created when Spring starts up**

# Show table results
Select * from Users;
Select * from Accounts;
Select * from Transactions;

# Create some data for the user table
Insert into Users (user_id, email, full_name, password) values ("user001", "sita.robinson@gmail.com", "Sita Robinson", "S12345");
Insert into Users (user_id, email, full_name, password) values ("user002", "padma.robinson@gmail.com", "Padma Robinson", "P12345");

# Update passwords to have a sha1 hash
UPDATE Users SET password = SHA1('password') where user_id="user001";
UPDATE Users SET password = SHA1('password') where user_id="user002";

# Create some data for the account table
Insert into Accounts (account_id, account_description, account_starting_amount, account_starting_date, account_type, deposit_amount, withdraw_amount, user_id) values ("account001", "TD Bank Checking", 500, "2021-01-01", "Checking", "100", "300", "user001");
Insert into Accounts (account_id, account_description, account_starting_amount, account_starting_date, account_type, deposit_amount, withdraw_amount, user_id) values ("account002", "TD Bank Savings", 5000, "2021-01-01", "Savings", "400", "100", "user001");
Insert into Accounts (account_id, account_description, account_starting_amount, account_starting_date, account_type, deposit_amount, withdraw_amount, user_id) values ("account003", "Discover Checking", 100, "2021-01-01", "Checking", "100", "300", "user002");

# Create some data for the transactions table
Insert into Transactions (transaction_id, transaction_amount, transaction_group, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction001", 500, "Starting Amount", 0, "Deposit", "2021-01-01", "account001");
Insert into Transactions (transaction_id, transaction_amount, transaction_group, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction002", 5000, "Starting Amount", 0, "Deposit", "2021-01-01", "account002");
Insert into Transactions (transaction_id, transaction_amount, transaction_group, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction003", 100, "Starting Amount", 0, "Deposit", "2021-01-01", "account003");

Insert into Transactions (transaction_id, transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction004", 1000, 0, "Deposit", "2021-06-09", "account001");
Insert into Transactions (transaction_id, transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction005", 500, 0, "Deposit", "2021-05-08", "account001");
Insert into Transactions (transaction_id, transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction006", 10, 0, "Withdraw", "2021-05-08", "account001");

Insert into Transactions (transaction_id, transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction007", 5000, 0, "Deposit", "2021-06-09", "account002");
Insert into Transactions (transaction_id, transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction008", 100, 0, "Deposit", "2021-05-08", "account002");
Insert into Transactions (transaction_id, transaction_amount, transaction_sub_total, transaction_type, transaction_date, account_id) values ("transaction009", 10, 0, "Withdraw", "2021-05-08", "account002");


# Show all tables in database
Show tables;


drop database fin;
