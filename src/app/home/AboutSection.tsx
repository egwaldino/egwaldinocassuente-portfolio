import BgHero from "@/assets/bg-about.png"
import { Flex, VStack, Image, Link, Icon, Heading, Text, Stack, HStack, GridItem, Grid, Button } from "@chakra-ui/react";
import EgwaldinoCassuente from "@/assets/egwaldino-cassuente.png"
import Typescript from "@/assets/typescript.svg"
import TailwindCSS from "@/assets/tailwindcss.svg"
import Firebase from "@/assets/firebase.svg"
import Vite from "@/assets/vite.svg"
import NextJS from "@/assets/nextjs.svg"
import ChakraUI from "@/assets/chakraui.svg"
import Git from "@/assets/git.svg"
import { motion } from "framer-motion";
import ReactJS from "@/assets/reactjs.svg"
import { FaWhatsapp } from "react-icons/fa";
import {
    FiInstagram,
    FiGithub,
    FiLinkedin,
} from "react-icons/fi";
import { MdEmail } from "react-icons/md";


const softSkills = [
    {
        id: "01",
        title: "Comunicação Clara",
        desc: "Consigo explicar ideias técnicas de forma simples e objetiva, facilitando o entendimento entre equipas.",
    },
    {
        id: "02",
        title: "Resolução de problemas",
        desc: "Encaro desafios com lógica e foco, buscando sempre soluções práticas e eficientes.",
    },
    {
        id: "03",
        title: "Foco em Resultados",
        desc: "Priorizo entregas de qualidade, com código limpo, organizado e orientado ao impacto real.",
    },
    {
        id: "04",
        title: "Aprendizado Contínuo",
        desc: "Tenho curiosidade constante e gosto de explorar novas tecnologias e boas práticas.",
    },
    {
        id: "05",
        title: "Trabalho em Equipa",
        desc: "Colaboro bem com colegas, valorizo feedback e ajudo a manter um ambiente produtivo.",
    },
    {
        id: "06",
        title: "Adaptabilidade e Criatividade",
        desc: "Adapto-me facilmente a mudanças e uso a criatividade para encontrar novas abordagens e soluções.",
    },
]

const hardSkills = [
    { name: "TypeScript", icon: Typescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: TailwindCSS, color: "#06B6D4" },
    { name: "Firebase", icon: Firebase, color: "#FFCA28" },
    { name: "Vite", icon: Vite, color: "#646CFF" },
    { name: "Next.js", icon: NextJS, color: "#ffffff" },
    { name: "Chakra UI", icon: ChakraUI, color: "#319795" },
    { name: "Git", icon: Git, color: "#DD2C00" },
    { name: "React JS", icon: ReactJS, color: "#61DAFB" },
];

const MotionFlex = motion(Flex);

