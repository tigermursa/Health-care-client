import { USER_ROLE } from "@/constants/role"
import { DrawerItem, UserRole } from "@/types"
import { CalendarMonth, MedicalInformation, MedicalInformationSharp, Reviews, Try } from "@mui/icons-material"

import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"

export const drawerItems = (role: UserRole): DrawerItem[] => {

    const roleMenus: DrawerItem[] = []


    switch (role) {

        case USER_ROLE.SUPER_ADMIN:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Manage Users",
                    path: `${role}`,
                    icon: GroupIcon,
                });
            break;

        case USER_ROLE.ADMIN:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Specialties",
                    path: `${role}`,
                    icon: Try,
                },
                {
                    title: "Doctors",
                    path: `${role}`,
                    icon: MedicalInformation,
                },
                {
                    title: "Schedules",
                    path: `${role}`,
                    icon: CalendarMonth,
                },

                {
                    title: "Appointments",
                    path: `${role}`,
                    icon: MedicalInformation,
                },
                {
                    title: "Reviews",
                    path: `${role}`,
                    icon: Reviews,
                }

            );
            break;

        case USER_ROLE.DOCTOR:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Schedules",
                    path: `${role}`,
                    icon: CalendarMonth,
                },

                {
                    title: "Appointments",
                    path: `${role}`,
                    icon: MedicalInformation,
                }


            );
            break;

        case USER_ROLE.PATIENT:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Appointments",
                    path: `${role}`,
                    icon: MedicalInformation,
                },
                {
                    title: "Prescriptions",
                    path: `${role}`,
                    icon: MedicalInformationSharp,
                },
                {
                    title: "Payment History",
                    path: `${role}`,
                    icon: MedicalInformation,
                },

            );
            break;

        default:
            break;

    }


    return [...roleMenus]
}