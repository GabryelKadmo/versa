import Header from "./../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <div className="content">{children}</div>
  </div>
);

export default Layout;
