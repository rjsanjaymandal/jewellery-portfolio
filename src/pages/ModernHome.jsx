import React, { useEffect, useRef } from "react";
import {
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
  Icon,
  useColorModeValue,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useIntersectionObserver } from "react-intersection-observer";
import { Crown, Diamond, Star, Mail, Gift, Sparkles } from "lucide-react";
import LuxuryNavbar from "../components/LuxuryNavbar.jsx";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ModernHome = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [heroRef, heroInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const [servicesRef, servicesInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box className="min-h-screen">
      <LuxuryNavbar />

      {/* Hero Section */}
      <MotionBox
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        bgGradient="linear(135deg, navy.900 0%, navy.800 50%, luxury.600 100%)"
        position="relative"
      >
        {/* Animated Background Elements */}
        <MotionBox
          className="absolute inset-0"
          style={{ y }}
        >
          <Box
            className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10"
            bg="luxury.400"
            filter="blur(40px)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Box
            className="absolute bottom-32 right-32 w-48 h-48 rounded-full opacity-10"
            bg="luxury.300"
            filter="blur(60px)"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </MotionBox>

        <Container maxW="7xl" position="relative" zIndex={2}>
          <MotionBox
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            {/* Floating Crown Icon */}
            <MotionBox
              variants={scaleIn}
              className="mb-8"
            >
              <Box
                className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                bg="whiteAlpha.100"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon as={Crown} w={12} h={12} color="luxury.400" />
              </Box>
            </MotionBox>

            {/* Main Heading */}
            <MotionHeading
              variants={fadeInUp}
              fontSize="hero"
              fontFamily="luxury"
              color="white"
              className="mb-6 leading-tight"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
            >
              Exquisite Diamond
              <br />
              <Box as="span" bgGradient="linear(135deg, luxury.300, luxury.500)" bgClip="text">
                Jewelry Artisans
              </Box>
            </MotionHeading>

            {/* Subtitle */}
            <MotionText
              variants={fadeInUp}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="whiteAlpha.900"
              className="mb-12 max-w-4xl mx-auto leading-relaxed"
              fontWeight="400"
            >
              Premier Diamond Jewelry Manufacturer in Jaipur - Crafting Timeless Masterpieces
              with Precision Stone Setting & Expert Craftsmanship Since 1982
            </MotionText>

            {/* CTA Buttons */}
            <MotionBox variants={fadeInUp}>
              <HStack spacing={6} justify="center" flexWrap="wrap">
                <Button
                  variant="luxury"
                  size="lg"
                  leftIcon={<Diamond size={20} />}
                  className="px-8 py-6 text-lg font-semibold"
                  _hover={{
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: "0 15px 35px rgba(212, 165, 116, 0.4)",
                  }}
                >
                  Discover Our Craftsmanship
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  leftIcon={<Sparkles size={20} />}
                  className="px-8 py-6 text-lg font-semibold"
                >
                  View Collection
                </Button>
              </HStack>
            </MotionBox>
          </MotionBox>
        </Container>

        {/* Scroll Indicator */}
        <MotionBox
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Box
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <Box
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </Box>
        </MotionBox>
      </MotionBox>

      {/* Services Section */}
      <MotionBox
        ref={servicesRef}
        className="py-32"
        bgGradient="linear(135deg, accent.100 0%, accent.50 100%)"
        position="relative"
      >
        {/* Background Pattern */}
        <Box
          className="absolute inset-0 opacity-5"
          bgImage="radial-gradient(circle at 25% 25%, luxury.400 2px, transparent 2px)"
          bgSize="60px 60px"
        />

        <Container maxW="7xl" position="relative">
          <MotionBox
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <MotionHeading
              variants={fadeInUp}
              fontSize="display"
              fontFamily="luxury"
              color="navy.900"
              className="mb-6"
            >
              Our Diamond Jewelry Services
            </MotionHeading>
            <MotionText
              variants={fadeInUp}
              fontSize="xl"
              color="navy.700"
              className="max-w-3xl mx-auto"
            >
              Exceptional craftsmanship meets timeless elegance in every piece we create
            </MotionText>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              {
                icon: Crown,
                title: "Bespoke Diamond Jewelry Creation",
                description: "Custom design and manufacturing of unique diamond jewelry pieces tailored to your vision.",
                gradient: "linear(135deg, luxury.400, luxury.600)"
              },
              {
                icon: Diamond,
                title: "Precision Stone Setting",
                description: "Expert stone setting techniques that maximize the brilliance of every diamond.",
                gradient: "linear(135deg, navy.600, navy.800)"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "Certified quality and craftsmanship that meets the highest international standards.",
                gradient: "linear(135deg, accent.600, accent.800)"
              }
            ].map((service, index) => (
              <GridItem key={index}>
                <MotionCard
                  variants={scaleIn}
                  className="h-full luxury-card"
                  bg="white/80"
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor="luxury.200/50"
                  _hover={{
                    transform: "translateY(-12px)",
                    boxShadow: "0 25px 50px rgba(26, 35, 50, 0.15)",
                  }}
                  transition="all 0.4s ease"
                >
                  <CardBody className="p-8 text-center">
                    <Box
                      className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                      bgGradient={service.gradient}
                      boxShadow="0 8px 32px rgba(212, 165, 116, 0.25)"
                    >
                      <Icon as={service.icon} w={10} h={10} color="white" />
                    </Box>
                    <Heading
                      size="lg"
                      fontFamily="luxury"
                      color="navy.900"
                      className="mb-4"
                    >
                      {service.title}
                    </Heading>
                    <Text color="navy.700" fontSize="lg" lineHeight="tall">
                      {service.description}
                    </Text>
                  </CardBody>
                </MotionCard>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </MotionBox>

      {/* About Section */}
      <MotionBox className="py-32" bg="white">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} alignItems="center">
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  className="relative rounded-3xl overflow-hidden"
                  boxShadow="0 25px 50px rgba(26, 35, 50, 0.15)"
                >
                  <Box
                    className="aspect-square bg-gradient-to-br from-navy-900 to-luxury-600"
                    bgGradient="linear(135deg, navy.900, luxury.600)"
                  />
                  <Box
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                    bg="luxury.400"
                    boxShadow="0 8px 25px rgba(212, 165, 116, 0.4)"
                  >
                    <Icon as={Diamond} w={6} h={6} color="white" />
                  </Box>
                </Box>
              </MotionBox>
            </GridItem>

            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Text
                  fontSize="sm"
                  color="luxury.600"
                  fontWeight="600"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  className="mb-4"
                >
                  Since 1982
                </Text>

                <Heading
                  fontSize="display"
                  fontFamily="luxury"
                  color="navy.900"
                  className="mb-6"
                >
                  About Ramavatargems
                </Heading>

                <Box
                  className="w-20 h-1 mb-8 rounded-full"
                  bgGradient="linear(135deg, luxury.400, luxury.600)"
                />

                <VStack spacing={6} align="start">
                  <Text fontSize="lg" color="navy.700" lineHeight="tall">
                    Since 1982, Ramavatargems has been at the forefront of diamond jewelry
                    manufacturing in Jaipur. Our master craftsmen combine traditional techniques
                    with modern technology to create exquisite diamond jewelry pieces that capture
                    the essence of luxury and elegance.
                  </Text>
                  <Text fontSize="lg" color="navy.700" lineHeight="tall">
                    We specialize in custom diamond jewelry design, precision stone setting,
                    and premium quality manufacturing that meets the highest international standards.
                  </Text>

                  <Button
                    variant="luxury"
                    size="lg"
                    leftIcon={<Gift size={20} />}
                    className="mt-4"
                  >
                    Discover Our Legacy
                  </Button>
                </VStack>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </MotionBox>

      {/* Showcase Section */}
      <MotionBox
        className="py-32"
        bgGradient="linear(135deg, navy.900 0%, navy.800 100%)"
        position="relative"
      >
        <Container maxW="7xl">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <MotionHeading
              variants={fadeInUp}
              fontSize="display"
              fontFamily="luxury"
              color="white"
              className="mb-6"
            >
              Our Diamond Jewelry Collection
            </MotionHeading>
            <MotionText
              variants={fadeInUp}
              fontSize="xl"
              color="whiteAlpha.800"
              className="max-w-3xl mx-auto"
            >
              Discover our exquisite collection of handcrafted diamond jewelry pieces
            </MotionText>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
            {[
              { title: "Diamond Rings", desc: "Exquisite diamond ring collection crafted with precision" },
              { title: "Diamond Necklaces", desc: "Elegant diamond necklace designs with timeless appeal" },
              { title: "Diamond Earrings", desc: "Stunning diamond earring collection for every occasion" },
              { title: "Diamond Bracelets", desc: "Luxury diamond bracelet designs with exquisite detail" }
            ].map((item, index) => (
              <GridItem key={index}>
                <MotionCard
                  variants={scaleIn}
                  bg="whiteAlpha.100"
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    transform: "translateY(-8px)",
                    bg: "whiteAlpha.200",
                    borderColor: "luxury.400",
                  }}
                  transition="all 0.4s ease"
                >
                  <Box
                    className="aspect-square bg-gradient-to-br from-luxury-400 to-luxury-600"
                    bgGradient="linear(135deg, luxury.400, luxury.600)"
                  />
                  <CardBody className="p-6">
                    <Heading size="md" color="white" className="mb-3" fontFamily="luxury">
                      {item.title}
                    </Heading>
                    <Text color="whiteAlpha.800" fontSize="sm" lineHeight="tall">
                      {item.desc}
                    </Text>
                  </CardBody>
                </MotionCard>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </MotionBox>

      {/* Contact CTA Section */}
      <MotionBox
        className="py-32"
        bgGradient="linear(135deg, accent.100 0%, accent.50 100%)"
      >
        <Container maxW="4xl">
          <MotionCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            bg="white"
            border="3px solid"
            borderColor="luxury.400"
            boxShadow="0 25px 50px rgba(26, 35, 50, 0.15), 0 0 50px rgba(212, 165, 116, 0.2)"
            className="text-center"
          >
            <CardBody className="p-16">
              <Box
                className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                bgGradient="linear(135deg, luxury.400, luxury.600)"
                boxShadow="0 0 30px rgba(212, 165, 116, 0.5)"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(212, 165, 116, 0.5)",
                    "0 0 50px rgba(212, 165, 116, 0.8)",
                    "0 0 30px rgba(212, 165, 116, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon as={Diamond} w={10} h={10} color="white" />
              </Box>

              <Heading
                fontSize="heading"
                fontFamily="luxury"
                color="navy.900"
                className="mb-6"
              >
                Ready to Create Your Dream Diamond Jewelry?
              </Heading>

              <Box
                className="w-32 h-1 mx-auto mb-8 rounded-full"
                bgGradient="linear(135deg, luxury.400, luxury.600)"
              />

              <Text
                fontSize="xl"
                color="navy.700"
                className="mb-10 max-w-2xl mx-auto"
                lineHeight="tall"
              >
                Contact us today to start your custom diamond jewelry journey with our master craftsmen
              </Text>

              <Button
                variant="luxury"
                size="lg"
                leftIcon={<Mail size={20} />}
                className="px-12 py-6 text-xl font-bold"
                textTransform="uppercase"
                letterSpacing="wider"
                _hover={{
                  transform: "translateY(-3px) scale(1.05)",
                  boxShadow: "0 20px 40px rgba(212, 165, 116, 0.4)",
                }}
              >
                Contact Us Today
              </Button>
            </CardBody>
          </MotionCard>
        </Container>
      </MotionBox>
    </Box>
  );
};

export default ModernHome;
