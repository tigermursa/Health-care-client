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
                    path: `${role}/manage-users`,
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
                    path: `${role}/specialties`,
                    icon: Try,
                },
                {
                    title: "Doctors",
                    path: `${role}/doctors`,
                    icon: MedicalInformation,
                },
                {
                    title: "Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonth,
                },

                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    icon: MedicalInformation,
                },
                {
                    title: "Reviews",
                    path: `${role}/reviews`,
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
                    path: `${role}/schedules`,
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
                    path: `${role}/appointment`,
                    icon: MedicalInformation,
                },
                {
                    title: "Prescriptions",
                    path: `${role}/prescription`,
                    icon: MedicalInformationSharp,
                },
                {
                    title: "Payment History",
                    path: `${role}/history`,
                    icon: MedicalInformation,
                },

            );
            break;

        default:
            break;

    }


    return [...roleMenus]
}