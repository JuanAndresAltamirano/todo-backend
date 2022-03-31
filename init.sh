#!/usr/bin/env bash

function MAKE_ORM_CONFIG()
{
	echo "DATABASE_HOST = localhost">.env
	echo "DATABASE_PORT = 3306">>.env
	echo "DATABASE_USER = $USER">> .env
	echo "DATABASE_PASSWORD = $PASSWORD">> .env
	echo "DATABASE_NAME = $DATABASE_NAME">> .env
}

function CONFIGURE_APP()
{
	echo "Configurating..."
	mysql --user="$USER" --password="$PASSWORD" --execute="CREATE DATABASE IF NOT EXISTS $DATABASE_NAME;"
	cd todo-client
	npm install
	npm run build:mac
}

DATABASE_NAME="todo_db"
echo "We will configure the database and backend"
read -p "Enter MariaDb user:" USER
read -s -p "Enter MariaDb password:" PASSWORD

while ! mysql -u $USER -p$PASSWORD  -e ";" ; do
       read -s -p "Can't connect, please retry: " PASSWORD
done

CONFIGURE_APP "$USER" "$PASSWORD" "$DATABASE_NAME"