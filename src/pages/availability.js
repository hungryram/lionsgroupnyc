import * as React from "react"
import Layout from "../components/global/Layout"
import Seo from "../components/global/Seo"

export default function Availability() {
    return (
        <>
            <Layout>
            <Seo 
                    title="Availability | Lions Group NYC"
                    description="View our current availability here. Please contact us if you have any questions"
                />
            <div className="md:py-10 pt-24 pb-10 main-bg">
                <div className="container">
                    <h1 className="heading sm:text-black text-white">Availability</h1>
                </div>
            </div>
                <div>
                    <div className="md:px-20">
                        <iframe src="https://lionsgroup.appfolio.com/listings?1659574158426&theme_color=%230E0F3C&filters%5Border_by%5D=date_posted" title="Availability Properties list" className="w-full h-screen" frameBorder="0"></iframe>
                    </div>
                </div>
            </Layout>
        </>
    )
}