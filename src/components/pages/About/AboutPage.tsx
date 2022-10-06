import React, { useEffect } from "react";
import { useAnalytics } from "../../../hooks/Analytics";
import AboutTemplate from "../../templates/About";

function AboutPage() {
  const { pageView } = useAnalytics();

  useEffect(() => {
    pageView({ screenClass: "AboutPage", screenName: "About" });
  }, []);
  
  return <AboutTemplate />;
}

export default AboutPage;
