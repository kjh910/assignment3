import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { Podcast } from "./entities/podcast.entity";
import { PodcastsService } from "./podcasts.service";
import { CreatePodcastDto, CreatePodcastDtoOutput } from "./dtos/create-podcast.dto";
import { AllPodcastDtoOutput, PodcastDtoOutput, PodcastDtoInput } from "./dtos/podcast-dto";
import { DeletePodcastDtoOutput, DeletePodcastDtoInput } from "./dtos/delete-podcast.dto";
import { UpdatePodcastDtoOutput, UpdatePodcastDto } from "./dtos/update-podcast.dto";
import { AllEpisodeDtoOutput } from "./dtos/episode-dto";
import { CreateEpisodeDtoOutput, CreateEpisodeDto } from "./dtos/create-episode.dto";
import { DeleteEpisodeDtoOutput, DeleteEpisodeDtoInput } from "./dtos/delete-episode.dto";
import { UpdateEpisodeDtoOutput, UpdateEpisodeDto } from "./dtos/update-episode.dto";

@Resolver(of => Podcast)
export class PodcastsResolver {

    constructor(private readonly podcastsService: PodcastsService) {}
    
    @Query(returns => AllPodcastDtoOutput)
    getAllPodcasts() {
        return this.podcastsService.getAllPodcasts();
    }

    @Mutation(returns => CreatePodcastDtoOutput)
    createPodcast(
        @Args('input') createPodcastDto:CreatePodcastDto
    ) {
        return this.podcastsService.createPodcast(createPodcastDto);
    }

    @Query(returns => PodcastDtoOutput)
    getPodcast(
        @Args('input') podcastDtoInput:PodcastDtoInput
    ){
        return this.podcastsService.getPodcast(podcastDtoInput.id);
    }

    @Mutation(returns => DeletePodcastDtoOutput)
    deletePodcast(
        @Args('input') deletePodcastDtoInput:DeletePodcastDtoInput
    ) {
        return this.podcastsService.deletePodcast(deletePodcastDtoInput.id);
    }

    @Mutation(returns => UpdatePodcastDtoOutput)
    updatePodcast(
        @Args('id') id:string,
        @Args('input') updatePodcastDtoInput:UpdatePodcastDto
    ) {
        console.log(this.podcastsService.updatePodcast(id,updatePodcastDtoInput)); 
        return this.podcastsService.updatePodcast(id,updatePodcastDtoInput);
    }

    @Query(returns => AllEpisodeDtoOutput)
    getEpisodes(
        @Args('id') id:string
    ) {
        return this.podcastsService.getEpisodes(id);
    }

    @Mutation(returns => CreateEpisodeDtoOutput)
    createEpisode(
        @Args('id') id:string,
        @Args('input') createEpisodeDtoInput:CreateEpisodeDto
    ) {
        return this.podcastsService.createEpisode(id,createEpisodeDtoInput);
    }

    @Mutation(returns => DeleteEpisodeDtoOutput)
    deleteEpisode(
        @Args('input') deleteEpisodeDtoInput:DeleteEpisodeDtoInput
    ) {
        return this.podcastsService.deleteEpisode(deleteEpisodeDtoInput.id, deleteEpisodeDtoInput.episodeId);
    }



    @Mutation(returns => UpdateEpisodeDtoOutput)
    updateEpisode(
        @Args('id') id:string,
        @Args('episodeId') episodeId:string,
        @Args('input') updateEpisodeDtoInput:UpdateEpisodeDto
    ) {
        return this.podcastsService.updateEpisode(id,episodeId,updateEpisodeDtoInput);
    }

}