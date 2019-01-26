import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'
import { https } from 'firebase-functions'

import { getNextSessionTimeMessage } from './nextSession'

const app = dialogflow()

app.intent('Welcome', async(conv: DialogflowConversation) => {
  conv.ask('Droid Kaigi 2019です。知りたいことは何ですか？')
})

app.intent('NextSessionTime', async(conv: DialogflowConversation) => {
  conv.ask(getNextSessionTimeMessage())
})

exports.fulfillment = https.onRequest(app)
