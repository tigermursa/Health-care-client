import PHFileUploader from "@/Components/Forms/PHFileUploader";
import PHForm from "@/Components/Forms/PHFrom";
import PHInput from "@/Components/Forms/PHInput";
import PHModal from "@/Components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFromSubmit = (values: FieldValues) => {

    try {
      
    } catch (error:any) {
      console.log(error)
    }

  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Specialty ">
      <PHForm onSubmit={handleFromSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="titile" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
