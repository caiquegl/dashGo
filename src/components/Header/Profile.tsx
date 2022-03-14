import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Caique Lima</Text>
          <Text color="gray.300" fontSize="small">
            arq.caique@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Caique aima"
        src="https://avatars.githubusercontent.com/u/58114363?v=4"
      />
    </Flex>
  );
}
