import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await window.fetch("/api/rooms");
      const json = await data.json();
      setRooms(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      {rooms.map((room) => (
        <Link key={room.id} to={room._id}>
          <RoomCard room={room} />
        </Link>
      ))}
    </div>
  );
};

export default Rooms;
