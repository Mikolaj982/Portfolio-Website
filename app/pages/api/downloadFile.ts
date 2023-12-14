import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.join(process.cwd(), 'portfolio-website/public/documents/Kosmala_Mikołaj_CV.pdf');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileName = 'Kosmala_Mikołaj_CV.pdf';

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.status(200).send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
