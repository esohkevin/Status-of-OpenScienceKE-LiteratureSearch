(function(){var e=window.top;PubGrade=e.window.PubGrade||{};googletag=e.window.googletag||{};googletag.cmd=googletag.cmd||[];PubGrade.timeout=1000;PubGrade.finished=!1;PubGrade.fired=!1;PubGrade.context=PubGrade.context||{'pl':'spl','plid':'4','puid':'4','pid':n(),'purl':d(),'journal':o(),'dfpadv':4410569887,'scrh':screen.height||'','scrw':screen.width||'','pvid':(new Date().getTime()+Math.random().toString().substr(2,8)+n()).replace(/[^a-z0-9]/gmi,'').substr(0,100)};PubGrade.zones=PubGrade.zones||[{'i':301,'e':'div-gpt-ad-MPU1','f':1},{'i':153,'e':'div-gpt-ad-LB1','f':1}];PubGrade.fireEvent=function(e){if(typeof window.CustomEvent==='function'){var t=new CustomEvent(e)}
else{var t=document.createEvent('CustomEvent');t.initCustomEvent(e,!1,!1,null)};document.dispatchEvent(t)};PubGrade.firePbgrdFinished=function(){if(PubGrade.fired){return};PubGrade.fireEvent('pbgrdFinished');PubGrade.fired=!0};PubGrade.loadTargeting=function(r){var d=[];for(var a in r){var o=r[a];d.push(o.i)};var n='https://delivery.pbgrd.com/network/adjs.php';n+='?platform='+encodeURIComponent(PubGrade.context.pl);n+='&zones='+d.join();n+='&pageid='+encodeURIComponent(PubGrade.context.pid);n+='&journal='+encodeURIComponent(PubGrade.context.journal);n+='&outerheight='+PubGrade.context.scrh;n+='&outerwidth='+PubGrade.context.scrw;n+='&location='+encodeURIComponent(e.window.location);if(window.XMLHttpRequest){var t=new XMLHttpRequest()}
else if(window.XDomainRequest){var t=new XDomainRequest()}
else{var t=new ActiveXObject('Microsoft.XMLHTTP')};t.open('GET',n,!0);t.timeout=PubGrade.timeout;t.onload=function(){try{var e=JSON.parse(t.responseText);if(e.dfp){PubGrade.dfp=e.dfp;googletag.cmd.push(function(){for(var t in e.dfp){googletag.pubads().setTargeting(t,e.dfp[t])}})}}catch(n){};if(PubGrade.dfp===undefined||PubGrade.dfp.pg_camp===undefined){googletag.cmd.push(function(){googletag.pubads().setTargeting('adid','pubgrade_disabled')})};PubGrade.finished=!0;PubGrade.firePbgrdFinished()};t.ontimeout=t.onerror=function(){PubGrade.finished=!0;googletag.cmd.push(function(){googletag.pubads().setTargeting('adid','pubgrade_disabled')});PubGrade.firePbgrdFinished()};t.send(null);PubGrade.finished=!0};PubGrade.fireExcessPixel=function(t){var e='https://delivery.pbgrd.com/network/logger.php',r=Math.random().toString().substr(2,8);e+='?cb='+r;e+='&pgpid='+encodeURIComponent(PubGrade.context.pid);e+='&pgiid='+(new Date().getTime()+r+t.i+PubGrade.context.pid).replace(/[^a-z0-9]/gmi,'').substr(0,100);e+='&pgpro='+PubGrade.context.plid;e+='&pgpub='+PubGrade.context.puid;e+='&pgzid='+t.i;e+='&pgscrh='+PubGrade.context.scrh;e+='&pgscrw='+PubGrade.context.scrw;e+='&pgjour='+encodeURIComponent(PubGrade.context.journal.toLowerCase());e+='&exc=1';var n=document.createElement('img');document.body.appendChild(n);n.src=e;t.f=!1};googletag.cmd.push(function(){googletag.pubads().addEventListener('slotRenderEnded',function(e){if(e&&e.slot){if(!e.advertiserId||e.advertiserId!==PubGrade.context.dfpadv){var d=e.slot.getSlotElementId();for(var r in t){var n=t[r];if(n.f&&n.e===d){PubGrade.fireExcessPixel(n);return}}}};return})});var t=PubGrade.zones.filter(function(e){if(e.a!==undefined){return e.a()};return!0});if(!PubGrade.fired){PubGrade.loadTargeting(t)};function d(){return e.window.location.toString().replace(/\?/g,'þþ').replace(/\&/g,'þ').replace(/\=/g,'|').replace(/[^A-Za-z0-9\-_\.\/\:\þ\|]+/g,'')};function n(){return r('name','citation_doi')};function o(){return r('name','citation_journal_title')};function r(t,d){var r=e.document.getElementsByTagName('meta');for(var n=0;n<r.length;n++){if(r[n].getAttribute(t)===d){return r[n].getAttribute('content')}};return''};PubGrade.libraryLoaded=!0})();