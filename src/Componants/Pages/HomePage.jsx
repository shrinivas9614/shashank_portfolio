import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div className="">
      <div className="bg-[#37517E] lg:grid grid-cols-2  lg:px-12 relative">
        <div className="col-span-1">
          <p className="text-sky-400 text-8xl font-bold font-['Karma'] pb-6">
            I am
          </p>
          <p className="text-sky-400 text-8xl font-bold font-['Karma'] ">
            Designer
          </p>
          <p className="pt-4 font-semibold text-white">
            Hello, I am Shashank Gavali and I am a Graphic Designer.
          </p>
          <p className="font-semibold text-white"> Wnat to see my Work </p>
          <Button  className="bg-blue-900"> Click Here </Button>
          <div className="pb-8">
            <img src="/images/Box.png " alt="" className="h-52 mt-20" />
          </div>
        </div>
        <div className="relative pt-0 mt-[15rem] h-auto w-auto lg:mt-14">
          <img
            src="/images/aditya.png"
            alt=""
            className="h-[35rem] w-[40rem] "
          />
          
          <div className="flex justify-center pt-5 space-x-3 ">
            <Button
              sx={{
                bgcolor: "white",
                fontWeight: '7rem',
                fontFamily: " Inria Sans ",
                letterSpacing: 10,
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

export default HomePage;
