import { useEffect } from 'react';

function About(props) {
    const count = 0;

    useEffect(() => {
        props.setProgress(40);
        setTimeout(() => {
            props.setProgress(100);
        }, 500);
    }, [count])

    return (
        <div className="main-section d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
            <div className={`text-container text-center ${props.theme === 'dark' && 'text-light'}`}>
                <h3 className="ms-title mb-1">
                    About
                </h3>
                <div className="underline" style={{height: "1px", backgroundColor: "#0d6efd", width: "10%", margin: "auto", marginBottom: "1rem"}}></div>
                <p className="ms-text fst-italic fw-bolder">
                    "Designed & Coded by <a className="text-decoration-none" href="https://github.com/mohit-kwatra" target="_blank" rel="noreferrer">Mohit Kwatra</a>"
                </p>
            </div>
        </div>
    )
}

export default About;