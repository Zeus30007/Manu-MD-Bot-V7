//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝙍𝙔𝙐𝙆                                                          //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //

//██████╗░██╗░░░██╗██╗░░░██╗██╗░░██╗
//██╔══██╗╚██╗░██╔╝██║░░░██║██║░██╔╝
//██████╔╝░╚████╔╝░██║░░░██║█████═╝░
//██╔══██╗░░╚██╔╝░░██║░░░██║██╔═██╗░
//██║░░██║░░░██║░░░╚██████╔╝██║░╚██╗
//╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : MANU-MD
//  * @author : Manul Official
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Manul Official
//GitHub: @manulofficial7
//WhatsApp: +94742274855
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: manulofficial7.
//   * Credit To Manul Official
//   * © 2024 MANU-MD-V7.
// 📓┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/P4WPTnf/688b50a09a2d1da547b905569aae44c9.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "GREETINGS,  HEHE",
MENU_IMG : process.env.MENU_IMG || "https://i.ibb.co/LQzvv6C/53ea9760562c3b6b78b0da3ffa1f375c.jpg",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
MENU: process.env.MENU || "true",
ANTI_BAD: process.env.ANTI_BAD || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true",
AUTO_TYPING : process.env.AUTO_TYPING || "true",
AUTO_RECORDING : process.env.AUTO_RECORDING || "true",
DELCHAT : process.env.DELCHAT || "pm",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
