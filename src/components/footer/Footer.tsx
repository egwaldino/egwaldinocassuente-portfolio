import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    HStack,
    Icon,
    Link,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import {
    FiInstagram,
    FiGithub,
    FiLinkedin,
} from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

export function Footer() {
    return (
        <Box
            id="contacts-section"
            as="footer"
            w="full"
            bg="#000319"
            py={10}
            px={{ base: 6, md: 12 }}
        >
            {/* CTA */}
            <Flex
                direction="column"
                align="center"
                textAlign="center"
                gap={4}
                mb={6}
            >
                <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">
                    Pronto para levar a{" "}
                    <Box as="span" color="#CBACF9">
                        tua presença digital
                    </Box>{" "}
                    ao próximo nível?
                </Heading>

                <Text fontSize={"sm"} color="whiteAlpha.500">
                    Entra em contacto comigo hoje e vamos conversar sobre como posso ajudar a alcançar os teus objetivos.
                </Text>

                <Link href="tel:+351964433241" textDecor="none">
                    <Button
                        mt={4}
                        py={6}
                        px={10}
                        gap={2}
                        rounded="lg"
                        bgGradient="to-r"
                        gradientFrom="#04071D"
                        gradientTo="#0C0E23"
                        display="flex"
                        variant="outline"
                        borderColor="gray.100/10"
                        _hover={{
                            bg: "#000319",
                        }}
                    >
                        Vamos Conversar
                        <HiArrowUpRight />
                    </Button>
                </Link>
            </Flex>


            <Flex
                w="full"
                justify={{base: "center", md: "space-between"}}
                align="center"
                flexWrap="wrap"
                gap={4}
                mt={20}
            >
                <Text textAlign={"center"} fontSize="xs" color="whiteAlpha.500">
                    Desenvolvido por Egwaldino Cassuente. © {new Date().getFullYear()} Todos os direitos reservados
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
        </Box>
    );
}
