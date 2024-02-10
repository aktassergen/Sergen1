
const AuthService = {
    isAuthenticated: false,
    

    loginService(email, password){
        // In a real app you'd have API calls here.
        // This is just a mockup, so we'll simulate async behavior with a promise
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                if(email === "admin" && password === "password"){
                    resolve("Giriş başarılı")
                } else {
                    reject("Bir hata oluştu")
                }
            }, 1000)
        })
    }, 

    logoutService(){
        this.isAuthenticated = false
    }
}

export default AuthService;