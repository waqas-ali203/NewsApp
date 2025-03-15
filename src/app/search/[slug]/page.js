import SerachPage from "@/components/template/pageSections/SearchPage";
import React from "react";

const page = ({ params }) => {
  console.log("param:", params.slug);

  return (
    <div>
      <SerachPage searchQuery={params.slug} />
    </div>
  );
};

export default page;