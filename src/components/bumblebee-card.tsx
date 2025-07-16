import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import NextLink from "next/link";

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
    <Card sx={{
      marginTop: 6,
      width: { xs: '100%', md: 384 },
      boxShadow: 3, // Добавляем тень для объемности
      borderRadius: 2, // Немного скруглим углы
    }}>
      <CardMedia component="img" height="224" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" color="text.primary" sx={{ marginBottom: 1.5 }}> {/* Уменьшаем отступ */}
          {name}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3, color: '#5a5a5a' }}> {/* Добавляем отступ и чуть мягче цвет */}
          {description}
        </Typography>

        <Typography variant="h6" color="text.primary" sx={{ marginTop: 3, marginBottom: 1 }}>
          Преимущества {name.split(' - ')[0]}:
        </Typography>
        <ul className="list-disc pl-5 text-gray-700 space-y-1" style={{ marginBottom: '1.5rem' }}>
          {advantages.map((item, index) => (
            <li key={index}><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>{item}</Typography></li>
          ))}
        </ul>

        <Typography variant="h6" color="text.primary" sx={{ marginTop: 3, marginBottom: 1 }}>
          {name.split(' - ')[0]} опыляют:
        </Typography>
        <ul className="list-disc pl-5 text-gray-700 grid grid-cols-2 gap-1" style={{ marginBottom: '1.5rem' }}>
          {pollinates.map((item, index) => (
            <li key={index}><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>{item}</Typography></li>
          ))}
        </ul>

        <Typography variant="h6" color="text.primary" sx={{ marginTop: 3, marginBottom: 1 }}>
          Комплектация шмелиного улья:
        </Typography>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {kit_contents.map((item, index) => (
            <li key={index}><Typography variant="body2" sx={{ fontWeight: 400, color: '#4a5568' }}>{item}</Typography></li>
          ))}
        </ul>
      </CardContent>
      <Box sx={{ padding: 2.5, paddingTop: 0 }}>
        <NextLink href="/contact-us" passHref legacyBehavior>
          <Button component="a" variant="contained" fullWidth>Запросить</Button>
        </NextLink>
      </Box>
    </Card>
  );
}

export default BumblebeeCard; 