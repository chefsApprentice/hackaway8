"use client"; // This is a client component

import {
  Box,
  Container,
  TextField,
  Typography,
  Flex,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Page() {
  const [searchInput, setSearchInput] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();

        window.location.href = "/" + searchInput;
        // router.push("/" + searchInput);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [searchInput]);

  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: 1, height: "91vh" }}
      >
        <Stack direction="row">
          <Typography variant="h2" component="h1" sx={{}}>
            ByeB
          </Typography>{" "}
          <Typography variant="h2" component="h1" sx={{ color: "blue" }}>
            ai
          </Typography>
        </Stack>

        <Typography sx={{ mr: 4, mt: 1, pb: 2 }}>
          Say byebye to AI search results with ByeBai, the AI detector search
          engine.
        </Typography>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Search bar
          </InputLabel>
          <OutlinedInput
            onChange={handleSearchInputChange}
            value={searchInput ? searchInput : ""}
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            label="Search bar"
          />
        </FormControl>
      </Stack>

      <Footer />
    </Container>
    // </Container>
  );
}
