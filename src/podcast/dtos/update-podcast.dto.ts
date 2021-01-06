import { Episode } from '../entities/episode.entity';
import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePodcastDto {

  @Field(type => String, {nullable:true})
  readonly title?: string;

  @Field(type => String, {nullable:true})
  readonly category?: string;

  @Field(type => Number, {nullable:true})
  readonly rating?: number;

  @Field(type =>[Episode], {nullable:true})
  readonly episodes?: Episode[];
  
  // readonly title: string;
  // readonly category: string;
}

@ObjectType()
export class UpdatePodcastDtoOutput {

  @Field(type => String, {nullable:true})
  err?:string;

}

// export class UpdatePodcastDto {
//   readonly title?: string;
//   readonly category?: string;
//   readonly rating?: number;
//   readonly episodes?: Episode[];
// }
