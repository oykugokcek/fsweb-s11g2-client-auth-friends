import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../App";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <p key={friend.id}>
          {friend.name}- {friend.email}
        </p>
      ))}
    </div>
  );
}

export default FriendsList;
