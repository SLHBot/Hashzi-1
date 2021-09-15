const hiru = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const { errorMessage, infoMessage } = require('../helpers');
const Language = require('../language');
const PHONEDE_DESC = "It Send Github User Data."
const NEED_WORDC = "කරුණාකර නමක් ඇතුළත් කරන්න"
const USAGE = "..."
const LOADING = "පරිශීලක දත්ත සටහන් කිරීම"
const PHN_PHN = "නම:-"
const PHN_NAME = "චරිතාපදානය:-"
const PHN_RDATE = "සමාගම:-"
const PHN_SIZE = "තැපැල් ලිපිනය:-"
const PHN_ANDRO = "Public Repo:-"
const PHN_STOR = "Public Gists:-"
const PHN_DISP = "Followers:-"
const PHN_INCH = "Following:-"
const PHN_PIX = "අනුගමනය කරන්න:-"
const PHN_VPIX = "Type:-"
const PHN_CREAT = "Created at:-"
const NOT_FOUND = "*කිසිවක් සොයා ගත නොහැක!.*"



if (Config.WORKTYPE == 'private') {

  hiru.addCMD({ pattern: 'github ?(.*)', fromMe: true, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://api.github.com/users/${pname}`)
      .then(async (response) => {
        const {
          login,
          id,
          avatar_url,
          html_url,
          bio,
          name,
          company,
          public_repos,
          public_gists,
          followers,
          following,
          created_at,
          type,
          email,

        } = response.data

        const profileBuffer = await axios.get(avatar_url, { responseType: 'arraybuffer' })

        const msg = `*${PHN_PHN}* ${login}` + `\n` +
          `*${PHN_NAME}* ${bio}` + `\n` +
          `*${PHN_RDATE}* ${company}` + `\n` +
          `*${PHN_SIZE}* ${email}` + `\n` +
          `*${PHN_ANDRO}* ${public_repos}` + `\n` +
          `*${PHN_STOR}* ${public_gists}` + `\n` +
          `*${PHN_DISP}* ${followers}` + `\n` +
          `*${PHN_INCH}* ${following}` + `\n` +
          `*${PHN_PIX}* ${html_url}` + `\n` +
          `*${PHN_VPIX}* ${type}` + `\n` +
          `*${PHN_CREAT}* ${created_at}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg + '\n' + '*🚀SLHackers Team Bot*'
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + userName)),
      )
  },

  )
}

if (Config.WORKTYPE == 'public') {

  hiru.addCMD({ pattern: 'github ?(.*)', fromMe: false, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://api.github.com/users/${pname}`)
      .then(async (response) => {
        const {
          login,
          id,
          avatar_url,
          html_url,
          bio,
          name,
          company,
          public_repos,
          public_gists,
          followers,
          following,
          created_at,
          type,
          email,

        } = response.data

        const profileBuffer = await axios.get(avatar_url, { responseType: 'arraybuffer' })

        const msg = `*${PHN_PHN}* ${login}` + `\n` +
          `*${PHN_NAME}* ${bio}` + `\n` +
          `*${PHN_RDATE}* ${company}` + `\n` +
          `*${PHN_SIZE}* ${email}` + `\n` +
          `*${PHN_ANDRO}* ${public_repos}` + `\n` +
          `*${PHN_STOR}* ${public_gists}` + `\n` +
          `*${PHN_DISP}* ${followers}` + `\n` +
          `*${PHN_INCH}* ${following}` + `\n` +
          `*${PHN_VPIX}* ${type}` + `\n` +
          `*${PHN_CREAT}* ${created_at}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg + '\n' + '*🎭SLHackers-Bot*'
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + userName)),
      )
  },

  )
}
