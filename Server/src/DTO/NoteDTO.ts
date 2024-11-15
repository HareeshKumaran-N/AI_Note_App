import { IsString, IsNotEmpty, IsMongoId } from "class-validator";

export class createNoteDto {
  @IsString()
  @IsNotEmpty()
  title: string ='';

  @IsString()
  @IsNotEmpty()
  value: string='';

  @IsMongoId()
  @IsNotEmpty()
  authorID: string ='';
}
