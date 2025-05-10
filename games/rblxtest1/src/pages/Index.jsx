import { Container, Text, VStack, Button, IconButton, useToast } from "@chakra-ui/react";
import { FaUnlock } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleUnlockClick = () => {
    toast({
      title: "Roblox Blocked!",
      description: "You have successfully blocked Roblox.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Block Roblox</Text>
        <Text>Click the button below to block Roblox.</Text>
        <IconButton aria-label="Block Roblox" icon={<FaUnlock />} size="lg" onClick={handleUnlockClick} />
      </VStack>
    </Container>
  );
};

export default Index;
