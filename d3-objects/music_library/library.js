const library = {
              tracks: {
                     t01: {
                            id: "t01",
                            name: "Code Monkey",
                            artist: "Jonathan Coulton",
                            album: "Thing a Week Three"
                     },
                     t02: {
                            id: "t02",
                            name: "Model View Controller",
                            artist: "James Dempsey",
                            album: "WWDC 2003"
                     },
                     t03: {
                            id: "t03",
                            name: "Four Thirty-Three",
                            artist: "John Cage",
                            album: "Woodstock 1952"
                     }
              },
              playlists: {
                     p01: {
                            id: "p01",
                            name: "Coding Music",
                            tracks: ["t01", "t02"]
                     },
                     p02: {
                            id: "p02",
                            name: "Other Playlist",
                            tracks: ["t03"]
                     }
              },

              printPlaylists: function () {
                     for (let object in library["playlists"]) {
                            console.log(`${object}: ${library["playlists"][object]["name"]} - ${library["playlists"][object]["tracks"].length} tracks`)
                     }
              },

              printTracks: function () {
                     const printTracks = function () {
                            for (let object in library["tracks"]) {
                                   console.log(`${object}: by ${library["tracks"][object]["artist"]} (${library["tracks"][object]["album"]})`);
                            },
                     }
              },
              
              printPlaylist: function (playlistId) {
                     console.log(`${playlistId}: ${library["playlists"][playlistId]["name"]} ${library["playlists"][playlistId]["tracks"].length} tracks`);
                     for (var object in library["tracks"]) {
                            console.log(`${object}: ${library["tracks"][object]["name"]} by ${library["tracks"][object]["artist"]} (${library["tracks"][object]["album"]})`)

                     }
              },

              addTrackToPlaylist: function (trackId, playlistId) {
                     library["playlists"][playlistId]["tracks"].push(trackId)
              },

              generateUid: function () {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              },

              addTrack: function (name, artist, album) {
                     let ide = `${generateUid()}`;
                     library["tracks"][ide] = {
                            "id": ide,
                            "name": name,
                            "artist": artist,
                            "album": album
                     };
              },
              addPlaylist: function (name) {
                     let pName = `${generateUid()}`;
                     library["playlists"][pName] = {
                            "id": pName,
                            "name": name,
                            "tracks": []
                     };
              };




              /////////////////////////////
              // FUNCTIONS TO IMPLEMENT:
              /////////////////////////////

              // prints a list of all playlists, in the form:
              // p01: Coding Music - 2 tracks
              // p02: Other Playlist - 1 tracks
              const printPlaylists = function () {
                     for (let object in library["playlists"]) {
                            console.log(`${object}: ${library["playlists"][object]["name"]} - ${library["playlists"][object]["tracks"].length} tracks`)
                     }
              }

              // prints a list of all tracks, using the following format:
              // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
              // t02: Model View Controller by James Dempsey (WWDC 2003)
              // t03: Four Thirty-Three by John Cage (Woodstock 1952)
              const printTracks = function () {
                     const printTracks = function () {
                            for (let object in library["tracks"]) {
                                   console.log(`${object}: by ${library["tracks"][object]["artist"]} (${library["tracks"][object]["album"]})`);
                            }
                     };


              }


              // prints a list of tracks for a given playlist, using the following format:
              // p01: Coding Music - 2 tracks
              // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
              // t02: Model View Controller by James Dempsey (WWDC 2003)
              const printPlaylist = function (playlistId) {
                     console.log(`${playlistId}: ${library["playlists"][playlistId]["name"]} ${library["playlists"][playlistId]["tracks"].length} tracks`);
                     for (var object in library["tracks"]) {
                            console.log(`${object}: ${library["tracks"][object]["name"]} by ${library["tracks"][object]["artist"]} (${library["tracks"][object]["album"]})`)

                     }

              };


              // adds an existing track to an existing playlist
              const addTrackToPlaylist = function (trackId, playlistId) {
                     library["playlists"][playlistId]["tracks"].push(trackId)
              }


              // generates a unique id
              // (already implemented: use this for addTrack and addPlaylist)
              const generateUid = function () {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              }


              // adds a track to the library
              const addTrack = function (name, artist, album) {
                     let ide = `${generateUid()}`;
                     library["tracks"][ide] = {
                            "id": ide,
                            "name": name,
                            "artist": artist,
                            "album": album
                     };

              };



              // adds a playlist to the library
              const addPlaylist = function (name) {
                     let pName = `${generateUid()}`;
                     library["playlists"][pName] = {
                            "id": pName,
                            "name": name,
                            "tracks": []

                     };



              };


              // STRETCH:
              // given a query string string, prints a list of tracks
              // where the name, artist or album contains the query string (case insensitive)
              // tip: use "string".search("tri") 
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
              const printSearchResults = function (query) {

              }