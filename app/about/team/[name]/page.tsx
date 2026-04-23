import React from "react";

const TeamDetailPage = async ({ params }) => {
    const name = (await params).name;
  return <div className="text-6xl text-red-950">TeamDetailPage {name}</div>;
};

export default TeamDetailPage;
