import * as mongooge from 'mongoose';

export const ItemSchema = new mongooge.Schema({
    name: String,
    qty: Number,
    description: String,
});