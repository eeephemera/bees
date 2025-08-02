import React from "react";
import { Typography, Card, CardContent, Avatar } from "@mui/material";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card elevation={0} sx={{ alignItems: 'center', textAlign: 'center' }}>
      <CardContent>
        <Avatar src={img} sx={{ marginBottom: 3 }} alt={client} />
        <Typography variant="h6" color="text.primary">
          {client}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 3, fontWeight: 500, color: '#4a5568' }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 5, fontWeight: 400, color: '#718096' }}
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;