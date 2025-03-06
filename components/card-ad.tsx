import React, { FC } from "react";
import { Box, Center } from "@chakra-ui/react";

interface CardAdProps {
    ad: {
        url: string;
    };
}

const CardAd: FC<CardAdProps> = ({ ad }) => {
    return (
        <Center py={12}>
            <Box
                role="group"
                p={6}
                border="1px solid rgba(197, 199, 208, 0.2)"
                rounded="16px"
                boxShadow="2xl"
                pos="relative"
                background={"white"}
                zIndex={1}
            >
                <Box rounded="lg" pos="relative" overflow="hidden">
                    <iframe
                        src={ad.url}
                        width="250px"
                        height="100%"
                        style={{ border: 0 }}
                        title="Ad content"
                        allow="camera; gyroscope; accelerometer; xr-spatial-tracking; web-share;"
                    />
                </Box>
            </Box>
        </Center>
    );
};

export default CardAd;
