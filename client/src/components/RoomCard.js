import React from "react";
import { Card, Badge } from "antd";
const { Meta } = Card;

const RoomCard = ({ room }) => {
  return (
    <div style={{ width: 300, margin: "1rem" }}>
      <Badge count={room.promo ? "PROMO" : ""}>
        <Card
          cover={
            <img
              style={{
                width: "300px",
                height: "350px",
                objectFit: "cover",
              }}
              alt={room.name}
              src={`https://picsum.photos/300/350?random=${Math.ceil(Math.random() * 1000)}/?hotel`}
            />
          }
        >
          <Meta
            title={room.name.toUpperCase() || "Sans nom"}
            description={`Nombre de personnes maximum : ${room.maxPersons}`}
          />
        </Card>
      </Badge>
    </div>
  );
};

export default RoomCard;
