"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[566],{566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(5155),s=a(2115),n=a(3478),r=a(5683),o=a(5565);let l=a(2818).env.NEXT_PUBLIC_GEMINI_API_KEY||"AIzaSyARZyERqMaFInsbRKUA0NxOok77syBNzK8",c=["gemini-2.0-flash","gemini-1.5-flash","gemini-1.5-pro","gemini-pro"],u=e=>"https://generativelanguage.googleapis.com/v1beta/models/".concat(e,":generateContent");u(c[0]);let d=new Map,h=0,p=e=>e.map(e=>({role:"assistant"===e.role?"model":"user",parts:[{text:e.content}]})),m=e=>e.toLowerCase().trim().replace(/\s+/g," "),g=e=>new Promise(t=>setTimeout(t,e)),f=async(e,t)=>{try{let o=m(t),f=d.get(o);if(f&&Date.now()-f.timestamp<864e5)return console.log("Using cached response"),f.response;let y=Date.now()-h;y<500&&await g(500-y);let b=function(e){let t=e.toLowerCase();if(t.includes("istanbul")&&t.includes("cappadocia")||t.includes("6 day")||t.includes("6-day")||t.includes("6 days"))return"".concat(e,' [Note for Atlas: User is asking about the "Istanbul & Cappadocia" 6-day tour package. This is our entry-level tour for first-time visitors priced from $899 per person, featuring 4 nights in Istanbul and 2 nights in Cappadocia with half-board accommodation.]');if(t.includes("super turkey")||t.includes("turkey")&&(t.includes("10 day")||t.includes("10-day")||t.includes("10 days"))||t.includes("comprehensive")&&t.includes("turkey"))return"".concat(e,' [Note for Atlas: User is asking about the "Super Turkey" 10-day comprehensive tour package priced from $1299 per person, which covers Istanbul, Cappadocia, Pamukkale, Ephesus, and Izmir/Kusadasi with 4 nights in Istanbul and 5 nights in other destinations.]');if(t.includes("super turkey")&&t.includes("dubai")||t.includes("turkey")&&t.includes("dubai")||t.includes("12 day")||t.includes("12-day")||t.includes("12 days"))return"".concat(e,' [Note for Atlas: User is asking about the "Super Turkey & Dubai" 12-day tour package priced from $1799 per person, which combines Turkish historical sites with Dubai\'s modern luxury and includes 3 nights in Istanbul, 4 nights in Turkey circuit, and 4 nights in Dubai.]');if(t.includes("optional")||t.includes("excursion")||t.includes("add-on")||t.includes("extra")||t.includes("activities")){let a="".concat(e," [Note for Atlas: User is asking about optional excursions. Our most popular optional excursions include:");return(t.includes("balloon")||t.includes("cappadocia")||t.includes("air"))&&(a+=" Hot Air Balloon in Cappadocia (approx $225 per person) - an early morning spectacular ride over the fairy chimneys, usually lasts about 1 hour in the air plus pre-flight preparations and post-flight celebration;"),(t.includes("bosphorus")||t.includes("cruise")||t.includes("istanbul"))&&(a+=" Bosphorus Cruise in Istanbul (approx $75 per person) - a scenic boat tour of the strait that separates Europe and Asia, including views of palaces, fortresses, and mansions, typically 2 hours in duration;"),(t.includes("desert")||t.includes("safari")||t.includes("dubai"))&&(a+=" Dubai Desert Safari (approx $95 per person) - includes dune bashing, camel rides, traditional entertainment, and BBQ dinner, typically 6 hours in the afternoon/evening;"),(t.includes("bath")||t.includes("hamam")||t.includes("spa"))&&(a+=" Traditional Turkish Bath Experience (approx $65 per person) - authentic hammam experience with scrub and massage, typically lasts 1-2 hours;"),(t.includes("dervish")||t.includes("dance")||t.includes("whirl"))&&(a+=" Whirling Dervishes Ceremony (approx $45 per person) - cultural show of the mystical Sufi ceremony, usually 1 hour in duration;"),a+=" Note that all optional excursions can be booked either before travel or during the tour with the local guide.]"}return t.includes("food")||t.includes("eat")||t.includes("culinary")||t.includes("cuisine")||t.includes("restaurant")||t.includes("meal")?"".concat(e," [Note for Atlas: User is asking about culinary aspects. Turkish cuisine highlights include kebabs, mezes, baklava, Turkish delight, and Turkish tea. Turkish breakfast is particularly elaborate. In Dubai, expect Arabic mezze, shawarma, and international cuisine. All tour packages include daily breakfast, and the number of included dinners varies by tour package. Special dietary requirements can be accommodated with advance notice. Meal costs for non-included meals range from $10-15 for lunch and $15-30 for dinner depending on the restaurant choice.]"):e}(t);if(b!==t){let t=function(e){for(let t=e.length-1;t>=0;t--)if("user"===e[t].role)return t;return -1}(e);-1!==t&&((e=[...e])[t]={...e[t],content:b})}let w=p(e),x=null;for(let e of c)try{console.log("Trying model: ".concat(e));let t=u(e),c=null,p=0;for(;p<3&&!c;)try{var a,i,s,n,r;let u={contents:w,generationConfig:{temperature:.7,topK:40,topP:.95,maxOutputTokens:800},safetySettings:[{category:"HARM_CATEGORY_HARASSMENT",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_HATE_SPEECH",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_SEXUALLY_EXPLICIT",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_DANGEROUS_CONTENT",threshold:"BLOCK_MEDIUM_AND_ABOVE"}]};h=Date.now();let p=await fetch("".concat(t,"?key=").concat(l),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Origin:window.location.origin},body:JSON.stringify(u),cache:"no-store"});if(!p.ok){let t=await p.text();throw console.error("API Error Status: ".concat(p.status,", Response for model ").concat(e,":"),t),Error("API Error (".concat(p.status,") with model ").concat(e,": ").concat(t||"Unknown error"))}if(!(null==(c=await p.json())?void 0:null===(r=c.candidates)||void 0===r?void 0:null===(n=r[0])||void 0===n?void 0:null===(s=n.content)||void 0===s?void 0:null===(i=s.parts)||void 0===i?void 0:null===(a=i[0])||void 0===a?void 0:a.text))throw Error("Invalid response format from ".concat(e," API"));let m=c.candidates[0].content.parts[0].text;return d.set(o,{response:m,timestamp:Date.now()}),console.log("Successfully got response from model: ".concat(e)),m}catch(e){if(++p>=3)throw e;await g(1e3*Math.pow(2,p-1))}}catch(t){console.warn("Model ".concat(e," failed, trying next model"),t),x=t instanceof Error?t:Error(String(t));continue}if(x)throw x;throw Error("All Gemini models failed to respond")}catch(e){throw console.error("Error in sendMessageToGemini:",e),Error("Failed to get response from AI service. Please try again later.")}},y=async e=>{try{let t=e.toLowerCase();for(let[e,a]of Object.entries({istanbul:"/images/tours/real-images/istanbul.jpg","blue mosque":"/images/tours/real-images/istanbul-blue-mosque.jpg","hagia sophia":"/images/tours/real-images/istanbul-hagia-sophia.jpg",cappadocia:"/images/tours/real-images/cappadocia.jpg","hot air balloon":"/images/tours/real-images/cappadocia-landscape.jpg",dubai:"/images/tours/real-images/dubai.jpg","dubai marina":"/images/destinations/dubai-marina.jpg","burj khalifa":"/images/tours/real-images/dubai-burj-khalifa.jpg",pamukkale:"/images/tours/real-images/pamukkale.jpg",antalya:"/images/tours/real-images/antalya.jpg",egypt:"/images/destinations/egypt.jpg",pyramids:"/images/destinations/egypt-pyramids.jpg",turkey:"/images/tours/real-images/istanbul.jpg",beach:"/images/tours/real-images/antalya.jpg",hotel:"/images/destinations/luxury-hotel.jpg"}))if(t.includes(e))return a;return"/images/saladino-travel-logo.png"}catch(e){return console.error("Error searching for image:",e),"/images/saladino-travel-logo.png"}};function b(){let[e,t]=(0,s.useState)(()=>{{let e=localStorage.getItem("chatMessages");if(e)try{return JSON.parse(e).map(e=>({...e,timestamp:new Date(e.timestamp)}))}catch(e){console.error("Error parsing stored messages:",e)}}return[{id:"1",content:"✨ Welcome to Saladino Travel's Premium Concierge Service! ✨\n\nI'm Atlas, your personal AI travel assistant, ready to help you plan an extraordinary journey through Turkey and Dubai.\n\nOur signature experiences include:\n\n• **Super Turkey Tour (9 days)** - Our comprehensive luxury experience with Istanbul, Cappadocia, Pamukkale, and Ephesus\n\n• **Istanbul-Cappadocia (6 days)** - The essential Turkish experience focusing on two iconic destinations\n\n• **Turkey-Dubai (11 days)** - The perfect blend of ancient wonders and ultramodern luxury\n\nHow may I assist with your travel plans today?",role:"assistant",timestamp:new Date},{id:"2",content:"I can help with specific tour details, customize your itinerary, recommend the best time to visit, or answer any questions about accommodations, activities, or cultural experiences. What aspects of your journey would you like to explore first?",role:"assistant",timestamp:new Date(Date.now()+1e3)}]});(0,s.useEffect)(()=>{if(e.length>0){let t=e.slice(-20);localStorage.setItem("chatMessages",JSON.stringify(t))}},[e]);let[a,l]=(0,s.useState)(""),[c,u]=(0,s.useState)(!1),[d,h]=(0,s.useState)(!1),p=(0,s.useRef)(null),m=(0,s.useRef)(null),[g,b]=(0,s.useState)(null),[w,x]=(0,s.useState)(!0),[v,k]=(0,s.useState)(null);(0,s.useEffect)(()=>{p.current&&w&&v&&((v.scrollHeight-v.scrollTop-v.clientHeight<100||e.length<=3)&&p.current.scrollIntoView({behavior:"smooth",block:"end"}),x(!1))},[e,w,v]),(0,s.useEffect)(()=>{m.current&&(m.current.style.height="auto",m.current.style.height="".concat(Math.min(m.current.scrollHeight,120),"px"))},[a]);let T=(0,s.useCallback)(async()=>{if(""===a.trim()||c)return;u(!0);let i=a.trim();l("");let s={id:Date.now().toString(),content:i,role:"user",timestamp:new Date};t(e=>[...e,s]),x(!0),h(!0);try{let a=function(e,t){let a=e.toLowerCase().trim();for(let e of[/^what about/i,/^how about/i,/^and\b/i,/^but\b/i,/^so\b/i,/^then\b/i,/^\?/,/^why/i,/^when/i,/^where/i,/^which/i,/^who/i,/^how/i,/^is it/i,/^are they/i,/^do they/i,/^can i/i,/^does it/i])if(e.test(a))return!0;for(let e of["it","its","it's","they","them","their","these","those","this","that","there","here"])if(RegExp("\\b".concat(e,"\\b"),"i").test(a))return!0;return a.split(" ").length<=3}(i,0),n=[...e,s];if(a){let e={id:"context-reminder-"+Date.now().toString(),content:"[Note: This appears to be a follow-up question. Remember to maintain context from the previous conversation.]",role:"assistant",timestamp:new Date,isSystemMessage:!0};n.push(e)}setTimeout(async()=>{let e;let a=n.filter(e=>!e.isSystemMessage),s=await f([{role:"assistant",content:"You are Atlas, a sophisticated yet friendly travel consultant AI for Saladino Travel. You possess extensive knowledge about travel destinations with a focus on Turkey, Dubai, Greece, and Egypt. Your tone is professional but warm and conversational - never robotic or overly formal. You communicate with precision and genuine enthusiasm while maintaining a personal connection with the traveler.\n\nYour persona:\n- Knowledgeable but conversational - you share insights naturally as a travel expert would\n- Contextually aware - you remember what users have said and reference it in your responses\n- Concise yet thorough in your explanations without overwhelming \n- Culturally astute, with deep appreciation for regional differences\n- Prioritizing authenticity over tourist clich\xe9s\n- Patient and adaptive to different travel preferences\n\nSaladino Travel specializes in these three signature tours, which you should know in detail:\n\n1. ISTANBUL AND CAPPADOCIA (6 days):\n   - Overview: Turkey's essential highlights combining Istanbul's rich history with Cappadocia's magical landscapes\n   - Key experiences: Blue Mosque, Hagia Sophia, hot air balloon over Cappadocia's fairy chimneys, Bosphorus cruise\n   - Includes: 4 nights in Istanbul, 2 nights in Cappadocia, 6 breakfasts, 2 dinners, domestic flight, guided tours\n   - Price range: Starting from $899 per person (double occupancy)\n   - Perfect for: First-time visitors to Turkey, shorter vacations, cultural enthusiasts\n\n2. SUPER TURKEY (10 days):\n   - Overview: Comprehensive Turkish experience covering Istanbul, Cappadocia, Pamukkale, Ephesus, and Izmir/Kusadasi\n   - Key experiences: All Istanbul & Cappadocia highlights plus the white terraces of Pamukkale, ancient ruins of Ephesus, and House of Virgin Mary\n   - Includes: 4 nights in Istanbul, 5 nights in various destinations with half-board, guided tours\n   - Price range: Starting from $1299 per person (double occupancy)\n   - Perfect for: In-depth Turkish cultural immersion, history lovers, longer vacations\n\n3. SUPER TURKEY AND DUBAI (12 days):\n   - Overview: Combines Turkish historical wonders with Dubai's modern luxury and desert adventures\n   - Key experiences: All Turkish highlights plus Dubai city tour, desert safari with BBQ dinner, and optional Abu Dhabi excursion\n   - Includes: 3 nights in Istanbul, 4 nights in Turkey circuit, 4 nights in Dubai, 11 breakfasts, 4 dinners\n   - Price range: Starting from $1799 per person (double occupancy)\n   - Perfect for: Travelers seeking variety, contrast between ancient and ultramodern, luxury shoppers\n\nWhen discussing these tours:\n- Connect traveler preferences to specific tour features\n- Share vivid details about the experiences (sensory descriptions)\n- Mention specific highlights that make each destination special\n- Remember the practical information (what's included/excluded)\n- Be honest about what might not be a good fit based on their needs\n\nProvide tailored recommendations based on the traveler's specific interests, preferences, and questions. Build rapport through conversation while offering valuable insights. For any query outside your knowledge base, gracefully acknowledge limitations and suggest speaking with a human travel consultant."},...a.map(e=>({role:e.role,content:e.content}))],i);(i.toLowerCase().includes("show me")||i.toLowerCase().includes("picture of")||i.toLowerCase().includes("image of")||i.toLowerCase().includes("photo of")||i.toLowerCase().includes("what does")||i.toLowerCase().includes("can i see"))&&(e=await y(i)),h(!1);let r={id:(Date.now()+1).toString(),content:s,role:"assistant",timestamp:new Date,image:e};if(t(e=>[...e,r]),v){let e=v.scrollHeight-v.scrollTop-v.clientHeight<100;x(e)}u(!1)},800)}catch(i){console.error("Error sending message to Gemini:",i),h(!1);let e="There was an issue with the travel information service.";i instanceof Error&&(i.message.includes("404")?e="The travel information service is temporarily unavailable.":i.message.includes("CORS")||i.message.toLowerCase().includes("access control")?e="A security restriction is preventing access to travel information.":(i.message.includes("Failed to fetch")||i.message.includes("network"))&&(e="A network error occurred. Please check your connection and try again."),b(e));let a={id:(Date.now()+1).toString(),content:"I apologize for the inconvenience. ".concat(e," If you need immediate assistance, please use the 'Contact Expert' option to connect with one of our travel consultants."),role:"assistant",timestamp:new Date};t(e=>[...e,a]),v&&x(v.scrollHeight-v.scrollTop-v.clientHeight<100),u(!1)}},[a,c,e]),j={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.3}},exit:{opacity:0,transition:{duration:.2}}};return(0,i.jsxs)("div",{className:"flex flex-col h-full w-full overflow-hidden bg-gradient-to-br from-white to-slate-50 shadow-xl border border-white/20 rounded-xl",children:[(0,i.jsxs)("div",{ref:e=>k(e),className:"flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(158,22,135,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.03)_1px,transparent_1px)]",children:[g&&(0,i.jsxs)("div",{className:"p-3 mb-4 bg-red-50/90 backdrop-blur-sm border border-red-100 rounded-lg text-red-600 text-sm",children:[(0,i.jsx)("p",{className:"font-medium",children:"Connection error"}),(0,i.jsx)("p",{className:"text-xs mt-1",children:"Please check your internet connection and try again."})]}),(0,i.jsxs)("div",{className:"space-y-6",children:[(0,i.jsx)(r.N,{children:e.filter(e=>!e.isSystemMessage).map(e=>(0,i.jsx)(n.P.div,{className:"flex ".concat("user"===e.role?"justify-end":"justify-start"),variants:j,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:(0,i.jsxs)("div",{className:"max-w-[80%] rounded-xl p-4 ".concat("user"===e.role?"bg-gradient-to-r from-[#9e1687] to-[#9e1687]/90 text-white shadow-lg shadow-[#9e1687]/10":"bg-white/90 backdrop-blur-sm shadow-lg shadow-[#14b8a6]/5 border border-white/60 text-gray-800"),children:[(0,i.jsx)("div",{className:"prose prose-sm max-w-none",children:e.content.split("\n").map((t,a)=>(0,i.jsx)("p",{className:"".concat("user"===e.role?"text-white":"text-gray-800"," mb-2 last:mb-0"),children:t},a))}),e.image&&(0,i.jsx)("div",{className:"mt-3 rounded-lg overflow-hidden shadow-md",children:(0,i.jsx)(o.default,{src:e.image,alt:"Destination image",width:300,height:200,className:"w-full h-auto object-cover"})}),(0,i.jsx)("div",{className:"text-xs mt-1 ".concat("user"===e.role?"text-purple-200":"text-gray-400"),children:e.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},e.id))}),d&&(0,i.jsx)("div",{className:"flex justify-start",children:(0,i.jsxs)(n.P.div,{className:"flex items-center space-x-2 px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20 max-w-[80%]",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,i.jsxs)("div",{className:"flex space-x-2",children:[(0,i.jsx)(n.P.div,{className:"w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#9e1687] to-[#14b8a6]",animate:{y:[0,-6,0],scale:[1,1.1,1]},transition:{duration:.8,repeat:1/0,repeatType:"loop",ease:"easeInOut"}}),(0,i.jsx)(n.P.div,{className:"w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#9e1687] to-[#14b8a6]",animate:{y:[0,-6,0],scale:[1,1.1,1]},transition:{duration:.8,repeat:1/0,repeatType:"loop",ease:"easeInOut",delay:.15}}),(0,i.jsx)(n.P.div,{className:"w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#9e1687] to-[#14b8a6]",animate:{y:[0,-6,0],scale:[1,1.1,1]},transition:{duration:.8,repeat:1/0,repeatType:"loop",ease:"easeInOut",delay:.3}})]}),(0,i.jsxs)("span",{className:"text-sm text-gray-700 font-medium",children:["Atlas is thinking",(0,i.jsx)(n.P.span,{animate:{opacity:[0,1,1,0]},transition:{times:[0,.3,.7,1],duration:1.5,repeat:1/0},className:"inline-block",children:"..."})]})]})}),(0,i.jsx)("div",{ref:p})]})]}),(0,i.jsxs)("div",{className:"bg-white/80 backdrop-blur-md p-4 border-t border-gray-100 shadow-lg",children:[(0,i.jsxs)("div",{className:"flex items-end space-x-2 max-w-4xl mx-auto",children:[(0,i.jsx)("textarea",{ref:m,className:"flex-1 p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9e1687] resize-none overflow-hidden shadow-inner bg-white/90",placeholder:"Inquire about destinations, itineraries, or travel advice...",value:a,onChange:e=>{l(e.target.value)},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),T())},rows:1,style:{minHeight:"44px",maxHeight:"120px"}}),(0,i.jsx)("button",{onClick:T,disabled:c||""===a.trim(),className:"p-4 rounded-xl ".concat(c||""===a.trim()?"bg-gray-200 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-[#9e1687] to-[#14b8a6] text-white shadow-md hover:shadow-lg hover:shadow-[#9e1687]/20 transition-all transform hover:scale-105 duration-300"," flex-shrink-0 flex items-center justify-center"),children:(0,i.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]}),(0,i.jsxs)("div",{className:"mt-2 text-xs text-gray-500 text-center max-w-4xl mx-auto",children:["Powered by Gemini 2.0 Flash | ",(0,i.jsx)("span",{className:"font-medium text-[#14b8a6]",children:"Saladino Travel AI Assistant"})]})]})]})}}}]);