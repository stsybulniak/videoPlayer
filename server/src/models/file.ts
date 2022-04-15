import mongoose from 'mongoose';

interface FileAttrs {
  fileName: string;
  originName: string;
  size: number;
  mimeType: string;
  thumbnail: string;
}

interface FileDoc extends mongoose.Document {
  fileName: string;
  originName: string;
  size: number;
  mimeType: string;
  thumbnail: string;
}

interface FileModel extends mongoose.Model<FileDoc> {
  build(attrs: FileAttrs): FileDoc;
}

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    originName: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    size: {
      type: Number,
      required: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

fileSchema.statics.build = (attrs: FileAttrs) => {
  return new File(attrs);
};

const File = mongoose.model<FileDoc, FileModel>('File', fileSchema);

export { File };
