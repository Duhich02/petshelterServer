import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Pet} from "./entities/pet.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private repository: Repository<Pet>) {}
  public pets : CreatePetDto[] = [];

  create(data: CreatePetDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
