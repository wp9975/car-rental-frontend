import React, { useState } from "react";
import { Card, CardHeader, Checkbox, Typography, Box } from "@mui/material";

const ServiceCard = ({ service, onSelect, selected }) => {
  const [hover, setHover] = useState(false);

  const handleSelect = () => {
    onSelect(service.id);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Card
      onClick={handleSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        cursor: "pointer",
        border: selected ? "2px solid #3f51b5" : "none",
        position: "relative",
        overflow: "hidden",
        minWidth: "300px",
      }}
    >
      <Checkbox
        checked={selected}
        onChange={handleSelect}
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          zIndex: 2,
        }}
      />
      <CardHeader
        title={service.name}
        style={{ textAlign: "right", zIndex: 2, position: "relative" }}
      />
      <Box
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: hover ? "rgba(255, 255, 255, 0.8)" : "transparent",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          {hover ? (
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ textAlign: "center" }}
            >
              {service.description}
            </Typography>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ServiceCard;
