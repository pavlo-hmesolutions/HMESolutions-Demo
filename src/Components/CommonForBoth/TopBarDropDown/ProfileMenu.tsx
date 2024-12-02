import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Avatar } from "antd";
//i18n
import { withTranslation } from "react-i18next";
// Redux
import { Link } from "react-router-dom";
import withRouter from "../../Common/withRouter";

// users
import maleAvatar from "assets/images/users/m-avatar.png";

import { useSelector } from "react-redux";
import { ProfileSelector } from "selectors";

const ProfileMenu = (props: any) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setUsername] = useState("Admin");

  const { user } = useSelector(ProfileSelector);


  useEffect(() => {
    setUsername(`${user?.firstName!!} ${user?.lastName!!}`);
  }, [user]);

  const handleOptionChange = () => {
    setMenu(!menu);
  }

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          {/* <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          /> */}
          <Avatar src={maleAvatar} style={{ backgroundColor: '#aaa' }} />
          <span className="d-none d-xl-inline-block ms-2 me-1">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <Link to="/admin-settings" onClick={handleOptionChange} className="dropdown-item">
            <i className="bx bx-lock font-size-16 align-middle me-1" />
            {/* <i className="fa fa-solid fa-user-tie font-size-16 align-middle me-1"></i> */}
            <span>{props.t("Admin Settings")}</span>
          </Link>
          <Link to="/users" onClick={handleOptionChange} className="dropdown-item">
            <i className="bx bx-user font-size-16 align-middle me-1"></i>
            <span>{props.t("Users")}</span>
          </Link>
          <Link to="/fleet" onClick={handleOptionChange} className="dropdown-item">
            <i className="bx bxs-truck font-size-16 align-middle me-1" />
            <span>{props.t("Fleet")}</span>
          </Link>
          <Link to="/trackers" onClick={handleOptionChange} className="dropdown-item">
            <i className="bx bx-devices font-size-16 align-middle me-1" />
            <span>{props.t("Trackers")}</span>
          </Link>
          <Link to="/menu-settings" onClick={handleOptionChange} className="dropdown-item">
            <i className="bx bx-menu font-size-16 align-middle me-1" />
            <span>{props.t("Menu setting")}</span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/logout" onClick={handleOptionChange} className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withRouter(withTranslation()(ProfileMenu));