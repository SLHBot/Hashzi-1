const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IG_DESC = "Downloads Image/Video From Instagram"
const NEED_WORD = "⚔Must Enter a link"
const FBDESC = "⚡Downloads Video From FaceBook"
const LOADING = "©Downloading the Video..."
const NOT_FOUNDFB = "🙇Video Not Found"
const CAPTION = "Caption"

SlHackers.addCommand({ pattern: 'ig ?(.*)', fromMe: true, desc: IG_DESC }, async (message, match) => {

  const userName = match[1]

  if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

  await message.sendMessage(infoMessage("Downloading the Post..."))

  await axios
    .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
    .then(async (response) => {
      const {
        url,
        type,
      } = response.data.result[0]

      const profileBuffer = await axios.get(url, { responseType: 'arraybuffer' })

      const msg = `${type}`

      if (msg === 'image') {
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "Made By :\n*🔰SLHαcĸerѕ Teαм Boт🔰*"
        })
      }

      if (msg === 'video') {
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "*🔰SLHαcĸerѕ Teαм Boт🔰*"
        })
      }


    })
    .catch(
      async (err) => await message.sendMessage(errorMessage("🙇Invaild Link, Please Enter a Vaild Instagram Link🙂")),
    )
},
)




SlHackers.addCommand({ pattern: 'fb ?(.*)', fromMe: true, desc: FBDESC }, async (message, match) => {

  const userName = match[1]

  if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

  await message.sendMessage(infoMessage(LOADING))

  await axios
    .get(`${Config.LOLSITE}api/facebook2?apikey=${Config.LLHAPI}&url=${userName}`)
    .then(async (response) => {
      const {
        result,
        message,
      } = response.data.result

      const profileBuffer = await axios.get(result, { responseType: 'arraybuffer' })

      const msg = `*${CAPTION}*: ${message}`

      await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
        caption: "Made By :\n*🔰SLHαcĸerѕ Teαм Boт🔰*"
      })
    })
    .catch(
      async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB)),
    )
},
)
