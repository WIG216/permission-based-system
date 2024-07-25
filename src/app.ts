import express from 'express';
import connectDB from './core/config/db';
import routes from './modules/routes';
import dotenv from 'dotenv';
import seedPermissions from './core/config/seedPermissions';

dotenv.config();

const app = express();

const initializeApp = async () => {
    try {
        await connectDB();
        await seedPermissions();

        app.use(express.json());
        app.use('/api/v1', routes);
    } catch (error) {
        console.error('Error initializing app:', error);
    }
};

initializeApp();

export default app;
