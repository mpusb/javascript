let isAccountLocked = true
let userRole = 'user'


if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// challenge area

let temp = 120

if (temp <= 32) {
    console.log('its freezing')
} else if (temp >= 110) {
    console.log('its too hot')
} else {
    console.log('Go for it. It is pretty nice.')
}
