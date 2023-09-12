import Sider from "antd/es/layout/Sider";
import React from "react";

const Wants = () => {
  return (
    <Sider style={{ color: "white", padding: "1rem" }}>
      <h1>What do I want here?</h1>

      <div>
        <ul>
          <li>
            Add Books
            <ul>
              <li>Add chapters</li>
              <li>Add sections</li>
              <li>Add subsections</li>
            </ul>
          </li>

          <li>Comment on books</li>
          <li>Comment on comments</li>
          <li>Coffee</li>
        </ul>
      </div>
    </Sider>
  );
};

export default Wants;
