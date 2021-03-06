const { User } = require('../../mongodb/models/users');

const addUser = async (_, args) => {
    try {
        let response = await User.create(args.user);
        return response;
    } catch (e) {
        return e.message;
    }
}

module.exports = {
    addUser
};