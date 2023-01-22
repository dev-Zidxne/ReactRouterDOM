import React from "react";
import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <div>EditDetailPage</div>
      <p>{params.eventId}</p>
      <Link to=".." path="relative">
        Go back
      </Link>
    </>
  );
}

export default EventDetailPage;
