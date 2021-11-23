import UsersDAO from "../dao/usersDAO.js"

export default class UsersCrtl{
    static async apiGetUsers(req, res, next){
        let filters = {}
        if(req.query.username){
            filters.username = req.query.username
        }
        
        if(req.query.email){
            filters.email = req.query.email
        }
        
        const {usersList, totalUsers} = await UsersDAO.getUsers({
            filters,
        })

        let response = {
            users: usersList,
            total_users:totalUsers,
            filters:filters
        }
        
        res.json(response)
    }

    static async apiPostUsers(req, res, next){
        try{
            const first_name = req.body.first_name
            const last_name = req.body.last_name
            const phoneNumber = req.body.phoneNumber
            const email = req.body.email
            const password = req.body.password
            
            console.log(first_name)

            const SignUpResponse =await UsersDAO.addUser(
                first_name,
                last_name,
                phoneNumber,
                email,
                password
            )
            res.json({status: "success"})
        }
        catch(e){
            res.status(500).json({error: e.message})
        }
    }
}