import { AiOutlineArrowDown } from "react-icons/ai";

import React, { useState } from "react";

import {
  Card,
  CardHeader,
  IconButton,
  Collapse,
  CardContent,
  Typography,
} from "@mui/material";

const FaqCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <CardHeader
        title={props.question}
        action={
          <IconButton>
            <AiOutlineArrowDown
              size={28}
              className={`${
                expanded ? "rotate-180" : ""
              } transition duration-500 bg-silver shadow-lg rounded-lg`}
            />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.answer}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default FaqCard;
