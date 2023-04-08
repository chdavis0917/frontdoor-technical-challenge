import { IsOptional, IsString } from 'class-validator';

export class UpdateHighlightDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  comment?: string;
}
