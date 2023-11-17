import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { serviceData } from "../../Utilities/ServiceData";

const ServicesPage = () => {
  return (
    <div className=" bg-[#37517E] h-[100%] w-[100%] ">
      <div className="pt-10 flex justify-center">
        <Typography
          className="uppercase font-semibold text-xl text-[#FE6DB8] "
          sx={{
            fontSize: "30px",
            letterSpacing: "5px",
          }}
        >
          Services
        </Typography>
      </div>
      <div className="relative px-[5rem]  h-[100%] w-[100%] grid grid-cols-1 lg:grid-cols-4 justify-center pt-20 gap-6 ">
        {serviceData.map((item) => {
          return (
            <>
              <div className="bg-white h-[20rem] w-[20rem] rounded-2xl ">
                <div className="flex justify-center gap-5 pt-10 ">
                  <Avatar
                    sx={{
                      width: "4rem",
                      height: "4rem",
                      bgcolor: "#47B2E4",
                    }}
                  >
                    {item.icon}
                  </Avatar>
                </div>
                <div className="flex pt-5  justify-center">
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "K2D",
                      fontWeight: 600,
                      fontSize: "30px",
                    }}
                  >
                    {item.heading}
                  </Typography>
                </div>
                <div className="flex pt-5  justify-center">
                  <Typography variant="body2">{item.about}</Typography>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex px-20 flex-col pt-8">
        <Typography className="font-semibold text-sm text-white">
          This are the services you will receive from me
        </Typography>
        <Typography className="font-semibold text-sm text-white">
          Want to see my Work click next
          <Button>Click Next</Button>
        </Typography>
      </div>
    </div>
  );
};

export default ServicesPage;
