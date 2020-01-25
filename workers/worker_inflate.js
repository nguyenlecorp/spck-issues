!function(i){"use strict";if(i.zWorkerInitialized)throw new Error("z-worker.js should be run only once");i.zWorkerInitialized=!0,addEventListener("message",(function(i){var e=i.data,n=e.type,a=e.sn,r=t[n];if(r)try{r(e)}catch(i){!function(i,t,e){var n={type:i,sn:t,error:_(e)};postMessage(n)}(n,a,i)}}));var t={importScripts:function(i){i.scripts&&i.scripts.length>0&&importScripts.apply(void 0,i.scripts);postMessage({type:"importScripts"})},newTask:n,append:r,flush:r},e={};function n(t){var n=i[t.codecClass],a=t.sn;if(e[a])throw Error("duplicated sn");e[a]={codec:new n(t.options),crcInput:"input"===t.crcType,crcOutput:"output"===t.crcType,crc:new l},postMessage({type:"newTask",sn:a})}var a=i.performance?i.performance.now.bind(i.performance):Date.now;function r(i){var t=i.sn,r=i.type,_=i.data,l=e[t];!l&&i.codecClass&&(n(i),l=e[t]);var s,d="append"===r,o=a();if(d)try{s=l.codec.append(_,(function(i){postMessage({type:"progress",sn:t,loaded:i})}))}catch(i){throw delete e[t],i}else delete e[t],s=l.codec.flush();var f=a()-o;o=a(),_&&l.crcInput&&l.crc.append(_),s&&l.crcOutput&&l.crc.append(s);var u=a()-o,b={type:r,sn:t,codecTime:f,crcTime:u},c=[];s&&(b.data=s,c.push(s.buffer)),d||!l.crcInput&&!l.crcOutput||(b.crc=l.crc.get());try{postMessage(b,c)}catch(i){postMessage(b)}}function _(i){return{message:i.message,stack:i.stack}}function l(){this.crc=-1}function s(){}l.prototype.append=function(i){for(var t=0|this.crc,e=this.table,n=0,a=0|i.length;n<a;n++)t=t>>>8^e[255&(t^i[n])];this.crc=t},l.prototype.get=function(){return~this.crc},l.prototype.table=function(){var i,t,e,n=[];for(i=0;i<256;i++){for(e=i,t=0;t<8;t++)1&e?e=e>>>1^3988292384:e>>>=1;n[i]=e}return n}(),i.NOOP=s,s.prototype.append=function(i,t){return i},s.prototype.flush=function(){}}(this),function(i){"use strict";var t=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],e=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],n=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],l=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function s(){var i,t,e,n,s,d;function o(i,t,a,r,_,l,o,f,u,b,c){var x,w,h,v,k,p,y,m,g,I,E,S,A,z,M;I=0,k=a;do{e[i[t+I]]++,I++,k--}while(0!==k);if(e[0]==a)return o[0]=-1,f[0]=0,0;for(m=f[0],p=1;p<=15&&0===e[p];p++);for(y=p,m<p&&(m=p),k=15;0!==k&&0===e[k];k--);for(h=k,m>k&&(m=k),f[0]=m,z=1<<p;p<k;p++,z<<=1)if((z-=e[p])<0)return-3;if((z-=e[k])<0)return-3;for(e[k]+=z,d[1]=p=0,I=1,A=2;0!=--k;)d[A]=p+=e[I],A++,I++;k=0,I=0;do{0!==(p=i[t+I])&&(c[d[p]++]=k),I++}while(++k<a);for(a=d[h],d[0]=k=0,I=0,v=-1,S=-m,s[0]=0,E=0,M=0;y<=h;y++)for(x=e[y];0!=x--;){for(;y>S+m;){if(v++,M=(M=h-(S+=m))>m?m:M,(w=1<<(p=y-S))>x+1&&(w-=x+1,A=y,p<M))for(;++p<M&&!((w<<=1)<=e[++A]);)w-=e[A];if(M=1<<p,b[0]+M>1440)return-3;s[v]=E=b[0],b[0]+=M,0!==v?(d[v]=k,n[0]=p,n[1]=m,p=k>>>S-m,n[2]=E-s[v-1]-p,u.set(n,3*(s[v-1]+p))):o[0]=E}for(n[1]=y-S,I>=a?n[0]=192:c[I]<r?(n[0]=c[I]<256?0:96,n[2]=c[I++]):(n[0]=l[c[I]-r]+16+64,n[2]=_[c[I++]-r]),w=1<<y-S,p=k>>>S;p<M;p+=w)u.set(n,3*(E+p));for(p=1<<y-1;0!=(k&p);p>>>=1)k^=p;for(k^=p,g=(1<<S)-1;(k&g)!=d[v];)v--,g=(1<<(S-=m))-1}return 0!==z&&1!=h?-5:0}function f(a){var r;for(i||(i=[],t=[],e=new Int32Array(16),n=[],s=new Int32Array(15),d=new Int32Array(16)),t.length<a&&(t=[]),r=0;r<a;r++)t[r]=0;for(r=0;r<16;r++)e[r]=0;for(r=0;r<3;r++)n[r]=0;s.set(e.subarray(0,15),0),d.set(e.subarray(0,16),0)}this.inflate_trees_bits=function(e,n,a,r,_){var l;return f(19),i[0]=0,-3==(l=o(e,0,19,19,null,null,a,n,r,i,t))?_.msg="oversubscribed dynamic bit lengths tree":-5!=l&&0!==n[0]||(_.msg="incomplete dynamic bit lengths tree",l=-3),l},this.inflate_trees_dynamic=function(e,n,s,d,u,b,c,x,w){var h;return f(288),i[0]=0,0!=(h=o(s,0,e,257,a,r,b,d,x,i,t))||0===d[0]?(-3==h?w.msg="oversubscribed literal/length tree":-4!=h&&(w.msg="incomplete literal/length tree",h=-3),h):(f(288),0!=(h=o(s,e,n,0,_,l,c,u,x,i,t))||0===u[0]&&e>257?(-3==h?w.msg="oversubscribed distance tree":-5==h?(w.msg="incomplete distance tree",h=-3):-4!=h&&(w.msg="empty distance tree with lengths",h=-3),h):0)}}s.inflate_trees_fixed=function(i,t,a,r){return i[0]=9,t[0]=5,a[0]=e,r[0]=n,0};function d(){var i,e,n,a,r=0,_=0,l=0,s=0,d=0,o=0,f=0,u=0,b=0,c=0;function x(i,e,n,a,r,_,l,s){var d,o,f,u,b,c,x,w,h,v,k,p,y,m,g,I;x=s.next_in_index,w=s.avail_in,b=l.bitb,c=l.bitk,v=(h=l.write)<l.read?l.read-h-1:l.end-h,k=t[i],p=t[e];do{for(;c<20;)w--,b|=(255&s.read_byte(x++))<<c,c+=8;if(0!==(u=(o=n)[I=3*((f=a)+(d=b&k))]))for(;;){if(b>>=o[I+1],c-=o[I+1],0!=(16&u)){for(u&=15,y=o[I+2]+(b&t[u]),b>>=u,c-=u;c<15;)w--,b|=(255&s.read_byte(x++))<<c,c+=8;for(u=(o=r)[I=3*((f=_)+(d=b&p))];;){if(b>>=o[I+1],c-=o[I+1],0!=(16&u)){for(u&=15;c<u;)w--,b|=(255&s.read_byte(x++))<<c,c+=8;if(m=o[I+2]+(b&t[u]),b>>=u,c-=u,v-=y,h>=m)h-(g=h-m)>0&&2>h-g?(l.window[h++]=l.window[g++],l.window[h++]=l.window[g++],y-=2):(l.window.set(l.window.subarray(g,g+2),h),h+=2,g+=2,y-=2);else{g=h-m;do{g+=l.end}while(g<0);if(y>(u=l.end-g)){if(y-=u,h-g>0&&u>h-g)do{l.window[h++]=l.window[g++]}while(0!=--u);else l.window.set(l.window.subarray(g,g+u),h),h+=u,g+=u,u=0;g=0}}if(h-g>0&&y>h-g)do{l.window[h++]=l.window[g++]}while(0!=--y);else l.window.set(l.window.subarray(g,g+y),h),h+=y,g+=y,y=0;break}if(0!=(64&u))return s.msg="invalid distance code",w+=y=c>>3<(y=s.avail_in-w)?c>>3:y,x-=y,c-=y<<3,l.bitb=b,l.bitk=c,s.avail_in=w,s.total_in+=x-s.next_in_index,s.next_in_index=x,l.write=h,-3;d+=o[I+2],u=o[I=3*(f+(d+=b&t[u]))]}break}if(0!=(64&u))return 0!=(32&u)?(w+=y=c>>3<(y=s.avail_in-w)?c>>3:y,x-=y,c-=y<<3,l.bitb=b,l.bitk=c,s.avail_in=w,s.total_in+=x-s.next_in_index,s.next_in_index=x,l.write=h,1):(s.msg="invalid literal/length code",w+=y=c>>3<(y=s.avail_in-w)?c>>3:y,x-=y,c-=y<<3,l.bitb=b,l.bitk=c,s.avail_in=w,s.total_in+=x-s.next_in_index,s.next_in_index=x,l.write=h,-3);if(d+=o[I+2],0===(u=o[I=3*(f+(d+=b&t[u]))])){b>>=o[I+1],c-=o[I+1],l.window[h++]=o[I+2],v--;break}}else b>>=o[I+1],c-=o[I+1],l.window[h++]=o[I+2],v--}while(v>=258&&w>=10);return w+=y=c>>3<(y=s.avail_in-w)?c>>3:y,x-=y,c-=y<<3,l.bitb=b,l.bitk=c,s.avail_in=w,s.total_in+=x-s.next_in_index,s.next_in_index=x,l.write=h,0}this.init=function(t,r,_,l,s,d){i=0,f=t,u=r,n=_,b=l,a=s,c=d,e=null},this.proc=function(w,h,v){var k,p,y,m,g,I,E,S=0,A=0,z=0;for(z=h.next_in_index,m=h.avail_in,S=w.bitb,A=w.bitk,I=(g=w.write)<w.read?w.read-g-1:w.end-g;;)switch(i){case 0:if(I>=258&&m>=10&&(w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,v=x(f,u,n,b,a,c,w,h),z=h.next_in_index,m=h.avail_in,S=w.bitb,A=w.bitk,I=(g=w.write)<w.read?w.read-g-1:w.end-g,0!=v)){i=1==v?7:9;break}l=f,e=n,_=b,i=1;case 1:for(k=l;A<k;){if(0===m)return w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);v=0,m--,S|=(255&h.read_byte(z++))<<A,A+=8}if(S>>>=e[(p=3*(_+(S&t[k])))+1],A-=e[p+1],0===(y=e[p])){s=e[p+2],i=6;break}if(0!=(16&y)){d=15&y,r=e[p+2],i=2;break}if(0==(64&y)){l=y,_=p/3+e[p+2];break}if(0!=(32&y)){i=7;break}return i=9,h.msg="invalid literal/length code",v=-3,w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);case 2:for(k=d;A<k;){if(0===m)return w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);v=0,m--,S|=(255&h.read_byte(z++))<<A,A+=8}r+=S&t[k],S>>=k,A-=k,l=u,e=a,_=c,i=3;case 3:for(k=l;A<k;){if(0===m)return w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);v=0,m--,S|=(255&h.read_byte(z++))<<A,A+=8}if(S>>=e[(p=3*(_+(S&t[k])))+1],A-=e[p+1],0!=(16&(y=e[p]))){d=15&y,o=e[p+2],i=4;break}if(0==(64&y)){l=y,_=p/3+e[p+2];break}return i=9,h.msg="invalid distance code",v=-3,w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);case 4:for(k=d;A<k;){if(0===m)return w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);v=0,m--,S|=(255&h.read_byte(z++))<<A,A+=8}o+=S&t[k],S>>=k,A-=k,i=5;case 5:for(E=g-o;E<0;)E+=w.end;for(;0!==r;){if(0===I&&(g==w.end&&0!==w.read&&(I=(g=0)<w.read?w.read-g-1:w.end-g),0===I&&(w.write=g,v=w.inflate_flush(h,v),I=(g=w.write)<w.read?w.read-g-1:w.end-g,g==w.end&&0!==w.read&&(I=(g=0)<w.read?w.read-g-1:w.end-g),0===I)))return w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);w.window[g++]=w.window[E++],I--,E==w.end&&(E=0),r--}i=0;break;case 6:if(0===I&&(g==w.end&&0!==w.read&&(I=(g=0)<w.read?w.read-g-1:w.end-g),0===I&&(w.write=g,v=w.inflate_flush(h,v),I=(g=w.write)<w.read?w.read-g-1:w.end-g,g==w.end&&0!==w.read&&(I=(g=0)<w.read?w.read-g-1:w.end-g),0===I)))return w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);v=0,w.window[g++]=s,I--,i=0;break;case 7:if(A>7&&(A-=8,m++,z--),w.write=g,v=w.inflate_flush(h,v),I=(g=w.write)<w.read?w.read-g-1:w.end-g,w.read!=w.write)return w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);i=8;case 8:return v=1,w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);case 9:return v=-3,w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v);default:return v=-2,w.bitb=S,w.bitk=A,h.avail_in=m,h.total_in+=z-h.next_in_index,h.next_in_index=z,w.write=g,w.inflate_flush(h,v)}},this.free=function(){}}var o=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function f(i,e){var n,a=this,r=0,_=0,l=0,f=0,u=[0],b=[0],c=new d,x=0,w=new Int32Array(4320),h=new s;a.bitk=0,a.bitb=0,a.window=new Uint8Array(e),a.end=e,a.read=0,a.write=0,a.reset=function(i,t){t&&(t[0]=0),6==r&&c.free(i),r=0,a.bitk=0,a.bitb=0,a.read=a.write=0},a.reset(i,null),a.inflate_flush=function(i,t){var e,n,r;return n=i.next_out_index,(e=((r=a.read)<=a.write?a.write:a.end)-r)>i.avail_out&&(e=i.avail_out),0!==e&&-5==t&&(t=0),i.avail_out-=e,i.total_out+=e,i.next_out.set(a.window.subarray(r,r+e),n),n+=e,(r+=e)==a.end&&(r=0,a.write==a.end&&(a.write=0),(e=a.write-r)>i.avail_out&&(e=i.avail_out),0!==e&&-5==t&&(t=0),i.avail_out-=e,i.total_out+=e,i.next_out.set(a.window.subarray(r,r+e),n),n+=e,r+=e),i.next_out_index=n,a.read=r,t},a.proc=function(i,e){var d,v,k,p,y,m,g,I;for(p=i.next_in_index,y=i.avail_in,v=a.bitb,k=a.bitk,g=(m=a.write)<a.read?a.read-m-1:a.end-m;;)switch(r){case 0:for(;k<3;){if(0===y)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);e=0,y--,v|=(255&i.read_byte(p++))<<k,k+=8}switch(x=1&(d=7&v),d>>>1){case 0:v>>>=3,v>>>=d=7&(k-=3),k-=d,r=1;break;case 1:var E=[],S=[],A=[[]],z=[[]];s.inflate_trees_fixed(E,S,A,z),c.init(E[0],S[0],A[0],0,z[0],0),v>>>=3,k-=3,r=6;break;case 2:v>>>=3,k-=3,r=3;break;case 3:return v>>>=3,k-=3,r=9,i.msg="invalid block type",e=-3,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e)}break;case 1:for(;k<32;){if(0===y)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);e=0,y--,v|=(255&i.read_byte(p++))<<k,k+=8}if((~v>>>16&65535)!=(65535&v))return r=9,i.msg="invalid stored block lengths",e=-3,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);_=65535&v,v=k=0,r=0!==_?2:0!==x?7:0;break;case 2:if(0===y)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);if(0===g&&(m==a.end&&0!==a.read&&(g=(m=0)<a.read?a.read-m-1:a.end-m),0===g&&(a.write=m,e=a.inflate_flush(i,e),g=(m=a.write)<a.read?a.read-m-1:a.end-m,m==a.end&&0!==a.read&&(g=(m=0)<a.read?a.read-m-1:a.end-m),0===g)))return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);if(e=0,(d=_)>y&&(d=y),d>g&&(d=g),a.window.set(i.read_buf(p,d),m),p+=d,y-=d,m+=d,g-=d,0!=(_-=d))break;r=0!==x?7:0;break;case 3:for(;k<14;){if(0===y)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);e=0,y--,v|=(255&i.read_byte(p++))<<k,k+=8}if(l=d=16383&v,(31&d)>29||(d>>5&31)>29)return r=9,i.msg="too many length or distance symbols",e=-3,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);if(d=258+(31&d)+(d>>5&31),!n||n.length<d)n=[];else for(I=0;I<d;I++)n[I]=0;v>>>=14,k-=14,f=0,r=4;case 4:for(;f<4+(l>>>10);){for(;k<3;){if(0===y)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);e=0,y--,v|=(255&i.read_byte(p++))<<k,k+=8}n[o[f++]]=7&v,v>>>=3,k-=3}for(;f<19;)n[o[f++]]=0;if(u[0]=7,0!=(d=h.inflate_trees_bits(n,u,b,w,i)))return-3==(e=d)&&(n=null,r=9),a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);f=0,r=5;case 5:for(;!(f>=258+(31&(d=l))+(d>>5&31));){var M,T;for(d=u[0];k<d;){if(0===y)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);e=0,y--,v|=(255&i.read_byte(p++))<<k,k+=8}if(d=w[3*(b[0]+(v&t[d]))+1],(T=w[3*(b[0]+(v&t[d]))+2])<16)v>>>=d,k-=d,n[f++]=T;else{for(I=18==T?7:T-14,M=18==T?11:3;k<d+I;){if(0===y)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);e=0,y--,v|=(255&i.read_byte(p++))<<k,k+=8}if(k-=d,M+=(v>>>=d)&t[I],v>>>=I,k-=I,(I=f)+M>258+(31&(d=l))+(d>>5&31)||16==T&&I<1)return n=null,r=9,i.msg="invalid bit length repeat",e=-3,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);T=16==T?n[I-1]:0;do{n[I++]=T}while(0!=--M);f=I}}b[0]=-1;var O=[],U=[],D=[],j=[];if(O[0]=9,U[0]=6,d=l,0!=(d=h.inflate_trees_dynamic(257+(31&d),1+(d>>5&31),n,O,U,D,j,w,i)))return-3==d&&(n=null,r=9),e=d,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);c.init(O[0],U[0],w,D[0],w,j[0]),r=6;case 6:if(a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,1!=(e=c.proc(a,i,e)))return a.inflate_flush(i,e);if(e=0,c.free(i),p=i.next_in_index,y=i.avail_in,v=a.bitb,k=a.bitk,g=(m=a.write)<a.read?a.read-m-1:a.end-m,0===x){r=0;break}r=7;case 7:if(a.write=m,e=a.inflate_flush(i,e),g=(m=a.write)<a.read?a.read-m-1:a.end-m,a.read!=a.write)return a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);r=8;case 8:return e=1,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);case 9:return e=-3,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e);default:return e=-2,a.bitb=v,a.bitk=k,i.avail_in=y,i.total_in+=p-i.next_in_index,i.next_in_index=p,a.write=m,a.inflate_flush(i,e)}},a.free=function(i){a.reset(i,null),a.window=null,w=null},a.set_dictionary=function(i,t,e){a.window.set(i.subarray(t,t+e),0),a.read=a.write=e},a.sync_point=function(){return 1==r?1:0}}var u=[0,0,255,255];function b(){var i=this;function t(i){return i&&i.istate?(i.total_in=i.total_out=0,i.msg=null,i.istate.mode=7,i.istate.blocks.reset(i,null),0):-2}i.mode=0,i.method=0,i.was=[0],i.need=0,i.marker=0,i.wbits=0,i.inflateEnd=function(t){return i.blocks&&i.blocks.free(t),i.blocks=null,0},i.inflateInit=function(e,n){return e.msg=null,i.blocks=null,n<8||n>15?(i.inflateEnd(e),-2):(i.wbits=n,e.istate.blocks=new f(e,1<<n),t(e),0)},i.inflate=function(i,t){var e,n;if(!i||!i.istate||!i.next_in)return-2;for(t=4==t?-5:0,e=-5;;)switch(i.istate.mode){case 0:if(0===i.avail_in)return e;if(e=t,i.avail_in--,i.total_in++,8!=(15&(i.istate.method=i.read_byte(i.next_in_index++)))){i.istate.mode=13,i.msg="unknown compression method",i.istate.marker=5;break}if(8+(i.istate.method>>4)>i.istate.wbits){i.istate.mode=13,i.msg="invalid window size",i.istate.marker=5;break}i.istate.mode=1;case 1:if(0===i.avail_in)return e;if(e=t,i.avail_in--,i.total_in++,n=255&i.read_byte(i.next_in_index++),((i.istate.method<<8)+n)%31!=0){i.istate.mode=13,i.msg="incorrect header check",i.istate.marker=5;break}if(0==(32&n)){i.istate.mode=7;break}i.istate.mode=2;case 2:if(0===i.avail_in)return e;e=t,i.avail_in--,i.total_in++,i.istate.need=(255&i.read_byte(i.next_in_index++))<<24&4278190080,i.istate.mode=3;case 3:if(0===i.avail_in)return e;e=t,i.avail_in--,i.total_in++,i.istate.need+=(255&i.read_byte(i.next_in_index++))<<16&16711680,i.istate.mode=4;case 4:if(0===i.avail_in)return e;e=t,i.avail_in--,i.total_in++,i.istate.need+=(255&i.read_byte(i.next_in_index++))<<8&65280,i.istate.mode=5;case 5:return 0===i.avail_in?e:(e=t,i.avail_in--,i.total_in++,i.istate.need+=255&i.read_byte(i.next_in_index++),i.istate.mode=6,2);case 6:return i.istate.mode=13,i.msg="need dictionary",i.istate.marker=0,-2;case 7:if(-3==(e=i.istate.blocks.proc(i,e))){i.istate.mode=13,i.istate.marker=0;break}if(0==e&&(e=t),1!=e)return e;e=t,i.istate.blocks.reset(i,i.istate.was),i.istate.mode=12;case 12:return 1;case 13:return-3;default:return-2}},i.inflateSetDictionary=function(i,t,e){var n=0,a=e;return i&&i.istate&&6==i.istate.mode?(a>=1<<i.istate.wbits&&(n=e-(a=(1<<i.istate.wbits)-1)),i.istate.blocks.set_dictionary(t,n,a),i.istate.mode=7,0):-2},i.inflateSync=function(i){var e,n,a,r,_;if(!i||!i.istate)return-2;if(13!=i.istate.mode&&(i.istate.mode=13,i.istate.marker=0),0===(e=i.avail_in))return-5;for(n=i.next_in_index,a=i.istate.marker;0!==e&&a<4;)i.read_byte(n)==u[a]?a++:a=0!==i.read_byte(n)?0:4-a,n++,e--;return i.total_in+=n-i.next_in_index,i.next_in_index=n,i.avail_in=e,i.istate.marker=a,4!=a?-3:(r=i.total_in,_=i.total_out,t(i),i.total_in=r,i.total_out=_,i.istate.mode=7,0)},i.inflateSyncPoint=function(i){return i&&i.istate&&i.istate.blocks?i.istate.blocks.sync_point():-2}}function c(){}c.prototype={inflateInit:function(i){return this.istate=new b,i||(i=15),this.istate.inflateInit(this,i)},inflate:function(i){return this.istate?this.istate.inflate(this,i):-2},inflateEnd:function(){if(!this.istate)return-2;var i=this.istate.inflateEnd(this);return this.istate=null,i},inflateSync:function(){return this.istate?this.istate.inflateSync(this):-2},inflateSetDictionary:function(i,t){return this.istate?this.istate.inflateSetDictionary(this,i,t):-2},read_byte:function(i){return this.next_in.subarray(i,i+1)[0]},read_buf:function(i,t){return this.next_in.subarray(i,i+t)}};var x=i.zip||i;x.Inflater=x._jzlib_Inflater=function(){var i=new c,t=new Uint8Array(512),e=!1;i.inflateInit(),i.next_out=t,this.append=function(n,a){var r,_,l=[],s=0,d=0,o=0;if(0!==n.length){i.next_in_index=0,i.next_in=n,i.avail_in=n.length;do{if(i.next_out_index=0,i.avail_out=512,0!==i.avail_in||e||(i.next_in_index=0,e=!0),r=i.inflate(0),e&&-5===r){if(0!==i.avail_in)throw new Error("inflating: bad input")}else if(0!==r&&1!==r)throw new Error("inflating: "+i.msg);if((e||1===r)&&i.avail_in===n.length)throw new Error("inflating: bad input");i.next_out_index&&(512===i.next_out_index?l.push(new Uint8Array(t)):l.push(new Uint8Array(t.subarray(0,i.next_out_index)))),o+=i.next_out_index,a&&i.next_in_index>0&&i.next_in_index!=s&&(a(i.next_in_index),s=i.next_in_index)}while(i.avail_in>0||0===i.avail_out);return _=new Uint8Array(o),l.forEach((function(i){_.set(i,d),d+=i.length})),_}},this.flush=function(){i.inflateEnd()}}}(this);