import * as React from "react"
import Layout from "../components/global/Layout"

export default function Availability() {
    return (
        <>
            <Layout>
            <div className="md:py-10 pt-24 pb-10 main-bg">
                <div className="container">
                    <h1 className="heading sm:text-black text-white">Availability</h1>
                </div>
            </div>
                <div className="section">
                    <div>
                        <div
                            className="h-screen w-full"
                            dangerouslySetInnerHTML={{
                                __html: `<script type='text/javascript' charset='utf-8'>
                            document.write(unescape("%3Cscript src='" + (('https:' == document.location.protocol) ? 'https:' : 'http:') + "//lionsgroup.appfolio.com/javascripts/listing.js' type='text/javascript'%3E%3C/script%3E"));
                          </script><script type='text/javascript' charset='utf-8'>
                          Appfolio.Listing({
                            hostUrl: 'lionsgroup.appfolio.com',
                            themeColor: '#0E0F3C',
                            height: '100%',
                            width: '100%',
                            defaultOrder: 'date_posted'
                          });
                        </script>` }}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}