import React, { useContext } from "react";
import { MenuContext } from "../../utils/MenuContext";
import LinkItem from "../LinkItem";
import {
  LinksWrapper,
  SectionWrapper,
  SectionHeader,
} from "./LinksContainerElements";

const LinksContainer = ({
  linksData,
  color,
  isformenu = false,
  linkAnimationClass = "",
}) => {
  const [isMenuOpened, setIsMenuOpened] = useContext(MenuContext);
  const { shouldOpenMenu, canAnimate } = isMenuOpened;

  const onClickHandler = () => {
    if (canAnimate && isformenu) {
      setIsMenuOpened({ shouldOpenMenu: !shouldOpenMenu, canAnimate: false });
    }
  };

  return (
    <LinksWrapper>
      {linksData.map((data, index) => (
        <SectionWrapper key={data.title}>
          <div style={{ overflow: "hidden" }}>
            <SectionHeader
              color={color}
              isformenu={isformenu}
              className={linkAnimationClass}
            >
              {data.title}
            </SectionHeader>
          </div>
          {linksData[index].links.map((link, linkIndex) => (
            <span onClick={onClickHandler} key={link.title}>
              <LinkItem
                text={link.title}
                color={color}
                bottomBorder
                topBorder={linkIndex === 0 ? true : false}
                isformenu={isformenu}
                linkAnimationClass={linkAnimationClass}
                linkRef={link.link}
              />
            </span>
          ))}
        </SectionWrapper>
      ))}
    </LinksWrapper>
  );
};

//dummy data
const dummyLinksData = [
  {
    title: "Naslov1",
    links: ["Link1", "Link2"],
  },
  {
    title: "Naslov2",
    links: ["Link2.1", "Link2.2"],
  },
];

//defaults
LinksContainer.defaultProps = {
  linksData: dummyLinksData,
  color: "black",
};

export default LinksContainer;
