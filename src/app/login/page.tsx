"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import PHForm from "@/Components/Forms/PHFrom";
import PHInput from "@/Components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  // const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    // console.log(data);
    try {
      const res = await userLogin(values);
      console.log(res);
      //toaster
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res?.message);
        router.push("/");
      } else {
        toast.success(res?.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
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
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="l" width={50} height={50} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login MMH Health Care
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography
                mb={1}
                mt={1}
                textAlign={"end"}
                component="p"
                fontWeight={600}
              >
                Forgot Password ?
              </Typography>
              <Button
                type="submit"
                fullWidth={true}
                sx={{
                  margin: "10px 0px",
                }}
              >
                Login
              </Button>
              <Typography component="p" fontWeight={600}>
                Don&apos;t have an account ?
                <Link href={"/register"}>Register Now</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
