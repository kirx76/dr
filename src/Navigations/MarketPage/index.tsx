import React from "react";
import { MainBar } from "src/components";
import {
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";

export const MarketPage: React.FC = () => {
  return (
    <>
      <MainBar />

      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  // onChange={handleToggle(value)}
                  // checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              // disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <div style={{ width: 50, height: 50 }} />
                  {/*<Avatar*/}
                  {/*  alt={`Avatar n°${value + 1}`}*/}
                  {/*  src={`/static/images/avatar/${value + 1}.jpg`}*/}
                  {/*/>*/}
                </ListItemAvatar>
                {/*<ListItemText id={labelId} primary={`Line item ${value + 1}`} />*/}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
