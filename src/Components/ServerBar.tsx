import React from 'react';
import { Box, Image } from "@chakra-ui/react"

interface server {
    name: string,
    image: string, 
}

interface props {
    servers: server[]
}

function ServerBar(props: props) {
    const icons = props.servers.map(server => <Icon image={server.image}/>)
  return (
    <Box width="6%" height="100vh" bg="#434343" margin={0} padding={0}> 
        {icons}
    </Box>
  );
}
interface IconProps {
    image: string
}
function Icon(props: IconProps){
    return(
        <Box borderRadius={10}>
            <Image 
            borderRadius={1}  
            width={10} 
            height={10}  
            objectFit="cover"
            src={props.image} />
        </Box>
    )
}

export default ServerBar;
