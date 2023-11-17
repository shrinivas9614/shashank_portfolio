import { Button, Typography } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#37517E]">
      <div className="pt-10 flex justify-center">
        <Typography
          className="uppercase font-semibold text-xl text-[#FE6DB8] "
          sx={{
            fontSize: "30px",
            letterSpacing: "5px",
          }}
        >
          About
        </Typography>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#37517E]">
        <div className="col-span-1">
          <div className="flex justify-start px-20 pt-20 pb-20 ">
            <img src="images/about.png" alt="" />
          </div>
        </div>
        <div className="text-white px-8 lg:pt-52">
          <Typography variant="h2"> About Me </Typography>
          <div className="text-[#47B2E4] pt-6 ">
            <Typography sx={{ fontSize: "20px" }}>
              I'm Shashank Gavali, a graphic designer and illustrator.
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              I bring ideas to life through vibrant
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              visuals and compelling illustrations.
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Let's collaborate and make your vision stand out.
            </Typography>
          </div>
          <div className="pt-6 pb-4 flex justify-center">
            <Button
              sx={{
                bgcolor: "white",
                fontWeight: "7rem",
                fontFamily: " Inria Sans ",
                letterSpacing: 8,
                borderRadius: "20px",
                padding: "1rem 3rem 1rem 3rem",
                fontSize: "1rem",
                color: "black",
              }}
              variant="contained"
              color="primary"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
