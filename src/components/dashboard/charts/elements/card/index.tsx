import React from "react";
import { Card } from "react-bootstrap";

type TDashboardChartCard = {
  title: string;
  children?: React.ReactNode;
};

export const DashboardChartCard = ({ title, children }: TDashboardChartCard) => {
  return (
    <Card>
      <Card.Header className="bg-primary text-light">{title}</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
