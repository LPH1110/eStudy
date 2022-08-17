import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { GoToTop } from '~/components';

function App() {
    const [display, setDisplay] = useState(false);

    const handleScroll = () => {
        return window.pageYOffset > 100 ? setDisplay(true) : setDisplay(false);
    };

    const handleClick = () => window.scrollTo(0, 0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Layout = route.layout || React.Fragment;
                        const Component = route.component;

                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                {display && <GoToTop onClick={handleClick} />}
            </div>
        </Router>
    );
}

export default App;