export function AboutSection() {

    return (
        <Stack>
            <VStack
                id="about-section"
                h="full"
                w="full"
                bgColor="#000319"
                bgImage={`url(${BgHero})`}
                px={{ base: "1rem", md: "0rem" }}
            >
                <Flex
                    h="full"
                    rounded="xl"
                    align="center"
                    border="1px solid"
                    bgGradient="to-br"
                    gradientTo="#0C0E23"
                    justify="space-between"
                    gradientFrom="#04071D"
                    borderColor="gray.100/10"
                    w={{ base: "full", md: "70em" }}
                    py={{ base: "2rem", md: "5em" }}
                    px={{ base: "1rem", md: "10em" }}
                    gap={{ base: "2rem", md: "7em" }}
                    flexDir={{ base: "column-reverse", md: "row" }}
                >
                    <Flex flexDir="column" align={{ base: "center", md: "start" }} justify="center" gap={"20px"} >
                        <Heading fontWeight={"Semibold "}>
                            Egwaldino Cassuente
                        </Heading>
                        <Text fontWeight={"light"} textAlign={"justify"}>
                            Sou programador web com foco
                            em construir aplicações rápidas,
                            modernas e bem estruturadas.
                            Tenho experiências principalmente
                            com o React, Typescript e interfaces
                            escaláveis que unem boa performance
                            e design. Gosto de resolver problemas
                            de forma prática e entregar código limpo,
                            claro e eficiente
                        </Text>
                        <HStack gap={4}>
                            <Link textDecor="none" href="https://www.instagram.com/egwaldinocassuente.ao?igsh=YW96NWF5N2U3ZHRr&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                <Icon as={FiInstagram} boxSize={6} color="#CBACF9" />
                            </Link>
                            <Link textDecor="none" href="https://github.com/egwaldino" target="_blank" rel="noopener noreferrer">
                                <Icon as={FiGithub} boxSize={6} color="#CBACF9" />
                            </Link>
                            <Link textDecor="none" href="https://mail.google.com/mail/?view=cm&fs=1&to=ecassuente@gmail.com&su=Contacto%20Via%20WebSite" target="_blank" rel="noopener noreferrer">
                                <Icon as={MdEmail} boxSize={6} color="#CBACF9" />
                            </Link>
                            <Link textDecor="none" href="https://www.linkedin.com/in/egwaldino-cassuente-5b7712348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                <Icon as={FiLinkedin} boxSize={6} color="#CBACF9" />
                            </Link>
                            <Link textDecor="none" href="https://wa.me/351964433241" target="_blank" rel="noopener noreferrer">
                                <Icon as={FaWhatsapp} boxSize={6} color="#CBACF9" />
                            </Link>
                        </HStack>
                    </Flex>
                    <Image
                        w={"250px"}
                        src={EgwaldinoCassuente}
                    />
                </Flex>

                <Flex flexDir="column" pb={20} pt={20}>
                    <HStack>
                        <Flex flexDir="column" align="center">
                            <Heading fontWeight="semibold" fontSize="3xl">Soft Skills</Heading>
                            <Grid
                                templateColumns={{
                                    base: "1fr",
                                    md: "repeat(3, 1fr)",
                                    lg: "repeat(3, 1fr)",
                                }}
                                gap={8}
                                maxW="1100px"
                                mx="auto"
                                py={20}
                                px={6}
                            >
                                {softSkills.map((item) => (
                                    <GridItem key={item.id}>
                                        <Flex bgGradient="to-tl" gradientFrom="#04071D" gradientTo="#0C0E23" justify={"center"} rounded={"xl"} align={"center"} w={"20rem"} h={"10rem"} border="0.5px solid" borderColor="whiteAlpha.100" direction="column" textAlign="center" gap={4}>
                                            <Text
                                                fontWeight="bold"
                                                color="white"
                                                fontSize="md"
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                fontSize="sm"
                                                color="#BEC1DD"
                                                maxW="280px"
                                            >
                                                {item.desc}
                                            </Text>
                                        </Flex>
                                    </GridItem>
                                ))}
                            </Grid>
                        </Flex>
                    </HStack>
                </Flex>
            </VStack>

            <HStack
                w="full"
                pb={20}
                overflow="hidden"
                justify="center"
                bgColor="#000319"
                mt={-2}
            >
                <Flex flexDir="column" align="center" w="full">
                    <Heading fontWeight="semibold" fontSize="3xl">
                        Hard Skills
                    </Heading>

                    {/* Container que corta */}
                    <Flex w="full" overflow="hidden" mt={12}>
                        {/* Linha animada */}
                        <MotionFlex
                            gap={6}
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            minW="fit-content"
                        >
                            {[...hardSkills, ...hardSkills].map((tech, index) => (
                                <Button
                                    key={`${tech.name}-${index}`}
                                    bgGradient="to-tl"
                                    gradientFrom="#04071D"
                                    gradientTo="#0C0E23"
                                    rounded="xl"
                                    w="10rem"
                                    h="8rem"
                                    border="0.5px solid"
                                    borderColor="whiteAlpha.100"
                                    flexShrink={0}
                                    variant="ghost"
                                >
                                    <VStack gap={3}>
                                        <Image src={tech.icon} alt={tech.name} boxSize="64px" />
                                        <Text fontSize="sm" fontWeight="bold" color={tech.color}>
                                            {tech.name}
                                        </Text>
                                    </VStack>
                                </Button>
                            ))}
                        </MotionFlex>
                    </Flex>
                </Flex>
            </HStack>


        </Stack>
    )
}