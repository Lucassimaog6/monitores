import { Sequelize } from 'sequelize';
import 'dotenv/config';

const database = new Sequelize(
    'db-monitores',
    process.env.DB_USERNAME!,
    process.env.DB_PASSWORD!,
    {
        host: 'db-server-monitores.database.windows.net',
        dialect: 'mssql',
    }
);

export default database;