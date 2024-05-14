import { ObjectType, Field, ID, Float } from '@nestjs/graphql'; // import Float จาก '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field() // ใช้ annotation Field(() => Float) เพื่อระบุชนิดข้อมูลเป็น Float
  price: string;
}




const productMongooseSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  description: { type: String, required: true },
  price: { type: String, required: true },

});

export const ProductSchema = SchemaFactory.createForClass(Product).add(productMongooseSchema);