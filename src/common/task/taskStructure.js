// params
// msg: String
// time: Date
class Task {
    constructor(message, time, id) {
        this.message = message;
        this.id = id;
        this.year = time.getFullYear();
        this.month = time.getMonth();
        this.day = time.getDate();
    }
}

export default Task;