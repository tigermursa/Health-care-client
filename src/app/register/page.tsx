import { Box, Container, Stack } from "@mui/material";

const RegisterPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        ></Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
