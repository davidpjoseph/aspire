import React, { useState, useEffect } from "react";
import "./Yearcard.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@duik/button";


export default function Yearcard() {
  const [sem, setSem] = React.useState("");
  const [batch, setClass] = React.useState("");
  function clickMe(){
    alert("hello")
  }

  return (
         <div className="yearcard_main">
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-simple-select-label">Sem</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Batch"
              onChange={(e) => setSem(e.target.value)}
            >
              <MenuItem value={1}>S1</MenuItem>
              <MenuItem value={2}>S2</MenuItem>
              <MenuItem value={3}>S3</MenuItem>
              <MenuItem value={4}>S4</MenuItem>
              <MenuItem value={5}>S5</MenuItem>
              <MenuItem value={6}>S6</MenuItem>
              <MenuItem value={7}>S7</MenuItem>
              <MenuItem value={8}>S8</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select label="Class" onChange={(e) => setClass(e.target.value)}>
              <MenuItem value={1}>A</MenuItem>
              <MenuItem value={2}>B</MenuItem>
            </Select>
          </FormControl>
          <div className="submitbutton">
            <Button primary onClick={clickMe()}>
              Submit
            </Button>
          </div>
      </div>
  );
}
