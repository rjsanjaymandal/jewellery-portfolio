import React from "react";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Custom luxury theme
const luxuryTheme = extendTheme({
  colors: {
    luxury: {
      50: '#fefefe',
      100: '#f8f6f3',
      200: '#f4e4d1',
      300: '#e6b887',
      400: '#d4a574',
      500: '#c19660',
      600: '#a67c4a',
      700: '#8b6239',
      800: '#704d2d',
      900: '#5a3d24',
    },
    navy: {
      50: '#f0f4f8',
      100: '#d9e2ec',
      200: '#bcccdc',
      300: '#9fb3c8',
      400: '#829ab1',
      500: '#627d98',
      600: '#486581',
      700: '#334e68',
      800: '#243b53',
      900: '#1a2332',
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "luxury.50",
        color: "navy.900",
      },
    },
  },
});

const MotionBox = motion(Box);

const ModernLuxury = () => {
  return (
    <ChakraProvider theme={luxuryTheme}>
      <Box minH="100vh">
        {/* Navigation */}
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={1000}
          bg="whiteAlpha.900"
          backdropFilter="blur(20px)"
          borderBottom="1px solid"
          borderColor="luxury.200"
          boxShadow="0 8px 32px rgba(26, 35, 50, 0.1)"
        >
          <Container maxW="6xl">
            <Flex align="center" justify="space-between" h="80px">
              <HStack spacing={3}>
                <Box
                  w={12}
                  h={12}
                  bg="linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 8px 25px rgba(212, 165, 116, 0.3)"
                >
                  <Text fontSize="xl" color="white">💎</Text>
                </Box>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  fontFamily="heading"
                  color="navy.900"
                  letterSpacing="wider"
                >
                  Ramavatargems
                </Text>
              </HStack>

              <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                <Text color="navy.700" fontWeight="600" cursor="pointer" _hover={{ color: "luxury.500" }}>
                  Home
                </Text>
                <Text color="navy.700" fontWeight="600" cursor="pointer" _hover={{ color: "luxury.500" }}>
                  About
                </Text>
                <Text color="navy.700" fontWeight="600" cursor="pointer" _hover={{ color: "luxury.500" }}>
                  Collection
                </Text>
                <Text color="navy.700" fontWeight="600" cursor="pointer" _hover={{ color: "luxury.500" }}>
                  Contact
                </Text>
              </HStack>

              <Button
                size="sm"
                bg="linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)"
                color="navy.900"
                fontWeight="600"
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px) scale(1.05)",
                }}
                transition="all 0.3s ease"
              >
                📞 Get Quote
              </Button>
            </Flex>
          </Container>
        </Box>

        {/* Hero Section */}
        <MotionBox
          minH="100vh"
          bgGradient="linear(135deg, navy.900 0%, navy.800 50%, luxury.600 100%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          pt="80px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Container maxW="6xl" textAlign="center">
            <VStack spacing={8}>
              {/* Crown Icon */}
              <MotionBox
                w={20}
                h={20}
                bg="luxury.400"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="0 0 30px rgba(212, 165, 116, 0.5)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Text fontSize="3xl" color="white">
                  👑
                </Text>
              </MotionBox>

              {/* Main Heading */}
              <MotionBox
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Heading
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontFamily="heading"
                  color="white"
                  textAlign="center"
                  lineHeight="shorter"
                  textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                >
                  Exquisite Diamond
                  <br />
                  <Box as="span" bgGradient="linear(135deg, luxury.300, luxury.500)" bgClip="text">
                    Jewelry Artisans
                  </Box>
                </Heading>
              </MotionBox>

              {/* Subtitle */}
              <MotionBox
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                maxW="4xl"
              >
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  color="whiteAlpha.900"
                  textAlign="center"
                  lineHeight="tall"
                >
                  Premier Diamond Jewelry Manufacturer in Jaipur - Crafting Timeless Masterpieces
                  with Precision Stone Setting & Expert Craftsmanship Since 1982
                </Text>
              </MotionBox>

              {/* CTA Buttons */}
              <MotionBox
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <HStack spacing={6} flexWrap="wrap" justify="center">
                  <Button
                    size="lg"
                    bg="linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)"
                    color="navy.900"
                    fontWeight="bold"
                    px={8}
                    py={6}
                    borderRadius="full"
                    boxShadow="0 8px 32px rgba(212, 165, 116, 0.25)"
                    _hover={{
                      transform: "translateY(-3px) scale(1.05)",
                      boxShadow: "0 15px 35px rgba(212, 165, 116, 0.4)",
                    }}
                    transition="all 0.3s ease"
                  >
                    💎 Discover Our Craftsmanship
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    color="white"
                    borderColor="whiteAlpha.300"
                    px={8}
                    py={6}
                    borderRadius="full"
                    _hover={{
                      bg: "whiteAlpha.200",
                      borderColor: "luxury.400",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s ease"
                  >
                    ✨ View Collection
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>
          </Container>
        </MotionBox>

        {/* Services Section */}
        <Box py={20} bgGradient="linear(135deg, luxury.100 0%, luxury.50 100%)">
          <Container maxW="6xl">
            <VStack spacing={16}>
              <VStack spacing={6} textAlign="center">
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  fontFamily="heading"
                  color="navy.900"
                >
                  Our Diamond Jewelry Services
                </Heading>
                <Text fontSize="xl" color="navy.700" maxW="3xl">
                  Exceptional craftsmanship meets timeless elegance in every piece we create
                </Text>
              </VStack>

              <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} w="full">
                {[
                  {
                    icon: "👑",
                    title: "Bespoke Diamond Jewelry Creation",
                    description: "Custom design and manufacturing of unique diamond jewelry pieces tailored to your vision.",
                  },
                  {
                    icon: "💎",
                    title: "Precision Stone Setting",
                    description: "Expert stone setting techniques that maximize the brilliance of every diamond.",
                  },
                  {
                    icon: "⭐",
                    title: "Premium Quality",
                    description: "Certified quality and craftsmanship that meets the highest international standards.",
                  }
                ].map((service, index) => (
                  <GridItem key={index}>
                    <Card
                      bg="white"
                      border="2px solid"
                      borderColor="luxury.200"
                      borderRadius="2xl"
                      boxShadow="0 8px 25px rgba(26, 35, 50, 0.15)"
                      _hover={{
                        transform: "translateY(-8px)",
                        boxShadow: "0 25px 50px rgba(26, 35, 50, 0.15)",
                        borderColor: "luxury.400",
                      }}
                      transition="all 0.4s ease"
                      h="full"
                    >
                      <CardBody p={8} textAlign="center">
                        <VStack spacing={6}>
                          <Box
                            w={20}
                            h={20}
                            bg="linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)"
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="3xl"
                            boxShadow="0 8px 32px rgba(212, 165, 116, 0.25)"
                          >
                            {service.icon}
                          </Box>
                          <Heading
                            size="lg"
                            fontFamily="heading"
                            color="navy.900"
                            textAlign="center"
                          >
                            {service.title}
                          </Heading>
                          <Text color="navy.700" fontSize="lg" lineHeight="tall" textAlign="center">
                            {service.description}
                          </Text>
                        </VStack>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </Container>
        </Box>

        {/* Contact CTA Section */}
        <Box py={20} bgGradient="linear(135deg, luxury.100 0%, luxury.50 100%)">
          <Container maxW="4xl">
            <Card
              bg="white"
              border="3px solid"
              borderColor="luxury.400"
              borderRadius="3xl"
              boxShadow="0 25px 50px rgba(26, 35, 50, 0.15), 0 0 50px rgba(212, 165, 116, 0.2)"
              p={16}
              textAlign="center"
            >
              <VStack spacing={8}>
                <Box
                  w={20}
                  h={20}
                  bg="linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="3xl"
                  boxShadow="0 0 30px rgba(212, 165, 116, 0.5)"
                >
                  💎
                </Box>

                <Heading
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontFamily="heading"
                  color="navy.900"
                  textAlign="center"
                >
                  Ready to Create Your Dream Diamond Jewelry?
                </Heading>

                <Box w={32} h={1} bg="linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)" borderRadius="full" />

                <Text
                  fontSize="xl"
                  color="navy.700"
                  maxW="2xl"
                  lineHeight="tall"
                  textAlign="center"
                >
                  Contact us today to start your custom diamond jewelry journey with our master craftsmen
                </Text>

                <Button
                  size="lg"
                  bg="linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)"
                  color="navy.900"
                  fontWeight="bold"
                  px={12}
                  py={6}
                  borderRadius="full"
                  fontSize="xl"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  boxShadow="0 8px 32px rgba(212, 165, 116, 0.25)"
                  _hover={{
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: "0 20px 40px rgba(212, 165, 116, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  📧 Contact Us Today
                </Button>
              </VStack>
            </Card>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default ModernLuxury;
