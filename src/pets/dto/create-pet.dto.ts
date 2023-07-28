import { ApiProperty } from "@nestjs/swagger";
import * as Joi from "joi";
import { User } from "src/users/entities/user.entity";
import {Column, PrimaryGeneratedColumn} from "typeorm";


export class CreatePetDto {
    @ApiProperty({
        description: "Кличка зверушки",
    })
    name: string;

    @ApiProperty({
        description: "Фото мордашки",
    })
    photo: string;

    @ApiProperty({
        description: "Досье объекта",
    })
    info: string;

    @ApiProperty({
        description: "Идентификационный номер зверя",
    })
    id: number;

    @ApiProperty({
        description: "Полных лет питомцу",
    })
    age: number;

    @ApiProperty({
        description: "Вид животного(кот/пёс)",
    })
    kind: string;

    @ApiProperty({
        description: "Пол животного",
    })
    sex: string;

    @ApiProperty({
        description: "Стериализован?",
    })
    sterilization: string;
}

