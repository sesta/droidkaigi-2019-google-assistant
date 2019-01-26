import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'
import { https } from 'firebase-functions'

const app = dialogflow()

app.intent('Welcome', async(conv: DialogflowConversation) => {
  conv.ask('Droid Kaigi 2019です。知りたいことは何ですか？')
})

exports.fulfillment = https.onRequest(app)
