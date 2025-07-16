import React from "react";

import { Typography, Card, CardContent } from "@mui/material";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card sx={{
      boxShadow: 3, // Добавляем тень
      borderRadius: 2, // Скругляем углы
      backgroundColor: 'white', // Явный белый фон
      padding: 2, // Добавляем общий отступ внутри карточки
      textAlign: 'center', // Выравниваем текст по центру всей карточки
    }}>
      <CardContent sx={{ display: 'grid', padding: 0 }}> {/* Сбрасываем padding, так как он уже на Card */}
        <Typography variant="h4" color="text.primary" sx={{ marginBottom: 1.5 }}>
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 400, color: '#5a5a5a' }}>{children}</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;