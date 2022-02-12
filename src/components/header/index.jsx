import React from "react"
import { Layout, Menu } from "antd"
import "./style.css"
import { User } from "./components"
const { Header: HeaderComponent } = Layout

export const Header = () => {
  return (
    <>
      <HeaderComponent className="header">
        <div className="list">
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
            })}
          </Menu>
        </div>
        <User></User>
      </HeaderComponent>
    </>
  )
}
