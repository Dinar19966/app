import { body } from "express-validator";

export const registerValidation = [
    body('password', 'Пароль дожен быть минимум 5 символов').isLength({min: 5}),
    body('username', 'Минимум 3 символа').isLength({min:3})
]