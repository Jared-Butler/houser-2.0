module.exports={
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAllProperties()
        .then( houses => res.status(200).send(houses))
        .catch( err => {
            res.status(500).send( `Error Message: ${err}` )
        } );
    },

    addProperty: (req, res, next) => {
        const dbInstance = req.app.get('db');
        
       dbInstance.addProperty(req.body)
       
       .then(res.sendStatus(200))
       .catch(err => console.log(err))
    },

    deleteProperty: (req, res, next) => {
        const dbInstance = req.app.get('db');

        console.log(req.params);
        dbInstance.deleteProperty(req.params)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))
    }
}

