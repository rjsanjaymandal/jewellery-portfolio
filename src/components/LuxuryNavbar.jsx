import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Button,
  IconButton,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Menu, Home, Info, Crown, Mail, Phone, Diamond } from "lucide-react";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const LuxuryNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: Info },
    { label: "Collection", href: "#collection", icon: Crown },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <MotionBox
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={isScrolled ? "whiteAlpha.950" : "whiteAlpha.100"}
        backdropFilter="blur(20px)"
        borderBottom="1px solid"
        borderColor={isScrolled ? "luxury.200" : "whiteAlpha.200"}
        transition="all 0.3s ease"
        boxShadow={isScrolled ? "0 8px 32px rgba(26, 35, 50, 0.1)" : "none"}
      >
        <Container maxW="7xl">
          <Flex align="center" justify="space-between" h="80px">
            {/* Logo */}
            <MotionFlex
              align="center"
              cursor="pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                w={12}
                h={12}
                rounded="full"
                bgGradient="linear(135deg, luxury.400, luxury.600)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={3}
                boxShadow="0 8px 25px rgba(212, 165, 116, 0.3)"
              >
                <Icon as={Diamond} w={6} h={6} color="white" />
              </Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
                fontFamily="luxury"
                color={isScrolled ? "navy.900" : "white"}
                letterSpacing="wider"
              >
                Ramavatargems
              </Text>
            </MotionFlex>

            {/* Desktop Navigation */}
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {navItems.map((item) => (
                <MotionBox
                  key={item.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Button
                    variant="ghost"
                    color={isScrolled ? "navy.700" : "whiteAlpha.900"}
                    fontWeight="600"
                    fontSize="sm"
                    letterSpacing="wide"
                    leftIcon={<Icon as={item.icon} w={4} h={4} />}
                    _hover={{
                      color: "luxury.500",
                      bg: isScrolled ? "luxury.50" : "whiteAlpha.200",
                      transform: "translateY(-2px)",
                    }}
                    _active={{
                      transform: "translateY(0)",
                    }}
                    transition="all 0.2s ease"
                  >
                    {item.label}
                  </Button>
                </MotionBox>
              ))}
            </HStack>

            {/* Contact Info */}
            <HStack spacing={4} display={{ base: "none", lg: "flex" }}>
              <VStack spacing={0} align="start">
                <Text
                  fontSize="xs"
                  color={isScrolled ? "navy.600" : "whiteAlpha.700"}
                  fontWeight="500"
                >
                  Call Us
                </Text>
                <Text
                  fontSize="sm"
                  color={isScrolled ? "navy.900" : "white"}
                  fontWeight="600"
                >
                  +91 94631 96935
                </Text>
              </VStack>
              <Button
                variant="luxury"
                size="sm"
                leftIcon={<Mail size={16} />}
                _hover={{
                  transform: "translateY(-2px) scale(1.05)",
                }}
              >
                Get Quote
              </Button>
            </HStack>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              variant="ghost"
              color={isScrolled ? "navy.900" : "white"}
              icon={<Menu size={24} />}
              onClick={onOpen}
              _hover={{
                bg: isScrolled ? "luxury.50" : "whiteAlpha.200",
              }}
            />
          </Flex>
        </Container>
      </MotionBox>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay backdropFilter="blur(10px)" />
        <DrawerContent
          bg="white"
          borderLeft="3px solid"
          borderColor="luxury.400"
        >
          <DrawerCloseButton
            size="lg"
            color="navy.900"
            _hover={{ bg: "luxury.50" }}
          />
          <DrawerHeader
            borderBottom="1px solid"
            borderColor="luxury.200"
            pb={4}
          >
            <Flex align="center">
              <Box
                w={10}
                h={10}
                rounded="full"
                bgGradient="linear(135deg, luxury.400, luxury.600)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={3}
              >
                <Icon as={Diamond} w={5} h={5} color="white" />
              </Box>
              <Text
                fontSize="lg"
                fontWeight="bold"
                fontFamily="luxury"
                color="navy.900"
              >
                Ramavatargems
              </Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody pt={6}>
            <VStack spacing={4} align="stretch">
              {navItems.map((item, index) => (
                <MotionBox
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    leftIcon={<Icon as={item.icon} w={5} h={5} />}
                    color="navy.700"
                    fontSize="lg"
                    fontWeight="600"
                    h={12}
                    _hover={{
                      bg: "luxury.50",
                      color: "luxury.600",
                      transform: "translateX(8px)",
                    }}
                    transition="all 0.2s ease"
                    onClick={onClose}
                  >
                    {item.label}
                  </Button>
                </MotionBox>
              ))}

              <Box pt={6} borderTop="1px solid" borderColor="luxury.200">
                <VStack spacing={4}>
                  <HStack>
                    <Icon as={Phone} w={5} h={5} color="luxury.500" />
                    <Text color="navy.700" fontWeight="600">
                      +91 94631 96935
                    </Text>
                  </HStack>
                  <Button
                    variant="luxury"
                    size="lg"
                    leftIcon={<Mail size={20} />}
                    w="full"
                    onClick={onClose}
                  >
                    Get Quote
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LuxuryNavbar;
