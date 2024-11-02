import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => <Menu elevation={0} {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 0,
      backgroundColor: '#393939',
    //   marginTop: theme.spacing(1),
      minWidth: 163,
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      ...theme.applyStyles("dark", {
        color: "#393939",
      }),
    },
  })
);

export default function CustomDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selected, setSelected] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (index) => {
    if(index > -1){
        setSelected(index);
    }
    setAnchorEl(null);
  };

  const ukOption = (
    <div className="flex items-center gap-2">
      <img src={"/uk.svg"} alt="flag" width={24} height={24} />
      <div className="flex items-center text-white gap-1">
        <p className="font-semibold">UK</p>
        <p className="font-semibold text-sm opacity-50">£(GBP)</p>
      </div>
    </div>
  );

  const uaeOption = (
    <div className="flex items-center gap-2">
      <img src={"/uae.png"} alt="flag" width={24} height={24} />
      <div className="flex items-center text-white gap-1">
        <p className="font-semibold">UAE</p>
        <p className="font-semibold text-sm opacity-50">(AED)</p>
      </div>
    </div>
  );
  
  const options = [ukOption, uaeOption];

  return (
    <div>
      <Button
        id="demo-customized-button"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{ backgroundColor: "#393939" }}
      >
        {options[selected]}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(-1)}
      >
        {options?.map((option, i) => (
            <MenuItem key={i} onClick={() => handleClose(i)} disableRipple selected={i === selected}>
                {option}
            </MenuItem>
        ))}
        {/* <Divider sx={{ my: 0.5 }} /> */}
        {/* <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> */}
      </StyledMenu>
    </div>
  );
}
