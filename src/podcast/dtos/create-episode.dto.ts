import { CreatePodcastDto } from './create-podcast.dto';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEpisodeDto extends CreatePodcastDto {}

@ObjectType()
export class CreateEpisodeDtoOutput {

  @Field(type => String, {nullable:true})
  err?:string;

  @Field(type => Number)
  episodeId:number;
}