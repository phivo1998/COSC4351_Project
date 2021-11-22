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
}