import React from "react"
import { Layout } from "antd"

const { Footer: FooterComponent } = Layout

export const Footer = () => {
  return (
    <>
      <FooterComponent style={{ textAlign: "center" }}>SNNU</FooterComponent>
    </>
  )
}
