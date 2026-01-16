import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Stack,
    Button,
    Span,
    Link,
} from "@chakra-ui/react";
import { FiMonitor, FiTool, FiCheck } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";

const services = [
    {
        icon: BsQrCode,
        title: "Menu Digital Com QR Code",
        subtitle: "Simples, moderno e sempre atualizado",
        description:
            "Apresente o seu menu ou lista de preços de forma profissional. Acesso rápido por QR Code, fácil de atualizar e pronto para qualquer dispositivo.",
        items: ["Acesso por QR Code", "Atualização fácil", "Visual profissional", "Totalmente responsivo (telemóvel e tablet)"],
        textButton: "Quero o meu Menu Digital",
        link: "https://wa.me/351964433241?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Menu%20Digital%20com%20QR%20Code%20para%20o%20meu%20negócio."
    },
    {
        icon: FiMonitor,
        title: "WebSite Profissional",
        subtitle: "Criado exclusivamente para o teu negócio",
        description:
            "Um site que reúne as informações essenciais do teu negócio num só lugar, facilita o contacto dos clientes e transmite mais confiança a quem te encontra.",
        items: ["Design limpo e  moderno", "Informação clara num só lugar", "Redirecionamento para whatsapp", "Totalmente responsivo (telemóvel e computador)"],
        textButton: "Solicitar WebSite Profissional",
        link: "https://wa.me/351964433241?text=Olá!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site%20profissional%20para%20o%20meu%20negócio."
    },
    {
        icon: FiTool,
        title: "Manutenção & Atualizações",
        subtitle: "Site sempre atualizado, suporte contínuo",
        description:
            "Cuido das pequenas alterações e atualizações do teu site para que esteja sempre correto, atualizado e funcional, sem precisares de te preocupar com isso.",
        items: ["Não precisas mexer no site", "Alterações feitas sempre que necessário", "Conteúdo e preços sempre corretos", "Orientação rápida se o site estiver indisponível"],
        textButton: "Preciso de Suporte Contínuo",
        link: "https://wa.me/351964433241?text=Olá!%20Gostaria%20de%20saber%20como%20funciona%20o%20apoio%20e%20manutenção%20para%20sites."
    },
];

export function ServicesSection() {
    return (
        <Flex
            id="services-section"
            w="full"
            py={24}
            px={8}
            bg="#000319"
            justify="center"
            align="center"
            flexDir="column"
            gap={14}
        >
            {/* Title */}
            <Heading fontSize="3xl" fontWeight="semibold" color="white">
                Meus <Span color="#CBACF9">Serviços</Span>
            </Heading>

            {/* Cards */}
            <Flex
                gap={10}
                wrap="wrap"
                justify="center"
                maxW="1200px"
                w="full"
            >
                {services.map((service) => (
                    <Box
                        key={service.title}
                        w={{ base: "100%", md: "340px" }}
                        p={8}
                        rounded="2xl"
                        border="2px solid"
                        borderColor="whiteAlpha.100"
                        backdropFilter="blur(12px)"
                    >
                        <VStack align="start" justify={"space-between"} gap={5}>
                            {/* Icon */}
                            <Flex
                                gap={4}
                                w="full"
                                align="center"
                                flexDir="column"
                            >
                                <Icon
                                    as={service.icon}
                                    boxSize={14}
                                    color="purple.300"
                                />

                                <Flex flexDir="column" align="center">

                                    {/* Title */}
                                    <Heading fontSize="xl" fontWeight="semibold" color="#CBACF9">
                                        {service.title}
                                    </Heading>

                                    {/* Subtitle */}
                                    <Text fontSize="sm" color="whiteAlpha.600">
                                        {service.subtitle}
                                    </Text>
                                </Flex>
                            </Flex>

                            {/* Description */}
                            <Text textAlign="center" fontSize="sm" color="whiteAlpha.800">
                                {service.description}
                            </Text>

                            {/* List */}
                            <Stack gap={2} pt={2}>
                                {service.items.map((item) => (
                                    <HStack key={item} gap={2}>
                                        <Icon as={FiCheck} color="green.300" boxSize={4} />                    <Text fontSize="sm" color="whiteAlpha.900">
                                            {item}
                                        </Text>
                                    </HStack>
                                ))}
                            </Stack>

                            <Flex w={"full"} justify={"center"}>
                                <Link w={"full"} href={service.link} textDecor={"none"}>
                                    <Button
                                        w={"full"}
                                        rounded={"xl"}
                                        bgGradient="to-r"
                                        gradientFrom="#04071D"
                                        gradientTo="#0C0E23"
                                        variant="outline"
                                        borderColor="gray.100/10"
                                        _hover={{
                                            bg: "#000319",
                                        }}
                                    >
                                        {service.textButton}
                                    </Button>
                                </Link>
                            </Flex>
                        </VStack>
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
}
