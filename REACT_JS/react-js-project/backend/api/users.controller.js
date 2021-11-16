import { ExplicitContentFilterLevels } from "discord.js/typings/enums"
import UsersDAO from "../dao/usersDAO.js"

export default class UsersCrtl{
    static async apiGetUsers(req, res, next){
        let filter = {}
        if(req.query.username){
            filter.username = req.query.username
        }

        const {usersList, totalUsers} = await UsersDAO.getUsers({
            username
        })

        let response = {
            usernames: userList
        }

        res.json(response)
    }
}