import React from 'react';
import ServerBar from './Components/ServerBar'
import { Box, Flex } from "@chakra-ui/react"
var faker = require('faker');


function App() {
  return (
    <Flex minH="100vh" alignItems="stretch" height="100%">
      <Box height="100%" flex="1">
        <ServerBar servers={[{name: "wow", image: faker.image.imageUrl}, {name: "wow", image: faker.image.imageUrl}]}/>
      </Box>
    </Flex>
  );
}

export default App;
