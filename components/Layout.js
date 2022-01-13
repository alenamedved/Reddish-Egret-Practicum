import Footer from "./mainPage/Footer";
import Header from "./mainPage/Header"
const Layout = ({children}) => {
 return ( 
<div>
<Header />
 {children}
 <Footer  style={{position: "sticky", bottom:0, left:0}} />
</div>
  );
}
 
export default Layout;