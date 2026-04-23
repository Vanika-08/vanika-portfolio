import React from "react";
type Props = {
  params: {
    name: string;
  };
};

const TeamDetailPage = async ({ params }: Props) => {
  const name = params.name;

  return (
    <div className="text-6xl text-red-950">
      TeamDetailPage {name}
    </div>
  );
};

export default TeamDetailPage;
