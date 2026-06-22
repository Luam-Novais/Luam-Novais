import cloudinary from '../../../config/cloudinary';
import sharp from 'sharp';
import { UploadApiResponse } from 'cloudinary';
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image');
 
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ message: 'Imagem não enviada' }, { status: 400 });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const resizedImage = await sharp(buffer).resize({ width: 800 }).webp({ quality: 80 }).toBuffer();
    const upload = new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ folder: 'portfolio' }, (error, result) => {
        if (error) return reject(error);
        return resolve(result as UploadApiResponse);
      });
      stream.end(resizedImage);
    });
      const {secure_url} = await upload
    return NextResponse.json(secure_url)
  } catch (error) {
    console.error(error);
  }
}