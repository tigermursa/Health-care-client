import { baseApi } from "./baseApi"



const specialistApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSpecialty: build.mutation({
            query: (data) => ({
                url: "/specialties",
                method: "POST",
                contentType: "multipart/form-data",
                data,
            }),
        }),
    }),
    
})

export const { useCreateSpecialtyMutation } = specialistApi