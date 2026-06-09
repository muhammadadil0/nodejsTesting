const { postModel } = require('../models/post.model')

async function createPost(req,res){
  const {name,description} = req.body

   const post = await postModel.create({
    name,description
   })
   res.status(200).json({
    message:"User created successfully",
    post
   })


}

// async function readPost(req,res){

//   const {name} = req.params;
//  const posts =  await postModel.find({
//   name:name
//  })
//  res.status(201).json({
//   message:"read all post successfully",
//   posts
//  })
// }
async function readPost(req, res) {
  const { name } = req.params;

  const posts = await postModel.find({
    $or: [
      { name: name },
      { description: name }
    ]
  });

  res.status(200).json({
    message: "post fetch successfully",
    posts
  });
}

module.exports = {createPost,readPost}