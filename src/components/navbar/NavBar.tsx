import { useState } from "react";
import { ContainerNavBar, Ul, Li, SubUl, LiUser,ContainerIcon } from "./NavBar.stiled";
import { HiArrowSmDown,HiMenu } from "react-icons/hi";


export const NavBar = () => {
  const [isActive, SetIsActive] = useState<boolean>(false);
  const [isActiveIcon, SetIsActiveIcon] = useState<boolean>(false);
  return (
    <ContainerNavBar isActive={isActive}>
      <h2> SISTEMA DE GASTOS</h2>
      <Ul isActiveIcon={isActiveIcon}>
        <Li>Movimientos</Li>
        <Li onClick={() => SetIsActive(!isActive)}>
          Settings
          <HiArrowSmDown />
          <SubUl isActive={isActive}>
            <Li>Back Office Users</Li>
            <Li>App Mobile Users</Li>
            <Li>Profiles</Li>
            <Li>Permission</Li>
            <Li>Preferences</Li>
          </SubUl>
        </Li>
        <LiUser>
          Fernando_Neirot <HiArrowSmDown />
        </LiUser>
      </Ul>
      <ContainerIcon onClick={() => SetIsActiveIcon(!isActiveIcon)}><HiMenu/></ContainerIcon>
    </ContainerNavBar>
  );
};
