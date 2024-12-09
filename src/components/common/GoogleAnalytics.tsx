import LocalConfig from "@/constants/config";
import Script from "next/script";

const GoogleAnalytics = () => (
  <>
  <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WBRDE7HM79"></Script>
<Script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WBRDE7HM79',{page_path: window.location.pathname});
  `}
</Script>
    {/* <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}`}
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}', {
          page_path: window.location.pathname,
        });
      `}
    </Script> */}
  </>
);

export default GoogleAnalytics;
