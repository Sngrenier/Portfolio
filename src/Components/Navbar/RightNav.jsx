import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <Link to='/about'>
                    <p className="link">ABOUT</p>
                </Link></li>
            <li>
                <Link to='/design'>
                    <p className="link">DESIGN & WEB DEV SKILLS</p>
                </Link></li>
            <li>
                <Link to='/client'>
                    <p className="link">BUSINESS EXPERIENCE</p>
                </Link></li>
            <li>
                <Link to='/gallery'>
                    <p className="link" href="">PROJECTS</p>
                </Link></li>
            <li>
                <Link to='/test'>
                    <p className="link" href="">CLIENT TESTIMONIALS</p>
                </Link></li>
            <li><Link to='/education'>
                <p className="link" href="">EDUCATION CV</p>
            </Link></li>
        </Ul>
    )
}

export default RightNav


const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
width: 50vw;

li {
    padding: 3% 4% 4% 2%;
    font-family: "Montserrat", sans-serif;
    font-size: .5rem;
    letter-spacing: 2.2px;
    font-weight: 500;
    color: black;
    text-decoration: none;
    text-align: right;
    background-color: transparent;
}
li:hover{
    color: #ffe0d7;
}

@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    background-color: #EF6351;

li {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: .5rem;
    letter-spacing: 2.2px;
    font-weight: 500;
    color: black;
    text-decoration: none;
    text-align: right;
    padding-right: 15%;
}
li:hover{
    color: #EF6351 !important;
}
}
`;
