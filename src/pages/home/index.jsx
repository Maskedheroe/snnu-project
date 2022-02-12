import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Footer, Header } from "../../components";
import './style.css'
const { Content } = Layout

export const HomePage = () => {
  return (
    <div>
      <Layout className="layout">
        <Header/>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content page-content"></div>
        </Content>
        <Footer/>
      </Layout>
    </div>
  )
}
