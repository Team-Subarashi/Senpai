import React from "react";
// import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  Select,
  MenuItem,
  Avatar,
  // Typography,
  InputLabel,
} from "@material-ui/core";

const PreviousLesson = ({ lesson }) => {
  const date = new Date(lesson.endDate);
  const DropDown = () => {
    return (
      <>
        <FormControl fullWidth>
          <InputLabel xs={12} id="demo-simple-select-label">
            Test
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"test"}
            label="test"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Test</MenuItem>
            <MenuItem value={20}>Test</MenuItem>
            <MenuItem value={30}>Test</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  };
  return (
    <Grid
      container
      border={1}
      xs={12}
      style={{
        borderTop: "0.1px groove",
        margin: "top",
        height: "10vh",
      }}
    >
      <Grid
        item
        xs={1}
        style={{ marginLeft: "10px", padding: "10px", alignItems: "center" }}
      >
        <Avatar
          className="lesson-partner-photo"
          alt="img"
          src={lesson.avatar}
          sx={{ width: 100, height: 100 }}
        />
      </Grid>
      <Grid item xs={3}>
        <div>Partner</div>
        <p>{lesson.name}</p>
      </Grid>
      <Grid item xs={3}>
        <div>Date</div>
        <p>{date.toDateString()}</p>
      </Grid>
      <Grid item xs={3} style={{ display: "none" }}>
        <DropDown />
      </Grid>
    </Grid>
  );
};

export default PreviousLesson;
