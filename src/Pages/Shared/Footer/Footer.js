import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='bg-primary'>
                <p><small>Copyright By Md Akbar Hossain &copy; {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;