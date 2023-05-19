import React from 'react';
import logo from "../../assets/images/logo.png"
import {
    FaFacebook,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="border border-success footer p-10 bg-base-200 text-base-content">
            <div>
                <img className='mask mask-squircle w-20  h-20 border-4 border-error' src={logo} alt="" />
                <p>GameZone Toy Store online company Ltd<br />Providing reliable toy since 2018</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact with us</a>
                <div className='flex gap-3'>
                    <a href="https://www.facebook.com/arifur.rahmansojib.7">
                        <FaFacebook className='w-5 h-5 '>
                        </FaFacebook>
                    </a>

                    <FaTwitter className='w-5 h-5 '></FaTwitter>
                    <a href="https://www.youtube.com/channel/UCIUfEtViFNKiD3VRDqFPQXA">
                        <FaYoutube className='w-5 h-5 '></FaYoutube>
                    </a>

                </div>
                <a className="link link-hover">Jobs</a>

            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;