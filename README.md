Runtime/Tools to run the app:
============================
- MySql 8
- Node:  14
- Nest.js: 8.0
- Angular CLI: 13 
or
- Docker
- Docker-compose 

A) Automatic Setup with docker-compose:

./startup.sh

B) Manual Setup

Setting up MySQL DB:
====================
Run script: /mysqldbSetup.sql  to create schema ensolvers and tables: folder and work.
Update the following information in: backend/src/environment/environment.ts
    - portDB
    - username
    - password

To run the app:
==============

Terminal 1:
----------
cd backend
npm install
npm run start

Terminal 2:
----------
cd frontend
npm install
npm run start


C) To use the app:

http://localhost:4200

