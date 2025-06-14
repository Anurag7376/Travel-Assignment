import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true, 
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    min: 0, 
  },
  description: {
    type: String,
    maxlength: 1000,
  },
}, {
  timestamps: true, 
});

const PopularLocation = mongoose.model('PopularLocation', LocationSchema);

export default PopularLocation;
