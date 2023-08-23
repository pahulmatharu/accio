**Setup**
1. npm install
2. Install Postgres
3. In PgAdmin (or use psql) add New database called database: 'Bitbot', password: 'bitbot'.
4. Create new role in pgadmin( or psql) called: bitbot and set to read/write permissions
5. Make sure port is 5432
6. Run project using: npm run start
7. Get your kitsssss

**Packages used**
pg ---> used to pool of connections. Handles concurrent requests instead of one static connection to the db
USE NODE < 20; 20 introduced a breaking change


Feature improvements
1. ADD LOGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNNNGGGGGGGGGGGGGGGGGGGGGG!
2. Change text to varchar(n)
3. Add Unit Tests
4. Add Load/Integration tests (maybe just start with a postman suite)
5. Create standardization libraries for API RESPONSES, BUSINESS ENTITIES, and REPO MODELS
6. Create Script for setting local db
7. Dockerize, add Github Actions
8. Setup Database config to use config file