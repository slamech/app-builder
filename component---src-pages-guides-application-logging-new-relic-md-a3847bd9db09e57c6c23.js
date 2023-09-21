"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[2630],{4813:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return s}});var o=a(87462),i=a(63366),t=(a(15007),a(64983)),r=a(91515),p=["components"],l={},m={_frontmatter:l},d=r.Z;function s(e){var n=e.components,a=(0,i.Z)(e,p);return(0,t.mdx)(d,(0,o.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"forwarding-logs-to-new-relic"},"Forwarding logs to New Relic"),(0,t.mdx)("p",null,"This guide describes how to configure your App Builder application to forward application logs to your New Relic deployment."),(0,t.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"A New Relic account and an ",(0,t.mdx)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/"},(0,t.mdx)("strong",{parentName:"a"},"Ingest license API key")),".")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"A local development setup for your App Builder application.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"The latest version of ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/tools/cli_install/"},"Adobe I/O CLI"),". Check your version by running ",(0,t.mdx)("inlineCode",{parentName:"p"},"aio --version"),". Run ",(0,t.mdx)("inlineCode",{parentName:"p"},"npm install -g @adobe/aio-cli")," to update."))),(0,t.mdx)("h2",{id:"identify-the-api-key-and-base-uri"},"Identify the API key and base URI"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Log in to New Relic and navigate to the API keys screen. Pick the ",(0,t.mdx)("inlineCode",{parentName:"p"},"INGEST - LICENSE")," API key type you want to use and copy the ",(0,t.mdx)("inlineCode",{parentName:"p"},"key")," value for later use.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Depending on the region hosting your New Relic account, you must use the United States or European endpoint as a ",(0,t.mdx)("inlineCode",{parentName:"p"},"base uri"),". If you don't know the region of your New Relic instance, check the browser URL of your New Relic home. If the URL begins with ",(0,t.mdx)("inlineCode",{parentName:"p"},"https://one.newrelic.com/"),", specify ",(0,t.mdx)("inlineCode",{parentName:"p"},"https://log-api.newrelic.com/log/v1")," as the URI. If the URL begins with ",(0,t.mdx)("inlineCode",{parentName:"p"},"https://one.eu.newrelic.com/"),", specify ",(0,t.mdx)("inlineCode",{parentName:"p"},"https://log-api.eu.newrelic.com/log/v1"),"."))),(0,t.mdx)("h2",{id:"set-up-log-forwarding-in-app-builder"},"Set up Log Forwarding in App Builder"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"From the command line, navigate to the App Builder project directory on your machine.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Run the following command and supply the values from previous steps."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-terminal"},"aio app config set log-forwarding\n? select log forwarding destination: New Relic\n? base URI: <base_uri>\n? license key: <license_key>\n")),(0,t.mdx)("p",{parentName:"li"},"The URI value must include the protocol (",(0,t.mdx)("inlineCode",{parentName:"p"},"https://"),").")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Verify that the config change has taken effect."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-terminal"},"aio app config get log-forwarding\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Execute an action in your App Builder application workspace to generate logs.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Go to New Relic Home > ",(0,t.mdx)("strong",{parentName:"p"},"Logs")," and run your query.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"If you don't see any logs in New Relic, check the log forwarding errors."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-terminal"},"aio app config get log-forwarding errors\n")))),(0,t.mdx)("p",null,"If you are unable to set up log forwarding, visit the ",(0,t.mdx)("a",{parentName:"p",href:"https://experienceleaguecommunities.adobe.com/t5/app-builder/ct-p/app-builder"},"App Builder forums")," for support."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-application-logging-new-relic-md-a3847bd9db09e57c6c23.js.map