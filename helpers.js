/*
# Copyright (C) 2020 MuhammedKpln.
#
# SLHackers Team Bot is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# SLHackers Team Bot is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
*/

function successfullMessage(msg) {
    return "✅ *🔰SLHαcĸerѕ Teαм Boт🔰*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *🔰SLHαcĸerѕ Teαм Boт🔰*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *🔰SLHαcĸerѕ Teαм Boт🔰*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
