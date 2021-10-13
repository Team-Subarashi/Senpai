import React, { useState, useEffect } from "react";

import { Grid, Box, Button } from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  Input,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";

import axios from "axios";

import { useRecoilValue } from "recoil";
import { userState } from "../atoms";

export default function SenpaiSettings() {
  const user = useRecoilValue(userState);
  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user._id === null) {
  //       const response = await axios({
  //         method: "get",
  //         url: `/api/v1/firebase/${user.uid}`,
  //       });
  //       if (response.data) {
  //         setUser(response.data);
  //       }
  //     }
  //   });
  // }, []);

  const [senpaiCheck, setSenpaiCheck] = useState(false);
  const [skillOne, setSkillOne] = useState("");
  const [rateOne, setRateOne] = useState(0);
  const [skillTwo, setSkillTwo] = useState("");
  const [rateTwo, setRateTwo] = useState(0);
  const [skillThree, setSkillThree] = useState("");
  const [rateThree, setRateThree] = useState(0);

  const changeSkillOne = (skill) => {
    setSkillOne(skill);
  };
  const changeRateOne = (rate) => {
    setRateOne(rate);
  };

  const changeSkillTwo = (skill) => {
    setSkillTwo(skill);
  };
  const changeRateTwo = (rate) => {
    setRateTwo(rate);
  };

  const changeSkillThree = (skill) => {
    setSkillThree(skill);
  };
  const changeRateThree = (rate) => {
    setRateThree(rate);
  };

  useEffect(() => {
    console.log(user);

    if (user.category) {
      setSkillOne(user.category[0]);
      setRateOne(user.rates[0]);
    }

    if (user.category) {
      setSkillTwo(user.category[1]);
      setRateTwo(user.rates[1]);
    }
    if (user.category) {
      setSkillThree(user.category[2]);
      setRateThree(user.rates[2]);
    }
    if (user.isSenpai) {
      setSenpaiCheck(user.isSenpai);
    }
  }, [user]);

  return (
    <Grid container style={{ fontFamily: "Nunito" }}>
      <Grid
        item
        xs={12}
        style={{
          marginLeft: "40%",
          marginRight: "40%",
          marginTop: "5vh",
          marginBottom: "2vh",
          height: "5vh",
          borderRadius: "4px",
          backgroundColor: "#673AB7",
        }}
      >
        {/* <h1 style={{ fontWeight: "bold", color: "#fff", marginTop: "0.5vh" }}> */}
        Senpai Settings
        {/* </h1> */}
      </Grid>
      <Grid item xs={12}>
        <Checkbox
          // defaultChecked={senpaiCheck}
          checked={senpaiCheck}
          onChange={() =>
            setSenpaiCheck(document.getElementById("senpai-check").checked)
          }
          id="senpai-check"
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "#673AB7",
            },
          }}
        />
        Register me as a Senpai
      </Grid>
      <Grid
        container
        alignItems="center"
        style={{
          backgroundColor: "#424242",
          borderRadius: "4px",
          padding: "0.5%",
          marginLeft: "25%",
          marginRight: "25%",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "2vh",
            height: "5vh",
            borderRadius: "4px",
            backgroundColor: "#673AB7",
          }}
        >
          <h2 style={{ fontWeight: "bold", color: "#fff", marginTop: "1vh" }}>
            Skills
          </h2>
        </Grid>
        <Grid container direction="column">
          <Box>
            <Grid item style={{ marginBottom: "2vh" }}>
              <FormControl>
                <InputLabel style={{ color: "#fff" }}>Skill One</InputLabel>
                <Select
                  id="skill-one"
                  value={skillOne}
                  style={{
                    width: "25vw",
                    color: "#fff",
                    marginBottom: "1vh",
                  }}
                  onChange={(e) => {
                    changeSkillOne(e.target.value);
                  }}
                >
                  <MenuItem value="CSS">CSS</MenuItem>
                  <MenuItem value="D3">D3</MenuItem>
                  <MenuItem value="Canvas">Canvas</MenuItem>
                  <MenuItem value="WebGL">WebGL</MenuItem>
                  <MenuItem value="OpenGL">OpenGL</MenuItem>
                  <MenuItem value="WebGPU">WebGPU</MenuItem>
                  <MenuItem value="three.js">three.js</MenuItem>
                </Select>
                <FormControl>
                  <InputLabel style={{ color: "#fff" }}>Hourly Rate</InputLabel>
                  <Input
                    id="rate-one"
                    style={{ color: "#fff" }}
                    value={rateOne}
                    onChange={(e) => {
                      changeRateOne(e.target.value);
                    }}
                  />
                </FormControl>
              </FormControl>
            </Grid>
            <Grid item style={{ marginBottom: "2vh" }}>
              <FormControl>
                <InputLabel style={{ color: "#fff" }}>Skill Two</InputLabel>
                <Select
                  id="skill-two"
                  value={skillTwo}
                  style={{
                    width: "25vw",
                    color: "#fff",
                    marginBottom: "1vh",
                  }}
                  onChange={(e) => {
                    changeSkillTwo(e.target.value);
                  }}
                >
                  <MenuItem value="CSS">CSS</MenuItem>
                  <MenuItem value="D3">D3</MenuItem>
                  <MenuItem value="Canvas">Canvas</MenuItem>
                  <MenuItem value="WebGL">WebGL</MenuItem>
                  <MenuItem value="OpenGL">OpenGL</MenuItem>
                  <MenuItem value="WebGPU">WebGPU</MenuItem>
                  <MenuItem value="three.js">three.js</MenuItem>
                </Select>
                <FormControl>
                  <InputLabel style={{ color: "#fff" }}>Hourly Rate</InputLabel>
                  <Input
                    id="rate-two"
                    style={{ color: "#fff" }}
                    value={rateTwo}
                    onChange={(e) => {
                      changeRateTwo(e.target.value);
                    }}
                  />
                </FormControl>
              </FormControl>
            </Grid>
            <Grid item style={{ marginBottom: "2vh" }}>
              <FormControl>
                <InputLabel style={{ color: "#fff" }}>Skill Three</InputLabel>
                <Select
                  id="skill-three"
                  value={skillThree}
                  style={{
                    width: "25vw",
                    color: "#fff",
                    marginBottom: "1vh",
                  }}
                  onChange={(e) => {
                    changeSkillThree(e.target.value);
                  }}
                >
                  <MenuItem value="CSS">CSS</MenuItem>
                  <MenuItem value="D3">D3</MenuItem>
                  <MenuItem value="Canvas">Canvas</MenuItem>
                  <MenuItem value="WebGL">WebGL</MenuItem>
                  <MenuItem value="OpenGL">OpenGL</MenuItem>
                  <MenuItem value="WebGPU">WebGPU</MenuItem>
                  <MenuItem value="three.js">three.js</MenuItem>
                </Select>
                <FormControl>
                  <InputLabel style={{ color: "#fff" }}>Hourly Rate</InputLabel>
                  <Input
                    id="rate-three"
                    style={{ color: "#fff" }}
                    value={rateThree}
                    onChange={(e) => {
                      changeRateThree(e.target.value);
                    }}
                  />
                </FormControl>
              </FormControl>
            </Grid>
          </Box>
          <Grid item xs={3} style={{ marginLeft: "40vw" }}>
            <Button
              onClick={() => {
                let skills = [
                  document.getElementById("skill-one").innerText !== ""
                    ? `${document.getElementById("skill-one").innerText}`
                    : null,
                  document.getElementById("skill-two").innerText !== ""
                    ? `${document.getElementById("skill-two").innerText}`
                    : null,
                  document.getElementById("skill-three").innerText !== ""
                    ? `${document.getElementById("skill-three").innerText}`
                    : null,
                ];
                let rates = [
                  Number(document.getElementById("rate-one").value),
                  Number(document.getElementById("rate-two").value),
                  Number(document.getElementById("rate-three").value),
                ];
                axios({
                  method: "patch",
                  url: `/api/v1/users/${user._id}`,
                  data: {
                    isSenpai: senpaiCheck,
                    category: skills,
                    rates: rates,
                  },
                });
                if (document.getElementById("skill-one").innerText !== "") {
                  axios({
                    method: "post",
                    url: `/create-lesson-and-price`,
                    data: {
                      name: `${skillOne} Lesson with ${user.name}`,
                      price: rates[0],
                      priceId: `price_${user._id}:${skillOne}`,
                      metadata: { userId: `${user._id}` },
                    },
                  });
                }
                if (document.getElementById("skill-two").innerText !== "") {
                  axios({
                    method: "post",
                    url: `/create-lesson-and-price`,
                    data: {
                      name: `${skillTwo} Lesson with ${user.name}`,
                      price: rates[1],
                      priceId: `price_${user._id}:${skillTwo}`,
                      metadata: { userId: `${user._id}` },
                    },
                  });
                }
                if (document.getElementById("skill-three").innerText !== "") {
                  axios({
                    method: "post",
                    url: `/create-lesson-and-price`,
                    data: {
                      name: `${skillThree} Lesson with ${user.name}`,
                      price: rates[2],
                      metadata: { userId: `${user._id}` },
                    },
                  });
                }

                let successMessage = document.createElement("div");
                successMessage.innerText = "Settings updated!";
                successMessage.style.color = "white";
                successMessage.style.fontWeight = "bold";
                successMessage.style.fontSize = "large";
                successMessage.style.backgroundColor = "#4BB543";
                successMessage.style.width = "33%";
                successMessage.style.height = "5vh";
                successMessage.style.marginLeft = "33%";
                successMessage.style.paddingTop = "1vh";

                document.getElementById("navbar").append(successMessage);

                setTimeout(() => {
                  window.location.reload();
                }, 750);
              }}
              style={{
                height: "4vh",
                width: "7vw",
                backgroundColor: "#673AB7",
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
