import type { JSX } from "react";
import { softSkills } from "./aboutData";
import { Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";

export function AboutSoftSkills(): JSX.Element {
  return (
    <Flex flexDir="column" pb={20} pt={20}>
      <Flex flexDir="column" align="center">
        <Heading color="white" fontWeight="semibold" fontSize="3xl">
          Soft Skills
        </Heading>
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
              <Flex
                gap={4}
                w="20rem"
                h="10rem"
                rounded="xl"
                align="center"
                justify="center"
                textAlign="center"
                bgGradient="to-tl"
                direction="column"
                border="0.5px solid"
                gradientTo="#0C0E23"
                gradientFrom="#04071D"
                borderColor="whiteAlpha.100"
              >
                <Text fontWeight="bold" color="white" fontSize="md">
                  {item.title}
                </Text>
                <Text fontSize="sm" color="#BEC1DD" maxW="280px">
                  {item.desc}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
