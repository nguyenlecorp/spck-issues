function normalizeUrlPath(t){var e,i=t.split("#"),o=i[0],a=i[1];o=(i=o.split("?"))[0],e=i[1];var n=(i=o.split("/")).pop(),p=i.join("/");return-1==n.indexOf(".")&&(n=join(n,"index.html")),join(p,n+(e?"?"+e:"")+(a?"#"+a:""))}function join(t,e){return 0==t.length||t.endsWith("/")?t+e:0==e.length||e.startsWith("/")?t+e:t+"/"+e}function pathExtension(t){return t.split("#").shift().split("?").shift().split(".").pop()}function newTransaction(t){return new Promise(function(e,i){var o=indexedDB.open(DB_NAME);o.onerror=i,o.onsuccess=function(){var i=o.result,a=i.transaction(t,"readonly");e(a),a.oncomplete=function(){i.close()}}})}function readProjectPath(t){return new Promise(function(e,i){var o=t.objectStore("meta"),a=t.objectStore("projects"),n=o.get("currentProjectId");n.onerror=i,n.onsuccess=function(){var t=n.result;if(t&&t.value){var o=a.get(t.value);o.onerror=i,o.onsuccess=function(){var t=o.result,i=t.ref?t.ref.split("/").pop():null,a=i?t.pid+":"+i:t.pid;e(a)}}else i("Could not get currentProjectId.")}})}function readFileData(t,e){return new Promise(function(i,o){var a=e.objectStore("files"),n=e.objectStore("data"),p=a.index("path").get(t);p.onerror=o,p.onsuccess=function(){var e=p.result;if(e&&e.fid){var a=n.get(e.fid);a.onerror=o,a.onsuccess=function(){i(a.result)}}else o("Could not get file with path: "+t)}})}function b64toBlob(t,e,i){e=e||"",i=i||512;for(var o=atob(t),a=[],n=0;n<o.length;n+=i){for(var p=o.slice(n,n+i),s=new Array(p.length),r=0;r<p.length;r++)s[r]=p.charCodeAt(r);var m=new Uint8Array(s);a.push(m)}return new Blob(a,{type:e})}var DB_NAME="ProjectStore",RUNTIME="runtime-nseli55y9nl2x9gnijj0jm7vi";self.addEventListener("install",function(t){t.waitUntil(self.skipWaiting())}),self.addEventListener("activate",function(t){var e=[RUNTIME];t.waitUntil(caches.keys().then(function(t){return t.filter(function(t){return-1==e.indexOf(t)})}).then(function(t){return Promise.all(t.map(function(t){return caches.delete(t)}))}).then(function(){self.clients.claim()}))}),self.addEventListener("fetch",function(t){var e=self.location.origin,i=join(e,"run"),o=join(e,"api"),a=t.request.url;if(a.startsWith(i)){var n,p,s=a.substring(i.length);s.startsWith("-")?(n=s.slice(1,s.indexOf("/")),p=normalizeUrlPath(s.slice(s.indexOf("/")))):p=normalizeUrlPath(s),t.respondWith(newTransaction(["meta","projects","files","data"]).then(function(t){return n?readFileData(join(n,p),t):readProjectPath(t).then(function(e){return readFileData(join(e,p),t)})}).then(function(t){var e="base64"==(t=t||{encoding:"utf8",text:""}).encoding?b64toBlob(t.text):t.text;return new Response(e,{status:200,statusText:"OK",headers:{"Content-Type":MIME_TYPES[pathExtension(p)]||"text/plain"}})},function(){return new Response("",{status:404,statusText:"NOT FOUND"})}))}else a.startsWith(e)&&!a.startsWith(o)&&t.respondWith(caches.match(t.request).then(function(e){return e||caches.open(RUNTIME).then(function(e){return fetch(t.request).then(function(i){return 200==i.status?e.put(t.request,i.clone()).then(function(){return i}):i})})}))});var MIME_TYPES={"3g2":"video/3gpp2","3gp":"video/3gpp",avi:"video/x-msvideo",flv:"video/x-flv",h261:"video/h261",h263:"video/h263",h264:"video/h264",jpgm:"video/jpm",jpgv:"video/jpeg",jpm:"video/jpm",m1v:"video/mpeg",m2v:"video/mpeg",m4u:"video/vnd.mpegurl",m4v:"video/mp4",mj2:"video/mj2",mjp2:"video/mj2",mk3d:"video/x-matroska",mks:"video/x-matroska",mkv:"video/x-matroska",mov:"video/quicktime",mp4:"video/mp4",mp4v:"video/mp4",mpe:"video/mpeg",mpeg:"video/mpeg",mpg:"video/mpeg",mpg4:"video/mp4",ogv:"video/ogg",qt:"video/quicktime",smv:"video/x-smv",webm:"video/webm",wm:"video/x-ms-wm",wmv:"video/x-ms-wmv",wmx:"video/x-ms-wmx",aac:"audio/x-aac",adp:"audio/adpcm",au:"audio/basic",flac:"audio/x-flac",kar:"audio/midi",m2a:"audio/mpeg",m3a:"audio/mpeg",m3u:"audio/x-mpegurl",m3u8:"application/vnd.apple.mpegurl",m4a:"audio/mp4",mid:"audio/midi",midi:"audio/midi",mka:"audio/x-matroska",mp2:"audio/mpeg",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4a:"audio/mp4",mpga:"audio/mpeg",oga:"audio/ogg",ogg:"audio/ogg",rmi:"audio/midi",s3m:"audio/s3m",snd:"audio/basic",spx:"audio/ogg",wav:"audio/x-wav",weba:"audio/webm",wma:"audio/x-ms-wma",xm:"audio/xm",bmp:"image/bmp",gif:"image/gif",ico:"image/x-icon",jpeg:"image/jpeg",jpg:"image/jpeg",jpe:"image/jpeg",png:"image/png",psd:"image/vnd.adobe.photoshop",svg:"image/svg+xml",svgz:"image/svg+xml",tga:"image/x-tga",tif:"image/tiff",tiff:"image/tiff",webp:"image/webp",css:"text/css",csv:"text/csv",htm:"text/html",html:"text/html",js:"text/javascript",sass:"text/x-sass",scss:"text/x-scss",styl:"text/x-styl",txt:"text/plain",yaml:"text/yaml",yml:"text/yaml",md:"text/markdown",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gz:"application/x-gzip",hdf:"application/x-hdf",json:"application/json",jsonml:"application/jsonml+json",latex:"application/x-latex",mp4s:"application/mp4",ogx:"application/ogg",otf:"application/x-font-otf",pdf:"application/pdf",ps:"application/postscript",psf:"application/x-font-linux-psf",rar:"application/x-rar-compressed",snf:"application/x-font-snf",swa:"application/x-director",swf:"application/x-shockwave-flash",tar:"application/x-tar",tex:"application/x-tex",tgz:"application/x-gzip",ttc:"application/x-font-ttf",ttf:"application/x-font-ttf",unityweb:"application/vnd.unity",woff:"application/x-font-woff",woff2:"application/x-font-woff",xml:"application/xml",xsl:"application/xml",zip:"application/zip"};