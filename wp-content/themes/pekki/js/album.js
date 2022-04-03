function CreateAlbum (AlbumID, AuthKey) {
		$j = jQuery.noConflict();
		var album = "https://picasaweb.google.com/data/feed/base/user/patrikth/albumid/" + AlbumID + "?kind=photo&thumbsize=144c&imgmax=720&access=public&alt=json&authkey=" + AuthKey + "&callback=?";
		var dom = document.createElement("div");
		var myText = document.createTextNode("");
		dom.appendChild(myText);
		$j(document).ready(function(){
	 		$j.getJSON(album,
		        function(data){
		          var picsCount = data.feed.entry.length;
		          for (var i = 0; i < picsCount; i++) {
		                var pic = data.feed.entry[i];
		                $j("<img/>").attr("src", pic.media$group.media$thumbnail[0].url).attr("alt", pic.title.$t).attr("title", pic.title.$t).appendTo(dom).wrap("<div class='picasaAlbumPicture'>").wrap("<a href='" + pic.media$group.media$content[0].url + "' title='" + pic.title.$t + "' rel='lightbox[group]'>");
		          }
		          });
	});
		return dom;
}
