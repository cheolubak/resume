import React, { useEffect, useMemo, useState } from "react";
import { SkillListStyled } from "./SkillListStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import SkillCard from "../../molecules/SkillCard";
import { IMAGE_NAME } from "../../atom/IconImage/IconImageProps";
import IconImage from "../../atom/IconImage";

import "swiper/css";

SwiperCore.use([Autoplay]);

function SkillList({ ...props }) {
  const [pagePerCount, setPagePerCount] = useState(1);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillList = useMemo<{ title: string; name?: IMAGE_NAME }[]>(
    () => [
      { title: "React.js", name: "react" },
      { title: "Next.js", name: "next" },
      { title: "Angular", name: "angular" },
      { title: "Node.js", name: "nodejs" },
      { title: "MySQL", name: "mysql" },
      { title: "AWS", name: "aws" },
      { title: "Firebase", name: "firebase" },
      { title: "Google Analytics", name: "google-anlaytics" },
      { title: "Sequelize", name: "sequalize" },
      { title: "Spring Framework", name: "spring" },
      { title: "SCSS", name: "sass" },
      { title: "Storybook", name: "storybook" },
      { title: "Figma", name: "figma" },
      { title: "Flutter", name: "flutter" },
      { title: "JPA" },
      { title: "ORM" },
      { title: "SQL" },
      { title: "NoSQL" },
    ],
    []
  );

  function handleResize() {
    const count =
      (window.innerWidth - (window.innerWidth <= 1024 ? 0 : 298)) / 128;
    setPagePerCount(count);
  }

  return (
    <SkillListStyled>
      <Swiper slidesPerView={pagePerCount} autoplay={{ delay: 1000 }} loop>
        {skillList.map((x) => (
          <SwiperSlide key={x.name}>
            <SkillCard>
              {x.name && <IconImage name={x.name} />}
              {x.title}
            </SkillCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SkillListStyled>
  );
}

export default SkillList;
