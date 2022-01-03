var user = require("./Model");//import schema




// ...............................................................AddData | Write Data 

module.exports.addData = async (req, res) => {
  try {
    if (!req.body.name) {
      res.json({ status: 400, message: "name not found" })
      return
    } else if (!req.body.course) {
      res.json({ status: 400, message: "course not found" })
      return
    } else if (!req.body.roll) {
      res.json({ status: 400, message: "roll not found" })
      return     
    }
    const { name, course, roll } = req.body
    var addPost = new user({
      name, course, roll
    })
    addPost.save((err, success) => {
      if (err) {
        res.json({ status: 400, message: err })
        return
      }
      res.json({ status: 200, message: "Success", data: success })
    })
    
  } catch (error) {
    res.json({ status: 400, message: err })
    return
  }
};


// ...............................................................UpdateData 

module.exports.updateData = async (req, res) => {
  try {
    if (!req.body.id) {
      res.json({ status: 400, message: "Id required" })
      return
    }
    const { id, name, course, roll } = req.body
    console.log("run");
    const update = await user.findByIdAndUpdate(id, {
      name, course, roll
    }, { new: true })
    if (!update) {
      res.json({ status: 400, message: "Id wrong" })
      return      
    }

    return res.json({ data: update })

  } catch (error) {
    res.json({ status: 400, message: error })
    return

  }

};







// ...............................................................deleteData 



module.exports.deleteData = async (req, res) => {
  try {
    if (!req.body.id) {
      res.json({ status: 400, message: "Id required" })
      return
    }
    const deleteData = await user.findByIdAndDelete(req.body.id)
    if (!deleteData) {
      res.json({ status: 400, message: "Id wrong" })
      return      
    }

    return res.json({message:'success'})

  } catch (error) {
    res.json({ status: 400, message: error })
    return

  }

};