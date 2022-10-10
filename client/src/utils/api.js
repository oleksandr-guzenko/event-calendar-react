export default {
    // auth
    login: '/auth/login',
    verify: id => `/auth/verify/${id}`,
    getVerified: id => `/auth/verify/${id}/get`,

    // account actions
    addAccount: '/accounts',
    getAccounts: '/accounts',
    disableAccount: id => `/accounts/${id}/disable`,
    getAccount: id => `/accounts/${id}`,
    updateAccount: id => `/accounts/${id}`,

    // event actions
    addEvent: '/events',
    getEvents: '/events',
    getEvent: id => `/events/${id}`,
    updateEvent: id => `/events/${id}`,
}