import mongoose, { connect } from "mongoose"

const connectMongo = async(mongoURL) => {
    
   return mongoose.connect(mongoURL);

}

export default connectMongo;