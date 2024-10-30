import mongoose from "mongoose";

const TireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    season: { 
        type: String,
        category_id: 1,
        kindOfSeason: ['winter','summer','universal'], // варианты выбора, не уверен, что правильное решение
        required: true,
    },
    maxSpeed: {
        type: Number,
        category_id: 2,
        kindOfMaxSpeed: [180,190,200,210], // варианты выбора, не уверен, что правильное решение
        required: true,
    },
    maxWeight: {
        type: Number,
        category_id: 3,
        kindOfMaxWeight: [600,650,700,750,800,850], // варианты выбора, не уверен, что правильное решение
        required: true,
    },
    brand: {
        type: String,
        category_id: 4,
        kindOfBrand: ['Ikon',
            'Pirelli',
            'Formula',
            'Lanvigator',
            'Evergreen',
            'Kapsen',
            'Nankang',
            'Autogreen',
            'Bridgestone',
            'Linglong',
            'Hankook',
            'Atlander',
            'Michelin',
            'Cordiant',
            'Continental'], // варианты выбора, не уверен, что правильное решение
        required: true,
    },
    country: {
        type: String,
        category_id: 5,
        kindOfCountry: ['Япония',
            'Южная Корея',
            'Китай',
            'Россия',
            'США',
            'Финляндия',
            'Германия',
            'Франция',
            'Италия'], // варианты выбора, не уверен, что правильное решение
        required: true,
    },
    
})

export default mongoose.model('Tire', TireSchema)