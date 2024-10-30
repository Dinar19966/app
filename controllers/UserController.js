import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator';
import { body } from 'express-validator';



export const register = async (req,res) => {
    try {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json(errors.array())
     }
 
     const password = req.body.password;
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(password, salt);
 
     const doc = new UserModel({
         username: req.body.username,
         passwordHash: hash,
     })
 
     const user = await doc.save();
 
     const token = jwt.sign({
         _id: user._id}, 'qwerty',{expiresIn: '1d'}  )
  
     const {passwordHash, ...userData} = user._doc
     
     res.json({...userData, token});
    } catch (err) {
     console.log(err)
     res.status(443).json({
         message: 'Не удалось зарегестрироваться'
     })
    }}

export const login = async (req,res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username})

        if (!user) {
            return req.status(404).json({message: 'Неверный логин'})
        }
    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

    if (!isValidPass) {
        return req.status(404).json({message: 'Неверный пароль'})

    }
    const token = jwt.sign({
        _id: user._id}, 'qwerty',{expiresIn: '1d'}  )
 
        const {passwordHash, ...userData} = user._doc
    
        res.json({...userData, token});
    
    } catch (err) {
        console.log(err)
    res.status(444).json({
        message: 'Не удалось АВТОРИЗОВАТЬСЯ'
    })
   }
}

export const me = async (req,res) => {
    try {
            const user = await UserModel.findById(req.userId)
            if (!user) {
                return res.status(441),json({ message: 'пользователь не найден'})
            }
            const {passwordHash, ...userData} = user._doc
    
            res.json({...userData, token});

    } catch(err) {
        console.log(err)
    res.status(444).json({
        message: 'Нет доступа'
    })
}
}