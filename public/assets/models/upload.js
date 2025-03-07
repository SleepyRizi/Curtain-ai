import { put } from "@vercel/blob";
import fs from "fs/promises"; // or "fs" with callbacks

async function uploadModel() {
  // Read the file as a Buffer
  const fileData = await fs.readFile("./curtain1.glb");

  // Upload the file to a desired path in your Blob storage.
  // For example, here we store it under the "models/" folder.
  const { url } = await put("models/curtain1.glb", fileData, {
    access: "public",
    // You can also set contentType if needed:
    // contentType: "model/gltf-binary"
  });

  console.log("Uploaded file URL:", url);
}

uploadModel().catch(console.error);
