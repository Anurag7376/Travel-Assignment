import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import {motion} from 'motion/react';

export default function MyCard( {data} ) {
  
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={data.img} alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          
          <div className='flex flex-col items-center justify-between w-full'>
            <div>{data.packages}</div>
            <motion.button whileTap={{scale:0.9}} className='text-white bg-[rgba(119,200,200,255)] px-10 py-2 mt-2 rounded-full font-semibold'>View Details</motion.button>
          </div>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}