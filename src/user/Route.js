var express = require('express')
var router = express.Router()
 
// define the home page route
router.get('/', function (req, res) {
  res.send('Router home page')
})



// Adding controllers Here 

let {addData , updateData , deleteData} = require('./Controller')


router.post('/addData', (req,res)=>{   
    addData(req,res) 
})

router.put('/updateData', (req,res)=>{   
    updateData(req,res) 
})
router.delete('/deleteData', (req,res)=>{   
    deleteData(req,res) 
})




// define the about route
router.get('/about', function (req, res) {
  res.send('About Routers')
})

module.exports = router