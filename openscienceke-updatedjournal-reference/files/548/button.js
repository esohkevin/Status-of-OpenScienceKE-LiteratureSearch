__twttrll([2],{119:function(a,t,e){var r=e(93);a.exports=r.build([e(120)])},120:function(a,t,e){function r(a){return"large"===a?"l":"m"}function s(a){a.params({screenName:{required:!0},lang:{required:!0,transform:g.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:r},showScreenName:{fallback:!0},showCount:{fallback:!0},partner:{fallback:l(o.val,o,"partner")},count:{},preview:{}}),a.define("getUrlParams",function(){return h.compact({id:this.id,lang:this.params.lang,size:this.params.size,screen_name:this.params.screenName,show_count:"none"!==this.params.count&&this.params.showCount,show_screen_name:this.params.showScreenName,preview:this.params.preview,partner:this.params.partner,dnt:u.enabled(),time:+new Date})}),a.around("widgetDataAttributes",function(a){return h.aug({"screen-name":this.params.screenName},a())}),a.around("scribeNamespace",function(a){return h.aug(a(),{page:"button",section:"follow"})}),a.define("scribeImpression",function(){this.scribe({action:"impression"},{language:this.params.lang,message:[this.params.size,"none"===this.params.count?"nocount":"withcount"].join(":")+":"})}),a.override("render",function(){var a=m(d,{lang:this.params.lang}),t=c.encode(this.getUrlParams()),e=p.resourceBaseUrl+a+"#"+t;return this.scribeImpression(),n.all([this.sandbox.setTitle(f),this.sandbox.addClass(b),this.sandbox.loadDocument(e)])})}var n=e(2),i=e(93),o=e(42),u=e(47),m=e(121),h=e(12),c=e(26),l=e(15),p=e(77),g=e(99),d=p.followButtonHtmlPath,f="Twitter Follow Button",b="twitter-follow-button";a.exports=i.couple(e(106),e(122),s)},121:function(a,t){function e(a,t){return a.replace(r,function(a,e){return void 0!==t[e]?t[e]:a})}var r=/\{\{([\w_]+)\}\}/g;a.exports=e},242:function(a,t,e){var r=e(93);a.exports=r.build([e(243)])},243:function(a,t,e){function r(a){return"large"===a?"l":"m"}function s(a){return d.contains(B,a)}function n(a){return b.hashTag(a,!1)}function i(a){var t=/\+/.test(a)&&!/ /.test(a);return t?a.replace(/\+/g," "):a}function o(a){a.params({lang:{required:!0,transform:N.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:r},type:{fallback:"share",validate:s},text:{transform:i},screenName:{transform:b.screenName},buttonHashtag:{transform:n},partner:{fallback:v(c.val,c,"partner")},via:{},related:{},hashtags:{},url:{}}),a.define("getUrlParams",function(){var a=this.params.text,t=this.params.url,e=this.params.via,r=this.params.related,s=g.getScreenNameFromPage();return"share"===this.params.type?(a=a||m.title,t=t||g.getCanonicalURL()||h.href,e=e||s):s&&(r=r?s+","+r:s),d.compact({id:this.id,lang:this.params.lang,size:this.params.size,type:this.params.type,text:a,url:t,via:e,related:r,button_hashtag:this.params.buttonHashtag,screen_name:this.params.screenName,hashtags:this.params.hashtags,partner:this.params.partner,original_referer:h.href,dnt:l.enabled(),time:+new Date})}),a.around("widgetDataAttributes",function(a){return"mention"==this.params.type?d.aug({"screen-name":this.params.screenName},a()):"hashtag"==this.params.type?d.aug({hashtag:this.params.buttonHashtag},a()):d.aug({url:this.params.url},a())}),a.around("scribeNamespace",function(a){return d.aug(a(),{page:"button",section:this.params.type})}),a.define("scribeImpression",function(){this.scribe({action:"impression"},{language:this.params.lang,message:[this.params.size,"nocount"].join(":")+":"})}),a.override("render",function(){var a,t=p(k,{lang:this.params.lang}),e=f.encode(this.getUrlParams()),r=x.resourceBaseUrl+t+"#"+e;switch(this.params.type){case"hashtag":a=P;break;case"mention":a=U;break;default:a=z}return this.scribeImpression(),u.all([this.sandbox.setTitle(_),this.sandbox.addClass(y),this.sandbox.addClass(a),this.sandbox.loadDocument(r)])})}var u=e(2),m=e(9),h=e(11),c=e(42),l=e(47),p=e(121),g=e(49),d=e(12),f=e(26),b=e(25),w=e(93),v=e(15),x=e(77),N=e(99),k=x.tweetButtonHtmlPath,_="Twitter Tweet Button",y="twitter-tweet-button",z="twitter-share-button",P="twitter-hashtag-button",U="twitter-mention-button",B=["share","hashtag","mention"];a.exports=w.couple(e(106),e(122),o)}});