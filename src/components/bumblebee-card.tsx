import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

interface BumblebeeCardProps {
  name: string;
  image: string;
  description: string;
  advantages: string[];
  pollinates: string[];
  kit_contents: string[];
}

export function BumblebeeCard({
  name,
  image,
  description,
  advantages,
  pollinates,
  kit_contents,
}: BumblebeeCardProps) {
  return (
    <Card sx={{ marginTop: 6, width: { xs: '100%', md: 384 } }}>
      <CardMedia component="img" height="224" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" color="text.primary" sx={{ marginBottom: 2 }}>
          {name}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>

        <Typography variant="h6" color="text.primary" sx={{ marginTop: 4, marginBottom: 2 }}>
          Преимущества {name.split(' - ')[0]}:
        </Typography>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {advantages.map((item, index) => (
            <li key={index}><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>{item}</Typography></li>
          ))}
        </ul>

        <Typography variant="h6" color="text.primary" sx={{ marginTop: 4, marginBottom: 2 }}>
          {name.split(' - ')[0]} опыляют:
        </Typography>
        <ul className="list-disc pl-5 text-gray-700 grid grid-cols-2 gap-1">
          {pollinates.map((item, index) => (
            <li key={index}><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>{item}</Typography></li>
          ))}
        </ul>

        <Typography variant="h6" color="text.primary" sx={{ marginTop: 4, marginBottom: 2 }}>
          Комплектация шмелиного улья:
        </Typography>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {kit_contents.map((item, index) => (
            <li key={index}><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>{item}</Typography></li>
          ))}
        </ul>
      </CardContent>
      <Box sx={{ padding: 2.5, paddingTop: 0 }}>
        <Button variant="contained">Узнать больше</Button>
      </Box>
    </Card>
  );
}

export default BumblebeeCard; 