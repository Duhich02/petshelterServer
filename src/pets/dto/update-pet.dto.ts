import { PartialType } from "@nestjs/mapped-types";
// import { CreateTaskDto } from "./create-task.dto";
// import { Comment } from "src/comments/entities/comment.entity";
import * as Joi from "joi";
import { CreatePetDto } from './create-pet.dto';

export class UpdatePetDto extends PartialType(CreatePetDto) {
    title?: string;
    comments?: Comment[];
}

export const UpdatePetSchema = Joi.object({
    title: Joi.string(),
    comments: Joi.number(),
});