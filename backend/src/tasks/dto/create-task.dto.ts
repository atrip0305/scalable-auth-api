import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class CreateTaskDto {
    @ApiProperty()
    @IsString()
    title: string
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string

}