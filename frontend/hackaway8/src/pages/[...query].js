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
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { useState } from "react";
import Results from "@/components/Results";
import axios from "axios";
// import mockData from "../../src/mockData.json" assert { type: "json" };

export default function Page() {
  const router = useRouter();
  const REQUEST_AMOUNT = 10;

  // return <p>Post: {router.query.query}</p>;

  // const { searchQuery, setSearchQuery } = useState(router.query.query);

  useEffect(() => {
    if (!router.isReady) return;

    let searchUrl =
      "https://www.googleapis.com/customsearch/v1?key=" +
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY +
      "&cx=57d3aa7026aa34170&q=" +
      router.query.query;

    // console.log("search query" + searchUrl);

    axios.get(searchUrl).then((response) => {
      if (response.data) {
        // console.log("Search performed");
        setPost(response.data);
        // console.log("res");
        // console.log(response.data);
      } else {
        console.log("No data" + response);
      }
    });
  }, [router.isReady]);

  const [post, setPost] = useState(null);

  useEffect(() => {}, []);

  const [aiUrls, setAiUrls] = useState(null);

  const backendUrl = "http://localhost:8080/api/urls";
  useEffect(() => {
    if (post != null) {
      const headers = { ContentType: "application/json" };
      let reqData = [];
      for (let i = 0; i < REQUEST_AMOUNT; i++) {
        reqData.push({ name: post.items[i].link });
      }
      // console.log("hitting backend");
      axios.post(backendUrl, reqData, { headers: headers }).then((response) => {
        setAiUrls(response.data);
        console.log(response.data);
      });
    }
  }, [post]);

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

  if (post == null) return null;

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

      {/* <Divider sx={{ mb: 4 }} /> */}

      <Container sx={{ p: "2" }}>
        <Container className="gcse-searchresults">
          <Stack spacing={2}>
            {/* <Results data={post} /> */}
            <Results data={post.items} ai={aiUrls} />
          </Stack>
        </Container>
      </Container>

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
    </div>
  );
}
