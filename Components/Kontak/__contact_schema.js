import * as yup from "yup";

const ContactSchema = yup.object().shape({
  fullName: yup.string().required("Nama lengkap wajib diisi"),
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  message: yup
    .string()
    .required("Pesan wajib diisi")
    .min(10, "Pesan min 10 karakter")
    .max(150, "max 150 karekter"),
});

export { ContactSchema as default };
