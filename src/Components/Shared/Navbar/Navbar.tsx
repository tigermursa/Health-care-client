"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const AuthButton = dynamic(() => import("@/Components/UI/AuthButton/AuthButton"), { ssr: false });
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography variant="h4" component={Link} href={"/"} fontWeight={600}>
          M
          <Box component={"span"} color={"primary.main"}>
            M
          </Box>
          H Health Care
        </Typography>

        <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
          <Typography component={Link} href={"/consultation"}>
            Consultation
          </Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;


