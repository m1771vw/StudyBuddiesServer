const { User } = require("../../mongodb/models/users");
const getUsers = async () => {
    try {
        let response = await User.find({}).exec();
        return response;
        
    } catch (e){
        return e.response;
    }
}

module.exports = {
    getUsers
};