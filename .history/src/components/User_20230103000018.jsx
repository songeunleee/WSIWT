import React from "react";

export default function User({ user }) {
  return (
    <div>
      <div>{user.displayName}</div>
    </div>
  );
}
