import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn"

export default function PortfolioCard({ image, title, link, _key, address, city, state, zipCode, status }) {
    return (
        <>
            <Link to={link} key={_key}>
                <div className="w-full bg-white hover:shadow-lg hover:transition-all transition-all hover:ease-in ease-in relative">
                    {status &&
                        <div className="absolute px-1 m-2 text-xs bg-black text-white">
                            <p>Coming Soon</p>
                        </div>
                    }
                    <div className="h-64 w-full relative">
                        {image ?
                            <>
                            <GatsbyImage
                                    image={image}
                                    className="object-cover h-full w-full"
                                    alt={title ? title : 'Lions Group'}
                                />
                                <div className="portfolio-overlay"></div>
                            </>
                            :
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="empty avatar" className="object-cover h-full w-full" />
                        }
                        <div className="absolute z-50 bottom-3 left-2 text-white">
                            <p className="flex items-center"><MdLocationOn className="inline mr-2" />{address} <br />{city} {state} {zipCode}</p>
                        </div>

                    </div>
                    <div className="px-4 py-2 bg-accent text-white">
                        <div>
                            <h3 className="text-2xl mb-2">{title}</h3>
                            <span className="inline-block font-light">View Details <BsArrowRight className="inline-block" /></span>

                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}