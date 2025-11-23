import { URL } from "../models/url.js";

export async function handleGetAllURLOfUser(req , res ) {

       
  try {
    const userId = req.user._id;
    console.log('inhandlefun ', userId);
    const allURLs = await URL.find({ createdBy : userId});
    console.log(allURLs);
    res.status(200).json({
      success : true,
      allURLs : allURLs
    });
  }
  catch(error) {
    res.status(500).json({
      success : false,
      message : 'internal server error',
    })
  }
}
