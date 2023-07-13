import React from 'react'
import {LuLinkedin} from 'react-icons/lu'
import {LuGithub} from 'react-icons/lu'
import {LiaInstagram} from 'react-icons/lia'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target='_blank'><LuLinkedin/></a>
        <a href="https://github.com" target='_blank'><LuGithub/></a>
        <a href="https://instagram.com" target='_blank'><LiaInstagram/></a>
    </div>
  )
}

export default HeaderSocials