import { USER_ROLE } from "@/constants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {

    page: number;
    limit: number;
    total: number;
}
//MAGIC OF TS
export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
}