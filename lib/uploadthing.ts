import { generateComponents } from "@uploadthing/react";

import type { OurFileRouter } from "@/app/(root)/api/uploadthing/core";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
