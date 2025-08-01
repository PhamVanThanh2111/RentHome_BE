import { IsNotEmpty, IsDateString, IsEnum } from 'class-validator';
import { StatusEnum } from '../../common/enums/status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '61b1ebfa-8368-48bb-930f-7b763feffeed',
    description: 'ID người thuê (tenant)',
  })
  tenantId: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'e2ee5d4a-f409-44c2-91c4-5ea69f405364',
    description: 'ID bất động sản',
  })
  propertyId: string;

  @IsDateString()
  @ApiProperty({ example: '2024-07-15', description: 'Ngày đặt (YYYY-MM-DD)' })
  bookingDate: Date;

  @IsEnum(StatusEnum)
  @ApiProperty({
    example: StatusEnum.PENDING,
    enum: StatusEnum,
    required: false,
    description: 'Trạng thái booking',
  })
  status?: StatusEnum;
}
