import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'
import { https } from 'firebase-functions'

const app = dialogflow()

app.intent('Welcome', async(conv: DialogflowConversation) => {
  conv.close('Droid Kaigi 2019です')
})

exports.fulfillment = https.onRequest(app)
