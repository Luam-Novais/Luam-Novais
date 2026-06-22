import cloudinary from "../config/cloudinary";



interface UploadResponse {
  url: string;
  publicId: string;
}


export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });
  const json = await response.json()
  console.log(json)
  if (!response.ok) {
    throw new Error('Erro ao fazer upload');
  }

  return json
}