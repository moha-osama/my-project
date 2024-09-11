import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const DUMMYtASKSANDSUBTASKS = [
  {
    id: "task1",
    label: "Create the user interface",
    isChecked: false,
    subtasks: [
      { id: "task11", label: "Design the Header", isChecked: false },
      { id: "task12", label: "Design the Fotter", isChecked: false },
    ],
  },
  {
    id: "task2",
    label: "struct the state management",
    isChecked: false,
    subtasks: [
      {
        id: "task21",
        label: "Choose state managemet wisely",
        isChecked: false,
      },
    ],
  },
];

const TasksAndSubtasks = () => {
  return (
    <Box component="div">
      {DUMMYtASKSANDSUBTASKS.map((item) => (
        <>
          <FormControlLabel
            label={item.label}
            control={
              <Checkbox
                checked={item.isChecked}
                indeterminate={item.isChecked}
              />
            }
          />
          {item.subtasks.map((item) => (
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <FormControlLabel
                label={item.label}
                control={<Checkbox checked={item.isChecked} />}
              />
            </Box>
          ))}
        </>
      ))}
    </Box>
  );
};

export default TasksAndSubtasks;
