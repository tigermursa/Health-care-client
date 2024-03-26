import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
const Footer = () => {
  return (
    <Box bgcolor={"rgb(17,26,34)"} py={5}>
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={4}>
          <Typography color={"#fff"} component={Link} href={"/consultation"}>
            Consultation
          </Typography>
          <Typography color={"#fff"}>Health Plans</Typography>
          <Typography color={"#fff"}>Medicine</Typography>
          <Typography color={"#fff"}>Diagnostics</Typography>
          <Typography color={"#fff"}>NGOs</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={2} py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
          py={3}
        >
          <Typography component="p" color={"white"}>
            copyright 2024 MMH HealthCare.All Right Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href={"/"}
            fontWeight={600}
            color={"white"}
          >
            M
            <Box component={"span"} color={"primary.main"}>
              M
            </Box>
            H Health Care
          </Typography>
          <Typography component="p" color={"white"}>
            Privacy Policy | Terms and Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
