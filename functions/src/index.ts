import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'
import { https } from 'firebase-functions'

import { getNextSessionTimeMessage, getSession } from './session'

const app = dialogflow()

app.intent('Welcome', async(conv: DialogflowConversation) => {
  conv.ask('Droid Kaigi 2019です。知りたいことは何ですか？')
})

app.intent('NextSessionTime', async(conv: DialogflowConversation) => {
  conv.ask(getNextSessionTimeMessage())
  conv.ask('他に知りたいことはありますか？')
})

app.intent('SessionInfo', async(conv: DialogflowConversation) => {
  const session = getSession()
  const date = session.startDatetime.format('M月D日')
  const time = session.startDatetime.format('HH:mm')
  conv.ask(`「${session.name}」ですね。${date}に、${session.place}で${time}から始まります。`)
  conv.ask('他に知りたいことはありますか？')
})

exports.fulfillment = https.onRequest(app)
