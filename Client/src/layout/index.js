import Header from "../components/Header";
import Footer from "../components/Footer";
import { LayoutContainer } from "./styled";

const DefaultLayout = ( { children } ) => {
    return (  
        <LayoutContainer>
            <Header/>
                {children}
            <Footer/>
        </LayoutContainer>
    );
}
 
export default DefaultLayout;