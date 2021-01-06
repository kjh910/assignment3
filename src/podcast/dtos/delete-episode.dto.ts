import { InputType, Field, ObjectType } from "@nestjs/graphql";

@InputType()
export class DeleteEpisodeDtoInput {
  @Field(type => String)
  id: string;

  @Field(type => String)
  episodeId: string;
}

@ObjectType()
export class DeleteEpisodeDtoOutput {

  @Field(type => String, {nullable:true})
  err?:string;

}