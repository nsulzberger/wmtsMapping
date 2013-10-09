define(
 	["dojo/_base/declare", "dojo/_base/lang", "esri/request", "esri/dijit/BasemapGallery"], 
  	
  	function(declare, lang, esriRequest, BasemapGallery) 
  	{ 

  		declare(null, 
  		{
  			wmtsLayerId: null,

			constructor: function(options)
			{
			    // specify class defaults
			    this.wmtsLayerdId = options.wmtsLayerdId || "20mi"; // Id of WmsLayer to add to the gallery
			    
			    // returnEvents is called by an external function, esri.request
			    // hitch() is used to provide the proper context so that returnEvents
			    // will have access to the instance of this class
			    this.returnEvents = lang.hitch(this, this.returnEvents);
			},

			getBaseMapGallery: function(map) 
			{
			  	//create a new basemap gallery
        		var basemapGallery = new BasemapGallery({
          		showArcGISBasemaps: false,
          		map: map
        		}, "basemapGallery");
		  	},

			/*searchByLoc: function(geopoint) 
			{
			  	var eventsResponse;

			    this.queryParams = 
			    {
			      "lat": geopoint.y,
			      "lon": geopoint.x,
			      "page": 1,
			      "per_page": this.perPage,
			      "range": this.distance
			 	}

			    // seat geek endpoints:
			    // petco park search using lat, lon:
			    // http://api.seatgeek.com/2/events?lat=32.7078&lon=-117.157&range=20mi&callback=c
			    // lat, lon for petco park:  32.7078, -117.157
			    eventsResponse = esriRequest(
			    {
			      "url": this.seatGeekUrl,
			      "callbackParamName": "callback",
			      "content": this.queryParams
			    });
			    return eventsResponse.then(this.returnEvents, this.err);
		  	},

			getMore: function() 
			{
			    var eventsResponse;

			    // increment the page number
			    this.queryParams.page++;
			    
			    eventsResponse = esri.request({
			      "url": this.seatGeekUrl,
			      "callbackParamName": "callback",
			      "content": this.queryParams
			    });
			    return eventsResponse.then(this.returnEvents, this.err);
			 },

			returnEvents: function(response) 
			{  
			    // check number of results 
			    if ( response.meta.total == 0 ) {
			      // console.log("Seat Geek returned zero events: ", response);
			      return null;
			    }

			    // save search result
			    this.lastSearchResult = response;
			    // console.log("set last search result: ", response, this);

			    return response;
		  	},

			err: function(err) 
			{
			    console.log("Failed to get results from Seat Geek due to an error: ", err);
			 }
		*/
		});
   }
);