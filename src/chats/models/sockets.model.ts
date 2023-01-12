import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';
import { isString } from 'util';

const options: SchemaOptions = {
  id: false,
  collection: 'sockets',
  timestamps: true,
};

@Schema(options)
export class Socket extends Document {
  @Prop({
    unique: true,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  username: string;
}

export const SocketSchema = SchemaFactory.createForClass(Socket);
