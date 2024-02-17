const jwt = require("jsonwebtoken")
const secratekey = process.env.SECRATE_KEY || DEF

const VerifyTokan = (req, res, next) =>{
    try {
        const Tokan = req.header("Tokan")
        if(!Tokan){
            res.status(400).json({
                mgs:" Please provide a Tokan"
            })
        }else{
             const data = jwt.verify(Tokan, secratekey )
             req.user = data.user
             next()
        }
        
    } catch (error) {
        res.status(400).json({
            mgs:"Please provide a valid tokan"
        })
    }
   
}
module.exports = VerifyTokan;