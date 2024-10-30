import jwt from 'jsonwebtoken'

export default (req,res,next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/,'');
    if (token) {
        try {
            const decoded = jwt.verify(token, 'qwerty')
            req.userId = decoded._id
            next()
        } catch (error) {
           return res.status(441).json({message: 'нет доступа'})
        }
    } else {
         return res.status(442).json({message: 'нет доступа'})    }

    next()

}