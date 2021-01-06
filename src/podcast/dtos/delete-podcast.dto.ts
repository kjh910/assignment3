import { PickType, InputType, ObjectType, Field } from "@nestjs/graphql";
import { Podcast } from "../entities/podcast.entity";

@InputType()
export class DeletePodcastDtoInput {
  @Field(type => String)
  id: string;
}

@ObjectType()
export class DeletePodcastDtoOutput {

  @Field(type => String, {nullable:true})
  err?:string;

}