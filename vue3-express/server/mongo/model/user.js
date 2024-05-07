
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var User = mongoose.model('user', new Schema({
    userId:String,
    nickname:String
}));

export default User;
