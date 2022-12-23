import { Controller } from '@nestjs/common';
import { ShippingLineService } from './shipping-line.service';

@Controller('shipping-line')
export class ShippingLineController {
  constructor(private readonly shippingLineService: ShippingLineService) {}
}
