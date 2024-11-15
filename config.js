const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_31_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzLFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICA4OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMWtac2I1NGlQNCtLT2M4ak9CcWJRNUhwY1dvbWNwVlZiTGlLYmJ4N1NBcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUGd6aHBmakRTSFNYSmZDWW16MVllQVwiLFxuICBcInBob25lSWRcIjogXCI2NTM0YzVkNS00NmJkLTQ2MDYtODY1Ni1jYTVhZWIzODUyNTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTMzLFxuICAgICAgNTAsXG4gICAgICAxNDcsXG4gICAgICAyMjIsXG4gICAgICAxOTcsXG4gICAgICAyMzEsXG4gICAgICAyNDAsXG4gICAgICAxOTMsXG4gICAgICAyMDUsXG4gICAgICA5NSxcbiAgICAgIDEyOSxcbiAgICAgIDE1MyxcbiAgICAgIDE3LFxuICAgICAgMTQsXG4gICAgICAxMTcsXG4gICAgICA2NSxcbiAgICAgIDIsXG4gICAgICAxMjgsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxMjIsXG4gICAgICAxMTcsXG4gICAgICAyLFxuICAgICAgMzQsXG4gICAgICAzMSxcbiAgICAgIDMxLFxuICAgICAgNDgsXG4gICAgICAxNzYsXG4gICAgICAxNyxcbiAgICAgIDI0OSxcbiAgICAgIDEyOSxcbiAgICAgIDcyLFxuICAgICAgNjEsXG4gICAgICAxNCxcbiAgICAgIDI0OSxcbiAgICAgIDIzNSxcbiAgICAgIDcsXG4gICAgICAyNDEsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJETEFMRjRaNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMjY3MDMyMjo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzYwMDUxNDcwNzQ2ODM6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3pJZytrR0VOdlMzYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJucEVwaFlZVU1paUd2UmVmTS9nSUFWbExPYURTZHpiaVZKcHpDQWdXaVRjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZPL1J6MktOZ0Z6cjJlVytaK3FDaE5lNUdhTGc2TVhYYkVqSFo3bFlPaWZEK2dQc3ovcnpzbTdDREFycEV0UXhFUWRRSGdyYXZCY2k2V29FSmt3N0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxHSWpZSFRrOVh5aFpML1hGaUw3RWVHZHB1VjEwak5QMU9OL0FCTHkxR0N3eEZ0dTdEc053UkRKSHErRWJlSERhRlJsdlVvWE9KTkZOZUNIaFYwQWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTI2NzAzMjI6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2ODQ3MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHaUFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdpQS5qc29uIjogIntcImtleURhdGFcIjpcIkFENUt5Q0JDZWYveldzQ2xhY0NaOUw0bDNFdXJGcFdJVVcwUDdLVzRFbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgzMDg3MjEwNCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTI0NDgxOTc4M1wifSIKfQ==" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
