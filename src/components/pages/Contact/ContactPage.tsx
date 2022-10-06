import React, { useEffect } from "react";
import { useAnalytics } from "../../../hooks/Analytics";
import ContactTemplate from "../../templates/Contact";

function ContactPage() {
  const { pageView } = useAnalytics();

  useEffect(() => {
    pageView({ screenClass: "ContactPage", screenName: "Contract" });
  }, []);

  return <ContactTemplate />;
}

export default ContactPage;
