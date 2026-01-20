import type { JSX } from "react";
import { Box, Image } from "@chakra-ui/react";
import OverlayImage from "@/assets/bg-hero.webp";

export function HeroOverlay(): JSX.Element {
  return (
    <Box position="absolute" top="0" left="0" w="full" h="full" zIndex={0}>
      <Image
        w={"1500px"}
        opacity={"65%"}
        src={OverlayImage}
        alt="Background overlay image Egwaldino Cassuente Web Developer"
        pointerEvents="none"
      />
    </Box>
  );
}
