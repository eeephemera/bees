import React from "react";

import { Typography, Card, CardContent } from "@mui/material";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <CardContent sx={{ display: 'grid', paddingX: 0 }}>
        <Typography variant="h4" color="text.primary" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 400 }}>{children}</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;