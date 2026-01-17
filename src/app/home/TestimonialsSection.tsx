import type { JSX } from "react";
import {
  Flex,
  Heading,
  Span,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import BernardoCassuende from "@/assets/bernardo-cassuende.png";
import JoaoPedroDomingos from "@/assets/joao-pedro-domingos.png";
import MeirellesRibeiro from "@/assets/meirelles-ribeiro.png";

const testimonials = [
  {
    name: "Bernardo Cassuende",
    profession: "Psicólogo e Hipnoterapeuta",
    photo: BernardoCassuende,
    description:
      "O site ficou exatamente como eu precisava. Claro, profissional e fácil de usar, tanto para mim como para os pacientes. O processo foi simples e a comunicação sempre direta.",
  },
  {
    name: "João Pedro Domingos",
    profession: "Biomédico e CEO da Health Care Angola",
    photo: JoaoPedroDomingos,
    description:
      "Precisávamos de um site claro e profissional para transmitir confiança aos nossos pacientes. O resultado superou as expectativas e o acompanhamento foi sempre próximo.",
  },
  {
    name: "Meirelles Ribeiro",
    profession: "Fotógrafo Profissional",
    photo: MeirellesRibeiro,
    description:
      "O site ficou limpo, bonito e fácil de usar. Desde o início senti cuidado em entender o meu trabalho como fotógrafo e em levar essa identidade para o digital de forma clara.",
  }
];

const MotionFlex = motion(Flex);

export function TestimonialsSection(): JSX.Element {
  return (
    <Flex
      id="testimonials-section"
      py={24}
      w="full"
      align="center"
      flexDir="column"
      bgColor="#000319"
    >
      <Heading textAlign={"center"} px={{ base: 4, md: 24}} fontWeight="semibold" fontSize="3xl" mb={12}>
        Quem trabalhou comigo <Span color="#CBACF9">diz o seguinte</Span>
      </Heading>

      <Flex w="full" overflow="hidden">
        <MotionFlex
          gap={8}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          minW="fit-content"
        >
          {[...testimonials, ...testimonials].map((card) => (
            <Flex
              key={card.name}
              w={{base: "380px", md: "570px"}}
              p={6}
              gap={6}
              rounded="2xl"
              flexShrink={0}
              flexDir="column"
              border="1px solid"
              bgGradient="to-br"
              gradientTo="#0C0E23"
              justify="space-between"
              gradientFrom="#04071D"
              borderColor="whiteAlpha.100"
            >
              <Text fontWeight="light">{card.description}</Text>

              <Flex align="center" gap={4}>
                <Image
                  src={card.photo}
                  rounded="full"
                  boxSize="40px"
                  objectFit="cover"
                />

                <Flex flexDir="column" lineHeight={1.3}>
                  <Text fontWeight="normal" fontSize={15}>
                    {card.name}
                  </Text>
                  <Text color="whiteAlpha.500" fontSize={12}>
                    {card.profession}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </MotionFlex>
      </Flex>
    </Flex>
  );
}
