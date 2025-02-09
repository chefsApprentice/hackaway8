const { Divider, Typography, Box } = require("@mui/material");

const Footer = () => {
  return (
    <>
      {" "}
      <Divider sx={{ mt: 4 }} />
      <Box
        sx={{
          p: 1,
          textAlign: "center",
        }}
      >
        <Typography variant="caption">
          Thank you for using the app. Make sure you use your own api key, if it
          is not working.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
