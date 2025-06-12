import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Loaders from '../Components/Loaders/Loaders';
import LottieAnimation from '../Components/ExtraSection/LottieAnimation';

const MainLayOut = () => {
    const navigation=useNavigation();
     const isLoading = navigation.state === "loading";
    const location = useLocation();
    const isErrorPage = location.pathname === '/404'||location.pathname==="/error";

    return (
        <div>
            {!isErrorPage && <Header></Header>}
            <main>
                {isLoading ? (
                    <div className='max-w-7xl mx-auto flex justify-center items-center p-6'>
                        <LottieAnimation></LottieAnimation>
                    </div>
                ):(
             <Outlet></Outlet>

                )}
            </main>
             {!isErrorPage && <Footer />}
        </div>
    );
};

export default MainLayOut;