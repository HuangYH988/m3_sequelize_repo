1. Create .env file and copy sample.env into it
2. npm install sequelize pg dotenv
3. npm install -D sequelize-cli
4. npx sequelize init
5. npx sequelize db:create
6. npx sequelize migration:generate --name <table name> Do this three times for your primary secondary and tertiary tables respectively