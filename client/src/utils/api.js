export default {
    addUser:'/accounts',
    login: '/auth/login',
    verify: id => `/auth/verify/${id}`,
    getVerified: id => `/auth/verify/${id}/get`
}