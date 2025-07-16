import {
    Typography,
    Card,
    CardContent,
  } from "@mui/material";
  
  
  interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
  }
  
  export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
    return (
      <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <CardContent sx={{ display: 'grid', justifyContent: 'flex-start' }}>
          <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
            <Icon sx={{ height: 24, width: 24 }} />
          </div>
          <Typography variant="h5" color="text.primary" sx={{ marginBottom: 2 }}>
            {title}
          </Typography>
          <Typography sx={{ fontWeight: 400, color: '#718096' }}>
            {children}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  export default FeatureCard;
  