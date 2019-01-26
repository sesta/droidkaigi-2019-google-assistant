import { sessionMap } from './timetable'

export interface Session {
  name: string
  place: string
  startDatetime: string
}

export function getSession(id: string): Session|undefined {
  if (!(id in sessionMap)) {
    // Dialogflowの設定がおかしいはずなので、エラー投げてもいいかも
    return undefined
  }

  return sessionMap[id]
}

export function getNextSessionTimeMessage(): string {
  // TODO: 時間に合わせてメッセージが変わるようにする
  return '最初のセッションは2月7日、10:00からです。'
}

