import mongoose from 'mongoose'

// type safety
type ConnectionObject = {
    isConnected?: number
}

const connction: ConnectionObject = {}

export default async function dbConnect(): Promise<void> {

    // Database connections are established on-demand 
    if (connction.isConnected) { 
        console.log("Already connected to database");
        return        
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || "", {})

        connction.isConnected = db.connections[0].readyState

        console.log("DB connected successfully");
        
    } catch (error:any) {

        console.log("Database connection failed", error);
        
        process.exit(1)
        
    }
}