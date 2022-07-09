import * as React from "react"
import Layout from "../components/global/Layout"
import AvailabilityScript from "../components/templates/AvailabilityScript"
import { Script } from "gatsby"

export default function Availability() {
    return (
        <>
            <Layout>
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
                            themeColor: '#676767',
                            height: '500px',
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