---
id: 957
title: 'Fotos Kolumbien'
date: '2012-04-24T21:19:36+02:00'
author: Pädi
layout: revision
guid: 'http://www.zweimalweltbitte.ch/2012/04/949-revision-8/'
permalink: '/?p=957'
---

<div id="picasaGallery"></div><script type="text/javascript">
        $j = jQuery.noConflict();
        $j(document).ready(function(){
 $j.getJSON('https://picasaweb.google.com/data/feed/base/user/patrikth/albumid/5725534356996189137?kind=photo&thumbsize=104c&imgmax=800&access=public&alt=json&callback=?',
                function(data){
				//var picsCount = 6;
                  var picsCount = data.feed.entry.length -1;
                  var picsCount2 = data.feed.entry.length - 7;
                  for (var i = picsCount; i > picsCount2; i--) {
                        var pic = data.feed.entry[i];
                        $j("<img/>").attr("src", pic.media$group.media$thumbnail[0].url).attr("alt", pic.title.$t).attr("title", pic.title.$t).appendTo("#picasaGallery").wrap("<a href='" + pic.media$group.media$content[0].url + "' title='" + pic.title.$t + "' rel='lightbox[group]'>");
                  }
                  });
                });
</script>