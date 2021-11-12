const navigationController ={
    getHome : (req, res , next) => {
        res.render('index',{title: "Home"})
    },
    getRegister : (req, res , next) => {
        res.render('register',{title: "Registro"})
    },
    getLogin : (req, res , next) => {
        res.render('login',{title: "login"})
    },
    getPrincipal : (req, res , next) => {
        res.render('principal',{title: "Contenido Principal"})
    }

}

module.exports =navigationController