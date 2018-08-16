function normalizeUrlPath(t){var i,e=t.split("#"),a=e[0],o=e[1];a=(e=a.split("?"))[0],i=e[1];var n=(e=a.split("/")).pop(),p=e.join("/");return-1==n.indexOf(".")&&(n=join(n,"index.html")),join(p,n+(i?"?"+i:"")+(o?"#"+o:""))}function join(t,i){return 0==t.length||t.endsWith("/")?t+i:0==i.length||i.startsWith("/")?t+i:t+"/"+i}function pathExtension(t){return t.split("#").shift().split("?").shift().split(".").pop()}function readFileData(t){return new Promise(function(i,e){var a=indexedDB.open(DB_NAME);a.onerror=e,a.onsuccess=function(){var o=a.result,n=o.transaction(["files","data"],"readonly"),p=n.objectStore("files"),s=n.objectStore("data"),m=p.index("path").get(t);m.onerror=e,m.onsuccess=function(){var a=m.result;if(a&&a.fid){var o=s.get(a.fid);o.onerror=e,o.onsuccess=function(){i(o.result)}}else e("Could not get file with path: "+t)},n.oncomplete=function(){o.close()}}})}function b64toBlob(t,i,e){i=i||"",e=e||512;for(var a=atob(t),o=[],n=0;n<a.length;n+=e){for(var p=a.slice(n,n+e),s=new Array(p.length),m=0;m<p.length;m++)s[m]=p.charCodeAt(m);var r=new Uint8Array(s);o.push(r)}return new Blob(o,{type:i})}var DB_NAME="ProjectStore",RUNTIME="runtime-z7ua95iukd1lwz2eiov8cl3di",PRECACHE="precache-z7ua95iukd1lwz2eiov8cl3di",PRECACHE_URLS=[],projectPath;self.addEventListener("message",function(t){projectPath=t.data.projectPath,t.ports[0].postMessage({error:null})}),self.addEventListener("install",function(t){t.waitUntil(caches.open(PRECACHE).then(function(t){t.addAll(PRECACHE_URLS)}).then(self.skipWaiting()))}),self.addEventListener("activate",function(t){var i=[PRECACHE,RUNTIME];t.waitUntil(caches.keys().then(function(t){return t.filter(function(t){return-1==i.indexOf(t)})}).then(function(t){return Promise.all(t.map(function(t){return caches.delete(t)}))}).then(function(){self.clients.claim()}))}),self.addEventListener("fetch",function(t){var i=self.location.origin,e=join(i,"run"),a=join(i,"api"),o=t.request.url;if(o.startsWith(e)){var n=normalizeUrlPath(join(projectPath,o.substring(e.length)));t.respondWith(readFileData(n).then(function(t){var i="base64"==t.encoding?b64toBlob(t.text):t.text;return new Response(i,{status:200,statusText:"OK",headers:{"Content-Type":MIME_TYPES[pathExtension(n)]||"text/plain"}})}))}else o.startsWith(i)&&!o.startsWith(a)&&t.respondWith(caches.match(t.request).then(function(i){return i||caches.open(RUNTIME).then(function(i){return fetch(t.request).then(function(e){return 200==e.status?i.put(t.request,e.clone()).then(function(){return e}):e})})}))});var MIME_TYPES={"3g2":"video/3gpp2","3gp":"video/3gpp",avi:"video/x-msvideo",flv:"video/x-flv",h261:"video/h261",h263:"video/h263",h264:"video/h264",jpgm:"video/jpm",jpgv:"video/jpeg",jpm:"video/jpm",m1v:"video/mpeg",m2v:"video/mpeg",m4u:"video/vnd.mpegurl",m4v:"video/mp4",mj2:"video/mj2",mjp2:"video/mj2",mk3d:"video/x-matroska",mks:"video/x-matroska",mkv:"video/x-matroska",mov:"video/quicktime",mp4:"video/mp4",mp4v:"video/mp4",mpe:"video/mpeg",mpeg:"video/mpeg",mpg:"video/mpeg",mpg4:"video/mp4",ogv:"video/ogg",qt:"video/quicktime",smv:"video/x-smv",webm:"video/webm",wm:"video/x-ms-wm",wmv:"video/x-ms-wmv",wmx:"video/x-ms-wmx",aac:"audio/x-aac",adp:"audio/adpcm",au:"audio/basic",flac:"audio/x-flac",kar:"audio/midi",m2a:"audio/mpeg",m3a:"audio/mpeg",m3u:"audio/x-mpegurl",m3u8:"application/vnd.apple.mpegurl",m4a:"audio/mp4",mid:"audio/midi",midi:"audio/midi",mka:"audio/x-matroska",mp2:"audio/mpeg",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4a:"audio/mp4",mpga:"audio/mpeg",oga:"audio/ogg",ogg:"audio/ogg",rmi:"audio/midi",s3m:"audio/s3m",snd:"audio/basic",spx:"audio/ogg",wav:"audio/x-wav",weba:"audio/webm",wma:"audio/x-ms-wma",xm:"audio/xm",bmp:"image/bmp",gif:"image/gif",ico:"image/x-icon",jpeg:"image/jpeg",jpg:"image/jpeg",jpe:"image/jpeg",png:"image/png",psd:"image/vnd.adobe.photoshop",svg:"image/svg+xml",svgz:"image/svg+xml",tga:"image/x-tga",tif:"image/tiff",tiff:"image/tiff",webp:"image/webp",css:"text/css",csv:"text/csv",htm:"text/html",html:"text/html",js:"text/javascript",sass:"text/x-sass",scss:"text/x-scss",styl:"text/x-styl",txt:"text/plain",yaml:"text/yaml",yml:"text/yaml",md:"text/markdown",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gz:"application/x-gzip",hdf:"application/x-hdf",json:"application/json",jsonml:"application/jsonml+json",latex:"application/x-latex",mp4s:"application/mp4",ogx:"application/ogg",otf:"application/x-font-otf",pdf:"application/pdf",ps:"application/postscript",psf:"application/x-font-linux-psf",rar:"application/x-rar-compressed",snf:"application/x-font-snf",swa:"application/x-director",swf:"application/x-shockwave-flash",tar:"application/x-tar",tex:"application/x-tex",tgz:"application/x-gzip",ttc:"application/x-font-ttf",ttf:"application/x-font-ttf",unityweb:"application/vnd.unity",woff:"application/x-font-woff",woff2:"application/x-font-woff",xml:"application/xml",xsl:"application/xml",zip:"application/zip"};