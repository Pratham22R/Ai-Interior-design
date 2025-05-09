import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users",{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl').notNull(),
    credits:integer('credits').default(3),
});

export const AiGeneratedImage=pgTable('aiGeneratedImages',{
    id:serial('id').primaryKey(),
    userEmail:varchar('userEmail').notNull(),
    orgImage:varchar('orgImage').notNull(),
    aiImage:varchar('aiImage').notNull(),
    roomType:varchar('roomType').notNull(),
    designType:varchar('designType').notNull(), 
});