import React from "react";
import Box from "@mui/joy/Box";
import { classNames, deckFooterNavigationStyle } from "./deck-footer-navigation.styles";
import { IDeckFooterNavigationProps } from "./deck-footer-navigation.types";
import { INavItem } from "@models";
import { TabMaskIcon } from "./tab-mask.icon";

const ListItem: React.FC<{
  item: INavItem;
  isActive: boolean;
  onClick?: () => void;
}> = ({ item, isActive, onClick }) => (
  <li className={`list-item ${isActive ? classNames.state.active : ""}`}>
    <a onClick={onClick} className={classNames.item.base}>
      <span className={classNames.item.icon}>{item.icon}</span>
      <span className={classNames.item.text}>{item.text}</span>
    </a>
  </li>
);

export const DeckFooterNavigation: React.FC<IDeckFooterNavigationProps> = ({
  activeIndex = 0,
  items = [],
  onTabChange,
  className: inputClassName,
}) => {
  const classList = [inputClassName, classNames.base, classNames.state.sticky].join(" ").trim();

  return (
    <React.Fragment>
      <Box
        className={classList}
        sx={{
          ...deckFooterNavigationStyle,
          "--footer-nav-indicator-position": activeIndex,
          "--footer-nav-tabs-count": items.length,
        }}
      >
        <Box className={classNames.indicator.background} id="item-mask">
          <div className={classNames.indicator.backgroundInner}>
            <TabMaskIcon />
          </div>
        </Box>
        <Box className={classNames.inner}>
          <ul>
            {items.map((item, index) => (
              <ListItem
                key={item.key}
                item={item}
                isActive={activeIndex === index}
                onClick={() => {
                  if (onTabChange) {
                    onTabChange(index);
                  }
                }}
              />
            ))}
          </ul>
        </Box>
        <Box className={classNames.indicator.base}>
          <div className={classNames.indicator.inner}></div>
        </Box>
      </Box>
    </React.Fragment>
  );
};
