import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { Companies } from "./companies.entity";

@Injectable()
export class CompaniesService extends TypeOrmCrudService<Companies> {
  constructor(@InjectRepository(Companies) repo) {
    super(repo);
  }
}