import { ObjectType, Field, InputType } from "@nestjs/graphql";
import { Podcast } from "../entities/podcast.entity";
import { Episode } from "../entities/episode.entity";

@InputType()
export class EpisodeDtoInput {
    @Field(type => String)
    id: string;
}

@ObjectType()
export class AllEpisodeDtoOutput {

  @Field(type => [Episode])
  episodes:Episode[];

  @Field(type => String, {nullable:true} )
  err?:string;
}

@ObjectType()
export class EpisodeDtoOutput {
  @Field(type => Episode)
  episode:Episode;

  @Field(type => String, {nullable:true} )
  err?:string;
}