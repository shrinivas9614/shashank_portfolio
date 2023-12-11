import React from "react";
import { projectData } from "../../Utilities/projectData";
import { Typography } from "@mui/material";

const ProjectPage = () => {
  return (
    <div className="pt-5 px-9 bg-[#fff]">
      <div className="pt-10 flex justify-center">
        <Typography
          className="uppercase font-semibold text-xl text-[#FE6DB8] "
          sx={{
            fontSize: "30px",
            letterSpacing: "5px",
          }}
        >
          Projects
        </Typography>
      </div>
      <div className="flex flex-wrap -m-3 pt-10">
        {projectData.map((item, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
            key={index}
          >
            <div className="flex justify-center py-4 h-[20rem] bg-white">
              <img
                className="object-cover max-w-[20rem] max-h-[10rem]"
                src={item.image}
                alt=""
              />
            </div>
            <div className="px-4 mt-4">
              <p className="font-semibold text-lg text-white">Pamphlet</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
