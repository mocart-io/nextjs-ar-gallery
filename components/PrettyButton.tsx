import React from "react";
import { Button, Icon, ButtonProps } from "@chakra-ui/react";

type ARButtonProps = ButtonProps;

/**
 * A Chakra-based AR button that slots into <model-viewer slot="ar-button">…
 */
export const ARButton = React.forwardRef<HTMLButtonElement, ARButtonProps>(
    (props, ref) => (
        <Button
            ref={ref}
            slot="ar-button"
            display="inline-flex"
            alignItems="center"
            color="white"
            bg="transparent"
            _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
            filter="drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))"
            {...props}
        >
            {/* You can wrap the SVG inside an <Icon> if you like: */}
            <Icon
                as={() => (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        style={{
                            color: "white",
                            strokeWidth: "1px",
                        }}
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.25 4.5H21v3.75M6.75 19.5H3v-3.75M21 15.75v3.75h-3.75M3 8.25V4.5h3.75M12 6l5.25 3v6L12 18l-5.25-3V9z"
                        />
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6.75 9 12 12l5.25-3M12 12v6"
                        />
                    </svg>
                )}
                boxSize={5}
                mr={2}
            />
            View in your space
        </Button>
    )
);

ARButton.displayName = "ARButton";
