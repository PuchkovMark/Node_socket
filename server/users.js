class Users {
    constructor() {
        this.users = []
    }

    add(id, name, room) {
        this.users.push({
            id, name, room
        })
    }

    get(id) {
        return this.users.find(u => u.id === id)
    }

    remove(id) {
        const user = this.get(id)
        if (user) {
            this.users = this.users.filter(u => u.id !== user.id) // если u.id не равняется user.id то в таком случае заносим в результирующий массив
        }
        return user
    }

    getByRoom(room) {
        return this.users.filter(u => u.room === room)
    }
}

module.exports = function () {
    return new Users()
}