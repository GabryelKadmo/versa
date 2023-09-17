import Header from "./../Header/Header";
const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="content">{children}</div>
  </div>
);

export default Layout;
