class UserTemplate {
    constructor(name, password, age, date) {
        this.name = name
        this.password = password
        this.age = age
        this.date = date
        this.connected = false
    }
    login() {
        this.connected = true
        console.log('your login status:', this.connected)
    }
    logout() {
        this.connected = false
        console.log('your logout status:', this.connected)
    }
    checkStatus() {
        if (this.connected = true) {
            console.log('status : login', this.connected)
        } else {
            console.log('status : logout', this.connected)
        }
    }
}