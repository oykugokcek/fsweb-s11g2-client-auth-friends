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
    <div className="w-1/2 mx-auto my-20">
      <h1 className="mt-10 mb-5 text-7xl font-extrabold ">FRIENDS LIST</h1>
      {friends.map((friend) => (
        <p key={friend.id}>
          <div className="p-3 text-2xl font-extrabold">
            - {friend.name}- {friend.email}
          </div>
        </p>
      ))}
    </div>
  );
}

export default FriendsList;
