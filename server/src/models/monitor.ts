import { DataTypes } from 'sequelize';
import database from '../configs/db.config';

const Monitor = database.define('Monitor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(80),
        allowNull: false
    }
}, { timestamps: false });

export default Monitor;