import { Controller } from '@nestjs/common';
import { ComplaintService } from './complaint.service';

@Controller('complaint')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}
}
