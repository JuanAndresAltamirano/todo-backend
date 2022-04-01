# to-do Rest API

This project is a sample application that demonstrates storing and receiving data in MySQL database using NestJS framework and TypeORM.

## Technologies
- Nest 8.0
- NodeJS 16.14.2
- NPM 8.5.5
- MySQL (MariaDB) 10.4.24



## Usage

### With init.sh

```bash
bash init.sh
```


### Manually

In order to start this sample, please make sure that you specify the right data for establishing MySQL connection (in 'app.module.ts' file, make sure that 'username', 'password' and 'database' values matches your MySQL server values):

```
{
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'user123',
    database: 'todo_db',
    entities,
    synchronize: true,
}
```

Then please install the app dependencies by executing the following command:
```npm
npm install
```
and you can run the app by executing the following command:
```bash
npm run start:dev
```
After that, please visit:

- [http://localhost:3000](http:localhost:3000)
