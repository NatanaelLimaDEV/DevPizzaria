declare namespace Express {
  export interface MulterFile {
    /** Nome do arquivo no sistema de destino */
    fieldname: string;
    /** Nome do arquivo original do cliente */
    originalname: string;
    /** Codificação do arquivo */
    encoding: string;
    /** Mime type */
    mimetype: string;
    /** Buffer do arquivo (quando usar storage em memória) */
    buffer: Buffer;
    /** Tamanho do arquivo */
    size: number;
  }

  export interface Request {
    file?: MulterFile;
    files?: MulterFile[];
    user_id: string;
  }
}