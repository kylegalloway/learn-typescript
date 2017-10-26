/// <reference path="../services/playlistService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../node_modules/@types/angular/index.d.ts" />

module angularWithTS.controllers
{
    export class TSDemoController
    {

        playlistService: angularWithTS.Interfaces.IPlaylistService;
        static $inject = ["angularWithTS.Services.PlaylistService"];
        constructor(playlistService: angularWithTS.Interfaces.IPlaylistService)
        {

            this.playlistService = playlistService;
        }
        favorites: Array<angularWithTS.Interfaces.ITrack>;

        getFavourites = () =>
        {
            this.favorites = this.playlistService.getPlaylist();
        }
    }

    angular.module("angularWithTS").controller(
        "angularWithTS.controllers.tsDemoController", TSDemoController);
}