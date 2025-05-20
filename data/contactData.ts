import type { ContactDataType } from "@/types"

export const contactData: ContactDataType = {
  required: true,
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  socialLinks: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    dribbble: "https://dribbble.com/johndoe",
  },
  formEnabled: true,
}
