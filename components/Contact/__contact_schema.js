import * as yup from "yup";

export const ContactS = yup.object().shape({
  fullName: yup.string().required("nama lengkap wajib diisi"),
  email: yup
    .string()
    .email("email tidak valid")
    .required("email wajib diisi"),
  message: yup
    .string()
    .required("pesan wajib diisi")
    .min(10, "pesan min 10 karakter")
    .max(150, "max 150 karekter"),
});
