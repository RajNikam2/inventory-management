import { Controller } from '@nestjs/common';
import { PortOfLoadingService } from './port-of-loading.service';

@Controller('port-of-loading')
export class PortOfLoadingController {
  constructor(private readonly portOfLoadingService: PortOfLoadingService) {}
}
