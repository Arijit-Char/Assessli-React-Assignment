import React, { useEffect } from "react";
import "../App.scss"
const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="some"></div>
      <div className="contact">
        <div className="formCont">
          <div
            className="visme_d"
            data-title="Untitled Project"
            data-url="q6p3nx7w-untitled-project"
            data-domain="forms"
            data-full-page="false"
            data-min-height="100vh"
            data-min-width="100vw"
            data-form-id="41884"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
