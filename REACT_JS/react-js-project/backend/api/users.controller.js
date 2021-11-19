import UsersDAO from "../dao/usersDAO.js"

export default class UsersCrtl{
    static async apiGetUsers(req, res, next){
        let filter = {}
        if(req.query.username){
            filter.username = req.query.username
        }

        const {usersList, totalUsers} = await UsersDAO.getUsers({
            filter
        })

        let response = {
            usernames: usersList,
            total_users:totalUsers,
            filters:filter
        }
        
        res.json(response)
    }
}