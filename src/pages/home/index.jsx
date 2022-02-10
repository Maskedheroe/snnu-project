import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Footer, Header } from "../../components";

const { Content } = Layout

export const Home = () => {
  return (
    <div>
      <Layout className="layout">
        <Header/>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer/>
      </Layout>
      ,
    </div>
  )
}
