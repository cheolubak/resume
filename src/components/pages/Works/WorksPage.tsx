import React, { useEffect } from "react";
import { useAnalytics } from "../../../hooks/Analytics";
import WorksTemplate from "../../templates/Works";

export default function WorksPage() {
  const { pageView } = useAnalytics();

  useEffect(() => {
    pageView({ screenClass: "WorksPage", screenName: "Works" });
  }, []);

  return <WorksTemplate />;
}
