const { connectToDatabase } = require('../config/database');
const { ObjectId } = require('mongodb');

const new_cajero = [
    {
        nombre: 'Samuel',
        id: '041-2210022011F',
        codigo_empleado: 500,
        estado: true
    }
];

const new_bulkess = async (req, res) => {
    try {
        const db = await connectToDatabase();

        const cajeros = await db
            .collection('cajeros')
            .insertMany(new_cajero);

        res.json(cajeros);

    } catch (error) {
        console.error('Error inserting cajero:', error);

        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

const getCajeros = async (req, res) => {
    try {
        const db = await connectToDatabase();

        const cajeros = await db
            .collection('cajeros')
            .find()
            .toArray();

        res.json(cajeros);

    } catch (error) {
        console.error('Error fetching cajeros:', error);

        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

const getCajerosId = async (req, res) => {
    try {
        const db = await connectToDatabase();

        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'Invalid cajero ID'
            });
        }

        const cajero = await db
            .collection('cajeros')
            .findOne({
                _id: new ObjectId(id)
            });

        if (!cajero) {
            return res.status(404).json({
                error: 'Cajero not found'
            });
        }

        res.json(cajero);

    } catch (error) {
        console.error('Error fetching cajero:', error);

        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

module.exports = {
    getCajeros,
    getCajerosId,
    new_bulkess
};