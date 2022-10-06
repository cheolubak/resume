import React, { useEffect } from "react";
import { useAnalytics } from "../../../hooks/Analytics";
import SkillsTemplate from "../../templates/Skills";

function SkillsPage() {
  const { pageView } = useAnalytics();

  useEffect(() => {
    pageView({ screenClass: "SkillsPage", screenName: "Skills" });
  }, []);

  return <SkillsTemplate />;
}

export default SkillsPage;
