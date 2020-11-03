import mongoose, { Document, Schema } from 'mongoose';
import { IUserSchema } from '../user/user.model';

// export interface IGallery {
//   name: string;
//   url: string;
//   size: number;
//   height: number;
//   width: number;
//   filePath: string;
//   user: IUserSchema['_id'];
// }

export interface IGallery {
  label: string;
  url: string;
  user: IUserSchema['_id'];
}

export interface IGallerySchema extends IGallery, Document {}

const gallerySchema = new Schema(
  {
    label: String,
    url: String,
    // name: String,
    // url: String,
    // size: Number,
    // width: Number,
    // height: Number,
    // filePath: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const galleryModel = mongoose.model<IGallerySchema>('Gallery', gallerySchema);

export default galleryModel;
