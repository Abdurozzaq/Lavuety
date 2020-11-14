## Abdurozzaq Nurul Hadi (Abdurozzaq@outlook.com) (IG: @ozzaqnh)

# Lavuety
Laravel & Vuetify Starter Kit (or some thing like boilerplate)


![Image of Yaktocat](https://github.com/Abdurozzaq/Lavuety/blob/master/screenshoot.png)

**User Roles**

User & Admin

# Installation

Create a Database Table in phpMyAdmin

Extract the Laravel Source Code that has been downloaded to a folder anywhere.

Open Code Editor → Terminal.

In Terminal, navigate to the extracted Oashier folder.
  ```$ cd Lavuety```
  
Enter these commands one by one (without the $ sign),
  ```
  $ composer install
  $ npm install
  $ cp .env.example .env
  $ php artisan key:generate
  $ php artisan storage:link
  $ php artisan jwt:secret
  ```
  
Edit the .env file like this,
  ```DB_CONNECTION = mysql
  DB_HOST = 127.0.0.1 // change to Host your database
  DB_PORT = 3306
  DB_DATABASE = Lavuety // change to the name of the database table that you created
  DB_USERNAME = root // change to be your database username, default root
  DB_PASSWORD = ... // change to your databse password, null default 
  ```
  
Run this command for Seed :
  ```$ php artisan migrate --seed```
  
Done 😉, to run Laravel enter the command below:
  ```$ php artisan serve```
  
Then open the browser, and enter the url:
  ```http://localhost:8000```
  
or if you want to run on another port, use the command:
  ```$ php artisan serve --port: 627 // e.g. the port is "627"```
  ``` and change the port on APP_URL variable in .env file```

And for serving the vue JS run this command:
For Development : ```npm run watch```
For Production : ``` npm run prod```

Thank you, Good Luck ... 😁



# The Accounts on seeder:
Admin Account - Emaill: admin@gmail.com, Password: password

User Account - Email: user@gmail.com, Password: password
