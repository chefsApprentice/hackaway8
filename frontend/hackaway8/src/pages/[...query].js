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
import Results from "@/components/Results";

export default function Page() {
  const router = useRouter();
  // return <p>Post: {router.query.query}</p>;

  const mockData = [
    {
      icon: "ignore",
      webTitle: "Dell",
      url: "https://dell.com/innovate",
      title: "Dell Technologies",
      desc: "Exploring the latest innovations in computing and enterprise solutions.",
      ai: false,
    },
    {
      icon: "ignore",
      webTitle: "IBM",
      url: "https://ibm.com/ai-research",
      title: "IBM AI Research",
      desc: "Deep dive into AI advancements and enterprise computing at IBM.",
      ai: true,
    },
    {
      icon: "ignore",
      webTitle: "MongoDB",
      url: "https://mongodb.com/docs",
      title: "MongoDB Documentation",
      desc: "Comprehensive guide to NoSQL databases and scalable data solutions.",
      ai: false,
    },
    {
      icon: "ignore",
      webTitle: "Tesla",
      url: "https://tesla.com/autopilot",
      title: "Tesla Autopilot",
      desc: "Learn how Tesla's self-driving technology is shaping the future.",
      ai: false,
    },
    {
      icon: "ignore",
      webTitle: "Nvidia",
      url: "https://nvidia.com/gpu-tech",
      title: "Nvidia GPU Technology",
      desc: "Discover the latest breakthroughs in graphics processing and AI.",
      ai: true,
    },
  ];

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        router.push("/" + searchInput);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [searchInput]);

  return (
    // <div className="gcse-search"></div>

    <div className="gcse-search">
      <Container sx={{ p: "2" }}>
        <Container className="gcse-searchbox" sx={{ p: 2 }}>
          <Container
            sx={{ flexDirection: "row", display: "flex" }}
            spacing={32}
          >
            <Typography variant="h4" component="h1" sx={{ mr: 4, mt: 1 }}>
              ByeBAI
            </Typography>

            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Search bar
              </InputLabel>
              <OutlinedInput
                onChange={handleSearchInputChange}
                value={searchInput}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                label="Search bar"
              />
            </FormControl>
          </Container>
        </Container>
      </Container>

      <Container sx={{ p: "2" }}>
        <Container className="gcse-searchresults">
          <Stack spacing={4}>
            <Results data={mockData} />
          </Stack>
        </Container>
      </Container>
    </div>
  );
}
