const {userModel} = require('../model')
const userController ={
    login: async (req, res , next) =>{
        try {
            const {password ,email} = req.body
            const response = await userModel.login(email , password)
            res.redirect('/principal')
        } catch (error) {
            next(error);
        }
    }

}

module.exports =userController