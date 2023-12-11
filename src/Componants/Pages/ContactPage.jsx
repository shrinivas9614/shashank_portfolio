import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-[#ffff] pt-10 flex justify-center">
        <Typography
          className="uppercase font-semibold text-xl text-[#FE6DB8] "
          sx={{
            fontSize: "30px",
            letterSpacing: "5px",
          }}
        >
          Contact me
        </Typography>
      </div>
      <div className="grid grid-cols-1 bg-[#fffff] lg:grid-cols-2">
        <div className="col-span-1">
          <div className="">
            <Typography
              variant="h3"
              className="text-[#47B2E4] px-24 pt-[10rem] "
              sx={{
                fontSize: "20px",
              }}
            >
              Get In Touch
            </Typography>
            <div className="pt-10 px-10 flex ">
              <form>
                <Grid container gap={4}>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        width: "30rem",
                        borderRadius: "1rem",
                      }}
                      placeholder="Your Name"
                      name="name"
                      className="bg-[#22749b6a] text-black"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        width: "30rem",
                        borderRadius: "1rem",
                      }}
                      placeholder="Your Email"
                      name="email"
                      className="bg-[#22749b6a] text-black"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        width: "30rem",

                        borderRadius: "1rem",
                      }}
                      multiline
                      minRows={4}
                      placeholder="Your Message"
                      name="message"
                      className="bg-[#22749b6a] text-black"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      sx={{
                        bgColor: "#A6C7FA",
                        display: "inline-flex",
                        padding: " 0.75rem 1.1875rem 0.6875rem 1.125rem",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      variant="outlined"
                    
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-28">
          <h1 className="font-semibold text-2xl text-[#47B2E4] pb-5">
            My Contact Details
          </h1>
          <div className=" px-5 pt-5 font-semibold border-4 border-[#47B2E4] border-solid rounded-xl h-[20rem] w-[30rem]">
            <Box>
              <p className="font-semibold text-xl pb-3 text-[#47B2E4] ">
                EMAIL
              </p>
              <p className="font-semibold text-xl text-[#47B2E4] ">
                shashankgavali8@gmail.com
              </p>
            </Box>
            <Box className="pt-28">
              <p className="font-semibold text-xl pb-3 text-[#47B2E4] ">
                PHONE
              </p>
              <p className="font-semibold text-xl text-[#47B2E4] ">
                +91 8767099868
              </p>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
