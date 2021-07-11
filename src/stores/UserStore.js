import  {extendObservable}  from 'mobx'

//  UserStore stores the currently logged in User //

class UserStore {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: ''
        })
    }
}

export default new UserStore();
