import { useEffect } from 'react';

function Home(props) {
    const count = 0;

    useEffect(() => {
        props.setProgress(40);
        setTimeout(() => {
            props.setProgress(100);
        }, 500);
    }, [count])

    return (
        <div className="main-section d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
            <div className={`text-container ${props.theme === 'dark' && 'text-light'}`}>
                <h3 className="ms-title mb-3">
                    Hi, I'm your news app 📰👋
                </h3>
                <p className="ms-text fst-italic fw-bolder">
                    Click on the navigation on top to get latest news.
                </p>
            </div>
        </div>
    )
}

export default Home;