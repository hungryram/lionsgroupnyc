import * as React from "react"
import Layout from "../components/global/Layout"

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
                            themeColor: '#0E0F3C',
                            height: '100%',
                            width: '100%',
                            defaultOrder: 'date_posted'
                          });
                        </script>` }}
                        />
                    </div>

                    <span dmle_extension="custom_extension" icon="false" surround="false" class="widget-0c7b49 u_1154620599" data-widget-id="0c7b497e71504e58ab05a06ffe294671" data-widget-version="129" data-widget-config="eyJmaWx0ZXJQZXRzIjp0cnVlLCJwcm9wZXJ0eUdyb3VwIjoiTGlvbnMgR3JvdXAiLCJpbml0aWFsU29ydCI6Ik1vc3QgUmVjZW50IiwiZmlsdGVyQ2l0eSI6dHJ1ZSwicHJpbWFyeUNvbG9yIjoicmdiYSgxNCwxNSw2MSwxKSIsImZpbHRlclRvZ2dsZXMiOm51bGwsImZpbHRlckJlZHMiOnRydWUsImZpbHRlclNlYXJjaCI6dHJ1ZSwiZmlsdGVyUHJpY2UiOnRydWUsImZpbHRlckF2YWlsYWJsZURhdGUiOnRydWUsIm5vUmVzdWx0c01lc3NhZ2UiOm51bGwsImZpbHRlckJhdGhzIjp0cnVlLCJmaWx0ZXJUeXBlIjp0cnVlLCJoaWRlTWFwIjpudWxsfQ==" id="1154620599" data-binding="W3siYmluZGluZ05hbWUiOiJjb2xsZWN0aW9uRGF0YSIsInZhbHVlIjoic2l0ZV9jb2xsZWN0aW9uLmFwcGZvbGlvLWxpc3RpbmdzIn1d">
                    </span>
                </div>
            </Layout>
        </>
    )
}