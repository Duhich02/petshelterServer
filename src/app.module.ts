import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { ConfigModule } from "@nestjs/config";
// import { TasksModule } from "./tasks/tasks.module";
// import { CommentsModule } from "./comments/comments.module";
// import { Task } from "./tasks/entities/task.entity";
// import { Comment } from "./comments/entities/comment.entity";
// import { AuthModule } from "./auth/auth.module";
import { User } from "./users/entities/user.entity";
import { Pet } from "./pets/entities/pet.entity";
import { BullModule } from "@nestjs/bull";
// import { ModerationModule } from "./moderation/moderation.module";

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports : [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Pet],
      synchronize: true,
    }),
    // BullModule.forRoot({
    //   redis: {
    //     host: "localhost",
    //     port: 6379,
    //   },
    // }),
    PetsModule,
    UsersModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
