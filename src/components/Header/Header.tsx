import { Flex, Image } from "@chakra-ui/react";
import wrelloLogo from "../../assets/image/wrello-logo.svg";
import { FC } from "react";
const Header: FC = () => {
   return (
      <Flex
         id="app-root"
         as={"nav"}
         alignItems={"center"}
         backgroundColor={"rgba(0, 0, 0, 0.52)"}
         color={"gray.50"}
         p={4}
         justifyContent={"center"}
         align={"center"}
         overflow={"hidden"}
         maxH={"40px"}
         boxSize={"border-box"}
      >
         <Image src={wrelloLogo} height={"26px"} alt="wrello-logo" />
      </Flex>
   );
};

export default Header;
