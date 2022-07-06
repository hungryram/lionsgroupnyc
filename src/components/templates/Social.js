import * as React from "react"
import social from "../../data/profile.json"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IconContext } from "@react-icons/all-files"

export default function Social() {

    const socialMedia = social.social_media

    return (
        <>
            <ul>
                <li className="inline-block mx-2">
                    <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{ size: '30px' }}>
                            <FaFacebook />
                        </IconContext.Provider>
                    </a>
                </li>
                <li className="inline-block mx-2">
                    <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{ size: '30px' }}>
                            <FaLinkedin />
                        </IconContext.Provider>
                    </a>
                </li>
            </ul>
        </>
    )
}