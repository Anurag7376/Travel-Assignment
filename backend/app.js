import express from 'express';
import cors from 'cors';
import connectDB from './config/DbConnect.js';
import PopularLocation from './models/LocationsModel.js';
import PopularPackage from './models/PackagesModel.js';
import TestimonialsModel from './models/TestimonialsModel.js';

const app = express();
app.use(cors());    

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();


// app.get('/', (req, res) => {
//   res.send('Welcome to the backend server!');
// });


// app.post('/location', async (req, res) => {
//     try {
//         const { img, location, price, description } = req.body;
    
//         if (!img || !location || !price) {
//         return res.status(400).json({ message: 'All fields are required' });
//         }
    
//         const newLocation = new PopularLocation({
//         img,
//         location,
//         price,
//         description
//         });
    
//         await newLocation.save();
//         res.status(201).json({ message: 'Location added successfully', data: newLocation });
//     } catch (error) {
//         console.error('Error adding location:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// })

// app.post('/package', async (req, res) => {
//     try {
//         const { img, packages, price, description } = req.body;
    
//         if (!img || !packages || !price) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }
    
//         const newPackage = new PopularPackage({
//             img,
//             packages,
//             price,
//             description
//         });
    
//         await newPackage.save();
//         res.status(201).json({ message: 'Package added successfully', data: newPackage });
//     } catch (error) {
//         console.error('Error adding package:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// app.post('/testimonial', async (req, res) => {
//     try {
//         const { img, name, comment } = req.body;
    
//         if (!img || !name || !comment) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }
    
//         const newTestimonial = new TestimonialsModel({
//             img,
//             name,
//             comment
//         });
    
//         await newTestimonial.save();
//         res.status(201).json({ message: 'Testimonial added successfully', data: newTestimonial });
//     } catch (error) {
//         console.error('Error adding testimonial:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });
app.get('/location', async (req, res) => {
  try {
    const locations = await PopularLocation.find();
    res.status(200).json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/package', async (req, res) => {
  try {
    const packages = await PopularPackage.find();
    res.status(200).json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/testimonial', async (req, res) => {
  try {
    const testimonials = await TestimonialsModel.find();
    res.status(200).json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port : 3000');
});