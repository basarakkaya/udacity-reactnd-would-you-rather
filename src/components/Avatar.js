import React from "react";
import Image from "react-bootstrap/Image";

function Avatar({ user }) {
  return (
    <Image
      src={
        user.avatarURL
          ? user.avatarURL
          : "https://api.adorable.io/avatars/100/none.png"
      }
      roundedCircle
      style={{ height: 24, verticalAlign: "sub", margin: "0px 4px" }}
      alt={user.name}
    />
  );
}

export default Avatar;
