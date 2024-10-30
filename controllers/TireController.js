import TireModel from '../models/Tire.js'
import { body } from 'express-validator'

export const create = async (req,res) => {
    try {
        const doc = new TireModel({
            name: req.body.name,
            season: req.body.season,
            maxSpeed: req.body.maxSpeed,
            maxWeight: req.body.maxSpeed,
            brand: req.body.brand,
            country: req.body.country,

        })
        const post = await doc.save()

        res.json(post)
    } catch (error) {
        console.log(error)
        res.status(440).json({message: 'Ошибка при создании'})
    }
}

export const getAll = async (req,res) => { // надо доработать, скорее всего возвращает не то что я хочу
    try {
        const tires = await TireModel.find()
        res.json(tires)
    } catch (error) {
        console.log(error)
        res.status(440).json({
            message: 'Ошибка при получении'
        })
        
    }
}

export const getOne = async (req,res) => {
    try {
        const tireId = req.body.name
        const tires = await TireModel.findOne(tireId)
        res.json(tires)
    } catch (error) {
        console.log(error)
        res.status(440).json({
            message: 'Ошибка при получении'
        })
        
    }

}

export const remove = async (req,res) => {
    try {
        const tireId = req.body.name
        TireModel.findByIdAndDelete({name: tireId},
        (err, doc) => {
            if (err) {
                console.log(err)
                res.status(440).json({
                    message: 'Ошибка при удалении'
                })
            }
            if (!doc) {
                res.status(440).json({
                    message: 'Файл не найден'
                })
            }
            res.json({
                success: true
            })   
        })
    } catch (error) {
        
        console.log(error)
        res.status(440).json({
            message: 'Ошибка при удалении'
        })

    }

}

export const patchTire = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(440).json({
            message: 'Ошибка при изменении'
        })
        
    }

}