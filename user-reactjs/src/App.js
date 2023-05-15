import { Layout } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout";
import Navigation from "./components/Navigation"
import FooterApp from "./components/FooterApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products/index"
import Home from "./pages/Home/index"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
        <Footer>
          <FooterApp />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
