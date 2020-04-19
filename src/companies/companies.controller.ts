import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { Companies } from "./companies.entity";
import { CompaniesService } from "./companies.service";

@Crud({
  model: {
    type: Companies,
  },
})
@Controller("companies")
export class CompaniesController implements CrudController<Companies> {
  constructor(public service: CompaniesService) {}
}