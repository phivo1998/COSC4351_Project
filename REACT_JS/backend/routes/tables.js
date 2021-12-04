const router = require('express').Router();
let Table = require('../models/tables.models');

router.route('/').get((req,res) =>{
    Table.find()
    .then(tables => res.json(tables))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/addTable').post((req,res) => {
    const size = req.body.size;
    const quantity = req.body.quantity;

    const newTable=  new Table({
        size,
        quantity
    });

    newTable.save()
    .then(() => res.json('Table added!'))
    .catch(err => res.status(400).json('Error' + err))
});

router.route('/:id').get((req,res) => {
    
    Table.findById(req.params.id)
    .then(tables => res.json(tables))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
    Table.findById(req.params.id)
    .then(table =>{
        
        table.quantity = req.body.quantity;

        table.save()
        .then(() => res.json('Table updated!'))
        .catch(err => res.status(400).json('Error: '+ err))
    })
})

module.exports = router;