import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const xl = defineStyle({
  height: "58px",
  width: "58px",
});

export const buttonTheme = defineStyleConfig({
  sizes: { xl }
})