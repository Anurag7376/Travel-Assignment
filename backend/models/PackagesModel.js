import mongoose from 'mongoose';

const popularPackageSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
    trim: true,
  },
  packages: {
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

const PopularPackage = mongoose.model('PopularPackage', popularPackageSchema);

export default PopularPackage;
