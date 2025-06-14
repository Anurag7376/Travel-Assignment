import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

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
          
          <div className='flex items-center justify-between w-full'>
            <div className='text-xl text-[rgba(119,200,200,255)]'>{data.location}</div>
            <div>Starting from <span className='text-[rgba(119,200,200,255)]'>{data.price}</span> </div>
          </div>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
