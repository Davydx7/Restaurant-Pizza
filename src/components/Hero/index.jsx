import React, {useState} from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtn } from './HeroElements'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <HeroContainer>
             <Navbar toggle ={toggle} />
             <Sidebar isOpen ={isOpen} toggle={toggle} />
             <HeroContent>
                <HeroH1>Greatest <br /> Pizza Ever</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place Order</HeroBtn>
             </HeroContent>
        </HeroContainer>
    )
}

export default Hero
