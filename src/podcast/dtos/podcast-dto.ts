import { ObjectType, Field, InputType } from "@nestjs/graphql";
import { Podcast } from "../entities/podcast.entity";

@InputType()
export class PodcastDtoInput {
    @Field(type => String)
    id: string;
}

@ObjectType()
export class AllPodcastDtoOutput {

  @Field(type => [Podcast])
  podcasts:Podcast[];

  @Field(type => String, {nullable:true} )
  err?:string;
}

@ObjectType()
export class PodcastDtoOutput {
  @Field(type => Podcast)
  podcast:Podcast;

  @Field(type => String, {nullable:true} )
  err?:string;
}