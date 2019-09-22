!function(){var c="runtime-p2kwk6xz14n";self.addEventListener("install",function(t){t.waitUntil(self.skipWaiting())}),self.addEventListener("activate",function(t){var e=[c];t.waitUntil(caches.keys().then(function(t){return t.filter(function(t){return-1==e.indexOf(t)})}).then(function(t){return Promise.all(t.map(function(t){return caches.delete(t)}))}).then(function(){self.clients.claim()}))}),self.addEventListener("fetch",function(i){var o,t=self.location.origin,e=l(t,"run"),a=l(t,"api"),n=l(t,"proxy"),p=i.request.url;if(p.startsWith(e)){var s,r,m=p.substring(e.length);m.startsWith("-")?(s=m.slice(1,m.indexOf("/")),r=d(m.slice(m.indexOf("/")))):r=d(m),i.respondWith((o=["meta","projects","files","data"],new Promise(function(i,t){var a=indexedDB.open("ProjectStore");a.onerror=t,a.onsuccess=function(){var t=a.result,e=t.transaction(o,"readonly");i(e),e.oncomplete=function(){t.close()}}})).then(function(e){return s?f(l(s,r),e):(a=e,new Promise(function(o,e){var t=a.objectStore("meta"),i=a.objectStore("projects"),n=t.get("currentProjectId");n.onerror=e,n.onsuccess=function(){var t=n.result;if(t&&t.value){var a=i.get(t.value);a.onerror=e,a.onsuccess=function(){var t=a.result,e=t.ref?t.ref.split("/").pop():null,i=e?t.pid+":"+e:t.pid;o(i)}}else e("Could not get currentProjectId.")}})).then(function(t){return f(l(t,r),e)});var a}).then(function(t){var e,i;switch((t=t||{encoding:"utf8",text:""}).encoding){case"base64":e=function(t,e,i){e=e||"",i=i||512;for(var a=atob(t),o=[],n=0;n<a.length;n+=i){for(var p=a.slice(n,n+i),s=new Array(p.length),r=0;r<p.length;r++)s[r]=p.charCodeAt(r);var m=new Uint8Array(s);o.push(m)}return new Blob(o,{type:e})}(t.text);break;case"binary":e=new Blob([new Uint8Array(t.text)]);break;case"utf8":default:e=t.text}return new Response(e,{status:200,statusText:"OK",headers:{"Content-Type":u[(i=r,i.split("#").shift().split("?").shift().split(".").pop())]||"text/plain"}})},function(){return new Response("",{status:404,statusText:"NOT FOUND"})}))}else!p.startsWith(t)||p.startsWith(a)||p.startsWith(n)||i.respondWith(caches.match(i.request).then(function(t){return t||caches.open(c).then(function(e){return fetch(i.request).then(function(t){return 200==t.status?e.put(i.request,t.clone()).then(function(){return t}):t})})}))});var u={"3g2":"video/3gpp2","3gp":"video/3gpp",avi:"video/x-msvideo",flv:"video/x-flv",h261:"video/h261",h263:"video/h263",h264:"video/h264",jpgm:"video/jpm",jpgv:"video/jpeg",jpm:"video/jpm",m1v:"video/mpeg",m2v:"video/mpeg",m4u:"video/vnd.mpegurl",m4v:"video/mp4",mj2:"video/mj2",mjp2:"video/mj2",mk3d:"video/x-matroska",mks:"video/x-matroska",mkv:"video/x-matroska",mov:"video/quicktime",mp4:"video/mp4",mp4v:"video/mp4",mpe:"video/mpeg",mpeg:"video/mpeg",mpg:"video/mpeg",mpg4:"video/mp4",ogv:"video/ogg",qt:"video/quicktime",smv:"video/x-smv",webm:"video/webm",wm:"video/x-ms-wm",wmv:"video/x-ms-wmv",wmx:"video/x-ms-wmx",aac:"audio/x-aac",adp:"audio/adpcm",au:"audio/basic",flac:"audio/x-flac",kar:"audio/midi",m2a:"audio/mpeg",m3a:"audio/mpeg",m3u:"audio/x-mpegurl",m3u8:"application/vnd.apple.mpegurl",m4a:"audio/mp4",mid:"audio/midi",midi:"audio/midi",mka:"audio/x-matroska",mp2:"audio/mpeg",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4a:"audio/mp4",mpga:"audio/mpeg",oga:"audio/ogg",ogg:"audio/ogg",rmi:"audio/midi",s3m:"audio/s3m",snd:"audio/basic",spx:"audio/ogg",wav:"audio/x-wav",weba:"audio/webm",wma:"audio/x-ms-wma",xm:"audio/xm",bmp:"image/bmp",gif:"image/gif",ico:"image/x-icon",jpeg:"image/jpeg",jpg:"image/jpeg",jpe:"image/jpeg",png:"image/png",psd:"image/vnd.adobe.photoshop",svg:"image/svg+xml",svgz:"image/svg+xml",tga:"image/x-tga",tif:"image/tiff",tiff:"image/tiff",webp:"image/webp",css:"text/css",csv:"text/csv",htm:"text/html",html:"text/html",js:"text/javascript",sass:"text/x-sass",scss:"text/x-scss",styl:"text/x-styl",txt:"text/plain",yaml:"text/yaml",yml:"text/yaml",md:"text/markdown",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gz:"application/x-gzip",hdf:"application/x-hdf",json:"application/json",jsonml:"application/jsonml+json",latex:"application/x-latex",mp4s:"application/mp4",ogx:"application/ogg",otf:"application/x-font-otf",pdf:"application/pdf",ps:"application/postscript",psf:"application/x-font-linux-psf",rar:"application/x-rar-compressed",snf:"application/x-font-snf",swa:"application/x-director",swf:"application/x-shockwave-flash",tar:"application/x-tar",tex:"application/x-tex",tgz:"application/x-gzip",ttc:"application/x-font-ttf",ttf:"application/x-font-ttf",unityweb:"application/vnd.unity",woff:"application/x-font-woff",woff2:"application/x-font-woff",xml:"application/xml",xsl:"application/xml",zip:"application/zip"};function d(t){var e,i=t.split("#"),a=i[0],o=i[1];a=(i=a.split("?"))[0],e=i[1];var n=(i=a.split("/")).pop(),p=i.join("/");return-1==n.indexOf(".")&&(n=l(n,"index.html")),l(p,n+(e?"?"+e:"")+(o?"#"+o:""))}function l(t,e){return 0==t.length||t.endsWith("/")?t+e:0==e.length||e.startsWith("/")?t+e:t+"/"+e}function f(p,e){return new Promise(function(i,a){var t=e.objectStore("files"),o=e.objectStore("data"),n=t.index("path").get(p);n.onerror=a,n.onsuccess=function(){var t=n.result;if(t&&t.fid){var e=o.get(t.fid);e.onerror=a,e.onsuccess=function(){i(e.result)}}else a("Could not get file with path: "+p)}})}}();