import { PickType, InputType, ObjectType, Field } from "@nestjs/graphql";
import { Podcast } from "../entities/podcast.entity";

@InputType()
export class CreatePodcastDto extends PickType(Podcast, ['title','category']) {
  // readonly title: string;
  // readonly category: string;
}

@ObjectType()
export class CreatePodcastDtoOutput {

  @Field(type => String, {nullable:true})
  err?:string;

  @Field(type => Number)
  id:number;
}


