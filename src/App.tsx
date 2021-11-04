import React from 'react';
import ServerBar from './Components/ServerBar'
import { Flex } from "@chakra-ui/react"


function App() {
  return (
    <Flex minH="100vh" alignItems="stretch" height="100%">
        <ServerBar servers={[{name: "wow", image: "https://picsum.photos/200/300"}, {name: "wow", image: "https://picsum.photos/200/400"}]}/>
    </Flex>
  );
}

export default App;
