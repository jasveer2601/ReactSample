import React from 'react'

export const Footer = () => {
    const footerStyle = {
        width: "100%",
        position: "absolute",
        bottom: "0px"
    };
    return (
        <footer className="bg-dark text-light text-center" style={footerStyle}>
            Copyright &copy; Jasveer.Inc 2021
        </footer >
    )
}
