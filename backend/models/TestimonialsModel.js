import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  comment: {
    type: String,
    required: true,
    maxlength: 1000,
  },
}, {
  timestamps: true, 
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
