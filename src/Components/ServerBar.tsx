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
    <Box width="10%" height="100%" bg="#434343" margin={0} padding={0}> 
        {icons}
    </Box>
  );
}
interface IconProps {
    image: string
}
function Icon(props: IconProps){
    return(
        <Box width={60} height={60} borderRadius={10}>
            <Image     
            objectFit="cover"
            src={props.image} />
        </Box>
    )
}

export default ServerBar;
