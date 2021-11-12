const navigationController ={

    getHome : (req, res , next) => {

        res.render('index',{title: "Home"})


    }

}

module.exports =navigationController