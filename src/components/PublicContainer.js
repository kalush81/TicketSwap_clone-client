import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PublicContainer() {
  const events = useSelector(state => state.events);

  return (
    <div>
      <h3>Login</h3>

    </div>
  );
}
