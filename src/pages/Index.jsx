import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Link, VStack, StackDivider } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" bg="gray.800" color="white" p={10} backgroundImage="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2R8ZW58MHx8fHwxNzA5ODI1MDE1fDA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center">
        <VStack align="flex-start" spacing={4}>
          <Heading as="h1" size="2xl">
            The Rockers
          </Heading>
          <Text fontSize="xl">Join us on our world tour and experience the thrill of live music!</Text>
          <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg">
            Get Tickets
          </Button>
        </VStack>
        <Image borderRadius="full" boxSize="300px" src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMG9uJTIwc3RhZ2V8ZW58MHx8fHwxNzA5ODI1MDE1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rockers Band" display={{ base: "none", md: "block" }} />
      </Flex>

      {/* Tour Dates Section */}
      <Box p={10} maxW="1200px" mx="auto">
        <Heading as="h2" size="xl" mb={6}>
          Tour Dates
        </Heading>
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
          <TourDateItem date="April 25, 2023" location="Los Angeles, CA" venue="Stadium Arena" />
          <TourDateItem date="May 02, 2023" location="New York, NY" venue="Central Park" />
          <TourDateItem date="May 16, 2023" location="London, UK" venue="O2 Arena" />
          {/* More tour dates... */}
        </VStack>
      </Box>

      {/* Social Media Section */}
      <Flex bg="gray.700" color="white" p={6} align="center" justify="center" direction="row">
        <SocialLink icon={FaInstagram} href="https://instagram.com/therockers" />
        <SocialLink icon={FaTwitter} href="https://twitter.com/therockers" />
        <SocialLink icon={FaFacebookF} href="https://facebook.com/therockers" />
      </Flex>
    </Box>
  );
};

const TourDateItem = ({ date, location, venue }) => (
  <Flex justify="space-between" align="center" p={4} bg="gray.100" borderRadius="md">
    <Text fontWeight="bold">{date}</Text>
    <VStack align="flex-start">
      <Text>{location}</Text>
      <Text fontSize="sm" color="gray.600">
        {venue}
      </Text>
    </VStack>
    <Button leftIcon={<FaMusic />} colorScheme="red">
      Details
    </Button>
  </Flex>
);

const SocialLink = ({ icon, href }) => (
  <Link href={href} isExternal mx={2}>
    <Box as={icon} size="24px" />
  </Link>
);

export default Index;
