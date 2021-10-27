import React, { Component, useState } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <div>
      <Menu pointing>
        <Menu.Item name="home" active={activeItem === "home"} />
        <Menu.Item name="messages" active={activeItem === "messages"} />
        <Menu.Item name="friends" active={activeItem === "friends"} />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      {/* <Segment>
        <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment> */}
    </div>
  );
};

export default Navbar;
