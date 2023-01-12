import { Schema, SchemaFactory, SchemaOptions, Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, Types } from 'mongoose';
import { Socket as SocketModel } from './sockets.model';

const options: SchemaOptions = {
  collection: 'chhatings',
  timestamps: true,
};

@Schema(options)
export class Chatting extends Document {
  @Prop({
    type: {
      _id: { type: Types.ObjectId, requried: true, ref: 'sockets' },
      id: { type: String },
      ussername: { type: String, required: true },
    },
  })
  @IsNotEmpty()
  @IsString()
  user: SocketModel;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  chat: string;
}

export const ChattingSchema = SchemaFactory.createForClass(Chatting);
